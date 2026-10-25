import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

test('PIKK is the visible platform identity while DatBoiSkeet remains the artist', () => {
  const html = read('index.html');
  const home = read('src/pages/home.js');
  const shell = read('src/pages/shells.js');
  const data = read('src/data.js');
  const main = read('src/main.js');

  assert.match(html, /<title>PIKK — Music, Social & Live<\/title>/);
  assert.match(html, /brand\/pikk-official-approved\.jpg/);
  assert.match(html, /aria-label="PIKK Home"/);
  assert.match(html, /aria-label="PIKK music player"/);
  assert.match(main, /<h2>PIKK Network<\/h2>/);
  assert.match(data, /title: 'PIKK Lounge'/);
  assert.match(home, /Explore PIKK/);
  assert.match(home, /PIKK Restream/);
  assert.match(shell, /PIKK Community Guidelines/);
  assert.match(home, /DatBoiSkeet Mix/);
  assert.match(data, /artist: 'DatBoiSkeet'/);
});

test('legacy persistent keys and DOM integration hooks remain unchanged', () => {
  const html = read('index.html');
  const home = read('src/pages/home.js');
  const store = read('src/store.js');
  const main = read('src/main.js');

  assert.match(html, /id="dbs-sticky-player"/);
  assert.match(home, /dbs_home_stage_v2/);
  assert.match(store, /const KEY = 'dbs_v1'/);
  assert.match(main, /dbs:interrupt-music/);
});

test('legacy platform labels are absent from audited public-facing screens', () => {
  for (const path of ['index.html', 'src/pages/home.js', 'src/pages/shells.js']) {
    const source = read(path);
    assert.doesNotMatch(source, /DBS (?:Network|Lounge|Restream|Home|music player)/, path);
  }
});
