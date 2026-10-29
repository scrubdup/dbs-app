# PIKK Signup, Free Access and Role Entitlements — Approved

## Permanent free tier
- PIKK Free is $0 forever, not a trial.
- Every account may navigate Music, Videos, Connect, Create, Dating, Games and Shop.
- Public posts, music previews where authorized, public videos and livestreams, following, commenting, messaging, eligible games and browsing products are available without a paid membership.
- Age, safety, territorial, moderation and content-rights restrictions still apply. Dating requires age eligibility.
- Users can purchase songs, albums, gifts, merchandise and other items without subscribing.

## Optional platform memberships
- PIKK+ $3.99/month
- PIKK VIP $6.99/month
- PIKK Elite $12.99/month
- Benefits must be clearly disclosed and genuinely additive; do not block basic platform access.
- Never use Skeet/DBS branding for platform memberships. DatBoiSkeet remains a separate artist identity.

## Signup roles (multi-select, same account)
Member, Content Creator, Music Artist, Streamer, Video Publisher (YouTube-style long-form channel), Producer/Beat Seller, Shop Seller, Business/Advertiser, Clipper/Promoter.
- All roles retain free member access and all seven sections.
- Roles can be added or changed later in Account Settings.
- Role selection is not approval or permission to monetize.
- Seller, advertiser and creator monetization require applicable agreements, identity verification, payout onboarding and moderation as appropriate.
- Video publishers and artists must attest to content rights.
- Free membership is not a prerequisite for paid creator plans; platform subscription and creator-specific subscription are separate concepts.

## Implementation destinations and checklist
- [x] Signup route `#/signup`: multi-select role UI and demo-only local selection persistence (PR #110).
- [x] Signup explanatory copy: permanent free tier and seven-section access (PR #110).
- [ ] Verify signup role selection works and remains available after real login and across devices.
- [ ] Account Settings/Profile: editable roles with server-side persistence.
- [ ] Pricing/Memberships screen: show PIKK Free plus optional $3.99/$6.99/$12.99 plans, correct benefit comparison, upgrade/downgrade/cancel flow.
- [ ] Auth/backend: enforce universal free account, role-specific approval and age gates without restricting base navigation.
- [ ] Creator Studio / Video Publisher: channel setup, upload and rights attestations.
- [ ] PIKK Shop: seller verification and seller agreement.
- [ ] Live/Broadcast: streamer onboarding, streaming eligibility and payout agreements.
- [ ] Business/Advertising: advertiser onboarding and booking eligibility.
- [ ] QA: verify a Free member can open all seven sections and buy items individually without upgrading.
- [ ] Legal review and accessibility/mobile testing before launch.

Current status: saved in development PRs, not yet merged or deployed. Do not claim production completion.
