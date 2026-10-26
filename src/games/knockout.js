/** PIKK Knockout: original solo Lights Out puzzle. No chips, wagers or prizes. */
export const SIZE = 3;
export const CELL_COUNT = SIZE * SIZE;

export function togglePuzzleCell(board, index) {
  if (!Array.isArray(board) || board.length !== CELL_COUNT || !Number.isInteger(index) || index < 0 || index >= CELL_COUNT) {
    throw new RangeError('Invalid puzzle board or tile');
  }
  const next = board.slice();
  const row = Math.floor(index / SIZE);
  const col = index % SIZE;
  for (const [r, c] of [[row, col], [row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]) {
    if (r >= 0 && r < SIZE && c >= 0 && c < SIZE) {
      const tile = r * SIZE + c;
      next[tile] = !next[tile];
    }
  }
  return next;
}

export function isPuzzleSolved(board) {
  return Array.isArray(board) && board.length === CELL_COUNT && board.every((on) => on === false);
}

export function newPuzzle(random = Math.random) {
  let board = Array(CELL_COUNT).fill(false);
  // Starting from solved and applying legal moves guarantees solvability.
  for (let i = 0; i < 7; i += 1) {
    const value = Number(random());
    const tile = Math.min(CELL_COUNT - 1, Math.max(0, Math.floor((Number.isFinite(value) ? value : 0) * CELL_COUNT)));
    board = togglePuzzleCell(board, tile);
  }
  if (isPuzzleSolved(board)) board = togglePuzzleCell(board, 4);
  return board;
}
