import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/live.js', import.meta.url), 'utf8');
const first = source.indexOf('const PIKK_LIVE_CATEGORIES = [');
const second = source.indexOf('const LIVE_DISCOVERY_CATEGORIES = [', first);
const approved = source.slice(first, second);

test('approved PIKK Live categories are prominent, including IRL', () => {
  for (const category of [
    'IRL', 'The Hangout', 'Creator Spotlight', 'The Booth', 'Game Room',
    'The Stage', 'Watch Party', 'The Workshop', 'PIKK Battles',
    'City Takeover', 'Spotlight Live',
  ]) {
    assert.ok(approved.includes(`['${category}'`), `Missing approved category: ${category}`);
  }
  assert.match(source, /PIKK_LIVE_CATEGORIES\.map\(card\)/);
  assert.match(source, /More Live Topics/);
});

test('special Live destinations resolve to existing routes and do not invent broadcasts', () => {
  assert.match(source, /name === 'PIKK Battles' \? '#\/giftbattles'/);
  assert.match(source, /name === 'Spotlight Live' \? '#\/spotlight'/);
  assert.match(source, /name === 'Comedy & Roast Battles' \? '#\/roast-arena'/);
  assert.match(source, /No matching live channels in this category yet/);
  assert.match(source, /Watch Parties require broadcast rights/);
});
