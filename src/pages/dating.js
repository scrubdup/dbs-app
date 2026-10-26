import { shellPage, esc } from '../ui.js';
import { readDatingDraft, saveDatingDraft, clearDatingDraft } from '../dating/draft.js';

/** Dating landing page. Do not claim matchmaking or age verification exists. */
export function renderDating() {
  const draft = readDatingDraft();
  return shellPage('PIKK Dating & Connections', `
    <div class="card">
      <span class="chip">18+ · Pre-launch</span>
      <h2>PIKK Match</h2>
      <p>Meet people through opt-in dating, mutual matches, dating live rooms and speed introductions when verified safety systems are ready.</p>
      <p class="muted">Swipe & Match, private dating profiles, mutual-match chat and speed dating are in development. No real matches are being created here.</p>
    </div>
    <section class="card" id="datingDraft">
      <span class="chip">Private device-only draft · not published</span>
      <h3>Prepare your dating profile</h3>
      <p class="muted small">Create or edit a private draft. No account matching, public profile, upload, or messages are activated. Do not enter contact details or sensitive information.</p>
      <label for="datingDraftName">Display name</label>
      <input id="datingDraftName" maxlength="40" autocomplete="off" value="${esc(draft.name)}" placeholder="Your display name" />
      <label for="datingDraftBio">About me</label>
      <textarea id="datingDraftBio" maxlength="300" rows="3" placeholder="Interests and what you're looking for">${esc(draft.bio)}</textarea>
      <label for="datingDraftIntent">Looking for</label>
      <select id="datingDraftIntent">
        <option value="not-sure" ${draft.intent === 'not-sure' ? 'selected' : ''}>Still deciding</option>
        <option value="relationship" ${draft.intent === 'relationship' ? 'selected' : ''}>Relationship</option>
        <option value="dating" ${draft.intent === 'dating' ? 'selected' : ''}>Dating</option>
        <option value="friendship" ${draft.intent === 'friendship' ? 'selected' : ''}>Friendship</option>
      </select>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <button class="btn primary" type="button" id="datingDraftSave">Save private draft</button>
        <button class="btn ghost" type="button" id="datingDraftDelete">Delete draft</button>
      </div>
      <p class="muted small" id="datingDraftStatus" role="status" aria-live="polite">Saved only in this browser. Not visible to other PIKK users.</p>
    </section>
    <div class="card">
      <h3>Choose your experience</h3>
      <p class="muted">Dating is for romantic mutual matches. Random Chat is for spontaneous conversations and friendships. These are separate opt-in experiences.</p>
      <div class="row wrap" style="gap:8px">
        <a class="btn primary" href="#/dating" aria-current="page">Dating · current section</a>
        <a class="btn ghost" href="#/connect#connect-random-chat">Random Chat · 18+ TEST MODE</a>
      </div>
      <p class="muted small">Random Chat never automatically creates a dating match. No camera is started when you open either page.</p>
    </div>
    <div class="card">
      <h3>Dating Live & Connections</h3>
      <p class="muted">Browse the existing Live area. Live sessions are currently a test-mode experience; gifts never buy consent or a match.</p>
      <a class="btn primary" href="#/live">Open Live</a>
      <a class="btn ghost" href="#/connect">PIKK Connect · test mode</a>
    </div>
    <div class="card">
      <h3>Privacy & safety</h3>
      <p class="muted">Dating will require verified adult eligibility, explicit profile opt-in, private mutual consent, blocking, reporting and account deletion before launch. Camera and microphone permissions are never requested on this page.</p>
    </div>
  `, { lead: 'Dating · mutual matches · live connections' });
}

export function bindDating(root = document) {
  const name = root.querySelector('#datingDraftName');
  const bio = root.querySelector('#datingDraftBio');
  const intent = root.querySelector('#datingDraftIntent');
  const status = root.querySelector('#datingDraftStatus');
  if (!name || !bio || !intent || !status) return;
  root.querySelector('#datingDraftSave')?.addEventListener('click', () => {
    try {
      saveDatingDraft({ name: name.value, bio: bio.value, intent: intent.value });
      status.textContent = 'Private draft saved on this device. Not published.';
    } catch {
      status.textContent = 'Unable to save on this device. Storage may be disabled.';
    }
  });
  root.querySelector('#datingDraftDelete')?.addEventListener('click', () => {
    clearDatingDraft();
    name.value = '';
    bio.value = '';
    intent.value = 'not-sure';
    status.textContent = 'Private dating draft deleted from this device.';
  });
}
