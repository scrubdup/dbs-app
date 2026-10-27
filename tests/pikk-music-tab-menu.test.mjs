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

test('Music category deep links point to real sections and are scrolled into view', () => {
  const music = readFileSync(new URL('../src/pages/music.js', import.meta.url), 'utf8');
  for (const id of ['stream-everywhere', 'youtube-mixes']) {
    assert.ok(music.includes('id="' + id + '"'), id + ' must exist in Music view');
    assert.ok(main.includes("#/music#" + id), id + ' must be linked from Music menu');
  }
  assert.match(main, /route\.path === '\/music' && \['stream-everywhere', 'youtube-mixes'\]\.includes\(route\.elementId\)/);
  assert.match(main, /document\.getElementById\(targetId\)\?\.scrollIntoView/);
});
test('Unimplemented Beat marketplace and Upload Music cannot masquerade as working links', () => {
  assert.match(main, /class="pikk-menu-unavailable" aria-disabled="true">◉ Beats/);
  assert.match(main, /class="pikk-menu-unavailable" aria-disabled="true">⬆ Upload Music/);
  assert.doesNotMatch(main, /<a href="#\/music">⬆ Upload Music/);
});
