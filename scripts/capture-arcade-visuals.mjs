// Browser evidence for the approved PIKK Arcade. Runs only in CI, never publishes.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const root = 'http://127.0.0.1:4173/pikk-app/';
await mkdir('visual-evidence', { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const [route, width, height, file, fullPage] of [
    ['games', 390, 844, 'arcade-mobile.png', true],
    ['games', 1440, 900, 'arcade-desktop.png', true],
    ['home', 390, 844, 'home-mobile.png', false]
  ]) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
    page.setDefaultNavigationTimeout(20000);
    await page.goto(root + '#/' + route, { waitUntil: 'domcontentloaded', timeout: 20000 });
    // PIKK's splash runs for roughly three seconds.
    await page.waitForTimeout(4500);
    if (route === 'games') {
      const cards = page.locator('.pikk-arcade-card');
      const images = page.locator('.pikk-arcade-card img');
      if (await cards.count() !== 15 || await images.count() !== 15) {
        throw new Error('Expected 15 Arcade cards and 15 installed images');
      }
      const status = await images.evaluateAll(imgs => imgs.map(i => ({ src: i.getAttribute('src'), loaded: i.complete && i.naturalWidth > 0 })));
      if (status.some(x => !x.loaded)) throw new Error('Unloaded Arcade images: ' + JSON.stringify(status.filter(x => !x.loaded)));
      const nav = await page.locator('nav').count();
      if (!nav) throw new Error('Navigation missing from Arcade route');
    }
    await page.screenshot({ path: 'visual-evidence/' + file, fullPage, animations: 'disabled', timeout: 20000 });
    await page.close();
    console.log('Captured ' + file);
  }
} finally {
  await browser.close();
}
