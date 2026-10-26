import test from 'node:test';
import assert from 'node:assert/strict';

// Store is intentionally browser-local in this prototype. These checks test
// demo role separation only; no server authorization or real payouts exist.
const storage = new Map();
globalThis.localStorage = {
  getItem: (key) => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, String(value)),
  removeItem: (key) => storage.delete(key),
};
const store = await import('../src/store.js');
const { renderMissions } = await import('../src/pages/missions.js');

function reset() {
  store.signOut();
  store.setState({ missions: [] });
}

test('guest can load initial demo samples but cannot create or overwrite campaigns', () => {
  reset();
  const initial = store.seedDemoMissions();
  assert.equal(initial.seeded, 4);
  const before = JSON.stringify(store.listMissions());
  assert.equal(store.createMission({ title: 'Guest mission' }).error, 'forbidden');
  assert.equal(store.setMissionStatus('msn_demo_song', 'ended').error, 'forbidden');
  assert.equal(store.seedDemoMissions({ force: true }).error, 'forbidden');
  assert.equal(JSON.stringify(store.listMissions()), before);
  assert.match(store.getMission('msn_demo_app').title, /PIKK/);
});

test('ordinary demo fans can join missions but cannot create, pause, or reset them', () => {
  reset();
  store.seedDemoMissions();
  store.signInLocal('MissionFan');
  assert.equal(store.createMission({ title: 'Fan mission' }).error, 'forbidden');
  assert.equal(store.setMissionStatus('msn_demo_song', 'paused').error, 'forbidden');
  assert.equal(store.seedDemoMissions({ force: true }).error, 'forbidden');
  assert.ok(!renderMissions().includes('data-next="paused"'));
  assert.match(renderMissions(), /Mission creation and management are limited to demo admins/);
  assert.equal(store.joinMission('msn_demo_song').error, undefined);
});

test('demo admins can manage missions without changing storage identifiers', () => {
  reset();
  store.signInLocal('MissionAdmin');
  store.setAdminRole(true);
  const created = store.createMission({ title: 'PIKK mission', promoteType: 'app' });
  assert.equal(created.title, 'PIKK mission');
  assert.equal(created.fundSource, 'dbs'); // persisted key must not be renamed
  assert.equal(store.setMissionStatus(created.id, 'paused').status, 'paused');
  assert.match(renderMissions(), /data-next="active"/);
  assert.match(renderMissions(), /PIKK App/);
  const reloaded = store.seedDemoMissions({ force: true });
  assert.equal(reloaded.seeded, 4);
  assert.equal(store.getMission(created.id), null);
});
