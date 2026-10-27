/**
 * Party Line HTTP/SSE reference service. Node built-ins only.
 * Not wired to the static GitHub Pages frontend and NOT production-ready.
 * A production caller MUST inject a trusted authenticate(request) function;
 * ageAssured/userId/accountStatus are server-verified claims, never client JSON.
 * Rooms/messages live in memory and disappear on restart.
 */
import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
import {
  requireAdultSession, createPartyRoom, joinPartyRoom, inviteToPartyRoom,
  requestPartyMic, approvePartyMic, setPartyMute, sendPartyMessage,
  reportPartyMember, removePartyMember, leavePartyRoom,
} from '../../src/party-line/room-policy.js';

function reply(res, status, payload) {
  if (res.headersSent) return;
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(JSON.stringify(payload));
}
async function jsonBody(req) {
  let text = '';
  for await (const chunk of req) {
    text += chunk.toString();
    if (text.length > 8192) throw new Error('Request too large');
  }
  if (!text) return {};
  const body = JSON.parse(text);
  if (!body || Array.isArray(body) || typeof body !== 'object') throw new Error('Invalid JSON body');
  return body;
}
function hasMember(room, userId) {
  return room.members.some((m) => m.userId === userId);
}
function safeRoom(room) {
  // Never expose private invitations, room-level blocks, or moderation reports.
  const { id, name, visibility, ownerId, members, messages, closed, createdAt } = room;
  return { id, name, visibility, ownerId, members, messages, closed, createdAt };
}
export function createPartyLineServer({ authenticate } = {}) {
  if (typeof authenticate !== 'function') throw new Error('Trusted authentication adapter required');
  const rooms = new Map();
  const streams = new Map();

  function sendEvent(roomId, type, payload, targetId = null) {
    const packet = `event: ${type}\ndata: ${JSON.stringify(payload)}\n\n`;
    for (const client of streams.get(roomId) || []) {
      if (!targetId || client.userId === targetId) client.res.write(packet);
    }
  }
  function revokeUser(roomId, userId) {
    for (const client of streams.get(roomId) || []) {
      if (client.userId === userId) client.res.end();
    }
  }
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://localhost');
      if (url.pathname === '/health' && req.method === 'GET') return reply(res, 200, { ok: true, mode: 'development-only' });
      const session = await authenticate(req);
      const userId = requireAdultSession(session);
      if (url.pathname === '/rooms' && req.method === 'POST') {
        const body = await jsonBody(req);
        const room = createPartyRoom({
          id: randomUUID(), name: body.name, visibility: body.visibility || 'public',
          owner: session, createdAt: Date.now(),
        });
        rooms.set(room.id, room);
        return reply(res, 201, { room: safeRoom(room) });
      }
      const route = /^\/rooms\/([a-zA-Z0-9_-]{1,80})(?:\/([a-z-]+))?$/.exec(url.pathname);
      if (!route) return reply(res, 404, { error: 'Not found' });
      const [, roomId, action = ''] = route;
      let room = rooms.get(roomId);
      if (!room) return reply(res, 404, { error: 'Room not found' });
      if (action === 'join' && req.method === 'POST') {
        room = joinPartyRoom(room, session);
        rooms.set(roomId, room);
        sendEvent(roomId, 'members', { members: room.members });
        return reply(res, 200, { room: safeRoom(room) });
      }
      if (!hasMember(room, userId)) return reply(res, 403, { error: 'Room membership required' });
      if (action === 'events' && req.method === 'GET') {
        res.writeHead(200, {
          'Content-Type': 'text/event-stream; charset=utf-8',
          'Cache-Control': 'no-cache, no-transform',
          'Connection': 'keep-alive', 'X-Accel-Buffering': 'no', 'X-Content-Type-Options': 'nosniff',
        });
        res.write(': connected\n\n');
        const client = { userId, res };
        if (!streams.has(roomId)) streams.set(roomId, new Set());
        streams.get(roomId).add(client);
        res.on('close', () => streams.get(roomId)?.delete(client));
        return;
      }
      if (!action && req.method === 'GET') return reply(res, 200, { room: safeRoom(room) });
      if (req.method !== 'POST') return reply(res, 405, { error: 'Method not allowed' });
      const body = await jsonBody(req);
      let event = null, payload = null;
      switch (action) {
        case 'invite':
          room = inviteToPartyRoom(room, session, body.userId);
          event = 'invites'; payload = { count: room.invitedIds.length }; break;
        case 'request-mic':
          room = requestPartyMic(room, session);
          event = 'members'; payload = { members: room.members }; break;
        case 'approve-mic':
          room = approvePartyMic(room, session, body.userId);
          event = 'members'; payload = { members: room.members }; break;
        case 'mute':
          room = setPartyMute(room, session, body.userId, body.muted);
          event = 'members'; payload = { members: room.members }; break;
        case 'messages':
          room = sendPartyMessage(room, session, { id: randomUUID(), text: body.text, sentAt: Date.now() });
          event = 'message'; payload = room.messages[room.messages.length - 1]; break;
        case 'report':
          room = reportPartyMember(room, session, body.userId, body.reason, randomUUID());
          rooms.set(roomId, room);
          // Reports stay server-side, never broadcast or included in API snapshots.
          return reply(res, 200, { ok: true });
        case 'kick':
          room = removePartyMember(room, session, body.userId, { block: body.block === true });
          revokeUser(roomId, body.userId);
          event = 'members'; payload = { members: room.members }; break;
        case 'leave':
          room = leavePartyRoom(room, session);
          revokeUser(roomId, userId);
          event = 'members'; payload = { members: room.members, closed: room.closed }; break;
        case 'signal': {
          const targetId = body.to;
          if (typeof targetId !== 'string' || targetId === userId || !hasMember(room, targetId)) throw new Error('Invalid signal target');
          if (!['offer', 'answer', 'ice'].includes(body.kind)) throw new Error('Invalid signal kind');
          const sender = room.members.find((m) => m.userId === userId);
          if (body.kind === 'offer' && (sender.role === 'listener' || sender.muted)) throw new Error('Mic publication not permitted');
          if (!body.signal || typeof body.signal !== 'object' || JSON.stringify(body.signal).length > 6000) throw new Error('Invalid signal');
          sendEvent(roomId, 'signal', { from: userId, kind: body.kind, signal: body.signal }, targetId);
          return reply(res, 202, { delivered: true });
        }
        default: return reply(res, 404, { error: 'Unknown room action' });
      }
      rooms.set(roomId, room);
      if (event) sendEvent(roomId, event, payload);
      return reply(res, 200, { room: safeRoom(room) });
    } catch (error) {
      const message = error instanceof SyntaxError ? 'Invalid JSON' : String(error?.message || 'Request rejected');
      const forbidden = /Authentication|Account not active|Verified adult|permission|membership|Invite required|blocked|Mic publication|Listeners cannot|Only the member can unmute/.test(message);
      reply(res, forbidden ? 403 : 400, { error: message });
    }
  });
  return { server, rooms };
}
