# PIKK master ZIP implementation tracker — 2026-10-25

Source of requirements: owner-provided PIKK_Complete_Developer_Master(5).zip. This is a specification archive, not runnable application source. This tracker is a work queue, not a claim that all features are complete.

## Preservation and release rules
- The developed application baseline is branch `main` in `scrubdup/pikk-app`. Do not use old `master` or `pikk-rebrand` as an implementation base.
- Keep the user-facing app at https://scrubdup.github.io/pikk-app/#/home intact until new code has actually passed regression tests, build and functional checks.
- Current official asset is `Brand_Assets/PIKK_Official_Approved_Logo.jpg` in the owner ZIP. The ZIP's `08_Final_App_Icon_And_Loading_Screen.md` contradicts `00_READ_ME_FIRST.md` and names two nonexistent PNGs. Do NOT implement those missing PNG instructions. Use the real approved JPG for splash; final app icon crop needs owner approval.
- PIKK is platform branding, DatBoiSkeet is the artist. Do not blindly rename persistent storage keys, OAuth identifiers, payment product IDs or URLs.
- Do not invent gift prices, platform/creator splits, advertiser prices, real-time view counts, or claims of backend service readiness.
- Keep every change in a main-derived feature branch; no publication until real verification.

## Verified from source inspection
- Developed main already contains Home, Music, Videos, Posts, Live, Chat, and Game navigation, and additional routes. This does NOT prove production readiness.
- Existing Videos section has real DatBoiSkeet YouTube embeds and admin video cards.
- Feature branch `feature/pikk-video-featured-sponsored` adds editorial Featured Premiere, explicit Sponsored disclosure for paid items, PIKKDUP title/artist/category search, and PIKKUP local video draft prototype with 20-minute client-side validation.
- PIKKUP currently saves drafts only in browser storage, with a 100 MB local limit; it does NOT publish to a real video backend, provide server-side validation, transcode or sync across devices.
- PIKKDUP currently filters a verified static catalog; it does NOT provide live measured trending, personalized recommendations, creator analytics or fraud-resistant ranking.
- The new branch changes and tests have NOT been independently verified by a completed CI run in this handoff. No deployment claim.

## Remaining acceptance work by priority

### P0 — identity, safety and release gates
- [ ] Screen-by-screen platform-brand audit and asset integration, keeping DatBoiSkeet artist credits
- [ ] Auth/session and permissions audit; accessible navigation, privacy and content reports
- [ ] Real backend for PIKKUP: authenticated resumable signed upload, server-side duration/MIME/codec/file checks, progress/retry, transcoding, CDN playback, captions, thumbnails, deletion, moderation, copyright reports, retention and abuse limits
- [ ] Video duration Phase 1 <=20 minutes enforced on SERVER (not only in browser); 60 minutes and unlimited remain future gated phases
- [ ] Test suite, production build, browser smoke checks, data persistence, and deploy rollback; 20–50-person private beta and owner signoff

### P1 — core creator/social
- [ ] Real PIKKDUP discovery feeds (For You, Following, New Uploads, Rising Creators, categories) based on measured and moderated signals
- [ ] Channel pages, follows/subscriptions, playlists, reactions, comments, saves, notifications and analytics for native videos
- [ ] Home first carousel card must show highest-viewed *active* live, never sponsored; explicit no-live fallback and separately labeled paid slides
- [ ] Stories expiration/highlights, DM reliability, music purchases preserved after membership cancellation, real catalog and no fake seeded metrics

### P2 — live, commerce and community
- [ ] Livestream/multistream integration, 24/7 Spotlight Live queue, battle rules, approved gift ledger and payouts, refund/chargeback handling
- [ ] Beat Market licensing, Creator Teams, verified seller onboarding, Shop and checkout, external Foreign X-Change exclusion from commissions
- [ ] Confirm platform fee categories: physical 7%, creator services 8%, beats/digital 10%, Creator Teams 8%, exclusive content 12%, paid live 10%; processing/taxes/refunds separate
- [ ] Connect random video safety/report/block, adult-only Match safety/consent, community rooms, moderation ladder and suspension billing rules
- [ ] Rewards fraud controls; Share & Earn 24-hour proof, Refer & Earn active 3 separate days of first 7

### P3 — future gated
- [ ] Arcade Coming Soon only; no real-money gambling or redeemable play chips
- [ ] Ad self-service and pricing only after owner approval and billing/fraud infrastructure
- [ ] Affiliate rollout after checkout readiness; 60-minute video uploads only after cost/performance review

## Status discipline
Mark an item complete ONLY after working code, automated tests, and appropriate functional verification. A specification or UI shell alone is not a complete production feature.
