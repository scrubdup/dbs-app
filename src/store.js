const KEY = 'dbs_v1';

const defaultState = () => ({
  user: null, // { id, username, bio, avatar, followers: [], following: [] }
  posts: [],
  comments: {}, // postId -> [{ id, userId, username, text, at }]
  likes: {}, // postId -> [userId]
  clipperApps: [],
  notifications: {
    releases: true,
    lives: true,
    messages: true,
    quietHours: false,
  },
  wallet: { balance: 0, history: [] },
  splashSeenAt: 0,
});

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch {
    return defaultState();
  }
}

function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

let state = load();

export function getState() {
  return state;
}

export function setState(patch) {
  state = { ...state, ...patch };
  save(state);
  return state;
}

export function update(fn) {
  state = fn(state) || state;
  save(state);
  return state;
}

export function ensureDemoPosts() {
  if (state.posts.length) return;
  const seed = [
    {
      id: 'p1',
      userId: 'dbs',
      username: 'DatBoiSkeet',
      text: 'Long Story Short — Coming Soon. Stay ready.',
      image: '/music/01_Long_Story_Short_Coming_Soon.jpg',
      at: Date.now() - 86400000 * 2,
    },
    {
      id: 'p2',
      userId: 'dbs',
      username: 'DatBoiSkeet',
      text: 'Foreign X-Change drop live. Shop hats, tees & jackets.',
      image: '/merch/01_black_orange_716_hat.jpeg',
      at: Date.now() - 86400000,
    },
  ];
  state = { ...state, posts: seed, likes: { p1: [], p2: [] }, comments: { p1: [], p2: [] } };
  save(state);
}

export function signInLocal(username) {
  const name = (username || 'Fan').trim().slice(0, 24) || 'Fan';
  const id = 'u_' + name.toLowerCase().replace(/\W+/g, '_') + '_' + Date.now().toString(36);
  const user = {
    id,
    username: name,
    bio: 'DBS fan · demo account',
    avatar: '',
    followers: [],
    following: ['dbs'],
    createdAt: Date.now(),
  };
  state = { ...state, user };
  save(state);
  return user;
}

export function signOut() {
  state = { ...state, user: null };
  save(state);
}

export function createPost({ text, image }) {
  const user = state.user;
  if (!user) throw new Error('Sign in required');
  const id = 'p_' + Date.now().toString(36);
  const post = {
    id,
    userId: user.id,
    username: user.username,
    text: (text || '').trim(),
    image: (image || '').trim(),
    at: Date.now(),
  };
  state = {
    ...state,
    posts: [post, ...state.posts],
    likes: { ...state.likes, [id]: [] },
    comments: { ...state.comments, [id]: [] },
  };
  save(state);
  return post;
}

export function toggleLike(postId) {
  const user = state.user;
  if (!user) return { error: 'signin' };
  const list = new Set(state.likes[postId] || []);
  if (list.has(user.id)) list.delete(user.id);
  else list.add(user.id);
  state = { ...state, likes: { ...state.likes, [postId]: [...list] } };
  save(state);
  return { count: list.size, liked: list.has(user.id) };
}

export function addComment(postId, text) {
  const user = state.user;
  if (!user) return { error: 'signin' };
  const c = {
    id: 'c_' + Date.now().toString(36),
    userId: user.id,
    username: user.username,
    text: text.trim(),
    at: Date.now(),
  };
  const prev = state.comments[postId] || [];
  state = { ...state, comments: { ...state.comments, [postId]: [...prev, c] } };
  save(state);
  return c;
}

export function followUser(targetId) {
  const user = state.user;
  if (!user) return { error: 'signin' };
  if (user.following.includes(targetId)) return user;
  const next = { ...user, following: [...user.following, targetId] };
  state = { ...state, user: next };
  save(state);
  return next;
}

export function submitClipperApp(form) {
  const app = {
    id: 'clip_' + Date.now().toString(36),
    ...form,
    status: 'pending',
    at: Date.now(),
  };
  state = { ...state, clipperApps: [app, ...state.clipperApps] };
  save(state);
  return app;
}

export function setNotifPrefs(prefs) {
  state = { ...state, notifications: { ...state.notifications, ...prefs } };
  save(state);
}

export function markSplash() {
  state = { ...state, splashSeenAt: Date.now() };
  save(state);
}
