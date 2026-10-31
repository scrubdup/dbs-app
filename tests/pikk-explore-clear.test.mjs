import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { TABBAR } from '../src/data.js';

const explore = readFileSync(new URL('../src/pages/explore.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('Explore search preserves a stable result container on Discover and Following', () => {
  assert.match(explore, /panel\.querySelector\('#exploreLiveInsert'\)/);
  assert.match(explore, /insert\.innerHTML = renderResults\(res\)/);
  assert.doesNotMatch(explore, /box\.outerHTML = renderResults\(res\)/);
  assert.match(explore, /root\.querySelector\('#exploreLiveInsert'\)\?\.remove\(\)/);
});

test('Clear cancels pending debounced search and resets the input', () => {
  const clearHandler = explore.split("clear?.addEventListener('click', () => {")[1]?.split("toast('Cleared')")[0];
  assert.ok(clearHandler, 'Explore clear handler exists');
  assert.match(clearHandler, /clearTimeout\(debounce\)/);
  assert.match(clearHandler, /input\.value = ''/);
  assert.match(explore, /e\.key === 'Enter'/);
});

test('Explore retains original PIKK navigation, logo, and player', () => {
  assert.deepEqual(TABBAR.map(t => t.label), ['Music', 'Videos', 'Connect', 'Create', 'Dating', 'Games', 'Shop']);
  assert.match(html, /pikk-official-approved\.jpg/);
  assert.match(html, /id="dbs-sticky-player"/);
  assert.match(explore, /export function renderExplore\(\)/);
  assert.match(explore, /export function bindExplore\(root\)/);
});


test('Explore people results link to the matched public profile, not the signed-in profile', () => {
  assert.match(explore, /href: `#\/profile\/\$\{p\.id\}`/);
  assert.match(explore, /title: `@\$\{p\.username \|\| p\.id\}`/);
});

test('Explore uses PIKK platform branding without miscrediting untagged creator content', () => {
  assert.match(explore, /Trending Across PIKK/);
  assert.match(explore, /Search PIKK/);
  assert.match(explore, /Universal search & discovery across PIKK/);
  assert.doesNotMatch(explore, /(?:Trending Across|Search|across) DBS/);
  assert.ok(explore.includes("meta: `${c.artist || 'Artist not credited'} · ${c.type}`"));
  assert.ok(explore.includes("meta: `${c.artist || 'Artist not credited'} · Video catalog`"));
  assert.ok(explore.includes("meta: `${v.artist || 'Artist not credited'} · Official MV`"));
  assert.doesNotMatch(explore, /From Admin|v\.artist \|\| 'DatBoiSkeet'/);
  assert.ok(explore.includes("meta: `${c.artist || 'Creator not credited'} · picture`"));
  assert.doesNotMatch(explore, /c\.artist \|\| 'DatBoiSkeet'/);
});
