import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PIKK_FEATURED_PRICES } from '../src/stories-promotions.js';

test('six sponsored placements match approved price tiers', () => {
  assert.deepEqual(PIKK_FEATURED_PRICES.map(({count,day,week}) => [count,day,week]), [[1,199,999],[2,99,499],[3,49,249]]);
  assert.equal(PIKK_FEATURED_PRICES.reduce((total, item) => total + item.count, 0), 6);
  assert.equal(PIKK_FEATURED_PRICES.reduce((total, item) => total + item.count * item.day, 0), 544);
});
test('both Home and Videos mount the preview without removing existing page', () => {
  const src = readFileSync(new URL('../src/stories-promotions.js', import.meta.url), 'utf8');
  const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.match(src, /path !== '\/home' && path !== '\/videos'/);
  assert.match(src, /head\.insertAdjacentElement\('afterend', region\)/);
  assert.match(src, /Booking and payment are not enabled yet/);
  assert.match(main, /mountStoriesAndPromotions\(app, route\.path\)/);
});
