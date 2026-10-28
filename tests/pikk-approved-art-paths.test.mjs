import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
const cat=readFileSync(new URL('../src/games/arcade-catalog.js',import.meta.url),'utf8');
const home=readFileSync(new URL('../src/pages/home.js',import.meta.url),'utf8');
const game=readFileSync(new URL('../src/pages/games.js',import.meta.url),'utf8');
const installer=readFileSync(new URL('../scripts/install-approved-arcade-art.mjs',import.meta.url),'utf8');
test('both Arcade and Home use base-aware image URLs on GitHub Pages',()=>{
 assert.match(cat,/export function arcadeArtSrc/);
 assert.match(cat,/import\.meta\.env\.BASE_URL/);
 for(const src of [home,game]){assert.match(src,/arcadeArtSrc\(game\)/);assert.doesNotMatch(src,/esc\(game\.artwork\)/);}
 assert.match(game,/alt="\$\{esc\(game\.name\)\} concept artwork"/);
});
test('approved images are fingerprinted before installation',()=>{
 assert.match(installer,/createHash\('sha256'\)/);
 assert.match(installer,/approvedSHA256Prefixes/);
 assert.match(installer,/Wrong or altered approved picture/);
 assert.equal((installer.match(/"[a-f0-9]{16}"/g)||[]).length,15);
});
