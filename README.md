# DBS App (DatBoiSkeet Network)

Local Vite SPA skeleton for the DatBoiSkeet (DBS) music / social / live / merch network. Built from the prototype shell + asset pack; expands the 35-section (+ Connect) developer plan.

**Not deployed.** Do not push until Supervisor says so.

## Requirements

- Node.js 18+ (20+ preferred)
- npm

## Run locally

```bash
cd /workspace/dbs-app
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) — hash routes like `#/home`, `#/posts`, `#/music`, `#/merch`, `#/profile`, `#/clippers`.

## Build

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Output lands in `dist/`.

## Phase 1 routes (interactive demo)

| Route | What |
| --- | --- |
| `#/home` | Featured video, Coming Soon covers, section previews |
| `#/posts` | Local feed: compose, like, comment, follow (sign in first) |
| `#/music` / `#/vault` | Coming Soon covers + Vault membership shells |
| `#/merch` | Foreign X-Change catalog (external checkout) |
| `#/profile` | Local demo sign-in / sign-out |
| `#/clippers` | Clipper application form (saved on device) |

First visit shows the official loading splash (`public/loading/…`).

Remaining plan sections are routed shells under `#/…` (see `STATUS.md`).

## Layout

```
public/          static assets (brand, loading, merch, music covers)
src/main.js      boot, chrome, router map
src/pages/       home, posts, music, merch, profile, clippers, shells
src/data.js      catalogs & nav
src/store.js     localStorage demo state
prototype-ref/   mirrored live prototype (reference only)
```

## Owners (bots)

- **DBS Design** — visual polish: §§19, 21, 34, 22, 15, 8 (vis), 20, 17
- **DBS Build** — interactive sections (Posts, Clippers, Live, Marketplace, wallet, admin, messaging, etc.)
- **DBS Supervisor** — phases, guidelines, launch (§§12, 13, 14, 31), coordination
- **DBS Progress Checker** — audits `STATUS.md` vs preview

## Notes

- **TEST MODE** ribbon: no real charges; merch opens Foreign X-Change externally.
- Data is browser `localStorage` key `dbs_v1` only — no backend yet.
- Plan docs: `DatBoiSkeet_Full_35_Section_Developer_Plan_Corrected.md`
