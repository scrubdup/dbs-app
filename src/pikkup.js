/** PIKKUP Phase 1 browser-only drafts. NOT a production upload service.
 * Production requires authenticated signed uploads, server-side checks,
 * moderation, transcoding, rights reporting and reliable storage.
 */
import { getState, setState } from './store.js';
import { putBlob, deleteBlob, newBlobId } from './media-db.js';

import { validatePikkupDraft } from './pikkup-policy.js';
export { PIKKUP_MAX_SECONDS, PIKKUP_LOCAL_MAX_BYTES, validatePikkupDraft } from './pikkup-policy.js';

export function readPikkupDuration(file) {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const url = URL.createObjectURL(file);
    let settled = false;
    const finish = (value, error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      video.removeAttribute('src');
      video.load();
      URL.revokeObjectURL(url);
      if (error) reject(new Error(error));
      else resolve(value);
    };
    const timer = setTimeout(() => finish(0, 'Timed out reading video duration.'), 15000);
    video.preload = 'metadata';
    video.onloadedmetadata = () => finish(Number(video.duration));
    video.onerror = () => finish(0, 'Unable to read video metadata.');
    video.src = url;
  });
}

export function listPikkupLocalDrafts(userId) {
  if (!userId) return [];
  return (getState().pikkupDrafts || []).filter((item) => item.userId === userId);
}

export async function savePikkupLocalDraft(file, metadata, durationSeconds) {
  const user = getState().user;
  if (!user?.id) throw new Error('Sign in to save a local draft.');
  const title = String(metadata.title || '').trim();
  const category = metadata.category;
  const valid = validatePikkupDraft({ title, category, file, durationSeconds });
  if (!valid.ok) throw new Error(valid.error);
  const id = newBlobId('pikkup');
  await putBlob(id, file, { name: file.name });
  const item = {
    id, userId: user.id, title, category,
    description: String(metadata.description || '').trim().slice(0, 1000),
    visibility: 'draft', // Never claim public publishing without a server.
    durationSeconds: Math.round(durationSeconds),
    mediaRef: 'idb:' + id, createdAt: Date.now(),
  };
  setState({ pikkupDrafts: [item, ...(getState().pikkupDrafts || [])] });
  return item;
}

export async function deletePikkupLocalDraft(id) {
  const user = getState().user;
  const drafts = getState().pikkupDrafts || [];
  const item = drafts.find((d) => d.id === id && d.userId === user?.id);
  if (!item) return false;
  await deleteBlob(item.id);
  setState({ pikkupDrafts: drafts.filter((d) => d.id !== id) });
  return true;
}
