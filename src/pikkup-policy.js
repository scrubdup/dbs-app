/** PIKKUP browser-side Phase 1 validation; server must independently validate. */
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

