import { VIDEOS, COMING_SOON, HOME_SECTIONS, YOUTUBE_MIXES } from '../data.js';
import { notifyVideoPlaying, notifyVideoIdle, bindPageYoutubeEmbeds, bindYoutubeInterrupt, destroyPageYtPlayer } from '../player.js';
import { listCatalog, getState, listHotLives, listRisingStreamers, getHotPosts, getMostPlayedSongToday } from '../store.js';
import { esc, shellPage, ytEmbedSrc } from '../ui.js';
import { resolveMediaSrc } from '../media-db.js';

const SECTION_ICONS = {
  Explore: '🧭',
  'Shorts / Clips': '▶',

  Music: '🎵',
  Videos: '🎬',
  Posts: '📸',
  Live: '🔴',
  'DBS Lounge': '💬',
  Vault: '🔐',
  Marketplace: '🛍️',
  Missions: '🎯',
};

const STAGE_TABS = [
  { id: 'toplive', label: 'Top live' },
  { id: 'videos', label: 'Videos' },
  { id: 'rising', label: 'Rising' },
  { id: 'hot', label: 'Hot lives' },
  { id: 'songs', label: 'Songs' },
];

const STAGE_CYCLE_MS = 8000;
const STAGE_PREF_KEY = 'dbs_home_stage';

function fmtViewers(n) {
  const v = Number(n) || 0;
  if (v >= 1000) return `${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}k`;
  return String(v);
}


function isHouseLive(l) {
  if (!l) return false;
  return !!(l.house || l.hostId === 'dbs' || l.hostName === 'DatBoiSkeet');
}

function isHousePost(h) {
  if (!h) return false;
  return !!(h.house || h.userId === 'dbs' || h.username === 'DatBoiSkeet');
}

/** Community-first lives: ~2–3 non-house + at most 1 house. */
function pickActivityLives(limit = 3) {
  const all = listHotLives();
  const community = all.filter((l) => !isHouseLive(l));
  const house = all.filter((l) => isHouseLive(l));
  const out = community.slice(0, Math.max(2, limit - 1));
  if (house[0]) out.push(house[0]);
  while (out.length < limit && community[out.filter((l) => !isHouseLive(l)).length]) {
    const next = community[out.filter((l) => !isHouseLive(l)).length];
    if (!next || out.includes(next)) break;
    out.push(next);
  }
  return out.slice(0, limit);
}

/** Community-first posts: ≥2–3 non-house before any house shoutout. */
function pickActivityPosts(limit = 4) {
  const all = getHotPosts(Math.max(8, limit + 4));
  const community = all.filter((p) => !isHousePost(p));
  const house = all.filter((p) => isHousePost(p));
  const out = [...community.slice(0, 3)];
  if (house[0]) out.push(house[0]);
  for (const p of community.slice(3)) {
    if (out.length >= limit) break;
    if (!out.includes(p)) out.push(p);
  }
  for (const p of house.slice(1)) {
    if (out.length >= limit) break;
    if (!out.includes(p)) out.push(p);
  }
  return out.slice(0, limit);
}

/** Highest-viewed live for Featured Stage · Top live (hot seeds + active session). */
function topLiveForBadge() {
  const session = getState().live;
  const candidates = listHotLives().map((l) => ({ ...l }));
  if (session && !session.endedAt) {
    const viewers = Math.max(0, Number(session.viewers) || 0);
    const gifts = Math.max(0, Number(session.giftsTotal) || 0);
    candidates.push({
      id: session.id || 'session',
      hostId: session.hostId,
      hostName: session.hostName || 'Creator',
      title: session.title || 'Live now',
      viewers,
      giftsTotal: gifts,
      score: viewers + gifts * 20,
      house: session.hostId === 'dbs' || session.hostName === 'DatBoiSkeet',
    });
  }
  candidates.sort(
    (a, b) =>
      (Number(b.viewers) || 0) - (Number(a.viewers) || 0) ||
      (Number(b.score) || 0) - (Number(a.score) || 0)
  );
  return candidates[0] || null;
}

function liveCard(l, { rising = false } = {}) {
  const tag = l.house ? 'House' : rising ? 'Rising' : 'Hot';
  const viewers = Number(l.viewers) || 0;
  const viewersLabel = fmtViewers(viewers);
  const extra =
    rising && l.playbacksToday != null
      ? ` · ~${esc(String(l.playbacksToday))} playbacks today`
      : '';
  return `
    <a class="home-live-card" href="#/live">
      <div class="live-hoodie" aria-hidden="false">
        <span class="live-hoodie-pill">LIVE</span>
        <span class="live-hoodie-viewers" title="${esc(viewersLabel)} watching">${esc(viewersLabel)}</span>
      </div>
      <div class="home-live-top">
        <span class="home-live-dot" aria-hidden="true"></span>
        <strong>@${esc(l.hostName)}</strong>
        <span class="chip home-live-chip">${esc(tag)}</span>
      </div>
      <div class="home-live-title">${esc(l.title || 'Live now')}</div>
      <div class="home-live-stats muted">
        ${esc(viewersLabel)} watching · ${esc(String(l.giftsTotal || 0))} gifts
        ${extra}
      </div>
      <div class="home-live-score muted">Score ${esc(String(l.score || 0))} · TEST MODE seed</div>
    </a>`;
}


function mediaChipLabel(h) {
  if (h.mediaType === 'video') return 'Video';
  if (h.image || h.mediaType === 'image') return 'Pic';
  return 'Post';
}

function activityMostPlayedRow(song) {
  if (!song) return '';
  const plays = Number(song.playsToday) || 0;
  const playsLabel = plays >= 1000 ? `${(plays / 1000).toFixed(plays >= 10000 ? 0 : 1)}k` : String(plays);
  const thumb = song.cover
    ? `<img class="la-thumb" src="${esc(song.cover)}" alt="" loading="lazy" />`
    : `<span class="la-thumb la-thumb-empty" aria-hidden="true">♪</span>`;
  const demo = song.demo ? ' · DEMO seed' : '';
  return `
    <li class="la-row la-song">
      <a class="la-main" href="#/music">
        ${thumb}
        <span class="la-body">
          <strong>${esc(song.title || 'Track')}</strong>
          <span class="la-preview">${esc(song.artist || 'DatBoiSkeet')} · ${esc(playsLabel)} plays today${esc(demo)}</span>
          <span class="la-stats muted">${esc(song.status || 'Music')} · ${esc(song.day || 'today')}</span>
        </span>
      </a>
      <span class="chip la-chip-played">Most played · today</span>
    </li>`;
}

function activityLiveRow(l) {
  const viewers = Number(l.viewers) || 0;
  const viewersLabel = fmtViewers(viewers);
  const tag = l.house ? 'House' : 'Hot';
  return `
    <li class="la-row la-live">
      <a class="la-main" href="#/live">
        <span class="la-hoodie" aria-label="Live · ${esc(viewersLabel)} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers">${esc(viewersLabel)}</span>
        </span>
        <span class="la-body">
          <strong>@${esc(l.hostName)}</strong>
          <span class="la-preview">${esc(l.title || 'Live now')}</span>
          <span class="la-stats muted">${esc(viewersLabel)} watching · ${esc(String(l.giftsTotal || 0))} gifts · score ${esc(String(l.score || 0))}</span>
        </span>
      </a>
      <span class="chip">${esc(tag)}</span>
    </li>`;
}

function activityPostRow(h) {
  const id = h.postId || h.id;
  const chip = mediaChipLabel(h);
  const thumb = h.image
    ? `<img class="la-thumb" src="${esc(h.image)}" alt="" loading="lazy" />`
    : `<span class="la-thumb la-thumb-empty" aria-hidden="true">${esc(((h.username || '?')[0] || '?').toUpperCase())}</span>`;
  const house = h.house ? ' · house' : '';
  return `
    <li class="la-row la-post">
      <a class="la-main" href="#/posts?focus=${esc(id)}">
        ${thumb}
        <span class="la-body">
          <strong>@${esc(h.username || 'creator')}</strong>
          <span class="la-preview">${esc((h.preview || h.text || 'Hot post').slice(0, 72))}</span>
          <span class="la-stats muted">♥ ${esc(String(h.likes || 0))} · 💬 ${esc(String(h.comments || 0))} · ↗ ${esc(String(h.shares || 0))} · score ${esc(String(h.score || 0))}${esc(house)}</span>
        </span>
      </a>
      <span class="chip">${esc(chip)}</span>
    </li>`;
}

function activityPicRow(c) {
  const src = c.coverRef && !String(c.coverRef).startsWith('idb:') ? c.coverRef : '';
  const thumb = src
    ? `<img class="la-thumb" src="${esc(src)}" alt="" loading="lazy" />`
    : `<span class="la-thumb la-thumb-empty" aria-hidden="true">📷</span>`;
  return `
    <li class="la-row la-pic">
      <a class="la-main" href="#/posts">
        ${thumb}
        <span class="la-body">
          <strong>${esc(c.title || 'Picture')}</strong>
          <span class="la-preview">${esc(c.artist || 'DatBoiSkeet')} · from Admin catalog</span>
          <span class="la-stats muted">High-engagement pic · TEST MODE</span>
        </span>
      </a>
      <span class="chip">Pic</span>
    </li>`;
}

function readStagePref() {
  try {
    const v = sessionStorage.getItem(STAGE_PREF_KEY);
    if (STAGE_TABS.some((t) => t.id === v)) return v;
  } catch (_) {}
  return 'toplive';
}

function writeStagePref(id) {
  try {
    sessionStorage.setItem(STAGE_PREF_KEY, id);
  } catch (_) {}
}

/** §17 featured video + §20 dashboard + §34 covers + §39 stage rotation on Home */
export function renderHome() {
  const previews = HOME_SECTIONS.map(
    (s) => `
    <a class="preview-card" href="#${s.route}${s.hash ? '#' + s.hash : ''}">
      <span class="pc-icon" aria-hidden="true">${SECTION_ICONS[s.title] || '◆'}</span>
      <strong>${esc(s.title)}</strong>
      <span class="muted">${esc(s.blurb)}</span>
    </a>`
  ).join('');

  const covers = COMING_SOON.map(
    (c) => `
    <a class="cover-card" href="#/music">
      <div class="cover-frame">
        <span class="badge-cs">${esc(c.status)}</span>
        <img src="${esc(c.cover)}" alt="${esc(c.title)}" loading="lazy" />
      </div>
      <div class="t">${esc(c.title)}</div>
      <div class="sub">${esc(c.artist)}</div>
    </a>`
  ).join('');

  const musicVideos = VIDEOS.filter((v) => (v.category || 'Music Videos') === 'Music Videos');
  const homeMVs = musicVideos.filter((v) => v.featured);
  const carouselMVs = homeMVs.length ? homeMVs : musicVideos.slice(0, 6);
  const featured = carouselMVs[0] || musicVideos[0] || VIDEOS[0];
  const mix = YOUTUBE_MIXES[0];
  const vids = carouselMVs
    .map(
      (v) => `
    <div class="vid">
      <a class="thumb" href="${esc(v.youtube)}" target="_blank" rel="noopener" aria-label="Play ${esc(v.title)}"><span>▶</span></a>
      <div>
        <strong>${esc(v.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">
          <a href="${esc(v.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a>
          · <a href="#/videos">Embed on Videos</a>
        </div>
      </div>
    </div>`
    )
    .join('');
  const mvCarousel = carouselMVs
    .map(
      (v, i) => `
    <button type="button" class="mv-pick${i === 0 ? ' on' : ''}" data-embed="${esc(v.embed)}" data-title="${esc(v.title)}" data-yt="${esc(v.youtube)}">
      <span class="mv-pick-play" aria-hidden="true">▶</span>
      <span class="mv-pick-t">${esc(v.title)}</span>
    </button>`
    )
    .join('');
  const mixHome = mix
    ? `<div class="card home-mix" id="home-dbs-mix">
        <h3>DatBoiSkeet Mix</h3>
        <p class="muted" style="margin:0 0 10px">Stream from the original YouTube Mix playlist — not rehosted.</p>
        <div class="hero-video" style="margin:0 0 10px">
          <iframe src="${esc(ytEmbedSrc(mix.embed))}" title="${esc(mix.title)}" allowfullscreen loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div class="row wrap" style="gap:8px">
          <a class="btn" href="${esc(mix.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
          <a class="btn ghost" href="#/music#youtube-mixes">Music · Mixes</a>
          <a class="btn ghost" href="#/videos">All videos</a>
        </div>
      </div>`
    : '';

  const adminPics = listCatalog({ publishedOnly: true, types: ['picture'] });
  const adminPicHtml = adminPics
    .map(
      (c) => `
    <div class="cover-card catalog-admin-home" data-id="${esc(c.id)}">
      <div class="cover-frame">
        <span class="badge-cs">From Admin</span>
        <img data-idb-src="${esc(c.coverRef && c.coverRef.startsWith('idb:') ? c.coverRef : '')}" src="${esc(c.coverRef && !c.coverRef.startsWith('idb:') ? c.coverRef : '')}" alt="${esc(c.title)}" loading="lazy" />
      </div>
      <div class="t">${esc(c.title)}</div>
      <div class="sub">${esc(c.artist)}</div>
    </div>`
    )
    .join('');

  const adminHomeVids = listCatalog({ publishedOnly: true, types: ['video'] }).slice(0, 3);
  const adminHomeVidHtml = adminHomeVids
    .map(
      (c) => `
    <div class="vid catalog-admin-home" data-id="${esc(c.id)}">
      <a class="thumb" href="${esc(c.youtube || '#/videos')}" ${c.youtube ? 'target="_blank" rel="noopener"' : ''}><span>▶</span></a>
      <div>
        <strong>${esc(c.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">${esc(c.artist)} · Admin</div>
      </div>
    </div>`
    )
    .join('');

  const liveNow = getState().live;
  const liveSessionRow =
    liveNow && !liveNow.endedAt
      ? `<li class="la-row la-session"><a class="la-main" href="#/live"><span class="la-hoodie" aria-label="Live now"><span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span><span class="live-hoodie-viewers">${esc(fmtViewers(liveNow.viewers || 0))}</span></span><span class="la-body"><strong>@${esc(liveNow.hostName)}</strong><span class="la-preview">${esc(liveNow.title || 'Live now')}</span><span class="la-stats muted">${esc(String(liveNow.viewers || 0))} watching · your session</span></span></a><span class="chip">Live</span></li>`
      : '';

  /* Live activity · community-first high-engagement mix + most played song */
  const mostPlayed = getMostPlayedSongToday();
  const mostPlayedRow = activityMostPlayedRow(mostPlayed);
  const activityLives = pickActivityLives(3);
  const activityPosts = pickActivityPosts(4);
  const activityPics = listCatalog({ publishedOnly: true, types: ['picture'] }).slice(0, 2);
  const activityLiveRows = activityLives.map(activityLiveRow).join('');
  const activityPostRows = activityPosts.map(activityPostRow).join('');
  const activityPicRows = activityPics.map(activityPicRow).join('');
  const houseKickers = `
        <li class="la-row la-kicker"><span class="la-main la-kicker-main"><span class="la-body"><strong>Ladies Only</strong><span class="la-preview">Art live on Music · playback when it drops</span></span></span><span class="chip">Music</span></li>
        <li class="la-row la-kicker"><a class="la-main" href="#/restream"><span class="la-body"><strong>DBS Restream</strong><span class="la-preview">Stream to YouTube, TikTok, Twitch &amp; more — free inside DBS</span></span></a><span class="chip">Restream</span></li>`;
  const activityEmpty =
    !mostPlayedRow && !activityLiveRows && !activityPostRows && !activityPicRows && !liveSessionRow
      ? `<li class="la-row"><span class="la-main la-kicker-main"><span class="la-body"><span class="la-preview muted">No hot activity yet — engage on Posts / go Live to spike the feed.</span></span></span><span class="chip">TEST</span></li>`
      : '';
  /* Order: most played → live session → community lives → community posts → pics → kickers */
  const liveActivityList = `${mostPlayedRow}${liveSessionRow}${activityLiveRows}${activityPostRows}${activityPicRows}${houseKickers}${activityEmpty}`;

  /* §39 stage panels */
  const activeTab = readStagePref();
  const stageTabs = STAGE_TABS.map(
    (t) => `
    <button type="button" class="home-stage-tab${t.id === activeTab ? ' on' : ''}" role="tab"
      aria-selected="${t.id === activeTab ? 'true' : 'false'}" data-stage="${t.id}" id="stage-tab-${t.id}">
      ${esc(t.label)}
    </button>`
  ).join('');

  const hotLives = listHotLives().slice(0, 5);
  const rising = listRisingStreamers().slice(0, 5);

  const hotCards = hotLives.map((l) => liveCard(l)).join('') || `<p class="muted">No hot lives yet — seed from Live / Hot Feed.</p>`;
  const risingCards = rising.map((l) => liveCard(l, { rising: true })).join('') || `<p class="muted">No rising streamers yet.</p>`;

  const songCards = COMING_SOON.map(
    (c) => `
    <a class="home-song-card" href="#/music">
      <img src="${esc(c.cover)}" alt="" loading="lazy" />
      <div>
        <strong>${esc(c.title)}</strong>
        <div class="muted" style="font-size:12px">${esc(c.artist)} · ${esc(c.status)}</div>
        <span class="chip" style="margin-top:6px">Enhancement · Coming Soon</span>
      </div>
    </a>`
  ).join('');

  const topLive = topLiveForBadge();
  const topLiveInner = topLive
    ? liveCard(topLive)
    : `<p class="muted">No live streams right now — go Live or check Hot Feed.</p>`;

  const toplivePanel = `
    <div class="home-stage-panel${activeTab === 'toplive' ? ' on' : ''}" data-panel="toplive" role="tabpanel" id="homeTopLivePanel" ${activeTab === 'toplive' ? '' : 'hidden'}>
      <p class="muted home-stage-lead">Top live · highest viewers right now. Red LIVE hoodie on the card · updates as rankings change.</p>
      <div class="home-live-grid" id="homeTopLiveGrid">${topLiveInner}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`;

  const videosPanel = `
    <div class="home-stage-panel${activeTab === 'videos' ? ' on' : ''}" data-panel="videos" role="tabpanel" ${activeTab === 'videos' ? '' : 'hidden'}>
      <div class="hero-video" id="homeFeaturedVideo">
        <iframe
          id="homeFeaturedIframe"
          src="${esc(ytEmbedSrc(featured.embed))}"
          title="${esc(featured.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"></iframe>
      </div>
      <div class="hero-caption">
        <strong id="homeFeaturedTitle">${esc(featured.title)}</strong>
        <a href="#/videos">All videos →</a>
      </div>
      <div class="mv-carousel" role="tablist" aria-label="Official music videos">${mvCarousel}</div>
    </div>`;

  const risingPanel = `
    <div class="home-stage-panel${activeTab === 'rising' ? ' on' : ''}" data-panel="rising" role="tabpanel" ${activeTab === 'rising' ? '' : 'hidden'}>
      <p class="muted home-stage-lead">Rising streamers · mid-tier creators from §38 Hot Feed signals (non-house). TEST MODE seeds.</p>
      <div class="home-live-grid">${risingCards}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`;

  const hotPanel = `
    <div class="home-stage-panel${activeTab === 'hot' ? ' on' : ''}" data-panel="hot" role="tabpanel" ${activeTab === 'hot' ? '' : 'hidden'}>
      <p class="muted home-stage-lead">Hot lives · ranked by viewers + gifts score (house OK). Strong playbacks / spikes from earlier today count.</p>
      <div class="home-live-grid">${hotCards}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`;

  const songsPanel = `
    <div class="home-stage-panel${activeTab === 'songs' ? ' on' : ''}" data-panel="songs" role="tabpanel" ${activeTab === 'songs' ? '' : 'hidden'}>
      <p class="muted home-stage-lead">Enhancements &amp; songs · Coming Soon covers + featured tracks. Upload &amp; sell on Music when Commerce lands.</p>
      <div class="home-song-grid">${songCards}
        <a class="home-song-card home-song-promo" href="#/pricing?focus=sell">
          <div class="home-song-promo-icon" aria-hidden="true">♪</div>
          <div>
            <strong>Sell your music on DBS</strong>
            <div class="muted" style="font-size:12px">Artists &amp; producers · creator-friendly · DEMO</div>
          </div>
        </a>
      </div>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <a class="btn ghost" href="#/music">Music</a>
        <a class="btn ghost" href="#/pricing?focus=sell">Start selling</a>
      </div>
    </div>`;

  const stageBlock = `
    <div class="home-stage card" id="homeFeaturedStage" data-active="${esc(activeTab)}">
      <div class="home-stage-head">
        <div>
          <p class="kicker" style="margin:0">Featured stage</p>
          <h2 class="home-stage-title">Top live · Videos · Rising · Hot · Songs</h2>
        </div>
        <span class="chip chip-audit">TEST MODE · auto-cycle</span>
      </div>
      <div class="home-stage-tabs" role="tablist" aria-label="Featured stage">${stageTabs}</div>
      <div class="home-stage-panels">
        ${toplivePanel}
        ${videosPanel}
        ${risingPanel}
        ${hotPanel}
        ${songsPanel}
      </div>
    </div>`;


  const bwPreview = `
    <div class="card bw-preview" id="home-blockwars-preview">
      <div class="bw-preview-head">
        <div>
          <p class="kicker" style="margin:0">Games · Coming soon</p>
          <h3 class="bw-preview-title">Block Wars</h3>
        </div>
        <span class="chip bw-preview-chip">Preview · not live</span>
      </div>
      <p class="muted bw-preview-lead">NY · LA · Chicago fighters — teaser only. Gameplay ships later.</p>
      <div class="bw-preview-frame">
        <video
          id="bwPreviewVideo"
          class="bw-preview-video"
          poster="/blockwars-preview/frames/01.jpg"
          src="/blockwars-preview/blockwars-fighters-preview.mp4"
          playsinline
          webkit-playsinline
          preload="metadata"
          controls
          controlslist="nodownload noplaybackrate"
          aria-label="Block Wars fighter preview"></video>
        <button type="button" class="bw-preview-play" id="bwPreviewPlay" aria-label="Play Block Wars preview">
          <span class="bw-preview-play-icon" aria-hidden="true">▶</span>
          <span class="bw-preview-play-label">Watch preview</span>
        </button>
      </div>
      <div class="bw-preview-foot muted">~12s fighter slideshow · Coming soon on DBS</div>
    </div>`;

  const sellPromo = `
    <div class="card home-sell-promo" id="home-creator-sell-promo">
      <p class="kicker">Creators · sell on DBS</p>
      <h3 style="margin:0 0 8px">Upload music, videos, beats &amp; list merch</h3>
      <p style="margin:0 0 8px">Artists and producers can sell <strong>music, videos, beats,</strong> and merch on DBS. We keep a fair, creator-friendly cut — and merch runs on <strong>your</strong> payments (DBS is not the merchant of record).</p>
      <p class="muted" style="margin:0 0 12px;font-size:12px">Rules, fees, and the apply form live on Pricing — tap below. No fee numbers on Home.</p>
      <div class="row wrap" style="gap:8px;margin-top:4px">
        <a class="btn primary" href="#/pricing?focus=sell">Start selling · rules &amp; fees</a>
        <a class="btn ghost" href="#/music">Music</a>
        <a class="btn ghost" href="#/videos">Videos</a>
        <a class="btn ghost" href="#/music">Beats</a>
        <a class="btn ghost" href="#/merch">Merch</a>
      </div>
      <p class="chip" style="margin-top:10px">TEST MODE · no payment processing</p>
    </div>`;

  const body = `
    ${stageBlock}

    ${bwPreview}

    ${sellPromo}

    ${mixHome}

    <p class="kicker">Coming Soon</p>
    <h2 style="margin:0 0 8px;font-size:15px;text-transform:uppercase;letter-spacing:.04em">Upcoming Releases</h2>
    <div class="cover-row" style="margin-bottom:18px">${covers}${adminPicHtml}</div>

    <p class="kicker">DatBoiSkeet Network</p>
    <h2 style="margin:0 0 8px;font-size:15px;text-transform:uppercase;letter-spacing:.04em">Explore DBS</h2>
    <div class="section-swipe" style="margin-bottom:18px">${previews}</div>

    <div class="card live-activity" id="home-live-activity">
      <div class="live-activity-head">
        <h3><span class="dot" aria-hidden="true"></span> Live activity</h3>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted live-activity-lead">Most played today · hot lives · high-engagement posts from creators &amp; community · house updates.</p>
      <ul class="list-plain live-activity-list">
        ${liveActivityList}
      </ul>
      <div class="row wrap live-activity-links">
        <a class="btn ghost" href="#/music">Music</a>
        <a class="btn ghost" href="#/live">Live</a>
        <a class="btn ghost" href="#/posts">Posts · Hot</a>
      </div>
    </div>

    <div class="card video-list">
      <h3>Official DatBoiSkeet MVs</h3>
      ${vids}${adminHomeVidHtml}
      <a class="btn ghost block" href="#/videos" style="margin-top:10px">All videos</a>
    </div>
  `;

  return shellPage('Home', body, {
    lead: 'Featured stage · Top live · Block Wars preview · Live activity (hot lives · high-engagement posts from creators &amp; community · house updates) · Mix · Coming Soon · creator sell DEMO.',
  });
}

export function bindHome(root) {
  root.querySelectorAll('[data-idb-src]').forEach(async (el) => {
    const ref = el.getAttribute('data-idb-src');
    if (!ref) return;
    const src = await resolveMediaSrc(ref);
    if (src && (el.tagName === 'IMG' || el.tagName === 'VIDEO' || el.tagName === 'AUDIO')) {
      el.src = src;
    }
  });

  const iframe = root.querySelector('#homeFeaturedIframe');
  const titleEl = root.querySelector('#homeFeaturedTitle');
  root.querySelectorAll('.mv-pick').forEach((btn) => {
    btn.addEventListener('click', () => {
      root.querySelectorAll('.mv-pick').forEach((b) => b.classList.remove('on'));
      btn.classList.add('on');
      const embed = btn.dataset.embed || '';
      if (iframe && embed) {
        destroyPageYtPlayer(iframe);
        iframe.removeAttribute('data-dbs-yt-bound');
        iframe.src = embed + (embed.includes('?') ? '&' : '?') + 'rel=0';
        iframe.title = btn.dataset.title || '';
        bindYoutubeInterrupt(iframe);
      }
      if (titleEl) titleEl.textContent = btn.dataset.title || '';
    });
  });

  // §17: YT IFrame API binder (real play inside embed) — Media Links player.js
  bindPageYoutubeEmbeds(root);


  /* Block Wars Coming Soon teaser — tap-to-play; interrupt sticky on play (§17) */
  const bwVid = root.querySelector('#bwPreviewVideo');
  const bwPlay = root.querySelector('#bwPreviewPlay');
  if (bwVid) {
    const syncBwOverlay = () => {
      if (!bwPlay) return;
      const show = bwVid.paused || bwVid.ended;
      bwPlay.hidden = !show;
      bwPlay.setAttribute('aria-hidden', show ? 'false' : 'true');
    };
    bwPlay?.addEventListener('click', (e) => {
      e.preventDefault();
      bwVid.play().catch(() => {});
    });
    bwVid.addEventListener('play', () => {
      notifyVideoPlaying();
      syncBwOverlay();
    });
    bwVid.addEventListener('pause', () => {
      notifyVideoIdle();
      syncBwOverlay();
    });
    bwVid.addEventListener('ended', () => {
      notifyVideoIdle();
      syncBwOverlay();
    });
    bwVid.addEventListener('pointerdown', () => {
      if (!bwVid.paused) notifyVideoPlaying();
    });
    syncBwOverlay();
  }

  /* t227u — Top live panel tracks highest-viewed live (~20s) */
  const HOME_TOP_LIVE_MS = 20000;
  function refreshTopLivePanel() {
    const grid = root.querySelector('#homeTopLiveGrid');
    if (!grid || !document.body.contains(grid)) return false;
    const top = topLiveForBadge();
    grid.innerHTML = top
      ? liveCard(top)
      : `<p class="muted">No live streams right now — go Live or check Hot Feed.</p>`;
    return true;
  }
  let topLiveTimer = setInterval(() => {
    if (!refreshTopLivePanel()) {
      clearInterval(topLiveTimer);
      topLiveTimer = null;
    }
  }, HOME_TOP_LIVE_MS);
  const onVis = () => {
    if (document.visibilityState === 'visible') refreshTopLivePanel();
  };
  document.addEventListener('visibilitychange', onVis);
  window.addEventListener('focus', refreshTopLivePanel);

  /* §39 stage tabs + auto-cycle */
  const stage = root.querySelector('#homeFeaturedStage');
  if (!stage) {
    const obsEarly = new MutationObserver(() => {
      if (!document.body.contains(root)) {
        if (topLiveTimer) clearInterval(topLiveTimer);
        document.removeEventListener('visibilitychange', onVis);
        window.removeEventListener('focus', refreshTopLivePanel);
        obsEarly.disconnect();
      }
    });
    obsEarly.observe(document.body, { childList: true, subtree: true });
    return;
  }

  const tabs = [...root.querySelectorAll('.home-stage-tab')];
  const panels = [...root.querySelectorAll('.home-stage-panel')];
  let paused = false;
  let timer = null;

  const reduceMotion =
    (typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) ||
    document.documentElement.classList.contains('reduce-motion') ||
    document.body?.classList?.contains('reduce-motion');

  function showStage(id) {
    if (!STAGE_TABS.some((t) => t.id === id)) id = 'toplive';
    stage.dataset.active = id;
    writeStagePref(id);
    tabs.forEach((t) => {
      const on = t.dataset.stage === id;
      t.classList.toggle('on', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    panels.forEach((p) => {
      const on = p.dataset.panel === id;
      p.classList.toggle('on', on);
      if (on) p.removeAttribute('hidden');
      else p.setAttribute('hidden', '');
    });
  }

  function nextStage() {
    const ids = STAGE_TABS.map((t) => t.id);
    const cur = stage.dataset.active || 'toplive';
    const i = ids.indexOf(cur);
    showStage(ids[(i + 1) % ids.length]);
  }

  function startCycle() {
    stopCycle();
    if (paused || reduceMotion) return;
    timer = setInterval(nextStage, STAGE_CYCLE_MS);
  }

  function stopCycle() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  tabs.forEach((t) => {
    t.addEventListener('click', () => {
      paused = true;
      stopCycle();
      showStage(t.dataset.stage);
    });
  });

  const initial = stage.dataset.active || readStagePref();
  showStage(initial);
  // Pause cycle if user/seed already chose a tab (sessionStorage) so screenshots & intent stick
  let hadPref = false;
  try { hadPref = !!sessionStorage.getItem(STAGE_PREF_KEY); } catch (_) {}
  if (hadPref) {
    paused = true;
  } else {
    startCycle();
  }

  // Clean up when navigating away (router re-renders)
  const obs = new MutationObserver(() => {
    if (!document.body.contains(stage)) {
      stopCycle();
      if (topLiveTimer) {
        clearInterval(topLiveTimer);
        topLiveTimer = null;
      }
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('focus', refreshTopLivePanel);
      obs.disconnect();
    }
  });
  obs.observe(document.body, { childList: true, subtree: true });
}
