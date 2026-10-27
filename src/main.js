import './styles.css';
import { DRAWER_LINKS, TABBAR, COMING_SOON } from './data.js';
import { getState, ensureDemoPosts, markSplash } from './store.js';
import { startRouter, onRoute, getRoute } from './router.js';
import { ICONS, esc, toast } from './ui.js';

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
};

function buildTabbar() {
  const el = document.getElementById('tabbar');
  el.innerHTML = TABBAR.map(
    (t) =>
      `<a href="${t.href}" data-path="${t.href.replace('#', '')}">${ICONS[t.icon] || ''}<span>${esc(t.label)}</span></a>`
  ).join('');
}

function buildDrawer() {
  const el = document.getElementById('sideNav');
  el.innerHTML =
    `<h2>DBS Network</h2>` +
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
    a.classList.toggle('on', a.getAttribute('data-path') === path);
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
