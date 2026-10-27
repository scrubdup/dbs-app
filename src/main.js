import './styles.css';
import { DRAWER_LINKS, TABBAR, COMING_SOON } from './data.js';
import { getState, ensureDemoPosts, markSplash } from './store.js';
import { startRouter, onRoute, getRoute } from './router.js';
import { ICONS, esc, toast, shellPage } from './ui.js';

import { renderHome } from './pages/home.js';
import { renderPosts, bindPosts } from './pages/posts.js';
import { renderMusic } from './pages/music.js';
import { renderMerch, bindMerch } from './pages/merch.js';
import { renderProfile, bindProfile } from './pages/profile.js';
import { renderClippers, bindClippers } from './pages/clippers.js';
import {
  renderVideos,
  renderLive,
  renderExplore,
  bindExplore,
  renderMarketplace,
  renderEarnings,
  renderMissions,
  renderPricing,
  renderAdmin,
  renderGuidelines,
  renderCommunity,
  renderSignup,
  renderMessages,
  renderShop,
  renderShopOrders,
  renderProfileShop,
  renderGiftBattles,
  renderNotifications,
  bindNotifications,
  renderFanClubs,
  renderWallet,
  bindWallet,
  renderLoyalty,
  renderMultiGuest,
  renderOpenMic,
  renderLaunch,
  renderShare,
  renderRefer,
  bindRefer,
  renderSpotlight,
  renderConnect,
  renderNotFound,
} from './pages/shells.js';

const ROUTES = {
  '/home': { render: renderHome },
  '/posts': { render: renderPosts, bind: bindPosts },
  '/create': { render: () => shellPage('Create on PIKK', `<div class="card"><h3>What would you like to create?</h3><div class="create-grid"><a class="preview-card" href="#/posts"><strong>Post</strong><span class="muted">Write a post or add an image link · local test mode</span></a><a class="preview-card" href="#/videos"><strong>Video</strong><span class="muted">Watch videos · uploading not available yet</span></a><a class="preview-card" href="#/music"><strong>Music</strong><span class="muted">Music catalog · uploading not available yet</span></a><a class="preview-card" href="#/live"><strong>Go Live</strong><span class="muted">Broadcasting is not live yet</span></a></div></div>`, { lead: 'Create · 18+ · test mode' }) },
  '/music': { render: renderMusic },
  '/vault': { render: renderMusic },
  '/merch': { render: renderMerch, bind: bindMerch },
  '/profile': { render: renderProfile, bind: bindProfile },
  '/clippers': { render: renderClippers, bind: bindClippers },
  '/videos': { render: renderVideos },
  '/live': { render: renderLive },
  '/explore': { render: renderExplore, bind: bindExplore },
  '/marketplace': { render: renderMarketplace },
  '/earnings': { render: renderEarnings },
  '/missions': { render: renderMissions },
  '/pricing': { render: renderPricing },
  '/admin': { render: renderAdmin },
  '/guidelines': { render: renderGuidelines },
  '/community': { render: renderCommunity },
  '/signup': { render: renderSignup },
  '/messages': { render: renderMessages },
  '/shop': { render: renderShop },
  '/shop-orders': { render: renderShopOrders },
  '/profile-shop': { render: renderProfileShop },
  '/giftbattles': { render: renderGiftBattles },
  '/notifications': { render: renderNotifications, bind: bindNotifications },
  '/fanclubs': { render: renderFanClubs },
  '/wallet': { render: renderWallet, bind: bindWallet },
  '/loyalty': { render: renderLoyalty },
  '/multiguest': { render: renderMultiGuest },
  '/openmic': { render: renderOpenMic },
  '/launch': { render: renderLaunch },
  '/share': { render: renderShare },
  '/refer': { render: renderRefer, bind: bindRefer },
  '/spotlight': { render: renderSpotlight },
  '/connect': { render: renderConnect },
  '/dating': { render: () => shellPage('PIKK Dating', '<div class="card"><h3>Dating is being built</h3><p class="muted">Real profiles, preferences, matching, messages, blocking and safety controls are not live yet. No fake matches or demo profiles will be shown.</p></div>', { lead: '18+ dating · not yet available' }) },
};

function buildTabbar() {
  const el = document.getElementById('tabbar');
  el.innerHTML = TABBAR.map(
    (t) =>
      `<a href="${t.href}" aria-label="${esc(t.label)}" data-path="${t.href.replace('#', '')}">${ICONS[t.icon] || ''}<span>${esc(t.label)}</span></a>`
  ).join('');
}

function buildDrawer() {
  const el = document.getElementById('sideNav');
  el.innerHTML =
    `<h2>PIKK Network</h2><a href="#/create">Create</a>` +
    DRAWER_LINKS.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join('');
}

function setDrawer(open) {
  document.getElementById('sideNav').classList.toggle('open', open);
  document.getElementById('sideNav').setAttribute('aria-hidden', open ? 'false' : 'true');
  document.getElementById('scrim').classList.toggle('show', open);
}

function updateChrome(route) {
  const path = route.path;
  document.querySelectorAll('#tabbar a').forEach((a) => {
    const active = a.getAttribute('data-path') === path;
    a.classList.toggle('on', active);
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  document.querySelectorAll('#sideNav a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('on', href === '#' + path || href === '#' + route.raw);
  });
  const user = getState().user;
  const pill = document.getElementById('tierPill');
  if (user) {
    pill.textContent = user.username;
    pill.classList.add('on');
  } else {
    pill.textContent = 'Sign in';
    pill.classList.remove('on');
  }
}

function render(route) {
  const app = document.getElementById('app');
  const entry = ROUTES[route.path];
  const html = entry ? entry.render(route) : renderNotFound(route.path);
  app.innerHTML = html;
  entry?.bind?.(app);
  updateChrome(route);
  window.scrollTo(0, 0);
  // Vault deep-link
  if (route.path === '/vault' || route.query.section === 'vault') {
    setTimeout(() => document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' }), 50);
  }
}

function initMiniPlayer() {
  const track = COMING_SOON[0];
  document.getElementById('mpTitle').textContent = track.title;
  document.getElementById('mpSub').textContent = `${track.artist} · Coming Soon`;
  document.getElementById('mpArt').src = track.cover;
  let playing = false;
  document.getElementById('mpPlay').addEventListener('click', () => {
    playing = !playing;
    document.getElementById('mpPlay').textContent = playing ? '❚❚' : '▶';
    // No audio file yet — UI-only shell
    toast(playing ? 'Coming Soon — no audio yet' : 'Paused');
  });
}

function hideSplash() {
  const splash = document.getElementById('splash');
  if (!splash) return;
  if (splash.classList.contains('hide')) return;
  splash.classList.add('hide');
  markSplash();
  setTimeout(() => splash.remove(), 500);
}

function boot() {
  ensureDemoPosts();
  buildTabbar();
  buildDrawer();
  initMiniPlayer();

  document.getElementById('menuBtn').addEventListener('click', () => setDrawer(true));
  document.getElementById('scrim').addEventListener('click', () => setDrawer(false));
  document.getElementById('sideNav').addEventListener('click', (e) => {
    if (e.target.closest('a')) setDrawer(false);
  });
  document.getElementById('notifBtn').addEventListener('click', () => {
    location.hash = '/notifications';
  });

  onRoute(render);
  startRouter();

  // PIKK startup: play approved animation once, then reveal the existing app.
  // The safety timeout also handles autoplay restrictions or missing video assets.
  const video = document.getElementById('pikkStartupVideo');
  if (video) {
    video.addEventListener('ended', hideSplash, { once: true });
    video.addEventListener('error', hideSplash, { once: true });
    const play = () => video.play().catch(hideSplash);
    if (document.readyState === 'complete') play();
    else window.addEventListener('load', play, { once: true });
  } else {
    hideSplash();
  }
  setTimeout(hideSplash, 3500);
}

boot();
