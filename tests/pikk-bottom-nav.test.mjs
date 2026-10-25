import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const data = readFileSync(new URL('../src/data.js', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
test('Go Live is the exact center of seven bottom navigation slots', () => {
  const match = data.match(/export const TABBAR = \[([\s\S]*?)\];/);
  assert.ok(match);
  const entries = [...match[1].matchAll(/\{ href: '([^']+)', label: '([^']+)'[^}]*\}/g)];
  assert.equal(entries.length, 7);
  assert.equal(entries[3][2], 'Go Live');
  assert.equal(entries[3][1], '#/live?go=1');
  assert.match(entries[3][0], /primary: true/);
  assert.ok(entries.some(x => x[2] === 'Dating'));
  assert.ok(entries.some(x => x[2] === 'Connect'));
  assert.equal(entries[0][2], 'Profile');
  assert.deepEqual(entries.map(x => x[2]), ['Profile', 'Music', 'Videos', 'Go Live', 'Connect', 'Dating', 'Shop']);
  assert.ok(!entries.some(x => x[2] === 'Home'));
});
test('Go Live gets its primary class and scroll-to-stream behavior', () => {
  assert.match(main, /t\.primary \? ' class="tab-primary"'/);
  assert.match(main, /route\.query\.go === '1'/);
});

test('Header PIKK logo returns to Home while Home is absent from bottom tabs', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /href="#\/home" class="logo" aria-label="PIKK Home"/);
});
