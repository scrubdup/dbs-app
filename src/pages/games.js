import { shellPage, esc } from '../ui.js';

import { newPuzzle, togglePuzzleCell, isPuzzleSolved } from '../games/knockout.js';

const GAMES = [
  ['PIKK Poker', 'Social poker with virtual play chips'],
  ['PIKK Blackjack', 'Social blackjack with virtual play chips'],
  ['PIKK Slots', 'Entertainment-only slots with virtual play chips'],
  ['PIKK Clash', 'Original match-puzzle and kingdom-building'],
  ['PIKK Knockout', 'Playable solo light-grid puzzle prototype'],
  ['PIKK Spades', 'Partnership card game and private tables'],
  ['PIKK Dominoes', 'Private tables, selectable rules and tournaments'],
  ['PIKK Chess', 'Friend matches, clocks and rankings'],
  ['PIKK Speed', 'Fast-paced two-player shedding card game'],
];

export function renderGames() {
  return shellPage('PIKK Arcade', `
    <div class="card">
      <h2>PIKK Arcade · first playable prototype</h2>
      <p class="muted">PIKK Knockout has a playable single-player light-grid prototype below. The other eight games remain previews. No real-money gambling, winnings, cash-out, purchases or chip redemption are available.</p>
    </div>
    <section class="card" id="knockoutGame" aria-label="PIKK Knockout puzzle">
      <span class="chip">Playable prototype · solo · free</span>
      <h3>PIKK Knockout: Lights Out</h3>
      <p class="muted">Tap a tile to flip it and its up/down/left/right neighbors. Turn every tile off to win.</p>
      <div id="knockoutBoard" role="group" aria-label="3 by 3 puzzle grid" style="display:grid;grid-template-columns:repeat(3,minmax(54px,82px));gap:8px;margin:14px 0"></div>
      <p id="knockoutStatus" role="status" aria-live="polite"></p>
      <button class="btn primary" type="button" id="knockoutRestart">New puzzle</button>
    </section>
    <div class="grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px">
      ${GAMES.map(([name, description]) => `
        <article class="card">
          <span class="chip">${name === 'PIKK Knockout' ? 'Playable below' : 'Coming Soon'}</span>
          <h3>${esc(name)}</h3>
          <p class="muted">${esc(description)}</p>
        </article>`).join('')}
    </div>
    <div class="card"><a href="#/blockwars">Block Wars development preview</a></div>
  `, { lead: 'Original PIKK games · first playable prototype' });
}

/** Bind only inside the Arcade route; do not affect existing app or global storage. */
export function bindGames(root = document) {
  const board = root.querySelector('#knockoutBoard');
  const status = root.querySelector('#knockoutStatus');
  if (!board || !status) return;
  let cells = newPuzzle();
  let moves = 0;
  function draw() {
    const won = isPuzzleSolved(cells);
    board.innerHTML = cells.map((on, index) => `<button type="button" data-tile="${index}" aria-label="Tile ${index + 1}, ${on ? 'on' : 'off'}" aria-pressed="${on}" ${won ? 'disabled' : ''} style="aspect-ratio:1;border-radius:12px;border:2px solid currentColor;background:${on ? '#e63750' : '#161b2b'};color:white;font-size:22px">${on ? '●' : '○'}</button>`).join('');
    status.textContent = won ? `You won in ${moves} moves! Start a new puzzle.` : `Moves: ${moves} · Lights remaining: ${cells.filter(Boolean).length}`;
  }
  board.addEventListener('click', (event) => {
    const button = event.target.closest('[data-tile]');
    if (!button || !board.contains(button) || isPuzzleSolved(cells)) return;
    cells = togglePuzzleCell(cells, Number(button.dataset.tile));
    moves += 1;
    draw();
  });
  root.querySelector('#knockoutRestart')?.addEventListener('click', () => {
    cells = newPuzzle();
    moves = 0;
    draw();
  });
  draw();
}
