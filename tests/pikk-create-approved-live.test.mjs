import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('Create has exact nine approved icons, links and mobile reference layout',()=>{
 const a=main.slice(main.indexOf('function ensureCreateMenu()'),main.indexOf('  document.body.appendChild(panel);',main.indexOf('function ensureCreateMenu()')));
 for(const title of ['Go Live','Upload Video','Shorts / Reels','Post Photos','Story','Upload Music','Sell Something','Create Post','Paid Content']) assert.ok(a.includes(title),title);
 assert.equal((a.match(/class="pikk-create-tile"/g)||[]).length,9);
 assert.equal((a.match(/<svg viewBox="0 0 24 24"/g)||[]).length,9);
 assert.match(a,/data-create-close>Cancel/);
 assert.match(css,/\.pikk-create-options\.pikk-create-grid/);
 assert.match(css,/grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
 assert.match(css,/@media\(max-width:390px\)/);
});
test('menu preserves user content, honest unavailable actions and established destinations',()=>{
 const a=main.slice(main.indexOf('function ensureCreateMenu()'),main.indexOf('  document.body.appendChild(panel);',main.indexOf('function ensureCreateMenu()')));
 for(const route of ['#/live?go=1','#/posts?type=video','#/posts?type=short','#/posts?type=picture','#/music?view=upload','#/shop','#/posts?type=text','#/pricing']) assert.ok(a.includes(route),route);
 assert.match(a,/TEST MODE/);assert.match(a,/planned/);
 assert.match(main,/pikkCreateMenu/);
});
