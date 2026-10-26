import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const data = readFileSync(new URL('../src/data.js', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const posts = readFileSync(new URL('../src/pages/posts.js', import.meta.url), 'utf8');

test('Go Live is the exact center of seven bottom navigation slots', () => {
  const match = data.match(/export const TABBAR = \[([\s\S]*?)\];/);
  assert.ok(match);
  const entries = [...match[1].matchAll(/\{ href: '([^']+)', label: '([^']+)'[^}]*\}/g)];
  assert.equal(entries.length, 7);
  assert.equal(entries[3][2], 'Go Live');
  assert.equal(entries[3][1], '#/live?go=1');
  assert.match(entries[3][0], /primary: true/);
  assert.deepEqual(entries.map(x => x[2]), ['Home', 'Music', 'Videos', 'Go Live', 'Connect', 'Dating', 'Shop']);
  assert.ok(!entries.some(x => x[2] === 'Profile'));
});

test('Create remains in the drawer with all six demo destinations', () => {
  assert.match(main, /t\.primary \? ' class="tab-primary"'/);
  assert.match(main, /href="#\/live\?go=1"/);
  assert.match(main, /route\.query\.go === '1'/);
  for (const type of ['video', 'short', 'picture', 'text']) {
    assert.ok(main.includes(`#/posts?type=${type}`), type);
  }
  assert.match(posts, /route\.query\.type/);
  assert.match(main, /TEST MODE/);
  assert.match(data, /id: 'create', label: 'Create post \/ video', href: '#\/create'/);
  assert.match(main, /aria-haspopup="dialog"/);
  assert.match(main, /createLink = e\.target\.closest\('a\[href="#\/create"\]'\)/);
  assert.match(main, /setDrawer\(false\);\s*const panel = ensureCreateMenu\(\)/);
  assert.match(main, /e\.key === 'Escape'/);
});

test('Header PIKK logo and bottom Home both return to Home; Profile stays in header', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /href="#\/home" class="logo" aria-label="PIKK Home"/);
  assert.match(html, /id="headerProfile" href="#\/profile"/);
});
