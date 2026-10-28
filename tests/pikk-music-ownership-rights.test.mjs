import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const music=readFileSync(new URL('../src/pages/music.js',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
const spec=readFileSync(new URL('../docs/PIKK_MUSIC_OWNERSHIP_AND_RIGHTS_PROTECTION.md',import.meta.url),'utf8');
test('PIKK Music introduces permanent download proposal without claiming it is available',()=>{
 for (const term of ['Buy It.','Download It.','Keep It.','DRM-free','85% artist','15% PIKK','PRELAUNCH CONCEPT','NOT FOR SALE','licensed downloadable MP3/FLAC','$9.99']) assert.ok(music.includes(term),term);
 assert.ok(music.includes('music-purchase-preview'));
 assert.match(music,/no purchase or downloadable file/);
});
test('PIKK artist protection describes all six planned rights services and safeguards',()=>{
 for(const term of ['PIKK Rights &amp; Protection','Rights Registry','Audio Shield','Review &amp; Appeals','Outside PIKK','Copyright Assistance','Royalty Guidance','PRELAUNCH · NOT ACTIVE','Matching audio is not proof','No copyright registration','Content ID access','cannot guarantee piracy prevention']) assert.ok(music.includes(term),term);
 assert.match(css,/\.pikk-rights-grid/);
 assert.match(css,/@media\(max-width:420px\)/);
 assert.match(spec,/the artist retains their copyright/i);
 assert.match(spec,/DMCA notice\/counter-notice/);
});
