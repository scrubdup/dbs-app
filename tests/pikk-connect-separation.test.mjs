import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const connect = readFileSync(new URL('../src/pages/connect.js', import.meta.url), 'utf8');
test('PIKK Connect has distinct Dating and Random Chat choices', () => {
  assert.match(connect, /Choose your connection/);
  assert.match(connect, /href="#\/dating"/);
  assert.match(connect, /href="#connect-random-chat"/);
  assert.match(connect, /Dating requires mutual interest/);
});
test('Random Chat remains gated, and no camera starts automatically', () => {
  assert.match(connect, /no WebRTC/);
  assert.match(connect, /age assurance/);
  assert.match(connect, /rulesAccepted/);
  assert.doesNotMatch(connect, /getUserMedia\s*\(/);
});
