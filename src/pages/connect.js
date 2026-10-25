/** §36 DBS Connect — Monkey-style match shell. No WebRTC, matching, camera, or random video. */
import { getConnectPrefs, updateConnectPrefs } from '../store.js';
import { toast, shellPage } from '../ui.js';

const BLOCK_MSG = 'Not available — WebRTC + age assurance required before launch';

export function renderConnect() {
  const p = getConnectPrefs();
  const ready = p.ageConfirmed && p.rulesAccepted;
  return shellPage(
    'DBS Connect',
    `<div class="connect-monkey" id="connectMonkey">
      <div class="connect-flag card">
        <p><span class="chip">TEST MODE</span> <span class="chip">Opt-in shell · no WebRTC</span> <span class="chip">18+</span></p>
        <p class="muted small" style="margin:6px 0 0">Monkey-style dual video discovery — DatBoiSkeet branded. Admin can disable Connect anytime. Launch blocked until age assurance + moderation + WebRTC safety review.</p>
      </div>

      <div class="card connect-gates ${ready ? 'ready' : ''}">
        <div class="connect-gates-row">
          <label class="connect-check"><input type="checkbox" id="connect-age" ${p.ageConfirmed ? 'checked' : ''}/> I confirm I am 18+</label>
          <label class="connect-check ${p.ageConfirmed ? '' : 'connect-locked'}"><input type="checkbox" id="connect-rules" ${p.rulesAccepted ? 'checked' : ''} ${p.ageConfirmed ? '' : 'disabled'}/> Consent &amp; community rules</label>
        </div>
        <ul class="connect-rules muted small">
          <li>Opt-in only — both people must consent to every connection.</li>
          <li>No nudity, sexual content, harassment, hate, or minors. Zero tolerance.</li>
          <li>Never share personal info; End, Report, or Block instantly.</li>
          <li>Sessions may be moderated; violations lead to bans.</li>
        </ul>
        <p class="muted small" style="margin:6px 0 0">Self-attestation is not enough for launch; real age assurance is required.</p>
      </div>

      <div class="connect-stage card">
        <div class="connect-tiles" aria-label="Match stage">
          <div class="connect-tile connect-tile-you">
            <div class="connect-tile-art" aria-hidden="true">
              <div class="connect-silhouette"></div>
            </div>
            <div class="connect-tile-label"><span class="chip">You</span> <span class="muted small">Camera off · demo</span></div>
          </div>
          <div class="connect-tile connect-tile-them" id="connectThem">
            <div class="connect-tile-art" aria-hidden="true">
              <div class="connect-silhouette them"></div>
              <div class="connect-pulse-ring" hidden id="connectPulse"></div>
            </div>
            <div class="connect-tile-label">
              <span class="chip">Them</span>
              <span class="muted small" id="connectThemStatus">Waiting for match…</span>
            </div>
          </div>
        </div>

        <div class="connect-actions">
          ${
            ready
              ? `<button class="btn primary connect-btn-start" id="connect-start">Find match</button>`
              : `<button class="btn primary connect-btn-start" disabled>Find match · complete 18+ &amp; rules</button>`
          }
          <button class="btn primary connect-btn-next" disabled aria-label="Next (disabled)">Next</button>
          <button class="btn connect-btn-end" disabled aria-label="End (disabled)">End</button>
        </div>
        <div class="connect-controls" role="group" aria-label="Secondary controls (disabled)">
          <button class="btn ghost" disabled aria-label="Mute (disabled)">Mute</button>
          <button class="btn ghost" disabled aria-label="Camera (disabled)">Camera</button>
          <button class="btn ghost" disabled aria-label="Report (disabled)">Report</button>
          <button class="btn ghost" disabled aria-label="Block (disabled)">Block</button>
        </div>

        <div id="connect-blocked" class="connect-panel" hidden>
          <strong>${BLOCK_MSG}</strong>
          <p class="muted small">TEST MODE — no match was created, no camera was requested, no WebRTC.</p>
        </div>
        <p class="muted small" style="margin-top:10px">Controls are mockups until launch. Prefs save on this device.</p>
      </div>

      <div class="card">
        <p class="muted" style="margin:0 0 8px">DBS Connect <strong>does not replace</strong> Live, Messages, or Spotlight. Meanwhile:</p>
        <a class="btn" href="#/live">Live</a> <a class="btn" href="#/messages">Messages</a> <a class="btn" href="#/spotlight">Spotlight</a>
      </div>
    </div>`,
    { lead: 'Monkey-style 1:1 video discovery — shell preview only.', badge: 'Shell · no WebRTC' }
  );
}

export function bindConnect(root = document, rerender) {
  const redraw = () => {
    if (typeof rerender === 'function') return rerender();
    root.innerHTML = renderConnect();
    bindConnect(root);
  };
  root.querySelector('#connect-age')?.addEventListener('change', (e) => {
    const checked = e.target.checked;
    updateConnectPrefs(
      checked ? { ageConfirmed: true } : { ageConfirmed: false, rulesAccepted: false }
    );
    redraw();
  });
  root.querySelector('#connect-rules')?.addEventListener('change', (e) => {
    updateConnectPrefs({ rulesAccepted: e.target.checked });
    redraw();
  });
  root.querySelector('#connect-start')?.addEventListener('click', () => {
    const them = root.querySelector('#connectThem');
    const pulse = root.querySelector('#connectPulse');
    const status = root.querySelector('#connectThemStatus');
    const blocked = root.querySelector('#connect-blocked');
    const startBtn = root.querySelector('#connect-start');
    them?.classList.add('matching');
    if (pulse) pulse.hidden = false;
    if (status) status.textContent = 'Matching…';
    if (startBtn) {
      startBtn.disabled = true;
      startBtn.textContent = 'Matching…';
    }
    // Brief pulse, then honesty panel — still no WebRTC / getUserMedia
    window.setTimeout(() => {
      them?.classList.remove('matching');
      if (pulse) pulse.hidden = true;
      if (status) status.textContent = 'No match · TEST MODE';
      if (startBtn) {
        startBtn.disabled = false;
        startBtn.textContent = 'Find match';
      }
      blocked?.removeAttribute('hidden');
      toast(BLOCK_MSG);
    }, 900);
  });
}
