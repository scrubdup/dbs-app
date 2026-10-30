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
test('release links point to the five latest verified Shield and Videos UI fixes', () => {
  assert.match(updates, /pr: 177[\s\S]*pr: 176[\s\S]*pr: 175[\s\S]*pr: 174[\s\S]*pr: 173/);
  for (const route of ['#/shield', '#/videos']) {
    assert.ok(updates.includes("route: '" + route + "'"), 'Missing published section: ' + route);
    assert.ok(main.includes("'" + route.slice(1) + "': { render:"), 'Missing real app route: ' + route);
  }
  assert.match(updates, /Search saved browser-local declarations/);
  assert.match(updates, /Use Left\/Right arrows/);
  assert.match(updates, /Reset unsubmitted ownership fields/);
  assert.match(updates, /Selecting a video category also filters upcoming titles/);
  assert.match(updates, /Expand saved local drafts/);
  assert.match(updates, /No upload scanning or enforcement is active/);
  assert.doesNotMatch(updates, /Premium Wallet & Payouts/);
  assert.ok(updates.includes('href="${esc(release.route)}"'));
  assert.match(updates, /pikkUpdatesRefresh/);
  assert.match(updates, /pikk-official-approved\.jpg/);
  assert.match(updates, /SHIELD · LOCAL PREVIEW/);
  assert.match(updates, /VIDEOS · ACCESSIBILITY/);
});
test('production version is the source commit of the deployed build', () => {
  assert.match(workflow, /VITE_BUILD_SHA: \$\{\{ github\.sha \}\}/);
  assert.match(html, /id="pikk-refresh-link"/);
  assert.doesNotMatch(html, /localStorage\.clear/);
});
