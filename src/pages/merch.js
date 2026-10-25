import { MERCH } from '../data.js';
import { esc, shellPage, toast } from '../ui.js';

export function renderMerch() {
  const cards = MERCH.map(
    (m) => `
    <article class="merch-card">
      <img src="${esc(m.image)}" alt="${esc(m.name)}" loading="lazy" />
      <div class="body">
        <div class="cat">${esc(m.category)}</div>
        <strong style="font-size:13px;line-height:1.3">${esc(m.name)}</strong>
        <div class="price">$${m.price}</div>
        <a class="btn primary block shop-link" href="${esc(m.shopUrl)}" target="_blank" rel="noopener" data-name="${esc(m.name)}">
          Shop on Foreign X-Change
        </a>
        <span class="chip">TEST MODE · external checkout</span>
      </div>
    </article>`
  ).join('');

  const body = `
    <div class="card">
      <h2>Foreign X-Change</h2>
      <p class="muted">Physical merch checkout happens on <a href="https://foreignx-change.com" target="_blank" rel="noopener" style="color:var(--sk)">foreignx-change.com</a> — not inside DBS. Shipping & taxes calculated there.</p>
      <a class="btn primary" href="https://foreignx-change.com" target="_blank" rel="noopener">Visit Foreign X-Change</a>
    </div>
    <div class="merch-grid">${cards}</div>
  `;
  return shellPage('Merch', body, { lead: 'Hats $30 · Tees $65 · Jackets $200' });
}

export function bindMerch(root) {
  root.querySelectorAll('.shop-link').forEach((a) => {
    a.addEventListener('click', () => {
      toast('TEST MODE — opening Foreign X-Change');
    });
  });
}
