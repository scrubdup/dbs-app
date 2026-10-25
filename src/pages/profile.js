import { getState, signInLocal, signOut } from '../store.js';
import { esc, toast, shellPage } from '../ui.js';

export function renderProfile() {
  const { user, posts } = getState();
  if (!user) {
    return shellPage(
      'Profile',
      `
      <div class="card">
        <h3>Sign in (local demo)</h3>
        <p class="muted">Creates a demo user in this browser. No password or backend.</p>
        <div class="field"><label>Username</label>
          <input id="signinName" placeholder="Your name" maxlength="24" /></div>
        <button class="btn primary block" id="signinBtn">Sign in</button>
      </div>
      <div class="card">
        <h3>Become a Creator</h3>
        <p class="muted">Apply for Clipper, Streamer, Brand, Affiliate, or Seller roles.</p>
        <a class="btn" href="#/signup">Creator applications</a>
        <a class="btn" href="#/clippers">Clippers apply</a>
      </div>`,
      { lead: 'Free profile · follow · posts · optional paid cosmetics later.' }
    );
  }

  const myPosts = posts.filter((p) => p.userId === user.id);
  const body = `
    <div class="card">
      <div class="profile-hero">
        <div class="avatar">${esc(user.username[0].toUpperCase())}</div>
        <div>
          <h2 style="margin:0">${esc(user.username)}</h2>
          <p class="muted" style="margin:4px 0 0">${esc(user.bio)}</p>
          <span class="chip">Demo account</span>
        </div>
      </div>
      <div class="stats">
        <div><strong>${myPosts.length}</strong><span>Posts</span></div>
        <div><strong>${user.followers.length}</strong><span>Followers</span></div>
        <div><strong>${user.following.length}</strong><span>Following</span></div>
      </div>
      <div class="row wrap">
        <a class="btn" href="#/posts">New post</a>
        <a class="btn" href="#/shop">Profile Shop</a>
        <a class="btn" href="#/messages">Messages</a>
        <button class="btn ghost" id="signoutBtn">Sign out</button>
      </div>
    </div>
    <div class="card">
      <h3>Your posts</h3>
      ${
        myPosts.length
          ? myPosts
              .map(
                (p) =>
                  `<div style="padding:8px 0;border-bottom:1px solid var(--line)">
                    <div class="muted" style="font-size:11px">${new Date(p.at).toLocaleString()}</div>
                    ${esc(p.text)}
                  </div>`
              )
              .join('')
          : '<p class="muted">No posts yet.</p>'
      }
    </div>
    <div class="card">
      <h3>Roles</h3>
      <a class="btn block" href="#/clippers">Apply as Clipper</a>
      <a class="btn block" href="#/signup" style="margin-top:8px">Other creator roles</a>
    </div>
  `;
  return shellPage('Profile', body);
}

export function bindProfile(root) {
  root.querySelector('#signinBtn')?.addEventListener('click', () => {
    const name = root.querySelector('#signinName')?.value;
    signInLocal(name);
    toast('Signed in');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
  root.querySelector('#signoutBtn')?.addEventListener('click', () => {
    signOut();
    toast('Signed out');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
}
