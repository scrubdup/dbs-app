import {
  getState,
  listThreads,
  getThread,
  getOrCreateThread,
  sendMessage,
  sendGroupMessage,
  ensureDemoMessageContacts,
  ensureDemoGroupThread,
  ensureDemoUnreadMessages,
  getThreadUnreadCount,
  markThreadRead,
  isMutualFollow,
  setThreadFlags,
  updateMessagePrefs,
} from '../store.js';
import { esc, toast, shellPage, timeAgo } from '../ui.js';
import { navigate } from '../router.js';

function refresh(hash) {
  navigate(hash || '#/messages');
}

function lastPreview(t) {
  const msgs = t.messages || [];
  if (!msgs.length) return 'No messages yet';
  const m = msgs[msgs.length - 1];
  const prefix = m.priority ? '⚡ ' : '';
  return prefix + (m.text || '').slice(0, 80);
}

function renderSignIn() {
  return shellPage(
    'Messages',
    `<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Private DMs, team inbox, and group chats need a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,
    { lead: 'Private messaging & team inbox · TEST MODE' }
  );
}

function renderInbox(user) {
  const threads = listThreads();
  const prefs = getState().messagePrefs || { allowDMs: true, allowRequests: true };
  const rows = threads
    .map((t) => {
      const isGroup = t.kind === 'group';
      const isTeam = !isGroup && t.peerId === 'dbs';
      const chips = [
        isGroup ? '<span class="chip">Group</span>' : '',
        isTeam ? '<span class="chip">Team</span>' : '',
        t.request ? '<span class="chip">Request</span>' : '',
        t.muted ? '<span class="chip">Muted</span>' : '',
        t.blocked ? '<span class="chip">Blocked</span>' : '',
      ]
        .filter(Boolean)
        .join(' ');
      const unreadN = getThreadUnreadCount(t);
      const unreadChip = unreadN
        ? `<span class="chip msg-unread-chip" aria-label="${unreadN} unread">${unreadN}</span>`
        : '';
      return `
      <button type="button" class="msg-thread-row${unreadN ? ' has-unread' : ''}" data-search="${esc(String(t.peerName || t.peerId).toLowerCase())}" data-open-thread="${esc(t.id)}">
        <div class="pikk-msg-avatar" aria-hidden="true">${esc(String(t.peerName || t.peerId || "?").slice(0,1).toUpperCase())}</div>
        <div class="pikk-msg-thread-body"><div class="msg-thread-top">
          <strong>${esc(t.peerName || t.peerId)}</strong>
          <span class="muted">${esc(timeAgo(t.updatedAt || 0))}</span>
        </div>
        <div class="msg-thread-preview muted">${esc(lastPreview(t))}</div>
        <div class="msg-thread-chips">${unreadChip}${chips}</div></div>
      </button>`;
    })
    .join('');

  return `
    <section class="pikk-messages-hero" aria-label="PIKK inbox">
      <div><p class="kicker">PIKK CONNECT · MESSAGES</p><h2>Your conversations.</h2><p>Stay connected with people, groups, and the DatBoiSkeet team.</p></div>
      <span class="pikk-messages-hero-mark" aria-hidden="true">✉</span>
    </section>
    <div class="pikk-msg-tools">
      <label for="pikkMsgSearch">Search conversations</label>
      <input id="pikkMsgSearch" type="search" placeholder="Search messages..." autocomplete="off" aria-controls="msgInbox" />
      <div class="pikk-msg-tool-actions"><button type="button" class="btn primary" id="pikkNewChatTop">+ New chat</button><button type="button" class="btn ghost" id="pikkGroupTop">Group chat</button></div>
    </div>
    <div class="card msg-team-card">
      <h3>DatBoiSkeet · Team inbox</h3>
      <p class="muted" style="margin:0 0 10px">Free inquiry or <strong>Priority $2.99 TEST MODE</strong> (not charged). Priority = faster review, not a guaranteed personal reply.</p>
      <button type="button" class="btn primary" id="msgOpenTeam">Open team chat</button>
    </div>

    <div class="card">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <h3 style="margin:0">Inbox</h3>
        <div class="row wrap" style="gap:8px">
          <button type="button" class="btn" id="msgNewChat">New chat</button>
          <button type="button" class="btn ghost" id="msgOpenGroup">DBS Fans group</button>
        </div>
      </div>
      <div class="msg-inbox" id="msgInbox">
        ${
          rows ||
          `<div class="msg-empty">
            <p class="muted">No conversations yet.</p>
            <button type="button" class="btn primary" id="msgEmptyNew">Start a chat</button>
          </div>`
        }
        <p id="pikkMsgNoResults" class="pikk-msg-no-results" role="status" hidden>No conversations match your search.</p>
      </div>
    </div>

    <div class="card">
      <h3>Privacy stubs</h3>
      <p class="muted" style="margin:0 0 10px">Demo flags only — no real moderation queue.</p>
      <div class="row wrap" style="gap:8px">
        <label class="toggle"><span>Allow DMs</span>
          <input type="checkbox" id="msgPrefDMs" ${prefs.allowDMs ? 'checked' : ''}/>
        </label>
        <label class="toggle"><span>Allow requests</span>
          <input type="checkbox" id="msgPrefRequests" ${prefs.allowRequests ? 'checked' : ''}/>
        </label>
      </div>
    </div>
  `;
}

function renderNewChat() {
  const contacts = ensureDemoMessageContacts();
  const cards = contacts
    .map((c) => {
      const mutual = c.team || isMutualFollow(c.id);
      const label = c.team ? 'Team inbox' : mutual ? 'Message' : 'Message request';
      return `
      <article class="card msg-contact">
        <div class="msg-contact-head">
          <strong>${esc(c.username)}</strong>
          ${c.team ? '<span class="chip">Official</span>' : mutual ? '<span class="chip">Mutual</span>' : '<span class="chip">Request</span>'}
        </div>
        <p class="muted" style="margin:6px 0 10px">${esc(c.bio || '')}</p>
        <button type="button" class="btn ${c.team ? 'primary' : ''}" data-start-peer="${esc(c.id)}" data-peer-name="${esc(c.username)}">${esc(label)}</button>
      </article>`;
    })
    .join('');

  return `
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <h3 style="margin:0">Start chat</h3>
        <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
      </div>
      <p class="muted">Demo peers. Mutual follows open a DM; others create a <em>request</em> thread (still usable in TEST MODE).</p>
    </div>
    ${cards}
  `;
}

function renderTeamIntro() {
  return `
    <div class="card msg-team-card">
      <div class="row" style="justify-content:space-between">
        <h3 style="margin:0">Team inbox</h3>
        <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
      </div>
      <p class="muted">Message DatBoiSkeet / authorized team. Free inquiry stays in the normal queue; Priority ($2.99 TEST MODE — not charged) flags the thread for priority review only.</p>
      <div class="row wrap" style="gap:8px;margin-top:8px">
        <button type="button" class="btn primary" id="msgTeamFree">Free inquiry</button>
        <button type="button" class="btn" id="msgTeamPriority">Priority $2.99 · TEST MODE</button>
      </div>
    </div>
  `;
}

function renderThread(thread, { teamPriorityHint = false } = {}) {
  const user = getState().user;
  const isGroup = thread.kind === 'group';
  const isTeam = !isGroup && thread.peerId === 'dbs';
  const blocked = !!thread.blocked;
  const msgs = (thread.messages || [])
    .map((m) => {
      const mine = m.from === user?.id;
      return `
      <div class="msg-bubble ${mine ? 'mine' : ''} ${m.priority ? 'priority' : ''}">
        <div class="msg-bubble-meta">
          <strong>${esc(m.fromName || m.from)}</strong>
          ${m.priority ? '<span class="chip priority-chip">Priority</span>' : ''}
          <span class="muted">${esc(timeAgo(m.at))}</span>
        </div>
        <div class="msg-bubble-text">${esc(m.text)}</div>
      </div>`;
    })
    .join('');

  const requestBanner = thread.request
    ? `<div class="msg-banner">Message request · recipient approval stub (demo still delivers locally)</div>`
    : '';
  const priorityBanner = teamPriorityHint
    ? `<div class="msg-banner priority">Next send can use Priority $2.99 TEST MODE (wallet note only — not charged).</div>`
    : '';

  return `
    <div class="card msg-thread-head">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <div>
          <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
          <h3 style="margin:8px 0 0">${esc(thread.peerName || thread.peerId)}</h3>
          <div class="row wrap" style="gap:6px;margin-top:6px">
            ${isGroup ? '<span class="chip">Group</span>' : ''}
            ${isTeam ? '<span class="chip">Team</span>' : ''}
            ${thread.request ? '<span class="chip">Request</span>' : ''}
            ${thread.muted ? '<span class="chip">Muted</span>' : ''}
            ${thread.blocked ? '<span class="chip">Blocked</span>' : ''}
          </div>
        </div>
        <div class="row wrap msg-privacy-btns" style="gap:6px">
          <button type="button" class="btn ghost" data-flag="mute">${thread.muted ? 'Unmute' : 'Mute'}</button>
          <button type="button" class="btn ghost" data-flag="block">${thread.blocked ? 'Unblock' : 'Block'}</button>
          <button type="button" class="btn ghost danger" data-flag="report">Report</button>
        </div>
      </div>
    </div>
    ${requestBanner}
    ${priorityBanner}
    <div class="card msg-thread-card">
      <div class="msg-thread" id="msgThread">${msgs || '<p class="muted">No messages yet — say hi.</p>'}</div>
      ${
        blocked
          ? `<p class="muted" style="margin-top:10px">Thread blocked · composer disabled (demo).</p>`
          : `<div class="msg-composer">
               <input id="msgInput" placeholder="${isTeam ? 'Write an inquiry…' : 'Message…'}" maxlength="500" />
               <button type="button" class="btn primary" id="msgSend">Send</button>
               ${
                 isTeam
                   ? `<button type="button" class="btn" id="msgSendPriority" title="TEST MODE — not charged">Priority $2.99</button>`
                   : ''
               }
             </div>`
      }
    </div>
  `;
}

export function renderMessages(route) {
  const user = getState().user;
  if (!user) return renderSignIn();

  ensureDemoMessageContacts();

  const view = route?.query?.view || '';
  const threadId = route?.query?.t || '';
  const priorityHint = route?.query?.priority === '1';

  let body;
  if (threadId) {
    const t = getThread(threadId);
    if (!t) {
      body = `<div class="card"><p class="muted">Thread not found.</p><button type="button" class="btn" id="msgBackInbox">← Inbox</button></div>`;
    } else {
      body = renderThread(t, { teamPriorityHint: priorityHint && t.peerId === 'dbs' });
    }
  } else if (view === 'new') {
    body = renderNewChat();
  } else if (view === 'team') {
    body = renderTeamIntro();
  } else {
    body = renderInbox(user);
  }

  return shellPage('Messages', body, {
    lead: 'DMs, group chats, and DatBoiSkeet team inbox · TEST MODE',
  });
}

export function bindMessages(root) {
  const user = getState().user;
  if (!user) return;

  ensureDemoUnreadMessages();

  const goInbox = () => refresh('#/messages');

  root.querySelector('#msgBackInbox')?.addEventListener('click', goInbox);
  root.querySelector('#msgNewChat')?.addEventListener('click', () => refresh('#/messages?view=new'));
  root.querySelector('#pikkNewChatTop')?.addEventListener('click', () => refresh('#/messages?view=new'));
  root.querySelector('#pikkMsgSearch')?.addEventListener('input', e => {
    const query=String(e.target.value||'').trim().toLowerCase();
    let shown = 0;
    root.querySelectorAll('#msgInbox [data-open-thread]').forEach(row => {
      row.hidden = !!query && !String(row.dataset.search || '').includes(query);
      if (!row.hidden) shown++;
    });
    const empty = root.querySelector('#pikkMsgNoResults');
    if (empty) empty.hidden = !query || shown > 0;
  });
  root.querySelector('#msgEmptyNew')?.addEventListener('click', () => refresh('#/messages?view=new'));
  root.querySelector('#msgOpenTeam')?.addEventListener('click', () => refresh('#/messages?view=team'));

  root.querySelector('#pikkGroupTop')?.addEventListener('click', () => root.querySelector('#msgOpenGroup')?.click());

  root.querySelector('#msgOpenGroup')?.addEventListener('click', () => {
    const g = ensureDemoGroupThread();
    if (g?.error) {
      toast('Sign in required');
      return;
    }
    toast('Opened DBS Fans');
    refresh('#/messages?t=' + encodeURIComponent(g.id));
  });

  root.querySelector('#msgTeamFree')?.addEventListener('click', () => {
    const t = getOrCreateThread('dbs', 'DatBoiSkeet');
    if (t.error) return toast('Sign in required');
    refresh('#/messages?t=' + encodeURIComponent(t.id));
  });

  root.querySelector('#msgTeamPriority')?.addEventListener('click', () => {
    const t = getOrCreateThread('dbs', 'DatBoiSkeet');
    if (t.error) return toast('Sign in required');
    refresh('#/messages?t=' + encodeURIComponent(t.id) + '&priority=1');
  });

  root.querySelectorAll('[data-start-peer]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const peerId = btn.dataset.startPeer;
      const peerName = btn.dataset.peerName || peerId;
      if (peerId === 'dbs') {
        refresh('#/messages?view=team');
        return;
      }
      const t = getOrCreateThread(peerId, peerName);
      if (t.error) return toast('Sign in required');
      if (t.request) toast('Request thread created · demo');
      refresh('#/messages?t=' + encodeURIComponent(t.id));
    });
  });

  root.querySelectorAll('[data-open-thread]').forEach((btn) => {
    btn.addEventListener('click', () => {
      refresh('#/messages?t=' + encodeURIComponent(btn.dataset.openThread));
    });
  });

  root.querySelector('#msgPrefDMs')?.addEventListener('change', (e) => {
    updateMessagePrefs({ allowDMs: !!e.target.checked });
    toast(e.target.checked ? 'DMs allowed' : 'DMs disabled (stub)');
  });
  root.querySelector('#msgPrefRequests')?.addEventListener('change', (e) => {
    updateMessagePrefs({ allowRequests: !!e.target.checked });
    toast(e.target.checked ? 'Requests allowed' : 'Requests disabled (stub)');
  });

  const threadId = new URLSearchParams((location.hash.split('?')[1] || '')).get('t');
  const thread = threadId ? getThread(threadId) : null;
  if (thread) {
    markThreadRead(thread.id);
  }

  root.querySelectorAll('[data-flag]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!thread) return;
      const flag = btn.dataset.flag;
      if (flag === 'mute') {
        const next = setThreadFlags(thread.id, { muted: !thread.muted });
        toast(next.muted ? 'Muted' : 'Unmuted');
        refresh('#/messages?t=' + encodeURIComponent(thread.id));
      } else if (flag === 'block') {
        const next = setThreadFlags(thread.id, { blocked: !thread.blocked });
        toast(next.blocked ? 'Blocked' : 'Unblocked');
        refresh('#/messages?t=' + encodeURIComponent(thread.id));
      } else if (flag === 'report') {
        setThreadFlags(thread.id, { report: true });
        toast('Reported · stub (Guidelines §13)');
        refresh('#/messages?t=' + encodeURIComponent(thread.id));
      }
    });
  });

  const send = (priority) => {
    if (!thread) return;
    const input = root.querySelector('#msgInput');
    const text = input?.value || '';
    let res;
    if (thread.kind === 'group') {
      res = sendGroupMessage(thread.id, text);
    } else {
      res = sendMessage(thread.peerId, thread.peerName, text, { priority: !!priority });
    }
    if (res?.error === 'empty') return toast('Type a message');
    if (res?.error) return toast('Could not send');
    if (priority) toast('Priority sent · TEST MODE $2.99 not charged');
    else toast('Sent');
    refresh('#/messages?t=' + encodeURIComponent(thread.id));
  };

  root.querySelector('#msgSend')?.addEventListener('click', () => send(false));
  root.querySelector('#msgSendPriority')?.addEventListener('click', () => send(true));
  root.querySelector('#msgInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      send(false);
    }
  });

  // Scroll thread to bottom
  const box = root.querySelector('#msgThread');
  if (box) box.scrollTop = box.scrollHeight;
}
