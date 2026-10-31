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
test('release links show five latest independently merged improvements without production claims', () => {
  assert.match(updates, /pr: 183[\s\S]*pr: 182[\s\S]*pr: 181[\s\S]*pr: 180[\s\S]*pr: 179/);
  for (const route of ['#/viral-live', '#/live', '#/shield']) {
    assert.ok(updates.includes("route: '" + route + "'"), 'Missing published section: ' + route);
    assert.ok(main.includes("'" + route.slice(1) + "': { render:"), 'Missing real app route: ' + route);
  }
  assert.match(updates, /Use Left\/Right arrows or Home\/End/);
  assert.match(updates, /live 0\/180 character count/);
  assert.match(updates, /optional personal note/);
  assert.match(updates, /restore eligible rights drafts/);
  assert.match(updates, /private JSON copy/);
  assert.match(updates, /not a 24\/7 broadcast/);
  assert.match(updates, /not real payments or streamer delivery/);
  assert.match(updates, /not a copyright registration or enforcement service/);
  assert.doesNotMatch(updates, /Premium Wallet & Payouts/);
  assert.ok(updates.includes('href="${esc(release.route)}"'));
  assert.match(updates, /pikkUpdatesRefresh/);
  assert.match(updates, /pikk-official-approved\.jpg/);
  assert.match(updates, /SHIELD · LOCAL PREVIEW/);
  assert.match(updates, /VIRAL LIVE · PREVIEW/);
  assert.match(updates, /LIVE · DEMO ONLY/);
});
test('production version is the source commit of the deployed build', () => {
  assert.match(workflow, /VITE_BUILD_SHA: \$\{\{ github\.sha \}\}/);
  assert.match(html, /id="pikk-refresh-link"/);
  assert.doesNotMatch(html, /localStorage\.clear/);
});
