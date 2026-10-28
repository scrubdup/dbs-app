import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { RECENT_RELEASES } from '../src/pages/updates.js';

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const workflow = readFileSync(new URL('../.github/workflows/pages.yml', import.meta.url), 'utf8');

test('update center is a real route and accessible from menu and footer', () => {
  assert.match(main, /'\/updates': \{ render: renderUpdates, bind: bindUpdates \}/);
  assert.match(main, /href="#\/updates"/);
  assert.match(html, /href="#\/updates"/);
});
test('release links point to actual completed PIKK sections and PRs', () => {
  assert.deepEqual(RECENT_RELEASES.map(x => x.pr), [95,94,93,92,91]);
  for (const release of RECENT_RELEASES) {
    assert.match(release.route, /^#\/(home|messages|dating|games)$/);
  }
});
test('production version is the source commit of the deployed build', () => {
  assert.match(workflow, /VITE_BUILD_SHA: \$\{\{ github\.sha \}\}/);
  assert.match(html, /id="pikk-refresh-link"/);
  assert.doesNotMatch(html, /localStorage\.clear/);
});
