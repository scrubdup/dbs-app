import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY = '1';
await mkdir('visual-review', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
try {
  for (const [device, width, height, columns] of [
    ['mobile', 390, 844, 2],
    ['desktop', 1440, 900, 3],
  ]) {
    const context = await browser.newContext({
      viewport: { width, height }, deviceScaleFactor: 1, reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:5173/#/live?tab=categories', { waitUntil: 'domcontentloaded' });
    await page.locator('#liveTabCategories').waitFor({ state: 'visible', timeout: 20000 });
    await page.waitForTimeout(3600);
    assert.equal(await page.locator('.logo-img').isVisible(), true, 'approved logo remains visible');
    assert.equal(await page.locator('#dbs-sticky-player').isVisible(), true, 'persistent music player');
    assert.equal(await page.locator('#tabbar a').count(), 7, 'seven bottom tabs preserved');
    assert.equal(await page.locator('.pikk-live-directory-group').count(), 8, 'eight organized sections');
    assert.equal(await page.locator('#pikk-live-group-coed').getAttribute('open'), '', 'coed open by default');
    assert.equal(await page.locator('#pikk-live-group-coed .pikk-live-room-card').count(), 11);
    assert.equal(await page.locator('#pikk-live-group-women .pikk-live-room-card').count(), 15);
    assert.equal(await page.locator('#pikk-live-group-men .pikk-live-room-card').count(), 15);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    assert.ok(overflow <= 3, device + ' must not overflow viewport: ' + overflow);
    await page.screenshot({ path: 'visual-review/pikk-live-' + device + '-directory.png' });

    for (const [id, count] of [['women', 15], ['men', 15]]) {
      const group = page.locator('#pikk-live-group-' + id);
      await group.locator('summary').click();
      assert.equal(await group.getAttribute('open'), '', id + ' expands on click');
      assert.equal(await group.locator('.pikk-live-room-card:visible').count(), count);
      const cols = await group.locator('.pikk-live-directory-cards').evaluate(el =>
        getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean).length);
      assert.equal(cols, columns, device + ' ' + id + ' grid columns');
      const overlaps = await group.locator('.pikk-live-room-card').evaluateAll(cards => cards.some(card => {
        const title = card.querySelector('strong').getBoundingClientRect();
        const icon = card.querySelector('.pikk-live-room-emoji').getBoundingClientRect();
        return title.top < icon.bottom - 1;
      }));
      assert.equal(overlaps, false, id + ' titles clear icons');
      await group.screenshot({ path: 'visual-review/pikk-live-' + device + '-' + id + '.png' });
      await group.locator('summary').click();
    }
    await page.locator('#pikk-live-group-dating summary').click();
    await page.locator('#pikk-live-group-dating a').filter({ hasText: 'Why Are You Single?' }).click();
    await page.waitForTimeout(200);
    assert.ok(page.url().includes('tab=channels&category=Why%20Are%20You%20Single%3F'), 'dating room routes to channel filter');
    assert.deepEqual(errors, [], device + ' browser errors');
    await context.close();
  }
  console.log('PASS: Live categories grouped 15 women/15 men/11 coed, route, responsive cards, logo, player and seven tabs.');
} finally {
  await browser.close();
}
