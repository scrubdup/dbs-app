/**
 * PIKK Shop consumer landing — phase-one catalog shell.
 *
 * Uses the actual existing Foreign X-Change merchandise catalog; purchases
 * remain on the merchant's site. In-platform sellers, checkout, verification,
 * orders and affiliate commissions are NOT active.
 */
import { MERCH } from '../data.js';
import { esc, shellPage } from '../ui.js';

const CATEGORIES = ['All', 'Hats', 'Shirts', 'Jackets'];
const FUTURE_DEPARTMENTS = [
  'Ladies Shop', "Men's Shop", 'Beauty & Hair', 'Fashion & Accessories',
  'Lifestyle & Home', 'Creator Brands', 'Live Shopping', 'Deals',
];

export function filterPikkShopProducts(products, category = 'All', query = '') {
  const normalized = String(query || '').trim().toLocaleLowerCase();
  return products.filter((item) =>
    (category === 'All' || item.category === category) &&
    (!normalized || `${item.name} ${item.category}`.toLocaleLowerCase().includes(normalized))
  );
}

function merchCard(item) {
  return `
    <article class="merch-card pikk-shop-product" data-product-id="${esc(item.id)}">
      <div class="img-wrap">
        <img src="${esc(item.image)}" alt="${esc(item.name)}" loading="lazy" />
      </div>
      <div class="body">
        <span class="chip">${esc(item.category)}</span>
        <h3 class="name">${esc(item.name)}</h3>
        <p class="price">$ ${Number(item.price).toFixed(2)}</p>
        <a class="btn primary block" href="${esc(item.shopUrl)}" target="_blank" rel="noopener noreferrer">
          Shop on Foreign X-Change ↗
        </a>
        <p class="merch-note">External merchant checkout. Confirm sizes, stock, shipping, taxes and returns on the merchant site.</p>
      </div>
    </article>`;
}

export function renderPikkShop() {
  const chips = CATEGORIES.map((category) =>
    `<button type="button" class="btn ${category === 'All' ? 'primary' : 'ghost'} pikk-shop-filter"
      data-category="${esc(category)}" aria-pressed="${category === 'All' ? 'true' : 'false'}">${esc(category)}</button>`
  ).join('');
  const future = FUTURE_DEPARTMENTS.map((category) =>
    `<li><span>${esc(category)}</span><span class="chip">Coming Soon</span></li>`
  ).join('');
  return shellPage('PIKK Shop', `
    <section class="pikk-shop-showcase" aria-label="PIKK Shop featured store">
      <div class="pikk-shop-showcase-copy">
        <p class="kicker">PIKK SHOP · STYLE &amp; CREATOR BRANDS</p>
        <h2>Shop the culture.<br/><span>Express your style.</span></h2>
        <p>Discover authentic Foreign X-Change merchandise while PIKK's verified seller marketplace is developed.</p>
        <a class="btn primary" href="#/shop#pikkShopCatalog">Browse merchandise</a>
        <small>External merchant checkout · No PIKK in-app payments</small>
      </div>
      <div class="pikk-shop-showcase-art" aria-hidden="true"><span>✦</span><strong>SHOP</strong></div>
    </section>
    <nav class="pikk-shop-departments" aria-label="Shopping sections">
      <a href="#/shop#pikkShopCatalog">All Products</a>
      <a href="#/merch">Foreign X-Change</a>
      <a href="#/marketplace">Marketplace · Preview</a>
      <a href="#/profile-shop">Profile Accessories</a>
    </nav>
    <section class="card" aria-label="PIKK Shop information">
      <span class="chip">PIKK Shop · Phase 1 preview</span>
      <h2>Discover real merchandise</h2>
      <p>Browse existing Foreign X-Change items below. PIKK does not take payments, verify sellers or fulfill orders in this preview.</p>
      <p class="muted small">All purchases open Foreign X-Change. External orders are not subject to an automated PIKK commission.</p>
      <div class="row wrap" style="gap:8px">
        <a class="btn ghost" href="#/merch">Full Foreign X-Change showcase</a>
        <a class="btn ghost" href="#/marketplace">Sponsored offers · TEST MODE</a>
        <a class="btn ghost" href="#/profile-shop">Profile Shop · cosmetic preview</a>
      </div>
    </section>
    <section class="card pikk-shop-catalog" id="pikkShopCatalog" aria-label="Browse merchandise">
      <h3>Foreign X-Change catalog</h3>
      <label for="pikkShopSearch">Search merchandise</label>
      <input id="pikkShopSearch" type="search" placeholder="Search hats, shirts, jackets…" autocomplete="off" />
      <div class="row wrap" role="group" aria-label="Product category" style="gap:8px;margin-top:12px">
        ${chips}
      </div>
      <p class="muted small" id="pikkShopCount" aria-live="polite">${MERCH.length} items</p>
      <div class="merch-grid pikk-shop-premium-grid" id="pikkShopProducts">${MERCH.map(merchCard).join('')}</div>
      <p class="muted" id="pikkShopEmpty" hidden>No matching merchandise. Try another search or category.</p>
    </section>
    <section class="card" aria-label="Future PIKK Shop departments">
      <h3>More PIKK Shop departments</h3>
      <p class="muted small">These sections are planned, not active storefronts. No in-app checkout or seller verification is available yet.</p>
      <ul class="list-plain">${future}</ul>
    </section>
    <section class="card" aria-label="Shop safety and fees">
      <h3>Seller safety &amp; checkout</h3>
      <p class="muted">Future PIKK checkout requires verified seller onboarding, inventory checks, refunds, disputes and payment reconciliation before activation. The planned physical-goods platform fee is 7% of the applicable item subtotal, subject to final payment/legal review; it does not apply to Foreign X-Change offsite orders.</p>
      <p class="muted small">Affiliate enrollment, payable links, commissions and payouts remain disabled · Coming Soon.</p>
    </section>
  `, { lead: 'Physical merchandise · external checkout · future verified storefronts' });
}

export function bindPikkShop(root) {
  const search = root.querySelector('#pikkShopSearch');
  const cards = [...root.querySelectorAll('.pikk-shop-product')];
  const buttons = [...root.querySelectorAll('.pikk-shop-filter')];
  const count = root.querySelector('#pikkShopCount');
  const empty = root.querySelector('#pikkShopEmpty');
  let category = 'All';
  function applyFilters() {
    const ids = new Set(filterPikkShopProducts(MERCH, category, search?.value || '').map((item) => item.id));
    for (const card of cards) {
      const show = ids.has(card.dataset.productId);
      card.hidden = !show;
      card.style.display = show ? '' : 'none';
    }
    if (count) count.textContent = `${ids.size} ${ids.size === 1 ? 'item' : 'items'}`;
    if (empty) empty.hidden = ids.size > 0;
    for (const button of buttons) {
      const active = button.dataset.category === category;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('primary', active);
      button.classList.toggle('ghost', !active);
    }
  }
  search?.addEventListener('input', applyFilters);
  for (const button of buttons) {
    button.addEventListener('click', () => {
      category = button.dataset.category || 'All';
      applyFilters();
    });
  }
}
