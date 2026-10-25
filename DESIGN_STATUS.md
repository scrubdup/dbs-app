# DBS Design Status

**Agent:** DBS Design  
**App root:** `/workspace/dbs-app`  
**No merge / deploy / push** — visual + asset integration only.  
**Coordinate with DBS Build:** leave paths/comments; do not break routing.

## Status table

| § | Section | Status | Evidence | Files touched |
|---|---|---|---|---|
| **19** | Loading screen | **done** | `design/evidence/19_loading.png` | `index.html`, `src/styles.css` (`.splash*`), `src/main.js` (`hideSplash` / first-visit + `?holdSplash=1`) |
| **21** | Foreign X-Change Merch | **done** | `design/evidence/21_merch.png` | `src/pages/merch.js`, `src/styles.css` (`.merch-*`, `.lightbox`), `src/data.js` (`MERCH` → all 10 `/public/merch/*`) |
| **34** | Coming Soon covers | **done** | `design/evidence/34_covers.png` | `src/pages/music.js`, `src/pages/home.js`, `src/styles.css` (`.cover-*`, `.badge-cs`), covers at `/public/music/01_*.jpg`, `02_*.jpg` |
| **22** | Profile Shop | **PENDING AUDIT** (CONCEPT / TEST MODE · not DONE) | `design/evidence/22_shop.png` + `phase2/shop/` | Live preview + unlock/equip demo. Files: `src/pages/shop.js`, `store.js` `profileShop`, `styles.css` preview states, concept PNG preserved |
| **15** | Community redesign polish | **visual shell done** (Lounge Phase 2) | `design/evidence/15_community.png` | Polished DBS Lounge room list UI; rooms not live yet. Global card/typography polish in `styles.css`. Real Instagram/content import is Build/content, not Design. |
| **8** | Music & Vault layout | **done** | `design/evidence/08_vault.png` | `src/pages/music.js` (Upcoming + Vault panel + tiers), `src/styles.css` (`.vault-panel`, `.tier-*`) — Build owns membership/purchase logic |
| **20** | Home dashboard polish | **done** | `design/evidence/20_home.png` | `src/pages/home.js` (swipe previews, live activity, covers row), `src/styles.css` (`.preview-card`, `.live-activity`) |
| **17** | Homepage music video | **done** | `design/evidence/17_video.png` | `src/pages/home.js` (16:9 featured embed + video list from `data.js` `VIDEOS`), `src/styles.css` (`.hero-video`, `.video-list`) |

## Asset paths (public)

| Use | Path |
|---|---|
| Official loading PNG | `/public/loading/DBS_Official_Loading_Screen.png` (wired in `index.html` `#splash`) |
| Merch 01–10 | `/public/merch/01_black_orange_716_hat.jpeg` … `10_white_skulls_tee.jpeg` |
| Coming Soon covers | `/public/music/01_Long_Story_Short_Coming_Soon.jpg`, `/public/music/02_Ladies_Only_Coming_Soon.jpg` |
| Profile Shop concept | `/public/design/DBS_Profile_Shop_Concept.png` |

## Acceptance notes

### 19 Loading
- Logo centered, `object-fit: contain`, responsive (`min(88vw,400px)`, mobile/desktop tweaks).
- Cox Creations credit absolutely at bottom — does **not** cover baked-in `LOADING...`.
- Auto-hide on first visit when app ready (~320ms after `load`, safety max 1800ms). Subsequent visits skip via `shouldShowSplash()` (Build).
- QA: `?holdSplash=1` keeps splash for screenshots.

### 21 Merch
- All **10** products in `MERCH` map 1:1 to `public/merch` images.
- Prices: hats **$30**, tees **$65**, jackets **$200**.
- CTA: **Shop on Foreign X-Change** → `https://foreignx-change.com` (homepage; no invented product URLs).
- Gallery grid + tap-to-zoom lightbox; TEST MODE / external-checkout copy on every card.

### 34 Coming Soon
- **Long Story Short** then **Ladies Only** on Music Upcoming + Home cover row.
- Premium square frames, Coming Soon badge, titles/artist.

### 22 Profile Shop
- **PENDING AUDIT** (2026-10-25) — interactive CONCEPT / TEST MODE demo shipped; Checker owns PASS.
- Concept art hero + category chips (All / frames / effects / banners / name styles / badges).
- Full `PROFILE_SHOP` catalog; **CONCEPT** + **TEST MODE**; live preview before unlock.
- Unlock = local grant (no real pay / no wallet debit); Equip/Unequip; starter bundle; reset.
- Persist `dbs_v1.profileShop` `{ owned, equipped, reduceMotion }`.
- Separated from Foreign X-Change merch (`#/merch` + foreignx-change.com homepage only).
- Evidence: `/workspace/dbs-evidence/phase2/shop/` + `design/evidence/22_shop.png`.

### Build coordination
- Do not remove `TEST MODE` labels or splash asset path.
- Merch checkout stays external; Profile Shop is digital-only CONCEPT / TEST MODE (local unlock grant — no payment wiring yet).
- Music membership / My Music / buy-demo logic is Build’s — Design only polished covers/Vault chrome.
- Routing unchanged (`#/home`, `#/merch`, `#/music`, `#/shop`, `#/community`, …).

## Evidence directory

```
/workspace/dbs-app/design/evidence/
  19_loading.png
  21_merch.png
  34_covers.png
  22_shop.png
  20_home.png
  08_vault.png
  15_community.png
  17_video.png
```

## Admin Add Content CSS (assist)
- Polished `src/styles.css` admin hooks only (no `admin.js` logic changes).
- Evidence: run app `#/admin` with demo admin; tabs 48px, dropzones 112px min, 16px inputs (no iOS zoom).

## Content Polish note (2026-10-25) — not Design visual work

- **§15 Community:** Lounge page copy enriched (room descriptions, artist-owned network voice). Visual shell / Phase 2 rooms status unchanged — Design still owns layout/CSS.
- **§20 Home:** Activity feed + `HOME_SECTIONS` blurbs copy-polished for DatBoiSkeet voice. Layout/CSS remain Design’s; no visual redesign by Content Polish.

