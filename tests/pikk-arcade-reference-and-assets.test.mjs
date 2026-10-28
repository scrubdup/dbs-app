import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const game=readFileSync(new URL('../src/pages/games.js',import.meta.url),'utf8');
const style=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
const install=readFileSync(new URL('../scripts/install-approved-arcade-art.mjs',import.meta.url),'utf8');
test('Arcade matches reference structure and numbered layout',()=>{
 for(const marker of ['pikk-arcade-toolbar','pikk-arcade-card-header','pikk-arcade-number','pikk-arcade-art','pikk-arcade-players','pikk-arcade-action'])assert.ok(game.includes(marker),marker);
 assert.match(style,/grid-template-columns:repeat\(5,minmax\(0,1fr\)\)/);
 assert.match(style,/@media\(max-width:700px\)/);
});
test('Approved artwork installer validates all fifteen owner images before modifying the catalog',()=>{
 const filenames=install.match(/\b\d\d_[a-z_]+\.jpg/g)||[];
 assert.equal(filenames.length,15);
 assert.equal(new Set(filenames).size,15);
 assert.match(install,/if\(count!==15/);
 assert.match(install,/await copyFile/);
 assert.match(install,/writeFile\(catalogPath,updated\)/);
});
