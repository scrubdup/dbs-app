import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const live = readFileSync(new URL('../src/pages/live.js', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const arena = readFileSync(new URL('../src/pages/roast-arena.js', import.meta.url), 'utf8');
test('Roast Arena is discoverable from Live and registered in routing', () => {
  assert.match(live, /Comedy & Roast Battles/);
  assert.match(live, /#\/roast-arena/);
  assert.match(main, /'\/roast-arena': \{ render: renderRoastArena \}/);
});
test('Roast Arena separates vote and gift winners and discloses prelaunch status', () => {
  assert.match(arena, /separate results/);
  assert.match(arena, /Gifts cannot change the audience vote winner/);
  assert.match(arena, /Coming Soon/);
  assert.match(arena, /explicitly opt in/);
  assert.match(arena, /mute, remove and report/);
});
