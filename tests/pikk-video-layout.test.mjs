import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const data=readFileSync(new URL('../src/data.js',import.meta.url),'utf8');
const src=readFileSync(new URL('../src/pages/shells.js',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('video gallery contains verified originals and original embedded playback',()=>{
  assert.match(src,/pikk-video-hero/);
  assert.match(src,/pikk-video-grid/);
  assert.match(src,/pikk-video-filters/);
  assert.match(src,/data-videos-filter="Music Videos"/);
  assert.match(src,/class="hero-video"/);
  assert.match(data,/artist: 'DatBoiSkeet'/);
  assert.match(src,/No rehosted files/);
});
test('video category filters are interactive without deleting uploads or share controls',()=>{
 assert.match(src,/button\.dataset\.videosFilter/);
 assert.match(src,/section\.hidden = !visible/);
 assert.match(src,/bindPageYoutubeEmbeds\(root\)/);
 assert.match(src,/video-share/);
 assert.match(src,/resolveMediaSrc\(ref\)/);
 assert.match(src,/catalog-admin-video/);
 assert.match(css,/\.pikk-video-section\[hidden\]/);
 assert.match(css,/@media\(max-width:520px\)/);
});
