import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { chromium } from 'playwright';

process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY = '1';
const base = 'http://127.0.0.1:4173/pikk-app/';
const server = spawn('npx', ['vite','preview','--host','127.0.0.1','--port','4173','--strictPort'], {
  env: { ...process.env, VITE_BASE: '/pikk-app/' }, stdio: 'inherit'
});
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
try {
  let ready = false;
  for (let i = 0; i < 50; i++) {
    try { if ((await fetch(base)).ok) { ready = true; break; } } catch {}
    await sleep(250);
  }
  assert.ok(ready, 'Vite preview unavailable');
  await mkdir('visual-review', { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    for (const [name, viewport, mobile] of [
      ['mobile', { width: 390, height: 844 }, true],
      ['desktop', { width: 1440, height: 900 }, false]
    ]) {
      const context = await browser.newContext({
        viewport, deviceScaleFactor: 1, reducedMotion: 'reduce',
        ...(mobile ? { isMobile: true, hasTouch: true } : {})
      });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const verify = async phase => {
        assert.equal(await page.locator('#tabbar a').count(), 7, 'seven tabs');
        assert.equal(await page.locator('#dbs-sticky-player').isVisible(), true, 'player');
        assert.equal(await page.locator('.logo-img').isVisible(), true, 'official logo');
        assert.equal(await page.locator('.logo-img').evaluate(el => el.complete && el.naturalWidth > 0), true, 'logo image loaded');
        const bounds = await page.evaluate(() => ({ width: document.documentElement.scrollWidth, viewport: innerWidth }));
        assert.ok(bounds.width <= bounds.viewport + 3, name + ' ' + phase + ' overflow ' + JSON.stringify(bounds));
        assert.deepEqual(errors, [], name + ' ' + phase + ' browser errors');
        await page.screenshot({ path: 'visual-review/messages-flow-' + name + '-' + phase + '.png', fullPage: true, animations: 'disabled' });
      };
      await page.goto(base + '#/messages', { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.locator('.pikk-msg-flow-hero[aria-label="PIKK messages sign-in"]').waitFor({ state: 'visible', timeout: 20000 });
      await page.locator('#splash').waitFor({ state: 'hidden', timeout: 15000 });
      await verify('guest');

      await page.goto(base + '#/profile', { waitUntil: 'domcontentloaded' });
      await page.locator('#signinName').fill('PIKKMessageTest');
      await page.locator('#signinBtn').click();
      await page.goto(base + '#/messages', { waitUntil: 'domcontentloaded' });
      await page.locator('.pikk-messages-hero').waitFor({ state: 'visible', timeout: 10000 });
      await verify('inbox');

      await page.locator('#pikkNewChatTop').click();
      await page.locator('.pikk-msg-contact-grid').waitFor({ state: 'visible', timeout: 10000 });
      assert.ok(await page.locator('.pikk-msg-contact-card').count() > 0, 'original contacts');
      await verify('contacts');

      await page.locator('[data-start-peer]:not([data-start-peer="dbs"])').first().click();
      await page.locator('.pikk-msg-flow-hero-thread').waitFor({ state: 'visible', timeout: 10000 });
      await page.locator('#msgInput').fill('Testing the existing local messaging flow');
      await page.locator('#msgSend').click();
      await page.locator('.msg-bubble-text').getByText('Testing the existing local messaging flow').waitFor({ state: 'visible', timeout: 10000 });
      await verify('thread');

      await page.goto(base + '#/messages?view=team', { waitUntil: 'domcontentloaded' });
      await page.locator('#msgTeamFree').waitFor({ state: 'visible', timeout: 10000 });
      await verify('team');
      await context.close();
    }
  } finally { await browser.close(); }
} finally { server.kill('SIGTERM'); }
