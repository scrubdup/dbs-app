import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { TABBAR } from '../src/data.js';

test('bottom navigation retains all seven approved tabs with Shop last', () => {
  assert.deepEqual(TABBAR.map(tab => tab.label), ['Home','Music','Videos','Go Live','Connect','Dating','Shop']);
  assert.equal(TABBAR.at(-1).href, '#/shop');
});
test('mobile bottom navigation uses seven explicit grid columns', () => {
  const css = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');
  assert.match(css, /#tabbar\.tabbar\.tabbar-reshaped\.tabbar-fit7\s*\{[^}]*grid-template-columns:\s*repeat\(7,\s*minmax\(0,\s*1fr\)\)/s);
});
test('tabbar renderer includes every tab without slicing', () => {
  const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  assert.match(main, /el\.innerHTML\s*=\s*TABBAR\.map\(/);
});
