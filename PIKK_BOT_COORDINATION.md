# PIKK Development Team — Grok Bot Coordination

## Directive
Continue developing the **existing** `scrubdup/dbs-app` app. Rebrand DBS platform-facing labels to **PIKK**, while keeping **DatBoiSkeet** as the artist name and preserving all existing data, routes, code, content and working functionality. No duplicate app. No destructive rewrites. The official approved logo is the single chrome PIKK wordmark with the red triangle and silver cursor **inside the P** (no large separate emblem).

## Existing Grok bots — rename roles, don't duplicate
- DBS Supervisor → **PIKK Supervisor**: triage tasks, sequence dependencies, coordinate merges, check completion evidence.
- DBS Build → **PIKK Build**: app functionality, APIs, data persistence and integrations.
- DBS Design → **PIKK Design**: exact approved logo, loading, icons, navigation, responsive screens and accessibility.
- DBS Live Social → **PIKK Live Social**: Posts, Stories, DMs, Live, Spotlight, gift battles, moderation.
- DBS Commerce → **PIKK Commerce**: marketplace, merch external checkout, creator monetization, payouts and fraud.
- DBS Progress Checker → **PIKK Progress Checker**: independent review, build and regression tests, STATUS reconciliation.
- DBS Media Links → **PIKK Media Links**: verified music links, video playback, uploads, processing and media rights.
- DBS Content Polish → **PIKK Content Polish**: copy, content, visual quality, broken links and polish.

## Additional workstreams (assign existing bots first; new Grok bots only if needed)
- **PIKK Backend & Security**: real auth, data storage, roles, privacy, abuse handling, backups, secure APIs.
- **PIKK QA & Release**: mobile tests, end-to-end flows, accessibility, deployment readiness and rollback.
- **PIKK Trust & Safety**: reporting, blocking, consent, age assurance, random video chat and adult-only Match.

## Working rules
1. PIKK Supervisor assigns non-overlapping tasks, owners, acceptance criteria and dependencies.
2. Each bot works on its own branch or scoped files; never overwrite another bot's changes.
3. Changes go through a PR with tests and screenshots/video when appropriate; Progress Checker verifies before merge.
4. Never call a route shell a working feature; verify real interaction and data persistence.
5. Do not launch payments, creator payouts, dating, random video chat or real-time live features without appropriate backend, compliance and safety controls.
6. Never claim background autonomous work is occurring without evidence of actual Grok executions.
7. Preserve `master` until reviewed. PIKK changes currently live in `pikk-rebrand`.

## Current verified GitHub changes
- PIKK page title, web app name and share description
- PIKK navigation drawer and Lounge label
- PIKK implementation tracker
- This coordination document

## Still incomplete
Official logo asset integration; all remaining ZIP feature implementation; backend; payment integrations; safety systems; build/test verification; deployment.

## Priority queue
1. Integrate exact approved PIKK logo from user-provided source image and check favicon/splash/icon crops.
2. Inventory every route against the PIKK master specification; flag shells honestly.
3. Establish production backend/auth/media architecture and safe migrations.
4. Implement working user journeys incrementally, test on iPhone and desktop, and report verifiable results.
