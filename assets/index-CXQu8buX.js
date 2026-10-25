(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const N="/pikk-app/",m=e=>N+e,y=[{id:"dirty-money",title:"Dirty Money ft. Lil Baby",youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI",embed:"https://www.youtube.com/embed/-rHDLWfiuDI"},{id:"93",title:"93 ft. DaBaby",youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0",embed:"https://www.youtube.com/embed/zC0BYFxs5W0"},{id:"no-love",title:"No Love ft. YFN Lucci",youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8",embed:"https://www.youtube.com/embed/6pCVEIE9pB8"}],w=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:m("music/01_Long_Story_Short_Coming_Soon.jpg"),status:"Coming Soon",order:1},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:m("music/02_Ladies_Only_Coming_Soon.jpg"),status:"Coming Soon",order:2}],_=[{id:"hat-716-orange",name:"716 Buffalo Braves Snapback (Black/Orange)",price:30,category:"Hats",image:m("merch/01_black_orange_716_hat.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"hat-716-blue",name:"716 Buffalo Hat (Blue/Red)",price:30,category:"Hats",image:m("merch/02_blue_red_716_hat.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"jacket-blue",name:"Buffalo Sports Varsity Jacket (Blue/White)",price:200,category:"Jackets",image:m("merch/03_blue_buffalo_jacket.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"jacket-black",name:"Foreign X-Change Buffalo Varsity (Black/White)",price:200,category:"Jackets",image:m("merch/07_black_buffalo_jacket.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"tee-fx-back",name:"Foreign X-Change Graphic Tee (Back)",price:65,category:"Shirts",image:m("merch/04_black_fx_tee_back_screenshot.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"tee-fx-front",name:"Foreign X-Change Text Tee (Front)",price:65,category:"Shirts",image:m("merch/05_black_fx_tee_front_screenshot.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"tee-ptsd",name:"PTSD Tee (Black)",price:65,category:"Shirts",image:m("merch/06_black_ptsd_tee.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"tee-abstract",name:"Abstract FX Tee (White)",price:65,category:"Shirts",image:m("merch/08_white_abstract_fx_tee.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"tee-dealer",name:"Support Your Local Dealer Tee (Navy)",price:65,category:"Shirts",image:m("merch/09_navy_dealer_tee.jpeg"),shopUrl:"https://foreignx-change.com"},{id:"tee-skulls",name:"Skulls FX Tee (White)",price:65,category:"Shirts",image:m("merch/10_white_skulls_tee.jpeg"),shopUrl:"https://foreignx-change.com"}],I=[{id:"skeet",name:"Skeet+",price:3.99,blurb:"Early releases, basic Vault"},{id:"backstage",name:"Backstage",price:7.99,blurb:"More Vault, studio lives, listening sessions"},{id:"inner",name:"Inner Circle",price:14.99,blurb:"VIP content, private Q&As, exclusive drops"}],T=[{route:"/music",title:"Music",blurb:"Releases, Coming Soon, Vault"},{route:"/videos",title:"Videos",blurb:"Official music videos & interviews"},{route:"/posts",title:"Posts",blurb:"Photos, clips, conversations"},{route:"/live",title:"Live",blurb:"Creators live now"},{route:"/community",title:"PIKK Lounge",blurb:"Community rooms"},{route:"/vault",title:"Vault",blurb:"Member exclusives"},{route:"/marketplace",title:"Marketplace",blurb:"Sponsored offers"},{route:"/missions",title:"Missions",blurb:"Clipper campaigns"}],O=[{href:"#/home",label:"Home"},{href:"#/posts",label:"Posts"},{href:"#/music",label:"Music & Vault"},{href:"#/videos",label:"Videos"},{href:"#/merch",label:"Foreign X-Change Merch"},{href:"#/live",label:"Live"},{href:"#/explore",label:"Explore"},{href:"#/spotlight",label:"24/7 Spotlight"},{href:"#/connect",label:"Connect"},{href:"#/clippers",label:"Clippers Apply"},{href:"#/marketplace",label:"Marketplace"},{href:"#/missions",label:"Missions"},{href:"#/messages",label:"Messages"},{href:"#/shop",label:"Profile Shop"},{href:"#/wallet",label:"Wallet"},{href:"#/earnings",label:"Creator Earnings"},{href:"#/loyalty",label:"Loyalty Club"},{href:"#/fanclubs",label:"Fan Clubs"},{href:"#/community",label:"PIKK Lounge"},{href:"#/openmic",label:"Open Mic"},{href:"#/share",label:"Share & Earn"},{href:"#/refer",label:"Refer & Earn"},{href:"#/giftbattles",label:"Gift Battles"},{href:"#/multiguest",label:"Multi-Guest Live"},{href:"#/notifications",label:"Notifications"},{href:"#/pricing",label:"Pricing"},{href:"#/signup",label:"Signup / Creator Apps"},{href:"#/guidelines",label:"Community Guidelines"},{href:"#/admin",label:"Admin"},{href:"#/launch",label:"Launch Readiness"},{href:"#/profile",label:"Profile"}],q=[{href:"#/home",label:"Home",icon:"home"},{href:"#/posts",label:"Posts",icon:"posts"},{href:"#/music",label:"Music",icon:"music"},{href:"#/merch",label:"Merch",icon:"merch"},{href:"#/explore",label:"Explore",icon:"explore"},{href:"#/live",label:"Live",icon:"live"},{href:"#/profile",label:"Profile",icon:"profile"}],A="dbs_v1",k=()=>({user:null,posts:[],comments:{},likes:{},clipperApps:[],notifications:{releases:!0,lives:!0,messages:!0,quietHours:!1},wallet:{balance:0,history:[]},splashSeenAt:0});function R(){try{const e=localStorage.getItem(A);return e?{...k(),...JSON.parse(e)}:k()}catch{return k()}}function g(e){localStorage.setItem(A,JSON.stringify(e))}let r=R();function f(){return r}function F(e){return r={...r,...e},g(r),r}function j(){if(r.posts.length)return;const e=[{id:"p1",userId:"dbs",username:"DatBoiSkeet",text:"Long Story Short — Coming Soon. Stay ready.",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",at:Date.now()-864e5*2},{id:"p2",userId:"dbs",username:"DatBoiSkeet",text:"Foreign X-Change drop live. Shop hats, tees & jackets.",image:"/merch/01_black_orange_716_hat.jpeg",at:Date.now()-864e5}];r={...r,posts:e,likes:{p1:[],p2:[]},comments:{p1:[],p2:[]}},g(r)}function K(e){const t=(e||"Fan").trim().slice(0,24)||"Fan",a={id:"u_"+t.toLowerCase().replace(/\W+/g,"_")+"_"+Date.now().toString(36),username:t,bio:"DBS fan · demo account",avatar:"",followers:[],following:["dbs"],createdAt:Date.now()};return r={...r,user:a},g(r),a}function H(){r={...r,user:null},g(r)}function V({text:e,image:t}){const s=r.user;if(!s)throw new Error("Sign in required");const a="p_"+Date.now().toString(36),n={id:a,userId:s.id,username:s.username,text:(e||"").trim(),image:(t||"").trim(),at:Date.now()};return r={...r,posts:[n,...r.posts],likes:{...r.likes,[a]:[]},comments:{...r.comments,[a]:[]}},g(r),n}function U(e){const t=r.user;if(!t)return{error:"signin"};const s=new Set(r.likes[e]||[]);return s.has(t.id)?s.delete(t.id):s.add(t.id),r={...r,likes:{...r.likes,[e]:[...s]}},g(r),{count:s.size,liked:s.has(t.id)}}function W(e,t){const s=r.user;if(!s)return{error:"signin"};const a={id:"c_"+Date.now().toString(36),userId:s.id,username:s.username,text:t.trim(),at:Date.now()},n=r.comments[e]||[];return r={...r,comments:{...r.comments,[e]:[...n,a]}},g(r),a}function G(e){const t=r.user;if(!t)return{error:"signin"};if(t.following.includes(e))return t;const s={...t,following:[...t.following,e]};return r={...r,user:s},g(r),s}function z(e){const t={id:"clip_"+Date.now().toString(36),...e,status:"pending",at:Date.now()};return r={...r,clipperApps:[t,...r.clipperApps]},g(r),t}function X(e){r={...r,notifications:{...r.notifications,...e}},g(r)}function Y(){r={...r,splashSeenAt:Date.now()},g(r)}const x=new Set;function J(){const e=location.hash.replace(/^#/,"")||"/home",t=e.startsWith("/")?e:"/"+e,[s,a=""]=t.split("?"),n=s.split("/").filter(Boolean);return{path:"/"+(n[0]||"home"),parts:n,query:Object.fromEntries(new URLSearchParams(a)),raw:t}}function Q(e){return x.add(e),()=>x.delete(e)}function Z(){const e=()=>x.forEach(t=>t(J()));window.addEventListener("hashchange",e),location.hash?e():location.hash="/home"}let B;function u(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"),clearTimeout(B),B=setTimeout(()=>t.classList.remove("show"),2400))}function i(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function D(e){const t=Math.max(0,Math.floor((Date.now()-e)/1e3));if(t<60)return t+"s";const s=Math.floor(t/60);if(s<60)return s+"m";const a=Math.floor(s/60);return a<24?a+"h":Math.floor(a/24)+"d"}function l(e,t,s={}){const a=s.badge?`<span class="badge-phase">${i(s.badge)}</span>`:"",n=s.lead?`<p class="lead">${s.lead}</p>`:"";return`
    <section class="page">
      <header class="page-head">
        <h1>${i(e)} ${a}</h1>
        ${n}
      </header>
      ${t}
    </section>
  `}const ee={home:'<svg viewBox="0 0 24 24"><path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',posts:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',music:'<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',merch:'<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8zm3-3a3 3 0 0 1 6 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',explore:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',live:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".5"/></svg>',profile:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 19a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'};function te(){const e=y[0],t=T.map(o=>`
    <a class="preview-card" href="#${o.route}">
      <strong>${i(o.title)}</strong>
      <span class="muted">${i(o.blurb)}</span>
    </a>`).join(""),s=w.map(o=>`
    <a class="cover-card" href="#/music">
      <span class="badge-cs">${i(o.status)}</span>
      <img src="${i(o.cover)}" alt="${i(o.title)}" />
      <div class="t">${i(o.title)}</div>
    </a>`).join(""),a=y.map(o=>`
    <div class="vid">
      <div class="thumb">▶</div>
      <div>
        <strong>${i(o.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">
          <a href="${i(o.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a>
        </div>
      </div>
    </div>`).join(""),n=`
    <div class="hero-video">
      <iframe
        src="${i(e.embed)}?rel=0"
        title="${i(e.title)}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"></iframe>
    </div>
    <p class="muted" style="margin-top:-6px;margin-bottom:14px;font-size:12px">Featured: ${i(e.title)}</p>

    <h2 style="margin:0 0 8px;font-size:15px">Coming Soon</h2>
    <div class="cover-row" style="margin-bottom:16px">${s}</div>

    <h2 style="margin:0 0 8px;font-size:15px">Explore PIKK</h2>
    <div class="section-swipe" style="margin-bottom:16px">${t}</div>

    <div class="card">
      <h3>Live activity</h3>
      <ul class="list-plain">
        <li><span>DatBoiSkeet posted a new drop teaser</span><span class="chip">Posts</span></li>
        <li><span>Foreign X-Change merch featured</span><span class="chip">Merch</span></li>
        <li><span>No creators live — check back soon</span><span class="chip">Live</span></li>
      </ul>
    </div>

    <div class="card video-list">
      <h3>Official music videos</h3>
      ${a}
      <a class="btn ghost block" href="#/videos" style="margin-top:10px">All videos</a>
    </div>
  `;return l("Home",n)}function se(){const{posts:e,likes:t,comments:s,user:a}=f(),n=a?`
    <div class="card" id="composer">
      <h3>Create a post</h3>
      <div class="field"><label>What's happening</label>
        <textarea id="postText" placeholder="Share with DBS…"></textarea></div>
      <div class="field"><label>Image URL (optional)</label>
        <input id="postImg" placeholder="https://… or /music/…" /></div>
      <button class="btn primary" id="postSubmit">Post</button>
    </div>`:`<div class="card"><p class="muted">Sign in from Profile to post, like, and comment.</p>
       <a class="btn primary" href="#/profile">Sign in</a></div>`,o=e.map(c=>{const h=t[c.id]||[],d=a&&h.includes(a.id),v=s[c.id]||[];return`
      <article class="post" data-id="${i(c.id)}">
        <div class="meta">
          <div class="avatar">${i((c.username||"?")[0].toUpperCase())}</div>
          <div class="spacer">
            <div class="who">${i(c.username)}</div>
            <div class="when">${D(c.at)}</div>
          </div>
          ${a&&c.userId!==a.id?`<button class="btn ghost follow-btn" data-uid="${i(c.userId)}">Follow</button>`:""}
        </div>
        <p class="body-text">${i(c.text)}</p>
        ${c.image?`<img class="media" src="${i(c.image)}" alt="" />`:""}
        <div class="post-actions">
          <button class="btn like-btn ${d?"primary":""}" data-id="${i(c.id)}">
            ♥ ${h.length}
          </button>
          <button class="btn ghost comment-toggle" data-id="${i(c.id)}">💬 ${v.length}</button>
        </div>
        <div class="comments" id="c-${i(c.id)}" hidden>
          ${v.map(b=>`<div class="comment"><b>${i(b.username)}</b> ${i(b.text)}</div>`).join("")||'<div class="muted">No comments yet</div>'}
          ${a?`<div class="row" style="margin-top:8px">
                  <input class="c-input" data-id="${i(c.id)}" placeholder="Add a comment…" style="flex:1;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:8px 10px" />
                  <button class="btn primary c-send" data-id="${i(c.id)}">Send</button>
                </div>`:""}
        </div>
      </article>`}).join("");return l("Posts",n+(o||'<div class="card muted">No posts yet.</div>'),{lead:"Photos, clips, and conversations across DBS."})}function ae(e){var t;(t=e.querySelector("#postSubmit"))==null||t.addEventListener("click",()=>{var s,a;try{V({text:(s=e.querySelector("#postText"))==null?void 0:s.value,image:(a=e.querySelector("#postImg"))==null?void 0:a.value}),u("Posted"),location.hash="/posts",window.dispatchEvent(new HashChangeEvent("hashchange"))}catch(n){u(n.message||"Could not post")}}),e.querySelectorAll(".like-btn").forEach(s=>{s.addEventListener("click",()=>{if(U(s.dataset.id).error)return u("Sign in to like");window.dispatchEvent(new HashChangeEvent("hashchange"))})}),e.querySelectorAll(".comment-toggle").forEach(s=>{s.addEventListener("click",()=>{const a=e.querySelector("#c-"+s.dataset.id);a&&(a.hidden=!a.hidden)})}),e.querySelectorAll(".c-send").forEach(s=>{s.addEventListener("click",()=>{var h;const a=s.dataset.id,n=e.querySelector(`.c-input[data-id="${a}"]`),o=(h=n==null?void 0:n.value)==null?void 0:h.trim();if(!o)return;if(W(a,o).error)return u("Sign in to comment");u("Comment added"),window.dispatchEvent(new HashChangeEvent("hashchange"))})}),e.querySelectorAll(".follow-btn").forEach(s=>{s.addEventListener("click",()=>{if(G(s.dataset.uid).error)return u("Sign in to follow");u("Following"),s.textContent="Following",s.disabled=!0})})}function M(){const e=w.map(a=>`
    <div class="cover-card" style="flex:0 0 160px">
      <span class="badge-cs">${i(a.status)}</span>
      <img src="${i(a.cover)}" alt="${i(a.title)}" style="width:160px;height:160px" />
      <div class="t">${i(a.title)}</div>
      <div class="muted" style="font-size:11px">${i(a.artist)}</div>
    </div>`).join(""),t=I.map(a=>`
    <div class="card" style="margin:0">
      <h3>${i(a.name)}</h3>
      <div class="price" style="font-size:22px;font-weight:900">$${a.price}<span class="muted" style="font-size:13px">/mo</span></div>
      <p class="muted">${i(a.blurb)}</p>
      <button class="btn primary block" disabled title="TEST MODE">Join · TEST MODE</button>
    </div>`).join(""),s=`
    <div class="card">
      <h2>Upcoming Releases</h2>
      <p class="muted">Real cover art · playback unlocks when released.</p>
      <div class="cover-row">${e}</div>
    </div>

    <div class="card" id="vault">
      <h2>Vault</h2>
      <p class="muted">Exclusive unreleased tracks, demos, and BTS for members.</p>
      <div class="vault-lock">
        🔒 Vault exclusives coming soon.<br/>
        No sample tracks — only approved DatBoiSkeet content.
      </div>
      <div class="grid-2" style="margin-top:14px">${t}</div>
    </div>

    <div class="card">
      <h2>Stream Everywhere</h2>
      <p class="muted">Official catalog links open Spotify, Apple Music, YouTube Music, and more when configured by admin. External streams are not rehosted in-app.</p>
      <a class="btn" href="https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA" target="_blank" rel="noopener">YouTube Channel</a>
    </div>
  `;return l("Music & Vault",s,{lead:"Singles, albums, Coming Soon, and member Vault."})}function ie(){const t=`
    <div class="card">
      <h2>Foreign X-Change</h2>
      <p class="muted">Physical merch checkout happens on <a href="https://foreignx-change.com" target="_blank" rel="noopener" style="color:var(--sk)">foreignx-change.com</a> — not inside DBS. Shipping & taxes calculated there.</p>
      <a class="btn primary" href="https://foreignx-change.com" target="_blank" rel="noopener">Visit Foreign X-Change</a>
    </div>
    <div class="merch-grid">${_.map(s=>`
    <article class="merch-card">
      <img src="${i(s.image)}" alt="${i(s.name)}" loading="lazy" />
      <div class="body">
        <div class="cat">${i(s.category)}</div>
        <strong style="font-size:13px;line-height:1.3">${i(s.name)}</strong>
        <div class="price">$${s.price}</div>
        <a class="btn primary block shop-link" href="${i(s.shopUrl)}" target="_blank" rel="noopener" data-name="${i(s.name)}">
          Shop on Foreign X-Change
        </a>
        <span class="chip">TEST MODE · external checkout</span>
      </div>
    </article>`).join("")}</div>
  `;return l("Merch",t,{lead:"Hats $30 · Tees $65 · Jackets $200"})}function ne(e){e.querySelectorAll(".shop-link").forEach(t=>{t.addEventListener("click",()=>{u("TEST MODE — opening Foreign X-Change")})})}function re(){const{user:e,posts:t}=f();if(!e)return l("Profile",`
      <div class="card">
        <h3>Sign in (local demo)</h3>
        <p class="muted">Creates a demo user in this browser. No password or backend.</p>
        <div class="field"><label>Username</label>
          <input id="signinName" placeholder="Your name" maxlength="24" /></div>
        <button class="btn primary block" id="signinBtn">Sign in</button>
      </div>
      <div class="card">
        <h3>Become a Creator</h3>
        <p class="muted">Apply for Clipper, Streamer, Brand, Affiliate, or Seller roles.</p>
        <a class="btn" href="#/signup">Creator applications</a>
        <a class="btn" href="#/clippers">Clippers apply</a>
      </div>`,{lead:"Free profile · follow · posts · optional paid cosmetics later."});const s=t.filter(n=>n.userId===e.id),a=`
    <div class="card">
      <div class="profile-hero">
        <div class="avatar">${i(e.username[0].toUpperCase())}</div>
        <div>
          <h2 style="margin:0">${i(e.username)}</h2>
          <p class="muted" style="margin:4px 0 0">${i(e.bio)}</p>
          <span class="chip">Demo account</span>
        </div>
      </div>
      <div class="stats">
        <div><strong>${s.length}</strong><span>Posts</span></div>
        <div><strong>${e.followers.length}</strong><span>Followers</span></div>
        <div><strong>${e.following.length}</strong><span>Following</span></div>
      </div>
      <div class="row wrap">
        <a class="btn" href="#/posts">New post</a>
        <a class="btn" href="#/shop">Profile Shop</a>
        <a class="btn" href="#/messages">Messages</a>
        <button class="btn ghost" id="signoutBtn">Sign out</button>
      </div>
    </div>
    <div class="card">
      <h3>Your posts</h3>
      ${s.length?s.map(n=>`<div style="padding:8px 0;border-bottom:1px solid var(--line)">
                    <div class="muted" style="font-size:11px">${new Date(n.at).toLocaleString()}</div>
                    ${i(n.text)}
                  </div>`).join(""):'<p class="muted">No posts yet.</p>'}
    </div>
    <div class="card">
      <h3>Roles</h3>
      <a class="btn block" href="#/clippers">Apply as Clipper</a>
      <a class="btn block" href="#/signup" style="margin-top:8px">Other creator roles</a>
    </div>
  `;return l("Profile",a)}function oe(e){var t,s;(t=e.querySelector("#signinBtn"))==null||t.addEventListener("click",()=>{var n;const a=(n=e.querySelector("#signinName"))==null?void 0:n.value;K(a),u("Signed in"),window.dispatchEvent(new HashChangeEvent("hashchange"))}),(s=e.querySelector("#signoutBtn"))==null||s.addEventListener("click",()=>{H(),u("Signed out"),window.dispatchEvent(new HashChangeEvent("hashchange"))})}function le(){const e=f().clipperApps,t=`
    <div class="card">
      <h3>Clipper application</h3>
      <p class="muted">No minimum followers. Admin reviews every application.</p>
      <div class="field"><label>Name</label><input id="cName" required /></div>
      <div class="field"><label>Email</label><input id="cEmail" type="email" required /></div>
      <div class="field"><label>Age</label><input id="cAge" type="number" min="13" max="120" /></div>
      <div class="grid-2">
        <div class="field"><label>TikTok</label><input id="cTiktok" placeholder="@ or URL" /></div>
        <div class="field"><label>Instagram</label><input id="cIg" /></div>
        <div class="field"><label>YouTube</label><input id="cYt" /></div>
        <div class="field"><label>X / Twitter</label><input id="cX" /></div>
      </div>
      <div class="field"><label>Monthly views (approx)</label><input id="cViews" /></div>
      <div class="field"><label>Niche / experience</label><textarea id="cNiche"></textarea></div>
      <div class="field"><label>Work sample links</label><textarea id="cSamples" placeholder="Paste URLs"></textarea></div>
      <button class="btn primary block" id="cSubmit">Submit application</button>
    </div>
    <div class="card">
      <h3>Your submissions (this device)</h3>
      ${e.length?`<ul class="list-plain">${e.map(s=>`<li><span>${i(s.name)} · ${i(s.status)}</span><span class="muted">${D(s.at)}</span></li>`).join("")}</ul>`:'<p class="muted">None yet.</p>'}
    </div>
  `;return l("Clippers",t,{lead:"Apply → admin approve → paid campaigns & tracked links."})}function ce(e){var t;(t=e.querySelector("#cSubmit"))==null||t.addEventListener("click",()=>{var n,o,c,h,d,v,b,$,C,E,P,L;const s=(o=(n=e.querySelector("#cName"))==null?void 0:n.value)==null?void 0:o.trim(),a=(h=(c=e.querySelector("#cEmail"))==null?void 0:c.value)==null?void 0:h.trim();if(!s||!a)return u("Name and email required");z({name:s,email:a,age:(d=e.querySelector("#cAge"))==null?void 0:d.value,tiktok:(v=e.querySelector("#cTiktok"))==null?void 0:v.value,instagram:(b=e.querySelector("#cIg"))==null?void 0:b.value,youtube:($=e.querySelector("#cYt"))==null?void 0:$.value,x:(C=e.querySelector("#cX"))==null?void 0:C.value,views:(E=e.querySelector("#cViews"))==null?void 0:E.value,niche:(P=e.querySelector("#cNiche"))==null?void 0:P.value,samples:(L=e.querySelector("#cSamples"))==null?void 0:L.value}),u("Application saved for admin review"),window.dispatchEvent(new HashChangeEvent("hashchange"))})}function p(e){return{badge:`Phase ${e} shell`}}function de(){const e=y.map(t=>`
    <div class="card">
      <div class="hero-video" style="margin:0 0 10px">
        <iframe src="${i(t.embed)}?rel=0" title="${i(t.title)}" allowfullscreen loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <strong>${i(t.title)}</strong>
      <div><a class="btn" style="margin-top:8px" href="${i(t.youtube)}" target="_blank" rel="noopener">Open on YouTube</a></div>
    </div>`).join("");return l("Videos & Interviews",e+`
    <div class="card muted">
      Interviews (Off The Porch, On The Radar, etc.) — verify & add via Admin when ready.
      <div style="margin-top:8px"><a class="btn" href="https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA" target="_blank" rel="noopener">Official channel</a></div>
    </div>`,{lead:"Music videos, interviews, BTS, exclusives."})}function pe(){return l("PIKK Live",`<div class="card">
      <h3>No creators live</h3>
      <p class="muted">Approved creators can livestream with chat, gifts, tips, and replays. Every stream shows PIKK branding and Follow DatBoiSkeet.</p>
      <p class="muted">Splits: gifts 80/20 · tips 90/10 (eligible net).</p>
      <button class="btn primary" disabled>Go live · Phase 3</button>
    </div>
    <div class="card"><a class="btn" href="#/giftbattles">Gift Battles</a>
      <a class="btn" href="#/multiguest">Multi-Guest</a>
      <a class="btn" href="#/spotlight">24/7 Spotlight</a></div>`,{lead:"Creator livestreaming with moderation & earnings.",...p(3)})}function ue(){return l("Explore",`<div class="card">
      <div class="field"><label>Search PIKK</label>
        <input id="exploreQ" placeholder="Creators, songs, posts, lives…" /></div>
      <button class="btn primary" id="exploreGo">Search</button>
      <p class="muted" id="exploreOut" style="margin-top:10px"></p>
    </div>
    <div class="card">
      <h3>Trending Across PIKK</h3>
      <p class="muted">High-engagement public posts surface here (spam filtered). Engagement ranking requires the future backend.</p>
      <div class="section-swipe">
        <a class="preview-card" href="#/posts"><strong>Posts</strong><span class="muted">Discover feed</span></a>
        <a class="preview-card" href="#/music"><strong>Music</strong><span class="muted">Coming Soon</span></a>
        <a class="preview-card" href="#/spotlight"><strong>Spotlight</strong><span class="muted">24/7 stage</span></a>
        <a class="preview-card" href="#/connect"><strong>Connect</strong><span class="muted">Random chat 18+</span></a>
      </div>
    </div>`,{lead:"Universal search & discovery.",...p(2)})}function me(e){var t;(t=e.querySelector("#exploreGo"))==null||t.addEventListener("click",()=>{var c,h;const s=((h=(c=e.querySelector("#exploreQ"))==null?void 0:c.value)==null?void 0:h.trim())||"",a=e.querySelector("#exploreOut");if(!a)return;if(!s){a.textContent="Enter a query.";return}const o=[...y.map(d=>({title:d.title,type:"Video",href:"#/videos"})),...w.map(d=>({title:d.title,type:"Music",href:"#/music"})),..._.map(d=>({title:d.name,type:"Merch",href:"#/merch"})),...T.map(d=>({title:d.title,type:"Section",href:"#"+d.route}))].filter(d=>(d.title+" "+d.type).toLowerCase().includes(s.toLowerCase())).slice(0,20);a.innerHTML=o.length?o.map(d=>`<a class="preview-card" style="display:block;margin-top:8px" href="${i(d.href)}"><strong>${i(d.title)}</strong> · ${i(d.type)}</a>`).join(""):"No matching items in the local catalog. Creator and post search require the future backend."})}function he(){return l("Marketplace",`<div class="card"><p class="muted">Businesses advertise via sponsored posts, lives, affiliates, and storefronts. Tracked purchases, disclosures, admin approval.</p>
     <p class="muted">Commission example: marketplace 85/15 · sponsored campaigns 80/20.</p>
     <button class="btn" disabled>Apply as Brand · Phase 3</button></div>`,{lead:"Advertising & product promotions.",...p(3)})}function ge(){return l("Creator Earnings",`<div class="card"><p class="muted">Clipping, referrals, merch affiliates, subscriptions, gifts, tips — with transparent PIKK commissions.</p>
     <ul class="list-plain">
       <li><span>Live gifts</span><span>80% creator</span></li>
       <li><span>Tips</span><span>90% creator</span></li>
       <li><span>Subscriptions / exclusives</span><span>85% creator</span></li>
       <li><span>Sponsored</span><span>80% creator</span></li>
     </ul>
     <a class="btn" href="#/wallet">Open Wallet</a></div>`,{lead:"Rewards, payouts & owner commissions.",...p(2)})}function fe(){return l("Missions",`<div class="card"><p class="muted">Admin-created campaigns promoting songs, videos, lives, and the PIKK app. Budgets, deadlines, rankings, fraud checks.</p>
     <p class="muted">Optional 20% management fee on third-party-funded campaigns.</p>
     <button class="btn" disabled>No active missions</button></div>`,{lead:"Promotional campaigns for Clippers & creators.",...p(2)})}function ve(){const e=I.map(t=>`<li><span>${i(t.name)}</span><strong>$${t.price}/mo</strong></li>`).join("");return l("Pricing",`<div class="card"><h3>Memberships</h3><ul class="list-plain">${e}</ul></div>
     <div class="card"><h3>Music</h3>
       <ul class="list-plain">
         <li><span>Song</span><span>$0.99–$1.29</span></li>
         <li><span>EP</span><span>$4.99–$6.99</span></li>
         <li><span>Album</span><span>$9.99–$12.99</span></li>
       </ul>
       <p class="chip">TEST MODE · no charges</p>
     </div>`,{lead:"Memberships, music, gifts, messaging — admin-adjustable."})}function be(){const{posts:e,clipperApps:t,user:s}=f();return l("Admin",`<div class="card"><p class="muted">Local demo controls. Full auth & team roles ship later.</p>
      <p>Signed in as: <strong>${i((s==null?void 0:s.username)||"guest")}</strong></p></div>
     <div class="card"><h3>Posts (${e.length})</h3>
       <ul class="list-plain">${e.slice(0,20).map(a=>`<li><span>${i(a.username)}: ${i(a.text.slice(0,40))}</span></li>`).join("")||'<li class="muted">None</li>'}</ul></div>
     <div class="card"><h3>Clipper applications (${t.length})</h3>
       <ul class="list-plain">${t.map(a=>`<li><span>${i(a.name)} · ${i(a.email)}</span><span class="chip">${i(a.status)}</span></li>`).join("")||'<li class="muted">None</li>'}</ul></div>
     <div class="card muted">Revenue dashboard, moderation, missions, and payouts → Phase 2–3.</div>`,{lead:"Music, Posts, Clippers, Live, Marketplace, finance."})}function ye(){return l("Community Guidelines",`<div class="card">
      <p>No harassment, hate, scams, spam, or prohibited content.</p>
      <ul class="list-plain">
        <li><span>1st–3rd</span><span>Warnings</span></li>
        <li><span>4th</span><span>30-day suspension</span></li>
        <li><span>5th</span><span>60-day suspension</span></li>
        <li><span>6th</span><span>1-year ban</span></li>
      </ul>
      <p class="muted">Serious violations may skip steps. Paid access is paused — not charged — while suspended.</p>
    </div>`,{lead:"Rules, violations & suspensions."})}function we(){return l("PIKK Lounge",`<div class="card"><p class="muted">Premium music-first community — not a Discord clone.</p>
      <ul class="list-plain">
        <li><span>PIKK Lounge</span><span class="chip">Hub</span></li>
        <li><span>The Conversation</span><span class="chip">Public</span></li>
        <li><span>Listening Rooms</span><span class="chip">Parties</span></li>
        <li><span>Backstage Rooms</span><span class="chip">Members</span></li>
        <li><span>Live Rooms</span><span class="chip">Events</span></li>
        <li><span>The Spotlight</span><span class="chip">Featured</span></li>
      </ul>
      <button class="btn" disabled>Rooms · Phase 2</button></div>`,{lead:"Community rooms & listening parties.",...p(2)})}function ke(){return l("Signup & Creator Apps",`<div class="card">
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
    </div>`,{lead:"Platform signup + role applications."})}function Se(){return l("Messages",`<div class="card"><p class="muted">DMs & group chats with privacy controls. Separate inbox for DatBoiSkeet / team (free inquiry or $2.99 priority).</p>
     <button class="btn" disabled>Inbox · Phase 2</button>
     <button class="btn ghost" disabled>Priority message · TEST MODE</button></div>`,{lead:"Private messaging & team inbox.",...p(2)})}function xe(){return l("Profile Shop",`<div class="shop-concept"><img src="/pikk-app/design/DBS_Profile_Shop_Concept.png" alt="Profile Shop concept" /></div>
     <div class="card">
       <p class="muted">Digital cosmetics only (frames, effects, banners, name styles, badges). Separate from Foreign X-Change physical merch.</p>
       <p class="muted">Intro pricing targets $2.99–$14.99 · bundles $14.99–$24.99. Live preview before purchase.</p>
       <button class="btn primary" disabled>Browse items · coming soon</button>
     </div>`,{lead:"Original PIKK digital cosmetics.",...p(2)})}function $e(){return l("Gift Battles",`<div class="card"><p class="muted">60-second viewer vs viewer gift battles during lives. Voluntary support — not wagers. Winner gets recognition, not the opponent's money.</p>
     <button class="btn" disabled>Requires Live · Phase 3</button></div>`,{lead:"Live gift battles & champion spotlight.",...p(3)})}function Ce(){const e=f().notifications;return l("Notifications",`<div class="card" id="notifPrefs">
      <div class="toggle"><span>New releases</span><input type="checkbox" data-k="releases" ${e.releases?"checked":""}/></div>
      <div class="toggle"><span>Livestreams</span><input type="checkbox" data-k="lives" ${e.lives?"checked":""}/></div>
      <div class="toggle"><span>Messages</span><input type="checkbox" data-k="messages" ${e.messages?"checked":""}/></div>
      <div class="toggle"><span>Quiet hours</span><input type="checkbox" data-k="quietHours" ${e.quietHours?"checked":""}/></div>
      <p class="muted" style="margin-top:10px">Prefs saved on this device.</p>
    </div>`,{lead:"In-app center & alert controls."})}function Ee(e){e.querySelectorAll("#notifPrefs input").forEach(t=>{t.addEventListener("change",()=>{X({[t.dataset.k]:t.checked}),u("Saved")})})}function Pe(){return l("Fan Clubs",`<div class="card"><p class="muted">Approved creators host clubs inside PIKK Lounge with optional paid rooms. Keep PIKK branding prominent.</p>
     <button class="btn" disabled>Create club · Phase 3</button></div>`,{lead:"Creator communities.",...p(3)})}function Le(){const e=f().wallet;return l("Wallet",`<div class="card">
      <h3>Demo balance</h3>
      <div style="font-size:32px;font-weight:900">$${Number(e.balance).toFixed(2)}</div>
      <p class="muted">Creators see gross, fees, eligible net, splits, holds, payout history. Fans' gift purchases stay separate from redeemable balances.</p>
      <button class="btn" id="walletDemo">Add $5 demo credit</button>
      <p class="chip">TEST MODE · not real money</p>
    </div>`,{lead:"Earnings & payout center.",...p(2)})}function Be(e){var t;(t=e.querySelector("#walletDemo"))==null||t.addEventListener("click",()=>{var o,c;const s=f(),a=(((o=s.wallet)==null?void 0:o.balance)||0)+5,n=[...((c=s.wallet)==null?void 0:c.history)||[],{at:Date.now(),amount:5,note:"Demo credit"}];F({wallet:{balance:a,history:n}}),u("+$5 demo"),window.dispatchEvent(new HashChangeEvent("hashchange"))})}function Me(){return l("Loyalty Club",`<div class="card"><p class="muted">Badges & recognition for listening, attending lives, and community help — not only spending. Day One, Top Fan, helpers.</p>
     <div class="row wrap"><span class="chip">Day One</span><span class="chip">Top Fan</span><span class="chip">Helper</span></div></div>`,{lead:"Recognition beyond purchases.",...p(2)})}function _e(){return l("Multi-Guest Live",`<div class="card"><p class="muted">Hosts invite 2–4 guests with separate profiles, shared chat, and disclosed gift splits.</p>
     <button class="btn" disabled>Phase 3</button></div>`,{...p(3)})}function Ie(){return l("Open Mic",`<div class="card"><p class="muted">Opt-in talent showcase for rappers, singers, DJs, producers. Rights certification + admin approval. Distinct from pay-to-win rankings.</p>
     <button class="btn" disabled>Submit · Phase 3</button></div>`,{lead:"Talent discovery.",...p(3)})}function Te(){return l("Launch Readiness",`<div class="card"><ul class="list-plain">${["Registration & role approval","Moderation / reporting / appeals","Payments & refunds (test)","Creator payouts verification","Music & video rights","Gift-battle fraud prevention","Livestream safety","Background audio pause/resume","Account recovery / 2FA option","Loyalty analytics consent"].map(t=>`<li><span>${i(t)}</span><span class="chip">TODO</span></li>`).join("")}</ul>
      <p class="muted">Fan onboarding + separate creator onboarding before public launch.</p></div>`,{lead:"Pre-launch checklist (§31)."})}function Ae(){return l("Share & Earn",`<div class="card"><p class="muted">24-hour social promo: post official PIKK ads with tracked links, keep live 24h, verify for badges / Skeet+ trials. Never ask for social passwords.</p>
     <button class="btn" disabled>Start challenge · Phase 2</button></div>`,{lead:"Optional social promotion rewards.",...p(2)})}function De(){return l("Refer & Earn",`<div class="card"><p class="muted">Personal referral link. Rewards after verified active friends (3 distinct days in first week). Milestones up to Founder Promoter.</p>
     <input readonly value="https://dbs.app/r/demo" style="width:100%;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;margin:8px 0" />
     <button class="btn" id="copyRef">Copy demo link</button></div>`,{lead:"Verified active friend rewards.",...p(2)})}function Ne(e){var t;(t=e.querySelector("#copyRef"))==null||t.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("https://dbs.app/r/demo"),u("Copied")}catch{u("Copy manually")}})}function Oe(){return l("24/7 Spotlight",`<div class="card">
      <h3>Stage · offline demo</h3>
      <p class="muted">FIFO queue for songs, beats, videos, and 60s freestyles (max 3 min with Keep Going votes). Uploaded media must be approved before play.</p>
      <button class="btn primary" disabled>Join queue · Phase 3</button>
      <a class="btn" href="#/openmic">Open Mic</a>
    </div>`,{lead:"Continuous music showcase & discovery.",...p(3)})}function qe(){return l("PIKK Connect",`<div class="card">
      <p class="muted"><strong>18+ only.</strong> Opt-in random 1:1 video chat. Explicit consent, Next/End/Mute/Camera/Report/Block. Not a replacement for Live, Spotlight, or Messages.</p>
      <p class="muted">Do not launch without age assurance, moderation, and WebRTC safety.</p>
      <button class="btn primary" disabled>Start matching · Phase 3</button>
    </div>`,{lead:"Random video discovery (Monkey-style).",...p(3)})}function Re(e){return l("Not found",`<div class="card"><p>No page for <code>${i(e)}</code>.</p><a class="btn" href="#/home">Home</a></div>`)}const Fe={"/home":{render:te},"/posts":{render:se,bind:ae},"/music":{render:M},"/vault":{render:M},"/merch":{render:ie,bind:ne},"/profile":{render:re,bind:oe},"/clippers":{render:le,bind:ce},"/videos":{render:de},"/live":{render:pe},"/explore":{render:ue,bind:me},"/marketplace":{render:he},"/earnings":{render:ge},"/missions":{render:fe},"/pricing":{render:ve},"/admin":{render:be},"/guidelines":{render:ye},"/community":{render:we},"/signup":{render:ke},"/messages":{render:Se},"/shop":{render:xe},"/giftbattles":{render:$e},"/notifications":{render:Ce,bind:Ee},"/fanclubs":{render:Pe},"/wallet":{render:Le,bind:Be},"/loyalty":{render:Me},"/multiguest":{render:_e},"/openmic":{render:Ie},"/launch":{render:Te},"/share":{render:Ae},"/refer":{render:De,bind:Ne},"/spotlight":{render:Oe},"/connect":{render:qe}};function je(){const e=document.getElementById("tabbar");e.innerHTML=q.map(t=>`<a href="${t.href}" data-path="${t.href.replace("#","")}">${ee[t.icon]||""}<span>${i(t.label)}</span></a>`).join("")}function Ke(){const e=document.getElementById("sideNav");e.innerHTML="<h2>PIKK</h2>"+O.map(t=>`<a href="${t.href}">${i(t.label)}</a>`).join("")}function S(e){document.getElementById("sideNav").classList.toggle("open",e),document.getElementById("sideNav").setAttribute("aria-hidden",e?"false":"true"),document.getElementById("scrim").classList.toggle("show",e)}function He(e){const t=e.path;document.querySelectorAll("#tabbar a").forEach(n=>{n.classList.toggle("on",n.getAttribute("data-path")===t)}),document.querySelectorAll("#sideNav a").forEach(n=>{const o=n.getAttribute("href")||"";n.classList.toggle("on",o==="#"+t||o==="#"+e.raw)});const s=f().user,a=document.getElementById("tierPill");s?(a.textContent=s.username,a.classList.add("on")):(a.textContent="Sign in",a.classList.remove("on"))}function Ve(e){var n;const t=document.getElementById("app"),s=Fe[e.path],a=s?s.render(e):Re(e.path);t.innerHTML=a,(n=s==null?void 0:s.bind)==null||n.call(s,t),He(e),window.scrollTo(0,0),(e.path==="/vault"||e.query.section==="vault")&&setTimeout(()=>{var o;return(o=document.getElementById("vault"))==null?void 0:o.scrollIntoView({behavior:"smooth"})},50)}function Ue(){const e=w[0];document.getElementById("mpTitle").textContent=e.title,document.getElementById("mpSub").textContent=`${e.artist} · Coming Soon`,document.getElementById("mpArt").src=e.cover;let t=!1;document.getElementById("mpPlay").addEventListener("click",()=>{t=!t,document.getElementById("mpPlay").textContent=t?"❚❚":"▶",u(t?"Coming Soon — no audio yet":"Paused")})}function We(){const e=document.getElementById("splash");e&&(e.classList.add("hide"),Y(),setTimeout(()=>e.remove(),500))}function Ge(){j(),je(),Ke(),Ue(),document.getElementById("menuBtn").addEventListener("click",()=>S(!0)),document.getElementById("scrim").addEventListener("click",()=>S(!1)),document.getElementById("sideNav").addEventListener("click",t=>{t.target.closest("a")&&S(!1)}),document.getElementById("notifBtn").addEventListener("click",()=>{location.hash="/notifications"}),Q(Ve),Z();const e=()=>We();document.readyState==="complete"?setTimeout(e,600):window.addEventListener("load",()=>setTimeout(e,600)),setTimeout(e,2500)}Ge();
