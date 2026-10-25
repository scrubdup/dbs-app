import { getState, setState, setNotifPrefs, listCatalog } from '../store.js';
import { resolveMediaSrc } from '../media-db.js';
import { VIDEOS, VIDEO_COMING_SOON, MEMBERSHIPS } from '../data.js';
import { esc, shellPage, toast } from '../ui.js';

function phase(n) {
  return { badge: `Phase ${n} shell` };
}

function videoCard(v) {
  return `
    <article class="card">
      <div class="hero-video" style="margin:0 0 10px">
        <iframe src="${esc(v.embed)}?rel=0" title="${esc(v.title)}" allowfullscreen loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <span class="chip">${esc(v.category || 'Music Videos')}</span>
      <h3 style="margin:8px 0 4px">${esc(v.title)}</h3>
      <p class="muted" style="margin:0 0 8px">${esc(v.artist || 'DatBoiSkeet')}</p>
      <div class="row wrap">
        <a class="btn" href="${esc(v.youtube)}" target="_blank" rel="noopener">Open on YouTube</a>
        <button class="btn ghost video-share" data-url="${esc(v.youtube)}" data-title="${esc(v.title)}">Share link</button>
      </div>
    </article>`;
}

export function renderVideos() {
  const order = ['Music Videos', 'Mixes', 'Interviews'];
  const grouped = {};
  VIDEOS.forEach((v) => {
    const cat = v.category || 'Music Videos';
    (grouped[cat] ||= []).push(v);
  });
  const sections = order
    .filter((cat) => grouped[cat]?.length)
    .map((cat) => {
      const cards = grouped[cat].map(videoCard).join('');
      return `<h3 style="margin:16px 0 8px">${esc(cat)}</h3>${cards}`;
    })
    .join('');
  // any unexpected categories
  const extra = Object.keys(grouped)
    .filter((c) => !order.includes(c))
    .map((cat) => `<h3 style="margin:16px 0 8px">${esc(cat)}</h3>${grouped[cat].map(videoCard).join('')}`)
    .join('');

  const adminVids = listCatalog({ publishedOnly: true, types: ['video'] });
  const adminHtml = adminVids
    .map((c) => {
      const yt = c.youtube || '';
      const emb = c.embed || '';
      if (emb || yt) {
        const embedSrc = emb || '';
        return `<article class="card catalog-admin-video" data-id="${esc(c.id)}">
          ${embedSrc ? `<div class="hero-video" style="margin:0 0 10px"><iframe src="${esc(embedSrc)}?rel=0" title="${esc(c.title)}" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>` : ''}
          <span class="chip">Admin</span>
          <h3 style="margin:8px 0 4px">${esc(c.title)}</h3>
          <p class="muted">${esc(c.artist)}</p>
          ${yt ? `<a class="btn" href="${esc(yt)}" target="_blank" rel="noopener">Open on YouTube</a>` : ''}
        </article>`;
      }
      return `<article class="card catalog-admin-video" data-id="${esc(c.id)}">
        <span class="chip">Admin · uploaded</span>
        <h3 style="margin:8px 0 4px">${esc(c.title)}</h3>
        <p class="muted">${esc(c.artist)}</p>
        ${c.coverRef ? `<img data-idb-src="${esc(c.coverRef.startsWith('idb:') ? c.coverRef : '')}" src="${esc(c.coverRef.startsWith('idb:') ? '' : c.coverRef)}" alt="" class="catalog-cover" style="width:100%;max-height:220px;object-fit:cover;border-radius:12px;margin:8px 0" />` : ''}
        ${c.mediaRef ? `<video class="catalog-video" data-idb-src="${esc(c.mediaRef.startsWith('idb:') ? c.mediaRef : '')}" src="${esc(c.mediaRef.startsWith('idb:') ? '' : c.mediaRef)}" controls playsinline webkit-playsinline preload="metadata" style="width:100%;border-radius:12px;background:#000"></video>` : '<p class="muted">No media file</p>'}
      </article>`;
    })
    .join('');

  const byCat = {};
  VIDEO_COMING_SOON.forEach((item) => {
    (byCat[item.category] ||= []).push(item);
  });
  const coming = Object.entries(byCat)
    .map(
      ([cat, items]) => `
      <div class="card">
        <h3>${esc(cat)}</h3>
        <p class="muted" style="margin:0 0 8px">No verified URLs in repo yet — titles from plan §9 only. No invented view counts.</p>
        <ul class="list-plain">${items
          .map((i) => `<li><span>${esc(i.title)}</span><span class="chip">Coming Soon</span></li>`)
          .join('')}</ul>
      </div>`
    )
    .join('');

  return shellPage(
    'Videos & Interviews',
    `<div class="card"><p class="muted" style="margin:0">Official DatBoiSkeet music videos, mixes, and interviews — YouTube embeds from the original source. No rehosted files.</p>
      <div class="row wrap" style="margin-top:8px;gap:8px">
        <a class="btn" href="https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA" target="_blank" rel="noopener">Official YouTube channel</a>
        <a class="btn ghost" href="https://www.youtube.com/@DatBoiSkeet1" target="_blank" rel="noopener">@DatBoiSkeet1</a>
        <a class="btn ghost" href="https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t" target="_blank" rel="noopener">Music Videos playlist</a>
      </div>
    </div>
    ${sections}${extra}
    ${adminHtml ? `<h3 style="margin:16px 0 8px">From Admin</h3>${adminHtml}` : ''}
    ${coming}`,
    { lead: 'Official MVs · Mixes · Interviews · admin uploads.' }
  );
}

export function bindVideos(root) {
  root.querySelectorAll('.video-share').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const url = btn.dataset.url || '';
      try {
        await navigator.clipboard.writeText(url);
        toast('Link copied');
      } catch {
        toast(url || 'Copy failed');
      }
    });
  });
  // Hydrate IndexedDB media refs so uploaded <video controls playsinline> actually plays
  root.querySelectorAll('[data-idb-src]').forEach(async (el) => {
    const ref = (el.getAttribute('data-idb-src') || '').trim();
    if (!ref) return;
    try {
      const src = await resolveMediaSrc(ref);
      if (!src) {
        if (el.tagName === 'VIDEO') {
          el.insertAdjacentHTML(
            'afterend',
            '<p class="muted" style="font-size:12px">Media blob missing — re-upload from Admin.</p>'
          );
        }
        return;
      }
      if (el.tagName === 'IMG' || el.tagName === 'VIDEO' || el.tagName === 'AUDIO') {
        el.setAttribute('src', src);
        el.src = src;
        if (el.tagName === 'VIDEO' || el.tagName === 'AUDIO') {
          el.setAttribute('playsinline', '');
          el.setAttribute('webkit-playsinline', '');
          el.controls = true;
          try { el.load(); } catch (_) {}
        }
      }
    } catch (err) {
      console.warn('idb media hydrate failed', ref, err);
    }
  });
}

/** Live/Marketplace/Explore owned by dedicated page modules — stubs kept out of route table. */

export function renderMarketplace() {
  return shellPage(
    'Marketplace',
    `<div class="card"><p class="muted">Businesses advertise via sponsored posts, lives, affiliates, and storefronts. Tracked purchases, disclosures, admin approval.</p>
     <p class="muted">Commission example: marketplace 85/15 · sponsored campaigns 80/20.</p>
     <button class="btn" disabled>Apply as Brand · Phase 3</button></div>`,
    { lead: 'Advertising & product promotions.', ...phase(3) }
  );
}

export { renderEarnings, bindEarnings } from './earnings.js';

export { renderMissions, bindMissions } from './missions.js';

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
      <p class="kicker">DBS Network</p>
      <h2 style="margin:0 0 8px">Respect the house</h2>
      <p>All users follow DatBoiSkeet Community Guidelines when posting, commenting, chatting, livestreaming, or joining DBS Lounge rooms. This is a premium, music-first entertainment network — keep it safe for fans, creators, and the artist.</p>
      <p class="muted" style="margin:8px 0 0">Enforcement UI in this demo is illustrative. Warnings, suspensions, and appeals will run through Admin review before public launch.</p>
    </div>

    <div class="card">
      <h3>Violations</h3>
      <p class="muted" style="margin:0 0 8px">Actions that break DBS rules include:</p>
      <ul class="list-plain">
        <li><span>Harassment, bullying, or threats</span><span class="chip">Ban-risk</span></li>
        <li><span>Hate speech or targeted abuse</span><span class="chip">Ban-risk</span></li>
        <li><span>Scams, phishing, or fraud</span><span class="chip">Ban-risk</span></li>
        <li><span>Spam or deceptive promotion</span><span class="chip">Warn</span></li>
        <li><span>Prohibited / illegal content</span><span class="chip">Ban-risk</span></li>
      </ul>
    </div>

    <div class="card">
      <h3>Penalties</h3>
      <ul class="list-plain">
        <li><span>1st violation</span><span>First warning</span></li>
        <li><span>2nd violation</span><span>Second warning</span></li>
        <li><span>3rd violation</span><span>Final warning</span></li>
        <li><span>4th violation</span><span>30-day suspension</span></li>
        <li><span>5th violation</span><span>60-day suspension</span></li>
        <li><span>6th violation</span><span>One-year account ban</span></li>
      </ul>
      <p class="muted" style="margin:10px 0 0">Serious violations may skip steps — immediate suspension or permanent removal when needed.</p>
    </div>

    <div class="card">
      <h3>Subscriptions while suspended</h3>
      <p>DBS does <strong>not</strong> keep charging for paid access you cannot use. Eligible direct-billed recurring charges pause while access is blocked. Where an app store cannot pause billing, cancellation and appropriate credit/refund handling apply. <strong>Cancellation is never obstructed.</strong></p>
      <p class="muted" style="margin:8px 0 0">Billing disclosures belong in Terms + these Guidelines before launch. This page is demo copy only — no real charges in TEST MODE.</p>
    </div>

    <div class="card">
      <h3>Appeals &amp; admin review</h3>
      <p class="muted" style="margin:0">Admins can track warnings, issue penalties, review appeals, override actions, record suspension dates, and restore eligible accounts. Report tools and a full appeals inbox ship with Phase 2 safety work — until then, treat this as published policy copy for the demo SPA.</p>
      <p class="chip" style="margin-top:10px">Demo enforcement · not live moderation</p>
    </div>`,
    { lead: 'Rules for posts, chat, Live & Lounge — plan §13.' }
  );
}

export function renderCommunity() {
  return shellPage(
    'DBS Lounge',
    `<div class="card">
      <p class="kicker">Artist-owned network</p>
      <h2 style="margin:0 0 8px">Where the culture gathers</h2>
      <p>DBS Lounge is DatBoiSkeet’s premium community — announcements, listening parties, and fan conversations under one silver/dark brand. Built as an artist-owned entertainment network, not a Discord lookalike.</p>
      <p class="muted" style="margin:8px 0 0">Room cards below preview the redesign. Live chat, member counts, and real-time presence unlock in Phase 2 — nothing here invents active users or fake chats.</p>
    </div>

    <div class="card">
      <p class="kicker">Rooms</p>
      <h3 style="margin:0 0 10px">Lounge map</h3>
      <ul class="list-plain lounge-list">
        <li><span><strong>DBS Lounge</strong><br/><span class="muted" style="font-size:12px">Main hub · official announcements &amp; network news</span></span><span class="chip">Hub</span></li>
        <li><span><strong>The Conversation</strong><br/><span class="muted" style="font-size:12px">Public music &amp; fan discussion threads</span></span><span class="chip">Public</span></li>
        <li><span><strong>Listening Rooms</strong><br/><span class="muted" style="font-size:12px">Listening parties &amp; reactions to new releases</span></span><span class="chip">Parties</span></li>
        <li><span><strong>Backstage Rooms</strong><br/><span class="muted" style="font-size:12px">Tier-restricted spaces for Skeet+ / Backstage / Inner Circle</span></span><span class="chip">Members</span></li>
        <li><span><strong>Live Rooms</strong><br/><span class="muted" style="font-size:12px">Scheduled community events &amp; discussions</span></span><span class="chip">Events</span></li>
        <li><span><strong>The Spotlight</strong><br/><span class="muted" style="font-size:12px">Featured fan conversations &amp; creator posts</span></span><span class="chip">Featured</span></li>
      </ul>
      <button class="btn" disabled>Rooms · Phase 2</button>
      <p class="chip" style="margin-top:10px">Moderation + reporting follow Community Guidelines (§13)</p>
    </div>`,
    { lead: 'DBS Lounge · listening parties · music-first rooms.', ...phase(2) }
  );
}

export function renderSignup() {
  return shellPage(
    'Signup & Creator Apps',
    `<div class="card">
      <p class="kicker">Join DBS</p>
      <h2 style="margin:0 0 8px">Fan account first</h2>
      <p>Everyone creates a DatBoiSkeet account to participate — follow, comment, save, join Lounge rooms, buy memberships, message the team, or apply to earn. Visitors can browse public promo pages; signing up unlocks the network.</p>
      <p class="muted" style="margin:8px 0 12px"><strong>Basic fan signup is free</strong> — no manual approval. This demo uses local Profile sign-in (TEST MODE · no real email/auth yet).</p>
      <a class="btn primary" href="#/profile">Sign in / create demo user</a>
      <a class="btn ghost" href="#/guidelines" style="margin-left:8px">Read Guidelines</a>
    </div>

    <div class="card">
      <h3>Apply for a role</h3>
      <p class="muted" style="margin:0 0 10px">From Profile → Become a Creator, request one or more roles. Each has its own application — no automatic access to earning tools.</p>
      <ul class="list-plain">
        <li><span><strong>Creator / Streamer</strong><br/><span class="muted" style="font-size:12px">Profile, socials, livestream plan · DBS branding &amp; moderation</span></span><a href="#/live">Live</a></li>
        <li><span><strong>Clipper</strong><br/><span class="muted" style="font-size:12px">Work samples &amp; analytics · paid promo campaigns</span></span><a href="#/clippers">Apply</a></li>
        <li><span><strong>Brand / Advertiser</strong><br/><span class="muted" style="font-size:12px">Business identity, campaigns &amp; disclosures</span></span><a href="#/marketplace">Marketplace</a></li>
        <li><span><strong>Affiliate / Promoter</strong><br/><span class="muted" style="font-size:12px">Referral &amp; campaign promotion plan</span></span><a href="#/refer">Refer</a></li>
        <li><span><strong>Seller</strong><br/><span class="muted" style="font-size:12px">Storefront details, fulfillment &amp; verification</span></span><a href="#/marketplace">Storefront</a></li>
      </ul>
    </div>

    <div class="card">
      <h3>Approval flow</h3>
      <p class="muted" style="margin:0">Register → select role → submit → admin reviews → approve / reject / waitlist → notify → unlock role tools. Earnings need identity/tax/payout checks before payouts. All roles stay under Community Guidelines.</p>
      <p class="chip" style="margin-top:10px">TEST MODE · local demo user on Profile</p>
    </div>`,
    { lead: 'Free fan signup + creator role applications · §16.' }
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

export function bindShop() {}

export function renderShop() {
  return shellPage(
    'Profile Shop',
    `<div class="shop-concept"><img src="/design/DBS_Profile_Shop_Concept.png" alt="Profile Shop concept" /></div>
     <div class="card">
       <p class="muted">Digital cosmetics only (frames, effects, banners, name styles, badges). Separate from Foreign X-Change physical merch.</p>
       <p class="muted">Intro pricing targets $2.99–$14.99 · bundles $14.99–$24.99. Live preview before purchase.</p>
       <button class="btn primary" disabled>Browse items · coming soon</button>
     </div>`,
    { lead: 'Original DBS digital cosmetics.', ...phase(2) }
  );
}

/** §23 Gift Battles moved to pages/giftbattles.js */
export { renderGiftBattles, bindGiftBattles } from './giftbattles.js';

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

/** §26 Fan Clubs moved to pages/fanclubs.js */

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

/** §28 Loyalty moved to pages/loyalty.js */

/** §29 Multi-Guest Livestreams moved to pages/multiguest.js */
export { renderMultiGuest, bindMultiGuest } from './multiguest.js';

/** §30 Open Mic moved to pages/openmic.js */

export function renderLaunch() {
  // Honest chips from STATUS.md (2026-10-25) — never claim whole section DONE
  const checks = [
    { label: 'Registration & role approval', status: 'Demo', note: 'Profile/signup local demo · real auth later' },
    { label: 'Moderation / reporting / appeals', status: 'TODO', note: 'Guidelines copy ready · enforcement UI Phase 2' },
    { label: 'Payments & refunds', status: 'TEST', note: 'TEST MODE only · no real charges' },
    { label: 'Creator payouts verification', status: 'SHELL', note: 'Wallet / KYC stubs · not launch-ready' },
    { label: 'Music & video rights', status: 'Partial', note: '3 official MVs · streaming links still SHELL' },
    { label: 'Gift-battle fraud prevention', status: 'SHELL', note: 'Gift Battles not wired for launch' },
    { label: 'Livestream safety', status: 'Demo', note: 'Go-live demo PASS · age/safety stack incomplete' },
    { label: 'Background audio pause/resume', status: 'SHELL', note: '§17 mini-player UI-only until authorized audio' },
    { label: 'Account recovery / optional 2FA', status: 'TODO', note: 'Local demo sign-in only' },
    { label: 'Loyalty analytics consent', status: 'SHELL', note: 'Privacy/consent controls before launch' },
    { label: 'DBS Connect safety (age + WebRTC)', status: 'Blocked', note: 'Must not launch without assurance' },
  ];
  const rows = checks
    .map(
      (c) =>
        `<li><span><strong>${esc(c.label)}</strong><br/><span class="muted" style="font-size:12px">${esc(c.note)}</span></span><span class="chip">${esc(c.status)}</span></li>`
    )
    .join('');
  return shellPage(
    'Launch Readiness',
    `<div class="card">
      <p class="kicker">Before public launch</p>
      <h2 style="margin:0 0 8px">Checklist · plan §31</h2>
      <p class="muted" style="margin:0 0 12px">Statuses mirror current STATUS.md — Content Polish owns copy here; Progress Checker owns any DONE claim. This page stays a SHELL until Checker PASSes.</p>
      <ul class="list-plain">${rows}</ul>
    </div>

    <div class="card">
      <h3>Fan onboarding</h3>
      <p class="muted" style="margin:0">Show new fans how to discover DatBoiSkeet music &amp; MVs, follow the official profile, post respectfully, listen via Music/Vault Coming Soon covers, shop Foreign X-Change externally, and join DBS Lounge when rooms go live. Keep TEST MODE honesty until real auth ships.</p>
    </div>

    <div class="card">
      <h3>Creator onboarding</h3>
      <p class="muted" style="margin:0">Separate path: apply for Creator / Clipper / Brand / Affiliate / Seller → admin review → unlock tools → complete identity, age, tax, and payout verification before earnings. Tie every role to Community Guidelines and suspension policy.</p>
      <p class="chip" style="margin-top:10px">Phased rollout · measure cost &amp; performance</p>
    </div>`,
    { lead: 'Pre-launch checklist with honest demo status · §31.' }
  );
}

export {
  renderShare,
  bindShare,
  renderRefer,
  bindRefer,
  renderRewards,
  bindRewards,
} from './rewards.js';

/** §35 24/7 Spotlight moved to pages/spotlight.js */
export { renderSpotlight, bindSpotlight } from './spotlight.js';

/** §36 DBS Connect moved to pages/connect.js */
export { renderConnect, bindConnect } from './connect.js';

export function renderNotFound(path) {
  return shellPage('Not found', `<div class="card"><p>No page for <code>${esc(path)}</code>.</p><a class="btn" href="#/home">Home</a></div>`);
}
