import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
test('Music bottom tab opens approved modal with accessible state', () => {
  assert.match(main, /function ensureMusicMenu\(\)/);
  assert.match(main, /aria-controls="pikkMusicMenu"/);
  assert.match(main, /role="dialog" aria-modal="true" aria-label="Music on PIKK"/);
  assert.match(main, /data-music-close/);
  for (const label of ['Songs', 'Albums', 'Beats', 'Playlists', 'Upload Music']) assert.ok(main.includes(label));
});
test('Music menu preserves honest prototype limitations and keyboard navigation', () => {
  assert.match(main, /music uploads require production services/i);
  assert.match(main, /event.key === 'Escape'/);
  assert.match(main, /event.key === 'Tab'/);
  assert.match(main, /window.addEventListener\('hashchange', \(\) => closeMenu\(\)\)/);
});
test('Create menu, canonical logo and persistent player remain', () => {
  assert.match(main, /function ensureCreateMenu\(\)/);
  assert.match(html, /aria-label="PIKK Home"/);
  assert.match(html, /id="dbs-sticky-player"/);
});
