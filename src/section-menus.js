// PIKK approved category menus: route only to existing sections.
// No menu item implies that demo workflows are production services.
export const SECTION_MENU_ITEMS = Object.freeze({
  videos: [
    { title: 'Video Feed', href: '#/videos', detail: 'Watch and discover videos', icon: '▶' },
    { title: 'Shorts & Reels', href: '#/shorts', detail: 'Browse short-form clips', icon: '▣' },
    { title: 'Posts', href: '#/posts', detail: 'View the community feed', icon: '▤' },
    { title: 'Upload Video', href: '#/posts?type=video', detail: 'Available prototype publishing tools · TEST MODE', icon: '⇧' },
  ],
  connect: [
    { title: 'Connect', href: '#/connect', detail: 'Discover people and communities', icon: '♧' },
    { title: 'Communities', href: '#/community', detail: 'Explore community rooms', icon: '☷' },
    { title: 'Messages', href: '#/messages', detail: 'Open your messages', icon: '✉' },
    { title: 'Random Chat', href: '#/connect#connect-random-chat', detail: 'Preview only · real matching unavailable', icon: '◉' },
    { title: 'Multistream', href: '#/connect#connect-multistream', detail: 'Broadcast connection preview · TEST MODE', icon: '▹' },
  ],
  dating: [
    { title: 'Discover Dating', href: '#/dating', detail: 'Explore dating features · TEST MODE', icon: '♡' },
    { title: 'Messages', href: '#/messages', detail: 'Open private messages', icon: '✉' },
    { title: 'My Profile', href: '#/profile', detail: 'Review your profile settings', icon: '◉' },
    { title: 'Safety Guidelines', href: '#/guidelines', detail: 'Review community safety rules', icon: '◇' },
  ],
  games: [
    { title: 'PIKK Arcade', href: '#/games', detail: 'Browse upcoming PIKK games · preview', icon: '♜' },
    { title: 'Block Wars', href: '#/blockwars', detail: 'Development preview · not live multiplayer', icon: '▣' },
  ],
  shop: [
    { title: 'PIKK Shop', href: '#/shop', detail: 'Browse available products', icon: '▤' },
    { title: 'Marketplace', href: '#/marketplace', detail: 'Community listings · TEST MODE', icon: '◇' },
    { title: 'Foreign X-Change', href: '#/merch', detail: 'Official merchandise', icon: '✦' },
    { title: 'Creator Pricing', href: '#/pricing', detail: 'Explore creator selling information', icon: '$' },
  ],
});

const IDS = { videos: 'pikkVideosMenu', connect: 'pikkConnectMenu', dating: 'pikkDatingMenu', games: 'pikkGamesMenu', shop: 'pikkShopMenu' };

export function closeSectionMenus(restoreFocus = false) {
  for (const [name, id] of Object.entries(IDS)) {
    const panel = document.getElementById(id);
    if (!panel || panel.hidden) continue;
    panel.hidden = true;
    const trigger = document.querySelector(`#tabbar a[href="#/${name}"]`);
    trigger?.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger?.focus();
  }
}

export function toggleSectionMenu(name, trigger) {
  if (!Object.hasOwn(SECTION_MENU_ITEMS, name)) return;
  const id = IDS[name];
  let panel = document.getElementById(id);
  if (!panel) {
    panel = document.createElement('div');
    panel.id = id;
    panel.className = 'pikk-create-overlay';
    panel.hidden = true;
    // All labels and URLs are fixed, audited developer literals; no untrusted HTML.
    panel.innerHTML = `<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="${id}Title">
      <div class="pikk-create-head"><strong id="${id}Title">${name[0].toUpperCase() + name.slice(1)} on PIKK</strong><button type="button" class="btn ghost" data-section-close aria-label="Close ${name} menu">✕</button></div>
      <div class="pikk-create-options">${SECTION_MENU_ITEMS[name].map(item => `<a href="${item.href}">${item.icon} ${item.title}<small>${item.detail}</small></a>`).join('')}</div>
      <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Production features are not enabled until secure services are available.</p>
    </div>`;
    document.body.appendChild(panel);
    panel.addEventListener('click', event => {
      if (event.target === panel || event.target.closest('[data-section-close]')) closeSectionMenus(true);
      else if (event.target.closest('.pikk-create-options a')) closeSectionMenus();
    });
    document.addEventListener('keydown', event => {
      if (panel.hidden) return;
      if (event.key === 'Escape') { event.preventDefault(); closeSectionMenus(true); return; }
      if (event.key !== 'Tab') return;
      const focusable = [...panel.querySelectorAll('button:not([disabled]), a[href]')];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (!panel.contains(document.activeElement)) { event.preventDefault(); (event.shiftKey ? last : first).focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    window.addEventListener('hashchange', () => closeSectionMenus());
  }
  const opening = panel.hidden;
  closeSectionMenus();
  document.getElementById('pikkMusicMenu')?.dispatchEvent(new Event('pikk-close-menu'));
  const music = document.getElementById('pikkMusicMenu');
  if (music && !music.hidden) {
    music.hidden = true;
    document.querySelector('#tabbar a[href="#/music"]')?.setAttribute('aria-expanded', 'false');
  }
  const create = document.getElementById('pikkCreateMenu');
  if (create && !create.hidden) {
    create.hidden = true;
    document.querySelector('#tabbar a[href="#/create"]')?.setAttribute('aria-expanded', 'false');
  }
  panel.hidden = !opening;
  trigger?.setAttribute('aria-expanded', String(opening));
  if (opening) panel.querySelector('[data-section-close]')?.focus();
  else trigger?.focus();
}
