import test from 'node:test';
import assert from 'node:assert/strict';

// Browser-only demo storage is mocked; no production identity or payment backend is involved.
const storage = new Map();
globalThis.localStorage = {
  getItem: (key) => storage.get(key) ?? null,
  setItem: (key, value) => { storage.set(key, String(value)); },
  removeItem: (key) => { storage.delete(key); },
};
const {
  setState,
  getChampion,
  tickGiftBattle,
  listDailyBattleWinners,
  GB_CHAMPION_SPOTLIGHT_MS,
} = await import('../src/store.js');

const baseBucket = () => ({ active: null, history: [], champions: [], prefs: { invitationsEnabled: true } });
const person = (id, name) => ({ id, name });

test('new 60-second battle win earns exactly a 3-hour featured spotlight', () => {
  const now = Date.now();
  setState({
    giftBattles: {
      ...baseBucket(),
      active: {
        id: 'new_win',
        status: 'active',
        challenger: person('fan1', 'Fan One'),
        opponent: person('fan2', 'Fan Two'),
        scoreA: 5,
        scoreB: 2,
        endsAt: now - 1000,
        mode: 'sandbox',
      },
    },
  });
  const ended = tickGiftBattle();
  assert.equal(ended.status, 'ended');
  assert.equal(ended.result, 'win');
  assert.equal(ended.championUntil - ended.endedAt, GB_CHAMPION_SPOTLIGHT_MS);
  assert.equal(getChampion(ended.endedAt + GB_CHAMPION_SPOTLIGHT_MS - 1)?.username, 'Fan One');
  assert.equal(getChampion(ended.endedAt + GB_CHAMPION_SPOTLIGHT_MS), null);
});

test('legacy end-of-day spotlight is safely capped to 3 hours at read time', () => {
  const endedAt = new Date(2026, 9, 26, 12, 0, 0).getTime();
  const legacy = {
    battleId: 'legacy_win', userId: 'fan3', username: 'Legacy Winner',
    endedAt, championUntil: new Date(2026, 9, 26, 23, 59, 59).getTime(),
    score: 4, mode: 'sandbox',
  };
  setState({ giftBattles: { ...baseBucket(), champions: [legacy] } });
  assert.equal(getChampion(endedAt + 2 * 60 * 60 * 1000)?.championUntil, endedAt + GB_CHAMPION_SPOTLIGHT_MS);
  assert.equal(getChampion(endedAt + GB_CHAMPION_SPOTLIGHT_MS), null);
  // Daily board is historical results; a 3-hour spotlight must not erase a win from today's list.
  const results = listDailyBattleWinners(10, endedAt + 4 * 60 * 60 * 1000);
  assert.equal(results[0]?.username, 'Legacy Winner');
});

test('tied battles do not create a champion spotlight', () => {
  const now = Date.now();
  setState({
    giftBattles: {
      ...baseBucket(),
      active: {
        id: 'tie',
        status: 'active',
        challenger: person('fan1', 'Fan One'),
        opponent: person('fan2', 'Fan Two'),
        scoreA: 2,
        scoreB: 2,
        endsAt: now - 1000,
        mode: 'sandbox',
      },
    },
  });
  const ended = tickGiftBattle();
  assert.equal(ended.result, 'tie');
  assert.equal(ended.championUntil, null);
  assert.equal(getChampion(), null);
});
