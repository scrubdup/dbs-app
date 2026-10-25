const listeners = new Set();

export function getRoute() {
  const hash = location.hash.replace(/^#/, '') || '/home';
  const path = hash.startsWith('/') ? hash : '/' + hash;
  const [pathname, query = ''] = path.split('?');
  const parts = pathname.split('/').filter(Boolean);
  return {
    path: '/' + (parts[0] || 'home'),
    parts,
    query: Object.fromEntries(new URLSearchParams(query)),
    raw: path,
  };
}

export function navigate(to) {
  const href = to.startsWith('#') ? to : '#' + (to.startsWith('/') ? to : '/' + to);
  if (location.hash === href.slice(1) || '#' + location.hash === href) {
    // force refresh same route
    listeners.forEach((fn) => fn(getRoute()));
    return;
  }
  location.hash = href.replace(/^#/, '');
}

export function onRoute(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function startRouter() {
  const fire = () => listeners.forEach((fn) => fn(getRoute()));
  window.addEventListener('hashchange', fire);
  if (!location.hash) location.hash = '/home';
  else fire();
}
