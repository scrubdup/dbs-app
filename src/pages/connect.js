/** §36 DBS Connect — OPT-IN SHELL ONLY. No WebRTC, matching, camera, or random video. */
import { getConnectPrefs, updateConnectPrefs } from '../store.js';
import { toast, shellPage } from '../ui.js';

const BLOCK_MSG = 'Not available — WebRTC + age assurance required before launch';
const CONTROLS = ['Next', 'End', 'Mute', 'Camera', 'Report', 'Block'];

export function renderConnect() {
  const p = getConnectPrefs();
  const ready = p.ageConfirmed && p.rulesAccepted;
  return shellPage(
    'DBS Connect',
    `<div class="card connect-flag">
      <p><span class="chip">TEST MODE</span> <span class="chip">Opt-in shell only · no WebRTC</span> <span class="chip">18+</span></p>
      <p class="muted">Feature flag: Admin can disable DBS Connect at any time. Launch is blocked until age assurance, moderation, and WebRTC safety review are complete.</p>
    </div>

    <div class="card">
      <h3>Step 1 · Age gate</h3>
      <label class="connect-check"><input type="checkbox" id="connect-age" ${p.ageConfirmed ? 'checked' : ''}/> I confirm I am 18+</label>
      <p class="muted small">Self-attestation is not enough for launch; real age assurance is required.</p>
    </div>

    <div class="card ${p.ageConfirmed ? '' : 'connect-locked'}">
      <h3>Step 2 · Consent &amp; community rules</h3>
      <ul class="muted">
        <li>Opt-in only — both people must consent to every connection.</li>
        <li>No nudity, sexual content, harassment, hate, or minors. Zero tolerance.</li>
        <li>Never share personal info; you can End, Report, or Block instantly.</li>
        <li>Sessions may be moderated; violations lead to bans.</li>
      </ul>
      <label class="connect-check"><input type="checkbox" id="connect-rules" ${p.rulesAccepted ? 'checked' : ''} ${p.ageConfirmed ? '' : 'disabled'}/> I agree to the consent &amp; community rules</label>
    </div>

    <div class="card">
      <h3>Step 3 · Matching</h3>
      ${ready
        ? `<button class="btn primary" id="connect-start">Start Matching</button>`
        : `<button class="btn primary" disabled>Start Matching · complete steps 1–2</button>`}
      <div id="connect-blocked" class="connect-panel" hidden>
        <strong>${BLOCK_MSG}</strong>
        <p class="muted small">TEST MODE — no match was created, no camera was requested.</p>
      </div>
      <div class="connect-stage">
        <div class="connect-tile muted">Waiting… DBS Connect is not live yet. No one will be matched.</div>
        <div class="connect-controls">
          ${CONTROLS.map((c) => `<button class="btn" disabled aria-label="${c} (disabled)">${c}</button>`).join('')}
        </div>
        <p class="muted small">Controls are mockups — disabled until launch.</p>
      </div>
    </div>

    <div class="card">
      <p class="muted">DBS Connect <strong>does not replace</strong> Live, Messages, or Spotlight. Meanwhile:</p>
      <a class="btn" href="#/live">Live</a> <a class="btn" href="#/messages">Messages</a> <a class="btn" href="#/spotlight">Spotlight</a>
    </div>`,
    { lead: 'Opt-in random 1:1 video discovery — shell preview only.', badge: 'Shell · no WebRTC' }
  );
}

export function bindConnect(root = document, rerender) {
  const redraw = () => {
    if (typeof rerender === 'function') return rerender();
    root.innerHTML = renderConnect();
    bindConnect(root);
  };
  root.querySelector('#connect-age')?.addEventListener('change', (e) => {
    updateConnectPrefs({ ageConfirmed: e.target.checked });
    redraw();
  });
  root.querySelector('#connect-rules')?.addEventListener('change', (e) => {
    updateConnectPrefs({ rulesAccepted: e.target.checked });
    redraw();
  });
  root.querySelector('#connect-start')?.addEventListener('click', () => {
    root.querySelector('#connect-blocked')?.removeAttribute('hidden');
    toast(BLOCK_MSG);
  });
}
