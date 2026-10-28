import test from 'node:test';
import assert from 'node:assert/strict';
import { statSync, readFileSync } from 'node:fs';
import { PIKK_GAMES, arcadeArtSrc } from '../src/games/arcade-catalog.js';
const home=readFileSync(new URL('../src/pages/home.js',import.meta.url),'utf8');
const games=readFileSync(new URL('../src/pages/games.js',import.meta.url),'utf8');
test('the real Block Wars preview exists and its Pages-safe URL is shared by Arcade and Home',()=>{
 const game=PIKK_GAMES.find(g=>g.name==='Block Wars');
 assert.equal(game.artwork,'/blockwars-preview/preview-ny-still.jpg');
 assert.ok(statSync(new URL('../public/blockwars-preview/preview-ny-still.jpg',import.meta.url)).size>2000);
 assert.equal(arcadeArtSrc(game),'/blockwars-preview/preview-ny-still.jpg');
 assert.match(readFileSync(new URL('../src/games/arcade-catalog.js',import.meta.url),'utf8'),/import\.meta\.env\.BASE_URL/);
 for(const file of [home,games]) assert.match(file,/esc\(arcadeArtSrc\(game\)\)/);
});
test('no unapproved artwork is claimed installed',()=>{
 assert.equal(PIKK_GAMES.filter(g=>g.artwork).length,1);
 assert.equal(arcadeArtSrc(PIKK_GAMES[1]),'');
});
