import {
  getState,
  createPost,
  toggleLike,
  addComment,
  followUser,
  unfollowUser,
} from '../store.js';
import { POST_IMAGE_PRESETS } from '../data.js';
import { esc, toast, timeAgo, shellPage } from '../ui.js';
import { navigate } from '../router.js';

function refresh() {
  navigate('#/posts');
}

export function renderPosts(route) {
  const { posts, likes, comments, user } = getState();
  const tab = route?.query?.tab === 'following' ? 'following' : 'discover';

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
      const isFollowing = user && followingSet.has(p.userId);
      const followBtn =
        user && p.userId !== user.id
          ? `<button class="btn ghost follow-btn" data-uid="${esc(p.userId)}" data-on="${isFollowing ? '1' : '0'}">${
              isFollowing ? 'Following' : 'Follow'
            }</button>`
          : '';
      return `
      <article class="post" data-id="${esc(p.id)}">
        <div class="meta">
          <a class="avatar" href="#/profile/${esc(p.userId)}">${esc((p.username || '?')[0].toUpperCase())}</a>
          <div class="spacer">
            <div class="who"><a href="#/profile/${esc(p.userId)}">${esc(p.username)}</a></div>
            <div class="when">${timeAgo(p.at)}</div>
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

  return shellPage('Posts', composer + tabs + (feed || empty), {
    lead: 'Photos, clips, and conversations across DBS.',
  });
}

export function bindPosts(root) {
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
