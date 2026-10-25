import {
  getState,
  startLiveDemo,
  endLiveDemo,
  sendLiveChat,
  sendLiveSupport,
  bumpLiveViewers,
  getLiveHistory,
} from '../store.js';
import { esc, toast, shellPage, timeAgo } from '../ui.js';
import { navigate } from '../router.js';

function refresh() {
  navigate('#/live');
}

function fmtMoney(n) {
  return '$' + Number(n || 0).toFixed(2);
}

function renderStage(live) {
  const elapsed = live.endedAt
    ? Math.max(0, Math.floor((live.endedAt - live.startedAt) / 1000))
    : Math.max(0, Math.floor((Date.now() - live.startedAt) / 1000));
  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const ss = String(elapsed % 60).padStart(2, '0');
  const liveChip = live.endedAt
    ? `<span class="chip">Ended · ${timeAgo(live.endedAt)}</span>`
    : `<span class="chip live-chip"><span class="dot" aria-hidden="true"></span> LIVE</span>`;

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
        <div class="live-stage-meta">
          ${liveChip}
          <span class="chip" id="liveViewers">${esc(String(live.viewers || 0))} watching</span>
          <span class="chip">${mm}:${ss}</span>
        </div>
        <p class="live-stage-note">TEST MODE · no camera / no real stream · branding + chat demo only</p>
      </div>

      <div class="row wrap live-earn" style="margin-top:10px">
        <span class="chip">Tips ${fmtMoney(live.tipsTotal)} · 90/10</span>
        <span class="chip">Gifts ${fmtMoney(live.giftsTotal)} · 80/20</span>
        <span class="chip">Wallet ${fmtMoney(getState().wallet?.balance || 0)}</span>
      </div>

      ${
        live.endedAt
          ? `<p class="muted" style="margin:10px 0 0">Stream ended. Start another below.</p>
             <button class="btn primary" id="liveRestart">New go-live</button>`
          : `<div class="row wrap" style="margin-top:10px;gap:8px">
               <button class="btn" id="liveTip" data-kind="tip" data-amt="1">Tip $1 · demo</button>
               <button class="btn" id="liveGift" data-kind="gift" data-amt="2" data-label="🔥 Fire">Gift 🔥 $2</button>
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
      <p class="muted">Fake stream UI with title, viewer stub, chat, and tip/gift stubs. Persisted in localStorage (<code>dbs_v1.live</code>).</p>
      <div class="field"><label>Stream title</label>
        <input id="liveTitle" maxlength="80" placeholder="e.g. Listening session · Long Story Short" value="DBS Live · ${esc(user.username)}" />
      </div>
      <button class="btn primary block" id="liveStart">Start stream</button>
      <p class="chip" style="margin-top:10px">No real media · gifts/tips are demo wallet only</p>
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
              <span><strong>${esc(h.title)}</strong><br/><span class="muted" style="font-size:12px">@${esc(h.hostName)} · ${timeAgo(h.endedAt || h.startedAt)} · tips ${fmtMoney(h.tipsTotal)} · gifts ${fmtMoney(h.giftsTotal)}</span></span>
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
    ${showStage ? renderStage(live) : ''}
    ${!active ? renderGoLiveForm(user) : ''}
    ${renderHistory(hist)}
    <div class="card">
      <p class="muted" style="margin:0 0 8px">Related (later phases)</p>
      <div class="row wrap">
        <a class="btn ghost" href="#/restream">Restream · multi-platform</a>
        <a class="btn ghost" href="#/giftbattles">Gift Battles</a>
        <a class="btn ghost" href="#/multiguest">Multi-Guest</a>
        <a class="btn ghost" href="#/spotlight">24/7 Spotlight</a>
      </div>
    </div>
  `;

  return shellPage('DBS Live', body, {
    lead: 'Go-live demo · chat · tip/gift stubs · TEST MODE.',
    badge: active ? 'LIVE' : undefined,
  });
}

export function bindLive(root) {
  root.querySelector('#liveStart')?.addEventListener('click', () => {
    const title = root.querySelector('#liveTitle')?.value?.trim();
    const res = startLiveDemo(title);
    if (res?.error === 'signin') return toast('Sign in first');
    if (res?.error === 'already_live') return toast('Already live');
    toast('You are live · TEST MODE');
    refresh();
  });

  root.querySelector('#liveRestart')?.addEventListener('click', () => {
    // clear ended session from "current" by starting fresh after user fills form —
    // keep history; set live to null-ish by ending already ended — just navigate to form
    // Allow new start: if ended, startLiveDemo allows because endedAt is set
    const title = 'DBS Live · ' + (getState().user?.username || 'Demo');
    const res = startLiveDemo(title);
    if (res?.error) return toast(String(res.error));
    toast('Back live · TEST MODE');
    refresh();
  });

  root.querySelector('#liveEnd')?.addEventListener('click', () => {
    endLiveDemo();
    toast('Stream ended');
    refresh();
  });

  root.querySelector('#liveBumpViewers')?.addEventListener('click', () => {
    const live = bumpLiveViewers();
    const el = root.querySelector('#liveViewers');
    if (el && live) el.textContent = `${live.viewers || 0} watching`;
    toast('Viewers updated (stub)');
  });

  const support = (kind, amt, label) => {
    const res = sendLiveSupport({ kind, amount: amt, label });
    if (res?.error === 'signin') return toast('Sign in first');
    if (res?.error === 'offline') return toast('Not live');
    toast(kind === 'gift' ? 'Gift sent · demo' : 'Tip sent · demo');
    refresh();
  };

  root.querySelector('#liveTip')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    support('tip', Number(btn.dataset.amt) || 1);
  });
  root.querySelector('#liveGift')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    support('gift', Number(btn.dataset.amt) || 2, btn.dataset.label || '🔥 Fire');
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
}
