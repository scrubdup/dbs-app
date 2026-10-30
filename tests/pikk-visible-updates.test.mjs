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
  assert.match(updates, /pr: 163[\s\S]*pr: 162[\s\S]*pr: 161[\s\S]*pr: 160[\s\S]*pr: 159/);
  for (const route of ['#/profile', '#/explore', '#/merch', '#/messages', '#/shop']) {
    assert.ok(updates.includes("route: '" + route + "'"), 'Missing published section: ' + route);
  }
  assert.doesNotMatch(updates, /Premium Wallet & Payouts/);
  assert.match(updates, /read-only profile/i);
  assert.match(updates, /original merchandise catalog/i);
  assert.ok(updates.includes('href="${esc(release.route)}"'));
  assert.match(updates, /pikkUpdatesRefresh/);
  assert.match(updates, /pikk-official-approved\.jpg/);
  assert.match(updates, /PROFILE · TEST MODE/);
  assert.match(updates, /ACCESSIBILITY · PREVIEW/);
});
test('production version is the source commit of the deployed build', () => {
  assert.match(workflow, /VITE_BUILD_SHA: \$\{\{ github\.sha \}\}/);
  assert.match(html, /id="pikk-refresh-link"/);
  assert.doesNotMatch(html, /localStorage\.clear/);
});
