import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { MERCH, TABBAR, DRAWER_GROUPS, HOME_SECTIONS } from '../src/data.js';
import { filterPikkShopProducts, renderPikkShop } from '../src/pages/pikk-shop.js';

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const profile = readFileSync(new URL('../src/pages/profile.js', import.meta.url), 'utf8');
const cosmetics = readFileSync(new URL('../src/pages/shop.js', import.meta.url), 'utf8');

test('bottom Shop opens consumer commerce, while cosmetics remain separately reachable', () => {
  assert.ok(TABBAR.some((tab) => tab.href === '#/shop' && tab.label === 'Shop'));
  assert.match(main, /'\/shop': \{ render: renderPikkShop, bind: bindPikkShop \}/);
  assert.match(main, /'\/profile-shop': \{ render: renderShop, bind: bindShop \}/);
  assert.match(profile, /href="#\/profile-shop">Profile Shop/);
  assert.match(cosmetics, /navigate\('#\/profile-shop'\)/);
  const links = DRAWER_GROUPS.flatMap((g) => g.href ? [g.href] : (g.links || []).map((l) => l.href));
  assert.ok(links.includes('#/merch'));
  assert.ok(links.includes('#/marketplace'));
  assert.ok(links.includes('#/profile-shop'));
  assert.ok(HOME_SECTIONS.some((section) => section.route === '/shop'));
});

test('consumer shop shows existing genuine merchandise, without fake checkout', () => {
  const html = renderPikkShop();
  assert.match(html, /PIKK Shop/);
  assert.equal((html.match(/class="merch-card pikk-shop-product"/g) || []).length, MERCH.length);
  assert.equal((html.match(/Shop on Foreign X-Change/g) || []).length, MERCH.length);
  assert.match(html, /External orders are not subject to an automated PIKK commission/);
  assert.match(html, /7%/);
  assert.match(html, /Affiliate enrollment, payable links, commissions and payouts remain disabled/);
  assert.doesNotMatch(html, /Pay now|Complete purchase|Buy with PIKK/i);
  for (const item of MERCH) assert.ok(html.includes(item.name.replaceAll('&', '&amp;')), item.name);
});

test('product search and category filtering work on the existing catalog', () => {
  assert.equal(filterPikkShopProducts(MERCH, 'All', '').length, MERCH.length);
  assert.equal(filterPikkShopProducts(MERCH, 'Hats').length, MERCH.filter((m) => m.category === 'Hats').length);
  assert.ok(filterPikkShopProducts(MERCH, 'All', '  bUfFaLo  ').length > 0);
  assert.deepEqual(filterPikkShopProducts(MERCH, 'Jackets', 'unfindable'), []);
  assert.deepEqual(filterPikkShopProducts(MERCH, 'Hats', 'jacket'), []);
});

test('official approved PIKK JPG remains the brand source', () => {
  const index = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(index, /brand\/pikk-official-approved\.jpg/);
  assert.ok(existsSync(new URL('../public/brand/pikk-official-approved.jpg', import.meta.url)));
});
