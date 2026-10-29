# PIKK Stories, Featured Promotions & Legal Consent — Owner-approved requirements

Status: Approved product requirements. Not evidence that UI, checkout, verification, or contracts are production-ready.

## Home and Videos — exact order
1. Stories carousel across the top (24-hour stories; own story creation and viewing, privacy/reporting, expiry).
2. Featured on PIKK, clearly labeled **Sponsored**, with EXACTLY SIX boxes: **one full-width large Premium Spotlight**, **two medium boxes side by side**, **three smaller boxes side by side**. Responsive stacking must retain 1/2/3 hierarchy. Display on BOTH Home and Videos.
3. Existing trending/discovery video/music content after sponsored boxes. Preserve existing home highest-viewed live hero behavior, player, logo, seven tabs and real content; coordinate placement without removing the hero.

## Owner-approved introductory ad rate card (USD)
| Placement | Slots per page | 24h per slot | 7d per slot |
| --- | ---: | ---: | ---: |
| Premium Spotlight | 1 | $199 | $999 |
| Featured Box | 2 | $99 | $499 |
| Promo Box | 3 | $49 | $249 |

Six fully booked slots on one page for 24 hours = $544 gross. Home and Videos are separate inventory and charges. Optional discounted cross-page packages require separately approved prices. Support videos, music, creators, approved ads. Show prices, dates, available inventory, preview, clear sponsored labeling, booking/checkout and payment confirmation. Never guarantee impressions/views unless substantiated. Require advertiser agreement and content moderation; specify cancellation, refunds, rejected ads, takedown and disclosure.

## Legal & Compliance Center — required gated agreements
- All users: Terms of Service; Privacy Policy notice/acknowledgment as appropriate; Community Guidelines.
- Dating: 18+ eligibility/age assurance, separate dating safety rules and affirmative consent, sensitive-data privacy disclosures, reporting/blocking; no blanket promise of safety.
- Creators: Creator Agreement and monetization-specific terms BEFORE enabling earning features.
- Artists/producers: Music and Beat Upload/Distribution Agreement, rights/ownership declarations for masters, compositions, samples, artwork, featured performers and collaborators, and external-platform distribution permissions if actually available. Per-upload copyright attestation.
- Monetization: visible creator/platform revenue splits BEFORE acceptance for songs, albums, beats, videos, live gifts, memberships and other products; disclose gross/net revenue basis, processing fees, refunds, taxes, payouts, chargebacks and split changes. Rates require owner approval; no invented final rates.
- Livestreams/gifts: participant and streamer rules; competition and reward rules including separate fan Gift Battles and Roast Battles, eligibility and moderation.
- Featured ads: advertising purchase agreement, clear sponsored label, inventory/date/price and refund terms.
- Sellers: marketplace/seller terms, prohibited products, seller identity and payment terms.
- Payouts: tax and payment processor onboarding, KYC where required.
- PIKK Shield: copyright complaint, DMCA takedown/counter-notice and appeals process, registered agent where applicable.

## Acceptance engineering
- Show readable document and conspicuous affirmative unchecked checkbox, and signature where appropriate; don't use a universal one-time signature for every feature.
- Log immutable evidence: account ID, agreement ID/version/hash, UTC timestamp, acceptance action, relevant feature and price/split schedule; provide accessible copy and history. Avoid unnecessary sensitive retention.
- Gate the relevant action until acceptance and required age/identity/tax verification; record re-consent when material terms change.
- Allow account settings to view/download signed agreements; build admin versioning, audit and access controls.
- No real paid activation before attorney-reviewed terms, privacy/age verification and payments are ready.

## Release checklist
- First ship visual layout as a tested independent PR; no fake purchase buttons or misleading functioning story uploads.
- Then ship legal document presentation and versioned consent gates; draft documents require qualified US technology/entertainment/privacy counsel review before production activation.
- Finally implement real scheduling, inventory locking, secure checkout, moderation and reporting.
