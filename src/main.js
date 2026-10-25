import './styles.css';
import { DRAWER_LINKS, TABBAR, COMING_SOON } from './data.js';
import { getState, ensureDemoPosts, markSplash, shouldShowSplash, getMembership } from './store.js';
import { startRouter, onRoute } from './router.js';
import { ICONS, esc } from './ui.js';
import { asset, rewriteAssetUrls } from './asset.js';

import { renderHome, bindHome } from './pages/home.js';
import { renderAdmin, bindAdmin } from './pages/admin.js';
import { renderPosts, bindPosts } from './pages/posts.js';
import { renderMusic, bindMusic } from './pages/music.js';
import { renderMerch, bindMerch } from './pages/merch.js';
import { renderProfile, bindProfile } from './pages/profile.js';
import { renderClippers, bindClippers } from './pages/clippers.js';
import { renderLive, bindLive } from './pages/live.js';
import { renderMarketplace, bindMarketplace } from './pages/marketplace.js';
import { renderMessages, bindMessages } from './pages/messages.js';
import { renderWallet, bindWallet } from './pages/wallet.js';
import { renderEarnings, bindEarnings } from './pages/earnings.js';
import { renderMissions, bindMissions } from './pages/missions.js';
import { renderExplore, bindExplore } from './pages/explore.js';
import { renderGiftBattles, bindGiftBattles } from './pages/giftbattles.js';
import { renderMultiGuest, bindMultiGuest } from './pages/multiguest.js';
import { renderFanClubs, bindFanClubs } from './pages/fanclubs.js';
import { renderLoyalty, bindLoyalty } from './pages/loyalty.js';
import { renderOpenMic, bindOpenMic } from './pages/openmic.js';
import { renderSpotlight, bindSpotlight } from './pages/spotlight.js';
import { renderRestream, bindRestream } from './pages/restream.js';
import {
  renderVideos,
  bindVideos,
  renderPricing,
  renderGuidelines,
  renderCommunity,
  renderSignup,
  renderShop,
  bindShop,
  renderNotifications,
  bindNotifications,
  renderLaunch,
  renderShare,
  bindShare,
  renderRefer,
  bindRefer,
  renderConnect,
  bindConnect,
  renderNotFound,
} from './pages/shells.js';

const ROUTES = {
  '/home': { render: renderHome, bind: bindHome },
  '/posts': { render: renderPosts, bind: bindPosts },
  '/music': { render: renderMusic, bind: bindMusic },
  '/vault': { render: renderMusic, bind: bindMusic },
  '/merch': { render: renderMerch, bind: bindMerch },
  '/profile': { render: renderProfile, bind: bindProfile },
  '/clippers': { render: renderClippers, bind: bindClippers },
  '/videos': { render: renderVideos, bind: bindVideos },
  '/live': { render: renderLive, bind: bindLive },
  '/explore': { render: renderExplore, bind: bindExplore },
  '/marketplace': { render: renderMarketplace, bind: bindMarketplace },
  '/earnings': { render: renderEarnings, bind: bindEarnings },
  '/missions': { render: renderMissions, bind: bindMissions },
  '/pricing': { render: renderPricing },
  '/admin': { render: renderAdmin, bind: bindAdmin },
  '/guidelines': { render: renderGuidelines },
  '/community': { render: renderCommunity },
  '/signup': { render: renderSignup },
  '/messages': { render: renderMessages, bind: bindMessages },
  '/shop': { render: renderShop, bind: bindShop },
  '/giftbattles': { render: renderGiftBattles, bind: bindGiftBattles },
  '/notifications': { render: renderNotifications, bind: bindNotifications },
  '/fanclubs': { render: renderFanClubs, bind: bindFanClubs },
  '/wallet': { render: renderWallet, bind: bindWallet },
  '/loyalty': { render: renderLoyalty, bind: bindLoyalty },
  '/multiguest': { render: renderMultiGuest, bind: bindMultiGuest },
  '/openmic': { render: renderOpenMic, bind: bindOpenMic },
  '/launch': { render: renderLaunch },
  '/share': { render: renderShare, bind: bindShare },
  '/refer': { render: renderRefer, bind: bindRefer },
  '/spotlight': { render: renderSpotlight, bind: bindSpotlight },
  '/restream': { render: renderRestream, bind: bindRestream },
  '/connect': { render: renderConnect, bind: bindConnect },
};

function buildTabbar() {
  const el = document.getElementById('tabbar');
  el.innerHTML = TABBAR.map(
    (t) =>
      `<a href="${t.href}" data-path="${t.href.replace('#', '')}">${ICONS[t.icon] || ''}<span>${esc(t.label)}</span></a>`
  ).join('');
  el.style.gridTemplateColumns = `repeat(${TABBAR.length}, 1fr)`;
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
    const mem = getMembership();
    const tier =
      mem === 'inner' ? 'Inner' : mem === 'backstage' ? 'Backstage' : mem === 'skeet+' ? 'Skeet+' : user.username;
    pill.textContent = tier;
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
  rewriteAssetUrls(app);
  entry?.bind?.(app);
  updateChrome(route);
  window.scrollTo(0, 0);
  // Vault deep-link
  if ((route.path === '/music' || route.path === '/vault') && (location.hash.includes('vault') || route.path === '/vault')) {
    setTimeout(() => document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' }), 50);
  }
}

function initMiniPlayer() {
  const track = COMING_SOON[0];
  document.getElementById('mpTitle').textContent = track.title;
  document.getElementById('mpSub').textContent = `${track.artist} · Coming Soon`;
  document.getElementById('mpArt').src = asset(track.cover);
  let playing = false;
  const mpPlay = document.getElementById('mpPlay');
  mpPlay.dataset.playing = '0';
  mpPlay.addEventListener('click', () => {
    playing = !playing;
    mpPlay.textContent = playing ? '❚❚' : '▶';
    mpPlay.dataset.playing = playing ? '1' : '0';
    import('./ui.js').then(({ toast }) =>
      toast(playing ? 'Coming Soon — no audio yet (UI-only · no DBS-hosted audio)' : 'Paused')
    );
  });
}

function hideSplash() {
  // Design/QA: ?holdSplash=1 keeps official loading art visible for screenshots
  if (new URLSearchParams(location.search).has('holdSplash')) return;
  const splash = document.getElementById('splash');
  if (!splash || splash.classList.contains('hide')) return;
  splash.classList.add('hide');
  markSplash();
  setTimeout(() => splash.remove(), 500);
}

function boot() {
  ensureDemoPosts();
  rewriteAssetUrls(document);
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

  // Splash §19: first visit shows /public/loading/DBS_Official_Loading_Screen.png
  // Dismiss ASAP when ready — no artificial long delay. ?holdSplash=1 for evidence.
  if (!shouldShowSplash() && !new URLSearchParams(location.search).has('holdSplash')) {
    const splash = document.getElementById('splash');
    if (splash) splash.remove();
  } else {
    let done = false;
    const ready = () => {
      if (done) return;
      done = true;
      hideSplash();
    };
    const dismiss = () => setTimeout(ready, 320);
    if (document.readyState === 'complete') dismiss();
    else window.addEventListener('load', dismiss, { once: true });
    setTimeout(ready, 1800); // safety max if load hangs
  }
}

boot();
