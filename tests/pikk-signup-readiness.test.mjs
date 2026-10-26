import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('Signup uses PIKK brand and explicitly labels browser demo identity', () => {
  const src = readFileSync(new URL('../src/pages/shells.js', import.meta.url), 'utf8');
  assert.match(src, /Join PIKK/);
  assert.match(src, /PRE-LAUNCH · TEST MODE/);
  assert.match(src, /Local demo profile \(not verified\)/);
  assert.match(src, /not secure accounts/);
});
