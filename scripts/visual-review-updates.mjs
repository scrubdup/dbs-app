import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

// External media embeds may keep document.fonts.ready pending indefinitely in CI.
// Capture the rendered fallback fonts rather than hanging the screenshot job.
process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY = '1';
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
await mkdir('visual-review', { recursive: true });
for (const [name, width, height] of [['mobile', 390, 844], ['desktop', 1440, 900]]) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  await page.goto('http://127.0.0.1:5173/#/updates', { waitUntil: 'domcontentloaded' });
  await page.locator('.pikk-updates-hero').waitFor({ state: 'visible', timeout: 20000 });
  await page.waitForTimeout(3300);
  const title = await page.locator('.pikk-updates-hero h2').textContent();
  if (!title.includes('Know what loaded')) throw new Error(name + ': release hero missing');
  const count = await page.locator('.pikk-update-card').count();
  if (count !== 5) throw new Error(name + ': expected 5 published release cards, got ' + count);
  if (!(await page.locator('.pikk-updates-hero-mark img').isVisible())) throw new Error(name + ': approved chrome logo artwork missing');
  if (!(await page.locator('.pikk-update-card').first().getByText('Premium Wallet & Payouts').isVisible())) throw new Error(name + ': latest Wallet release missing');
  if (await page.locator('.pikk-update-kind').count() !== 5) throw new Error(name + ': test-mode status labels missing');
  const tabs = await page.locator('#tabbar a').allTextContents();
  if (tabs.length !== 7) throw new Error(name + ': approved seven-tab navigation changed: ' + tabs.length);
  if (!(await page.locator('#dbs-sticky-player').isVisible())) throw new Error(name + ': sticky player missing');
  if (!(await page.locator('.logo-img').isVisible())) throw new Error(name + ': approved logo missing');
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  if (overflow > 3) throw new Error(name + ': horizontal overflow ' + overflow + 'px');
  await page.screenshot({ path: 'visual-review/updates-' + name + '.png', fullPage: true });
  await page.locator('.pikk-update-card a[href="#/wallet"]').click();
  await page.waitForURL(url => url.hash === '#/wallet', { timeout: 10000 });
  await page.locator('#app h1').getByText('Wallet', { exact: false }).waitFor({ state: 'visible', timeout: 10000 });
  if (errors.length) throw new Error(name + ': page errors: ' + errors.join('; '));
  await context.close();
}
await browser.close();
console.log('PIKK update center visual checks passed: 390px and 1440px; navigation, player, logo, release links, and no overflow.');
