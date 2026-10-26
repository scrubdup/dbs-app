import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeDatingDraft, readDatingDraft, saveDatingDraft, clearDatingDraft, DATING_DRAFT_KEY } from '../src/dating/draft.js';

function memoryStorage() {
  const values = new Map();
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key) };
}
test('normalizes lengths and rejects unsupported intentions', () => {
  const draft = normalizeDatingDraft({ name: 'x'.repeat(80), bio: 'y'.repeat(400), intent: 'invalid' });
  assert.equal(draft.name.length, 40);
  assert.equal(draft.bio.length, 300);
  assert.equal(draft.intent, 'not-sure');
});
test('saves, reads and deletes private draft', () => {
  const storage = memoryStorage();
  saveDatingDraft({ name: 'Alex', bio: 'Music', intent: 'relationship' }, storage);
  assert.equal(readDatingDraft(storage).name, 'Alex');
  assert.equal(readDatingDraft(storage).intent, 'relationship');
  clearDatingDraft(storage);
  assert.equal(storage.getItem(DATING_DRAFT_KEY), null);
  assert.equal(readDatingDraft(storage).name, '');
});
test('corrupt storage fails closed to blank draft', () => {
  const storage = memoryStorage();
  storage.setItem(DATING_DRAFT_KEY, '{broken');
  assert.equal(readDatingDraft(storage).name, '');
});
