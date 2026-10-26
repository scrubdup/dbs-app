import test from 'node:test';
import assert from 'node:assert/strict';
import { togglePuzzleCell, newPuzzle, isPuzzleSolved } from '../src/games/knockout.js';

test('center move flips center and four neighbors without mutating original', () => {
  const blank = Array(9).fill(false);
  const next = togglePuzzleCell(blank, 4);
  assert.deepEqual(next, [false,true,false,true,true,true,false,true,false]);
  assert.ok(blank.every((v) => !v));
});
test('corner move flips only three adjacent tiles', () => {
  assert.deepEqual(togglePuzzleCell(Array(9).fill(false), 0), [true,true,false,true,false,false,false,false,false]);
});
test('repeating a move undoes itself', () => {
  const initial = newPuzzle(() => 0.4);
  assert.deepEqual(togglePuzzleCell(togglePuzzleCell(initial, 7), 7), initial);
});
test('new puzzle is never solved and can be reversed to solved', () => {
  const values = [0.0,0.15,0.27,0.44,0.6,0.73,0.95];
  let i = 0;
  const board = newPuzzle(() => values[i++]);
  assert.equal(isPuzzleSolved(board), false);
  let solved = board;
  for (const value of values) solved = togglePuzzleCell(solved, Math.floor(value * 9));
  assert.equal(isPuzzleSolved(solved), true);
});
test('invalid indices are rejected', () => {
  assert.throws(() => togglePuzzleCell(Array(9).fill(false), 9), RangeError);
});
