import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { VIDEOS } from '../src/data.js';
import { renderVideos } from '../src/pages/shells.js';
const src=readFileSync(new URL('../src/pages/shells.js',import.meta.url),'utf8');
const css=readFileSync(new URL('../src/styles.css',import.meta.url),'utf8');
test('video gallery contains verified originals and original embedded playback',()=>{
  const page=renderVideos();
  assert.match(page,/pikk-video-hero/);
  assert.match(page,/pikk-video-grid/);
  assert.match(page,/pikk-video-filters/);
  assert.match(page,/data-videos-filter="Music Videos"/);
  assert.match(page,/class="hero-video"/);
  assert.ok(VIDEOS.some(v=>v.artist==='DatBoiSkeet' && v.embed));
  assert.match(page,/No rehosted files/);
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
