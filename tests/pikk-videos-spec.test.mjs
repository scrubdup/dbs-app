import test from 'node:test';
import assert from 'node:assert/strict';
import { renderVideos } from '../src/pages/shells.js';

test('Videos shows the approved artist/producer upload teaser immediately after primary sections', () => {
  const html = renderVideos();
  assert.match(html, /<h1>PIKK Videos/);
  assert.match(html, /Coming Soon — Artist &amp; Producer Uploads/);
  assert.match(html, /Artists and producers will be able to upload original music, beats, and videos to PIKK\./);
  assert.match(html, /Prototype preview only\./);
  assert.ok(html.indexOf('Music Videos</h3>') < html.indexOf('videosCreatorUploadsComingSoon'));
  assert.ok(html.indexOf('videosCreatorUploadsComingSoon') < html.indexOf('More Videos</h3>'));
});

test('Videos removes the Interviews category row but retains the verified interview video', () => {
  const html = renderVideos();
  assert.doesNotMatch(html, /<h3[^>]*>Interviews<\/h3>/);
  assert.match(html, /On The Radar Interview — Talk of The Town/);
  assert.match(html, /More Videos<\/h3>/);
  assert.match(html, /Official DatBoiSkeet videos and mixes/);
});
