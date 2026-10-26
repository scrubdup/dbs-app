# PIKK brand-source audit — 2026-10-26 (QA; no release)

**Source authority:** owner's `PIKK_Complete_Developer_Master(3).zip` → `00_READ_ME_FIRST.md`, `Brand_Assets/PIKK_Official_Approved_Logo.jpg`. The later `Updates_2026_10_25/08_Final_App_Icon_And_Loading_Screen.md` contradicts this authority, spells out KLIKK while claiming PIKK, and refers to two PNGs that do not exist in the archive. Do not create or substitute those assets.

**Verified on `main` before editing:**
- `public/brand/pikk-official-approved.jpg` is the exact owner JPG (95,277 bytes, SHA-256 `a165710faf9f5a20be91e703f631efac4405b5a0ad344a2227487de547208933`, Git blob `274723e02609e6be9a19fabe3eb3e35a964b69cc`).
- `index.html` already uses this official JPG for splash and header. Preserve both.
- The app is a Vite hash-router prototype with 7 bottom tabs and existing music/live/shop/dating/connect routes. No state schema, data migrations or other routes are modified by this branch.
- `index.html` had a root-absolute `/og-image.png` Open Graph reference; that path points outside the GitHub Pages `/pikk-app/` base. This branch changes only that reference to `%BASE_URL%og-image.png` and adds source-integrity regression tests.
- **PWA icon blocker:** `public/manifest.webmanifest` references `./brand/icon-192.png?v=3`, `./brand/icon-512.png?v=3`, `./brand/maskable-192.png?v=3`, and `./brand/maskable-512.png?v=3`. None exists on `main`. The ZIP requires an owner-approved square crop of the exact JPG before shipping. Do not claim installability or replace the missing files with invented artwork.

**Build / Design / QA coordination:** Build: preserve current routing and assets; Design: prepare a non-destructive crop preview of the exact approved JPG only for owner review; QA: verify SHA-256 and splash/header references, check metadata in production build, then visually review mobile/desktop before any integration. No automatic merge/deploy.

**Acceptance still pending:** approved app-icon crop, valid PWA icon sizes/maskable assets, visual review on iPhone/desktop, owner signoff, and verified published URL after a separately approved merge/deploy. This report is not proof of production readiness.
