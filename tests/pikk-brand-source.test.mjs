import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// Source of truth: owner ZIP PIKK_Complete_Developer_Master(3).zip
// 00_READ_ME_FIRST.md + Brand_Assets/PIKK_Official_Approved_Logo.jpg.
// Never replace with the nonexistent PNGs named by the conflicting update 08.
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('../public/manifest.webmanifest', import.meta.url), 'utf8'));

test('PIKK approved logo matches the owner-supplied original byte-for-byte', () => {
  const bytes = readFileSync(new URL('../public/brand/pikk-official-approved.jpg', import.meta.url));
  assert.equal(bytes.byteLength, 95277);
  assert.equal(
    createHash('sha256').update(bytes).digest('hex'),
    'a165710faf9f5a20be91e703f631efac4405b5a0ad344a2227487de547208933',
  );
});

test('PIKK splash and header use the exact official image, not nonexistent replacements', () => {
  assert.match(html, /class="splash-logo" src="%BASE_URL%brand\/pikk-official-approved\.jpg"/);
  assert.match(html, /class="logo-img" src="%BASE_URL%brand\/pikk-official-approved\.jpg"/);
  assert.doesNotMatch(html, /PIKK_Approved_Logo\.png|PIKK_App_Icon_Wordmark_Only\.png/);
  assert.match(html, /<title>PIKK — Music, Social & Live<\/title>/);
  assert.equal(manifest.name, 'PIKK');
  assert.equal(manifest.short_name, 'PIKK');
});

test('social preview uses app base path rather than broken domain-root path', () => {
  assert.match(html, /<meta property="og:image" content="%BASE_URL%og-image\.png"/);
  assert.doesNotMatch(html, /<meta property="og:image" content="\/og-image\.png"/);
});

// PWA manifest currently names 4 nonexistent icon PNGs. DO NOT generate a new
// emblem or publish an unapproved crop; this is an explicit owner-approval gate.
// See docs/PIKK_BRAND_SOURCE_AUDIT_2026-10-26.md.
