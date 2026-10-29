import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const updates = readFileSync(new URL('../src/pages/updates.js', import.meta.url), 'utf8');

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const workflow = readFileSync(new URL('../.github/workflows/pages.yml', import.meta.url), 'utf8');

test('update center is a real route and accessible from menu and footer', () => {
  assert.match(main, /'\/updates': \{ render: renderUpdates, bind: bindUpdates \}/);
  assert.match(main, /href="#\/updates"/);
  assert.match(html, /href="#\/updates"/);
});
test('release links point to actual completed PIKK sections and PRs', () => {
  assert.match(updates, /pr: 122[\\s\\S]*pr: 121[\\s\\S]*pr: 120[\\s\\S]*pr: 119[\\s\\S]*pr: 118/);
  assert.ok(updates.includes('href="${esc(release.route)}"'));
  assert.match(updates, /pikkUpdatesRefresh/);
  assert.match(updates, /pikk-official-approved\\.jpg/);
  assert.match(updates, /UI · TEST MODE/);
});
test('production version is the source commit of the deployed build', () => {
  assert.match(workflow, /VITE_BUILD_SHA: \$\{\{ github\.sha \}\}/);
  assert.match(html, /id="pikk-refresh-link"/);
  assert.doesNotMatch(html, /localStorage\.clear/);
});
