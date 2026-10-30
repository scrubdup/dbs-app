import '../updates.css';
import { esc, shellPage } from '../ui.js';
import { asset } from '../asset.js';
import { freshPikkUrl } from '../refresh-url.js';

// This is the SHA of the source commit that produced the currently loaded bundle,
// not a claim about the latest available remote release.
export const PIKK_BUILD_SHA = import.meta.env.VITE_BUILD_SHA || '';
// Curated, merged UI releases only. Keep this list factual; planned backend features are not shipped.
export const RECENT_RELEASES = Object.freeze([
  { title: 'Profile: True Public View', detail: 'Public view now shows your actual read-only profile instead of reopening the edit screen. Your original posts and Edit profile shortcut remain available.', route: '#/profile', pr: 163, kind: 'PROFILE · TEST MODE' },
  { title: 'Explore: Correct Creator Links', detail: 'People search results open the matched creator’s profile instead of redirecting to your own.', route: '#/explore', pr: 162, kind: 'NAVIGATION · TEST MODE' },
  { title: 'Merch: Full-Size Photo Preview', detail: 'Open original product images full size with a visible Close control, Escape key, keyboard focus containment and focus return.', route: '#/merch', pr: 161, kind: 'ACCESSIBILITY · PREVIEW' },
  { title: 'Messages: Clear Filters', detail: 'Clear search and Unread only together to restore the full browser-local inbox and return focus to search.', route: '#/messages', pr: 160, kind: 'MESSAGES · TEST MODE' },
  { title: 'Shop: Reset Sort and Filters', detail: 'Reset view now restores Featured order along with search and category filters, keeping the original merchandise catalog.', route: '#/shop', pr: 159, kind: 'SHOP · TEST MODE' },
]);

export function renderUpdates() {
  const build = PIKK_BUILD_SHA ? PIKK_BUILD_SHA.slice(0, 8) : 'preview';
  const cards = RECENT_RELEASES.map((release, index) => `
    <article class="pikk-update-card">
      <span class="pikk-update-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>
      <div class="pikk-update-card-copy">
        <span class="pikk-update-kind">${esc(release.kind)}</span>
        <h3>${esc(release.title)}</h3>
        <p>${esc(release.detail)}</p>
        <div class="pikk-update-links">
          <a class="btn primary" href="${esc(release.route)}">See in PIKK</a>
          <a class="pikk-update-source" href="https://github.com/scrubdup/pikk-app/pull/${release.pr}" target="_blank" rel="noopener noreferrer">Code update #${release.pr}</a>
        </div>
      </div>
    </article>`).join('');

  return shellPage('PIKK Updates', `
    <section class="pikk-updates-hero" aria-label="PIKK app release information">
      <div>
        <p class="kicker">PIKK · WHAT'S NEW</p>
        <h2>See what changed. <span>Know what loaded.</span></h2>
        <p>Five recent user-visible improvements are below. Open each updated section and see exactly what shipped. Backend services marked TEST MODE are not production-ready.</p>
        <div class="pikk-updates-build">
          <span>Version loaded on this device</span>
          <strong id="pikkLoadedBuild" data-build="${esc(build)}">${esc(build)}</strong>
        </div>
        <div class="pikk-updates-actions">
          <button class="btn primary" type="button" id="pikkUpdatesRefresh">Check for latest version</button>
          <a class="btn ghost" href="#/home">Return home</a>
        </div>
      </div>
      <div class="pikk-updates-hero-mark"><img src="${esc(asset('brand/pikk-official-approved.jpg'))}" alt="PIKK official chrome logo" loading="eager"></div>
    </section>
    <section class="pikk-updates-list" aria-label="Recent published updates">
      <h2>Latest verified improvements</h2>
      ${cards}
    </section>
    <p class="pikk-updates-note">A refresh reloads this browser's app bundle; it does not clear your account or local demo data. If a change still does not appear, compare the version above with the published source commit.</p>
  `, { lead: 'A clear record of recent PIKK improvements.' });
}

export function bindUpdates(root) {
  root.querySelector('#pikkUpdatesRefresh')?.addEventListener('click', () => {
    window.location.assign(freshPikkUrl(window.location.href));
  });
}
