import { shellPage, esc } from '../ui.js';

const GAMES = [
  ['PIKK Poker', 'Social poker with virtual play chips'],
  ['PIKK Blackjack', 'Social blackjack with virtual play chips'],
  ['PIKK Slots', 'Entertainment-only slots with virtual play chips'],
  ['PIKK Clash', 'Original match-puzzle and kingdom-building'],
  ['PIKK Knockout', 'Original physics-based puzzle action'],
  ['PIKK Spades', 'Partnership card game and private tables'],
  ['PIKK Dominoes', 'Private tables, selectable rules and tournaments'],
  ['PIKK Chess', 'Friend matches, clocks and rankings'],
  ['PIKK Speed', 'Fast-paced two-player shedding card game'],
];

export function renderGames() {
  return shellPage('PIKK Arcade', `
    <div class="card">
      <h2>9 games are coming to PIKK</h2>
      <p class="muted">These are previews, not playable games. No real-money gambling, winnings, cash-out, purchases or chip redemption are available.</p>
    </div>
    <div class="grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px">
      ${GAMES.map(([name, description]) => `
        <article class="card">
          <span class="chip">Coming Soon</span>
          <h3>${esc(name)}</h3>
          <p class="muted">${esc(description)}</p>
        </article>`).join('')}
    </div>
    <div class="card"><a href="#/blockwars">Block Wars development preview</a></div>
  `, { lead: 'Original PIKK games · previews only' });
}
