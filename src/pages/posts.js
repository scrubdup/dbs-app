import {
  getState,
  createPost,
  toggleLike,
  addComment,
  followUser,
  unfollowUser,
  ensureHotPostsSeeded,
  getHotPosts,
  sharePost,
  engagementScore,
} from '../store.js';
import { POST_IMAGE_PRESETS } from '../data.js';
import { esc, toast, timeAgo, shellPage } from '../ui.js';
import { navigate } from '../router.js';

function refresh() {
  navigate('#/posts');
}

function hotStripHtml() {
  ensureHotPostsSeeded();
  const hot = getHotPosts(8);
  if (!hot.length) {
    return `<section class="card hot-strip" id="hotStrip">
      <div class="row wrap hot-strip-head">
        <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted">No hot posts yet — engage (like · comment · share) to spike the feed.</p>
    </section>`;
  }
  const cards = hot
    .map((h, i) => {
      const rank = i + 1;
      const thumb = h.image
        ? `<img class="hot-thumb" src="${esc(h.image)}" alt="" loading="lazy" />`
        : `<div class="hot-thumb hot-thumb-empty">${esc((h.username || '?')[0].toUpperCase())}</div>`;
      const mediaChip =
        h.mediaType === 'video'
          ? '<span class="chip">video</span>'
          : h.image
            ? '<span class="chip">pic</span>'
            : '<span class="chip">text</span>';
      const house = h.house ? '<span class="chip">house</span>' : '<span class="chip">community</span>';
      return `<a class="hot-card" href="#/posts?focus=${esc(h.postId || h.id)}" data-hot-id="${esc(h.postId || h.id)}">
        <span class="hot-rank">#${rank}</span>
        ${thumb}
        <span class="hot-meta">
          <span class="hot-user">@${esc(h.username)}</span>
          <span class="hot-preview">${esc((h.preview || h.text || '').slice(0, 64))}</span>
          <span class="hot-stats">♥ ${h.likes} · 💬 ${h.comments} · ↗ ${h.shares} · score ${h.score}</span>
          <span class="hot-chips">${mediaChip}${house}</span>
        </span>
      </a>`;
    })
    .join('');
  return `<section class="card hot-strip" id="hotStrip">
    <div class="row wrap hot-strip-head">
      <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
      <span class="chip">TEST MODE</span>
      <span class="muted hot-strip-note">likes + comments + shares · house + community</span>
    </div>
    <div class="hot-rail" role="list">${cards}</div>
  </section>`;
}

export function renderPosts(route) {
  const { posts, likes, comments, user, postShares } = getState();
  const tab = route?.query?.tab === 'following' ? 'following' : 'discover';
  const focusId = route?.query?.focus || '';

  const followingSet = new Set(user?.following || []);
  const filtered =
    tab === 'following' && user
      ? posts.filter((p) => followingSet.has(p.userId) || p.userId === user.id)
      : posts;

  const presets = POST_IMAGE_PRESETS.map(
    (p) =>
      `<button type="button" class="chip preset-img" data-src="${esc(p.src)}" title="${esc(p.label)}">${esc(p.label)}</button>`
  ).join('');

  const composer = user
    ? `
    <div class="card" id="composer">
      <h3>Create a post</h3>
      <div class="field"><label>What's happening</label>
        <textarea id="postText" placeholder="Share with DBS…" maxlength="2000"></textarea></div>
      <div class="field"><label>Image (optional)</label>
        <input id="postImg" placeholder="/music/… or /merch/…" /></div>
      <div class="row wrap" style="margin-bottom:10px">${presets}</div>
      <button class="btn primary" id="postSubmit">Post</button>
    </div>`
    : `<div class="card"><p class="muted">Sign in from Profile to post, like, comment, and follow.</p>
       <a class="btn primary" href="#/profile">Sign in</a></div>`;

  const tabs = `
    <div class="row wrap" style="margin-bottom:12px;gap:8px">
      <a class="btn ${tab === 'discover' ? 'primary' : 'ghost'}" href="#/posts">Discover</a>
      <a class="btn ${tab === 'following' ? 'primary' : 'ghost'}" href="#/posts?tab=following">Following</a>
      <a class="btn ghost" href="#/profile/dbs">@DatBoiSkeet</a>
    </div>`;

  const feed = filtered
    .map((p) => {
      const likeList = likes[p.id] || [];
      const liked = user && likeList.includes(user.id);
      const cList = comments[p.id] || [];
      const shares = (postShares && postShares[p.id]) || 0;
      const score = engagementScore(p.id);
      const isFollowing = user && followingSet.has(p.userId);
      const focused = focusId && focusId === p.id ? ' post-focus' : '';
      const followBtn =
        user && p.userId !== user.id
          ? `<button class="btn ghost follow-btn" data-uid="${esc(p.userId)}" data-on="${isFollowing ? '1' : '0'}">${
              isFollowing ? 'Following' : 'Follow'
            }</button>`
          : '';
      const houseChip =
        p.userId === 'dbs' ? '<span class="chip">house</span>' : '<span class="chip">community</span>';
      return `
      <article class="post${focused}" data-id="${esc(p.id)}" id="post-${esc(p.id)}">
        <div class="meta">
          <a class="avatar" href="#/profile/${esc(p.userId)}">${esc((p.username || '?')[0].toUpperCase())}</a>
          <div class="spacer">
            <div class="who"><a href="#/profile/${esc(p.userId)}">${esc(p.username)}</a> ${houseChip}</div>
            <div class="when">${timeAgo(p.at)}${score >= 5 ? ` · <span class="hot-inline">🔥 ${score}</span>` : ''}</div>
          </div>
          ${followBtn}
        </div>
        <p class="body-text">${esc(p.text)}</p>
        ${p.image ? `<img class="media" src="${esc(p.image)}" alt="" loading="lazy" />` : ''}
        <div class="post-actions">
          <button class="btn like-btn ${liked ? 'primary' : ''}" data-id="${esc(p.id)}">
            ♥ ${likeList.length}
          </button>
          <button class="btn ghost comment-toggle" data-id="${esc(p.id)}">💬 ${cList.length}</button>
          <button class="btn ghost share-btn" data-id="${esc(p.id)}" title="Share (demo count)">↗ ${shares}</button>
        </div>
        <div class="comments" id="c-${esc(p.id)}" hidden>
          ${
            cList
              .map((c) => `<div class="comment"><b>${esc(c.username)}</b> ${esc(c.text)}</div>`)
              .join('') || '<div class="muted">No comments yet</div>'
          }
          ${
            user
              ? `<div class="row" style="margin-top:8px">
                  <input class="c-input" data-id="${esc(p.id)}" placeholder="Add a comment…" style="flex:1;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:8px 10px" />
                  <button class="btn primary c-send" data-id="${esc(p.id)}">Send</button>
                </div>`
              : ''
          }
        </div>
      </article>`;
    })
    .join('');

  const empty =
    tab === 'following'
      ? '<div class="card muted">No posts from people you follow yet. Discover feed has official drops.</div>'
      : '<div class="card muted">No posts yet.</div>';

  return shellPage(
    'Posts',
    hotStripHtml() + composer + tabs + (feed || empty),
    {
      lead: 'Photos, clips, and conversations across DBS · Hot strip ranks engagement.',
    }
  );
}

export function bindPosts(root) {
  const focus = root.querySelector('.post-focus');
  if (focus) {
    try {
      focus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (_) {
      /* ignore */
    }
  }

  root.querySelectorAll('.preset-img').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = root.querySelector('#postImg');
      if (input) input.value = btn.dataset.src || '';
      toast('Image selected');
    });
  });

  root.querySelector('#postSubmit')?.addEventListener('click', () => {
    try {
      const text = root.querySelector('#postText')?.value;
      if (!text?.trim()) return toast('Write something first');
      createPost({
        text,
        image: root.querySelector('#postImg')?.value,
      });
      toast('Posted');
      refresh();
    } catch (e) {
      toast(e.message || 'Could not post');
    }
  });

  root.querySelectorAll('.like-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const r = toggleLike(btn.dataset.id);
      if (r.error) return toast('Sign in to like');
      refresh();
    });
  });

  root.querySelectorAll('.comment-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const box = root.querySelector('#c-' + btn.dataset.id);
      if (box) box.hidden = !box.hidden;
    });
  });

  root.querySelectorAll('.c-send').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const input = root.querySelector(`.c-input[data-id="${id}"]`);
      const text = input?.value?.trim();
      if (!text) return;
      const r = addComment(id, text);
      if (r.error) return toast('Sign in to comment');
      toast('Comment added');
      refresh();
    });
  });

  root.querySelectorAll('.share-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      const r = sharePost(id);
      if (r.error) return toast('Could not share');
      const link = `${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(id)}`;
      try {
        if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(link);
        toast('Shared · link copied (TEST MODE)');
      } catch (_) {
        toast('Shared · count +1 (TEST MODE)');
      }
      refresh();
    });
  });

  root.querySelectorAll('.follow-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const uid = btn.dataset.uid;
      const on = btn.dataset.on === '1';
      const r = on ? unfollowUser(uid) : followUser(uid);
      if (r.error) return toast('Sign in to follow');
      toast(on ? 'Unfollowed' : 'Following');
      refresh();
    });
  });
}
