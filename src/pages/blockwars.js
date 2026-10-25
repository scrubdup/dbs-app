import { esc, shellPage } from '../ui.js';
import { notifyVideoPlaying, notifyVideoIdle } from '../player.js';

/** t277u — Block Wars Coming Soon (preview video only · not playable) */
export function renderBlockWars() {
  const body = `
    <div class="card bw-preview" id="bw-coming-soon">
      <div class="bw-preview-head">
        <div>
          <p class="kicker" style="margin:0">Games · Coming soon</p>
          <h2 class="bw-preview-title" style="margin:4px 0 0">Block Wars</h2>
        </div>
        <span class="badge-cs" id="bw-coming-soon-badge">Coming Soon</span>
      </div>
      <p class="muted bw-preview-lead">NY · LA · Chicago fighters — teaser only. Full gameplay is <strong>not</strong> shipping yet.</p>
      <div class="bw-preview-frame">
        <video
          id="bwCsVideo"
          class="bw-preview-video"
          poster="/blockwars-preview/frames/01.jpg"
          src="/blockwars-preview/blockwars-fighters-preview.mp4"
          playsinline
          webkit-playsinline
          preload="metadata"
          controls
          controlslist="nodownload noplaybackrate"
          aria-label="Block Wars fighter preview"></video>
        <button type="button" class="bw-preview-play" id="bwCsPlay" aria-label="Play Block Wars preview">
          <span class="bw-preview-play-icon" aria-hidden="true">▶</span>
          <span class="bw-preview-play-label">Watch preview</span>
        </button>
      </div>
      <div class="bw-preview-foot muted">~12s fighter slideshow · tap play · Coming soon on DBS</div>
      <p class="chip" style="margin-top:12px">TEST MODE · preview only · not a playable game</p>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <a class="btn ghost" href="#/home">Back to Home</a>
        <a class="btn ghost" href="#/home">Home teaser</a>
      </div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 8px">What’s coming</h3>
      <ul class="muted" style="margin:0;padding-left:1.2em;line-height:1.55">
        <li>City fighter matchups (NY · LA · Chicago)</li>
        <li>DatBoiSkeet-branded Block Wars arena</li>
        <li>Full gameplay &amp; character art — <strong>paused</strong> (preview assets only for now)</li>
      </ul>
    </div>`;

  return shellPage('Block Wars', body, {
    lead: 'Coming Soon · watch the fighter preview · not playable yet.',
  });
}

export function bindBlockWars(root) {
  const bwVid = root.querySelector('#bwCsVideo');
  const bwPlay = root.querySelector('#bwCsPlay');
  if (!bwVid) return;
  const syncBwOverlay = () => {
    if (!bwPlay) return;
    const show = bwVid.paused || bwVid.ended;
    bwPlay.hidden = !show;
    bwPlay.setAttribute('aria-hidden', show ? 'false' : 'true');
  };
  bwPlay?.addEventListener('click', (e) => {
    e.preventDefault();
    bwVid.play().catch(() => {});
  });
  bwVid.addEventListener('play', () => {
    notifyVideoPlaying();
    syncBwOverlay();
  });
  bwVid.addEventListener('pause', () => {
    notifyVideoIdle();
    syncBwOverlay();
  });
  bwVid.addEventListener('ended', () => {
    notifyVideoIdle();
    syncBwOverlay();
  });
  bwVid.addEventListener('pointerdown', () => {
    if (!bwVid.paused) notifyVideoPlaying();
  });
  syncBwOverlay();
}
