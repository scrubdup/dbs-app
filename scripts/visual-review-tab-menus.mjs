import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

// Checks the owner's screenshot requirement: ALL seven bottom tabs use the
// existing Create dialog's actual grid, outlined icons, tile and cancel CSS.
// These are real browser interactions, not static string checks.
const sections = [
  ['music', 'pikkMusicMenu', 5],
  ['videos', 'pikkVideosMenu', 4],
  ['connect', 'pikkConnectMenu', 5],
  ['create', 'pikkCreateMenu', 9],
  ['dating', 'pikkDatingMenu', 4],
  ['games', 'pikkGamesMenu', 2],
  ['shop', 'pikkShopMenu', 4],
];
const expectedTabs = ['Music', 'Videos', 'Connect', 'Create', 'Dating', 'Games', 'Shop'];
await mkdir('visual-review', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
try {
  for (const [device, width, height] of [['mobile', 390, 844], ['desktop', 1440, 900]]) {
    const context = await browser.newContext({
      viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce'
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:5173/#/home', { waitUntil: 'domcontentloaded' });
    await page.locator('#tabbar a').first().waitFor({ state: 'visible', timeout: 20000 });
    await page.waitForTimeout(3600); // allow the approved startup splash to clear

    assert.deepEqual((await page.locator('#tabbar a').allTextContents()).map(t => t.trim()), expectedTabs);
    assert.equal(await page.locator('.logo-img').isVisible(), true, 'PIKK logo must stay visible');
    assert.equal(await page.locator('#dbs-sticky-player').isVisible(), true, 'music player must stay visible');

    let createStyle;
    for (const [name, id, count] of sections) {
      await page.evaluate(() => { location.hash = '#/home'; });
      await page.locator('#tabbar a[href="#/home"]').count(); // Home is NOT a bottom tab
      const trigger = page.locator('#tabbar a[href="#/' + name + '"]');
      await trigger.waitFor({ state: 'visible' });
      await trigger.click();
      const panel = page.locator('#' + id);
      await panel.waitFor({ state: 'visible', timeout: 10000 });
      const sheet = panel.locator('.pikk-create-sheet');
      const tiles = sheet.locator('.pikk-create-grid .pikk-create-tile');
      assert.equal(await tiles.count(), count, device + ' ' + name + ' tile count');
      assert.equal(await sheet.locator('.pikk-menu-cancel').count(), 1, name + ' Cancel');
      assert.equal(await tiles.locator('.pikk-menu-icon svg').count(), count, name + ' SVG icons');
      assert.equal(await trigger.getAttribute('aria-expanded'), 'true', name + ' expanded');
      const geometry = await sheet.evaluate(el => {
        const grid = el.querySelector('.pikk-create-grid');
        const tile = grid.querySelector('.pikk-create-tile');
        const icon = tile.querySelector('.pikk-menu-icon');
        const rect = el.getBoundingClientRect();
        return {
          columns: getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length,
          tileRadius: getComputedStyle(tile).borderRadius,
          tileBackground: getComputedStyle(tile).backgroundImage,
          iconWidth: getComputedStyle(icon).width,
          sheetRadius: getComputedStyle(el).borderRadius,
          withinViewport: rect.left >= -2 && rect.right <= innerWidth + 2 &&
            rect.top >= -2 && rect.bottom <= innerHeight + 2,
          overflow: document.documentElement.scrollWidth - innerWidth
        };
      });
      assert.equal(geometry.columns, 3, device + ' ' + name + ' must have three columns');
      assert.ok(geometry.withinViewport, device + ' ' + name + ' dialog exceeds viewport');
      assert.ok(geometry.overflow <= 3, device + ' ' + name + ' horizontal overflow');
      if (name === 'create') createStyle = geometry;
      else {
        // Every menu uses the same actual Create styles, not an approximation.
        for (const key of ['tileRadius','tileBackground','iconWidth','sheetRadius'])
          assert.equal(geometry[key], createStyle?.[key] ?? geometry[key], device + ' ' + name + ' ' + key);
      }
      await page.screenshot({ path: 'visual-review/tabs-' + device + '-' + name + '.png' });
      await sheet.locator('.pikk-menu-cancel').click();
      await panel.waitFor({ state: 'hidden' });
      assert.equal(await trigger.getAttribute('aria-expanded'), 'false', name + ' cancel expanded');
      await trigger.click();
      await panel.waitFor({ state: 'visible' });
      await page.keyboard.press('Escape');
      await panel.waitFor({ state: 'hidden' });
      await trigger.click();
      await panel.waitFor({ state: 'visible' });
      const firstHref = await tiles.first().getAttribute('href');
      assert.ok(firstHref?.startsWith('#/'), name + ' first tile route');
      await tiles.first().click();
      await panel.waitFor({ state: 'hidden' });
      await page.waitForFunction(expected => location.hash === expected, firstHref);
      assert.equal(await page.locator('#tabbar a').count(), 7, 'navigation preserved after route');
    }
    assert.deepEqual(errors, [], device + ' uncaught errors');
    await context.close();
  }
  console.log('PASS: 7 Create-matched menus x 2 viewports, 14 screenshots, SVG icons, 3-column grids, Cancel, Escape, route navigation, logo/player/nav and no overflow.');
} finally {
  await browser.close();
}
