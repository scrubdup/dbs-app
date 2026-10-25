import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const live = readFileSync(new URL('../src/pages/live.js', import.meta.url), 'utf8');
test('Live categories include Twitch/Kick-style discovery topics', () => {
  for (const category of ['Just Chatting','Gaming','Music','IRL','Sports','Creative','Podcasts & Talk Shows','Food & Cooking','Fitness','Beauty & Fashion','Business & Money Talk','Dating & Connections','Education','News & Commentary','Comedy & Entertainment']) {
    assert.ok(live.includes(category), 'Missing category: ' + category);
  }
});
test('PIKK Live preserves 24/7 Open Mic and Spotlight routes', () => {
  assert.match(live, /href="#\/openmic"/);
  assert.match(live, /href="#\/spotlight"/);
  assert.match(live, /renderCategoriesPanel\(\)/);
});
