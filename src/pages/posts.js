import { getState, createPost, toggleLike, addComment, followUser } from '../store.js';
import { esc, toast, timeAgo, shellPage } from '../ui.js';

export function renderPosts() {
  const { posts, likes, comments, user } = getState();
  const composer = user
    ? `
    <div class="card" id="composer">
      <h3>Create a post</h3>
      <div class="field"><label>What's happening</label>
        <textarea id="postText" placeholder="Share with DBS…"></textarea></div>
      <div class="field"><label>Image URL (optional)</label>
        <input id="postImg" placeholder="https://… or /music/…" /></div>
      <button class="btn primary" id="postSubmit">Post</button>
    </div>`
    : `<div class="card"><p class="muted">Sign in from Profile to post, like, and comment.</p>
       <a class="btn primary" href="#/profile">Sign in</a></div>`;

  const feed = posts
    .map((p) => {
      const likeList = likes[p.id] || [];
      const liked = user && likeList.includes(user.id);
      const cList = comments[p.id] || [];
      return `
      <article class="post" data-id="${esc(p.id)}">
        <div class="meta">
          <div class="avatar">${esc((p.username || '?')[0].toUpperCase())}</div>
          <div class="spacer">
            <div class="who">${esc(p.username)}</div>
            <div class="when">${timeAgo(p.at)}</div>
          </div>
          ${
            user && p.userId !== user.id
              ? `<button class="btn ghost follow-btn" data-uid="${esc(p.userId)}">Follow</button>`
              : ''
          }
        </div>
        <p class="body-text">${esc(p.text)}</p>
        ${p.image ? `<img class="media" src="${esc(p.image)}" alt="" />` : ''}
        <div class="post-actions">
          <button class="btn like-btn ${liked ? 'primary' : ''}" data-id="${esc(p.id)}">
            ♥ ${likeList.length}
          </button>
          <button class="btn ghost comment-toggle" data-id="${esc(p.id)}">💬 ${cList.length}</button>
        </div>
        <div class="comments" id="c-${esc(p.id)}" hidden>
          ${cList
            .map((c) => `<div class="comment"><b>${esc(c.username)}</b> ${esc(c.text)}</div>`)
            .join('') || '<div class="muted">No comments yet</div>'}
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

  return shellPage('Posts', composer + (feed || '<div class="card muted">No posts yet.</div>'), {
    lead: 'Photos, clips, and conversations across DBS.',
  });
}

export function bindPosts(root) {
  root.querySelector('#postSubmit')?.addEventListener('click', () => {
    try {
      createPost({
        text: root.querySelector('#postText')?.value,
        image: root.querySelector('#postImg')?.value,
      });
      toast('Posted');
      location.hash = '/posts';
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } catch (e) {
      toast(e.message || 'Could not post');
    }
  });

  root.querySelectorAll('.like-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const r = toggleLike(btn.dataset.id);
      if (r.error) return toast('Sign in to like');
      window.dispatchEvent(new HashChangeEvent('hashchange'));
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
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    });
  });

  root.querySelectorAll('.follow-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const r = followUser(btn.dataset.uid);
      if (r.error) return toast('Sign in to follow');
      toast('Following');
      btn.textContent = 'Following';
      btn.disabled = true;
    });
  });
}
