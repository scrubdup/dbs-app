import { VIDEOS } from '../data.js';
import { esc, shellPage } from '../ui.js';

/**
 * PIKK 24/7 Viral Live: rights-safe discovery PREVIEW only.
 * Source links are not a rebroadcast license. Do not autoplay, rehost, claim
 * actual engagement, or call this a running stream until the server exists.
 */
const SOURCES = VIDEOS.filter(video => ['dirty-money', '93', 'no-love'].includes(video.id)).map(video => ({
  id: video.id,
  title: video.title,
  artist: 'DatBoiSkeet',
  url: video.youtube,
}));

const TYPES = [
  { id: 'videos', label: 'Videos' },
  { id: 'clips', label: 'Viral clips' },
  { id: 'songs', label: 'Songs' },
  { id: 'photos', label: 'Photos' },
];

export function renderViralLive() {
  const first = SOURCES[0];
  const choices = SOURCES.map((item, index) => `
    <button type="button" class="pikk-viral-choice${index === 0 ? ' is-selected' : ''}"
      data-viral-pick="${index}" aria-pressed="${index === 0}">
      <span class="pikk-viral-choice-num">${String(index + 1).padStart(2, '0')}</span>
      <span class="pikk-viral-choice-copy"><strong>${esc(item.title)}</strong><small>${esc(item.artist)} · Original YouTube source</small></span>
      <span class="pikk-viral-choice-arrow" aria-hidden="true">↗</span>
    </button>`).join('');

  return shellPage('PIKK Viral Live', `
    <div id="pikkViralPreview" class="pikk-viral-page">
      <section class="pikk-viral-hero" aria-label="PIKK Viral Live channel preview">
        <div class="pikk-viral-hero-copy">
          <span class="pikk-viral-kicker"><span aria-hidden="true" class="pikk-viral-signal"></span> PIKK 24/7 · CHANNEL PREVIEW</span>
          <h2>What's viral.<br><em>All in one place.</em></h2>
          <p>Discover clips, music, videos and creators in one nonstop destination when the licensed channel launches.</p>
          <div class="pikk-viral-hero-actions">
            <a class="btn primary" href="#/live">Explore PIKK Live</a>
            <a class="btn ghost" href="#/shorts">Explore Clips</a>
          </div>
        </div>
        <div class="pikk-viral-hero-mark" aria-hidden="true"><span>▶</span><small>PIKK</small></div>
      </section>

      <div class="pikk-viral-notice" role="status">
        <strong>PREVIEW · NOT BROADCASTING</strong>
        <span>Real-time viewer counts, live chat, engagement ranking and 24/7 playback are not connected. Nothing here is represented as live.</span>
      </div>

      <nav class="pikk-viral-tabs" aria-label="Viral Live content types" role="tablist">
        ${TYPES.map((type, i) => `<button type="button" role="tab" data-viral-type="${type.id}" aria-selected="${i === 0}" aria-controls="viral-panel-${type.id}" id="viral-tab-${type.id}">${type.label}</button>`).join('')}
      </nav>

      <section id="viral-panel-videos" data-viral-panel="videos" role="tabpanel" aria-labelledby="viral-tab-videos">
        <div class="pikk-viral-stage" aria-label="Original video discovery">
          <div class="pikk-viral-stage-art" aria-hidden="true"><span>▶</span><small>ORIGINAL VIDEO</small></div>
          <div class="pikk-viral-stage-body">
            <span class="pikk-viral-stage-eyebrow">FEATURED SOURCE · NOT A LIVESTREAM</span>
            <h3 id="pikkViralTitle" aria-live="polite">${esc(first.title)}</h3>
            <p id="pikkViralCreator">${esc(first.artist)} · Watch from the original publisher</p>
            <a class="btn primary" id="pikkViralSource" href="${esc(first.url)}" target="_blank" rel="noopener noreferrer">Watch original on YouTube</a>
            <p class="pikk-viral-caption">Opening the source does not grant PIKK rebroadcast or music licensing rights.</p>
          </div>
        </div>
        <div class="pikk-viral-section-head"><h3>Up next · source library</h3><span>Manual preview · ${SOURCES.length} existing music videos</span></div>
        <div class="pikk-viral-queue" id="pikkViralQueue">${choices}</div>
      </section>

      ${TYPES.filter(type => type.id !== 'videos').map(type => `
        <section class="pikk-viral-empty" id="viral-panel-${type.id}" data-viral-panel="${type.id}" role="tabpanel" aria-labelledby="viral-tab-${type.id}" hidden>
          <span class="pikk-viral-empty-symbol" aria-hidden="true">◇</span>
          <h3>${esc(type.label)} are being prepared</h3>
          <p>No approved items are queued in this category yet. Creator permission, licensing and moderation must be confirmed before content appears here.</p>
          <a class="btn ghost" href="#/shorts">Browse existing PIKK Clips</a>
        </section>`).join('')}

      <section class="pikk-viral-safety" aria-label="Channel launch requirements">
        <div><span class="pikk-viral-section-kicker">CREATOR FIRST</span><h3>Trending, with permission.</h3><p>Creators will be credited and linked to their profiles. The planned feed will rotate by engagement quality, velocity and freshness, not views alone.</p></div>
        <ul>
          <li>Explicit permission to rebroadcast every video, photo and song</li>
          <li>Music and third-party rights clearance before playback</li>
          <li>Moderation, creator opt-out, removal and duplicate checks</li>
          <li>Real-time chat, viewer counts and Up Next only when backed by a live service</li>
        </ul>
      </section>
    </div>
  `, { lead: 'Discover the planned 24/7 viral channel · preview only' });
}

export function bindViralLive(root) {
  const page = root.querySelector('#pikkViralPreview');
  if (!page) return;
  page.querySelectorAll('[data-viral-pick]').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.viralPick);
      const source = SOURCES[index];
      if (!source) return;
      page.querySelector('#pikkViralTitle').textContent = source.title;
      page.querySelector('#pikkViralCreator').textContent = source.artist + ' · Watch from the original publisher';
      page.querySelector('#pikkViralSource').href = source.url;
      page.querySelectorAll('[data-viral-pick]').forEach(item => {
        const selected = item === button;
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
    });
  });
  page.querySelectorAll('[data-viral-type]').forEach(button => {
    button.addEventListener('click', () => {
      const type = button.dataset.viralType;
      page.querySelectorAll('[data-viral-type]').forEach(item => {
        item.setAttribute('aria-selected', String(item === button));
      });
      page.querySelectorAll('[data-viral-panel]').forEach(panel => {
        panel.hidden = panel.dataset.viralPanel !== type;
      });
    });
  });
}
