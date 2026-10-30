import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { chromium } from 'playwright';

const base = 'http://127.0.0.1:4173/pikk-app/';
const server = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], {
  env: { ...process.env, VITE_BASE: '/pikk-app/' }, stdio: 'inherit'
});
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(base)).ok) { ready = true; break; } } catch {}
    await sleep(250);
  }
  assert.ok(ready, 'Vite preview unavailable');
  await mkdir('visual-review', { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [name, viewport, mobile] of [
      ['mobile', { width: 390, height: 844 }, true],
      ['desktop', { width: 1440, height: 900 }, false],
    ]) {
      const context = await browser.newContext({
        viewport, deviceScaleFactor: 1, reducedMotion: 'reduce',
        ...(mobile ? { isMobile: true, hasTouch: true } : {}),
      });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const capture = async phase => {
        assert.equal(await page.locator('#tabbar a').count(), 7, 'seven approved tabs');
        assert.equal(await page.locator('#dbs-sticky-player').isVisible(), true, 'persistent music player');
        assert.equal(await page.locator('.logo-img').isVisible(), true, 'approved PIKK logo');
        assert.equal(await page.locator('.logo-img').evaluate(el => el.complete && el.naturalWidth > 0), true, 'logo loaded');
        const width = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, viewport: innerWidth }));
        assert.ok(width.scroll <= width.viewport + 3, name + ' ' + phase + ' overflow ' + JSON.stringify(width));
        assert.deepEqual(errors, [], name + ' ' + phase + ' browser errors');
        await page.screenshot({ path: 'visual-review/explore-flow-' + name + '-' + phase + '.png', fullPage: true, animations: 'disabled' });
      };

      await page.goto(base + '#/explore', { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.locator('#exploreQ').waitFor({ state: 'visible', timeout: 20000 });
      await page.locator('#splash').waitFor({ state: 'hidden', timeout: 15000 });
      await capture('trending');

      // Search results for people must open that person's profile, not the visitor's profile.
      await page.locator('#exploreQ').fill('DatBoiSkeet');
      await page.locator('#exploreGo').click();
      const artistHit = page.locator('#exploreResultsWrap .explore-hit[href="#/profile/dbs"]');
      await artistHit.waitFor({ state: 'visible', timeout: 10000 });
      assert.match(await artistHit.innerText(), /@DatBoiSkeet/);
      await capture('profile-result');
      await artistHit.click();
      await page.waitForURL(/#\/profile\/dbs$/, { timeout: 10000 });
      await page.locator('.pikk-profile-cover-kicker').waitFor({ state: 'visible' });
      assert.match(await page.locator('.pikk-profile-cover').innerText(), /DatBoiSkeet/);
      await capture('profile-open');
      await page.goto(base + '#/explore', { waitUntil: 'domcontentloaded' });
      await page.locator('#exploreQ').waitFor({ state: 'visible', timeout: 20000 });

      await page.locator('[data-explore-tab="discover"]').click();
      await page.locator('[data-explore-tab="discover"].on').waitFor({ state: 'visible' });
      await page.locator('#exploreQ').fill('music');
      await page.locator('#exploreGo').click();
      await page.locator('#exploreLiveInsert #exploreResults').waitFor({ state: 'visible' });
      assert.equal(await page.locator('#exploreLiveInsert').count(), 1);
      await capture('discover-search');

      await page.locator('#exploreQ').fill('video');
      await page.locator('#exploreGo').click();
      assert.equal(await page.locator('#exploreLiveInsert').count(), 1, 'second search reuses wrapper');
      await page.locator('#exploreClear').click();
      await sleep(400);
      assert.equal(await page.locator('#exploreLiveInsert').count(), 0, 'Clear removes results after repeated searches');
      assert.equal(await page.locator('#exploreQ').inputValue(), '', 'Clear empties input');
      await capture('discover-cleared');

      await page.locator('[data-explore-tab="following"]').click();
      await page.locator('[data-explore-tab="following"].on').waitFor({ state: 'visible' });
      await page.locator('#exploreQ').fill('artist');
      await page.locator('#exploreGo').click();
      await page.locator('#exploreLiveInsert #exploreResults').waitFor({ state: 'visible' });
      await page.locator('#exploreClear').click();
      await sleep(300);
      assert.equal(await page.locator('#exploreLiveInsert').count(), 0, 'Following Clear removes results');
      await capture('following-cleared');

      await page.locator('[data-explore-tab="trending"]').click();
      await page.locator('[data-explore-tab="trending"].on').waitFor({ state: 'visible' });
      await page.locator('#exploreQ').fill('music');
      await page.locator('#exploreQ').press('Enter');
      await page.locator('#exploreResultsWrap #exploreResults').waitFor({ state: 'visible' });
      await page.locator('#exploreClear').click();
      assert.match(await page.locator('#exploreResultsWrap').innerText(), /Search creators, fans, songs/);
      await capture('trending-cleared');
      await context.close();
    }
  } finally { await browser.close(); }
} finally { server.kill('SIGTERM'); }
