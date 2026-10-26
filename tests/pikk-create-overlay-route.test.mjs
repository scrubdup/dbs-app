import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const start = source.indexOf('function render(route) {');
const end = source.indexOf('\nfunction hideSplash()', start);
assert.ok(start !== -1 && end > start, 'main route renderer must be present');
const renderSource = source.slice(start, end);

function simulateRoute(createMenu) {
  const app = { innerHTML: '' };
  let chromeUpdated = 0;
  const document = {
    getElementById(id) {
      if (id === 'pikkCreateMenu') return createMenu;
      if (id === 'app') return app;
      return null;
    },
  };
  runInNewContext(
    renderSource + "\nrender({ path: '/home', raw: '/home', query: {} });",
    {
      document,
      ROUTES: { '/home': { render: () => '<h1>Home</h1>' } },
      renderNotFound: () => '',
      rewriteAssetUrls: () => {},
      updateChrome: () => { chromeUpdated += 1; },
      onRouteForPlayer: () => {},
      window: { scrollTo: () => {} },
      location: { hash: '#/home' },
      setTimeout: () => {},
    },
  );
  return { app, chromeUpdated };
}

test('Create dialog closes when navigation happens outside its own links', () => {
  const menu = { hidden: false };
  const { app, chromeUpdated } = simulateRoute(menu);
  assert.equal(menu.hidden, true);
  assert.equal(app.innerHTML, '<h1>Home</h1>');
  assert.equal(chromeUpdated, 1);
});

test('Route rendering stays safe with a closed or absent Create dialog', () => {
  const menu = { hidden: true };
  simulateRoute(menu);
  assert.equal(menu.hidden, true);
  assert.doesNotThrow(() => simulateRoute(null));
});
