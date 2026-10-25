/** PIKKUP Phase 1 browser-only drafts. NOT a production upload service.
 * Production requires authenticated signed uploads, server-side checks,
 * moderation, transcoding, rights reporting and reliable storage.
 */
import { getState, setState } from './store.js';
import { putBlob, deleteBlob, newBlobId } from './media-db.js';

export const PIKKUP_MAX_SECONDS = 20 * 60;
export const PIKKUP_LOCAL_MAX_BYTES = 100 * 1024 * 1024;
const VIDEO_MIMES = new Set(['video/mp4', 'video/webm', 'video/quicktime']);
const CATEGORIES = new Set(['Music', 'Entertainment', 'Gaming', 'Other']);

export function validatePikkupDraft({ title, category, file, durationSeconds }) {
  if (!String(title || '').trim()) return { ok: false, error: 'Add a video title.' };
  if (String(title).trim().length > 120) return { ok: false, error: 'Title must be 120 characters or fewer.' };
  if (!CATEGORIES.has(category)) return { ok: false, error: 'Choose a valid category.' };
  if (!file || !VIDEO_MIMES.has(file.type)) return { ok: false, error: 'Choose an MP4, WebM or MOV video.' };
  if (!Number.isFinite(file.size) || file.size <= 0) return { ok: false, error: 'Video file is empty.' };
  if (file.size > PIKKUP_LOCAL_MAX_BYTES) return { ok: false, error: 'Local draft limit is 100 MB. Server uploads are not available yet.' };
  if (!Number.isFinite(durationSeconds) || durationSeconds <= 0) return { ok: false, error: 'Unable to read video duration. Try a supported video file.' };
  if (durationSeconds > PIKKUP_MAX_SECONDS) return { ok: false, error: 'Phase 1 videos must be 20 minutes or shorter.' };
  return { ok: true };
}

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
  setState({ pikkupDrafts: [item, ...(getState().pikkupDrafts || [])].slice(0, 30) });
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
