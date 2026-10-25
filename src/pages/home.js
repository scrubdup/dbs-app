import { VIDEOS, COMING_SOON, HOME_SECTIONS } from '../data.js';
import { esc, shellPage } from '../ui.js';

export function renderHome() {
  const featured = VIDEOS[0];
  const previews = HOME_SECTIONS.map(
    (s) => `
    <a class="preview-card" href="#${s.route}">
      <strong>${esc(s.title)}</strong>
      <span class="muted">${esc(s.blurb)}</span>
    </a>`
  ).join('');

  const covers = COMING_SOON.map(
    (c) => `
    <a class="cover-card" href="#/music">
      <span class="badge-cs">${esc(c.status)}</span>
      <img src="${esc(c.cover)}" alt="${esc(c.title)}" />
      <div class="t">${esc(c.title)}</div>
    </a>`
  ).join('');

  const vids = VIDEOS.map(
    (v) => `
    <div class="vid">
      <div class="thumb">▶</div>
      <div>
        <strong>${esc(v.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">
          <a href="${esc(v.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a>
        </div>
      </div>
    </div>`
  ).join('');

  const body = `
    <div class="hero-video">
      <iframe
        src="${esc(featured.embed)}?rel=0"
        title="${esc(featured.title)}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"></iframe>
    </div>
    <p class="muted" style="margin-top:-6px;margin-bottom:14px;font-size:12px">Featured: ${esc(featured.title)}</p>

    <h2 style="margin:0 0 8px;font-size:15px">Coming Soon</h2>
    <div class="cover-row" style="margin-bottom:16px">${covers}</div>

    <h2 style="margin:0 0 8px;font-size:15px">Explore DBS</h2>
    <div class="section-swipe" style="margin-bottom:16px">${previews}</div>

    <div class="card">
      <h3>Live activity</h3>
      <ul class="list-plain">
        <li><span>DatBoiSkeet posted a new drop teaser</span><span class="chip">Posts</span></li>
        <li><span>Foreign X-Change merch featured</span><span class="chip">Merch</span></li>
        <li><span>No creators live — check back soon</span><span class="chip">Live</span></li>
      </ul>
    </div>

    <div class="card video-list">
      <h3>Official music videos</h3>
      ${vids}
      <a class="btn ghost block" href="#/videos" style="margin-top:10px">All videos</a>
    </div>
  `;

  return shellPage('Home', body);
}
