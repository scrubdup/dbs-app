import { getState, setState, setNotifPrefs } from '../store.js';
import { VIDEOS, MEMBERSHIPS } from '../data.js';
import { esc, shellPage, toast } from '../ui.js';

function phase(n) {
  return { badge: `Phase ${n} shell` };
}

export function renderVideos() {
  const list = VIDEOS.map(
    (v) => `
    <div class="card">
      <div class="hero-video" style="margin:0 0 10px">
        <iframe src="${esc(v.embed)}?rel=0" title="${esc(v.title)}" allowfullscreen loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <strong>${esc(v.title)}</strong>
      <div><a class="btn" style="margin-top:8px" href="${esc(v.youtube)}" target="_blank" rel="noopener">Open on YouTube</a></div>
    </div>`
  ).join('');
  return shellPage('Videos & Interviews', list + `
    <div class="card muted">
      Interviews (Off The Porch, On The Radar, etc.) — verify & add via Admin when ready.
      <div style="margin-top:8px"><a class="btn" href="https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA" target="_blank" rel="noopener">Official channel</a></div>
    </div>`, { lead: 'Music videos, interviews, BTS, exclusives.' });
}

export function renderLive() {
  return shellPage(
    'PIKK Live',
    `<div class="card">
      <h3>No creators live</h3>
      <p class="muted">Approved creators can livestream with chat, gifts, tips, and replays. Every stream shows PIKK branding and Follow DatBoiSkeet.</p>
      <p class="muted">Splits: gifts 80/20 · tips 90/10 (eligible net).</p>
      <button class="btn primary" disabled>Go live · Phase 3</button>
    </div>
    <div class="card"><a class="btn" href="#/giftbattles">Gift Battles</a>
      <a class="btn" href="#/multiguest">Multi-Guest</a>
      <a class="btn" href="#/spotlight">24/7 Spotlight</a></div>`,
    { lead: 'Creator livestreaming with moderation & earnings.', ...phase(3) }
  );
}

export function renderExplore() {
  return shellPage(
    'Explore',
    `<div class="card">
      <div class="field"><label>Search PIKK</label>
        <input id="exploreQ" placeholder="Creators, songs, posts, lives…" /></div>
      <button class="btn primary" id="exploreGo">Search</button>
      <p class="muted" id="exploreOut" style="margin-top:10px"></p>
    </div>
    <div class="card">
      <h3>Trending Across PIKK</h3>
      <p class="muted">High-engagement public posts surface here (spam filtered). Shell until engagement pipeline ships.</p>
      <div class="section-swipe">
        <a class="preview-card" href="#/posts"><strong>Posts</strong><span class="muted">Discover feed</span></a>
        <a class="preview-card" href="#/music"><strong>Music</strong><span class="muted">Coming Soon</span></a>
        <a class="preview-card" href="#/spotlight"><strong>Spotlight</strong><span class="muted">24/7 stage</span></a>
        <a class="preview-card" href="#/connect"><strong>Connect</strong><span class="muted">Random chat 18+</span></a>
      </div>
    </div>`,
    { lead: 'Universal search & discovery.', ...phase(2) }
  );
}

export function bindExplore(root) {
  root.querySelector('#exploreGo')?.addEventListener('click', () => {
    const q = root.querySelector('#exploreQ')?.value?.trim() || '';
    const out = root.querySelector('#exploreOut');
    if (out) out.textContent = q ? `Demo search for “${q}” — full index in Phase 2.` : 'Enter a query.';
  });
}

export function renderMarketplace() {
  return shellPage(
    'Marketplace',
    `<div class="card"><p class="muted">Businesses advertise via sponsored posts, lives, affiliates, and storefronts. Tracked purchases, disclosures, admin approval.</p>
     <p class="muted">Commission example: marketplace 85/15 · sponsored campaigns 80/20.</p>
     <button class="btn" disabled>Apply as Brand · Phase 3</button></div>`,
    { lead: 'Advertising & product promotions.', ...phase(3) }
  );
}

export function renderEarnings() {
  return shellPage(
    'Creator Earnings',
    `<div class="card"><p class="muted">Clipping, referrals, merch affiliates, subscriptions, gifts, tips — with transparent PIKK commissions.</p>
     <ul class="list-plain">
       <li><span>Live gifts</span><span>80% creator</span></li>
       <li><span>Tips</span><span>90% creator</span></li>
       <li><span>Subscriptions / exclusives</span><span>85% creator</span></li>
       <li><span>Sponsored</span><span>80% creator</span></li>
     </ul>
     <a class="btn" href="#/wallet">Open Wallet</a></div>`,
    { lead: 'Rewards, payouts & owner commissions.', ...phase(2) }
  );
}

export function renderMissions() {
  return shellPage(
    'Missions',
    `<div class="card"><p class="muted">Admin-created campaigns promoting songs, videos, lives, and the PIKK app. Budgets, deadlines, rankings, fraud checks.</p>
     <p class="muted">Optional 20% management fee on third-party-funded campaigns.</p>
     <button class="btn" disabled>No active missions</button></div>`,
    { lead: 'Promotional campaigns for Clippers & creators.', ...phase(2) }
  );
}

export function renderPricing() {
  const tiers = MEMBERSHIPS.map(
    (m) => `<li><span>${esc(m.name)}</span><strong>$${m.price}/mo</strong></li>`
  ).join('');
  return shellPage(
    'Pricing',
    `<div class="card"><h3>Memberships</h3><ul class="list-plain">${tiers}</ul></div>
     <div class="card"><h3>Music</h3>
       <ul class="list-plain">
         <li><span>Song</span><span>$0.99–$1.29</span></li>
         <li><span>EP</span><span>$4.99–$6.99</span></li>
         <li><span>Album</span><span>$9.99–$12.99</span></li>
       </ul>
       <p class="chip">TEST MODE · no charges</p>
     </div>`,
    { lead: 'Memberships, music, gifts, messaging — admin-adjustable.' }
  );
}

export function renderAdmin() {
  const { posts, clipperApps, user } = getState();
  return shellPage(
    'Admin',
    `<div class="card"><p class="muted">Local demo controls. Full auth & team roles ship later.</p>
      <p>Signed in as: <strong>${esc(user?.username || 'guest')}</strong></p></div>
     <div class="card"><h3>Posts (${posts.length})</h3>
       <ul class="list-plain">${posts
         .slice(0, 20)
         .map((p) => `<li><span>${esc(p.username)}: ${esc(p.text.slice(0, 40))}</span></li>`)
         .join('') || '<li class="muted">None</li>'}</ul></div>
     <div class="card"><h3>Clipper applications (${clipperApps.length})</h3>
       <ul class="list-plain">${clipperApps
         .map(
           (a) =>
             `<li><span>${esc(a.name)} · ${esc(a.email)}</span><span class="chip">${esc(a.status)}</span></li>`
         )
         .join('') || '<li class="muted">None</li>'}</ul></div>
     <div class="card muted">Revenue dashboard, moderation, missions, and payouts → Phase 2–3.</div>`,
    { lead: 'Music, Posts, Clippers, Live, Marketplace, finance.' }
  );
}

export function renderGuidelines() {
  return shellPage(
    'Community Guidelines',
    `<div class="card">
      <p>No harassment, hate, scams, spam, or prohibited content.</p>
      <ul class="list-plain">
        <li><span>1st–3rd</span><span>Warnings</span></li>
        <li><span>4th</span><span>30-day suspension</span></li>
        <li><span>5th</span><span>60-day suspension</span></li>
        <li><span>6th</span><span>1-year ban</span></li>
      </ul>
      <p class="muted">Serious violations may skip steps. Paid access is paused — not charged — while suspended.</p>
    </div>`,
    { lead: 'Rules, violations & suspensions.' }
  );
}

export function renderCommunity() {
  return shellPage(
    'PIKK Lounge',
    `<div class="card"><p class="muted">Premium music-first community — not a Discord clone.</p>
      <ul class="list-plain">
        <li><span>PIKK Lounge</span><span class="chip">Hub</span></li>
        <li><span>The Conversation</span><span class="chip">Public</span></li>
        <li><span>Listening Rooms</span><span class="chip">Parties</span></li>
        <li><span>Backstage Rooms</span><span class="chip">Members</span></li>
        <li><span>Live Rooms</span><span class="chip">Events</span></li>
        <li><span>The Spotlight</span><span class="chip">Featured</span></li>
      </ul>
      <button class="btn" disabled>Rooms · Phase 2</button></div>`,
    { lead: 'Community rooms & listening parties.', ...phase(2) }
  );
}

export function renderSignup() {
  return shellPage(
    'Signup & Creator Apps',
    `<div class="card">
      <p class="muted">Fans create a free account to follow, comment, join rooms, and apply for roles.</p>
      <a class="btn primary" href="#/profile">Sign in / create demo user</a>
    </div>
    <div class="card"><h3>Roles</h3>
      <ul class="list-plain">
        <li><span>Creator / Streamer</span><a href="#/live">Live</a></li>
        <li><span>Clipper</span><a href="#/clippers">Apply</a></li>
        <li><span>Brand / Advertiser</span><a href="#/marketplace">Marketplace</a></li>
        <li><span>Affiliate / Promoter</span><a href="#/refer">Refer</a></li>
        <li><span>Seller</span><a href="#/marketplace">Storefront</a></li>
      </ul>
    </div>`,
    { lead: 'Platform signup + role applications.' }
  );
}

export function renderMessages() {
  return shellPage(
    'Messages',
    `<div class="card"><p class="muted">DMs & group chats with privacy controls. Separate inbox for DatBoiSkeet / team (free inquiry or $2.99 priority).</p>
     <button class="btn" disabled>Inbox · Phase 2</button>
     <button class="btn ghost" disabled>Priority message · TEST MODE</button></div>`,
    { lead: 'Private messaging & team inbox.', ...phase(2) }
  );
}

export function renderShop() {
  return shellPage(
    'Profile Shop',
    `<div class="shop-concept"><img src="${import.meta.env.BASE_URL}design/DBS_Profile_Shop_Concept.png" alt="Profile Shop concept" /></div>
     <div class="card">
       <p class="muted">Digital cosmetics only (frames, effects, banners, name styles, badges). Separate from Foreign X-Change physical merch.</p>
       <p class="muted">Intro pricing targets $2.99–$14.99 · bundles $14.99–$24.99. Live preview before purchase.</p>
       <button class="btn primary" disabled>Browse items · coming soon</button>
     </div>`,
    { lead: 'Original PIKK digital cosmetics.', ...phase(2) }
  );
}

export function renderGiftBattles() {
  return shellPage(
    'Gift Battles',
    `<div class="card"><p class="muted">60-second viewer vs viewer gift battles during lives. Voluntary support — not wagers. Winner gets recognition, not the opponent's money.</p>
     <button class="btn" disabled>Requires Live · Phase 3</button></div>`,
    { lead: 'Live gift battles & champion spotlight.', ...phase(3) }
  );
}

export function renderNotifications() {
  const n = getState().notifications;
  return shellPage(
    'Notifications',
    `<div class="card" id="notifPrefs">
      <div class="toggle"><span>New releases</span><input type="checkbox" data-k="releases" ${n.releases ? 'checked' : ''}/></div>
      <div class="toggle"><span>Livestreams</span><input type="checkbox" data-k="lives" ${n.lives ? 'checked' : ''}/></div>
      <div class="toggle"><span>Messages</span><input type="checkbox" data-k="messages" ${n.messages ? 'checked' : ''}/></div>
      <div class="toggle"><span>Quiet hours</span><input type="checkbox" data-k="quietHours" ${n.quietHours ? 'checked' : ''}/></div>
      <p class="muted" style="margin-top:10px">Prefs saved on this device.</p>
    </div>`,
    { lead: 'In-app center & alert controls.' }
  );
}

export function bindNotifications(root) {
  root.querySelectorAll('#notifPrefs input').forEach((el) => {
    el.addEventListener('change', () => {
      setNotifPrefs({ [el.dataset.k]: el.checked });
      toast('Saved');
    });
  });
}

export function renderFanClubs() {
  return shellPage(
    'Fan Clubs',
    `<div class="card"><p class="muted">Approved creators host clubs inside PIKK Lounge with optional paid rooms. Keep PIKK branding prominent.</p>
     <button class="btn" disabled>Create club · Phase 3</button></div>`,
    { lead: 'Creator communities.', ...phase(3) }
  );
}

export function renderWallet() {
  const w = getState().wallet;
  return shellPage(
    'Wallet',
    `<div class="card">
      <h3>Demo balance</h3>
      <div style="font-size:32px;font-weight:900">$${Number(w.balance).toFixed(2)}</div>
      <p class="muted">Creators see gross, fees, eligible net, splits, holds, payout history. Fans' gift purchases stay separate from redeemable balances.</p>
      <button class="btn" id="walletDemo">Add $5 demo credit</button>
      <p class="chip">TEST MODE · not real money</p>
    </div>`,
    { lead: 'Earnings & payout center.', ...phase(2) }
  );
}

export function bindWallet(root) {
  root.querySelector('#walletDemo')?.addEventListener('click', () => {
    const s = getState();
    const balance = (s.wallet?.balance || 0) + 5;
    const history = [...(s.wallet?.history || []), { at: Date.now(), amount: 5, note: 'Demo credit' }];
    setState({ wallet: { balance, history } });
    toast('+$5 demo');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
}

export function renderLoyalty() {
  return shellPage(
    'Loyalty Club',
    `<div class="card"><p class="muted">Badges & recognition for listening, attending lives, and community help — not only spending. Day One, Top Fan, helpers.</p>
     <div class="row wrap"><span class="chip">Day One</span><span class="chip">Top Fan</span><span class="chip">Helper</span></div></div>`,
    { lead: 'Recognition beyond purchases.', ...phase(2) }
  );
}

export function renderMultiGuest() {
  return shellPage(
    'Multi-Guest Live',
    `<div class="card"><p class="muted">Hosts invite 2–4 guests with separate profiles, shared chat, and disclosed gift splits.</p>
     <button class="btn" disabled>Phase 3</button></div>`,
    { ...phase(3) }
  );
}

export function renderOpenMic() {
  return shellPage(
    'Open Mic',
    `<div class="card"><p class="muted">Opt-in talent showcase for rappers, singers, DJs, producers. Rights certification + admin approval. Distinct from pay-to-win rankings.</p>
     <button class="btn" disabled>Submit · Phase 3</button></div>`,
    { lead: 'Talent discovery.', ...phase(3) }
  );
}

export function renderLaunch() {
  const checks = [
    'Registration & role approval',
    'Moderation / reporting / appeals',
    'Payments & refunds (test)',
    'Creator payouts verification',
    'Music & video rights',
    'Gift-battle fraud prevention',
    'Livestream safety',
    'Background audio pause/resume',
    'Account recovery / 2FA option',
    'Loyalty analytics consent',
  ];
  return shellPage(
    'Launch Readiness',
    `<div class="card"><ul class="list-plain">${checks
      .map((c) => `<li><span>${esc(c)}</span><span class="chip">TODO</span></li>`)
      .join('')}</ul>
      <p class="muted">Fan onboarding + separate creator onboarding before public launch.</p></div>`,
    { lead: 'Pre-launch checklist (§31).' }
  );
}

export function renderShare() {
  return shellPage(
    'Share & Earn',
    `<div class="card"><p class="muted">24-hour social promo: post official PIKK ads with tracked links, keep live 24h, verify for badges / Skeet+ trials. Never ask for social passwords.</p>
     <button class="btn" disabled>Start challenge · Phase 2</button></div>`,
    { lead: 'Optional social promotion rewards.', ...phase(2) }
  );
}

export function renderRefer() {
  return shellPage(
    'Refer & Earn',
    `<div class="card"><p class="muted">Personal referral link. Rewards after verified active friends (3 distinct days in first week). Milestones up to Founder Promoter.</p>
     <input readonly value="https://dbs.app/r/demo" style="width:100%;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;margin:8px 0" />
     <button class="btn" id="copyRef">Copy demo link</button></div>`,
    { lead: 'Verified active friend rewards.', ...phase(2) }
  );
}

export function bindRefer(root) {
  root.querySelector('#copyRef')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('https://dbs.app/r/demo');
      toast('Copied');
    } catch {
      toast('Copy manually');
    }
  });
}

export function renderSpotlight() {
  return shellPage(
    '24/7 Spotlight',
    `<div class="card">
      <h3>Stage · offline demo</h3>
      <p class="muted">FIFO queue for songs, beats, videos, and 60s freestyles (max 3 min with Keep Going votes). Uploaded media must be approved before play.</p>
      <button class="btn primary" disabled>Join queue · Phase 3</button>
      <a class="btn" href="#/openmic">Open Mic</a>
    </div>`,
    { lead: 'Continuous music showcase & discovery.', ...phase(3) }
  );
}

export function renderConnect() {
  return shellPage(
    'PIKK Connect',
    `<div class="card">
      <p class="muted"><strong>18+ only.</strong> Opt-in random 1:1 video chat. Explicit consent, Next/End/Mute/Camera/Report/Block. Not a replacement for Live, Spotlight, or Messages.</p>
      <p class="muted">Do not launch without age assurance, moderation, and WebRTC safety.</p>
      <button class="btn primary" disabled>Start matching · Phase 3</button>
    </div>`,
    { lead: 'Random video discovery (Monkey-style).', ...phase(3) }
  );
}

export function renderNotFound(path) {
  return shellPage('Not found', `<div class="card"><p>No page for <code>${esc(path)}</code>.</p><a class="btn" href="#/home">Home</a></div>`);
}
