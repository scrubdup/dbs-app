import { MERCH } from '../data.js';
import { esc, shellPage, toast } from '../ui.js';

/** §21 Foreign X-Change Merch — showcase only; checkout on foreignx-change.com */
export function renderMerch() {
  const cards = MERCH.map(
    (m) => `
    <article class="merch-card">
      <div class="img-wrap" data-zoom="${esc(m.image)}" role="button" tabindex="0" aria-label="Zoom ${esc(m.name)}">
        <img src="${esc(m.image)}" alt="${esc(m.name)}" loading="lazy" />
      </div>
      <div class="body">
        <div class="cat">${esc(m.category)}</div>
        <div class="name">${esc(m.name)}</div>
        <div class="price">$${m.price}</div>
        <a class="btn primary block shop-link" href="${esc(m.shopUrl)}" target="_blank" rel="noopener" data-name="${esc(m.name)}">
          Shop on Foreign X-Change
        </a>
        <span class="merch-note">Redirects to Foreign X-Change for secure checkout · shipping &amp; tax calculated there</span>
        <span class="chip">TEST MODE · external checkout</span>
      </div>
    </article>`
  ).join('');

  const body = `
    <div class="card merch-hero">
      <p class="kicker">Physical merch</p>
      <h2 style="margin:0 0 8px">Foreign X-Change</h2>
      <p class="muted">All orders, sizes, shipping, and payment happen on
        <a class="fx-link" href="https://foreignx-change.com" target="_blank" rel="noopener">foreignx-change.com</a>
        — not inside PIKK. Product links open the shop homepage until verified per-item URLs are provided.</p>
      <a class="btn primary" href="https://foreignx-change.com" target="_blank" rel="noopener">Visit Foreign X-Change</a>
      <p class="merch-note" style="margin-top:10px">Hats $30 · Tees $65 · Jackets $200 · prices exclude shipping</p>
    </div>
    <div class="merch-grid">${cards}</div>
    <div id="merchLightbox" class="lightbox" aria-hidden="true"><img alt="" /></div>
  `;
  return shellPage('Merch', body, { lead: 'Foreign X-Change showcase · 10 products · external checkout only' });
}

export function bindMerch(root) {
  root.querySelectorAll('.shop-link').forEach((a) => {
    a.addEventListener('click', () => {
      toast('TEST MODE — opening Foreign X-Change');
    });
  });

  const lb = root.querySelector('#merchLightbox');
  const lbImg = lb?.querySelector('img');
  const openZoom = (src) => {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lb.classList.add('show');
    lb.setAttribute('aria-hidden', 'false');
  };
  const closeZoom = () => {
    lb?.classList.remove('show');
    lb?.setAttribute('aria-hidden', 'true');
  };
  root.querySelectorAll('.img-wrap').forEach((el) => {
    const go = () => openZoom(el.dataset.zoom);
    el.addEventListener('click', go);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        go();
      }
    });
  });
  lb?.addEventListener('click', closeZoom);
}
