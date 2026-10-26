import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pages = readFileSync(new URL('../.github/workflows/pages.yml', import.meta.url), 'utf8');
const ci = readFileSync(new URL('../.github/workflows/ci.yml', import.meta.url), 'utf8');

test('Pages publishing requires explicit workflow dispatch, never push or PR', () => {
  assert.match(pages, /^on:\s*\n\s{2}workflow_dispatch:/m);
  assert.doesNotMatch(pages, /^\s{2}(?:push|pull_request|schedule|workflow_run):/m);
  assert.match(pages, /publish_branch:\s*gh-pages/);
});

test('manual publishing still tests and builds before uploading', () => {
  const testStep = pages.indexOf('run: npm test');
  const buildStep = pages.indexOf('run: npm run build');
  const publishStep = pages.indexOf('peaceiris/actions-gh-pages@');
  assert.ok(testStep >= 0 && buildStep > testStep && publishStep > buildStep);
  assert.match(pages, /VITE_BASE:\s*\/pikk-app\//);
});

test('pull requests and main commits run verification without deploy rights', () => {
  assert.match(ci, /^\s{2}pull_request:/m);
  assert.match(ci, /^\s{2}push:/m);
  assert.match(ci, /branches:\s*\[main\]/);
  assert.match(ci, /contents:\s*read/);
  assert.match(ci, /run: npm test/);
  assert.match(ci, /run: npm run build/);
  assert.doesNotMatch(ci, /peaceiris\/actions-gh-pages|publish_branch|contents:\s*write/);
});
