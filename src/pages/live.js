import {
  getState,
  startLiveDemo,
  endLiveDemo,
  sendLiveChat,
  sendLiveSupport,
  bumpLiveViewers,
  getLiveHistory,
  listHotLives,
  simulateLiveSpike,
  LIVE_SONG_REQUEST_PACKS,
  listLiveSongRequestQueue,
  submitLiveSongRequest,
  playLiveSongRequest,
  skipLiveSongRequest,
  completeLiveSongRequest,
  addWalletCredit,
  LIVE_GIFT_CATALOG,
  COIN_PACKAGES,
  LIVE_GIFT_CONFIRM_COINS,
  getCoinBalance,
  buyCoins,
  listLiveGiftCatalog,
  listLiveGiftHistory,
  sendLiveGift,
} from '../store.js';
import { esc, toast, shellPage, timeAgo } from '../ui.js';
import { navigate } from '../router.js';
import { notifyLiveOpen, notifyLiveClosed } from '../player.js';

function refresh() {
  navigate('#/live');
}

function fmtMoney(n) {
  return '$' + Number(n || 0).toFixed(2);
}

function fmtCount(n) {
  const v = Number(n) || 0;
  if (v >= 1000) return (v / 1000).toFixed(v >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K';
  return String(v);
}

/** Live IA category chips — Live · Open Mic (24/7) · Spotlight (24/7) */
function renderLiveCategoryChips(active = 'live') {
  const items = [
    { id: 'live', href: '#/live', label: 'Live' },
    { id: 'openmic', href: '#/openmic', label: 'Open Mic / Talent Discovery (24/7)' },
    { id: 'spotlight', href: '#/spotlight', label: 'Spotlight (24/7)' },
  ];
  const chips = items
    .map((it) => {
      const on = it.id === active ? ' on' : '';
      const aria = it.id === active ? ' aria-current="page"' : '';
      return `<a class="live-cat-chip${on}" href="${it.href}"${aria}>${esc(it.label)}</a>`;
    })
    .join('');
  return `
    <nav class="live-cat-chips" aria-label="Live categories">
      ${chips}
    </nav>`;
}

function recentlySpiked(live) {
  if (!live?.spikedAt) return false;
  return Date.now() - Number(live.spikedAt) < 15 * 60 * 1000;
}

function renderHotLivesRail() {
  const lives = listHotLives();
  const cards = lives
    .map((live) => {
      const hot = recentlySpiked(live);
      return `
      <article class="hot-live-card${hot ? ' is-hot' : ''}${live.house ? ' is-house' : ''}" data-live-id="${esc(live.id)}">
        <div class="live-hoodie" aria-label="Live · ${esc(fmtCount(live.viewers))} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" title="${esc(fmtCount(live.viewers))} watching">${esc(fmtCount(live.viewers))}</span>
        </div>
        <div class="hot-live-body">
          <div class="hot-live-host">@${esc(live.hostName)}</div>
          <div class="hot-live-title">${esc(live.title)}</div>
          <div class="hot-live-chips">
            <span class="chip">${esc(fmtCount(live.viewers))} watching</span>
            ${live.house ? '<span class="chip chip-ok">House</span>' : ''}
            ${hot ? '<span class="chip live-chip"><span class="dot" aria-hidden="true"></span> HOT</span>' : ''}
          </div>
          <div class="hot-live-actions row wrap">
            <button type="button" class="btn ghost hot-live-watch" data-id="${esc(live.id)}" data-host="${esc(live.hostName)}">Watch demo</button>
            <button type="button" class="btn hot-live-spike" data-id="${esc(live.id)}">Simulate spike</button>
          </div>
        </div>
      </article>`;
    })
    .join('');

  return `
    <div class="card hot-lives-rail" id="hotLivesRail">
      <div class="row wrap" style="justify-content:space-between;align-items:baseline;gap:8px">
        <h3 style="margin:0">Hot lives · Top streamers</h3>
        <span class="chip">score · viewers + engagement</span>
      </div>
      <p class="muted" style="margin:6px 0 10px;font-size:12px">TEST MODE · seeded demo · not third-party scrape · house + community</p>
      <div class="hot-lives-track">
        ${cards || '<p class="muted">No hot lives yet.</p>'}
      </div>
    </div>`;
}

function statusChip(st) {
  const s = String(st || 'queued');
  if (s === 'playing') return '<span class="chip live-chip">Playing</span>';
  if (s === 'played') return '<span class="chip chip-ok">Played</span>';
  if (s === 'skipped') return '<span class="chip">Skipped</span>';
  return '<span class="chip">Queued</span>';
}


function giftEmoji(slug) {
  const map = {
    rose: '🌹',
    'big-love': '💖',
    'turn-up': '🔥',
    'cash-rain': '💵',
    'bottle-pop': '🍾',
    'money-gun': '💸',
    'diamond-drip': '💎',
    'foreign-whip': '🚗',
    helicopter: '🚁',
    'private-jet': '✈️',
    'dbs-crown': '👑',
    'dbs-universe': '🌌',
  };
  return map[slug] || '🎁';
}

function fmtCoins(n) {
  const v = Number(n) || 0;
  if (v >= 1000) return (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'K';
  return String(v);
}

/** t185u · Live gift tray + coin packs during active live (viewer send · overlay stubs). */
function renderLiveGifts(live, user) {
  if (!live || live.endedAt) return '';
  const coinsBal = getCoinBalance();
  const catalog = listLiveGiftCatalog();
  const history = listLiveGiftHistory(live.id).slice(0, 12);
  const giftCards = catalog
    .map((g) => {
      const confirm = g.coins >= LIVE_GIFT_CONFIRM_COINS;
      return `
      <button type="button" class="lg-gift" data-slug="${esc(g.slug)}" data-coins="${g.coins}" data-confirm="${confirm ? '1' : '0'}" title="${esc(g.animation)}">
        <span class="lg-gift-emoji" aria-hidden="true">${giftEmoji(g.slug)}</span>
        <span class="lg-gift-name">${esc(g.name)}</span>
        <span class="lg-gift-price">${esc(fmtCoins(g.coins))} · ${fmtMoney(g.usd)}</span>
        ${confirm ? '<span class="chip lg-confirm-chip">Confirm</span>' : ''}
      </button>`;
    })
    .join('');

  const packBtns = COIN_PACKAGES.map(
    (p) =>
      `<button type="button" class="btn ghost lg-buy" data-coins="${p.coins}">${esc(fmtCoins(p.coins))} · ${fmtMoney(p.usd)}</button>`
  ).join('');

  const histRows = history.length
    ? history
        .map(
          (h) => `<li class="lg-hist-row">
            <span class="lg-hist-emoji" aria-hidden="true">${giftEmoji(h.giftSlug)}</span>
            <span><strong>${esc(h.giftName)}</strong> · @${esc(h.fromUser)} · ${esc(fmtCoins(h.coins))} coins</span>
          </li>`
        )
        .join('')
    : '<li class="muted" style="padding:6px 0">No gifts yet this Live.</li>';

  const sendBlock = user
    ? `
      <div class="lg-tray" id="liveGiftTray" role="list" aria-label="Live gifts">
        ${giftCards}
      </div>
      <div class="row wrap" style="gap:8px;margin-top:12px;align-items:center">
        <span class="chip">Coins ${esc(fmtCoins(coinsBal))} · TEST MODE</span>
        <a class="btn ghost" href="#/wallet" style="font-size:12px">Wallet</a>
      </div>
      <details class="lg-buy-details" style="margin-top:10px">
        <summary class="muted" style="cursor:pointer;font-size:13px">Buy coins · TEST MODE local credit</summary>
        <div class="row wrap lg-buy-row" style="gap:6px;margin-top:8px">${packBtns}</div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">100 coins = $2 · demo only · not a real charge</p>
      </details>`
    : `
      <div class="card" style="margin-top:8px;padding:12px">
        <p class="muted" style="margin:0">Sign in to send gifts during this Live.</p>
        <a class="btn primary" href="#/profile" style="margin-top:8px">Sign in</a>
      </div>`;

  return `
    <div class="card live-gifts" id="liveGifts">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:baseline">
        <h3 style="margin:0">Gifts</h3>
        <span class="chip">TEST MODE · coins · catalog USD as net</span>
      </div>
      <p class="muted" style="margin:6px 0 12px;font-size:12px">
        Original DBS catalog · send during Live · expensive gifts (Money Gun+) ask to confirm ·
        viewers see names &amp; coins only
      </p>
      <div class="live-gift-overlay" id="liveGiftOverlay" aria-live="polite" aria-atomic="true"></div>
      ${sendBlock}
      <h4 style="margin:14px 0 8px;font-size:13px">Recent gifts</h4>
      <ul class="list-plain lg-hist" id="lgHist">${histRows}</ul>
    </div>`;
}

/** Song request packs + queue during an active live (viewer request · host Play/Skip). */
function renderSongRequests(live, user) {
  if (!live || live.endedAt) return '';
  const isHost = !!(user && live.hostId === user.id);
  const wallet = Number(getState().wallet?.balance || 0);
  const queue = listLiveSongRequestQueue(live.id);
  const packCards = LIVE_SONG_REQUEST_PACKS.map((p) => {
    const save = p.save > 0
      ? `<span class="chip chip-ok lsr-save">Save $${p.save}</span>`
      : '';
    return `
      <button type="button" class="lsr-pack" data-pack="${p.pack}" data-price="${p.price}" aria-pressed="false">
        <strong>${esc(p.label)}</strong>
        <span class="lsr-pack-price">${fmtMoney(p.price)}</span>
        ${save}
      </button>`;
  }).join('');

  const queueRows = queue.length
    ? queue
        .map((row) => {
          const hostBtns = isHost
            ? `<div class="row wrap lsr-host-acts" style="gap:6px">
                 ${
                   row.status === 'queued' || row.status === 'playing'
                     ? `<button type="button" class="btn primary lsr-play" data-rid="${esc(row.requestId)}" data-si="${row.songIndex}">${row.status === 'playing' ? 'Mark played' : 'Play'}</button>
                        <button type="button" class="btn ghost lsr-skip" data-rid="${esc(row.requestId)}" data-si="${row.songIndex}">Skip</button>`
                     : ''
                 }
               </div>`
            : '';
          return `
          <li class="lsr-queue-row" data-status="${esc(row.status)}">
            <div class="lsr-queue-main">
              <strong>${esc(row.title)}</strong>
              <span class="muted" style="font-size:12px">@${esc(row.username)} · ${esc(String(row.pack))}‑pack</span>
            </div>
            ${statusChip(row.status)}
            ${hostBtns}
          </li>`;
        })
        .join('')
    : '<li class="muted" style="padding:8px 0">No song requests yet · fans can buy a pack below.</li>';

  const formBlock = user
    ? `
      <div class="lsr-form" id="lsrForm">
        <p class="muted" style="margin:0 0 8px;font-size:12px">Pick a pack, enter song title(s), then pay from demo Wallet · <span class="chip">TEST MODE</span></p>
        <div class="lsr-packs" id="lsrPacks" role="group" aria-label="Song request packs">
          ${packCards}
        </div>
        <div id="lsrTitleFields" class="lsr-titles"></div>
        <div class="row wrap" style="gap:8px;margin-top:10px;align-items:center">
          <button type="button" class="btn primary" id="lsrSubmit">Request songs · pay</button>
          <button type="button" class="btn ghost" id="lsrSeedWallet">+ $50 demo credit</button>
          <span class="chip">Wallet ${fmtMoney(wallet)}</span>
        </div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">3‑song pack is <strong>$45</strong> · promoted as <strong>Save $5</strong> (not $50). Demo charge only.</p>
      </div>`
    : `
      <div class="card" style="margin-top:10px;padding:12px">
        <p class="muted" style="margin:0">Sign in to request songs during this Live.</p>
        <a class="btn primary" href="#/profile" style="margin-top:8px">Sign in</a>
      </div>`;

  return `
    <div class="card live-song-requests" id="liveSongRequests">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:baseline">
        <h3 style="margin:0">Song requests</h3>
        <span class="chip">TEST MODE · demo wallet</span>
      </div>
      <p class="muted" style="margin:6px 0 12px;font-size:12px">
        Fans pay for song requests on anyone’s live · host Play / Skip ·
        ${isHost ? '<strong>You are the host</strong>' : 'viewer queue is read-only for Play/Skip'}
      </p>
      <h4 style="margin:0 0 8px;font-size:13px">Queue</h4>
      <ul class="list-plain lsr-queue" id="lsrQueue">${queueRows}</ul>
      <h4 style="margin:14px 0 8px;font-size:13px">Request a pack</h4>
      ${formBlock}
    </div>`;
}

function renderStage(live) {
  const elapsed = live.endedAt
    ? Math.max(0, Math.floor((live.endedAt - live.startedAt) / 1000))
    : Math.max(0, Math.floor((Date.now() - live.startedAt) / 1000));
  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const ss = String(elapsed % 60).padStart(2, '0');
  const viewersLabel = fmtCount(live.viewers || 0);
  const liveHoodie = live.endedAt
    ? `<div class="live-stage-meta"><span class="chip">Ended · ${timeAgo(live.endedAt)}</span></div>`
    : `<div class="live-hoodie live-hoodie--stage" aria-label="Live · ${esc(viewersLabel)} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" id="liveViewers" title="${esc(viewersLabel)} watching">${esc(viewersLabel)}</span>
        </div>
        <div class="live-stage-meta">
          <span class="chip">${mm}:${ss}</span>
        </div>`;

  const chat = (live.chat || [])
    .slice(-40)
    .map(
      (m) => `
      <div class="live-chat-row ${m.support ? 'support' : ''}">
        <strong>${esc(m.username)}</strong>
        <span>${esc(m.text)}</span>
      </div>`
    )
    .join('');

  return `
    <div class="card live-stage">
      <div class="live-stage-frame" role="img" aria-label="Fake stream stage · TEST MODE">
        <div class="live-stage-brand">
          <img src="/brand/logo-dbs-v3@2x.webp" alt="DBS" />
          <div>
            <div class="live-stage-title">${esc(live.title)}</div>
            <div class="muted" style="font-size:12px">@${esc(live.hostName)} · Follow DatBoiSkeet</div>
          </div>
        </div>
        ${liveHoodie}
        <p class="live-stage-note">TEST MODE · no camera / no real stream · branding + chat demo only</p>
      </div>

      <div class="row wrap live-earn" style="margin-top:10px">
        <span class="chip">Tips ${fmtMoney(live.tipsTotal)}</span>
        <span class="chip">Gifts ${fmtMoney(live.giftsTotal || 0)}</span>
        <span class="chip">Song reqs (see queue)</span>
        <span class="chip">Coins ${fmtCoins(getCoinBalance())}</span>
        <span class="chip">Wallet ${fmtMoney(getState().wallet?.balance || 0)}</span>
      </div>

      ${
        live.endedAt
          ? `<p class="muted" style="margin:10px 0 0">Stream ended. Start another below.</p>
             <button class="btn primary" id="liveRestart">New go-live</button>`
          : `<div class="row wrap" style="margin-top:10px;gap:8px">
               <button class="btn" id="liveTip" data-kind="tip" data-amt="1">Tip $1 · demo</button>
               <button class="btn ghost" id="liveFocusGifts">Gifts tray</button>
               <button class="btn ghost" id="liveBumpViewers">Refresh viewers</button>
               <button class="btn ghost danger" id="liveEnd">End stream</button>
             </div>`
      }
    </div>

    <div class="card live-chat-card">
      <h3>Live chat</h3>
      <div class="live-chat" id="liveChat">${chat || '<p class="muted">No messages yet.</p>'}</div>
      ${
        live.endedAt
          ? ''
          : `<div class="row" style="gap:8px;margin-top:10px">
               <input id="liveChatInput" placeholder="Say something…" maxlength="280" style="flex:1" />
               <button class="btn primary" id="liveChatSend">Send</button>
             </div>`
      }
    </div>
  `;
}

function renderGoLiveForm(user) {
  if (!user) {
    return `
      <div class="card">
        <h3>Go live</h3>
        <p class="muted">Sign in to start a demo livestream (no real camera).</p>
        <a class="btn primary" href="#/profile">Sign in</a>
        <p class="chip" style="margin-top:10px">TEST MODE</p>
      </div>`;
  }
  return `
    <div class="card">
      <h3>Go live · TEST MODE</h3>
      <p class="muted">Fake stream UI with title, viewer stub, chat, tips, gifts (coins), and paid song requests. Persisted in localStorage (<code>dbs_v1.live</code> + <code>coins</code> + <code>liveGiftLedger</code> + <code>liveSongRequests</code>).</p>
      <div class="field"><label>Stream title</label>
        <input id="liveTitle" maxlength="80" placeholder="e.g. Listening session · Long Story Short" value="DBS Live · ${esc(user.username)}" />
      </div>
      <button class="btn primary block" id="liveStart">Start stream</button>
      <p class="chip" style="margin-top:10px">No real media · tips/song reqs use demo wallet · gifts use demo coins</p>
    </div>`;
}

function renderHistory(hist) {
  if (!hist.length) return '';
  return `
    <div class="card">
      <h3>Recent streams (this device)</h3>
      <ul class="list-plain">
        ${hist
          .slice(0, 8)
          .map(
            (h) => `<li>
              <span><strong>${esc(h.title)}</strong><br/><span class="muted" style="font-size:12px">@${esc(h.hostName)} · ${timeAgo(h.endedAt || h.startedAt)} · tips ${fmtMoney(h.tipsTotal)}</span></span>
              <span class="chip">${h.endedAt ? 'Ended' : 'Live'}</span>
            </li>`
          )
          .join('')}
      </ul>
    </div>`;
}

export function renderLive() {
  const { user, live } = getState();
  const hist = getLiveHistory();
  const active = live && !live.endedAt;
  const showStage = !!live;

  const body = `
    ${renderLiveCategoryChips('live')}
    ${renderHotLivesRail()}
    ${showStage ? renderStage(live) : ''}
    ${active ? renderLiveGifts(live, user) : ''}
    ${active ? renderSongRequests(live, user) : ''}
    ${!active ? renderGoLiveForm(user) : ''}
    ${renderHistory(hist)}
    <div class="card">
      <p class="muted" style="margin:0 0 8px">More Live tools</p>
      <div class="row wrap">
        <a class="btn ghost" href="#/restream">Restream · multi-platform</a>
        <a class="btn ghost" href="#/multiguest">Multi-Guest</a>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:12px">Open Mic + Spotlight are 24/7 Live categories (chips above). Gifts + song requests run during an active Live. Gift Battles is not promoted from this page.</p>
    </div>
  `;

  return shellPage('DBS Live', body, {
    lead: 'Live · Open Mic / Talent Discovery (24/7) · Spotlight (24/7) · gifts · song requests · TEST MODE.',
    badge: active ? 'LIVE' : undefined,
  });
}


const _giftOverlayQueue = [];
let _giftOverlayBusy = false;

function enqueueGiftOverlay(root, gift) {
  _giftOverlayQueue.push(gift);
  pumpGiftOverlay(root);
}

function pumpGiftOverlay(root) {
  if (_giftOverlayBusy) return;
  const overlay = root.querySelector('#liveGiftOverlay');
  if (!overlay) {
    _giftOverlayQueue.length = 0;
    return;
  }
  const next = _giftOverlayQueue.shift();
  if (!next) return;
  _giftOverlayBusy = true;
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dur = reduce ? 900 : next.tier === 'cinematic' ? 4200 : next.tier === 'premium' ? 2800 : 1600;
  overlay.innerHTML = `
    <div class="lg-overlay-card lg-tier-${esc(next.tier || 'small')}" data-slug="${esc(next.slug)}">
      <span class="lg-overlay-emoji" aria-hidden="true">${giftEmoji(next.slug)}</span>
      <div class="lg-overlay-copy">
        <strong>${esc(next.name)}</strong>
        <span>@${esc(next.fromUser)} · ${esc(fmtCoins(next.coins))} coins</span>
        <span class="muted lg-overlay-brief">${esc(next.animation || '')}</span>
      </div>
    </div>`;
  overlay.classList.add('is-on');
  window.setTimeout(() => {
    overlay.classList.remove('is-on');
    overlay.innerHTML = '';
    _giftOverlayBusy = false;
    pumpGiftOverlay(root);
  }, dur);
}

function mountLiveGiftTray(root) {
  root.querySelectorAll('.lg-buy').forEach((btn) => {
    btn.addEventListener('click', () => {
      const res = buyCoins(Number(btn.dataset.coins));
      if (res?.error === 'bad_package') return toast('Unknown coin pack');
      if (res?.error) return toast(String(res.error));
      toast(`+${fmtCoins(res.pack.coins)} coins · ${fmtMoney(res.pack.usd)} · TEST MODE`);
      refresh();
    });
  });

  root.querySelectorAll('.lg-gift').forEach((btn) => {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.slug;
      const coins = Number(btn.dataset.coins) || 0;
      const needsConfirm = btn.dataset.confirm === '1';
      const gift = LIVE_GIFT_CATALOG.find((g) => g.slug === slug);
      if (!gift) return toast('Gift not found');
      if (needsConfirm) {
        const ok = window.confirm(
          `Send ${gift.name} for ${fmtCoins(gift.coins)} coins (${fmtMoney(gift.usd)})?\nTEST MODE · demo coins only`
        );
        if (!ok) return;
      }
      const liveId = getState().live?.id;
      const res = sendLiveGift({ liveId, slug });
      if (res?.error === 'signin') return toast('Sign in first');
      if (res?.error === 'offline') return toast('Not live');
      if (res?.error === 'insufficient') {
        return toast(`Need ${fmtCoins(res.need)} coins — buy a pack below · TEST MODE`);
      }
      if (res?.error === 'bad_gift') return toast('Unknown gift');
      if (res?.error) return toast(String(res.error));
      enqueueGiftOverlay(root, {
        slug: gift.slug,
        name: gift.name,
        coins: gift.coins,
        tier: gift.tier,
        animation: gift.animation,
        fromUser: res.entry?.fromUser || getState().user?.username || 'you',
      });
      toast(`Sent ${gift.name} · ${fmtCoins(gift.coins)} coins · TEST MODE`);
      // Soft refresh after overlay starts so tray balance updates
      window.setTimeout(() => refresh(), 200);
    });
  });
}

function mountSongRequestForm(root) {
  const packsEl = root.querySelector('#lsrPacks');
  const fieldsEl = root.querySelector('#lsrTitleFields');
  if (!packsEl || !fieldsEl) return;

  let selected = 1;

  const paintTitles = () => {
    const n = selected;
    const inputs = Array.from({ length: n }, (_, i) => {
      return `<div class="field"><label>Song ${i + 1}</label>
        <input class="lsr-title-input" data-i="${i}" maxlength="80" placeholder="Song title…" /></div>`;
    }).join('');
    fieldsEl.innerHTML = inputs;
  };

  const selectPack = (pack) => {
    selected = Number(pack) || 1;
    packsEl.querySelectorAll('.lsr-pack').forEach((btn) => {
      const on = Number(btn.dataset.pack) === selected;
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    paintTitles();
  };

  packsEl.querySelectorAll('.lsr-pack').forEach((btn) => {
    btn.addEventListener('click', () => selectPack(btn.dataset.pack));
  });
  selectPack(1);

  root.querySelector('#lsrSeedWallet')?.addEventListener('click', () => {
    addWalletCredit(50, 'Song request demo credit · TEST MODE');
    toast('+$50 wallet demo · TEST MODE');
    refresh();
  });

  root.querySelector('#lsrSubmit')?.addEventListener('click', () => {
    const titles = Array.from(root.querySelectorAll('.lsr-title-input')).map((el) => el.value);
    const res = submitLiveSongRequest({ pack: selected, titles });
    if (res?.error === 'signin') return toast('Sign in first');
    if (res?.error === 'offline') return toast('Not live');
    if (res?.error === 'bad_pack') return toast('Pick a pack');
    if (res?.error === 'title_count') {
      return toast(`Enter ${res.need} song title${res.need > 1 ? 's' : ''}`);
    }
    if (res?.error === 'insufficient') {
      return toast(`Need ${fmtMoney(res.need)} — tap + $50 demo credit · TEST MODE`);
    }
    if (res?.error) return toast(String(res.error));
    toast(`Song request submitted · ${fmtMoney(res.entry.price)} · TEST MODE`);
    refresh();
  });

  root.querySelectorAll('.lsr-play').forEach((btn) => {
    btn.addEventListener('click', () => {
      const rid = btn.dataset.rid;
      const si = Number(btn.dataset.si);
      const queue = listLiveSongRequestQueue(getState().live?.id);
      const row = queue.find((q) => q.requestId === rid && q.songIndex === si);
      let res;
      if (row?.status === 'playing') {
        res = completeLiveSongRequest(rid, si);
        if (res?.error === 'host_only') return toast('Host only');
        if (res?.error) return toast(String(res.error));
        toast('Marked played · TEST MODE');
      } else {
        res = playLiveSongRequest(rid, si);
        if (res?.error === 'host_only') return toast('Host only');
        if (res?.error) return toast(String(res.error));
        toast('Now playing · TEST MODE');
      }
      refresh();
    });
  });

  root.querySelectorAll('.lsr-skip').forEach((btn) => {
    btn.addEventListener('click', () => {
      const res = skipLiveSongRequest(btn.dataset.rid, Number(btn.dataset.si));
      if (res?.error === 'host_only') return toast('Host only');
      if (res?.error) return toast(String(res.error));
      toast('Skipped · TEST MODE');
      refresh();
    });
  });
}

export function bindLive(root) {
  root.querySelectorAll('.hot-live-watch').forEach((btn) => {
    btn.addEventListener('click', () => {
      notifyLiveOpen();
      const host = btn.dataset.host || 'creator';
      const id = btn.dataset.id || '';
      const card = root.querySelector(`.hot-live-card[data-live-id="${CSS.escape(id)}"]`);
      root.querySelectorAll('.hot-live-card.is-watching').forEach((el) => el.classList.remove('is-watching'));
      card?.classList.add('is-watching');
      toast(`Watching @${host} · demo only`);
    });
  });

  root.querySelectorAll('.hot-live-spike').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const res = simulateLiveSpike(id);
      if (res?.error === 'missing') return toast('Live not found');
      if (res?.error) return toast(String(res.error));
      const host = res.live?.hostName || 'creator';
      toast(
        res.deduped
          ? `Spike @${host} · Admin alert already open`
          : `Spike @${host} · Admin engagement alert queued`
      );
      refresh();
    });
  });

  root.querySelector('#liveStart')?.addEventListener('click', () => {
    const title = root.querySelector('#liveTitle')?.value?.trim();
    const res = startLiveDemo(title);
    if (res?.error === 'signin') return toast('Sign in first');
    if (res?.error === 'already_live') return toast('Already live');
    notifyLiveOpen();
    toast('You are live · TEST MODE');
    refresh();
  });

  root.querySelector('#liveRestart')?.addEventListener('click', () => {
    const title = 'DBS Live · ' + (getState().user?.username || 'Demo');
    const res = startLiveDemo(title);
    if (res?.error) return toast(String(res.error));
    notifyLiveOpen();
    toast('Back live · TEST MODE');
    refresh();
  });

  root.querySelector('#liveEnd')?.addEventListener('click', () => {
    endLiveDemo();
    notifyLiveClosed();
    toast('Stream ended');
    refresh();
  });

  root.querySelector('#liveBumpViewers')?.addEventListener('click', () => {
    const live = bumpLiveViewers();
    const el = root.querySelector('#liveViewers');
    if (el && live) el.textContent = fmtCount(live.viewers || 0);
    toast('Viewers updated (stub)');
  });

  root.querySelector('#liveTip')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const res = sendLiveSupport({ kind: 'tip', amount: Number(btn.dataset.amt) || 1 });
    if (res?.error === 'signin') return toast('Sign in first');
    if (res?.error === 'offline') return toast('Not live');
    toast('Tip sent · demo');
    refresh();
  });

  const sendChat = () => {
    const input = root.querySelector('#liveChatInput');
    const text = input?.value?.trim();
    if (!text) return toast('Type a message');
    const res = sendLiveChat(text);
    if (res?.error === 'signin') return toast('Sign in first');
    if (res?.error === 'offline') return toast('Not live');
    if (res?.error === 'empty') return;
    if (input) input.value = '';
    refresh();
  };
  root.querySelector('#liveChatSend')?.addEventListener('click', sendChat);
  root.querySelector('#liveChatInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChat();
  });


  root.querySelector('#liveFocusGifts')?.addEventListener('click', () => {
    root.querySelector('#liveGifts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  mountLiveGiftTray(root);
  mountSongRequestForm(root);
}

