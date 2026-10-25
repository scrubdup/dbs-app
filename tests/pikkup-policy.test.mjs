import test from 'node:test';
import assert from 'node:assert/strict';
import { validatePikkupDraft, PIKKUP_MAX_SECONDS, PIKKUP_LOCAL_MAX_BYTES } from '../src/pikkup-policy.js';

const valid = (overrides = {}) => ({
  title: 'Original creator video',
  category: 'Music',
  file: { type: 'video/mp4', size: 1024 * 1024 },
  durationSeconds: 120,
  ...overrides,
});

test('Phase 1 accepts an original 20-minute video at the limit', () => {
  assert.equal(PIKKUP_MAX_SECONDS, 1200);
  assert.deepEqual(validatePikkupDraft(valid({ durationSeconds: 1200 })), { ok: true });
});

test('Phase 1 rejects longer videos and unreadable duration', () => {
  assert.match(validatePikkupDraft(valid({ durationSeconds: 1200.01 })).error, /20 minutes/);
  assert.match(validatePikkupDraft(valid({ durationSeconds: NaN })).error, /duration/);
  assert.match(validatePikkupDraft(valid({ durationSeconds: 0 })).error, /duration/);
});

test('Local prototype rejects unsupported media, empty files and oversized drafts', () => {
  assert.match(validatePikkupDraft(valid({ file: { type: 'text/plain', size: 200 } })).error, /MP4/);
  assert.match(validatePikkupDraft(valid({ file: { type: 'video/mp4', size: 0 } })).error, /empty/);
  assert.match(validatePikkupDraft(valid({ file: { type: 'video/mp4', size: PIKKUP_LOCAL_MAX_BYTES + 1 } })).error, /100 MB/);
});

test('Title and category constraints are enforced', () => {
  assert.match(validatePikkupDraft(valid({ title: '   ' })).error, /title/);
  assert.match(validatePikkupDraft(valid({ title: 'x'.repeat(121) })).error, /120/);
  assert.match(validatePikkupDraft(valid({ category: 'Invalid' })).error, /category/);
});
