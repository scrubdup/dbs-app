(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function qn(e,t=Date.now()){const s=new URL(e);return s.searchParams.set("refresh",String(t)),s.toString()}var On;(On=document.getElementById("pikk-refresh-link"))==null||On.addEventListener("click",function(e){e.preventDefault(),window.location.assign(qn(window.location.href))});const Lo={BASE_URL:"/pikk-app/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE:"/pikk-app/",VITE_BUILD_SHA:"a93dbc22710d2e2b846915c725c63b6883ed3fa8"},us=Object.freeze([{name:"Block Wars",players:"1–2",icon:"🥊",theme:"fighters",artwork:"/games/approved/01_block_wars.jpg",description:"City-based fighters, combos and special moves.",href:"#/blockwars"},{name:"PIKK Playground",players:"1–8",icon:"🎈",theme:"playground",artwork:"/games/approved/02_pikk_playground.jpg",description:"Create your character, race, jump and explore with friends."},{name:"PIKK Clash",players:"1",icon:"💎",theme:"clash",artwork:"/games/approved/03_pikk_clash.jpg",description:"Original neighborhood-themed match puzzles and venue upgrades."},{name:"PIKK Knockout",players:"1",icon:"💥",theme:"knockout",artwork:"/games/approved/04_pikk_knockout.jpg",description:"Stylized physics challenges: launch, bounce and knock targets off moving platforms."},{name:"PIKK Bowling",players:"1–4",icon:"🎳",theme:"bowling",artwork:"/games/approved/05_pikk_bowling.jpg",description:"Compete for strikes, spares and high scores."},{name:"PIKK Pickleball",players:"2–4",icon:"🏓",theme:"pickleball",artwork:"/games/approved/06_pikk_pickleball.jpg",description:"Play singles or doubles on colorful courts."},{name:"PIKK Pool",players:"1–2",icon:"🎱",theme:"pool",artwork:"/games/approved/07_pikk_pool.jpg",description:"Play 8-ball pool against friends or the computer."},{name:"PIKK Cup Pong",players:"2–4",icon:"🥤",theme:"pong",artwork:"/games/approved/08_pikk_cup_pong.jpg",description:"Aim, throw and eliminate opponents’ cups."},{name:"PIKK Poker",players:"2–8",icon:"♠️",theme:"poker",artwork:"/games/approved/09_pikk_poker.jpg",description:"Social Texas Hold’em with nonredeemable Play Chips."},{name:"PIKK Blackjack",players:"1–5",icon:"🃏",theme:"blackjack",artwork:"/games/approved/10_pikk_blackjack.jpg",description:"Try for 21 against the dealer using Play Chips."},{name:"PIKK Slots",players:"1",icon:"🎰",theme:"slots",artwork:"/games/approved/11_pikk_slots.jpg",description:"Entertainment-only reels and virtual Play Chips."},{name:"PIKK Speed",players:"2",icon:"⚡",theme:"speed",artwork:"/games/approved/12_pikk_speed.jpg",description:"Race to play your cards before your opponent."},{name:"PIKK Spades",players:"4",icon:"♠",theme:"spades",artwork:"/games/approved/13_pikk_spades.jpg",description:"Partner strategy and card battles."},{name:"PIKK Dominoes",players:"2–4",icon:"🁢",theme:"dominoes",artwork:"/games/approved/14_pikk_dominoes.jpg",description:"Match tiles and outplay opponents."},{name:"PIKK Chess",players:"2",icon:"♟",theme:"chess",artwork:"/games/approved/15_pikk_chess.jpg",description:"Challenge opponents in a classic strategy game."}]);function zs(e){return e!=null&&e.artwork?(Lo&&"/pikk-app/"||"/").replace(/\/?$/,"/")+String(e.artwork).replace(/^\/+/,""):""}let Bi;function h(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"),clearTimeout(Bi),Bi=setTimeout(()=>t.classList.remove("show"),2400))}function o(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function j(e){const t=Math.max(0,Math.floor((Date.now()-e)/1e3));if(t<60)return t+"s";const s=Math.floor(t/60);if(s<60)return s+"m";const a=Math.floor(s/60);return a<24?a+"h":Math.floor(a/24)+"d"}function _(e,t,s={}){let a="";if(s.badgeHtml)a=s.badgeHtml;else if(s.badge){const n=o(s.badge),r=s.badgeAria?` aria-label="${o(s.badgeAria)}"`:"",l=s.badgeTitle||s.badgeAria?` title="${o(s.badgeTitle||s.badgeAria)}"`:"";s.badgeHref?a=`<a class="badge-phase"${r}${l} href="${o(s.badgeHref)}">${n}</a>`:a=`<span class="badge-phase"${r}${l}>${n}</span>`}const i=s.lead?`<p class="lead">${s.lead}</p>`:"";return`
    <section class="page">
      <header class="page-head">
        <h1>${o(e)} ${a}</h1>
        ${i}
      </header>
      ${t}
    </section>
  `}const ms={heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.5c0 4.6-8.8 10.4-8.8 10.4S3.2 13.1 3.2 8.5a4.5 4.5 0 0 1 8.8-1.2 4.5 4.5 0 0 1 8.8 1.2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',posts:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',camera:'<svg viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h2.1l1.2-1.8A1.5 1.5 0 0 1 11 3.5h2a1.5 1.5 0 0 1 1.2.7L15.4 6h2.1A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',music:'<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',merch:'<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8zm3-3a3 3 0 0 1 6 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',explore:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',live:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".5"/></svg>',profile:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 19a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',videos:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v5A2.5 2.5 0 0 1 16.5 14H11l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 11.5v-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 17.5V19a1 1 0 0 0 1.5.85L14 17h2.5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".55"/></svg>',msg:'<svg viewBox="0 0 24 24"><rect x="3.5" y="6" width="17" height="12" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4.5 7.5 7.5 5.2L19.5 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',game:'<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 13h2.5M9.25 11.5v3M15.2 12.2h.01M17.3 14.2h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'};function Je(e,t="rel=0"){const s=String(e||"").trim();if(!s)return"";const a=s.includes("?")?"&":"?";return`${s}${a}${t}`}const Hs=Object.freeze({videos:[{title:"Video Feed",href:"#/videos",detail:"Watch and discover videos",icon:"▶"},{title:"Shorts & Reels",href:"#/shorts",detail:"Browse short-form clips",icon:"▣"},{title:"Posts",href:"#/posts",detail:"View the community feed",icon:"▤"},{title:"Upload Video",href:"#/posts?type=video",detail:"Available prototype publishing tools · TEST MODE",icon:"⇧"}],connect:[{title:"Connect",href:"#/connect",detail:"Discover people and communities",icon:"♧"},{title:"PIKK Communities",href:"#/communities",detail:"Topic discussions, votes and replies · TEST MODE",icon:"#"},{title:"Communities",href:"#/community",detail:"Explore PIKK Lounge channel rooms",icon:"☷"},{title:"Messages",href:"#/messages",detail:"Open your messages",icon:"✉"},{title:"Random Chat",href:"#/connect#connect-random-chat",detail:"Preview only · real matching unavailable",icon:"◉"},{title:"Multistream",href:"#/connect#connect-multistream",detail:"Broadcast connection preview · TEST MODE",icon:"▹"}],dating:[{title:"Discover Dating",href:"#/dating",detail:"Explore dating features · TEST MODE",icon:"♡"},{title:"Messages",href:"#/messages",detail:"Open private messages",icon:"✉"},{title:"My Profile",href:"#/profile",detail:"Review your profile settings",icon:"◉"},{title:"Safety Guidelines",href:"#/guidelines",detail:"Review community safety rules",icon:"◇"}],games:[{title:"PIKK Arcade",href:"#/games",detail:"View the full game collection · preview",icon:"♜"},...us.map(e=>({title:e.name,...e.href?{href:e.href}:{},detail:e.href?"Fighting game · development preview":e.description+" · planned",icon:e.name==="Block Wars"?"▣":"♜"}))],shop:[{title:"PIKK Shop",href:"#/shop",detail:"Browse available products",icon:"▤"},{title:"Marketplace",href:"#/marketplace",detail:"Community listings · TEST MODE",icon:"◇"},{title:"Foreign X-Change",href:"#/merch",detail:"Official merchandise",icon:"✦"},{title:"Creator Pricing",href:"#/pricing",detail:"Explore creator selling information",icon:"$"}]}),Io=Object.freeze({"Video Feed":"videos","Shorts & Reels":"videos",Posts:"posts","Upload Video":"videos",Connect:"profile","PIKK Communities":"chat",Communities:"chat",Messages:"msg","Random Chat":"camera",Multistream:"live","Discover Dating":"heart","My Profile":"profile","Safety Guidelines":"heart","PIKK Arcade":"game","PIKK Speed":"game","PIKK Blackjack":"game","PIKK Slots":"game","PIKK Poker":"game","PIKK Spades":"game","PIKK Dominoes":"game","PIKK Chess":"game","PIKK Clash":"game","PIKK Knockout":"game","PIKK Playground":"game","PIKK Bowling":"game","PIKK Pickleball":"game","PIKK Pool":"game","PIKK Cup Pong":"game","Block Wars":"game","PIKK Shop":"merch",Marketplace:"merch","Foreign X-Change":"merch","Creator Pricing":"posts"}),Nn={videos:"pikkVideosMenu",connect:"pikkConnectMenu",dating:"pikkDatingMenu",games:"pikkGamesMenu",shop:"pikkShopMenu"};function bt(e=!1){for(const[t,s]of Object.entries(Nn)){const a=document.getElementById(s);if(!a||a.hidden)continue;a.hidden=!0;const i=document.querySelector(`#tabbar a[href="#/${t}"]`);i==null||i.setAttribute("aria-expanded","false"),e&&(i==null||i.focus())}}function Po(e,t){var l,u,c;if(!Object.hasOwn(Hs,e))return;const s=Nn[e];let a=document.getElementById(s);a||(a=document.createElement("div"),a.id=s,a.className="pikk-create-overlay",a.hidden=!0,a.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="${s}Title">
      <div class="pikk-create-head"><strong id="${s}Title">${e[0].toUpperCase()+e.slice(1)} on PIKK</strong><button type="button" class="btn ghost" data-section-close aria-label="Close ${e} menu">✕</button></div>
      <div class="pikk-create-options pikk-create-grid">${Hs[e].map(p=>{const m=`<span class="pikk-menu-icon" aria-hidden="true">${ms[Io[p.title]||"explore"]}</span><strong class="pikk-menu-title">${p.title}</strong><small>${p.detail}</small>`;return p.href?`<a class="pikk-create-tile" href="${p.href}">${m}</a>`:`<div class="pikk-create-tile pikk-menu-planned" aria-disabled="true">${m}</div>`}).join("")}</div>
      <button type="button" class="pikk-menu-cancel" data-section-close>Cancel</button>
      <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Production features are not enabled until secure services are available.</p>
    </div>`,document.body.appendChild(a),a.addEventListener("click",p=>{p.target===a||p.target.closest("[data-section-close]")?bt(!0):p.target.closest(".pikk-create-options a")&&bt()}),document.addEventListener("keydown",p=>{if(a.hidden)return;if(p.key==="Escape"){p.preventDefault(),bt(!0);return}if(p.key!=="Tab")return;const m=[...a.querySelectorAll("button:not([disabled]), a[href]")],g=m[0],f=m[m.length-1];if(!g){p.preventDefault();return}a.contains(document.activeElement)?p.shiftKey&&document.activeElement===g?(p.preventDefault(),f.focus()):!p.shiftKey&&document.activeElement===f&&(p.preventDefault(),g.focus()):(p.preventDefault(),(p.shiftKey?f:g).focus())}),window.addEventListener("hashchange",()=>bt()));const i=a.hidden;bt();const n=document.getElementById("pikkMusicMenu");n&&!n.hidden&&(n.hidden=!0,(l=document.querySelector('#tabbar a[href="#/music"]'))==null||l.setAttribute("aria-expanded","false"));const r=document.getElementById("pikkCreateMenu");r&&!r.hidden&&(r.hidden=!0,(u=document.querySelector('#tabbar a[href="#/create"]'))==null||u.setAttribute("aria-expanded","false")),a.hidden=!i,t==null||t.setAttribute("aria-expanded",String(i)),i?(c=a.querySelector("[data-section-close]"))==null||c.focus():t==null||t.focus()}const Bn=Object.freeze([{title:"Social & Community",items:[{title:"Create Post",href:"#/posts?type=text",detail:"Text post · TEST MODE",icon:"posts"},{title:"Community Post",href:"#/community",detail:"Open community · preview",icon:"chat"},{title:"Story",detail:"24-hour stories · Planned",icon:"camera"},{title:"Reels",href:"#/posts?type=short",detail:"Short video · TEST MODE",icon:"videos"},{title:"Photo Post",href:"#/posts?type=picture",detail:"Photos · TEST MODE",icon:"camera"},{title:"Create Poll",detail:"Interactive polls · Planned",icon:"posts"},{title:"Create Community",href:"#/community",detail:"Community area · preview",icon:"chat"},{title:"Create Chatroom",detail:"Room creation · Planned",icon:"msg"},{title:"Create Event",detail:"Events · Planned",icon:"explore"}]},{title:"Videos & Music",items:[{title:"Upload Video",href:"#/posts?type=video",detail:"Video upload · TEST MODE",icon:"videos"},{title:"Music Video",href:"#/posts?type=video",detail:"Video composer · TEST MODE",icon:"videos"},{title:"Short Video",href:"#/posts?type=short",detail:"Short composer · TEST MODE",icon:"videos"},{title:"Upload Song",detail:"Song publishing · Planned",icon:"music"},{title:"Upload Album",detail:"Album publishing · Planned",icon:"music"},{title:"Upload EP",detail:"EP publishing · Planned",icon:"music"},{title:"Upload Beats",detail:"Beat publishing · Planned",icon:"music"},{title:"Create Playlist",href:"#/music",detail:"Open music area · preview",icon:"music"},{title:"Add to Vault",href:"#/vault",detail:"Open Vault · preview",icon:"music"}]},{title:"Live & Commerce",items:[{title:"Go Live",href:"#/live?go=1",detail:"Livestream · TEST MODE",icon:"live"},{title:"Schedule Live",detail:"Live scheduling · Planned",icon:"live"},{title:"Live Battle",href:"#/giftbattles",detail:"Battle area · preview",icon:"live"},{title:"List Product",href:"#/marketplace",detail:"Marketplace · TEST MODE",icon:"merch"},{title:"Seller Store",detail:"Store creation · Planned",icon:"merch"},{title:"Paid Content",href:"#/pricing",detail:"Creator pricing · preview",icon:"merch"},{title:"Exclusive Content",detail:"Exclusive publishing · Planned",icon:"heart"}]},{title:"Creator Tools & Protection",items:[{title:"Creator Dashboard",href:"#/profile",detail:"Creator profile",icon:"profile"},{title:"Manage Content",href:"#/posts",detail:"Posts and content",icon:"posts"},{title:"Drafts",detail:"Draft management · Planned",icon:"posts"},{title:"Artist Protection",href:"#/shield",detail:"PIKK Shield local rights drafts · TEST MODE",icon:"music"},{title:"AI Support",detail:"Support assistant · Planned",icon:"chat"}]}]);Object.freeze(Bn.flatMap(e=>e.items));const fe=[{id:"dirty-money",title:"Dirty Money ft. Lil Baby",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI",embed:"https://www.youtube.com/embed/-rHDLWfiuDI"},{id:"93",title:"93 ft. DaBaby",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0",embed:"https://www.youtube.com/embed/zC0BYFxs5W0"},{id:"no-love",title:"No Love ft. YFN Lucci",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8",embed:"https://www.youtube.com/embed/6pCVEIE9pB8"},{id:"bouquet",title:"Bouquet",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=DTe4OiX2otg",embed:"https://www.youtube.com/embed/DTe4OiX2otg"},{id:"where-im-from",title:"Where I'm From ft. Tee Grizzley",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=BH7_Ttk86eQ",embed:"https://www.youtube.com/embed/BH7_Ttk86eQ"},{id:"gang-ties",title:"Gang Ties",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=0ikbrk901Kc",embed:"https://www.youtube.com/embed/0ikbrk901Kc"},{id:"go-2-work",title:"Go 2 Work",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=gRq8c2i4ESM",embed:"https://www.youtube.com/embed/gRq8c2i4ESM"},{id:"ramen-noodles",title:"Ramen Noodles",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=YNCdtAC273M",embed:"https://www.youtube.com/embed/YNCdtAC273M"},{id:"men-in-blacc",title:"Men In Blacc",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=MKyw-hzxQWY",embed:"https://www.youtube.com/embed/MKyw-hzxQWY"},{id:"king-city",title:"King City",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=wyNJYUqpRFM",embed:"https://www.youtube.com/embed/wyNJYUqpRFM"},{id:"in-her-bag",title:"In Her Bag",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=Dux8rm-pzRg",embed:"https://www.youtube.com/embed/Dux8rm-pzRg"},{id:"lonely",title:"Lonely",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=IVnDjPJ8dRg",embed:"https://www.youtube.com/embed/IVnDjPJ8dRg"},{id:"they-aint-coming-home",title:"They Ain't Coming Home",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=Yi4uBFkn0-o",embed:"https://www.youtube.com/embed/Yi4uBFkn0-o"},{id:"mind-on-a-licc",title:"Mind On A Licc",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=sADinuRcRr4",embed:"https://www.youtube.com/embed/sADinuRcRr4"},{id:"dbs-mix",title:"DatBoiSkeet Mix",artist:"DatBoiSkeet",category:"Mixes",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",embed:"https://www.youtube.com/embed/videoseries?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",openLink:"https://www.youtube.com/playlist?list=RDEMDYIvPhQWVGU3Zf3gcxT_4w"},{id:"on-the-radar",title:"On The Radar Interview — Talk of The Town",artist:"DatBoiSkeet",category:"Interviews",youtube:"https://www.youtube.com/watch?v=6IFiHo5HrdE",embed:"https://www.youtube.com/embed/6IFiHo5HrdE"}],ti=[{id:"dbs-mix",title:"DatBoiSkeet Mix",blurb:"Official channel Music Videos playlist embed (stable). YouTube Radio Mix link kept as Play on YouTube — RD mixes often fail to embed.",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",embed:"https://www.youtube.com/embed/videoseries?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",openLink:"https://www.youtube.com/playlist?list=RDEMDYIvPhQWVGU3Zf3gcxT_4w",source:"channel-pl-music-videos + user-t96u openLink"}],Ba=[{id:"pl-music-videos",title:"DatBoiSkeet Music Videos",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t"},{id:"pl-interviews",title:"DatBoiSkeet Interviews",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQHoRjRTD58TpLGqm0XMsa7U"},{id:"pl-vlogs",title:"DatBoiSkeet Vlogs",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQEqroQ8LYGLgpDfzK3pyutQ"}],_o=[{category:"Interviews",title:"Off The Porch (no verified DatBoiSkeet YouTube URL yet — add via Admin)"},{category:"Behind the Scenes",title:"BTS clips (coming soon)"},{category:"Exclusive Videos",title:"Vault / member exclusives (coming soon)"}],me={youtube:"https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA",youtubeHandle:"https://www.youtube.com/@DatBoiSkeet1",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA",spotify:"https://open.spotify.com/artist/0Po64h8VleQOR97okM68zh",apple:"https://music.apple.com/us/artist/datboiskeet/1270542870"},yt=[{id:"stream-dirty-money",title:"Dirty Money (feat. Lil Baby)",artist:"DatBoiSkeet",type:"single",year:2018,albumNote:"From Broke Is the Root of All Evil",cover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/7a/67/2a7a676e-af85-489e-55fd-2bae2793948b/datboiskeet-bitroae-cover-3000px.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/17Pw88uBIWpgOVCfhEyszG",apple:"https://music.apple.com/us/song/dirty-money-feat-lil-baby/1395681218",youtubeMusic:"https://music.youtube.com/watch?v=-rHDLWfiuDI",youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI"}},{id:"stream-93",title:"93 (feat. DaBaby)",artist:"DatBoiSkeet",type:"single",year:2019,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/19/60/5f/19605f4c-7014-6dbc-ca18-baa2a672c697/194923194110.png/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/3gKwZybDOkUoz2wXquDHVZ",apple:"https://music.apple.com/us/album/93-feat-da-baby-single/1493456214",youtubeMusic:"https://music.youtube.com/watch?v=zC0BYFxs5W0",youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0"}},{id:"stream-no-love",title:"No Love (feat. YFN Lucci)",artist:"DatBoiSkeet",type:"single",year:2017,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/49/e5/62/49e56292-e427-3992-84bd-ead0b06fb06a/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/2KqnCXMM0lAMlEv1fDN63o",apple:"https://music.apple.com/us/album/no-love-feat-yfn-lucci-single/1317778810",youtubeMusic:"https://music.youtube.com/watch?v=6pCVEIE9pB8",youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8"}},{id:"stream-broke",title:"Broke Is the Root of All Evil",artist:"DatBoiSkeet",type:"album",year:2018,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/7a/67/2a7a676e-af85-489e-55fd-2bae2793948b/datboiskeet-bitroae-cover-3000px.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/51j6ReXYreCDV0ZwtPdj1Q",apple:"https://music.apple.com/us/album/broke-is-the-root-of-all-evil/1395680910",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}},{id:"stream-talk",title:"Talk of the Town",artist:"DatBoiSkeet",type:"album",year:2020,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/0d/a0/f60da0bf-c3de-8b12-5cd8-e8c1d3c2053b/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/4OY5rM0TBPDsC4n8Dka4Gr",apple:"https://music.apple.com/us/album/talk-of-the-town/1541180619",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}},{id:"stream-said-you-love-me",title:"Said You Love Me",artist:"DatBoiSkeet",type:"single",year:2025,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f4/4f/6b/f44f6b18-dff9-0486-e6e6-a615724e02fe/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/7FhoRIzhuGgmt2pZlWMc5c",apple:"https://music.apple.com/us/album/said-you-love-me-single/1835164001",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}}],_t=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",status:"Coming Soon",order:1},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",status:"Coming Soon",order:2}],Oo=[{id:"vault-long-story-short",title:"Long Story Short (Vault Preview)",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",tier:"skeet+",status:"Coming Soon"},{id:"vault-ladies-only",title:"Ladies Only (Vault Exclusive)",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",tier:"backstage",status:"Coming Soon"}],Ri=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",price:1.29,status:"Coming Soon"},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",price:1.29,status:"Coming Soon"}],Me=[{id:"hat-716-orange",name:"716 Buffalo Braves Snapback (Black/Orange)",price:30,category:"Hats",image:"/merch/01_black_orange_716_hat.jpeg",shopUrl:"https://foreignx-change.com"},{id:"hat-716-blue",name:"716 Buffalo Hat (Blue/Red)",price:30,category:"Hats",image:"/merch/02_blue_red_716_hat.jpeg",shopUrl:"https://foreignx-change.com"},{id:"jacket-blue",name:"Buffalo Sports Varsity Jacket (Blue/White)",price:200,category:"Jackets",image:"/merch/03_blue_buffalo_jacket.jpeg",shopUrl:"https://foreignx-change.com"},{id:"jacket-black",name:"Foreign X-Change Buffalo Varsity (Black/White)",price:200,category:"Jackets",image:"/merch/07_black_buffalo_jacket.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-fx-back",name:"Foreign X-Change Graphic Tee (Back)",price:65,category:"Shirts",image:"/merch/04_black_fx_tee_back_screenshot.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-fx-front",name:"Foreign X-Change Text Tee (Front)",price:65,category:"Shirts",image:"/merch/05_black_fx_tee_front_screenshot.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-ptsd",name:"PTSD Tee (Black)",price:65,category:"Shirts",image:"/merch/06_black_ptsd_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-abstract",name:"Abstract FX Tee (White)",price:65,category:"Shirts",image:"/merch/08_white_abstract_fx_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-dealer",name:"Support Your Local Dealer Tee (Navy)",price:65,category:"Shirts",image:"/merch/09_navy_dealer_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-skulls",name:"Skulls FX Tee (White)",price:65,category:"Shirts",image:"/merch/10_white_skulls_tee.jpeg",shopUrl:"https://foreignx-change.com"}],js=[{id:"frame-chrome-crown",name:"Chrome Crown",category:"frames",rarity:"legendary",price:12.99,emoji:"👑"},{id:"frame-iced-out",name:"Iced Out",category:"frames",rarity:"epic",price:9.99,emoji:"💎"},{id:"frame-trap-flame",name:"Trap Flame",category:"frames",rarity:"epic",price:7.99,emoji:"🔥"},{id:"frame-rodeo-gold",name:"Rodeo Gold",category:"frames",rarity:"rare",price:5.99,emoji:"🤠"},{id:"frame-rose-petals",name:"Rose Petals",category:"frames",rarity:"rare",price:4.99,emoji:"🌹"},{id:"fx-bass-pulse",name:"Bass Pulse",category:"effects",rarity:"epic",price:8.99,emoji:"🎵"},{id:"fx-snowfall",name:"Snowfall",category:"effects",rarity:"rare",price:5.99,emoji:"❄️"},{id:"fx-city-lights",name:"City Lights",category:"effects",rarity:"epic",price:7.99,emoji:"🌃"},{id:"fx-holo-glitch",name:"Holographic Glitch",category:"effects",rarity:"legendary",price:14.99,emoji:"✨"},{id:"ban-skyline",name:"City Skyline",category:"banners",rarity:"rare",price:4.99,emoji:"🏙️"},{id:"ban-studio",name:"Studio Booth",category:"banners",rarity:"rare",price:4.99,emoji:"🎙️"},{id:"ban-arena",name:"Arena Lights",category:"banners",rarity:"epic",price:6.99,emoji:"🏟️"},{id:"ban-chrome",name:"Luxury Chrome",category:"banners",rarity:"legendary",price:11.99,emoji:"🪞"},{id:"name-chrome",name:"Chrome Name",category:"name styles",rarity:"epic",price:6.99,emoji:"🅰️"},{id:"name-neon",name:"Neon Name",category:"name styles",rarity:"rare",price:3.99,emoji:"💜"},{id:"name-varsity",name:"Bold Varsity",category:"name styles",rarity:"rare",price:3.99,emoji:"🏟️"},{id:"name-western",name:"Western Script",category:"name styles",rarity:"epic",price:5.99,emoji:"🏜️"},{id:"badge-dayone",name:"Day One (cosmetic style)",category:"badges",rarity:"rare",price:2.99,emoji:"1️⃣"},{id:"badge-topfan",name:"Top Fan (cosmetic style)",category:"badges",rarity:"epic",price:4.99,emoji:"⭐"},{id:"badge-backstage",name:"Backstage Glow",category:"badges",rarity:"epic",price:5.99,emoji:"🎫"}],qo=[{id:"all",label:"All"},{id:"frames",label:"Frames"},{id:"effects",label:"Effects"},{id:"banners",label:"Banners"},{id:"name styles",label:"Name styles"},{id:"badges",label:"Badges"}],Rn=[{id:"skeet",name:"Skeet+",price:3.99,blurb:"Early DatBoiSkeet releases · basic Vault"},{id:"backstage",name:"Backstage",price:7.99,blurb:"Deeper Vault · studio lives · listening rooms"},{id:"inner",name:"Inner Circle",price:14.99,blurb:"VIP drops · private Q&As · Inner Circle rooms"}],No=[{label:"Long Story Short",src:"/music/01_Long_Story_Short_Coming_Soon.jpg"},{label:"Ladies Only",src:"/music/02_Ladies_Only_Coming_Soon.jpg"},{label:"716 Orange Hat",src:"/merch/01_black_orange_716_hat.jpeg"},{label:"716 Blue Hat",src:"/merch/02_blue_red_716_hat.jpeg"},{label:"Blue Jacket",src:"/merch/03_blue_buffalo_jacket.jpeg"},{label:"PTSD Tee",src:"/merch/06_black_ptsd_tee.jpeg"}],Bo=[{route:"/explore",title:"Explore",blurb:"Discover DatBoiSkeet · creators · drops"},{route:"/music",title:"Music",blurb:"Long Story Short · Ladies Only · Vault"},{route:"/videos",title:"Videos",blurb:"Official DatBoiSkeet MVs"},{route:"/posts",title:"Posts",blurb:"Text · Picture · Short · Video"},{route:"/shorts",title:"Shorts",blurb:"Under Posts · quick clips"},{route:"/live",title:"Live",blurb:"Go live · TEST MODE demo"},{route:"/shop",title:"PIKK Shop",blurb:"Foreign X-Change merch · external checkout"},{route:"/community",title:"PIKK Lounge",blurb:"Artist-owned rooms · Phase 2"},{route:"/music",title:"Vault",blurb:"Member exclusives · Coming Soon",hash:"vault"},{route:"/marketplace",title:"Marketplace",blurb:"Brand ads & sponsored offers"},{route:"/missions",title:"Missions",blurb:"Clipper promo campaigns"},{route:"/clippers",title:"Clippers",blurb:"Apply · cut clips · earn"}],jn=[{id:"home",label:"Home",href:"#/home"},{id:"explore",label:"Explore",href:"#/explore"},{id:"profile",label:"Profile / Sign in",href:"#/profile"},{id:"watch",label:"Watch",links:[{href:"#/videos",label:"Videos"},{href:"#/live",label:"Live"},{href:"#/openmic",label:"Open Mic / Talent Discovery (24/7)"},{href:"#/spotlight",label:"Spotlight (24/7)"},{href:"#/multiguest",label:"Multi-Guest Live"}]},{id:"music",label:"Music",links:[{href:"#/music",label:"Music & Vault"}]},{id:"social",label:"Social",links:[{href:"#/posts",label:"Posts"},{href:"#/posts?compose=1",label:"Post · Text / Picture / Short / Video"},{href:"#/shorts",label:"Shorts (in Posts)"},{href:"#/notifications",label:"Notifications"},{href:"#/connect",label:"Connect"},{href:"#/dating",label:"Dating & Connections"},{href:"#/community",label:"Community / Lounge"}]},{id:"messages",label:"Messages",href:"#/messages"},{id:"games",label:"Games",links:[{href:"#/games",label:"PIKK Arcade · 15 Games Coming Soon"},{href:"#/blockwars",label:"Block Wars · Coming Soon"}]},{id:"shop",label:"Shop",links:[{href:"#/merch",label:"Foreign X-Change Merch"},{href:"#/marketplace",label:"Marketplace"},{href:"#/shop",label:"PIKK Shop"},{href:"#/profile-shop",label:"Profile Shop · cosmetics"}]},{id:"earn",label:"Creators & Earnings",links:[{href:"#/wallet",label:"Wallet"},{href:"#/earnings",label:"Creator Earnings"},{href:"#/missions",label:"Missions"},{href:"#/clippers",label:"Clippers Apply"},{href:"#/share",label:"Share & Earn"},{href:"#/refer",label:"Refer & Earn"},{href:"#/pricing",label:"Pricing (rules & fees)"}]},{id:"account",label:"Account",links:[{href:"#/profile",label:"Profile"},{href:"#/signup",label:"Signup / Creator Apps"},{href:"#/loyalty",label:"Loyalty Club"},{href:"#/fanclubs",label:"Fan Clubs"},{href:"#/guidelines",label:"Community Guidelines"}]},{id:"studio",label:"Studio / Owner",links:[{href:"#/admin",label:"Admin"},{href:"#/phases",label:"Development Phases"},{href:"#/launch",label:"Launch Readiness"}]}];jn.flatMap(e=>e.href?[{href:e.href,label:e.label}]:e.links||[]);const Ro=[{href:"#/music",label:"Music",icon:"music"},{href:"#/videos",label:"Videos",icon:"videos"},{href:"#/connect",label:"Connect",icon:"profile"},{href:"#/create",label:"Create",icon:"live",primary:!0},{href:"#/dating",label:"Dating",icon:"heart"},{href:"#/games",label:"Games",icon:"game"},{href:"#/shop",label:"Shop",icon:"merch"}],Fn="dbs_v1",ls=()=>({user:null,profiles:{dbs:{id:"dbs",username:"DatBoiSkeet",bio:"Official DatBoiSkeet · Long Story Short & Ladies Only Coming Soon · Vault · Foreign X-Change",avatar:"/brand/logo-dbs-v3@2x.webp",followers:[],following:[],verified:!0}},posts:[],comments:{},likes:{},clipperApps:[],creatorSellApps:[],brandApps:[],listings:[],live:null,liveHistory:[],liveSongRequests:[],coins:{balance:0,history:[]},liveGiftLedger:[],liveGbChallengePop:null,threads:{},demoUnreadSeeded:!1,messagePrefs:{allowDMs:!0,allowRequests:!0},notifications:{releases:!0,lives:!0,messages:!0,quietHours:!1},wallet:{balance:0,history:[]},creatorWallet:{available:0,holds:0,threshold:25,verification:"demo_unverified",earnings:[],payouts:[]},catalog:[],missions:[],giftBattles:{active:null,history:[],champions:[],prefs:{invitationsEnabled:!0}},multiGuest:{active:null,history:[]},spotlight:{nowPlaying:null,queue:[],history:[],houseIndex:0},fanClubs:{clubs:[],posts:{},seeded:!1},shareEarn:{platformsLinked:[],challenge:null,submissions:[],rewardsClaimed:[]},referEarn:{code:"",invitees:[],milestonesClaimed:[]},restream:{platforms:{},selected:[],session:null,history:[],ingest:null,campaign:{tier:null,status:"none",enrolledAt:null,cancelledAt:null},campaignConfig:null},loyalty:{points:0,history:[],badges:[],publicVisible:!0,lastActionAt:{},dayCounts:{}},openMic:{applications:[],seeded:!1,houseIndex:0},profileShop:{owned:[],equipped:{},reduceMotion:!1},hotFeed:{lives:[],posts:[],seededLives:!1,seededPosts:!1,seededPostsVer:0},engagementAlerts:[],postShares:{},splashSeenAt:0,dailyGoals:{app:null,liveByHost:{},history:[]}});function jo(){var e,t,s,a,i,n,r,l,u,c,p,m,g,f,b,y,v,w,$,C,k,I,T,G,x,Q,D,O,z,F,M,P,q,U,Y,K,H,Se,Ee,Ve,ze,dt,pt,ut,mt,te,Ae,Oe,Ds,E,De;try{const Yt=localStorage.getItem(Fn);if(!Yt)return ls();const S=JSON.parse(Yt),ie=ls();return{...ie,...S,profiles:{...ie.profiles,...S.profiles||{}},notifications:{...ie.notifications,...S.notifications||{}},wallet:{...ie.wallet,...S.wallet||{}},creatorWallet:{...ie.creatorWallet,...S.creatorWallet||{},earnings:Array.isArray((e=S.creatorWallet)==null?void 0:e.earnings)?S.creatorWallet.earnings:[],payouts:Array.isArray((t=S.creatorWallet)==null?void 0:t.payouts)?S.creatorWallet.payouts:[],available:Number((s=S.creatorWallet)==null?void 0:s.available)||0,holds:Number((a=S.creatorWallet)==null?void 0:a.holds)||0,threshold:Number((i=S.creatorWallet)==null?void 0:i.threshold)>0?Number(S.creatorWallet.threshold):25,verification:((n=S.creatorWallet)==null?void 0:n.verification)==="demo_verified"?"demo_verified":"demo_unverified"},brandApps:S.brandApps||[],listings:Array.isArray(S.listings)?S.listings:[],live:S.live??null,liveHistory:Array.isArray(S.liveHistory)?S.liveHistory:[],liveSongRequests:Array.isArray(S.liveSongRequests)?S.liveSongRequests:[],coins:{balance:Number((r=S.coins)==null?void 0:r.balance)||0,history:Array.isArray((l=S.coins)==null?void 0:l.history)?S.coins.history:[]},liveGiftLedger:Array.isArray(S.liveGiftLedger)?S.liveGiftLedger:[],liveGbChallengePop:S.liveGbChallengePop||null,threads:{...S.threads||{}},demoUnreadSeeded:!!S.demoUnreadSeeded,messagePrefs:{...ie.messagePrefs,...S.messagePrefs||{}},catalog:Array.isArray(S.catalog)?S.catalog:[],missions:Array.isArray(S.missions)?S.missions:[],giftBattles:{...ie.giftBattles,...S.giftBattles||{},history:Array.isArray((u=S.giftBattles)==null?void 0:u.history)?S.giftBattles.history:[],champions:Array.isArray((c=S.giftBattles)==null?void 0:c.champions)?S.giftBattles.champions:[],prefs:{...ie.giftBattles.prefs,...((p=S.giftBattles)==null?void 0:p.prefs)||{}},active:((m=S.giftBattles)==null?void 0:m.active)??null},multiGuest:{...ie.multiGuest,...S.multiGuest||{},history:Array.isArray((g=S.multiGuest)==null?void 0:g.history)?S.multiGuest.history:[],active:((f=S.multiGuest)==null?void 0:f.active)??null},fanClubs:{...ie.fanClubs,...S.fanClubs||{},clubs:Array.isArray((b=S.fanClubs)==null?void 0:b.clubs)?S.fanClubs.clubs:[],posts:(y=S.fanClubs)!=null&&y.posts&&typeof S.fanClubs.posts=="object"?S.fanClubs.posts:{},seeded:!!((v=S.fanClubs)!=null&&v.seeded)},shareEarn:{...ie.shareEarn,...S.shareEarn||{},platformsLinked:Array.isArray((w=S.shareEarn)==null?void 0:w.platformsLinked)?S.shareEarn.platformsLinked:[],challenge:(($=S.shareEarn)==null?void 0:$.challenge)??null,submissions:Array.isArray((C=S.shareEarn)==null?void 0:C.submissions)?S.shareEarn.submissions:[],rewardsClaimed:Array.isArray((k=S.shareEarn)==null?void 0:k.rewardsClaimed)?S.shareEarn.rewardsClaimed:[]},referEarn:{...ie.referEarn,...S.referEarn||{},code:typeof((I=S.referEarn)==null?void 0:I.code)=="string"?S.referEarn.code:"",invitees:Array.isArray((T=S.referEarn)==null?void 0:T.invitees)?S.referEarn.invitees:[],milestonesClaimed:Array.isArray((G=S.referEarn)==null?void 0:G.milestonesClaimed)?S.referEarn.milestonesClaimed:[]},restream:{...ie.restream,...S.restream||{},platforms:(x=S.restream)!=null&&x.platforms&&typeof S.restream.platforms=="object"?S.restream.platforms:{},selected:Array.isArray((Q=S.restream)==null?void 0:Q.selected)?S.restream.selected:[],session:((D=S.restream)==null?void 0:D.session)??null,history:Array.isArray((O=S.restream)==null?void 0:O.history)?S.restream.history:[],ingest:((z=S.restream)==null?void 0:z.ingest)??null,campaign:{...ie.restream.campaign,...((F=S.restream)==null?void 0:F.campaign)||{}},campaignConfig:((M=S.restream)==null?void 0:M.campaignConfig)??null},loyalty:{...ie.loyalty,...S.loyalty||{},points:Number((P=S.loyalty)==null?void 0:P.points)||0,history:Array.isArray((q=S.loyalty)==null?void 0:q.history)?S.loyalty.history:[],badges:Array.isArray((U=S.loyalty)==null?void 0:U.badges)?S.loyalty.badges:[],publicVisible:((Y=S.loyalty)==null?void 0:Y.publicVisible)===void 0?!0:!!S.loyalty.publicVisible,lastActionAt:(K=S.loyalty)!=null&&K.lastActionAt&&typeof S.loyalty.lastActionAt=="object"?S.loyalty.lastActionAt:{},dayCounts:(H=S.loyalty)!=null&&H.dayCounts&&typeof S.loyalty.dayCounts=="object"?S.loyalty.dayCounts:{}},openMic:{...ie.openMic,...S.openMic||{},applications:Array.isArray((Se=S.openMic)==null?void 0:Se.applications)?S.openMic.applications:[],seeded:!!((Ee=S.openMic)!=null&&Ee.seeded),houseIndex:typeof((Ve=S.openMic)==null?void 0:Ve.houseIndex)=="number"?S.openMic.houseIndex:0},profileShop:{...ie.profileShop,...S.profileShop||{},owned:Array.isArray((ze=S.profileShop)==null?void 0:ze.owned)?S.profileShop.owned:[],equipped:(dt=S.profileShop)!=null&&dt.equipped&&typeof S.profileShop.equipped=="object"?S.profileShop.equipped:{},reduceMotion:!!((pt=S.profileShop)!=null&&pt.reduceMotion)},hotFeed:{...ie.hotFeed,...S.hotFeed||{},lives:Array.isArray((ut=S.hotFeed)==null?void 0:ut.lives)?S.hotFeed.lives:[],posts:Array.isArray((mt=S.hotFeed)==null?void 0:mt.posts)?S.hotFeed.posts:[],seededLives:!!((te=S.hotFeed)!=null&&te.seededLives),seededPosts:!!((Ae=S.hotFeed)!=null&&Ae.seededPosts),seededPostsVer:Number((Oe=S.hotFeed)==null?void 0:Oe.seededPostsVer)||0},engagementAlerts:Array.isArray(S.engagementAlerts)?S.engagementAlerts:[],postShares:S.postShares&&typeof S.postShares=="object"?S.postShares:{},creatorSellApps:Array.isArray(S.creatorSellApps)?S.creatorSellApps:[],dailyGoals:{...ie.dailyGoals,...S.dailyGoals||{},app:((Ds=S.dailyGoals)==null?void 0:Ds.app)??null,liveByHost:(E=S.dailyGoals)!=null&&E.liveByHost&&typeof S.dailyGoals.liveByHost=="object"?S.dailyGoals.liveByHost:{},history:Array.isArray((De=S.dailyGoals)==null?void 0:De.history)?S.dailyGoals.history:[]}}}catch{return ls()}}function A(e){localStorage.setItem(Fn,JSON.stringify(e))}let d=jo();function L(){return d}function ji(e){return d={...d,...e},A(d),d}function Fo(e){return d=e(d)||d,A(d),d}function nt(e){e&&(d={...d,profiles:{...d.profiles,[e.id]:{id:e.id,username:e.username,bio:e.bio||"",avatar:e.avatar||"",followers:e.followers||[],following:e.following||[],memberships:e.memberships||{},verified:!!e.verified}}})}function $t(e){return e?d.user&&d.user.id===e?d.user:d.profiles[e]||null:null}function Fi(e){const t=$t(e);return t?(t.followers||[]).map(s=>$t(s)||{id:s,username:s}).filter(Boolean):[]}function Ra(e){const t=$t(e);return t?(t.following||[]).map(s=>$t(s)||{id:s,username:s}).filter(Boolean):[]}function Kn(){if(d.posts.length)return;const e=[{id:"p1",userId:"dbs",username:"DatBoiSkeet",text:"Long Story Short — cover is up. Coming Soon on DBS Music. Stay ready.",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",at:Date.now()-864e5*2},{id:"p2",userId:"dbs",username:"DatBoiSkeet",text:"Foreign X-Change — hats, tees & jackets. Checkout on ForeignX-Change.com (not inside DBS).",image:"/merch/01_black_orange_716_hat.jpeg",at:Date.now()-864e5},{id:"p3",userId:"dbs",username:"DatBoiSkeet",text:"Ladies Only — cover art live. Official playback unlocks when the single drops.",image:"/music/02_Ladies_Only_Coming_Soon.jpg",at:Date.now()-864e5*3},{id:"p4",userId:"dbs",username:"DatBoiSkeet",text:"716 Buffalo Braves snapback on Foreign X-Change — shop the external store.",image:"/merch/02_blue_red_716_hat.jpeg",at:Date.now()-864e5*4}];d={...d,posts:e,likes:{p1:[],p2:[],p3:[],p4:[]},comments:{p1:[],p2:[],p3:[],p4:[]}},A(d)}function jt(e){const t=(e||"Fan").trim().slice(0,24)||"Fan",s="u_"+t.toLowerCase().replace(/\W+/g,"_")+"_"+Date.now().toString(36),a={id:s,username:t,bio:"DBS fan · local demo account (TEST MODE)",avatar:"",followers:[],following:["dbs"],membership:null,memberships:{skeetPlus:!1,backstage:!1,innerCircle:!1},purchasedTracks:[],createdAt:Date.now()},i=d.profiles.dbs||ls().profiles.dbs,n=new Set(i.followers||[]);return n.add(s),d={...d,user:a,profiles:{...d.profiles,dbs:{...i,followers:[...n]}}},nt(a),A(d),a}function Ko(){d={...d,user:null},A(d)}function Go({bio:e,avatar:t,username:s}){const a=d.user;if(!a)return{error:"signin"};const i={...a,bio:e!==void 0?String(e).slice(0,280):a.bio,avatar:t!==void 0?String(t).trim():a.avatar,username:s!==void 0&&String(s).trim().slice(0,24)||a.username};return d={...d,user:i},nt(i),A(d),i}function na(e,t=!0){const s=d.user;if(!s)return{error:"signin"};let a=s.membership??null;const i=c=>c==="skeet"||c==="skeetPlus"||c==="skeet+"?"skeet+":c==="backstage"?"backstage":c==="inner"||c==="innerCircle"?"inner":null,n={null:0,"skeet+":1,backstage:2,inner:3},r=i(e);t?r&&(a=r):a=null;const l={skeetPlus:n[a||"null"]>=1,backstage:n[a||"null"]>=2,innerCircle:n[a||"null"]>=3},u={...s,membership:a,memberships:l};return d={...d,user:u},nt(u),A(d),u}function Et(){const e=d.user;if(!e)return null;if(e.membership)return e.membership;const t=e.memberships||{};return t.innerCircle?"inner":t.backstage?"backstage":t.skeetPlus?"skeet+":null}function ja(e="skeet"){const t=Et(),s={null:0,"skeet+":1,backstage:2,inner:3},a=e==="backstage"?2:e==="inner"?3:1;return(s[t||"null"]||0)>=a}function Uo(e){const t=d.user;if(!t)return{error:"signin"};const s=new Set(t.purchasedTracks||[]);s.add(e);const a={...t,purchasedTracks:[...s]};return d={...d,user:a},nt(a),A(d),a}function Ki({text:e,image:t,mediaType:s,mediaUrl:a}){const i=d.user;if(!i)throw new Error("Sign in required");const n="p_"+Date.now().toString(36),r=["picture","short","video","image","text"].includes(s)?s==="image"?"picture":s:t?"picture":"text",l={id:n,userId:i.id,username:i.username,text:(e||"").trim(),image:(t||"").trim(),mediaType:r==="text"&&!(t||"").trim()?"text":r,mediaUrl:(a||"").trim(),at:Date.now()};return d={...d,posts:[l,...d.posts],likes:{...d.likes,[n]:[]},comments:{...d.comments,[n]:[]}},A(d),l}function Vo(e){const t=d.user;if(!t)return{error:"signin"};const s=new Set(d.likes[e]||[]);s.has(t.id)?s.delete(t.id):s.add(t.id),d={...d,likes:{...d.likes,[e]:[...s]}},A(d);try{je()}catch{}return{count:s.size,liked:s.has(t.id)}}function zo(e,t){const s=d.user;if(!s)return{error:"signin"};const a={id:"c_"+Date.now().toString(36),userId:s.id,username:s.username,text:t.trim(),at:Date.now()},i=d.comments[e]||[];d={...d,comments:{...d.comments,[e]:[...i,a]}},A(d);try{je()}catch{}return a}function ra(e){const t=d.user;if(!t)return{error:"signin"};if(e===t.id)return{error:"self"};if(t.following.includes(e))return t;const s={...t,following:[...t.following,e]},a={...d.profiles},i=a[e]||$t(e);if(i){const n=new Set(i.followers||[]);n.add(t.id),a[e]={...i,followers:[...n]}}return d={...d,user:s,profiles:a},nt(s),A(d),s}function oa(e){const t=d.user;if(!t)return{error:"signin"};const s={...t,following:(t.following||[]).filter(n=>n!==e)},a={...d.profiles},i=a[e]||$t(e);return i&&(a[e]={...i,followers:(i.followers||[]).filter(n=>n!==t.id)}),d={...d,user:s,profiles:a},nt(s),A(d),s}function Ho(e){const t={id:"clip_"+Date.now().toString(36),...e,status:"pending",at:Date.now()};return d={...d,clipperApps:[t,...d.clipperApps]},A(d),t}function Wo(e){const t=e||{},s=String(t.name||"").trim().slice(0,80),a=String(t.contact||t.email||t.handle||"").trim().slice(0,120),i=String(t.sells||"both").trim().slice(0,40),n=!!t.agreed;if(!s||!a)return{error:"missing"};if(!n)return{error:"rules"};const r={id:"csa_"+Date.now().toString(36),name:s,contact:a,sells:["music","merch","both"].includes(i)?i:"both",agreed:!0,status:"pending",at:Date.now()},l=[r,...d.creatorSellApps||[]].slice(0,40);return d={...d,creatorSellApps:l},A(d),{ok:!0,app:r}}function Gn(e,t){if(!["pending","approved","rejected","waitlisted"].includes(t))return{error:"bad_status"};const a=d.clipperApps.map(i=>i.id===e?{...i,status:t,reviewedAt:Date.now()}:i);return d={...d,clipperApps:a},A(d),a.find(i=>i.id===e)}function $a(e){d={...d,notifications:{...d.notifications,...e}},A(d)}function Yo(){d={...d,splashSeenAt:Date.now()},A(d)}function Jo(){return!d.splashSeenAt}function ae(){return!!(d.user&&d.user.role==="admin")}function ks(e=!0){const t=d.user;if(!t)return{error:"signin"};const s={...t,role:e?"admin":"fan"};return d={...d,user:s},nt(s),A(d),s}function Un(){var l;const e=d.posts||[],t=d.clipperApps||[],s={pending:0,approved:0,rejected:0,waitlisted:0};t.forEach(u=>{const c=u.status||"pending";s[c]!==void 0?s[c]+=1:s.pending+=1});let a=0;Object.values(d.likes||{}).forEach(u=>{a+=(u||[]).length});let i=0;Object.values(d.comments||{}).forEach(u=>{i+=(u||[]).length});let n=0;d.user&&(d.user.membership||(l=d.user.memberships)!=null&&l.skeetPlus)&&(n+=1),Object.values(d.profiles||{}).forEach(u=>{var c,p;u.id!==((c=d.user)==null?void 0:c.id)&&(u.membership||(p=u.memberships)!=null&&p.skeetPlus)&&(n+=1)});const r=d.catalog||[];return{posts:e.length,likes:a,comments:i,clippers:t.length,clipperByStatus:s,members:n,profiles:Object.keys(d.profiles||{}).length,catalogTotal:r.length,catalogPublished:r.filter(u=>u.published).length}}function Vn(e){const t=["spotify","apple","youtubeMusic","youtube","tidal","amazon"],s={};if(!e||typeof e!="object")return s;for(const a of t){const i=String(e[a]||"").trim();(i.startsWith("http://")||i.startsWith("https://"))&&(s[a]=i.slice(0,500))}return s}function St({publishedOnly:e=!1,types:t=null,includeUnpublishedForAdmin:s=!1}={}){let a=d.catalog||[];if(e?a=a.filter(i=>i.published):s||(a=a.filter(i=>i.published)),t&&t.length){const i=new Set(t);a=a.filter(n=>i.has(n.type))}return[...a].sort((i,n)=>(n.createdAt||0)-(i.createdAt||0))}function Qo(e){var a;if(!ae())return{error:"forbidden"};const s={id:e.id||"cat_"+Date.now().toString(36),type:e.type,title:String(e.title||"").trim().slice(0,120),artist:String(e.artist).trim().slice(0,80),coverRef:e.coverRef||"",mediaRef:e.mediaRef||"",youtube:String(e.youtube||"").trim(),embed:String(e.embed||"").trim(),streamingLinks:Vn(e.streamingLinks),published:!!e.published,createdAt:Date.now(),updatedAt:Date.now(),createdBy:((a=d.user)==null?void 0:a.id)||null};return s.title?["song","album","video","picture"].includes(s.type)?(d={...d,catalog:[s,...d.catalog||[]]},A(d),s):{error:"type"}:{error:"title"}}function zn(e,t){if(!ae())return{error:"forbidden"};let s=null;const a=(d.catalog||[]).map(i=>{if(i.id!==e)return i;const n={...i,...t,id:i.id,updatedAt:Date.now()};return t&&Object.prototype.hasOwnProperty.call(t,"streamingLinks")&&(n.streamingLinks=Vn(t.streamingLinks)),s=n,s});return s?(d={...d,catalog:a},A(d),s):{error:"missing"}}function Xo(e,t){return zn(e,{published:!!t})}function Zo(e){if(!ae())return{error:"forbidden"};const t=(d.catalog||[]).filter(s=>s.id!==e);return d={...d,catalog:t},A(d),!0}function Gi(e){const t=d.user;if(!t)return{error:"signin"};if(d.live&&!d.live.endedAt)return{error:"already_live",live:d.live};const s={id:"live_"+Date.now().toString(36),hostId:t.id,hostName:t.username,title:(e||"DBS Live · TEST MODE").trim().slice(0,80),startedAt:Date.now(),viewers:3+Math.floor(Math.random()*18),giftsTotal:0,tipsTotal:0,giftLog:[],chat:[{id:"sys1",userId:"system",username:"DBS",text:"Welcome · Follow DatBoiSkeet · TEST MODE (no real stream)",at:Date.now()}],endedAt:null};return d={...d,live:s},A(d),s}function el(){if(!d.live||d.live.endedAt)return d.live;const e={...d.live,endedAt:Date.now()},t=[e,...d.liveHistory||[]].slice(0,20);return d={...d,live:e,liveHistory:t},A(d),e}function tl(){if(!d.live||d.live.endedAt)return d.live;const e=Math.floor(Math.random()*5)-1,t=Math.max(1,(d.live.viewers||1)+e),s={...d.live,viewers:t};return d={...d,live:s},A(d),s}function sl(e){const t=d.user;if(!t)return{error:"signin"};if(!d.live||d.live.endedAt)return{error:"offline"};const s={id:"lc_"+Date.now().toString(36),userId:t.id,username:t.username,text:String(e||"").trim().slice(0,280),at:Date.now()};if(!s.text)return{error:"empty"};const a={...d.live,chat:[...d.live.chat||[],s]};return d={...d,live:a},A(d),s}function Hn({kind:e="tip",amount:t=1,label:s=""}={}){var m;const a=d.user;if(!a)return{error:"signin"};if(!d.live||d.live.endedAt)return{error:"offline"};const i=Math.max(.5,Number(t)||1),n=e==="gift"?"gift":"tip",r=((m=d.wallet)==null?void 0:m.balance)||0;let l=d.wallet||{balance:0,history:[]};r>=i&&(l={balance:+(r-i).toFixed(2),history:[...l.history||[],{at:Date.now(),amount:-i,note:`Live ${n} · ${d.live.title}`}]});const u={id:"lg_"+Date.now().toString(36),userId:a.id,username:a.username,kind:n,amount:i,label:(s||(n==="gift"?"🔥 Fire":"Tip")).slice(0,40),at:Date.now()},c={id:"lc_"+Date.now().toString(36)+"g",userId:a.id,username:a.username,text:n==="gift"?`sent ${u.label} ($${i.toFixed(2)}) · TEST MODE`:`tipped $${i.toFixed(2)} · TEST MODE`,at:Date.now(),support:!0},p={...d.live,giftsTotal:(d.live.giftsTotal||0)+(n==="gift"?i:0),tipsTotal:(d.live.tipsTotal||0)+(n==="tip"?i:0),giftLog:[...d.live.giftLog||[],u],chat:[...d.live.chat||[],c]};return d={...d,live:p,wallet:l},A(d),r>=i&&di({category:n==="gift"?"gifts":"tips",gross:i,note:`Live ${n} from @${a.username} · ${d.live.title}`,source:"live"}),{live:p,entry:u,wallet:d.wallet,creatorWallet:d.creatorWallet}}function al(){return d.liveHistory||[]}const Wn=[{pack:1,price:10,label:"1 song",save:0},{pack:2,price:25,label:"2 songs",save:0},{pack:3,price:45,label:"3 songs",save:5}];function cs(){return Array.isArray(d.liveSongRequests)?d.liveSongRequests:[]}function il(e){var s;const t=e||((s=d.live)==null?void 0:s.id);return t?cs().filter(a=>a.liveId===t):[]}function si(e){const t=[];for(const s of il(e))(s.titles||[]).forEach((a,i)=>{t.push({requestId:s.id,songIndex:i,title:a,status:s.songStatuses&&s.songStatuses[i]||"queued",username:s.username,userId:s.userId,pack:s.pack,price:s.price,at:s.at})});return t}function nl({pack:e,titles:t}={}){var p;const s=d.user;if(!s)return{error:"signin"};if(!d.live||d.live.endedAt)return{error:"offline"};const a=Wn.find(m=>m.pack===Number(e));if(!a)return{error:"bad_pack"};const i=(Array.isArray(t)?t:[]).map(m=>String(m||"").trim().slice(0,80)).filter(Boolean);if(i.length!==a.pack)return{error:"title_count",need:a.pack,got:i.length};const n=ir(a.price,`Song request ×${a.pack} · ${d.live.title} · TEST MODE`);if((n==null?void 0:n.error)==="insufficient")return{error:"insufficient",need:a.price,balance:Number(((p=d.wallet)==null?void 0:p.balance)||0)};const r={id:"lsr_"+Date.now().toString(36),liveId:d.live.id,hostId:d.live.hostId,userId:s.id,username:s.username,pack:a.pack,price:a.price,titles:i,songStatuses:i.map(()=>"queued"),status:"open",at:Date.now(),charged:a.price},l=[r,...cs()].slice(0,200),u={id:"lc_"+Date.now().toString(36)+"sr",userId:s.id,username:s.username,text:`requested ${a.pack} song${a.pack>1?"s":""} ($${a.price}) · TEST MODE`,at:Date.now(),support:!0},c={...d.live,chat:[...d.live.chat||[],u]};return d={...d,liveSongRequests:l,live:c},A(d),di({category:"tips",gross:a.price,note:`Song request ×${a.pack} from @${s.username} · ${d.live.title}`,source:"live_song_request"}),{ok:!0,entry:r,wallet:d.wallet,live:d.live}}function ai(e,t,s){var b;const a=d.user;if(!a)return{error:"signin"};if(!["playing","played","skipped","queued"].includes(s))return{error:"bad_status"};const n=cs().findIndex(y=>y.id===e);if(n<0)return{error:"missing"};const r=cs()[n],l=d.live;if(!(l&&l.hostId===a.id&&l.id===r.liveId||a.id===r.hostId)&&!ae())return{error:"host_only"};const c=Number(t);if(!Number.isInteger(c)||c<0||c>=(r.titles||[]).length)return{error:"bad_index"};let p=[...r.songStatuses||r.titles.map(()=>"queued")];if(s==="playing"){const y=cs().map(v=>{if(v.liveId!==r.liveId)return v;const w=[...v.songStatuses||(v.titles||[]).map(()=>"queued")];let $=!1;for(let k=0;k<w.length;k++)w[k]==="playing"&&(w[k]="played",$=!0);if(!$)return v;const C=w.every(k=>k==="played"||k==="skipped");return{...v,songStatuses:w,status:C?"done":"open"}});d={...d,liveSongRequests:y},p=[...((b=d.liveSongRequests[n])==null?void 0:b.songStatuses)||p]}p[c]=s;const m=p.every(y=>y==="played"||y==="skipped"),g={...d.liveSongRequests[n],songStatuses:p,status:m?"done":"open"},f=[...d.liveSongRequests];return f[n]=g,d={...d,liveSongRequests:f},A(d),{ok:!0,entry:g}}function rl(e,t){return ai(e,t,"playing")}function ol(e,t){return ai(e,t,"skipped")}function ll(e,t){return ai(e,t,"played")}const ii=[{slug:"rose",name:"DBS Rose",coins:5,usd:.1,animation:"Rotating glossy rose and petals",tier:"small"},{slug:"big-love",name:"Big Love",coins:25,usd:.5,animation:"Pulsing luminous heart",tier:"small"},{slug:"turn-up",name:"Turn Up",coins:50,usd:1,animation:"Flame burst and DBS sparks",tier:"small"},{slug:"cash-rain",name:"Cash Rain",coins:150,usd:3,animation:"Stylized bills and confetti",tier:"mid"},{slug:"bottle-pop",name:"Bottle Pop",coins:300,usd:6,animation:"Bottle pop and confetti",tier:"mid"},{slug:"money-gun",name:"Money Gun",coins:750,usd:15,animation:"Stylized cash launcher",tier:"premium"},{slug:"diamond-drip",name:"Diamond Drip",coins:1500,usd:30,animation:"Rotating diamond",tier:"premium"},{slug:"foreign-whip",name:"Foreign Whip",coins:3e3,usd:60,animation:"Original luxury vehicle drives across screen",tier:"premium"},{slug:"helicopter",name:"Helicopter",coins:5e3,usd:100,animation:"Helicopter spotlight flyover",tier:"cinematic"},{slug:"private-jet",name:"Private Jet",coins:1e4,usd:200,animation:"Jet cinematic flyover",tier:"cinematic"},{slug:"dbs-crown",name:"DBS Crown",coins:25e3,usd:500,animation:"Gold diamond crown",tier:"cinematic"},{slug:"dbs-universe",name:"DBS Universe",coins:5e4,usd:1e3,animation:"Galaxy DBS logo reveal",tier:"cinematic"}],la=[{coins:100,usd:2},{coins:500,usd:10},{coins:1e3,usd:20},{coins:2500,usd:50},{coins:5e3,usd:100},{coins:1e4,usd:200}],cl=750,xa=80,Ui=20;function ca(e){return{balance:Math.max(0,Number(e==null?void 0:e.balance)||0),history:Array.isArray(e==null?void 0:e.history)?e.history:[]}}function da(){return ca(d.coins).balance}function dl(){return la.map(e=>({...e}))}function pl(){return ii.map(e=>({...e}))}function Yn(e){const t=la.find(n=>n.coins===Number(e));if(!t)return{error:"bad_package"};const s=ca(d.coins),a={at:Date.now(),amount:t.coins,note:`Bought ${t.coins} coins ($${t.usd}) · TEST MODE`,kind:"buy",packageCoins:t.coins,usd:t.usd},i={balance:s.balance+t.coins,history:[a,...s.history].slice(0,200)};return d={...d,coins:i},A(d),{ok:!0,coins:i,pack:t,entry:a}}function ni(){return Array.isArray(d.liveGiftLedger)?d.liveGiftLedger:[]}function ul(e){var s;const t=e||((s=d.live)==null?void 0:s.id);return t?ni().filter(a=>a.liveId===t).map(a=>({id:a.id,liveId:a.liveId,giftSlug:a.giftSlug,giftName:a.giftName,coins:a.coins,usd:a.usd,fromUserId:a.fromUserId,fromUser:a.fromUser,at:a.at,animation:a.animation,tier:a.tier})):[]}function ml(e=10,t=Date.now()){const s=Math.min(Math.max(1,Number(e)||10),10),a=new Date(t);a.setHours(0,0,0,0);const i=a.getTime(),n=new Date(t);n.setHours(23,59,59,999);const r=n.getTime(),l={};for(const u of ni()){const c=Number(u.at||0);if(c<i||c>r)continue;const p=u.fromUserId||u.fromUser||"anon",m=l[p]||{userId:p,username:u.fromUser||p,usd:0,coins:0,gifts:0,lastSlug:u.giftSlug||"rose"};m.usd=+(m.usd+Number(u.usd||0)).toFixed(2),m.coins+=Number(u.coins||0),m.gifts+=1,m.username=u.fromUser||m.username,m.lastSlug=u.giftSlug||m.lastSlug,l[p]=m}return Object.values(l).sort((u,c)=>c.usd-u.usd||c.coins-u.coins||u.username.localeCompare(c.username)).slice(0,s)}function Jn(e){let s=(ci(d.creatorWallet).earnings||[]).filter(a=>a.category==="gifts");return e&&(s=s.filter(a=>!a.hostId||a.hostId===e)),s.map(a=>({...a}))}function hl({liveId:e,slug:t}={}){const s=d.user;if(!s)return{error:"signin"};const a=d.live;if(!a||a.endedAt)return{error:"offline"};if(e&&e!==a.id)return{error:"live_mismatch"};const i=ii.find(x=>x.slug===t);if(!i)return{error:"bad_gift"};const n=ca(d.coins);if(n.balance<i.coins)return{error:"insufficient",need:i.coins,balance:n.balance};const r=N(i.usd),l=0,u=r,c=N(u*xa/100),p=N(u-c),m=Date.now(),g="lgift_"+m.toString(36)+"_"+Math.random().toString(36).slice(2,6),f={at:m,amount:-i.coins,note:`Gift ${i.name} · ${a.title} · TEST MODE`,kind:"gift",giftSlug:i.slug,liveId:a.id,usd:r},b={balance:n.balance-i.coins,history:[f,...n.history].slice(0,200)},y={id:g,liveId:a.id,hostId:a.hostId,giftSlug:i.slug,giftName:i.name,coins:i.coins,usd:r,fees:l,net:u,creatorShare:c,platformShare:p,dbsShare:p,creatorPct:xa,dbsPct:Ui,fromUserId:s.id,fromUser:s.username,at:m,animation:i.animation,tier:i.tier,testModeNetAsListed:!0},v={id:g,userId:s.id,username:s.username,kind:"gift",giftSlug:i.slug,label:i.name,amount:r,coins:i.coins,at:m},w={id:"lc_"+m.toString(36)+"gf",userId:s.id,username:s.username,text:`sent ${i.name} (${i.coins} coins) · TEST MODE`,at:m,support:!0,giftSlug:i.slug},$={...a,giftsTotal:N((a.giftsTotal||0)+r),giftLog:[...a.giftLog||[],v],chat:[...a.chat||[],w]},C=[y,...ni()].slice(0,500),k=ci(d.creatorWallet),I={id:"earn_"+m.toString(36)+"_"+Math.random().toString(36).slice(2,6),category:"gifts",label:"Live gifts",note:`Live gift ${i.name} from @${s.username} · ${a.title}`,gross:r,fees:l,net:u,creatorPct:xa,dbsPct:Ui,creatorShare:c,dbsShare:p,source:"live_gift",giftSlug:i.slug,giftId:g,liveId:a.id,hostId:a.hostId,fromUserId:s.id,at:m,payoutId:null},T={...k,available:N(k.available+c),earnings:[I,...k.earnings||[]]},G={id:"gbpop_"+m.toString(36),liveId:a.id,fromUserId:s.id,fromUser:s.username,giftSlug:i.slug,giftName:i.name,coins:i.coins,usd:r,at:m,expiresAt:m+6e4};return d={...d,coins:b,live:$,liveGiftLedger:C,creatorWallet:T,liveGbChallengePop:G},A(d),{ok:!0,entry:y,viewerEntry:v,coins:b,live:$,earning:I,creatorWallet:T,challengePop:G}}const Qn=24*60*60*1e3,Vi=50;function pa(e){return{app:e!=null&&e.app&&typeof e.app=="object"?e.app:null,liveByHost:e!=null&&e.liveByHost&&typeof e.liveByHost=="object"?{...e.liveByHost}:{},history:Array.isArray(e==null?void 0:e.history)?e.history:[]}}function hs(e,t=Date.now()){return!e||typeof e!="object"?!1:(Number(e.endsAt)||0)>t}function Ot(e){return e?{...e}:null}function Xn(e){return"goal_"+e+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6)}function ri(e,t){if(!t)return e;const s=[{...t,archivedAt:Date.now()},...e.history||[]].slice(0,40);return{...e,history:s}}function gl(e=Date.now()){return{id:Xn("app"),scope:"app",name:"PIKK daily community goal",targetAmount:50,raised:0,endsAt:e+Qn,createdAt:e}}function Ws(e){return d={...d,dailyGoals:e},A(d),e}function Fa(e=Date.now()){let t=pa(d.dailyGoals),s=!1;return t.app&&!hs(t.app,e)&&(t={...ri(t,t.app),app:null},s=!0),hs(t.app,e)||(t={...t,app:gl(e)},s=!0),s&&Ws(t),t.app&&t.app.name==="DBS daily community goal"&&(t={...t,app:{...t.app,name:"PIKK daily community goal"}},Ws(t)),Ot(t.app)}function fl(e,t=Date.now()){var n,r;const s=e||((n=d.live)==null?void 0:n.hostId)||((r=d.user)==null?void 0:r.id)||null;if(!s)return null;let a=pa(d.dailyGoals);const i=a.liveByHost[s]||null;if(i&&!hs(i,t)){const l={...a.liveByHost};return delete l[s],a={...ri(a,i),liveByHost:l},Ws(a),null}return Ot(hs(i,t)?i:null)}function Zn({name:e,targetAmount:t}={}){const s=d.user;if(!s)return{error:"signin"};const a=String(e||"").trim().slice(0,80),i=Number(t);if(!a)return{error:"bad_name"};if(!Number.isFinite(i)||i<=0)return{error:"bad_amount"};const n=Date.now();let r=pa(d.dailyGoals);const l=r.liveByHost[s.id];l&&(r=ri(r,l));const u={id:Xn("live"),scope:"live",hostId:s.id,hostName:s.username,name:a,targetAmount:N(i),raised:0,endsAt:n+Qn,createdAt:n};return r={...r,liveByHost:{...r.liveByHost,[s.id]:u}},Ws(r),{ok:!0,goal:Ot(u)}}function Ys(e,t){if(!d.user)return{error:"signin"};const a=Math.floor(Number(t));if(!Number.isFinite(a)||a<=0)return{error:"invalid_amount"};const i=String(e||"");if(!i)return{error:"unknown_goal"};const n=Date.now();let r=pa(d.dailyGoals),l=null,u=null,c=null;if(r.app&&r.app.id===i)l="app",c=r.app;else for(const[k,I]of Object.entries(r.liveByHost))if(I&&I.id===i){l="live",u=k,c=I;break}if(!c)return{error:"unknown_goal"};if(!hs(c,n))return{error:"expired"};const p=Number(c.targetAmount)||0,m=Number(c.raised)||0;if(c.completedAt||p>0&&m>=p)return{error:"completed",goal:Ot(c)};let g=a;if(p>0){const k=Math.max(0,N(p-m)),I=Math.ceil(k*Vi);if(I<=0)return{error:"completed",goal:Ot(c)};g>I&&(g=I)}const f=ca(d.coins);if(f.balance<g)return{error:"insufficient",need:g,balance:f.balance};const b=N(g/Vi),y=N(m+b),v=p>0&&y>=p?n:c.completedAt,w={...c,raised:p>0?Math.min(y,N(p)):y,...v?{completedAt:v}:{}},$={at:n,amount:-g,note:`Goal donate · ${c.name} · $${b.toFixed(2)} · TEST MODE`,kind:"goal",goalId:c.id,usd:b},C={balance:f.balance-g,history:[$,...f.history].slice(0,200)};return l==="app"?r={...r,app:w}:r={...r,liveByHost:{...r.liveByHost,[u]:w}},d={...d,dailyGoals:r,coins:C},A(d),{ok:!0,goal:Ot(w),coins:C,donated:{coins:g,usd:b,requested:a}}}function vl(e){const t=d.user,s={id:"brand_"+Date.now().toString(36),brand:String(e.brand||"").trim().slice(0,80),contact:String(e.contact||"").trim().slice(0,120),email:String(e.email||"").trim().slice(0,120),campaign:String(e.campaign||"sponsored_post").trim().slice(0,40),budget:String(e.budget||"").trim().slice(0,40),pitch:String(e.pitch||"").trim().slice(0,500),url:String(e.url||"").trim().slice(0,300),applicantUserId:(t==null?void 0:t.id)||null,status:"pending",at:Date.now()};return!s.brand||!s.email?{error:"required"}:(d={...d,brandApps:[s,...d.brandApps]},A(d),s)}function bl(e,t){if(!["pending","approved","rejected"].includes(t))return{error:"bad_status"};const a=d.brandApps.map(i=>i.id===e?{...i,status:t,reviewedAt:Date.now()}:i);return d={...d,brandApps:a},A(d),a.find(i=>i.id===e)}function zi(e){const t=d.user,s={id:"list_"+Date.now().toString(36),title:String(e.title||"").trim().slice(0,80),brand:String(e.brand||"").trim().slice(0,80),blurb:String(e.blurb||"").trim().slice(0,280),url:String(e.url||"").trim().slice(0,300),disclosure:String(e.disclosure||"Paid partnership · TEST MODE").trim().slice(0,120),brandAppId:e.brandAppId||null,createdBy:(t==null?void 0:t.id)||null,active:!0,at:Date.now()};return!s.title||!s.brand?{error:"required"}:(d={...d,listings:[s,...d.listings||[]]},A(d),s)}function yl(e,t){const s=(d.listings||[]).map(a=>a.id===e?{...a,active:!!t}:a);return d={...d,listings:s},A(d),s.find(a=>a.id===e)}function kl({activeOnly:e=!1}={}){const t=d.listings||[];return e?t.filter(s=>s.active):t}function wl(e){var s;return[((s=d.user)==null?void 0:s.id)||"guest",e].sort().join("__")}function oi(){const e=d.user;return e?Object.values(d.threads||{}).filter(t=>{var s;return(s=t.participants)==null?void 0:s.includes(e.id)}).sort((t,s)=>(s.updatedAt||0)-(t.updatedAt||0)):[]}function Js(e){const t=d.user;if(!t||!e||e.muted||e.blocked)return 0;const s=e.lastReadAt||0;return(e.messages||[]).filter(a=>a.from!==t.id&&(a.at||0)>s).length}function tt(){return oi().reduce((e,t)=>e+Js(t),0)}function Hi(e){const t=d.user;if(!t||!e)return null;const s=d.threads[e];if(!s||!(s.participants||[]).includes(t.id))return null;const a={...s,lastReadAt:Date.now()};d={...d,threads:{...d.threads,[a.id]:a},demoUnreadSeeded:!0},A(d);try{typeof window<"u"&&window.dispatchEvent&&window.dispatchEvent(new CustomEvent("dbs:messages-unread",{detail:{count:tt()}}))}catch{}return d.threads[a.id]}function li(){var c;const e=d.user;if(!e)return{seeded:!1};if(ws(),d.demoUnreadSeeded)return{seeded:!1,count:tt(),once:!0};if(tt()>0)return d={...d,demoUnreadSeeded:!0},A(d),{seeded:!1,count:tt()};const t="maya",s=(((c=d.profiles)==null?void 0:c.maya)||{}).username||"MayaBeats",a=ds(t,s);if(a.error)return a;const i=d.threads[a.id];if((i.messages||[]).some(p=>p.from!==e.id)){const p=(i.messages||[]).filter(y=>y.from!==e.id).map(y=>y.at||0),m=i.lastReadAt||0;if(m>=Math.max(...p,0)||m>0)return d={...d,demoUnreadSeeded:!0},A(d),{seeded:!1,count:tt()};const f=Math.min(...p),b={...i,lastReadAt:Math.max(0,f-1)};return d={...d,threads:{...d.threads,[b.id]:b},demoUnreadSeeded:!0},A(d),{seeded:!0,count:tt()}}const r=Date.now(),l=[{id:"m_demo_unread_1",from:t,fromName:s,text:"Yo — drop coming Friday. You in for the listening party?",at:r-1e3*60*12},{id:"m_demo_unread_2",from:t,fromName:s,text:"Also sent a beat pack in the vault 🔥",at:r-1e3*60*5}],u={...i,messages:[...i.messages||[],...l],updatedAt:r-1e3*60*5,lastReadAt:0,request:!1};return d={...d,threads:{...d.threads,[u.id]:u},demoUnreadSeeded:!0},A(d),{seeded:!0,count:tt()}}function er(e){return(d.threads||{})[e]||null}function tr(e){var a;const t=d.user;if(!t||!e)return!1;const s=(a=d.profiles)==null?void 0:a[e];return s?(t.following||[]).includes(e)&&(s.following||[]).includes(t.id):!1}function ds(e,t){const s=d.user;if(!s)return{error:"signin"};const a=wl(e);let i=d.threads[a];if(!i){const n=e==="dbs"||tr(e);i={id:a,kind:"dm",participants:[s.id,e],peerId:e,peerName:t||e,messages:[],updatedAt:Date.now(),request:!n,muted:!1,blocked:!1},d={...d,threads:{...d.threads,[a]:i}},A(d)}return i}function Sl(e,t,s,{priority:a=!1}={}){const i=d.user;if(!i)return{error:"signin"};const n=String(s||"").trim().slice(0,500);if(!n)return{error:"empty"};const r=ds(e,t);if(r.error)return r;const l={id:"m_"+Date.now().toString(36),from:i.id,fromName:i.username,text:n,at:Date.now(),priority:!!a},u={...d.threads[r.id],messages:[...d.threads[r.id].messages||[],l],updatedAt:Date.now(),peerName:t||d.threads[r.id].peerName};if(d={...d,threads:{...d.threads,[u.id]:u}},a){const c=d.wallet||{balance:0,history:[]};d={...d,wallet:{balance:c.balance,history:[...c.history||[],{at:Date.now(),amount:0,note:"Priority message · TEST MODE $2.99 (not charged)"}]}}}return A(d),{thread:d.threads[u.id],message:l}}function ws(){const e={...d.profiles||{}};let t=!1;e.maya||(e.maya={id:"maya",username:"MayaBeats",bio:"Creator · beats & live demos",avatar:"",followers:[],following:["dbs"],verified:!1},t=!0),e.fanjay||(e.fanjay={id:"fanjay",username:"FanJay",bio:"Day-one fan · playlist curator",avatar:"",followers:[],following:["dbs"],verified:!1},t=!0);const s=d.user;if(s){const a={...e.maya},i=new Set(a.following||[]),n=new Set(a.followers||[]);i.has(s.id)||(i.add(s.id),t=!0),n.has(s.id)||(n.add(s.id),t=!0),a.following=[...i],a.followers=[...n],e.maya=a;let r=s;(s.following||[]).includes("maya")||(r={...s,following:[...s.following||[],"maya"]},t=!0),t&&(d={...d,user:r,profiles:e},nt(r),A(d))}else t&&(d={...d,profiles:e},A(d));return[{id:"dbs",username:"DatBoiSkeet",team:!0,bio:(d.profiles.dbs||{}).bio||""},{id:"maya",username:d.profiles.maya.username,team:!1,bio:d.profiles.maya.bio},{id:"fanjay",username:d.profiles.fanjay.username,team:!1,bio:d.profiles.fanjay.bio}]}function $l(e,t=[]){const s=d.user;if(!s)return{error:"signin"};const a=String(e).trim().slice(0,60)||"Group",i=[...new Set([s.id,...t.filter(Boolean)])],n=a.toLowerCase().replace(/\W+/g,"_").slice(0,24)||"group",r=n==="dbs_fans"?"group_dbs_fans":"group_"+n+"_"+String(s.id).slice(-4);let l=d.threads[r];if(!l)l={id:r,kind:"group",peerId:r,peerName:a,participants:i,memberIds:i,messages:[],updatedAt:Date.now(),muted:!1,blocked:!1},d={...d,threads:{...d.threads,[r]:l}},A(d);else if(s&&!(l.participants||[]).includes(s.id)){const u=[...new Set([...l.participants||[],s.id])],c=[...new Set([...l.memberIds||u,s.id])];l={...l,participants:u,memberIds:c},d={...d,threads:{...d.threads,[r]:l}},A(d)}return d.threads[r]}function xl(){return d.user?(ws(),$l("DBS Fans",["dbs","maya","fanjay"])):{error:"signin"}}function El(e,t){const s=d.user;if(!s)return{error:"signin"};const a=d.threads[e];if(!a||a.kind!=="group")return{error:"not_group"};if(!(a.participants||[]).includes(s.id))return{error:"forbidden"};const i=String(t||"").trim().slice(0,500);if(!i)return{error:"empty"};const n={id:"m_"+Date.now().toString(36),from:s.id,fromName:s.username,text:i,at:Date.now(),priority:!1},r={...a,messages:[...a.messages||[],n],updatedAt:Date.now()};return d={...d,threads:{...d.threads,[r.id]:r}},A(d),{thread:d.threads[r.id],message:n}}function Ea(e,t={}){const s=d.threads[e];if(!s)return{error:"missing"};const a={...s,muted:t.muted!==void 0?!!t.muted:!!s.muted,blocked:t.blocked!==void 0?!!t.blocked:!!s.blocked,reportedAt:t.report?Date.now():s.reportedAt||null};return d={...d,threads:{...d.threads,[a.id]:a}},A(d),a}function Wi(e={}){const t={...d.messagePrefs||{allowDMs:!0,allowRequests:!0},...e};return d={...d,messagePrefs:t},A(d),t}const kt={gifts:{creatorPct:80,dbsPct:20,label:"Live gifts"},tips:{creatorPct:90,dbsPct:10,label:"Tips"},subscriptions:{creatorPct:85,dbsPct:15,label:"Subscriptions"},paid_content:{creatorPct:85,dbsPct:15,label:"Paid content"},referrals:{creatorPct:85,dbsPct:15,label:"Referrals"},clippers:{creatorPct:80,dbsPct:20,label:"Clippers"},sponsorships:{creatorPct:80,dbsPct:20,label:"Sponsorships"},merch:{creatorPct:85,dbsPct:15,label:"Merch / affiliate"}},Al=[{category:"gifts",gross:40,note:"Live gifts · demo week"},{category:"tips",gross:22.5,note:"Live tips · demo week"},{category:"subscriptions",gross:29.99,note:"Skeet+ fan sub · demo"},{category:"referrals",gross:15,note:"Refer & Earn milestone · demo"},{category:"clippers",gross:50,note:"Clippers campaign payout · demo"},{category:"sponsorships",gross:100,note:"Sponsored livestream · demo"},{category:"merch",gross:35,note:"Foreign X-Change affiliate · demo"}];function N(e){return Math.round(Number(e)*100)/100}function ci(e){const t=ls().creatorWallet;return!e||typeof e!="object"?{...t}:{...t,...e,available:N(e.available??0),holds:N(e.holds??0),threshold:Number(e.threshold)>0?Number(e.threshold):25,verification:e.verification==="demo_verified"?"demo_verified":"demo_unverified",earnings:Array.isArray(e.earnings)?e.earnings:[],payouts:Array.isArray(e.payouts)?e.payouts:[]}}function rt(){const e=ci(d.creatorWallet);return d.creatorWallet!==e&&(d={...d,creatorWallet:e}),e}function sr({category:e,gross:t,note:s,source:a="demo",at:i=Date.now()}){const n=kt[e]||kt.tips,r=N(Math.max(0,Number(t)||0)),l=N(r*.029+(r>0?.3:0)),u=N(Math.max(0,r-l)),c=N(u*n.creatorPct/100),p=N(u-c);return{id:"earn_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6),category:e,label:n.label,note:String(s||n.label).slice(0,120),gross:r,fees:l,net:u,creatorPct:n.creatorPct,dbsPct:n.dbsPct,creatorShare:c,dbsShare:p,source:a,at:i,payoutId:null}}function Cl(){return{...kt}}function gs(){return rt()}function di(e){const t=sr(e),s=rt(),a={...s,available:N(s.available+t.creatorShare),earnings:[t,...s.earnings||[]]};return d={...d,creatorWallet:a},A(d),t}function ar({force:e=!1}={}){const t=rt();if(!e&&(t.earnings||[]).length>0)return{skipped:!0,creatorWallet:t};const s=Date.now()-6*864e5,i=Al.map((l,u)=>sr({category:l.category,gross:l.gross,note:l.note,source:"seed",at:s+u*36e5})).map((l,u)=>({...l,id:"earn_seed_"+u+"_"+l.category})),n=N(i.reduce((l,u)=>l+u.creatorShare,0)),r={...t,available:e?n:N(t.available+n),earnings:e?i:[...i,...t.earnings||[]],holds:e?0:t.holds,payouts:e?[]:t.payouts};return e&&(r.available=n,r.holds=0,r.payouts=[],r.earnings=i),d={...d,creatorWallet:r},A(d),{seeded:i.length,creatorWallet:r}}function Tl({amount:e}={}){const t=rt(),s=(t.payouts||[]).find(g=>g.status==="pending");if(s)return{error:"pending_exists",pending:s};const a=N(t.available);if(a<t.threshold)return{error:"below_threshold",available:a,threshold:t.threshold};const i=e!=null?N(e):a;if(i<=0||i>a)return{error:"bad_amount"};const n=(t.earnings||[]).filter(g=>!g.payoutId).sort((g,f)=>g.at-f.at),r=[];let l=0;for(const g of n){const f=N(g.creatorShare);if(!(f<=0)&&!(N(l+f)>i)&&(r.push(g.id),l=N(l+f),l>=i))break}if(!r.length){const g=n.find(f=>N(f.creatorShare)>0);if(!g)return{error:"no_earnings"};if(N(g.creatorShare)>a)return{error:"bad_amount"};r.push(g.id),l=N(g.creatorShare)}const u=l,c={id:"po_"+Date.now().toString(36),amount:u,status:"pending",at:Date.now(),earningIds:r,note:"TEST MODE payout request · not real money"},p=(t.earnings||[]).map(g=>r.includes(g.id)?{...g,payoutId:c.id}:g),m={...t,available:N(a-u),holds:N(t.holds+u),earnings:p,payouts:[c,...t.payouts||[]]};return d={...d,creatorWallet:m},A(d),c}function Dl(e,t){if(!["pending","completed","rejected"].includes(t))return{error:"bad_status"};const a=rt(),i=(a.payouts||[]).find(p=>p.id===e);if(!i)return{error:"missing"};if(i.status!=="pending"&&t!=="pending")return{error:"already_final",payout:i};let n=a.available,r=a.holds,l=a.earnings||[];if(i.status==="pending"&&t==="completed")r=N(Math.max(0,r-i.amount));else if(i.status==="pending"&&t==="rejected"){r=N(Math.max(0,r-i.amount)),n=N(n+i.amount);const p=new Set(i.earningIds||[]);l=l.map(m=>p.has(m.id)?{...m,payoutId:null}:m)}const u=a.payouts.map(p=>p.id===e?{...p,status:t,reviewedAt:Date.now()}:p),c={...a,available:n,holds:r,earnings:l,payouts:u};return d={...d,creatorWallet:c},A(d),u.find(p=>p.id===e)}function Ml(e){const s={...rt(),verification:e?"demo_verified":"demo_unverified"};return d={...d,creatorWallet:s},A(d),s}function pi(){const e=rt(),t={};for(const s of Object.keys(kt))t[s]={category:s,label:kt[s].label,creatorPct:kt[s].creatorPct,dbsPct:kt[s].dbsPct,gross:0,fees:0,net:0,creatorShare:0,dbsShare:0,count:0};for(const s of e.earnings||[]){const a=t[s.category]||(t[s.category]={category:s.category,label:s.label||s.category,creatorPct:s.creatorPct,dbsPct:s.dbsPct,gross:0,fees:0,net:0,creatorShare:0,dbsShare:0,count:0});a.gross=N(a.gross+s.gross),a.fees=N(a.fees+s.fees),a.net=N(a.net+s.net),a.creatorShare=N(a.creatorShare+s.creatorShare),a.dbsShare=N(a.dbsShare+s.dbsShare),a.count+=1}return Object.values(t)}function Qs(e=5,t="Demo credit"){const s=d.wallet||{balance:0,history:[]},a=Number(s.balance||0)+Number(e),i=[...s.history||[],{at:Date.now(),amount:Number(e),note:t}];return d={...d,wallet:{balance:a,history:i}},A(d),d.wallet}function ir(e,t="Demo spend"){const s=d.wallet||{balance:0,history:[]},a=Number(e);if(Number(s.balance||0)<a)return{error:"insufficient"};const i=Number(s.balance||0)-a,n=[...s.history||[],{at:Date.now(),amount:-a,note:t}];return d={...d,wallet:{balance:i,history:n}},A(d),d.wallet}function V(e,t){return String(e||"").toLowerCase().includes(t)}function Ll(e){const t=String(e||"").trim().toLowerCase(),s={query:String(e||"").trim(),posts:[],profiles:[],music:[],videos:[],lives:[],products:[],pictures:[]};if(!t)return s;const a=(d.posts||[]).filter(g=>V(g.text,t)||V(g.username,t)),i=Object.values(d.profiles||{}).filter(g=>V(g.username,t)||V(g.bio,t));if(d.user){const g=d.user;(V(g.username,t)||V(g.bio,t))&&(i.find(f=>f.id===g.id)||i.push(g))}const n=(d.catalog||[]).filter(g=>g.published),r=n.filter(g=>(g.type==="song"||g.type==="album")&&(V(g.title,t)||V(g.artist,t)||V(g.type,t))),l=n.filter(g=>g.type==="video"&&(V(g.title,t)||V(g.artist,t)||V("video",t))),u=n.filter(g=>g.type==="picture"&&(V(g.title,t)||V(g.artist,t)||V("picture",t))),c=[],p=d.live;p&&!p.endedAt&&(V(p.title,t)||V(p.hostName,t)||V("live",t))&&c.push({...p,status:"live"}),(d.liveHistory||[]).forEach(g=>{(V(g.title,t)||V(g.hostName,t)||V("live",t))&&c.push({...g,status:"ended"})});const m=(d.listings||[]).filter(g=>g.active!==!1&&(V(g.title,t)||V(g.brand,t)||V(g.blurb,t)||V("marketplace",t)||V("product",t)));return{query:String(e||"").trim(),posts:a,profiles:i,music:r,videos:l,lives:c,products:m,pictures:u}}function Il(e=8){const t=d.likes||{},s=(d.posts||[]).map(l=>({kind:"post",id:l.id,title:(l.text||"").slice(0,72)||"Post",subtitle:"@"+(l.username||"creator"),href:"#/posts",score:(t[l.id]||[]).length,image:l.image||""})).sort((l,u)=>u.score-l.score||(u.id>l.id?1:-1)),a=[{kind:"music",id:"trend_music",title:"Long Story Short",subtitle:"Coming Soon · Music",href:"#/music",score:3,image:"/music/01_Long_Story_Short_Coming_Soon.jpg"},{kind:"video",id:"trend_video",title:"Dirty Money ft. Lil Baby",subtitle:"Official MV",href:"#/videos",score:3,image:""},{kind:"live",id:"trend_live",title:"Go live on DBS",subtitle:"Creators · Live",href:"#/live",score:2,image:""},{kind:"market",id:"trend_mkt",title:"Sponsored Marketplace",subtitle:"Brand ads · demo",href:"#/marketplace",score:2,image:""},{kind:"spotlight",id:"trend_spot",title:"24/7 Spotlight",subtitle:"Stage · Discover",href:"#/spotlight",score:1,image:""}],i=d.live;return i&&!i.endedAt&&a.unshift({kind:"live",id:"trend_live_now",title:i.title||"Live now",subtitle:"@"+(i.hostName||"creator")+" · LIVE",href:"#/live",score:99,image:""}),(d.catalog||[]).filter(l=>l.published).slice(0,3).forEach(l=>{const u=l.type==="video"?"#/videos":l.type==="picture"?"#/home":"#/music";a.push({kind:l.type,id:"trend_cat_"+l.id,title:l.title,subtitle:(l.artist||"Admin")+" · From Admin",href:u,score:4,image:l.coverRef&&!String(l.coverRef).startsWith("idb:")?l.coverRef:""})}),[...s,...a].sort((l,u)=>u.score-l.score).slice(0,e)}function Pl(){const e=Object.values(d.profiles||{}).map(t=>({id:t.id,username:t.username,bio:t.bio||"",avatar:t.avatar||"",verified:!!t.verified,followers:(t.followers||[]).length}));return d.user&&!e.find(t=>t.id===d.user.id)&&e.push({id:d.user.id,username:d.user.username,bio:d.user.bio||"",avatar:d.user.avatar||"",verified:!!d.user.verified,followers:(d.user.followers||[]).length}),e.sort((t,s)=>s.followers-t.followers||t.username.localeCompare(s.username))}const nr=6e4,Aa=10;function rr(e=Date.now()){const t=new Date(e);return t.setHours(23,59,59,999),t.getTime()}function _l(e=Date.now()){const t=new Date(e);return t.setHours(0,0,0,0),t.getTime()}const or=[{id:"fan_maya",name:"MayaBeats",bio:"Demo fan · mutual"},{id:"fan_jay",name:"FanJay",bio:"Demo fan · sandbox opponent"}];function ge(){return d.giftBattles||{active:null,history:[],champions:[],prefs:{invitationsEnabled:!0}}}function At(e){return d={...d,giftBattles:e},A(d),e}function ui(e,t=Date.now()){if(!e||e.status!=="active"||t<(e.endsAt||0))return e;const s=Number(e.scoreA||0),a=Number(e.scoreB||0);let i="tie",n=null,r=null;return s>a?(i="win",n=e.challenger.id,r=e.challenger.name):a>s&&(i="win",n=e.opponent.id,r=e.opponent.name),{...e,status:"ended",endedAt:t,result:i,winnerId:n,winnerName:r,scoreA:s,scoreB:a,championUntil:n?rr(t):null}}function lr(){return or.map(e=>({...e}))}function mi(){return{invitationsEnabled:!0,...ge().prefs||{}}}function Ol(e={}){const t=ge(),s={...t.prefs,...e};return At({...t,prefs:s})}function hi(){let t=ge().active;if(!t)return null;if(t.status==="active"){const s=ui(t);if(s!==t&&s.status==="ended")return gi(s);t=s}return t}function gi(e){const t=ge(),s=[e,...(t.history||[]).filter(i=>i.id!==e.id)].slice(0,40);let a=t.champions||[];return e.winnerId&&(a=[{battleId:e.id,userId:e.winnerId,username:e.winnerName,score:e.winnerId===e.challenger.id?e.scoreA:e.scoreB,opponentScore:e.winnerId===e.challenger.id?e.scoreB:e.scoreA,endedAt:e.endedAt,championUntil:e.championUntil,mode:e.mode},...a.filter(n=>n.battleId!==e.id)].slice(0,30)),At({...t,active:e,history:s,champions:a}),e}function ql({opponentId:e,opponentName:t,mode:s}={}){const a=d.user;if(!a)return{error:"signin"};if(!mi().invitationsEnabled)return{error:"invites_disabled"};const n=d.live&&!d.live.endedAt,r=s||(n?"live":"sandbox");if(r==="live"&&!n)return{error:"not_live"};const l=ge(),u=l.active;if(u&&(u.status==="pending"||u.status==="active"))return{error:"battle_in_progress",battle:u};const c=or.find(g=>g.id===e),p={id:e||(c==null?void 0:c.id)||"fan_maya",name:t||(c==null?void 0:c.name)||"MayaBeats"};if(p.id===a.id)return{error:"self"};const m={id:"gb_"+Date.now().toString(36),status:"pending",mode:r,liveId:n?d.live.id:null,liveTitle:n?d.live.title:null,challenger:{id:a.id,name:a.username},opponent:p,createdAt:Date.now(),startedAt:null,endsAt:null,durationMs:nr,scoreA:0,scoreB:0,giftLog:[],result:null,winnerId:null,winnerName:null,endedAt:null,championUntil:null};return At({...l,active:m}),{battle:m}}function Nl(){const e=ge(),t=e.active;if(!t||t.status!=="pending")return{error:"no_pending"};if(!mi().invitationsEnabled)return{error:"invites_disabled"};const s=Date.now(),a={...t,status:"active",startedAt:s,endsAt:s+(t.durationMs||nr),scoreA:0,scoreB:0};return At({...e,active:a}),{battle:a}}function Bl(){const e=ge(),t=e.active;if(!t||t.status!=="pending")return{error:"no_pending"};const s={...t,status:"declined",endedAt:Date.now(),result:"declined"},a=[s,...e.history||[]].slice(0,40);return At({...e,active:null,history:a}),{battle:s}}function Rl(){const e=ge(),t=e.active;return t&&(t.status==="pending"||t.status==="active")?{error:"still_running",battle:t}:(At({...e,active:null}),{ok:!0})}function jl(e=Date.now()){const t=d.liveGbChallengePop;return t?t.expiresAt&&e>t.expiresAt?(d={...d,liveGbChallengePop:null},A(d),null):!d.live||d.live.endedAt||t.liveId&&t.liveId!==d.live.id?null:{...t}:null}function Fl({side:e="challenger",kind:t="gift",amount:s=2,label:a=""}={}){var y;if(!d.user)return{error:"signin"};let n=hi();if(!n||n.status!=="active")return{error:"no_active"};if(n=ge().active,!n||n.status!=="active")return{error:"ended"};const r=Math.max(.5,Number(s)||1),l=t==="tip"?"tip":"gift",u=e==="opponent",c=u?n.opponent:n.challenger;let p=null;if(n.mode==="live"&&!u){if(p=Hn({kind:l,amount:r,label:a||(l==="gift"?"🔥 Fire":"Tip")}),p!=null&&p.error)return p}else(((y=d.wallet)==null?void 0:y.balance)||0)>=r&&ir(r,`Gift battle ${l} · ${c.name} · TEST MODE`);const m={id:"gbg_"+Date.now().toString(36),side:u?"opponent":"challenger",userId:c.id,username:c.name,kind:l,amount:r,label:(a||(l==="gift"?"🔥 Fire":"Tip")).slice(0,40),at:Date.now()},g=Number(n.scoreA||0)+(u?0:r),f=Number(n.scoreB||0)+(u?r:0);let b={...n,scoreA:+g.toFixed(2),scoreB:+f.toFixed(2),giftLog:[...n.giftLog||[],m]};return b=ui(b),b.status==="ended"?gi(b):At({...ge(),active:b}),{battle:b,entry:m,live:(p==null?void 0:p.live)||null,wallet:d.wallet}}function fi(){const t=ge().active;if(!t||t.status!=="active")return t;const s=ui(t);return s.status==="ended"&&t.status!=="ended"?gi(s):s}function Kl(e=20){return(ge().history||[]).slice(0,e)}function Gl(e=Date.now()){const t=ge(),s=t.active;return s&&s.status==="ended"&&s.winnerId&&s.championUntil&&e<s.championUntil?{battleId:s.id,userId:s.winnerId,username:s.winnerName,score:s.winnerId===s.challenger.id?s.scoreA:s.scoreB,endedAt:s.endedAt,championUntil:s.championUntil,mode:s.mode}:(t.champions||[]).find(i=>i.championUntil&&e<i.championUntil)||null}function Ul(e=15){var s;const t={};for(const a of ge().history||[]){if(a.result!=="win"||!a.winnerId)continue;const i=t[a.winnerId]||{userId:a.winnerId,username:a.winnerName,wins:0,points:0};i.wins+=1;const n=a.winnerId===((s=a.challenger)==null?void 0:s.id)?Number(a.scoreA||0):Number(a.scoreB||0);i.points=+(i.points+n).toFixed(2),i.username=a.winnerName||i.username,t[a.winnerId]=i}return Object.values(t).sort((a,i)=>i.wins-a.wins||i.points-a.points||a.username.localeCompare(i.username)).slice(0,e)}function vi(e=Aa,t=Date.now()){var u;const s=Math.min(Math.max(1,Number(e)||Aa),Aa),a=_l(t),i=rr(t),n=new Set,r=[],l=c=>{if(!(c!=null&&c.userId)||!(c!=null&&c.username)||n.has(c.userId))return;const p=Number(c.endedAt||0);p<a||p>i||c.championUntil&&t>c.championUntil||(n.add(c.userId),r.push({userId:c.userId,username:c.username,score:Number(c.score||0),endedAt:p,championUntil:c.championUntil||i,battleId:c.battleId||c.id||null,mode:c.mode||"demo"}))};for(const c of ge().champions||[])if(l(c),r.length>=s)return r;for(const c of ge().history||[])if(!(c.result!=="win"||!c.winnerId)&&(l({userId:c.winnerId,username:c.winnerName,score:c.winnerId===((u=c.challenger)==null?void 0:u.id)?c.scoreA:c.scoreB,endedAt:c.endedAt,championUntil:c.championUntil||i,battleId:c.id,mode:c.mode}),r.length>=s))break;return r}const bi=4,Ka=[{id:"maya",username:"MayaBeats",bio:"Creator · beats & live demos"},{id:"fanjay",username:"FanJay",bio:"Day-one fan · playlist curator"},{id:"ria",username:"RiaLoops",bio:"Demo co-host · loops & hooks"},{id:"dez",username:"DezOnMic",bio:"Demo guest · freestyle nights"}];function Te(){return d.multiGuest||{active:null,history:[]}}function Fe(e){return d={...d,multiGuest:e},A(d),e}function Ss(e,t){const s=[e,...t],a=s.length||1,i=Math.floor(100/a*100)/100,n={};let r=0;return s.forEach((l,u)=>{u===s.length-1?n[l]=+(100-r).toFixed(2):(n[l]=i,r=+(r+i).toFixed(2))}),n}function ua(){ws();const e={...d.profiles||{}};let t=!1;for(const s of Ka)e[s.id]||(e[s.id]={id:s.id,username:s.username,bio:s.bio,avatar:"",followers:[],following:["dbs"],verified:!1},t=!0);return t&&(d={...d,profiles:e},A(d)),Ka.map(s=>{const a=d.profiles[s.id]||s;return{id:s.id,username:a.username||s.username,bio:a.bio||s.bio,followers:(a.followers||[]).length}})}function Vl(){return ua()}function fs(){return Te().active||null}function zl(e=20){return(Te().history||[]).slice(0,e)}function Hl(e){const t=d.user;if(!t)return{error:"signin"};const s=Te();if(s.active&&!s.active.endedAt)return{error:"session_in_progress",session:s.active};const a=String(e||"").trim().slice(0,80)||"Multi-Guest Live";ua();const i={id:"mg_"+Date.now().toString(36),title:a,hostId:t.id,hostName:t.username,startedAt:Date.now(),endedAt:null,maxGuests:bi,guests:[],chat:[{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:"Multi-guest session started · TEST MODE · no camera / WebRTC",at:Date.now(),system:!0}],giftSplit:{mode:"equal",shares:{[t.id]:100},disclosed:!1,disclosedAt:null},broadcastReady:!1};return Fe({...s,active:i}),{session:i}}function Wl(e){var g;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};ua();const i=Ka.find(f=>f.id===e),n=(g=d.profiles)==null?void 0:g[e];if(!i&&!n)return{error:"unknown_guest"};if(e===t.id||e===a.hostId)return{error:"self"};const r=(a.guests||[]).find(f=>f.id===e);if(r&&(r.status==="invited"||r.status==="joined"))return{error:"already_invited",session:a};if((a.guests||[]).filter(f=>f.status==="joined"||f.status==="invited").length>=(a.maxGuests||bi))return{error:"full"};const u={id:e,username:(n==null?void 0:n.username)||(i==null?void 0:i.username)||e,status:"invited",muted:!1,invitedAt:Date.now(),joinedAt:null},c=[...(a.guests||[]).filter(f=>f.id!==e),u],p=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`Invited @${u.username} to the stage`,at:Date.now(),system:!0}].slice(-80),m={...a,guests:c,chat:p,broadcastReady:!1};return m.giftSplit={...m.giftSplit,disclosed:!1,disclosedAt:null,shares:Ss(a.hostId,c.filter(f=>f.status==="joined").map(f=>f.id))},Fe({...s,active:m}),{session:m,guest:u}}function Yl(e){var p;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(m=>({...m})),n=i.findIndex(m=>m.id===e);if(n<0)return{error:"not_found"};if(i[n].status==="joined")return{session:a,guest:i[n]};if(i.filter(m=>m.status==="joined").length>=(a.maxGuests||bi))return{error:"full"};i[n]={...i[n],status:"joined",joinedAt:Date.now(),muted:!1};const l=i.filter(m=>m.status==="joined").map(m=>m.id),u=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${i[n].username} joined the stage`,at:Date.now(),system:!0}].slice(-80),c={...a,guests:i,chat:u,broadcastReady:!1,giftSplit:{mode:((p=a.giftSplit)==null?void 0:p.mode)||"equal",shares:Ss(a.hostId,l),disclosed:!1,disclosedAt:null}};return Fe({...s,active:c}),{session:c,guest:i[n]}}function Jl(e){var u;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(c=>c.id===e?{...c,status:"declined"}:c);if(!(a.guests||[]).some(c=>c.id===e))return{error:"not_found"};const n=((u=(a.guests||[]).find(c=>c.id===e))==null?void 0:u.username)||e,r=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${n} declined the invite`,at:Date.now(),system:!0}].slice(-80),l={...a,guests:i,chat:r};return Fe({...s,active:l}),{session:l}}function Ql(e){var c,p;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id&&t.id!==e)return{error:"forbidden"};const i=(a.guests||[]).map(m=>m.id===e?{...m,status:"left",muted:!1}:m);if(!(a.guests||[]).some(m=>m.id===e))return{error:"not_found"};const n=((c=(a.guests||[]).find(m=>m.id===e))==null?void 0:c.username)||e,r=i.filter(m=>m.status==="joined").map(m=>m.id),l=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${n} left the stage`,at:Date.now(),system:!0}].slice(-80),u={...a,guests:i,chat:l,broadcastReady:!1,giftSplit:{mode:((p=a.giftSplit)==null?void 0:p.mode)||"equal",shares:Ss(a.hostId,r),disclosed:!1,disclosedAt:null}};return Fe({...s,active:u}),{session:u}}function Xl(e){var c,p;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(m=>m.id===e?{...m,status:"removed",muted:!1}:m);if(!(a.guests||[]).some(m=>m.id===e))return{error:"not_found"};const n=((c=(a.guests||[]).find(m=>m.id===e))==null?void 0:c.username)||e,r=i.filter(m=>m.status==="joined").map(m=>m.id),l=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`Host removed @${n} from the stage`,at:Date.now(),system:!0}].slice(-80),u={...a,guests:i,chat:l,broadcastReady:!1,giftSplit:{mode:((p=a.giftSplit)==null?void 0:p.mode)||"equal",shares:Ss(a.hostId,r),disclosed:!1,disclosedAt:null}};return Fe({...s,active:u}),{session:u}}function Zl(e,t=!0){var c;const s=d.user;if(!s)return{error:"signin"};const a=Te(),i=a.active;if(!i||i.endedAt)return{error:"no_session"};if(i.hostId!==s.id)return{error:"host_only"};const n=(i.guests||[]).map(p=>p.id===e&&p.status==="joined"?{...p,muted:!!t}:p);if(!(i.guests||[]).some(p=>p.id===e&&p.status==="joined"))return{error:"not_joined"};const r=((c=(i.guests||[]).find(p=>p.id===e))==null?void 0:c.username)||e,l=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:t?`Host muted @${r}`:`Host unmuted @${r}`,at:Date.now(),system:!0}].slice(-80),u={...i,guests:n,chat:l};return Fe({...a,active:u}),{session:u}}function ec(e){const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};const i=String(e||"").trim().slice(0,280);if(!i)return{error:"empty"};const n={id:"c_"+Date.now().toString(36),userId:t.id,username:t.username,text:i,at:Date.now()},r=[...a.chat||[],n].slice(-80),l={...a,chat:r};return Fe({...s,active:l}),{session:l,message:n}}function as({mode:e="equal",shares:t=null,disclose:s=!1}={}){var g,f;const a=d.user;if(!a)return{error:"signin"};const i=Te(),n=i.active;if(!n||n.endedAt)return{error:"no_session"};if(n.hostId!==a.id)return{error:"host_only"};const r=(n.guests||[]).filter(b=>b.status==="joined").map(b=>b.id),l=[n.hostId,...r];let u,c=e==="custom"?"custom":"equal";if(c==="equal")u=Ss(n.hostId,r);else{u={};let b=0;for(const y of l){const v=Math.max(0,Number(t==null?void 0:t[y])||0);u[y]=+v.toFixed(2),b+=u[y]}if(b=+b.toFixed(2),Math.abs(b-100)>.05)return{error:"split_total",total:b,expected:100}}const p={mode:c,shares:u,disclosed:!!s||!!((g=n.giftSplit)!=null&&g.disclosed),disclosedAt:s?Date.now():((f=n.giftSplit)==null?void 0:f.disclosedAt)||null};s&&(p.disclosed=!0),s&&(p.disclosedAt=Date.now());const m={...n,giftSplit:p,broadcastReady:!!p.disclosed};return Fe({...i,active:m}),{session:m}}function tc(){var e,t,s,a;return as({mode:((t=(e=fs())==null?void 0:e.giftSplit)==null?void 0:t.mode)||"equal",shares:((a=(s=fs())==null?void 0:s.giftSplit)==null?void 0:a.shares)||null,disclose:!0})}function sc(){const e=d.user;if(!e)return{error:"signin"};const t=Te(),s=t.active;if(!s||s.endedAt)return{error:"no_session"};if(s.hostId!==e.id)return{error:"host_only"};const a={...s,endedAt:Date.now(),broadcastReady:!1},i=[a,...(t.history||[]).filter(n=>n.id!==a.id)].slice(0,20);return Fe({active:null,history:i}),{session:a}}const cr=["song","album","video","live","app","interview"],yi=["draft","active","paused","ended"];function Ct(e){if(!e||typeof e!="object")return null;const t=e.fundSource==="third_party"?"third_party":"dbs",s=cr.includes(e.promoteType)?e.promoteType:"app",a=yi.includes(e.status)?e.status:"draft",i=Number(e.deadline)||0;return{id:String(e.id||""),title:String(e.title||"").slice(0,120),promoteType:s,budget:Math.max(0,Number(e.budget)||0),deadline:i,fundSource:t,managementFeePct:t==="third_party"?20:0,reward:String(e.reward||"").slice(0,200),status:a,participants:Array.isArray(e.participants)?e.participants:[],submissions:Array.isArray(e.submissions)?e.submissions:[],createdAt:Number(e.createdAt)||Date.now(),createdBy:e.createdBy||null}}function Ft(e){d={...d,missions:e},A(d)}function ma({status:e=null}={}){const t=(d.missions||[]).map(Ct).filter(Boolean);if(!e)return t;const s=Array.isArray(e)?e:[e];return t.filter(a=>s.includes(a.status))}function ac(e){return ma().find(t=>t.id===e)||null}function ic(e={}){var l;const t=String(e.title||"").trim().slice(0,120);if(!t)return{error:"required"};const s=cr.includes(e.promoteType)?e.promoteType:"app",a=e.fundSource==="third_party"?"third_party":"dbs";let i=e.deadline;if(typeof i=="string"&&i){const u=Date.parse(i);i=Number.isFinite(u)?u:Date.now()+7*864e5}else i=Number(i)||Date.now()+7*864e5;const n=yi.includes(e.status)?e.status:"active",r=Ct({id:"msn_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),title:t,promoteType:s,budget:Number(e.budget)||0,deadline:i,fundSource:a,reward:String(e.reward||"").trim().slice(0,200)||"Demo reward · TEST MODE",status:n,participants:[],submissions:[],createdAt:Date.now(),createdBy:((l=d.user)==null?void 0:l.id)||"demo_admin"});return Ft([r,...d.missions||[]]),r}function nc(e,t){if(!yi.includes(t))return{error:"bad_status"};let s=null;const a=(d.missions||[]).map(i=>{const n=Ct(i);return!n||n.id!==e?i:(s={...n,status:t},s)});return s?(Ft(a),s):{error:"not_found"}}function rc(e){const t=d.user;if(!t)return{error:"signin"};let s=null;const a=(d.missions||[]).map(i=>{const n=Ct(i);if(!n||n.id!==e)return i;if(n.status!=="active")return s={error:"not_active",mission:n},i;if((n.participants||[]).some(u=>u.userId===t.id))return s={error:"already_joined",mission:n},i;const l={userId:t.id,username:t.username||"creator",joinedAt:Date.now(),score:0,referralCode:"REF-"+t.id.slice(0,6).toUpperCase()+"-"+Math.random().toString(36).slice(2,5).toUpperCase()};return s={...n,participants:[...n.participants||[],l]},s});return s?(s.error||Ft(a),s):{error:"not_found"}}function oc(e,{proof:t=""}={}){const s=d.user;if(!s)return{error:"signin"};const a=String(t||"").trim().slice(0,400);if(!a)return{error:"required"};let i=null;const n=(d.missions||[]).map(r=>{const l=Ct(r);if(!l||l.id!==e)return r;if(l.status!=="active")return i={error:"not_active",mission:l},r;if(!(l.participants||[]).some(m=>m.userId===s.id))return i={error:"not_joined",mission:l},r;const c={id:"sub_"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),userId:s.id,username:s.username||"creator",proof:a,at:Date.now(),status:"pending"},p=(l.participants||[]).map(m=>m.userId===s.id?{...m,score:(Number(m.score)||0)+10}:m);return i={...l,participants:p,submissions:[c,...l.submissions||[]]},i});return i?(i.error||Ft(n),i):{error:"not_found"}}function lc(e,t=5){const s=d.user;if(!s)return{error:"signin"};const a=Math.max(1,Math.min(50,Number(t)||5));let i=null;const n=(d.missions||[]).map(r=>{const l=Ct(r);if(!l||l.id!==e)return r;if(!(l.participants||[]).some(p=>p.userId===s.id))return i={error:"not_joined",mission:l},r;const c=(l.participants||[]).map(p=>p.userId===s.id?{...p,score:(Number(p.score)||0)+a}:p);return i={...l,participants:c},i});return i?(i.error||Ft(n),i):{error:"not_found"}}function cc(e){const t=ac(e);return t?[...t.participants||[]].map(s=>({userId:s.userId,username:s.username,score:Number(s.score)||0,referralCode:s.referralCode||"",joinedAt:s.joinedAt,submissions:(t.submissions||[]).filter(a=>a.userId===s.userId).length})).sort((s,a)=>a.score-s.score||(s.joinedAt||0)-(a.joinedAt||0)):[]}function dc({force:e=!1}={}){if((d.missions||[]).length&&!e)return{skipped:!0,missions:ma()};const s=Date.now(),a=864e5,i=[{id:"msn_demo_song",title:"Push Long Story Short (clip challenge)",promoteType:"song",budget:2500,deadline:s+14*a,fundSource:"dbs",reward:"$50–$200 demo credits by rank · DBS-funded marketing",status:"active",participants:[{userId:"clipper_demo",username:"ClipQueen",joinedAt:s-2*a,score:42,referralCode:"REF-CLIP-AAA"},{userId:"dbs",username:"DatBoiSkeet",joinedAt:s-a,score:28,referralCode:"REF-DBS-001"}],submissions:[{id:"sub_demo1",userId:"clipper_demo",username:"ClipQueen",proof:"https://example.com/tiktok/lss-clip-1 · 12k views",at:s-a,status:"pending"}],createdAt:s-3*a,createdBy:"demo_admin"},{id:"msn_demo_live",title:"Boost Friday Night Live",promoteType:"live",budget:800,deadline:s+5*a,fundSource:"third_party",reward:"Share of $800 pot after 20% management fee",status:"active",participants:[],submissions:[],createdAt:s-a,createdBy:"demo_admin"},{id:"msn_demo_app",title:"Download DBS · invite 3 friends",promoteType:"app",budget:1200,deadline:s+30*a,fundSource:"dbs",reward:"Referral bonus stack · verified installs only",status:"active",participants:[],submissions:[],createdAt:s-5*a,createdBy:"demo_admin"},{id:"msn_demo_ended",title:"Ladies Only teaser push (ended)",promoteType:"video",budget:500,deadline:s-2*a,fundSource:"third_party",reward:"Completed · demo archive",status:"ended",participants:[{userId:"clipper_demo",username:"ClipQueen",joinedAt:s-10*a,score:90,referralCode:"REF-CLIP-OLD"}],submissions:[],createdAt:s-20*a,createdBy:"demo_admin"}].map(Ct);return Ft(i),{seeded:i.length,missions:i}}const dr=60*1e3,ki=60*1e3,vs=2,ha=3,ga=3,$s=3,pc=["song","beat","music_video"],uc=[...pc,"freestyle"];function pr(){const e=d.spotlight||{};return{nowPlaying:e.nowPlaying||null,queue:Array.isArray(e.queue)?e.queue:[],history:Array.isArray(e.history)?e.history:[],houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0}}function he(e){return d={...d,spotlight:e},A(d),e}function mc(e){return e==="freestyle"?"Live Freestyle":e==="beat"?"Beat":e==="music_video"?"Music Video":"Song"}function Ga(e,t="ended"){return e?{id:e.id,userId:e.userId,username:e.username,type:e.type,title:e.title,artist:e.artist,startedAt:e.startedAt,endedAt:Date.now(),extensions:e.extensions||0,playCount:e.playCount||1,reason:t}:null}function de(e=Date.now()){let t=pr(),s=t.nowPlaying;if(!s)return hc(t,e);if(s.house)return t;if(s.type==="freestyle"&&s.endsAt&&e>=s.endsAt&&!s.awaitingPlayAnother){if(Object.keys(s.keepGoingVotes||{}).length>=ha&&(s.extensions||0)<vs&&!s.extensionApplied){s={...s,extensions:(s.extensions||0)+1,endsAt:e+ki,keepGoingVotes:{},extensionApplied:!1,voteWindowOpen:!0};const p={...t,nowPlaying:s};return he(p),p}const n=[Ga(s,"timer"),...t.history||[]].slice(0,30),r=[...t.queue||[]];let l=null,u=typeof t.houseIndex=="number"?t.houseIndex:0;if(r.length){const p=r.shift();l=Xs(p,e)}else l=Zs(xt(u),e);const c={nowPlaying:l,queue:r,history:n,houseIndex:u};return he(c),c}if(s.awaitingPlayAnother&&s.playAnotherDeadline&&e>=s.playAnotherDeadline){const a=Object.keys(s.playAnotherVotes||{}).length,i=s.playCount||1;if(a>=ga&&i<$s){s={...s,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:i+1,title:s.nextTitle||s.title,startedAt:e,endsAt:null,nextTitle:null};const p={...t,nowPlaying:s};return he(p),p}const n=[Ga(s,"play_another_fail"),...t.history||[]].slice(0,30),r=[...t.queue||[]];let l=null,u=typeof t.houseIndex=="number"?t.houseIndex:0;r.length?l=Xs(r.shift(),e):l=Zs(xt(u),e);const c={nowPlaying:l,queue:r,history:n,houseIndex:u};return he(c),c}return t}function Xs(e,t=Date.now()){const s=e.type==="freestyle";return{id:"sp_"+t.toString(36)+"_"+Math.random().toString(36).slice(2,6),userId:e.userId,username:e.username,type:e.type,title:e.title||(s?"Live Freestyle":"Untitled"),artist:e.artist||e.username,cover:e.cover||"",startedAt:t,endsAt:s?t+dr:null,extensions:0,playCount:1,keepGoingVotes:{},playAnotherVotes:{},voteWindowOpen:s,awaitingPlayAnother:!1,playAnotherDeadline:null,reactions:{fire:0,heart:0,clap:0},chat:[{id:"c_"+t.toString(36),userId:"system",username:"DBS",text:`${e.username} took the Spotlight · ${mc(e.type)} · TEST MODE`,at:t,system:!0}]}}function le(){const e=de();return{nowPlaying:e.nowPlaying||null,queue:[...e.queue||[]],history:[...e.history||[]],houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0,thresholds:{keepGoing:ha,playAnother:ga,maxExtensions:vs,maxUploadStreak:$s,freestyleMs:dr}}}function ur(){const e=[];for(const s of fe||[])!s||!s.embed||(s.category==="Music Videos"?e.push({id:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube||"",kind:"music_video",chipLabel:"House · Music Video",note:"DatBoiSkeet catalog · original YouTube · not a live act",cover:s.cover||""}):s.category==="Interviews"&&e.push({id:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube||"",kind:"interview",chipLabel:"House · Interview",note:"DatBoiSkeet interview · original YouTube · not a live act",cover:s.cover||""}));const t=(Ba||[]).find(s=>s.id==="pl-vlogs");if(t&&t.youtube){const s=String(t.youtube).match(/[?&]list=([^&]+)/),a=s&&s[1];a&&e.push({id:"house-bts-vlogs",title:t.title||"DatBoiSkeet Vlogs",artist:"DatBoiSkeet",embed:"https://www.youtube.com/embed/videoseries?list="+a,youtube:t.youtube,kind:"bts",chipLabel:"House · BTS",note:"Channel vlogs · dedicated BTS clips thin · original YouTube · not a live act",cover:""})}return e}function mr(){const e=ur().length;return e>0?e:1}function xt(e){const t=ur();if(!t.length)return{id:"house_empty",title:"DatBoiSkeet catalog",artist:"DatBoiSkeet",embed:"",youtube:"https://www.youtube.com/@DatBoiSkeet1",kind:"music_video",chipLabel:"House · Music Video",note:"Catalog loading · not a live act",cover:"",status:"House rotation"};const s=(e%t.length+t.length)%t.length;return{...t[s],status:t[s].chipLabel}}function Zs(e,t=Date.now()){return{id:"house_"+(e.id||"x")+"_"+t.toString(36),userId:"dbs",username:"DatBoiSkeet",type:"music_video",house:!0,houseKind:e.kind||"music_video",chipLabel:e.chipLabel||"House · Music Video",title:e.title,artist:e.artist||"DatBoiSkeet",embed:e.embed||"",youtube:e.youtube||"",note:e.note||"House catalog · not a live act",cover:e.cover||"",startedAt:t,endsAt:null,extensions:0,playCount:1,keepGoingVotes:{},playAnotherVotes:{},voteWindowOpen:!1,awaitingPlayAnother:!1,playAnotherDeadline:null,reactions:{fire:0,heart:0,clap:0},chat:[{id:"c_house_"+t.toString(36),userId:"system",username:"DBS",text:`House catalog · ${e.chipLabel||"House"} · ${e.title} · not a live act · TEST MODE`,at:t,system:!0}]}}function hc(e,t=Date.now()){if(e.nowPlaying)return e;const s=typeof e.houseIndex=="number"?e.houseIndex:0,a=xt(s),i=Zs(a,t),n={...e,nowPlaying:i,houseIndex:s};return he(n),n}function hr(){const e=pr();return xt(typeof e.houseIndex=="number"?e.houseIndex:0)}function gc({type:e="song",title:t="",artist:s=""}={}){const a=d.user;if(!a)return{error:"signin"};const i=uc.includes(e)?e:"song",n=de(),r=a.id,l=(n.queue||[]).some(y=>y.userId===r),u=n.nowPlaying&&!n.nowPlaying.house&&n.nowPlaying.userId===r&&!n.nowPlaying.awaitingPlayAnother;if(l||u)return{error:"already_queued",state:le()};const c=String(t||"").trim().slice(0,80)||(i==="freestyle"?"Live Freestyle":i==="beat"?"Untitled Beat":i==="music_video"?"Untitled MV":"Untitled Song"),p=String(s||a.username||"").trim().slice(0,60),m={id:"q_"+Date.now().toString(36),userId:r,username:a.username,type:i,title:c,artist:p,cover:"",joinedAt:Date.now()};let g=n.nowPlaying,f=[...n.queue||[]],b=typeof n.houseIndex=="number"?n.houseIndex:0;return g?(g.house,f.push(m)):(g=Xs(m),f=[]),he({...n,nowPlaying:g,queue:f,houseIndex:b}),{ok:!0,state:le()}}function Yi(){const e=d.user;if(!e)return{error:"signin"};const t=de(),s=(t.queue||[]).length,a=(t.queue||[]).filter(i=>i.userId!==e.id);return a.length===s?{error:"not_in_queue"}:(he({...t,queue:a}),{ok:!0,state:le()})}function fc(e){if(!d.user)return{error:"signin"};const s=de(),a=(s.queue||[]).filter(i=>i.id!==e);return he({...s,queue:a}),{ok:!0,state:le()}}function gr(e="advance"){if(!d.user)return{error:"signin"};const s=de(),a=s.nowPlaying,i=!!(a&&a.house),n=a&&!i?[Ga(a,e),...s.history||[]].slice(0,30):[...s.history||[]],r=[...s.queue||[]];let l=typeof s.houseIndex=="number"?s.houseIndex:0;i&&(l=(l+1)%mr());let u=null;return r.length?u=Xs(r.shift()):u=Zs(xt(l)),he({nowPlaying:u,queue:r,history:n,houseIndex:l}),{ok:!0,state:le()}}function vc(){return gr("skip")}function bc(){const e=d.user;if(!e)return{error:"signin"};const t=de(),s=t.nowPlaying;if(!s)return{error:"empty_stage"};if(s.house)return{error:"house_use_skip"};if(s.type==="freestyle")return{error:"freestyle_use_timer"};if(s.awaitingPlayAnother)return{error:"already_voting"};!(s.userId===e.id)&&ae();const i=s.playCount||1;if(i>=$s)return gr("max_streak");const n={...s,awaitingPlayAnother:!0,playAnotherVotes:{},playAnotherDeadline:Date.now()+30*1e3,nextTitle:s.title+" (take "+(i+1)+")"};return he({...t,nowPlaying:n}),{ok:!0,state:le()}}function yc(){const e=d.user;if(!e)return{error:"signin"};const t=de(),s=t.nowPlaying;if(!s||s.type!=="freestyle")return{error:"no_freestyle"};if(!s.voteWindowOpen)return{error:"window_closed"};if(s.awaitingPlayAnother)return{error:"wrong_mode"};if((s.extensions||0)>=vs)return{error:"max_extensions"};const a={...s.keepGoingVotes||{}};if(a[e.id])return{error:"already_voted",state:le()};a[e.id]=Date.now();let i={...s,keepGoingVotes:a};const n=Object.keys(a).length;return n>=ha&&(s.extensions||0)<vs&&(i={...i,extensions:(s.extensions||0)+1,endsAt:Date.now()+ki,keepGoingVotes:{},voteWindowOpen:!0}),he({...t,nowPlaying:i}),{ok:!0,state:le(),votes:Object.keys(i.keepGoingVotes||{}).length||n}}function kc(e=2){const t=de(),s=t.nowPlaying;if(!s||s.type!=="freestyle")return{error:"no_freestyle"};const a={...s.keepGoingVotes||{}},i=Object.keys(a).length;for(let l=0;l<e;l++){const u="fan_sim_"+(i+l)+"_"+Date.now().toString(36);a[u]=Date.now()}let n={...s,keepGoingVotes:a};return Object.keys(a).length>=ha&&(s.extensions||0)<vs&&(n={...n,extensions:(s.extensions||0)+1,endsAt:Date.now()+ki,keepGoingVotes:{},voteWindowOpen:!0}),he({...t,nowPlaying:n}),{ok:!0,state:le()}}function wc(){const e=d.user;if(!e)return{error:"signin"};const t=de(),s=t.nowPlaying;if(!s||!s.awaitingPlayAnother)return{error:"no_vote"};const a={...s.playAnotherVotes||{}};if(a[e.id])return{error:"already_voted",state:le()};a[e.id]=Date.now();let i={...s,playAnotherVotes:a};const n=Object.keys(a).length,r=s.playCount||1;return n>=ga&&r<$s&&(i={...i,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:r+1,title:s.nextTitle||s.title,startedAt:Date.now(),endsAt:null,nextTitle:null}),he({...t,nowPlaying:i}),{ok:!0,state:le()}}function Sc(e=2){const t=de(),s=t.nowPlaying;if(!s||!s.awaitingPlayAnother)return{error:"no_vote"};const a={...s.playAnotherVotes||{}},i=Object.keys(a).length;for(let u=0;u<e;u++)a["fan_pa_"+(i+u)+"_"+Date.now().toString(36)]=Date.now();let n={...s,playAnotherVotes:a};const r=Object.keys(a).length,l=s.playCount||1;return r>=ga&&l<$s&&(n={...n,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:l+1,title:s.nextTitle||s.title,startedAt:Date.now(),endsAt:null,nextTitle:null}),he({...t,nowPlaying:n}),{ok:!0,state:le()}}function $c(e="fire"){const t=de(),s=t.nowPlaying;if(!s)return{error:"empty_stage"};const a=["fire","heart","clap"].includes(e)?e:"fire",i={...s.reactions||{fire:0,heart:0,clap:0}};return i[a]=(i[a]||0)+1,he({...t,nowPlaying:{...s,reactions:i}}),{ok:!0,state:le()}}function xc(e){const t=d.user;if(!t)return{error:"signin"};const s=String(e||"").trim().slice(0,200);if(!s)return{error:"empty"};const a=de(),i=a.nowPlaying;if(!i)return{error:"empty_stage"};const n=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:t.id,username:t.username,text:s,at:Date.now()}].slice(-40);return he({...a,nowPlaying:{...i,chat:n}}),{ok:!0,state:le()}}function Ec(e=20){return(de().history||[]).slice(0,e)}function Ke(){const e=d.fanClubs||{clubs:[],posts:{},seeded:!1};return{clubs:Array.isArray(e.clubs)?e.clubs:[],posts:e.posts&&typeof e.posts=="object"?e.posts:{},seeded:!!e.seeded}}function Kt(e){d={...d,fanClubs:e},A(d)}function fr(e){return e+"_"+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function vr(){return Ge(),Ke().clubs.slice().sort((e,t)=>e.official&&!t.official?-1:!e.official&&t.official?1:(t.memberCount||0)-(e.memberCount||0))}function xs(e){return Ge(),Ke().clubs.find(t=>t.id===e)||null}function Ge({force:e=!1}={}){const t=Ke();if(t.seeded&&!e&&t.clubs.length>0)return{skipped:!0,clubs:t.clubs};const s=Date.now(),a=864e5,i=[{id:"fc_official_dbs",name:"DatBoiSkeet Official",description:"Official DatBoiSkeet fan club inside DBS Lounge. Music drops, Vault tips, Foreign X-Change, and community rules — DBS branding first. Follow optional.",graphic:"/brand/logo-dbs-v3@2x.webp",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"public",official:!0,members:["dbs"],followers:["dbs"],mods:["dbs"],memberCount:1,createdAt:s-14*a},{id:"fc_lss_crew",name:"Long Story Short Crew",description:"Creator club for LSS listeners. Public lounge chat + Skeet+ members-only drop room.",graphic:"/music/01_Long_Story_Short_Coming_Soon.jpg",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"members",official:!1,members:["dbs"],followers:["dbs"],mods:["dbs"],memberCount:1,createdAt:s-7*a},{id:"fc_ladies_only",name:"Ladies Only Circle",description:"Paid / Skeet+ gated room demo for Ladies Only supporters. Unlock via membership TEST MODE.",graphic:"/music/02_Ladies_Only_Coming_Soon.jpg",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"paid",official:!1,members:["dbs"],followers:[],mods:["dbs"],memberCount:1,createdAt:s-3*a}],n={fc_official_dbs:[{id:"fcp_welcome",userId:"dbs",username:"DatBoiSkeet",text:"Welcome to the official club. Discover music on #/music · explore more on #/explore. No forced follows.",at:s-2*a,pinned:!0,removed:!1},{id:"fcp_lounge",userId:"dbs",username:"DatBoiSkeet",text:"DBS Lounge rooms stay music-first. Keep it respectful — see Community Guidelines.",at:s-a,pinned:!1,removed:!1}],fc_lss_crew:[{id:"fcp_lss1",userId:"dbs",username:"DatBoiSkeet",text:"LSS cover art is live in Coming Soon. Members can discuss theories here.",at:s-a,pinned:!1,removed:!1}],fc_ladies_only:[{id:"fcp_lo1",userId:"dbs",username:"DatBoiSkeet",text:"Skeet+ members-only preview chat. Join Skeet+ on Pricing (TEST MODE) to unlock.",at:s-12*36e5,pinned:!0,removed:!1}]};return Kt({clubs:i,posts:n,seeded:!0}),{seeded:i.length,clubs:i}}function Ac({name:e,description:t,graphic:s,privacy:a="public"}={}){const i=d.user;if(!i)return{error:"signin"};ae()||i.role==="creator"||i.id;const n=String(e||"").trim().slice(0,48);if(!n)return{error:"name"};const r=["public","members","paid"].includes(a)?a:"public";Ge();const l=Ke(),u={id:fr("fc"),name:n,description:String(t||"").trim().slice(0,280),graphic:String(s||"/brand/logo-dbs-v3@2x.webp").slice(0,200),hostId:i.id,hostName:i.username,privacy:r,official:!1,members:[i.id],followers:[i.id],mods:[i.id],memberCount:1,createdAt:Date.now()};return Kt({...l,clubs:[u,...l.clubs],posts:{...l.posts,[u.id]:[]},seeded:!0}),{ok:!0,club:u}}function fa(e,t){Ge();const s=Ke(),a=s.clubs.findIndex(r=>r.id===e);if(a<0)return{error:"missing"};const i=t({...s.clubs[a]});if(i&&i.error)return i;const n=s.clubs.slice();return n[a]=i,Kt({...s,clubs:n}),{ok:!0,club:i}}function br(e){const t=d.user;return t?fa(e,s=>{const a=new Set(s.members||[]);return a.add(t.id),{...s,members:[...a],memberCount:a.size}}):{error:"signin"}}function Cc(e){const t=d.user;return t?fa(e,s=>{if(s.hostId===t.id)return{error:"host"};const a=(s.members||[]).filter(i=>i!==t.id);return{...s,members:a,memberCount:a.length}}):{error:"signin"}}function Tc(e){const t=d.user;return t?fa(e,s=>{const a=new Set(s.followers||[]);return a.add(t.id),{...s,followers:[...a]}}):{error:"signin"}}function Dc(e){const t=d.user;return t?fa(e,s=>{const a=(s.followers||[]).filter(i=>i!==t.id);return{...s,followers:a}}):{error:"signin"}}function yr(e){const t=d.user;if(!t)return!1;const s=xs(e);return!!(s&&(s.members||[]).includes(t.id))}function Mc(e){const t=d.user;if(!t)return!1;const s=xs(e);return!!(s&&(s.followers||[]).includes(t.id))}function bs(e){const t=d.user;if(!t)return!1;const s=xs(e);return s?ae()||s.hostId===t.id||(s.mods||[]).includes(t.id):!1}function kr(e){const t=xs(e);if(!t)return{ok:!1,reason:"missing"};if(t.privacy==="public")return{ok:!0,reason:"public"};if(t.privacy==="members")return yr(e)||bs(e)?{ok:!0,reason:"member"}:{ok:!1,reason:"members"};if(t.privacy==="paid"){const s=Et();return({null:0,"skeet+":1,backstage:2,inner:3}[s||"null"]||0)>=1||bs(e)?{ok:!0,reason:"paid"}:{ok:!1,reason:"paid"}}return{ok:!0,reason:"public"}}function Lc(e){return Ge(),(Ke().posts[e]||[]).filter(s=>!s.removed).slice().sort((s,a)=>s.pinned&&!a.pinned?-1:!s.pinned&&a.pinned?1:(a.at||0)-(s.at||0))}function Ic(e,t){const s=d.user;if(!s)return{error:"signin"};const a=kr(e);if(!a.ok)return{error:"gated",reason:a.reason};const i=String(t||"").trim().slice(0,500);if(!i)return{error:"empty"};const n=Ke();if(!n.clubs.some(u=>u.id===e))return{error:"missing"};const r={id:fr("fcp"),userId:s.id,username:s.username,text:i,at:Date.now(),pinned:!1,removed:!1},l=[r,...n.posts[e]||[]].slice(0,100);return Kt({...n,posts:{...n.posts,[e]:l}}),{ok:!0,post:r}}function Pc(e,t){if(!bs(e))return{error:"mod"};const s=Ke(),a=(s.posts[e]||[]).map(i=>i.id===t?{...i,pinned:!i.pinned}:i);return Kt({...s,posts:{...s.posts,[e]:a}}),{ok:!0}}function _c(e,t){if(!bs(e))return{error:"mod"};const s=Ke(),a=(s.posts[e]||[]).map(i=>i.id===t?{...i,removed:!0}:i);return Kt({...s,posts:{...s.posts,[e]:a}}),{ok:!0}}const wi=["instagram","tiktok","facebook","youtube","x","snapchat","other"],wr=[{id:"badge",minVerified:1,label:"Exclusive DBS badge",kind:"badge"},{id:"decoration",minVerified:2,label:"Premium avatar decoration",kind:"decoration"},{id:"skeet7",minVerified:3,label:"7 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:7},{id:"skeet30",minVerified:3,requireAllLinked:!0,label:"30 days Skeet+ (all linked · min 3)",kind:"membership_trial",membership:"skeet+",days:30}],Sr=[{n:1,id:"m1",label:"Profile decoration",kind:"decoration"},{n:3,id:"m3",label:"7 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:7},{n:5,id:"m5",label:"30 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:30},{n:10,id:"m10",label:"Premium profile bundle",kind:"bundle"},{n:25,id:"m25",label:"30 days Backstage (TEST MODE)",kind:"membership_trial",membership:"backstage",days:30},{n:50,id:"m50",label:"30 days Inner Circle (TEST MODE)",kind:"membership_trial",membership:"inner",days:30},{n:100,id:"m100",label:"Founder Promoter badge / VIP",kind:"badge"}];function $r(){return{platformsLinked:[],challenge:null,submissions:[],rewardsClaimed:[]}}function xr(){return{code:"",invitees:[],milestonesClaimed:[]}}function Er(e){const t=$r();return!e||typeof e!="object"?t:{platformsLinked:Array.isArray(e.platformsLinked)?e.platformsLinked:[],challenge:e.challenge&&typeof e.challenge=="object"?e.challenge:null,submissions:Array.isArray(e.submissions)?e.submissions:[],rewardsClaimed:Array.isArray(e.rewardsClaimed)?e.rewardsClaimed:[]}}function Ar(e){const t=xr();return!e||typeof e!="object"?t:{code:typeof e.code=="string"?e.code:"",invitees:Array.isArray(e.invitees)?e.invitees:[],milestonesClaimed:Array.isArray(e.milestonesClaimed)?e.milestonesClaimed:[]}}function Xe(e){return d={...d,shareEarn:Er(e)},A(d),d.shareEarn}function ot(e){return d={...d,referEarn:Ar(e)},A(d),d.referEarn}function Cr(e){if(!e)return"DBS-GUEST";const t=String(e.username||"fan").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8)||"FAN",s=String(e.id||"").replace(/^u_/,"").slice(-4).toUpperCase()||"DEMO";return`DBS-${t}-${s}`}function Tt(e){return e+"_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function is(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function ee(){return Er(d.shareEarn)}function Ji(){return wi.slice()}function Oc(){return wr.map(e=>({...e}))}function qc({platform:e,handle:t="",url:s="",followers:a=""}={}){if(!d.user)return{error:"signin"};const n=String(e||"").toLowerCase().trim();if(!wi.includes(n))return{error:"bad_platform"};const r=String(t||"").trim().replace(/^@+/,"").slice(0,64),l=String(s||"").trim().slice(0,240);if(!r&&!l)return{error:"required"};const u=ee();if((u.platformsLinked||[]).some(m=>m.platform===n))return{error:"already_linked",shareEarn:u};const c={id:Tt("plat"),platform:n,handle:r,url:l,followers:String(a||"").trim().slice(0,32),linkedAt:Date.now()},p={...u,platformsLinked:[...u.platformsLinked||[],c]};return Xe(p),{ok:!0,platform:c,shareEarn:ee()}}function Nc(e){const t=ee(),s={...t,platformsLinked:(t.platformsLinked||[]).filter(a=>a.id!==e)};return Xe(s),ee()}function Bc(){if(!d.user)return{error:"signin"};const t=ee();if(t.challenge&&t.challenge.status==="active")return{error:"already_active",shareEarn:t};const s=Gt().code,a=Date.now(),i={id:Tt("ch"),startedAt:a,endsAt:a+24*60*60*1e3,adTitle:"DatBoiSkeet · Long Story Short & Ladies Only",caption:"🔥 Join me on DBS — music, live, vault & more. Long Story Short + Ladies Only Coming Soon. #DBS #PaidPartnership #ad",trackedLink:`https://dbs.app/s/${s}?utm=share24`,status:"active",disclosure:"Incentivized promotion · disclose #ad / Paid partnership"};return Xe({...t,challenge:i,submissions:[],rewardsClaimed:(t.rewardsClaimed||[]).filter(n=>n.challengeId!==i.id)}),{ok:!0,challenge:i,shareEarn:ee()}}function Rc(){const e=ee();if(!e.challenge||e.challenge.status!=="active")return{error:"no_active"};const t={...e.challenge,startedAt:Date.now()-25*60*60*1e3,endsAt:Date.now()-1*60*60*1e3,simulatedElapsed:!0};return Xe({...e,challenge:t}),{ok:!0,challenge:t,shareEarn:ee()}}function jc(){const e=ee();if(!e.challenge)return{error:"none"};const t={...e.challenge,status:"ended",endedAt:Date.now()};return Xe({...e,challenge:t}),{ok:!0,challenge:t,shareEarn:ee()}}function Fc({platform:e,postUrl:t=""}={}){if(!d.user)return{error:"signin"};const a=ee();if(!a.challenge||a.challenge.status!=="active")return{error:"no_challenge"};const i=String(e||"").toLowerCase().trim();if(!wi.includes(i))return{error:"bad_platform"};const n=String(t||"").trim().slice(0,400);if(!n)return{error:"required"};if((a.submissions||[]).some(u=>u.platform===i&&(u.status==="pending"||u.status==="verified")))return{error:"duplicate",shareEarn:a};const l={id:Tt("sub"),platform:i,postUrl:n,submittedAt:Date.now(),status:"pending",note:"Awaiting 24h continuous visibility check (manual/demo)"};return Xe({...a,submissions:[l,...a.submissions||[]]}),{ok:!0,submission:l,shareEarn:ee()}}function Qi(e,t,{note:s=""}={}){if(!["pending","verified","rejected"].includes(t))return{error:"bad_status"};const a=ee();let i=null;const n=(a.submissions||[]).map(r=>r.id!==e?r:(i={...r,status:t,verifiedAt:t==="verified"?Date.now():r.verifiedAt||null,note:s||(t==="verified"?"Demo verified · 24h visibility assumed (manual)":t==="rejected"?"Rejected · ineligible / deleted / unverified":r.note)},i));return i?(Xe({...a,submissions:n}),{ok:!0,submission:i,shareEarn:ee()}):{error:"not_found"}}function Tr(){const e=ee();return new Set((e.submissions||[]).filter(s=>s.status==="verified").map(s=>s.platform)).size}function Dr(){const e=ee(),t=Tr(),s=(e.platformsLinked||[]).length,a=new Set((e.rewardsClaimed||[]).map(i=>i.tierId));return wr.filter(i=>{if(a.has(i.id)||t<i.minVerified)return!1;if(i.requireAllLinked){if(s<3)return!1;const n=new Set((e.platformsLinked||[]).map(l=>l.platform)),r=new Set((e.submissions||[]).filter(l=>l.status==="verified").map(l=>l.platform));for(const l of n)if(!r.has(l))return!1}return!0}).map(i=>({...i,verifiedCount:t,linkedCount:s}))}function Kc(e){var r;if(!d.user)return{error:"signin"};const a=Dr().find(l=>l.id===e);if(!a)return{error:"not_claimable"};const i=ee(),n={id:Tt("srw"),tierId:a.id,label:a.label,kind:a.kind,at:Date.now(),challengeId:((r=i.challenge)==null?void 0:r.id)||null,testMode:!0};return a.membership&&na(a.membership,!0),Xe({...i,rewardsClaimed:[n,...i.rewardsClaimed||[]]}),{ok:!0,claim:n,shareEarn:ee(),membership:Et()}}function Gc(){return Xe($r()),ee()}function xe(){return Ar(d.referEarn)}function Uc(){return Sr.map(e=>({...e}))}function Gt(){const e=d.user,t=xe();if(t.code)return t;const s=Cr(e);return ot({...t,code:s})}function Mr(){return`https://dbs.app/r/${Gt().code}`}function Vc({username:e=""}={}){const t=d.user;if(!t)return{error:"signin"};const s=Gt(),a=String(e||"").trim().slice(0,24)||"Invitee"+(s.invitees.length+1);if(a.toLowerCase()===String(t.username||"").toLowerCase())return{error:"self_referral"};const i={id:Tt("inv"),username:a,signedUpAt:Date.now(),activeDays:[],status:"pending",welcomeClaimed:!1,flaggedFraud:!1};return ot({...s,invitees:[i,...s.invitees||[]]}),{ok:!0,invitee:i,referEarn:xe()}}function zc(e){const t=xe();let s=null;const a=(t.invitees||[]).map(i=>i.id!==e?i:i.flaggedFraud?(s={error:"fraud",invitee:i},i):(s={...i,welcomeClaimed:!0,welcomeAt:Date.now()},s));return s?s.error?s:(ot({...t,invitees:a}),{ok:!0,invitee:s,perk:"Welcome badge / profile decoration (TEST MODE)"}):{error:"not_found"}}function Hc(e,{day:t=null}={}){const s=xe();let a=null;const i=(s.invitees||[]).map(n=>{if(n.id!==e)return n;if(n.flaggedFraud)return a={error:"fraud",invitee:n},n;const r=Number(n.signedUpAt)||Date.now(),l=r+7*864e5;let u=t;if(!u){const g=new Set(n.activeDays||[]);let f=null;for(let b=0;b<7;b++){const y=is(r+b*864e5);if(!g.has(y)){f=y;break}}if(!f)return a={error:"window_full",invitee:n},n;u=f}const c=Date.parse(u+"T12:00:00Z");if(!Number.isFinite(c)||c<r-864e5||c>l)return a={error:"outside_window",invitee:n},n;const p=Array.from(new Set([...n.activeDays||[],u])).sort();let m=n.status;return p.length>=3&&(m="active"),a={...n,activeDays:p,status:m},a});return a?a.error?a:(ot({...s,invitees:i}),{ok:!0,invitee:a,referEarn:xe()}):{error:"not_found"}}function Xi(e,t=!0){const s=xe();let a=null;const i=(s.invitees||[]).map(n=>{var r;return n.id!==e?n:(a={...n,flaggedFraud:!!t,status:t?"fraud":((r=n.activeDays)==null?void 0:r.length)>=3?"active":"pending"},a)});return a?(ot({...s,invitees:i}),{ok:!0,invitee:a,referEarn:xe()}):{error:"not_found"}}function Lr(){return(xe().invitees||[]).filter(t=>t.status==="active"&&!t.flaggedFraud).length}function Ir(){const e=xe(),t=Lr(),s=new Set((e.milestonesClaimed||[]).map(a=>a.milestoneId));return Sr.filter(a=>t>=a.n&&!s.has(a.id)).map(a=>({...a,activeCount:t}))}function Wc(e){if(!d.user)return{error:"signin"};const a=Ir().find(r=>r.id===e);if(!a)return{error:"not_claimable"};const i=xe(),n={id:Tt("rmw"),milestoneId:a.id,n:a.n,label:a.label,kind:a.kind,at:Date.now(),testMode:!0,note:"Distinct from Clippers commissions · TEST MODE · no real billing"};return a.membership&&na(a.membership,!0),ot({...i,milestonesClaimed:[n,...i.milestonesClaimed||[]]}),{ok:!0,claim:n,referEarn:xe(),membership:Et()}}function Yc(){const e=d.user;return ot({...xr(),code:Cr(e)}),xe()}function Jc({force:e=!1}={}){if(!d.user)return{error:"signin"};const s=Gt();if(!e&&(s.invitees||[]).length>0)return{error:"already_seeded",referEarn:s};const a=Date.now(),i=864e5,n=[{id:"inv_demo_a",username:"NovaFan",signedUpAt:a-5*i,activeDays:[is(a-5*i),is(a-4*i),is(a-3*i)],status:"active",welcomeClaimed:!0,flaggedFraud:!1},{id:"inv_demo_b",username:"ClipCurious",signedUpAt:a-2*i,activeDays:[is(a-2*i)],status:"pending",welcomeClaimed:!0,flaggedFraud:!1},{id:"inv_demo_c",username:"BottyMcBot",signedUpAt:a-6*i,activeDays:[],status:"fraud",welcomeClaimed:!1,flaggedFraud:!0}];return ot({...s,invitees:n,milestonesClaimed:s.milestonesClaimed||[]}),{ok:!0,seeded:n.length,referEarn:xe()}}const va=[{id:"youtube",label:"YouTube",color:"#ff4444",hint:"YouTube Live / Studio"},{id:"tiktok",label:"TikTok",color:"#69c9d0",hint:"TikTok LIVE"},{id:"twitch",label:"Twitch",color:"#9146ff",hint:"Twitch Dashboard"},{id:"facebook",label:"Facebook",color:"#1877f2",hint:"Facebook Live"},{id:"instagram",label:"Instagram",color:"#e1306c",hint:"IG Live (demo)"},{id:"kick",label:"Kick",color:"#53fc18",hint:"Kick Studio"},{id:"custom_rtmp",label:"Custom RTMP",color:"#ffb020",hint:"Any RTMP endpoint"}],Qc=()=>({freeMaxDestinations:2,houseUnlimited:!0,houseUserIds:["dbs"],tiers:{bronze:{id:"bronze",label:"Bronze",price:4.99,maxDestinations:3,placement:!1,badge:"Bronze Streamer",perks:["3 destination slots","Campaign badge on Go Live"]},silver:{id:"silver",label:"Silver",price:9.99,maxDestinations:5,placement:!0,badge:"Silver Streamer",perks:["5 destination slots","Campaign badge","Explore / Live placement flag"]},gold:{id:"gold",label:"Gold",price:19.99,maxDestinations:7,placement:!0,badge:"Gold Streamer",perks:["All 7 destinations","Campaign badge","Priority Explore / Live placement"]}}});function Fs(){return{platforms:{},selected:[],session:null,history:[],ingest:null,campaign:{tier:null,status:"none",enrolledAt:null,cancelledAt:null},campaignConfig:null}}function ba(){const e=d.restream||Fs();return{...Fs(),...e,platforms:e.platforms&&typeof e.platforms=="object"?e.platforms:{},selected:Array.isArray(e.selected)?e.selected:[],history:Array.isArray(e.history)?e.history:[],campaign:{...Fs().campaign,...e.campaign||{}}}}function Ut(e){return d={...d,restream:e},A(d),d.restream}function Xc(e){var s,a;if((s=e.ingest)!=null&&s.rtmpUrl&&((a=e.ingest)!=null&&a.streamKey))return e;const t="dbs_demo_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,10);return{...e,ingest:{rtmpUrl:"rtmp://ingest.dbs.local/live",streamKey:t,rotatedAt:Date.now(),note:"TEST MODE demo key · not a real media server"}}}function lt(){let e=ba();const t=e.ingest;return e=Xc(e),e.ingest!==t&&Ut(e),e}function Pr(){const e=lt();return va.map(t=>{const s=e.platforms[t.id]||{};return{...t,connected:!!s.connected,connectedAt:s.connectedAt||null,handle:s.handle||"",lastError:s.lastError||null,enabled:s.enabled!==!1}})}function Zc(e,t=""){const s=va.find(n=>n.id===e);if(!s)return{error:"unknown_platform"};const a=lt(),i={...a.platforms,[e]:{id:e,connected:!0,connectedAt:Date.now(),handle:String(t||s.label+" Demo").slice(0,40),lastError:null,enabled:!0}};return Ut({...a,platforms:i}),{ok:!0,platform:Pr().find(n=>n.id===e)}}function ed(e){var n;const t=lt();if(!((n=t.platforms[e])!=null&&n.connected))return{error:"not_connected"};const s={...t.platforms,[e]:{...t.platforms[e],connected:!1,disconnectedAt:Date.now(),lastError:null}},a=(t.selected||[]).filter(r=>r!==e);let i=t.session;return i&&!i.endedAt&&(i={...i,destinations:(i.destinations||[]).map(r=>r.id===e?{...r,status:"disconnected",health:"error"}:r)}),Ut({...t,platforms:s,selected:a,session:i}),{ok:!0}}function td(e){const t=lt(),s=new Set(Object.values(t.platforms).filter(i=>i.connected).map(i=>i.id)),a=(Array.isArray(e)?e:[]).filter(i=>s.has(i)).slice(0,7);return Ut({...t,selected:a}),{ok:!0,selected:a}}function sd(e){var a;const t=lt();if(!((a=t.platforms[e])!=null&&a.connected))return{error:"not_connected"};const s=new Set(t.selected||[]);return s.has(e)?s.delete(e):s.add(e),td([...s])}function _r(){var a,i,n;const e=ba(),t=Qc(),s=e.campaignConfig||{};return{...t,...s,tiers:{...t.tiers,...s.tiers||{},bronze:{...t.tiers.bronze,...((a=s.tiers)==null?void 0:a.bronze)||{}},silver:{...t.tiers.silver,...((i=s.tiers)==null?void 0:i.silver)||{}},gold:{...t.tiers.gold,...((n=s.tiers)==null?void 0:n.gold)||{}}},freeMaxDestinations:Number(s.freeMaxDestinations)>0?Number(s.freeMaxDestinations):t.freeMaxDestinations,houseUnlimited:s.houseUnlimited!==!1,houseUserIds:Array.isArray(s.houseUserIds)?s.houseUserIds:t.houseUserIds}}function Or(){return{...Fs().campaign,...ba().campaign||{}}}function ad(){const e=d.user;if(!e)return!1;const t=_r();return e.id==="dbs"||e.username==="DatBoiSkeet"?!0:(t.houseUserIds||[]).includes(e.id)}function qr(){const e=_r();if(ad()&&e.houseUnlimited)return{max:va.length,source:"house_free",tier:null};const t=Or();if(t.status==="active"&&t.tier&&e.tiers[t.tier]){const s=e.tiers[t.tier];return{max:s.maxDestinations,source:"campaign",tier:t.tier,badge:s.badge,placement:!!s.placement}}return{max:e.freeMaxDestinations,source:"free_baseline",tier:null,badge:null,placement:!1}}function id(){const e=d.user;if(!e)return{error:"signin"};const t=lt();if(t.session&&!t.session.endedAt)return{error:"already_live"};const s=Object.values(t.platforms).filter(u=>u.connected).map(u=>u.id);if(!s.length)return{error:"no_platforms"};let a=(t.selected||[]).filter(u=>s.includes(u));if(!a.length)return{error:"none_selected"};const i=qr();if(a.length>i.max)return{error:"over_cap",max:i.max,selected:a.length,source:i.source};const n=a.map((u,c)=>{const p=va.find(g=>g.id===u),m=c===a.length-1&&a.length>2?"connecting":"streaming";return{id:u,label:(p==null?void 0:p.label)||u,status:m==="connecting"?"connecting":"streaming",health:m,startedAt:Date.now()}}),r=Or(),l={id:Tt("rs"),hostId:e.id,hostName:e.username,startedAt:Date.now(),destinations:n,selected:a.slice(),campaignTier:r.status==="active"?r.tier:null,campaignBadge:i.badge||null,placement:!!i.placement,testMode:!0,endedAt:null};return Ut({...t,session:l,selected:a}),{ok:!0,session:l}}function nd(){const e=lt();if(!e.session||e.session.endedAt)return{error:"offline"};const t={...e.session,endedAt:Date.now(),destinations:(e.session.destinations||[]).map(a=>({...a,status:a.health==="error"?"error":"ended",health:a.health==="error"?"error":"ended"}))},s=[t,...e.history||[]].slice(0,20);return Ut({...e,session:null,history:s}),{ok:!0,session:t,history:s}}function rd(){const e=ba().session;return e&&!e.endedAt?e:null}function Nr(){const e=L().connectPrefs||{};return{ageConfirmed:!!e.ageConfirmed,rulesAccepted:!!e.rulesAccepted}}function Zi(e={}){const t={...Nr(),...e};return t.ageConfirmed||(t.rulesAccepted=!1),Fo(s=>({...s,connectPrefs:t})),t}const Br=[{id:"day_one",name:"Day One",blurb:"Joined the Loyalty Club — recognition starts with showing up, not spending.",need:0,kind:"join"},{id:"listener",name:"Listener",blurb:"Logged authorized listening (demo tick). Not purchase-only.",need:1,kind:"listen"},{id:"live_attendee",name:"Live Regular",blurb:"Attended a livestream (demo stub). Healthy participation.",need:1,kind:"live"},{id:"club_member",name:"Club Member",blurb:"Joined a Fan Club discussion community.",need:1,kind:"club"},{id:"helper",name:"Helper",blurb:"Community-helper milestone (welcome tip / guidelines share demo).",need:1,kind:"help"},{id:"top_fan",name:"Top Fan",blurb:"Earned 50+ loyalty points from mixed healthy actions — gifts alone do not unlock this.",needPoints:50}];function Rr(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function Es(){const e=d.loyalty||{};return{points:Number(e.points)||0,history:Array.isArray(e.history)?e.history:[],badges:Array.isArray(e.badges)?e.badges:[],publicVisible:e.publicVisible!==!1,lastActionAt:e.lastActionAt&&typeof e.lastActionAt=="object"?e.lastActionAt:{},dayCounts:e.dayCounts&&typeof e.dayCounts=="object"?e.dayCounts:{}}}function Si(e){d={...d,loyalty:e},A(d)}function od(){return"loy_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function ld(e,{cooldownMs:t=8e3,dailyCap:s=8}={}){const a=Es(),i=Date.now(),n=Number(a.lastActionAt[e])||0;if(i-n<t)return{ok:!1,reason:"cooldown"};const r=Rr(i);return((a.dayCounts[r]||{})[e]||0)>=s?{ok:!1,reason:"daily_cap"}:{ok:!0}}function cd(e){const t=new Set(e.badges||[]),s={};return(e.history||[]).forEach(a=>{s[a.kind]=(s[a.kind]||0)+1}),Br.forEach(a=>{if(!t.has(a.id)){if(a.needPoints!=null){e.points>=a.needPoints&&t.add(a.id);return}if(a.id==="day_one"){((e.history||[]).length>0||e.points>0)&&t.add(a.id);return}(s[a.kind]||0)>=(a.need||1)&&t.add(a.id)}}),[...t]}function As(){return Es()}function dd(e){const t=Es();return Si({...t,publicVisible:!!e}),As()}function pd(e,{points:t=5,note:s=""}={}){if(!d.user)return{error:"signin"};const i=ld(e);if(!i.ok)return{error:i.reason};const n=Es(),r=Date.now(),l=Rr(r),u={...n.dayCounts,[l]:{...n.dayCounts[l]||{},[e]:((n.dayCounts[l]||{})[e]||0)+1}},c={id:od(),at:r,kind:e,points:t,note:String(s||e).slice(0,120)},p={...n,points:n.points+t,history:[c,...n.history].slice(0,80),lastActionAt:{...n.lastActionAt,[e]:r},dayCounts:u};return p.badges.includes("day_one")||(p.history=p.history),p.badges=cd(p),p.badges.includes("day_one")||(p.badges=["day_one",...p.badges]),Si(p),{ok:!0,loyalty:As(),entry:c,newBadges:p.badges.filter(m=>!(n.badges||[]).includes(m))}}function jr(){const e=As(),t=new Set(e.badges||[]);return Br.map(s=>({...s,unlocked:t.has(s.id)}))}function ud(){return Si({points:0,history:[],badges:[],publicVisible:!0,lastActionAt:{},dayCounts:{}}),As()}function Dt(){const e=d.openMic||{};return{applications:Array.isArray(e.applications)?e.applications:[],seeded:!!e.seeded,houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0}}function ya(e){d={...d,openMic:e},A(d)}function md(){return"om_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Vt({force:e=!1}={}){const t=Dt();if(t.seeded&&!e&&t.applications.length>0)return{skipped:!0,applications:t.applications};const s=Date.now(),a=864e5,i=[{id:"om_demo_approved",userId:"u_ria",username:"RiaLoops",talent:"producer",trackTitle:"Midnight Pads (demo)",profileNote:"Beatmaker · looking to collab on LSS energy",rightsCertified:!0,status:"approved",at:s-10*a,reviewedAt:s-9*a},{id:"om_demo_pending",userId:"u_dez",username:"DezOnMic",talent:"rapper",trackTitle:"Porch Light Freestyle",profileNote:"Opt-in showcase · not pay-to-win",rightsCertified:!0,status:"pending",at:s-2*a},{id:"om_demo_rejected",userId:"u_spam",username:"SpamBeats",talent:"dj",trackTitle:"Untitled drop",profileNote:"No rights cert honesty",rightsCertified:!1,status:"rejected",at:s-5*a,reviewedAt:s-4*a,reviewNote:"Rights certification required"}],n=typeof t.houseIndex=="number"?t.houseIndex:0;return ya({applications:i,seeded:!0,houseIndex:n}),{seeded:i.length,applications:i}}function Ua({status:e=null}={}){Vt();let t=Dt().applications.slice();return e&&(t=t.filter(s=>s.status===e)),t.sort((s,a)=>(a.at||0)-(s.at||0))}function hd(){return Ua({status:"approved"})}function gd(){const e=Dt();return xt(typeof e.houseIndex=="number"?e.houseIndex:0)}function fd(){const e=Dt(),t=((typeof e.houseIndex=="number"?e.houseIndex:0)+1)%mr();return ya({...e,houseIndex:t}),xt(t)}function vd({talent:e="rapper",trackTitle:t="",profileNote:s="",rightsCertified:a=!1}={}){const i=d.user;if(!i)return{error:"signin"};if(!a)return{error:"rights"};const n=String(t||"").trim().slice(0,80);if(!n)return{error:"title"};Vt();const r=Dt();if(r.applications.some(u=>u.userId===i.id&&u.status==="pending"))return{error:"pending"};const l={id:md(),userId:i.id,username:i.username,talent:String(e||"other").slice(0,32),trackTitle:n,profileNote:String(s||"").trim().slice(0,240),rightsCertified:!0,status:"pending",at:Date.now()};return ya({...r,applications:[l,...r.applications],seeded:!0}),{ok:!0,application:l}}function Va(e,t,s=""){if(!ae())return{error:"admin"};if(!["pending","approved","rejected"].includes(t))return{error:"status"};const i=Dt();let n=null;const r=i.applications.map(l=>l.id!==e?l:(n={...l,status:t,reviewedAt:Date.now(),reviewNote:String(s||"").slice(0,160)},n));return n?(ya({...i,applications:r}),{ok:!0,application:n}):{error:"missing"}}function bd(){var $,C;Vt(),Ge();try{Cs(),je()}catch{}const e=Dt().applications||[],t={pending:0,approved:0,rejected:0};e.forEach(k=>{const I=k.status||"pending";t[I]!==void 0?t[I]+=1:t.pending+=1});const s=e.filter(k=>k.status==="pending").sort((k,I)=>(I.at||0)-(k.at||0)),a=Ke().clubs.slice().sort((k,I)=>(I.createdAt||0)-(k.createdAt||0)),i=a.slice(0,5).map(k=>({id:k.id,name:k.name,privacy:k.privacy,official:!!k.official,memberCount:k.memberCount||(k.members||[]).length||0,createdAt:k.createdAt||0})),n=Es(),l=jr().filter(k=>k.unlocked),u=rt(),c=pi();let p=0,m=0,g=0,f=0,b=0;c.forEach(k=>{p=N(p+(k.gross||0)),m=N(m+(k.fees||0)),g=N(g+(k.creatorShare||0)),f=N(f+(k.dbsShare||0)),b+=k.count||0});const y=d.wallet||{balance:0},v=d.catalog||[],w=Un();return{openMic:{total:e.length,byStatus:t,pending:s},fanClubs:{total:a.length,recent:i},loyalty:{points:n.points||0,badgeCount:l.length,badges:l.map(k=>k.name||k.id),publicVisible:n.publicVisible!==!1,historyCount:(n.history||[]).length,note:"Device-local loyalty for signed-in user · not a multi-fan leaderboard"},revenue:{demo:!0,chip:"demo figures · not production",gross:p,fees:m,creatorShare:g,dbsShare:f,earnCount:b,creatorAvailable:N(u.available||0),creatorHolds:N(u.holds||0),fanWalletBalance:Number(y.balance)||0,byCategory:c.filter(k=>k.count>0),catalogPublished:v.filter(k=>k.published).length,catalogTotal:v.length},moderation:{warnings:[],suspensions:[],note:"Stub · Content Polish owns Guidelines copy"},hotFeed:{openAlerts:(d.engagementAlerts||[]).filter(k=>!k.handledAt).length,totalAlerts:(d.engagementAlerts||[]).length,hotPosts:Array.isArray(($=d.hotFeed)==null?void 0:$.posts)?d.hotFeed.posts.length:0,hotLives:Array.isArray((C=d.hotFeed)==null?void 0:C.lives)?d.hotFeed.lives.length:0,note:"§38 · Build posts + Live Social lives"},stats:w}}const yd={frames:"frame",effects:"effect",banners:"banner","name styles":"nameStyle",badges:"badge"},en=["frame-rodeo-gold","fx-snowfall","ban-skyline","name-neon","badge-dayone"];function kd(e){const t=e&&typeof e=="object"?e:{},s={};return["frame","effect","banner","nameStyle","badge"].forEach(a=>{typeof t[a]=="string"&&t[a]&&(s[a]=t[a])}),s}function zt(){const e=d.profileShop||{};return{owned:Array.isArray(e.owned)?[...new Set(e.owned.map(String))]:[],equipped:kd(e.equipped),reduceMotion:!!e.reduceMotion}}function Ht(e){d={...d,profileShop:e},A(d)}function at(){return zt()}function Fr(e){return e&&yd[e.category]||null}function wd(e){const t=String(e||"");if(!t)return{error:"missing"};const s=zt();return s.owned.includes(t)?{ok:!0,already:!0,shop:at()}:(Ht({...s,owned:[...s.owned,t]}),{ok:!0,shop:at()})}function Sd(){const e=zt(),t=new Set(e.owned);return en.forEach(s=>t.add(s)),Ht({...e,owned:[...t]}),{ok:!0,unlocked:en,shop:at()}}function $d(e){const t=String(e||"");return t.startsWith("frame-")?"frame":t.startsWith("fx-")?"effect":t.startsWith("ban-")?"banner":t.startsWith("name-")?"nameStyle":t.startsWith("badge-")?"badge":null}function xd(e){const t=String(e||""),s=zt();if(!s.owned.includes(t))return{error:"not_owned"};const a=$d(t);if(!a)return{error:"unknown_item"};const i={...s.equipped,[a]:t};return Ht({...s,equipped:i}),{ok:!0,slot:a,shop:at()}}function Ed(e){const t=String(e||"");if(!["frame","effect","banner","nameStyle","badge"].includes(t))return{error:"bad_slot"};const s=zt(),a={...s.equipped};return delete a[t],Ht({...s,equipped:a}),{ok:!0,shop:at()}}function Ad(e){const t=zt();return Ht({...t,reduceMotion:!!e}),at()}function Cd(){return Ht({owned:[],equipped:{},reduceMotion:!1}),at()}const Td=5,Dd=8,Md=[{id:"hp_maya_1",userId:"maya",username:"MayaBeats",text:"Studio loop dropping later — who wants the stem pack? 🔥",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",mediaType:"image",atOffset:36e5*5,likeUsers:["dbs","fanjay","u_seed_a","u_seed_b","u_seed_c","u_seed_d","clipqueen"],comments:[{id:"hc_m1",userId:"fanjay",username:"FanJay",text:"Send it 🙌"},{id:"hc_m2",userId:"dbs",username:"DatBoiSkeet",text:"Pull up on Spotlight"},{id:"hc_m3",userId:"clipqueen",username:"ClipQueen",text:"Stem pack please"}],shares:5},{id:"hp_jay_1",userId:"fanjay",username:"FanJay",text:"Foreign X-Change fit check from the community — buffalo energy.",image:"/merch/03_blue_buffalo_jacket.jpeg",mediaType:"image",atOffset:36e5*8,likeUsers:["maya","dbs","u_seed_a","u_seed_c","u_seed_d","clipqueen","u_seed_b"],comments:[{id:"hc_j1",userId:"maya",username:"MayaBeats",text:"Jacket hits"},{id:"hc_j2",userId:"clipqueen",username:"ClipQueen",text:"Need this"}],shares:6},{id:"hp_clip_1",userId:"clipqueen",username:"ClipQueen",text:"New clip cut from last Live — tag @DatBoiSkeet if you remix 🎬",image:"/merch/06_black_ptsd_tee.jpeg",mediaType:"video",atOffset:36e5*12,likeUsers:["dbs","maya","fanjay","u_seed_a","u_seed_b","u_seed_c"],comments:[{id:"hc_c1",userId:"dbs",username:"DatBoiSkeet",text:"Clean edit"},{id:"hc_c2",userId:"maya",username:"MayaBeats",text:"Clipping goals"},{id:"hc_c3",userId:"fanjay",username:"FanJay",text:"Saved"},{id:"hc_c4",userId:"u_seed_a",username:"FanA",text:"Fire"}],shares:4},{id:"hp_dbs_boost",userId:"dbs",username:"DatBoiSkeet",text:"Community shoutout — Maya + Jay keeping the feed hot. Keep posting.",image:"/music/02_Ladies_Only_Coming_Soon.jpg",mediaType:"image",atOffset:36e5*3,likeUsers:["maya","fanjay","u_seed_a"],comments:[{id:"hc_d1",userId:"maya",username:"MayaBeats",text:"Grateful 💛"},{id:"hc_d2",userId:"fanjay",username:"FanJay",text:"Lets go"}],shares:2}];function Pe(){const e=d.hotFeed||{};return{lives:Array.isArray(e.lives)?e.lives:[],posts:Array.isArray(e.posts)?e.posts:[],seededLives:!!e.seededLives,seededPosts:!!e.seededPosts,seededPostsVer:Number(e.seededPostsVer)||0}}function Kr(e){d={...d,hotFeed:e},A(d)}function Ld(){const e={...d.profiles};let t=!1;const s=(a,i,n)=>{e[a]||(e[a]={id:a,username:i,bio:n,avatar:"",followers:[],following:["dbs"],verified:!1},t=!0)};s("maya","MayaBeats","Creator · beats & live demos"),s("fanjay","FanJay","Day-one fan · playlist curator"),s("clipqueen","ClipQueen","Clipper · community edits"),t&&(d={...d,profiles:e})}function Cs(){Kn(),Ld();const e=Pe(),t=Number(e.seededPostsVer)||0;if(e.seededPosts&&t>=2)return Pe();if(e.seededPosts&&t<2){const u={...d.likes||{}},c={...d.comments||{}},p={...d.postShares||{}},m=(g,f,b,y)=>{u[g]=[...new Set([...u[g]||[],...f])];const v=new Set((c[g]||[]).map($=>$.id)),w=[...c[g]||[]];(b||[]).forEach($=>{v.has($.id)||w.push({...$,at:$.at||Date.now()})}),c[g]=w,p[g]=Math.max(Number(p[g]||0),y)};return m("hp_maya_1",["dbs","fanjay","u_seed_a","u_seed_b","u_seed_c","u_seed_d","clipqueen"],[{id:"hc_m3",userId:"clipqueen",username:"ClipQueen",text:"Stem pack please"}],5),m("hp_jay_1",["maya","dbs","u_seed_a","u_seed_c","u_seed_d","clipqueen","u_seed_b"],[{id:"hc_j2",userId:"clipqueen",username:"ClipQueen",text:"Need this"}],6),m("hp_clip_1",["dbs","maya","fanjay","u_seed_a","u_seed_b","u_seed_c"],[{id:"hc_c4",userId:"u_seed_a",username:"FanA",text:"Fire"}],4),u.hp_dbs_boost&&(u.hp_dbs_boost=(u.hp_dbs_boost||[]).slice(0,3),p.hp_dbs_boost=Math.min(Number(p.hp_dbs_boost||0),2)),d={...d,likes:u,comments:c,postShares:p,hotFeed:{...e,seededPosts:!0,seededPostsVer:2}},A(d),je(),Pe()}const s=new Set((d.posts||[]).map(u=>u.id)),a=[...d.posts||[]],i={...d.likes||{}},n={...d.comments||{}},r={...d.postShares||{}},l=Date.now();return Md.forEach(u=>{s.has(u.id)||(a.unshift({id:u.id,userId:u.userId,username:u.username,text:u.text,image:u.image||"",mediaType:u.mediaType||(u.image?"image":"text"),at:l-(u.atOffset||0),house:u.userId==="dbs"}),i[u.id]=[...u.likeUsers||[]],n[u.id]=(u.comments||[]).map(c=>({...c,text:c.text,at:l-(u.atOffset||0)+6e4})),u.shares&&(r[u.id]=u.shares))}),i.p1&&i.p1.length<3&&(i.p1=[...new Set([...i.p1||[],"maya","fanjay","u_seed_a"])]),i.p2&&i.p2.length<2&&(i.p2=[...new Set([...i.p2||[],"maya","fanjay"])]),(!n.p1||n.p1.length<2)&&(n.p1=[...n.p1||[],{id:"hc_p1a",userId:"maya",username:"MayaBeats",text:"Cover art goes crazy",at:l-8e7},{id:"hc_p1b",userId:"fanjay",username:"FanJay",text:"Been waiting on this",at:l-7e7}]),r.p1=Math.max(r.p1||0,2),r.p2=Math.max(r.p2||0,1),d={...d,posts:a,likes:i,comments:n,postShares:r,hotFeed:{...e,seededPosts:!0,seededPostsVer:2}},A(d),je(),Pe()}function ka(e){const t=d.likes&&d.likes[e]||[],s=d.comments&&d.comments[e]||[],a=d.postShares&&d.postShares[e]||0;return t.length+s.length+Number(a||0)}function je(){const e=Pe(),s=(d.posts||[]).map(l=>{const u=(d.likes&&d.likes[l.id]||[]).length,c=(d.comments&&d.comments[l.id]||[]).length,p=Number(d.postShares&&d.postShares[l.id]||0),m=u+c+p;return{id:l.id,postId:l.id,score:m,likes:u,comments:c,shares:p,username:l.username,userId:l.userId,preview:(l.text||"").slice(0,120),text:l.text||"",image:l.image||"",mediaType:l.mediaType||(l.image?"image":"text"),at:l.at||0,house:l.userId==="dbs"||!!l.house}}).filter(l=>l.score>=Td).sort((l,u)=>u.score-l.score||u.at-l.at).slice(0,Dd),a=new Set((e.posts||[]).map(l=>l.postId||l.id)),i=Array.isArray(d.engagementAlerts)?[...d.engagementAlerts]:[],n=new Set(i.filter(l=>l.kind==="post").map(l=>l.refId));s.forEach(l=>{n.has(l.id)||a.has(l.id)&&e.posts.length||(i.unshift({id:"ea_post_"+l.id+"_"+Date.now().toString(36),kind:"post",refId:l.id,title:(l.preview||l.text||"Hot post").slice(0,80),username:l.username,score:l.score,mediaType:l.mediaType||"text",at:Date.now(),handledAt:null,handledNote:null}),n.add(l.id))});const r=i.slice(0,60);return d={...d,hotFeed:{lives:e.lives,seededLives:e.seededLives,posts:s,seededPosts:e.seededPosts||s.length>0,seededPostsVer:Number(e.seededPostsVer)||0},engagementAlerts:r},A(d),Pe()}function Gr(e=8){return Cs(),Pe().posts.length||je(),(Pe().posts||[]).slice(0,Math.max(1,Number(e)||8))}function Ur(e){const t=String(e||"");if(!t)return{error:"missing"};if(!(d.posts||[]).find(i=>i.id===t))return{error:"missing"};const a={...d.postShares||{}};return a[t]=Number(a[t]||0)+1,d={...d,postShares:a},A(d),je(),{ok:!0,shares:a[t],score:ka(t)}}function Id(e){const t=e||{},s=t.kind==="live"?"live":"post",a=String(t.refId||t.id||"");if(!a)return{error:"missing"};const i=Array.isArray(d.engagementAlerts)?[...d.engagementAlerts]:[],n=i.find(l=>l.kind===s&&l.refId===a&&!l.handledAt);if(n)return{ok:!0,alert:n,deduped:!0};const r={id:t.id||"ea_"+s+"_"+a+"_"+Date.now().toString(36),kind:s,refId:a,title:String(t.title||"Hot item").slice(0,120),username:String(t.username||""),score:Number(t.score)||0,viewers:t.viewers!=null?Number(t.viewers):void 0,gifts:t.gifts!=null?Number(t.gifts):void 0,mediaType:t.mediaType||(s==="live"?"live":"text"),at:t.at||Date.now(),handledAt:t.handledAt||null,handledNote:t.handledNote||null};return d={...d,engagementAlerts:[r,...i].slice(0,60)},A(d),{ok:!0,alert:r}}function tn({openOnly:e=!0}={}){const t=Array.isArray(d.engagementAlerts)?d.engagementAlerts:[];return(e?t.filter(a=>!a.handledAt):t.slice()).sort((a,i)=>(i.at||0)-(a.at||0))}function Ms(e,t){const s=String(e||"");if(!s)return{error:"missing"};const a=Array.isArray(d.engagementAlerts)?d.engagementAlerts:[];let i=null;const n=a.map(r=>r.id!==s?r:(i={...r,handledAt:Date.now(),handledNote:t!=null?String(t):r.handledNote||"handled"},i));return i?(d={...d,engagementAlerts:n},A(d),{ok:!0,alert:i}):{error:"missing"}}function Pd(e){if(!ae())return{error:"admin"};const t=d.user;if(!t)return{error:"signin"};const s=String(e||""),a=new Set(d.likes&&d.likes[s]||[]);return a.add(t.id),d={...d,likes:{...d.likes,[s]:[...a]}},A(d),je(),{ok:!0,count:a.size,score:ka(s)}}function _d(e,t){if(!ae())return{error:"admin"};const s=d.user;if(!s)return{error:"signin"};const a=String(e||""),i=t.trim();if(!i)return{error:"empty"};const n={id:"c_admin_"+Date.now().toString(36),userId:s.id,username:s.username,text:i,at:Date.now(),admin:!0},r=d.comments&&d.comments[a]||[];return d={...d,comments:{...d.comments,[a]:[...r,n]}},A(d),je(),{ok:!0,comment:n,score:ka(a)}}function Od(e){if(!ae())return{error:"admin"};const t=Ur(e);return t.error?t:{ok:!0,shares:t.shares,link:"#/posts",score:t.score}}function $i(e,t){return Math.max(0,Number(e)||0)+Math.max(0,Number(t)||0)*20}function xi(e){if(!e||typeof e!="object")return null;const t=String(e.id||e.liveId||"");if(!t)return null;const s=String(e.hostId||e.userId||""),a=String(e.hostName||e.username||e.handle||"Creator"),i=Math.max(0,Number(e.viewers)||0),n=Math.max(0,Number(e.giftsTotal??e.gifts)||0),r=e.score!=null&&Number.isFinite(Number(e.score))?Number(e.score):$i(i,n);return{id:t,hostId:s,hostName:a,title:String(e.title||"Live"),viewers:i,giftsTotal:n,house:!!e.house,spikedAt:e.spikedAt||null,score:r}}function Vr({force:e=!1}={}){const t=Pe();if(t.seededLives&&!e&&(t.lives||[]).length>0)return{skipped:!0,lives:t.lives.map(xi).filter(Boolean)};const s=[{id:"hl_dbs_house",hostId:"dbs",hostName:"DatBoiSkeet",title:"DBS Live · Listening Session",viewers:8420,giftsTotal:186,house:!0},{id:"hl_dbs_vault",hostId:"dbs",hostName:"DatBoiSkeet",title:"Vault Drop Afterparty · House",viewers:3210,giftsTotal:94,house:!0},{id:"hl_skeetfan",hostId:"u_skeetfanatl",hostName:"SkeetFanATL",title:"ATL reacts · Long Story Short",viewers:1540,giftsTotal:42,house:!1},{id:"hl_vaultwatch",hostId:"u_vaultwatcher",hostName:"VaultWatcher",title:"Vault deep cut night",viewers:980,giftsTotal:61,house:!1},{id:"hl_fxclip",hostId:"u_fxclipper",hostName:"FXClipper",title:"Foreign X-Change clips live",viewers:2210,giftsTotal:28,house:!1},{id:"hl_nightowl",hostId:"u_nightowldbs",hostName:"NightOwlDBS",title:"Late night lounge · chill",viewers:412,giftsTotal:15,house:!1},{id:"hl_longstory",hostId:"u_longstorylistener",hostName:"LongStoryListener",title:"LSS theory hour",viewers:128,giftsTotal:7,house:!1},{id:"hl_ladies",hostId:"u_ladiesonlyfan",hostName:"LadiesOnlyFan",title:"Ladies Only countdown",viewers:67,giftsTotal:3,house:!1}].map(a=>({...a,spikedAt:null,score:$i(a.viewers,a.giftsTotal)}));return Kr({...t,lives:s,seededLives:!0}),{ok:!0,lives:s}}function Wt(){return Vr(),(Pe().lives||[]).map(xi).filter(Boolean).sort((t,s)=>(s.score||0)-(t.score||0)||(s.viewers||0)-(t.viewers||0))}function qd(e){const t=String(e||"");if(!t)return{error:"missing"};Vr();const s=Pe();let a=null;const i=(s.lives||[]).map(r=>{const l=xi(r);if(!l||l.id!==t)return r;const u=180+Math.floor(Math.random()*920),c=4+Math.floor(Math.random()*28),p=l.viewers+u,m=l.giftsTotal+c,g=$i(p,m);return a={...l,viewers:p,giftsTotal:m,score:g,spikedAt:Date.now()},a});if(!a)return{error:"missing"};Kr({...s,lives:i,seededLives:!0});const n=Id({kind:"live",refId:a.id,title:a.title,username:a.hostName,score:a.score,viewers:a.viewers,gifts:a.giftsTotal});return{ok:!0,live:a,alert:(n==null?void 0:n.alert)||null,deduped:!!(n!=null&&n.deduped)}}function Nd(){return Wt().filter(s=>s&&!s.house).sort((s,a)=>(a.score||0)-(s.score||0)||(a.viewers||0)-(s.viewers||0)).slice(0,6).map(s=>({id:s.id,hostId:s.hostId,hostName:s.hostName,title:s.title,viewers:s.viewers,giftsTotal:s.giftsTotal,house:!!s.house,score:s.score,spikedAt:s.spikedAt||null,playbacksToday:s.playbacksToday!=null?s.playbacksToday:Math.max(1,Math.round((s.viewers||0)/40))}))}function zr(){const e=new Date().toISOString().slice(0,10),s=(St({publishedOnly:!0,types:["song"]})||[]).map(i=>{const n=Number(i.playsToday)||Number(i.playCount)||Number(i.plays)||0;let r="";return i.coverRef&&!String(i.coverRef).startsWith("idb:")&&(r=i.coverRef),{id:i.id,title:i.title||"Untitled",artist:i.artist||"DatBoiSkeet",cover:r,playsToday:n,href:"#/music",demo:!1,day:e,status:i.status||(i.published?"Published":"Catalog")}}).filter(i=>i.playsToday>0).sort((i,n)=>n.playsToday-i.playsToday||String(i.title).localeCompare(String(n.title)));return s[0]?s[0]:{id:"demo_most_played_lss",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",playsToday:900+e.split("-").reduce((i,n)=>i+Number(n),0)%400,href:"#/music",demo:!0,day:e,status:"Coming Soon"}}const sn="https://www.youtube.com/iframe_api";let X=[],ce=0,B=null,Ls=!1,_e=!1,ct=!1;const Z=new Set;let an=!1;function Ye(e){if(!e)return"";try{const t=new URL(e);if(t.hostname.includes("youtu.be"))return t.pathname.slice(1).split("/")[0]||"";const s=t.searchParams.get("v");if(s)return s;const a=t.pathname.match(/\/embed\/([^/?]+)/);if(a)return a[1]==="videoseries"?"":a[1]}catch{}return""}function nn(e){if(!e)return"";try{return new URL(e).searchParams.get("list")||""}catch{return""}}function qt(e){return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Bd(){var n,r;const e=[],t=new Set,s=new Set,a=l=>{if(l.playlistId){if(s.has(l.playlistId))return;s.add(l.playlistId)}else if(l.youtubeId){if(t.has(l.youtubeId))return;t.add(l.youtubeId)}else return;e.push(l)};for(const l of yt){const u=((n=l.links)==null?void 0:n.youtube)||"",c=Ye(u)||Ye(((r=l.links)==null?void 0:r.youtubeMusic)||"");c&&a({id:l.id,title:l.title,artist:l.artist||"DatBoiSkeet",cover:l.cover||qt(c),youtubeId:c,youtube:u||`https://www.youtube.com/watch?v=${c}`,embed:`https://www.youtube.com/embed/${c}`,links:{...l.links||{},youtube:u||`https://www.youtube.com/watch?v=${c}`},kind:"track"})}for(const l of ti){const u=nn(l.youtube)||nn(l.embed);u&&a({id:l.id,title:l.title,artist:"DatBoiSkeet",cover:qt("DTe4OiX2otg")||"/brand/logo-dbs-v3@2x.webp",playlistId:u,youtube:l.youtube,embed:l.embed||`https://www.youtube.com/embed/videoseries?list=${u}`,links:{youtube:l.youtube,youtubeMusic:me.youtubeMusic,spotify:me.spotify,apple:me.apple},kind:"mix"})}const i=new Set(["Music Videos"]);for(const l of fe){if(!i.has(l.category||"Music Videos")||!l.featured&&!["dirty-money","93","no-love","bouquet","where-im-from","go-2-work"].includes(l.id)&&!l.featured)continue;const u=Ye(l.youtube)||Ye(l.embed);if(!u||t.has(u))continue;const c=yt.find(p=>{var m;return Ye(((m=p.links)==null?void 0:m.youtube)||"")===u});a({id:l.id,title:l.title,artist:l.artist||"DatBoiSkeet",cover:(c==null?void 0:c.cover)||qt(u),youtubeId:u,youtube:l.youtube,embed:l.embed||`https://www.youtube.com/embed/${u}`,links:{youtube:l.youtube,youtubeMusic:`https://music.youtube.com/watch?v=${u}`,...(c==null?void 0:c.links)||{}},kind:"mv"})}return X=e,ce>=X.length&&(ce=0),X}function He(e){return String(e||"").toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z0-9]+/g," ").trim()}function Hr(){var a,i;const e=zr();if(!e)return{item:null,meta:null,playable:!1};const t=He(e.title),s=X.find(n=>He(n.title)===t||He(n.title).includes(t)||t.includes(He(n.title)));if(s&&(s.youtubeId||s.playlistId))return{item:{...s},meta:e,playable:!0};for(const n of yt){if(He(n.title)!==t&&!He(n.title).startsWith(t)&&!t.startsWith(He(n.title)))continue;const r=((a=n.links)==null?void 0:a.youtube)||"",l=Ye(r)||Ye(((i=n.links)==null?void 0:i.youtubeMusic)||"");return l?{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:n.cover||qt(l),youtubeId:l,youtube:r||`https://www.youtube.com/watch?v=${l}`,embed:`https://www.youtube.com/embed/${l}`,links:{...n.links||{},youtube:r||`https://www.youtube.com/watch?v=${l}`},kind:"track"},meta:e,playable:!0}:{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:n.cover||e.cover||"",youtube:r||me.youtube,embed:"",links:{...n.links||{}},kind:"track"},meta:e,playable:!1}}for(const n of fe){if(He(n.title)!==t&&!He(n.title).includes(t))continue;const r=Ye(n.youtube)||Ye(n.embed);if(r)return{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:qt(r),youtubeId:r,youtube:n.youtube,embed:n.embed||`https://www.youtube.com/embed/${r}`,links:{youtube:n.youtube,youtubeMusic:`https://music.youtube.com/watch?v=${r}`},kind:"mv"},meta:e,playable:!0}}return{item:{id:e.id||"most-played",title:e.title||"Most played",artist:e.artist||"DatBoiSkeet",cover:e.cover||"",youtube:"",embed:"",links:{spotify:me.spotify,apple:me.apple,youtubeMusic:me.youtubeMusic,youtube:me.youtube},kind:"track"},meta:e,playable:!1}}function Wr(){const e=document.getElementById("spPlayNextMost"),t=document.getElementById("spPlayNextSub"),{meta:s,playable:a}=Hr();if(e){if(!s){e.hidden=!0;return}if(e.hidden=!1,e.dataset.playable=a?"1":"0",e.dataset.demo=s.demo?"1":"0",e.title=a?`Most played today · ${s.title} → Play next`:`Most played today · ${s.title} (Coming Soon / open platform)`,e.setAttribute("aria-label",`Play next — ${s.title}`),t){const i=s.demo?"DEMO · ":"";t.textContent=`${i}Most played today · ${s.title}`}}}function rn(e){if(!e)return-1;if(!X.length)return X.push(e),ce=0,0;let t=X.findIndex(a=>e.youtubeId&&a.youtubeId===e.youtubeId||e.playlistId&&a.playlistId===e.playlistId||a.id===e.id);if(t===ce)return ce;if(t>=0){const[a]=X.splice(t,1);t<ce&&(ce-=1),e=a}const s=Math.min(ce+1,X.length);return X.splice(s,0,e),s}function Rd(){var n,r,l,u;const{item:e,meta:t,playable:s}=Hr();if(!t||!e){h("No most-played track yet");return}if(!s){const c=document.getElementById("spOpen"),p=((n=e.links)==null?void 0:n.apple)||((r=e.links)==null?void 0:r.youtubeMusic)||((l=e.links)==null?void 0:l.spotify)||((u=e.links)==null?void 0:u.youtube)||me.apple;c&&p&&(c.href=p),h(t.demo||t.status==="Coming Soon"?`${t.title} · Coming Soon — no in-app master. Open Music / Stream Everywhere when it drops.`:`${t.title} — open official platform (not in-app audio)`),Wr();return}if(Ei()||!!ct&&_e&&Z.size===0||Z.size>0){const c=rn(e);h(c===ce?`Already playing · ${e.title}`:`Queued next · ${e.title}`),be();return}let i=X.findIndex(c=>e.youtubeId&&c.youtubeId===e.youtubeId||e.playlistId&&c.playlistId===e.playlistId||c.id===e.id);i<0&&(i=rn(e)),eo(i),h(`Playing · ${e.title}`)}const Jt=[];function Yr(){var e;return(e=window.YT)!=null&&e.Player?Promise.resolve(window.YT):new Promise(t=>{var a;if(Jt.push(t),Ls)return;Ls=!0;const s=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{Ls=!1;try{s==null||s()}catch{}const i=window.YT;for(;Jt.length;)try{Jt.shift()(i)}catch{}Nt()},document.querySelector(`script[src="${sn}"]`)){if((a=window.YT)!=null&&a.Player){Ls=!1;const i=window.YT;for(;Jt.length;)try{Jt.shift()(i)}catch{}Nt()}}else{const i=document.createElement("script");i.src=sn,i.async=!0,document.head.appendChild(i)}})}function Jr(){Yr().then(()=>Nt()).catch(()=>{})}function Nt(){var n;if(!(document.getElementById("dbsStickyFrame")||document.getElementById("dbsYtHost"))||!((n=window.YT)!=null&&n.Player)||B)return;const t=X[ce],s={autoplay:0,controls:0,rel:0,modestbranding:1,playsinline:1,enablejsapi:1,origin:location.origin},a={height:"1",width:"1",playerVars:s,events:{onReady:()=>{be()},onStateChange:r=>{r.data===0&&Zr({auto:!0}),be()},onError:()=>{h("YouTube embed error — Open on YouTube"),be()}}};t!=null&&t.playlistId?a.playerVars={...s,listType:"playlist",list:t.playlistId}:t!=null&&t.youtubeId?a.videoId=t.youtubeId:a.videoId="DTe4OiX2otg";const i=document.getElementById("dbsStickyFrame")?"dbsStickyFrame":"dbsYtHost";B=new window.YT.Player(i,a)}function ys({autoplay:e}={autoplay:!1}){const t=X[ce];if(!t||!(B!=null&&B.cueVideoById)){Nt();return}try{t.playlistId?(typeof B.loadPlaylist=="function"?B.loadPlaylist({list:t.playlistId,listType:"playlist",index:0}):typeof B.cuePlaylist=="function"&&B.cuePlaylist({list:t.playlistId,listType:"playlist",index:0}),e&&_e&&Z.size===0&&setTimeout(()=>{try{B.playVideo()}catch{}},250)):t.youtubeId&&(e&&_e&&Z.size===0?B.loadVideoById(t.youtubeId):B.cueVideoById(t.youtubeId))}catch{}be()}function Ei(){var e;try{return((e=B==null?void 0:B.getPlayerState)==null?void 0:e.call(B))===1}catch{return!1}}function be(){var p,m,g;const e=X[ce],t=document.getElementById("spArt"),s=document.getElementById("spTitle"),a=document.getElementById("spSub"),i=document.getElementById("spPlay"),n=document.getElementById("spOpen"),r=document.getElementById("spSource"),l=Z.size>0,u=!l&&(ct||Ei());if(t&&e&&(t.src=e.cover||qt(e.youtubeId||"")||"/brand/logo-dbs-v3@2x.webp",t.alt=e.title||""),s&&(s.textContent=(e==null?void 0:e.title)||"DatBoiSkeet"),a&&(_e?l?a.textContent=`Paused · ${[...Z][0]} interrupt`:a.textContent=`${(e==null?void 0:e.artist)||"DatBoiSkeet"} · via YouTube (not Spotify in-app)`:a.textContent="Tap Play · YouTube embed · Stream Everywhere"),i&&(i.textContent=u?"❚❚":"▶",i.setAttribute("aria-label",u?"Pause":"Play DBS Music"),i.dataset.playing=u?"1":"0"),n&&e){const f=((p=e.links)==null?void 0:p.apple)||((m=e.links)==null?void 0:m.youtubeMusic)||((g=e.links)==null?void 0:g.spotify)||e.youtube||me.apple;n.href=f,n.title="Open on official platform"}r&&(r.textContent=(e==null?void 0:e.kind)==="mix"?"YT Mix":(e==null?void 0:e.kind)==="mv"?"YT MV":"YouTube");const c=document.getElementById("spBadge");c&&(c.textContent=l?"INTERRUPTED":_e&&u?"PLAYING · YT":"TEST · YT EMBED"),Wr()}function jd(){var e;if(Z.size>0){h("Paused for "+[...Z][0]+" — resume when done"),be();return}_e=!0,ct=!0,Jr(),Nt();try{if(B!=null&&B.playVideo){const t=(e=B.getPlayerState)==null?void 0:e.call(B);t===-1||t===5||t===void 0?ys({autoplay:!0}):B.playVideo()}else{const t=setInterval(()=>{B!=null&&B.playVideo&&(clearInterval(t),ys({autoplay:!0}))},120);setTimeout(()=>clearInterval(t),8e3)}}catch{h("Tap Play DBS Music again if autoplay blocked")}be()}function Fd({clearDesire:e}={}){var t;e&&(ct=!1);try{(t=B==null?void 0:B.pauseVideo)==null||t.call(B)}catch{}be()}function Ts(e="user"){e&&e!=="user"&&Z.add(e),Fd({clearDesire:e==="user"}),be()}function Qr(e){var t;if(e?Z.delete(e):Z.clear(),Z.size===0&&_e&&ct)try{(t=B==null?void 0:B.playVideo)==null||t.call(B)}catch{}be()}function ea(e){return Qr(e)}function Bt(){Ts("video")}function Ca(){Ts("live")}function Xr(){ea("live")}function Qe(){ea("video")}function Zr({auto:e}={}){X.length&&(ce=(ce+1)%X.length,ct=!0,e||(_e=!0),ys({autoplay:_e&&Z.size===0}),be())}function Kd(){X.length&&(ce=(ce-1+X.length)%X.length,_e=!0,ct=!0,ys({autoplay:Z.size===0}),be())}function eo(e){e<0||e>=X.length||(ce=e,_e=!0,Z.clear(),ct=!0,ys({autoplay:!0}),be())}function Gd(){var e,t,s,a,i,n;an||(an=!0,(e=document.getElementById("spPlay"))==null||e.addEventListener("click",()=>{Z.size>0&&Z.clear(),Ei()?Ts("user"):jd()}),(t=document.getElementById("spPrev"))==null||t.addEventListener("click",()=>{Z.clear(),Kd()}),(s=document.getElementById("spNext"))==null||s.addEventListener("click",()=>{Z.clear(),Zr()}),(a=document.getElementById("spOpen"))==null||a.addEventListener("click",r=>{h("Opening external music service (playback depends on provider)")}),(i=document.getElementById("spPlayNextMost"))==null||i.addEventListener("click",()=>{Rd()}),(n=document.getElementById("spQueueBtn"))==null||n.addEventListener("click",()=>{const r=document.getElementById("spQueuePanel");if(!r)return;r.hasAttribute("hidden")?(r.removeAttribute("hidden"),r.innerHTML=X.map((u,c)=>`<button type="button" class="sp-q-item${c===ce?" on":""}" data-i="${c}">
              <img src="${u.cover||""}" alt="" width="36" height="36" />
              <span><b>${on(u.title)}</b><small>${on(u.artist)} · ${u.kind}</small></span>
            </button>`).join(""),r.querySelectorAll(".sp-q-item").forEach(u=>{u.addEventListener("click",()=>{eo(Number(u.dataset.i)),r.setAttribute("hidden","")})})):r.setAttribute("hidden","")}),document.addEventListener("click",r=>{const l=document.getElementById("spQueuePanel");!l||l.hasAttribute("hidden")||!r.target.closest("#spQueuePanel")&&!r.target.closest("#spQueueBtn")&&l.setAttribute("hidden","")}))}function on(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let ln=!1;function Ud(){ln||(ln=!0,window.addEventListener("dbs:interrupt-music",e=>{var s;const t=((s=e==null?void 0:e.detail)==null?void 0:s.reason)||"user";Ts(t)}))}function Vd(){Bd(),Gd(),Ud(),be(),Jr(),setTimeout(()=>Nt(),400)}function zd(e){var a,i;const t=e==="/live",s=e==="/videos"||e==="/home"||e==="/music"||e==="/vault";!t&&Z.has("live")&&ea("live");for(const[n,r]of[...oe.entries()])if(!document.getElementById(n)){r.playing&&(Be=Math.max(0,Be-1));try{(i=(a=r.player)==null?void 0:a.destroy)==null||i.call(a)}catch{}oe.delete(n)}Be===0&&!s&&Z.has("video")&&ea("video"),be()}const oe=new Map;let Be=0,cn=0;function za(e){var s;if(!e||!(e instanceof Element))return!0;const t=e.id||"";return!!(t==="dbsStickyFrame"||t==="dbsYtHost"||(s=e.closest)!=null&&s.call(e,"#dbs-sticky-player, #stickyPlayer, #dbsStickyFrame, #dbsYtHost"))}function Ai(e){return e?/youtube\.com\/embed|youtube-nocookie\.com\/embed|youtu\.be\//.test(e):!1}function Hd(e){let t=e.getAttribute("src")||e.src||"";if(!Ai(t))return!1;let s=!1;return/[?&]enablejsapi=1(?:&|$)/.test(t)||(t+=(t.includes("?")?"&":"?")+"enablejsapi=1",s=!0),/[?&]origin=/.test(t)||(t+=(t.includes("?")?"&":"?")+"origin="+encodeURIComponent(location.origin),s=!0),s&&(e.setAttribute("src",t),e.src=t),!0}function Wd(e){if(e.id&&!oe.has(e.id)&&e.id!=="dbsStickyFrame"&&e.id!=="dbsYtHost"||e.id&&oe.has(e.id))return e.id;cn+=1;const t=`dbs-page-yt-${cn}`;return e.id=t,t}function Yd(e,t){const s=oe.get(e);s&&(t.data===1?(s.playing||(s.playing=!0,Be+=1),Bt()):(t.data===0||t.data===2)&&(s.playing&&(s.playing=!1,Be=Math.max(0,Be-1)),Be===0&&Qe()))}function to(e){var n,r;const t=typeof e=="string"?document.getElementById(e):e;if(!t||za(t))return Promise.resolve(null);let s=t;if(t.tagName!=="IFRAME"&&(s=((n=t.querySelector)==null?void 0:n.call(t,"iframe"))||t),!s||s.tagName!=="IFRAME"||za(s))return Promise.resolve(null);const a=s.getAttribute("src")||s.src||"";if(!Ai(a)||!Hd(s))return Promise.resolve(null);const i=Wd(s);return oe.has(i)&&((r=oe.get(i))!=null&&r.player)?Promise.resolve(oe.get(i).player):Yr().then(()=>new Promise(l=>{var m;if(oe.has(i)&&((m=oe.get(i))!=null&&m.player)){l(oe.get(i).player);return}const u=()=>{var g;if(!document.getElementById(i)){l(null);return}if(oe.has(i)&&((g=oe.get(i))!=null&&g.player)){l(oe.get(i).player);return}try{const f=new window.YT.Player(i,{events:{onReady:()=>{},onStateChange:b=>Yd(i,b),onError:()=>{}}});oe.set(i,{player:f,el:s,playing:!1}),s.dataset.dbsYtBound="1",l(f)}catch(f){console.warn("[dbs] bindYoutubeInterrupt failed",i,f),l(null)}};if(s.dataset.dbsYtBound==="1"&&oe.has(i)){l(oe.get(i).player);return}let c=!1;const p=()=>{c||(c=!0,u())};s.addEventListener("load",p,{once:!0}),setTimeout(p,400)}))}function wa(e){const s=[...(e&&e.querySelectorAll?e:document).querySelectorAll("iframe")].filter(a=>{if(za(a))return!1;const i=a.getAttribute("src")||a.src||"";return Ai(i)});return Promise.all(s.map(a=>to(a)))}function Jd(e){var i,n;const t=typeof e=="string"?document.getElementById(e):e,s=typeof e=="string"?e:t==null?void 0:t.id;if(!s||s==="dbsStickyFrame"||s==="dbsYtHost")return;const a=oe.get(s);if(a){a.playing&&(a.playing=!1,Be=Math.max(0,Be-1),Be===0&&Qe());try{(n=(i=a.player)==null?void 0:i.destroy)==null||n.call(i)}catch{}oe.delete(s)}}const ta=new Set;function Ue(){const e=(location.hash||"").replace(/^#/,"")||"/home";let t="",s=e;const a=e.indexOf("#");a>=0&&(t=e.slice(a+1).split("?")[0],s=e.slice(0,a));const i=s.startsWith("/")?s:"/"+s,n=i.indexOf("?"),r=n===-1?i:i.slice(0,n),l=n===-1?"":i.slice(n+1),u=r.split("/").filter(Boolean);return{path:"/"+(u[0]||"home"),parts:u,query:Object.fromEntries(new URLSearchParams(l)),elementId:t,raw:i}}function R(e){const s=(e.startsWith("#")?e:"#"+(e.startsWith("/")?e:"/"+e)).replace(/^#/,"");if((location.hash||"").replace(/^#/,"")===s){ta.forEach(i=>i(Ue()));return}location.hash=s}function Qd(e){return ta.add(e),()=>ta.delete(e)}function Xd(){const e=()=>ta.forEach(t=>t(Ue()));window.addEventListener("hashchange",e),location.hash?e():location.hash="/home"}const Ta="/pikk-app/",Lt=Ta.endsWith("/")?Ta.slice(0,-1):Ta;function It(e){if(e==null||e==="")return e;const t=String(e);return/^(https?:|data:|blob:|idb:|#|\/\/)/i.test(t)||Lt&&(t===Lt||t.startsWith(Lt+"/"))?t:t.startsWith("/")?Lt+t:(Lt||"")+"/"+t}function so(e=document){Lt&&(e.querySelectorAll("[src]").forEach(t=>{const s=t.getAttribute("src");if(!s)return;const a=It(s);a!==s&&t.setAttribute("src",a)}),e.querySelectorAll("[srcset]").forEach(t=>{const s=t.getAttribute("srcset");if(!s||!s.includes("/"))return;const a=s.replace(/(^|,\s*)(\/(?!\/)[^\s,]+)/g,(i,n,r)=>n+It(r));a!==s&&t.setAttribute("srcset",a)}),e.querySelectorAll("[data-zoom]").forEach(t=>{const s=t.getAttribute("data-zoom");if(!s)return;const a=It(s);a!==s&&t.setAttribute("data-zoom",a)}),e.querySelectorAll("[poster]").forEach(t=>{const s=t.getAttribute("poster");if(!s)return;const a=It(s);a!==s&&t.setAttribute("poster",a)}))}function ao(e,t){e&&e.querySelectorAll("a[data-path]").forEach(s=>{const a=s.getAttribute("data-path")===t;s.classList.toggle("on",a),a?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current")})}function Zd(e,t){var i,n,r;const s=(r=(n=(i=t==null?void 0:t.querySelector)==null?void 0:i.call(t,"h1"))==null?void 0:n.textContent)==null?void 0:r.replace(/\s+/g," ").trim();return s?s.slice(0,80):(String((e==null?void 0:e.path)||"/home").split("/").filter(Boolean).pop()||"home").replace(/[-_]+/g," ").replace(/\b\w/g,l=>l.toUpperCase())}function ep(e,t,s,a=document){const i=Zd(e,t);return a.title=`${i} | PIKK`,s&&(s.textContent=`${i} page loaded`),i}function tp({drawer:e,scrim:t,trigger:s},a,i=!1){var r;if(!e||!t||!s)return;const n=!!a;e.classList.toggle("open",n),e.setAttribute("aria-hidden",String(!n)),e.inert=!n,t.classList.toggle("show",n),s.setAttribute("aria-expanded",String(n)),s.setAttribute("aria-label",n?"Close navigation menu":"Open navigation menu"),n?(r=e.querySelector("button, a[href]"))==null||r.focus():i&&s.focus()}const sp=Object.freeze([{label:"Songs",href:"#/music?view=songs",detail:"Browse released singles",icon:"♫"},{label:"Albums",href:"#/music?view=albums",detail:"Browse released albums",icon:"▣"},{label:"Beats",href:"#/music?view=beats",detail:"Beat marketplace not yet available",icon:"◉"},{label:"Playlists",href:"#/music?view=playlists",detail:"Verified YouTube playlists",icon:"▤"},{label:"Upload Music",href:"#/music?view=upload",detail:"Creator uploads coming later",icon:"⇧"}]),ap=Object.freeze({Songs:"music",Albums:"music",Beats:"music",Playlists:"videos","Upload Music":"music"});function ns(e=!1){const t=document.getElementById("pikkMusicMenu");if(!t||t.hidden)return;t.hidden=!0;const s=document.querySelector('#tabbar a[href="#/music"]');s==null||s.setAttribute("aria-expanded","false"),e&&(s==null||s.focus())}function ip(){let e=document.getElementById("pikkMusicMenu");return e||(e=document.createElement("div"),e.id="pikkMusicMenu",e.className="pikk-create-overlay",e.hidden=!0,e.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="pikkMusicMenuTitle">
    <div class="pikk-create-head"><strong id="pikkMusicMenuTitle">Music on PIKK</strong><button type="button" class="btn ghost" data-music-close aria-label="Close music menu">✕</button></div>
    <div class="pikk-create-options pikk-create-grid">
      ${sp.map(t=>`<a class="pikk-create-tile" href="${t.href}"><span class="pikk-menu-icon" aria-hidden="true">${ms[ap[t.label]||"music"]}</span><strong class="pikk-menu-title">${t.label}</strong><small>${t.detail}</small></a>`).join("")}
    </div>
    <button type="button" class="pikk-menu-cancel" data-music-close>Cancel</button>
    <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Beat selling and music uploads are not available yet</p>
  </div>`,document.body.appendChild(e),window.addEventListener("hashchange",()=>ns()),e.addEventListener("click",t=>{t.target===e||t.target.closest("[data-music-close]")?ns(!0):t.target.closest(".pikk-create-options a")&&ns()}),document.addEventListener("keydown",t=>{if(e.hidden||(t.key==="Escape"&&(t.preventDefault(),ns(!0)),t.key!=="Tab"))return;const s=[...e.querySelectorAll("a[href], button:not([disabled])")],a=s[0],i=s[s.length-1];if(!a){t.preventDefault();return}e.contains(document.activeElement)?t.shiftKey&&document.activeElement===a?(t.preventDefault(),i.focus()):!t.shiftKey&&document.activeElement===i&&(t.preventDefault(),a.focus()):(t.preventDefault(),(t.shiftKey?i:a).focus())}),e)}function np(e){var i,n;const t=ip(),s=t.hidden,a=document.getElementById("pikkCreateMenu");s&&a&&!a.hidden&&(a.hidden=!0,(i=document.querySelector('#tabbar a[href="#/create"]'))==null||i.setAttribute("aria-expanded","false")),t.hidden=!s,e==null||e.setAttribute("aria-expanded",String(s)),s?(n=t.querySelector("[data-music-close]"))==null||n.focus():e==null||e.focus()}const rp="dbs_media_v1",Rt="blobs",op=1;function io(){return new Promise((e,t)=>{const s=indexedDB.open(rp,op);s.onupgradeneeded=()=>{const a=s.result;a.objectStoreNames.contains(Rt)||a.createObjectStore(Rt,{keyPath:"id"})},s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error||new Error("idb open failed"))})}async function lp(e,t,s={}){const a=await io();return new Promise((i,n)=>{const r=a.transaction(Rt,"readwrite");r.objectStore(Rt).put({id:e,blob:t,mime:t.type||s.mime||"application/octet-stream",name:s.name||"",size:t.size||0,at:Date.now()}),r.oncomplete=()=>i(e),r.onerror=()=>n(r.error)})}async function cp(e){const t=await io();return new Promise((s,a)=>{const n=t.transaction(Rt,"readonly").objectStore(Rt).get(e);n.onsuccess=()=>s(n.result||null),n.onerror=()=>a(n.error)})}const Da=new Map;async function Sa(e){if(!e)return"";if(e.startsWith("idb:")){const t=e.slice(4);if(Da.has(t))return Da.get(t);const s=await cp(t);if(!(s!=null&&s.blob))return"";const a=URL.createObjectURL(s.blob);return Da.set(t,a),a}return e}function dp(e="blob"){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}const Ma=Object.freeze([{tier:"spotlight",name:"Premium Spotlight",slots:1,day:199,week:999},{tier:"featured",name:"Featured Box",slots:2,day:99,week:499},{tier:"promo",name:"Promo Box",slots:3,day:49,week:249}]);function La(e,t){return`<article class="pikk-ad-slot pikk-ad-${e.tier}" data-promo-tier="${e.tier}" aria-label="${e.name} slot ${t}, pricing preview">
    <span class="pikk-ad-slot-top"><span class="pikk-ad-slot-icon" aria-hidden="true">▶</span><span class="pikk-ad-slot-number">0${t}</span></span>
    <strong>${e.name}</strong>
    <span class="pikk-ad-slot-description">Available placement · booking coming soon</span>
    <span class="pikk-ad-slot-prices"><b>$${e.day}</b><small>/ 24 hours</small></span>
    <span class="pikk-ad-slot-week">$${e.week} / 7 days</span>
  </article>`}function no(e){return`<div class="pikk-stories-promotions" data-featured-context="${e==="videos"?"videos":"home"}">
    <section class="pikk-stories-strip" aria-label="PIKK Stories preview">
      <div class="pikk-featured-heading"><div><p class="kicker">Connect in 24 hours</p><h2>PIKK Stories</h2></div><span class="pikk-featured-state">Coming soon</span></div>
      <div class="pikk-stories-preview">
        <div class="pikk-story-preview"><span class="pikk-story-ring"><span aria-hidden="true">＋</span></span><strong>Your Story</strong></div>
        <p>Share moments with your followers. Stories will disappear after 24 hours once publishing launches.</p>
      </div>
    </section>
    <section class="pikk-featured-inventory" aria-label="Featured on PIKK sponsored placement pricing">
      <div class="pikk-featured-heading"><div><p class="kicker">Creator &amp; brand visibility</p><h2>Featured on PIKK</h2></div><span class="pikk-featured-sponsored">Sponsored placements</span></div>
      <p class="pikk-featured-intro">Six premium advertising positions on each page. Preview pricing below; booking and checkout are not active yet.</p>
      <div class="pikk-featured-rows">
        <div class="pikk-featured-row pikk-featured-row-hero">${La(Ma[0],1)}</div>
        <div class="pikk-featured-row pikk-featured-row-two">${[1,2].map(s=>La(Ma[1],s)).join("")}</div>
        <div class="pikk-featured-row pikk-featured-row-three">${[1,2,3].map(s=>La(Ma[2],s)).join("")}</div>
      </div>
      <p class="pikk-featured-footnote">Home and Videos placements are priced separately. Rates are introductory proposals; no paid placement or guaranteed views are currently offered.</p>
    </section>
  </div>`}const pp={Explore:"🧭","Shorts / Clips":"▶",Music:"🎵",Videos:"🎬",Posts:"📸",Live:"🔴","PIKK Lounge":"💬",Vault:"🔐",Marketplace:"🛍️",Missions:"🎯"},sa=[{id:"toplive",label:"Top live"},{id:"videos",label:"Videos"},{id:"rising",label:"Rising"},{id:"hot",label:"Hot lives"},{id:"songs",label:"Songs"}],up=8e3,Ci="dbs_home_stage_v2",mp=["dbs_home_stage"];function Ti(e){const t=Number(e)||0;return t>=1e3?`${(t/1e3).toFixed(t>=1e4?0:1)}k`:String(t)}function Is(e){return e?!!(e.house||e.hostId==="dbs"||e.hostName==="DatBoiSkeet"):!1}function dn(e){return e?!!(e.house||e.userId==="dbs"||e.username==="DatBoiSkeet"):!1}function hp(e=3){const t=Wt(),s=t.filter(n=>!Is(n)),a=t.filter(n=>Is(n)),i=s.slice(0,Math.max(2,e-1));for(a[0]&&i.push(a[0]);i.length<e&&s[i.filter(n=>!Is(n)).length];){const n=s[i.filter(r=>!Is(r)).length];if(!n||i.includes(n))break;i.push(n)}return i.slice(0,e)}function gp(e=4){const t=Gr(Math.max(8,e+4)),s=t.filter(n=>!dn(n)),a=t.filter(n=>dn(n)),i=[...s.slice(0,3)];a[0]&&i.push(a[0]);for(const n of s.slice(3)){if(i.length>=e)break;i.includes(n)||i.push(n)}for(const n of a.slice(1)){if(i.length>=e)break;i.includes(n)||i.push(n)}return i.slice(0,e)}function ro(){const e=L().live,t=Wt().map(s=>({...s}));if(e&&!e.endedAt){const s=Math.max(0,Number(e.viewers)||0),a=Math.max(0,Number(e.giftsTotal)||0);t.push({id:e.id||"session",hostId:e.hostId,hostName:e.hostName||"Creator",title:e.title||"Live now",viewers:s,giftsTotal:a,score:s+a*20,house:e.hostId==="dbs"||e.hostName==="DatBoiSkeet"})}return t.sort((s,a)=>(Number(a.viewers)||0)-(Number(s.viewers)||0)||(Number(a.score)||0)-(Number(s.score)||0)),t[0]||null}function Ks(e,{rising:t=!1}={}){const s=e.house?"House":t?"Rising":"Hot",a=Number(e.viewers)||0,i=Ti(a),n=t&&e.playbacksToday!=null?` · ~${o(String(e.playbacksToday))} playbacks today`:"";return`
    <a class="home-live-card" href="#/live">
      <div class="live-hoodie" aria-hidden="false">
        <span class="live-hoodie-pill">LIVE</span>
        <span class="live-hoodie-viewers" title="${o(i)} watching">${o(i)}</span>
      </div>
      <div class="home-live-top">
        <span class="home-live-dot" aria-hidden="true"></span>
        <strong>@${o(e.hostName)}</strong>
        <span class="chip home-live-chip">${o(s)}</span>
      </div>
      <div class="home-live-title">${o(e.title||"Live now")}</div>
      <div class="home-live-stats muted">
        ${o(i)} watching · ${o(String(e.giftsTotal||0))} gifts
        ${n}
      </div>
      <div class="home-live-score muted">Score ${o(String(e.score||0))} · TEST MODE seed</div>
    </a>`}function fp(e){return e.mediaType==="video"?"Video":e.image||e.mediaType==="image"?"Pic":"Post"}function vp(e){if(!e)return"";const t=Number(e.playsToday)||0,s=t>=1e3?`${(t/1e3).toFixed(t>=1e4?0:1)}k`:String(t),a=e.cover?`<img class="la-thumb" src="${o(e.cover)}" alt="" loading="lazy" />`:'<span class="la-thumb la-thumb-empty" aria-hidden="true">♪</span>',i=e.demo?" · DEMO seed":"";return`
    <li class="la-row la-song">
      <a class="la-main" href="#/music">
        ${a}
        <span class="la-body">
          <strong>${o(e.title||"Track")}</strong>
          <span class="la-preview">${o(e.artist||"DatBoiSkeet")} · ${o(s)} plays today${o(i)}</span>
          <span class="la-stats muted">${o(e.status||"Music")} · ${o(e.day||"today")}</span>
        </span>
      </a>
      <span class="chip la-chip-played">Most played · today</span>
    </li>`}function bp(e){const t=Number(e.viewers)||0,s=Ti(t),a=e.house?"House":"Hot";return`
    <li class="la-row la-live">
      <a class="la-main" href="#/live">
        <span class="la-hoodie" aria-label="Live · ${o(s)} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers">${o(s)}</span>
        </span>
        <span class="la-body">
          <strong>@${o(e.hostName)}</strong>
          <span class="la-preview">${o(e.title||"Live now")}</span>
          <span class="la-stats muted">${o(s)} watching · ${o(String(e.giftsTotal||0))} gifts · score ${o(String(e.score||0))}</span>
        </span>
      </a>
      <span class="chip">${o(a)}</span>
    </li>`}function yp(e){const t=e.postId||e.id,s=fp(e),a=e.image?`<img class="la-thumb" src="${o(e.image)}" alt="" loading="lazy" />`:`<span class="la-thumb la-thumb-empty" aria-hidden="true">${o(((e.username||"?")[0]||"?").toUpperCase())}</span>`,i=e.house?" · house":"";return`
    <li class="la-row la-post">
      <a class="la-main" href="#/posts?focus=${o(t)}">
        ${a}
        <span class="la-body">
          <strong>@${o(e.username||"creator")}</strong>
          <span class="la-preview">${o((e.preview||e.text||"Hot post").slice(0,72))}</span>
          <span class="la-stats muted">♥ ${o(String(e.likes||0))} · 💬 ${o(String(e.comments||0))} · ↗ ${o(String(e.shares||0))} · score ${o(String(e.score||0))}${o(i)}</span>
        </span>
      </a>
      <span class="chip">${o(s)}</span>
    </li>`}function kp(e){const t=e.coverRef&&!String(e.coverRef).startsWith("idb:")?e.coverRef:"";return`
    <li class="la-row la-pic">
      <a class="la-main" href="#/posts">
        ${t?`<img class="la-thumb" src="${o(t)}" alt="" loading="lazy" />`:'<span class="la-thumb la-thumb-empty" aria-hidden="true">📷</span>'}
        <span class="la-body">
          <strong>${o(e.title||"Picture")}</strong>
          <span class="la-preview">${o(e.artist||"DatBoiSkeet")} · from Admin catalog</span>
          <span class="la-stats muted">High-engagement pic · TEST MODE</span>
        </span>
      </a>
      <span class="chip">Pic</span>
    </li>`}function wp(){for(const e of mp){try{sessionStorage.removeItem(e)}catch{}try{localStorage.removeItem(e)}catch{}}try{localStorage.removeItem(Ci)}catch{}}function oo(){wp();try{const e=sessionStorage.getItem(Ci);if(sa.some(t=>t.id===e))return e}catch{}return"toplive"}function Sp(e){try{sessionStorage.setItem(Ci,e)}catch{}}function pn(e){return"$"+Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2})}function $p(e){const t=Math.max(0,e-Date.now()),s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return t<=0?"Ended":`${s}h ${a}m left`}function lo(e){if(!e)return'<p class="muted" style="margin:0">No daily app goal right now.</p>';const t=Math.min(100,Math.round(e.raised/(e.targetAmount||1)*100));return`
    <div class="home-goal-head"><strong class="home-goal-name">${o(e.name)}</strong>
      <span class="chip home-goal-time" id="homeGoalTimeLeft">${$p(e.endsAt)}</span></div>
    <div class="home-goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${t}">
      <div class="home-goal-fill" style="width:${t}%"></div></div>
    <p class="muted home-goal-amounts" style="margin:6px 0 10px">${pn(e.raised)} raised of ${pn(e.targetAmount)} · ${t}%</p>
    <div class="row wrap" style="gap:8px">
      ${[50,100,250].map(s=>`<button type="button" class="btn ghost home-goal-donate" data-goal-id="${o(e.id)}" data-coins="${s}">Donate ${s} coins</button>`).join("")}
      <form class="home-goal-custom-form" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:end">
        <label style="flex:1;min-width:125px">Custom coins
          <input class="home-goal-custom-coins" type="number" inputmode="numeric" min="1" max="1000000" step="1" required placeholder="Enter coins" style="width:100%" />
        </label>
        <button type="submit" class="btn primary">Donate custom</button>
      </form>
    </div>`}function xp(){const e=Bo.map(E=>`
    <a class="preview-card" href="#${E.route}${E.hash?"#"+E.hash:""}">
      <span class="pc-icon" aria-hidden="true">${pp[E.title]||"◆"}</span>
      <strong>${o(E.title)}</strong>
      <span class="muted">${o(E.blurb)}</span>
    </a>`).join(""),t=_t.map(E=>`
    <a class="cover-card" href="#/music">
      <div class="cover-frame">
        <span class="badge-cs">${o(E.status)}</span>
        <img src="${o(E.cover)}" alt="${o(E.title)}" loading="lazy" />
      </div>
      <div class="t">${o(E.title)}</div>
      <div class="sub">${o(E.artist)}</div>
    </a>`).join(""),s=fe.filter(E=>(E.category||"Music Videos")==="Music Videos"),a=s.filter(E=>E.featured),i=a.length?a:s.slice(0,6),n=i[0]||s[0]||fe[0],r=ti[0],l=i.map(E=>`
    <div class="vid">
      <a class="thumb" href="${o(E.youtube)}" target="_blank" rel="noopener" aria-label="Play ${o(E.title)}"><span>▶</span></a>
      <div>
        <strong>${o(E.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">
          <a href="${o(E.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a>
          · <a href="#/videos">Embed on Videos</a>
        </div>
      </div>
    </div>`).join(""),u=i.map((E,De)=>`
    <button type="button" class="mv-pick${De===0?" on":""}" data-embed="${o(E.embed)}" data-title="${o(E.title)}" data-yt="${o(E.youtube)}">
      <span class="mv-pick-play" aria-hidden="true">▶</span>
      <span class="mv-pick-t">${o(E.title)}</span>
    </button>`).join(""),c=r?`<div class="card home-mix" id="home-dbs-mix">
        <h3>DatBoiSkeet Mix</h3>
        <p class="muted" style="margin:0 0 10px">Stream from the original YouTube Mix playlist — not rehosted.</p>
        <div class="hero-video" style="margin:0 0 10px">
          <iframe src="${o(Je(r.embed))}" title="${o(r.title)}" allowfullscreen loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div class="row wrap" style="gap:8px">
          <a class="btn" href="${o(r.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
          <a class="btn ghost" href="#/music#youtube-mixes">Music · Mixes</a>
          <a class="btn ghost" href="#/videos">All videos</a>
        </div>
      </div>`:"",m=St({publishedOnly:!0,types:["picture"]}).map(E=>`
    <div class="cover-card catalog-admin-home" data-id="${o(E.id)}">
      <div class="cover-frame">
        <span class="badge-cs">From Admin</span>
        <img data-idb-src="${o(E.coverRef&&E.coverRef.startsWith("idb:")?E.coverRef:"")}" src="${o(E.coverRef&&!E.coverRef.startsWith("idb:")?E.coverRef:"")}" alt="${o(E.title)}" loading="lazy" />
      </div>
      <div class="t">${o(E.title)}</div>
      <div class="sub">${o(E.artist)}</div>
    </div>`).join(""),f=St({publishedOnly:!0,types:["video"]}).slice(0,3).map(E=>`
    <div class="vid catalog-admin-home" data-id="${o(E.id)}">
      <a class="thumb" href="${o(E.youtube||"#/videos")}" ${E.youtube?'target="_blank" rel="noopener"':""}><span>▶</span></a>
      <div>
        <strong>${o(E.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">${o(E.artist)} · Admin</div>
      </div>
    </div>`).join(""),b=L().live,y=b&&!b.endedAt?`<li class="la-row la-session"><a class="la-main" href="#/live"><span class="la-hoodie" aria-label="Live now"><span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span><span class="live-hoodie-viewers">${o(Ti(b.viewers||0))}</span></span><span class="la-body"><strong>@${o(b.hostName)}</strong><span class="la-preview">${o(b.title||"Live now")}</span><span class="la-stats muted">${o(String(b.viewers||0))} watching · your session</span></span></a><span class="chip">Live</span></li>`:"",v=zr(),w=vp(v),$=hp(3),C=gp(4),k=St({publishedOnly:!0,types:["picture"]}).slice(0,2),I=$.map(bp).join(""),T=C.map(yp).join(""),G=k.map(kp).join(""),D=`${w}${y}${I}${T}${G}
        <li class="la-row la-kicker"><span class="la-main la-kicker-main"><span class="la-body"><strong>Ladies Only</strong><span class="la-preview">Art live on Music · playback when it drops</span></span></span><span class="chip">Music</span></li>
        <li class="la-row la-kicker"><a class="la-main" href="#/restream"><span class="la-body"><strong>PIKK Restream</strong><span class="la-preview">Stream to YouTube, TikTok, Twitch &amp; more — free inside PIKK</span></span></a><span class="chip">Restream</span></li>${!w&&!I&&!T&&!G&&!y?'<li class="la-row"><span class="la-main la-kicker-main"><span class="la-body"><span class="la-preview muted">No hot activity yet — engage on Posts / go Live to spike the feed.</span></span></span><span class="chip">TEST</span></li>':""}`,O=oo(),z=sa.map(E=>`
    <button type="button" class="home-stage-tab${E.id===O?" on":""}" role="tab"
      aria-selected="${E.id===O?"true":"false"}" data-stage="${E.id}" id="stage-tab-${E.id}">
      ${o(E.label)}
    </button>`).join(""),F=Wt().slice(0,5),M=Nd().slice(0,5),P=F.map(E=>Ks(E)).join("")||'<p class="muted">No hot lives yet — seed from Live / Hot Feed.</p>',q=M.map(E=>Ks(E,{rising:!0})).join("")||'<p class="muted">No rising streamers yet.</p>',U=_t.map(E=>`
    <a class="home-song-card" href="#/music">
      <img src="${o(E.cover)}" alt="" loading="lazy" />
      <div>
        <strong>${o(E.title)}</strong>
        <div class="muted" style="font-size:12px">${o(E.artist)} · ${o(E.status)}</div>
        <span class="chip" style="margin-top:6px">Enhancement · Coming Soon</span>
      </div>
    </a>`).join(""),Y=ro(),K=Y?Ks(Y):'<p class="muted">No live streams right now — go Live or check Hot Feed.</p>',H=`
    <div class="home-stage-panel${O==="toplive"?" on":""}" data-panel="toplive" role="tabpanel" id="homeTopLivePanel" ${O==="toplive"?"":"hidden"}>
      <p class="muted home-stage-lead">Top live · highest viewers right now. Red LIVE hoodie on the card · updates as rankings change.</p>
      <div class="home-live-grid" id="homeTopLiveGrid">${K}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,Se=`
    <div class="home-stage-panel${O==="videos"?" on":""}" data-panel="videos" role="tabpanel" ${O==="videos"?"":"hidden"}>
      <div class="hero-video" id="homeFeaturedVideo">
        <iframe
          id="homeFeaturedIframe"
          src="${o(Je(n.embed))}"
          title="${o(n.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"></iframe>
      </div>
      <div class="hero-caption">
        <strong id="homeFeaturedTitle">${o(n.title)}</strong>
        <a href="#/videos">All videos →</a>
      </div>
      <div class="mv-carousel" role="tablist" aria-label="Official music videos">${u}</div>
    </div>`,Ee=`
    <div class="home-stage-panel${O==="rising"?" on":""}" data-panel="rising" role="tabpanel" ${O==="rising"?"":"hidden"}>
      <p class="muted home-stage-lead">Rising streamers · mid-tier creators from §38 Hot Feed signals (non-house). TEST MODE seeds.</p>
      <div class="home-live-grid">${q}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,Ve=`
    <div class="home-stage-panel${O==="hot"?" on":""}" data-panel="hot" role="tabpanel" ${O==="hot"?"":"hidden"}>
      <p class="muted home-stage-lead">Hot lives · ranked by viewers + gifts score (house OK). Strong playbacks / spikes from earlier today count.</p>
      <div class="home-live-grid">${P}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,ze=`
    <div class="home-stage-panel${O==="songs"?" on":""}" data-panel="songs" role="tabpanel" ${O==="songs"?"":"hidden"}>
      <p class="muted home-stage-lead">Enhancements &amp; songs · Coming Soon covers + featured tracks. Upload &amp; sell on Music when Commerce lands.</p>
      <div class="home-song-grid">${U}
        <a class="home-song-card home-song-promo" href="#/pricing?focus=sell">
          <div class="home-song-promo-icon" aria-hidden="true">♪</div>
          <div>
            <strong>Sell your music on PIKK</strong>
            <div class="muted" style="font-size:12px">Artists &amp; producers · creator-friendly · DEMO</div>
          </div>
        </a>
      </div>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <a class="btn ghost" href="#/music">Music</a>
        <a class="btn ghost" href="#/pricing?focus=sell">Start selling</a>
      </div>
    </div>`,dt=`
    <div class="home-stage card" id="homeFeaturedStage" data-active="${o(O)}">
      <div class="home-stage-head">
        <div>
          <p class="kicker" style="margin:0">Featured stage</p>
          <h2 class="home-stage-title">Top live · Videos · Rising · Hot · Songs</h2>
        </div>
        <span class="chip chip-audit">TEST MODE · auto-cycle</span>
      </div>
      <div class="home-stage-tabs" role="tablist" aria-label="Featured stage">${z}</div>
      <div class="home-stage-panels">
        ${H}
        ${Se}
        ${Ee}
        ${Ve}
        ${ze}
      </div>
    </div>`,pt=`
    <div class="card bw-preview" id="home-blockwars-preview">
      <div class="bw-preview-head">
        <div>
          <p class="kicker" style="margin:0">Games · Coming soon</p>
          <h3 class="bw-preview-title">Block Wars</h3>
        </div>
        <span class="chip bw-preview-chip">Preview · not live</span>
      </div>
      <p class="muted bw-preview-lead">NY · LA · Chicago fighters — teaser only. Gameplay ships later.</p>
      <div class="bw-preview-frame">
        <video
          id="bwPreviewVideo"
          class="bw-preview-video"
          poster="/blockwars-preview/frames/01.jpg"
          src="/blockwars-preview/blockwars-fighters-preview.mp4"
          playsinline
          webkit-playsinline
          preload="metadata"
          controls
          controlslist="nodownload noplaybackrate"
          aria-label="Block Wars fighter preview"></video>
        <button type="button" class="bw-preview-play" id="bwPreviewPlay" aria-label="Play Block Wars preview">
          <span class="bw-preview-play-icon" aria-hidden="true">▶</span>
          <span class="bw-preview-play-label">Watch preview</span>
        </button>
      </div>
      <div class="bw-preview-foot muted">~12s fighter slideshow · Coming soon on PIKK</div>
    </div>`,ut=`
    <div class="card home-sell-promo" id="home-creator-sell-promo">
      <p class="kicker">Creators · sell on PIKK</p>
      <div class="home-sell-title-row">
        <h3 style="margin:0">Upload music, videos, beats &amp; list merch</h3>
        <span class="badge-cs badge-cs-inline" id="home-sell-coming-soon">Coming Soon</span>
      </div>
      <p style="margin:0 0 8px">Artists and producers can sell <strong>music, videos, beats,</strong> and merch on PIKK. We keep a fair, creator-friendly cut — and merch runs on <strong>your</strong> payments (PIKK is not the merchant of record).</p>
      <p class="muted" style="margin:0 0 12px;font-size:12px">Rules, fees, and the apply form live on Pricing — tap below. No fee numbers on Home.</p>
      <div class="row wrap" style="gap:8px;margin-top:4px">
        <a class="btn primary" href="#/pricing?focus=sell">Start selling · rules &amp; fees</a>
        <a class="btn ghost" href="#/music">Music</a>
        <a class="btn ghost" href="#/videos">Videos</a>
        <a class="btn ghost" href="#/music">Beats</a>
        <a class="btn ghost" href="#/merch">Merch</a>
      </div>
      <p class="chip" style="margin-top:10px">TEST MODE · no payment processing</p>
    </div>`,mt=`
    <div class="card home-sell-promo home-app-goal" id="home-app-goal">
      <p class="kicker">Daily app goal · 24h</p>
      <div id="homeAppGoalBody">${lo(Fa())}</div>
      <p class="chip" style="margin-top:10px">TEST MODE · no real payments</p>
    </div>`,te=i.slice(0,6).map((E,De)=>{const Yt=new URL(E.youtube).searchParams.get("v")||"",S=Yt?`https://i.ytimg.com/vi/${encodeURIComponent(Yt)}/hqdefault.jpg`:"";return`<a class="pikk-home-media-card ${De<2?"is-featured":""}" href="${o(E.youtube)}" target="_blank" rel="noopener noreferrer"
       aria-label="Watch ${o(E.title)} on YouTube">
       ${S?`<img src="${o(S)}" alt="" loading="${De<2?"eager":"lazy"}" decoding="async" referrerpolicy="no-referrer"/>`:'<span class="pikk-home-media-fallback" aria-hidden="true">♫</span>'}
       <span class="pikk-home-media-shadow"></span>
       <span class="pikk-home-media-badge">▶ OFFICIAL VIDEO</span>
       <span class="pikk-home-media-title">${o(E.title)}</span>
     </a>`}).join(""),Ds=`
    <section class="pikk-home-discover" aria-label="PIKK quick discovery">
      <div class="pikk-home-discover-heading">
        <div><p class="kicker">Your world on PIKK</p><h2>Discover what’s happening</h2></div>
        <a href="#/explore" class="pikk-home-explore-cta" aria-label="Open Explore search">⌕ Explore all</a>
      </div>
      <nav class="pikk-home-discover-links" aria-label="Explore PIKK categories">
        <a href="#/live"><span aria-hidden="true">●</span> Live</a>
        <a href="#/videos"><span aria-hidden="true">▶</span> Videos</a>
        <a href="#/music"><span aria-hidden="true">♫</span> Music</a>
        <a href="#/posts"><span aria-hidden="true">▧</span> Posts</a>
        <a href="#/community"><span aria-hidden="true">♧</span> Community</a>
        <a href="#/games"><span aria-hidden="true">♜</span> Arcade</a>
      </nav>
    </section>

    ${`
    <section class="pikk-home-visual" id="pikkHomeVisual" aria-labelledby="pikkHomeVisualTitle">
      <div class="pikk-home-visual-top">
        <div><p class="kicker">PIKK DISCOVER</p><h2 id="pikkHomeVisualTitle">Your music. Your world.</h2></div>
        <a href="#/explore" class="pikk-home-visual-more">Explore ↗</a>
      </div>
      <nav class="pikk-home-circle-strip" aria-label="Browse PIKK features">
        <a class="pikk-home-circle" href="#/posts?compose=1" aria-label="Create a post on PIKK">
          <span class="pikk-home-circle-ring pikk-home-circle-symbol" aria-hidden="true">＋</span><span>Create</span>
        </a>
        ${_t.slice(0,4).map(E=>`
    <a class="pikk-home-circle" href="#/music" aria-label="Explore music: ${o(E.title)}">
      <span class="pikk-home-circle-ring"><img src="${o(E.cover)}" alt="" loading="lazy" decoding="async"/></span>
      <span>${o(E.title)}</span>
    </a>`).join("")}
        <a class="pikk-home-circle" href="#/live" aria-label="Explore Live">
          <span class="pikk-home-circle-ring pikk-home-circle-symbol" aria-hidden="true">●</span><span>Live</span>
        </a>
      </nav>
      <nav class="pikk-home-filterbar" aria-label="Discover categories">
        <a class="is-current" href="#/explore">All</a>
        <a href="#/videos">Videos</a>
        <a href="#/music">Music</a>
        <a href="#/posts">Photos</a>
        <a href="#/live">Live</a>
        <a href="#/shop">Shop</a>
        <a href="#/dating">Dating</a>
      </nav>
      <div class="pikk-home-media-grid" aria-label="Official DatBoiSkeet video selections">
        ${te}
      </div>
      <div class="pikk-home-media-footer">
        <p class="muted">Real official releases · Video thumbnails from YouTube · No fabricated views or live counts</p>
        <a href="#/videos">View all videos →</a>
      </div>
    </section>`}

    ${dt}

    ${no("home")}

    ${pt}

    <section class="home-arcade card" id="homeArcade" aria-label="PIKK Games featured slideshow">
      <div class="home-arcade-top">
        <div><p class="kicker">Discover the arcade</p><h2>15 GAMES. ONE PIKK.</h2></div>
        <a href="#/games" class="btn ghost">All games →</a>
      </div>
      <div class="home-arcade-stage" aria-live="off">
        ${us.map((E,De)=>`<article class="home-arcade-slide pikk-game-${o(E.theme)}" data-game-slide="${De}" ${De?"hidden":""}>
          <div class="home-arcade-image">${E.artwork?`<img src="${o(zs(E))}" alt="" loading="lazy" decoding="async" />`:`<span class="home-arcade-symbol" aria-hidden="true">${E.icon}</span>`}</div>
          <div class="home-arcade-info">
            <span class="chip">GAME ${De+1} OF 15 · COMING SOON</span>
            <h3>${o(E.name)}</h3>
            <p>${o(E.description)}</p>
            <small>${o(E.players)} ${E.players==="1"?"Player":"Players"} · Preview only</small>
            <a class="btn primary" href="${o(E.href||"#/games")}">View in Arcade</a>
          </div>
        </article>`).join("")}
      </div>
      <div class="home-arcade-controls">
        <button type="button" class="btn ghost" data-arcade-prev aria-label="Previous game">‹</button>
        <span id="homeArcadePosition" aria-live="polite">1 / 15</span>
        <button type="button" class="btn ghost" data-arcade-next aria-label="Next game">›</button>
      </div>
      <p class="muted" style="font-size:11px;margin:8px 0 0">Concept previews · Games are not playable yet</p>
    </section>


    ${mt}

    ${ut}

    ${c}

    <p class="kicker">Coming Soon</p>
    <h2 style="margin:0 0 8px;font-size:15px;text-transform:uppercase;letter-spacing:.04em">Upcoming Releases</h2>
    <div class="cover-row" style="margin-bottom:18px">${t}${m}</div>

    <p class="kicker">DatBoiSkeet Network</p>
    <h2 style="margin:0 0 8px;font-size:15px;text-transform:uppercase;letter-spacing:.04em">Explore PIKK</h2>
    <div class="section-swipe" style="margin-bottom:18px">${e}</div>

    <div class="card live-activity" id="home-live-activity">
      <div class="live-activity-head">
        <h3><span class="dot" aria-hidden="true"></span> Live activity</h3>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted live-activity-lead">Most played today · hot lives · high-engagement posts from creators &amp; community · house updates.</p>
      <ul class="list-plain live-activity-list">
        ${D}
      </ul>
      <div class="row wrap live-activity-links">
        <a class="btn ghost" href="#/music">Music</a>
        <a class="btn ghost" href="#/live">Live</a>
        <a class="btn ghost" href="#/posts">Posts · Hot</a>
      </div>
    </div>

    <div class="card video-list">
      <h3>Official DatBoiSkeet MVs</h3>
      ${l}${f}
      <a class="btn ghost block" href="#/videos" style="margin-top:10px">All videos</a>
    </div>
  `;return _("Home",Ds,{lead:"Featured stage · Top live · Block Wars preview · Live activity (hot lives · high-engagement posts from creators &amp; community · house updates) · Mix · Coming Soon · creator sell DEMO."})}function Ep(e){var x,Q,D,O,z,F;const t=e.querySelector("#homeArcade");if(t){const M=[...t.querySelectorAll("[data-game-slide]")],P=t.querySelector("#homeArcadePosition");let q=0,U=null;const Y=(Q=(x=window.matchMedia)==null?void 0:x.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:Q.matches,K=Ee=>{q=(Ee+M.length)%M.length,M.forEach((Ve,ze)=>{Ve.hidden=ze!==q}),P&&(P.textContent=`${q+1} / ${M.length}`)},H=()=>{U!==null&&clearInterval(U),U=null};(D=t.querySelector("[data-arcade-prev]"))==null||D.addEventListener("click",()=>{H(),K(q-1)}),(O=t.querySelector("[data-arcade-next]"))==null||O.addEventListener("click",()=>{H(),K(q+1)}),Y||(U=setInterval(()=>{if(!document.body.contains(t)){H();return}document.visibilityState==="visible"&&K(q+1)},6500));const Se=new MutationObserver(()=>{document.body.contains(t)||(H(),Se.disconnect())});Se.observe(document.body,{childList:!0,subtree:!0})}const s=e.querySelector("#homeAppGoalBody");if(s){const M=()=>{document.body.contains(s)?s.innerHTML=lo(Fa()):(clearInterval(q),document.removeEventListener("visibilitychange",P))},P=()=>{document.visibilityState==="visible"&&M()},q=setInterval(M,3e4);document.addEventListener("visibilitychange",P),s.addEventListener("submit",U=>{var Se,Ee;if(!U.target.matches(".home-goal-custom-form"))return;U.preventDefault();const Y=Number((Se=U.target.querySelector(".home-goal-custom-coins"))==null?void 0:Se.value);if(!Number.isSafeInteger(Y)||Y<1||Y>1e6)return h("Enter 1–1,000,000 whole coins");const K=(Ee=Fa())==null?void 0:Ee.id,H=Ys(K,Y);h(H!=null&&H.ok?"Custom donation sent · TEST MODE":(H==null?void 0:H.error)==="insufficient"?"Not enough demo coins":(H==null?void 0:H.error)==="signin"?"Sign in first":"Donation unavailable · TEST MODE"),M()}),s.addEventListener("click",U=>{const Y=U.target.closest(".home-goal-donate");if(!Y)return;const K=Ys(Y.dataset.goalId,Number(Y.dataset.coins));h(K&&K.ok?`TEST MODE · ${Y.dataset.coins} coins donated (no real payment)`:"TEST MODE · donate unavailable"),M()})}const a=e.querySelector(".page-head");if(a){a.querySelectorAll(".badge-phase, a.badge-phase, .live-hoodie-pill, .live-hoodie").forEach(P=>{P.remove()}),a.querySelectorAll("a, span, button").forEach(P=>{const q=(P.textContent||"").replace(/\s+/g," ").trim();(/^●?\s*LIVE$/i.test(q)||q==="LIVE")&&P.remove()});const M=a.querySelector("h1");M&&[...M.children].forEach(P=>{const q=(P.textContent||"").replace(/\s+/g," ").trim();(/LIVE/i.test(q)||P.classList.contains("badge-phase")||P.classList.contains("live-hoodie-pill"))&&P.remove()})}e.querySelectorAll("[data-idb-src]").forEach(async M=>{const P=M.getAttribute("data-idb-src");if(!P)return;const q=await Sa(P);q&&(M.tagName==="IMG"||M.tagName==="VIDEO"||M.tagName==="AUDIO")&&(M.src=q)});const i=e.querySelector("#homeFeaturedIframe"),n=e.querySelector("#homeFeaturedTitle");e.querySelectorAll(".mv-pick").forEach(M=>{M.addEventListener("click",()=>{e.querySelectorAll(".mv-pick").forEach(q=>q.classList.remove("on")),M.classList.add("on");const P=M.dataset.embed||"";i&&P&&(Jd(i),i.removeAttribute("data-dbs-yt-bound"),i.src=P+(P.includes("?")?"&":"?")+"rel=0",i.title=M.dataset.title||"",to(i)),n&&(n.textContent=M.dataset.title||"")})}),wa(e);const r=e.querySelector("#bwPreviewVideo"),l=e.querySelector("#bwPreviewPlay");if(r){const M=()=>{if(!l)return;const P=r.paused||r.ended;l.hidden=!P,l.setAttribute("aria-hidden",P?"false":"true")};l==null||l.addEventListener("click",P=>{P.preventDefault(),r.play().catch(()=>{})}),r.addEventListener("play",()=>{Bt(),M()}),r.addEventListener("pause",()=>{Qe(),M()}),r.addEventListener("ended",()=>{Qe(),M()}),r.addEventListener("pointerdown",()=>{r.paused||Bt()}),M()}const u=2e4;function c(){const M=e.querySelector("#homeTopLiveGrid");if(!M||!document.body.contains(M))return!1;const P=ro();return M.innerHTML=P?Ks(P):'<p class="muted">No live streams right now — go Live or check Hot Feed.</p>',!0}let p=setInterval(()=>{c()||(clearInterval(p),p=null)},u);const m=()=>{document.visibilityState==="visible"&&c()};document.addEventListener("visibilitychange",m),window.addEventListener("focus",c);const g=e.querySelector("#homeFeaturedStage");if(!g){const M=new MutationObserver(()=>{document.body.contains(e)||(p&&clearInterval(p),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",c),M.disconnect())});M.observe(document.body,{childList:!0,subtree:!0});return}const f=[...e.querySelectorAll(".home-stage-tab")],b=[...e.querySelectorAll(".home-stage-panel")];let y=!1,v=null;const w=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.classList.contains("reduce-motion")||((F=(z=document.body)==null?void 0:z.classList)==null?void 0:F.contains("reduce-motion"));function $(M){sa.some(P=>P.id===M)||(M="toplive"),g.dataset.active=M,Sp(M),f.forEach(P=>{const q=P.dataset.stage===M;P.classList.toggle("on",q),P.setAttribute("aria-selected",q?"true":"false")}),b.forEach(P=>{const q=P.dataset.panel===M;P.classList.toggle("on",q),q?P.removeAttribute("hidden"):P.setAttribute("hidden","")})}function C(){const M=sa.map(U=>U.id),P=g.dataset.active||"toplive",q=M.indexOf(P);$(M[(q+1)%M.length])}function k(){I(),!(y||w)&&(v=setInterval(C,up))}function I(){v&&(clearInterval(v),v=null)}f.forEach(M=>{M.addEventListener("click",()=>{y=!0,I(),$(M.dataset.stage)})});const T=oo()||"toplive";$(T),w||setTimeout(()=>{!document.body.contains(g)||y||k()},1e4);const G=new MutationObserver(()=>{document.body.contains(g)||(I(),p&&(clearInterval(p),p=null),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",c),G.disconnect())});G.observe(document.body,{childList:!0,subtree:!0})}const Ap="a93dbc22710d2e2b846915c725c63b6883ed3fa8",Cp=Object.freeze([{title:"Profile: True Public View",detail:"Public view now shows your actual read-only profile instead of reopening the edit screen. Your original posts and Edit profile shortcut remain available.",route:"#/profile",pr:163,kind:"PROFILE · TEST MODE"},{title:"Explore: Correct Creator Links",detail:"People search results open the matched creator’s profile instead of redirecting to your own.",route:"#/explore",pr:162,kind:"NAVIGATION · TEST MODE"},{title:"Merch: Full-Size Photo Preview",detail:"Open original product images full size with a visible Close control, Escape key, keyboard focus containment and focus return.",route:"#/merch",pr:161,kind:"ACCESSIBILITY · PREVIEW"},{title:"Messages: Clear Filters",detail:"Clear search and Unread only together to restore the full browser-local inbox and return focus to search.",route:"#/messages",pr:160,kind:"MESSAGES · TEST MODE"},{title:"Shop: Reset Sort and Filters",detail:"Reset view now restores Featured order along with search and category filters, keeping the original merchandise catalog.",route:"#/shop",pr:159,kind:"SHOP · TEST MODE"}]);function Tp(){const e=Ap.slice(0,8),t=Cp.map((s,a)=>`
    <article class="pikk-update-card">
      <span class="pikk-update-number" aria-hidden="true">${String(a+1).padStart(2,"0")}</span>
      <div class="pikk-update-card-copy">
        <span class="pikk-update-kind">${o(s.kind)}</span>
        <h3>${o(s.title)}</h3>
        <p>${o(s.detail)}</p>
        <div class="pikk-update-links">
          <a class="btn primary" href="${o(s.route)}">See in PIKK</a>
          <a class="pikk-update-source" href="https://github.com/scrubdup/pikk-app/pull/${s.pr}" target="_blank" rel="noopener noreferrer">Code update #${s.pr}</a>
        </div>
      </div>
    </article>`).join("");return _("PIKK Updates",`
    <section class="pikk-updates-hero" aria-label="PIKK app release information">
      <div>
        <p class="kicker">PIKK · WHAT'S NEW</p>
        <h2>See what changed. <span>Know what loaded.</span></h2>
        <p>Five recent user-visible improvements are below. Open each updated section and see exactly what shipped. Backend services marked TEST MODE are not production-ready.</p>
        <div class="pikk-updates-build">
          <span>Version loaded on this device</span>
          <strong id="pikkLoadedBuild" data-build="${o(e)}">${o(e)}</strong>
        </div>
        <div class="pikk-updates-actions">
          <button class="btn primary" type="button" id="pikkUpdatesRefresh">Check for latest version</button>
          <a class="btn ghost" href="#/home">Return home</a>
        </div>
      </div>
      <div class="pikk-updates-hero-mark"><img src="${o(It("brand/pikk-official-approved.jpg"))}" alt="PIKK official chrome logo" loading="eager"></div>
    </section>
    <section class="pikk-updates-list" aria-label="Recent published updates">
      <h2>Latest verified improvements</h2>
      ${t}
    </section>
    <p class="pikk-updates-note">A refresh reloads this browser's app bundle; it does not clear your account or local demo data. If a change still does not appear, compare the version above with the published source commit.</p>
  `,{lead:"A clear record of recent PIKK improvements."})}function Dp(e){var t;(t=e.querySelector("#pikkUpdatesRefresh"))==null||t.addEventListener("click",()=>{window.location.assign(qn(window.location.href))})}const Mp=20*60,Lp=250*1024*1024;function Ip({duration:e,size:t,type:s}){return s!=null&&s.startsWith("video/")?!Number.isFinite(t)||t<=0||t>Lp?"Video must be under 250 MB for this device-local preview.":!Number.isFinite(e)||e<=0?"Unable to read video duration. Try another file.":e>Mp?"PIKKUP Phase 1 videos must be 20 minutes or shorter.":"":"Select a supported video file."}function Pp(e){return new Promise((t,s)=>{const a=URL.createObjectURL(e),i=document.createElement("video");let n=!1;const r=setTimeout(()=>l(new Error("Video metadata timed out")),12e3);function l(u,c){n||(n=!0,clearTimeout(r),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(a),u?s(u):t(c))}i.preload="metadata",i.onloadedmetadata=()=>l(null,i.duration),i.onerror=()=>l(new Error("Cannot read this video file")),i.src=a})}const co=[{id:"song",label:"Song",acceptCover:"image/*",acceptMedia:"audio/*,.mp3,.m4a,.wav,.aac"},{id:"album",label:"Album",acceptCover:"image/*",acceptMedia:"audio/*,.mp3,.m4a,.wav,.aac"},{id:"video",label:"Video",acceptCover:"image/*",acceptMedia:"video/*,.mp4,.mov,.webm"},{id:"picture",label:"Picture",acceptCover:"image/*",acceptMedia:"image/*"}];function _p(e){return _("Admin",`<div class="card admin-gate">
      <h3>Admin gate · TEST MODE</h3>
      <p class="muted">Demo-only. No real auth. Enable one of:</p>
      <ol class="admin-gate-steps">
        <li>Sign in on <a href="#/profile">Profile</a>, then toggle <strong>Demo Admin</strong>.</li>
        <li>While signed in, open <code>#/admin?admin=1</code> (sets <code>user.role='admin'</code> in <code>dbs_v1</code>).</li>
      </ol>
      <p>Signed in as: <strong>${o((e==null?void 0:e.username)||"guest")}</strong>
        ${e?"":'· <a class="btn" href="#/profile">Sign in</a>'}</p>
      ${e?'<a class="btn primary" href="#/admin?admin=1">Enable Admin · TEST MODE</a>':""}
    </div>
    <div class="card muted">Full team roles, revenue, and moderation ship later phases.</div>`,{lead:"Gated demo dashboard."})}function Op(){return`
  <section class="card admin-add" id="adminAdd">
    <h3>Add Content</h3>
    <p class="muted admin-add-note">PIKKUP preview: video uploads must be 20 minutes or shorter and at most 250 MB. Device-local only, not public hosting. TEST MODE · no backend. Metadata → <code>localStorage dbs_v1.catalog</code>. Files → IndexedDB <code>dbs_media_v1</code>. Works on iPhone Safari &amp; desktop. Large files stay on this device only.</p>

    <div class="admin-type-tabs" role="tablist" aria-label="Content type">${co.map((t,s)=>`<button type="button" class="admin-type-tab${s===0?" on":""}" data-type="${o(t.id)}" role="tab">${o(t.label)}</button>`).join("")}</div>

    <form class="admin-add-form" id="adminAddForm" novalidate>
      <input type="hidden" name="type" id="adminType" value="song" />

      <div class="admin-field">
        <label for="adminTitle">Title *</label>
        <input id="adminTitle" name="title" required maxlength="120" placeholder="Track or release title" autocomplete="off" />
      </div>

      <div class="admin-field">
        <label for="adminArtist">Artist / credit</label>
        <input id="adminArtist" name="artist" maxlength="80" value="DatBoiSkeet" autocomplete="off" />
      </div>

      <div class="admin-field admin-field-cover">
        <label>Cover / image</label>
        <div class="admin-dropzone" data-zone="cover" tabindex="0">
          <input type="file" id="adminCoverFile" class="admin-file-input" accept="image/*" capture="environment" />
          <p class="admin-dropzone-label"><strong>Tap to upload cover</strong><span class="muted"> · photo library or camera (iPhone) · or paste URL below</span></p>
          <p class="admin-file-name muted" data-for="cover"></p>
        </div>
        <input id="adminCoverUrl" name="coverUrl" type="url" inputmode="url" placeholder="https://… or /music/…" class="admin-url-input" />
      </div>

      <div class="admin-field admin-field-media">
        <label id="adminMediaLabel">Media file (audio / video / image)</label>
        <div class="admin-dropzone" data-zone="media" tabindex="0">
          <input type="file" id="adminMediaFile" class="admin-file-input" accept="audio/*,video/*,image/*,.mp3,.m4a,.wav,.mp4,.mov,.webm" />
          <p class="admin-dropzone-label"><strong>Tap to upload media</strong><span class="muted"> · Files app / Photos on iPhone · desktop drag-drop</span></p>
          <p class="admin-file-name muted" data-for="media"></p>
        </div>
        <input id="adminMediaUrl" name="mediaUrl" type="url" inputmode="url" placeholder="https://… media URL (optional)" class="admin-url-input" />
      </div>

      <div class="admin-field admin-field-youtube">
        <label for="adminYoutube">YouTube link (optional)</label>
        <input id="adminYoutube" name="youtube" type="url" inputmode="url" placeholder="https://www.youtube.com/watch?v=…" />
      </div>

      <div class="admin-field admin-field-streaming" id="adminStreamingFields">
        <label>Streaming links (optional · song/album · official URLs only)</label>
        <p class="muted" style="margin:0 0 8px;font-size:12px">Leave blank if unknown — never invent. Shown on Music · Stream Everywhere when published.</p>
        <div class="admin-stream-grid">
          <input id="adminSpotify" name="spotify" type="url" inputmode="url" placeholder="Spotify https://open.spotify.com/…" />
          <input id="adminApple" name="apple" type="url" inputmode="url" placeholder="Apple Music https://music.apple.com/…" />
          <input id="adminYtm" name="youtubeMusic" type="url" inputmode="url" placeholder="YouTube Music https://music.youtube.com/…" />
          <input id="adminTidal" name="tidal" type="url" inputmode="url" placeholder="Tidal (optional)" />
          <input id="adminAmazon" name="amazon" type="url" inputmode="url" placeholder="Amazon Music (optional)" />
        </div>
      </div>

      <div class="admin-field admin-publish">
        <label class="admin-publish-toggle">
          <input type="checkbox" id="adminPublished" name="published" checked />
          <span>Publish now</span>
        </label>
        <p class="muted">Unpublished items stay admin-only. Published songs/albums appear on Music; videos on Videos &amp; Home; pictures on Home.</p>
      </div>

      <div class="admin-add-actions">
        <button type="submit" class="btn primary" id="adminSave">Save to catalog</button>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted admin-add-status" id="adminAddStatus" aria-live="polite"></p>
    </form>
  </section>`}function qp(e){if(!e.length)return'<div class="card admin-catalog"><h3>Catalog</h3><p class="muted">No admin-added items yet.</p></div>';const t=e.map(s=>{const a=s.coverRef&&!s.coverRef.startsWith("idb:")?o(s.coverRef):"";return`<div class="admin-catalog-row" data-id="${o(s.id)}">
        <div class="admin-catalog-thumb">
          ${a?`<img src="${a}" alt="" />`:`<img data-idb-src="${o(s.coverRef||"")}" alt="" class="idb-pending" />`}
        </div>
        <div class="admin-catalog-meta">
          <strong>${o(s.title)}</strong>
          <span class="muted">${o(s.type)} · ${o(s.artist)}</span>
          <span class="chip">${s.published?"Published":"Draft"}</span>
          ${s.streamingLinks&&Object.keys(s.streamingLinks).length?'<span class="chip">Streaming links</span>':""}
        </div>
        <div class="admin-catalog-actions">
          <button type="button" class="btn ghost admin-cat-pub" data-id="${o(s.id)}" data-on="${s.published?"0":"1"}">${s.published?"Unpublish":"Publish"}</button>
          <button type="button" class="btn ghost admin-cat-del" data-id="${o(s.id)}">Delete</button>
        </div>
      </div>`}).join("");return`<div class="card admin-catalog"><h3>Catalog (${e.length})</h3>
    <p class="muted">Drafts are admin-only. Publish to show on Music / Videos / Home.</p>
    <div class="admin-catalog-list">${t}</div></div>`}function qe(e){return"$"+(Number(e)||0).toFixed(2)}function Np(e){var i,n,r;const t=((i=e.openMic)==null?void 0:i.pending)||[],s=((n=e.openMic)==null?void 0:n.byStatus)||{},a=t.length?t.map(l=>`<div class="row wrap admin-om-row" data-om-id="${o(l.id)}">
            <span class="spacer"><strong>${o(l.username)}</strong> · ${o(l.talent)} · ${o(l.trackTitle)}
              <span class="chip">pending</span>
              ${l.rightsCertified?'<span class="chip">rights</span>':'<span class="chip">no rights</span>'}
            </span>
            <button type="button" class="btn primary admin-om" data-id="${o(l.id)}" data-status="approved">Approve</button>
            <button type="button" class="btn ghost admin-om" data-id="${o(l.id)}" data-status="rejected">Reject</button>
          </div>`).join(""):'<p class="muted">No pending applications. Seeded demos may already be approved/rejected — open <a href="#/openmic">Open Mic</a>.</p>';return`<section class="card admin-openmic" id="adminOpenMic">
    <h3>Open Mic queue</h3>
    <p class="muted">TEST MODE · reuse store Approve/Reject. Pending ${s.pending||0} · approved ${s.approved||0} · rejected ${s.rejected||0} · total ${((r=e.openMic)==null?void 0:r.total)||0}</p>
    ${a}
    <p class="admin-panel-links"><a class="btn" href="#/openmic">Full Open Mic page</a></p>
  </section>`}function Bp(e){const t=e.fanClubs||{total:0,recent:[]},s=t.recent.length?`<ul class="list-plain">${t.recent.map(a=>`<li><span><strong>${o(a.name)}</strong> · ${o(a.privacy)}${a.official?" · official":""}</span><span class="muted">${a.memberCount} members</span></li>`).join("")}</ul>`:'<p class="muted">No clubs yet.</p>';return`<section class="card admin-fanclubs" id="adminFanClubs">
    <h3>Fan Clubs glance</h3>
    <div class="stats">
      <div><strong>${t.total}</strong><span>Clubs</span></div>
    </div>
    ${s}
    <p class="admin-panel-links"><a class="btn" href="#/fanclubs">Open Fan Clubs</a></p>
  </section>`}function Rp(e){const t=e.loyalty||{},s=(t.badges||[]).slice(0,6).map(a=>`<span class="chip">${o(a)}</span>`).join(" ")||'<span class="muted">None unlocked</span>';return`<section class="card admin-loyalty" id="adminLoyalty">
    <h3>Loyalty glance</h3>
    <p class="muted">${o(t.note||"Device-local loyalty")}</p>
    <div class="stats">
      <div><strong>${t.points||0}</strong><span>Points</span></div>
      <div><strong>${t.badgeCount||0}</strong><span>Badges</span></div>
      <div><strong>${t.historyCount||0}</strong><span>Actions</span></div>
    </div>
    <p class="admin-badge-row">${s}</p>
    <p class="admin-panel-links"><a class="btn" href="#/loyalty">Open Loyalty Club</a></p>
  </section>`}function jp(){return`<section class="card admin-quicklinks" id="adminQuickLinks">
    <h3>Quick links</h3>
    <p class="muted">Deep-links only · page ownership stays with Live Social / Commerce / Build.</p>
    ${[{owner:"Live Social",links:[["#/live","Live"],["#/messages","Messages"],["#/giftbattles","Gift battles"],["#/multiguest","Multi-guest"],["#/spotlight","Spotlight"],["#/restream","Restream"],["#/connect","Connect"]]},{owner:"Commerce",links:[["#/marketplace","Marketplace"],["#/wallet","Wallet"],["#/earnings","Earnings"],["#/missions","Missions"],["#/share","Share & Earn"],["#/refer","Refer & Earn"]]},{owner:"Build",links:[["#/explore","Explore"],["#/notifications","Notifications"],["#/fanclubs","Fan Clubs"],["#/loyalty","Loyalty"],["#/openmic","Open Mic"]]}].map(s=>{const a=s.links.map(([i,n])=>`<a class="btn ghost admin-qlink" href="${i}">${o(n)}</a>`).join("");return`<div class="admin-ql-group"><span class="chip">${o(s.owner)}</span><div class="admin-ql-row">${a}</div></div>`}).join("")}
  </section>`}function Fp(e){const t=e.revenue||{},s=(t.byCategory||[]).map(a=>`<li><span>${o(a.label||a.category)} ×${a.count}</span><span class="muted">gross ${qe(a.gross)} · creator ${qe(a.creatorShare)} · PIKK ${qe(a.dbsShare)}</span></li>`).join("");return`<section class="card admin-revenue" id="adminRevenue">
    <h3>Revenue / analytics shell</h3>
    <div class="row wrap" style="gap:8px;margin-bottom:8px">
      <span class="chip">TEST MODE</span>
      <span class="chip">${o(t.chip||"demo figures · not production")}</span>
    </div>
    <div class="stats">
      <div><strong>${qe(t.gross)}</strong><span>Gross</span></div>
      <div><strong>${qe(t.fees)}</strong><span>Fees</span></div>
      <div><strong>${qe(t.creatorShare)}</strong><span>Creator net</span></div>
      <div><strong>${qe(t.dbsShare)}</strong><span>PIKK net</span></div>
    </div>
    <p class="muted">Creator available ${qe(t.creatorAvailable)} · holds ${qe(t.creatorHolds)} · fan wallet ${qe(t.fanWalletBalance)} · catalog ${t.catalogPublished||0}/${t.catalogTotal||0} published · earning lines ${t.earnCount||0}</p>
    ${s?`<ul class="list-plain">${s}</ul>`:'<p class="muted">No creator earnings in store yet — open Wallet / Earnings (Commerce) to seed demos.</p>'}
    <p class="admin-panel-links">
      <a class="btn" href="#/wallet">Wallet</a>
      <a class="btn" href="#/earnings">Earnings</a>
    </p>
  </section>`}function Kp(e){Cs(),je();const t=tn({openOnly:!0}),s=tn({openOnly:!1}).length,a=e.hotFeed||{},i=t.length?t.slice(0,12).map(n=>{const r=n.kind==="live"?'<span class="chip">live</span>':'<span class="chip">post</span>',l=n.kind==="live"?` · viewers ${n.viewers??"—"} · gifts ${n.gifts??"—"}`:` · score ${n.score??0}`,u=n.kind==="post"?`<button type="button" class="btn primary admin-ea-like" data-ref="${o(n.refId)}" data-alert="${o(n.id)}">Like</button>
                 <button type="button" class="btn ghost admin-ea-comment" data-ref="${o(n.refId)}" data-alert="${o(n.id)}">Comment</button>
                 <button type="button" class="btn ghost admin-ea-share" data-ref="${o(n.refId)}" data-alert="${o(n.id)}">Share</button>`:'<a class="btn ghost" href="#/live">Open Live</a>';return`<div class="admin-ea-row" data-alert-id="${o(n.id)}">
            <div class="admin-ea-main">
              <strong>${o(n.username||"creator")}</strong> ${r}
              <div class="muted">${o(n.title||"")}${l}</div>
            </div>
            <div class="admin-ea-actions row wrap">
              ${u}
              <button type="button" class="btn ghost admin-ea-handle" data-alert="${o(n.id)}">Mark handled</button>
            </div>
          </div>`}).join(""):'<p class="muted">No open engagement alerts. Hot posts/lives will appear here when score spikes (TEST MODE).</p>';return`<section class="card admin-engagement" id="adminEngagement">
    <h3>Engagement alerts</h3>
    <div class="row wrap" style="gap:8px;margin-bottom:8px">
      <span class="chip">TEST MODE</span>
      <span class="chip">§38 Hot Feed</span>
    </div>
    <p class="muted">When posts or lives go hot, alert Admin · one-tap Like / Comment / Share · mark handled. Persist <code>dbs_v1.engagementAlerts</code>.</p>
    <div class="stats">
      <div><strong>${t.length}</strong><span>Open</span></div>
      <div><strong>${s}</strong><span>Total alerts</span></div>
      <div><strong>${a.hotPosts||0}</strong><span>Hot posts</span></div>
      <div><strong>${a.hotLives||0}</strong><span>Hot lives</span></div>
    </div>
    ${i}
    <p class="admin-panel-links"><a class="btn" href="#/posts">Open Posts Hot strip</a><a class="btn" href="#/live">Open Live</a></p>
  </section>`}function Gp(e){const t=e.moderation||{};return`<section class="card admin-moderation" id="adminModeration">
    <h3>Moderation stub</h3>
    <p class="muted">${o(t.note||"Stub")}</p>
    <div class="stats">
      <div><strong>${(t.warnings||[]).length}</strong><span>Warnings</span></div>
      <div><strong>${(t.suspensions||[]).length}</strong><span>Suspensions</span></div>
    </div>
    <p class="muted">Empty-state · no enforcement actions stored yet.</p>
    <p class="admin-panel-links"><a class="btn" href="#/guidelines">Community Guidelines</a></p>
  </section>`}function Up(){var u;const e=Ue(),{posts:t,clipperApps:s,user:a}=L();if(((u=e.query)==null?void 0:u.admin)==="1"&&a&&a.role!=="admin"&&ks(!0),!ae())return _p(a);Vt(),Ge(),Cs();const i=Un(),n=bd(),r=i.clipperByStatus,l=St({includeUnpublishedForAdmin:!0});return _("Admin",`<div class="card admin-header">
      <div class="row wrap">
        <span class="chip">TEST MODE</span>
        <span class="chip">role=admin</span>
        <span class="spacer muted">Signed in as <strong>${o(a.username)}</strong></span>
        <button class="btn ghost" id="adminRevoke">Revoke admin</button>
      </div>
      <p class="muted admin-gate-hint">Gate: Profile toggle or <code>?admin=1</code> → <code>user.role='admin'</code> in <code>dbs_v1</code>. Phase 2 panels deep-link to owner pages.</p>
    </div>

    ${jp()}
    ${Kp(n)}
    ${Np(n)}
    ${Bp(n)}
    ${Rp(n)}
    ${Fp(n)}
    ${Gp(n)}

    ${Op()}
    ${qp(l)}

    <div class="card admin-stats">
      <h3>Phase 1 stats</h3>
      <div class="stats">
        <div><strong>${i.posts}</strong><span>Posts</span></div>
        <div><strong>${i.likes}</strong><span>Likes</span></div>
        <div><strong>${i.comments}</strong><span>Comments</span></div>
        <div><strong>${i.clippers}</strong><span>Clipper apps</span></div>
        <div><strong>${i.catalogPublished||0}</strong><span>Published</span></div>
        <div><strong>${i.catalogTotal||0}</strong><span>Catalog</span></div>
      </div>
      <p class="muted">Clippers — pending ${r.pending} · approved ${r.approved} · waitlisted ${r.waitlisted} · rejected ${r.rejected}</p>
    </div>

    <div class="card admin-posts"><h3>Posts (${t.length})</h3>
      <ul class="list-plain">${t.slice(0,20).map(c=>`<li><span>${o(c.username)}: ${o((c.text||"").slice(0,48))}</span><span class="muted">${new Date(c.at).toLocaleDateString()}</span></li>`).join("")||'<li class="muted">None</li>'}</ul>
      <a class="btn" href="#/posts">Open Posts</a>
    </div>

    <div class="card admin-clippers"><h3>Clipper applications (${s.length})</h3>
      ${s.length?s.map(c=>`<div class="row wrap admin-clip-row">
                     <span class="spacer">${o(c.name)} · ${o(c.email)} <span class="chip">${o(c.status)}</span></span>
                     <button class="btn primary admin-clip" data-id="${o(c.id)}" data-status="approved">Approve</button>
                     <button class="btn ghost admin-clip" data-id="${o(c.id)}" data-status="waitlisted">Waitlist</button>
                     <button class="btn ghost admin-clip" data-id="${o(c.id)}" data-status="rejected">Reject</button>
                   </div>`).join(""):'<p class="muted">None yet — submit via <a href="#/clippers">Clippers</a>.</p>'}</div>`,{lead:"Phase 2 controls · Add Content · Clippers · catalog."})}async function un(e){if(!e)return"";const t=dp("media");return await lp(t,e,{name:e.name,mime:e.type}),"idb:"+t}function mn(e){if(!e)return"";try{const t=new URL(e);let s=t.searchParams.get("v");return!s&&t.hostname.includes("youtu.be")&&(s=t.pathname.slice(1)),!s&&t.pathname.startsWith("/embed/")&&(s=t.pathname.split("/")[2]),s?`https://www.youtube.com/embed/${s}`:""}catch{return""}}function Vp(e){var i,n;(i=e.querySelector("#adminRevoke"))==null||i.addEventListener("click",()=>{ks(!1),h("Admin revoked"),R("#/admin")}),e.querySelectorAll(".admin-clip").forEach(r=>{r.addEventListener("click",()=>{Gn(r.dataset.id,r.dataset.status),h("Clipper "+r.dataset.status),R("#/admin")})}),e.querySelectorAll(".admin-om").forEach(r=>{r.addEventListener("click",()=>{const l=Va(r.dataset.id,r.dataset.status,r.dataset.status==="rejected"?"Admin reject":"");if(l!=null&&l.error){h(l.error==="admin"?"Admin required":"Open Mic update failed");return}h(r.dataset.status==="approved"?"Open Mic approved":"Open Mic rejected"),R("#/admin")})}),e.querySelectorAll(".admin-ea-like").forEach(r=>{r.addEventListener("click",()=>{const l=Pd(r.dataset.ref);if(l!=null&&l.error)return h(l.error==="admin"?"Admin required":"Like failed");r.dataset.alert&&Ms(r.dataset.alert,"liked"),h("Liked · TEST MODE"),R("#/admin")})}),e.querySelectorAll(".admin-ea-comment").forEach(r=>{r.addEventListener("click",()=>{const l=_d(r.dataset.ref,"🔥 PIKK team — keep it up! (TEST MODE)");if(l!=null&&l.error)return h(l.error==="admin"?"Admin required":"Comment failed");r.dataset.alert&&Ms(r.dataset.alert,"commented"),h("Comment posted · TEST MODE"),R("#/admin")})}),e.querySelectorAll(".admin-ea-share").forEach(r=>{r.addEventListener("click",async()=>{var c;const l=Od(r.dataset.ref);if(l!=null&&l.error)return h(l.error==="admin"?"Admin required":"Share failed");const u=`${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(r.dataset.ref)}`;try{(c=navigator.clipboard)!=null&&c.writeText&&await navigator.clipboard.writeText(u),h("Link copied · share +1 (TEST MODE)")}catch{h("Share +1 (TEST MODE)")}r.dataset.alert&&Ms(r.dataset.alert,"shared"),R("#/admin")})}),e.querySelectorAll(".admin-ea-handle").forEach(r=>{r.addEventListener("click",()=>{const l=Ms(r.dataset.alert,"handled");if(l!=null&&l.error)return h("Could not mark handled");h("Alert handled"),R("#/admin")})}),e.querySelectorAll("img[data-idb-src]").forEach(async r=>{const l=r.getAttribute("data-idb-src");if(!l)return;const u=await Sa(l);u&&(r.src=u,r.classList.remove("idb-pending"))});const t=e.querySelector("#adminType"),s=e.querySelector("#adminMediaFile"),a=e.querySelector("#adminCoverFile");e.querySelectorAll(".admin-type-tab").forEach(r=>{r.addEventListener("click",()=>{e.querySelectorAll(".admin-type-tab").forEach(m=>m.classList.remove("on")),r.classList.add("on");const l=r.dataset.type;t&&(t.value=l);const u=co.find(m=>m.id===l);u&&s&&(s.accept=u.acceptMedia),u&&a&&(a.accept=u.acceptCover);const c=e.querySelector("#adminMediaLabel");c&&(c.textContent=l==="picture"?"Picture file (or use cover only)":l==="video"?"Video file (optional if YouTube link set)":"Audio / media file (optional)");const p=e.querySelector("#adminStreamingFields");p&&(p.style.display=l==="song"||l==="album"?"":"none")})}),e.querySelectorAll(".admin-dropzone").forEach(r=>{const l=r.querySelector(".admin-file-input"),u=r.querySelector(".admin-file-name");r.addEventListener("click",c=>{c.target!==l&&(l==null||l.click())}),r.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),l==null||l.click())}),l==null||l.addEventListener("change",()=>{var p;const c=(p=l.files)==null?void 0:p[0];u&&(u.textContent=c?`${c.name} · ${(c.size/1024/1024).toFixed(2)} MB`:"")}),r.addEventListener("dragover",c=>{c.preventDefault(),r.classList.add("drag")}),r.addEventListener("dragleave",()=>r.classList.remove("drag")),r.addEventListener("drop",c=>{var g,f;c.preventDefault(),r.classList.remove("drag");const p=(f=(g=c.dataTransfer)==null?void 0:g.files)==null?void 0:f[0];if(!p||!l)return;const m=new DataTransfer;m.items.add(p),l.files=m.files,l.dispatchEvent(new Event("change"))})}),(n=e.querySelector("#adminAddForm"))==null||n.addEventListener("submit",async r=>{var C,k,I,T,G,x,Q,D,O,z,F,M,P,q,U,Y,K,H,Se,Ee,Ve,ze,dt,pt,ut,mt;r.preventDefault();const l=e.querySelector("#adminAddStatus"),u=e.querySelector("#adminSave"),c=(k=(C=e.querySelector("#adminTitle"))==null?void 0:C.value)==null?void 0:k.trim(),p=((T=(I=e.querySelector("#adminArtist"))==null?void 0:I.value)==null?void 0:T.trim())||"DatBoiSkeet",m=((G=e.querySelector("#adminType"))==null?void 0:G.value)||"song",g=((Q=(x=e.querySelector("#adminCoverUrl"))==null?void 0:x.value)==null?void 0:Q.trim())||"",f=((O=(D=e.querySelector("#adminMediaUrl"))==null?void 0:D.value)==null?void 0:O.trim())||"",b=((F=(z=e.querySelector("#adminYoutube"))==null?void 0:z.value)==null?void 0:F.trim())||"",y={spotify:((P=(M=e.querySelector("#adminSpotify"))==null?void 0:M.value)==null?void 0:P.trim())||"",apple:((U=(q=e.querySelector("#adminApple"))==null?void 0:q.value)==null?void 0:U.trim())||"",youtubeMusic:((K=(Y=e.querySelector("#adminYtm"))==null?void 0:Y.value)==null?void 0:K.trim())||"",tidal:((Se=(H=e.querySelector("#adminTidal"))==null?void 0:H.value)==null?void 0:Se.trim())||"",amazon:((Ve=(Ee=e.querySelector("#adminAmazon"))==null?void 0:Ee.value)==null?void 0:Ve.trim())||"",youtube:b||""},v=!!((ze=e.querySelector("#adminPublished"))!=null&&ze.checked),w=(pt=(dt=e.querySelector("#adminCoverFile"))==null?void 0:dt.files)==null?void 0:pt[0],$=(mt=(ut=e.querySelector("#adminMediaFile"))==null?void 0:ut.files)==null?void 0:mt[0];if(!c){h("Title required");return}if(m==="video"&&$)try{const te=await Pp($),Ae=Ip({duration:te,size:$.size,type:$.type});if(Ae){h(Ae),l&&(l.textContent=Ae);return}}catch{const te="Could not verify video duration. Upload canceled.";h(te),l&&(l.textContent=te);return}u&&(u.disabled=!0),l&&(l.textContent="Saving… (large files may take a moment on iPhone)");try{let te=g,Ae=f;w&&(te=await un(w)),$&&(Ae=await un($)),m==="picture"&&!te&&Ae&&(te=Ae);const Oe=Qo({type:m,title:c,artist:p,coverRef:te,mediaRef:Ae,youtube:b,streamingLinks:m==="song"||m==="album"?y:{},published:v,embed:mn(b)});if(Oe!=null&&Oe.error){h(Oe.error==="forbidden"?"Admin required":"Could not save"),l&&(l.textContent=""),u&&(u.disabled=!1);return}b&&Oe.id&&zn(Oe.id,{embed:mn(b)}),h(v?"Published to catalog":"Saved as draft"),R("#/admin")}catch(te){console.error(te),h("Save failed — file may be too large for this browser"),l&&(l.textContent=String((te==null?void 0:te.message)||te)),u&&(u.disabled=!1)}}),e.querySelectorAll(".admin-cat-pub").forEach(r=>{r.addEventListener("click",()=>{Xo(r.dataset.id,r.dataset.on==="1"),h(r.dataset.on==="1"?"Published":"Unpublished"),R("#/admin")})}),e.querySelectorAll(".admin-cat-del").forEach(r=>{r.addEventListener("click",()=>{confirm("Delete this catalog item?")&&(Zo(r.dataset.id),h("Deleted"),R("#/admin"))})})}function Mt(){R("#/posts")}function zp(){Cs();const e=Gr(8);return e.length?`<section class="card hot-strip" id="hotStrip">
    <div class="row wrap hot-strip-head">
      <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
      <span class="chip">TEST MODE</span>
      <span class="muted hot-strip-note">likes + comments + shares · house + community</span>
    </div>
    <div class="hot-rail" role="list">${e.map((s,a)=>{const i=a+1,n=s.image?`<img class="hot-thumb" src="${o(s.image)}" alt="" loading="lazy" />`:`<div class="hot-thumb hot-thumb-empty">${o((s.username||"?")[0].toUpperCase())}</div>`,r=s.mediaType==="video"?'<span class="chip">video</span>':s.image?'<span class="chip">pic</span>':'<span class="chip">text</span>',l=s.house?'<span class="chip">house</span>':'<span class="chip">community</span>';return`<a class="hot-card" href="#/posts?focus=${o(s.postId||s.id)}" data-hot-id="${o(s.postId||s.id)}">
        <span class="hot-rank">#${i}</span>
        ${n}
        <span class="hot-meta">
          <span class="hot-user">@${o(s.username)}</span>
          <span class="hot-preview">${o((s.preview||s.text||"").slice(0,64))}</span>
          <span class="hot-stats">♥ ${s.likes} · 💬 ${s.comments} · ↗ ${s.shares} · score ${s.score}</span>
          <span class="hot-chips">${r}${l}</span>
        </span>
      </a>`}).join("")}</div>
  </section>`:`<section class="card hot-strip" id="hotStrip">
      <div class="row wrap hot-strip-head">
        <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted">No hot posts yet — engage (like · comment · share) to spike the feed.</p>
    </section>`}function Hp(e){var w,$,C,k,I;const{posts:t,likes:s,comments:a,user:i,postShares:n}=L(),r=((w=e==null?void 0:e.query)==null?void 0:w.tab)==="following"?"following":"discover",l=(($=e==null?void 0:e.query)==null?void 0:$.focus)||"",u=new Set((i==null?void 0:i.following)||[]),c=r==="following"&&i?t.filter(T=>u.has(T.userId)||T.userId===i.id):t,p=No.map(T=>`<button type="button" class="chip preset-img" data-src="${o(T.src)}" title="${o(T.label)}">${o(T.label)}</button>`).join(""),m=((C=e==null?void 0:e.query)==null?void 0:C.compose)==="1"||((k=e==null?void 0:e.query)==null?void 0:k.type),g=["text","picture","short","video"].includes((I=e==null?void 0:e.query)==null?void 0:I.type)?e.query.type:"",f=i?`
    <div class="card post-create" id="composer">
      <h3>Create</h3>
      <p class="muted" style="margin:0 0 10px">Pick what you’re posting — not separate tabs.</p>
      <div class="post-type-picker" role="group" aria-label="Post type">
        <button type="button" class="post-type-btn${g==="text"?" on":""}" data-type="text">
          <span class="post-type-ico" aria-hidden="true">Aa</span>
          <strong>Text</strong>
          <span class="muted">Words only</span>
        </button>
        <button type="button" class="post-type-btn${g==="picture"?" on":""}" data-type="picture">
          <span class="post-type-ico" aria-hidden="true">🖼</span>
          <strong>Picture</strong>
          <span class="muted">Photo / still</span>
        </button>
        <button type="button" class="post-type-btn${g==="short"?" on":""}" data-type="short">
          <span class="post-type-ico" aria-hidden="true">▶</span>
          <strong>Short</strong>
          <span class="muted">Vertical clip</span>
        </button>
        <button type="button" class="post-type-btn${g==="video"?" on":""}" data-type="video">
          <span class="post-type-ico" aria-hidden="true">🎬</span>
          <strong>Video</strong>
          <span class="muted">Full video</span>
        </button>
      </div>
      <div class="post-compose-body${g||m?"":" is-collapsed"}" id="postComposeBody" ${g?"":"hidden"}>
        <input type="hidden" id="postType" value="${o(g||"picture")}" />
        <p class="chip" id="postTypeChip">${o((g||"picture").charAt(0).toUpperCase()+(g||"picture").slice(1))} post</p>
        <div class="field"><label>Caption</label>
          <textarea id="postText" placeholder="Say something…" maxlength="2000"></textarea></div>
        <div class="field" id="postMediaField">
          <label id="postMediaLabel">Media link (demo)</label>
          <input id="postImg" placeholder="/music/… · YouTube URL · /merch/…" />
        </div>
        <div class="row wrap" id="postPresets" style="margin-bottom:10px">${p}</div>
        <p class="muted" id="postMediaNote" style="font-size:12px;margin:0 0 10px">TEST MODE · no real upload — paste a path or YouTube link.</p>
        <button class="btn primary" id="postSubmit">Post</button>
      </div>
    </div>`:`<div class="card"><p class="muted">Sign in from Profile to post text, a picture, short, or video.</p>
       <a class="btn primary" href="#/profile">Sign in</a></div>`,b=`
    <div class="row wrap" style="margin-bottom:12px;gap:8px">
      <a class="btn ${r==="discover"?"primary":"ghost"}" href="#/posts">Discover</a>
      <a class="btn ${r==="following"?"primary":"ghost"}" href="#/posts?tab=following">Following</a>
      <a class="btn ghost" href="#/profile/dbs">@DatBoiSkeet</a>
    </div>`,y=c.map(T=>{const G=s[T.id]||[],x=i&&G.includes(i.id),Q=a[T.id]||[],D=n&&n[T.id]||0,O=ka(T.id),z=i&&u.has(T.userId),F=l&&l===T.id?" post-focus":"",M=i&&T.userId!==i.id?`<button class="btn ghost follow-btn" data-uid="${o(T.userId)}" data-on="${z?"1":"0"}">${z?"Following":"Follow"}</button>`:"",P=T.userId==="dbs"?'<span class="chip">house</span>':'<span class="chip">community</span>',q=T.mediaType||(T.image?"picture":"text"),U=q==="short"?'<span class="chip">Short</span>':q==="video"?'<span class="chip">Video</span>':q==="picture"||q==="image"?'<span class="chip">Picture</span>':q==="text"?'<span class="chip">Text</span>':"",Y=(()=>{const K=(T.mediaUrl||T.image||"").trim();if(!K)return"";if(q==="short"||q==="video"){const H=/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/i.exec(K);if(H)return`<div class="media media-video"><iframe src="https://www.youtube.com/embed/${H[1]}?rel=0" title="post video" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`;if(K.startsWith("http")||K.endsWith(".mp4")||K.endsWith(".webm"))return`<video class="media" src="${o(K)}" controls playsinline preload="metadata"></video>`}return`<img class="media" src="${o(K)}" alt="" loading="lazy" />`})();return`
      <article class="post${F}" data-id="${o(T.id)}" id="post-${o(T.id)}">
        <div class="meta">
          <a class="avatar" href="#/profile/${o(T.userId)}">${o((T.username||"?")[0].toUpperCase())}</a>
          <div class="spacer">
            <div class="who"><a href="#/profile/${o(T.userId)}">${o(T.username)}</a> ${P}${U}</div>
            <div class="when">${j(T.at)}${O>=5?` · <span class="hot-inline">🔥 ${O}</span>`:""}</div>
          </div>
          ${M}
        </div>
        <p class="body-text">${o(T.text)}</p>
        ${Y}
        <div class="post-actions">
          <button class="btn like-btn ${x?"primary":""}" data-id="${o(T.id)}">
            ♥ ${G.length}
          </button>
          <button class="btn ghost comment-toggle" data-id="${o(T.id)}">💬 ${Q.length}</button>
          <button class="btn ghost share-btn" data-id="${o(T.id)}" title="Share (demo count)">↗ ${D}</button>
        </div>
        <div class="comments" id="c-${o(T.id)}" hidden>
          ${Q.map(K=>`<div class="comment"><b>${o(K.username)}</b> ${o(K.text)}</div>`).join("")||'<div class="muted">No comments yet</div>'}
          ${i?`<div class="row" style="margin-top:8px">
                  <input class="c-input" data-id="${o(T.id)}" placeholder="Add a comment…" style="flex:1;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:8px 10px" />
                  <button class="btn primary c-send" data-id="${o(T.id)}">Send</button>
                </div>`:""}
        </div>
      </article>`}).join(""),v=r==="following"?'<div class="card muted">No posts from people you follow yet. Discover feed has official drops.</div>':'<div class="card muted">No posts yet.</div>';return _("Posts",zp()+f+b+(y||v),{lead:"Post Text, a Picture, Short, or Video · Shorts live here (not separate tabs) · Hot strip ranks engagement."})}function Wp(e){var u;const t=e.querySelector(".post-focus");if(t)try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{}else typeof location<"u"&&(location.hash.includes("compose=1")||location.hash.includes("type="))&&setTimeout(()=>{var c;return(c=e.querySelector("#composer"))==null?void 0:c.scrollIntoView({behavior:"smooth",block:"start"})},50);const s=e.querySelector("#postComposeBody"),a=e.querySelector("#postType"),i=e.querySelector("#postTypeChip"),n=e.querySelector("#postMediaLabel"),r=e.querySelector("#postPresets");function l(c){const p=c||"picture";e.querySelectorAll(".post-type-btn").forEach(b=>b.classList.toggle("on",b.dataset.type===p)),a&&(a.value=p),i&&(i.textContent=p.charAt(0).toUpperCase()+p.slice(1)+" post");const m=e.querySelector("#postMediaField"),g=e.querySelector("#postMediaNote"),f=p==="text";m&&(m.hidden=f),g&&(g.hidden=f),n&&!f&&(n.textContent=p==="short"?"Short clip link (YouTube / demo path)":p==="video"?"Video link (YouTube / demo path)":"Picture link (demo path)"),r&&(r.hidden=p!=="picture"),s&&(s.hidden=!1,s.classList.remove("is-collapsed"))}e.querySelectorAll(".post-type-btn").forEach(c=>{c.addEventListener("click",()=>l(c.dataset.type))}),a!=null&&a.value&&l(a.value),e.querySelectorAll(".preset-img").forEach(c=>{c.addEventListener("click",()=>{const p=e.querySelector("#postImg");p&&(p.value=c.dataset.src||""),h("Picture selected")})}),(u=e.querySelector("#postSubmit"))==null||u.addEventListener("click",()=>{var c,p;try{const m=(c=e.querySelector("#postText"))==null?void 0:c.value,g=(a==null?void 0:a.value)||"picture",f=(((p=e.querySelector("#postImg"))==null?void 0:p.value)||"").trim();if(g==="text"){if(!(m!=null&&m.trim()))return h("Write some words for a Text post");Ki({text:m.trim(),mediaType:"text"}),h("Text posted"),Mt();return}if(!(m!=null&&m.trim())&&!f)return h("Add a caption or media");if((g==="short"||g==="video")&&!f)return h("Add a "+g+" link (TEST MODE)");Ki({text:m||(g==="picture"?"Photo":g==="short"?"Short":"Video"),image:g==="picture"?f:"",mediaType:g,mediaUrl:f}),h(g.charAt(0).toUpperCase()+g.slice(1)+" posted"),Mt()}catch(m){h(m.message||"Could not post")}}),e.querySelectorAll(".like-btn").forEach(c=>{c.addEventListener("click",()=>{if(Vo(c.dataset.id).error)return h("Sign in to like");Mt()})}),e.querySelectorAll(".comment-toggle").forEach(c=>{c.addEventListener("click",()=>{const p=e.querySelector("#c-"+c.dataset.id);p&&(p.hidden=!p.hidden)})}),e.querySelectorAll(".c-send").forEach(c=>{c.addEventListener("click",()=>{var b;const p=c.dataset.id,m=e.querySelector(`.c-input[data-id="${p}"]`),g=(b=m==null?void 0:m.value)==null?void 0:b.trim();if(!g)return;if(zo(p,g).error)return h("Sign in to comment");h("Comment added"),Mt()})}),e.querySelectorAll(".share-btn").forEach(c=>{c.addEventListener("click",async()=>{var f;const p=c.dataset.id;if(Ur(p).error)return h("Could not share");const g=`${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(p)}`;try{(f=navigator.clipboard)!=null&&f.writeText&&await navigator.clipboard.writeText(g),h("Shared · link copied (TEST MODE)")}catch{h("Shared · count +1 (TEST MODE)")}Mt()})}),e.querySelectorAll(".follow-btn").forEach(c=>{c.addEventListener("click",()=>{const p=c.dataset.uid,m=c.dataset.on==="1";if((m?oa(p):ra(p)).error)return h("Sign in to follow");h(m?"Unfollowed":"Following"),Mt()})})}function hn(e){R(e)}const Ha={apple:"Apple Music",spotify:"Spotify",youtubeMusic:"YouTube Music",youtube:"YouTube",tidal:"Tidal",amazon:"Amazon Music"};function po(e){if(!e||typeof e!="object")return{};const t={};for(const s of Object.keys(Ha)){const a=String(e[s]||"").trim();(a.startsWith("http://")||a.startsWith("https://"))&&(t[s]=a)}return t}function Yp(e){const t=po(e),s=Object.keys(Ha).filter(a=>t[a]);return s.length?s.map(a=>`<a class="btn stream-plat stream-plat-${o(a)}" href="${o(t[a])}" target="_blank" rel="noopener">${o(Ha[a])}</a>`).join(""):'<span class="muted" style="font-size:12px">No platform links yet</span>'}function Jp(e){try{const t=new URL(e);return t.protocol!=="https:"||t.hostname!=="music.apple.com"||!/^\/[a-z]{2}(?:-[a-z]{2})?\/(?:song|album)\//i.test(t.pathname)?"":"https://embed.music.apple.com"+t.pathname+t.search}catch{return""}}function Ia(e){var r;const t=e.cover?`<img class="stream-cover" src="${o(e.cover)}" alt="${o(e.title)}" loading="lazy" referrerpolicy="no-referrer" />`:'<div class="stream-cover stream-cover-empty" aria-hidden="true">♪</div>',s=e.albumNote?`<div class="muted" style="font-size:11px">${o(e.albumNote)}</div>`:"",a=e.year?` · ${o(String(e.year))}`:"",i=Jp((r=e.links)==null?void 0:r.apple),n=i?`<details class="apple-music-embed"><summary>▶ Play in PIKK · Apple Music</summary><iframe title="Apple Music player for ${o(e.title)}" src="${o(i)}" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style="width:100%;height:175px;border:0;border-radius:12px"></iframe><small class="muted">Apple controls playback availability. Full listening may require Apple Music.</small></details>`:"";return`
    <article class="stream-release">
      ${t}
      <div class="stream-meta">
        <span class="chip">${o(e.type||"release")}</span>
        <strong>${o(e.title)}</strong>
        <div class="muted" style="font-size:12px">${o(e.artist||"DatBoiSkeet")}${a}</div>
        ${s}
        ${n}
        <div class="stream-plats">${Yp(e.links)}</div>
      </div>
    </article>`}function gn(e){return e==="inner"?"Inner Circle":e==="backstage"?"Backstage":e==="skeet+"?"Skeet+":"None"}function Qp(e){return Oo.map(t=>{const s=t.tier==="backstage"||t.tier==="inner";return e&&ja(s?"backstage":"skeet")?`
      <article class="vault-card unlocked" data-id="${o(t.id)}">
        <img src="${o(t.cover)}" alt="${o(t.title)}" />
        <div class="vault-meta">
          <span class="chip" style="border-color:#2a4a3a;color:#8dffb0">Unlocked</span>
          <strong>${o(t.title)}</strong>
          <div class="muted" style="font-size:12px">${o(t.artist)} · ${o(t.status)}</div>
          <div class="muted" style="font-size:11px">Requires ${o(t.tier)} · no audio yet</div>
        </div>
      </article>`:`
      <article class="vault-card locked" data-id="${o(t.id)}">
        <div class="vault-art">
          <img src="${o(t.cover)}" alt="${o(t.title)}" />
          <div class="vault-lock-badge" aria-hidden="true">🔒</div>
        </div>
        <div class="vault-meta">
          <span class="chip">Locked</span>
          <strong>${o(t.title)}</strong>
          <div class="muted" style="font-size:12px">${o(t.artist)}</div>
          <div class="muted" style="font-size:11px">Join ${o(t.tier)} to unlock</div>
        </div>
      </article>`}).join("")}function fn(e={}){var C;const t=["songs","albums","beats","playlists","upload"].includes((C=e.query)==null?void 0:C.view)?e.query.view:"",{user:s}=L(),a=Et(),i=ja("skeet"),n=new Set((s==null?void 0:s.purchasedTracks)||[]),r=_t.map(k=>`
    <div class="cover-card" style="flex:0 0 160px">
      <span class="badge-cs">${o(k.status)}</span>
      <img src="${o(k.cover)}" alt="${o(k.title)}" style="width:160px;height:160px" />
      <div class="t">${o(k.title)}</div>
      <div class="muted" style="font-size:11px">${o(k.artist)}</div>
    </div>`).join(""),l=Rn.map(k=>{const I=k.id==="skeet"?"skeet+":k.id==="inner"?"inner":k.id,T=a===I;return`
    <div class="card" style="margin:0">
      <h3>${o(k.name)}</h3>
      <div class="price" style="font-size:22px;font-weight:900">$${k.price}<span class="muted" style="font-size:13px">/mo</span></div>
      <p class="muted">${o(k.blurb)}</p>
      ${s?T?`<button type="button" class="btn ghost block mem-toggle" data-tier="${o(k.id)}" data-on="1">Active · tap to cancel (demo)</button>`:`<button type="button" class="btn primary block mem-toggle" data-tier="${o(k.id)}" data-on="0">Join · TEST MODE</button>`:'<a class="btn primary block" href="#/profile">Sign in to join</a>'}
    </div>`}).join(""),u=Ri.filter(k=>n.has(k.id)),c=Ri.map(k=>{const I=n.has(k.id);return`
      <div class="card" style="margin:0;display:flex;gap:12px;align-items:center">
        <img src="${o(k.cover)}" alt="" style="width:72px;height:72px;border-radius:10px;object-fit:cover;flex:0 0 72px" />
        <div class="spacer">
          <strong>${o(k.title)}</strong>
          <div class="muted" style="font-size:12px">${o(k.artist)} · ${o(k.status)}</div>
          <div style="font-weight:800;margin-top:4px">$${k.price.toFixed(2)}</div>
        </div>
        ${s?I?'<span class="chip">In My Music</span>':`<button type="button" class="btn primary buy-track" data-id="${o(k.id)}">Buy · demo</button>`:'<a class="btn" href="#/profile">Sign in</a>'}
      </div>`}).join(""),p=St({publishedOnly:!0,types:["song","album"]}),m=p.map(k=>{const I=po(k.streamingLinks||{});return Object.keys(I).length?{id:k.id,title:k.title,artist:k.artist,type:k.type||"song",cover:k.coverRef&&!String(k.coverRef).startsWith("idb:")?k.coverRef:"",links:I,fromAdmin:!0}:null}).filter(Boolean),g=[...yt,...m];let f="";if(t==="songs"||t==="albums"){const k=t==="albums",I=g.filter(T=>k?T.type==="album":T.type==="single"||T.type==="song");f=`<div class="card" id="music-focused-view">
      <h2>${k?"Albums":"Songs"}</h2>
      <p class="muted">Verified releases and available official listening links.</p>
      <div class="stream-grid">${I.map(Ia).join("")||'<p class="muted">No releases listed in this category yet.</p>'}</div>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`}else if(t==="playlists")f=`<div class="card" id="music-focused-view">
      <h2>Playlists</h2>
      <p class="muted">Official YouTube playlists open on YouTube. No rehosted audio.</p>
      <div class="row wrap" style="gap:8px">
        ${Ba.map(k=>`<a class="btn ghost" href="${o(k.youtube)}" target="_blank" rel="noopener">${o(k.title)}</a>`).join("")}
      </div>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`;else if(t==="beats"||t==="upload"){const k=t==="upload";f=`<div class="card" id="music-focused-view">
      <h2>${k?"Upload Music":"Beats"}</h2>
      <p class="muted">Not available yet · TEST MODE. ${k?"Creator music uploads require secure storage, ownership verification and publishing tools.":"The producer beat marketplace and licensing checkout are still in development."}</p>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`}const b=p.length?`<div class="card catalog-admin-music">
        <h2>From Admin</h2>
        <p class="muted">Published songs &amp; albums added in Admin · TEST MODE (device-local).</p>
        <div class="cover-row">${p.map(k=>`
          <div class="cover-card catalog-item" data-id="${o(k.id)}" style="flex:0 0 160px">
            <span class="badge-cs">${o(k.type)}</span>
            <img data-idb-src="${o(k.coverRef||"")}" src="${o(k.coverRef&&!k.coverRef.startsWith("idb:")?k.coverRef:"")}" alt="${o(k.title)}" style="width:160px;height:160px;object-fit:cover;background:#111" />
            <div class="t">${o(k.title)}</div>
            <div class="muted" style="font-size:11px">${o(k.artist)}</div>
            ${k.mediaRef?`<audio class="catalog-audio" data-idb-src="${o(k.mediaRef)}" controls preload="none" style="width:100%;margin-top:6px"></audio>`:""}
          </div>`).join("")}</div>
      </div>`:"",y=yt.find(k=>k.cover)||null,v=yt.filter(k=>k.cover).slice(0,5),$=`
    ${`
    <section class="pikk-music-showcase card" aria-label="Official PIKK music discovery">
      <div class="pikk-music-showcase-copy">
        <p class="kicker">PIKK MUSIC · DATBOISKEET</p>
        <h2>Discover the sound.</h2>
        <p>Stream verified releases, browse albums and playlists, and explore the Vault.</p>
        <div class="pikk-music-showcase-actions">
          <a class="btn primary" href="#/music?view=songs">Listen to Songs</a>
          <a class="btn ghost" href="#/music?view=albums">Browse Albums</a>
        </div>
        <span class="pikk-music-showcase-note">Official listening destinations · TEST MODE for purchases and memberships</span>
      </div>
      ${y?`<div class="pikk-music-showcase-art"><img src="${o(y.cover)}" alt="${o(y.title)} official cover" decoding="async" loading="eager"/><span>${o(y.title)}</span></div>`:""}
    </section>
    <nav class="pikk-music-categories" aria-label="Music categories">
      <a href="#/music?view=songs" class="${t==="songs"?"on":""}">Songs</a>
      <a href="#/music?view=albums" class="${t==="albums"?"on":""}">Albums</a>
      <a href="#/music?view=beats" class="${t==="beats"?"on":""}">Beats</a>
      <a href="#/music?view=playlists" class="${t==="playlists"?"on":""}">Playlists</a>
      <a href="#/music#vault">Vault</a>
      <a href="#/ai-artists">AI Artists · Clearly labeled</a>
      <a href="#/shield">PIKK Shield · Rights preview</a>
    </nav>
    <section class="pikk-music-release-strip" aria-label="Official music covers">
      <div class="pikk-music-release-header"><h3>Listen &amp; discover</h3><a href="#/music#stream-everywhere">See all releases →</a></div>
      <div class="pikk-music-release-row">
        ${v.map(k=>`<a class="pikk-music-release-tile" href="#/music#stream-everywhere">
          <img src="${o(k.cover)}" alt="${o(k.title)} cover" loading="lazy" decoding="async"/>
          <strong>${o(k.title)}</strong>
          <small>${o(k.artist||"DatBoiSkeet")}</small>
        </a>`).join("")}
      </div>
    </section>`}
    ${f}
    <div class="card">
      <h2>Upcoming Releases</h2>
      <p class="muted">Real DatBoiSkeet cover art · playback unlocks when released. No fake tracks.</p>
      <div class="cover-row">${r}</div>
    </div>
    ${b}


    <div class="card" id="youtube-mixes">
      <h2>YouTube Mixes · Channel</h2>
      <p class="muted">Dogs &amp; mixes stream from the <strong>original YouTube source</strong> (embeds / Play on YouTube). Not rehosted. Released catalog still uses Stream Everywhere below.</p>
      <div class="row wrap" style="gap:8px;margin:10px 0 14px">
        <a class="btn" href="${o(me.youtube)}" target="_blank" rel="noopener">Official channel</a>
        <a class="btn ghost" href="${o(me.youtubeHandle)}" target="_blank" rel="noopener">@DatBoiSkeet1</a>
        ${Ba.map(k=>`<a class="btn ghost" href="${o(k.youtube)}" target="_blank" rel="noopener">${o(k.title)}</a>`).join("")}
      </div>
      <div class="yt-mix-grid">
        ${ti.map(k=>`
          <article class="yt-mix-card">
            <div class="hero-video" style="margin:0 0 10px">
              <iframe src="${o(Je(k.embed))}" title="${o(k.title)}" allowfullscreen loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <h3 style="margin:0 0 6px">${o(k.title)}</h3>
            <p class="muted" style="margin:0 0 10px;font-size:13px">${o(k.blurb||"")}</p>
            <a class="btn" href="${o(k.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
          </article>`).join("")}
      </div>
    </div>

    <div class="card" id="stream-everywhere">
      <h2>Featured · Stream Everywhere</h2>
      <p class="muted">Official DatBoiSkeet releases — Apple Music is the primary listening destination: use the Apple-hosted player on supported releases or open the song in Apple Music. Other verified platforms are optional. Full Apple Music playback may require a subscription. External streams are not rehosted in-app. Separate from Vault &amp; purchases.</p>
      <div class="stream-artist row wrap" style="gap:8px;margin:10px 0 14px">
        <span class="chip">Artist</span>
        <a class="btn stream-plat stream-plat-apple" href="${o(me.apple)}" target="_blank" rel="noopener">Apple Music · Listen</a>
        <a class="btn ghost stream-plat stream-plat-spotify" href="${o(me.spotify)}" target="_blank" rel="noopener">Spotify · Alternative</a>
        <a class="btn stream-plat stream-plat-youtubeMusic" href="${o(me.youtubeMusic)}" target="_blank" rel="noopener">YouTube Music</a>
        <a class="btn stream-plat stream-plat-youtube" href="${o(me.youtube)}" target="_blank" rel="noopener">YouTube</a>
      </div>
      <div class="stream-grid">
        ${yt.map(Ia).join("")}
        ${m.map(Ia).join("")}
      </div>
      <p class="muted" style="margin-top:12px;font-size:12px">Tidal / Amazon Music omitted until official links are verified. Admin can add more via streaming link fields.</p>
    </div>

    <div class="card">
      <h2>My Music</h2>
      <p class="muted">Purchases stay here even if membership ends.</p>
      ${u.length?`<div class="cover-row">${u.map(k=>`
            <div class="cover-card" style="flex:0 0 120px">
              <img src="${o(k.cover)}" alt="${o(k.title)}" style="width:120px;height:120px" />
              <div class="t">${o(k.title)}</div>
              <div class="muted" style="font-size:11px">Owned · Coming Soon</div>
            </div>`).join("")}</div>`:'<p class="muted">Nothing purchased yet. Buy a Coming Soon cover below (demo · no charge).</p>'}
    </div>

    <div class="card">
      <h2>Buy (demo)</h2>
      <p class="muted">TEST MODE — no charges. Marks the cover as owned in My Music. Audio not available until release.</p>
      <div style="display:flex;flex-direction:column;gap:10px">${c}</div>
    </div>

    <div class="card" id="vault">
      <h2>Vault ${i?'<span class="chip" style="border-color:#2a4a3a;color:#8dffb0">Unlocked · '+o(gn(a))+"</span>":'<span class="chip">Locked</span>'}</h2>
      <p class="muted">Exclusive unreleased tracks &amp; previews for members. Nested under Music — not a bottom-nav tab.</p>

      <div class="vault-grid" style="margin:12px 0">
        ${Qp(i)}
      </div>

      ${i?`<div class="vault-lock" style="border-style:solid;border-color:#2a4a3a;color:var(--tx)">
              ✅ Membership active: <strong>${o(gn(a))}</strong>. Exclusive cards above are unlocked.
              Cancel anytime with the tier button below (demo). Purchased My Music items are kept.
            </div>`:`<div class="vault-lock">
              🔒 Vault locked. Sign in, then tap <strong>Join · TEST MODE</strong> on Skeet+ or Backstage below.
              Locked cards show title/cover only — no exclusive content until you join.
            </div>`}

      <h3 style="margin:16px 0 8px">Membership (TEST MODE)</h3>
      <div class="grid-2">${l}</div>
    </div>

  `;return _("Music & Vault",$,{lead:"Singles, albums, Coming Soon, and member Vault."})}function vn(e){const t=e.querySelector("#youtube-mixes")||e;wa(t),e.querySelectorAll(".mem-toggle").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=s.dataset.on==="1",n=na(s.dataset.tier,!i);if(n!=null&&n.error)return h("Sign in required — open Profile first");h(i?"Membership cancelled (demo) · My Music purchases kept":`Joined ${s.dataset.tier} (TEST MODE) · Vault unlocked`),hn("#/music"),setTimeout(()=>{var r;return(r=document.getElementById("vault"))==null?void 0:r.scrollIntoView({behavior:"smooth",block:"start"})},40)})}),e.querySelectorAll(".buy-track").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=Uo(s.dataset.id);if(i!=null&&i.error)return h("Sign in required");h("Added to My Music (demo · no charge)"),hn("#/music")})}),e.querySelectorAll("[data-idb-src]").forEach(async s=>{const a=s.getAttribute("data-idb-src");if(!a)return;const i=await Sa(a);i&&(s.tagName==="IMG"||s.tagName==="AUDIO"||s.tagName==="VIDEO")&&(s.src=i)})}const Di="pikk_ai_artists_local_drafts_v1",uo=Object.freeze(["Fully AI-generated music","AI-assisted music with human performance","Human-made music with AI artwork only"]),Xp="AI-generated or AI-assisted";function Zp(e,t=Date.now()){const s=String(e.artist||"").trim().slice(0,80),a=String(e.track||"").trim().slice(0,120),i=String(e.creation||""),n=String(e.description||"").trim().slice(0,600),r=Number(e.price);if(!s||!a||!uo.includes(i)||!e.confirmed)throw Error("Artist, title, creation type and honest AI disclosure are required.");if(!Number.isFinite(r)||r<0||r>100)throw Error("Preview price must be between $0 and $100.");return{id:"ai-draft-"+t+"-"+Math.random().toString(36).slice(2,8),artist:s,track:a,creation:i,description:n,price:r,createdAt:t,status:"Private local draft · not published",disclosure:Xp}}function Mi(e){try{const t=JSON.parse(e.getItem(Di)||"[]");return Array.isArray(t)?t.filter(s=>s&&typeof s.id=="string").slice(0,40):[]}catch{return[]}}function eu(e,t){const s=[t,...Mi(e)].slice(0,40);return e.setItem(Di,JSON.stringify(s)),s}function tu(e,t){const s=Mi(e).filter(a=>a.id!==t);return e.setItem(Di,JSON.stringify(s)),s}function su(){const e=Mi(window.localStorage),t=e.length?e.map(s=>`<article class="card ai-artist-draft"><div class="row wrap"><strong>${o(s.track)}</strong><span class="chip">AI · ${o(s.creation)}</span></div><p class="muted">by ${o(s.artist)} · Preview price $${s.price.toFixed(2)}</p><p class="muted">${o(s.status)}</p><button type="button" class="btn ghost ai-artist-delete" data-id="${o(s.id)}">Delete draft</button></article>`).join(""):'<p class="muted">No AI music drafts saved on this device. This is not a public music catalog.</p>';return _("PIKK AI Artists",`
  <div class="ai-artist-studio">
   <header class="ai-artist-hero"><span class="ai-artist-kicker">PIKK MUSIC · DISTINCT AI CREATOR SPACE</span><h2>AI creativity. Clearly labeled.</h2><p>AI artists can build communities and, once commerce launches, offer songs for purchase. Human musicians remain clearly distinguished in the main music experience.</p><p class="ai-artist-caution"><strong>EARLY ACCESS / TEST MODE:</strong> No AI audio uploads, public profiles, followers, streams or song sales are enabled here yet. Drafts are stored only on this device. Setting a price does not activate checkout.</p></header>
   <div class="ai-artist-policies">
    <article class="card"><h3>AI Artists discovery</h3><p>A separate, opt-in category for fully AI-generated songs and virtual performers, with obvious AI labels on tracks and profiles.</p></article>
    <article class="card"><h3>Real artists stay distinct</h3><p>Human-made music remains clearly identified. AI-assisted works are labeled by their actual contribution; declaring AI artwork alone does not make the song AI-generated.</p></article>
    <article class="card"><h3>Fans and music purchases</h3><p>Planned: follow AI artists, comment, share, listen and buy clearly licensed tracks to keep permanently. No live payments are available in this preview.</p></article>
    <article class="card"><h3>Ownership and safety</h3><p>Creators must disclose AI use, confirm commercial rights and avoid impersonating real artists or cloning voices without permission. Review and appeals will be required before sales.</p></article>
   </div>
   <div class="ai-artist-columns">
    <section class="card ai-artist-panel"><h3>Prepare an AI artist listing</h3><p class="muted">Save a private demo draft. This does not upload music or make it searchable by other users.</p>
     <form id="aiArtistForm">
       <div class="field"><label for="aiArtistName">Artist / virtual artist name *</label><input id="aiArtistName" name="artist" maxlength="80" required /></div>
       <div class="field"><label for="aiTrackName">Song title *</label><input id="aiTrackName" name="track" maxlength="120" required /></div>
       <div class="field"><label for="aiCreationType">How was this made? *</label><select id="aiCreationType" name="creation">${uo.map(s=>`<option value="${o(s)}">${o(s)}</option>`).join("")}</select></div>
       <div class="field"><label for="aiPreviewPrice">Planned purchase price in USD (preview only)</label><input id="aiPreviewPrice" name="price" type="number" min="0" max="100" step=".01" value="1.00" required /></div>
       <div class="field"><label for="aiDescription">Description (optional)</label><textarea id="aiDescription" name="description" maxlength="600"></textarea></div>
       <label class="ai-artist-certify"><input type="checkbox" id="aiArtistCertify" required /> I accurately disclosed the use of AI and confirm I hold or can obtain the necessary commercial rights, including voice and likeness permissions.</label>
       <button type="submit" class="btn primary">Save private AI music draft</button>
     </form>
    </section>
    <section class="card ai-artist-panel"><h3>My private drafts (${e.length})</h3><div class="ai-artist-drafts">${t}</div><p class="muted">A real AI Artist storefront, public discovery feed and licensed downloadable sales require backend, payments and rights verification.</p></section>
   </div>
  </div>`,{lead:"Dedicated AI music category · Disclosure first"})}function au(e){var t;(t=e.querySelector("#aiArtistForm"))==null||t.addEventListener("submit",s=>{s.preventDefault();const a=s.currentTarget;try{const i=Zp({artist:a.elements.artist.value,track:a.elements.track.value,creation:a.elements.creation.value,price:a.elements.price.value,description:a.elements.description.value,confirmed:e.querySelector("#aiArtistCertify").checked});eu(window.localStorage,i),h("Private AI artist draft saved · not published"),location.hash==="#/ai-artists"&&(location.hash="#/ai-artists?updated=1"),window.dispatchEvent(new HashChangeEvent("hashchange"))}catch(i){h(i.message)}}),e.querySelectorAll(".ai-artist-delete").forEach(s=>s.addEventListener("click",()=>{tu(window.localStorage,s.dataset.id),window.dispatchEvent(new HashChangeEvent("hashchange"))}))}const Li="pikk_shield_intake_v1",mo=30,ho=Object.freeze(["Original creator","Licensed with permission","Authorized representative"]);function go(e){const t=String(e||"").trim();if(!t)return"";try{const s=new URL(t);return["https:","http:"].includes(s.protocol)?s.href:""}catch{return""}}function iu(e,t=Date.now()){const s=String(e.title||"").trim().slice(0,120),a=String(e.owner||"").trim().slice(0,100),i=String(e.rights||""),n=String(e.contact||"").trim().slice(0,180),r=String(e.notes||"").trim().slice(0,800),l=go(e.source);if(!s||!a||!n||!ho.includes(i)||!e.certified)throw new Error("Complete title, rights holder, contact, ownership basis and certification.");if(String(e.source||"").trim()&&!l)throw new Error("Use a valid http or https link.");return{id:"shield-"+t+"-"+Math.random().toString(36).slice(2,8),type:"rights-declaration",title:s,owner:a,rights:i,contact:n,notes:r,source:l,at:t,status:"Local draft — not submitted"}}function Ii(e){try{const t=JSON.parse(e.getItem(Li)||"[]");return Array.isArray(t)?t.filter(s=>s&&s.type==="rights-declaration").slice(0,mo):[]}catch{return[]}}function nu(e,t){const s=[t,...Ii(e)].slice(0,mo);return e.setItem(Li,JSON.stringify(s)),s}function ru(e,t){const s=Ii(e).filter(a=>a.id!==t);return e.setItem(Li,JSON.stringify(s)),s}const ou=()=>Ii(window.localStorage);function lu(){const e=ou(),t=e.length?e.map(s=>{const a=go(s.source);return`
    <article class="card shield-entry" data-shield-id="${o(s.id)}">
      <div class="row wrap"><strong>${o(s.title)}</strong><span class="chip">${o(s.status)}</span></div>
      <p class="muted">${o(s.owner)} · ${o(s.rights)}</p>
      <details class="shield-draft-details">
        <summary>Review saved draft details</summary>
        <p class="muted"><strong>Contact:</strong> ${o(s.contact||"Not provided")}</p>
        ${a?`<p class="muted"><strong>Source:</strong> <a href="${o(a)}" target="_blank" rel="noopener noreferrer">Open official source</a></p>`:""}
        ${s.notes?`<p class="muted"><strong>Rights details:</strong> ${o(s.notes)}</p>`:""}
        <p class="muted">Saved on this device only · Not submitted to PIKK</p>
      </details>
      <div class="row wrap"><small>${new Date(s.at).toLocaleDateString()}</small><button type="button" class="btn ghost shield-delete" data-id="${o(s.id)}">Delete local draft</button></div>
    </article>`}).join(""):'<p class="muted">No rights declarations saved on this device.</p>';return _("PIKK Shield",`
    <div class="shield-studio">
      <header class="shield-hero">
        <div class="shield-kicker">PIKK CREATOR PROTECTION · EARLY ACCESS</div>
        <h2>Your music. Your rights. Your control.</h2>
        <p>Record a draft ownership declaration for music you have rights to. This prototype saves information only on this device.</p>
        <p class="shield-notice"><strong>TEST MODE:</strong> No upload scanning, automated fingerprinting, copyright registration, takedown, or staff review is active. These records are not sent to PIKK.</p>
      </header>
      <div class="shield-grid">
        <section class="card shield-panel">
          <h3>Rights declaration draft</h3>
          <p class="muted">Only certify work you own or are authorized to distribute. Do not enter confidential agreements or private documents.</p>
          <form id="shieldForm">
            <div class="field"><label for="shieldTitle">Song or album title *</label><input id="shieldTitle" name="title" maxlength="120" required /></div>
            <div class="field"><label for="shieldOwner">Rights holder / artist *</label><input id="shieldOwner" name="owner" maxlength="100" required /></div>
            <div class="field"><label for="shieldRights">Rights basis *</label><select id="shieldRights" name="rights" required>${ho.map(s=>`<option value="${o(s)}">${o(s)}</option>`).join("")}</select></div>
            <div class="field"><label for="shieldContact">Contact for future review *</label><input id="shieldContact" name="contact" maxlength="180" required placeholder="Artist email or business contact" /></div>
            <div class="field"><label for="shieldSource">Official public source link (optional)</label><input id="shieldSource" name="source" type="url" placeholder="https://..." /></div>
            <div class="field"><label for="shieldNotes">Rights details (optional)</label><textarea id="shieldNotes" name="notes" maxlength="800" placeholder="Describe your original work or license permission"></textarea></div>
            <label class="shield-certify"><input id="shieldCertify" type="checkbox" required /> I certify that I own or am authorized to use these rights, and understand that this is a local draft, not registration or a submitted claim.</label>
            <button type="submit" class="btn primary">Save rights draft on this device</button>
          </form>
        </section>
        <section class="card shield-panel">
          <h3>Protection roadmap</h3>
          <div class="shield-roadmap">
            <div><strong>01 · Rights declarations</strong><span>Local drafts available now; secure submission and admin review not connected</span></div>
            <div><strong>02 · Audio fingerprinting</strong><span>Planned — no matching or altered-audio detection active</span></div>
            <div><strong>03 · Dispute and appeals</strong><span>Planned — no claim or takedown enforcement active</span></div>
            <div><strong>04 · External platform notices</strong><span>Planned — PIKK cannot automatically remove copies from YouTube, Apple or Spotify</span></div>
          </div>
          <h3>My local drafts (${e.length})</h3>
          <div class="shield-history">${t}</div>
        </section>
      </div>
    </div>`,{lead:"Rights declaration preview · No official copyright protection is active yet"})}function cu(e){var t;(t=e.querySelector("#shieldForm"))==null||t.addEventListener("submit",s=>{s.preventDefault();const a=s.currentTarget;try{const i=iu({title:a.elements.title.value,owner:a.elements.owner.value,rights:a.elements.rights.value,contact:a.elements.contact.value,source:a.elements.source.value,notes:a.elements.notes.value,certified:e.querySelector("#shieldCertify").checked});nu(window.localStorage,i),h("Local rights draft saved — not submitted"),location.hash="#/shield?updated=1",window.dispatchEvent(new HashChangeEvent("hashchange"))}catch(i){h(i.message)}}),e.querySelectorAll(".shield-delete").forEach(s=>s.addEventListener("click",()=>{var i,n;const a=((n=(i=s.closest(".shield-entry"))==null?void 0:i.querySelector("strong"))==null?void 0:n.textContent)||"this rights draft";window.confirm(`Delete local rights draft "${a}"? This cannot be undone.`)&&(ru(window.localStorage,s.dataset.id),h("Local draft deleted"),window.dispatchEvent(new HashChangeEvent("hashchange")))}))}function du(){const t=`
    <div class="card merch-hero">
      <p class="kicker">Physical merch</p>
      <h2 style="margin:0 0 8px">Foreign X-Change</h2>
      <p class="muted">All orders, sizes, shipping, and payment happen on
        <a class="fx-link" href="https://foreignx-change.com" target="_blank" rel="noopener">foreignx-change.com</a>
        — not inside PIKK. Product links open the shop homepage until verified per-item URLs are provided.</p>
      <a class="btn primary" href="https://foreignx-change.com" target="_blank" rel="noopener">Visit Foreign X-Change</a>
      <p class="merch-note" style="margin-top:10px">Hats $30 · Tees $65 · Jackets $200 · prices exclude shipping</p>
    </div>
    <div class="merch-grid">${Me.map(s=>`
    <article class="merch-card">
      <div class="img-wrap" data-zoom="${o(s.image)}" role="button" tabindex="0" aria-label="Zoom ${o(s.name)}">
        <img src="${o(s.image)}" alt="${o(s.name)}" loading="lazy" />
      </div>
      <div class="body">
        <div class="cat">${o(s.category)}</div>
        <div class="name">${o(s.name)}</div>
        <div class="price">$${s.price}</div>
        <a class="btn primary block shop-link" href="${o(s.shopUrl)}" target="_blank" rel="noopener" data-name="${o(s.name)}">
          Shop on Foreign X-Change
        </a>
        <span class="merch-note">Redirects to Foreign X-Change for secure checkout · shipping &amp; tax calculated there</span>
        <span class="chip">TEST MODE · external checkout</span>
      </div>
    </article>`).join("")}</div>
    <div id="merchLightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Product image preview" aria-hidden="true"><button type="button" class="merch-lightbox-close" aria-label="Close product preview">×</button><img alt="" /></div>
  `;return _("Merch",t,{lead:"Foreign X-Change showcase · 10 products · external checkout only"})}function pu(e){e.querySelectorAll(".shop-link").forEach(l=>{l.addEventListener("click",()=>{h("TEST MODE — opening Foreign X-Change")})});const t=e.querySelector("#merchLightbox"),s=t==null?void 0:t.querySelector("img"),a=t==null?void 0:t.querySelector(".merch-lightbox-close");let i=null;const n=l=>{var u,c;!t||!s||!a||(i=l,s.src=((u=l.querySelector("img"))==null?void 0:u.currentSrc)||l.dataset.zoom,s.alt=((c=l.querySelector("img"))==null?void 0:c.alt)||"Product preview",t.classList.add("show"),t.setAttribute("aria-hidden","false"),a.focus())},r=()=>{t!=null&&t.classList.contains("show")&&(t.classList.remove("show"),t.setAttribute("aria-hidden","true"),s==null||s.removeAttribute("src"),i!=null&&i.isConnected&&i.focus(),i=null)};e.querySelectorAll(".img-wrap").forEach(l=>{const u=()=>n(l);l.addEventListener("click",u),l.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),u())})}),t==null||t.addEventListener("click",r),t==null||t.addEventListener("keydown",l=>{l.key==="Escape"?(l.preventDefault(),r()):l.key==="Tab"&&(l.preventDefault(),a==null||a.focus())})}function Qt(e){R(e||"#/profile")}function bn(e){return e.avatar?`<img class="avatar" src="${o(e.avatar)}" alt="" style="object-fit:cover" />`:`<div class="avatar">${o((e.username||"?")[0].toUpperCase())}</div>`}function Ps(e,t){return t.length?`<div class="card"><h3>${o(e)}</h3>
    <ul class="list-plain">${t.map(s=>`<li><a href="#/profile/${o(s.id)}"><span>${o(s.username)}</span></a>
           <a class="chip" href="#/profile/${o(s.id)}">View</a></li>`).join("")}</ul></div>`:`<div class="card"><h3>${o(e)}</h3><p class="muted">None yet.</p></div>`}function uu(e){var m,g;const t=((m=e==null?void 0:e.parts)==null?void 0:m[1])||null,{user:s,posts:a}=L(),i=!!(t&&s&&t===s.id&&((g=e==null?void 0:e.query)==null?void 0:g.view)==="public");if(!!t&&(!s||t!==s.id)||i){const f=$t(t);if(!f)return _("Profile",`<div class="card muted">User not found.</div>
         <a class="btn" href="#/profile">Back</a>`);const b=a.filter(C=>C.userId===f.id),y=s&&!i&&(s.following||[]).includes(f.id),v=Fi(f.id),w=Ra(f.id),$=`
      <section class="pikk-profile-cover" aria-label="Public PIKK profile">
        <div class="pikk-profile-cover-inner">
          <span class="pikk-profile-cover-kicker">PIKK · CREATOR PROFILE</span>
          ${bn(f)}
          <div>
            <h2 style="margin:0">${o(f.username)}${f.verified?" ✓":""}</h2>
            <p class="muted" style="margin:4px 0 0">${o(f.bio||"")}</p>
            ${f.verified?'<span class="chip">Verified</span>':""}
          </div>
        </div>
        <div class="stats pikk-profile-stats">
          <div><strong>${b.length}</strong><span>Posts</span></div>
          <div><strong>${(f.followers||[]).length}</strong><span>Followers</span></div>
          <div><strong>${(f.following||[]).length}</strong><span>Following</span></div>
        </div>
        <div class="row wrap pikk-profile-shortcuts">
          ${i?'<a class="btn primary" href="#/profile">Edit profile</a>':s?`<button class="btn ${y?"ghost":"primary"}" id="pubFollow" data-uid="${o(f.id)}" data-on="${y?"1":"0"}">${y?"Unfollow":"Follow"}</button>`:'<a class="btn primary" href="#/profile">Sign in to follow</a>'}
          <a class="btn ghost" href="#/posts">Posts feed</a>
          ${i?"":'<a class="btn ghost" href="#/profile">My profile</a>'}
        </div>
      </section>
      <div class="card">
        <h3>Posts</h3>
        ${b.length?b.map(C=>`<div style="padding:8px 0;border-bottom:1px solid var(--line)">
                      <div class="muted" style="font-size:11px">${new Date(C.at).toLocaleString()}</div>
                      ${o(C.text)}
                      ${C.image?`<img src="${o(C.image)}" alt="" style="margin-top:8px;border-radius:12px;max-height:200px;object-fit:cover;width:100%" />`:""}
                    </div>`).join(""):'<p class="muted">No posts yet.</p>'}
      </div>
      ${Ps("Followers",v)}
      ${Ps("Following",w)}
    `;return _(f.username,$)}if(!s)return _("Profile",`
      <section class="pikk-profile-guest-hero" aria-label="Join PIKK">
        <p class="kicker">PIKK · YOUR PROFILE</p>
        <h2>Your space. Your people. <span>One PIKK.</span></h2>
        <p>Follow artists, share posts and build your profile. Explore the official DatBoiSkeet page or create a local demo account to try the experience.</p>
        <span class="chip">TEST MODE · Browser-local account only</span>
      </section>
      <div class="card">
        <p class="kicker">PIKK account</p>
        <h3>Sign in · local demo</h3>
        <p class="muted">Free fan account for this browser — follow @DatBoiSkeet, post, and apply for roles. TEST MODE: no password, email, or backend auth yet.</p>
        <div class="field"><label>Username</label>
          <input id="signinName" placeholder="Your PIKK name" maxlength="24" /></div>
        <button class="btn primary block" id="signinBtn">Sign in</button>
        <p class="chip" style="margin-top:10px">TEST MODE · demo user only</p>
      </div>
      <div class="card">
        <h3>Official profile</h3>
        <p class="muted" style="margin:0 0 8px">Music, Vault Coming Soon, Foreign X-Change — start here.</p>
        <a class="btn" href="#/profile/dbs">@DatBoiSkeet</a>
      </div>
      <div class="card">
        <h3>Become a Creator</h3>
        <p class="muted">After you sign in, apply for Clipper, Creator/Streamer, Brand, Affiliate, or Seller. Admin review unlocks tools — no automatic earnings access.</p>
        <a class="btn" href="#/signup">Creator applications</a>
        <a class="btn" href="#/clippers">Clippers apply</a>
        <a class="btn ghost" href="#/guidelines">Guidelines</a>
      </div>`,{lead:"Free PIKK fan profile · follow · posts · role apps · TEST MODE."});const r=a.filter(f=>f.userId===s.id),l=Fi(s.id),u=Ra(s.id),c=s.memberships||{},p=`
    <section class="pikk-profile-cover" aria-label="Your PIKK profile">
      <div class="pikk-profile-cover-inner">
        <span class="pikk-profile-cover-kicker">PIKK · MY PROFILE</span>
        ${bn(s)}
        <div>
          <h2 style="margin:0">${o(s.username)}</h2>
          <p class="muted" style="margin:4px 0 0">${o(s.bio)}</p>
          <span class="chip">TEST MODE · demo</span>
          ${c.skeetPlus||c.backstage||c.innerCircle?`<span class="chip">${c.innerCircle?"Inner Circle":c.backstage?"Backstage":"Skeet+"}</span>`:""}
        </div>
      </div>
      <div class="stats pikk-profile-stats">
        <div><strong>${r.length}</strong><span>Posts</span></div>
        <div><strong>${(s.followers||[]).length}</strong><span>Followers</span></div>
        <div><strong>${(s.following||[]).length}</strong><span>Following</span></div>
      </div>
      <div class="row wrap pikk-profile-shortcuts">
        <a class="btn" href="#/posts">New post</a>
        <a class="btn" href="#/profile/${o(s.id)}?view=public">Public view</a>
        <a class="btn" href="#/profile-shop">Profile Shop</a>
        <a class="btn" href="#/messages">Messages</a>
        <button class="btn ghost" id="signoutBtn">Sign out</button>
      </div>
    </section>

    <div class="card" id="editCard">
      <h3>Edit profile</h3>
      <div class="field"><label>Bio</label>
        <textarea id="editBio" maxlength="280">${o(s.bio||"")}</textarea></div>
      <div class="field"><label>Avatar URL</label>
        <input id="editAvatar" placeholder="/brand/… or https://…" value="${o(s.avatar||"")}" /></div>
      <button class="btn primary" id="saveProfile">Save</button>
    </div>

    <div class="card">
      <h3>Your posts</h3>
      ${r.length?r.map(f=>`<div style="padding:8px 0;border-bottom:1px solid var(--line)">
                    <div class="muted" style="font-size:11px">${new Date(f.at).toLocaleString()}</div>
                    ${o(f.text)}
                  </div>`).join(""):'<p class="muted">No posts yet.</p>'}
    </div>

    ${Ps("Followers",l)}
    ${Ps("Following",u)}

    <div class="card">
      <h3>Roles &amp; membership</h3>
      <p class="muted" style="margin:0 0 8px">Clipper campaigns, Live creator tools, brand ads, or Skeet+ / Backstage / Inner Circle for Vault access.</p>
      <a class="btn block" href="#/clippers">Apply as Clipper <span class="badge-cs badge-cs-inline">Coming Soon</span></a>
      <a class="btn block" href="#/signup" style="margin-top:8px">Other creator roles</a>
      <a class="btn block" href="#/music" style="margin-top:8px">Music &amp; Vault membership</a>
    </div>

    <div class="card">
      <h3>Demo Admin · TEST MODE</h3>
      <p class="muted" style="font-size:12px">Sets <code>user.role='admin'</code> in localStorage <code>dbs_v1</code>. Also available via <code>#/admin?admin=1</code>.</p>
      <div class="row wrap" style="margin-top:8px">
        <span class="chip">${ae()?"role=admin":"role=fan"}</span>
        <button class="btn ${ae()?"ghost":"primary"}" id="toggleAdmin">${ae()?"Revoke admin":"Enable Demo Admin"}</button>
        <a class="btn" href="#/admin">Open Admin</a>
      </div>
    </div>
  `;return _("Profile",p)}function mu(e){var t,s,a,i,n,r;(t=e.querySelector("#signinBtn"))==null||t.addEventListener("click",()=>{var u;const l=(u=e.querySelector("#signinName"))==null?void 0:u.value;jt(l),h("Signed in"),Qt("#/profile")}),(s=e.querySelector("#signinName"))==null||s.addEventListener("keydown",l=>{var u;l.key==="Enter"&&((u=e.querySelector("#signinBtn"))==null||u.click())}),(a=e.querySelector("#signoutBtn"))==null||a.addEventListener("click",()=>{Ko(),h("Signed out"),Qt("#/profile")}),(i=e.querySelector("#saveProfile"))==null||i.addEventListener("click",()=>{var u,c;if(Go({bio:(u=e.querySelector("#editBio"))==null?void 0:u.value,avatar:(c=e.querySelector("#editAvatar"))==null?void 0:c.value}).error)return h("Sign in required");h("Profile saved"),Qt("#/profile")}),(n=e.querySelector("#pubFollow"))==null||n.addEventListener("click",l=>{const u=l.currentTarget,c=u.dataset.uid,p=u.dataset.on==="1";if((p?oa(c):ra(c)).error)return h("Sign in to follow");h(p?"Unfollowed":"Following"),Qt("#/profile/"+c)}),(r=e.querySelector("#toggleAdmin"))==null||r.addEventListener("click",()=>{const l=!ae();if(ks(l).error)return h("Sign in required");h(l?"Demo Admin enabled":"Admin revoked"),Qt("#/profile")})}function yn(){R("#/clippers")}const hu={pending:"Pending",approved:"Approved",rejected:"Rejected",waitlisted:"Waitlisted"};function gu(){const{clipperApps:e,user:t}=L(),s=e.length,a=e.filter(r=>r.status==="approved").length,i=e.filter(r=>r.status==="pending").length,n=`
    <div class="clippers-studio">
      <header class="clippers-hero">
        <div class="clippers-hero-label">PIKK CREATOR STUDIO <span aria-hidden="true">◆</span> CLIPPER PROGRAM</div>
        <h2>Turn your edits into opportunities.</h2>
        <p>Apply to become a PIKK Clipper, share your work and track your application in one place.</p>
        <div class="clippers-hero-actions"><a class="btn primary" href="#clipper-application">Apply to clip</a><a class="btn ghost" href="#clipper-submissions">My applications</a></div>
        <div class="clippers-hero-disclaimer">TEST MODE · Applications saved on this device · No paid campaigns or payouts active</div>
      </header>
      <section class="clippers-stats" aria-label="Application overview">
        <div><span>Applications</span><strong>${s}</strong><small>On this device</small></div>
        <div><span>Pending review</span><strong>${i}</strong><small>Demo review queue</small></div>
        <div><span>Approved</span><strong>${a}</strong><small>Demo status only</small></div>
      </section>
    <div class="card clippers-panel" id="clipper-application">
      <div class="home-sell-title-row">
        <h3 style="margin:0">Clipper application</h3>
        <span class="badge-cs badge-cs-inline" id="clippers-coming-soon">Coming Soon</span>
      </div>
      <p class="chip" style="margin:0 0 8px">Clipper earnings not live yet · TEST MODE</p>
      <p class="muted">No minimum followers. Admin reviews every application. Analytics screenshots can be linked as URLs for this demo.</p>
      <div class="grid-2">
        <div class="field"><label>Name *</label><input id="cName" required /></div>
        <div class="field"><label>Email *</label><input id="cEmail" type="email" required /></div>
      </div>
      <div class="field"><label>Age</label><input id="cAge" type="number" min="13" max="120" /></div>
      <h3 style="margin-top:8px">Platforms</h3>
      <div class="grid-2">
        <div class="field"><label>TikTok</label><input id="cTiktok" placeholder="@ or URL" /></div>
        <div class="field"><label>Instagram</label><input id="cIg" placeholder="@ or URL" /></div>
        <div class="field"><label>YouTube</label><input id="cYt" /></div>
        <div class="field"><label>X / Twitter</label><input id="cX" /></div>
        <div class="field"><label>Facebook</label><input id="cFb" /></div>
        <div class="field"><label>Followers (total approx)</label><input id="cFollowers" /></div>
      </div>
      <h3 style="margin-top:8px">Analytics</h3>
      <div class="grid-2">
        <div class="field"><label>Monthly views</label><input id="cViews" /></div>
        <div class="field"><label>Avg views / post</label><input id="cAvgViews" /></div>
        <div class="field"><label>Engagement rate</label><input id="cEngage" placeholder="e.g. 4.2%" /></div>
        <div class="field"><label>Posting frequency</label><input id="cFreq" placeholder="e.g. 5× / week" /></div>
      </div>
      <div class="field"><label>Niche / promotional experience</label><textarea id="cNiche"></textarea></div>
      <div class="field"><label>Work sample links</label><textarea id="cSamples" placeholder="Paste URLs, one per line"></textarea></div>
      <div class="field"><label>Analytics notes / screenshot links</label><textarea id="cAnalytics" placeholder="Describe numbers or paste image URLs"></textarea></div>
      <button class="btn primary block" id="cSubmit">Submit application</button>
    </div>

    <div class="card clippers-panel" id="clipper-submissions">
      <h3>Submissions (this device)</h3>
      ${e.length?e.map(r=>`
            <div class="card" style="margin:0 0 10px;background:#12121a" data-app="${o(r.id)}">
              <div class="row wrap">
                <strong>${o(r.name)}</strong>
                <span class="chip">${o(hu[r.status]||r.status)}</span>
                <span class="muted spacer" style="text-align:right">${j(r.at)}</span>
              </div>
              <p class="muted" style="margin:6px 0;font-size:12px">${o(r.email)} · ${o(r.niche||"—")}</p>
              <p style="font-size:12px;margin:0 0 8px">${o((r.samples||"").slice(0,120))}</p>
              <div class="row wrap admin-actions">
                <button class="btn primary clip-status" data-id="${o(r.id)}" data-status="approved">Approve</button>
                <button class="btn ghost clip-status" data-id="${o(r.id)}" data-status="waitlisted">Waitlist</button>
                <button class="btn ghost clip-status" data-id="${o(r.id)}" data-status="rejected">Reject</button>
              </div>
            </div>`).join(""):'<p class="muted">None yet.</p>'}
      <p class="muted" style="font-size:12px;margin-top:8px">Demo admin: approve / reject here or on <a href="#/admin" style="color:var(--sk)">Admin</a>. Signed in as ${o((t==null?void 0:t.username)||"guest")}.</p>
    </div>
    </div>
  `;return _("Clippers",n,{lead:"Apply → admin approve → paid campaigns & tracked links."})}function fu(e){var t;(t=e.querySelector("#cSubmit"))==null||t.addEventListener("click",()=>{var i,n,r,l,u,c,p,m,g,f,b,y,v,w,$,C,k,I,T;const s=(n=(i=e.querySelector("#cName"))==null?void 0:i.value)==null?void 0:n.trim(),a=(l=(r=e.querySelector("#cEmail"))==null?void 0:r.value)==null?void 0:l.trim();if(!s||!a)return h("Name and email required");Ho({name:s,email:a,age:(u=e.querySelector("#cAge"))==null?void 0:u.value,tiktok:(c=e.querySelector("#cTiktok"))==null?void 0:c.value,instagram:(p=e.querySelector("#cIg"))==null?void 0:p.value,youtube:(m=e.querySelector("#cYt"))==null?void 0:m.value,x:(g=e.querySelector("#cX"))==null?void 0:g.value,facebook:(f=e.querySelector("#cFb"))==null?void 0:f.value,followers:(b=e.querySelector("#cFollowers"))==null?void 0:b.value,views:(y=e.querySelector("#cViews"))==null?void 0:y.value,avgViews:(v=e.querySelector("#cAvgViews"))==null?void 0:v.value,engagement:(w=e.querySelector("#cEngage"))==null?void 0:w.value,frequency:($=e.querySelector("#cFreq"))==null?void 0:$.value,niche:(C=e.querySelector("#cNiche"))==null?void 0:C.value,samples:(k=e.querySelector("#cSamples"))==null?void 0:k.value,analyticsNotes:(I=e.querySelector("#cAnalytics"))==null?void 0:I.value,applicantUserId:((T=L().user)==null?void 0:T.id)||null}),h("Application saved for admin review"),yn()}),e.querySelectorAll(".clip-status").forEach(s=>{s.addEventListener("click",()=>{Gn(s.dataset.id,s.dataset.status),h("Marked "+s.dataset.status),yn()})})}const vu={rose:"🌹","big-love":"💖","turn-up":"🔥","cash-rain":"💵","bottle-pop":"🍾","money-gun":"💸","diamond-drip":"💎","foreign-whip":"🚗",helicopter:"🚁","private-jet":"✈️","dbs-crown":"👑","dbs-universe":"🌌","battle-win":"✅","battle-crown":"👑","battle-vs":"⚔️","battle-fire":"🔥"},bu={rose:"/gifts/rose.svg","big-love":"/gifts/big-love.svg","turn-up":"/gifts/turn-up.svg","cash-rain":"/gifts/cash-rain.svg","bottle-pop":"/gifts/bottle-pop.svg","money-gun":"/gifts/money-gun.svg","diamond-drip":"/gifts/diamond-drip.svg","foreign-whip":"/gifts/foreign-whip.svg",helicopter:"/gifts/helicopter.svg","private-jet":"/gifts/private-jet.svg","dbs-crown":"/gifts/dbs-crown.svg","dbs-universe":"/gifts/dbs-universe.svg","battle-win":"/gifts/battle-win.svg","battle-crown":"/gifts/battle-crown.svg","battle-vs":"/gifts/battle-vs.svg","battle-fire":"/gifts/battle-fire.svg"},kn="gift-sticker";function _s(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function yu(e,t){return t&&typeof t=="object"&&t.className?t.className:`${kn} ${kn}--${e}`}function Pi(e,t={}){const s=String(e||""),a=yu(s||"unknown",t),i=vu[s]||"🎁",n=bu[s]||null;return n?{src:n,className:a,emoji:i,html:`<img class="${_s(a)}" src="${_s(n)}" alt="" width="48" height="48" decoding="async" draggable="false" data-gift-slug="${_s(s)}" />`}:{src:null,className:a,emoji:i,html:`<span class="${_s(a)} gift-sticker--emoji" aria-hidden="true">${i}</span>`}}function it(e,t){return Pi(e,t&&typeof t=="object"&&typeof t!="function"?t:{}).html}const ku=Object.freeze([{id:"women",title:"Women's Rooms",icon:"💗",description:"Conversations, style, wellness, business and community",names:["Ladies Lounge","Girl Talk","Tea Time","What's the Word?","Who Did What?","Beauty Bar","Girls' Night In","Love & Standards","Boss Ladies","Fashion & Fits","Ladies Only Live","Women in Business","Women's Mental Wellness","Dating From Her Side","The Hustle Room: Women"]},{id:"men",title:"Men's Rooms",icon:"🫱🏻‍🫲🏿",description:"Brotherhood, relationships, business, wellness and hobbies",names:["The Man Cave","The Barbershop","Fellas' Night","Men's Corner","Men in Business","Cars & Motors","Fitness & Brotherhood","Fatherhood","Men's Mental Wellness","Dating From His Side","Sports Debate","Gaming Brotherhood","Men's Style","The Hustle Room","Brotherhood & Mentorship"]},{id:"coed",title:"Coed Communities",icon:"🌐",description:"Shared conversations, learning and networking for everyone",names:["Let's Talk","The Hangout","Business Connect & Wealth Academy","Couples Corner","Conspiracy Room","Game Room","Why Are You Single?","What Are You Looking For?","Single & Ready to Mingle","City Connect"]},{id:"dating",title:"Singles & Dating",icon:"💘",description:"Opt-in conversations, introductions and relationship topics",names:["Looking for My Match","The Flirt Zone","Speed Connections","Poly Connections","Date Night Live","Love & Advice"]},{id:"sports",title:"Sports",icon:"🏆",description:"A separate place for every major sport",names:["Sports Central","Basketball","Football","Soccer","Baseball","Hockey"]},{id:"talent",title:"Music & Talent",icon:"🎙️",description:"Rappers, singers, bands, producers and city competitions",names:["The Booth","Producer Room","The Stage","City Takeover"]},{id:"news",title:"News & Innovation",icon:"📰",description:"World events, markets and new ideas",names:["World News","Economy & Markets","Startups & Innovation","Tech Talk","Money Talk"]},{id:"general",title:"General Live",icon:"📡",description:"IRL, gaming, shows, comedy, food, fitness and more",names:["Just Chatting","Gaming","Music","IRL","Sports","Creative","Podcasts & Talk Shows","Food & Cooking","Fitness","Beauty & Fashion","Business & Money Talk","Dating & Connections","Education","News & Commentary","Comedy & Entertainment","Comedy & Roast Battles","Creator Spotlight"]}]);function wu(e,t){const s=new Map(e.map(l=>[l[0],l])),a=new Set,i=([l,u,c])=>'<a class="live-cat-card pikk-live-room-card" href="'+(l==="Comedy & Roast Battles"?"#/roast-arena":"#/live?tab=channels&category="+encodeURIComponent(l))+'" aria-label="'+t(l)+': browse channels"><span class="pikk-live-room-emoji" aria-hidden="true">'+t(c)+"</span><strong>"+t(l)+'</strong><p class="muted">'+t(u)+'</p><span class="pikk-live-room-action">Browse channels <span aria-hidden="true">›</span></span></a>',n=ku.map(l=>{const u=l.names.map(c=>s.get(c)).filter(Boolean);return u.forEach(c=>a.add(c[0])),'<details class="pikk-live-directory-group" id="pikk-live-group-'+l.id+'"'+(l.id==="coed"?" open":"")+'><summary class="pikk-live-directory-summary"><span class="pikk-live-directory-icon" aria-hidden="true">'+l.icon+'</span><span class="pikk-live-directory-label"><strong>'+t(l.title)+"</strong><small>"+t(l.description)+'</small></span><span class="pikk-live-directory-count">'+u.length+' rooms</span><span class="pikk-live-directory-chevron" aria-hidden="true">⌄</span></summary><div class="live-cat-cards pikk-live-directory-cards">'+u.map(i).join("")+"</div></details>"}),r=e.filter(l=>!a.has(l[0]));return r.length&&n.push('<details class="pikk-live-directory-group" open><summary class="pikk-live-directory-summary"><span class="pikk-live-directory-icon" aria-hidden="true">✨</span><span class="pikk-live-directory-label"><strong>More Live</strong><small>Additional topics</small></span><span class="pikk-live-directory-count">'+r.length+' rooms</span><span class="pikk-live-directory-chevron" aria-hidden="true">⌄</span></summary><div class="live-cat-cards pikk-live-directory-cards">'+r.map(i).join("")+"</div></details>"),'<div class="pikk-live-directory" aria-label="Live category groups">'+n.join("")+"</div>"}function fo(){const e=(Ue().query||{}).tab;return e==="live"||e==="channels"?"channels":e==="following"||e==="categories"?e:"channels"}function ve(){const e=fo();R(e==="channels"?"#/live":`#/live?tab=${e}`)}function ye(e){return"$"+Number(e||0).toFixed(2)}function Re(e){const t=Number(e)||0;return t>=1e3?(t/1e3).toFixed(t>=1e4?0:1).replace(/\.0$/,"")+"K":String(t)}function Su(e="live"){return`
    <nav class="live-cat-chips" aria-label="Live categories">
      ${[{id:"live",href:"#/live?tab=channels",label:"Live"},{id:"openmic",href:"#/openmic",label:"Open Mic / Talent Discovery (24/7)"},{id:"spotlight",href:"#/spotlight",label:"Spotlight (24/7)"},{id:"viral",href:"#/viral-live",label:"Viral Live · Preview"}].map(a=>{const i=a.id===e?" on":"",n=a.id===e?' aria-current="page"':"";return`<a class="live-cat-chip${i}" href="${a.href}"${n}>${o(a.label)}</a>`}).join("")}
    </nav>`}function $u(e="channels"){return`
    <nav class="live-disc-tabs" aria-label="Live discovery">
      ${[{id:"following",href:"#/live?tab=following",label:"Following"},{id:"clips",href:"#/shorts",label:"Clips"},{id:"channels",href:"#/live?tab=channels",label:"Channels"},{id:"categories",href:"#/live?tab=categories",label:"Categories"}].map(a=>{const i=a.id===e?" on":"",n=a.id===e?' aria-current="page"':"";return`<a class="live-disc-tab${i}" href="${a.href}" data-tab="${a.id}"${n}>${o(a.label)}</a>`}).join("")}
    </nav>`}function vo(e={}){const t=hr(),s=t.chipLabel||"House · Music Video",a=t.embed?Je(t.embed,"rel=0"):"",i=e.title||"House catalog · while stages are quiet";return`
    <div class="card sp-house live-house-teaser" style="margin-top:12px">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">${o(s)}</div>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:12px">${o(i)} · original YouTube · not a fake live act</p>
      ${a?`<div class="sp-house-embed hero-video" style="margin-top:10px">
               <iframe src="${o(a)}" title="${o(t.title)}" allowfullscreen loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>`:""}
      <div class="sp-now-title" style="margin-top:10px">${o(t.title)}</div>
      <div class="muted" style="font-size:12px">${o(t.artist||"DatBoiSkeet")} · ${o(t.note||"")}</div>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <a class="btn ghost" href="#/spotlight">24/7 Spotlight</a>
        <a class="btn ghost" href="#/openmic">Open Mic</a>
        ${t.youtube?`<a class="btn ghost" href="${o(t.youtube)}" target="_blank" rel="noopener">YouTube</a>`:""}
      </div>
    </div>`}function xu(e){const t=e?Ra(e.id):[],s=new Set(t.map(r=>r.id)),a=Wt().filter(r=>s.has(r.hostId)),i=t.length?t.slice(0,12).map(r=>`<a class="chip" href="#/profile">${o("@"+(r.username||r.id))}</a>`).join(""):'<span class="muted">Nobody followed yet · DEMO</span>';let n;if(!e)n=`
      <p class="muted">Sign in to see lives from accounts you follow.</p>
      <a class="btn primary" href="#/profile">Demo profile</a>
      <p class="chip" style="margin-top:10px">TEST MODE · Following is local demo graph</p>`;else if(!a.length)n=`
      <p class="muted" style="margin:0 0 8px">
        None of the people you follow are live right now (demo filter on seeded Hot lives).
      </p>
      <div class="row wrap" style="gap:6px;margin-bottom:10px">${i}</div>
      <a class="btn ghost" href="#/live?tab=channels">Browse Live channels</a>
      <p class="chip" style="margin-top:10px">TEST MODE · not a scrape</p>
      ${vo({title:"Meanwhile — DatBoiSkeet house catalog on 24/7 stages"})}`;else{const r=a.map(l=>`
        <article class="hot-live-card${l.house?" is-house":""}" data-live-id="${o(l.id)}">
          <div class="live-hoodie" aria-label="Live · ${o(Re(l.viewers))} watching">
            <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
            <span class="live-hoodie-viewers">${o(Re(l.viewers))}</span>
          </div>
          <div class="hot-live-body">
            <div class="hot-live-host">@${o(l.hostName)}</div>
            <div class="hot-live-title">${o(l.title)}</div>
            <div class="hot-live-actions row wrap">
              <button type="button" class="btn ghost hot-live-watch" data-id="${o(l.id)}" data-host="${o(l.hostName)}">Watch demo</button>
            </div>
          </div>
        </article>`).join("");n=`
      <p class="muted" style="margin:0 0 8px;font-size:12px">Lives from accounts you follow · ${t.length} following · TEST MODE</p>
      <div class="row wrap" style="gap:6px;margin-bottom:10px">${i}</div>
      <div class="hot-lives-track">${r}</div>`}return`
    <div class="card live-disc-panel" id="liveTabFollowing" data-panel="following">
      <h3 style="margin:0 0 8px">Following</h3>
      ${n}
    </div>`}const Eu=[["The Booth","Rappers, freestyles, hip-hop performances and song previews","🎙️"],["The Stage","Singers, bands, vocalists and instrumental performances","🎤"],["City Takeover","City-versus-city showcases, performances and local pride challenges","🌆"],["Producer Room","Beat showcases, producer collaborations and beat competitions","🎹"],["Ladies Lounge","Women-centered girl talk, beauty, fashion, relationships and community","💅"],["Girl Talk","Everyday conversations, friendships and women’s discussions","💬"],["Tea Time","Celebrity gossip, trending stories and entertainment drama","🫖"],["Who Did What?","Viral moments, celebrity controversies and debates","👀"],["Boss Ladies","Women entrepreneurs, business networking and financial growth","👑"],["Fashion & Fits","Fashion, outfits and personal style","👗"],["Ladies Only Live","Women-centered livestreams and hosted events","🎥"],["What's the Word?","Entertainment news, celebrity conversations, viral moments and trending discussions","🗣️"],["Women in Business","Women entrepreneurs, founders, business networking and mentorship","👩‍💼"],["The Man Cave","Men’s social conversations, sports and community","🤝"],["Men in Business","Men’s entrepreneurship, networking, mentorship and partnerships","👔"],["Girls' Night In","Women-centered social nights, games and discussions","🌙"],["Beauty Bar","Beauty, hair, makeup and skincare conversations","💄"],["Love & Standards","Dating, relationships and boundaries","💗"],["Women's Mental Wellness","Women-centered stress, confidence, emotional wellbeing and peer support","🧠"],["Dating From Her Side","Women-centered dating experiences, relationships and personal standards","💞"],["The Hustle Room: Women","Women-centered side hustles, extra income ideas and building businesses","📈"],["The Barbershop","Men-centered everyday debates, conversation and community","💈"],["Fellas' Night","Men-centered social events and games","🌃"],["Men's Corner","Men-centered life, relationships and personal development","🧢"],["Cars & Motors","Cars, motorcycles, customization and auto culture","🚘"],["Fitness & Brotherhood","Fitness, wellbeing and peer support","💪"],["Fatherhood","Parenting, family responsibilities and raising children","👨‍👧"],["Men's Mental Wellness","Men-centered stress, wellbeing and peer support","🧠"],["Dating From His Side","Men-centered dating experiences and relationship advice","💬"],["Sports Debate","Sports arguments, player comparisons and predictions","🏅"],["Gaming Brotherhood","Gaming, tournaments and player communities","🎮"],["Men's Style","Fashion, grooming, watches and fragrances","⌚"],["The Hustle Room","Careers, side businesses and professional growth","📈"],["Brotherhood & Mentorship","Intergenerational mentoring and peer support","🤝"],["Sports Central","All-sports discussion, fan talk and analysis","🏆"],["Basketball","Basketball discussion and fan streams","🏀"],["Football","American football discussion and fan streams","🏈"],["Soccer","Soccer discussion and fan streams","⚽"],["Baseball","Baseball discussion and fan streams","⚾"],["Hockey","Hockey discussion and fan streams","🏒"],["Tech Talk","AI, gadgets, apps and technology","💻"],["Startups & Innovation","Building businesses, technology and new ideas","🚀"],["World News","International events and global news discussions","🌍"],["Economy & Markets","Inflation, housing, jobs, interest rates and markets","📈"],["Let's Talk","Open conversations, questions and community discussion","🗣️"],["The Hangout","Conversations and social live streams","💬"],["Creator Spotlight","Featured creators and emerging talent","🌟"],["Game Room","Gameplay, tournaments and community games","🎮"],["Why Are You Single?","Coed conversations about single life, dating experiences and relationship challenges","❓"],["What Are You Looking For?","Coed conversations about dating intentions, values and ideal partners","💭"],["Single & Ready to Mingle","Opt-in coed social conversations and introductions for singles","💘"],["Looking for My Match","Opt-in dating live conversations","❤️"],["The Flirt Zone","Dating and connection conversations","💕"],["Speed Connections","Fast-paced introductions and connections","⏱️"],["Poly Connections","Consensual nonmonogamy discussions and connections","🔗"],["Couples Corner","Couples-versus-couples games, trivia, partner challenges, friendly competitions and rematches","💞"],["Date Night Live","Live dating conversations and activities","🌹"],["Love & Advice","Relationship conversations and advice","💌"],["Business Connect & Wealth Academy","Coed business networking and beginner education in entrepreneurship, credit, stocks, crypto, real estate and Roth IRAs","💼"],["City Connect","Meet people by city for friendship, dating, business networking and local conversations","📍"],["Conspiracy Room","Open discussion of theories and claims","🧩"],["Money Talk","Stocks, housing, crypto and financial discussions","💰"],["Just Chatting","Conversations, Q&A and hanging out","💬"],["Gaming","Gameplay, tournaments and community games","🎮"],["Music","Artists, DJs, producers and listening sessions","🎵"],["IRL","Everyday life, travel and outdoor streams","🌎"],["Sports","Sports talk and watch-along discussions","🏀"],["Creative","Art, design, production and making things","🎨"],["Podcasts & Talk Shows","Interviews, panels and conversations","🎙️"],["Food & Cooking","Recipes, kitchens and food reviews","🍳"],["Fitness","Training, wellness and movement","💪"],["Beauty & Fashion","Style, hair, makeup and fashion","✨"],["Business & Money Talk","Entrepreneurs, careers and money discussions","💼"],["Dating & Connections","Opt-in conversations and dating live rooms","❤️"],["Education","Tutorials, learning and study sessions","📚"],["News & Commentary","Current events and opinions","📰"],["Comedy & Entertainment","Comedy, variety and entertainment","🎭"],["Comedy & Roast Battles","1v1, tag team, open mic and tournaments","🎤"]];function Au(){return`
    <div class="card live-disc-panel" id="liveTabCategories" data-panel="categories">
      <div class="pikk-live-directory-hero">
        <span class="pikk-live-directory-kicker">PIKK LIVE · DISCOVER</span>
        <h3>Find your room.</h3>
        <p>Choose a community, explore a sport or find a conversation. Open a section to browse its topics.</p>
        <span class="pikk-live-directory-note">Discovery categories filter channels; a category is not a hosted room or a live stream. No active stream? You'll see an empty result.</span>
      </div>
      ${wu(Eu,o)}
      <h3 style="margin:20px 0 8px">PIKK 24/7 Stages</h3>
      <div class="live-cat-cards">
        <a class="live-cat-card" href="#/openmic"><strong>Open Mic / Talent Discovery</strong><span class="chip">24/7 stage</span><p class="muted">Join the performance queue</p></a>
        <a class="live-cat-card" href="#/spotlight"><strong>Spotlight Live</strong><span class="chip">24/7 stage</span><p class="muted">Keep Going votes and creator performances</p></a>
        <a class="live-cat-card" href="#/shorts"><strong>Clips / Shorts</strong><span class="chip">Watch</span><p class="muted">Watch short videos</p></a>
        <a class="live-cat-card" href="#/viral-live"><strong>PIKK Viral Live</strong><span class="chip">Preview · not broadcasting</span><p class="muted">Explore the future 24/7 trending channel and original video sources</p></a>
      </div>
    </div>`}function Cu(e){return e!=null&&e.spikedAt?Date.now()-Number(e.spikedAt)<15*60*1e3:!1}function Tu(e=""){const t=Wt();return`
    <div class="card hot-lives-rail" id="hotLivesRail">
      <div class="row wrap" style="justify-content:space-between;align-items:baseline;gap:8px">
        <h3 style="margin:0">Hot lives · Top streamers</h3>
        <span class="chip">score · viewers + engagement</span>
      </div>
      <p class="muted" style="margin:6px 0 10px;font-size:12px">TEST MODE · seeded demo · not third-party scrape · house + community</p>
      <div class="hot-lives-track">
        ${(e?t.filter(i=>String(i.category||"").toLowerCase()===e.toLowerCase()):t).map(i=>{const n=Cu(i);return`
      <article class="hot-live-card${n?" is-hot":""}${i.house?" is-house":""}" data-live-id="${o(i.id)}">
        <div class="live-hoodie" aria-label="Live · ${o(Re(i.viewers))} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" title="${o(Re(i.viewers))} watching">${o(Re(i.viewers))}</span>
        </div>
        <div class="hot-live-body">
          <div class="hot-live-host">@${o(i.hostName)}</div>
          <div class="hot-live-title">${o(i.title)}</div>
          <div class="hot-live-chips">
            <span class="chip">${o(Re(i.viewers))} watching</span>
            ${i.house?'<span class="chip chip-ok">House</span>':""}
            ${n?'<span class="chip live-chip"><span class="dot" aria-hidden="true"></span> HOT</span>':""}
          </div>
          <div class="hot-live-actions row wrap">
            <button type="button" class="btn ghost hot-live-watch" data-id="${o(i.id)}" data-host="${o(i.hostName)}">Watch demo</button>
            <button type="button" class="btn hot-live-spike" data-id="${o(i.id)}">Simulate spike</button>
          </div>
        </div>
      </article>`}).join("")||'<p class="muted">No matching live channels in this category yet.</p>'}
      </div>
    </div>`}function Du(e){const t=String(e||"queued");return t==="playing"?'<span class="chip live-chip">Playing</span>':t==="played"?'<span class="chip chip-ok">Played</span>':t==="skipped"?'<span class="chip">Skipped</span>':'<span class="chip">Queued</span>'}function $e(e){const t=Number(e)||0;return t>=1e3?(t/1e3).toFixed(t%1e3===0?0:1).replace(/\.0$/,"")+"K":String(t)}function Mu(e,t){if(!e||e.endedAt)return"";const s=da(),a=pl(),i=ul(e.id).slice(0,12),n=a.map(c=>{const p=c.coins>=cl,m=s>=c.coins;return`
      <button type="button" class="lg-gift" data-slug="${o(c.slug)}" data-coins="${c.coins}" data-confirm="${p?"1":"0"}" title="${o(c.animation)}">
        <span class="lg-gift-emoji">${it(c.slug)}</span>
        <span class="lg-gift-name">${o(c.name)}</span>
        <span class="lg-gift-price">${o($e(c.coins))} · ${ye(c.usd)}</span>
        ${m?'<span class="chip">Ready</span>':'<span class="chip">Need demo coins</span>'}
        ${p?'<span class="chip lg-confirm-chip">Confirm</span>':""}
      </button>`}).join(""),r=la.map(c=>`<button type="button" class="btn ghost lg-buy" data-coins="${c.coins}">${o($e(c.coins))} · ${ye(c.usd)}</button>`).join(""),l=i.length?i.map(c=>`<li class="lg-hist-row">
            <span class="lg-hist-emoji">${it(c.giftSlug)}</span>
            <span><strong>${o(c.giftName)}</strong> · @${o(c.fromUser)} · ${o($e(c.coins))} coins</span>
          </li>`).join(""):'<li class="muted" style="padding:6px 0">No gifts yet this Live.</li>';return`
    <div class="card live-gifts" id="liveGifts">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:baseline">
        <h3 style="margin:0">Gifts</h3>
        <span class="chip">TEST MODE · simulated gifts · no real payouts</span>
      </div>
      <p class="muted" style="margin:6px 0 12px;font-size:12px">
        PIKK prototype gift catalog · send during Live · expensive gifts (Money Gun+) ask to confirm ·
        viewers see names &amp; coins only
      </p>
      <div class="live-gift-overlay" id="liveGiftOverlay" aria-live="polite" aria-atomic="true"></div>
      ${t?`
      <div class="lg-tray" id="liveGiftTray" role="list" aria-label="Live gifts">
        ${n}
      </div>
      <div class="row wrap" style="gap:8px;margin-top:12px;align-items:center">
        <span class="chip">Coins ${o($e(s))} · TEST MODE</span>
        <a class="btn ghost" href="#/wallet" style="font-size:12px">Wallet</a>
      </div>
      <details class="lg-buy-details" style="margin-top:10px">
        <summary class="muted" style="cursor:pointer;font-size:13px">Add demo coins · no payment</summary>
        <div class="row wrap lg-buy-row" style="gap:6px;margin-top:8px">${r}</div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">Demo coin values only. No charge, cash value, or withdrawal.</p>
      </details>`:`
      <div class="card" style="margin-top:8px;padding:12px">
        <p class="muted" style="margin:0">Create a local demo profile to try gifts during this Live. No real account required.</p>
        <a class="btn primary" href="#/profile" style="margin-top:8px">Sign in</a>
      </div>`}
      <h4 style="margin:14px 0 8px;font-size:13px">Recent gifts</h4>
      <ul class="list-plain lg-hist" id="lgHist">${l}</ul>
    </div>`}function Lu(e,t){var u;if(!e||e.endedAt)return"";const s=!!(t&&e.hostId===t.id),a=Number(((u=L().wallet)==null?void 0:u.balance)||0),i=si(e.id),n=Wn.map(c=>{const p=c.save>0?`<span class="chip chip-ok lsr-save">Save $${c.save}</span>`:"";return`
      <button type="button" class="lsr-pack" data-pack="${c.pack}" data-price="${c.price}" aria-pressed="false">
        <strong>${o(c.label)}</strong>
        <span class="lsr-pack-price">${ye(c.price)}</span>
        ${p}
      </button>`}).join(""),r=i.length?i.map(c=>{const p=s?`<div class="row wrap lsr-host-acts" style="gap:6px">
                 ${c.status==="queued"||c.status==="playing"?`<button type="button" class="btn primary lsr-play" data-rid="${o(c.requestId)}" data-si="${c.songIndex}">${c.status==="playing"?"Mark played":"Play"}</button>
                        <button type="button" class="btn ghost lsr-skip" data-rid="${o(c.requestId)}" data-si="${c.songIndex}">Skip</button>`:""}
               </div>`:"";return`
          <li class="lsr-queue-row" data-status="${o(c.status)}">
            <div class="lsr-queue-main">
              <strong>${o(c.title)}</strong>
              <span class="muted" style="font-size:12px">@${o(c.username)} · ${o(String(c.pack))}‑pack</span>
            </div>
            ${Du(c.status)}
            ${p}
          </li>`}).join(""):'<li class="muted" style="padding:8px 0">No song requests yet · fans can buy a pack below.</li>',l=t?`
      <div class="lsr-form" id="lsrForm">
        <p class="muted" style="margin:0 0 8px;font-size:12px">Pick a pack, enter song title(s), then pay from demo Wallet · <span class="chip">TEST MODE</span></p>
        <div class="lsr-packs" id="lsrPacks" role="group" aria-label="Song request packs">
          ${n}
        </div>
        <div id="lsrTitleFields" class="lsr-titles"></div>
        <div class="row wrap" style="gap:8px;margin-top:10px;align-items:center">
          <button type="button" class="btn primary" id="lsrSubmit">Request songs · pay</button>
          <button type="button" class="btn ghost" id="lsrSeedWallet">+ $50 demo credit</button>
          <span class="chip">Wallet ${ye(a)}</span>
        </div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">3‑song pack is <strong>$45</strong> · promoted as <strong>Save $5</strong> (not $50). Demo charge only.</p>
      </div>`:`
      <div class="card" style="margin-top:10px;padding:12px">
        <p class="muted" style="margin:0">Sign in to request songs during this Live.</p>
        <a class="btn primary" href="#/profile" style="margin-top:8px">Sign in</a>
      </div>`;return`
    <div class="card live-song-requests" id="liveSongRequests">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:baseline">
        <h3 style="margin:0">Song requests</h3>
        <span class="chip">TEST MODE · demo wallet</span>
      </div>
      <p class="muted" style="margin:6px 0 12px;font-size:12px">
        Fans pay for song requests on anyone’s live · host Play / Skip ·
        ${s?"<strong>You are the host</strong>":"viewer queue is read-only for Play/Skip"}
      </p>
      <h4 style="margin:0 0 8px;font-size:13px">Queue</h4>
      <ul class="list-plain lsr-queue" id="lsrQueue">${r}</ul>
      <h4 style="margin:14px 0 8px;font-size:13px">Request a pack</h4>
      ${l}
    </div>`}function Iu(e){var l;const t=e.endedAt?Math.max(0,Math.floor((e.endedAt-e.startedAt)/1e3)):Math.max(0,Math.floor((Date.now()-e.startedAt)/1e3)),s=String(Math.floor(t/60)).padStart(2,"0"),a=String(t%60).padStart(2,"0"),i=Re(e.viewers||0),n=e.endedAt?`<div class="live-stage-meta"><span class="chip">Ended · ${j(e.endedAt)}</span></div>`:`<div class="live-hoodie live-hoodie--stage" aria-label="Live · ${o(i)} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" id="liveViewers" title="${o(i)} watching">${o(i)}</span>
        </div>
        <div class="live-stage-meta">
          <span class="chip">${s}:${a}</span>
        </div>`,r=(e.chat||[]).slice(-40).map(u=>`
      <div class="live-chat-row ${u.support?"support":""}">
        <strong>${o(u.username)}</strong>
        <span>${o(u.text)}</span>
      </div>`).join("");return`
    <div class="card live-stage">
      <div class="live-stage-frame" role="img" aria-label="Fake stream stage · TEST MODE">
        <div class="live-stage-brand">
          <img src="/brand/pikk-official-approved.jpg" alt="PIKK" />
          <div>
            <div class="live-stage-title">${o(e.title)}</div>
            <div class="muted" style="font-size:12px">@${o(e.hostName)} · Follow DatBoiSkeet</div>
          </div>
        </div>
        ${n}
        <p class="live-stage-note">TEST MODE · no camera / no real stream · branding + chat demo only</p>
      </div>

      <div class="row wrap live-earn" style="margin-top:10px">
        <span class="chip">Tips ${ye(e.tipsTotal)}</span>
        <span class="chip">Gifts ${ye(e.giftsTotal||0)}</span>
        <span class="chip">Song reqs (see queue)</span>
        <span class="chip">Coins ${$e(da())}</span>
        <span class="chip">Wallet ${ye(((l=L().wallet)==null?void 0:l.balance)||0)}</span>
      </div>

      ${e.endedAt?`<p class="muted" style="margin:10px 0 0">Stream ended. Start another below.</p>
             <button class="btn primary" id="liveRestart">New go-live</button>`:`<div class="row wrap" style="margin-top:10px;gap:8px">
               <button class="btn" id="liveTip" data-kind="tip" data-amt="1">Tip $1 · demo</button>
               <button class="btn ghost" id="liveFocusGifts">Gifts tray</button>
               <button class="btn ghost" id="liveBumpViewers">Refresh viewers</button>
               <button class="btn ghost danger" id="liveEnd">End stream</button>
             </div>`}
    </div>

    <div class="card live-chat-card">
      <h3>Live chat</h3>
      <div class="live-chat" id="liveChat">${r||'<p class="muted">No messages yet.</p>'}</div>
      ${e.endedAt?"":`<div class="row" style="gap:8px;margin-top:10px">
               <input id="liveChatInput" placeholder="Say something…" maxlength="280" style="flex:1" />
               <button class="btn primary" id="liveChatSend">Send</button>
             </div>`}
    </div>
  `}function Pu(e){const t=Number(e==null?void 0:e.targetAmount)||0;return t<=0?0:Math.min(100,Math.round((Number(e.raised)||0)/t*100))}function _u(e){const t=Math.max(0,Number(e)-Date.now());if(t<=0)return"Ended · 24h window over";const s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return s>=1?`Resets in ${s}h ${a}m`:`Resets in ${a}m`}function Ou(e,t){if(!e||e.endedAt)return"";const s=e.hostId,a=fl(s),i=!!(t&&s&&t.id===s),n=da();if(!a)return i?`
    <div class="card live-daily-goal" id="liveDailyGoal">
      <h3 style="margin:0 0 6px">Set today's Live goal</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">Name + amount · 24h window · viewers can donate with coins · TEST MODE</p>
      <div class="field"><label>Goal name</label>
        <input id="liveGoalName" maxlength="80" placeholder="e.g. New merch drop fund" /></div>
      <div class="field"><label>Goal amount ($)</label>
        <input id="liveGoalAmt" type="number" min="1" step="1" placeholder="50" /></div>
      <button type="button" class="btn primary" id="liveGoalSave">Start 24h goal</button>
      <p class="chip" style="margin-top:10px">TEST MODE · demo coins only</p>
    </div>`:`
      <div class="card live-daily-goal" id="liveDailyGoal">
        <h3 style="margin:0 0 6px">Host daily goal</h3>
        <p class="muted" style="margin:0;font-size:12px">No goal set for this Live yet · TEST MODE</p>
      </div>`;const r=Pu(a),l=!!(a.completedAt||r>=100),u=r>=100?"Complete":r>=70?"Close":r>=30?"On the way":"Far",c=[50,100,250].map(m=>`<button type="button" class="btn ghost live-goal-donate" data-goal-id="${o(a.id)}" data-coins="${m}" title="≈ $${(m/50).toFixed(0)}">Donate ${m} coins</button>`).join(""),p=i?`<details class="live-goal-edit" style="margin-top:10px">
        <summary class="muted" style="cursor:pointer;font-size:12px">Edit goal (new 24h window)</summary>
        <div class="field" style="margin-top:8px"><label>Goal name</label>
          <input id="liveGoalName" maxlength="80" value="${o(a.name)}" /></div>
        <div class="field"><label>Goal amount ($)</label>
          <input id="liveGoalAmt" type="number" min="1" step="1" value="${o(String(a.targetAmount))}" /></div>
        <button type="button" class="btn" id="liveGoalSave">Save · reset 24h</button>
      </details>`:"";return`
    <div class="card live-daily-goal" id="liveDailyGoal">
      <div class="live-goal-head">
        <h3 style="margin:0">Daily goal · ${o(a.name)}</h3>
        <span class="chip${l?" chip-ok":""}">${l?"Goal met":o(u)}</span>
      </div>
      <p class="muted" style="margin:4px 0 8px;font-size:12px">${o(_u(a.endsAt))} · @${o(a.hostName||e.hostName)} · TEST MODE</p>
      <div class="live-goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${r}" aria-label="Goal progress">
        <div class="live-goal-fill" style="width:${r}%"></div>
      </div>
      <p class="live-goal-amounts" style="margin:8px 0 10px">
        <strong>${ye(a.raised)}</strong> / ${ye(a.targetAmount)}
        <span class="muted"> · ${r}%</span>
        <span class="chip" style="margin-left:8px">Coins ${o($e(n))}</span>
      </p>
      <div class="row wrap live-goal-donate-row" style="gap:8px">
        ${c}
      </div>
      <form class="live-goal-custom-form" data-goal-id="${o(a.id)}" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:end">
        <label style="flex:1;min-width:125px">Custom coins<input type="number" class="live-goal-custom-coins" inputmode="numeric" min="1" max="1000000" step="1" required placeholder="Enter coins" style="width:100%" /></label>
        <button class="btn primary" type="submit">Donate custom</button>
      </form>
      <p class="muted" style="margin:8px 0 0;font-size:11px">50 / 100 / 250 coins ≈ $1 / $2 / $5 · 100 coins = $2 · TEST MODE</p>
      ${p}
    </div>`}function qu(e){return e?`
    <div class="card" id="live-go">
      <h3>Go live · TEST MODE</h3>
      <p class="muted">Fake stream UI with title, viewer stub, chat, tips, gifts (coins), and paid song requests. Persisted in localStorage (<code>dbs_v1.live</code> + <code>coins</code> + <code>liveGiftLedger</code> + <code>liveSongRequests</code>).</p>
      <div class="field"><label>Stream title</label>
        <input id="liveTitle" maxlength="80" placeholder="e.g. Listening session · Long Story Short" value="PIKK Live · ${o(e.username)}" />
      </div>
      <div class="field"><label>Today's goal name <span class="muted">(optional)</span></label>
        <input id="liveGoalNameGo" maxlength="80" placeholder="e.g. Studio session fund" />
      </div>
      <div class="field"><label>Goal amount ($) <span class="muted">(optional)</span></label>
        <input id="liveGoalAmtGo" type="number" min="1" step="1" placeholder="50" />
      </div>
      <button class="btn primary block" id="liveStart">Start stream</button>
      <p class="chip" style="margin-top:10px">No real media · tips/song reqs use demo wallet · gifts use demo coins · optional 24h goal</p>
    </div>`:`
      <div class="card" id="live-go">
        <h3>Go live</h3>
        <p class="muted">Sign in to start a demo livestream (no real camera).</p>
        <a class="btn primary" href="#/profile">Sign in</a>
        <p class="chip" style="margin-top:10px">TEST MODE</p>
      </div>`}function Nu(e){return e.length?`
    <div class="card">
      <h3>Recent streams (this device)</h3>
      <ul class="list-plain">
        ${e.slice(0,8).map(t=>`<li>
              <span><strong>${o(t.title)}</strong><br/><span class="muted" style="font-size:12px">@${o(t.hostName)} · ${j(t.endedAt||t.startedAt)} · tips ${ye(t.tipsTotal)}</span></span>
              <span class="chip">${t.endedAt?"Ended":"Live"}</span>
            </li>`).join("")}
      </ul>
    </div>`:""}function Bu(e){if(!e||e.endedAt)return"";const t=ml(10),s=t.length?t.map((l,u)=>{const c=it(l.lastSlug||"rose",{className:"gift-sticker gift-sticker--xs"});return`<div class="live-obar-cell" title="${o(l.username)} · ${ye(l.usd)} today">
            <span class="live-obar-rank">${u+1}</span>
            ${c}
            <span class="live-obar-name">${o(l.username)}</span>
          </div>`}).join(""):'<div class="live-obar-empty muted">No gifters yet today</div>',a=vi(10),i=a.length?a.map((l,u)=>{const c=it("battle-win",{className:"gift-sticker gift-sticker--xs"});return`<div class="live-obar-cell" title="${o(l.username)} · rest of day">
            <span class="live-obar-rank">${u+1}</span>
            ${c}
            <span class="live-obar-name">${o(l.username)}</span>
          </div>`}).join(""):'<div class="live-obar-empty muted">No winners yet today</div>',n=si(e.id).find(l=>l.status==="playing");let r="";if(n){const l=n.title||"Song";r=`
      <div class="live-obar live-obar-spotlight" id="liveRequestSpotlight" role="status" aria-live="polite">
        <span class="live-obar-label">Request Spotlight</span>
        <span class="live-obar-spotlight-name">@${o(n.username||"fan")}</span>
        <span class="muted live-obar-spotlight-song">${o(l)}</span>
        <span class="chip">TEST MODE</span>
      </div>`}return`
    <div class="live-overlay-bars" id="liveOverlayBars" aria-label="Live overlay bars">
      <div class="live-obar live-obar-gifters" id="liveTopGifters">
        <span class="live-obar-label">Top Gifters</span>
        <div class="live-obar-track">${s}</div>
        <span class="chip live-obar-chip">Day · TEST MODE</span>
      </div>
      <div class="live-obar live-obar-gb" id="liveGbWinnersBar">
        <span class="live-obar-label">Gift Battle</span>
        <div class="live-obar-track">${i}</div>
        <span class="chip live-obar-chip">1–10 · day</span>
      </div>
      ${r}
    </div>`}function Ru(e){const t=jl();if(!t)return"";const s=it(t.giftSlug||"rose",{className:"gift-sticker"}),i=e&&e.id===t.fromUserId?`<p class="muted" style="margin:8px 0 0;font-size:12px">You triggered this · others can Challenge you · TEST MODE</p>
       <button type="button" class="btn ghost" id="liveGbPopDismiss">Dismiss</button>`:`<div class="row wrap" style="gap:8px;margin-top:10px">
         <button type="button" class="btn primary" id="liveGbPopChallenge">Challenge @${o(t.fromUser)}</button>
         <button type="button" class="btn ghost" id="liveGbPopDismiss">Dismiss</button>
       </div>`;return`
    <div class="live-gb-pop" id="liveGbChallengePop" role="dialog" aria-label="Gift Battle challenge">
      <div class="live-gb-pop-card">
        <div class="row wrap" style="gap:10px;align-items:center">
          ${s}
          <div>
            <div class="chip">Gift Battle</div>
            <h3 style="margin:4px 0">@${o(t.fromUser)} sent ${o(t.giftName)}</h3>
            <p class="muted" style="margin:0;font-size:12px">${o(String(t.coins))} demo coins · no real payment · Challenge this gifter · 60s battle</p>
          </div>
        </div>
        ${i}
        <p class="chip" style="margin-top:8px">TEST MODE · broadcast demo · invitations respect prefs</p>
      </div>
    </div>`}function ju(e){var i,n,r,l,u,c,p,m;fi();const t=hi();if(!t||!e)return"";if(t.status==="active"||t.status==="ended"){const g=Math.max(0,Number(t.scoreA)||0),f=Math.max(0,Number(t.scoreB)||0),b=g+f,y=t.status==="active"?Math.max(0,Math.ceil((Number(t.endsAt)-Date.now())/1e3)):0,v=t.winnerName?"@"+o(t.winnerName):"Tie";return`
      <section class="card live-battle-scoreboard" aria-label="Live Gift Battle scoreboard">
        <div class="row wrap" style="justify-content:space-between;align-items:center">
          <strong>⚔️ PIKK Live Battle</strong>
          <span class="chip" id="liveBattleTimer" data-ends-at="${Number(t.endsAt)||0}">${t.status==="active"?y+"s left":"Finished"}</span>
        </div>
        <div class="row" style="justify-content:space-between;gap:12px;margin:12px 0">
          <div><strong>@${o(((i=t.challenger)==null?void 0:i.name)||"Challenger")}</strong><div>${Re(g)} demo points</div></div>
          <strong>VS</strong>
          <div style="text-align:right"><strong>@${o(((n=t.opponent)==null?void 0:n.name)||"Opponent")}</strong><div>${Re(f)} demo points</div></div>
        </div>
        <div class="live-battle-score-track" role="progressbar" aria-label="Challenger share of battle points" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${b?Math.round(g/b*100):50}" style="height:10px;background:var(--blue);border-radius:10px;overflow:hidden">
          <div style="width:${b?Math.round(g/b*100):50}%;height:100%;background:var(--acc)"></div>
        </div>
        ${t.status==="ended"?`<p class="live-battle-winner" style="font-weight:800;margin-top:10px">🏆 ${v} · Battle complete</p>`:'<p class="muted" style="margin-top:10px">Scores update with demo gifts · no real money</p>'}
        <a href="#/giftbattles" class="btn ghost" style="margin-top:8px">Battle details</a>
      </section>`}if(t.status!=="pending")return"";const s=((r=t.opponent)==null?void 0:r.id)===e.id,a=((l=t.challenger)==null?void 0:l.id)===e.id;return!s&&!a?`
      <div class="card live-gb-pending-note">
        <span class="chip">Pending battle</span>
        <span class="muted" style="margin-left:8px;font-size:12px">${o((u=t.challenger)==null?void 0:u.name)} vs ${o((c=t.opponent)==null?void 0:c.name)} · waiting</span>
      </div>`:s?`
      <div class="card live-gb-pending" id="liveGbPending">
        <strong>@${o((p=t.challenger)==null?void 0:p.name)}</strong> challenged you to a Gift Battle
        <div class="row wrap" style="gap:8px;margin-top:8px">
          <button type="button" class="btn primary" id="liveGbAccept">Accept · 60s</button>
          <button type="button" class="btn ghost" id="liveGbDecline">Decline</button>
        </div>
        <p class="chip" style="margin-top:8px">TEST MODE · recognition only</p>
      </div>`:`
    <div class="card live-gb-pending-note">
      <span class="chip">Waiting</span>
      <span class="muted" style="margin-left:8px;font-size:12px">Challenge sent to @${o((m=t.opponent)==null?void 0:m.name)}</span>
      <a class="btn ghost" href="#/giftbattles" style="margin-left:8px">Open Gift Battles</a>
    </div>`}function Fu(){const e=vi(10);return e.length?`
    <div class="card live-gb-day" id="liveGbDayWinners">
      <h3 style="margin:0 0 6px">Gift Battle winners today</h3>
      <p class="muted" style="margin:0 0 8px;font-size:12px">Up to 10 · until end of day · TEST MODE</p>
      <ul class="live-gb-day-list">${e.map((s,a)=>`<li class="live-gb-day-row"><span class="live-gb-day-sticker">${it("battle-win",{className:"gift-sticker gift-sticker--xs"})}</span><span class="chip">#${a+1}</span><strong>${o(s.username)}</strong></li>`).join("")}</ul>
    </div>`:""}function Ku(){var p;const{user:e,live:t}=L(),s=al(),a=t&&!t.endedAt,i=!!t,n=fo(),r=((p=Ue().query)==null?void 0:p.category)||"";let u=`
    <div class="live-disc-panel" data-panel="channels">
      ${r?`<div class="card"><strong>Category: ${o(r)}</strong> <a class="btn ghost" href="#/live?tab=categories">All categories</a> <a class="btn ghost" href="#/live?tab=channels">All channels</a><p class="muted small">Only channels tagged with this category are shown below.</p></div>`:""}
      ${Tu(r)}
      ${r?"":Fu()}
      ${a?"":qu(e)}
      ${a?"":vo({title:"No active Live on this device — house catalog on Spotlight / Open Mic"})}
      ${Nu(s)}
      <div class="card">
        <p class="muted" style="margin:0 0 8px">More Live tools</p>
        <div class="row wrap">
          <a class="btn ghost" href="#/connect#connect-multistream">Multi-platform go-live</a>
          <a class="btn ghost" href="#/multiguest">Multi-Guest</a>
          <a class="btn ghost" href="#/shorts">Shorts / Clips</a>
        </div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">Open Mic + Spotlight are 24/7 categories (chips above). Clips live under Watch → Shorts / Clips. Gifts + song requests run during an active Live. Gift Battles is not promoted from this page.</p>
      </div>
    </div>`;n==="following"?u=xu(e):n==="categories"&&(u=Au());const c=`
    ${$u(n)}
    ${Su("live")}
    ${a?Bu(t):""}
    ${a?Ru(e):""}
    ${a?ju(e):""}
    ${i?Iu(t):""}
    ${a?Ou(t,e):""}
    ${a?Mu(t,e):""}
    ${a?Lu(t,e):""}
    ${u}
  `;return _("PIKK Live",c,{lead:"Following · Clips · Channels · Categories → Shorts · Request Spotlight · TEST MODE.",badge:a?"LIVE":void 0})}const Wa=[];let Pa=!1;function Gu(e,t){Wa.push(t),bo(e)}function bo(e){if(Pa)return;const t=e.querySelector("#liveGiftOverlay");if(!t){Wa.length=0;return}const s=Wa.shift();if(!s)return;Pa=!0;const i=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?900:s.tier==="cinematic"?4200:s.tier==="premium"?2800:1600;t.innerHTML=`
    <div class="lg-overlay-card lg-tier-${o(s.tier||"small")}" data-slug="${o(s.slug)}">
      <div class="lg-overlay-sticker">${it(s.slug)}</div>
      <div class="lg-overlay-copy">
        <strong>${o(s.name)}</strong>
        <span>@${o(s.fromUser)} · ${o($e(s.coins))} coins</span>
        <span class="muted lg-overlay-brief">${o(s.animation||"")}</span>
      </div>
    </div>`,t.classList.add("is-on"),window.setTimeout(()=>{t.classList.remove("is-on"),t.innerHTML="",Pa=!1,bo(e)},i)}function Uu(e){e.querySelectorAll(".lg-buy").forEach(t=>{t.addEventListener("click",()=>{const s=Yn(Number(t.dataset.coins));if((s==null?void 0:s.error)==="bad_package")return h("Unknown coin pack");if(s!=null&&s.error)return h(String(s.error));h(`+${$e(s.pack.coins)} coins · ${ye(s.pack.usd)} · TEST MODE`),ve()})}),e.querySelectorAll(".lg-gift").forEach(t=>{t.addEventListener("click",()=>{var l,u,c;const s=t.dataset.slug,a=t.dataset.confirm==="1",i=ii.find(p=>p.slug===s);if(!i)return h("Gift not found");if(a&&!window.confirm(`Send ${i.name} for ${$e(i.coins)} coins (${ye(i.usd)})?
TEST MODE · demo coins only`))return;const n=(l=L().live)==null?void 0:l.id,r=hl({liveId:n,slug:s});if((r==null?void 0:r.error)==="signin")return h("Sign in first");if((r==null?void 0:r.error)==="offline")return h("Not live");if((r==null?void 0:r.error)==="insufficient")return h(`Need ${$e(r.need)} coins — buy a pack below · TEST MODE`);if((r==null?void 0:r.error)==="bad_gift")return h("Unknown gift");if(r!=null&&r.error)return h(String(r.error));Gu(e,{slug:i.slug,name:i.name,coins:i.coins,tier:i.tier,animation:i.animation,fromUser:((u=r.entry)==null?void 0:u.fromUser)||((c=L().user)==null?void 0:c.username)||"you"}),h(`Sent ${i.name} · ${$e(i.coins)} coins · TEST MODE`),window.setTimeout(()=>ve(),200)})})}function Vu(e){var r,l;const t=e.querySelector("#lsrPacks"),s=e.querySelector("#lsrTitleFields");if(!t||!s)return;let a=1;const i=()=>{const u=a,c=Array.from({length:u},(p,m)=>`<div class="field"><label>Song ${m+1}</label>
        <input class="lsr-title-input" data-i="${m}" maxlength="80" placeholder="Song title…" /></div>`).join("");s.innerHTML=c},n=u=>{a=Number(u)||1,t.querySelectorAll(".lsr-pack").forEach(c=>{const p=Number(c.dataset.pack)===a;c.classList.toggle("on",p),c.setAttribute("aria-pressed",p?"true":"false")}),i()};t.querySelectorAll(".lsr-pack").forEach(u=>{u.addEventListener("click",()=>n(u.dataset.pack))}),n(1),(r=e.querySelector("#lsrSeedWallet"))==null||r.addEventListener("click",()=>{Qs(50,"Song request demo credit · TEST MODE"),h("+$50 wallet demo · TEST MODE"),ve()}),(l=e.querySelector("#lsrSubmit"))==null||l.addEventListener("click",()=>{const u=Array.from(e.querySelectorAll(".lsr-title-input")).map(p=>p.value),c=nl({pack:a,titles:u});if((c==null?void 0:c.error)==="signin")return h("Sign in first");if((c==null?void 0:c.error)==="offline")return h("Not live");if((c==null?void 0:c.error)==="bad_pack")return h("Pick a pack");if((c==null?void 0:c.error)==="title_count")return h(`Enter ${c.need} song title${c.need>1?"s":""}`);if((c==null?void 0:c.error)==="insufficient")return h(`Need ${ye(c.need)} — tap + $50 demo credit · TEST MODE`);if(c!=null&&c.error)return h(String(c.error));h(`Song request submitted · ${ye(c.entry.price)} · TEST MODE`),ve()}),e.querySelectorAll(".lsr-play").forEach(u=>{u.addEventListener("click",()=>{var b;const c=u.dataset.rid,p=Number(u.dataset.si),g=si((b=L().live)==null?void 0:b.id).find(y=>y.requestId===c&&y.songIndex===p);let f;if((g==null?void 0:g.status)==="playing"){if(f=ll(c,p),(f==null?void 0:f.error)==="host_only")return h("Host only");if(f!=null&&f.error)return h(String(f.error));h("Marked played · TEST MODE")}else{if(f=rl(c,p),(f==null?void 0:f.error)==="host_only")return h("Host only");if(f!=null&&f.error)return h(String(f.error));h("Now playing · TEST MODE")}ve()})}),e.querySelectorAll(".lsr-skip").forEach(u=>{u.addEventListener("click",()=>{const c=ol(u.dataset.rid,Number(u.dataset.si));if((c==null?void 0:c.error)==="host_only")return h("Host only");if(c!=null&&c.error)return h(String(c.error));h("Skipped · TEST MODE"),ve()})})}function zu(e){var s,a,i,n,r,l,u,c;e.querySelectorAll(".hot-live-watch").forEach(p=>{p.addEventListener("click",()=>{Ca();const m=p.dataset.host||"creator",g=p.dataset.id||"",f=e.querySelector(`.hot-live-card[data-live-id="${CSS.escape(g)}"]`);e.querySelectorAll(".hot-live-card.is-watching").forEach(b=>b.classList.remove("is-watching")),f==null||f.classList.add("is-watching"),h(`Watching @${m} · demo only`)})}),e.querySelectorAll(".hot-live-spike").forEach(p=>{p.addEventListener("click",()=>{var b;const m=p.dataset.id,g=qd(m);if((g==null?void 0:g.error)==="missing")return h("Live not found");if(g!=null&&g.error)return h(String(g.error));const f=((b=g.live)==null?void 0:b.hostName)||"creator";h(g.deduped?`Spike @${f} · Admin alert already open`:`Spike @${f} · Admin engagement alert queued`),ve()})}),(s=e.querySelector("#liveStart"))==null||s.addEventListener("click",()=>{var b,y,v,w,$;const p=(y=(b=e.querySelector("#liveTitle"))==null?void 0:b.value)==null?void 0:y.trim(),m=Gi(p);if((m==null?void 0:m.error)==="signin")return h("Sign in first");if((m==null?void 0:m.error)==="already_live")return h("Already live");const g=(w=(v=e.querySelector("#liveGoalNameGo"))==null?void 0:v.value)==null?void 0:w.trim(),f=Number(($=e.querySelector("#liveGoalAmtGo"))==null?void 0:$.value);if(g&&f>0){const C=Zn({name:g,targetAmount:f});(C==null?void 0:C.error)==="signin"?h("Sign in to set goal"):C!=null&&C.error?h("Goal not set · "+C.error):h(`Live goal set · $${f} · 24h · TEST MODE`)}Ca(),h("You are live · TEST MODE"),ve()}),(a=e.querySelector("#liveRestart"))==null||a.addEventListener("click",()=>{var g;const p="PIKK Live · "+(((g=L().user)==null?void 0:g.username)||"Demo"),m=Gi(p);if(m!=null&&m.error)return h(String(m.error));Ca(),h("Back live · TEST MODE"),ve()}),(i=e.querySelector("#liveEnd"))==null||i.addEventListener("click",()=>{el(),Xr(),h("Stream ended"),ve()}),(n=e.querySelector("#liveBumpViewers"))==null||n.addEventListener("click",()=>{const p=tl(),m=e.querySelector("#liveViewers");m&&p&&(m.textContent=Re(p.viewers||0)),h("Viewers updated (stub)")}),(r=e.querySelector("#liveTip"))==null||r.addEventListener("click",p=>{const m=p.currentTarget,g=Hn({kind:"tip",amount:Number(m.dataset.amt)||1});if((g==null?void 0:g.error)==="signin")return h("Sign in first");if((g==null?void 0:g.error)==="offline")return h("Not live");h("Tip sent · demo"),ve()});const t=()=>{var f;const p=e.querySelector("#liveChatInput"),m=(f=p==null?void 0:p.value)==null?void 0:f.trim();if(!m)return h("Type a message");const g=sl(m);if((g==null?void 0:g.error)==="signin")return h("Sign in first");if((g==null?void 0:g.error)==="offline")return h("Not live");(g==null?void 0:g.error)!=="empty"&&(p&&(p.value=""),ve())};(l=e.querySelector("#liveChatSend"))==null||l.addEventListener("click",t),(u=e.querySelector("#liveChatInput"))==null||u.addEventListener("keydown",p=>{p.key==="Enter"&&t()}),(c=e.querySelector("#liveFocusGifts"))==null||c.addEventListener("click",()=>{var p;(p=e.querySelector("#liveGifts"))==null||p.scrollIntoView({behavior:"smooth",block:"start"})}),Uu(e),Vu(e),Hu(e)}function Hu(e){var t;(t=e.querySelector("#liveGoalSave"))==null||t.addEventListener("click",()=>{var n,r,l;const s=(r=(n=e.querySelector("#liveGoalName"))==null?void 0:n.value)==null?void 0:r.trim(),a=Number((l=e.querySelector("#liveGoalAmt"))==null?void 0:l.value),i=Zn({name:s,targetAmount:a});if((i==null?void 0:i.error)==="signin")return h("Sign in first");if((i==null?void 0:i.error)==="bad_name")return h("Enter a goal name");if((i==null?void 0:i.error)==="bad_amount")return h("Enter a goal amount ($)");if(i!=null&&i.error)return h(String(i.error));h(`Goal live · $${i.goal.targetAmount} · 24h window · TEST MODE`),ve()}),e.querySelectorAll(".live-goal-custom-form").forEach(s=>{s.addEventListener("submit",a=>{var r;a.preventDefault();const i=Number((r=s.querySelector(".live-goal-custom-coins"))==null?void 0:r.value);if(!Number.isSafeInteger(i)||i<1||i>1e6)return h("Enter 1–1,000,000 whole coins");const n=Ys(s.dataset.goalId,i);if((n==null?void 0:n.error)==="signin")return h("Sign in first");if((n==null?void 0:n.error)==="insufficient")return h("Not enough demo coins");if(n!=null&&n.error)return h("Donation unavailable · TEST MODE");h("Custom donation sent · TEST MODE"),ve()})}),e.querySelectorAll(".live-goal-donate").forEach(s=>{s.addEventListener("click",()=>{var l;const a=s.dataset.goalId,i=Number(s.dataset.coins),n=Ys(a,i);if((n==null?void 0:n.error)==="signin")return h("Sign in first");if((n==null?void 0:n.error)==="insufficient")return h(`Need ${$e(n.need)} coins — buy a pack in Gifts · TEST MODE`);if((n==null?void 0:n.error)==="expired")return h("Goal ended · 24h window over");if((n==null?void 0:n.error)==="unknown_goal")return h("Goal not found");if((n==null?void 0:n.error)==="invalid_amount")return h("Pick a donate amount");if(n!=null&&n.error)return h(String(n.error));const r=((l=n.donated)==null?void 0:l.usd)??i/50;h(`Donated ${$e(i)} coins ($${Number(r).toFixed(2)}) · TEST MODE`),ve()})})}const Gs=fe.filter(e=>["dirty-money","93","no-love"].includes(e.id)).map(e=>({id:e.id,title:e.title,artist:"DatBoiSkeet",url:e.youtube,thumbnail:`https://i.ytimg.com/vi/${encodeURIComponent(new URL(e.youtube).searchParams.get("v"))}/hqdefault.jpg`})),wn=[{id:"videos",label:"Videos"},{id:"clips",label:"Viral clips"},{id:"songs",label:"Songs"},{id:"photos",label:"Photos"}];function Wu(){const e=Gs[0],t=Gs.map((s,a)=>`
    <button type="button" class="pikk-viral-choice${a===0?" is-selected":""}"
      data-viral-pick="${a}" aria-pressed="${a===0}">
      <span class="pikk-viral-choice-num">${String(a+1).padStart(2,"0")}</span>
      <img class="pikk-viral-choice-thumb" src="${o(s.thumbnail)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer">
      <span class="pikk-viral-choice-copy"><strong>${o(s.title)}</strong><small>${o(s.artist)} · Original YouTube source</small></span>
      <span class="pikk-viral-choice-arrow" aria-hidden="true">↗</span>
    </button>`).join("");return _("PIKK Viral Live",`
    <div id="pikkViralPreview" class="pikk-viral-page">
      <section class="pikk-viral-hero" aria-label="PIKK Viral Live channel preview">
        <div class="pikk-viral-hero-copy">
          <span class="pikk-viral-kicker"><span aria-hidden="true" class="pikk-viral-signal"></span> PIKK 24/7 · CHANNEL PREVIEW</span>
          <h2>What's viral.<br><em>All in one place.</em></h2>
          <p>Discover clips, music, videos and creators in one nonstop destination when the licensed channel launches.</p>
          <div class="pikk-viral-hero-actions">
            <a class="btn primary" href="#/live">Explore PIKK Live</a>
            <a class="btn ghost" href="#/shorts">Explore Clips</a>
          </div>
        </div>
        <div class="pikk-viral-hero-mark" aria-hidden="true"><img class="pikk-viral-hero-logo" src="/brand/pikk-official-approved.jpg" alt="" decoding="async" loading="eager"></div>
      </section>

      <div class="pikk-viral-notice" role="status">
        <strong>PREVIEW · NOT BROADCASTING</strong>
        <span>Real-time viewer counts, live chat, engagement ranking and 24/7 playback are not connected. Nothing here is represented as live.</span>
      </div>

      <nav class="pikk-viral-tabs" aria-label="Viral Live content types" role="tablist">
        ${wn.map((s,a)=>`<button type="button" role="tab" data-viral-type="${s.id}" aria-selected="${a===0}" aria-controls="viral-panel-${s.id}" id="viral-tab-${s.id}">${s.label}</button>`).join("")}
      </nav>

      <section id="viral-panel-videos" data-viral-panel="videos" role="tabpanel" aria-labelledby="viral-tab-videos">
        <div class="pikk-viral-stage" aria-label="Original video discovery">
          <div class="pikk-viral-stage-art"><img id="pikkViralThumbnail" src="${o(e.thumbnail)}" alt="" decoding="async" referrerpolicy="no-referrer"><span class="pikk-viral-stage-play" aria-hidden="true">▶</span><small>ORIGINAL VIDEO · SOURCE PREVIEW</small></div>
          <div class="pikk-viral-stage-body">
            <span class="pikk-viral-stage-eyebrow">FEATURED SOURCE · NOT A LIVESTREAM</span>
            <h3 id="pikkViralTitle" aria-live="polite">${o(e.title)}</h3>
            <p id="pikkViralCreator">${o(e.artist)} · Watch from the original publisher</p>
            <a class="btn primary" id="pikkViralSource" href="${o(e.url)}" target="_blank" rel="noopener noreferrer">Watch original on YouTube</a>
            <p class="pikk-viral-caption">Opening the source does not grant PIKK rebroadcast or music licensing rights.</p>
          </div>
        </div>
        <div class="pikk-viral-section-head"><h3>Up next · source library</h3><span>Manual preview · ${Gs.length} existing music videos</span></div>
        <div class="pikk-viral-queue" id="pikkViralQueue">${t}</div>
      </section>

      ${wn.filter(s=>s.id!=="videos").map(s=>`
        <section class="pikk-viral-empty" id="viral-panel-${s.id}" data-viral-panel="${s.id}" role="tabpanel" aria-labelledby="viral-tab-${s.id}" hidden>
          <span class="pikk-viral-empty-symbol" aria-hidden="true">◇</span>
          <h3>${o(s.label)} are being prepared</h3>
          <p>No approved items are queued in this category yet. Creator permission, licensing and moderation must be confirmed before content appears here.</p>
          <a class="btn ghost" href="#/shorts">Browse existing PIKK Clips</a>
        </section>`).join("")}

      <section class="pikk-viral-safety" aria-label="Channel launch requirements">
        <div><span class="pikk-viral-section-kicker">CREATOR FIRST</span><h3>Trending, with permission.</h3><p>Creators will be credited and linked to their profiles. The planned feed will rotate by engagement quality, velocity and freshness, not views alone.</p></div>
        <ul>
          <li>Explicit permission to rebroadcast every video, photo and song</li>
          <li>Music and third-party rights clearance before playback</li>
          <li>Moderation, creator opt-out, removal and duplicate checks</li>
          <li>Real-time chat, viewer counts and Up Next only when backed by a live service</li>
        </ul>
      </section>
    </div>
  `,{lead:"Discover the planned 24/7 viral channel · preview only"})}function Yu(e){const t=e.querySelector("#pikkViralPreview");t&&(t.querySelectorAll("[data-viral-pick]").forEach(s=>{s.addEventListener("click",()=>{const a=Number(s.dataset.viralPick),i=Gs[a];i&&(t.querySelector("#pikkViralTitle").textContent=i.title,t.querySelector("#pikkViralCreator").textContent=i.artist+" · Watch from the original publisher",t.querySelector("#pikkViralSource").href=i.url,t.querySelector("#pikkViralThumbnail").src=i.thumbnail,t.querySelectorAll("[data-viral-pick]").forEach(n=>{const r=n===s;n.classList.toggle("is-selected",r),n.setAttribute("aria-pressed",String(r))}))})}),t.querySelectorAll("[data-viral-type]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.viralType;t.querySelectorAll("[data-viral-type]").forEach(i=>{i.setAttribute("aria-selected",String(i===s))}),t.querySelectorAll("[data-viral-panel]").forEach(i=>{i.hidden=i.dataset.viralPanel!==a})})}))}function Xt(){R("#/marketplace")}const Ju={pending:"Pending",approved:"Approved",rejected:"Rejected"},Qu=[{v:"sponsored_post",label:"Sponsored post"},{v:"livestream_promo",label:"Livestream promo"},{v:"affiliate",label:"Affiliate link"},{v:"storefront",label:"Product storefront"}];function Xu(){const{brandApps:e,user:t}=L(),s=kl(),a=s.filter(l=>l.active),i=a.length?a.map(l=>`
      <article class="card market-listing" data-id="${o(l.id)}">
        <div class="row wrap">
          <span class="chip">Sponsored</span>
          <span class="chip">${o(l.disclosure||"Paid partnership")}</span>
          <span class="muted spacer" style="text-align:right;font-size:12px">${j(l.at)}</span>
        </div>
        <h3 style="margin:8px 0 4px">${o(l.title)}</h3>
        <p class="muted" style="margin:0 0 6px">${o(l.brand)}</p>
        <p style="margin:0 0 10px;font-size:14px">${o(l.blurb||"")}</p>
        <div class="row wrap">
          ${l.url?`<a class="btn" href="${o(l.url)}" target="_blank" rel="noopener">Visit offer</a>`:""}
          <button class="btn ghost listing-toggle" data-id="${o(l.id)}" data-active="0">Hide · demo</button>
        </div>
      </article>`).join(""):'<div class="card"><p class="muted" style="margin:0">No active sponsored listings yet. Apply as a brand or create a demo listing below.</p></div>',n=e.length?e.map(l=>`
      <div class="card" style="margin:0 0 10px;background:#12121a" data-app="${o(l.id)}">
        <div class="row wrap">
          <strong>${o(l.brand)}</strong>
          <span class="chip">${o(Ju[l.status]||l.status)}</span>
          <span class="muted spacer" style="text-align:right">${j(l.at)}</span>
        </div>
        <p class="muted" style="margin:6px 0;font-size:12px">${o(l.email)} · ${o(l.campaign)} · budget ${o(l.budget||"—")}</p>
        <p style="font-size:13px;margin:0 0 8px">${o((l.pitch||"").slice(0,160))}</p>
        <div class="row wrap">
          <button class="btn primary brand-status" data-id="${o(l.id)}" data-status="approved">Approve</button>
          <button class="btn ghost brand-status" data-id="${o(l.id)}" data-status="rejected">Reject</button>
          ${l.status==="approved"?`<button class="btn brand-to-listing" data-id="${o(l.id)}" data-brand="${o(l.brand)}" data-url="${o(l.url||"")}" data-pitch="${o(l.pitch||"")}">Create listing</button>`:""}
        </div>
      </div>`).join(""):'<p class="muted">No brand applications yet.</p>',r=`
    <div class="card">
      <h3>Featured offers</h3>
      <p class="muted" style="margin:0 0 10px">Commission example: marketplace 85/15 · sponsored campaigns 80/20. Disclosures required.</p>
    </div>
    ${i}

    <div class="card">
      <h3>Apply as Brand · TEST MODE</h3>
      <p class="muted">Demo application — stored in localStorage (<code>dbs_v1.brandApps</code>). No real billing.</p>
      <div class="grid-2">
        <div class="field"><label>Brand / business *</label><input id="mBrand" required /></div>
        <div class="field"><label>Contact name</label><input id="mContact" /></div>
      </div>
      <div class="grid-2">
        <div class="field"><label>Email *</label><input id="mEmail" type="email" required /></div>
        <div class="field"><label>Budget (approx)</label><input id="mBudget" placeholder="e.g. $500" /></div>
      </div>
      <div class="field"><label>Campaign type</label>
        <select id="mCampaign">
          ${Qu.map(l=>`<option value="${l.v}">${o(l.label)}</option>`).join("")}
        </select>
      </div>
      <div class="field"><label>Offer / product URL</label><input id="mUrl" placeholder="https://" /></div>
      <div class="field"><label>Pitch</label><textarea id="mPitch" placeholder="What should creators promote?"></textarea></div>
      <button class="btn primary block" id="mSubmit">Submit application</button>
      <p class="chip" style="margin-top:10px">Signed in as ${o((t==null?void 0:t.username)||"guest")}</p>
    </div>

    <div class="card">
      <h3>Create sponsored listing · demo</h3>
      <p class="muted">Skip the application queue — publish a listing directly for UI testing.</p>
      <div class="grid-2">
        <div class="field"><label>Title *</label><input id="lTitle" placeholder="Summer drop · 20% off" /></div>
        <div class="field"><label>Brand *</label><input id="lBrand" placeholder="Brand name" /></div>
      </div>
      <div class="field"><label>Blurb</label><textarea id="lBlurb" placeholder="Short offer copy"></textarea></div>
      <div class="field"><label>URL</label><input id="lUrl" placeholder="https://" /></div>
      <div class="field"><label>Disclosure</label><input id="lDisc" value="Paid partnership · TEST MODE" /></div>
      <button class="btn primary block" id="lCreate">Publish listing</button>
    </div>

    <div class="card">
      <h3>Applications (this device)</h3>
      ${n}
      <p class="muted" style="font-size:12px;margin-top:8px">Demo approve / reject here. Approved apps can spawn a listing.</p>
    </div>

    ${s.some(l=>!l.active)?`<div class="card">
            <h3>Hidden listings</h3>
            ${s.filter(l=>!l.active).map(l=>`<div class="row wrap" style="margin-bottom:8px">
                  <span>${o(l.title)} · ${o(l.brand)}</span>
                  <button class="btn ghost listing-toggle" data-id="${o(l.id)}" data-active="1">Show</button>
                </div>`).join("")}
          </div>`:""}
  `;return _("Marketplace",r,{lead:"Brand applications & sponsored listings · localStorage demo."})}function Zu(e){var t,s;(t=e.querySelector("#mSubmit"))==null||t.addEventListener("click",()=>{var i,n,r,l,u,c,p;const a=vl({brand:(i=e.querySelector("#mBrand"))==null?void 0:i.value,contact:(n=e.querySelector("#mContact"))==null?void 0:n.value,email:(r=e.querySelector("#mEmail"))==null?void 0:r.value,budget:(l=e.querySelector("#mBudget"))==null?void 0:l.value,campaign:(u=e.querySelector("#mCampaign"))==null?void 0:u.value,url:(c=e.querySelector("#mUrl"))==null?void 0:c.value,pitch:(p=e.querySelector("#mPitch"))==null?void 0:p.value});if((a==null?void 0:a.error)==="required")return h("Brand and email required");h("Application saved"),Xt()}),e.querySelectorAll(".brand-status").forEach(a=>{a.addEventListener("click",()=>{bl(a.dataset.id,a.dataset.status),h("Marked "+a.dataset.status),Xt()})}),e.querySelectorAll(".brand-to-listing").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.brand||"Brand",n=zi({title:`${i} · sponsored`,brand:i,blurb:a.dataset.pitch||"Sponsored offer from approved brand application.",url:a.dataset.url||"",disclosure:"Paid partnership · TEST MODE",brandAppId:a.dataset.id});if(n!=null&&n.error)return h("Could not create listing");h("Listing published"),Xt()})}),(s=e.querySelector("#lCreate"))==null||s.addEventListener("click",()=>{var i,n,r,l,u;const a=zi({title:(i=e.querySelector("#lTitle"))==null?void 0:i.value,brand:(n=e.querySelector("#lBrand"))==null?void 0:n.value,blurb:(r=e.querySelector("#lBlurb"))==null?void 0:r.value,url:(l=e.querySelector("#lUrl"))==null?void 0:l.value,disclosure:(u=e.querySelector("#lDisc"))==null?void 0:u.value});if((a==null?void 0:a.error)==="required")return h("Title and brand required");h("Listing published"),Xt()}),e.querySelectorAll(".listing-toggle").forEach(a=>{a.addEventListener("click",()=>{yl(a.dataset.id,a.dataset.active==="1"),h(a.dataset.active==="1"?"Listing shown":"Listing hidden"),Xt()})})}function ue(e){R(e||"#/messages")}function em(e){const t=e.messages||[];if(!t.length)return"No messages yet";const s=t[t.length-1];return(s.priority?"⚡ ":"")+(s.text||"").slice(0,80)}function tm(){return _("Messages",`<section class="pikk-msg-flow-hero" aria-label="PIKK messages sign-in">
      <span class="pikk-msg-flow-kicker">PIKK CONNECT · PRIVATE MESSAGES</span>
      <h2>Your conversations. <em>Your circle.</em></h2>
      <p>Try DMs, group conversations and the DatBoiSkeet team inbox with a local demo account.</p>
      <span class="chip">TEST MODE · No server messaging</span>
    </section>
    <div class="card pikk-msg-flow-panel">
      <h3>Sign in required</h3>
      <p class="muted">Private DMs, team inbox, and group chats need a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Private messaging & team inbox · TEST MODE"})}function sm(e){const t=oi(),s=t.filter(n=>Js(n)>0),a=L().messagePrefs||{allowDMs:!0,allowRequests:!0},i=t.map(n=>{const r=n.kind==="group",l=!r&&n.peerId==="dbs",u=[r?'<span class="chip">Group</span>':"",l?'<span class="chip">Team</span>':"",n.request?'<span class="chip">Request</span>':"",n.muted?'<span class="chip">Muted</span>':"",n.blocked?'<span class="chip">Blocked</span>':""].filter(Boolean).join(" "),c=Js(n),p=c?`<span class="chip msg-unread-chip" aria-label="${c} unread">${c}</span>`:"";return`
      <button type="button" class="msg-thread-row${c?" has-unread":""}" data-search="${o(String(n.peerName||n.peerId).toLowerCase())}" data-unread="${c>0}" data-open-thread="${o(n.id)}">
        <div class="pikk-msg-avatar" aria-hidden="true">${o(String(n.peerName||n.peerId||"?").slice(0,1).toUpperCase())}</div>
        <div class="pikk-msg-thread-body"><div class="msg-thread-top">
          <strong>${o(n.peerName||n.peerId)}</strong>
          <span class="muted">${o(j(n.updatedAt||0))}</span>
        </div>
        <div class="msg-thread-preview muted">${o(em(n))}</div>
        <div class="msg-thread-chips">${p}${u}</div></div>
      </button>`}).join("");return`
    <section class="pikk-messages-hero" aria-label="PIKK inbox">
      <div><p class="kicker">PIKK CONNECT · MESSAGES</p><h2>Your conversations.</h2><p>Stay connected with people, groups, and the DatBoiSkeet team.</p></div>
      <span class="pikk-messages-hero-mark" aria-hidden="true">✉</span>
    </section>
    <div class="pikk-msg-tools">
      <label for="pikkMsgSearch">Search conversations</label>
      <input id="pikkMsgSearch" type="search" placeholder="Search messages..." autocomplete="off" aria-controls="msgInbox" />
      <label class="row" style="gap:8px;align-items:center;margin-top:8px" for="pikkMsgUnreadOnly"><input id="pikkMsgUnreadOnly" type="checkbox" aria-controls="msgInbox" /> Unread only (${s.length})</label>
      <div class="pikk-msg-tool-actions"><button type="button" class="btn ghost" id="pikkMsgClearFilters" aria-controls="msgInbox" hidden>Clear filters</button><button type="button" class="btn primary" id="pikkNewChatTop">+ New chat</button><button type="button" class="btn ghost" id="pikkGroupTop">Group chat</button></div>
    </div>
    <div class="card msg-team-card">
      <h3>DatBoiSkeet · Team inbox</h3>
      <p class="muted" style="margin:0 0 10px">Free inquiry or <strong>Priority $2.99 TEST MODE</strong> (not charged). Priority = faster review, not a guaranteed personal reply.</p>
      <button type="button" class="btn primary" id="msgOpenTeam">Open team chat</button>
    </div>

    <div class="card">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <h3 style="margin:0">Inbox</h3>
        <div class="row wrap" style="gap:8px">
          <button type="button" class="btn ghost" id="msgMarkAllRead" ${s.length?"":"disabled"}>Mark all read${s.length?` (${s.length})`:""}</button>
          <button type="button" class="btn" id="msgNewChat">New chat</button>
          <button type="button" class="btn ghost" id="msgOpenGroup">DBS Fans group</button>
        </div>
      </div>
      <div class="msg-inbox" id="msgInbox">
        ${i||`<div class="msg-empty">
            <p class="muted">No conversations yet.</p>
            <button type="button" class="btn primary" id="msgEmptyNew">Start a chat</button>
          </div>`}
        <p id="pikkMsgNoResults" class="pikk-msg-no-results" role="status" hidden>No conversations match your search.</p>
      </div>
    </div>

    <div class="card">
      <h3>Privacy stubs</h3>
      <p class="muted" style="margin:0 0 10px">Demo flags only — no real moderation queue.</p>
      <div class="row wrap" style="gap:8px">
        <label class="toggle"><span>Allow DMs</span>
          <input type="checkbox" id="msgPrefDMs" ${a.allowDMs?"checked":""}/>
        </label>
        <label class="toggle"><span>Allow requests</span>
          <input type="checkbox" id="msgPrefRequests" ${a.allowRequests?"checked":""}/>
        </label>
      </div>
    </div>
  `}function am(){return`
    <section class="pikk-msg-flow-hero" aria-label="Start a PIKK conversation">
      <span class="pikk-msg-flow-kicker">PIKK CONNECT · NEW CONVERSATION</span>
      <h2>Start a conversation. <em>Stay connected.</em></h2>
      <p>Choose a demo contact below. Mutual follows open a DM; other contacts start a message request.</p>
      <span class="chip">TEST MODE · Browser-local conversations</span>
    </section>
    <div class="card pikk-msg-flow-panel">
      <div class="row" style="justify-content:space-between">
        <h3 style="margin:0">Start chat</h3>
        <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
      </div>
      <p class="muted">Demo peers. Mutual follows open a DM; others create a <em>request</em> thread (still usable in TEST MODE).</p>
    </div>
    <section class="pikk-msg-contact-grid" aria-label="Available demo contacts">${ws().map(s=>{const a=s.team||tr(s.id),i=s.team?"Team inbox":a?"Message":"Message request";return`
      <article class="card msg-contact pikk-msg-contact-card">
        <div class="msg-contact-head">
          <span class="pikk-msg-contact-avatar" aria-hidden="true">${o(String(s.username||"?").slice(0,1).toUpperCase())}</span>
          <strong>${o(s.username)}</strong>
          ${s.team?'<span class="chip">Official</span>':a?'<span class="chip">Mutual</span>':'<span class="chip">Request</span>'}
        </div>
        <p class="muted" style="margin:6px 0 10px">${o(s.bio||"")}</p>
        <button type="button" class="btn ${s.team?"primary":""}" data-start-peer="${o(s.id)}" data-peer-name="${o(s.username)}">${o(i)}</button>
      </article>`}).join("")}</section>
  `}function im(){return`
    <section class="pikk-msg-flow-hero" aria-label="DatBoiSkeet team inbox">
      <span class="pikk-msg-flow-kicker">PIKK CONNECT · CREATOR TEAM</span>
      <h2>Reach the team. <em>One inbox.</em></h2>
      <p>Send a local demo inquiry to the DatBoiSkeet team. Priority is a test-mode flag, never a charge.</p>
      <span class="chip">TEST MODE · No real delivery</span>
    </section>
    <div class="card msg-team-card pikk-msg-flow-panel">
      <div class="row" style="justify-content:space-between">
        <h3 style="margin:0">Team inbox</h3>
        <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
      </div>
      <p class="muted">Message DatBoiSkeet / authorized team. Free inquiry stays in the normal queue; Priority ($2.99 TEST MODE — not charged) flags the thread for priority review only.</p>
      <div class="row wrap" style="gap:8px;margin-top:8px">
        <button type="button" class="btn primary" id="msgTeamFree">Free inquiry</button>
        <button type="button" class="btn" id="msgTeamPriority">Priority $2.99 · TEST MODE</button>
      </div>
    </div>
  `}function nm(e,{teamPriorityHint:t=!1}={}){const s=L().user,a=e.kind==="group",i=!a&&e.peerId==="dbs",n=!!e.blocked,r=(e.messages||[]).map(c=>`
      <div class="msg-bubble ${c.from===(s==null?void 0:s.id)?"mine":""} ${c.priority?"priority":""}">
        <div class="msg-bubble-meta">
          <strong>${o(c.fromName||c.from)}</strong>
          ${c.priority?'<span class="chip priority-chip">Priority</span>':""}
          <span class="muted">${o(j(c.at))}</span>
        </div>
        <div class="msg-bubble-text">${o(c.text)}</div>
      </div>`).join(""),l=e.request?'<div class="msg-banner">Message request · recipient approval stub (demo still delivers locally)</div>':"",u=t?'<div class="msg-banner priority">Next send can use Priority $2.99 TEST MODE (wallet note only — not charged).</div>':"";return`
    <section class="pikk-msg-flow-hero pikk-msg-flow-hero-thread" aria-label="Current PIKK conversation">
      <span class="pikk-msg-flow-kicker">PIKK CONNECT · ${a?"GROUP CHAT":i?"TEAM INBOX":"DIRECT MESSAGES"}</span>
      <h2>${o(e.peerName||e.peerId)}</h2>
      <p>Browser-local conversation preview · Messages are not delivered to other accounts.</p>
      <span class="chip">TEST MODE</span>
    </section>
    <div class="card msg-thread-head pikk-msg-flow-panel">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <div>
          <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
          <h3 style="margin:8px 0 0">${o(e.peerName||e.peerId)}</h3>
          <div class="row wrap" style="gap:6px;margin-top:6px">
            ${a?'<span class="chip">Group</span>':""}
            ${i?'<span class="chip">Team</span>':""}
            ${e.request?'<span class="chip">Request</span>':""}
            ${e.muted?'<span class="chip">Muted</span>':""}
            ${e.blocked?'<span class="chip">Blocked</span>':""}
          </div>
        </div>
        <div class="row wrap msg-privacy-btns" style="gap:6px">
          <button type="button" class="btn ghost" data-flag="mute">${e.muted?"Unmute":"Mute"}</button>
          <button type="button" class="btn ghost" data-flag="block">${e.blocked?"Unblock":"Block"}</button>
          <button type="button" class="btn ghost danger" data-flag="report">Report</button>
        </div>
      </div>
    </div>
    ${l}
    ${u}
    <div class="card msg-thread-card pikk-msg-flow-panel">
      <div class="msg-thread" id="msgThread">${r||'<p class="muted">No messages yet — say hi.</p>'}</div>
      ${n?'<p class="muted" style="margin-top:10px">Thread blocked · composer disabled (demo).</p>':`<div class="msg-composer">
               <input id="msgInput" placeholder="${i?"Write an inquiry…":"Message…"}" maxlength="500" />
               <button type="button" class="btn primary" id="msgSend">Send</button>
               ${i?'<button type="button" class="btn" id="msgSendPriority" title="TEST MODE — not charged">Priority $2.99</button>':""}
             </div>`}
    </div>
  `}function rm(e){var r,l,u;if(!L().user)return tm();ws(),li();const s=((r=e==null?void 0:e.query)==null?void 0:r.view)||"",a=((l=e==null?void 0:e.query)==null?void 0:l.t)||"",i=((u=e==null?void 0:e.query)==null?void 0:u.priority)==="1";let n;if(a){const c=er(a);c?n=nm(c,{teamPriorityHint:i&&c.peerId==="dbs"}):n='<div class="card"><p class="muted">Thread not found.</p><button type="button" class="btn" id="msgBackInbox">← Inbox</button></div>'}else s==="new"?n=am():s==="team"?n=im():n=sm();return _("Messages",n,{lead:"DMs, group chats, and DatBoiSkeet team inbox · TEST MODE"})}function om(e){var u,c,p,m,g,f,b,y,v,w,$,C,k,I,T,G,x,Q;if(!L().user)return;const s=()=>ue("#/messages");(u=e.querySelector("#msgBackInbox"))==null||u.addEventListener("click",s),(c=e.querySelector("#msgMarkAllRead"))==null||c.addEventListener("click",()=>{const D=oi().filter(O=>Js(O)>0);D.length&&(D.forEach(O=>Hi(O.id)),h(`${D.length} conversation${D.length===1?"":"s"} marked read`),ue("#/messages"))}),(p=e.querySelector("#msgNewChat"))==null||p.addEventListener("click",()=>ue("#/messages?view=new")),(m=e.querySelector("#pikkNewChatTop"))==null||m.addEventListener("click",()=>ue("#/messages?view=new"));const a=()=>{var P,q;const D=String(((P=e.querySelector("#pikkMsgSearch"))==null?void 0:P.value)||"").trim().toLowerCase(),O=!!((q=e.querySelector("#pikkMsgUnreadOnly"))!=null&&q.checked);let z=0;e.querySelectorAll("#msgInbox [data-open-thread]").forEach(U=>{const Y=!D||String(U.dataset.search||"").includes(D),K=!O||U.dataset.unread==="true";U.hidden=!(Y&&K),U.hidden||z++});const F=e.querySelector("#pikkMsgNoResults");F&&(F.textContent=O?D?"No unread conversations match your search.":"No unread conversations.":"No conversations match your search.",F.hidden=z>0||!D&&!O);const M=e.querySelector("#pikkMsgClearFilters");M&&(M.hidden=!D&&!O)};(g=e.querySelector("#pikkMsgClearFilters"))==null||g.addEventListener("click",()=>{const D=e.querySelector("#pikkMsgSearch"),O=e.querySelector("#pikkMsgUnreadOnly");D&&(D.value=""),O&&(O.checked=!1),a(),D==null||D.focus()}),(f=e.querySelector("#pikkMsgSearch"))==null||f.addEventListener("input",a),(b=e.querySelector("#pikkMsgUnreadOnly"))==null||b.addEventListener("change",a),(y=e.querySelector("#msgEmptyNew"))==null||y.addEventListener("click",()=>ue("#/messages?view=new")),(v=e.querySelector("#msgOpenTeam"))==null||v.addEventListener("click",()=>ue("#/messages?view=team")),(w=e.querySelector("#pikkGroupTop"))==null||w.addEventListener("click",()=>{var D;return(D=e.querySelector("#msgOpenGroup"))==null?void 0:D.click()}),($=e.querySelector("#msgOpenGroup"))==null||$.addEventListener("click",()=>{const D=xl();if(D!=null&&D.error){h("Sign in required");return}h("Opened DBS Fans"),ue("#/messages?t="+encodeURIComponent(D.id))}),(C=e.querySelector("#msgTeamFree"))==null||C.addEventListener("click",()=>{const D=ds("dbs","DatBoiSkeet");if(D.error)return h("Sign in required");ue("#/messages?t="+encodeURIComponent(D.id))}),(k=e.querySelector("#msgTeamPriority"))==null||k.addEventListener("click",()=>{const D=ds("dbs","DatBoiSkeet");if(D.error)return h("Sign in required");ue("#/messages?t="+encodeURIComponent(D.id)+"&priority=1")}),e.querySelectorAll("[data-start-peer]").forEach(D=>{D.addEventListener("click",()=>{const O=D.dataset.startPeer,z=D.dataset.peerName||O;if(O==="dbs"){ue("#/messages?view=team");return}const F=ds(O,z);if(F.error)return h("Sign in required");F.request&&h("Request thread created · demo"),ue("#/messages?t="+encodeURIComponent(F.id))})}),e.querySelectorAll("[data-open-thread]").forEach(D=>{D.addEventListener("click",()=>{ue("#/messages?t="+encodeURIComponent(D.dataset.openThread))})}),(I=e.querySelector("#msgPrefDMs"))==null||I.addEventListener("change",D=>{Wi({allowDMs:!!D.target.checked}),h(D.target.checked?"DMs allowed":"DMs disabled (stub)")}),(T=e.querySelector("#msgPrefRequests"))==null||T.addEventListener("change",D=>{Wi({allowRequests:!!D.target.checked}),h(D.target.checked?"Requests allowed":"Requests disabled (stub)")});const i=new URLSearchParams(location.hash.split("?")[1]||"").get("t"),n=i?er(i):null;n&&Hi(n.id),e.querySelectorAll("[data-flag]").forEach(D=>{D.addEventListener("click",()=>{if(!n)return;const O=D.dataset.flag;if(O==="mute"){const z=Ea(n.id,{muted:!n.muted});h(z.muted?"Muted":"Unmuted"),ue("#/messages?t="+encodeURIComponent(n.id))}else if(O==="block"){const z=Ea(n.id,{blocked:!n.blocked});h(z.blocked?"Blocked":"Unblocked"),ue("#/messages?t="+encodeURIComponent(n.id))}else O==="report"&&(Ea(n.id,{report:!0}),h("Reported · stub (Guidelines §13)"),ue("#/messages?t="+encodeURIComponent(n.id)))})});const r=D=>{if(!n)return;const O=e.querySelector("#msgInput"),z=(O==null?void 0:O.value)||"";let F;if(n.kind==="group"?F=El(n.id,z):F=Sl(n.peerId,n.peerName,z,{priority:!!D}),(F==null?void 0:F.error)==="empty")return h("Type a message");if(F!=null&&F.error)return h("Could not send");h(D?"Priority sent · TEST MODE $2.99 not charged":"Sent"),ue("#/messages?t="+encodeURIComponent(n.id))};(G=e.querySelector("#msgSend"))==null||G.addEventListener("click",()=>r(!1)),(x=e.querySelector("#msgSendPriority"))==null||x.addEventListener("click",()=>r(!0)),(Q=e.querySelector("#msgInput"))==null||Q.addEventListener("keydown",D=>{D.key==="Enter"&&(D.preventDefault(),r(!1))});const l=e.querySelector("#msgThread");l&&(l.scrollTop=l.scrollHeight)}const Sn=Object.freeze({releases:!0,lives:!0,messages:!0,quietHours:!1}),wt=Object.freeze([{key:"releases",title:"New music releases",detail:"Keep track of new DatBoiSkeet music and official drops.",group:"discover"},{key:"lives",title:"Livestreams",detail:"Choose whether you want live-session updates.",group:"discover"},{key:"messages",title:"Messages",detail:"Control conversation notification preferences.",group:"social"},{key:"quietHours",title:"Quiet hours",detail:"Save your preference for a quieter experience.",group:"social"}]);function $n(e,t){const s=!!t[e.key];return`<label class="pikk-notif-row" for="pikk-notif-${e.key}">
    <span class="pikk-notif-row-copy"><strong>${e.title}</strong><small>${e.detail}</small></span>
    <input id="pikk-notif-${e.key}" type="checkbox" data-k="${e.key}" ${s?"checked":""} />
  </label>`}function lm(){const e=L().notifications||{},t=wt.filter(s=>!!e[s.key]).length;return _("Notifications",`
    <div class="pikk-notif-studio" id="notifPrefs">
      <header class="pikk-notif-hero" aria-label="PIKK notification preferences">
        <div class="pikk-notif-hero-copy">
          <span class="pikk-notif-eyebrow">PIKK · YOUR CONTROL CENTER</span>
          <h2>Stay in the loop.<br/><em>On your terms.</em></h2>
          <p>Fine-tune the alerts you want while PIKK grows. Your current settings stay on this device.</p>
          <div class="pikk-notif-hero-actions">
            <a class="btn" href="#/live">Explore Live</a>
            <a class="btn ghost" href="#/messages">Open Messages</a>
          </div>
        </div>
        <div class="pikk-notif-hero-art" aria-hidden="true">
          <span class="pikk-notif-orbit"></span>
          <span class="pikk-notif-bell">♬</span>
          <span class="pikk-notif-art-label">PIKK ALERTS</span>
        </div>
      </header>
      <div class="pikk-notif-summary" aria-label="Notification settings overview">
        <div><span>Preference controls</span><strong>04</strong></div>
        <div><span>Currently enabled</span><strong id="pikkNotifEnabled">${t} of 4</strong></div>
        <div><span>Storage</span><strong>On this device</strong></div>
      </div>
      <div class="pikk-notif-columns">
        <section class="pikk-notif-panel" aria-labelledby="pikkNotifDiscoverTitle">
          <div class="pikk-notif-panel-head"><span class="pikk-notif-panel-icon" aria-hidden="true">♫</span><div><span class="pikk-notif-kicker">DISCOVER</span><h3 id="pikkNotifDiscoverTitle">Music &amp; Live</h3></div></div>
          ${wt.filter(s=>s.group==="discover").map(s=>$n(s,e)).join("")}
        </section>
        <section class="pikk-notif-panel" aria-labelledby="pikkNotifSocialTitle">
          <div class="pikk-notif-panel-head"><span class="pikk-notif-panel-icon" aria-hidden="true">✉</span><div><span class="pikk-notif-kicker">YOUR SPACE</span><h3 id="pikkNotifSocialTitle">Social &amp; Focus</h3></div></div>
          ${wt.filter(s=>s.group==="social").map(s=>$n(s,e)).join("")}
        </section>
      </div>
      <div class="pikk-notif-tools">
        <span>Pause or resume music, live and message preferences without changing Quiet hours. Settings stay on this device.</span>
        <div class="pikk-notif-tool-actions">
          <button class="btn ghost" type="button" id="pikkNotifPause">Pause alerts</button>
          <button class="btn ghost" type="button" id="pikkNotifResume">Resume alerts</button>
          <button class="btn ghost" type="button" id="pikkNotifReset">Restore defaults</button>
        </div>
      </div>
      <p class="pikk-notif-save-status" id="pikkNotifStatus" role="status" aria-live="polite">Preferences are saved locally. Real push delivery is not connected in this demo.</p>
      <section class="pikk-notif-roadmap" aria-label="Upcoming live subscriber alerts">
        <div><span class="pikk-notif-kicker">IN DEVELOPMENT</span><h3>New Subscriber Live Alerts</h3><p>Animated username and membership-tier popups, sound controls, durations, and a streamer activity inbox are planned. Confirmed subscription event integration is not available yet.</p></div>
        <span class="pikk-notif-planned">Coming soon</span>
      </section>
    </div>`,{lead:"Music, live and social preferences · browser-local demo."})}function cm(e){var a,i,n;const t=e.querySelector("#notifPrefs");if(!t)return;const s=r=>{const l=["releases","lives","messages"];$a(Object.fromEntries(l.map(g=>[g,r]))),t.querySelectorAll("input[data-k]").forEach(g=>{l.includes(g.dataset.k)&&(g.checked=r)});const u=L().notifications||{},c=wt.filter(g=>!!u[g.key]).length,p=t.querySelector("#pikkNotifEnabled");p&&(p.textContent=`${c} of 4`);const m=t.querySelector("#pikkNotifStatus");m&&(m.textContent=r?"Music, live and message preferences resumed on this device. Real push delivery is not connected.":"Music, live and message preferences paused on this device. Real push delivery is not connected."),h(r?"Alerts resumed":"Alerts paused")};(a=t.querySelector("#pikkNotifPause"))==null||a.addEventListener("click",()=>s(!1)),(i=t.querySelector("#pikkNotifResume"))==null||i.addEventListener("click",()=>s(!0)),(n=t.querySelector("#pikkNotifReset"))==null||n.addEventListener("click",()=>{$a(Sn),t.querySelectorAll("input[data-k]").forEach(u=>{u.checked=Sn[u.dataset.k]});const r=t.querySelector("#pikkNotifEnabled");r&&(r.textContent="3 of 4");const l=t.querySelector("#pikkNotifStatus");l&&(l.textContent="Notification preferences restored to defaults on this device."),h("Defaults restored")}),t.querySelectorAll("input[data-k]").forEach(r=>{r.addEventListener("change",()=>{const l=r.dataset.k;if(!wt.some(g=>g.key===l))return;$a({[l]:r.checked});const u=L().notifications||{},c=wt.filter(g=>!!u[g.key]).length,p=t.querySelector("#pikkNotifEnabled");p&&(p.textContent=`${c} of 4`);const m=t.querySelector("#pikkNotifStatus");m&&(m.textContent=`${wt.find(g=>g.key===l).title} preference saved on this device.`),h("Preference saved")})})}function ht(){R("#/wallet")}function W(e){return"$"+Number(e||0).toFixed(2)}function Os(e){return Number(e||0).toLocaleString()}const dm={pending:"Pending",completed:"Completed",rejected:"Rejected"};function pm(){const{wallet:e,user:t,coins:s}=L(),a=e||{balance:0,history:[]},i=da(),n=[...(s==null?void 0:s.history)||[]].slice(0,10),r=dl(),l=gs(),u=pi().filter(x=>x.count>0),c=Jn(t==null?void 0:t.id),p=[...a.history||[]].slice(-12).reverse(),m=[...l.earnings||[]].slice(0,20),g=l.payouts||[],f=g.find(x=>x.status==="pending"),b=!f&&l.available>=l.threshold,y=l.verification==="demo_verified",v=p.length>0?`<ul class="list-plain">${p.map(x=>`<li>
          <span>${o(x.note||"Entry")}<br/><span class="muted" style="font-size:12px">${j(x.at)}</span></span>
          <strong style="color:${Number(x.amount)>=0?"var(--ok,#6dffb0)":"inherit"}">${Number(x.amount)>=0?"+":""}${W(x.amount)}</strong>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0">No fan USD credit activity yet.</p>',w=r.map(x=>{const Q=`pack_${x.coins}`;return`<button type="button" class="card coin-pack-btn" data-coins="${x.coins}" id="${o(Q)}" style="text-align:left;cursor:pointer;margin:0;padding:12px;border:1px solid rgba(255,255,255,.08);background:#12121a">
        <div style="font-size:20px;font-weight:900">${Os(x.coins)} <span class="muted" style="font-size:13px;font-weight:600">coins</span></div>
        <div class="muted" style="font-size:13px;margin-top:4px">${W(x.usd)} · TEST MODE</div>
        <div style="margin-top:8px"><span class="chip">Buy · demo credit</span></div>
      </button>`}).join(""),$=n.length>0?`<ul class="list-plain">${n.map(x=>{const Q=Number(x.amount)||0;return`<li>
          <span>${o(x.note||"Coins")}<br/><span class="muted" style="font-size:12px">${j(x.at)}</span></span>
          <strong style="color:${Q>=0?"var(--ok,#6dffb0)":"inherit"}">${Q>=0?"+":""}${Os(Q)}</strong>
        </li>`}).join("")}</ul>`:'<p class="muted" style="margin:0">No coin purchases or gifts yet. Buy a pack below for Live gifts.</p>',C=c.length>0?`<ul class="list-plain">${c.slice(0,8).map(x=>`<li>
          <span>
            <strong>${o(x.note||x.label||"Live gift")}</strong>
            <span class="chip">80/20 NET</span>
            ${x.giftSlug?`<span class="chip">${o(x.giftSlug)}</span>`:""}
            <br/><span class="muted" style="font-size:12px">gross ${W(x.gross)} · fees ${W(x.fees)} · net ${W(x.net)} · ${j(x.at)}</span>
          </span>
          <span style="text-align:right;font-size:13px">
            <strong>${W(x.creatorShare)}</strong><br/>
            <span class="muted">PIKK ${W(x.dbsShare)}</span>
          </span>
        </li>`).join("")}</ul>
        <p class="muted" style="font-size:12px;margin:8px 0 0">Creator-only split view. Live viewers never see 80/20.</p>`:'<p class="muted" style="margin:0">No coin-gift earnings yet. When viewers send catalog gifts on Live, your <strong>80% of NET</strong> lands here (TEST MODE: listed USD = net, 0% external fee).</p>',k=u.length>0?`<div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr class="muted" style="text-align:left">
            <th style="padding:6px 4px">Source</th>
            <th style="padding:6px 4px">Gross</th>
            <th style="padding:6px 4px">Fees</th>
            <th style="padding:6px 4px">Net</th>
            <th style="padding:6px 4px">You</th>
            <th style="padding:6px 4px">PIKK</th>
          </tr>
        </thead>
        <tbody>
          ${u.map(x=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
            <td style="padding:8px 4px"><strong>${o(x.label)}</strong><br/><span class="muted" style="font-size:11px">${x.creatorPct}/${x.dbsPct} · ${x.count} line${x.count===1?"":"s"}</span></td>
            <td style="padding:8px 4px">${W(x.gross)}</td>
            <td style="padding:8px 4px">${W(x.fees)}</td>
            <td style="padding:8px 4px">${W(x.net)}</td>
            <td style="padding:8px 4px"><strong>${W(x.creatorShare)}</strong></td>
            <td style="padding:8px 4px">${W(x.dbsShare)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:12px;margin:8px 0 0">Default fees = demo 2.9% + $0.30. <strong>Live catalog gifts (t185u)</strong> treat listed USD as NET (fees $0) then 80/20. Seeded rows labeled in ledger.</p>`:'<p class="muted" style="margin:0">No creator earnings yet. Load demo earnings or receive Live tips/gifts.</p>',I=m.length>0?`<ul class="list-plain">${m.map(x=>`<li>
          <span>
            <strong>${o(x.label)}</strong>
            ${x.payoutId?'<span class="chip">In payout</span>':'<span class="chip">Open</span>'}
            ${x.source==="seed"?'<span class="chip">Demo seed</span>':""}
            ${x.source==="live_gift"?'<span class="chip">Coin gift</span>':""}
            <br/><span class="muted" style="font-size:12px">${o(x.note)} · ${j(x.at)}</span>
          </span>
          <span style="text-align:right;font-size:13px">
            <strong>${W(x.creatorShare)}</strong><br/>
            <span class="muted">gross ${W(x.gross)}</span>
          </span>
        </li>`).join("")}</ul>`:"",T=g.length>0?g.map(x=>`<div class="card" style="margin:0 0 10px;background:#12121a" data-payout="${o(x.id)}">
        <div class="row wrap">
          <strong>${W(x.amount)}</strong>
          <span class="chip">${o(dm[x.status]||x.status)}</span>
          <span class="muted spacer" style="text-align:right;font-size:12px">${j(x.at)}</span>
        </div>
        <p class="muted" style="margin:6px 0;font-size:12px">${o(x.note||"Payout")} · ${(x.earningIds||[]).length} earning line(s)</p>
        ${x.status==="pending"?`<div class="row wrap">
                <button class="btn primary payout-status" data-id="${o(x.id)}" data-status="completed">Mark completed · demo</button>
                <button class="btn ghost payout-status" data-id="${o(x.id)}" data-status="rejected">Reject · release hold</button>
              </div>`:x.reviewedAt?`<p class="muted" style="margin:0;font-size:12px">Reviewed ${j(x.reviewedAt)}</p>`:""}
      </div>`).join(""):'<p class="muted">No payout requests yet.</p>',G=`
    <div class="pikk-wallet-studio">
      <header class="pikk-wallet-hero" aria-label="PIKK Wallet overview">
        <div>
          <span class="pikk-wallet-eyebrow">PIKK · CREATOR & FAN WALLET</span>
          <h2>Your balance.<br/><em>Your next move.</em></h2>
          <p>Keep gift coins, fan credits and creator earnings in one clear place. All activity here is demo-only until payments and verification are connected.</p>
          <div class="pikk-wallet-hero-actions">
            <a class="btn" href="#/earnings">Creator earnings</a>
            <a class="btn ghost" href="#/live">Explore Live</a>
          </div>
        </div>
        <div class="pikk-wallet-hero-art" aria-hidden="true"><strong>◈</strong><small>PIKK WALLET</small></div>
      </header>
      <section class="pikk-wallet-metrics" aria-label="Wallet balance overview">
        <div class="pikk-wallet-metric"><span>Gift coins</span><strong>${Os(i)}</strong><small>Live gifting · demo</small></div>
        <div class="pikk-wallet-metric"><span>Fan USD credits</span><strong>${W(a.balance)}</strong><small>Tips and requests · demo</small></div>
        <div class="pikk-wallet-metric"><span>Creator available</span><strong>${W(l.available)}</strong><small>Eligible balance · demo</small></div>
        <div class="pikk-wallet-metric"><span>Creator on hold</span><strong>${W(l.holds)}</strong><small>Payout review · demo</small></div>
      </section>
    <div class="card">
      <div class="row wrap">
        <span class="chip">TEST MODE · not real money</span>
        <span class="chip">${y?"Identity / tax · demo verified":"Identity / tax verification · demo"}</span>
        <button class="btn ghost" id="cwVerify" style="margin-left:auto">${y?"Clear demo verify":"Mark verified · demo"}</button>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">Fan <strong>coins</strong> (Live gifts) stay separate from fan USD credits and creator redeemable balances. No real processors, KYC, or charges.</p>
    </div>

    <div class="card" id="wallet-coins">
      <div class="row wrap">
        <h3 style="margin:0">Gift coins</h3>
        <span class="chip">t185u · 100 coins = $2</span>
        <span class="chip">TEST MODE</span>
      </div>
      <div style="font-size:32px;font-weight:900;margin-top:8px">${Os(i)} <span class="muted" style="font-size:16px;font-weight:600">coins</span></div>
      <p class="muted" style="margin:4px 0 12px">≈ ${W(i*.02)} · stored in <code>dbs_v1.coins</code> (not USD <code>wallet</code>). Used for Live gift tray.</p>
      <h4 style="margin:0 0 8px;font-size:14px">Buy coin pack</h4>
      <div class="grid-2" style="gap:10px">${w}</div>
      <p class="muted" style="font-size:12px;margin:10px 0 0">No discounts · packs ${la.map(x=>`${x.coins}/$${x.usd}`).join(" · ")}. Demo credit only — no payment processor.</p>
      <h4 style="margin:16px 0 8px;font-size:14px">Recent coin activity</h4>
      ${$}
      <div class="row wrap" style="margin-top:12px">
        <a class="btn ghost" href="#/live">Go to Live · send gifts</a>
        <a class="btn ghost" href="#/earnings?cat=gifts">Gift earnings</a>
      </div>
    </div>

    <div class="card">
      <h3>Fan spendable USD credits</h3>
      <div style="font-size:32px;font-weight:900">${W(a.balance)}</div>
      <p class="muted" style="margin:4px 0 12px">Tips &amp; song requests on this device (<code>dbs_v1.wallet</code>). Separate from gift coins.</p>
      <div class="row wrap">
        <button class="btn primary" id="fanCredit5">Add $5 demo credit</button>
        <button class="btn" id="fanCredit25">Add $25</button>
        <a class="btn ghost" href="#/live">Go to Live</a>
      </div>
      <h4 style="margin:16px 0 8px;font-size:14px">Recent fan USD activity</h4>
      ${v}
    </div>

    <div class="card">
      <h3>Creator redeemable balance</h3>
      <div class="grid-2">
        <div>
          <p class="muted" style="margin:0;font-size:12px">Available to payout</p>
          <div style="font-size:28px;font-weight:900">${W(l.available)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Holds / in review</p>
          <div style="font-size:28px;font-weight:900">${W(l.holds)}</div>
        </div>
      </div>
      <div class="row wrap" style="margin-top:10px">
        <span class="chip">Threshold ${W(l.threshold)}</span>
        <span class="chip">Holds / refunds · demo</span>
        ${f?'<span class="chip">Payout pending</span>':""}
      </div>
      <div class="row wrap" style="margin-top:12px">
        <button class="btn primary" id="cwPayout" ${b?"":"disabled"}>Request payout · TEST MODE</button>
        <button class="btn" id="cwSeed">${(l.earnings||[]).length?"Reload demo earnings":"Load demo earnings"}</button>
        <a class="btn ghost" href="#/earnings">Earnings overview</a>
      </div>
      ${b?'<p class="muted" style="margin:10px 0 0;font-size:12px">Moves available → holds and locks those earning lines until completed or rejected.</p>':`<p class="muted" style="margin:10px 0 0;font-size:12px">${f?"Finish or reject the pending payout before requesting another (anti double-payout).":`Need at least ${W(l.threshold)} available · currently ${W(l.available)}.`}</p>`}
      <p class="chip" style="margin-top:10px">Signed in as ${o((t==null?void 0:t.username)||"guest")}</p>
    </div>

    <div class="card" id="wallet-gift-earnings">
      <h3>Live gift earnings · creator view</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">80% creator / 20% PIKK on NET catalog gifts. Not shown on Live / gift tray.</p>
      ${C}
    </div>

    <div class="card">
      <h3>Earnings breakdown</h3>
      <p class="muted" style="margin:0 0 10px">Gifts, tips, subscriptions, referrals, Clippers, sponsorships, merch/affiliate — gross → fees → net → creator% / PIKK%.</p>
      ${k}
      ${I?`<h4 style="margin:16px 0 8px;font-size:14px">Ledger (recent)</h4>${I}`:""}
    </div>

    <div class="card">
      <h3>Payout history</h3>
      <p class="muted" style="margin:0 0 10px">On-device demo approve / reject. Completed funds leave holds; rejected releases hold and untags earnings.</p>
      ${T}
    </div>
    </div>
  `;return _("Wallet & Payouts",G,{lead:"Creator Wallet & Payout Center · gift coins + fan USD · TEST MODE."})}function um(e){var t,s,a,i,n;e.querySelectorAll(".coin-pack-btn").forEach(r=>{r.addEventListener("click",()=>{const l=Number(r.dataset.coins),u=Yn(l);if((u==null?void 0:u.error)==="bad_package")return h("Unknown pack");if(u!=null&&u.error)return h("Could not buy coins");h(`+${l.toLocaleString()} coins · TEST MODE`),ht()})}),(t=e.querySelector("#fanCredit5"))==null||t.addEventListener("click",()=>{Qs(5,"Demo credit +$5"),h("+$5 fan credits"),ht()}),(s=e.querySelector("#fanCredit25"))==null||s.addEventListener("click",()=>{Qs(25,"Demo credit +$25"),h("+$25 fan credits"),ht()}),(a=e.querySelector("#cwSeed"))==null||a.addEventListener("click",()=>{const r=(gs().earnings||[]).length>0,l=ar({force:!0});h(r?"Demo earnings reloaded":`Loaded ${l.seeded||0} demo lines`),ht()}),(i=e.querySelector("#cwPayout"))==null||i.addEventListener("click",()=>{const r=Tl();if((r==null?void 0:r.error)==="pending_exists")return h("Payout already pending");if((r==null?void 0:r.error)==="below_threshold")return h("Below payout threshold");if(r!=null&&r.error)return h("Could not request payout");h("Payout requested · held"),ht()}),(n=e.querySelector("#cwVerify"))==null||n.addEventListener("click",()=>{const l=gs().verification!=="demo_verified";Ml(l),h(l?"Demo verified":"Verification cleared"),ht()}),e.querySelectorAll(".payout-status").forEach(r=>{r.addEventListener("click",()=>{const l=Dl(r.dataset.id,r.dataset.status);if(l!=null&&l.error)return h("Could not update payout");h("Payout "+r.dataset.status),ht()})})}function xn(e){R(e||"#/earnings")}function re(e){return"$"+Number(e||0).toFixed(2)}const yo=[{id:"all",label:"All"},{id:"gifts",label:"Gifts"},{id:"tips",label:"Tips"},{id:"subscriptions",label:"Subscriptions"},{id:"clippers",label:"Clippers"},{id:"referrals",label:"Referrals"},{id:"sponsorships",label:"Sponsorships"},{id:"merch",label:"Merch"}];function ko(){var t;const e=(((t=Ue().query)==null?void 0:t.cat)||"all").toLowerCase();return yo.some(s=>s.id===e)?e:"all"}function mm(e){return(e||[]).reduce((t,s)=>(t.gross+=Number(s.gross)||0,t.fees+=Number(s.fees)||0,t.net+=Number(s.net)||0,t.creatorShare+=Number(s.creatorShare)||0,t.dbsShare+=Number(s.dbsShare)||0,t),{gross:0,fees:0,net:0,creatorShare:0,dbsShare:0})}function Zt(e){return Math.round(Number(e)*100)/100}function hm(){const e=gs(),t=Cl(),s=ko(),a=[...e.earnings||[]].sort((y,v)=>(v.at||0)-(y.at||0)),i=s==="all"?a:a.filter(y=>y.category===s||s==="subscriptions"&&y.category==="paid_content"),n=mm(a),r=pi(),l=Jn(),u=s==="gifts"?`<div class="card" style="margin:0 0 12px;background:#12121a">
      <div class="row wrap">
        <span class="chip">t185u · catalog gifts</span>
        <span class="chip">80% creator / 20% PIKK · NET</span>
        <span class="chip">TEST MODE · listed USD = net</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:13px">Coin gifts from Live use <code>sendLiveGift</code> → creator earnings here. Viewers on Live / gift tray never see this split. ${l.length?`${l.length} gift line(s) on device.`:"Send a catalog gift on an active Live to populate."}</p>
    </div>`:"",c=yo.map(y=>{const v=y.id==="all"?"#/earnings":`#/earnings?cat=${y.id}`,w=y.id==="all"?a.length:a.filter(C=>C.category===y.id||y.id==="subscriptions"&&C.category==="paid_content").length,$=s===y.id;return`<a class="chip earn-filter${$?" active":""}" href="${v}" data-cat="${o(y.id)}" style="${$?"outline:1px solid var(--accent,#6dffb0);font-weight:700":""}">${o(y.label)}${w?` · ${w}`:""}</a>`}).join(""),p=Object.entries(t).map(([y,v])=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${o(v.label)}</strong><br/><span class="muted" style="font-size:11px">${o(y)}</span></td>
        <td style="padding:8px 4px">${v.creatorPct}%</td>
        <td style="padding:8px 4px">${v.dbsPct}%</td>
      </tr>`).join(""),m=Object.entries(t).map(([y,v])=>`<option value="${o(y)}">${o(v.label)}</option>`).join(""),g=r.filter(y=>y.count>0).length>0?`<div style="overflow-x:auto;margin-top:8px">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr class="muted" style="text-align:left">
            <th style="padding:6px 4px">Source</th>
            <th style="padding:6px 4px">Gross</th>
            <th style="padding:6px 4px">Fees</th>
            <th style="padding:6px 4px">Net</th>
            <th style="padding:6px 4px">You</th>
            <th style="padding:6px 4px">PIKK</th>
          </tr>
        </thead>
        <tbody>
          ${r.filter(y=>y.count>0).map(y=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
            <td style="padding:8px 4px"><strong>${o(y.label)}</strong><br/><span class="muted" style="font-size:11px">${y.creatorPct}/${y.dbsPct} · ${y.count} line${y.count===1?"":"s"}</span></td>
            <td style="padding:8px 4px">${re(y.gross)}</td>
            <td style="padding:8px 4px">${re(y.fees)}</td>
            <td style="padding:8px 4px">${re(y.net)}</td>
            <td style="padding:8px 4px"><strong>${re(y.creatorShare)}</strong></td>
            <td style="padding:8px 4px">${re(y.dbsShare)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`:"",f=i.length>0?`<ul class="list-plain">${i.map(y=>`<li style="align-items:flex-start">
          <span style="flex:1;min-width:0">
            <strong>${o(y.label||y.category)}</strong>
            ${y.payoutId?'<span class="chip">In payout</span>':'<span class="chip">Open</span>'}
            ${y.source==="seed"?'<span class="chip">Demo seed</span>':""}
            <br/><span class="muted" style="font-size:12px">${o(y.note||"")} · ${j(y.at)}</span>
            <br/><span class="muted" style="font-size:11px">gross ${re(y.gross)} → fees ${re(y.fees)} → net ${re(y.net)} · creator ${y.creatorPct}% / PIKK ${y.dbsPct}%</span>
          </span>
          <span style="text-align:right;font-size:13px;white-space:nowrap">
            <strong>${re(y.creatorShare)}</strong><br/>
            <span class="muted">PIKK ${re(y.dbsShare)}</span>
          </span>
        </li>`).join("")}</ul>`:a.length===0?`<p class="muted" style="margin:0 0 12px">No earnings yet. Load demo lines or record a single demo earning below.</p>
           <button class="btn primary" id="earnSeed">Load demo earnings</button>`:'<p class="muted" style="margin:0">No lines in this category. <a href="#/earnings">Show all</a></p>',b=`
    <section class="pikk-earnings-hero" aria-label="Creator earnings overview">
      <div class="pikk-earnings-hero-copy">
        <span class="pikk-earnings-eyebrow">PIKK CREATOR STUDIO · ANALYTICS PREVIEW</span>
        <h2>Your work. <em>Your earnings.</em></h2>
        <p>Track your creator share across gifts, subscriptions, tips and more in one place. Every amount shown here is browser-local demo data, not a real balance.</p>
        <div class="pikk-earnings-hero-actions">
          <a class="btn primary" href="#/wallet">Open Wallet</a>
          <a class="btn ghost" href="#/music">Explore Music</a>
        </div>
      </div>
      <div class="pikk-earnings-hero-art" aria-hidden="true">
        <span class="pikk-earnings-hero-orbit"></span>
        <span class="pikk-earnings-hero-symbol">PIKK</span>
        <span class="pikk-earnings-hero-mini">CREATOR STUDIO</span>
      </div>
    </section>
    <div class="pikk-earnings-dashboard">
    <div class="card pikk-earnings-intro">
      <div class="row wrap">
        <span class="chip">TEST MODE · not real money</span>
        <span class="chip">Analytics &amp; ledger · payouts on Wallet</span>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">Transparent breakdown of clipping, referrals, merch affiliates, subscriptions, gifts, and tips — with PIKK commission splits. Request payouts on <a href="#/wallet">Wallet</a>.</p>
    </div>

    <div class="card pikk-earnings-summary">
      <h3>Summary</h3>
      <div class="grid-2">
        <div>
          <p class="muted" style="margin:0;font-size:12px">Available to payout</p>
          <div style="font-size:26px;font-weight:900">${re(e.available)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Holds / in review</p>
          <div style="font-size:26px;font-weight:900">${re(e.holds)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Lifetime creator share</p>
          <div style="font-size:22px;font-weight:800">${re(Zt(n.creatorShare))}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Lifetime PIKK share</p>
          <div style="font-size:22px;font-weight:800">${re(Zt(n.dbsShare))}</div>
        </div>
      </div>
      <div class="row wrap" style="margin-top:10px">
        <span class="chip">Lifetime gross ${re(Zt(n.gross))}</span>
        <span class="chip">Fees ${re(Zt(n.fees))}</span>
        <span class="chip">Net ${re(Zt(n.net))}</span>
        <span class="chip">Threshold ${re(e.threshold)}</span>
      </div>
      <div class="row wrap" style="margin-top:12px">
        <a class="btn primary" href="#/wallet">Open Wallet &amp; request payout</a>
        <button class="btn" id="earnSeed">${a.length?"Reload demo earnings":"Load demo earnings"}</button>
      </div>
    </div>

    <div class="card">
      <h3>Commission rates · TEST MODE</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Admin-adjustable examples. Default fees (2.9% + $0.30) apply to gross first; splits apply to eligible net. <strong>Live catalog gifts</strong> (t185u): listed USD treated as net (0% external fee chip) then <strong>80/20</strong>. Optional 85/15 is not enabled.</p>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr class="muted" style="text-align:left">
              <th style="padding:6px 4px">Category</th>
              <th style="padding:6px 4px">Creator %</th>
              <th style="padding:6px 4px">PIKK %</th>
            </tr>
          </thead>
          <tbody>${p}</tbody>
        </table>
      </div>
      ${g?`<h4 style="margin:16px 0 0;font-size:14px">Totals by source (this device)</h4>${g}`:""}
    </div>

    <div class="card">
      <h3>Earnings ledger</h3>
      ${u}
      <div class="row wrap" style="margin:0 0 12px;gap:6px">${c}</div>
      ${f}
    </div>

    <div class="card">
      <h3>Record demo earning</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Adds one line via <code>creditCreatorEarning</code> (same shape as Wallet / Live tips). Not a real charge.</p>
      <form id="earnDemoForm" style="display:grid;gap:10px;max-width:420px">
        <div class="field"><label>Category</label><select name="category" id="earnCat">${m}</select></div>
        <div class="field"><label>Gross amount (USD)</label><input name="gross" id="earnGross" type="number" min="0.01" step="0.01" value="10" required /></div>
        <div class="field"><label>Note (optional)</label><input name="note" id="earnNote" type="text" maxlength="120" placeholder="Manual demo earning" /></div>
        <button class="btn primary" type="submit">Record demo earning</button>
      </form>
    </div>
    </div>
  `;return _("Creator Earnings",b,{lead:"Rewards, commissions & ledger · TEST MODE · payouts on Wallet (§27)."})}function gm(e){var t,s;(t=e.querySelector("#earnSeed"))==null||t.addEventListener("click",()=>{const a=(gs().earnings||[]).length>0,i=ar({force:!0});h(a?"Demo earnings reloaded":`Loaded ${i.seeded||0} demo lines`),xn(En(ko()))}),(s=e.querySelector("#earnDemoForm"))==null||s.addEventListener("submit",a=>{var u,c,p;a.preventDefault();const i=((u=e.querySelector("#earnCat"))==null?void 0:u.value)||"tips",n=Number((c=e.querySelector("#earnGross"))==null?void 0:c.value),r=(((p=e.querySelector("#earnNote"))==null?void 0:p.value)||"").trim()||"Manual demo earning";if(!(n>0))return h("Enter a positive gross amount");const l=di({category:i,gross:n,note:r,source:"manual_demo"});h(`Recorded ${re(l.creatorShare)} creator share`),xn(En(i))})}function En(e){return!e||e==="all"?"#/earnings":`#/earnings?cat=${e}`}function gt(){R("#/missions")}const An={song:"Song",album:"Album",video:"Video",live:"Livestream",app:"DBS App",interview:"Interview"};function fm(e){return"$"+Number(e||0).toFixed(0)}function vm(e){const t=Number(e)||0;if(!t)return"No deadline";const s=t-Date.now();if(s<0)return`Ended ${Math.ceil(-s/864e5)}d ago`;const a=Math.ceil(s/864e5);return a<=1?"Due today / tomorrow":`${a}d left`}function bm(e=14){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function qs(){const{user:e}=L();if(e)return e;const t=jt("DemoCreator");return h("Signed in as DemoCreator · local demo"),t||L().user}function ym(){const{user:e}=L(),t=ma().sort((p,m)=>(m.createdAt||0)-(p.createdAt||0)),s=t.filter(p=>p.status==="active"||p.status==="paused"),a=t.filter(p=>p.status==="ended"||p.status==="draft"),i=new Set(t.flatMap(p=>(p.participants||[]).map(m=>m.userId).filter(Boolean))).size,n=t.reduce((p,m)=>p+(m.submissions||[]).length,0),r=p=>{const m=p.fundSource==="third_party"?'<span class="chip">20% management fee · disclosed</span>':'<span class="chip">DBS-funded · marketing expense</span>',g=cc(p.id),f=e&&(p.participants||[]).some($=>$.userId===e.id),b=(p.submissions||[]).filter($=>e&&$.userId===e.id),y=g.length>0?g.slice(0,8).map(($,C)=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
              <td style="padding:6px 4px">${C+1}</td>
              <td style="padding:6px 4px"><strong>${o($.username)}</strong>
                ${$.referralCode?`<br/><span class="muted" style="font-size:11px">${o($.referralCode)}</span>`:""}
              </td>
              <td style="padding:6px 4px">${$.score}</td>
              <td style="padding:6px 4px">${$.submissions}</td>
            </tr>`).join(""):'<tr><td colspan="4" class="muted" style="padding:8px 4px">No participants yet — join to appear on the board.</td></tr>',v=(p.submissions||[]).length>0?`<ul class="list-plain" style="margin-top:8px">${(p.submissions||[]).slice(0,5).map($=>`<li style="align-items:flex-start">
              <span style="flex:1;min-width:0">
                <strong>${o($.username)}</strong>
                <span class="chip">${o($.status||"pending")}</span>
                <br/><span style="font-size:13px">${o($.proof)}</span>
                <br/><span class="muted" style="font-size:11px">${j($.at)} · Manual review</span>
              </span>
            </li>`).join("")}</ul>`:'<p class="muted" style="margin:8px 0 0;font-size:13px">No proof submissions yet.</p>',w=p.status==="active"?`<div class="row wrap" style="margin-top:10px;gap:8px">
            ${f?`<span class="chip">Joined</span>
                   <button class="btn" data-bump="${o(p.id)}">+5 demo points</button>`:`<button class="btn primary" data-join="${o(p.id)}">Join mission</button>`}
            <button class="btn ghost" data-status="${o(p.id)}" data-next="paused">Pause</button>
            <button class="btn ghost" data-status="${o(p.id)}" data-next="ended">End mission</button>
          </div>
          ${f?`<form class="msn-proof" data-id="${o(p.id)}" style="display:grid;gap:8px;margin-top:12px;max-width:480px">
                  <div class="field"><label>Submit proof (URL or note)</label>
                    <input name="proof" placeholder="https://… or clip description" maxlength="400" required />
                  </div>
                  <button class="btn" type="submit">Submit for review · +10 pts</button>
                </form>`:""}`:p.status==="paused"?`<div class="row wrap" style="margin-top:10px;gap:8px">
              <button class="btn primary" data-status="${o(p.id)}" data-next="active">Resume</button>
              <button class="btn ghost" data-status="${o(p.id)}" data-next="ended">End mission</button>
            </div>`:`<div class="row wrap" style="margin-top:10px"><span class="chip">Archive · ${o(p.status)}</span></div>`;return`<article class="card pikk-mission-card" data-mission="${o(p.id)}">
      <div class="row wrap">
        <span class="chip">${o(An[p.promoteType]||p.promoteType)}</span>
        <span class="chip">${o(p.status)}</span>
        <span class="chip">Budget ${fm(p.budget)}</span>
        <span class="chip">${o(vm(p.deadline))}</span>
        ${m}
        <span class="muted spacer" style="text-align:right;font-size:12px">${j(p.createdAt)}</span>
      </div>
      <h3 style="margin:10px 0 4px">${o(p.title)}</h3>
      <p class="muted" style="margin:0 0 6px;font-size:13px">${o(p.reward||"")}</p>
      <p class="muted" style="margin:0;font-size:12px">
        Fund: <strong>${p.fundSource==="third_party"?"Third-party":"DBS"}</strong>
        ${p.fundSource==="third_party"?" · 20% management fee (disclosed)":" · not a creator commission — marketing expense"}
        · ${(p.participants||[]).length} joined · ${(p.submissions||[]).length} submissions
        ${f?` · your proofs: ${b.length}`:""}
      </p>
      ${w}
      <h4 style="margin:16px 0 6px;font-size:14px">Rankings · demo score</h4>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr class="muted" style="text-align:left">
              <th style="padding:6px 4px">#</th>
              <th style="padding:6px 4px">Creator</th>
              <th style="padding:6px 4px">Score</th>
              <th style="padding:6px 4px">Subs</th>
            </tr>
          </thead>
          <tbody>${y}</tbody>
        </table>
      </div>
      <h4 style="margin:14px 0 0;font-size:14px">Submissions</h4>
      ${v}
    </article>`},l=s.length?s.map(r).join(""):t.length?'<div class="card"><p class="muted" style="margin:0">No active or paused missions. Create one or resume from archive.</p></div>':"",u=a.length>0?`<div class="card"><h3>Archive</h3>${a.map(r).join("")}</div>`:"",c=`
    <div class="pikk-missions-studio">
      <section class="pikk-missions-hero" aria-label="PIKK Missions Studio overview">
        <p class="pikk-missions-kicker">PIKK CREATOR STUDIO · PROMOTIONAL CAMPAIGNS</p>
        <h2>Make your next <span>move count.</span></h2>
        <p>Explore creator missions, share your work and track demo rankings. Campaign budgets and points are examples, not real earnings.</p>
        <div class="pikk-missions-stats" aria-label="Current demo mission totals">
          <div class="pikk-missions-stat"><strong>${s.length}</strong><span>Open / paused</span></div>
          <div class="pikk-missions-stat"><strong>${i}</strong><span>Demo creators</span></div>
          <div class="pikk-missions-stat"><strong>${n}</strong><span>Proof submissions</span></div>
        </div>
        <span class="pikk-missions-mode">TEST MODE · NO REAL PAYOUTS</span>
      </section>
    <div class="card pikk-missions-intro">
      <div class="row wrap">
        <span class="chip">TEST MODE · not real money</span>
        <span class="chip">Manual review · TEST MODE — no auto fraud API</span>
        <span class="chip">Signed in as ${o((e==null?void 0:e.username)||"guest")}</span>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">
        Admin-created missions promoting songs, albums, interviews, videos, livestreams, and the DBS app.
        Budgets, deadlines, creator participation, rankings, and verified payouts (demo).
        Third-party-funded campaigns disclose a <strong>20% management fee</strong>; DBS-funded campaigns are a marketing expense (not a commission).
      </p>
      <div class="row wrap" style="margin-top:12px;gap:8px">
        <button class="btn" id="msnSeed">${t.length?"Reload demo missions":"Load demo missions"}</button>
        ${e?"":'<button class="btn primary" id="msnSignIn">Sign in · demo</button>'}
      </div>
    </div>

    <section class="pikk-missions-list" aria-label="Available campaigns">${l}</section>

    <div class="card pikk-missions-create">
      <h3>Create mission · demo admin</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Stored in <code>dbs_v1.missions</code>. No real charges or fraud API.</p>
      <form id="msnCreate" style="display:grid;gap:10px;max-width:520px">
        <div class="field"><label>Title *</label><input name="title" id="msnTitle" required maxlength="120" placeholder="Push Long Story Short" /></div>
        <div class="grid-2">
          <div class="field"><label>Promote type</label>
            <select name="promoteType" id="msnType">
              ${Object.entries(An).map(([p,m])=>`<option value="${p}">${o(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field"><label>Budget (USD)</label><input name="budget" id="msnBudget" type="number" min="0" step="1" value="500" /></div>
        </div>
        <div class="grid-2">
          <div class="field"><label>Deadline</label><input name="deadline" id="msnDeadline" type="date" value="${bm(14)}" /></div>
          <div class="field"><label>Fund source</label>
            <select name="fundSource" id="msnFund">
              <option value="dbs">DBS-funded (marketing expense)</option>
              <option value="third_party">Third-party (20% mgmt fee)</option>
            </select>
          </div>
        </div>
        <div class="field"><label>Reward blurb</label><input name="reward" id="msnReward" maxlength="200" placeholder="e.g. Top 3 share demo pot" /></div>
        <button class="btn primary" type="submit">Create active mission</button>
      </form>
    </div>

    <section class="pikk-missions-archive">${u}</section>
    </div>
  `;return _("Missions",c,{lead:"Promotional campaigns · Clippers & creators · TEST MODE (§6)."})}function km(e){var t,s,a;(t=e.querySelector("#msnSeed"))==null||t.addEventListener("click",()=>{const i=ma().length>0,n=dc({force:!0});h(i?"Demo missions reloaded":`Loaded ${n.seeded||0} demo missions`),gt()}),(s=e.querySelector("#msnSignIn"))==null||s.addEventListener("click",()=>{qs(),gt()}),(a=e.querySelector("#msnCreate"))==null||a.addEventListener("submit",i=>{var g,f,b,y,v,w;i.preventDefault();const n=((g=e.querySelector("#msnTitle"))==null?void 0:g.value)||"",r=((f=e.querySelector("#msnType"))==null?void 0:f.value)||"app",l=Number((b=e.querySelector("#msnBudget"))==null?void 0:b.value)||0,u=((y=e.querySelector("#msnDeadline"))==null?void 0:y.value)||"",c=((v=e.querySelector("#msnFund"))==null?void 0:v.value)||"dbs",p=((w=e.querySelector("#msnReward"))==null?void 0:w.value)||"",m=ic({title:n,promoteType:r,budget:l,deadline:u,fundSource:c,reward:p,status:"active"});if(m.error)return h("Title required");h(`Mission created · ${m.title}`),gt()}),e.querySelectorAll("[data-join]").forEach(i=>{i.addEventListener("click",()=>{qs();const n=i.getAttribute("data-join"),r=rc(n);if(r.error==="signin")return h("Sign in required");if(r.error==="already_joined")return h("Already joined");if(r.error==="not_active")return h("Mission not active");if(r.error)return h("Could not join");h("Joined mission · referral code assigned"),gt()})}),e.querySelectorAll("[data-bump]").forEach(i=>{i.addEventListener("click",()=>{qs();const n=i.getAttribute("data-bump"),r=lc(n,5);if(r.error)return h(r.error==="not_joined"?"Join first":"Bump failed");h("+5 demo points"),gt()})}),e.querySelectorAll("[data-status]").forEach(i=>{i.addEventListener("click",()=>{const n=i.getAttribute("data-status"),r=i.getAttribute("data-next");if(nc(n,r).error)return h("Status update failed");h(`Mission → ${r}`),gt()})}),e.querySelectorAll("form.msn-proof").forEach(i=>{i.addEventListener("submit",n=>{var c;n.preventDefault(),qs();const r=i.getAttribute("data-id"),l=((c=i.querySelector('[name="proof"]'))==null?void 0:c.value)||"",u=oc(r,{proof:l});if(u.error==="required")return h("Enter a URL or note");if(u.error==="not_joined")return h("Join first");if(u.error==="not_active")return h("Mission not active");if(u.error)return h("Submit failed");h("Proof submitted · pending manual review · +10 pts"),gt()})})}const wm=[{id:"trending",label:"Trending"},{id:"following",label:"Following"},{id:"discover",label:"Discover"}];function Sm(){return!!L().exploreDiscoverable}function Ce({href:e,title:t,meta:s,chip:a}){return`<a class="explore-hit" href="${o(e)}">
    <div>
      <strong>${o(t)}</strong>
      <div class="muted" style="font-size:12px;margin-top:2px">${o(s||"")}</div>
    </div>
    ${a?`<span class="chip">${o(a)}</span>`:""}
  </a>`}function Ze(e,t,s){return t?`<div class="card explore-section">
    <h3>${o(e)}</h3>
    <div class="explore-hits">${t}</div>
  </div>`:`<div class="card explore-section">
      <h3>${o(e)}</h3>
      <p class="muted" style="margin:0">${o(s||"No matches")}</p>
    </div>`}function aa(e){if(!e||!e.query)return`<div class="card" id="exploreResults">
      <p class="muted" style="margin:0">Search creators, fans, songs, albums, videos, posts, livestreams, and products. Exact locations are never indexed.</p>
    </div>`;const t=e.posts.length+e.profiles.length+e.music.length+e.videos.length+e.lives.length+e.products.length+e.pictures.length;if(!t)return`<div class="card" id="exploreResults">
      <p style="margin:0 0 6px"><strong>No results for “${o(e.query)}”</strong></p>
      <p class="muted" style="margin:0">Try another keyword, or browse Trending / Discover below. Report spam from a result’s destination page (demo shell).</p>
    </div>`;const s=e.posts.slice(0,8).map(m=>Ce({href:"#/posts",title:(m.text||"").slice(0,90)||"Post",meta:`@${m.username||"user"} · ${j(m.at||Date.now())}`,chip:"Post"})).join(""),a=e.profiles.slice(0,8).map(m=>Ce({href:`#/profile/${m.id}`,title:`@${m.username||m.id}`,meta:(m.bio||"Creator / fan").slice(0,80),chip:m.verified?"Verified":"Profile"})).join(""),i=e.music.slice(0,8).map(m=>Ce({href:"#/music",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · ${m.type}`,chip:m.type==="album"?"Album":"Song"})).join(""),n=e.videos.slice(0,8).map(m=>Ce({href:"#/videos",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · From Admin`,chip:"Video"})).join(""),r=e.pictures.slice(0,8).map(m=>Ce({href:"#/home",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · picture`,chip:"Picture"})).join(""),l=e.lives.slice(0,8).map(m=>Ce({href:"#/live",title:m.title||"Livestream",meta:`@${m.hostName||"host"} · ${m.status==="live"?"LIVE now":"Ended"}`,chip:m.status==="live"?"Live":"Replay"})).join(""),u=e.products.slice(0,8).map(m=>Ce({href:"#/marketplace",title:m.title,meta:`${m.brand||"Brand"} · ${m.disclosure||"Sponsored"}`,chip:"Ad"})).join(""),c=e.query.toLowerCase(),p=[..._t.filter(m=>m.title.toLowerCase().includes(c)||m.artist.toLowerCase().includes(c)||c.includes("music")||c.includes("song")||c.includes("album")).map(m=>Ce({href:"#/music",title:m.title,meta:`${m.artist} · ${m.status}`,chip:"Cover"})),...fe.filter(m=>m.title.toLowerCase().includes(c)||(m.artist||"").toLowerCase().includes(c)||c.includes("video")||c.includes("mv")).map(m=>Ce({href:"#/videos",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · Official MV`,chip:"MV"}))].join("");return`<div id="exploreResults">
    <p class="muted" style="margin:0 0 10px">${t} result${t===1?"":"s"} for “${o(e.query)}”</p>
    ${Ze("People",a,"No matching creators or fans")}
    ${Ze("Posts",s,"No matching posts")}
    ${Ze("Music (catalog)",i,"No published songs/albums")}
    ${Ze("Videos (catalog)",n,"No published videos")}
    ${Ze("Pictures",r,"No published pictures")}
    ${Ze("Livestreams",l,"No live or history matches")}
    ${Ze("Products / ads",u,"No marketplace listings")}
    ${p?Ze("Music-based picks",p):""}
  </div>`}function $m(){const e=Il(10);return e.length?`<div class="section-swipe explore-trend">
    ${e.map(t=>`<a class="preview-card" href="${o(t.href)}">
        <strong>${o(t.title)}</strong>
        <span class="muted">${o(t.subtitle)}${t.score?` · ♥${t.score}`:""}</span>
      </a>`).join("")}
  </div>`:'<p class="muted">Nothing trending yet — like posts or publish catalog items.</p>'}function xm(){const e=L().user;if(!e)return'<div class="card"><p class="muted" style="margin:0">Sign in on <a href="#/profile">Profile</a> to see accounts you follow. Demo only — no exact locations.</p></div>';const t=e.following||[];return t.length?`<div class="card explore-section"><h3>Following</h3><div class="explore-hits">${t.map(a=>{var n;const i=((n=L().profiles)==null?void 0:n[a])||{id:a,username:a};return Ce({href:"#/profile",title:`@${i.username||i.id}`,meta:(i.bio||"Following").slice(0,80),chip:"Following"})}).join("")}</div></div>`:`<div class="card"><p class="muted" style="margin:0">You're not following anyone yet. Discover suggested accounts below, then follow from their profile.</p></div>`}function Em(){const t=Pl().slice(0,8).map(a=>Ce({href:"#/profile",title:`@${a.username}`,meta:(a.bio||"Suggested").slice(0,80),chip:a.verified?"Verified":"Suggest"})).join(""),s=_t.map(a=>Ce({href:"#/music",title:a.title,meta:`${a.artist} · music-based`,chip:"Cover"})).join("");return`
    <div class="card">
      <h3>Discoverability (opt-in)</h3>
      <p class="muted" style="margin:0 0 10px">Appear in Explore suggestions. Off by default. No exact locations stored or shown.</p>
      <label class="row" style="gap:8px;align-items:center">
        <input type="checkbox" id="exploreDiscoverable" ${Sm()?"checked":""} />
        <span>Make my profile discoverable (TEST MODE)</span>
      </label>
    </div>
    <div class="card explore-section">
      <h3>Suggested accounts</h3>
      <div class="explore-hits">${t||'<p class="muted">No profiles yet</p>'}</div>
    </div>
    <div class="card explore-section">
      <h3>Music-based recommendations</h3>
      <div class="explore-hits">${s}</div>
    </div>
    <div class="card">
      <h3>Safety</h3>
      <p class="muted" style="margin:0">Reporting / filtering shell: open a post or profile and use existing mute / guidelines flows. Explore never shows precise locations.</p>
      <a class="btn ghost" href="#/guidelines" style="margin-top:8px">Community guidelines</a>
    </div>`}function Am(){const e=L().exploreTab||"trending",t=wm.map(i=>`<button type="button" class="shop-chip${i.id===e?" on":""}" data-explore-tab="${i.id}">${o(i.label)}</button>`).join("");let s="";e==="following"?s=xm():e==="discover"?s=Em():s=`<div class="card">
      <h3>Trending Across DBS</h3>
      <p class="muted" style="margin:0 0 10px">High-engagement public posts and seeded demo cards (not a full engagement pipeline).</p>
      ${$m()}
    </div>
    <div id="exploreResultsWrap">${aa(null)}</div>`;const a=`
    <div class="card explore-search">
      <div class="field" style="margin-bottom:8px">
        <label for="exploreQ">Search DBS</label>
        <input id="exploreQ" type="search" autocomplete="off" placeholder="Creators, fans, songs, albums, videos, posts, lives, products…" />
      </div>
      <div class="row wrap" style="gap:8px">
        <button class="btn primary" type="button" id="exploreGo">Search</button>
        <button class="btn ghost" type="button" id="exploreClear">Clear</button>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">Local demo index · DEMO/TEST MODE · no backend · no exact locations</p>
    </div>
    <div class="shop-chips" style="margin:0 0 12px" role="tablist">${t}</div>
    <div id="explorePanel">${s}</div>
  `;return _("Explore",a,{lead:"Universal search & discovery across DBS.",badge:"Phase 2 demo"})}function Cm(e,t){var n,r,l,u,c,p,m;const s=Ll(t),a=e.querySelector("#exploreResultsWrap");if(a)a.innerHTML=aa(s);else{const g=e.querySelector("#explorePanel");if(g){let f=g.querySelector("#exploreLiveInsert");f||(f=document.createElement("div"),f.id="exploreLiveInsert",g.prepend(f)),f.innerHTML=aa(s)}}const i=(((n=s.posts)==null?void 0:n.length)||0)+(((r=s.profiles)==null?void 0:r.length)||0)+(((l=s.music)==null?void 0:l.length)||0)+(((u=s.videos)==null?void 0:u.length)||0)+(((c=s.lives)==null?void 0:c.length)||0)+(((p=s.products)==null?void 0:p.length)||0)+(((m=s.pictures)==null?void 0:m.length)||0);s.query&&h(i?`${i} result(s)`:"No matches")}function Tm(e){var r;const t=e.querySelector("#exploreQ"),s=e.querySelector("#exploreGo"),a=e.querySelector("#exploreClear"),i=()=>Cm(e,(t==null?void 0:t.value)||"");s==null||s.addEventListener("click",i),a==null||a.addEventListener("click",()=>{var u;clearTimeout(n),t&&(t.value="");const l=e.querySelector("#exploreResultsWrap");l&&(l.innerHTML=aa(null)),(u=e.querySelector("#exploreLiveInsert"))==null||u.remove(),h("Cleared")});let n;t==null||t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(i,220)}),t==null||t.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),i())}),e.querySelectorAll("[data-explore-tab]").forEach(l=>{l.addEventListener("click",()=>{ji({exploreTab:l.getAttribute("data-explore-tab")}),R("/explore")})}),(r=e.querySelector("#exploreDiscoverable"))==null||r.addEventListener("change",l=>{ji({exploreDiscoverable:!!l.target.checked}),h(l.target.checked?"Discoverable on":"Discoverable off")})}let Us=null;function ft(e){R("#/giftbattles")}function Cn(){Us&&(clearInterval(Us),Us=null)}function se(e){return"$"+Number(e||0).toFixed(2)}function wo(e){const t=Math.max(0,Math.ceil(e/1e3)),s=Math.floor(t/60),a=t%60;return`${s}:${String(a).padStart(2,"0")}`}function Dm(){return _("Gift Battles",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Gift battles need a local demo account so scores and history persist on this device.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Runs during Live · not a separate stream · voluntary support · TEST MODE"})}function Mm(){return`
    <div class="card gb-rules">
      <h3>How Gift Battles work</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">Runs <strong>during Live</strong> — not its own stream product. Deep-link demo stays here.</p>
      <ul class="gb-rules-list">
        <li><strong>60-second</strong> viewer vs viewer countdown during a live (or sandbox demo).</li>
        <li>Gifts &amp; tips are <strong>voluntary fan support</strong> to the creator — <strong>not wagers</strong>.</li>
        <li>Battle winners get <strong>recognition only</strong>. They do <em>not</em> receive the opponent's money, stakes, or cash prizes.</li>
        <li>No entry fee, minimum spend, or pay-to-enter. Equal scores = tie.</li>
        <li>Battle winners are recognized for the <strong>rest of the calendar day</strong> · up to <strong>10</strong> names on the daily board.</li>
      </ul>
      <p class="muted" style="margin:10px 0 0">TEST MODE · no real payments · no gambling.</p>
    </div>`}function Lm(e){if(!e)return`
      <div class="card">
        <h3>Champion Spotlight</h3>
        <p class="muted" style="margin:0">No active champion today. Win a battle to claim the rest-of-day banner.</p>
      </div>`;const t=Math.max(0,(e.championUntil||0)-Date.now()),s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return`
    <div class="card gb-champion" role="status">
      <div class="row wrap" style="gap:8px;align-items:center">
        <span class="gb-sticker-slot" aria-hidden="true">${Pi("battle-crown",{className:"gift-sticker gift-sticker--battle"}).html}</span>
        <div class="chip">Challenge Winner · rest of day</div>
      </div>
      <h3 class="gb-champion-name">${o(e.username)}</h3>
      <p class="muted" style="margin:0">
        Score ${o(se(e.score))} · ~${s}h ${a}m left today
        · ${o(e.mode||"demo")}
      </p>
    </div>`}function Im(e,t){return e?`
      <div class="card gb-live-banner">
        <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
          <div>
            <span class="chip">LIVE</span>
            <strong style="margin-left:8px">${o(t.title||"Live")}</strong>
            <p class="muted" style="margin:6px 0 0">Battles can use real live tip/gift stubs via sendLiveSupport.</p>
          </div>
          <a class="btn ghost" href="#/live">Open Live</a>
        </div>
      </div>`:`
    <div class="card">
      <h3>Go live or use sandbox</h3>
      <p class="muted">No active livestream. Start a demo stream on Live, or run a <strong>Demo battle sandbox</strong> with fake opponents (scores local + optional wallet debit).</p>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <a class="btn primary" href="#/live">Go live first</a>
        <span class="chip">Sandbox available below</span>
      </div>
    </div>`}function Pm(e){return`
    <div class="card gb-battle" data-gb-status="pending">
      <h3>Challenge pending</h3>
      <p><strong>${o(e.challenger.name)}</strong> challenged <strong>${o(e.opponent.name)}</strong></p>
      <p class="muted">Mode: ${o(e.mode)} · opponent must Accept or Decline (demo controls below).</p>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <button type="button" class="btn primary" id="gbAccept">Accept</button>
        <button type="button" class="btn ghost" id="gbDecline">Decline</button>
      </div>
    </div>`}function _m(e){const t=Math.max(0,(e.endsAt||0)-Date.now()),s=wo(t);return`
    <div class="card gb-battle" data-gb-status="active">
      <div class="gb-countdown" aria-live="polite" aria-atomic="true">
        <span class="gb-countdown-label">Time left</span>
        <span class="gb-countdown-clock" id="gbClock">${o(s)}</span>
      </div>
      <div class="gb-scoreboard" role="group" aria-label="Live battle scores">
        <div class="gb-side">
          <div class="muted">Challenger</div>
          <strong>${o(e.challenger.name)}</strong>
          <div class="gb-score" id="gbScoreA" aria-label="Challenger score ${o(se(e.scoreA))}">${o(se(e.scoreA))}</div>
        </div>
        <div class="gb-vs" aria-hidden="true">VS</div>
        <div class="gb-side">
          <div class="muted">Opponent</div>
          <strong>${o(e.opponent.name)}</strong>
          <div class="gb-score" id="gbScoreB" aria-label="Opponent score ${o(se(e.scoreB))}">${o(se(e.scoreB))}</div>
        </div>
      </div>
      <p class="muted gb-score-text" id="gbScoreText">
        Live score: ${o(e.challenger.name)} ${o(se(e.scoreA))} —
        ${o(e.opponent.name)} ${o(se(e.scoreB))}
      </p>

      <h3 style="margin-top:16px">Send support (counts for you)</h3>
      <p class="muted" style="margin:0 0 8px">Voluntary gifts/tips to the creator. ${e.mode==="live"?"Uses Live tip/gift stubs when wallet has credits.":"Sandbox: scores local; wallet debited if balance allows."}</p>
      <div class="row wrap" style="gap:8px">
        <button type="button" class="btn" data-gb-gift="challenger" data-kind="tip" data-amt="1">Tip $1 (you)</button>
        <button type="button" class="btn primary" data-gb-gift="challenger" data-kind="gift" data-amt="2" data-label="🔥 Fire">Gift $2 (you)</button>
        <button type="button" class="btn" data-gb-gift="challenger" data-kind="gift" data-amt="5" data-label="💎 Diamond">Gift $5 (you)</button>
      </div>

      <h3 style="margin-top:16px">Demo · simulate opponent</h3>
      <p class="muted" style="margin:0 0 8px">Checker / sandbox: credit the opponent's score without switching accounts.</p>
      <div class="row wrap" style="gap:8px">
        <button type="button" class="btn ghost" data-gb-gift="opponent" data-kind="tip" data-amt="1">Opp tip $1</button>
        <button type="button" class="btn ghost" data-gb-gift="opponent" data-kind="gift" data-amt="2" data-label="🔥 Fire">Opp gift $2</button>
      </div>
    </div>`}function Om(e){var i,n;let t="Tie",s="Equal voluntary support · recognition for both";e.result==="win"&&e.winnerName?(t=`Winner · ${e.winnerName}`,s="Recognition only — no opponent funds transferred"):e.result==="declined"&&(t="Declined",s="Challenge was declined");const a=e.result==="win"?Pi("battle-win",{className:"gift-sticker gift-sticker--battle"}).html:"";return`
    <div class="card gb-battle gb-ended" data-gb-status="ended">
      <div class="row wrap" style="gap:8px;align-items:center">
        ${a?`<span class="gb-sticker-slot" aria-hidden="true">${a}</span>`:""}
        <div class="chip">${e.result==="win"?"Winner":e.result==="tie"?"Tie":"Ended"}</div>
      </div>
      <h3 class="gb-winner-banner">${o(t)}</h3>
      <p class="muted">${o(s)}</p>
      <p class="gb-score-text" style="margin:12px 0">
        Final: ${o(((i=e.challenger)==null?void 0:i.name)||"?")} ${o(se(e.scoreA))} —
        ${o(((n=e.opponent)==null?void 0:n.name)||"?")} ${o(se(e.scoreB))}
      </p>
      <button type="button" class="btn primary" id="gbClear">New challenge</button>
    </div>`}function qm(e,t){var i;const a=lr().map(n=>`<option value="${o(n.id)}">${o(n.name)} — ${o(n.bio)}</option>`).join("");return`
    <div class="card">
      <h3>Start a challenge</h3>
      <p class="muted">You are the challenger. Pick a demo opponent. ${e?"Live mode will record your gifts through Live support stubs.":"No live session — sandbox mode."}</p>
      ${t.invitationsEnabled?"":'<p class="gb-warn">Invitations are disabled in prefs — enable below to challenge.</p>'}
      <label class="field">
        <span>Opponent</span>
        <select id="gbOpponent">${a}</select>
      </label>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        ${e?`<button type="button" class="btn primary" id="gbStartLive" ${t.invitationsEnabled?"":"disabled"}>Challenge (Live mode)</button>`:""}
        <button type="button" class="btn ${e?"ghost":"primary"}" id="gbStartSandbox" ${t.invitationsEnabled?"":"disabled"}>
          Demo battle sandbox
        </button>
        <button type="button" class="btn ghost" id="gbTopUp">Add $10 demo wallet</button>
      </div>
      <p class="muted" style="margin:10px 0 0">Wallet: <strong id="gbWalletBal">${o(se(((i=L().wallet)==null?void 0:i.balance)||0))}</strong> · TEST MODE</p>
    </div>`}function Nm(){const e=vi(10),t=e.length?e.map((s,a)=>`<li class="gb-day-row">${it("battle-win",{className:"gift-sticker gift-sticker--xs"})}<span class="chip">#${a+1}</span><strong>${o(s.username)}</strong></li>`).join(""):'<li class="muted">No winners yet today · win a 60s battle</li>';return`
    <div class="card gb-day-board" id="gbDayWinners">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <h3 style="margin:0">Today&apos;s winners</h3>
        <span class="chip">${e.length}/10 · end of day</span>
      </div>
      <p class="muted" style="margin:6px 0 8px;font-size:12px">Sticker board · recognition only · TEST MODE</p>
      <ol class="gb-list gb-day-list">${t}</ol>
    </div>`}function Bm(){const e=Kl(12),t=Ul(15),s=e.length?e.map(i=>{var r,l;const n=i.result==="win"?`Winner ${i.winnerName}`:i.result==="tie"?"Tie":i.result||i.status;return`<li>
            <strong>${o(n)}</strong>
            <span class="muted"> · ${o(((r=i.challenger)==null?void 0:r.name)||"?")} ${o(se(i.scoreA))} vs ${o(((l=i.opponent)==null?void 0:l.name)||"?")} ${o(se(i.scoreB))} · ${o(j(i.endedAt||i.createdAt||0))} · ${o(i.mode||"")}</span>
          </li>`}).join(""):'<li class="muted">No battles yet.</li>';return`
    <div class="card">
      <h3>Top winners (local)</h3>
      <ol class="gb-list">${t.length?t.map((i,n)=>`<li><span class="chip">#${n+1}</span> <strong>${o(i.username)}</strong> <span class="muted">${i.wins} win${i.wins===1?"":"s"} · ${o(se(i.points))} battle pts</span></li>`).join(""):'<li class="muted">Win a battle to appear here.</li>'}</ol>
    </div>
    <div class="card">
      <h3>Battle history</h3>
      <ul class="gb-list">${s}</ul>
    </div>`}function Rm(e){return`
    <div class="card">
      <h3>Battle prefs</h3>
      <label class="toggle"><span>Allow battle invitations</span>
        <input type="checkbox" id="gbPrefInvites" ${e.invitationsEnabled?"checked":""}/>
      </label>
      <p class="muted" style="margin:8px 0 0">When off, new challenges are blocked. Existing active battles can still finish.</p>
    </div>`}function jm(){const{user:e,live:t}=L();if(!e)return Dm();fi();const s=hi(),a=mi(),i=Gl(),n=!!(t&&!t.endedAt);let r="";(s==null?void 0:s.status)==="pending"?r=Pm(s):(s==null?void 0:s.status)==="active"?r=_m(s):(s==null?void 0:s.status)==="ended"?r=Om(s):r=qm(n,a);const l=`
    ${Mm()}
    ${Lm(i)}
    ${Nm()}
    ${Im(n,t)}
    ${r}
    ${Bm()}
    ${Rm(a)}
  `;return _("Gift Battles",l,{lead:"Runs during Live · not a separate stream · 60s voluntary gift battles · not wagers · TEST MODE",badge:(s==null?void 0:s.status)==="active"?"BATTLE":i?"CHAMP":void 0})}function Fm(e){var a,i,n,r,l,u,c;Cn(),(a=e.querySelector("#gbPrefInvites"))==null||a.addEventListener("change",p=>{Ol({invitationsEnabled:p.target.checked}),h(p.target.checked?"Invitations on":"Invitations off")}),(i=e.querySelector("#gbTopUp"))==null||i.addEventListener("click",()=>{var m;Qs(10,"Gift battle demo top-up · TEST MODE"),h("+$10 demo wallet");const p=e.querySelector("#gbWalletBal");p&&(p.textContent=se(((m=L().wallet)==null?void 0:m.balance)||0))});const t=p=>{const m=e.querySelector("#gbOpponent"),g=m==null?void 0:m.value,f=lr().find(y=>y.id===g),b=ql({opponentId:g,opponentName:f==null?void 0:f.name,mode:p});if((b==null?void 0:b.error)==="signin")return h("Sign in first");if((b==null?void 0:b.error)==="invites_disabled")return h("Invitations disabled");if((b==null?void 0:b.error)==="not_live")return h("Not live — use sandbox");if((b==null?void 0:b.error)==="battle_in_progress")return h("Battle already in progress");if((b==null?void 0:b.error)==="self")return h("Pick another fan");h("Challenge sent · waiting for accept"),ft()};(n=e.querySelector("#gbStartLive"))==null||n.addEventListener("click",()=>t("live")),(r=e.querySelector("#gbStartSandbox"))==null||r.addEventListener("click",()=>t("sandbox")),(l=e.querySelector("#gbAccept"))==null||l.addEventListener("click",()=>{const p=Nl();if((p==null?void 0:p.error)==="no_pending")return h("No pending challenge");if((p==null?void 0:p.error)==="invites_disabled")return h("Invitations disabled");h("Battle started · 1:00"),ft()}),(u=e.querySelector("#gbDecline"))==null||u.addEventListener("click",()=>{const p=Bl();if(p!=null&&p.error)return h(String(p.error));h("Challenge declined"),ft()}),(c=e.querySelector("#gbClear"))==null||c.addEventListener("click",()=>{const p=Rl();if(p!=null&&p.error)return h("Battle still running");ft()}),e.querySelectorAll("[data-gb-gift]").forEach(p=>{p.addEventListener("click",()=>{var v;const m=Fl({side:p.dataset.gbGift,kind:p.dataset.kind||"gift",amount:Number(p.dataset.amt)||2,label:p.dataset.label||""});if((m==null?void 0:m.error)==="signin")return h("Sign in first");if((m==null?void 0:m.error)==="no_active"||(m==null?void 0:m.error)==="ended")return h("No active battle");if((m==null?void 0:m.error)==="offline")return h("Live offline — use sandbox");if((m==null?void 0:m.error)==="insufficient")return h("Need wallet credits");if(h(p.dataset.gbGift==="opponent"?"Opponent support (demo)":"Support sent · demo"),((v=m.battle)==null?void 0:v.status)==="ended"){h(m.battle.result==="win"?`Winner · ${m.battle.winnerName}`:"Tie!"),ft();return}const g=e.querySelector("#gbScoreA"),f=e.querySelector("#gbScoreB"),b=e.querySelector("#gbScoreText"),y=m.battle;g&&f&&y?(g.textContent=se(y.scoreA),g.setAttribute("aria-label",`Challenger score ${se(y.scoreA)}`),f.textContent=se(y.scoreB),f.setAttribute("aria-label",`Opponent score ${se(y.scoreB)}`),b&&(b.textContent=`Live score: ${y.challenger.name} ${se(y.scoreA)} — ${y.opponent.name} ${se(y.scoreB)}`)):ft()})});const s=e.querySelector("#gbClock");s&&(Us=setInterval(()=>{const p=fi();if(!p||p.status==="ended"){Cn(),(p==null?void 0:p.status)==="ended"&&h(p.result==="win"?`Winner · ${p.winnerName}`:"Tie!"),ft();return}const m=Math.max(0,(p.endsAt||0)-Date.now());s.textContent=wo(m)},250))}function ke(){R("#/multiguest")}function Km(e){return(String(e||"?").trim().slice(0,2)||"?").toUpperCase()}function Gm(e){const t=L().user;return!t||!e?!1:(t.following||[]).includes(e)}function _i(e){return((e==null?void 0:e.guests)||[]).filter(t=>t.status==="joined")}function Um(e){return((e==null?void 0:e.guests)||[]).filter(t=>t.status==="invited")}function Ya(e,t){var a,i;return`${Number(((i=(a=e==null?void 0:e.giftSplit)==null?void 0:a.shares)==null?void 0:i[t])||0).toFixed(0)}%`}function Vm(){return _("Multi-Guest Live",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Start a multi-guest demo session as host. No camera / WebRTC — fake stage tiles only.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Invite 2–4 co-hosts · disclosed gift splits · TEST MODE"})}function zm(){return`
    <div class="card mg-intro">
      <h3>Multi-Guest Livestreams</h3>
      <ul class="mg-rules">
        <li>Host invites <strong>2–4 guests</strong> with separate profiles &amp; Follow.</li>
        <li>Fake stage tiles only — <strong>no camera / WebRTC</strong> in TEST MODE.</li>
        <li>Join / leave, host mute &amp; remove, shared chat stub.</li>
        <li>Before “broadcast”, disclose <strong>gift split</strong> (equal or custom % totaling 100%).</li>
        <li>Display-only split intent — no real payouts.</li>
      </ul>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <a class="btn ghost" href="#/live">Solo Live</a>
        <a class="btn ghost" href="#/music">Music / Coming Soon</a>
        <a class="btn ghost" href="#/giftbattles">Gift Battles</a>
      </div>
      <p class="muted" style="margin:10px 0 0">TEST MODE · PIKK branding required on every collab stage.</p>
    </div>`}function _a({role:e,name:t,sub:s,muted:a,empty:i,followId:n}){if(i)return`
      <div class="mg-tile mg-tile-empty" aria-label="Empty guest slot">
        <div class="mg-avatar mg-avatar-empty">+</div>
        <div class="mg-tile-name muted">Open slot</div>
        <div class="mg-tile-sub muted">Invite a guest</div>
      </div>`;const r=a?'<span class="chip">Muted</span>':"",l=n&&n!=="dbs"?Gm(n)?`<button class="btn ghost mg-follow" data-follow="${o(n)}" data-on="1">Following</button>`:`<button class="btn ghost mg-follow" data-follow="${o(n)}" data-on="0">Follow</button>`:n==="dbs"?'<a class="btn ghost" href="#/profile">Follow PIKK</a>':"";return`
    <div class="mg-tile ${e==="host"?"mg-tile-host":""} ${a?"mg-muted":""}">
      <div class="mg-avatar" aria-hidden="true">${o(Km(t))}</div>
      <div class="mg-tile-name">${o(t)}</div>
      <div class="mg-tile-sub">${o(s||"")} ${r}</div>
      <div class="mg-tile-actions">${l}</div>
    </div>`}function Hm(e){var n,r;const t=_i(e),s=[];s.push(_a({role:"host",name:e.hostName,sub:"Host",followId:e.hostId===((n=L().user)==null?void 0:n.id)?"dbs":e.hostId}));for(let l=0;l<(e.maxGuests||4);l++){const u=t[l];u?s.push(_a({role:"guest",name:u.username,sub:"Guest",muted:u.muted,followId:u.id})):s.push(_a({empty:!0}))}const a=(r=e.giftSplit)!=null&&r.disclosed?'<span class="chip">Split disclosed</span>':'<span class="chip">Split pending</span>',i=e.broadcastReady?'<span class="chip">Broadcast ready</span>':'<span class="chip">Setup</span>';return`
    <div class="card mg-stage">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div>
          <div class="row wrap" style="gap:8px;align-items:center">
            <img class="mg-brand-logo" src="/brand/pikk-official-approved.jpg" alt="PIKK" />
            <div>
              <strong>${o(e.title)}</strong>
              <div class="muted" style="font-size:12px">@${o(e.hostName)} · Multi-Guest · Follow DatBoiSkeet</div>
            </div>
          </div>
        </div>
        <div class="row wrap" style="gap:6px">
          <span class="chip"><span class="dot" aria-hidden="true"></span> DEMO</span>
          ${i}
          ${a}
        </div>
      </div>
      <p class="muted mg-stage-note">TEST MODE · placeholder tiles · no camera / bandwidth stream</p>
      <div class="mg-grid" role="list">${s.join("")}</div>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <a class="btn ghost" href="#/music">PIKK Music</a>
        <a class="btn ghost" href="#/live">Solo Live</a>
        <button class="btn ghost danger" id="mgEnd">End session</button>
      </div>
    </div>`}function Wm(e){const t=Vl(),s=new Set((e.guests||[]).filter(p=>p.status==="invited"||p.status==="joined").map(p=>p.id)),a=t.filter(p=>p.id!==e.hostId&&!s.has(p.id)),i=Um(e),n=_i(e),r=a.length?a.map(p=>`<option value="${o(p.id)}">${o(p.username)} — ${o(p.bio||"demo")}</option>`).join(""):'<option value="">No more demo guests</option>',l=i.length?i.map(p=>`
        <li class="mg-guest-row">
          <span><strong>@${o(p.username)}</strong> <span class="chip">Invited</span></span>
          <span class="row wrap" style="gap:6px">
            <button class="btn primary mg-accept" data-id="${o(p.id)}">Accept (sim)</button>
            <button class="btn ghost mg-decline" data-id="${o(p.id)}">Decline</button>
          </span>
        </li>`).join(""):'<li class="muted">No pending invites.</li>',u=n.length?n.map(p=>`
        <li class="mg-guest-row">
          <span>
            <strong>@${o(p.username)}</strong>
            ${p.muted?'<span class="chip">Muted</span>':'<span class="chip">On stage</span>'}
            <span class="muted" style="font-size:12px"> · gift ${o(Ya(e,p.id))}</span>
          </span>
          <span class="row wrap" style="gap:6px">
            <button class="btn ghost mg-mute" data-id="${o(p.id)}" data-muted="${p.muted?"1":"0"}">
              ${p.muted?"Unmute":"Mute"}
            </button>
            <button class="btn ghost mg-leave" data-id="${o(p.id)}">Leave (sim)</button>
            <button class="btn ghost danger mg-remove" data-id="${o(p.id)}">Remove</button>
          </span>
        </li>`).join(""):'<li class="muted">No guests on stage yet — invite below.</li>',c=n.length+i.length>=(e.maxGuests||4);return`
    <div class="card">
      <h3>Guests &amp; moderation</h3>
      <p class="muted" style="margin:0 0 8px">Host simulates Accept/Decline. Up to ${o(String(e.maxGuests||4))} guests.</p>
      <ul class="mg-list">${u}</ul>
      <h4 style="margin:14px 0 6px">Pending invites</h4>
      <ul class="mg-list">${l}</ul>
      <div class="field" style="margin-top:12px">
        <span>Invite demo guest</span>
        <div class="row wrap" style="gap:8px;margin-top:6px">
          <select id="mgInviteSelect" ${c||!a.length?"disabled":""}>${r}</select>
          <button class="btn primary" id="mgInviteBtn" ${c||!a.length?"disabled":""}>Invite</button>
        </div>
      </div>
      ${c?'<p class="muted" style="margin:8px 0 0">Guest slots full (joined + pending).</p>':""}
    </div>`}function Ym(e){var r,l;const t=_i(e),s=[{id:e.hostId,username:e.hostName,role:"Host"},...t.map(u=>({id:u.id,username:u.username,role:"Guest"}))],a=((r=e.giftSplit)==null?void 0:r.mode)||"equal",i=!!((l=e.giftSplit)!=null&&l.disclosed),n=s.map(u=>{var p,m;const c=Number(((m=(p=e.giftSplit)==null?void 0:p.shares)==null?void 0:m[u.id])||0);return`
        <li class="mg-split-row">
          <span><strong>@${o(u.username)}</strong> <span class="chip">${o(u.role)}</span></span>
          ${a==="custom"&&!i?`<label class="mg-pct"><input type="number" min="0" max="100" step="1" class="mg-share-input" data-id="${o(u.id)}" value="${o(String(c))}" /> %</label>`:`<span class="chip">${o(String(Math.round(c)))}%</span>`}
        </li>`}).join("");return`
    <div class="card mg-split">
      <h3>Gift split disclosure</h3>
      <p class="muted">Required before broadcast when multiple hosts/guests share gifts. Display-only · TEST MODE · not a real payout.</p>
      <div class="row wrap" style="gap:8px;margin:10px 0">
        <button class="btn ${a==="equal"?"primary":"ghost"}" id="mgSplitEqual">Equal split</button>
        <button class="btn ${a==="custom"?"primary":"ghost"}" id="mgSplitCustom">Custom %</button>
      </div>
      <ul class="mg-list">${n}</ul>
      <p class="muted" style="margin:8px 0 0">Host share: <strong>${o(Ya(e,e.hostId))}</strong>
        · Guests: ${t.length?t.map(u=>`@${o(u.username)} ${o(Ya(e,u.id))}`).join(" · "):"none yet"}</p>
      ${i?`<p class="mg-ok" style="margin:10px 0 0">✓ Split disclosed ${e.giftSplit.disclosedAt?"· "+j(e.giftSplit.disclosedAt):""}. Broadcast ready (demo).</p>`:`<div class="row wrap" style="gap:8px;margin-top:12px">
               ${a==="custom"?'<button class="btn" id="mgSplitApply">Apply custom %</button>':""}
               <button class="btn primary" id="mgDisclose">Disclose &amp; ready broadcast</button>
             </div>
             <p class="muted" style="margin:8px 0 0">Custom % must total 100 among host + joined guests.</p>`}
    </div>`}function Jm(e){return`
    <div class="card">
      <h3>Shared chat</h3>
      <div class="mg-chat" id="mgChat">${(e.chat||[]).slice(-40).map(s=>`
      <div class="mg-chat-row ${s.system?"system":""}">
        <strong>${o(s.username)}</strong>
        <span>${o(s.text)}</span>
      </div>`).join("")||'<p class="muted">No messages yet.</p>'}</div>
      <div class="row" style="gap:8px;margin-top:10px">
        <input id="mgChatInput" placeholder="Say something on the collab…" maxlength="280" style="flex:1" />
        <button class="btn primary" id="mgChatSend">Send</button>
      </div>
    </div>`}function Tn(e){return e.length?`
    <div class="card">
      <h3>Recent multi-guest sessions</h3>
      <ul class="mg-list">${e.slice(0,8).map(s=>{var i;const a=(s.guests||[]).filter(n=>n.status==="joined"||n.joinedAt).length;return`<li><strong>${o(s.title)}</strong> · ${o(String(a))} guests · ${j(s.endedAt||s.startedAt)}
        ${(i=s.giftSplit)!=null&&i.disclosed?" · split disclosed":""}</li>`}).join("")}</ul>
    </div>`:`
      <div class="card">
        <h3>Recent multi-guest sessions</h3>
        <p class="muted" style="margin:0">No ended sessions yet.</p>
      </div>`}function Qm(e){return`
    <div class="card">
      <h3>Start multi-guest session</h3>
      <p class="muted">You host as <strong>@${o(e.username)}</strong>. Invite demo contacts next — no real stream.</p>
      <div class="field" style="margin-top:10px">
        <span>Session title</span>
        <input id="mgTitle" maxlength="80" placeholder="e.g. Friday collab freestyle" value="PIKK Multi-Guest Demo" />
      </div>
      <button class="btn primary" id="mgStart" style="margin-top:12px">Start as host</button>
    </div>`}function Xm(){const t=L().user;if(!t)return Vm();ua();const s=fs(),a=zl();return!s||s.endedAt?_("Multi-Guest Live",`${zm()}${Qm(t)}${Tn(a)}`,{lead:"2–4 co-hosts · gift split disclosure · TEST MODE"}):_("Multi-Guest Live",`${Hm(s)}${Wm(s)}${Ym(s)}${Jm(s)}${Tn(a)}`,{lead:"Active collab session · fake stage · TEST MODE"})}function Zm(e){var s,a,i,n,r,l,u,c,p;if(!e)return;(s=e.querySelector("#mgStart"))==null||s.addEventListener("click",()=>{var f;const m=((f=e.querySelector("#mgTitle"))==null?void 0:f.value)||"",g=Hl(m);if(g.error==="signin")return h("Sign in first");if(g.error==="session_in_progress")return h("Session already active");h("Multi-guest session started"),ke()}),(a=e.querySelector("#mgEnd"))==null||a.addEventListener("click",()=>{const m=sc();if(m.error)return h(m.error==="host_only"?"Host only":"No session");h("Session ended"),ke()}),(i=e.querySelector("#mgInviteBtn"))==null||i.addEventListener("click",()=>{var f,b;const m=(f=e.querySelector("#mgInviteSelect"))==null?void 0:f.value;if(!m)return h("Pick a guest");const g=Wl(m);if(g.error==="full")return h("Guest slots full");if(g.error==="already_invited")return h("Already invited");if(g.error)return h("Invite failed: "+g.error);h("Invited @"+(((b=g.guest)==null?void 0:b.username)||m)),ke()}),e.querySelectorAll(".mg-accept").forEach(m=>{m.addEventListener("click",()=>{var f;const g=Yl(m.getAttribute("data-id"));if(g.error==="full")return h("Stage full");if(g.error)return h("Accept failed");h("@"+(((f=g.guest)==null?void 0:f.username)||"")+" joined"),ke()})}),e.querySelectorAll(".mg-decline").forEach(m=>{m.addEventListener("click",()=>{if(Jl(m.getAttribute("data-id")).error)return h("Decline failed");h("Invite declined"),ke()})}),e.querySelectorAll(".mg-mute").forEach(m=>{m.addEventListener("click",()=>{const g=m.getAttribute("data-id"),f=m.getAttribute("data-muted")==="1";if(Zl(g,!f).error)return h("Mute failed");h(f?"Unmuted":"Muted"),ke()})}),e.querySelectorAll(".mg-leave").forEach(m=>{m.addEventListener("click",()=>{if(Ql(m.getAttribute("data-id")).error)return h("Leave failed");h("Guest left"),ke()})}),e.querySelectorAll(".mg-remove").forEach(m=>{m.addEventListener("click",()=>{if(Xl(m.getAttribute("data-id")).error)return h("Remove failed");h("Guest removed"),ke()})}),e.querySelectorAll(".mg-follow").forEach(m=>{m.addEventListener("click",()=>{const g=m.getAttribute("data-follow");m.getAttribute("data-on")==="1"?(oa(g),h("Unfollowed")):(ra(g),h("Following")),ke()})}),(n=e.querySelector("#mgSplitEqual"))==null||n.addEventListener("click",()=>{if(as({mode:"equal",disclose:!1}).error)return h("Split failed");h("Equal split applied"),ke()}),(r=e.querySelector("#mgSplitCustom"))==null||r.addEventListener("click",()=>{var f;const m=fs();if(as({mode:"custom",shares:((f=m==null?void 0:m.giftSplit)==null?void 0:f.shares)||{},disclose:!1}).error)return h("Could not switch to custom");h("Custom split — edit % then Apply"),ke()}),(l=e.querySelector("#mgSplitApply"))==null||l.addEventListener("click",()=>{const m={};e.querySelectorAll(".mg-share-input").forEach(f=>{m[f.getAttribute("data-id")]=Number(f.value)||0});const g=as({mode:"custom",shares:m,disclose:!1});if(g.error==="split_total")return h(`Percents total ${g.total}% — need 100%`);if(g.error)return h("Apply failed");h("Custom split saved"),ke()}),(u=e.querySelector("#mgDisclose"))==null||u.addEventListener("click",()=>{var f;const m=fs();if(((f=m==null?void 0:m.giftSplit)==null?void 0:f.mode)==="custom"){const b={},y=e.querySelectorAll(".mg-share-input");if(y.length){y.forEach(w=>{b[w.getAttribute("data-id")]=Number(w.value)||0});const v=as({mode:"custom",shares:b,disclose:!1});if(v.error==="split_total")return h(`Percents total ${v.total}% — need 100%`)}}const g=tc();if(g.error==="split_total")return h(`Percents total ${g.total}% — need 100%`);if(g.error)return h("Disclose failed");h("Gift split disclosed · broadcast ready (demo)"),ke()});const t=()=>{const m=e.querySelector("#mgChatInput"),g=(m==null?void 0:m.value)||"",f=ec(g);if(f.error==="empty")return h("Type a message");if(f.error)return h("Chat failed");m&&(m.value=""),ke()};(c=e.querySelector("#mgChatSend"))==null||c.addEventListener("click",t),(p=e.querySelector("#mgChatInput"))==null||p.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),t())})}function we(e){R(e?`#/fanclubs?club=${encodeURIComponent(e)}`:"#/fanclubs")}function We(e="DemoFan"){const{user:t}=L();if(t)return t;const s=jt(e);return h(`Signed in as ${e} · local demo`),s||L().user}function So(e){return e==="paid"?"Paid / Skeet+":e==="members"?"Members only":"Public"}function eh(e,t){const s=t===e.id,a=[e.official?'<span class="chip">Official DBS</span>':"",`<span class="chip">${o(So(e.privacy))}</span>`,`<span class="chip">${e.memberCount||0} members</span>`].filter(Boolean).join(" ");return`<button type="button" class="fanclub-card${s?" on":""}" data-open-club="${o(e.id)}" data-search="${o(`${e.name||""} ${e.hostName||""} ${e.description||""}`)}" aria-label="Open ${o(e.name)} club">
    <div class="row" style="gap:10px;align-items:center">
      <img src="${o(e.graphic||"/brand/logo-dbs-v3@2x.webp")}" alt="" width="48" height="48" style="border-radius:12px;object-fit:cover;background:#111" />
      <div style="flex:1;min-width:0">
        <strong>${o(e.name)}</strong>
        <div class="muted" style="font-size:12px;margin-top:2px">Host @${o(e.hostName)} · Discover DatBoiSkeet</div>
        <div class="row wrap" style="gap:6px;margin-top:6px">${a}</div>
      </div>
    </div>
  </button>`}function th(e){const t=xs(e);if(!t)return'<div class="card"><p class="muted" style="margin:0">Club not found.</p><button class="btn" data-back-list>Back to clubs</button></div>';const s=L().user,a=yr(t.id),i=Mc(t.id),n=bs(t.id),r=kr(t.id),l=Et(),u=r.ok?"":`<div class="card" style="border-color:rgba(245,158,11,.35)">
          <h3 style="margin:0 0 6px">${t.privacy==="paid"?"Skeet+ room":"Members only"}</h3>
          <p class="muted" style="margin:0 0 10px">${t.privacy==="paid"?"This room uses membership permissions (Skeet+ or higher). TEST MODE unlock below — no real charge.":"Join the club to enter the discussion room."}</p>
          ${t.privacy==="paid"?`<button class="btn primary" id="fcUnlockSkeet">Unlock Skeet+ · TEST MODE</button>
                 <a class="btn" href="#/pricing">Pricing</a>
                 <p class="chip" style="margin-top:8px">Current membership: ${o(l||"none")}</p>`:`<button class="btn primary" data-join="${o(t.id)}">Join club</button>`}
        </div>`,c=r.ok?Lc(t.id):[],p=r.ok?c.length?c.map(g=>{const f=n?`<div class="row wrap" style="gap:6px;margin-top:6px">
                   <button class="btn ghost" data-pin="${o(g.id)}" data-club="${o(t.id)}">${g.pinned?"Unpin":"Pin"} · mod</button>
                   <button class="btn ghost" data-remove="${o(g.id)}" data-club="${o(t.id)}">Remove · mod</button>
                 </div>`:"";return`<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between;gap:8px">
                <strong>@${o(g.username)}</strong>
                <span class="muted" style="font-size:12px">${o(j(g.at))}${g.pinned?" · pinned":""}</span>
              </div>
              <p style="margin:6px 0 0">${o(g.text)}</p>
              ${f}
            </li>`}).join(""):'<li class="muted" style="padding:8px 0">No posts yet — start the discussion.</li>':"",m=r.ok?`<form id="fcPostForm" class="card" style="margin-top:10px">
         <label class="muted" style="font-size:12px">Public discussion · local posts</label>
         <textarea id="fcPostText" rows="3" maxlength="500" placeholder="Share with the club…" style="width:100%;margin:8px 0;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit;resize:vertical"></textarea>
         <button class="btn primary" type="submit">Post</button>
         <span class="chip">TEST MODE · localStorage</span>
       </form>`:"";return`
    <div class="card fanclubs-detail">
      <button class="btn ghost" data-back-list style="margin-bottom:8px">← All clubs</button>
      <div class="row" style="gap:12px;align-items:flex-start">
        <img src="${o(t.graphic||"/brand/logo-dbs-v3@2x.webp")}" alt="" width="72" height="72" style="border-radius:16px;object-fit:cover" />
        <div style="flex:1">
          <h2 style="margin:0 0 4px">${o(t.name)}</h2>
          <p class="muted" style="margin:0 0 8px">${o(t.description)}</p>
          <div class="row wrap" style="gap:6px">
            ${t.official?'<span class="chip">Official DatBoiSkeet</span>':""}
            <span class="chip">${o(So(t.privacy))}</span>
            <span class="chip">${t.memberCount||0} members</span>
            <span class="chip">${(t.followers||[]).length} following</span>
          </div>
        </div>
      </div>
      <div class="row wrap" style="gap:8px;margin-top:14px">
        ${a?`<button class="btn" data-leave="${o(t.id)}">Leave club</button>`:`<button class="btn primary" data-join="${o(t.id)}">Join club</button>`}
        ${i?`<button class="btn" data-unfollow="${o(t.id)}">Unfollow</button>`:`<button class="btn" data-follow="${o(t.id)}">Follow · optional</button>`}
        <a class="btn" href="#/community">Lounge</a>
        <a class="btn" href="#/music">Music</a>
        <a class="btn" href="#/explore">Explore</a>
      </div>
      <p class="muted" style="font-size:12px;margin:10px 0 0">Follows are optional — DBS never forces a follow. Channel-style Lounge (Discord-inspired UX) — music-first, DatBoiSkeet branded.</p>
      ${s?"":'<p class="chip" style="margin-top:8px">Sign in to join · local demo</p>'}
      ${n?'<p class="chip" style="margin-top:8px">Mod tools · TEST MODE</p>':""}
    </div>
    ${u}
    ${r.ok?`<div class="card">
             <h3 style="margin:0 0 4px">Discussion</h3>
             <p class="muted" style="margin:0 0 8px;font-size:12px">Local posts in dbs_v1 · mods can pin/remove</p>
             <ul class="list-plain" id="fcPosts">${p}</ul>
           </div>
           ${m}`:""}
  `}function sh(e){var c;Ge();const t=vr(),s=((c=e==null?void 0:e.query)==null?void 0:c.club)||"",{user:a}=L(),i=t.map(p=>eh(p,s)).join(""),n=t.filter(p=>p.privacy==="public").length,r=t.length-n,l=`
    <div class="card" id="fcCreateCard">
      <h3 style="margin:0 0 6px">Create club · TEST MODE</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">Approved creators / demo admin. Custom name + graphic URL. Optional paid/private room using membership permissions.</p>
      <form id="fcCreateForm">
        <label class="muted" style="font-size:12px">Name</label>
        <input id="fcName" maxlength="48" required placeholder="My Fan Club" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit" />
        <label class="muted" style="font-size:12px">Description</label>
        <textarea id="fcDesc" maxlength="280" rows="2" placeholder="What this club is about…" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit;resize:vertical"></textarea>
        <label class="muted" style="font-size:12px">Graphic URL</label>
        <input id="fcGraphic" placeholder="/brand/logo-dbs-v3@2x.webp" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit" />
        <label class="muted" style="font-size:12px">Room privacy</label>
        <select id="fcPrivacy" style="width:100%;margin:4px 0 12px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit">
          <option value="public">Public discussion</option>
          <option value="members">Members only</option>
          <option value="paid">Paid / Skeet+ gate</option>
        </select>
        <button class="btn primary" type="submit">Create club</button>
        <button class="btn ghost" type="button" id="fcSeedBtn">Reseed demos</button>
        ${a?"":'<button class="btn" type="button" id="fcSignIn">Sign in demo</button>'}
        <button class="btn ghost" type="button" id="fcAdmin">Toggle demo admin</button>
        <p class="chip" style="margin-top:10px">TEST MODE · no real payments · DBS branding stays prominent</p>
      </form>
    </div>`,u=s?th(s):`
      <section class="fanclubs-hero" aria-labelledby="fanclubs-heading">
        <div class="fanclubs-eyebrow">PIKK CONNECT <span aria-hidden="true">◆</span> CREATOR COMMUNITIES</div>
        <h2 id="fanclubs-heading">Find your people. Build your club.</h2>
        <p>Explore creator-led communities, join conversations, and follow the artists you love. Your existing clubs and local demo activity stay right here.</p>
        <div class="fanclubs-hero-actions">
          <button class="btn primary" type="button" data-fc-jump="fcDiscover">Discover clubs</button>
          <button class="btn ghost" type="button" data-fc-jump="fcCreateCard">Create a club</button>
        </div>
        <div class="fanclubs-hero-note">TEST MODE · Clubs, memberships and posts are browser-local demo data</div>
      </section>
      <section class="fanclubs-stats" aria-label="Club directory overview">
        <div><span>Available clubs</span><strong>${t.length}</strong><small>In this demo</small></div>
        <div><span>Public rooms</span><strong>${n}</strong><small>Open discussions</small></div>
        <div><span>Private / gated</span><strong>${r}</strong><small>Demo access controls</small></div>
      </section>
      <section class="card fanclubs-discover" id="fcDiscover" aria-labelledby="fcDiscoverTitle">
        <div class="fanclubs-discover-head">
          <div><h3 id="fcDiscoverTitle">Discover clubs</h3><p class="muted">Find communities by club, host or topic.</p></div>
          <a class="btn ghost" href="#/community">Community Lounge</a>
        </div>
        <label for="fcSearch">Search clubs</label>
        <input id="fcSearch" type="search" autocomplete="off" placeholder="Search clubs, creators or interests" />
        <p id="fcSearchStatus" class="muted" role="status" aria-live="polite">Showing ${t.length} of ${t.length} clubs</p>
        <div class="fanclubs-grid">${i||'<p class="muted">No clubs yet.</p>'}</div>
        <p id="fcNoResults" class="muted" hidden>No clubs match your search. Try a different name or topic.</p>
      </section>
      ${l}
    `;return _("Fan Clubs",`<div class="fanclubs-studio">${u}</div>`,{lead:"Creator communities inside DBS Lounge · DEMO.",badge:"Phase 2 demo"})}function ah(e){var t,s,a,i,n,r,l,u;e.querySelectorAll("[data-fc-jump]").forEach(c=>c.addEventListener("click",()=>{var m;const p=c.getAttribute("data-fc-jump");(m=e.querySelector(`#${p}`))==null||m.scrollIntoView({behavior:"smooth",block:"start"})})),(t=e.querySelector("#fcSearch"))==null||t.addEventListener("input",c=>{const p=String(c.currentTarget.value||"").trim().toLocaleLowerCase(),m=[...e.querySelectorAll(".fanclub-card[data-search]")];let g=0;m.forEach(y=>{const v=(y.dataset.search||"").toLocaleLowerCase().includes(p);y.hidden=!v,v&&(g+=1)});const f=e.querySelector("#fcSearchStatus");f&&(f.textContent=`Showing ${g} of ${m.length} clubs`);const b=e.querySelector("#fcNoResults");b&&(b.hidden=g>0||!p)}),e.querySelectorAll("[data-open-club]").forEach(c=>{c.addEventListener("click",()=>we(c.getAttribute("data-open-club")))}),(s=e.querySelector("[data-back-list]"))==null||s.addEventListener("click",()=>we()),(a=e.querySelector("#fcSignIn"))==null||a.addEventListener("click",()=>{We("DemoFan"),we()}),(i=e.querySelector("#fcAdmin"))==null||i.addEventListener("click",()=>{var p,m;We("DemoAdmin");const c=!ae();ks(c),h(c?"Demo admin on":"Demo admin off"),we(((p=e.querySelector("[data-leave],[data-join]"))==null?void 0:p.getAttribute("data-leave"))||((m=e.querySelector("[data-join]"))==null?void 0:m.getAttribute("data-join"))||void 0)}),(n=e.querySelector("#fcSeedBtn"))==null||n.addEventListener("click",()=>{Ge({force:!0}),h("Demo clubs reseeded"),we()}),(r=e.querySelector("#fcCreateForm"))==null||r.addEventListener("submit",c=>{var y,v,w,$,C;c.preventDefault(),We("DemoCreator");const p=(y=e.querySelector("#fcName"))==null?void 0:y.value,m=(v=e.querySelector("#fcDesc"))==null?void 0:v.value,g=((w=e.querySelector("#fcGraphic"))==null?void 0:w.value)||"/brand/logo-dbs-v3@2x.webp",f=(($=e.querySelector("#fcPrivacy"))==null?void 0:$.value)||"public",b=Ac({name:p,description:m,graphic:g,privacy:f});if(b.error==="signin")return h("Sign in required");if(b.error==="name")return h("Name required");h("Club created · TEST MODE"),we((C=b.club)==null?void 0:C.id)}),e.querySelectorAll("[data-join]").forEach(c=>{c.addEventListener("click",()=>{We();const p=c.getAttribute("data-join");if(br(p).error)return h("Could not join");h("Joined club"),we(p)})}),e.querySelectorAll("[data-leave]").forEach(c=>{c.addEventListener("click",()=>{We();const p=c.getAttribute("data-leave"),m=Cc(p);if(m.error==="host")return h("Host cannot leave — transfer later");if(m.error)return h("Could not leave");h("Left club"),we(p)})}),e.querySelectorAll("[data-follow]").forEach(c=>{c.addEventListener("click",()=>{We();const p=c.getAttribute("data-follow");Tc(p),h("Following · optional"),we(p)})}),e.querySelectorAll("[data-unfollow]").forEach(c=>{c.addEventListener("click",()=>{We();const p=c.getAttribute("data-unfollow");Dc(p),h("Unfollowed"),we(p)})}),(l=e.querySelector("#fcUnlockSkeet"))==null||l.addEventListener("click",()=>{We(),na("skeet+",!0),h("Skeet+ unlocked · TEST MODE");const c=new URLSearchParams(location.hash.split("?")[1]||"");we(c.get("club")||void 0)}),(u=e.querySelector("#fcPostForm"))==null||u.addEventListener("submit",c=>{var b;c.preventDefault(),We();const m=new URLSearchParams(location.hash.split("?")[1]||"").get("club"),g=(b=e.querySelector("#fcPostText"))==null?void 0:b.value,f=Ic(m,g);if(f.error==="gated")return h("Room gated");if(f.error==="empty")return h("Write something");if(f.error)return h("Could not post");h("Posted"),we(m)}),e.querySelectorAll("[data-pin]").forEach(c=>{c.addEventListener("click",()=>{const p=c.getAttribute("data-club");if(Pc(p,c.getAttribute("data-pin")).error==="mod")return h("Mods only");h("Pin toggled · TEST MODE"),we(p)})}),e.querySelectorAll("[data-remove]").forEach(c=>{c.addEventListener("click",()=>{const p=c.getAttribute("data-club");if(_c(p,c.getAttribute("data-remove")).error==="mod")return h("Mods only");h("Post removed · TEST MODE"),we(p)})})}function Ja(){R("#/loyalty")}function Qa(){const{user:e}=L();if(e)return e;const t=jt("LoyalFan");return h("Signed in as LoyalFan · local demo"),t||L().user}function Ns(e,t,s){var i;Qa();const a=pd(e,{points:t,note:s});if(a.error==="signin")return h("Sign in required");if(a.error==="cooldown")return h("Anti-farming · wait a few seconds");if(a.error==="daily_cap")return h("Daily cap hit · come back tomorrow (demo)");if(a.error)return h("Could not record");(a.newBadges||[]).filter(n=>n!=="day_one"||(a.loyalty.badges||[]).includes("day_one")),(i=a.newBadges)!=null&&i.length?h(`+${t} pts · badge: ${a.newBadges.join(", ")}`):h(`+${t} pts · ${s}`),Ja()}function ih(){const{user:e}=L(),t=As(),a=jr().map(r=>{const l=r.unlocked;return`<div class="card" style="opacity:${l?1:.55};margin:0">
        <div class="row" style="justify-content:space-between;gap:8px">
          <strong>${o(r.name)}</strong>
          <span class="chip">${l?"Unlocked":"Locked"}</span>
        </div>
        <p class="muted" style="margin:6px 0 0;font-size:12px">${o(r.blurb)}</p>
      </div>`}).join(""),i=(t.history||[]).length===0?'<p class="muted" style="margin:0">No actions yet — try a listen tick or join a club.</p>':`<ul class="list-plain">${(t.history||[]).slice(0,12).map(r=>`<li style="padding:8px 0;border-top:1px solid rgba(255,255,255,.06)">
            <div class="row" style="justify-content:space-between">
              <span><strong>+${r.points}</strong> · ${o(r.note||r.kind)}</span>
              <span class="muted" style="font-size:12px">${o(j(r.at))}</span>
            </div>
          </li>`).join("")}</ul>`,n=t.publicVisible?"Your badges & points can appear on your profile (demo flag).":"History & achievements are private — only you see them here.";return _("Loyalty Club",`
    <div class="pikk-loyalty-studio">
    <section class="pikk-loyalty-hero" aria-label="PIKK Loyalty rewards overview">
      <p class="kicker">PIKK REWARDS · RECOGNITION BEYOND SPENDING</p>
      <h2>Earn your place. <span>Get recognized.</span></h2>
      <p class="muted" style="margin:0 0 10px">Badges for listening, attending lives, and Fan Club participation — <strong>not purchase-only</strong>. Paid gifts are never the only loyalty signal. Anti-farming cooldowns + daily caps apply (TEST MODE).</p>
      <div class="pikk-loyalty-stats" aria-label="Your demo loyalty totals">
        <span class="pikk-loyalty-points">${t.points}</span>
        <span class="muted">points</span>
        <span class="chip">${(t.badges||[]).length} badges</span>
        <span class="chip">TEST MODE</span>
      </div>
      ${e?"":'<p class="chip" style="margin-top:10px">Sign in to earn · local demo</p>'}
      <div class="pikk-loyalty-hero-mark" aria-hidden="true">★</div>
    </section>

    <div class="card pikk-loyalty-panel pikk-loyalty-actions">
      <h3 style="margin:0 0 8px">Demo actions</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">Healthy participation stubs — not a spend ladder.</p>
      <div class="row wrap" style="gap:8px">
        <button class="btn primary" id="loyListen">Listen tick · +5</button>
        <button class="btn" id="loyLive">Attend live stub · +8</button>
        <button class="btn" id="loyClub">Join a Fan Club · +10</button>
        <button class="btn" id="loyHelp">Helper tip · +6</button>
        <button class="btn ghost" id="loyReset">Reset demo</button>
      </div>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <a class="btn" href="#/music">Music</a>
        <a class="btn" href="#/live">Live</a>
        <a class="btn" href="#/fanclubs">Fan Clubs</a>
        <a class="btn" href="#/openmic">Open Mic</a>
      </div>
    </div>

    <div class="card pikk-loyalty-panel pikk-loyalty-privacy">
      <h3 style="margin:0 0 6px">Visibility</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">${o(n)}</p>
      <label class="row" style="gap:8px;align-items:center;cursor:pointer">
        <input type="checkbox" id="loyPublic" ${t.publicVisible?"checked":""} />
        <span>Show badges publicly (demo)</span>
      </label>
    </div>

    <div class="card pikk-loyalty-panel pikk-loyalty-badges">
      <h3 style="margin:0 0 10px">Badges</h3>
      <div class="pikk-loyalty-badge-grid">${a}</div>
    </div>

    <div class="card pikk-loyalty-panel pikk-loyalty-activity">
      <h3 style="margin:0 0 8px">Recent activity</h3>
      ${i}
    </div>

    <div class="card pikk-loyalty-panel pikk-loyalty-roadmap">
      <h3 style="margin:0 0 6px">Admin-ish rollup · optional</h3>
      <p class="muted" style="margin:0;font-size:12px">Future Admin Fan Loyalty dashboard (plan § Live Gift Effects) can list tenure, attendance, and opted-in history. This page stays fan-facing; no purchase-only ranking.</p>
    </div>
    </div>
    `,{lead:"Recognition for healthy participation · DEMO.",badge:"Phase 2 demo"})}function nh(e){var t,s,a,i,n,r;(t=e.querySelector("#loyListen"))==null||t.addEventListener("click",()=>Ns("listen",5,"Authorized listening tick")),(s=e.querySelector("#loyLive"))==null||s.addEventListener("click",()=>Ns("live",8,"Attended live (stub)")),(a=e.querySelector("#loyHelp"))==null||a.addEventListener("click",()=>Ns("help",6,"Shared community helper tip")),(i=e.querySelector("#loyClub"))==null||i.addEventListener("click",()=>{Qa(),Ge();const l=vr(),u=l.find(c=>c.privacy==="public")||l[0];u&&br(u.id),Ns("club",10,u?`Joined ${u.name}`:"Joined Fan Club")}),(n=e.querySelector("#loyPublic"))==null||n.addEventListener("change",l=>{Qa(),dd(l.target.checked),h(l.target.checked?"Public visibility on":"Achievements private"),Ja()}),(r=e.querySelector("#loyReset"))==null||r.addEventListener("click",()=>{ud(),h("Loyalty demo reset"),Ja()})}function vt(){R("#/openmic")}function Oa(e="MicHopeful"){const{user:t}=L();if(t)return t;const s=jt(e);return h(`Signed in as ${e} · local demo`),s||L().user}function Dn(e){return`<span class="chip">${o(e==="approved"?"Approved":e==="rejected"?"Rejected":"Pending")}</span>`}function rh(){const e=gd(),t=e.chipLabel||"House rotation",s=e.embed?Je(e.embed,"rel=0"):"";return`
    <div class="card sp-stage sp-house" id="omHouse" role="status">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">${o(t)}</div>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:12px">
        24/7 idle filler · DatBoiSkeet catalog when no live Open Mic performer · <strong>not a fake live act</strong> · original YouTube only
      </p>
      ${s?`<div class="sp-house-embed hero-video" style="margin-top:12px">
               <iframe src="${o(s)}" title="${o(e.title)}" allowfullscreen loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>`:""}
      <div class="sp-now">
        <div>
          <div class="sp-now-title">${o(e.title)}</div>
          <div class="sp-now-meta">${o(e.artist||"DatBoiSkeet")} · house catalog</div>
          <p class="muted sp-note">${o(e.note||"")}</p>
          ${e.youtube?`<p style="margin:8px 0 0"><a class="btn ghost" href="${o(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a></p>`:""}
        </div>
      </div>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <button class="btn" type="button" id="omNextHouse">Next house</button>
        <a class="btn ghost" href="#/spotlight">24/7 Spotlight</a>
      </div>
    </div>`}function oh(){Vt();const{user:e}=L(),t=ae(),s=hd(),a=e?Ua().filter(c=>c.userId===e.id):[],i=t?Ua({status:"pending"}):[],n=a.filter(c=>c.status==="pending").length,r=s.length===0?'<p class="muted" style="margin:0">No approved performers yet.</p>':s.map(c=>`<article class="card" style="margin:0 0 10px">
              <div class="row" style="justify-content:space-between;gap:8px">
                <div>
                  <strong>${o(c.trackTitle)}</strong>
                  <div class="muted" style="font-size:12px">@${o(c.username)} · ${o(c.talent)}</div>
                </div>
                ${Dn("approved")}
              </div>
              <p style="margin:8px 0 0">${o(c.profileNote||"Featured in PIKK Open Mic showcase.")}</p>
              <p class="muted" style="font-size:11px;margin:8px 0 0">Not a paid ranking · discovery showcase</p>
            </article>`).join(""),l=a.length===0?'<p class="muted" style="margin:0">You have no applications yet.</p>':`<ul class="list-plain">${a.map(c=>`<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between">
                <strong>${o(c.trackTitle)}</strong>
                ${Dn(c.status)}
              </div>
              <div class="muted" style="font-size:12px">${o(c.talent)} · ${o(j(c.at))}</div>
            </li>`).join("")}</ul>`,u=t?`<div class="card">
         <h3 style="margin:0 0 8px">Admin review · TEST MODE</h3>
         <p class="muted" style="margin:0 0 10px;font-size:12px">Approve for showcase or reject. Distinct from pay-to-win.</p>
         ${i.length===0?'<p class="muted" style="margin:0">No pending applications.</p>':i.map(c=>`<div style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
                     <strong>${o(c.trackTitle)}</strong> · @${o(c.username)} · ${o(c.talent)}
                     <p class="muted" style="margin:4px 0;font-size:12px">${o(c.profileNote)}</p>
                     <p class="chip">Rights certified: ${c.rightsCertified?"yes":"no"}</p>
                     <div class="row wrap" style="gap:8px;margin-top:8px">
                       <button class="btn primary" data-om-approve="${o(c.id)}">Approve</button>
                       <button class="btn" data-om-reject="${o(c.id)}">Reject</button>
                     </div>
                   </div>`).join("")}
       </div>`:"";return _("Open Mic",`
    <div class="openmic-studio">
      <header class="openmic-hero">
        <p class="openmic-eyebrow">PIKK LIVE <span aria-hidden="true">◆</span> TALENT DISCOVERY</p>
        <h2>Your sound. <span>Your stage.</span></h2>
        <p>Apply for the Open Mic showcase, hear the original DatBoiSkeet house rotation and discover emerging performers.</p>
        <div class="openmic-hero-actions">
          <button type="button" class="btn primary" data-om-jump="omApplyCard">Apply to perform</button>
          <button type="button" class="btn ghost" data-om-jump="omShowcaseCard">Discover talent</button>
        </div>
        <p class="openmic-hero-note">TEST MODE · Local applications and review · No real live stream, uploads or paid placements</p>
      </header>
      <section class="openmic-stats" aria-label="Open Mic local demo overview">
        <div><span>Approved showcase</span><strong>${s.length}</strong><small>Demo performers</small></div>
        <div><span>Your applications</span><strong>${a.length}</strong><small>On this device</small></div>
        <div><span>Awaiting review</span><strong>${n}</strong><small>Your pending submissions</small></div>
      </section>
    ${rh()}

    <div class="card openmic-panel">
      <p class="kicker">§30 · 24/7 Live category · Talent Discovery</p>
      <h2 style="margin:0 0 6px">Open Mic &amp; Talent Discovery</h2>
      <p class="muted" style="margin:0 0 10px"><strong>24/7 Live category</strong> (like Spotlight) — not Social. Opt-in showcase for rappers, singers, DJs, producers. Submit music + profile, certify rights, apply for approval. Approved artists appear in the PIKK discovery showcase — <strong>not a paid ranking</strong>.</p>
      <nav class="live-cat-chips" aria-label="Live categories" style="margin:0 0 12px">
        <a class="live-cat-chip" href="#/live">Live</a>
        <a class="live-cat-chip on" href="#/openmic" aria-current="page">Open Mic / Talent Discovery (24/7)</a>
        <a class="live-cat-chip" href="#/spotlight">Spotlight (24/7)</a>
      </nav>
      <div class="row wrap" style="gap:8px">
        <a class="btn" href="#/spotlight">24/7 Spotlight</a>
        <a class="btn" href="#/live">Live</a>
        <a class="btn" href="#/music">Music</a>
        <a class="btn" href="#/fanclubs">Fan Clubs</a>
        <button class="btn ghost" id="omSeed">Reseed demos</button>
        <button class="btn ghost" id="omAdmin">${t?"Admin on":"Toggle demo admin"}</button>
      </div>
      <p class="chip" style="margin-top:10px">TEST MODE · no pay-to-win</p>
    </div>

    <div class="card openmic-panel" id="omApplyCard">
      <h3 style="margin:0 0 8px">Apply</h3>
      <form id="omForm">
        <label class="muted" style="font-size:12px">Talent</label>
        <select id="omTalent" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit">
          <option value="rapper">Rapper</option>
          <option value="singer">Singer</option>
          <option value="dj">DJ</option>
          <option value="producer">Producer</option>
          <option value="other">Other</option>
        </select>
        <label class="muted" style="font-size:12px">Track / piece title</label>
        <input id="omTitle" required maxlength="80" placeholder="Song or freestyle title" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit" />
        <label class="muted" style="font-size:12px">Profile note</label>
        <textarea id="omNote" maxlength="240" rows="2" placeholder="Who you are · what you want to share" style="width:100%;margin:4px 0 10px;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit;resize:vertical"></textarea>
        <label class="row" style="gap:8px;align-items:flex-start;margin:0 0 12px;cursor:pointer">
          <input type="checkbox" id="omRights" required style="margin-top:3px" />
          <span style="font-size:13px">I certify I have the rights to submit this material and understand PIKK may moderate / feature approved work under promotional terms (demo).</span>
        </label>
        <button class="btn primary" type="submit">Submit application</button>
        ${e?"":'<button class="btn" type="button" id="omSignIn">Sign in demo</button>'}
      </form>
    </div>

    <div class="card openmic-panel">
      <h3 style="margin:0 0 8px">Your applications</h3>
      ${l}
    </div>

    ${u}

    <div class="card openmic-panel" id="omShowcaseCard">
      <h3 style="margin:0 0 8px">Approved showcase</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">Featured performers · discovery, not spend rank</p>
      ${r}
    </div>
    </div>
    `,{lead:"24/7 house catalog when idle · opt-in talent showcase · DEMO.",badge:"Phase 2 demo"})}function lh(e){var t,s,a,i,n;e.querySelectorAll("[data-om-jump]").forEach(r=>{r.addEventListener("click",()=>{const l=r.getAttribute("data-om-jump"),u=l==="omApplyCard"||l==="omShowcaseCard"?e.querySelector("#"+l):null;u==null||u.scrollIntoView({behavior:"smooth",block:"start"})})}),(t=e.querySelector("#omSignIn"))==null||t.addEventListener("click",()=>{Oa(),vt()}),(s=e.querySelector("#omAdmin"))==null||s.addEventListener("click",()=>{Oa("DemoAdmin");const r=!ae();ks(r),h(r?"Demo admin on":"Demo admin off"),vt()}),(a=e.querySelector("#omSeed"))==null||a.addEventListener("click",()=>{Vt({force:!0}),h("Open Mic demos reseeded"),vt()}),(i=e.querySelector("#omForm"))==null||i.addEventListener("submit",r=>{var c,p,m,g;r.preventDefault(),Oa();const l=(c=e.querySelector("#omRights"))==null?void 0:c.checked,u=vd({talent:(p=e.querySelector("#omTalent"))==null?void 0:p.value,trackTitle:(m=e.querySelector("#omTitle"))==null?void 0:m.value,profileNote:(g=e.querySelector("#omNote"))==null?void 0:g.value,rightsCertified:!!l});if(u.error==="rights")return h("Rights certification required");if(u.error==="title")return h("Title required");if(u.error==="pending")return h("You already have a pending application");if(u.error)return h("Could not submit");h("Application submitted · pending review"),vt()}),e.querySelectorAll("[data-om-approve]").forEach(r=>{r.addEventListener("click",()=>{if(Va(r.getAttribute("data-om-approve"),"approved").error==="admin")return h("Admin only");h("Approved · showcase"),vt()})}),e.querySelectorAll("[data-om-reject]").forEach(r=>{r.addEventListener("click",()=>{if(Va(r.getAttribute("data-om-reject"),"rejected","Demo reject").error==="admin")return h("Admin only");h("Rejected"),vt()})}),(n=e.querySelector("#omNextHouse"))==null||n.addEventListener("click",()=>{const r=fd();h("Next house · "+(r.chipLabel||"House")),vt()})}let Ie=null,Pt="all";try{const e=sessionStorage.getItem("dbs_shop_cat");e&&(Pt=e,sessionStorage.removeItem("dbs_shop_cat"));const t=sessionStorage.getItem("dbs_shop_preview");t&&(Ie=t,sessionStorage.removeItem("dbs_shop_preview"))}catch{}function et(){R("#/profile-shop")}function st(e){return js.find(t=>t.id===e)||null}function $o(e){return Fr(e)}function ch(e){const t={...e.equipped},s=Ie?st(Ie):null;if(s){const a=$o(s);a&&(t[a]=s.id)}return t}function dh(e){return`rarity-${o(e||"rare")}`}function ph(e){return`$${Number(e).toFixed(2)}`}function uh(e){const{user:t}=L(),s=ch(e),a=s.frame?st(s.frame):null,i=s.effect?st(s.effect):null,n=s.banner?st(s.banner):null,r=s.nameStyle?st(s.nameStyle):null,l=s.badge?st(s.badge):null,u=(t==null?void 0:t.username)||"DemoFan",c=e.reduceMotion,p=i?`shop-fx shop-fx--${o(i.id.replace(/^fx-/,""))}${c?" shop-fx--still":""}`:"",m=r?`shop-name shop-name--${o(r.id.replace(/^name-/,""))}`:"shop-name",g=a?`shop-avatar-frame shop-frame--${o(a.id.replace(/^frame-/,""))}`:"shop-avatar-frame";return`
    <div class="shop-preview card" id="shopPreview">
      <div class="row wrap" style="justify-content:space-between;gap:8px;margin-bottom:10px">
        <h3 style="margin:0">Live preview</h3>
        <span class="chip">CONCEPT</span>
      </div>
      <div class="${n?`shop-preview-banner shop-banner--${o(n.id.replace(/^ban-/,""))}`:"shop-preview-banner shop-banner--default"}" aria-hidden="true">
        <span class="shop-banner-emoji">${n?o(n.emoji):"🎧"}</span>
      </div>
      <div class="shop-preview-body ${p}">
        <div class="${g}">
          <div class="shop-avatar-inner">${o(u.slice(0,1).toUpperCase())}</div>
          ${a?`<span class="shop-frame-emoji" aria-hidden="true">${o(a.emoji)}</span>`:""}
        </div>
        <div class="shop-preview-meta">
          <div class="${m}">${o(u)}</div>
          <p class="muted small" style="margin:4px 0 0">Cosmetic preview only · not a status grant</p>
          ${l?`<span class="shop-cosmetic-badge" title="Cosmetic style — not Verified/Founder">${o(l.emoji)} ${o(l.name)}</span>`:'<span class="muted small">No cosmetic badge equipped</span>'}
        </div>
      </div>
      <div class="shop-equipped-row">
        ${["frame","effect","banner","nameStyle","badge"].map(b=>{const y=s[b],v=y?st(y):null,w=b==="nameStyle"?"Name":b.charAt(0).toUpperCase()+b.slice(1);return`<span class="shop-eq-chip ${v?"on":""}">${o(w)}: ${v?o(v.emoji+" "+v.name):"—"}</span>`}).join("")}
      </div>
    </div>`}function mh(e,t){const s=t.owned.includes(e.id),a=$o(e),i=a&&t.equipped[a]===e.id,n=Ie===e.id;return`
    <article class="cosmetic-card ${dh(e.rarity)} ${n?"is-selected":""} ${s?"is-owned":""} ${i?"is-equipped":""}" data-id="${o(e.id)}">
      <div class="cosmetic-art" role="button" tabindex="0" data-preview="${o(e.id)}" aria-label="Preview ${o(e.name)}">
        <span class="cosmetic-emoji">${o(e.emoji)}</span>
        <span class="concept-flag">CONCEPT</span>
        ${s?'<span class="owned-flag">Owned</span>':""}
        ${i?'<span class="equipped-flag">Equipped</span>':""}
      </div>
      <div class="body">
        <div class="name">${o(e.name)}</div>
        <div class="meta">${o(e.category)} · ${o(e.rarity)}</div>
        <div class="price">${ph(e.price)} <span class="chip" style="margin-left:4px">TEST MODE</span></div>
        <div class="cosmetic-actions row wrap" style="gap:6px;margin-top:8px">
          <button type="button" class="btn ghost shop-act" data-act="preview" data-id="${o(e.id)}">Preview</button>
          ${s?i?`<button type="button" class="btn shop-act" data-act="unequip" data-slot="${o(a)}" data-id="${o(e.id)}">Unequip</button>`:`<button type="button" class="btn primary shop-act" data-act="equip" data-id="${o(e.id)}">Equip</button>`:`<button type="button" class="btn primary shop-act" data-act="unlock" data-id="${o(e.id)}">Unlock · TEST MODE</button>`}
        </div>
      </div>
    </article>`}function hh(){const e=at(),t=Pt==="all"?js:js.filter(n=>n.category===Pt),s=qo.map(n=>`<button type="button" class="shop-chip ${Pt===n.id?"on":""}" data-cat="${o(n.id)}" aria-pressed="${Pt===n.id?"true":"false"}">${o(n.label)}</button>`).join(""),a=t.length===0?'<p class="muted">No cosmetics in this category.</p>':`<div class="cosmetic-grid">${t.map(n=>mh(n,e)).join("")}</div>`,i=`
    <div class="shop-concept">
      <img src="/design/DBS_Profile_Shop_Concept.png" alt="Profile Shop concept art" />
    </div>

    <div class="shop-note">
      <strong>Digital cosmetics ≠ physical merch.</strong>
      Frames, effects, banners, name styles, and badge <em>styles</em> live here (CONCEPT / TEST MODE — no real charges).
      Physical Foreign X-Change gear stays on
      <a href="#/merch">#/merch</a>
      and
      <a href="https://foreignx-change.com" target="_blank" rel="noopener">foreignx-change.com</a>
      (homepage only — no invented product URLs).
      Cosmetic badges never grant Founder or Verified status.
    </div>

    ${uh(e)}

    <div class="card">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center;margin-bottom:10px">
        <h3 style="margin:0">Catalog · ${js.length} items</h3>
        <div class="row wrap" style="gap:8px">
          <span class="chip">${e.owned.length} owned</span>
          <span class="chip">CONCEPT</span>
          <span class="chip">TEST MODE</span>
        </div>
      </div>
      <div class="shop-chips" role="tablist" aria-label="Cosmetic categories">${s}</div>
      <label class="shop-reduce row" style="gap:8px;align-items:center;margin:0 0 12px;cursor:pointer">
        <input type="checkbox" id="shopReduceMotion" ${e.reduceMotion?"checked":""} />
        <span>Reduce motion (effects)</span>
      </label>
      <div class="row wrap" style="gap:8px;margin-bottom:14px">
        <button type="button" class="btn" id="shopBundle">Unlock starter bundle · TEST MODE</button>
        <button type="button" class="btn ghost" id="shopReset">Reset demo inventory</button>
        <a class="btn" href="#/merch">Physical merch</a>
        <a class="btn" href="#/profile">Profile</a>
      </div>
      ${a}
    </div>
  `;return _("Profile Shop",i,{lead:"PIKK digital cosmetics · live preview · CONCEPT / TEST MODE.",badge:"Phase 2 · CONCEPT"})}function gh(e){var s,a,i;e.querySelectorAll(".shop-chip").forEach(n=>{n.addEventListener("click",()=>{Pt=n.dataset.cat||"all",et()})}),(s=e.querySelector("#shopReduceMotion"))==null||s.addEventListener("change",n=>{Ad(n.target.checked),h(n.target.checked?"Motion reduced":"Motion on"),et()}),(a=e.querySelector("#shopBundle"))==null||a.addEventListener("click",()=>{var r;const n=Sd();h(`Starter bundle unlocked · ${((r=n.unlocked)==null?void 0:r.length)||0} items · no charge`),et()}),(i=e.querySelector("#shopReset"))==null||i.addEventListener("click",()=>{Cd(),Ie=null,h("Demo inventory reset"),et()});const t=n=>{Ie=n,h("Preview updated"),et()};e.querySelectorAll("[data-preview]").forEach(n=>{n.addEventListener("click",()=>t(n.dataset.preview)),n.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),t(n.dataset.preview))})}),e.querySelectorAll(".shop-act").forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.act,l=n.dataset.id;if(r==="preview")return t(l);if(r==="unlock"){const u=wd(l);return u.error?h("Could not unlock"):(Ie=l,h(u.already?"Already owned · TEST MODE":"Unlocked · TEST MODE · no charge"),et())}if(r==="equip"){const u=xd(l);return u.error==="not_owned"?h("Unlock first · TEST MODE"):u.error?h("Could not equip"):(Ie=l,h("Equipped"),et())}if(r==="unequip"){const u=n.dataset.slot;if(Ed(u).error)return h("Could not unequip");const p=Ie?st(Ie):null;return p&&Fr(p)===u&&(Ie=null),h("Unequipped"),et()}})})}const fh=["All","Hats","Shirts","Jackets"],vh=["Ladies Shop","Men's Shop","Beauty & Hair","Fashion & Accessories","Lifestyle & Home","Creator Brands","Live Shopping","Deals"];function bh(e,t="All",s=""){const a=String(s||"").trim().toLocaleLowerCase();return e.filter(i=>(t==="All"||i.category===t)&&(!a||`${i.name} ${i.category}`.toLocaleLowerCase().includes(a)))}function yh(e,t="featured"){const s=[...e];return t==="price-asc"?s.sort((a,i)=>Number(a.price)-Number(i.price)):t==="price-desc"?s.sort((a,i)=>Number(i.price)-Number(a.price)):t==="name-asc"?s.sort((a,i)=>String(a.name).localeCompare(String(i.name))):s}function kh(e){return`
    <article class="merch-card pikk-shop-product" data-product-id="${o(e.id)}">
      <div class="img-wrap">
        <img src="${o(e.image)}" alt="${o(e.name)}" loading="lazy" />
      </div>
      <div class="body">
        <span class="chip">${o(e.category)}</span>
        <h3 class="name">${o(e.name)}</h3>
        <p class="price">$ ${Number(e.price).toFixed(2)}</p>
        <a class="btn primary block" href="${o(e.shopUrl)}" target="_blank" rel="noopener noreferrer">
          Shop on Foreign X-Change ↗
        </a>
        <p class="merch-note">External merchant checkout. Confirm sizes, stock, shipping, taxes and returns on the merchant site.</p>
      </div>
    </article>`}function wh(){const e=fh.map(i=>`<button type="button" class="btn ${i==="All"?"primary":"ghost"} pikk-shop-filter"
      data-category="${o(i)}" aria-pressed="${i==="All"?"true":"false"}">${o(i)}</button>`).join(""),t=vh.map(i=>`<li><span>${o(i)}</span><span class="chip">Coming Soon</span></li>`).join(""),a=[Me.find(i=>i.id==="jacket-black")||Me.find(i=>i.category==="Jackets"),Me.find(i=>i.id==="hat-716-orange")||Me.find(i=>i.category==="Hats"),Me.find(i=>i.id==="tee-ptsd")||Me.find(i=>i.category==="Shirts")].filter(Boolean).map(i=>'<a class="pikk-shop-featured-product" href="'+o(i.shopUrl)+'" target="_blank" rel="noopener noreferrer" aria-label="View '+o(i.name)+' on Foreign X-Change"><img src="'+o(i.image)+'" alt="'+o(i.name)+'" loading="eager" decoding="async" /><span>'+o(i.category)+"</span></a>").join("");return _("PIKK Shop",`
    <section class="pikk-shop-showcase pikk-shop-real-hero" aria-label="Featured Foreign X-Change merchandise">
      <div class="pikk-shop-showcase-copy">
        <p class="kicker">PIKK SHOP · FOREIGN X-CHANGE</p>
        <h2>Wear your story.<br/><span>Shop the culture.</span></h2>
        <p>Explore real Foreign X-Change jackets, hats and shirts. Your style, your PIKK.</p>
        <button type="button" class="btn primary" data-shop-scroll>Shop the collection</button>
        <small>External merchant checkout · No PIKK in-app payments</small>
      </div>
      <div class="pikk-shop-hero-gallery" aria-label="Featured product photography">${a}</div>
    </section>
    <nav class="pikk-shop-departments pikk-shop-category-nav" aria-label="Browse shopping categories">
      <button type="button" class="pikk-shop-category on" data-category="All" aria-pressed="true">Featured</button>
      <button type="button" class="pikk-shop-category" data-category="Jackets" aria-pressed="false">Jackets</button>
      <button type="button" class="pikk-shop-category" data-category="Shirts" aria-pressed="false">Shirts</button>
      <button type="button" class="pikk-shop-category" data-category="Hats" aria-pressed="false">Hats</button>
      <a href="#/profile-shop">Accessories · Preview</a>
    </nav>
    <section class="card pikk-shop-catalog" id="pikkShopCatalog" aria-label="Browse merchandise" style="scroll-margin-top:190px">
      <div class="pikk-shop-catalog-heading"><div><p class="kicker">THE COLLECTION</p><h3>Popular items</h3></div><span class="chip">Authentic Foreign X-Change</span></div>
      <label for="pikkShopSearch">Search merchandise</label>
      <input id="pikkShopSearch" type="search" placeholder="Search hats, shirts, jackets…" autocomplete="off" />
      <div class="row wrap" role="group" aria-label="Product category" style="gap:8px;margin-top:12px">
        ${e}
        <button type="button" class="btn ghost" id="pikkShopReset" style="display:none" hidden>Reset view</button>
      </div>
      <div class="pikk-shop-sort-row" style="display:flex;justify-content:flex-end;align-items:center;gap:10px;flex-wrap:wrap;margin-top:12px">
        <label for="pikkShopSort">Sort by</label>
        <select id="pikkShopSort" style="width:auto;min-width:190px;max-width:100%">
          <option value="featured">Featured order</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="name-asc">Name: A to Z</option>
        </select>
      </div>
      <p class="muted small" id="pikkShopCount" aria-live="polite">${Me.length} items</p>
      <div class="merch-grid pikk-shop-premium-grid pikk-shop-real-grid" id="pikkShopProducts">${Me.map(kh).join("")}</div>
      <p class="muted" id="pikkShopEmpty" hidden>No matching merchandise. Try another search or category.</p>
    </section>
    <section class="card" aria-label="PIKK Shop information">
      <span class="chip">PIKK Shop · Phase 1 preview</span>
      <h2>Discover real merchandise</h2>
      <p>Browse existing Foreign X-Change items below. PIKK does not take payments, verify sellers or fulfill orders in this preview.</p>
      <p class="muted small">All purchases open Foreign X-Change. External orders are not subject to an automated PIKK commission.</p>
      <div class="row wrap" style="gap:8px">
        <a class="btn ghost" href="#/merch">Full Foreign X-Change showcase</a>
        <a class="btn ghost" href="#/marketplace">Sponsored offers · TEST MODE</a>
        <a class="btn ghost" href="#/profile-shop">Profile Shop · cosmetic preview</a>
      </div>
    </section>
    <section class="card" aria-label="Future PIKK Shop departments">
      <h3>More PIKK Shop departments</h3>
      <p class="muted small">These sections are planned, not active storefronts. No in-app checkout or seller verification is available yet.</p>
      <ul class="list-plain">${t}</ul>
    </section>
    <section class="card" aria-label="Shop safety and fees">
      <h3>Seller safety &amp; checkout</h3>
      <p class="muted">Future PIKK checkout requires verified seller onboarding, inventory checks, refunds, disputes and payment reconciliation before activation. The planned physical-goods platform fee is 7% of the applicable item subtotal, subject to final payment/legal review; it does not apply to Foreign X-Change offsite orders.</p>
      <p class="muted small">Affiliate enrollment, payable links, commissions and payouts remain disabled · Coming Soon.</p>
    </section>
  `,{lead:"Physical merchandise · external checkout · future verified storefronts"})}function Sh(e){var g;const t=e.querySelector("#pikkShopSearch"),s=[...e.querySelectorAll(".pikk-shop-product")],a=[...e.querySelectorAll(".pikk-shop-filter, .pikk-shop-category")],i=e.querySelector("#pikkShopCount"),n=e.querySelector("#pikkShopEmpty"),r=e.querySelector("#pikkShopReset"),l=e.querySelector("#pikkShopSort"),u=e.querySelector("#pikkShopProducts"),c=new Map(s.map(f=>[f.dataset.productId,f]));let p="All";function m(){const f=new Set(bh(Me,p,(t==null?void 0:t.value)||"").map(b=>b.id));for(const b of yh(Me,(l==null?void 0:l.value)||"featured")){const y=c.get(b.id);y&&(u==null||u.appendChild(y))}for(const b of s){const y=f.has(b.dataset.productId);b.hidden=!y,b.style.display=y?"":"none"}if(i&&(i.textContent=`${f.size} ${f.size===1?"item":"items"}`),n&&(n.hidden=f.size>0),r){const b=p!=="All"||!!(t!=null&&t.value.trim())||((l==null?void 0:l.value)||"featured")!=="featured";r.hidden=!b,r.style.display=b?"":"none"}for(const b of a){const y=b.dataset.category===p;b.setAttribute("aria-pressed",String(y)),b.classList.contains("pikk-shop-filter")&&(b.classList.toggle("primary",y),b.classList.toggle("ghost",!y)),b.classList.toggle("on",y)}}t==null||t.addEventListener("input",m),l==null||l.addEventListener("change",m),r==null||r.addEventListener("click",()=>{p="All",t&&(t.value=""),l&&(l.value="featured"),m(),t==null||t.focus()}),(g=e.querySelector("[data-shop-scroll]"))==null||g.addEventListener("click",()=>{var f,b,y;return(y=e.querySelector("#pikkShopCatalog"))==null?void 0:y.scrollIntoView({behavior:(b=(f=window.matchMedia)==null?void 0:f.call(window,"(prefers-reduced-motion: reduce)"))!=null&&b.matches?"instant":"smooth",block:"start"})});for(const f of a)f.addEventListener("click",()=>{var b;p=f.dataset.category||"All",m(),f.classList.contains("pikk-shop-category")&&((b=e.querySelector("#pikkShopCatalog"))==null||b.scrollIntoView({behavior:"auto",block:"start"}))})}let Vs=null;function pe(){R("#/spotlight")}function qa(){Vs&&(clearInterval(Vs),Vs=null)}function xo(e){const t=Math.max(0,Math.ceil(e/1e3)),s=Math.floor(t/60),a=t%60;return`${s}:${String(a).padStart(2,"0")}`}function Oi(e){return e==="freestyle"?"Live Freestyle":e==="beat"?"Beat":e==="music_video"?"Music Video":"Song"}function $h(e){const t=L().user;return!t||!e?!1:(t.following||[]).includes(e)}function qi(){return!!L().user}function xh(){return _("24/7 Spotlight",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Join the FIFO Spotlight queue, vote Keep Going / Play Another, and chat from a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Continuous music showcase · votes ≠ paid advantage · TEST MODE"})}function Eh(e){return`
    <div class="card sp-rules">
      <h3>How 24/7 Spotlight works</h3>
      <ul class="sp-rules-list">
        <li><strong>Always-on stage</strong> — FIFO queue. Current performer, next-up, and estimated wait are visible.</li>
        <li><strong>Join once</strong> — Song, Beat, Music Video, or Live Freestyle. One active queue spot per user.</li>
        <li><strong>Live Freestyle</strong> — ${Math.round((e.freestyleMs||6e4)/1e3)}s timer. Fans press <strong>Keep Going</strong> (threshold ${e.keepGoing}). Max ${e.maxExtensions} extensions · <strong>3 min total</strong>.</li>
        <li><strong>Uploaded Music</strong> — After End set, audience votes <strong>Play Another?</strong> (threshold ${e.playAnother}). Max <strong>${e.maxUploadStreak}</strong> in a row, then next in queue.</li>
        <li><strong>Votes extend stage time or pick the next track</strong> — they are <em>not</em> wagers, cash prizes, or paid voting advantage. Distinct from Gift Battles.</li>
        <li><strong>House catalog</strong> plays when the queue is empty — real DatBoiSkeet YouTube (Music Videos · Interviews · BTS/vlogs). Labeled <em>House · …</em> · never a fake live act · original source only.</li>
      </ul>
      <p class="muted" style="margin:10px 0 0">TEST MODE · no real uploads / WebRTC · background music pause wiring later.</p>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <a class="btn ghost" href="#/music">Music / Coming Soon</a>
        <a class="btn ghost" href="#/live">Live</a>
        <a class="btn ghost" href="#/giftbattles">Gift Battles</a>
        <a class="btn ghost" href="#/openmic">Open Mic</a>
      </div>
    </div>`}function Ah(e,{showSkip:t=!0}={}){const s=e.chipLabel||e.status||"House rotation",a=e.embed?Je(e.embed,"rel=0"):"";return`
    <div class="card sp-stage sp-house" role="status">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">${o(s)}</div>
        <span class="chip">TEST MODE</span>
      </div>
      ${a?`<div class="sp-house-embed hero-video" style="margin-top:12px">
               <iframe src="${o(a)}" title="${o(e.title)}" allowfullscreen loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>`:""}
      <div class="sp-now">
        ${e.cover?`<img class="sp-cover" src="${o(It(e.cover))}" alt="" />`:""}
        <div>
          <div class="sp-now-title">${o(e.title)}</div>
          <div class="sp-now-meta">${o(e.artist||"DatBoiSkeet")} · house catalog</div>
          <p class="muted sp-note">${o(e.note||"Approved catalog filler · not a live act")}</p>
          ${e.youtube?`<p style="margin:8px 0 0"><a class="btn ghost" href="${o(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a></p>`:""}
        </div>
      </div>
      ${t&&qi()?`<div class="row wrap" style="gap:8px;margin-top:12px">
               <button class="btn" id="spSkipHouse">Skip house · next</button>
               <span class="muted" style="font-size:12px;align-self:center">Join queue takes the stage over house · Skip advances catalog</span>
             </div>`:""}
    </div>`}function Ch(e,t){if(!e||e.house){const b=e&&e.house?{id:e.id,title:e.title,artist:e.artist,embed:e.embed,youtube:e.youtube,chipLabel:e.chipLabel||"House · Music Video",note:e.note,cover:e.cover,kind:e.houseKind}:hr();return Ah(b)}const s=L().user,a=e.type==="freestyle",i=a&&e.endsAt?Math.max(0,e.endsAt-Date.now()):null,n=Object.keys(e.keepGoingVotes||{}).length,r=Object.keys(e.playAnotherVotes||{}).length,l=e.userId,u=$h(l),c=s&&s.id===e.userId,p=e.reactions||{fire:0,heart:0,clap:0},m=a?`<div class="sp-timer" aria-live="polite">
         <div class="sp-timer-label">Freestyle timer · ext ${e.extensions||0}/${t.maxExtensions}</div>
         <div class="sp-timer-clock" id="spClock">${xo(i||0)}</div>
         <div class="muted" style="font-size:12px">Keep Going ${n}/${t.keepGoing} · refresh recovers endsAt</div>
       </div>`:`<div class="sp-timer">
         <div class="sp-timer-label">Uploaded · play ${e.playCount||1}/${t.maxUploadStreak}</div>
         <div class="muted" style="font-size:12px">No real audio in TEST MODE · use End set when finished</div>
       </div>`,g=e.awaitingPlayAnother?`<div class="card sp-vote">
         <h3>Play Another?</h3>
         <p class="muted">Audience vote · ${r}/${t.playAnother} · window ends ${e.playAnotherDeadline?j(e.playAnotherDeadline):"soon"} (deadline-based)</p>
         <div class="row wrap" style="gap:8px">
           <button class="btn primary" id="spPlayAnother">Play Another</button>
           <button class="btn ghost" id="spSimPlayAnother">+2 fan votes (demo)</button>
         </div>
       </div>`:a?`<div class="card sp-vote">
           <h3>Keep Going</h3>
           <p class="muted">Votes extend stage time only — not paid advantage · ${n}/${t.keepGoing}</p>
           <div class="row wrap" style="gap:8px">
             <button class="btn primary" id="spKeepGoing" ${(e.extensions||0)>=t.maxExtensions?"disabled":""}>Keep Going</button>
             <button class="btn ghost" id="spSimKeepGoing" ${(e.extensions||0)>=t.maxExtensions?"disabled":""}>+2 fan votes (demo)</button>
           </div>
         </div>`:"",f=c?"":u?`<button class="btn ghost sp-follow" data-follow="${o(l)}" data-on="1">Following</button>`:`<button class="btn ghost sp-follow" data-follow="${o(l)}" data-on="0">Follow</button>`;return`
    <div class="card sp-stage">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">On stage · ${o(Oi(e.type))}</div>
        <span class="chip">TEST MODE</span>
      </div>
      <div class="sp-now">
        <div class="sp-avatar" aria-hidden="true">${o((e.username||"?").slice(0,2).toUpperCase())}</div>
        <div>
          <div class="sp-now-title">${o(e.title)}</div>
          <div class="sp-now-meta">${o(e.artist||e.username)} · ${o(e.username)}</div>
          <div class="row wrap sp-perf-actions" style="gap:8px;margin-top:8px">
            ${f}
            <a class="btn ghost" href="#/profile">Profile</a>
            <a class="btn ghost" href="#/music">Music</a>
            <a class="btn ghost" href="#/giftbattles">Gifts</a>
            <a class="btn ghost" href="#/live">Live</a>
          </div>
        </div>
      </div>
      ${m}
      <div class="row wrap sp-reacts" style="gap:8px;margin-top:10px">
        <button class="btn ghost sp-react" data-kind="fire">🔥 ${p.fire||0}</button>
        <button class="btn ghost sp-react" data-kind="heart">❤️ ${p.heart||0}</button>
        <button class="btn ghost sp-react" data-kind="clap">👏 ${p.clap||0}</button>
      </div>
    </div>
    ${g}`}function Th(e,t,s){const a=l=>Math.max(1,(l+(t?1:0))*2),i=(e||[]).map((l,u)=>`
      <li class="sp-q-row">
        <div>
          <strong>${o(l.username)}</strong>
          <span class="muted"> · ${o(Oi(l.type))} · ${o(l.title)}</span>
          <div class="muted" style="font-size:12px">${u===0?"Next up":`#${u+1}`} · ~${a(u)} min wait (stub)</div>
        </div>
        <div class="row wrap" style="gap:6px">
          ${s&&l.userId===s.id?'<button class="btn ghost sp-leave-q">Leave</button>':""}
          ${qi()?`<button class="btn ghost sp-remove-q" data-qid="${o(l.id)}" title="Demo moderator">Remove</button>`:""}
        </div>
      </li>`).join(""),n=s&&(e||[]).some(l=>l.userId===s.id),r=s&&t&&!t.house&&t.userId===s.id;return`
    <div class="card sp-queue">
      <h3>FIFO queue</h3>
      <p class="muted" style="margin-top:0">${e.length?e.length+" waiting":"Queue empty — house catalog on stage"}${t&&!t.house?" · now: "+o(t.username):t&&t.house?" · house: "+o(t.chipLabel||"House"):""}</p>
      <ul class="sp-list">${i||'<li class="muted">No one waiting</li>'}</ul>
      ${n||r?`<p class="muted">You already have a spot (${r?"on stage":"in queue"}). One active spot per user.</p>
             ${n?'<button class="btn ghost" id="spLeaveQueue">Leave queue</button>':""}`:`<form id="spJoinForm" class="sp-join">
               <label class="field"><span>Type</span>
                 <select name="type" id="spType">
                   <option value="song">Song</option>
                   <option value="beat">Beat</option>
                   <option value="music_video">Music Video</option>
                   <option value="freestyle">Live Freestyle</option>
                 </select>
               </label>
               <label class="field"><span>Title</span>
                 <input name="title" id="spTitle" maxlength="80" placeholder="Track or freestyle label" />
               </label>
               <label class="field"><span>Artist</span>
                 <input name="artist" id="spArtist" maxlength="60" placeholder="${o((s==null?void 0:s.username)||"You")}" />
               </label>
               <p class="muted" style="font-size:12px">Upload processing is out of scope — demo joins with metadata only. Rights confirmation implied (TEST MODE).</p>
               <button class="btn primary" type="submit">Join queue</button>
             </form>`}
    </div>`}function Dh(e){if(!qi())return"";const t=ae()?"Admin":"Demo moderator · TEST MODE",s=e&&!e.house;return`
    <div class="card sp-mod">
      <h3>Moderator controls</h3>
      <p class="muted" style="margin-top:0"><span class="chip">${o(t)}</span> Skip / remove for safety · fair order otherwise. House Skip → next queue or next house.</p>
      <div class="row wrap" style="gap:8px">
        <button class="btn" id="spSkip" ${e?"":"disabled"}>Skip current</button>
        ${s&&e.type!=="freestyle"&&!e.awaitingPlayAnother?'<button class="btn ghost" id="spEndSet">End set</button>':""}
      </div>
    </div>`}function Mh(e){const t=L().user;return!e||e.house||e.type==="freestyle"||e.awaitingPlayAnother||!t||t.id!==e.userId?"":`
    <div class="card">
      <h3>Your set</h3>
      <p class="muted">No real audio file — tap End set when your demo track “finishes”.</p>
      <button class="btn primary" id="spEndSetSelf">End set</button>
    </div>`}function Lh(e){return!e||e.house?"":`
    <div class="card sp-chat-card">
      <h3>Stage chat</h3>
      <div class="sp-chat" id="spChat">${(e.chat||[]).slice(-20).map(s=>`<div class="sp-chat-row ${s.system?"system":""}"><strong>${o(s.username)}</strong>${o(s.text)}</div>`).join("")||'<div class="muted">No messages yet</div>'}</div>
      <form id="spChatForm" class="row" style="gap:8px;margin-top:8px">
        <input id="spChatInput" maxlength="200" placeholder="Say something…" style="flex:1" />
        <button class="btn primary" type="submit">Send</button>
      </form>
    </div>`}function Ih(e){return e.length?`
    <div class="card">
      <h3>Recent stage</h3>
      <ul class="sp-list">${e.slice(0,12).map(s=>`<li><strong>${o(s.username)}</strong> · ${o(Oi(s.type))} · ${o(s.title)}
         <span class="muted"> · ${o(s.reason||"ended")} · ${j(s.endedAt)}</span></li>`).join("")}</ul>
    </div>`:`
      <div class="card">
        <h3>Recent stage</h3>
        <p class="muted" style="margin:0">No completed turns yet.</p>
      </div>`}function Ph(){de();const e=L().user;if(!e)return xh();const t=le(),s=Ec(12);return _("24/7 Spotlight",`${Eh(t.thresholds)}
     ${Ch(t.nowPlaying,t.thresholds)}
     ${Mh(t.nowPlaying)}
     ${Dh(t.nowPlaying)}
     ${Th(t.queue,t.nowPlaying,e)}
     ${Lh(t.nowPlaying)}
     ${Ih(s)}`,{lead:"Always-on music showcase · FIFO queue · votes ≠ wagers · TEST MODE"})}function _h(e){var n,r,l,u,c,p,m,g,f,b,y;qa(),de();const s=le().nowPlaying;if(s&&s.type==="freestyle"&&s.endsAt){const v=e.querySelector("#spClock");Vs=setInterval(()=>{de();const w=le().nowPlaying;if(!w||w.type!=="freestyle"||!w.endsAt){qa(),pe();return}const $=Math.max(0,w.endsAt-Date.now());v&&(v.textContent=xo($)),$<=0&&(qa(),de(),pe())},250)}if(s&&s.awaitingPlayAnother&&s.playAnotherDeadline){const v=Math.max(0,s.playAnotherDeadline-Date.now())+50;setTimeout(()=>{de(),pe()},Math.min(v,35e3))}(n=e.querySelector("#spJoinForm"))==null||n.addEventListener("submit",v=>{var I,T,G;v.preventDefault();const w=((I=e.querySelector("#spType"))==null?void 0:I.value)||"song",$=((T=e.querySelector("#spTitle"))==null?void 0:T.value)||"",C=((G=e.querySelector("#spArtist"))==null?void 0:G.value)||"",k=gc({type:w,title:$,artist:C});if(k.error==="signin")return h("Sign in first");if(k.error==="already_queued")return h("You already have a queue/stage spot");h(w==="freestyle"?"Freestyle — you're up or in queue":"Joined Spotlight queue"),pe()}),(r=e.querySelector("#spLeaveQueue"))==null||r.addEventListener("click",()=>{if(Yi().error)return h("Not in queue");h("Left queue"),pe()}),e.querySelectorAll(".sp-leave-q").forEach(v=>{v.addEventListener("click",()=>{Yi(),h("Left queue"),pe()})}),e.querySelectorAll(".sp-remove-q").forEach(v=>{v.addEventListener("click",()=>{fc(v.getAttribute("data-qid")),h("Removed from queue (demo mod)"),pe()})});const a=()=>{le().nowPlaying,vc();const v=le().nowPlaying;v&&v.house?h("Next house · "+(v.chipLabel||"House")):h(v?"Skipped · "+(v.username||"next")+" on stage":"Skipped"),pe()};(l=e.querySelector("#spSkip"))==null||l.addEventListener("click",a),(u=e.querySelector("#spSkipHouse"))==null||u.addEventListener("click",a);const i=()=>{const v=bc();if(v.error==="max_streak"||v.ok){h(v.error==="max_streak"?"Max 3 in a row — advancing":"Play Another? vote open"),pe();return}v.error?h("Cannot end set: "+v.error):pe()};(c=e.querySelector("#spEndSet"))==null||c.addEventListener("click",i),(p=e.querySelector("#spEndSetSelf"))==null||p.addEventListener("click",i),(m=e.querySelector("#spKeepGoing"))==null||m.addEventListener("click",()=>{const v=yc();if(v.error==="already_voted")return h("Already voted");if(v.error==="max_extensions")return h("Max extensions reached");if(v.error)return h(v.error);h("Keep Going counted"),pe()}),(g=e.querySelector("#spSimKeepGoing"))==null||g.addEventListener("click",()=>{kc(2),h("+2 simulated fan votes"),pe()}),(f=e.querySelector("#spPlayAnother"))==null||f.addEventListener("click",()=>{const v=wc();if(v.error==="already_voted")return h("Already voted");if(v.error)return h(v.error);h("Play Another vote counted"),pe()}),(b=e.querySelector("#spSimPlayAnother"))==null||b.addEventListener("click",()=>{Sc(2),h("+2 simulated fan votes"),pe()}),e.querySelectorAll(".sp-follow").forEach(v=>{v.addEventListener("click",()=>{const w=v.getAttribute("data-follow");v.getAttribute("data-on")==="1"?(oa(w),h("Unfollowed")):(ra(w),h("Following")),pe()})}),e.querySelectorAll(".sp-react").forEach(v=>{v.addEventListener("click",()=>{$c(v.getAttribute("data-kind")||"fire"),pe()})}),(y=e.querySelector("#spChatForm"))==null||y.addEventListener("submit",v=>{v.preventDefault();const w=e.querySelector("#spChatInput"),$=xc((w==null?void 0:w.value)||"");if($.error!=="empty"){if($.error)return h($.error);w&&(w.value=""),pe()}})}const Eo="Not available — WebRTC + age assurance required before launch";function es(){R("#/connect")}function Oh(){var p;const e=Pr(),s=lt().selected||[],a=rd(),i=qr(),n=Number(i==null?void 0:i.max)||0,r=!!a,l=e.map(m=>{const g=s.includes(m.id),f=m.connected?`<span class="chip">Linked${m.handle?" · "+o(m.handle):""}</span>`:'<span class="chip muted-chip">Not linked</span>';return`
      <div class="connect-mp-plat ${m.connected?"on":""}" data-plat="${o(m.id)}">
        <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
          <div>
            <strong>${o(m.label)}</strong>
            <div class="muted" style="font-size:12px">${o(m.hint||"")}</div>
          </div>
          ${f}
        </div>
        <div class="row wrap" style="gap:6px;margin-top:8px;align-items:center">
          ${m.connected?`<button type="button" class="btn ghost connect-mp-disconnect" data-id="${o(m.id)}">Unlink</button>
                 <label class="connect-mp-select">
                   <input type="checkbox" class="connect-mp-dest" data-id="${o(m.id)}" ${g?"checked":""} ${r?"disabled":""} />
                   Include
                 </label>`:`<button type="button" class="btn primary connect-mp-connect" data-id="${o(m.id)}">Link</button>`}
        </div>
      </div>`}).join(""),u=s.length,c=r?`<button type="button" class="btn danger" id="connectMpEnd">End multi-platform session</button>
       <span class="chip">LIVE · ${o(String(((p=a==null?void 0:a.destinations)==null?void 0:p.length)||u))} dest · TEST MODE</span>`:`<button type="button" class="btn primary" id="connectMpGoLive" ${u?"":"disabled"}>Go live to selected</button>
       <span class="chip">${u}/${n} selected · cap ${n}</span>`;return`
    <div class="card connect-multistream" id="connect-multistream">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:flex-start">
        <div>
          <h3 style="margin:0 0 6px">Multi-platform go-live</h3>
          <p class="muted" style="margin:0;max-width:40rem;font-size:13px">
            Link destinations and go live to more than one platform from PIKK.
            DEMO · TEST MODE · no real RTMP / OAuth relay yet. Platform account policies still apply.
          </p>
        </div>
        <span class="chip">TEST MODE</span>
      </div>
      <div class="connect-mp-grid" style="margin-top:12px">${l}</div>
      <div class="row wrap" style="margin-top:12px;gap:8px;align-items:center">
        ${c}
        <a class="btn ghost" href="#/live">Solo Live stage</a>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">
        PIKK Connect combines random video discovery and multi-platform live controls in one place.
      </p>
    </div>`}function Xa(){const e=Nr(),t=e.ageConfirmed&&e.rulesAccepted;return _("PIKK Connect",`<div class="connect-monkey" id="connectMonkey">
      <section class="pikk-connect-hero" aria-label="Find your community on PIKK">
        <div class="pikk-connect-hero-copy">
          <p class="kicker">PIKK CONNECT · PEOPLE &amp; COMMUNITIES</p>
          <h2>Real connections start here.</h2>
          <p>Find your people, join conversations, and explore the PIKK community. Real-time video matching remains unavailable until safety and infrastructure are ready.</p>
          <div class="pikk-connect-hero-actions">
            <a class="btn primary" href="#/communities">Explore communities</a>
            <a class="btn ghost" href="#/community">PIKK Lounge</a>
            <a class="btn ghost" href="#/messages">Messages</a>
          </div>
        </div>
        <div class="pikk-connect-hero-art" aria-hidden="true">
          <span class="pikk-connect-hero-person">♧</span>
          <span class="pikk-connect-hero-orbit orbit-one">✦</span>
          <span class="pikk-connect-hero-orbit orbit-two">◉</span>
          <span class="pikk-connect-hero-orbit orbit-three">✧</span>
        </div>
      </section>
      <nav class="pikk-connect-discover-nav" aria-label="Connect sections">
        <a href="#/communities"><span aria-hidden="true">♧</span> Communities</a>
        <a href="#/messages"><span aria-hidden="true">✉</span> Messages</a>
        <a href="#/connect#connect-random-chat"><span aria-hidden="true">◉</span> Random Chat</a>
        <a href="#/connect#connect-multistream"><span aria-hidden="true">▹</span> Broadcasting</a>
        <a href="#/dating"><span aria-hidden="true">♡</span> Dating</a>
      </nav>
      <section class="pikk-connect-feature-grid" aria-label="Discover ways to connect">
        <a class="pikk-connect-feature pikk-connect-feature-community" href="#/community">
          <span class="pikk-connect-feature-icon" aria-hidden="true">♧</span>
          <span class="pikk-connect-feature-copy"><strong>Communities</strong><small>Find groups and discussions</small></span>
          <span class="pikk-connect-feature-arrow" aria-hidden="true">↗</span>
        </a>
        <a class="pikk-connect-feature pikk-connect-feature-messages" href="#/messages">
          <span class="pikk-connect-feature-icon" aria-hidden="true">✉</span>
          <span class="pikk-connect-feature-copy"><strong>Messages</strong><small>Open your conversations</small></span>
          <span class="pikk-connect-feature-arrow" aria-hidden="true">↗</span>
        </a>
        <a class="pikk-connect-feature pikk-connect-feature-live" href="#/live">
          <span class="pikk-connect-feature-icon" aria-hidden="true">●</span>
          <span class="pikk-connect-feature-copy"><strong>PIKK Live</strong><small>Explore live creators · TEST MODE</small></span>
          <span class="pikk-connect-feature-arrow" aria-hidden="true">↗</span>
        </a>
      </section>
      <section class="card" aria-label="PIKK Connect experiences">
        <h2 style="margin:0 0 8px">Choose your connection</h2>
        <p class="muted small">One PIKK account, two separate experiences. Neither starts your camera automatically.</p>
        <div class="row wrap" style="gap:10px">
          <a class="btn primary" href="#/dating">♥ Dating · Swipe &amp; Match</a>
          <a class="btn ghost" href="#/connect#connect-random-chat">◉ Random Chat · 18+ TEST MODE</a>
        </div>
        <p class="muted small" style="margin:8px 0 0">Dating requires mutual interest. Random Chat is for spontaneous conversations, not automatic dating matches.</p>
      </section>
      <div id="connect-random-chat" class="connect-flag card">
        <p><span class="chip">TEST MODE</span> <span class="chip">Opt-in shell · no WebRTC</span> <span class="chip">18+</span></p>
        <p class="muted small" style="margin:6px 0 0">Monkey-style dual video discovery — PIKK branded. Admin can disable Connect anytime. Launch blocked until age assurance + moderation + WebRTC safety review.</p>
      </div>

      <div class="card connect-gates ${t?"ready":""}">
        <div class="connect-gates-row">
          <label class="connect-check"><input type="checkbox" id="connect-age" ${e.ageConfirmed?"checked":""}/> I confirm I am 18+</label>
          <label class="connect-check ${e.ageConfirmed?"":"connect-locked"}"><input type="checkbox" id="connect-rules" ${e.rulesAccepted?"checked":""} ${e.ageConfirmed?"":"disabled"}/> Consent &amp; community rules</label>
        </div>
        <ul class="connect-rules muted small">
          <li>Opt-in only — both people must consent to every connection.</li>
          <li>No nudity, sexual content, harassment, hate, or minors. Zero tolerance.</li>
          <li>Never share personal info; End, Report, or Block instantly.</li>
          <li>Sessions may be moderated; violations lead to bans.</li>
        </ul>
        <p class="muted small" style="margin:6px 0 0">Self-attestation is not enough for launch; real age assurance is required.</p>
      </div>

      <div class="connect-stage card">
        <div class="connect-tiles" aria-label="Match stage">
          <div class="connect-tile connect-tile-you">
            <div class="connect-tile-art" aria-hidden="true">
              <div class="connect-silhouette"></div>
            </div>
            <div class="connect-tile-label"><span class="chip">You</span> <span class="muted small">Camera off · demo</span></div>
          </div>
          <div class="connect-tile connect-tile-them" id="connectThem">
            <div class="connect-tile-art" aria-hidden="true">
              <div class="connect-silhouette them"></div>
              <div class="connect-pulse-ring" hidden id="connectPulse"></div>
            </div>
            <div class="connect-tile-label">
              <span class="chip">Them</span>
              <span class="muted small" id="connectThemStatus">No matching service · TEST MODE</span>
            </div>
          </div>
        </div>

        <div class="connect-actions">
          ${t?'<button class="btn primary connect-btn-start" id="connect-start">View launch requirements</button>':'<button class="btn primary connect-btn-start" disabled>Unavailable · review 18+ &amp; rules</button>'}
          <button class="btn primary connect-btn-next" disabled aria-label="Next (disabled)">Next</button>
          <button class="btn connect-btn-end" disabled aria-label="End (disabled)">End</button>
        </div>
        <div class="connect-controls" role="group" aria-label="Secondary controls (disabled)">
          <button class="btn ghost" disabled aria-label="Mute (disabled)">Mute</button>
          <button class="btn ghost" disabled aria-label="Camera (disabled)">Camera</button>
          <button class="btn ghost" disabled aria-label="Report (disabled)">Report</button>
          <button class="btn ghost" disabled aria-label="Block (disabled)">Block</button>
        </div>

        <div id="connect-blocked" class="connect-panel" hidden>
          <strong>${Eo}</strong>
          <p class="muted small">TEST MODE — this is a preview, not a real matching request. No match was created, no camera was requested, and no WebRTC connection was attempted.</p>
        </div>
        <p class="muted small" style="margin-top:10px">Controls are mockups until launch. Prefs save on this device.</p>
      </div>

      ${Oh()}

      <div class="card">
        <p class="muted" style="margin:0 0 8px">PIKK Connect <strong>does not replace</strong> Live, Messages, or Spotlight. Meanwhile:</p>
        <a class="btn" href="#/live">Live</a> <a class="btn" href="#/messages">Messages</a> <a class="btn" href="#/spotlight">Spotlight</a> <a class="btn ghost" href="#/shorts">Shorts / Clips</a>
      </div>
    </div>`,{lead:"1:1 discovery shell · multi-platform go-live · TEST MODE",badge:"Shell · no WebRTC"})}function qh(e){var t,s;e.querySelectorAll(".connect-mp-connect").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.id,n=Zc(i,"");if(n!=null&&n.error)return h(String(n.error));h(`Linked ${i} · TEST MODE`),es()})}),e.querySelectorAll(".connect-mp-disconnect").forEach(a=>{a.addEventListener("click",()=>{ed(a.dataset.id),h("Unlinked · TEST MODE"),es()})}),e.querySelectorAll(".connect-mp-dest").forEach(a=>{a.addEventListener("change",()=>{sd(a.dataset.id),es()})}),(t=e.querySelector("#connectMpGoLive"))==null||t.addEventListener("click",()=>{const a=id();if((a==null?void 0:a.error)==="signin")return h("Sign in first");if((a==null?void 0:a.error)==="none_selected")return h("Select at least one destination");if(a!=null&&a.error)return h(String(a.error));h("Multi-platform session started · TEST MODE"),es()}),(s=e.querySelector("#connectMpEnd"))==null||s.addEventListener("click",()=>{nd(),h("Session ended"),es()})}function Za(e=document,t){var i,n,r;const s=()=>{if(typeof t=="function")return t();e.innerHTML=Xa(),Za(e)};(i=e.querySelector("#connect-age"))==null||i.addEventListener("change",l=>{const u=l.target.checked;Zi(u?{ageConfirmed:!0}:{ageConfirmed:!1,rulesAccepted:!1}),s()}),(n=e.querySelector("#connect-rules"))==null||n.addEventListener("change",l=>{Zi({rulesAccepted:l.target.checked}),s()}),(r=e.querySelector("#connect-start"))==null||r.addEventListener("click",()=>{const l=e.querySelector("#connect-blocked");l==null||l.removeAttribute("hidden"),h(Eo)}),qh(e);const a=Ue().elementId;(a==="connect-random-chat"||a==="connect-multistream")&&requestAnimationFrame(()=>{var l,u,c,p;(p=e.querySelector(`#${a}`))==null||p.scrollIntoView({behavior:(c=(u=(l=globalThis.window)==null?void 0:l.matchMedia)==null?void 0:u.call(l,"(prefers-reduced-motion: reduce)"))!=null&&c.matches?"instant":"smooth",block:"start"})})}const Ao="pikk_forum_local_v1",ps=[["music","Music & Artists","♫"],["business","Business & Money","$"],["relationships","Relationships","♡"],["gaming","Gaming","♜"],["sports","Sports","★"],["entertainment","Entertainment","▶"],["lifestyle","Lifestyle","✦"],["general","General Discussion","#"]],ei=new Set(ps.map(e=>e[0])),ts=e=>String(e||"").trim();function ss(){try{const e=JSON.parse(localStorage.getItem(Ao)||"{}");return{posts:Array.isArray(e.posts)?e.posts.filter(t=>t&&ei.has(t.topic)).slice(-150):[],votes:e.votes&&typeof e.votes=="object"?e.votes:{},hidden:Array.isArray(e.hidden)?e.hidden:[]}}catch{return{posts:[],votes:{},hidden:[]}}}function Bs(e){try{return localStorage.setItem(Ao,JSON.stringify(e)),!0}catch{return h("Local storage unavailable"),!1}}function Nh(e,t,s,a){let i=e.posts.filter(r=>!e.hidden.includes(r.id)&&(s==="all"||r.topic===s));const n=r=>Object.entries(e.votes).reduce((l,u)=>l+(u[0].startsWith(r.id+":")&&Number(u[1])||0),0);return i.sort((r,l)=>{var u,c;return a==="top"?n(l)-n(r):a==="discussed"?(((u=l.replies)==null?void 0:u.length)||0)-(((c=r.replies)==null?void 0:c.length)||0):l.when-r.when}),i.length?i.map(r=>{var p;const l=((p=ps.find(m=>m[0]===r.topic))==null?void 0:p[1])||"Community",u=Array.isArray(r.replies)?r.replies:[],c=Number(e.votes[r.id+":"+((t==null?void 0:t.id)||"guest")])||0;return'<article class="pikk-forum-post"><div class="pikk-forum-votes"><button data-fvote="1" data-id="'+o(r.id)+'" aria-label="Upvote" aria-pressed="'+(c===1)+'" '+(t?"":"disabled")+">▲</button><b>"+n(r)+'</b><button data-fvote="-1" data-id="'+o(r.id)+'" aria-label="Downvote" aria-pressed="'+(c===-1)+'" '+(t?"":"disabled")+'>▼</button></div><div class="pikk-forum-post-content"><p class="pikk-forum-meta">'+o(l)+" · u/"+o(r.author)+" · local preview</p><h3>"+o(r.title)+'</h3><p class="pikk-forum-text">'+o(r.body)+'</p><button class="pikk-forum-reply-button" data-fopen="'+o(r.id)+'">▤ '+u.length+" replies</button> "+(t&&t.id!==r.owner?'<button class="pikk-forum-reply-button" data-freport="'+o(r.id)+'">◇ Hide / report locally</button>':"")+'<div class="pikk-forum-thread" data-thread="'+o(r.id)+'" hidden>'+u.map(m=>'<p class="pikk-forum-comment"><strong>'+o(m.author)+"</strong> "+o(m.body)+"</p>").join("")+(t?'<form data-freply="'+o(r.id)+'"><label>Reply</label><textarea maxlength="1000" required rows="2" placeholder="Join the discussion"></textarea><button class="btn primary" type="submit">Reply · local</button></form>':'<a href="#/profile" class="btn ghost">Sign in to reply</a>')+"</div></div></article>"}).join(""):'<div class="pikk-forum-empty">No discussions yet. Start the first conversation on this browser.</div>'}function Bh(){const e=L().user,t=ps.map(s=>'<button data-ftopic="'+s[0]+'" type="button" aria-pressed="false"><span>'+s[2]+"</span>"+o(s[1])+"</button>").join("");return _("PIKK Communities",'<section class="pikk-forum-hero"><p class="kicker">PIKK CONNECT · TOPICS & DISCUSSIONS</p><h2>Find your people. <span>Start the conversation.</span></h2><p>Explore communities around what matters to you. Discuss, upvote, reply and discover new ideas.</p><a class="btn ghost" href="#/community">PIKK Lounge</a> <a class="btn ghost" href="#/posts">Social Posts</a></section><p class="pikk-forum-warning"><b>TEST MODE:</b> These conversations and votes are saved only in this browser. No public posting, account verification or server-side moderation is active.</p><div id="pikkForum" class="pikk-forum-layout"><aside class="pikk-forum-sidebar"><h3>Explore topics</h3><button class="on" data-ftopic="all" aria-pressed="true">✦ All discussions</button>'+t+'</aside><main class="pikk-forum-center"><nav class="pikk-forum-sort" aria-label="Sort posts"><button class="on" data-fsort="new" aria-pressed="true">✦ New</button><button data-fsort="top" aria-pressed="false">▲ Top</button><button data-fsort="discussed" aria-pressed="false">▤ Discussed</button></nav><div class="pikk-forum-topic-board"><h3>Discover communities</h3><div class="pikk-forum-topic-cards">'+ps.map(s=>'<button data-ftopic="'+s[0]+'" aria-pressed="false"><span>'+s[2]+"</span><strong>"+o(s[1])+"</strong></button>").join("")+'</div></div><section class="pikk-forum-compose"><h3>Start a discussion</h3>'+(e?'<form id="pikkForumForm"><label for="pikkForumTopic">Community</label><select id="pikkForumTopic">'+ps.map(s=>'<option value="'+s[0]+'">'+o(s[1])+"</option>").join("")+'</select><label for="pikkForumTitle">Title</label><input id="pikkForumTitle" required maxlength="110" placeholder="What is on your mind?" /><label for="pikkForumBody">Discussion</label><textarea id="pikkForumBody" required maxlength="4000" rows="3" placeholder="Ask a question or share a thought..."></textarea><button class="btn primary" type="submit">Publish locally · TEST MODE</button></form>':'<p class="muted">Sign in with a PIKK demo account to write discussions and vote.</p><a href="#/profile" class="btn primary">Sign in</a>')+'</section><section><h3 class="pikk-forum-feed-title">Community discussions</h3><div id="pikkForumFeed"></div></section></main><aside class="pikk-forum-info"><h3>About PIKK Communities</h3><p>Topic-based discussion with an original PIKK look, separate from the live Lounge and social feed.</p><h3>Community safety</h3><p>Respect others. No harassment, hate, scams or personal information. Reports on this preview only hide posts on your device.</p><a href="#/guidelines">Community Guidelines</a></aside></div>',{lead:"Topic communities · discussions · voting · replies · local preview"})}function Rh(e){const t=e.querySelector("#pikkForum");if(!t)return;let s="all",a="new";const i=()=>L().user,n=t.querySelector("#pikkForumFeed"),r=()=>{n.innerHTML=Nh(ss(),i(),s,a)},l=new URLSearchParams(location.hash.split("?")[1]||"").get("topic");ei.has(l)&&(s=l);function u(c,p,m){t.querySelectorAll(c).forEach(g=>{let f=g.dataset[p]===m;g.classList.toggle("on",f),g.setAttribute("aria-pressed",String(f))})}u("[data-ftopic]","ftopic",s),t.addEventListener("click",c=>{const p=c.target.closest("[data-ftopic]");if(p){s=p.dataset.ftopic,u("[data-ftopic]","ftopic",s);const y=t.querySelector("#pikkForumTopic");y&&s!=="all"&&(y.value=s),r();return}const m=c.target.closest("[data-fsort]");if(m){a=m.dataset.fsort,u("[data-fsort]","fsort",a),r();return}const g=c.target.closest("[data-fopen]");if(g){const y=t.querySelector('[data-thread="'+g.dataset.fopen+'"]');y&&(y.hidden=!y.hidden);return}const f=c.target.closest("[data-fvote]");if(f&&i()){const y=ss(),v=f.dataset.id+":"+i().id,w=Number(f.dataset.fvote);y.votes[v]=y.votes[v]===w?0:w,Bs(y)&&r();return}const b=c.target.closest("[data-freport]");if(b&&i()){if(!confirm("Hide this post on this browser? This will NOT submit a report to a server."))return;const y=ss();y.hidden.push(b.dataset.freport),Bs(y)&&r(),h("Hidden locally only — no server report submitted")}}),t.addEventListener("submit",c=>{var m,g,f,b;const p=c.target;if(!(!(p instanceof HTMLFormElement)||!i())){if(c.preventDefault(),p.id==="pikkForumForm"){const y=ts((m=p.querySelector("input"))==null?void 0:m.value),v=ts((g=p.querySelector("textarea"))==null?void 0:g.value),w=(f=p.querySelector("select"))==null?void 0:f.value;if(!y||!v||!ei.has(w))return;const $=ss();$.posts.push({id:"local-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),owner:i().id,author:ts(i().username).slice(0,30)||"Member",title:y,body:v,topic:w,when:Date.now(),replies:[]}),Bs($)&&(s=w,u("[data-ftopic]","ftopic",s),p.reset(),r(),h("Saved only on this browser · TEST MODE"))}else if(p.dataset.freply){const y=ts((b=p.querySelector("textarea"))==null?void 0:b.value);if(!y)return;const v=ss(),w=v.posts.find($=>$.id===p.dataset.freply);if(!w)return;if(w.replies||(w.replies=[]),w.replies.push({author:ts(i().username).slice(0,30)||"Member",body:y}),Bs(v)){r();const $=t.querySelector('[data-thread="'+w.id+'"]');$&&($.hidden=!1),h("Reply saved locally")}}}}),r()}function jh(){const e=fe.filter(s=>(s.category||"")==="Music Videos"&&s.embed);return(e.length?e:fe.filter(s=>s.embed)).slice(0,10).map((s,a)=>({id:`clip_${s.id}`,videoId:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube,blurb:a%3===0?"Clip cut · DEMO":a%3===1?"Highlight · DEMO":"Short · DEMO"}))}function Fh(e,t){return`
    <article class="shorts-card" data-clip-id="${o(e.id)}" id="shorts-card-${t}">
      <div class="shorts-stage">
        <div class="shorts-embed hero-video">
          <iframe
            src="${o(Je(e.embed))}"
            title="${o(e.title)}"
            allowfullscreen
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div class="shorts-meta">
          <span class="chip">${o(e.blurb)}</span>
          <span class="chip">TEST MODE</span>
          <h3 class="shorts-title">${o(e.title)}</h3>
          <p class="muted shorts-artist">@${o(e.artist)}</p>
          <div class="row wrap shorts-actions">
            <a class="btn ghost" href="${o(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a>
            <a class="btn ghost" href="#/videos">Full Videos</a>
            <a class="btn ghost" href="#/live">Live channels</a>
          </div>
        </div>
      </div>
    </article>`}function Mn(){const e=jh(),s=`
    <div class="card shorts-intro">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:flex-start">
        <div>
          <p class="muted" style="margin:0;max-width:40rem">
            Vertical short-form clips for people who do not want a full Live.
            Demo cards reuse official Music Video embeds from the catalog — not a separate clip CDN yet.
          </p>
        </div>
        <span class="chip">TEST MODE</span>
      </div>
      <div class="row wrap" style="margin-top:10px;gap:8px">
        <a class="btn primary" href="#/posts?compose=1&type=short">Post a Short</a>
        <a class="btn ghost" href="#/posts">← Posts</a>
        <a class="btn ghost" href="#/videos">Videos</a>
      </div>
    </div>
    <div class="shorts-feed" id="shortsFeed" aria-label="Shorts feed">
      ${e.map(Fh).join("")||'<p class="muted">No demo clips seeded.</p>'}
    </div>
    <p class="muted" style="margin:12px 0 0;font-size:12px;text-align:center">
      End of DEMO feed · ${e.length} clips · Scroll for more when real clip uploads ship
    </p>`;return _("Shorts / Clips",s,{lead:"Posts · short-form feed · Picture / Short / Video create on Posts · TEST MODE"})}function Ln(e){wa(e),e.querySelectorAll(".shorts-card").forEach(t=>{t.addEventListener("focusin",()=>{t.classList.add("is-focus")})}),e.querySelector(".shorts-card")||h("No demo clips · add MVs in data.js")}const ia=[{id:"ny",name:"NY",tag:"East coast",still:"/blockwars-preview/preview-ny-still.jpg",fighter:"Brooklyn Brawler",blurb:"Street-pressured power from the five boroughs. Heavy combos, tight corners — TEST MODE teaser only."},{id:"la",name:"LA",tag:"West coast",still:"/blockwars-preview/preview-la-still.jpg",fighter:"Sunset Striker",blurb:"Flashy footwork under neon skies. Style meets speed — Coming Soon, not a real match engine."},{id:"chi",name:"Chicago",tag:"Midwest",still:"/blockwars-preview/preview-chi-still.jpg",fighter:"Windy City Wall",blurb:"Defense-first grit from the lakefront. Hold the block — lobby demo only, no live fights yet."}];function Kh(e){return ia.map(t=>{const s=t.id===e?" is-active":"",a=t.id===e?"true":"false";return`<button type="button" class="bw-city-card${s}" data-city="${o(t.id)}" aria-pressed="${a}" aria-label="${o(t.name)} fighter"><img src="${o(t.still)}" alt="" width="120" height="160" loading="lazy" decoding="async" /><span class="bw-city-meta"><span class="bw-city-name">${o(t.name)}</span><span class="bw-city-tag">${o(t.tag)}</span></span></button>`}).join("")}function Gh(e){return`<div class="bw-focus" id="bwFocus" data-city="${o(e.id)}"><div class="bw-focus-still"><img id="bwFocusImg" src="${o(e.still)}" alt="${o(e.fighter)}" width="110" height="140" /></div><div class="bw-focus-copy"><p class="bw-focus-city">${o(e.name)} · ${o(e.tag)}</p><h3 id="bwFocusName">${o(e.fighter)}</h3><p id="bwFocusBlurb">${o(e.blurb)}</p></div></div>`}function Uh(){const e=ia[0],t=`
    <div class="card bw-preview bw-lobby" id="bw-coming-soon">
      <div class="bw-lobby-head bw-preview-head">
        <div>
          <p class="kicker" style="margin:0">Games · Lobby demo</p>
          <h2 class="bw-lobby-title bw-preview-title" style="margin:4px 0 0">Block Wars</h2>
        </div>
        <span class="badge-cs" id="bw-coming-soon-badge">Coming Soon</span>
      </div>
      <p class="muted bw-preview-lead">Pick a city fighter below — teaser lobby only. Full gameplay is <strong>not</strong> shipping yet.</p>

      <div class="bw-city-grid" id="bwCityGrid" role="group" aria-label="City fighters">
        ${Kh(e.id)}
      </div>

      ${Gh(e)}

      <button type="button" class="btn primary bw-arena-cta" id="bwEnterArena">
        Enter arena · Coming Soon
      </button>
      <p class="chip" style="margin-top:10px">TEST MODE · lobby select only · not a playable game</p>
    </div>

    <div class="card bw-preview" id="bw-preview-video-card">
      <div class="bw-preview-head">
        <div>
          <p class="kicker" style="margin:0">Fighter preview</p>
          <h3 class="bw-preview-title" style="margin:4px 0 0;font-size:18px">Watch the teaser</h3>
        </div>
        <span class="chip bw-preview-chip">~12s</span>
      </div>
      <div class="bw-preview-frame">
        <video
          id="bwCsVideo"
          class="bw-preview-video"
          poster="/blockwars-preview/frames/01.jpg"
          src="/blockwars-preview/blockwars-fighters-preview.mp4"
          playsinline
          webkit-playsinline
          preload="metadata"
          controls
          controlslist="nodownload noplaybackrate"
          aria-label="Block Wars fighter preview"></video>
        <button type="button" class="bw-preview-play" id="bwCsPlay" aria-label="Play Block Wars preview">
          <span class="bw-preview-play-icon" aria-hidden="true">▶</span>
          <span class="bw-preview-play-label">Watch preview</span>
        </button>
      </div>
      <div class="bw-preview-foot muted">NY · LA · Chicago slideshow · tap play · Coming soon on DBS</div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 8px">What’s coming</h3>
      <ul class="muted" style="margin:0;padding-left:1.2em;line-height:1.55">
        <li>City fighter matchups (NY · LA · Chicago)</li>
        <li>DatBoiSkeet-branded Block Wars arena</li>
        <li>Full gameplay &amp; character art — <strong>paused</strong> (lobby + preview assets only for now)</li>
      </ul>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <a class="btn ghost" href="#/home">Back to Home</a>
      </div>
    </div>`;return _("Block Wars",t,{lead:"Coming Soon · lobby fighter select · preview video · not playable yet."})}function Vh(e,t){const s=ia.find(u=>u.id===t)||ia[0];e.querySelectorAll(".bw-city-card").forEach(u=>{const c=u.getAttribute("data-city")===s.id;u.classList.toggle("is-active",c),u.setAttribute("aria-pressed",c?"true":"false")});const a=e.querySelector("#bwFocus"),i=e.querySelector("#bwFocusImg"),n=e.querySelector("#bwFocusName"),r=e.querySelector("#bwFocusBlurb"),l=e.querySelector(".bw-focus-city");a&&a.setAttribute("data-city",s.id),i&&(i.src=s.still,i.alt=s.fighter),n&&(n.textContent=s.fighter),r&&(r.textContent=s.blurb),l&&(l.textContent=`${s.name} · ${s.tag}`)}function zh(e){var i,n;(i=e.querySelector("#bwCityGrid"))==null||i.addEventListener("click",r=>{const l=r.target.closest(".bw-city-card");l&&(r.preventDefault(),Vh(e,l.getAttribute("data-city")))}),(n=e.querySelector("#bwEnterArena"))==null||n.addEventListener("click",r=>{r.preventDefault(),h("Block Wars arena is Coming Soon — lobby demo only. No match engine yet.")});const t=e.querySelector("#bwCsVideo"),s=e.querySelector("#bwCsPlay");if(!t)return;const a=()=>{if(!s)return;const r=t.paused||t.ended;s.hidden=!r,s.setAttribute("aria-hidden",r?"false":"true")};s==null||s.addEventListener("click",r=>{r.preventDefault(),t.play().catch(()=>{})}),t.addEventListener("play",()=>{Bt(),a()}),t.addEventListener("pause",()=>{Qe(),a()}),t.addEventListener("ended",()=>{Qe(),a()}),t.addEventListener("pointerdown",()=>{t.paused||Bt()}),a()}function Hh(){return _("PIKK Arcade",`
    <section class="pikk-arcade-intro card" aria-label="PIKK Arcade">
      <div class="pikk-arcade-heading">
        <div>
          <p class="kicker">Play · Compete · Hang out</p>
          <div class="pikk-arcade-brand"><img src="${o(zs({artwork:"/brand/pikk-official-approved.jpg"}))}" alt="PIKK" loading="eager" decoding="async"/><span>ARCADE</span></div>
          <p>15 original game concepts. Find your favorites, see the art, and follow their development.</p>
        </div>
        <span class="pikk-arcade-icon" aria-hidden="true">🎮</span>
      </div>
      <p class="pikk-arcade-disclosure">ALL GAMES COMING SOON · Gallery previews, not playable releases. Play Chips have no cash value or cash-out.</p>
    </section>
    <div class="pikk-arcade-toolbar"><strong>15 upcoming games</strong><span>PLAY • COMPETE • HANG OUT</span></div>
    <div class="pikk-arcade-grid">
      ${us.map((e,t)=>`
        <article class="pikk-arcade-card pikk-game-${o(e.theme)}">
          <div class="pikk-arcade-card-header"><span class="pikk-arcade-number">${t+1}</span><h3>${o(e.name)}</h3></div>
          <div class="pikk-arcade-art" aria-label="${o(e.name)} preview artwork">
            ${e.artwork?`<img src="${o(zs(e))}" alt="${o(e.name)} concept artwork" loading="lazy" decoding="async"/>`:`<span class="pikk-arcade-symbol" aria-hidden="true">${e.icon}</span>`}
          </div>
          <div class="pikk-arcade-copy">
            <span class="pikk-arcade-players">♙ ${o(e.players)} ${e.players==="1"?"Player":"Players"}</span>
            <p>${o(e.description)}</p>
            <button type="button" class="pikk-arcade-view" data-game-preview="${t}" aria-label="View ${o(e.name)} concept artwork full size">View artwork <span aria-hidden="true">↗</span></button>
            ${e.href?`<a class="pikk-arcade-action" href="${o(e.href)}">View preview →</a>`:`<span class="pikk-arcade-action" aria-label="${o(e.name)} coming soon">Coming Soon</span>`}
          </div>
        </article>`).join("")}
    </div>
    <dialog id="pikkArcadeLightbox" class="pikk-arcade-lightbox" aria-labelledby="pikkArcadePreviewTitle" aria-describedby="pikkArcadePreviewDescription">
      <div class="pikk-arcade-lightbox-panel">
        <div class="pikk-arcade-lightbox-top">
          <span class="pikk-arcade-lightbox-kicker">PIKK ARCADE <span aria-hidden="true">·</span> CONCEPT ART <span data-arcade-counter>01 / 15</span></span>
          <button type="button" class="pikk-arcade-lightbox-close" data-arcade-close aria-label="Close artwork preview">×</button>
        </div>
        <div class="pikk-arcade-lightbox-art"><img data-arcade-full-image alt="" decoding="async"/></div>
        <div class="pikk-arcade-lightbox-bottom">
          <div class="pikk-arcade-lightbox-description">
            <h2 id="pikkArcadePreviewTitle" data-arcade-title>Block Wars</h2>
            <p id="pikkArcadePreviewDescription" data-arcade-description>City-based fighters, combos and special moves.</p>
            <span data-arcade-players>1–2 Players · Preview only</span>
          </div>
          <div class="pikk-arcade-lightbox-controls" aria-label="Browse game artwork">
            <button type="button" data-arcade-prev aria-label="Previous game artwork">←</button>
            <button type="button" data-arcade-next aria-label="Next game artwork">→</button>
          </div>
        </div>
        <p class="pikk-arcade-lightbox-note">Original concept artwork · Games are not playable yet</p>
      </div>
    </dialog>
    <p class="muted pikk-arcade-footnote">All 15 owner-supplied concept images are now displayed. Select View artwork to see each one full size. Game concepts and final artwork may evolve; no gambling or real-money prizes are available.</p>
  `,{lead:"Fifteen upcoming games · mobile-first catalog · previews only"})}function Wh(e){const t=us.length,s=(Math.trunc(Number(e)||0)%t+t)%t,a=us[s];return{index:s,total:t,title:a.name,description:a.description,players:a.players,image:zs(a)}}function Yh(e){const t=e.querySelector(".pikk-arcade-grid"),s=e.querySelector("#pikkArcadeLightbox");if(!t||!s||typeof s.showModal!="function")return;let a=0,i=null;const n=s.querySelector("[data-arcade-full-image]"),r=s.querySelector("[data-arcade-title]"),l=s.querySelector("[data-arcade-description]"),u=s.querySelector("[data-arcade-players]"),c=s.querySelector("[data-arcade-counter]"),p=m=>{const g=Wh(m);a=g.index,n.src=g.image,n.alt=g.title+" concept artwork",r.textContent=g.title,l.textContent=g.description,u.textContent=g.players+(g.players==="1"?" Player · Preview only":" Players · Preview only"),c.textContent=String(a+1).padStart(2,"0")+" / "+g.total};t.addEventListener("click",m=>{const g=m.target.closest("[data-game-preview]");g&&(i=g,p(g.dataset.gamePreview),s.showModal())}),s.addEventListener("click",m=>{m.target===s||m.target.closest("[data-arcade-close]")?s.close():m.target.closest("[data-arcade-prev]")?p(a-1):m.target.closest("[data-arcade-next]")&&p(a+1)}),s.addEventListener("keydown",m=>{(m.key==="ArrowLeft"||m.key==="ArrowRight")&&(m.preventDefault(),p(a+(m.key==="ArrowRight"?1:-1)))}),s.addEventListener("close",()=>{i!=null&&i.isConnected&&i.focus()})}function Jh(){return _("PIKK Dating & Connections",`
    <section class="pikk-dating-hero" id="dating-discover" tabindex="-1" aria-label="PIKK Dating prelaunch">
      <div class="pikk-dating-hero-copy">
        <span class="chip">18+ · Pre-launch</span>
        <p class="kicker">PIKK DATING · FIND YOUR CONNECTION</p>
        <h2>Find your vibe. <span>Make it mutual.</span></h2>
        <p>Explore connections through mutual interest, shared communities and conversations when our real adult eligibility and safety services are ready.</p>
        <div class="pikk-dating-hero-actions">
          <a class="btn primary" href="#/community">Explore communities</a>
          <a class="btn ghost" href="#/profile">Your profile</a>
        </div>
        <small>No real matches are being created here · TEST MODE</small>
      </div>
      <div class="pikk-dating-symbol" aria-hidden="true">♡</div>
    </section>
    <nav class="pikk-dating-tabs" aria-label="Dating experience sections">
      <button type="button" data-dating-jump="dating-discover" class="is-active" aria-pressed="true">Discover</button>
      <button type="button" data-dating-jump="dating-experiences" aria-pressed="false">Experiences</button>
      <button type="button" data-dating-jump="dating-live" aria-pressed="false">Dating Live</button>
      <button type="button" data-dating-jump="dating-safety" aria-pressed="false">Safety</button>
    </nav>
    <section class="pikk-dating-experience-grid" id="dating-experiences" tabindex="-1" aria-label="Ways to connect">
      <a class="pikk-dating-experience" href="#/community"><span aria-hidden="true">♧</span><strong>Meet through interests</strong><small>Community discovery</small></a>
      <a class="pikk-dating-experience" href="#/connect#connect-random-chat"><span aria-hidden="true">◉</span><strong>Random Chat</strong><small>Separate from dating · Preview</small></a>
      <a class="pikk-dating-experience" href="#/messages"><span aria-hidden="true">✉</span><strong>Messages</strong><small>Your existing inbox</small></a>
    </section>
    <div class="card pikk-dating-panel pikk-dating-match">
      <span class="pikk-dating-panel-tag">MATCHMAKING · PLANNED</span>
      <span class="chip">18+ · Pre-launch</span>
      <h2>PIKK Match</h2>
      <p>Meet people through opt-in dating, mutual matches, dating live rooms and speed introductions when verified safety systems are ready.</p>
      <p class="muted">Swipe & Match, private dating profiles, mutual-match chat and speed dating are in development. No real matches are being created here.</p>
    </div>
    <div class="card pikk-dating-panel pikk-dating-choices">
      <span class="pikk-dating-panel-tag">YOUR CONNECTIONS</span>
      <h3>Choose your experience</h3>
      <p class="muted">Dating is for romantic mutual matches. Random Chat is for spontaneous conversations and friendships. These are separate opt-in experiences.</p>
      <div class="row wrap" style="gap:8px">
        <a class="btn primary" href="#/dating" aria-current="page">Dating · current section</a>
        <a class="btn ghost" href="#/connect#connect-random-chat">Random Chat · 18+ TEST MODE</a>
      </div>
      <p class="muted small">Random Chat never automatically creates a dating match. No camera is started when you open either page.</p>
    </div>
    <div class="card pikk-dating-panel pikk-dating-live" id="dating-live" tabindex="-1">
      <span class="pikk-dating-panel-tag">LIVE CONNECTIONS · PREVIEW</span>
      <h3>Dating Live & Connections</h3>
      <p class="muted">Browse the existing Live area. Live sessions are currently a test-mode experience; gifts never buy consent or a match.</p>
      <a class="btn primary" href="#/live">Open Live</a>
      <a class="btn ghost" href="#/connect">PIKK Connect · test mode</a>
    </div>
    <div class="card pikk-dating-panel pikk-dating-safety" id="dating-safety" tabindex="-1">
      <span class="pikk-dating-panel-tag">YOUR SAFETY FIRST</span>
      <h3>Privacy & safety</h3>
      <p class="muted">Dating will require verified adult eligibility, explicit profile opt-in, private mutual consent, blocking, reporting and account deletion before launch. Camera and microphone permissions are never requested on this page.</p>
    </div>
  `,{lead:"Dating · mutual matches · live connections"})}function Qh(e){const t=new Set(["dating-discover","dating-experiences","dating-live","dating-safety"]),s=[...e.querySelectorAll("[data-dating-jump]")];function a(n,r=!1){if(!t.has(n))return;const l=e.querySelector("#"+n);if(l&&(s.forEach(u=>{const c=u.dataset.datingJump===n;u.classList.toggle("is-active",c),u.setAttribute("aria-pressed",String(c))}),r)){const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches;l.scrollIntoView({behavior:u?"auto":"smooth",block:"start"}),l.focus({preventScroll:!0})}}s.forEach(n=>n.addEventListener("click",()=>a(n.dataset.datingJump,!0)));const i=Ue().elementId;t.has(i)&&window.setTimeout(()=>{e.querySelector("#"+i)&&a(i,!0)},80)}const Co=60,Xh=10,Zh=10,In=3;function eg(){return{phase:"round",round:1,seconds:Co,votes:[0,0],scores:[0,0],roundWinners:[],gifts:[0,0],rematchVotes:[0,0],winner:null,tieBreaker:!1}}function tg(e,t){if(e.phase!=="vote"||![0,1].includes(t))return e;const s=[...e.votes];return s[t]+=1,{...e,votes:s}}function sg(e,t){if(e.phase!=="rematch")return e;const s=[...e.rematchVotes];return s[t?0:1]+=1,{...e,rematchVotes:s}}function ag(e){if(!["round","vote","rematch"].includes(e.phase))return e;if(e.seconds>1)return{...e,seconds:e.seconds-1};if(e.phase==="round")return{...e,phase:"vote",seconds:Xh,votes:[0,0],voted:!1};if(e.phase==="vote"){const t=e.votes[0]===e.votes[1]?null:e.votes[0]>e.votes[1]?0:1,s=[...e.scores];t!==null&&(s[t]+=1);const a=[...e.roundWinners,t];return e.round>=In&&s[0]!==s[1]?{...e,scores:s,roundWinners:a,winner:s[0]>s[1]?0:1,phase:"rematch",seconds:Zh,rematchVoted:!1}:{...e,scores:s,roundWinners:a,phase:"round",round:e.round+1,seconds:Co,votes:[0,0],voted:!1,tieBreaker:e.round>=In}}return{...e,phase:"finished",seconds:0}}let J=null,Le=null;function Rs(){const e=document.getElementById("roast-demo");if(!e||!J){Le&&clearInterval(Le),Le=null;return}const t=J.phase,s=t==="round"?`Round ${J.round}${J.tieBreaker?" · Final tiebreaker":""}`:t==="vote"?"Vote for the round winner":t==="rematch"?"Run It Back?":"Match finished";e.innerHTML=`<h3>${s}</h3><p><strong>${String(Math.floor(J.seconds/60)).padStart(2,"0")}:${String(J.seconds%60).padStart(2,"0")}</strong></p><p>Contestant A: ${J.scores[0]} rounds · Contestant B: ${J.scores[1]} rounds</p>${t==="vote"?'<button type="button" data-roast-vote="0">Vote A</button> <button type="button" data-roast-vote="1">Vote B</button>':""}${t==="rematch"?`<p>Winner: Contestant ${J.winner===0?"A":"B"}</p><button type="button" data-roast-rematch="yes">Run It Back? Yes</button> <button type="button" data-roast-rematch="no">No</button>`:""}<p class="muted">Local interactive simulation only. Votes are not shared between viewers. No live video or gifts are connected.</p>`}function ig(){Le&&clearInterval(Le),Le=null,J=null;const e=document.getElementById("roast-start");e&&(e.addEventListener("click",()=>{J=eg(),Rs(),Le&&clearInterval(Le),Le=setInterval(()=>{J=ag(J),Rs(),J.phase==="finished"&&(clearInterval(Le),Le=null)},1e3)}),document.getElementById("roast-demo").addEventListener("click",t=>{const s=t.target.closest("[data-roast-vote]"),a=t.target.closest("[data-roast-rematch]");s&&J&&J.phase==="vote"&&!J.voted&&(J={...tg(J,Number(s.dataset.roastVote)),voted:!0},Rs()),a&&J&&J.phase==="rematch"&&!J.rematchVoted&&(J={...sg(J,a.dataset.roastRematch==="yes"),rematchVoted:!0},Rs())}))}function ng(){return _("PIKK Roast Arena",`
    <div class="card">
      <span class="chip">Comedy & Roast Battles · Coming Soon</span>
      <h2>PIKK Roast Arena</h2>
      <p>Step into live roast battles, trade jokes, and watch comedians go head-to-head. Join the audience, vote for your favorite, or request your turn on the mic.</p>
      <p class="muted">Live battles, voting, gifts and matchmaking are in development. No active battle or vote is represented on this page.</p>
      <a class="btn primary" href="#/live?tab=categories">Explore Live Categories</a>
    </div>
    <div class="card">
      <h3>Battle formats</h3>
      <div class="row wrap"><span class="chip">1 vs. 1</span><span class="chip">Tag Team</span><span class="chip">Open Mic</span><span class="chip">Tournament</span></div>
      <p class="muted">Automated format: split-screen contestants, on-screen rules, automatic round countdown, timed voting buttons for viewers, gifts and requests to battle. No host is required.</p>
    </div>
    <div class="card">
      <h3>How an automated round works</h3>
      <ol>
        <li>Both contestants opt in and see the rules before the round begins.</li>
        <li>The system starts a visible countdown and displays the current round and time remaining to everyone.</li>
        <li>When the round ends, both microphones pause and viewers see <strong>Vote: Contestant A</strong> or <strong>Vote: Contestant B</strong> buttons.</li>
        <li>Each eligible viewer gets one vote per round within the timed voting window; the system locks voting when time expires.</li>
        <li>Results display the round winner, cumulative score and a separate gifts leaderboard. The <strong>10-second audience voting window is the only break</strong> between rounds. The next round starts immediately after voting closes. If the final match vote is tied, an automatic <strong>tiebreaker final round</strong> begins after voting closes. At the end of a decided match, viewers can vote <strong>Rematch: Yes</strong> or <strong>Rematch: No</strong>; a rematch proceeds only if both contestants agree.</li>
      </ol>
      <p class="muted">Voting windows, tiebreakers, rematch polls with no additional inter-round break are planned behavior, not yet a working real-time match.</p>
    </div>
    <div class="card">
      <h3>Discovery</h3>
      <p class="muted">Upcoming Battles · Live Now · Top Roasters · Funniest Clips</p>
      <p>Comedy winner (audience votes) and most-supported performer (gifts) will be displayed as <strong>separate results</strong>. Gifts cannot change the audience vote winner.</p>
    </div>
    <div class="card">
      <h3>Consent & safety</h3>
      <p>Everyone competing must explicitly opt in to being roasted. Automated safety controls must enforce the rules, provide mute and removal actions, and let participants and viewers report threats, hate speech, harassment or sharing private information. Escalation to human review remains available for serious reports.</p>
      <p class="muted">18+ eligibility, reporting, moderation and consent controls must be implemented and tested before live competition launches.</p>
    </div>
  `,{lead:"Live comedy competitions · audience votes and gifts tracked separately"})}const rs={instagram:"Instagram",tiktok:"TikTok",facebook:"Facebook",youtube:"YouTube",x:"X",snapchat:"Snapchat",other:"Other"};function rg(e){return((e==null?void 0:e.path)||"")==="/refer"?"refer":"share"}function ne(e){R(e==="refer"?"#/refer":"#/share")}function Ne(){const{user:e}=L();if(e)return e;const t=jt("DemoCreator");return h("Signed in as DemoCreator · local demo"),t||L().user}function og(e){const t=Number(e)-Date.now();if(t<=0)return"24h window ended (demo)";const s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return`${s}h ${a}m left`}function lg(e){return`<div class="admin-type-tabs rewards-tabs" style="grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:14px" role="tablist">
    <a class="admin-type-tab ${e==="share"?"on":""}" href="#/share" role="tab" aria-selected="${e==="share"}">Share &amp; Earn</a>
    <a class="admin-type-tab ${e==="refer"?"on":""}" href="#/refer" role="tab" aria-selected="${e==="refer"}">Refer &amp; Earn</a>
  </div>`}function cg(){const{user:e}=L(),t=ee(),s=t.platformsLinked||[],a=t.challenge,i=t.submissions||[],n=t.rewardsClaimed||[],r=Tr(),l=Dr(),u=Oc(),c=s.length>0?`<ul class="list-plain">${s.map(v=>`<li>
          <span><strong>${o(rs[v.platform]||v.platform)}</strong>
            ${v.handle?`<br/><span class="muted" style="font-size:12px">@${o(String(v.handle).replace(/^@+/,""))}</span>`:""}
            ${v.url?`<br/><span class="muted" style="font-size:11px">${o(v.url)}</span>`:""}
          </span>
          <button class="btn ghost" type="button" data-unlink="${o(v.id)}">Remove</button>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No platforms linked yet — optional. Never asked for social passwords.</p>',p=Ji().filter(v=>!s.some(w=>w.platform===v)).map(v=>`<option value="${v}">${o(rs[v]||v)}</option>`).join("");let m="";if(!a)m=`<div class="card">
      <h3>24-hour social challenge</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Optional promo · separate from paid Clippers. Post official DBS ad + tracked link · keep live 24h · manual/demo verification (not guaranteed auto-check).</p>
      <button class="btn primary" id="shStart" >Start challenge · TEST MODE</button>
    </div>`;else{const v=a.status==="active",w=Date.now()>=Number(a.endsAt);m=`<div class="card">
      <div class="row wrap" style="gap:8px;margin-bottom:8px">
        <span class="chip">${v?w?"Window ended · demo":"Active":"Ended"}</span>
        <span class="chip">TEST MODE</span>
        <span class="chip">${o(og(a.endsAt))}</span>
        ${a.simulatedElapsed?'<span class="chip">Simulated 24h elapsed</span>':""}
      </div>
      <h3>${o(a.adTitle)}</h3>
      <p style="margin:8px 0;font-size:14px;white-space:pre-wrap">${o(a.caption)}</p>
      <div class="field"><label>Tracked link</label>
        <input id="shTracked" readonly value="${o(a.trackedLink)}" />
      </div>
      <p class="chip" style="margin:8px 0">#ad · Paid partnership · incentivized promotion disclosure required</p>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <button class="btn" type="button" id="shCopyLink">Copy tracked link</button>
        <button class="btn" type="button" id="shCopyCaption">Copy caption</button>
        ${v?`<button class="btn ghost" type="button" id="shSim24">Simulate 24h elapsed</button>
               <button class="btn ghost" type="button" id="shEnd">End challenge</button>`:""}
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">Honest scope: stories/API may not prove continuous 24h visibility — admin/demo verify only.</p>
    </div>`}const g=Ji().map(v=>`<option value="${v}">${o(rs[v]||v)}</option>`).join(""),f=i.length>0?`<ul class="list-plain">${i.map(v=>`<li style="align-items:flex-start">
          <span style="flex:1;min-width:0">
            <strong>${o(rs[v.platform]||v.platform)}</strong>
            <span class="chip">${o(v.status)}</span>
            <br/><a href="${o(v.postUrl)}" target="_blank" rel="noopener" style="font-size:13px;word-break:break-all">${o(v.postUrl)}</a>
            <br/><span class="muted" style="font-size:11px">${j(v.submittedAt)} · ${o(v.note||"")}</span>
          </span>
          ${v.status==="pending"?`<span class="row wrap" style="gap:4px">
                  <button class="btn" type="button" data-verify="${o(v.id)}">Verify · demo</button>
                  <button class="btn ghost" type="button" data-reject="${o(v.id)}">Reject</button>
                </span>`:""}
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No post URLs submitted yet.</p>',b=u.map(v=>{const w=n.some(C=>C.tierId===v.id),$=l.some(C=>C.id===v.id);return`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${o(v.label)}</strong><br/><span class="muted" style="font-size:11px">≥${v.minVerified} verified platform${v.minVerified===1?"":"s"}${v.requireAllLinked?" · all linked (≥3)":""}</span></td>
        <td style="padding:8px 4px">${w?'<span class="chip">Claimed</span>':$?`<button class="btn primary" type="button" data-claim-share="${o(v.id)}">Claim</button>`:`<span class="muted" style="font-size:12px">Locked (${r}/${v.minVerified})</span>`}</td>
      </tr>`}).join(""),y=n.length>0?`<ul class="list-plain">${n.map(v=>`<li>
          <span>${o(v.label)}<br/><span class="muted" style="font-size:11px">${j(v.at)} · TEST MODE</span></span>
          <span class="chip">${o(v.kind)}</span>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No rewards claimed yet.</p>';return`
    <div class="card">
      <p class="muted" style="margin:0;font-size:13px">
        Optional 24h social promo for registered users. Link platforms by <strong>name + handle/URL only</strong> — never passwords.
        Verification is <strong>manual/demo</strong> (not guaranteed auto-check of continuous 24h visibility).
      </p>
      <div class="row wrap" style="margin-top:10px;gap:8px">
        <span class="chip">Verified platforms: ${r}</span>
        <span class="chip">Linked: ${s.length}</span>
        ${e?`<span class="chip">@${o(e.username)}</span>`:'<button class="btn primary" type="button" id="rwSignIn">Sign in · demo</button>'}
        <button class="btn ghost" type="button" id="shReset">Reset Share demo</button>
      </div>
    </div>

    <div class="card">
      <h3>Linked social platforms</h3>
      ${c}
      <form id="shLinkForm" style="display:grid;gap:10px;max-width:520px;margin-top:12px">
        <div class="grid-2">
          <div class="field"><label>Platform</label>
            <select name="platform" id="shPlat" ${p?"":"disabled"}>
              ${p||'<option value="">All linked</option>'}
            </select>
          </div>
          <div class="field"><label>Handle (no password)</label><input name="handle" id="shHandle" maxlength="64" placeholder="you (no @ needed)" /></div>
        </div>
        <div class="field"><label>Profile URL (optional)</label><input name="url" id="shUrl" maxlength="240" placeholder="https://…" /></div>
        <button class="btn" type="submit" ${p?"":"disabled"}>Link platform</button>
        <p class="muted" style="margin:0;font-size:12px">Skip anytime — do not create fake accounts for rewards.</p>
      </form>
    </div>

    ${m}

    ${a?`<div class="card">
      <h3>Submit post URLs</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Paste the public post link for each platform. Admin Verify/Reject below (demo).</p>
      <form id="shSubmitForm" class="row wrap" style="gap:8px;align-items:flex-end">
        <div class="field" style="margin:0;min-width:140px"><label>Platform</label><select id="shSubPlat">${g}</select></div>
        <div class="field" style="margin:0;flex:1;min-width:180px"><label>Post URL</label><input id="shSubUrl" type="url" placeholder="https://…" required /></div>
        <button class="btn primary" type="submit">Submit</button>
      </form>
      <div style="margin-top:12px">${f}</div>
    </div>`:""}

    <div class="card">
      <h3>Rewards</h3>
      <p class="muted" style="margin:0 0 8px;font-size:13px">1 → badge · 2 → decoration · 3 → 7d Skeet+ · all linked (≥3) → 30d Skeet+. No auto paid billing.</p>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <tbody>${b}</tbody>
        </table>
      </div>
      <h4 style="margin:16px 0 8px;font-size:14px">Claim history</h4>
      ${y}
    </div>
  `}function dg(){const{user:e}=L(),t=Gt(),s=Mr(),a=t.invitees||[],i=Lr(),n=Ir(),r=Uc(),l=t.milestonesClaimed||[],u=Et(),c=r.find(b=>i<b.n),p=c?`${i} / ${c.n} verified active → ${c.label}`:i>=100?"All milestones unlocked":`${i} verified active`,m=a.length>0?`<ul class="list-plain">${a.map(b=>{const y=(b.activeDays||[]).length;return`<li style="align-items:flex-start">
            <span style="flex:1;min-width:0">
              <strong>${o(b.username)}</strong>
              <span class="chip">${o(b.status)}</span>
              ${b.flaggedFraud?'<span class="chip">Fraud flag</span>':""}
              ${b.welcomeClaimed?'<span class="chip">Welcome claimed</span>':""}
              <br/><span class="muted" style="font-size:12px">Active days: ${y}/3 · ${o((b.activeDays||[]).join(", ")||"none")} · signed ${j(b.signedUpAt)}</span>
            </span>
            <span class="row wrap" style="gap:4px;justify-content:flex-end">
              ${!b.welcomeClaimed&&!b.flaggedFraud?`<button class="btn ghost" type="button" data-welcome="${o(b.id)}">Welcome perk</button>`:""}
              ${!b.flaggedFraud&&b.status!=="active"?`<button class="btn" type="button" data-activeday="${o(b.id)}">Mark active day</button>`:""}
              ${b.flaggedFraud?`<button class="btn ghost" type="button" data-unfraud="${o(b.id)}">Clear fraud</button>`:`<button class="btn ghost" type="button" data-fraud="${o(b.id)}">Flag fraud</button>`}
            </span>
          </li>`}).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No invitees yet — simulate a signup or load demo referrals.</p>',g=r.map(b=>{const y=l.some(w=>w.milestoneId===b.id),v=n.some(w=>w.id===b.id);return`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${b.n}</strong> verified active</td>
        <td style="padding:8px 4px">${o(b.label)}</td>
        <td style="padding:8px 4px">${y?'<span class="chip">Claimed</span>':v?`<button class="btn primary" type="button" data-claim-ref="${o(b.id)}">Claim</button>`:`<span class="muted" style="font-size:12px">${i}/${b.n}</span>`}</td>
      </tr>`}).join(""),f=l.length>0?`<ul class="list-plain">${l.map(b=>`<li>
          <span>${o(b.label)}<br/><span class="muted" style="font-size:11px">${j(b.at)} · not Clippers pay</span></span>
          <span class="chip">${b.n}</span>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No milestone claims yet.</p>';return`
    <div class="card">
      <p class="muted" style="margin:0;font-size:13px">
        Personal referral link. Invitee welcome perks; inviter milestones only after <strong>verified active</strong>
        (meaningful participation on <strong>3 distinct days in the first 7 days</strong>). Distinct from Clippers commissions. No purchase required · no auto billing.
      </p>
      <div class="row wrap" style="margin-top:10px;gap:8px">
        <span class="chip">Verified active: ${i}</span>
        ${u?`<span class="chip">Membership: ${o(u)}</span>`:'<span class="chip">Membership: none</span>'}
        ${e?`<span class="chip">@${o(e.username)}</span>`:'<button class="btn primary" type="button" id="rwSignIn">Sign in · demo</button>'}
      </div>
    </div>

    <div class="card">
      <h3>Your referral link</h3>
      <div class="field"><label>Code</label><input readonly value="${o(t.code)}" /></div>
      <div class="field"><label>Link</label><input id="refLink" readonly value="${o(s)}" /></div>
      <div class="row wrap" style="gap:8px">
        <button class="btn primary" type="button" id="refCopy">Copy link</button>
        <button class="btn" type="button" id="refSeed">Load demo invitees</button>
        <button class="btn ghost" type="button" id="refReset">Reset Refer demo</button>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">Progress: ${o(p)}</p>
    </div>

    <div class="card">
      <h3>Simulate invitee</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Demo controls · fraud-resistant toggles (self-referral blocked · flag bots).</p>
      <form id="refInviteForm" class="row wrap" style="gap:8px;align-items:flex-end">
        <div class="field" style="margin:0;flex:1;min-width:160px"><label>Invitee username</label><input id="refInviteName" maxlength="24" placeholder="NewFriend" /></div>
        <button class="btn primary" type="submit">Simulate signup</button>
      </form>
      <div style="margin-top:12px">${m}</div>
    </div>

    <div class="card">
      <h3>Inviter milestones</h3>
      <p class="muted" style="margin:0 0 8px;font-size:13px">1 / 3 / 5 / 10 / 25 / 50 / 100 verified active referrals. Memberships are TEST MODE chips — not real billing.</p>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead><tr class="muted" style="text-align:left">
            <th style="padding:6px 4px">At</th>
            <th style="padding:6px 4px">Reward</th>
            <th style="padding:6px 4px"></th>
          </tr></thead>
          <tbody>${g}</tbody>
        </table>
      </div>
      <h4 style="margin:16px 0 8px;font-size:14px">Claim history</h4>
      ${f}
    </div>

    <div class="card">
      <h3>Invitee welcome path</h3>
      <ul class="list-plain">
        <li><span>Welcome badge / decoration</span><span class="chip">on signup perk</span></li>
        <li><span>3 days Skeet+</span><span class="chip">after 3 active days</span></li>
        <li><span>Extra 7 days Skeet+</span><span class="chip">7-day first-week streak</span></li>
      </ul>
      <p class="muted" style="margin:8px 0 0;font-size:12px">Invitee membership grants are illustrative chips in this demo; use Welcome perk + active days on each invitee card.</p>
    </div>
  `}function pg(e){return To(e||{path:"/share"})}function ug(e){return To(e||{path:"/refer"})}function To(e){const t=rg(e),s=`
    ${lg(t)}
    ${t==="refer"?dg():cg()}
  `;return _("DBS Rewards",s,{lead:t==="refer"?"Refer & Earn · verified active friends · TEST MODE (§33).":"Share & Earn · 24h social promo · TEST MODE (§32)."})}function mg(e){Do(e,"share")}function hg(e){Do(e,"refer")}function Do(e,t){var a,i,n,r,l,u,c,p,m,g,f,b,y;const s=t||(location.hash.includes("/refer")?"refer":"share");(a=e.querySelector("#rwSignIn"))==null||a.addEventListener("click",()=>{Ne(),ne(s)}),(i=e.querySelector("#shLinkForm"))==null||i.addEventListener("submit",v=>{var I,T,G;v.preventDefault(),Ne();const w=(I=e.querySelector("#shPlat"))==null?void 0:I.value,$=((T=e.querySelector("#shHandle"))==null?void 0:T.value)||"",C=((G=e.querySelector("#shUrl"))==null?void 0:G.value)||"",k=qc({platform:w,handle:$,url:C});if(k.error==="signin")return h("Sign in required");if(k.error==="already_linked")return h("Already linked");if(k.error==="required")return h("Handle or URL required");if(k.error)return h("Could not link");h(`Linked ${rs[w]||w}`),ne("share")}),e.querySelectorAll("[data-unlink]").forEach(v=>{v.addEventListener("click",()=>{Nc(v.getAttribute("data-unlink")),h("Platform removed"),ne("share")})}),(n=e.querySelector("#shStart"))==null||n.addEventListener("click",()=>{Ne();const v=Bc();if(v.error==="signin")return h("Sign in required");if(v.error==="already_active")return h("Challenge already active");if(v.error)return h("Could not start");h("Challenge started · 24h window"),ne("share")}),(r=e.querySelector("#shCopyLink"))==null||r.addEventListener("click",async()=>{var w;const v=((w=e.querySelector("#shTracked"))==null?void 0:w.value)||"";try{await navigator.clipboard.writeText(v),h("Tracked link copied")}catch{h("Copy manually")}}),(l=e.querySelector("#shCopyCaption"))==null||l.addEventListener("click",async()=>{var $;const w=(($=ee().challenge)==null?void 0:$.caption)||"";try{await navigator.clipboard.writeText(w),h("Caption copied")}catch{h("Copy manually")}}),(u=e.querySelector("#shSim24"))==null||u.addEventListener("click",()=>{if(Rc().error)return h("No active challenge");h("Simulated 24h elapsed"),ne("share")}),(c=e.querySelector("#shEnd"))==null||c.addEventListener("click",()=>{jc(),h("Challenge ended"),ne("share")}),(p=e.querySelector("#shSubmitForm"))==null||p.addEventListener("submit",v=>{var k,I;v.preventDefault(),Ne();const w=(k=e.querySelector("#shSubPlat"))==null?void 0:k.value,$=((I=e.querySelector("#shSubUrl"))==null?void 0:I.value)||"",C=Fc({platform:w,postUrl:$});if(C.error==="required")return h("Post URL required");if(C.error==="duplicate")return h("Already submitted for this platform");if(C.error==="no_challenge")return h("Start a challenge first");if(C.error)return h("Submit failed");h("Submitted · pending demo verification"),ne("share")}),e.querySelectorAll("[data-verify]").forEach(v=>{v.addEventListener("click",()=>{Qi(v.getAttribute("data-verify"),"verified"),h("Verified · demo (manual)"),ne("share")})}),e.querySelectorAll("[data-reject]").forEach(v=>{v.addEventListener("click",()=>{Qi(v.getAttribute("data-reject"),"rejected"),h("Rejected"),ne("share")})}),e.querySelectorAll("[data-claim-share]").forEach(v=>{v.addEventListener("click",()=>{Ne();const w=Kc(v.getAttribute("data-claim-share"));if(w.error==="not_claimable")return h("Not claimable yet");if(w.error)return h("Claim failed");h(`Claimed · ${w.claim.label}`),ne("share")})}),(m=e.querySelector("#shReset"))==null||m.addEventListener("click",()=>{Gc(),h("Share demo reset"),ne("share")}),(g=e.querySelector("#refCopy"))==null||g.addEventListener("click",async()=>{var w;Ne(),Gt();const v=((w=e.querySelector("#refLink"))==null?void 0:w.value)||Mr();try{await navigator.clipboard.writeText(v),h("Referral link copied")}catch{h("Copy manually")}}),(f=e.querySelector("#refInviteForm"))==null||f.addEventListener("submit",v=>{var C;v.preventDefault(),Ne();const w=((C=e.querySelector("#refInviteName"))==null?void 0:C.value)||"",$=Vc({username:w});if($.error==="self_referral")return h("Self-referral blocked");if($.error==="signin")return h("Sign in required");if($.error)return h("Could not add invitee");h(`Invitee ${$.invitee.username} signed up`),ne("refer")}),e.querySelectorAll("[data-welcome]").forEach(v=>{v.addEventListener("click",()=>{const w=zc(v.getAttribute("data-welcome"));if(w.error==="fraud")return h("Flagged fraud");if(w.error)return h("Welcome claim failed");h(w.perk||"Welcome perk claimed"),ne("refer")})}),e.querySelectorAll("[data-activeday]").forEach(v=>{v.addEventListener("click",()=>{const w=Hc(v.getAttribute("data-activeday"));if(w.error==="fraud")return h("Flagged fraud");if(w.error==="outside_window")return h("Outside first-7-day window");if(w.error==="window_full")return h("All 7 demo days already marked");if(w.error)return h("Could not mark day");const $=(w.invitee.activeDays||[]).length;h($>=3?`${w.invitee.username} → verified active (${$} days)`:`Active day ${$}/3 for ${w.invitee.username}`),ne("refer")})}),e.querySelectorAll("[data-fraud]").forEach(v=>{v.addEventListener("click",()=>{Xi(v.getAttribute("data-fraud"),!0),h("Flagged as fraud · demo"),ne("refer")})}),e.querySelectorAll("[data-unfraud]").forEach(v=>{v.addEventListener("click",()=>{Xi(v.getAttribute("data-unfraud"),!1),h("Fraud flag cleared"),ne("refer")})}),e.querySelectorAll("[data-claim-ref]").forEach(v=>{v.addEventListener("click",()=>{Ne();const w=Wc(v.getAttribute("data-claim-ref"));if(w.error==="not_claimable")return h("Not claimable yet");if(w.error)return h("Claim failed");h(`Milestone claimed · ${w.claim.label}`),ne("refer")})}),(b=e.querySelector("#refSeed"))==null||b.addEventListener("click",()=>{Ne();const v=Jc({force:!0});if(v.error==="signin")return h("Sign in required");h(`Loaded ${v.seeded||0} demo invitees`),ne("refer")}),(y=e.querySelector("#refReset"))==null||y.addEventListener("click",()=>{Ne(),Yc(),h("Refer demo reset"),ne("refer")})}function gg(e){return{badge:`Phase ${e} shell`}}function Pn(e){return`
    <article class="card pikk-video-tile">
      <div class="hero-video" style="margin:0 0 10px">
        <iframe src="${o(Je(e.embed))}" title="${o(e.title)}" allowfullscreen loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <span class="chip">${o(e.category||"Music Videos")}</span>
      <h3 style="margin:8px 0 4px">${o(e.title)}</h3>
      <p class="muted" style="margin:0 0 8px">${o(e.artist||"DatBoiSkeet")}</p>
      <div class="row wrap">
        <a class="btn" href="${o(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a>
        <button class="btn ghost video-share" data-url="${o(e.youtube)}" data-title="${o(e.title)}">Share link</button>
      </div>
    </article>`}function fg(){var u;const e=["Music Videos","Mixes","Interviews"],t={};fe.forEach(c=>{const p=c.category||"Music Videos";(t[p]||(t[p]=[])).push(c)});const s=e.filter(c=>{var p;return(p=t[c])==null?void 0:p.length}).map(c=>{const p=t[c].map(Pn).join("");return`<section class="pikk-video-section" data-video-category="${o(c)}"><h3>${o(c)}</h3><div class="pikk-video-grid">${p}</div></section>`}).join(""),a=Object.keys(t).filter(c=>!e.includes(c)).map(c=>`<section class="pikk-video-section" data-video-category="${o(c)}"><h3>${o(c)}</h3><div class="pikk-video-grid">${t[c].map(Pn).join("")}</div></section>`).join(""),i=St({publishedOnly:!0,types:["video"]}),n=i.map(c=>{const p=c.youtube||"",m=c.embed||"";if(m||p){const g=m||"";return`<article class="card catalog-admin-video" data-id="${o(c.id)}">
          ${g?`<div class="hero-video" style="margin:0 0 10px"><iframe src="${o(Je(g))}" title="${o(c.title)}" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`:""}
          <span class="chip">Admin</span>
          <h3 style="margin:8px 0 4px">${o(c.title)}</h3>
          <p class="muted">${o(c.artist)}</p>
          ${p?`<a class="btn" href="${o(p)}" target="_blank" rel="noopener">Open on YouTube</a>`:""}
        </article>`}return`<article class="card catalog-admin-video" data-id="${o(c.id)}">
        <span class="chip">Admin · uploaded</span>
        <h3 style="margin:8px 0 4px">${o(c.title)}</h3>
        <p class="muted">${o(c.artist)}</p>
        ${c.coverRef?`<img data-idb-src="${o(c.coverRef.startsWith("idb:")?c.coverRef:"")}" src="${o(c.coverRef.startsWith("idb:")?"":c.coverRef)}" alt="" class="catalog-cover" style="width:100%;max-height:220px;object-fit:cover;border-radius:12px;margin:8px 0" />`:""}
        ${c.mediaRef?`<video class="catalog-video" data-idb-src="${o(c.mediaRef.startsWith("idb:")?c.mediaRef:"")}" src="${o(c.mediaRef.startsWith("idb:")?"":c.mediaRef)}" controls playsinline webkit-playsinline preload="metadata" style="width:100%;border-radius:12px;background:#000"></video>`:'<p class="muted">No media file</p>'}
      </article>`}).join(""),r={};_o.forEach(c=>{var p;(r[p=c.category]||(r[p]=[])).push(c)});const l=Object.entries(r).map(([c,p])=>`
      <div class="card pikk-video-coming-card" data-video-coming-category="${o(c)}">
        <h3>${o(c)}</h3>
        <p class="muted" style="margin:0 0 8px">No verified URLs in repo yet — titles from plan §9 only. No invented view counts.</p>
        <ul class="list-plain">${p.map(m=>`<li><span>${o(m.title)}</span><span class="chip">Coming Soon</span></li>`).join("")}</ul>
      </div>`).join("");return _("Videos & Interviews",`${no("videos")}
    <section class="pikk-video-hero card">
      <div class="pikk-video-hero-copy">
        <p class="kicker">PIKK VIDEOS · OFFICIAL RELEASES</p>
        <h2>Watch. Discover. Repeat.</h2>
        <p class="muted">Verified DatBoiSkeet music videos, mixes and interviews. Original YouTube playback, with no invented view counts.</p>
        <a class="btn primary" href="#/explore">Explore creators</a>
      </div>
      ${(u=fe[0])!=null&&u.youtube?`<a class="pikk-video-hero-preview" href="${o(fe[0].youtube)}" target="_blank" rel="noopener" aria-label="Watch ${o(fe[0].title)}">
        <img src="https://i.ytimg.com/vi/${o(new URL(fe[0].youtube).searchParams.get("v")||"")}/hqdefault.jpg" alt="" loading="eager" decoding="async" />
        <span class="pikk-video-hero-label">▶ ${o(fe[0].title)}</span>
      </a>`:""}
    </section>
    <nav class="pikk-video-filters" aria-label="Video categories">
      <button type="button" class="on" data-videos-filter="All" aria-pressed="true">All</button>
      <button type="button" data-videos-filter="Music Videos" aria-pressed="false">Music Videos</button>
      <button type="button" data-videos-filter="Mixes" aria-pressed="false">Mixes</button>
      <button type="button" data-videos-filter="Interviews" aria-pressed="false">Interviews</button>
      ${i.length?'<button type="button" data-videos-filter="Admin" aria-pressed="false">Admin</button>':""}
    </nav>
    <p class="card pikk-video-source-info pikk-video-filter-status muted" role="status" aria-live="polite" data-video-filter-status>Showing all video categories and upcoming titles.</p>
    <div class="card pikk-video-source-info"><p class="muted" style="margin:0">Official DatBoiSkeet music videos, mixes, and interviews — YouTube embeds from the original source. No rehosted files.</p>
      <div class="row wrap" style="margin-top:8px;gap:8px">
        <a class="btn" href="https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA" target="_blank" rel="noopener">Official YouTube channel</a>
        <a class="btn ghost" href="https://www.youtube.com/@DatBoiSkeet1" target="_blank" rel="noopener">@DatBoiSkeet1</a>
        <a class="btn ghost" href="https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t" target="_blank" rel="noopener">Music Videos playlist</a>
      </div>
    </div>
    ${s}${a}
    ${n?`<section class="pikk-video-section" data-video-category="Admin"><h3>From Admin</h3><div class="pikk-video-grid">${n}</div></section>`:""}
    <section class="pikk-video-section pikk-video-coming-list" aria-label="Upcoming videos">
      <h3>Upcoming on PIKK</h3>
      ${l}
    </section>`,{lead:"Official MVs · Mixes · Interviews · admin uploads."})}function vg(e){const t=[...e.querySelectorAll("[data-videos-filter]")],s=[...e.querySelectorAll(".pikk-video-section[data-video-category]")],a=[...e.querySelectorAll("[data-video-coming-category]")],i=e.querySelector(".pikk-video-coming-list"),n=e.querySelector("[data-video-filter-status]");t.forEach(r=>r.addEventListener("click",()=>{const l=r.dataset.videosFilter||"All";t.forEach(c=>{const p=c===r;c.classList.toggle("on",p),c.setAttribute("aria-pressed",p?"true":"false")}),s.forEach(c=>{const p=l==="All"||c.dataset.videoCategory===l;c.hidden=!p}),a.forEach(c=>{c.hidden=l!=="All"&&c.dataset.videoComingCategory!==l});const u=a.some(c=>!c.hidden);if(i&&(i.hidden=!u),n){const c=s.some(p=>!p.hidden);n.textContent=l==="All"?"Showing all video categories and upcoming titles.":c?`Showing ${l}${u?" and upcoming titles":""}.`:u?`No published ${l} videos yet. Upcoming titles are listed below.`:`No published ${l} videos yet.`}})),wa(e),e.querySelectorAll("video.catalog-video").forEach(r=>{r.addEventListener("play",()=>Bt()),r.addEventListener("pause",()=>Qe()),r.addEventListener("ended",()=>Qe())}),e.querySelectorAll(".video-share").forEach(r=>{r.addEventListener("click",async()=>{const l=r.dataset.url||"";try{await navigator.clipboard.writeText(l),h("Link copied")}catch{h(l||"Copy failed")}})}),e.querySelectorAll("[data-idb-src]").forEach(async r=>{const l=(r.getAttribute("data-idb-src")||"").trim();if(l)try{const u=await Sa(l);if(!u){r.tagName==="VIDEO"&&r.insertAdjacentHTML("afterend",'<p class="muted" style="font-size:12px">Media blob missing — re-upload from Admin.</p>');return}if((r.tagName==="IMG"||r.tagName==="VIDEO"||r.tagName==="AUDIO")&&(r.setAttribute("src",u),r.src=u,r.tagName==="VIDEO"||r.tagName==="AUDIO")){r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.controls=!0;try{r.load()}catch{}}}catch(u){console.warn("idb media hydrate failed",l,u)}})}function bg(){const e=Rn.map(a=>`<li><span>${o(a.name)}</span><strong>$${a.price}/mo</strong></li>`).join(""),t=L().creatorSellApps||[],s=t.length?`<ul class="list-plain" style="margin-top:10px">${t.slice(0,8).map(a=>`<li><span>${o(a.name)} · ${o(a.contact)} · ${o(a.sells)}</span><span class="chip">${o(a.status||"pending")}</span></li>`).join("")}</ul>`:'<p class="muted" style="margin:8px 0 0;font-size:12px">No applications on this device yet.</p>';return _("Pricing",`<div class="card">
      <p class="kicker">Creators &amp; producers</p>
      <h2 style="margin:0 0 8px">Upload &amp; sell your music on PIKK</h2>
      <p>Artists and producers can upload tracks and sell them directly on the PIKK Network. Our demo platform cut is <strong>lower than typical stores</strong> — creators keep <strong>much more</strong> of each sale.</p>
      <p class="muted" style="margin:8px 0 0">TEST MODE only — no real charges, no live contracts. Numbers below are illustrative DEMO rates for the SPA.</p>
      <p class="chip" style="margin-top:10px">TEST MODE · no charges</p>
    </div>

    <div class="card" id="creator-sell-fees">
      <p class="kicker">Fair cut · DEMO</p>
      <h3 style="margin:0 0 8px">Who keeps what</h3>
      <p class="muted" style="margin:0 0 10px">Illustrative comparison — not a live contract. Labelled DEMO for Checker &amp; Design. Fee numbers live here — not on Home.</p>
      <ul class="list-plain">
        <li><span>Typical digital store<br/><span class="muted" style="font-size:12px">Platform cut ~30%</span></span><strong>Creator ~70%</strong></li>
        <li><span>Major streaming / storefront<br/><span class="muted" style="font-size:12px">Effective cut ~30–50%+</span></span><strong>Creator ~50–70%</strong></li>
        <li><span><strong>PIKK music / videos / beats (demo)</strong><br/><span class="muted" style="font-size:12px">Platform cut <strong>10%</strong></span></span><strong style="color:var(--acc)">Creator 90%</strong></li>
      </ul>
      <p class="chip chip-partial" style="margin-top:10px">DEMO rates · illustrative only</p>
    </div>

    <div class="card">
      <p class="kicker">Creator merch</p>
      <h3 style="margin:0 0 8px">Your storefront · your payments</h3>
      <p>Creators may add a merch section on their profile or shop area, but <strong>must use their own payment methods</strong> (Stripe, PayPal, or other external checkout). PIKK lists and links — it is <strong>not</strong> the merchant of record for creator merch.</p>
      <ul class="list-plain" style="margin-top:10px">
        <li><span>Payment processing</span><span class="chip">Creator’s Stripe / PayPal</span></li>
        <li><span>Merchant of record</span><span class="chip">Not PIKK</span></li>
        <li><span>Foreign X-Change official merch</span><span><a href="#/merch" style="color:var(--sk)">External shop →</a></span></li>
      </ul>
      <p class="chip" style="margin-top:10px">TEST MODE · no merch charges inside PIKK</p>
    </div>

    <div class="card">
      <p class="kicker">Buyer ↔ seller</p>
      <h3 style="margin:0 0 8px">Transactions are final between parties</h3>
      <p>Buyer↔seller music and creator-merch transactions are <strong>not reversed or disputed through PIKK</strong>. Chargebacks, refunds, and product disputes stay between the buyer and the seller (or their payment provider). Disputes do <strong>not</strong> fall on PIKK as merchant of record for those sales.</p>
      <p class="muted" style="margin:8px 0 0">This is demo legal-style notice for the SPA. Final Terms ship before public launch. Membership billing rules remain separate (see Community Guidelines).</p>
      <p class="chip" style="margin-top:10px">TEST MODE · disclosure copy · not live MoR</p>
    </div>

    <div class="card" id="creator-sell">
      <p class="kicker">Apply · TEST MODE</p>
      <h3 style="margin:0 0 8px">Creator apply</h3>
      <p class="muted" style="margin:0 0 10px">Tell us who you are and what you sell. Saved on this device only — no real backend. Review rules &amp; fees above before submitting.</p>
      <div class="grid-2">
        <div class="field"><label for="csName">Name *</label><input id="csName" autocomplete="name" required /></div>
        <div class="field"><label for="csContact">Email or handle *</label><input id="csContact" placeholder="you@email or @handle" required /></div>
      </div>
      <div class="field">
        <label for="csSells">What do you sell?</label>
        <select id="csSells">
          <option value="music">Music</option>
          <option value="videos">Videos</option>
          <option value="beats">Beats</option>
          <option value="merch">Merch</option>
          <option value="music-videos-beats">Music · videos · beats</option>
          <option value="all" selected>All (music, videos, beats, merch)</option>
        </select>
      </div>
      <label class="row" style="gap:8px;align-items:flex-start;margin:8px 0 12px;cursor:pointer">
        <input type="checkbox" id="csAgree" style="margin-top:3px" />
        <span style="font-size:13px">I agree to the DEMO rules, fee schedule, merch MoR, and final-transaction notice on this page.</span>
      </label>
      <button type="button" class="btn primary block" id="csSubmit">Submit application</button>
      <p class="chip" style="margin-top:10px">TEST MODE · localStorage <code>creatorSellApps</code></p>
      ${s}
    </div>

    <div class="card"><h3>Memberships</h3><ul class="list-plain">${e}</ul></div>
     <div class="card"><h3>Music price ranges</h3>
       <ul class="list-plain">
         <li><span>Song</span><span>$0.99–$1.29</span></li>
         <li><span>EP</span><span>$4.99–$6.99</span></li>
         <li><span>Album</span><span>$9.99–$12.99</span></li>
       </ul>
       <p class="chip">TEST MODE · no charges</p>
     </div>`,{lead:"Sell music, videos, beats &amp; merch · rules &amp; fees · apply form · memberships &amp; gifts — admin-adjustable."})}function yg(e){var s;typeof location<"u"&&(location.hash.includes("focus=sell")||location.hash.includes("creator-sell"))&&setTimeout(()=>{var a;return(a=document.getElementById("creator-sell"))==null?void 0:a.scrollIntoView({behavior:"smooth",block:"start"})},60),(s=e.querySelector("#csSubmit"))==null||s.addEventListener("click",()=>{var u,c,p,m,g,f;const a=(c=(u=e.querySelector("#csName"))==null?void 0:u.value)==null?void 0:c.trim(),i=(m=(p=e.querySelector("#csContact"))==null?void 0:p.value)==null?void 0:m.trim(),n=((g=e.querySelector("#csSells"))==null?void 0:g.value)||"both",r=!!((f=e.querySelector("#csAgree"))!=null&&f.checked);if(!a||!i)return h("Name and email/handle required");if(!r)return h("Agree to rules & fees to continue");const l=Wo({name:a,contact:i,sells:n,agreed:r});if(l!=null&&l.error)return h(l.error==="rules"?"Agree to rules & fees to continue":"Name and email/handle required");h("Application saved · TEST MODE"),R("#/pricing?focus=sell")})}function kg(){return _("Community Guidelines",`<div class="card">
      <p class="kicker">PIKK Network</p>
      <h2 style="margin:0 0 8px">Respect the house</h2>
      <p>All users follow DatBoiSkeet Community Guidelines when posting, commenting, chatting, livestreaming, or joining PIKK Lounge rooms. This is a premium, music-first entertainment network — keep it safe for fans, creators, and the artist.</p>
      <p class="muted" style="margin:8px 0 0">Enforcement UI in this demo is illustrative. Warnings, suspensions, and appeals will run through Admin review before public launch.</p>
    </div>

    <div class="card">
      <h3>Violations</h3>
      <p class="muted" style="margin:0 0 8px">Actions that break PIKK rules include:</p>
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
      <p>PIKK does <strong>not</strong> keep charging for paid access you cannot use. Eligible direct-billed recurring charges pause while access is blocked. Where an app store cannot pause billing, cancellation and appropriate credit/refund handling apply. <strong>Cancellation is never obstructed.</strong></p>
      <p class="muted" style="margin:8px 0 0">Billing disclosures belong in Terms + these Guidelines before launch. This page is demo copy only — no real charges in TEST MODE.</p>
    </div>

    <div class="card">
      <h3>Appeals &amp; admin review</h3>
      <p class="muted" style="margin:0">Admins can track warnings, issue penalties, review appeals, override actions, record suspension dates, and restore eligible accounts. Report tools and a full appeals inbox ship with Phase 2 safety work — until then, treat this as published policy copy for the demo SPA.</p>
      <p class="chip" style="margin-top:10px">Demo enforcement · not live moderation</p>
    </div>`,{lead:"Rules for posts, chat, Live & Lounge — plan §13."})}const Na=[{id:"dbs-lounge",cat:"NETWORK",hash:"#dbs-lounge",name:"PIKK Lounge",blurb:"Main hub · official announcements & network news",chip:"Hub"},{id:"conversation",cat:"NETWORK",hash:"#the-conversation",name:"The Conversation",blurb:"Public music & fan discussion threads",chip:"Public"},{id:"listening",cat:"VOICE / LISTENING",hash:"#listening-rooms",name:"Listening Rooms",blurb:"Listening parties & reactions to new releases",chip:"Parties"},{id:"backstage",cat:"MEMBERS",hash:"#backstage-rooms",name:"Backstage Rooms",blurb:"Tier-restricted spaces for Skeet+ / Backstage / Inner Circle",chip:"Members"},{id:"live-rooms",cat:"NETWORK",hash:"#live-rooms",name:"Live Rooms",blurb:"Scheduled community events & discussions",chip:"Events"},{id:"spotlight",cat:"NETWORK",hash:"#the-spotlight",name:"The Spotlight",blurb:"Featured fan conversations & creator posts",chip:"Featured"}],_n={"dbs-lounge":[{who:"PIKK · System",text:"Welcome to PIKK Lounge — DatBoiSkeet’s channel-style community hub.",tag:"DEMO"},{who:"TEST MODE",text:"Live chat isn’t connected yet. These rows are placeholders so the room pane feels real.",tag:"DEMO"}],conversation:[{who:"DEMO",text:"Drop takes on new releases here once Phase 2 chat ships.",tag:"DEMO"}],listening:[{who:"DEMO",text:"Listening parties will sync reactions here — preview only.",tag:"DEMO"}],backstage:[{who:"DEMO",text:"Member-tier rooms unlock with Skeet+ / Backstage / Inner Circle.",tag:"DEMO"}],"live-rooms":[{who:"DEMO",text:"Scheduled community events will list here — no live presence yet.",tag:"DEMO"}],spotlight:[{who:"DEMO",text:"Featured fan conversations land here in Phase 2.",tag:"DEMO"}]},wg=[{name:"DatBoiSkeet",role:"Owner"},{name:"SkeetMod",role:"Mod · DEMO"},{name:"FanDemo01",role:"DEMO"},{name:"ListenerX",role:"DEMO"}];function Sg(e){const s=(_n[e.id]||_n["dbs-lounge"]).map(a=>`<div class="lounge-msg">
        <div class="lounge-msg-avatar" aria-hidden="true">${o(a.who.slice(0,1))}</div>
        <div class="lounge-msg-body">
          <div class="lounge-msg-meta"><strong>${o(a.who)}</strong> <span class="chip">${o(a.tag)}</span></div>
          <p>${o(a.text)}</p>
        </div>
      </div>`).join("");return`<div class="lounge-pane" data-pane="${o(e.id)}" ${e.id==="dbs-lounge"?"":"hidden"}>
    <header class="lounge-pane-head">
      <div>
        <h2><span class="lounge-hash">#</span> ${o(e.name)}</h2>
        <p class="muted">${o(e.blurb)}</p>
      </div>
      <span class="chip">${o(e.chip)}</span>
    </header>
    <div class="lounge-honesty">
      <span class="chip">Phase 2</span>
      <span class="chip">TEST MODE</span>
      <p>Live chat, presence, and real member lists aren’t online yet — this is Discord-inspired chrome for PIKK Lounge only.</p>
    </div>
    <div class="lounge-msgs" aria-label="Demo messages">${s}</div>
    <div class="lounge-compose">
      <input type="text" disabled placeholder="Message #${o(e.name.toLowerCase().replace(/\s+/g,"-"))} · Phase 2" aria-label="Message composer disabled"/>
      <button class="btn" disabled>Send</button>
    </div>
  </div>`}function $g(){const e=[],t=new Set;Na.forEach(n=>{t.has(n.cat)||(t.add(n.cat),e.push(n.cat))});const s=e.map(n=>{const r=Na.filter(l=>l.cat===n).map(l=>`<button type="button" class="lounge-channel${l.id==="dbs-lounge"?" on":""}" data-channel="${o(l.id)}" aria-pressed="${l.id==="dbs-lounge"?"true":"false"}">
            <span class="lounge-hash">#</span>
            <span class="lounge-channel-label">${o(l.name)}</span>
            <span class="chip lounge-channel-chip">${o(l.chip)}</span>
          </button>`).join("");return`<div class="lounge-cat-block">
        <p class="lounge-cat-label">${o(n)}</p>
        ${r}
      </div>`}).join(""),a=Na.map(Sg).join(""),i=wg.map(n=>`<li><span class="lounge-member-dot" aria-hidden="true"></span><span><strong>${o(n.name)}</strong><br/><span class="muted" style="font-size:11px">${o(n.role)}</span></span></li>`).join("");return _("PIKK Lounge",`<div class="card lounge-intro">
      <p class="kicker">Artist-owned network</p>
      <h2 style="margin:0 0 8px">Channel-style Lounge</h2>
      <p>PIKK Lounge is DatBoiSkeet’s premium community — Discord-type channel UX (sidebar + room panes) under silver/dark PIKK branding. Announcements, listening parties, and fan conversations in one place.</p>
      <p class="muted" style="margin:8px 0 0">Not affiliated with Discord. Channels below are the same rooms as before; live chat unlocks in Phase 2.</p>
      <a class="btn ghost" href="#/communities">Open PIKK Communities · local discussion preview</a>
    </div>

    <div class="lounge-discord" id="loungeDiscord">
      <aside class="lounge-channels" aria-label="Lounge channels">
        <div class="lounge-server">
          <div class="lounge-server-mark" aria-hidden="true">PIKK</div>
          <div>
            <strong>DatBoiSkeet</strong>
            <p class="muted" style="margin:0;font-size:11px">Lounge · silver/dark</p>
          </div>
        </div>
        ${s}
        <p class="chip" style="margin:12px 8px 4px">Moderation · §13 Guidelines</p>
      </aside>
      <section class="lounge-main" aria-label="Room pane">
        ${a}
      </section>
      <aside class="lounge-members" aria-label="Demo members">
        <p class="lounge-cat-label">MEMBERS · DEMO</p>
        <ul class="lounge-member-list">${i}</ul>
        <p class="muted" style="font-size:11px;margin:8px 4px 0">Placeholder names — not live presence.</p>
      </aside>
    </div>`,{lead:"Discord-inspired channels · DatBoiSkeet branded.",...gg(2)})}function xg(e=document){const t=e.querySelector("#loungeDiscord")||e,s=[...t.querySelectorAll(".lounge-channel")],a=[...t.querySelectorAll(".lounge-pane")];s.length&&s.forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.channel;s.forEach(r=>{const l=r===i;r.classList.toggle("on",l),r.setAttribute("aria-pressed",l?"true":"false")}),a.forEach(r=>{r.dataset.pane===n?r.removeAttribute("hidden"):r.setAttribute("hidden","")})})})}function Eg(){return _("Signup & Creator Apps",`<div class="card">
      <p class="kicker">Join PIKK</p>
      <h2 style="margin:0 0 8px">Fan account first</h2>
      <p>Everyone creates a PIKK account to participate — follow, comment, save, join Lounge rooms, buy memberships, message the team, or apply to earn. Visitors can browse public promo pages; signing up unlocks the network.</p>
      <p class="muted" style="margin:8px 0 12px"><strong>Basic fan signup is free</strong> — no manual approval. This demo uses local Profile sign-in (TEST MODE · no real email/auth yet).</p>
      <a class="btn primary" href="#/profile">Sign in / create demo user</a>
      <a class="btn ghost" href="#/guidelines" style="margin-left:8px">Read Guidelines</a>
    </div>

    <div class="card">
      <h3>Apply for a role</h3>
      <p class="muted" style="margin:0 0 10px">From Profile → Become a Creator, request one or more roles. Each has its own application — no automatic access to earning tools.</p>
      <ul class="list-plain">
        <li><span><strong>Creator / Streamer</strong><br/><span class="muted" style="font-size:12px">Profile, socials, livestream plan · PIKK branding &amp; moderation</span></span><a href="#/live">Live</a></li>
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
    </div>`,{lead:"Free fan signup + creator role applications · §16."})}function Ag(){const t=[{label:"Registration & role approval",status:"Demo",note:"Profile/signup local demo · real auth later"},{label:"Moderation / reporting / appeals",status:"TODO",note:"Guidelines copy ready · enforcement UI Phase 2"},{label:"Payments & refunds",status:"TEST",note:"TEST MODE only · no real charges"},{label:"Creator payouts verification",status:"SHELL",note:"Wallet / KYC stubs · not launch-ready"},{label:"Music & video rights",status:"Partial",note:"3 official MVs · streaming links still SHELL"},{label:"Gift-battle fraud prevention",status:"SHELL",note:"Gift Battles not wired for launch"},{label:"Livestream safety",status:"Demo",note:"Go-live demo PASS · age/safety stack incomplete"},{label:"Background audio pause/resume",status:"PARTIAL",note:"§17 sticky top YT player + pauseDbsPlayer hooks"},{label:"Account recovery / optional 2FA",status:"TODO",note:"Local demo sign-in only"},{label:"Loyalty analytics consent",status:"SHELL",note:"Privacy/consent controls before launch"},{label:"PIKK Connect safety (age + WebRTC)",status:"Blocked",note:"Must not launch without assurance"}].map(s=>`<li><span><strong>${o(s.label)}</strong><br/><span class="muted" style="font-size:12px">${o(s.note)}</span></span><span class="chip">${o(s.status)}</span></li>`).join("");return _("Launch Readiness",`<div class="card">
      <p class="kicker">Before public launch</p>
      <h2 style="margin:0 0 8px">Checklist · plan §31</h2>
      <p class="muted" style="margin:0 0 12px">Statuses mirror current STATUS.md — Content Polish owns copy here; Progress Checker owns any DONE claim. This page stays a SHELL until Checker PASSes.</p>
      <ul class="list-plain">${t}</ul>
    </div>

    <div class="card">
      <h3>Fan onboarding</h3>
      <p class="muted" style="margin:0">Show new fans how to discover DatBoiSkeet music &amp; MVs, follow the official profile, post respectfully, listen via Music/Vault Coming Soon covers, shop Foreign X-Change externally, and join PIKK Lounge when rooms go live. Keep TEST MODE honesty until real auth ships.</p>
    </div>

    <div class="card">
      <h3>Creator onboarding</h3>
      <p class="muted" style="margin:0">Separate path: apply for Creator / Clipper / Brand / Affiliate / Seller → admin review → unlock tools → complete identity, age, tax, and payout verification before earnings. Tie every role to Community Guidelines and suspension policy.</p>
      <p class="chip" style="margin-top:10px">Phased rollout · measure cost &amp; performance</p>
    </div>`,{lead:"Pre-launch checklist with honest demo status · §31."})}function Cg(){const e=[{n:1,title:"Foundation",summary:"Videos, Music/Vault, Posts, profiles, followers, engagement alerts, Clippers applications.",status:"DONE",items:[{label:"§1 Posts",status:"DONE",href:"#/posts"},{label:"§2 Clippers apply",status:"DONE",href:"#/clippers"},{label:"§7 Profiles",status:"DONE",href:"#/profile"},{label:"§8 Music & Vault",status:"DONE",href:"#/music"},{label:"§9 Videos & Interviews",status:"DONE",href:"#/videos"},{label:"§14 Streaming links",status:"DONE",href:"#/music"},{label:"§19 Loading splash",status:"DONE",href:"#/home"},{label:"§20 Home dashboard",status:"DONE",href:"#/home"},{label:"§21 Merch showcase",status:"DONE",href:"#/merch"},{label:"§34 Coming Soon covers",status:"DONE",href:"#/music"},{label:"§17 Home MV + continuous play",status:"PARTIAL",href:"#/home",note:"Sticky top YT player · Stream Everywhere open links · PENDING AUDIT"}]},{n:2,title:"Growth & Creator Economy",summary:"Clipper campaigns, missions, referrals, creator earnings, and payouts.",status:"DONE",items:[{label:"§5 Creator Earnings",status:"DONE",href:"#/earnings"},{label:"§6 Missions",status:"DONE",href:"#/missions"},{label:"§27 Wallet & Payouts",status:"DONE",href:"#/wallet"},{label:"§32 Share & Earn",status:"DONE",href:"#/share"},{label:"§33 Refer & Earn",status:"DONE",href:"#/refer"},{label:"§10 Pricing",status:"DONE",href:"#/pricing"},{label:"§11 Admin dashboard",status:"DONE",href:"#/admin"},{label:"§16 Signup / Creator apps",status:"DONE",href:"#/signup"},{label:"§24 Explore",status:"DONE",href:"#/explore"},{label:"§25 Notifications",status:"DONE",href:"#/notifications"},{label:"§26 Fan Clubs",status:"DONE",href:"#/fanclubs"},{label:"§28 Loyalty Club",status:"DONE",href:"#/loyalty"},{label:"§22 Profile Shop cosmetics",status:"DONE",href:"#/shop",note:"Checker PASS · cosmetics demo"}]},{n:3,title:"Live & Marketplace",summary:"Creator livestreaming, gifts, donations, advertising, creator subscriptions, and Marketplace.",status:"DONE",items:[{label:"§3 Live",status:"DONE",href:"#/live"},{label:"§4 Marketplace ads",status:"DONE",href:"#/marketplace"},{label:"§18 Messages",status:"DONE",href:"#/messages"},{label:"§23 Gift Battles",status:"DONE",href:"#/giftbattles"},{label:"§29 Multi-Guest Live",status:"DONE",href:"#/multiguest"},{label:"§30 Open Mic",status:"DONE",href:"#/openmic"},{label:"§35 24/7 Spotlight",status:"DONE",href:"#/spotlight"},{label:"§36 Connect (opt-in shell)",status:"DONE",href:"#/connect"},{label:"§37 Restream + streamer tiers",status:"DONE",href:"#/restream"},{label:"§13 Guidelines",status:"DONE",href:"#/guidelines"},{label:"§15 Community / Lounge",status:"DONE",href:"#/community"},{label:"§31 Launch readiness",status:"DONE",href:"#/launch"}]}],t=a=>a==="DONE"?"chip chip-ok":a==="PARTIAL"?"chip chip-partial":a==="PENDING AUDIT"?"chip chip-audit":"chip",s=e.map(a=>{const i=a.items.map(n=>{const r=n.note?`<br/><span class="muted" style="font-size:12px">${o(n.note)}</span>`:"";return`<li><span>${n.href?`<a href="${o(n.href)}" style="color:inherit;text-decoration:none"><strong>${o(n.label)}</strong></a>`:`<strong>${o(n.label)}</strong>`}${r}</span><span class="${t(n.status)}">${o(n.status)}</span></li>`}).join("");return`<div class="card">
      <div class="row wrap" style="gap:8px;align-items:center;margin-bottom:8px">
        <span class="chip">Phase ${a.n}</span>
        <span class="${t(a.status)}">${o(a.status)}</span>
      </div>
      <h2 style="margin:0 0 6px">${o(a.title)}</h2>
      <p class="muted" style="margin:0 0 12px">${o(a.summary)}</p>
      <ul class="list-plain">${i}</ul>
    </div>`}).join(`

    `);return _("Development Phases",`<div class="card">
      <p class="kicker">Plan §12</p>
      <h2 style="margin:0 0 8px">Roadmap · what shipped vs remaining</h2>
      <p class="muted" style="margin:0">Phase 1–3 from the DatBoiSkeet developer plan. Chips mirror STATUS.md — <strong>DONE</strong> needs Checker PASS; <strong>PARTIAL</strong> and <strong>PENDING AUDIT</strong> are not launch-complete.</p>
      <p class="muted" style="margin:10px 0 0">Still open: <a href="#/home">§17 sticky player</a> (YT embed · no PIKK-hosted audio yet) · <a href="#/shop">§22 Profile Shop</a> (awaiting Checker) · identity/payout verification &amp; fraud controls before activating real money features.</p>
    </div>

    ${s}

    <div class="card">
      <h3>Before activating paid features</h3>
      <p class="muted" style="margin:0">Implement identity and payout verification, payment security, copyright controls, moderation, and fraud prevention before turning on real charges, gifts, or payouts. See <a href="#/launch">Launch Readiness</a>.</p>
    </div>`,{lead:"Phase 1 · Phase 2 · Phase 3 roadmap with live status chips · §12."})}function Tg(e){return _("Not found",`<div class="card"><p>No page for <code>${o(e)}</code>.</p><a class="btn" href="#/home">Home</a></div>`)}const Dg={"/home":{render:xp,bind:Ep},"/updates":{render:Tp,bind:Dp},"/posts":{render:Hp,bind:Wp},"/music":{render:fn,bind:vn},"/ai-artists":{render:su,bind:au},"/shield":{render:lu,bind:cu},"/vault":{render:fn,bind:vn},"/merch":{render:du,bind:pu},"/profile":{render:uu,bind:mu},"/clippers":{render:gu,bind:fu},"/videos":{render:fg,bind:vg},"/live":{render:Ku,bind:zu},"/viral-live":{render:Wu,bind:Yu},"/explore":{render:Am,bind:Tm},"/marketplace":{render:Xu,bind:Zu},"/earnings":{render:hm,bind:gm},"/missions":{render:ym,bind:km},"/pricing":{render:bg,bind:yg},"/admin":{render:Up,bind:Vp},"/guidelines":{render:kg},"/community":{render:$g,bind:xg},"/communities":{render:Bh,bind:Rh},"/signup":{render:Eg},"/messages":{render:rm,bind:om},"/shop":{render:wh,bind:Sh},"/profile-shop":{render:hh,bind:gh},"/giftbattles":{render:jm,bind:Fm},"/notifications":{render:lm,bind:cm},"/fanclubs":{render:sh,bind:ah},"/wallet":{render:pm,bind:um},"/loyalty":{render:ih,bind:nh},"/multiguest":{render:Xm,bind:Zm},"/openmic":{render:oh,bind:lh},"/launch":{render:Ag},"/phases":{render:Cg},"/share":{render:pg,bind:mg},"/refer":{render:ug,bind:hg},"/spotlight":{render:Ph,bind:_h},"/restream":{render:()=>(queueMicrotask(()=>{location.hash="/connect#connect-multistream"}),Xa()),bind:Za},"/shorts":{render:Mn,bind:Ln},"/clips":{render:Mn,bind:Ln},"/connect":{render:Xa,bind:Za},"/blockwars":{render:Uh,bind:zh},"/games":{render:Hh,bind:Yh},"/dating":{render:Jh,bind:Qh},"/roast-arena":{render:ng,bind:ig}};function Ni(){var t,s,a;const e=document.getElementById("tabbar");if(L().user)try{li()}catch{}e.innerHTML=Ro.map(i=>{const r="/"+i.href.replace(/^#/,"").replace(/^\//,"").split(/[?#]/)[0],l=o(i.label);return`<a${i.primary?' class="tab-primary"':""} href="${i.href}" data-path="${r}" aria-label="${l}"${i.href==="#/create"?' aria-haspopup="dialog" aria-controls="pikkCreateMenu" aria-expanded="false"':i.href==="#/music"?' aria-haspopup="dialog" aria-controls="pikkMusicMenu" aria-expanded="false"':Hs[r.slice(1)]?` aria-haspopup="dialog" aria-controls="pikk${l}Menu" aria-expanded="false"`:""}><span class="tab-ico">${i.href==="#/create"?'<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><path d="M9 5 L25 16 L9 27 Z" fill="currentColor"/><path d="M24 5v11m0 0-4-4m4 4 4-4" stroke="white" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>':ms[i.icon]||""}</span><span>${l}</span></a>`}).join("");for(const i of Object.keys(Hs))(t=e.querySelector(`a[href="#/${i}"]`))==null||t.addEventListener("click",n=>{n.preventDefault(),Po(i,n.currentTarget)});(s=e.querySelector('a[href="#/music"]'))==null||s.addEventListener("click",i=>{i.preventDefault(),bt(),np(i.currentTarget)}),(a=e.querySelector('a[href="#/create"]'))==null||a.addEventListener("click",i=>{var r;ns(),bt(),i.preventDefault();const n=Lg();n.hidden=!n.hidden,i.currentTarget.setAttribute("aria-expanded",String(!n.hidden)),n.hidden||(r=n.querySelector("[data-create-close]"))==null||r.focus()}),e.style.gridTemplateColumns="",e.classList.remove("tabbar-scroll"),e.classList.add("tabbar-reshaped","tabbar-fit7")}function Mg(){return Bn.map(e=>{const t=e.items.map(s=>{const a=`<span class="pikk-menu-icon" aria-hidden="true">${ms[s.icon]||ms.explore}</span><strong class="pikk-menu-title">${o(s.title)}</strong><small>${o(s.detail)}</small>`;return s.href?`<a href="${o(s.href)}" class="pikk-create-tile">${a}</a>`:`<div class="pikk-create-tile pikk-create-tile-planned" aria-disabled="true">${a}</div>`}).join("");return`<section class="pikk-create-menu-group" aria-label="${o(e.title)}"><h3>${o(e.title)}</h3><div class="pikk-create-options pikk-create-grid">${t}</div></section>`}).join("")}function Lg(){let e=document.getElementById("pikkCreateMenu");if(e)return e;e=document.createElement("div"),e.id="pikkCreateMenu",e.className="pikk-create-overlay",e.hidden=!0,e.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-label="Create on PIKK">
    <div class="pikk-create-head"><strong>Create on PIKK</strong><button type="button" class="btn ghost" data-create-close aria-label="Close create menu">✕</button></div>
    ${Mg()}
    <button type="button" class="pikk-menu-cancel" data-create-close>Cancel</button>
    <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · uploads depend on available prototype tools</p>
  </div>`,document.body.appendChild(e);const t=(s=!1)=>{e.hidden=!0;const a=document.querySelector('#tabbar a[href="#/create"]');a==null||a.setAttribute("aria-expanded","false"),s&&(a==null||a.focus())};return window.addEventListener("hashchange",()=>t()),e.addEventListener("click",s=>{s.target===e||s.target.closest("[data-create-close]")?t(!0):s.target.closest(".pikk-create-options a")&&t()}),document.addEventListener("keydown",s=>{if(!e.hidden&&(s.key==="Escape"&&(s.preventDefault(),t(!0)),s.key==="Tab")){const a=[...e.querySelectorAll("a[href], button:not([disabled])")],i=a[0],n=a[a.length-1];if(!i){s.preventDefault();return}e.contains(document.activeElement)?s.shiftKey&&document.activeElement===i?(s.preventDefault(),n.focus()):!s.shiftKey&&document.activeElement===n&&(s.preventDefault(),i.focus()):(s.preventDefault(),(s.shiftKey?n:i).focus())}}),e}function Ig(){const e=document.getElementById("tabbar");if(!e)return;Ni();const t=Ue();ao(e,t.path);try{Mo()}catch{}}function Pg(){const e=document.getElementById("sideNav"),t=Ue(),s="#"+(t.raw||t.path),a="#"+t.path,i=jn.map(n=>{if(n.href)return`<a class="drawer-direct${n.href===a||n.href===s?" on":""}" href="${n.href}">${o(n.label)}</a>`;const r=n.links||[],l=r.some(m=>m.href===a||m.href===s),u=l?" open":"",c=l?" has-active":"",p=r.map(m=>`<a class="drawer-link${m.href===a||m.href===s?" on":""}" href="${m.href}">${o(m.label)}</a>`).join("");return`<div class="drawer-group${u}${c}" data-group="${o(n.id)}"><button type="button" class="drawer-cat" aria-expanded="${l?"true":"false"}"><span>${o(n.label)}</span><span class="drawer-caret" aria-hidden="true"></span></button><div class="drawer-children" role="group">${p}</div></div>`}).join("");e.innerHTML=`<h2>PIKK Network</h2>${i}<a class="drawer-direct" href="#/updates">What's New · App Updates</a>`}function os(e,t=!1){tp({drawer:document.getElementById("sideNav"),scrim:document.getElementById("scrim"),trigger:document.getElementById("menuBtn")},e,t)}function _g(e){const t=e.path;Ni(),ao(document.getElementById("tabbar"),t),document.querySelectorAll("#sideNav a").forEach(n=>{const r=n.getAttribute("href")||"";n.classList.toggle("on",r==="#"+t||r==="#"+e.raw)});const s="#"+t,a="#"+e.raw;document.querySelectorAll("#sideNav .drawer-group").forEach(n=>{const r=[...n.querySelectorAll("a")].some(u=>u.getAttribute("href")===s||u.getAttribute("href")===a);n.classList.toggle("open",r),n.classList.toggle("has-active",r);const l=n.querySelector(".drawer-cat");l&&l.setAttribute("aria-expanded",r?"true":"false")});const i=document.getElementById("headerMsg");if(i&&(i.hidden=!1),L().user)try{li()}catch{}Mo()}function Mo(){const e=document.getElementById("headerMsgBadge"),t=document.getElementById("headerMsg");if(!e||!t)return;let s=0;try{s=tt()}catch{s=0}if(s>0){const a=s>99?"99+":String(s);e.textContent=a,e.hidden=!1,t.setAttribute("aria-label",`Messages, ${s} unread`)}else e.textContent="",e.hidden=!0,t.setAttribute("aria-label","Messages")}function Og(e){var i;os(!1);const t=document.getElementById("app"),s=Dg[e.path],a=s?s.render(e):Tg(e.path);t.innerHTML=a,so(t),(i=s==null?void 0:s.bind)==null||i.call(s,t),_g(e),ep(e,t,document.getElementById("pikkRouteAnnouncer")),zd(e.path),window.scrollTo(0,0),(e.path==="/music"||e.path==="/vault")&&(location.hash.includes("vault")||e.path==="/vault")&&setTimeout(()=>{var n;return(n=document.getElementById("vault"))==null?void 0:n.scrollIntoView({behavior:"smooth"})},50),e.path==="/pricing"&&(location.hash.includes("focus=sell")||location.hash.includes("creator-sell"))&&setTimeout(()=>{var n;return(n=document.getElementById("creator-sell"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50),e.path==="/wallet"&&(e.elementId==="wallet-coins"||e.query.section==="coins"||location.hash.includes("wallet-coins"))&&setTimeout(()=>{var n;return(n=document.getElementById("wallet-coins"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50),e.path==="/live"&&(e.query.go==="1"||e.elementId==="live-go"||location.hash.includes("go=1"))&&setTimeout(()=>{var n;return(n=document.getElementById("live-go"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50)}function qg(){if(new URLSearchParams(location.search).has("holdSplash"))return;const e=document.getElementById("splash");!e||e.classList.contains("hide")||(e.classList.add("hide"),Yo(),setTimeout(()=>e.remove(),500))}function Ng(){const e=document.getElementById("splashChime");if(!e)return;const t=()=>{const a=e.play();a&&typeof a.catch=="function"&&a.catch(()=>{})};t();const s=()=>{t(),window.removeEventListener("pointerdown",s),window.removeEventListener("keydown",s)};window.addEventListener("pointerdown",s,{once:!0}),window.addEventListener("keydown",s,{once:!0})}function Bg(){window.addEventListener("dbs:interrupt-music",e=>{var s;const t=((s=e==null?void 0:e.detail)==null?void 0:s.reason)||"route";Ts(t)}),window.addEventListener("dbs:resume-music",e=>{var s;const t=(s=e==null?void 0:e.detail)==null?void 0:s.reason;t==="live"?Xr():t==="video"?Qe():Qr(t)})}function Rg(){window.addEventListener("dbs:messages-unread",()=>{try{Ig()}catch{}})}function jg(){var e;if((e=document.getElementById("pikkSkipContent"))==null||e.addEventListener("click",()=>{var t;(t=document.getElementById("app"))==null||t.focus()}),Kn(),so(document),Ni(),Pg(),Vd(),Bg(),Rg(),document.getElementById("menuBtn").addEventListener("click",()=>os(!0)),document.getElementById("scrim").addEventListener("click",()=>os(!1,!0)),document.addEventListener("keydown",t=>{var s;t.key!=="Escape"||!((s=document.getElementById("sideNav"))!=null&&s.classList.contains("open"))||(t.preventDefault(),os(!1,!0))}),document.getElementById("sideNav").addEventListener("click",t=>{const s=t.target.closest(".drawer-cat");if(s){t.preventDefault();const a=s.closest(".drawer-group"),i=!a.classList.contains("open");document.querySelectorAll("#sideNav .drawer-group").forEach(n=>{const r=i&&n===a;n.classList.toggle("open",r);const l=n.querySelector(".drawer-cat");l&&l.setAttribute("aria-expanded",r?"true":"false")});return}t.target.closest("a")&&os(!1)}),document.getElementById("notifBtn").addEventListener("click",()=>{location.hash="/notifications"}),Qd(Og),Xd(),!Jo()&&!new URLSearchParams(location.search).has("holdSplash")){const t=document.getElementById("splash");t&&t.remove()}else{Ng();let t=!1;setTimeout(()=>{t||(t=!0,qg())},3e3)}}jg();
