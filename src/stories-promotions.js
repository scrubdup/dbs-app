// Owner-approved Stories and six-slot sponsored placements. Visual preview only; no paid booking or story publishing.
export const PIKK_FEATURED_PRICES = Object.freeze([
  { tier: 'Premium Spotlight', day: 199, week: 999, count: 1, className: 'premium' },
  { tier: 'Featured Box', day: 99, week: 499, count: 2, className: 'medium' },
  { tier: 'Promo Box', day: 49, week: 249, count: 3, className: 'small' },
]);
export function mountStoriesAndPromotions(app, path) {
  if (path !== '/home' && path !== '/videos') return;
  const page = app.querySelector('.page') || app;
  const region = document.createElement('section');
  region.className = 'pikk-story-promotions';
  region.setAttribute('aria-label', 'Stories and sponsored features');
  const stories = ['Your Story', 'Creators', 'Artists', 'Friends', 'Trending'];
  region.innerHTML = `
    <section class="pikk-stories" aria-labelledby="pikk-stories-title">
      <div class="pikk-promos-heading"><h2 id="pikk-stories-title">Stories</h2><span class="pikk-preview-label">Preview · publishing coming soon</span></div>
      <div class="pikk-stories-row" role="list">
        ${stories.map((name, i) => `<div class="pikk-story" role="listitem"><span class="pikk-story-ring" aria-hidden="true">${i === 0 ? '+' : name.charAt(0)}</span><span>${name}</span></div>`).join('')}
      </div>
    </section>
    <section class="pikk-featured" aria-labelledby="pikk-featured-title">
      <div class="pikk-promos-heading"><h2 id="pikk-featured-title">Featured on PIKK</h2><span class="pikk-sponsored-label">Sponsored · preview inventory</span></div>
      <div class="pikk-featured-grid">
        ${PIKK_FEATURED_PRICES.flatMap(p => Array.from({length:p.count}, (_, i) => `<div class="pikk-featured-slot ${p.className}" aria-label="${p.tier} promotion preview">
          <span class="pikk-slot-label">${p.tier}${p.count > 1 ? ' ' + (i + 1) : ''}</span>
          <span class="pikk-slot-symbol" aria-hidden="true">▶</span>
          <strong>$${p.day}<small> / 24 hours</small></strong>
          <span class="pikk-slot-week">$ ${p.week} / 7 days</span>
        </div>`)).join('')}
      </div>
      <p class="pikk-featured-note">Pricing per placement, per page. Booking and payment are not enabled yet. No guaranteed views.</p>
    </section>`;
  const head = page.querySelector(':scope > .page-head');
  if (head) head.insertAdjacentElement('afterend', region);
  else page.prepend(region);
}
