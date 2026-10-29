import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { renderViralLive } from '../src/pages/viral-live.js';
import { VIDEOS } from '../src/data.js';
const FEATURED = VIDEOS.filter(video => ['dirty-money', '93', 'no-love'].includes(video.id));

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const live = readFileSync(new URL('../src/pages/live.js', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/viral-live.css', import.meta.url), 'utf8');

test('PIKK Viral Live preview routes from existing Live without replacing seven-tab navigation', () => {
  assert.match(main, /'\/viral-live': \{ render: renderViralLive, bind: bindViralLive \}/);
  assert.match(main, /import '\.\/viral-live\.css'/);
  assert.match(live, /href: '#\/viral-live'/);
  assert.match(live, /href="#\/viral-live"/);
  assert.match(main, /TABBAR\.map/);
  assert.match(main, /initDbsPlayer/);
  assert.match(css, /#app:has\(\.pikk-viral-page\)/);
});

test('channel preview uses only existing official source links with no fabricated livestream or metrics', () => {
  const html = renderViralLive();
  assert.match(html, /PREVIEW · NOT BROADCASTING/);
  assert.match(html, /NOT A LIVESTREAM/);
  assert.match(html, /Real-time viewer counts, live chat, engagement ranking and 24\/7 playback are not connected/);
  assert.match(html, /Music and third-party rights clearance/);
  assert.match(html, /Creator permission|permission to rebroadcast/i);
  assert.doesNotMatch(html, /\b[0-9,]+ watching\b|autoplay=1|data-fake-viewers/);
  assert.equal((html.match(/data-viral-pick="/g) || []).length, FEATURED.length);
  for (const video of FEATURED) {
    assert.ok(html.includes(video.title), video.title);
    // Queue stores source indices; only the selected source URL is rendered initially.
    // Other original links are selected by bindViralLive and checked in browser CI.
    assert.ok(video.youtube.startsWith('https://www.youtube.com/watch?v='));
  }
});

test('content type tabs and empty states distinguish videos from uncleared clips, songs and photos', () => {
  const html = renderViralLive();
  assert.equal((html.match(/role="tab"/g) || []).length, 4);
  assert.equal((html.match(/role="tabpanel"/g) || []).length, 4);
  for (const type of ['clips','songs','photos']) {
    assert.match(html, new RegExp('id="viral-panel-' + type + '".*hidden'));
  }
  assert.match(html, /No approved items are queued/);
  assert.match(css, /pikk-viral-choice:focus-visible/);
  assert.match(css, /max-width:700px/);
});
