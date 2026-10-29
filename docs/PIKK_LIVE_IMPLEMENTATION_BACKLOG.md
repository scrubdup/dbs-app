# PIKK Live — approved rooms and implementation backlog

Status: approved requirements, not production-complete. Do not replace existing music player, navigation, streams, or app data. No fake viewers or fabricated results.

## Directory
- Women's community: 15 dedicated rooms as approved, including Girl Talk, Tea Time, What's the Word?, Who Did What?, Beauty Bar, Girls' Night In, Love & Standards, Boss Ladies, Fashion & Fits, Ladies Only Live, Ladies Lounge, Women in Business, Women's Mental Wellness, Dating From Her Side, The Hustle Room: Women.
- Men's community: 15 dedicated rooms as approved. Exclude The Garage (DIY) and The Grill (cooking).
- Coed featured rooms: 10, exactly: Let's Talk; The Hangout; Business Connect & Wealth Academy (one combined room); Couples Corner (couples-versus-couples games); Conspiracy Room; Game Room; Why Are You Single?; What Are You Looking For?; Single & Ready to Mingle; City Connect.
- Preserve separate Sports Central, Basketball, Football, Soccer, Baseball, Hockey, IRL, Gaming, Music & Talent, news, general categories, and 24/7 stages. Avoid duplicates in the displayed directory while allowing cross-category discovery.

## Couples Corner — approved game concepts
1. How Well Do You Know Your Partner? (predict partner answers)
2. Couples Trivia (two couples compete)
3. Finish My Sentence (predict partner's completion)
4. Relationship Feud (original survey-style couple-vs-couple quiz; avoid copying proprietary game assets/questions)
5. Couples Challenges (timed teamwork)
Live scoring, turn-taking, audience reactions, fair matchmaking, rematches, virtual points/badges only at first; no invented rewards or cash payouts. Validate scores server-side and moderate chat.

## City Connect
Choose city and intent (friends, dating, business, networking, just chatting); browse city-tagged live rooms, search other cities, optionally host tagged broadcasts. City Takeover remains separate and is strictly same-field competitive talent matching. Do not expose precise location; use user-selected city, privacy controls, age-aware dating safeguards, reporting/blocking.

## Business Connect & Wealth Academy
Single coed room for business networking, starting a business, stocks/ETFs, crypto, Roth IRA/retirement, credit, budgeting, real estate and introductory classes. Host Q&A, workshops and educational resources; moderate scams and false guaranteed-return claims. No personalized financial advice implied.

## Prioritized implementation checklist
- [ ] P0: Build actual grouped directory tabs/sections for Women, Men, Coed, Sports, Music & Talent, IRL/General, Dating, News/Tech. Keep all approved categories searchable and preserve current routing.
- [ ] P0: Audit existing live data, stream player, host controls, chat, permissions and backend capabilities before claiming room functionality.
- [ ] P0: Implement functional room pages, host/join flow, live video, guest queue, chat and room membership with authenticated persistence and moderation.
- [ ] P1: City Connect city and purpose filters with privacy and location safeguards.
- [ ] P1: Couples Corner game UI, two-couple matchmaking, rounds, server-validated scoring, results and rematches; start with one game, then expand to all five.
- [ ] P1: Business Connect & Wealth Academy sessions, discovery and moderated Q&A.
- [ ] P1: PIKK Battles: same-field entrants, rounds, verified audience voting, tiebreakers, anti-fraud and separate gift transactions.
- [ ] P1: City Takeover: city-vs-city same-field competition and verified city leaderboards.
- [ ] P2: Daily Champions 24-hour winner ticker and 7-day top gifters from real ledgers, never invented totals.
- [ ] P0/P1: Reporting, blocking, moderation, consent/age safeguards and abuse protections across live rooms.
- [ ] P0: Automated syntax, route, mobile layout, accessibility, streaming, permission and end-to-end tests before merging or deploying.

The current Live categories in src/pages/live.js are discovery filters, not proof that backend-hosted rooms or game logic exist.

## Universal live room engagement and daily goals (approved)
Applies to **every** room and hosted stream across Women, Men, Coed, Sports, Music, IRL and all other Live categories, not just the main Live page.
- [ ] Show **current concurrent viewer count**, **live likes**, and **total gifts received** on each active stream card and inside its room. Counts must come from authoritative server data; display “—” when unknown, never fabricate zero or simulated values as real activity.
- [ ] Every eligible livestream host can create/edit a **24-hour daily goal** with custom goal name and target amount; define timezone and reset policy explicitly and prevent editing from falsifying received donations.
- [ ] Fans can **donate to the active host goal** using verified, secure payment/coin transactions with explicit confirmation, insufficient-balance handling, and refund/chargeback accounting.
- [ ] Show live progress, total contributed, target and time remaining. Do not count gifts toward goal unless the host has explicitly selected that policy; keep gift totals and goal donations separate by default.
- [ ] Persist per-stream viewer/like/gift counts and per-host daily goal across devices. Handle reconnects, bot prevention, double-counted likes, idempotent donation events and moderation.
- [ ] Provide a consistent room-card and stream header component so the metrics and donation controls are available in every category. Do not imply that a category itself has viewers unless aggregating actual active streams with a clearly labeled metric.
- [ ] Verify production payment permissions, financial compliance, creator payout accounting, abuse safeguards and end-to-end tests before enabling real-money donations.
Existing Live daily-goal and gift controls are **TEST MODE/demo**; they do not establish production payments or universal room support.

## Shareable, fully customizable donation goals (approved)
- [ ] Every eligible Live host can type a **freeform goal title** describing what donations are for, plus optional description, custom target amount and 24-hour duration; do not limit titles to predefined categories.
- [ ] Show the host-entered title and goal progress bar on the stream and the shareable goal page. Apply reasonable character limits, escaping, content moderation and fraud/impersonation protections.
- [ ] Generate a stable, unguessable, shareable goal URL with native share and copy-link actions; allow sharing via DMs, text and social platforms. Include appropriate public preview metadata without exposing private account information.
- [ ] Anyone with a valid link can view the goal without joining the stream. Support donation from outside the stream after secure sign-in or a compliant guest-checkout flow; do not claim anonymous guest payment is implemented.
- [ ] Always display a donation-message input (optional to fill in) on every donation flow, including in-stream, shared goal links and guest checkout, with moderation and privacy controls. Donors must not be able to edit the host's goal title.
- [ ] Ensure each link resolves to the correct goal and displays accurate amount raised, remaining time and status (active, completed, expired); prevent contributions to expired/removed goals.
- [ ] Real donations require verified payment settlement, idempotency, refund/chargeback handling, rate limiting and transparent fees before production launch.

## Donation notifications: sound and vibration (approved)
- [ ] On every **confirmed donation**, show a real-time notification to the receiving host with donor name/display preference, amount and optional donor message; preserve donor anonymity settings.
- [ ] Play a recognizable donation sound and trigger device vibration/haptic feedback when supported and permitted, including when a host is in a Live room. Do not trigger on unconfirmed, duplicate or failed payments.
- [ ] Provide notification settings for volume/mute, vibration on/off, reduced-motion/accessibility and quiet mode. Respect browser autoplay restrictions, mobile OS notification permissions, Do Not Disturb and devices without vibration APIs; use visible fallback alerts.
- [ ] Ensure donor-message input is **always offered** (but message entry is optional) in every donation flow. Sanitize and moderate messages before public display or text-to-speech; no unconsented public message reading.
- [ ] Deduplicate events across reconnections/devices; test sound/haptic behavior on iOS, Android and desktop. Never promise vibration where the platform disallows it.

## Streamer donation recognition and community appreciation (approved)
- [ ] After each confirmed paid donation, display a prominent on-stream donor acknowledgment card for a meaningful period (**15-second animated alert**, followed by a longer pinned donation message based on the amount), showing donor display name, contribution amount and optional moderated message. Respect anonymous/private donor preferences.
- [ ] Play the donation sound and trigger supported haptics once per verified donation event, subject to user notification settings and device permissions.
- [ ] Queue simultaneous donation alerts fairly so each supporter gets visible recognition; combine bursts carefully without losing individual acknowledgments. Avoid covering essential stream controls, captions or safety actions.
- [ ] In the **Streamer Guide / Creator Onboarding** include the following community guideline: **“We encourage all streamers to acknowledge paid donations. Give supporters a shout-out, thank them by name when they allow it, and show them love. Make them feel appreciated and part of your community—not like you're just taking their money.”**
- [ ] Remind hosts to acknowledge donors in-stream, but do not require a shout-out as a condition of receiving donations, promise guaranteed attention, or pressure fans to give money. Respect donor anonymity and accessibility needs.
- [ ] Verify duration, alert queue, privacy, mute settings, cross-device synchronization and real-payment confirmation in testing.

## Approved PIKK donation pinning model
On each confirmed paid donation, play the 15-second animated on-stream acknowledgment (with permitted sound/haptics), then keep the donor's message **pinned in the Live chat** for the following duration. These are PIKK's own tiers, not YouTube's exact tiers:

| Paid donation | Pinned message duration |
|---|---|
| $1–$4.99 | 2 minutes |
| $5–$9.99 | 5 minutes |
| $10–$24.99 | 10 minutes |
| $25–$49.99 | 20 minutes |
| $50–$99.99 | 30 minutes |
| $100–$249.99 | 1 hour |
| $250+ | 2 hours |

- [ ] Implement pinning with a persistent expiration timestamp, across reconnections and devices, with remaining-time indicator. When multiple donors qualify, support a fair visible rotation or stacked list rather than silently replacing prior paid acknowledgments.
- [ ] Add a **Donation Inbox** showing all verified donations, including those not yet acknowledged, with a **Thank Supporter** action that marks the donation acknowledged. Never mark it acknowledged automatically just because the alert displayed.
- [ ] Show donation messages only after moderation and according to donor privacy preferences; keep anonymous donations anonymous. Respect accessibility and streamer sound/haptic preferences.
- [ ] Prevent duplicate alerts on retries and do not pin failed, refunded, test or unconfirmed donations as real contributions. Verify payment currency normalization and any refund behavior before production.
