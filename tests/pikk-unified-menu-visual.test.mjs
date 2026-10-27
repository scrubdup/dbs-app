import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
const sections=readFileSync(new URL('../src/section-menus.js',import.meta.url),'utf8');
const music=readFileSync(new URL('../src/music-menu.js',import.meta.url),'utf8');
const styles=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('every bottom menu shares colorful Create-style layout and working Cancel',()=>{
 for(const [src,tag] of [[main,'Create'],[sections,'Section'],[music,'Music']]){
  assert.match(src,/pikk-menu-icon/,tag+' icon');
  assert.match(src,/pikk-menu-title/,tag+' title');
  assert.match(src,/pikk-menu-cancel/,tag+' cancel');
 }
 assert.match(main,/class="pikk-create-options pikk-create-grid"/);
 assert.match(sections,/class="pikk-create-options pikk-category-options"/);
 assert.match(music,/class="pikk-create-options pikk-category-options"/);
 assert.match(styles,/\.pikk-create-grid \.pikk-menu-icon svg/);
 assert.match(styles,/\.pikk-menu-cancel/);
 assert.match(styles,/grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
});
test('Create contains nine approved actions with illustrated outlined icons',()=>{
 const mark=main.slice(main.indexOf('function ensureCreateMenu()'),main.indexOf('function ensureCreateMenu()')+4500);
 for(const name of ['Go Live','Upload Video','Shorts / Reels','Post Photos','Story','Upload Music','Sell Something','Create Post','Paid Content'])assert.ok(mark.includes(name),name);
 assert.equal((mark.match(/class="pikk-create-tile"/g)||[]).length,9);
 assert.equal((mark.match(/<svg viewBox="0 0 24 24"/g)||[]).length,9);
 assert.match(mark,/data-create-close>Cancel/);
});
