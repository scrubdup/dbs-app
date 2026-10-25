# DBS — public deploy

## Live app

**https://scrubdup.github.io/dbs-app/**

Source: https://github.com/scrubdup/dbs-app

GitHub Actions builds `dist/` on every push to `main`/`master` and deploys to GitHub Pages.

## Add to Home Screen (iPhone)

1. Open the link above in **Safari** (cellular is fine).
2. Tap the Share button.
3. Tap **Add to Home Screen**.
4. Name it **DBS** → Add.

You get a full-screen icon. Demo data stays on-device. YouTube / Spotify / TikTok embeds still need a network (cellular OK).

## Local build

```bash
npm ci
npm run build          # production base /dbs-app/
VITE_BASE=/ npm run build   # root host (e.g. workers.dev)
npm run preview
```
