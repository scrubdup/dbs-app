import { submitClipperApp, getState } from '../store.js';
import { esc, toast, shellPage, timeAgo } from '../ui.js';

export function renderClippers() {
  const apps = getState().clipperApps;
  const form = `
    <div class="card">
      <h3>Clipper application</h3>
      <p class="muted">No minimum followers. Admin reviews every application.</p>
      <div class="field"><label>Name</label><input id="cName" required /></div>
      <div class="field"><label>Email</label><input id="cEmail" type="email" required /></div>
      <div class="field"><label>Age</label><input id="cAge" type="number" min="13" max="120" /></div>
      <div class="grid-2">
        <div class="field"><label>TikTok</label><input id="cTiktok" placeholder="@ or URL" /></div>
        <div class="field"><label>Instagram</label><input id="cIg" /></div>
        <div class="field"><label>YouTube</label><input id="cYt" /></div>
        <div class="field"><label>X / Twitter</label><input id="cX" /></div>
      </div>
      <div class="field"><label>Monthly views (approx)</label><input id="cViews" /></div>
      <div class="field"><label>Niche / experience</label><textarea id="cNiche"></textarea></div>
      <div class="field"><label>Work sample links</label><textarea id="cSamples" placeholder="Paste URLs"></textarea></div>
      <button class="btn primary block" id="cSubmit">Submit application</button>
    </div>
    <div class="card">
      <h3>Your submissions (this device)</h3>
      ${
        apps.length
          ? `<ul class="list-plain">${apps
              .map(
                (a) =>
                  `<li><span>${esc(a.name)} · ${esc(a.status)}</span><span class="muted">${timeAgo(a.at)}</span></li>`
              )
              .join('')}</ul>`
          : '<p class="muted">None yet.</p>'
      }
    </div>
  `;
  return shellPage('Clippers', form, {
    lead: 'Apply → admin approve → paid campaigns & tracked links.',
  });
}

export function bindClippers(root) {
  root.querySelector('#cSubmit')?.addEventListener('click', () => {
    const name = root.querySelector('#cName')?.value?.trim();
    const email = root.querySelector('#cEmail')?.value?.trim();
    if (!name || !email) return toast('Name and email required');
    submitClipperApp({
      name,
      email,
      age: root.querySelector('#cAge')?.value,
      tiktok: root.querySelector('#cTiktok')?.value,
      instagram: root.querySelector('#cIg')?.value,
      youtube: root.querySelector('#cYt')?.value,
      x: root.querySelector('#cX')?.value,
      views: root.querySelector('#cViews')?.value,
      niche: root.querySelector('#cNiche')?.value,
      samples: root.querySelector('#cSamples')?.value,
    });
    toast('Application saved for admin review');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
}
