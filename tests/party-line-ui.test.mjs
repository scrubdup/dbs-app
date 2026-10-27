import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const lounge = readFileSync(new URL('../src/pages/shells.js', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');

test('Party Line is a Lounge channel, not a Connect mode', () => {
  assert.match(lounge, /id: 'party-line',[\s\S]*?cat: 'VOICE \/ LISTENING'/);
  assert.match(lounge, /name: 'Party Line'/);
  assert.match(main, /'\/community': \{ render: renderCommunity, bind: bindCommunity \}/);
  assert.match(main, /'\/connect': \{ render: renderConnect, bind: bindConnect \}/);
});
test('Party Line voice controls fail closed while backend is unavailable', () => {
  assert.match(lounge, /Join voice · Coming Soon/);
  assert.match(lounge, /Request mic · Coming Soon/);
  assert.match(lounge, /disabled aria-label="Join Party Line unavailable"/);
  assert.match(lounge, /NOT LIVE · TEST MODE/);
  assert.match(lounge, /Verified 18\+ accounts/);
});
test('room text remains disabled until multi-user service is ready', () => {
  assert.match(lounge, /lounge-compose/);
  assert.match(lounge, /aria-label="Message composer disabled"/);
  assert.match(lounge, /Room chat/);
});
test('responsive styling preserves narrow layouts', () => {
  assert.match(styles, /\.party-line-role-grid/);
  assert.match(styles, /max-width: 370px/);
});
