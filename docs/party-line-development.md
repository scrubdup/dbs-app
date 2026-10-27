# PIKK Community Party Line — development contract

**Status (2026-10-27):** Room policy library, a testable Node HTTP/SSE reference service and a disabled Lounge UI preview. **No production voice, deployed real-time chat, durable cross-device state, or production age verification is deployed.** The existing PIKK app on `main` remains the source of truth. Do not merge or publish this branch without tests and manual review.

## Product boundary

- Party Line belongs inside `#/community` (PIKK Lounge / Discord-inspired community).
- `#/connect` is for face-to-face random video and 1-on-1 through 5-on-5 video matching. Do not combine their matching, permissions or routes.
- Party Line supports public and invite-only group voice, persistent simultaneous room text chat, listeners, speakers, requests to speak, host mute/remove, invitations, block/report and 18+ eligibility.
- Larger rooms require an SFU/voice-stage architecture. The policy module currently caps a room at **10** participants; this is a safe provisional test limit, not a final product limit.

## Implemented in this branch

- `src/party-line/room-policy.js`: pure server-side authorization policy for adult verified sessions, public/private admission, invites, speaking requests, role changes, mute, text validation, reporting, kick/block and host handoff. It does not transmit audio or persist messages.
- `tests/party-line-policy.test.mjs`: independent policy tests.
- `server/party-line/server.mjs`: isolated Node HTTP/SSE reference service. Supports cross-user room messages, event delivery, private invites, mic policy and targeted WebRTC signaling **only while this server process runs**. No audio media/SFU, production authentication adapter, database, rate limits or public hosting.
- `tests/party-line-server.test.mjs`: two-identity HTTP/SSE integration checks, including unauthorized/underage access, private invites, moderation and signaling.
- `src/pages/shells.js` / `src/styles.css`: Party Line channel and responsive preview within the existing Lounge. Join and mic controls remain disabled.

## Required before real operation

1. **Trusted identity:** Server verifies authentication, active account status and adult age assurance. Never accept `ageAssured`, `userId` or role from browser JSON as proof. Validate memberships/entitlements on every room action.
2. **Durable room service:** Database for rooms, memberships, invitations, messages, reports, blocks, bans and moderation/audit events. Enforce idempotency and transactional capacity/role checks; use server-generated identifiers and timestamps. Do not use localStorage for real users.
3. **Transport:** The reference SSE/HTTP server must be hardened or replaced with authenticated WebSocket (or equivalent) for chat/presence/WebRTC signaling; reconnect, heartbeat, replay cursor, rate limits and backpressure. All fan-out must be filtered by room access. Private room invitations should be scoped, expiring, revocable and bound to authenticated identities.
4. **Voice:** Use SFU (e.g., LiveKit, mediasoup or equivalent) for group audio, with TURN/STUN, consent-only mic acquisition, per-room publish permissions and server-enforced mute/kick. Avoid full mesh for large rooms. Do not request mic permission until a verified user explicitly joins/speaks.
5. **Safety:** Rate limits, spam detection, report queues, host controls, account blocks, retention/deletion policies, appeal and incident handling. Test age assurance and moderation fail-closed before enabling strangers.
6. **Privacy/security:** TLS, authenticated API tokens, least-privilege roles, private room enumeration protection, content sanitization, logging without voice content, and explicit consent/recording rules. No automatic recording.
7. **QA:** Two or more distinct authenticated devices/accounts for chat delivery and permissions; 10 concurrent participants for voice/presence; iOS Safari/Android/desktop mic permissions, headphones, mute, reconnect and backgrounding; moderator kick and revocation during active voice; blocked user rejoin; private invite expiration; persistence after refresh; network drop/retry; load tests.
8. **Hosting:** GitHub Pages serves only the static frontend. Deploy a separate secured real-time backend/SFU and configure origin, authentication and secrets before connecting the UI. Never claim real chat/voice is available just because the preview renders.

## Manual release gate

- `npm ci && npm test && npm run build` must pass.
- Review diffs against developed `main`, check the approved PIKK logo and sticky top player, verify seven tabs on small phones and confirm Connect still routes separately.
- Publish only after the backend and production safety requirements are met and an authorized, tested release is approved.
