import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { PIKK_GAMES, arcadeArtSrc } from '../src/games/arcade-catalog.js';
import { renderGames } from '../src/pages/games.js';

const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
const home=readFileSync(new URL('../src/pages/home.js',import.meta.url),'utf8');

test('Arcade uses the owner reference structure with 15 numbered neon cards',()=>{
 const html=renderGames();
 assert.equal((html.match(/pikk-arcade-card-header/g)||[]).length,15);
 assert.equal((html.match(/pikk-arcade-players/g)||[]).length,15);
 assert.match(html,/pikk-arcade-toolbar/);
 assert.match(html,/ALL GAMES COMING SOON/);
 assert.match(html,/Approved custom game images are still being integrated/);
 assert.match(css,/\.pikk-arcade-grid\{grid-template-columns:repeat\(5,minmax\(0,1fr\)\)/);
 assert.match(css,/@media\(max-width:700px\)/);
 assert.match(css,/\.pikk-arcade-card-header/);
 assert.match(css,/\.pikk-arcade-action/);
});
test('only the existing Block Wars art is linked; never pretend the other 14 are installed',()=>{
 assert.equal(PIKK_GAMES.length,15);
 assert.equal(PIKK_GAMES.filter(g=>g.artwork).length,1);
 assert.equal(arcadeArtSrc(PIKK_GAMES[0]),'/blockwars-preview/preview-ny-still.jpg');
 assert.equal(arcadeArtSrc(PIKK_GAMES[1]),'');
 assert.match(home,/arcadeArtSrc\(game\)/);
});
