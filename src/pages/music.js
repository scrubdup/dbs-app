import { COMING_SOON, MEMBERSHIPS } from '../data.js';
import { esc, shellPage } from '../ui.js';

export function renderMusic() {
  const coming = COMING_SOON.map(
    (c) => `
    <div class="cover-card" style="flex:0 0 160px">
      <span class="badge-cs">${esc(c.status)}</span>
      <img src="${esc(c.cover)}" alt="${esc(c.title)}" style="width:160px;height:160px" />
      <div class="t">${esc(c.title)}</div>
      <div class="muted" style="font-size:11px">${esc(c.artist)}</div>
    </div>`
  ).join('');

  const tiers = MEMBERSHIPS.map(
    (m) => `
    <div class="card" style="margin:0">
      <h3>${esc(m.name)}</h3>
      <div class="price" style="font-size:22px;font-weight:900">$${m.price}<span class="muted" style="font-size:13px">/mo</span></div>
      <p class="muted">${esc(m.blurb)}</p>
      <button class="btn primary block" disabled title="TEST MODE">Join · TEST MODE</button>
    </div>`
  ).join('');

  const body = `
    <div class="card">
      <h2>Upcoming Releases</h2>
      <p class="muted">Real cover art · playback unlocks when released.</p>
      <div class="cover-row">${coming}</div>
    </div>

    <div class="card" id="vault">
      <h2>Vault</h2>
      <p class="muted">Exclusive unreleased tracks, demos, and BTS for members.</p>
      <div class="vault-lock">
        🔒 Vault exclusives coming soon.<br/>
        No sample tracks — only approved DatBoiSkeet content.
      </div>
      <div class="grid-2" style="margin-top:14px">${tiers}</div>
    </div>

    <div class="card">
      <h2>Stream Everywhere</h2>
      <p class="muted">Official catalog links open Spotify, Apple Music, YouTube Music, and more when configured by admin. External streams are not rehosted in-app.</p>
      <a class="btn" href="https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA" target="_blank" rel="noopener">YouTube Channel</a>
    </div>
  `;
  return shellPage('Music & Vault', body, { lead: 'Singles, albums, Coming Soon, and member Vault.' });
}
