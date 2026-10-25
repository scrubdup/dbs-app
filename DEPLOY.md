# DBS public deploy

## CLAIM THIS ACCOUNT (keeps workers.dev forever) — do first

- **Claim URL (expires ~2026-10-25 03:55 UTC):** https://dash.cloudflare.com/claim-preview?claimToken=<SENT_IN_CHAT_EXPIRES_03:55_UTC>
- Temporary CF account: **Abundant Passionfruit** (reused on latest deploy)
- After claim: `wrangler login` on the box, then deploy **without** `--temporary`

## Permanent forever URL (GitHub Pages)

- **Home:** https://scrubdup.github.io/dbs-app/#/home
- **Messages:** https://scrubdup.github.io/dbs-app/#/messages
- **Never expires.** Source: `gh-pages` branch (`b1acdcd` · t212u unread-badge clear fix; main `a079fa8`)
- Base path: `/dbs-app/`
- **Last shipped:** t212u badge-clear fix (Messages unread clears after opening thread; demoUnreadSeeded one-shot) — prior: tabbar Home · Music · Videos · Post · Go Live (center, #/live?go=1) · Chat (#/community) · Messages (#/messages + unread badge) · Profile; .tabbar-scroll horizontal scroll, 11px labels / 22px icons

## Phone link (workers.dev — temporary until claimed)

- **Home:** https://dbs-app.abundant-passionfruit.workers.dev/#/home
- **Live:** https://dbs-app.abundant-passionfruit.workers.dev/#/live
- **Version ID:** `bc0806d9-32f9-46af-822b-5eda22691b9a` (t187u; t192u redeploy FAILED — CF auth error 10000 on temporary account, still serving t187u build)
- Prior suave-marimba preview **expired** — do not use
- Build root base: `VITE_BASE=/ npm run build`
- Redeploy temporary:  
  `PATH=/tmp/node-v22.20.0-linux-x64/bin:$PATH npx -y wrangler@4.152.0 deploy --assets=./dist --name dbs-app --temporary`

## Also

- **Repo:** https://github.com/scrubdup/dbs-app
- Rebuild Pages: `VITE_BASE=/dbs-app/ npm run build` → push `dist/` to `gh-pages` (or use Actions workflow on main)
- Includes: brand black/red/blue (`--blue: #2f6bff`), t180u song packs, splash 3s, sticky player fix, drawer IA, Home LIVE pill, BW crop, t185u gifts catalog (in-flight OK)
