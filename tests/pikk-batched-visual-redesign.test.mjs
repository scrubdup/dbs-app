import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const dating=readFileSync(new URL('../src/pages/dating.js',import.meta.url),'utf8');
const shop=readFileSync(new URL('../src/pages/pikk-shop.js',import.meta.url),'utf8');
const profile=readFileSync(new URL('../src/pages/profile.js',import.meta.url),'utf8');
const styles=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');

test('Dating, Shop and Profile share one approved premium visual release',()=>{
 for(const [code,markers] of [
   [dating,['pikk-dating-hero','pikk-dating-tabs','pikk-dating-experience-grid']],
   [shop,['pikk-shop-showcase','pikk-shop-departments','pikk-shop-premium-grid']],
   [profile,['pikk-profile-cover','pikk-profile-shortcuts','pikk-profile-guest-hero']],
 ]) for(const marker of markers){assert.ok(code.includes(marker),marker);assert.ok(styles.includes('.'+marker),marker+' styles');}
 assert.match(styles,/@media\(max-width:520px\)/);
});
test('No fake accounts, matches, sellers or payments; critical features remain',()=>{
 assert.match(dating,/No real matches are being created here/);
 assert.match(dating,/verified adult eligibility/);
 assert.match(shop,/External merchant checkout/);
 assert.match(shop,/filterPikkShopProducts/);
 assert.match(shop,/pikk-shop-filter/);
 assert.match(profile,/signInLocal/);
 assert.match(profile,/saveProfile/);
 assert.match(profile,/toggleAdmin/);
 assert.match(profile,/TEST MODE/);
 for(const name of ['dating','shop','profile'])assert.ok(main.includes("'/"+name+"':"),'missing route '+name);
 assert.match(html,/brand\/pikk-official-approved\.jpg/);
 assert.match(html,/id="dbs-sticky-player"/);
});
