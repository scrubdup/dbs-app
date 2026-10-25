let toastTimer;

export function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

export function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function timeAgo(ts) {
  const s = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (s < 60) return s + 's';
  const m = Math.floor(s / 60);
  if (m < 60) return m + 'm';
  const h = Math.floor(m / 60);
  if (h < 24) return h + 'h';
  const d = Math.floor(h / 24);
  return d + 'd';
}

export function shellPage(title, bodyHtml, opts = {}) {
  /* badgeHtml: trusted markup (Home LIVE link). badge + optional badgeHref for plain chips. */
  let badge = '';
  if (opts.badgeHtml) {
    badge = opts.badgeHtml;
  } else if (opts.badge) {
    const label = esc(opts.badge);
    const aria = opts.badgeAria ? ` aria-label="${esc(opts.badgeAria)}"` : '';
    const titleAttr = opts.badgeTitle || opts.badgeAria
      ? ` title="${esc(opts.badgeTitle || opts.badgeAria)}"`
      : '';
    if (opts.badgeHref) {
      badge = `<a class="badge-phase"${aria}${titleAttr} href="${esc(opts.badgeHref)}">${label}</a>`;
    } else {
      badge = `<span class="badge-phase"${aria}${titleAttr}>${label}</span>`;
    }
  }
  const lead = opts.lead ? `<p class="lead">${opts.lead}</p>` : '';
  return `
    <section class="page">
      <header class="page-head">
        <h1>${esc(title)} ${badge}</h1>
        ${lead}
      </header>
      ${bodyHtml}
    </section>
  `;
}

export const ICONS = {
  home: '<svg viewBox="0 0 24 24"><path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  posts: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  music: '<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
  merch: '<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8zm3-3a3 3 0 0 1 6 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  explore: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  live: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".5"/></svg>',
  profile: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 19a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v5A2.5 2.5 0 0 1 16.5 14H11l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 11.5v-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 17.5V19a1 1 0 0 0 1.5.85L14 17h2.5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".55"/></svg>',
  msg: '<svg viewBox="0 0 24 24"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H9l-4 3.2V6.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
};


/** Append query params to a YouTube embed URL without breaking ?list= playlists. */
export function ytEmbedSrc(embed, extra = 'rel=0') {
  const base = String(embed || '').trim();
  if (!base) return '';
  const join = base.includes('?') ? '&' : '?';
  return `${base}${join}${extra}`;
}
