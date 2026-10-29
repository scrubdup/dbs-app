import {esc, shellPage, toast} from '../ui.js';
import {normalizeShieldSubmission,readShieldIntakes,saveShieldIntake,removeShieldIntake,RIGHTS_OPTIONS} from '../pikk-shield.js';
const data = () => readShieldIntakes(window.localStorage);
export function renderShield() {
  const entries = data();
  const history = entries.length ? entries.map(e=>`
    <article class="card shield-entry" data-shield-id="${esc(e.id)}">
      <div class="row wrap"><strong>${esc(e.title)}</strong><span class="chip">${esc(e.status)}</span></div>
      <p class="muted">${esc(e.owner)} · ${esc(e.rights)}</p>
      <div class="row wrap"><small>${new Date(e.at).toLocaleDateString()}</small><button type="button" class="btn ghost shield-delete" data-id="${esc(e.id)}">Delete local draft</button></div>
    </article>`).join('') : '<p class="muted">No rights declarations saved on this device.</p>';
  return shellPage('PIKK Shield', `
    <div class="shield-studio">
      <header class="shield-hero">
        <div class="shield-kicker">PIKK CREATOR PROTECTION · EARLY ACCESS</div>
        <h2>Your music. Your rights. Your control.</h2>
        <p>Record a draft ownership declaration for music you have rights to. This prototype saves information only on this device.</p>
        <p class="shield-notice"><strong>TEST MODE:</strong> No upload scanning, automated fingerprinting, copyright registration, takedown, or staff review is active. <a href="#/creator-rights">Review creator rights and impersonation rules</a>. These records are not sent to PIKK.</p>
      </header>
      <div class="shield-grid">
        <section class="card shield-panel">
          <h3>Rights declaration draft</h3>
          <p class="muted">Only certify work you own or are authorized to distribute. Do not enter confidential agreements or private documents.</p>
          <form id="shieldForm">
            <div class="field"><label for="shieldTitle">Song or album title *</label><input id="shieldTitle" name="title" maxlength="120" required /></div>
            <div class="field"><label for="shieldOwner">Rights holder / artist *</label><input id="shieldOwner" name="owner" maxlength="100" required /></div>
            <div class="field"><label for="shieldRights">Rights basis *</label><select id="shieldRights" name="rights" required>${RIGHTS_OPTIONS.map(o=>`<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select></div>
            <div class="field"><label for="shieldContact">Contact for future review *</label><input id="shieldContact" name="contact" maxlength="180" required placeholder="Artist email or business contact" /></div>
            <div class="field"><label for="shieldSource">Official public source link (optional)</label><input id="shieldSource" name="source" type="url" placeholder="https://..." /></div>
            <div class="field"><label for="shieldNotes">Rights details (optional)</label><textarea id="shieldNotes" name="notes" maxlength="800" placeholder="Describe your original work or license permission"></textarea></div>
            <label class="shield-certify"><input id="shieldCertify" type="checkbox" required /> I certify that I own or am authorized to use these rights, and understand that this is a local draft, not registration or a submitted claim.</label>
            <button type="submit" class="btn primary">Save rights draft on this device</button>
          </form>
        </section>
        <section class="card shield-panel">
          <h3>Protection roadmap</h3>
          <div class="shield-roadmap">
            <div><strong>01 · Rights declarations</strong><span>Local drafts available now; secure submission and admin review not connected</span></div>
            <div><strong>02 · Audio fingerprinting</strong><span>Planned — no matching or altered-audio detection active</span></div>
            <div><strong>03 · Dispute and appeals</strong><span>Planned — no claim or takedown enforcement active</span></div>
            <div><strong>04 · External platform notices</strong><span>Planned — PIKK cannot automatically remove copies from YouTube, Apple or Spotify</span></div>
          </div>
          <h3>My local drafts (${entries.length})</h3>
          <div class="shield-history">${history}</div>
        </section>
      </div>
    </div>`, {lead:'Rights declaration preview · No official copyright protection is active yet'});
}
export function bindShield(root) {
  root.querySelector('#shieldForm')?.addEventListener('submit', event=>{
    event.preventDefault();
    const f=event.currentTarget;
    try {
      const item=normalizeShieldSubmission({
        title:f.elements.title.value,owner:f.elements.owner.value,rights:f.elements.rights.value,
        contact:f.elements.contact.value,source:f.elements.source.value,notes:f.elements.notes.value,
        certified:root.querySelector('#shieldCertify').checked
      });
      saveShieldIntake(window.localStorage,item);
      toast('Local rights draft saved — not submitted');
      location.hash = '#/shield?updated=1';
      // Re-render through an explicit hash update (even if the route was already open).
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } catch(e){toast(e.message)}
  });
  root.querySelectorAll('.shield-delete').forEach(b=>b.addEventListener('click',()=>{
    removeShieldIntake(window.localStorage,b.dataset.id);
    toast('Local draft deleted');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }));
}
