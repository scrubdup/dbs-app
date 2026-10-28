import { shellPage, esc } from '../ui.js';
import { PIKK_GAMES, arcadeArtSrc } from '../games/arcade-catalog.js';

export function renderGames() {
  return shellPage('PIKK Arcade', `
    <section class="pikk-arcade-intro card" aria-label="PIKK Arcade">
      <div class="pikk-arcade-heading">
        <div>
          <p class="kicker">Play · Compete · Hang out</p>
          <div class="pikk-arcade-brand"><img src="${esc(arcadeArtSrc({ artwork: '/brand/pikk-official-approved.jpg' }))}" alt="PIKK" loading="eager" decoding="async"/><span>ARCADE</span></div>
          <p>15 original game concepts. Find your favorites, see the art, and follow their development.</p>
        </div>
        <span class="pikk-arcade-icon" aria-hidden="true">🎮</span>
      </div>
      <p class="pikk-arcade-disclosure">ALL GAMES COMING SOON · Gallery previews, not playable releases. Play Chips have no cash value or cash-out.</p>
    </section>
    <div class="pikk-arcade-toolbar"><strong>15 upcoming games</strong><span>PLAY • COMPETE • HANG OUT</span></div>
    <div class="pikk-arcade-grid">
      ${PIKK_GAMES.map((game, index) => `
        <article class="pikk-arcade-card pikk-game-${esc(game.theme)}">
          <div class="pikk-arcade-card-header"><span class="pikk-arcade-number">${index+1}</span><h3>${esc(game.name)}</h3></div>
          <div class="pikk-arcade-art" aria-label="${esc(game.name)} preview artwork">
            ${game.artwork ? `<img src="${esc(arcadeArtSrc(game))}" alt="${esc(game.name)} concept artwork" loading="lazy" decoding="async"/>` : `<span class="pikk-arcade-symbol" aria-hidden="true">${game.icon}</span>`}
          </div>
          <div class="pikk-arcade-copy">
            <span class="pikk-arcade-players">♙ ${esc(game.players)} ${game.players==='1'?'Player':'Players'}</span>
            <p>${esc(game.description)}</p>
            ${game.href ? `<a class="pikk-arcade-action" href="${esc(game.href)}">View preview →</a>` : `<span class="pikk-arcade-action" aria-label="${esc(game.name)} coming soon">Coming Soon</span>`}
          </div>
        </article>`).join('')}
    </div>
    <p class="muted pikk-arcade-footnote">All 15 owner-supplied concept images are now displayed. Game concepts and final artwork may evolve; no gambling or real-money prizes are available.</p>
  `, { lead: 'Fifteen upcoming games · mobile-first catalog · previews only' });
}
