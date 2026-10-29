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
- [ ] Allow donors to add an optional message, with moderation and privacy controls. Donors must not be able to edit the host's goal title.
- [ ] Ensure each link resolves to the correct goal and displays accurate amount raised, remaining time and status (active, completed, expired); prevent contributions to expired/removed goals.
- [ ] Real donations require verified payment settlement, idempotency, refund/chargeback handling, rate limiting and transparent fees before production launch.
