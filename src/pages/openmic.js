import {
  getState,
  signInLocal,
  setAdminRole,
  isAdmin,
  ensureOpenMicSeeded,
  listOpenMicApplications,
  listOpenMicShowcase,
  submitOpenMicApplication,
  setOpenMicStatus,
} from '../store.js';
import { esc, toast, shellPage, timeAgo } from '../ui.js';
import { navigate } from '../router.js';

function refresh() {
  navigate('#/openmic');
}

function ensureSignedIn(name = 'MicHopeful') {
  const { user } = getState();
  if (user) return user;
  const signed = signInLocal(name);
  toast(`Signed in as ${name} · local demo`);
  return signed || getState().user;
}

function statusChip(s) {
  const label = s === 'approved' ? 'Approved' : s === 'rejected' ? 'Rejected' : 'Pending';
  return `<span class="chip">${esc(label)}</span>`;
}

export function renderOpenMic() {
  ensureOpenMicSeeded();
  const { user } = getState();
  const admin = isAdmin();
  const showcase = listOpenMicShowcase();
  const mine = user
    ? listOpenMicApplications().filter((a) => a.userId === user.id)
    : [];
  const pending = admin ? listOpenMicApplications({ status: 'pending' }) : [];

  const showcaseHtml =
    showcase.length === 0
      ? `<p class="muted" style="margin:0">No approved performers yet.</p>`
      : showcase
          .map(
            (a) => `<article class="card" style="margin:0 0 10px">
              <div class="row" style="justify-content:space-between;gap:8px">
                <div>
                  <strong>${esc(a.trackTitle)}</strong>
                  <div class="muted" style="font-size:12px">@${esc(a.username)} · ${esc(a.talent)}</div>
                </div>
                ${statusChip('approved')}
              </div>
              <p style="margin:8px 0 0">${esc(a.profileNote || 'Featured in DBS Open Mic showcase.')}</p>
              <p class="muted" style="font-size:11px;margin:8px 0 0">Not a paid ranking · discovery showcase</p>
            </article>`
          )
          .join('');

  const mineHtml =
    mine.length === 0
      ? `<p class="muted" style="margin:0">You have no applications yet.</p>`
      : `<ul class="list-plain">${mine
          .map(
            (a) => `<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between">
                <strong>${esc(a.trackTitle)}</strong>
                ${statusChip(a.status)}
              </div>
              <div class="muted" style="font-size:12px">${esc(a.talent)} · ${esc(timeAgo(a.at))}</div>
            </li>`
          )
          .join('')}</ul>`;

  const adminPanel = admin
    ? `<div class="card">
         <h3 style="margin:0 0 8px">Admin review · TEST MODE</h3>
         <p class="muted" style="margin:0 0 10px;font-size:12px">Approve for showcase or reject. Distinct from pay-to-win.</p>
         ${
           pending.length === 0
             ? `<p class="muted" style="margin:0">No pending applications.</p>`
             : pending
                 .map(
                   (a) => `<div style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
                     <strong>${esc(a.trackTitle)}</strong> · @${esc(a.username)} · ${esc(a.talent)}
                     <p class="muted" style="margin:4px 0;font-size:12px">${esc(a.profileNote)}</p>
                     <p class="chip">Rights certified: ${a.rightsCertified ? 'yes' : 'no'}</p>
                     <div class="row wrap" style="gap:8px;margin-top:8px">
                       <button class="btn primary" data-om-approve="${esc(a.id)}">Approve</button>
                       <button class="btn" data-om-reject="${esc(a.id)}">Reject</button>
                     </div>
                   </div>`
                 )
                 .join('')
         }
       </div>`
    : '';

  return shellPage(
    'Open Mic',
    `
    <div class="card">
      <p class="kicker">§30 · 24/7 Live category · Talent Discovery</p>
      <h2 style="margin:0 0 6px">Open Mic &amp; Talent Discovery</h2>
      <p class="muted" style="margin:0 0 10px"><strong>24/7 Live category</strong> (like Spotlight) — not Social. Opt-in showcase for rappers, singers, DJs, producers. Submit music + profile, certify rights, apply for approval. Approved artists appear in the DBS discovery showcase — <strong>not a paid ranking</strong>.</p>
      <nav class="live-cat-chips" aria-label="Live categories" style="margin:0 0 12px">
        <a class="live-cat-chip" href="#/live">Live</a>
        <a class="live-cat-chip on" href="#/openmic" aria-current="page">Open Mic / Talent Discovery (24/7)</a>
        <a class="live-cat-chip" href="#/spotlight">Spotlight (24/7)</a>
      </nav>
      <div class="row wrap" style="gap:8px">
        <a class="btn" href="#/spotlight">24/7 Spotlight</a>
        <a class="btn" href="#/live">Live</a>
        <a class="btn" href="#/music">Music</a>
        <a class="btn" href="#/fanclubs">Fan Clubs</a>
        <button class="btn ghost" id="omSeed">Reseed demos</button>
        <button class="btn ghost" id="omAdmin">${admin ? 'Admin on' : 'Toggle demo admin'}</button>
      </div>
      <p class="chip" style="margin-top:10px">TEST MODE · no pay-to-win</p>
    </div>

    <div class="card">
      <h3 style="margin:0 0 8px">Apply</h3>
      <form id="omForm">
        <label class="muted" style="font-size:12px">Talent</label>
        <select id="omTalent" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit">
          <option value="rapper">Rapper</option>
          <option value="singer">Singer</option>
          <option value="dj">DJ</option>
          <option value="producer">Producer</option>
          <option value="other">Other</option>
        </select>
        <label class="muted" style="font-size:12px">Track / piece title</label>
        <input id="omTitle" required maxlength="80" placeholder="Song or freestyle title" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit" />
        <label class="muted" style="font-size:12px">Profile note</label>
        <textarea id="omNote" maxlength="240" rows="2" placeholder="Who you are · what you want to share" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit;resize:vertical"></textarea>
        <label class="row" style="gap:8px;align-items:flex-start;margin:0 0 12px;cursor:pointer">
          <input type="checkbox" id="omRights" required style="margin-top:3px" />
          <span style="font-size:13px">I certify I have the rights to submit this material and understand DBS may moderate / feature approved work under promotional terms (demo).</span>
        </label>
        <button class="btn primary" type="submit">Submit application</button>
        ${!user ? `<button class="btn" type="button" id="omSignIn">Sign in demo</button>` : ''}
      </form>
    </div>

    <div class="card">
      <h3 style="margin:0 0 8px">Your applications</h3>
      ${mineHtml}
    </div>

    ${adminPanel}

    <div class="card">
      <h3 style="margin:0 0 8px">Approved showcase</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">Featured performers · discovery, not spend rank</p>
      ${showcaseHtml}
    </div>
    `,
    { lead: 'Opt-in talent showcase · DEMO.', badge: 'Phase 2 demo' }
  );
}

export function bindOpenMic(root) {
  root.querySelector('#omSignIn')?.addEventListener('click', () => {
    ensureSignedIn();
    refresh();
  });
  root.querySelector('#omAdmin')?.addEventListener('click', () => {
    ensureSignedIn('DemoAdmin');
    const on = !isAdmin();
    setAdminRole(on);
    toast(on ? 'Demo admin on' : 'Demo admin off');
    refresh();
  });
  root.querySelector('#omSeed')?.addEventListener('click', () => {
    ensureOpenMicSeeded({ force: true });
    toast('Open Mic demos reseeded');
    refresh();
  });
  root.querySelector('#omForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    ensureSignedIn();
    const rights = root.querySelector('#omRights')?.checked;
    const res = submitOpenMicApplication({
      talent: root.querySelector('#omTalent')?.value,
      trackTitle: root.querySelector('#omTitle')?.value,
      profileNote: root.querySelector('#omNote')?.value,
      rightsCertified: !!rights,
    });
    if (res.error === 'rights') return toast('Rights certification required');
    if (res.error === 'title') return toast('Title required');
    if (res.error === 'pending') return toast('You already have a pending application');
    if (res.error) return toast('Could not submit');
    toast('Application submitted · pending review');
    refresh();
  });
  root.querySelectorAll('[data-om-approve]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const res = setOpenMicStatus(btn.getAttribute('data-om-approve'), 'approved');
      if (res.error === 'admin') return toast('Admin only');
      toast('Approved · showcase');
      refresh();
    });
  });
  root.querySelectorAll('[data-om-reject]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const res = setOpenMicStatus(btn.getAttribute('data-om-reject'), 'rejected', 'Demo reject');
      if (res.error === 'admin') return toast('Admin only');
      toast('Rejected');
      refresh();
    });
  });
}
