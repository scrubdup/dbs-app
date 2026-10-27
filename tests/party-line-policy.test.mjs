import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PARTY_LINE_LIMITS, requireAdultSession, createPartyRoom, inviteToPartyRoom,
  joinPartyRoom, requestPartyMic, approvePartyMic, setPartyMute,
  sendPartyMessage, reportPartyMember, removePartyMember, leavePartyRoom,
} from '../src/party-line/room-policy.js';

const adult = (userId) => ({ userId, ageAssured: true, accountStatus: 'active' });
const room = (visibility = 'public') =>
  createPartyRoom({ id: 'r_1', name: 'Music Talk', visibility, owner: adult('host'), createdAt: 1 });

test('rejects guests, underage/unverified, and suspended accounts', () => {
  assert.throws(() => requireAdultSession(null), /Authentication/);
  assert.throws(() => requireAdultSession({ userId: 'guest', ageAssured: false, accountStatus: 'active' }), /Verified adult/);
  assert.throws(() => requireAdultSession({ userId: 'guest', ageAssured: true, accountStatus: 'suspended' }), /not active/);
});
test('room creation validates visibility, name, owner', () => {
  assert.equal(room().members[0].role, 'host');
  assert.throws(() => createPartyRoom({ id: 'x', name: '', owner: adult('host') }), /room name/);
  assert.throws(() => createPartyRoom({ id: 'x', name: 'X', visibility: 'unlisted', owner: adult('host') }), /visibility/);
});
test('public join is idempotent and listeners begin muted', () => {
  const a = joinPartyRoom(room(), adult('a'));
  assert.equal(a.members[1].role, 'listener');
  assert.equal(a.members[1].muted, true);
  assert.equal(joinPartyRoom(a, adult('a')).members.length, 2);
});
test('private rooms reject non-invited people and consume invites', () => {
  const p = room('private');
  assert.throws(() => joinPartyRoom(p, adult('a')), /Invite required/);
  const invited = inviteToPartyRoom(p, adult('host'), 'a');
  const joined = joinPartyRoom(invited, adult('a'));
  assert.equal(joined.members.length, 2);
  assert.deepEqual(joined.invitedIds, []);
  assert.throws(() => inviteToPartyRoom(joined, adult('a'), 'b'), /Host permission/);
});
test('room capacity is enforced', () => {
  let r = room();
  for (let i = 1; i < PARTY_LINE_LIMITS.maxParticipants; i++) r = joinPartyRoom(r, adult('u' + i));
  assert.equal(r.members.length, PARTY_LINE_LIMITS.maxParticipants);
  assert.throws(() => joinPartyRoom(r, adult('extra')), /full/);
});
test('only host can approve requested microphone', () => {
  let r = joinPartyRoom(room(), adult('a'));
  assert.throws(() => approvePartyMic(r, adult('a'), 'a'), /Host permission/);
  assert.throws(() => approvePartyMic(r, adult('host'), 'a'), /No speaking request/);
  r = requestPartyMic(r, adult('a'));
  r = approvePartyMic(r, adult('host'), 'a');
  assert.equal(r.members[1].role, 'speaker');
  assert.equal(r.members[1].muted, true); // mic remains opt-in
});
test('listeners cannot unmute or publish voice', () => {
  const r = joinPartyRoom(room(), adult('a'));
  assert.throws(() => setPartyMute(r, adult('a'), 'a', false), /Listeners cannot/);
  assert.throws(() => setPartyMute(r, adult('host'), 'a', false), /Listeners cannot/);
});
test('non-host cannot mute another member', () => {
  let r = joinPartyRoom(room(), adult('a'));
  r = joinPartyRoom(r, adult('b'));
  assert.throws(() => setPartyMute(r, adult('a'), 'b', true), /Host permission/);
});
test('hosts cannot unmute a guest without explicit speaker consent', () => {
  let r = joinPartyRoom(room(), adult('guest'));
  r = approvePartyMic(requestPartyMic(r, adult('guest')), adult('host'), 'guest');
  assert.equal(r.members.find((m) => m.userId === 'guest').muted, true);
  assert.throws(() => setPartyMute(r, adult('host'), 'guest', false), /Only the member can unmute/);
  r = setPartyMute(r, adult('guest'), 'guest', false);
  assert.equal(r.members.find((m) => m.userId === 'guest').muted, false);
  r = setPartyMute(r, adult('host'), 'guest', true);
  assert.equal(r.members.find((m) => m.userId === 'guest').muted, true);
});
test('speakers can unmute themselves after approval', () => {
  let r = joinPartyRoom(room(), adult('a'));
  r = approvePartyMic(requestPartyMic(r, adult('a')), adult('host'), 'a');
  r = setPartyMute(r, adult('a'), 'a', false);
  assert.equal(r.members[1].muted, false);
});
test('chat requires membership, nonempty bounded text, and deduplicates retries', () => {
  let r = joinPartyRoom(room(), adult('a'));
  assert.throws(() => sendPartyMessage(r, adult('outsider'), { id: 'm1', text: 'Hi' }), /membership/);
  assert.throws(() => sendPartyMessage(r, adult('a'), { id: 'm1', text: '   ' }), /Invalid message/);
  assert.throws(() => sendPartyMessage(r, adult('a'), { id: 'm1', text: 'x'.repeat(1001) }), /Invalid message/);
  r = sendPartyMessage(r, adult('a'), { id: 'm1', text: ' Hello ', sentAt: 3 });
  assert.equal(r.messages[0].text, 'Hello');
  assert.equal(sendPartyMessage(r, adult('a'), { id: 'm1', text: 'Hello' }).messages.length, 1);
});
test('reports require a member, target, and reason', () => {
  let r = joinPartyRoom(room(), adult('a'));
  assert.throws(() => reportPartyMember(r, adult('a'), 'a', 'spam', 'rep1'), /yourself/);
  assert.throws(() => reportPartyMember(r, adult('outsider'), 'a', 'spam', 'rep1'), /membership/);
  r = reportPartyMember(r, adult('a'), 'host', 'spam', 'rep1');
  assert.equal(r.reports.length, 1);
  assert.equal(reportPartyMember(r, adult('a'), 'host', 'spam', 'rep1').reports.length, 1);
});
test('only host can kick and optionally block; blocked cannot rejoin', () => {
  let r = joinPartyRoom(room(), adult('a'));
  assert.throws(() => removePartyMember(r, adult('a'), 'host'), /Host permission/);
  assert.throws(() => removePartyMember(r, adult('host'), 'host'), /Host cannot/);
  r = removePartyMember(r, adult('host'), 'a', { block: true });
  assert.equal(r.members.length, 1);
  assert.throws(() => joinPartyRoom(r, adult('a')), /blocked/);
});
test('host departure transfers ownership; last departure closes room', () => {
  let r = joinPartyRoom(room(), adult('a'));
  r = leavePartyRoom(r, adult('host'));
  assert.equal(r.ownerId, 'a');
  assert.equal(r.members[0].role, 'host');
  r = leavePartyRoom(r, adult('a'));
  assert.equal(r.closed, true);
  assert.throws(() => joinPartyRoom(r, adult('b')), /closed/);
});
test('room actions do not mutate input state', () => {
  const r = room();
  const joined = joinPartyRoom(r, adult('a'));
  assert.equal(r.members.length, 1);
  assert.equal(joined.members.length, 2);
});
