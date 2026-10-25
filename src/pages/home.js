import { VIDEOS, COMING_SOON, HOME_SECTIONS, YOUTUBE_MIXES } from '../data.js';
import { listCatalog, getState } from '../store.js';
import { esc, shellPage } from '../ui.js';
import { resolveMediaSrc } from '../media-db.js';

const SECTION_ICONS = {
  Music: '🎵',
  Videos: '🎬',
  Posts: '📸',
  Live: '🔴',
  'DBS Lounge': '💬',
  Vault: '🔐',
  Marketplace: '🛍️',
  Missions: '🎯',
};

/** §17 featured video + §20 dashboard + §34 covers on Home */
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
  const homeMVs = musicVideos.filter((v) => v.featured) ;
  const carouselMVs = homeMVs.length ? homeMVs : musicVideos.slice(0, 6);
  const featured = carouselMVs[0] || musicVideos[0] || VIDEOS[0];
  const mix = YOUTUBE_MIXES[0];
  const vids = carouselMVs.map(
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
  ).join('');
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
          <iframe src="${esc(mix.embed)}?rel=0" title="${esc(mix.title)}" allowfullscreen loading="lazy"
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
  const liveRow =
    liveNow && !liveNow.endedAt
      ? `<li><span><a href="#/live" style="color:var(--sk)">@${esc(liveNow.hostName)} is live — ${esc(liveNow.title)}</a> · ${esc(String(liveNow.viewers || 0))} watching</span><span class="chip">Live</span></li>`
      : `<li><span>No creators live — <a href="#/live" style="color:var(--sk)">Go live</a></span><span class="chip">Live</span></li>`;

  const body = `
    <div class="home-hero-block">
      <p class="kicker">Featured music videos</p>
      <div class="hero-video" id="homeFeaturedVideo">
        <iframe
          id="homeFeaturedIframe"
          src="${esc(featured.embed)}?rel=0"
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
    </div>

    ${mixHome}

    <p class="kicker">Coming Soon</p>
    <h2 style="margin:0 0 8px;font-size:15px;text-transform:uppercase;letter-spacing:.04em">Upcoming Releases</h2>
    <div class="cover-row" style="margin-bottom:18px">${covers}${adminPicHtml}</div>

    <p class="kicker">DatBoiSkeet Network</p>
    <h2 style="margin:0 0 8px;font-size:15px;text-transform:uppercase;letter-spacing:.04em">Explore DBS</h2>
    <div class="section-swipe" style="margin-bottom:18px">${previews}</div>

    <div class="card live-activity">
      <h3><span class="dot" aria-hidden="true"></span> Live activity</h3>
      <ul class="list-plain">
        <li><span>DatBoiSkeet — Long Story Short cover dropped · Coming Soon</span><span class="chip">Music</span></li>
        <li><span>Ladies Only art live on Music · playback when it drops</span><span class="chip">Music</span></li>
        <li><span>Official MVs + DatBoiSkeet Mix on Videos &amp; Music</span><span class="chip">Videos</span></li>
        <li><span>Foreign X-Change hats, tees &amp; jackets — shop external</span><span class="chip">Merch</span></li>
        ${liveRow}
        <li><span>Stream to YouTube, TikTok, Twitch &amp; more — <a href="#/restream" style="color:var(--sk)">DBS Restream</a> (free inside DBS)</span><span class="chip">Restream</span></li>
      </ul>
    </div>

    <div class="card video-list">
      <h3>Official DatBoiSkeet MVs</h3>
      ${vids}${adminHomeVidHtml}
      <a class="btn ghost block" href="#/videos" style="margin-top:10px">All videos</a>
    </div>
  `;

  return shellPage('Home', body, { lead: 'Music-first dashboard · Long Story Short, Ladies Only, official MVs & Foreign X-Change.' });
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
        iframe.src = embed + (embed.includes('?') ? '&' : '?') + 'rel=0';
        iframe.title = btn.dataset.title || '';
      }
      if (titleEl) titleEl.textContent = btn.dataset.title || '';
      // §17 safe hook: UI mini-player has no real audio; reset play affordance when MV focuses
      const mpPlay = document.getElementById('mpPlay');
      if (mpPlay) {
        mpPlay.textContent = '▶';
        mpPlay.dataset.playing = '0';
      }
    });
  });
}
