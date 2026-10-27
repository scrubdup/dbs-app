import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const shell=readFileSync(new URL('../src/pages/shells.js',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('notifications match premium tabbed reference without fabricated events',()=>{
 for(const x of ['pikk-notif-hero','pikk-notif-filters','pikk-notif-inbox','pikk-notif-preferences','data-notif-filter="all"','data-notif-filter="likes"','data-notif-filter="comments"','data-notif-filter="follows"'])assert.ok(shell.includes(x),x);
 for(const x of ['No notifications yet','No likes to show','No comments to show','No follows to show','PIKK does not generate fake alerts'])assert.ok(shell.includes(x),x);
 assert.match(css,/\.pikk-notif-filters button.on/);assert.match(css,/@media\(max-width:450px\)/);
});
test('preferences persistence survives redesign',()=>{for(const pref of ['releases','lives','messages','quietHours'])assert.ok(shell.includes('data-k="'+pref+'"'),pref);assert.match(shell,/setNotifPrefs\(\{ \[el.dataset.k\]: el.checked \}\)/);});
