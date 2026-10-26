import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { VIDEOS } from '../src/data.js';

// Source-level guards: the Videos page imports Vite-only asset helpers and cannot
// be imported directly into Node's test runner without the Vite environment.
const source = readFileSync(new URL('../src/pages/shells.js', import.meta.url), 'utf8');
const start = source.indexOf('export function renderVideos()');
const end = source.indexOf('export function bindVideos(', start);
const videos = source.slice(start, end);

test('Videos keeps the approved upload teaser directly after primary sections', () => {
  assert.match(videos, /'PIKK Videos'/);
  assert.match(videos, /Coming Soon — Artist &amp; Producer Uploads/);
  assert.match(videos, /Artists and producers will be able to upload original music, beats, and videos to PIKK\./);
  assert.match(videos, /Prototype preview only\./);
  const primary = videos.lastIndexOf('${sections}');
  const teaser = videos.indexOf('id="videosCreatorUploadsComingSoon"');
  const extra = videos.indexOf('${extra}', teaser);
  assert.ok(primary >= 0 && primary < teaser && teaser < extra, 'teaser follows primary content before other shelves');
});

test('Videos removes Interviews category row without deleting approved media', () => {
  assert.match(videos, /const order = \['Music Videos', 'Mixes'\]/);
  assert.match(videos, /const archivedVideos = grouped\.Interviews \|\| \[\]/);
  assert.match(videos, /More Videos/);
  assert.match(videos, /archivedVideos\.map\(videoCard\)/);
  assert.ok(VIDEOS.some(v => v.category === 'Interviews' && v.title.includes('On The Radar')));
});
