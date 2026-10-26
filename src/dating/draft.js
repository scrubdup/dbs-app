/** Private, browser-local dating draft only. Never a public profile or match. */
export const DATING_DRAFT_KEY = 'pikk_dating_private_draft_v1';
export const DATING_INTENTS = ['not-sure', 'relationship', 'dating', 'friendship'];

export function normalizeDatingDraft(value = {}) {
  const intent = String(value.intent || 'not-sure');
  return {
    name: String(value.name || '').trim().slice(0, 40),
    bio: String(value.bio || '').trim().slice(0, 300),
    intent: DATING_INTENTS.includes(intent) ? intent : 'not-sure',
  };
}

export function readDatingDraft(storage = globalThis.localStorage) {
  try {
    return normalizeDatingDraft(JSON.parse(storage.getItem(DATING_DRAFT_KEY) || '{}'));
  } catch {
    return normalizeDatingDraft();
  }
}

export function saveDatingDraft(value, storage = globalThis.localStorage) {
  const draft = normalizeDatingDraft(value);
  storage.setItem(DATING_DRAFT_KEY, JSON.stringify(draft));
  return draft;
}

export function clearDatingDraft(storage = globalThis.localStorage) {
  storage.removeItem(DATING_DRAFT_KEY);
}
