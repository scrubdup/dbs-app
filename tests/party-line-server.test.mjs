import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createPartyLineServer } from '../server/party-line/server.mjs';

const claims = {
  'Bearer host': { userId: 'host', ageAssured: true, accountStatus: 'active' },
  'Bearer guest': { userId: 'guest', ageAssured: true, accountStatus: 'active' },
  'Bearer other': { userId: 'other', ageAssured: true, accountStatus: 'active' },
  'Bearer child': { userId: 'child', ageAssured: false, accountStatus: 'active' },
};
async function fixture(t) {
  const app = createPartyLineServer({ authenticate: async (req) => claims[req.headers.authorization] || null });
  app.server.listen(0, '127.0.0.1');
  await once(app.server, 'listening');
  const base = `http://127.0.0.1:${app.server.address().port}`;
  t.after(() => app.server.closeAllConnections());
  t.after(() => app.server.close());
  async function call(method, path, who = 'host', body) {
    const res = await fetch(base + path, {
      method, headers: { Authorization: 'Bearer ' + who, 'Content-Type': 'application/json' },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    return { status: res.status, data: await res.json() };
  }
  return { app, base, call };
}

test('real HTTP room state, membership and text chat across two identities', async (t) => {
  const { call } = await fixture(t);
  const created = await call('POST', '/rooms', 'host', { name: 'Music Talk' });
  assert.equal(created.status, 201);
  const id = created.data.room.id;
  assert.equal((await call('GET', '/rooms/' + id, 'guest')).status, 403);
  assert.equal((await call('POST', '/rooms/' + id + '/join', 'child')).status, 403);
  assert.equal((await call('POST', '/rooms/' + id + '/join', 'guest')).status, 200);
  const message = await call('POST', '/rooms/' + id + '/messages', 'guest', { text: 'Hello host!' });
  assert.equal(message.status, 200);
  const fromHost = await call('GET', '/rooms/' + id, 'host');
  assert.equal(fromHost.data.room.messages[0].text, 'Hello host!');
  assert.equal(fromHost.data.room.messages[0].userId, 'guest');
  assert.equal((await call('POST', '/rooms/' + id + '/messages', 'other', { text: 'No' })).status, 403);
});
test('private invites, speaker approval, report and blocked rejoin', async (t) => {
  const { call } = await fixture(t);
  const id = (await call('POST', '/rooms', 'host', { name: 'Backstage', visibility: 'private' })).data.room.id;
  assert.equal((await call('POST', '/rooms/' + id + '/join', 'guest')).status, 403);
  assert.equal((await call('POST', '/rooms/' + id + '/invite', 'host', { userId: 'guest' })).status, 200);
  assert.equal((await call('POST', '/rooms/' + id + '/join', 'guest')).status, 200);
  assert.equal((await call('POST', '/rooms/' + id + '/mute', 'guest', { userId: 'guest', muted: false })).status, 403);
  assert.equal((await call('POST', '/rooms/' + id + '/request-mic', 'guest', {})).status, 200);
  assert.equal((await call('POST', '/rooms/' + id + '/approve-mic', 'host', { userId: 'guest' })).status, 200);
  assert.equal((await call('POST', '/rooms/' + id + '/mute', 'guest', { userId: 'guest', muted: false })).status, 200);
  assert.equal((await call('POST', '/rooms/' + id + '/report', 'guest', { userId: 'host', reason: 'abuse' })).status, 200);
  const visible = (await call('GET', '/rooms/' + id, 'guest')).data.room;
  assert.equal('reports' in visible, false);
  assert.equal('invitedIds' in visible, false);
  assert.equal('blockedIds' in visible, false);
  assert.equal((await call('POST', '/rooms/' + id + '/kick', 'host', { userId: 'guest', block: true })).status, 200);
  assert.equal((await call('POST', '/rooms/' + id + '/join', 'guest')).status, 403);
});
test('SSE delivers actual messages to a different authenticated member', async (t) => {
  const { call, base } = await fixture(t);
  const id = (await call('POST', '/rooms', 'host', { name: 'Voice + Chat' })).data.room.id;
  await call('POST', '/rooms/' + id + '/join', 'guest');
  const abort = new AbortController();
  t.after(() => abort.abort());
  const response = await fetch(base + '/rooms/' + id + '/events', {
    headers: { Authorization: 'Bearer host' }, signal: abort.signal,
  });
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/event-stream/);
  const reader = response.body.getReader();
  await reader.read(); // initial SSE handshake comment
  const sent = await call('POST', '/rooms/' + id + '/messages', 'guest', { text: 'Live across devices' });
  assert.equal(sent.status, 200);
  const packet = await Promise.race([
    reader.read(),
    new Promise((_, reject) => setTimeout(() => reject(new Error('SSE event timeout')), 2500)),
  ]);
  const body = new TextDecoder().decode(packet.value);
  assert.match(body, /event: message/);
  assert.match(body, /Live across devices/);
  abort.abort();
});
test('signaling is member-only and muted listeners cannot offer audio', async (t) => {
  const { call } = await fixture(t);
  const id = (await call('POST', '/rooms', 'host', { name: 'Call' })).data.room.id;
  await call('POST', '/rooms/' + id + '/join', 'guest');
  const path = '/rooms/' + id + '/signal';
  assert.equal((await call('POST', path, 'guest', { to: 'host', kind: 'offer', signal: { sdp: 'test' } })).status, 403);
  assert.equal((await call('POST', path, 'other', { to: 'host', kind: 'ice', signal: { candidate: 'x' } })).status, 403);
  assert.equal((await call('POST', path, 'host', { to: 'guest', kind: 'offer', signal: { sdp: 'test' } })).status, 202);
});
