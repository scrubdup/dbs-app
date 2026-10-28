import { shellPage, esc } from '../ui.js';
import { PIKK_GAMES } from '../games/arcade-catalog.js';

export function renderGames() {
  return shellPage('PIKK Arcade', `
    <section class="pikk-arcade-intro card">
      <div class="pikk-arcade-heading"><div>
        <p class="kicker">Play · Compete · Hang out</p>
        <h2>PIKK <span>ARCADE</span></h2>
        <p>All 15 approved games in one place. Choose a title to see its preview as development continues.</p>
      </div><span class="pikk-arcade-icon" aria-hidden="true">♜</span></div>
      <p class="pikk-arcade-disclosure">ALL GAMES COMING SOON · Gallery previews, not playable releases. Play Chips have no cash value or cash-out.</p>
    </section>
    <div class="pikk-arcade-toolbar"><strong>15 upcoming games</strong><span>Original PIKK game concepts · all previews</span></div>
    <div class="pikk-arcade-grid">
      ${PIKK_GAMES.map((game, index) => `
        <article class="pikk-arcade-card pikk-game-${esc(game.theme)}">
          <div class="pikk-arcade-card-header"><span class="pikk-arcade-number">${index+1}</span><h3>${esc(game.name)}</h3></div>
          <div class="pikk-arcade-art" aria-label="${esc(game.name)} preview artwork">
            ${game.artwork ? `<img src="${esc(game.artwork)}" alt="Block Wars fighter preview" loading="lazy" decoding="async"/>` : `<span class="pikk-arcade-symbol" aria-hidden="true">${game.icon}</span>`}
            <span class="pikk-arcade-soon">Concept Preview</span>
          </div>
          <div class="pikk-arcade-copy">
            <span class="pikk-arcade-players">♙ ${esc(game.players)} ${game.players==='1'?'Player':'Players'}</span>
            <p>${esc(game.description)}</p>
            ${game.href ? `<a class="pikk-arcade-action" href="${esc(game.href)}">View preview →</a>` : `<span class="pikk-arcade-action" aria-label="${esc(game.name)} coming soon">Coming Soon</span>`}
          </div>
        </article>`).join('')}
    </div>
    <p class="muted" style="font-size:12px;margin-top:16px">Game art is a temporary themed preview except for the existing Block Wars still. Approved custom game images are still being integrated; no gambling or real-money prizes are available.</p>
  `, { lead: 'Fifteen upcoming games · mobile-first catalog · previews only' });
}
