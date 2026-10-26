import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const player = readFileSync(new URL('../src/player.js', import.meta.url), 'utf8');

function officialLinkOrder(section) {
  const match = section.match(/(?:item|track)\.links\?\.apple\s*\|\|\s*(?:item|track)\.links\?\.spotify\s*\|\|\s*(?:item|track)\.links\?\.youtubeMusic/);
  assert.ok(match, 'Apple Music must precede Spotify in external listening destinations');
}

test('persistent player Open link chooses Apple Music before Spotify', () => {
  const ui = player.slice(player.indexOf('function syncUi()'), player.indexOf('function playInternal()'));
  officialLinkOrder(ui);
  assert.match(ui, /STREAMING_ARTIST\.apple/);
  assert.match(ui, /openBtn\.href = href/);
});

test('most-played external link chooses Apple Music before Spotify', () => {
  const section = player.slice(player.indexOf('export function playNextMostPlayed()'), player.indexOf('function syncUi()'));
  officialLinkOrder(section);
  assert.match(section, /STREAMING_ARTIST\.apple/);
});

test('embedded YouTube playback stays separate from Apple Music external links', () => {
  assert.match(player, /via YouTube \(not Spotify in-app\)/);
  assert.match(player, /Opening official music platform \(external playback\)/);
});
