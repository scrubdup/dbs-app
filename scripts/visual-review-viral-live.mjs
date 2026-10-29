import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY = '1';
await mkdir('visual-review', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
try {
  for (const [device, width, height] of [['mobile',390,844],['desktop',1440,900]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(String(e)));
    await page.goto('http://127.0.0.1:5173/#/viral-live', { waitUntil: 'domcontentloaded' });
    await page.locator('#pikkViralPreview').waitFor({ state: 'visible', timeout: 20000 });
    assert.equal(await page.locator('#tabbar a').count(), 7, 'seven approved tabs remain');
    assert.equal(await page.locator('.logo-img').isVisible(), true, 'approved PIKK logo remains');
    assert.equal(await page.locator('#dbs-sticky-player').isVisible(), true, 'persistent player remains');
    assert.equal(await page.locator('[data-viral-pick]').count(), 3, 'three original sources');
    assert.equal(await page.locator('#pikkViralSource').getAttribute('href'), 'https://www.youtube.com/watch?v=-rHDLWfiuDI');
    assert.match(await page.locator('#pikkViralThumbnail').getAttribute('src'), /-rHDLWfiuDI\/hqdefault\.jpg$/);
    assert.equal(await page.locator('.pikk-viral-choice-thumb').count(), 3);
    await page.locator('[data-viral-pick="1"]').click();
    assert.match(await page.locator('#pikkViralTitle').textContent(), /^93 ft/);
    assert.match(await page.locator('#pikkViralThumbnail').getAttribute('src'), /zC0BYFxs5W0\/hqdefault\.jpg$/);
    assert.equal(await page.locator('#pikkViralSource').getAttribute('href'), 'https://www.youtube.com/watch?v=zC0BYFxs5W0');
    assert.equal(await page.locator('[data-viral-pick="1"]').getAttribute('aria-pressed'), 'true');
    await page.locator('[data-viral-type="photos"]').click();
    assert.equal(await page.locator('#viral-panel-photos').isVisible(), true);
    assert.equal(await page.locator('#viral-panel-videos').isVisible(), false);
    await page.locator('[data-viral-type="videos"]').click();
    assert.equal(await page.locator('#viral-panel-videos').isVisible(), true);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    assert.ok(overflow <= 3, device + ' horizontal overflow ' + overflow);
    // Interacting with Up Next scrolls to the queue; return to the top before reviewing first paint.
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(250);
    await page.screenshot({ path: 'visual-review/pikk-viral-live-'+device+'-viewport.png' });
    await page.screenshot({ path: 'visual-review/pikk-viral-live-'+device+'.png', fullPage: true });
    assert.deepEqual(errors, [], device + ' JS errors');
    await page.goto('http://127.0.0.1:5173/#/live?tab=categories', { waitUntil: 'domcontentloaded' });
    await page.locator('#liveTabCategories').waitFor({ state: 'visible' });
    assert.ok(await page.locator('a[href="#/viral-live"]').count() > 0, 'Viral Live linked from Live categories');
    await context.close();
  }
  console.log('PIKK Viral Live preview: mobile/desktop route, original links, tabs, queue, chrome and overflow verified.');
} finally {
  await browser.close();
}
