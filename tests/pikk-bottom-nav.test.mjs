import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const data = readFileSync(new URL('../src/data.js', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
test('Create is the exact center of seven bottom navigation slots', () => {
  const match = data.match(/export const TABBAR = \\[([\\s\\S]*?)\\];/);
  assert.ok(match);
  const entries = [...match[1].matchAll(/\\{ href: '([^']+)', label: '([^']+)'[^}]*\\}/g)];
  assert.equal(entries.length, 7);
  assert.equal(entries[3][2], 'Create');
  assert.equal(entries[3][1], '#/create');
  assert.match(entries[3][0], /primary: true/);
  assert.deepEqual(entries.map(x => x[2]), ['Home', 'Music', 'Videos', 'Create', 'Connect', 'Dating', 'Shop']);
  assert.ok(!entries.some(x => x[2] === 'Profile'));
});
test('Create keeps primary styling and Go Live remains reachable', () => {
  assert.match(main, /t\.primary \? ' class="tab-primary"'/);
  assert.match(main, /route\.query\.go === '1'/);
});

test('Header PIKK logo and bottom Home both return to Home; Profile stays in header', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /href="#\/home" class="logo" aria-label="PIKK Home"/);
  assert.match(html, /id="headerProfile" href="#\/profile"/);
});
