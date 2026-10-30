// Browser-local PIKK Shield intake prototype. Not a fingerprinting or enforcement service.
export const SHIELD_STORAGE_KEY = 'pikk_shield_intake_v1';
const MAX_ITEMS = 30;
export const RIGHTS_OPTIONS = Object.freeze(['Original creator','Licensed with permission','Authorized representative']);
export function safeShieldUrl(raw) {
  const value = String(raw || '').trim();
  if (!value) return '';
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
  catch { return ''; }
}
export function normalizeShieldSubmission(data, now = Date.now()) {
  const title = String(data.title || '').trim().slice(0,120);
  const owner = String(data.owner || '').trim().slice(0,100);
  const rights = String(data.rights || '');
  const contact = String(data.contact || '').trim().slice(0,180);
  const notes = String(data.notes || '').trim().slice(0,800);
  const source = safeShieldUrl(data.source);
  if (!title || !owner || !contact || !RIGHTS_OPTIONS.includes(rights) || !data.certified) {
    throw new Error('Complete title, rights holder, contact, ownership basis and certification.');
  }
  if (String(data.source || '').trim() && !source) throw new Error('Use a valid http or https link.');
  return { id: 'shield-' + now + '-' + Math.random().toString(36).slice(2,8), type:'rights-declaration', title, owner, rights, contact, notes, source, at:now, status:'Local draft — not submitted' };
}
export function readShieldIntakes(storage) {
  try {
    const raw = JSON.parse(storage.getItem(SHIELD_STORAGE_KEY) || '[]');
    return Array.isArray(raw) ? raw.filter(x => x && x.type === 'rights-declaration').slice(0,MAX_ITEMS) : [];
  } catch { return []; }
}
export function saveShieldIntake(storage, item) {
  const items = [item,...readShieldIntakes(storage)].slice(0,MAX_ITEMS);
  storage.setItem(SHIELD_STORAGE_KEY,JSON.stringify(items));
  return items;
}
export function removeShieldIntake(storage,id) {
  const items = readShieldIntakes(storage).filter(x=>x.id!==id);
  storage.setItem(SHIELD_STORAGE_KEY,JSON.stringify(items));
  return items;
}

/** User-initiated offline backup. Export only known fields, never other localStorage data. */
export function serializeShieldDrafts(storage) {
  const drafts = readShieldIntakes(storage).map(item => ({
    id: String(item.id || ''),
    type: 'rights-declaration',
    title: String(item.title || ''),
    owner: String(item.owner || ''),
    rights: String(item.rights || ''),
    contact: String(item.contact || ''),
    notes: String(item.notes || ''),
    source: safeShieldUrl(item.source),
    at: Number.isFinite(item.at) ? item.at : null,
    status: 'Local draft — not submitted'
  }));
  return JSON.stringify({format:'PIKK Shield local rights drafts',version:1,drafts},null,2);
}
