import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
const section=readFileSync(new URL('../src/section-menus.js',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('all menus use approved icon-first topic cards and Create has nine choices',()=>{
 assert.match(main,/pikk-create-options pikk-create-grid/);
 assert.match(section,/pikk-create-options pikk-category-options/);
 assert.match(main,/class="pikk-create-tile"/);
 assert.match(section,/class="pikk-menu-icon"/);
 const start=main.indexOf('<div class="pikk-create-options pikk-create-grid">');
 const end=main.indexOf('</div>',start);
 const markup=main.slice(start,end);
 assert.equal((markup.match(/class="pikk-create-tile"/g)||[]).length,9);
 for(const title of ['Go Live','Upload Video','Shorts / Reels','Post Photos','Story','Upload Music','Sell Something','Create Post','Paid Content'])assert.ok(markup.includes(title),title);
 assert.match(css,/grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
});
test('all existing section choices preserve real links and mobile access',()=>{
 for(const item of ['videos','connect','dating','games','shop'])assert.match(section,new RegExp('^  '+item+': \\[','m'));
 assert.match(section,/#\/communities/);
 assert.match(section,/#\/community/);
 assert.match(css,/@media\(max-width:390px\)/);
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
});
