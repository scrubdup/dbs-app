(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function bn(e,t=Date.now()){const s=new URL(e);return s.searchParams.set("refresh",String(t)),s.toString()}var vn;(vn=document.getElementById("pikk-refresh-link"))==null||vn.addEventListener("click",function(e){e.preventDefault(),window.location.assign(bn(window.location.href))});let xi;function g(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"),clearTimeout(xi),xi=setTimeout(()=>t.classList.remove("show"),2400))}function r(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function R(e){const t=Math.max(0,Math.floor((Date.now()-e)/1e3));if(t<60)return t+"s";const s=Math.floor(t/60);if(s<60)return s+"m";const a=Math.floor(s/60);return a<24?a+"h":Math.floor(a/24)+"d"}function I(e,t,s={}){let a="";if(s.badgeHtml)a=s.badgeHtml;else if(s.badge){const n=r(s.badge),l=s.badgeAria?` aria-label="${r(s.badgeAria)}"`:"",o=s.badgeTitle||s.badgeAria?` title="${r(s.badgeTitle||s.badgeAria)}"`:"";s.badgeHref?a=`<a class="badge-phase"${l}${o} href="${r(s.badgeHref)}">${n}</a>`:a=`<span class="badge-phase"${l}${o}>${n}</span>`}const i=s.lead?`<p class="lead">${s.lead}</p>`:"";return`
    <section class="page">
      <header class="page-head">
        <h1>${r(e)} ${a}</h1>
        ${i}
      </header>
      ${t}
    </section>
  `}const ls={heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.5c0 4.6-8.8 10.4-8.8 10.4S3.2 13.1 3.2 8.5a4.5 4.5 0 0 1 8.8-1.2 4.5 4.5 0 0 1 8.8 1.2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',posts:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',camera:'<svg viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h2.1l1.2-1.8A1.5 1.5 0 0 1 11 3.5h2a1.5 1.5 0 0 1 1.2.7L15.4 6h2.1A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',music:'<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',merch:'<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8zm3-3a3 3 0 0 1 6 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',explore:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',live:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".5"/></svg>',profile:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 19a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',videos:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v5A2.5 2.5 0 0 1 16.5 14H11l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 11.5v-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 17.5V19a1 1 0 0 0 1.5.85L14 17h2.5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".55"/></svg>',msg:'<svg viewBox="0 0 24 24"><rect x="3.5" y="6" width="17" height="12" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4.5 7.5 7.5 5.2L19.5 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',game:'<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 13h2.5M9.25 11.5v3M15.2 12.2h.01M17.3 14.2h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'};function Ye(e,t="rel=0"){const s=String(e||"").trim();if(!s)return"";const a=s.includes("?")?"&":"?";return`${s}${a}${t}`}const Ns=Object.freeze({videos:[{title:"Video Feed",href:"#/videos",detail:"Watch and discover videos",icon:"▶"},{title:"Shorts & Reels",href:"#/shorts",detail:"Browse short-form clips",icon:"▣"},{title:"Posts",href:"#/posts",detail:"View the community feed",icon:"▤"},{title:"Upload Video",href:"#/posts?type=video",detail:"Available prototype publishing tools · TEST MODE",icon:"⇧"}],connect:[{title:"Connect",href:"#/connect",detail:"Discover people and communities",icon:"♧"},{title:"Communities",href:"#/community",detail:"Explore community rooms",icon:"☷"},{title:"Messages",href:"#/messages",detail:"Open your messages",icon:"✉"},{title:"Random Chat",href:"#/connect#connect-random-chat",detail:"Preview only · real matching unavailable",icon:"◉"},{title:"Multistream",href:"#/connect#connect-multistream",detail:"Broadcast connection preview · TEST MODE",icon:"▹"}],dating:[{title:"Discover Dating",href:"#/dating",detail:"Explore dating features · TEST MODE",icon:"♡"},{title:"Messages",href:"#/messages",detail:"Open private messages",icon:"✉"},{title:"My Profile",href:"#/profile",detail:"Review your profile settings",icon:"◉"},{title:"Safety Guidelines",href:"#/guidelines",detail:"Review community safety rules",icon:"◇"}],games:[{title:"PIKK Arcade",href:"#/games",detail:"View the full game collection · preview",icon:"♜"},{title:"PIKK Speed",detail:"Card game · planned",icon:"♠"},{title:"PIKK Blackjack",detail:"Card game · planned",icon:"♠"},{title:"PIKK Slots",detail:"Play-chip game · planned",icon:"♜"},{title:"PIKK Poker",detail:"Play-chip card game · planned",icon:"♠"},{title:"PIKK Spades",detail:"Card game · planned",icon:"♠"},{title:"PIKK Dominoes",detail:"Table game · planned",icon:"♜"},{title:"PIKK Chess",detail:"Strategy game · planned",icon:"♜"},{title:"PIKK Clash",detail:"Neighborhood puzzle · planned",icon:"♜"},{title:"PIKK Knockout",detail:"Physics challenge · planned",icon:"♜"},{title:"PIKK Playground",detail:"Social mini-games · planned",icon:"♜"},{title:"PIKK Bowling",detail:"Bowling · planned",icon:"♜"},{title:"PIKK Pickleball",detail:"Pickleball · planned",icon:"♜"},{title:"PIKK Pool",detail:"Pool · planned",icon:"♜"},{title:"PIKK Cup Pong",detail:"Cup pong · planned",icon:"♜"},{title:"Block Wars",href:"#/blockwars",detail:"Fighting game · development preview",icon:"▣"}],shop:[{title:"PIKK Shop",href:"#/shop",detail:"Browse available products",icon:"▤"},{title:"Marketplace",href:"#/marketplace",detail:"Community listings · TEST MODE",icon:"◇"},{title:"Foreign X-Change",href:"#/merch",detail:"Official merchandise",icon:"✦"},{title:"Creator Pricing",href:"#/pricing",detail:"Explore creator selling information",icon:"$"}]}),co=Object.freeze({"Video Feed":"videos","Shorts & Reels":"videos",Posts:"posts","Upload Video":"videos",Connect:"profile",Communities:"chat",Messages:"msg","Random Chat":"camera",Multistream:"live","Discover Dating":"heart","My Profile":"profile","Safety Guidelines":"heart","PIKK Arcade":"game","PIKK Speed":"game","PIKK Blackjack":"game","PIKK Slots":"game","PIKK Poker":"game","PIKK Spades":"game","PIKK Dominoes":"game","PIKK Chess":"game","PIKK Clash":"game","PIKK Knockout":"game","PIKK Playground":"game","PIKK Bowling":"game","PIKK Pickleball":"game","PIKK Pool":"game","PIKK Cup Pong":"game","Block Wars":"game","PIKK Shop":"merch",Marketplace:"merch","Foreign X-Change":"merch","Creator Pricing":"posts"}),yn={videos:"pikkVideosMenu",connect:"pikkConnectMenu",dating:"pikkDatingMenu",games:"pikkGamesMenu",shop:"pikkShopMenu"};function bt(e=!1){for(const[t,s]of Object.entries(yn)){const a=document.getElementById(s);if(!a||a.hidden)continue;a.hidden=!0;const i=document.querySelector(`#tabbar a[href="#/${t}"]`);i==null||i.setAttribute("aria-expanded","false"),e&&(i==null||i.focus())}}function po(e,t){var o,p,c;if(!Object.hasOwn(Ns,e))return;const s=yn[e];let a=document.getElementById(s);a||(a=document.createElement("div"),a.id=s,a.className="pikk-create-overlay",a.hidden=!0,a.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="${s}Title">
      <div class="pikk-create-head"><strong id="${s}Title">${e[0].toUpperCase()+e.slice(1)} on PIKK</strong><button type="button" class="btn ghost" data-section-close aria-label="Close ${e} menu">✕</button></div>
      <div class="pikk-create-options pikk-create-grid">${Ns[e].map(u=>{const m=`<span class="pikk-menu-icon" aria-hidden="true">${ls[co[u.title]||"explore"]}</span><strong class="pikk-menu-title">${u.title}</strong><small>${u.detail}</small>`;return u.href?`<a class="pikk-create-tile" href="${u.href}">${m}</a>`:`<div class="pikk-create-tile pikk-menu-planned" aria-disabled="true">${m}</div>`}).join("")}</div>
      <button type="button" class="pikk-menu-cancel" data-section-close>Cancel</button>
      <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Production features are not enabled until secure services are available.</p>
    </div>`,document.body.appendChild(a),a.addEventListener("click",u=>{u.target===a||u.target.closest("[data-section-close]")?bt(!0):u.target.closest(".pikk-create-options a")&&bt()}),document.addEventListener("keydown",u=>{if(a.hidden)return;if(u.key==="Escape"){u.preventDefault(),bt(!0);return}if(u.key!=="Tab")return;const m=[...a.querySelectorAll("button:not([disabled]), a[href]")],h=m[0],f=m[m.length-1];if(!h){u.preventDefault();return}a.contains(document.activeElement)?u.shiftKey&&document.activeElement===h?(u.preventDefault(),f.focus()):!u.shiftKey&&document.activeElement===f&&(u.preventDefault(),h.focus()):(u.preventDefault(),(u.shiftKey?f:h).focus())}),window.addEventListener("hashchange",()=>bt()));const i=a.hidden;bt();const n=document.getElementById("pikkMusicMenu");n&&!n.hidden&&(n.hidden=!0,(o=document.querySelector('#tabbar a[href="#/music"]'))==null||o.setAttribute("aria-expanded","false"));const l=document.getElementById("pikkCreateMenu");l&&!l.hidden&&(l.hidden=!0,(p=document.querySelector('#tabbar a[href="#/create"]'))==null||p.setAttribute("aria-expanded","false")),a.hidden=!i,t==null||t.setAttribute("aria-expanded",String(i)),i?(c=a.querySelector("[data-section-close]"))==null||c.focus():t==null||t.focus()}const kn=Object.freeze([{title:"Social & Community",items:[{title:"Create Post",href:"#/posts?type=text",detail:"Text post · TEST MODE",icon:"posts"},{title:"Community Post",href:"#/community",detail:"Open community · preview",icon:"chat"},{title:"Story",detail:"24-hour stories · Planned",icon:"camera"},{title:"Reels",href:"#/posts?type=short",detail:"Short video · TEST MODE",icon:"videos"},{title:"Photo Post",href:"#/posts?type=picture",detail:"Photos · TEST MODE",icon:"camera"},{title:"Create Poll",detail:"Interactive polls · Planned",icon:"posts"},{title:"Create Community",href:"#/community",detail:"Community area · preview",icon:"chat"},{title:"Create Chatroom",detail:"Room creation · Planned",icon:"msg"},{title:"Create Event",detail:"Events · Planned",icon:"explore"}]},{title:"Videos & Music",items:[{title:"Upload Video",href:"#/posts?type=video",detail:"Video upload · TEST MODE",icon:"videos"},{title:"Music Video",href:"#/posts?type=video",detail:"Video composer · TEST MODE",icon:"videos"},{title:"Short Video",href:"#/posts?type=short",detail:"Short composer · TEST MODE",icon:"videos"},{title:"Upload Song",detail:"Song publishing · Planned",icon:"music"},{title:"Upload Album",detail:"Album publishing · Planned",icon:"music"},{title:"Upload EP",detail:"EP publishing · Planned",icon:"music"},{title:"Upload Beats",detail:"Beat publishing · Planned",icon:"music"},{title:"Create Playlist",href:"#/music",detail:"Open music area · preview",icon:"music"},{title:"Add to Vault",href:"#/vault",detail:"Open Vault · preview",icon:"music"}]},{title:"Live & Commerce",items:[{title:"Go Live",href:"#/live?go=1",detail:"Livestream · TEST MODE",icon:"live"},{title:"Schedule Live",detail:"Live scheduling · Planned",icon:"live"},{title:"Live Battle",href:"#/giftbattles",detail:"Battle area · preview",icon:"live"},{title:"List Product",href:"#/marketplace",detail:"Marketplace · TEST MODE",icon:"merch"},{title:"Seller Store",detail:"Store creation · Planned",icon:"merch"},{title:"Paid Content",href:"#/pricing",detail:"Creator pricing · preview",icon:"merch"},{title:"Exclusive Content",detail:"Exclusive publishing · Planned",icon:"heart"}]},{title:"Creator Tools & Protection",items:[{title:"Creator Dashboard",href:"#/profile",detail:"Creator profile",icon:"profile"},{title:"Manage Content",href:"#/posts",detail:"Posts and content",icon:"posts"},{title:"Drafts",detail:"Draft management · Planned",icon:"posts"},{title:"Artist Protection",detail:"PIKK Shield · Planned",icon:"music"},{title:"AI Support",detail:"Support assistant · Planned",icon:"chat"}]}]);Object.freeze(kn.flatMap(e=>e.items));const ye=[{id:"dirty-money",title:"Dirty Money ft. Lil Baby",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI",embed:"https://www.youtube.com/embed/-rHDLWfiuDI"},{id:"93",title:"93 ft. DaBaby",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0",embed:"https://www.youtube.com/embed/zC0BYFxs5W0"},{id:"no-love",title:"No Love ft. YFN Lucci",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8",embed:"https://www.youtube.com/embed/6pCVEIE9pB8"},{id:"bouquet",title:"Bouquet",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=DTe4OiX2otg",embed:"https://www.youtube.com/embed/DTe4OiX2otg"},{id:"where-im-from",title:"Where I'm From ft. Tee Grizzley",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=BH7_Ttk86eQ",embed:"https://www.youtube.com/embed/BH7_Ttk86eQ"},{id:"gang-ties",title:"Gang Ties",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=0ikbrk901Kc",embed:"https://www.youtube.com/embed/0ikbrk901Kc"},{id:"go-2-work",title:"Go 2 Work",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=gRq8c2i4ESM",embed:"https://www.youtube.com/embed/gRq8c2i4ESM"},{id:"ramen-noodles",title:"Ramen Noodles",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=YNCdtAC273M",embed:"https://www.youtube.com/embed/YNCdtAC273M"},{id:"men-in-blacc",title:"Men In Blacc",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=MKyw-hzxQWY",embed:"https://www.youtube.com/embed/MKyw-hzxQWY"},{id:"king-city",title:"King City",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=wyNJYUqpRFM",embed:"https://www.youtube.com/embed/wyNJYUqpRFM"},{id:"in-her-bag",title:"In Her Bag",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=Dux8rm-pzRg",embed:"https://www.youtube.com/embed/Dux8rm-pzRg"},{id:"lonely",title:"Lonely",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=IVnDjPJ8dRg",embed:"https://www.youtube.com/embed/IVnDjPJ8dRg"},{id:"they-aint-coming-home",title:"They Ain't Coming Home",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=Yi4uBFkn0-o",embed:"https://www.youtube.com/embed/Yi4uBFkn0-o"},{id:"mind-on-a-licc",title:"Mind On A Licc",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=sADinuRcRr4",embed:"https://www.youtube.com/embed/sADinuRcRr4"},{id:"dbs-mix",title:"DatBoiSkeet Mix",artist:"DatBoiSkeet",category:"Mixes",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",embed:"https://www.youtube.com/embed/videoseries?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",openLink:"https://www.youtube.com/playlist?list=RDEMDYIvPhQWVGU3Zf3gcxT_4w"},{id:"on-the-radar",title:"On The Radar Interview — Talk of The Town",artist:"DatBoiSkeet",category:"Interviews",youtube:"https://www.youtube.com/watch?v=6IFiHo5HrdE",embed:"https://www.youtube.com/embed/6IFiHo5HrdE"}],za=[{id:"dbs-mix",title:"DatBoiSkeet Mix",blurb:"Official channel Music Videos playlist embed (stable). YouTube Radio Mix link kept as Play on YouTube — RD mixes often fail to embed.",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",embed:"https://www.youtube.com/embed/videoseries?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",openLink:"https://www.youtube.com/playlist?list=RDEMDYIvPhQWVGU3Zf3gcxT_4w",source:"channel-pl-music-videos + user-t96u openLink"}],Ma=[{id:"pl-music-videos",title:"DatBoiSkeet Music Videos",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t"},{id:"pl-interviews",title:"DatBoiSkeet Interviews",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQHoRjRTD58TpLGqm0XMsa7U"},{id:"pl-vlogs",title:"DatBoiSkeet Vlogs",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQEqroQ8LYGLgpDfzK3pyutQ"}],uo=[{category:"Interviews",title:"Off The Porch (no verified DatBoiSkeet YouTube URL yet — add via Admin)"},{category:"Behind the Scenes",title:"BTS clips (coming soon)"},{category:"Exclusive Videos",title:"Vault / member exclusives (coming soon)"}],de={youtube:"https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA",youtubeHandle:"https://www.youtube.com/@DatBoiSkeet1",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA",spotify:"https://open.spotify.com/artist/0Po64h8VleQOR97okM68zh",apple:"https://music.apple.com/us/artist/datboiskeet/1270542870"},yt=[{id:"stream-dirty-money",title:"Dirty Money (feat. Lil Baby)",artist:"DatBoiSkeet",type:"single",year:2018,albumNote:"From Broke Is the Root of All Evil",cover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/7a/67/2a7a676e-af85-489e-55fd-2bae2793948b/datboiskeet-bitroae-cover-3000px.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/17Pw88uBIWpgOVCfhEyszG",apple:"https://music.apple.com/us/song/dirty-money-feat-lil-baby/1395681218",youtubeMusic:"https://music.youtube.com/watch?v=-rHDLWfiuDI",youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI"}},{id:"stream-93",title:"93 (feat. DaBaby)",artist:"DatBoiSkeet",type:"single",year:2019,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/19/60/5f/19605f4c-7014-6dbc-ca18-baa2a672c697/194923194110.png/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/3gKwZybDOkUoz2wXquDHVZ",apple:"https://music.apple.com/us/album/93-feat-da-baby-single/1493456214",youtubeMusic:"https://music.youtube.com/watch?v=zC0BYFxs5W0",youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0"}},{id:"stream-no-love",title:"No Love (feat. YFN Lucci)",artist:"DatBoiSkeet",type:"single",year:2017,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/49/e5/62/49e56292-e427-3992-84bd-ead0b06fb06a/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/2KqnCXMM0lAMlEv1fDN63o",apple:"https://music.apple.com/us/album/no-love-feat-yfn-lucci-single/1317778810",youtubeMusic:"https://music.youtube.com/watch?v=6pCVEIE9pB8",youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8"}},{id:"stream-broke",title:"Broke Is the Root of All Evil",artist:"DatBoiSkeet",type:"album",year:2018,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/7a/67/2a7a676e-af85-489e-55fd-2bae2793948b/datboiskeet-bitroae-cover-3000px.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/51j6ReXYreCDV0ZwtPdj1Q",apple:"https://music.apple.com/us/album/broke-is-the-root-of-all-evil/1395680910",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}},{id:"stream-talk",title:"Talk of the Town",artist:"DatBoiSkeet",type:"album",year:2020,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/0d/a0/f60da0bf-c3de-8b12-5cd8-e8c1d3c2053b/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/4OY5rM0TBPDsC4n8Dka4Gr",apple:"https://music.apple.com/us/album/talk-of-the-town/1541180619",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}},{id:"stream-said-you-love-me",title:"Said You Love Me",artist:"DatBoiSkeet",type:"single",year:2025,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f4/4f/6b/f44f6b18-dff9-0486-e6e6-a615724e02fe/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/7FhoRIzhuGgmt2pZlWMc5c",apple:"https://music.apple.com/us/album/said-you-love-me-single/1835164001",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}}],Pt=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",status:"Coming Soon",order:1},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",status:"Coming Soon",order:2}],mo=[{id:"vault-long-story-short",title:"Long Story Short (Vault Preview)",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",tier:"skeet+",status:"Coming Soon"},{id:"vault-ladies-only",title:"Ladies Only (Vault Exclusive)",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",tier:"backstage",status:"Coming Soon"}],Ei=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",price:1.29,status:"Coming Soon"},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",price:1.29,status:"Coming Soon"}],Oe=[{id:"hat-716-orange",name:"716 Buffalo Braves Snapback (Black/Orange)",price:30,category:"Hats",image:"/merch/01_black_orange_716_hat.jpeg",shopUrl:"https://foreignx-change.com"},{id:"hat-716-blue",name:"716 Buffalo Hat (Blue/Red)",price:30,category:"Hats",image:"/merch/02_blue_red_716_hat.jpeg",shopUrl:"https://foreignx-change.com"},{id:"jacket-blue",name:"Buffalo Sports Varsity Jacket (Blue/White)",price:200,category:"Jackets",image:"/merch/03_blue_buffalo_jacket.jpeg",shopUrl:"https://foreignx-change.com"},{id:"jacket-black",name:"Foreign X-Change Buffalo Varsity (Black/White)",price:200,category:"Jackets",image:"/merch/07_black_buffalo_jacket.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-fx-back",name:"Foreign X-Change Graphic Tee (Back)",price:65,category:"Shirts",image:"/merch/04_black_fx_tee_back_screenshot.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-fx-front",name:"Foreign X-Change Text Tee (Front)",price:65,category:"Shirts",image:"/merch/05_black_fx_tee_front_screenshot.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-ptsd",name:"PTSD Tee (Black)",price:65,category:"Shirts",image:"/merch/06_black_ptsd_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-abstract",name:"Abstract FX Tee (White)",price:65,category:"Shirts",image:"/merch/08_white_abstract_fx_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-dealer",name:"Support Your Local Dealer Tee (Navy)",price:65,category:"Shirts",image:"/merch/09_navy_dealer_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-skulls",name:"Skulls FX Tee (White)",price:65,category:"Shirts",image:"/merch/10_white_skulls_tee.jpeg",shopUrl:"https://foreignx-change.com"}],Is=[{id:"frame-chrome-crown",name:"Chrome Crown",category:"frames",rarity:"legendary",price:12.99,emoji:"👑"},{id:"frame-iced-out",name:"Iced Out",category:"frames",rarity:"epic",price:9.99,emoji:"💎"},{id:"frame-trap-flame",name:"Trap Flame",category:"frames",rarity:"epic",price:7.99,emoji:"🔥"},{id:"frame-rodeo-gold",name:"Rodeo Gold",category:"frames",rarity:"rare",price:5.99,emoji:"🤠"},{id:"frame-rose-petals",name:"Rose Petals",category:"frames",rarity:"rare",price:4.99,emoji:"🌹"},{id:"fx-bass-pulse",name:"Bass Pulse",category:"effects",rarity:"epic",price:8.99,emoji:"🎵"},{id:"fx-snowfall",name:"Snowfall",category:"effects",rarity:"rare",price:5.99,emoji:"❄️"},{id:"fx-city-lights",name:"City Lights",category:"effects",rarity:"epic",price:7.99,emoji:"🌃"},{id:"fx-holo-glitch",name:"Holographic Glitch",category:"effects",rarity:"legendary",price:14.99,emoji:"✨"},{id:"ban-skyline",name:"City Skyline",category:"banners",rarity:"rare",price:4.99,emoji:"🏙️"},{id:"ban-studio",name:"Studio Booth",category:"banners",rarity:"rare",price:4.99,emoji:"🎙️"},{id:"ban-arena",name:"Arena Lights",category:"banners",rarity:"epic",price:6.99,emoji:"🏟️"},{id:"ban-chrome",name:"Luxury Chrome",category:"banners",rarity:"legendary",price:11.99,emoji:"🪞"},{id:"name-chrome",name:"Chrome Name",category:"name styles",rarity:"epic",price:6.99,emoji:"🅰️"},{id:"name-neon",name:"Neon Name",category:"name styles",rarity:"rare",price:3.99,emoji:"💜"},{id:"name-varsity",name:"Bold Varsity",category:"name styles",rarity:"rare",price:3.99,emoji:"🏟️"},{id:"name-western",name:"Western Script",category:"name styles",rarity:"epic",price:5.99,emoji:"🏜️"},{id:"badge-dayone",name:"Day One (cosmetic style)",category:"badges",rarity:"rare",price:2.99,emoji:"1️⃣"},{id:"badge-topfan",name:"Top Fan (cosmetic style)",category:"badges",rarity:"epic",price:4.99,emoji:"⭐"},{id:"badge-backstage",name:"Backstage Glow",category:"badges",rarity:"epic",price:5.99,emoji:"🎫"}],go=[{id:"all",label:"All"},{id:"frames",label:"Frames"},{id:"effects",label:"Effects"},{id:"banners",label:"Banners"},{id:"name styles",label:"Name styles"},{id:"badges",label:"Badges"}],wn=[{id:"skeet",name:"Skeet+",price:3.99,blurb:"Early DatBoiSkeet releases · basic Vault"},{id:"backstage",name:"Backstage",price:7.99,blurb:"Deeper Vault · studio lives · listening rooms"},{id:"inner",name:"Inner Circle",price:14.99,blurb:"VIP drops · private Q&As · Inner Circle rooms"}],ho=[{label:"Long Story Short",src:"/music/01_Long_Story_Short_Coming_Soon.jpg"},{label:"Ladies Only",src:"/music/02_Ladies_Only_Coming_Soon.jpg"},{label:"716 Orange Hat",src:"/merch/01_black_orange_716_hat.jpeg"},{label:"716 Blue Hat",src:"/merch/02_blue_red_716_hat.jpeg"},{label:"Blue Jacket",src:"/merch/03_blue_buffalo_jacket.jpeg"},{label:"PTSD Tee",src:"/merch/06_black_ptsd_tee.jpeg"}],fo=[{route:"/explore",title:"Explore",blurb:"Discover DatBoiSkeet · creators · drops"},{route:"/music",title:"Music",blurb:"Long Story Short · Ladies Only · Vault"},{route:"/videos",title:"Videos",blurb:"Official DatBoiSkeet MVs"},{route:"/posts",title:"Posts",blurb:"Text · Picture · Short · Video"},{route:"/shorts",title:"Shorts",blurb:"Under Posts · quick clips"},{route:"/live",title:"Live",blurb:"Go live · TEST MODE demo"},{route:"/shop",title:"PIKK Shop",blurb:"Foreign X-Change merch · external checkout"},{route:"/community",title:"PIKK Lounge",blurb:"Artist-owned rooms · Phase 2"},{route:"/music",title:"Vault",blurb:"Member exclusives · Coming Soon",hash:"vault"},{route:"/marketplace",title:"Marketplace",blurb:"Brand ads & sponsored offers"},{route:"/missions",title:"Missions",blurb:"Clipper promo campaigns"},{route:"/clippers",title:"Clippers",blurb:"Apply · cut clips · earn"}],Sn=[{id:"home",label:"Home",href:"#/home"},{id:"explore",label:"Explore",href:"#/explore"},{id:"profile",label:"Profile / Sign in",href:"#/profile"},{id:"watch",label:"Watch",links:[{href:"#/videos",label:"Videos"},{href:"#/live",label:"Live"},{href:"#/openmic",label:"Open Mic / Talent Discovery (24/7)"},{href:"#/spotlight",label:"Spotlight (24/7)"},{href:"#/multiguest",label:"Multi-Guest Live"}]},{id:"music",label:"Music",links:[{href:"#/music",label:"Music & Vault"}]},{id:"social",label:"Social",links:[{href:"#/posts",label:"Posts"},{href:"#/posts?compose=1",label:"Post · Text / Picture / Short / Video"},{href:"#/shorts",label:"Shorts (in Posts)"},{href:"#/notifications",label:"Notifications"},{href:"#/connect",label:"Connect"},{href:"#/dating",label:"Dating & Connections"},{href:"#/community",label:"Community / Lounge"}]},{id:"messages",label:"Messages",href:"#/messages"},{id:"games",label:"Games",links:[{href:"#/games",label:"PIKK Arcade · 15 Games Coming Soon"},{href:"#/blockwars",label:"Block Wars · Coming Soon"}]},{id:"shop",label:"Shop",links:[{href:"#/merch",label:"Foreign X-Change Merch"},{href:"#/marketplace",label:"Marketplace"},{href:"#/shop",label:"PIKK Shop"},{href:"#/profile-shop",label:"Profile Shop · cosmetics"}]},{id:"earn",label:"Creators & Earnings",links:[{href:"#/wallet",label:"Wallet"},{href:"#/earnings",label:"Creator Earnings"},{href:"#/missions",label:"Missions"},{href:"#/clippers",label:"Clippers Apply"},{href:"#/share",label:"Share & Earn"},{href:"#/refer",label:"Refer & Earn"},{href:"#/pricing",label:"Pricing (rules & fees)"}]},{id:"account",label:"Account",links:[{href:"#/profile",label:"Profile"},{href:"#/signup",label:"Signup / Creator Apps"},{href:"#/loyalty",label:"Loyalty Club"},{href:"#/fanclubs",label:"Fan Clubs"},{href:"#/guidelines",label:"Community Guidelines"}]},{id:"studio",label:"Studio / Owner",links:[{href:"#/admin",label:"Admin"},{href:"#/phases",label:"Development Phases"},{href:"#/launch",label:"Launch Readiness"}]}];Sn.flatMap(e=>e.href?[{href:e.href,label:e.label}]:e.links||[]);const vo=[{href:"#/music",label:"Music",icon:"music"},{href:"#/videos",label:"Videos",icon:"videos"},{href:"#/connect",label:"Connect",icon:"profile"},{href:"#/create",label:"Create",icon:"live",primary:!0},{href:"#/dating",label:"Dating",icon:"heart"},{href:"#/games",label:"Games",icon:"game"},{href:"#/shop",label:"Shop",icon:"merch"}],$n="dbs_v1",is=()=>({user:null,profiles:{dbs:{id:"dbs",username:"DatBoiSkeet",bio:"Official DatBoiSkeet · Long Story Short & Ladies Only Coming Soon · Vault · Foreign X-Change",avatar:"/brand/logo-dbs-v3@2x.webp",followers:[],following:[],verified:!0}},posts:[],comments:{},likes:{},clipperApps:[],creatorSellApps:[],brandApps:[],listings:[],live:null,liveHistory:[],liveSongRequests:[],coins:{balance:0,history:[]},liveGiftLedger:[],liveGbChallengePop:null,threads:{},demoUnreadSeeded:!1,messagePrefs:{allowDMs:!0,allowRequests:!0},notifications:{releases:!0,lives:!0,messages:!0,quietHours:!1},wallet:{balance:0,history:[]},creatorWallet:{available:0,holds:0,threshold:25,verification:"demo_unverified",earnings:[],payouts:[]},catalog:[],missions:[],giftBattles:{active:null,history:[],champions:[],prefs:{invitationsEnabled:!0}},multiGuest:{active:null,history:[]},spotlight:{nowPlaying:null,queue:[],history:[],houseIndex:0},fanClubs:{clubs:[],posts:{},seeded:!1},shareEarn:{platformsLinked:[],challenge:null,submissions:[],rewardsClaimed:[]},referEarn:{code:"",invitees:[],milestonesClaimed:[]},restream:{platforms:{},selected:[],session:null,history:[],ingest:null,campaign:{tier:null,status:"none",enrolledAt:null,cancelledAt:null},campaignConfig:null},loyalty:{points:0,history:[],badges:[],publicVisible:!0,lastActionAt:{},dayCounts:{}},openMic:{applications:[],seeded:!1,houseIndex:0},profileShop:{owned:[],equipped:{},reduceMotion:!1},hotFeed:{lives:[],posts:[],seededLives:!1,seededPosts:!1,seededPostsVer:0},engagementAlerts:[],postShares:{},splashSeenAt:0,dailyGoals:{app:null,liveByHost:{},history:[]}});function bo(){var e,t,s,a,i,n,l,o,p,c,u,m,h,f,b,k,v,w,E,T,y,D,$,B,x,N,ce,K,ke,xe,M,P,q,z,H,F,V,we,Ee,Ve,Ue,dt,pt,ut,mt,J,Ae,_e,xs,A,De;try{const Ht=localStorage.getItem($n);if(!Ht)return is();const S=JSON.parse(Ht),te=is();return{...te,...S,profiles:{...te.profiles,...S.profiles||{}},notifications:{...te.notifications,...S.notifications||{}},wallet:{...te.wallet,...S.wallet||{}},creatorWallet:{...te.creatorWallet,...S.creatorWallet||{},earnings:Array.isArray((e=S.creatorWallet)==null?void 0:e.earnings)?S.creatorWallet.earnings:[],payouts:Array.isArray((t=S.creatorWallet)==null?void 0:t.payouts)?S.creatorWallet.payouts:[],available:Number((s=S.creatorWallet)==null?void 0:s.available)||0,holds:Number((a=S.creatorWallet)==null?void 0:a.holds)||0,threshold:Number((i=S.creatorWallet)==null?void 0:i.threshold)>0?Number(S.creatorWallet.threshold):25,verification:((n=S.creatorWallet)==null?void 0:n.verification)==="demo_verified"?"demo_verified":"demo_unverified"},brandApps:S.brandApps||[],listings:Array.isArray(S.listings)?S.listings:[],live:S.live??null,liveHistory:Array.isArray(S.liveHistory)?S.liveHistory:[],liveSongRequests:Array.isArray(S.liveSongRequests)?S.liveSongRequests:[],coins:{balance:Number((l=S.coins)==null?void 0:l.balance)||0,history:Array.isArray((o=S.coins)==null?void 0:o.history)?S.coins.history:[]},liveGiftLedger:Array.isArray(S.liveGiftLedger)?S.liveGiftLedger:[],liveGbChallengePop:S.liveGbChallengePop||null,threads:{...S.threads||{}},demoUnreadSeeded:!!S.demoUnreadSeeded,messagePrefs:{...te.messagePrefs,...S.messagePrefs||{}},catalog:Array.isArray(S.catalog)?S.catalog:[],missions:Array.isArray(S.missions)?S.missions:[],giftBattles:{...te.giftBattles,...S.giftBattles||{},history:Array.isArray((p=S.giftBattles)==null?void 0:p.history)?S.giftBattles.history:[],champions:Array.isArray((c=S.giftBattles)==null?void 0:c.champions)?S.giftBattles.champions:[],prefs:{...te.giftBattles.prefs,...((u=S.giftBattles)==null?void 0:u.prefs)||{}},active:((m=S.giftBattles)==null?void 0:m.active)??null},multiGuest:{...te.multiGuest,...S.multiGuest||{},history:Array.isArray((h=S.multiGuest)==null?void 0:h.history)?S.multiGuest.history:[],active:((f=S.multiGuest)==null?void 0:f.active)??null},fanClubs:{...te.fanClubs,...S.fanClubs||{},clubs:Array.isArray((b=S.fanClubs)==null?void 0:b.clubs)?S.fanClubs.clubs:[],posts:(k=S.fanClubs)!=null&&k.posts&&typeof S.fanClubs.posts=="object"?S.fanClubs.posts:{},seeded:!!((v=S.fanClubs)!=null&&v.seeded)},shareEarn:{...te.shareEarn,...S.shareEarn||{},platformsLinked:Array.isArray((w=S.shareEarn)==null?void 0:w.platformsLinked)?S.shareEarn.platformsLinked:[],challenge:((E=S.shareEarn)==null?void 0:E.challenge)??null,submissions:Array.isArray((T=S.shareEarn)==null?void 0:T.submissions)?S.shareEarn.submissions:[],rewardsClaimed:Array.isArray((y=S.shareEarn)==null?void 0:y.rewardsClaimed)?S.shareEarn.rewardsClaimed:[]},referEarn:{...te.referEarn,...S.referEarn||{},code:typeof((D=S.referEarn)==null?void 0:D.code)=="string"?S.referEarn.code:"",invitees:Array.isArray(($=S.referEarn)==null?void 0:$.invitees)?S.referEarn.invitees:[],milestonesClaimed:Array.isArray((B=S.referEarn)==null?void 0:B.milestonesClaimed)?S.referEarn.milestonesClaimed:[]},restream:{...te.restream,...S.restream||{},platforms:(x=S.restream)!=null&&x.platforms&&typeof S.restream.platforms=="object"?S.restream.platforms:{},selected:Array.isArray((N=S.restream)==null?void 0:N.selected)?S.restream.selected:[],session:((ce=S.restream)==null?void 0:ce.session)??null,history:Array.isArray((K=S.restream)==null?void 0:K.history)?S.restream.history:[],ingest:((ke=S.restream)==null?void 0:ke.ingest)??null,campaign:{...te.restream.campaign,...((xe=S.restream)==null?void 0:xe.campaign)||{}},campaignConfig:((M=S.restream)==null?void 0:M.campaignConfig)??null},loyalty:{...te.loyalty,...S.loyalty||{},points:Number((P=S.loyalty)==null?void 0:P.points)||0,history:Array.isArray((q=S.loyalty)==null?void 0:q.history)?S.loyalty.history:[],badges:Array.isArray((z=S.loyalty)==null?void 0:z.badges)?S.loyalty.badges:[],publicVisible:((H=S.loyalty)==null?void 0:H.publicVisible)===void 0?!0:!!S.loyalty.publicVisible,lastActionAt:(F=S.loyalty)!=null&&F.lastActionAt&&typeof S.loyalty.lastActionAt=="object"?S.loyalty.lastActionAt:{},dayCounts:(V=S.loyalty)!=null&&V.dayCounts&&typeof S.loyalty.dayCounts=="object"?S.loyalty.dayCounts:{}},openMic:{...te.openMic,...S.openMic||{},applications:Array.isArray((we=S.openMic)==null?void 0:we.applications)?S.openMic.applications:[],seeded:!!((Ee=S.openMic)!=null&&Ee.seeded),houseIndex:typeof((Ve=S.openMic)==null?void 0:Ve.houseIndex)=="number"?S.openMic.houseIndex:0},profileShop:{...te.profileShop,...S.profileShop||{},owned:Array.isArray((Ue=S.profileShop)==null?void 0:Ue.owned)?S.profileShop.owned:[],equipped:(dt=S.profileShop)!=null&&dt.equipped&&typeof S.profileShop.equipped=="object"?S.profileShop.equipped:{},reduceMotion:!!((pt=S.profileShop)!=null&&pt.reduceMotion)},hotFeed:{...te.hotFeed,...S.hotFeed||{},lives:Array.isArray((ut=S.hotFeed)==null?void 0:ut.lives)?S.hotFeed.lives:[],posts:Array.isArray((mt=S.hotFeed)==null?void 0:mt.posts)?S.hotFeed.posts:[],seededLives:!!((J=S.hotFeed)!=null&&J.seededLives),seededPosts:!!((Ae=S.hotFeed)!=null&&Ae.seededPosts),seededPostsVer:Number((_e=S.hotFeed)==null?void 0:_e.seededPostsVer)||0},engagementAlerts:Array.isArray(S.engagementAlerts)?S.engagementAlerts:[],postShares:S.postShares&&typeof S.postShares=="object"?S.postShares:{},creatorSellApps:Array.isArray(S.creatorSellApps)?S.creatorSellApps:[],dailyGoals:{...te.dailyGoals,...S.dailyGoals||{},app:((xs=S.dailyGoals)==null?void 0:xs.app)??null,liveByHost:(A=S.dailyGoals)!=null&&A.liveByHost&&typeof S.dailyGoals.liveByHost=="object"?S.dailyGoals.liveByHost:{},history:Array.isArray((De=S.dailyGoals)==null?void 0:De.history)?S.dailyGoals.history:[]}}}catch{return is()}}function C(e){localStorage.setItem($n,JSON.stringify(e))}let d=bo();function L(){return d}function Ai(e){return d={...d,...e},C(d),d}function yo(e){return d=e(d)||d,C(d),d}function nt(e){e&&(d={...d,profiles:{...d.profiles,[e.id]:{id:e.id,username:e.username,bio:e.bio||"",avatar:e.avatar||"",followers:e.followers||[],following:e.following||[],memberships:e.memberships||{},verified:!!e.verified}}})}function St(e){return e?d.user&&d.user.id===e?d.user:d.profiles[e]||null:null}function Ci(e){const t=St(e);return t?(t.followers||[]).map(s=>St(s)||{id:s,username:s}).filter(Boolean):[]}function La(e){const t=St(e);return t?(t.following||[]).map(s=>St(s)||{id:s,username:s}).filter(Boolean):[]}function xn(){if(d.posts.length)return;const e=[{id:"p1",userId:"dbs",username:"DatBoiSkeet",text:"Long Story Short — cover is up. Coming Soon on DBS Music. Stay ready.",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",at:Date.now()-864e5*2},{id:"p2",userId:"dbs",username:"DatBoiSkeet",text:"Foreign X-Change — hats, tees & jackets. Checkout on ForeignX-Change.com (not inside DBS).",image:"/merch/01_black_orange_716_hat.jpeg",at:Date.now()-864e5},{id:"p3",userId:"dbs",username:"DatBoiSkeet",text:"Ladies Only — cover art live. Official playback unlocks when the single drops.",image:"/music/02_Ladies_Only_Coming_Soon.jpg",at:Date.now()-864e5*3},{id:"p4",userId:"dbs",username:"DatBoiSkeet",text:"716 Buffalo Braves snapback on Foreign X-Change — shop the external store.",image:"/merch/02_blue_red_716_hat.jpeg",at:Date.now()-864e5*4}];d={...d,posts:e,likes:{p1:[],p2:[],p3:[],p4:[]},comments:{p1:[],p2:[],p3:[],p4:[]}},C(d)}function Nt(e){const t=(e||"Fan").trim().slice(0,24)||"Fan",s="u_"+t.toLowerCase().replace(/\W+/g,"_")+"_"+Date.now().toString(36),a={id:s,username:t,bio:"DBS fan · local demo account (TEST MODE)",avatar:"",followers:[],following:["dbs"],membership:null,memberships:{skeetPlus:!1,backstage:!1,innerCircle:!1},purchasedTracks:[],createdAt:Date.now()},i=d.profiles.dbs||is().profiles.dbs,n=new Set(i.followers||[]);return n.add(s),d={...d,user:a,profiles:{...d.profiles,dbs:{...i,followers:[...n]}}},nt(a),C(d),a}function ko(){d={...d,user:null},C(d)}function wo({bio:e,avatar:t,username:s}){const a=d.user;if(!a)return{error:"signin"};const i={...a,bio:e!==void 0?String(e).slice(0,280):a.bio,avatar:t!==void 0?String(t).trim():a.avatar,username:s!==void 0&&String(s).trim().slice(0,24)||a.username};return d={...d,user:i},nt(i),C(d),i}function Qs(e,t=!0){const s=d.user;if(!s)return{error:"signin"};let a=s.membership??null;const i=c=>c==="skeet"||c==="skeetPlus"||c==="skeet+"?"skeet+":c==="backstage"?"backstage":c==="inner"||c==="innerCircle"?"inner":null,n={null:0,"skeet+":1,backstage:2,inner:3},l=i(e);t?l&&(a=l):a=null;const o={skeetPlus:n[a||"null"]>=1,backstage:n[a||"null"]>=2,innerCircle:n[a||"null"]>=3},p={...s,membership:a,memberships:o};return d={...d,user:p},nt(p),C(d),p}function xt(){const e=d.user;if(!e)return null;if(e.membership)return e.membership;const t=e.memberships||{};return t.innerCircle?"inner":t.backstage?"backstage":t.skeetPlus?"skeet+":null}function Pa(e="skeet"){const t=xt(),s={null:0,"skeet+":1,backstage:2,inner:3},a=e==="backstage"?2:e==="inner"?3:1;return(s[t||"null"]||0)>=a}function So(e){const t=d.user;if(!t)return{error:"signin"};const s=new Set(t.purchasedTracks||[]);s.add(e);const a={...t,purchasedTracks:[...s]};return d={...d,user:a},nt(a),C(d),a}function Ti({text:e,image:t,mediaType:s,mediaUrl:a}){const i=d.user;if(!i)throw new Error("Sign in required");const n="p_"+Date.now().toString(36),l=["picture","short","video","image","text"].includes(s)?s==="image"?"picture":s:t?"picture":"text",o={id:n,userId:i.id,username:i.username,text:(e||"").trim(),image:(t||"").trim(),mediaType:l==="text"&&!(t||"").trim()?"text":l,mediaUrl:(a||"").trim(),at:Date.now()};return d={...d,posts:[o,...d.posts],likes:{...d.likes,[n]:[]},comments:{...d.comments,[n]:[]}},C(d),o}function $o(e){const t=d.user;if(!t)return{error:"signin"};const s=new Set(d.likes[e]||[]);s.has(t.id)?s.delete(t.id):s.add(t.id),d={...d,likes:{...d.likes,[e]:[...s]}},C(d);try{Re()}catch{}return{count:s.size,liked:s.has(t.id)}}function xo(e,t){const s=d.user;if(!s)return{error:"signin"};const a={id:"c_"+Date.now().toString(36),userId:s.id,username:s.username,text:t.trim(),at:Date.now()},i=d.comments[e]||[];d={...d,comments:{...d.comments,[e]:[...i,a]}},C(d);try{Re()}catch{}return a}function Xs(e){const t=d.user;if(!t)return{error:"signin"};if(e===t.id)return{error:"self"};if(t.following.includes(e))return t;const s={...t,following:[...t.following,e]},a={...d.profiles},i=a[e]||St(e);if(i){const n=new Set(i.followers||[]);n.add(t.id),a[e]={...i,followers:[...n]}}return d={...d,user:s,profiles:a},nt(s),C(d),s}function Js(e){const t=d.user;if(!t)return{error:"signin"};const s={...t,following:(t.following||[]).filter(n=>n!==e)},a={...d.profiles},i=a[e]||St(e);return i&&(a[e]={...i,followers:(i.followers||[]).filter(n=>n!==t.id)}),d={...d,user:s,profiles:a},nt(s),C(d),s}function Eo(e){const t={id:"clip_"+Date.now().toString(36),...e,status:"pending",at:Date.now()};return d={...d,clipperApps:[t,...d.clipperApps]},C(d),t}function Ao(e){const t=e||{},s=String(t.name||"").trim().slice(0,80),a=String(t.contact||t.email||t.handle||"").trim().slice(0,120),i=String(t.sells||"both").trim().slice(0,40),n=!!t.agreed;if(!s||!a)return{error:"missing"};if(!n)return{error:"rules"};const l={id:"csa_"+Date.now().toString(36),name:s,contact:a,sells:["music","merch","both"].includes(i)?i:"both",agreed:!0,status:"pending",at:Date.now()},o=[l,...d.creatorSellApps||[]].slice(0,40);return d={...d,creatorSellApps:o},C(d),{ok:!0,app:l}}function En(e,t){if(!["pending","approved","rejected","waitlisted"].includes(t))return{error:"bad_status"};const a=d.clipperApps.map(i=>i.id===e?{...i,status:t,reviewedAt:Date.now()}:i);return d={...d,clipperApps:a},C(d),a.find(i=>i.id===e)}function Co(e){d={...d,notifications:{...d.notifications,...e}},C(d)}function To(){d={...d,splashSeenAt:Date.now()},C(d)}function Do(){return!d.splashSeenAt}function ee(){return!!(d.user&&d.user.role==="admin")}function hs(e=!0){const t=d.user;if(!t)return{error:"signin"};const s={...t,role:e?"admin":"fan"};return d={...d,user:s},nt(s),C(d),s}function An(){var o;const e=d.posts||[],t=d.clipperApps||[],s={pending:0,approved:0,rejected:0,waitlisted:0};t.forEach(p=>{const c=p.status||"pending";s[c]!==void 0?s[c]+=1:s.pending+=1});let a=0;Object.values(d.likes||{}).forEach(p=>{a+=(p||[]).length});let i=0;Object.values(d.comments||{}).forEach(p=>{i+=(p||[]).length});let n=0;d.user&&(d.user.membership||(o=d.user.memberships)!=null&&o.skeetPlus)&&(n+=1),Object.values(d.profiles||{}).forEach(p=>{var c,u;p.id!==((c=d.user)==null?void 0:c.id)&&(p.membership||(u=p.memberships)!=null&&u.skeetPlus)&&(n+=1)});const l=d.catalog||[];return{posts:e.length,likes:a,comments:i,clippers:t.length,clipperByStatus:s,members:n,profiles:Object.keys(d.profiles||{}).length,catalogTotal:l.length,catalogPublished:l.filter(p=>p.published).length}}function Cn(e){const t=["spotify","apple","youtubeMusic","youtube","tidal","amazon"],s={};if(!e||typeof e!="object")return s;for(const a of t){const i=String(e[a]||"").trim();(i.startsWith("http://")||i.startsWith("https://"))&&(s[a]=i.slice(0,500))}return s}function wt({publishedOnly:e=!1,types:t=null,includeUnpublishedForAdmin:s=!1}={}){let a=d.catalog||[];if(e?a=a.filter(i=>i.published):s||(a=a.filter(i=>i.published)),t&&t.length){const i=new Set(t);a=a.filter(n=>i.has(n.type))}return[...a].sort((i,n)=>(n.createdAt||0)-(i.createdAt||0))}function Mo(e){var a;if(!ee())return{error:"forbidden"};const s={id:e.id||"cat_"+Date.now().toString(36),type:e.type,title:String(e.title||"").trim().slice(0,120),artist:String(e.artist).trim().slice(0,80),coverRef:e.coverRef||"",mediaRef:e.mediaRef||"",youtube:String(e.youtube||"").trim(),embed:String(e.embed||"").trim(),streamingLinks:Cn(e.streamingLinks),published:!!e.published,createdAt:Date.now(),updatedAt:Date.now(),createdBy:((a=d.user)==null?void 0:a.id)||null};return s.title?["song","album","video","picture"].includes(s.type)?(d={...d,catalog:[s,...d.catalog||[]]},C(d),s):{error:"type"}:{error:"title"}}function Tn(e,t){if(!ee())return{error:"forbidden"};let s=null;const a=(d.catalog||[]).map(i=>{if(i.id!==e)return i;const n={...i,...t,id:i.id,updatedAt:Date.now()};return t&&Object.prototype.hasOwnProperty.call(t,"streamingLinks")&&(n.streamingLinks=Cn(t.streamingLinks)),s=n,s});return s?(d={...d,catalog:a},C(d),s):{error:"missing"}}function Lo(e,t){return Tn(e,{published:!!t})}function Po(e){if(!ee())return{error:"forbidden"};const t=(d.catalog||[]).filter(s=>s.id!==e);return d={...d,catalog:t},C(d),!0}function Di(e){const t=d.user;if(!t)return{error:"signin"};if(d.live&&!d.live.endedAt)return{error:"already_live",live:d.live};const s={id:"live_"+Date.now().toString(36),hostId:t.id,hostName:t.username,title:(e||"DBS Live · TEST MODE").trim().slice(0,80),startedAt:Date.now(),viewers:3+Math.floor(Math.random()*18),giftsTotal:0,tipsTotal:0,giftLog:[],chat:[{id:"sys1",userId:"system",username:"DBS",text:"Welcome · Follow DatBoiSkeet · TEST MODE (no real stream)",at:Date.now()}],endedAt:null};return d={...d,live:s},C(d),s}function Io(){if(!d.live||d.live.endedAt)return d.live;const e={...d.live,endedAt:Date.now()},t=[e,...d.liveHistory||[]].slice(0,20);return d={...d,live:e,liveHistory:t},C(d),e}function _o(){if(!d.live||d.live.endedAt)return d.live;const e=Math.floor(Math.random()*5)-1,t=Math.max(1,(d.live.viewers||1)+e),s={...d.live,viewers:t};return d={...d,live:s},C(d),s}function qo(e){const t=d.user;if(!t)return{error:"signin"};if(!d.live||d.live.endedAt)return{error:"offline"};const s={id:"lc_"+Date.now().toString(36),userId:t.id,username:t.username,text:String(e||"").trim().slice(0,280),at:Date.now()};if(!s.text)return{error:"empty"};const a={...d.live,chat:[...d.live.chat||[],s]};return d={...d,live:a},C(d),s}function Dn({kind:e="tip",amount:t=1,label:s=""}={}){var m;const a=d.user;if(!a)return{error:"signin"};if(!d.live||d.live.endedAt)return{error:"offline"};const i=Math.max(.5,Number(t)||1),n=e==="gift"?"gift":"tip",l=((m=d.wallet)==null?void 0:m.balance)||0;let o=d.wallet||{balance:0,history:[]};l>=i&&(o={balance:+(l-i).toFixed(2),history:[...o.history||[],{at:Date.now(),amount:-i,note:`Live ${n} · ${d.live.title}`}]});const p={id:"lg_"+Date.now().toString(36),userId:a.id,username:a.username,kind:n,amount:i,label:(s||(n==="gift"?"🔥 Fire":"Tip")).slice(0,40),at:Date.now()},c={id:"lc_"+Date.now().toString(36)+"g",userId:a.id,username:a.username,text:n==="gift"?`sent ${p.label} ($${i.toFixed(2)}) · TEST MODE`:`tipped $${i.toFixed(2)} · TEST MODE`,at:Date.now(),support:!0},u={...d.live,giftsTotal:(d.live.giftsTotal||0)+(n==="gift"?i:0),tipsTotal:(d.live.tipsTotal||0)+(n==="tip"?i:0),giftLog:[...d.live.giftLog||[],p],chat:[...d.live.chat||[],c]};return d={...d,live:u,wallet:o},C(d),l>=i&&ei({category:n==="gift"?"gifts":"tips",gross:i,note:`Live ${n} from @${a.username} · ${d.live.title}`,source:"live"}),{live:u,entry:p,wallet:d.wallet,creatorWallet:d.creatorWallet}}function Bo(){return d.liveHistory||[]}const Mn=[{pack:1,price:10,label:"1 song",save:0},{pack:2,price:25,label:"2 songs",save:0},{pack:3,price:45,label:"3 songs",save:5}];function ns(){return Array.isArray(d.liveSongRequests)?d.liveSongRequests:[]}function Oo(e){var s;const t=e||((s=d.live)==null?void 0:s.id);return t?ns().filter(a=>a.liveId===t):[]}function Ha(e){const t=[];for(const s of Oo(e))(s.titles||[]).forEach((a,i)=>{t.push({requestId:s.id,songIndex:i,title:a,status:s.songStatuses&&s.songStatuses[i]||"queued",username:s.username,userId:s.userId,pack:s.pack,price:s.price,at:s.at})});return t}function No({pack:e,titles:t}={}){var u;const s=d.user;if(!s)return{error:"signin"};if(!d.live||d.live.endedAt)return{error:"offline"};const a=Mn.find(m=>m.pack===Number(e));if(!a)return{error:"bad_pack"};const i=(Array.isArray(t)?t:[]).map(m=>String(m||"").trim().slice(0,80)).filter(Boolean);if(i.length!==a.pack)return{error:"title_count",need:a.pack,got:i.length};const n=Gn(a.price,`Song request ×${a.pack} · ${d.live.title} · TEST MODE`);if((n==null?void 0:n.error)==="insufficient")return{error:"insufficient",need:a.price,balance:Number(((u=d.wallet)==null?void 0:u.balance)||0)};const l={id:"lsr_"+Date.now().toString(36),liveId:d.live.id,hostId:d.live.hostId,userId:s.id,username:s.username,pack:a.pack,price:a.price,titles:i,songStatuses:i.map(()=>"queued"),status:"open",at:Date.now(),charged:a.price},o=[l,...ns()].slice(0,200),p={id:"lc_"+Date.now().toString(36)+"sr",userId:s.id,username:s.username,text:`requested ${a.pack} song${a.pack>1?"s":""} ($${a.price}) · TEST MODE`,at:Date.now(),support:!0},c={...d.live,chat:[...d.live.chat||[],p]};return d={...d,liveSongRequests:o,live:c},C(d),ei({category:"tips",gross:a.price,note:`Song request ×${a.pack} from @${s.username} · ${d.live.title}`,source:"live_song_request"}),{ok:!0,entry:l,wallet:d.wallet,live:d.live}}function Wa(e,t,s){var b;const a=d.user;if(!a)return{error:"signin"};if(!["playing","played","skipped","queued"].includes(s))return{error:"bad_status"};const n=ns().findIndex(k=>k.id===e);if(n<0)return{error:"missing"};const l=ns()[n],o=d.live;if(!(o&&o.hostId===a.id&&o.id===l.liveId||a.id===l.hostId)&&!ee())return{error:"host_only"};const c=Number(t);if(!Number.isInteger(c)||c<0||c>=(l.titles||[]).length)return{error:"bad_index"};let u=[...l.songStatuses||l.titles.map(()=>"queued")];if(s==="playing"){const k=ns().map(v=>{if(v.liveId!==l.liveId)return v;const w=[...v.songStatuses||(v.titles||[]).map(()=>"queued")];let E=!1;for(let y=0;y<w.length;y++)w[y]==="playing"&&(w[y]="played",E=!0);if(!E)return v;const T=w.every(y=>y==="played"||y==="skipped");return{...v,songStatuses:w,status:T?"done":"open"}});d={...d,liveSongRequests:k},u=[...((b=d.liveSongRequests[n])==null?void 0:b.songStatuses)||u]}u[c]=s;const m=u.every(k=>k==="played"||k==="skipped"),h={...d.liveSongRequests[n],songStatuses:u,status:m?"done":"open"},f=[...d.liveSongRequests];return f[n]=h,d={...d,liveSongRequests:f},C(d),{ok:!0,entry:h}}function jo(e,t){return Wa(e,t,"playing")}function Ro(e,t){return Wa(e,t,"skipped")}function Fo(e,t){return Wa(e,t,"played")}const Ya=[{slug:"rose",name:"DBS Rose",coins:5,usd:.1,animation:"Rotating glossy rose and petals",tier:"small"},{slug:"big-love",name:"Big Love",coins:25,usd:.5,animation:"Pulsing luminous heart",tier:"small"},{slug:"turn-up",name:"Turn Up",coins:50,usd:1,animation:"Flame burst and DBS sparks",tier:"small"},{slug:"cash-rain",name:"Cash Rain",coins:150,usd:3,animation:"Stylized bills and confetti",tier:"mid"},{slug:"bottle-pop",name:"Bottle Pop",coins:300,usd:6,animation:"Bottle pop and confetti",tier:"mid"},{slug:"money-gun",name:"Money Gun",coins:750,usd:15,animation:"Stylized cash launcher",tier:"premium"},{slug:"diamond-drip",name:"Diamond Drip",coins:1500,usd:30,animation:"Rotating diamond",tier:"premium"},{slug:"foreign-whip",name:"Foreign Whip",coins:3e3,usd:60,animation:"Original luxury vehicle drives across screen",tier:"premium"},{slug:"helicopter",name:"Helicopter",coins:5e3,usd:100,animation:"Helicopter spotlight flyover",tier:"cinematic"},{slug:"private-jet",name:"Private Jet",coins:1e4,usd:200,animation:"Jet cinematic flyover",tier:"cinematic"},{slug:"dbs-crown",name:"DBS Crown",coins:25e3,usd:500,animation:"Gold diamond crown",tier:"cinematic"},{slug:"dbs-universe",name:"DBS Universe",coins:5e4,usd:1e3,animation:"Galaxy DBS logo reveal",tier:"cinematic"}],Zs=[{coins:100,usd:2},{coins:500,usd:10},{coins:1e3,usd:20},{coins:2500,usd:50},{coins:5e3,usd:100},{coins:1e4,usd:200}],Go=750,ga=80,Mi=20;function ea(e){return{balance:Math.max(0,Number(e==null?void 0:e.balance)||0),history:Array.isArray(e==null?void 0:e.history)?e.history:[]}}function ta(){return ea(d.coins).balance}function Ko(){return Zs.map(e=>({...e}))}function Vo(){return Ya.map(e=>({...e}))}function Ln(e){const t=Zs.find(n=>n.coins===Number(e));if(!t)return{error:"bad_package"};const s=ea(d.coins),a={at:Date.now(),amount:t.coins,note:`Bought ${t.coins} coins ($${t.usd}) · TEST MODE`,kind:"buy",packageCoins:t.coins,usd:t.usd},i={balance:s.balance+t.coins,history:[a,...s.history].slice(0,200)};return d={...d,coins:i},C(d),{ok:!0,coins:i,pack:t,entry:a}}function Qa(){return Array.isArray(d.liveGiftLedger)?d.liveGiftLedger:[]}function Uo(e){var s;const t=e||((s=d.live)==null?void 0:s.id);return t?Qa().filter(a=>a.liveId===t).map(a=>({id:a.id,liveId:a.liveId,giftSlug:a.giftSlug,giftName:a.giftName,coins:a.coins,usd:a.usd,fromUserId:a.fromUserId,fromUser:a.fromUser,at:a.at,animation:a.animation,tier:a.tier})):[]}function zo(e=10,t=Date.now()){const s=Math.min(Math.max(1,Number(e)||10),10),a=new Date(t);a.setHours(0,0,0,0);const i=a.getTime(),n=new Date(t);n.setHours(23,59,59,999);const l=n.getTime(),o={};for(const p of Qa()){const c=Number(p.at||0);if(c<i||c>l)continue;const u=p.fromUserId||p.fromUser||"anon",m=o[u]||{userId:u,username:p.fromUser||u,usd:0,coins:0,gifts:0,lastSlug:p.giftSlug||"rose"};m.usd=+(m.usd+Number(p.usd||0)).toFixed(2),m.coins+=Number(p.coins||0),m.gifts+=1,m.username=p.fromUser||m.username,m.lastSlug=p.giftSlug||m.lastSlug,o[u]=m}return Object.values(o).sort((p,c)=>c.usd-p.usd||c.coins-p.coins||p.username.localeCompare(c.username)).slice(0,s)}function Pn(e){let s=(Za(d.creatorWallet).earnings||[]).filter(a=>a.category==="gifts");return e&&(s=s.filter(a=>!a.hostId||a.hostId===e)),s.map(a=>({...a}))}function Ho({liveId:e,slug:t}={}){const s=d.user;if(!s)return{error:"signin"};const a=d.live;if(!a||a.endedAt)return{error:"offline"};if(e&&e!==a.id)return{error:"live_mismatch"};const i=Ya.find(x=>x.slug===t);if(!i)return{error:"bad_gift"};const n=ea(d.coins);if(n.balance<i.coins)return{error:"insufficient",need:i.coins,balance:n.balance};const l=_(i.usd),o=0,p=l,c=_(p*ga/100),u=_(p-c),m=Date.now(),h="lgift_"+m.toString(36)+"_"+Math.random().toString(36).slice(2,6),f={at:m,amount:-i.coins,note:`Gift ${i.name} · ${a.title} · TEST MODE`,kind:"gift",giftSlug:i.slug,liveId:a.id,usd:l},b={balance:n.balance-i.coins,history:[f,...n.history].slice(0,200)},k={id:h,liveId:a.id,hostId:a.hostId,giftSlug:i.slug,giftName:i.name,coins:i.coins,usd:l,fees:o,net:p,creatorShare:c,platformShare:u,dbsShare:u,creatorPct:ga,dbsPct:Mi,fromUserId:s.id,fromUser:s.username,at:m,animation:i.animation,tier:i.tier,testModeNetAsListed:!0},v={id:h,userId:s.id,username:s.username,kind:"gift",giftSlug:i.slug,label:i.name,amount:l,coins:i.coins,at:m},w={id:"lc_"+m.toString(36)+"gf",userId:s.id,username:s.username,text:`sent ${i.name} (${i.coins} coins) · TEST MODE`,at:m,support:!0,giftSlug:i.slug},E={...a,giftsTotal:_((a.giftsTotal||0)+l),giftLog:[...a.giftLog||[],v],chat:[...a.chat||[],w]},T=[k,...Qa()].slice(0,500),y=Za(d.creatorWallet),D={id:"earn_"+m.toString(36)+"_"+Math.random().toString(36).slice(2,6),category:"gifts",label:"Live gifts",note:`Live gift ${i.name} from @${s.username} · ${a.title}`,gross:l,fees:o,net:p,creatorPct:ga,dbsPct:Mi,creatorShare:c,dbsShare:u,source:"live_gift",giftSlug:i.slug,giftId:h,liveId:a.id,hostId:a.hostId,fromUserId:s.id,at:m,payoutId:null},$={...y,available:_(y.available+c),earnings:[D,...y.earnings||[]]},B={id:"gbpop_"+m.toString(36),liveId:a.id,fromUserId:s.id,fromUser:s.username,giftSlug:i.slug,giftName:i.name,coins:i.coins,usd:l,at:m,expiresAt:m+6e4};return d={...d,coins:b,live:E,liveGiftLedger:T,creatorWallet:$,liveGbChallengePop:B},C(d),{ok:!0,entry:k,viewerEntry:v,coins:b,live:E,earning:D,creatorWallet:$,challengePop:B}}const In=24*60*60*1e3,Li=50;function sa(e){return{app:e!=null&&e.app&&typeof e.app=="object"?e.app:null,liveByHost:e!=null&&e.liveByHost&&typeof e.liveByHost=="object"?{...e.liveByHost}:{},history:Array.isArray(e==null?void 0:e.history)?e.history:[]}}function cs(e,t=Date.now()){return!e||typeof e!="object"?!1:(Number(e.endsAt)||0)>t}function It(e){return e?{...e}:null}function _n(e){return"goal_"+e+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6)}function Xa(e,t){if(!t)return e;const s=[{...t,archivedAt:Date.now()},...e.history||[]].slice(0,40);return{...e,history:s}}function Wo(e=Date.now()){return{id:_n("app"),scope:"app",name:"PIKK daily community goal",targetAmount:50,raised:0,endsAt:e+In,createdAt:e}}function js(e){return d={...d,dailyGoals:e},C(d),e}function Ia(e=Date.now()){let t=sa(d.dailyGoals),s=!1;return t.app&&!cs(t.app,e)&&(t={...Xa(t,t.app),app:null},s=!0),cs(t.app,e)||(t={...t,app:Wo(e)},s=!0),s&&js(t),t.app&&t.app.name==="DBS daily community goal"&&(t={...t,app:{...t.app,name:"PIKK daily community goal"}},js(t)),It(t.app)}function Yo(e,t=Date.now()){var n,l;const s=e||((n=d.live)==null?void 0:n.hostId)||((l=d.user)==null?void 0:l.id)||null;if(!s)return null;let a=sa(d.dailyGoals);const i=a.liveByHost[s]||null;if(i&&!cs(i,t)){const o={...a.liveByHost};return delete o[s],a={...Xa(a,i),liveByHost:o},js(a),null}return It(cs(i,t)?i:null)}function qn({name:e,targetAmount:t}={}){const s=d.user;if(!s)return{error:"signin"};const a=String(e||"").trim().slice(0,80),i=Number(t);if(!a)return{error:"bad_name"};if(!Number.isFinite(i)||i<=0)return{error:"bad_amount"};const n=Date.now();let l=sa(d.dailyGoals);const o=l.liveByHost[s.id];o&&(l=Xa(l,o));const p={id:_n("live"),scope:"live",hostId:s.id,hostName:s.username,name:a,targetAmount:_(i),raised:0,endsAt:n+In,createdAt:n};return l={...l,liveByHost:{...l.liveByHost,[s.id]:p}},js(l),{ok:!0,goal:It(p)}}function Rs(e,t){if(!d.user)return{error:"signin"};const a=Math.floor(Number(t));if(!Number.isFinite(a)||a<=0)return{error:"invalid_amount"};const i=String(e||"");if(!i)return{error:"unknown_goal"};const n=Date.now();let l=sa(d.dailyGoals),o=null,p=null,c=null;if(l.app&&l.app.id===i)o="app",c=l.app;else for(const[y,D]of Object.entries(l.liveByHost))if(D&&D.id===i){o="live",p=y,c=D;break}if(!c)return{error:"unknown_goal"};if(!cs(c,n))return{error:"expired"};const u=Number(c.targetAmount)||0,m=Number(c.raised)||0;if(c.completedAt||u>0&&m>=u)return{error:"completed",goal:It(c)};let h=a;if(u>0){const y=Math.max(0,_(u-m)),D=Math.ceil(y*Li);if(D<=0)return{error:"completed",goal:It(c)};h>D&&(h=D)}const f=ea(d.coins);if(f.balance<h)return{error:"insufficient",need:h,balance:f.balance};const b=_(h/Li),k=_(m+b),v=u>0&&k>=u?n:c.completedAt,w={...c,raised:u>0?Math.min(k,_(u)):k,...v?{completedAt:v}:{}},E={at:n,amount:-h,note:`Goal donate · ${c.name} · $${b.toFixed(2)} · TEST MODE`,kind:"goal",goalId:c.id,usd:b},T={balance:f.balance-h,history:[E,...f.history].slice(0,200)};return o==="app"?l={...l,app:w}:l={...l,liveByHost:{...l.liveByHost,[p]:w}},d={...d,dailyGoals:l,coins:T},C(d),{ok:!0,goal:It(w),coins:T,donated:{coins:h,usd:b,requested:a}}}function Qo(e){const t=d.user,s={id:"brand_"+Date.now().toString(36),brand:String(e.brand||"").trim().slice(0,80),contact:String(e.contact||"").trim().slice(0,120),email:String(e.email||"").trim().slice(0,120),campaign:String(e.campaign||"sponsored_post").trim().slice(0,40),budget:String(e.budget||"").trim().slice(0,40),pitch:String(e.pitch||"").trim().slice(0,500),url:String(e.url||"").trim().slice(0,300),applicantUserId:(t==null?void 0:t.id)||null,status:"pending",at:Date.now()};return!s.brand||!s.email?{error:"required"}:(d={...d,brandApps:[s,...d.brandApps]},C(d),s)}function Xo(e,t){if(!["pending","approved","rejected"].includes(t))return{error:"bad_status"};const a=d.brandApps.map(i=>i.id===e?{...i,status:t,reviewedAt:Date.now()}:i);return d={...d,brandApps:a},C(d),a.find(i=>i.id===e)}function Pi(e){const t=d.user,s={id:"list_"+Date.now().toString(36),title:String(e.title||"").trim().slice(0,80),brand:String(e.brand||"").trim().slice(0,80),blurb:String(e.blurb||"").trim().slice(0,280),url:String(e.url||"").trim().slice(0,300),disclosure:String(e.disclosure||"Paid partnership · TEST MODE").trim().slice(0,120),brandAppId:e.brandAppId||null,createdBy:(t==null?void 0:t.id)||null,active:!0,at:Date.now()};return!s.title||!s.brand?{error:"required"}:(d={...d,listings:[s,...d.listings||[]]},C(d),s)}function Jo(e,t){const s=(d.listings||[]).map(a=>a.id===e?{...a,active:!!t}:a);return d={...d,listings:s},C(d),s.find(a=>a.id===e)}function Zo({activeOnly:e=!1}={}){const t=d.listings||[];return e?t.filter(s=>s.active):t}function el(e){var s;return[((s=d.user)==null?void 0:s.id)||"guest",e].sort().join("__")}function Bn(){const e=d.user;return e?Object.values(d.threads||{}).filter(t=>{var s;return(s=t.participants)==null?void 0:s.includes(e.id)}).sort((t,s)=>(s.updatedAt||0)-(t.updatedAt||0)):[]}function On(e){const t=d.user;if(!t||!e||e.muted||e.blocked)return 0;const s=e.lastReadAt||0;return(e.messages||[]).filter(a=>a.from!==t.id&&(a.at||0)>s).length}function tt(){return Bn().reduce((e,t)=>e+On(t),0)}function tl(e){const t=d.user;if(!t||!e)return null;const s=d.threads[e];if(!s||!(s.participants||[]).includes(t.id))return null;const a={...s,lastReadAt:Date.now()};d={...d,threads:{...d.threads,[a.id]:a},demoUnreadSeeded:!0},C(d);try{typeof window<"u"&&window.dispatchEvent&&window.dispatchEvent(new CustomEvent("dbs:messages-unread",{detail:{count:tt()}}))}catch{}return d.threads[a.id]}function Ja(){var c;const e=d.user;if(!e)return{seeded:!1};if(fs(),d.demoUnreadSeeded)return{seeded:!1,count:tt(),once:!0};if(tt()>0)return d={...d,demoUnreadSeeded:!0},C(d),{seeded:!1,count:tt()};const t="maya",s=(((c=d.profiles)==null?void 0:c.maya)||{}).username||"MayaBeats",a=rs(t,s);if(a.error)return a;const i=d.threads[a.id];if((i.messages||[]).some(u=>u.from!==e.id)){const u=(i.messages||[]).filter(k=>k.from!==e.id).map(k=>k.at||0),m=i.lastReadAt||0;if(m>=Math.max(...u,0)||m>0)return d={...d,demoUnreadSeeded:!0},C(d),{seeded:!1,count:tt()};const f=Math.min(...u),b={...i,lastReadAt:Math.max(0,f-1)};return d={...d,threads:{...d.threads,[b.id]:b},demoUnreadSeeded:!0},C(d),{seeded:!0,count:tt()}}const l=Date.now(),o=[{id:"m_demo_unread_1",from:t,fromName:s,text:"Yo — drop coming Friday. You in for the listening party?",at:l-1e3*60*12},{id:"m_demo_unread_2",from:t,fromName:s,text:"Also sent a beat pack in the vault 🔥",at:l-1e3*60*5}],p={...i,messages:[...i.messages||[],...o],updatedAt:l-1e3*60*5,lastReadAt:0,request:!1};return d={...d,threads:{...d.threads,[p.id]:p},demoUnreadSeeded:!0},C(d),{seeded:!0,count:tt()}}function Nn(e){return(d.threads||{})[e]||null}function jn(e){var a;const t=d.user;if(!t||!e)return!1;const s=(a=d.profiles)==null?void 0:a[e];return s?(t.following||[]).includes(e)&&(s.following||[]).includes(t.id):!1}function rs(e,t){const s=d.user;if(!s)return{error:"signin"};const a=el(e);let i=d.threads[a];if(!i){const n=e==="dbs"||jn(e);i={id:a,kind:"dm",participants:[s.id,e],peerId:e,peerName:t||e,messages:[],updatedAt:Date.now(),request:!n,muted:!1,blocked:!1},d={...d,threads:{...d.threads,[a]:i}},C(d)}return i}function sl(e,t,s,{priority:a=!1}={}){const i=d.user;if(!i)return{error:"signin"};const n=String(s||"").trim().slice(0,500);if(!n)return{error:"empty"};const l=rs(e,t);if(l.error)return l;const o={id:"m_"+Date.now().toString(36),from:i.id,fromName:i.username,text:n,at:Date.now(),priority:!!a},p={...d.threads[l.id],messages:[...d.threads[l.id].messages||[],o],updatedAt:Date.now(),peerName:t||d.threads[l.id].peerName};if(d={...d,threads:{...d.threads,[p.id]:p}},a){const c=d.wallet||{balance:0,history:[]};d={...d,wallet:{balance:c.balance,history:[...c.history||[],{at:Date.now(),amount:0,note:"Priority message · TEST MODE $2.99 (not charged)"}]}}}return C(d),{thread:d.threads[p.id],message:o}}function fs(){const e={...d.profiles||{}};let t=!1;e.maya||(e.maya={id:"maya",username:"MayaBeats",bio:"Creator · beats & live demos",avatar:"",followers:[],following:["dbs"],verified:!1},t=!0),e.fanjay||(e.fanjay={id:"fanjay",username:"FanJay",bio:"Day-one fan · playlist curator",avatar:"",followers:[],following:["dbs"],verified:!1},t=!0);const s=d.user;if(s){const a={...e.maya},i=new Set(a.following||[]),n=new Set(a.followers||[]);i.has(s.id)||(i.add(s.id),t=!0),n.has(s.id)||(n.add(s.id),t=!0),a.following=[...i],a.followers=[...n],e.maya=a;let l=s;(s.following||[]).includes("maya")||(l={...s,following:[...s.following||[],"maya"]},t=!0),t&&(d={...d,user:l,profiles:e},nt(l),C(d))}else t&&(d={...d,profiles:e},C(d));return[{id:"dbs",username:"DatBoiSkeet",team:!0,bio:(d.profiles.dbs||{}).bio||""},{id:"maya",username:d.profiles.maya.username,team:!1,bio:d.profiles.maya.bio},{id:"fanjay",username:d.profiles.fanjay.username,team:!1,bio:d.profiles.fanjay.bio}]}function al(e,t=[]){const s=d.user;if(!s)return{error:"signin"};const a=String(e).trim().slice(0,60)||"Group",i=[...new Set([s.id,...t.filter(Boolean)])],n=a.toLowerCase().replace(/\W+/g,"_").slice(0,24)||"group",l=n==="dbs_fans"?"group_dbs_fans":"group_"+n+"_"+String(s.id).slice(-4);let o=d.threads[l];if(!o)o={id:l,kind:"group",peerId:l,peerName:a,participants:i,memberIds:i,messages:[],updatedAt:Date.now(),muted:!1,blocked:!1},d={...d,threads:{...d.threads,[l]:o}},C(d);else if(s&&!(o.participants||[]).includes(s.id)){const p=[...new Set([...o.participants||[],s.id])],c=[...new Set([...o.memberIds||p,s.id])];o={...o,participants:p,memberIds:c},d={...d,threads:{...d.threads,[l]:o}},C(d)}return d.threads[l]}function il(){return d.user?(fs(),al("DBS Fans",["dbs","maya","fanjay"])):{error:"signin"}}function nl(e,t){const s=d.user;if(!s)return{error:"signin"};const a=d.threads[e];if(!a||a.kind!=="group")return{error:"not_group"};if(!(a.participants||[]).includes(s.id))return{error:"forbidden"};const i=String(t||"").trim().slice(0,500);if(!i)return{error:"empty"};const n={id:"m_"+Date.now().toString(36),from:s.id,fromName:s.username,text:i,at:Date.now(),priority:!1},l={...a,messages:[...a.messages||[],n],updatedAt:Date.now()};return d={...d,threads:{...d.threads,[l.id]:l}},C(d),{thread:d.threads[l.id],message:n}}function ha(e,t={}){const s=d.threads[e];if(!s)return{error:"missing"};const a={...s,muted:t.muted!==void 0?!!t.muted:!!s.muted,blocked:t.blocked!==void 0?!!t.blocked:!!s.blocked,reportedAt:t.report?Date.now():s.reportedAt||null};return d={...d,threads:{...d.threads,[a.id]:a}},C(d),a}function Ii(e={}){const t={...d.messagePrefs||{allowDMs:!0,allowRequests:!0},...e};return d={...d,messagePrefs:t},C(d),t}const kt={gifts:{creatorPct:80,dbsPct:20,label:"Live gifts"},tips:{creatorPct:90,dbsPct:10,label:"Tips"},subscriptions:{creatorPct:85,dbsPct:15,label:"Subscriptions"},paid_content:{creatorPct:85,dbsPct:15,label:"Paid content"},referrals:{creatorPct:85,dbsPct:15,label:"Referrals"},clippers:{creatorPct:80,dbsPct:20,label:"Clippers"},sponsorships:{creatorPct:80,dbsPct:20,label:"Sponsorships"},merch:{creatorPct:85,dbsPct:15,label:"Merch / affiliate"}},rl=[{category:"gifts",gross:40,note:"Live gifts · demo week"},{category:"tips",gross:22.5,note:"Live tips · demo week"},{category:"subscriptions",gross:29.99,note:"Skeet+ fan sub · demo"},{category:"referrals",gross:15,note:"Refer & Earn milestone · demo"},{category:"clippers",gross:50,note:"Clippers campaign payout · demo"},{category:"sponsorships",gross:100,note:"Sponsored livestream · demo"},{category:"merch",gross:35,note:"Foreign X-Change affiliate · demo"}];function _(e){return Math.round(Number(e)*100)/100}function Za(e){const t=is().creatorWallet;return!e||typeof e!="object"?{...t}:{...t,...e,available:_(e.available??0),holds:_(e.holds??0),threshold:Number(e.threshold)>0?Number(e.threshold):25,verification:e.verification==="demo_verified"?"demo_verified":"demo_unverified",earnings:Array.isArray(e.earnings)?e.earnings:[],payouts:Array.isArray(e.payouts)?e.payouts:[]}}function rt(){const e=Za(d.creatorWallet);return d.creatorWallet!==e&&(d={...d,creatorWallet:e}),e}function Rn({category:e,gross:t,note:s,source:a="demo",at:i=Date.now()}){const n=kt[e]||kt.tips,l=_(Math.max(0,Number(t)||0)),o=_(l*.029+(l>0?.3:0)),p=_(Math.max(0,l-o)),c=_(p*n.creatorPct/100),u=_(p-c);return{id:"earn_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6),category:e,label:n.label,note:String(s||n.label).slice(0,120),gross:l,fees:o,net:p,creatorPct:n.creatorPct,dbsPct:n.dbsPct,creatorShare:c,dbsShare:u,source:a,at:i,payoutId:null}}function ol(){return{...kt}}function ds(){return rt()}function ei(e){const t=Rn(e),s=rt(),a={...s,available:_(s.available+t.creatorShare),earnings:[t,...s.earnings||[]]};return d={...d,creatorWallet:a},C(d),t}function Fn({force:e=!1}={}){const t=rt();if(!e&&(t.earnings||[]).length>0)return{skipped:!0,creatorWallet:t};const s=Date.now()-6*864e5,i=rl.map((o,p)=>Rn({category:o.category,gross:o.gross,note:o.note,source:"seed",at:s+p*36e5})).map((o,p)=>({...o,id:"earn_seed_"+p+"_"+o.category})),n=_(i.reduce((o,p)=>o+p.creatorShare,0)),l={...t,available:e?n:_(t.available+n),earnings:e?i:[...i,...t.earnings||[]],holds:e?0:t.holds,payouts:e?[]:t.payouts};return e&&(l.available=n,l.holds=0,l.payouts=[],l.earnings=i),d={...d,creatorWallet:l},C(d),{seeded:i.length,creatorWallet:l}}function ll({amount:e}={}){const t=rt(),s=(t.payouts||[]).find(h=>h.status==="pending");if(s)return{error:"pending_exists",pending:s};const a=_(t.available);if(a<t.threshold)return{error:"below_threshold",available:a,threshold:t.threshold};const i=e!=null?_(e):a;if(i<=0||i>a)return{error:"bad_amount"};const n=(t.earnings||[]).filter(h=>!h.payoutId).sort((h,f)=>h.at-f.at),l=[];let o=0;for(const h of n){const f=_(h.creatorShare);if(!(f<=0)&&!(_(o+f)>i)&&(l.push(h.id),o=_(o+f),o>=i))break}if(!l.length){const h=n.find(f=>_(f.creatorShare)>0);if(!h)return{error:"no_earnings"};if(_(h.creatorShare)>a)return{error:"bad_amount"};l.push(h.id),o=_(h.creatorShare)}const p=o,c={id:"po_"+Date.now().toString(36),amount:p,status:"pending",at:Date.now(),earningIds:l,note:"TEST MODE payout request · not real money"},u=(t.earnings||[]).map(h=>l.includes(h.id)?{...h,payoutId:c.id}:h),m={...t,available:_(a-p),holds:_(t.holds+p),earnings:u,payouts:[c,...t.payouts||[]]};return d={...d,creatorWallet:m},C(d),c}function cl(e,t){if(!["pending","completed","rejected"].includes(t))return{error:"bad_status"};const a=rt(),i=(a.payouts||[]).find(u=>u.id===e);if(!i)return{error:"missing"};if(i.status!=="pending"&&t!=="pending")return{error:"already_final",payout:i};let n=a.available,l=a.holds,o=a.earnings||[];if(i.status==="pending"&&t==="completed")l=_(Math.max(0,l-i.amount));else if(i.status==="pending"&&t==="rejected"){l=_(Math.max(0,l-i.amount)),n=_(n+i.amount);const u=new Set(i.earningIds||[]);o=o.map(m=>u.has(m.id)?{...m,payoutId:null}:m)}const p=a.payouts.map(u=>u.id===e?{...u,status:t,reviewedAt:Date.now()}:u),c={...a,available:n,holds:l,earnings:o,payouts:p};return d={...d,creatorWallet:c},C(d),p.find(u=>u.id===e)}function dl(e){const s={...rt(),verification:e?"demo_verified":"demo_unverified"};return d={...d,creatorWallet:s},C(d),s}function ti(){const e=rt(),t={};for(const s of Object.keys(kt))t[s]={category:s,label:kt[s].label,creatorPct:kt[s].creatorPct,dbsPct:kt[s].dbsPct,gross:0,fees:0,net:0,creatorShare:0,dbsShare:0,count:0};for(const s of e.earnings||[]){const a=t[s.category]||(t[s.category]={category:s.category,label:s.label||s.category,creatorPct:s.creatorPct,dbsPct:s.dbsPct,gross:0,fees:0,net:0,creatorShare:0,dbsShare:0,count:0});a.gross=_(a.gross+s.gross),a.fees=_(a.fees+s.fees),a.net=_(a.net+s.net),a.creatorShare=_(a.creatorShare+s.creatorShare),a.dbsShare=_(a.dbsShare+s.dbsShare),a.count+=1}return Object.values(t)}function Fs(e=5,t="Demo credit"){const s=d.wallet||{balance:0,history:[]},a=Number(s.balance||0)+Number(e),i=[...s.history||[],{at:Date.now(),amount:Number(e),note:t}];return d={...d,wallet:{balance:a,history:i}},C(d),d.wallet}function Gn(e,t="Demo spend"){const s=d.wallet||{balance:0,history:[]},a=Number(e);if(Number(s.balance||0)<a)return{error:"insufficient"};const i=Number(s.balance||0)-a,n=[...s.history||[],{at:Date.now(),amount:-a,note:t}];return d={...d,wallet:{balance:i,history:n}},C(d),d.wallet}function G(e,t){return String(e||"").toLowerCase().includes(t)}function pl(e){const t=String(e||"").trim().toLowerCase(),s={query:String(e||"").trim(),posts:[],profiles:[],music:[],videos:[],lives:[],products:[],pictures:[]};if(!t)return s;const a=(d.posts||[]).filter(h=>G(h.text,t)||G(h.username,t)),i=Object.values(d.profiles||{}).filter(h=>G(h.username,t)||G(h.bio,t));if(d.user){const h=d.user;(G(h.username,t)||G(h.bio,t))&&(i.find(f=>f.id===h.id)||i.push(h))}const n=(d.catalog||[]).filter(h=>h.published),l=n.filter(h=>(h.type==="song"||h.type==="album")&&(G(h.title,t)||G(h.artist,t)||G(h.type,t))),o=n.filter(h=>h.type==="video"&&(G(h.title,t)||G(h.artist,t)||G("video",t))),p=n.filter(h=>h.type==="picture"&&(G(h.title,t)||G(h.artist,t)||G("picture",t))),c=[],u=d.live;u&&!u.endedAt&&(G(u.title,t)||G(u.hostName,t)||G("live",t))&&c.push({...u,status:"live"}),(d.liveHistory||[]).forEach(h=>{(G(h.title,t)||G(h.hostName,t)||G("live",t))&&c.push({...h,status:"ended"})});const m=(d.listings||[]).filter(h=>h.active!==!1&&(G(h.title,t)||G(h.brand,t)||G(h.blurb,t)||G("marketplace",t)||G("product",t)));return{query:String(e||"").trim(),posts:a,profiles:i,music:l,videos:o,lives:c,products:m,pictures:p}}function ul(e=8){const t=d.likes||{},s=(d.posts||[]).map(o=>({kind:"post",id:o.id,title:(o.text||"").slice(0,72)||"Post",subtitle:"@"+(o.username||"creator"),href:"#/posts",score:(t[o.id]||[]).length,image:o.image||""})).sort((o,p)=>p.score-o.score||(p.id>o.id?1:-1)),a=[{kind:"music",id:"trend_music",title:"Long Story Short",subtitle:"Coming Soon · Music",href:"#/music",score:3,image:"/music/01_Long_Story_Short_Coming_Soon.jpg"},{kind:"video",id:"trend_video",title:"Dirty Money ft. Lil Baby",subtitle:"Official MV",href:"#/videos",score:3,image:""},{kind:"live",id:"trend_live",title:"Go live on DBS",subtitle:"Creators · Live",href:"#/live",score:2,image:""},{kind:"market",id:"trend_mkt",title:"Sponsored Marketplace",subtitle:"Brand ads · demo",href:"#/marketplace",score:2,image:""},{kind:"spotlight",id:"trend_spot",title:"24/7 Spotlight",subtitle:"Stage · Discover",href:"#/spotlight",score:1,image:""}],i=d.live;return i&&!i.endedAt&&a.unshift({kind:"live",id:"trend_live_now",title:i.title||"Live now",subtitle:"@"+(i.hostName||"creator")+" · LIVE",href:"#/live",score:99,image:""}),(d.catalog||[]).filter(o=>o.published).slice(0,3).forEach(o=>{const p=o.type==="video"?"#/videos":o.type==="picture"?"#/home":"#/music";a.push({kind:o.type,id:"trend_cat_"+o.id,title:o.title,subtitle:(o.artist||"Admin")+" · From Admin",href:p,score:4,image:o.coverRef&&!String(o.coverRef).startsWith("idb:")?o.coverRef:""})}),[...s,...a].sort((o,p)=>p.score-o.score).slice(0,e)}function ml(){const e=Object.values(d.profiles||{}).map(t=>({id:t.id,username:t.username,bio:t.bio||"",avatar:t.avatar||"",verified:!!t.verified,followers:(t.followers||[]).length}));return d.user&&!e.find(t=>t.id===d.user.id)&&e.push({id:d.user.id,username:d.user.username,bio:d.user.bio||"",avatar:d.user.avatar||"",verified:!!d.user.verified,followers:(d.user.followers||[]).length}),e.sort((t,s)=>s.followers-t.followers||t.username.localeCompare(s.username))}const Kn=6e4,fa=10;function Vn(e=Date.now()){const t=new Date(e);return t.setHours(23,59,59,999),t.getTime()}function gl(e=Date.now()){const t=new Date(e);return t.setHours(0,0,0,0),t.getTime()}const Un=[{id:"fan_maya",name:"MayaBeats",bio:"Demo fan · mutual"},{id:"fan_jay",name:"FanJay",bio:"Demo fan · sandbox opponent"}];function ue(){return d.giftBattles||{active:null,history:[],champions:[],prefs:{invitationsEnabled:!0}}}function Et(e){return d={...d,giftBattles:e},C(d),e}function si(e,t=Date.now()){if(!e||e.status!=="active"||t<(e.endsAt||0))return e;const s=Number(e.scoreA||0),a=Number(e.scoreB||0);let i="tie",n=null,l=null;return s>a?(i="win",n=e.challenger.id,l=e.challenger.name):a>s&&(i="win",n=e.opponent.id,l=e.opponent.name),{...e,status:"ended",endedAt:t,result:i,winnerId:n,winnerName:l,scoreA:s,scoreB:a,championUntil:n?Vn(t):null}}function zn(){return Un.map(e=>({...e}))}function ai(){return{invitationsEnabled:!0,...ue().prefs||{}}}function hl(e={}){const t=ue(),s={...t.prefs,...e};return Et({...t,prefs:s})}function ii(){let t=ue().active;if(!t)return null;if(t.status==="active"){const s=si(t);if(s!==t&&s.status==="ended")return ni(s);t=s}return t}function ni(e){const t=ue(),s=[e,...(t.history||[]).filter(i=>i.id!==e.id)].slice(0,40);let a=t.champions||[];return e.winnerId&&(a=[{battleId:e.id,userId:e.winnerId,username:e.winnerName,score:e.winnerId===e.challenger.id?e.scoreA:e.scoreB,opponentScore:e.winnerId===e.challenger.id?e.scoreB:e.scoreA,endedAt:e.endedAt,championUntil:e.championUntil,mode:e.mode},...a.filter(n=>n.battleId!==e.id)].slice(0,30)),Et({...t,active:e,history:s,champions:a}),e}function fl({opponentId:e,opponentName:t,mode:s}={}){const a=d.user;if(!a)return{error:"signin"};if(!ai().invitationsEnabled)return{error:"invites_disabled"};const n=d.live&&!d.live.endedAt,l=s||(n?"live":"sandbox");if(l==="live"&&!n)return{error:"not_live"};const o=ue(),p=o.active;if(p&&(p.status==="pending"||p.status==="active"))return{error:"battle_in_progress",battle:p};const c=Un.find(h=>h.id===e),u={id:e||(c==null?void 0:c.id)||"fan_maya",name:t||(c==null?void 0:c.name)||"MayaBeats"};if(u.id===a.id)return{error:"self"};const m={id:"gb_"+Date.now().toString(36),status:"pending",mode:l,liveId:n?d.live.id:null,liveTitle:n?d.live.title:null,challenger:{id:a.id,name:a.username},opponent:u,createdAt:Date.now(),startedAt:null,endsAt:null,durationMs:Kn,scoreA:0,scoreB:0,giftLog:[],result:null,winnerId:null,winnerName:null,endedAt:null,championUntil:null};return Et({...o,active:m}),{battle:m}}function vl(){const e=ue(),t=e.active;if(!t||t.status!=="pending")return{error:"no_pending"};if(!ai().invitationsEnabled)return{error:"invites_disabled"};const s=Date.now(),a={...t,status:"active",startedAt:s,endsAt:s+(t.durationMs||Kn),scoreA:0,scoreB:0};return Et({...e,active:a}),{battle:a}}function bl(){const e=ue(),t=e.active;if(!t||t.status!=="pending")return{error:"no_pending"};const s={...t,status:"declined",endedAt:Date.now(),result:"declined"},a=[s,...e.history||[]].slice(0,40);return Et({...e,active:null,history:a}),{battle:s}}function yl(){const e=ue(),t=e.active;return t&&(t.status==="pending"||t.status==="active")?{error:"still_running",battle:t}:(Et({...e,active:null}),{ok:!0})}function kl(e=Date.now()){const t=d.liveGbChallengePop;return t?t.expiresAt&&e>t.expiresAt?(d={...d,liveGbChallengePop:null},C(d),null):!d.live||d.live.endedAt||t.liveId&&t.liveId!==d.live.id?null:{...t}:null}function wl({side:e="challenger",kind:t="gift",amount:s=2,label:a=""}={}){var k;if(!d.user)return{error:"signin"};let n=ii();if(!n||n.status!=="active")return{error:"no_active"};if(n=ue().active,!n||n.status!=="active")return{error:"ended"};const l=Math.max(.5,Number(s)||1),o=t==="tip"?"tip":"gift",p=e==="opponent",c=p?n.opponent:n.challenger;let u=null;if(n.mode==="live"&&!p){if(u=Dn({kind:o,amount:l,label:a||(o==="gift"?"🔥 Fire":"Tip")}),u!=null&&u.error)return u}else(((k=d.wallet)==null?void 0:k.balance)||0)>=l&&Gn(l,`Gift battle ${o} · ${c.name} · TEST MODE`);const m={id:"gbg_"+Date.now().toString(36),side:p?"opponent":"challenger",userId:c.id,username:c.name,kind:o,amount:l,label:(a||(o==="gift"?"🔥 Fire":"Tip")).slice(0,40),at:Date.now()},h=Number(n.scoreA||0)+(p?0:l),f=Number(n.scoreB||0)+(p?l:0);let b={...n,scoreA:+h.toFixed(2),scoreB:+f.toFixed(2),giftLog:[...n.giftLog||[],m]};return b=si(b),b.status==="ended"?ni(b):Et({...ue(),active:b}),{battle:b,entry:m,live:(u==null?void 0:u.live)||null,wallet:d.wallet}}function ri(){const t=ue().active;if(!t||t.status!=="active")return t;const s=si(t);return s.status==="ended"&&t.status!=="ended"?ni(s):s}function Sl(e=20){return(ue().history||[]).slice(0,e)}function $l(e=Date.now()){const t=ue(),s=t.active;return s&&s.status==="ended"&&s.winnerId&&s.championUntil&&e<s.championUntil?{battleId:s.id,userId:s.winnerId,username:s.winnerName,score:s.winnerId===s.challenger.id?s.scoreA:s.scoreB,endedAt:s.endedAt,championUntil:s.championUntil,mode:s.mode}:(t.champions||[]).find(i=>i.championUntil&&e<i.championUntil)||null}function xl(e=15){var s;const t={};for(const a of ue().history||[]){if(a.result!=="win"||!a.winnerId)continue;const i=t[a.winnerId]||{userId:a.winnerId,username:a.winnerName,wins:0,points:0};i.wins+=1;const n=a.winnerId===((s=a.challenger)==null?void 0:s.id)?Number(a.scoreA||0):Number(a.scoreB||0);i.points=+(i.points+n).toFixed(2),i.username=a.winnerName||i.username,t[a.winnerId]=i}return Object.values(t).sort((a,i)=>i.wins-a.wins||i.points-a.points||a.username.localeCompare(i.username)).slice(0,e)}function oi(e=fa,t=Date.now()){var p;const s=Math.min(Math.max(1,Number(e)||fa),fa),a=gl(t),i=Vn(t),n=new Set,l=[],o=c=>{if(!(c!=null&&c.userId)||!(c!=null&&c.username)||n.has(c.userId))return;const u=Number(c.endedAt||0);u<a||u>i||c.championUntil&&t>c.championUntil||(n.add(c.userId),l.push({userId:c.userId,username:c.username,score:Number(c.score||0),endedAt:u,championUntil:c.championUntil||i,battleId:c.battleId||c.id||null,mode:c.mode||"demo"}))};for(const c of ue().champions||[])if(o(c),l.length>=s)return l;for(const c of ue().history||[])if(!(c.result!=="win"||!c.winnerId)&&(o({userId:c.winnerId,username:c.winnerName,score:c.winnerId===((p=c.challenger)==null?void 0:p.id)?c.scoreA:c.scoreB,endedAt:c.endedAt,championUntil:c.championUntil||i,battleId:c.id,mode:c.mode}),l.length>=s))break;return l}const li=4,_a=[{id:"maya",username:"MayaBeats",bio:"Creator · beats & live demos"},{id:"fanjay",username:"FanJay",bio:"Day-one fan · playlist curator"},{id:"ria",username:"RiaLoops",bio:"Demo co-host · loops & hooks"},{id:"dez",username:"DezOnMic",bio:"Demo guest · freestyle nights"}];function Te(){return d.multiGuest||{active:null,history:[]}}function Fe(e){return d={...d,multiGuest:e},C(d),e}function vs(e,t){const s=[e,...t],a=s.length||1,i=Math.floor(100/a*100)/100,n={};let l=0;return s.forEach((o,p)=>{p===s.length-1?n[o]=+(100-l).toFixed(2):(n[o]=i,l=+(l+i).toFixed(2))}),n}function aa(){fs();const e={...d.profiles||{}};let t=!1;for(const s of _a)e[s.id]||(e[s.id]={id:s.id,username:s.username,bio:s.bio,avatar:"",followers:[],following:["dbs"],verified:!1},t=!0);return t&&(d={...d,profiles:e},C(d)),_a.map(s=>{const a=d.profiles[s.id]||s;return{id:s.id,username:a.username||s.username,bio:a.bio||s.bio,followers:(a.followers||[]).length}})}function El(){return aa()}function ps(){return Te().active||null}function Al(e=20){return(Te().history||[]).slice(0,e)}function Cl(e){const t=d.user;if(!t)return{error:"signin"};const s=Te();if(s.active&&!s.active.endedAt)return{error:"session_in_progress",session:s.active};const a=String(e||"").trim().slice(0,80)||"Multi-Guest Live";aa();const i={id:"mg_"+Date.now().toString(36),title:a,hostId:t.id,hostName:t.username,startedAt:Date.now(),endedAt:null,maxGuests:li,guests:[],chat:[{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:"Multi-guest session started · TEST MODE · no camera / WebRTC",at:Date.now(),system:!0}],giftSplit:{mode:"equal",shares:{[t.id]:100},disclosed:!1,disclosedAt:null},broadcastReady:!1};return Fe({...s,active:i}),{session:i}}function Tl(e){var h;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};aa();const i=_a.find(f=>f.id===e),n=(h=d.profiles)==null?void 0:h[e];if(!i&&!n)return{error:"unknown_guest"};if(e===t.id||e===a.hostId)return{error:"self"};const l=(a.guests||[]).find(f=>f.id===e);if(l&&(l.status==="invited"||l.status==="joined"))return{error:"already_invited",session:a};if((a.guests||[]).filter(f=>f.status==="joined"||f.status==="invited").length>=(a.maxGuests||li))return{error:"full"};const p={id:e,username:(n==null?void 0:n.username)||(i==null?void 0:i.username)||e,status:"invited",muted:!1,invitedAt:Date.now(),joinedAt:null},c=[...(a.guests||[]).filter(f=>f.id!==e),p],u=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`Invited @${p.username} to the stage`,at:Date.now(),system:!0}].slice(-80),m={...a,guests:c,chat:u,broadcastReady:!1};return m.giftSplit={...m.giftSplit,disclosed:!1,disclosedAt:null,shares:vs(a.hostId,c.filter(f=>f.status==="joined").map(f=>f.id))},Fe({...s,active:m}),{session:m,guest:p}}function Dl(e){var u;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(m=>({...m})),n=i.findIndex(m=>m.id===e);if(n<0)return{error:"not_found"};if(i[n].status==="joined")return{session:a,guest:i[n]};if(i.filter(m=>m.status==="joined").length>=(a.maxGuests||li))return{error:"full"};i[n]={...i[n],status:"joined",joinedAt:Date.now(),muted:!1};const o=i.filter(m=>m.status==="joined").map(m=>m.id),p=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${i[n].username} joined the stage`,at:Date.now(),system:!0}].slice(-80),c={...a,guests:i,chat:p,broadcastReady:!1,giftSplit:{mode:((u=a.giftSplit)==null?void 0:u.mode)||"equal",shares:vs(a.hostId,o),disclosed:!1,disclosedAt:null}};return Fe({...s,active:c}),{session:c,guest:i[n]}}function Ml(e){var p;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(c=>c.id===e?{...c,status:"declined"}:c);if(!(a.guests||[]).some(c=>c.id===e))return{error:"not_found"};const n=((p=(a.guests||[]).find(c=>c.id===e))==null?void 0:p.username)||e,l=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${n} declined the invite`,at:Date.now(),system:!0}].slice(-80),o={...a,guests:i,chat:l};return Fe({...s,active:o}),{session:o}}function Ll(e){var c,u;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id&&t.id!==e)return{error:"forbidden"};const i=(a.guests||[]).map(m=>m.id===e?{...m,status:"left",muted:!1}:m);if(!(a.guests||[]).some(m=>m.id===e))return{error:"not_found"};const n=((c=(a.guests||[]).find(m=>m.id===e))==null?void 0:c.username)||e,l=i.filter(m=>m.status==="joined").map(m=>m.id),o=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${n} left the stage`,at:Date.now(),system:!0}].slice(-80),p={...a,guests:i,chat:o,broadcastReady:!1,giftSplit:{mode:((u=a.giftSplit)==null?void 0:u.mode)||"equal",shares:vs(a.hostId,l),disclosed:!1,disclosedAt:null}};return Fe({...s,active:p}),{session:p}}function Pl(e){var c,u;const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(m=>m.id===e?{...m,status:"removed",muted:!1}:m);if(!(a.guests||[]).some(m=>m.id===e))return{error:"not_found"};const n=((c=(a.guests||[]).find(m=>m.id===e))==null?void 0:c.username)||e,l=i.filter(m=>m.status==="joined").map(m=>m.id),o=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`Host removed @${n} from the stage`,at:Date.now(),system:!0}].slice(-80),p={...a,guests:i,chat:o,broadcastReady:!1,giftSplit:{mode:((u=a.giftSplit)==null?void 0:u.mode)||"equal",shares:vs(a.hostId,l),disclosed:!1,disclosedAt:null}};return Fe({...s,active:p}),{session:p}}function Il(e,t=!0){var c;const s=d.user;if(!s)return{error:"signin"};const a=Te(),i=a.active;if(!i||i.endedAt)return{error:"no_session"};if(i.hostId!==s.id)return{error:"host_only"};const n=(i.guests||[]).map(u=>u.id===e&&u.status==="joined"?{...u,muted:!!t}:u);if(!(i.guests||[]).some(u=>u.id===e&&u.status==="joined"))return{error:"not_joined"};const l=((c=(i.guests||[]).find(u=>u.id===e))==null?void 0:c.username)||e,o=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:t?`Host muted @${l}`:`Host unmuted @${l}`,at:Date.now(),system:!0}].slice(-80),p={...i,guests:n,chat:o};return Fe({...a,active:p}),{session:p}}function _l(e){const t=d.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};const i=String(e||"").trim().slice(0,280);if(!i)return{error:"empty"};const n={id:"c_"+Date.now().toString(36),userId:t.id,username:t.username,text:i,at:Date.now()},l=[...a.chat||[],n].slice(-80),o={...a,chat:l};return Fe({...s,active:o}),{session:o,message:n}}function Zt({mode:e="equal",shares:t=null,disclose:s=!1}={}){var h,f;const a=d.user;if(!a)return{error:"signin"};const i=Te(),n=i.active;if(!n||n.endedAt)return{error:"no_session"};if(n.hostId!==a.id)return{error:"host_only"};const l=(n.guests||[]).filter(b=>b.status==="joined").map(b=>b.id),o=[n.hostId,...l];let p,c=e==="custom"?"custom":"equal";if(c==="equal")p=vs(n.hostId,l);else{p={};let b=0;for(const k of o){const v=Math.max(0,Number(t==null?void 0:t[k])||0);p[k]=+v.toFixed(2),b+=p[k]}if(b=+b.toFixed(2),Math.abs(b-100)>.05)return{error:"split_total",total:b,expected:100}}const u={mode:c,shares:p,disclosed:!!s||!!((h=n.giftSplit)!=null&&h.disclosed),disclosedAt:s?Date.now():((f=n.giftSplit)==null?void 0:f.disclosedAt)||null};s&&(u.disclosed=!0),s&&(u.disclosedAt=Date.now());const m={...n,giftSplit:u,broadcastReady:!!u.disclosed};return Fe({...i,active:m}),{session:m}}function ql(){var e,t,s,a;return Zt({mode:((t=(e=ps())==null?void 0:e.giftSplit)==null?void 0:t.mode)||"equal",shares:((a=(s=ps())==null?void 0:s.giftSplit)==null?void 0:a.shares)||null,disclose:!0})}function Bl(){const e=d.user;if(!e)return{error:"signin"};const t=Te(),s=t.active;if(!s||s.endedAt)return{error:"no_session"};if(s.hostId!==e.id)return{error:"host_only"};const a={...s,endedAt:Date.now(),broadcastReady:!1},i=[a,...(t.history||[]).filter(n=>n.id!==a.id)].slice(0,20);return Fe({active:null,history:i}),{session:a}}const Hn=["song","album","video","live","app","interview"],ci=["draft","active","paused","ended"];function At(e){if(!e||typeof e!="object")return null;const t=e.fundSource==="third_party"?"third_party":"dbs",s=Hn.includes(e.promoteType)?e.promoteType:"app",a=ci.includes(e.status)?e.status:"draft",i=Number(e.deadline)||0;return{id:String(e.id||""),title:String(e.title||"").slice(0,120),promoteType:s,budget:Math.max(0,Number(e.budget)||0),deadline:i,fundSource:t,managementFeePct:t==="third_party"?20:0,reward:String(e.reward||"").slice(0,200),status:a,participants:Array.isArray(e.participants)?e.participants:[],submissions:Array.isArray(e.submissions)?e.submissions:[],createdAt:Number(e.createdAt)||Date.now(),createdBy:e.createdBy||null}}function jt(e){d={...d,missions:e},C(d)}function ia({status:e=null}={}){const t=(d.missions||[]).map(At).filter(Boolean);if(!e)return t;const s=Array.isArray(e)?e:[e];return t.filter(a=>s.includes(a.status))}function Ol(e){return ia().find(t=>t.id===e)||null}function Nl(e={}){var o;const t=String(e.title||"").trim().slice(0,120);if(!t)return{error:"required"};const s=Hn.includes(e.promoteType)?e.promoteType:"app",a=e.fundSource==="third_party"?"third_party":"dbs";let i=e.deadline;if(typeof i=="string"&&i){const p=Date.parse(i);i=Number.isFinite(p)?p:Date.now()+7*864e5}else i=Number(i)||Date.now()+7*864e5;const n=ci.includes(e.status)?e.status:"active",l=At({id:"msn_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),title:t,promoteType:s,budget:Number(e.budget)||0,deadline:i,fundSource:a,reward:String(e.reward||"").trim().slice(0,200)||"Demo reward · TEST MODE",status:n,participants:[],submissions:[],createdAt:Date.now(),createdBy:((o=d.user)==null?void 0:o.id)||"demo_admin"});return jt([l,...d.missions||[]]),l}function jl(e,t){if(!ci.includes(t))return{error:"bad_status"};let s=null;const a=(d.missions||[]).map(i=>{const n=At(i);return!n||n.id!==e?i:(s={...n,status:t},s)});return s?(jt(a),s):{error:"not_found"}}function Rl(e){const t=d.user;if(!t)return{error:"signin"};let s=null;const a=(d.missions||[]).map(i=>{const n=At(i);if(!n||n.id!==e)return i;if(n.status!=="active")return s={error:"not_active",mission:n},i;if((n.participants||[]).some(p=>p.userId===t.id))return s={error:"already_joined",mission:n},i;const o={userId:t.id,username:t.username||"creator",joinedAt:Date.now(),score:0,referralCode:"REF-"+t.id.slice(0,6).toUpperCase()+"-"+Math.random().toString(36).slice(2,5).toUpperCase()};return s={...n,participants:[...n.participants||[],o]},s});return s?(s.error||jt(a),s):{error:"not_found"}}function Fl(e,{proof:t=""}={}){const s=d.user;if(!s)return{error:"signin"};const a=String(t||"").trim().slice(0,400);if(!a)return{error:"required"};let i=null;const n=(d.missions||[]).map(l=>{const o=At(l);if(!o||o.id!==e)return l;if(o.status!=="active")return i={error:"not_active",mission:o},l;if(!(o.participants||[]).some(m=>m.userId===s.id))return i={error:"not_joined",mission:o},l;const c={id:"sub_"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),userId:s.id,username:s.username||"creator",proof:a,at:Date.now(),status:"pending"},u=(o.participants||[]).map(m=>m.userId===s.id?{...m,score:(Number(m.score)||0)+10}:m);return i={...o,participants:u,submissions:[c,...o.submissions||[]]},i});return i?(i.error||jt(n),i):{error:"not_found"}}function Gl(e,t=5){const s=d.user;if(!s)return{error:"signin"};const a=Math.max(1,Math.min(50,Number(t)||5));let i=null;const n=(d.missions||[]).map(l=>{const o=At(l);if(!o||o.id!==e)return l;if(!(o.participants||[]).some(u=>u.userId===s.id))return i={error:"not_joined",mission:o},l;const c=(o.participants||[]).map(u=>u.userId===s.id?{...u,score:(Number(u.score)||0)+a}:u);return i={...o,participants:c},i});return i?(i.error||jt(n),i):{error:"not_found"}}function Kl(e){const t=Ol(e);return t?[...t.participants||[]].map(s=>({userId:s.userId,username:s.username,score:Number(s.score)||0,referralCode:s.referralCode||"",joinedAt:s.joinedAt,submissions:(t.submissions||[]).filter(a=>a.userId===s.userId).length})).sort((s,a)=>a.score-s.score||(s.joinedAt||0)-(a.joinedAt||0)):[]}function Vl({force:e=!1}={}){if((d.missions||[]).length&&!e)return{skipped:!0,missions:ia()};const s=Date.now(),a=864e5,i=[{id:"msn_demo_song",title:"Push Long Story Short (clip challenge)",promoteType:"song",budget:2500,deadline:s+14*a,fundSource:"dbs",reward:"$50–$200 demo credits by rank · DBS-funded marketing",status:"active",participants:[{userId:"clipper_demo",username:"ClipQueen",joinedAt:s-2*a,score:42,referralCode:"REF-CLIP-AAA"},{userId:"dbs",username:"DatBoiSkeet",joinedAt:s-a,score:28,referralCode:"REF-DBS-001"}],submissions:[{id:"sub_demo1",userId:"clipper_demo",username:"ClipQueen",proof:"https://example.com/tiktok/lss-clip-1 · 12k views",at:s-a,status:"pending"}],createdAt:s-3*a,createdBy:"demo_admin"},{id:"msn_demo_live",title:"Boost Friday Night Live",promoteType:"live",budget:800,deadline:s+5*a,fundSource:"third_party",reward:"Share of $800 pot after 20% management fee",status:"active",participants:[],submissions:[],createdAt:s-a,createdBy:"demo_admin"},{id:"msn_demo_app",title:"Download DBS · invite 3 friends",promoteType:"app",budget:1200,deadline:s+30*a,fundSource:"dbs",reward:"Referral bonus stack · verified installs only",status:"active",participants:[],submissions:[],createdAt:s-5*a,createdBy:"demo_admin"},{id:"msn_demo_ended",title:"Ladies Only teaser push (ended)",promoteType:"video",budget:500,deadline:s-2*a,fundSource:"third_party",reward:"Completed · demo archive",status:"ended",participants:[{userId:"clipper_demo",username:"ClipQueen",joinedAt:s-10*a,score:90,referralCode:"REF-CLIP-OLD"}],submissions:[],createdAt:s-20*a,createdBy:"demo_admin"}].map(At);return jt(i),{seeded:i.length,missions:i}}const Wn=60*1e3,di=60*1e3,us=2,na=3,ra=3,bs=3,Ul=["song","beat","music_video"],zl=[...Ul,"freestyle"];function Yn(){const e=d.spotlight||{};return{nowPlaying:e.nowPlaying||null,queue:Array.isArray(e.queue)?e.queue:[],history:Array.isArray(e.history)?e.history:[],houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0}}function pe(e){return d={...d,spotlight:e},C(d),e}function Hl(e){return e==="freestyle"?"Live Freestyle":e==="beat"?"Beat":e==="music_video"?"Music Video":"Song"}function qa(e,t="ended"){return e?{id:e.id,userId:e.userId,username:e.username,type:e.type,title:e.title,artist:e.artist,startedAt:e.startedAt,endedAt:Date.now(),extensions:e.extensions||0,playCount:e.playCount||1,reason:t}:null}function oe(e=Date.now()){let t=Yn(),s=t.nowPlaying;if(!s)return Wl(t,e);if(s.house)return t;if(s.type==="freestyle"&&s.endsAt&&e>=s.endsAt&&!s.awaitingPlayAnother){if(Object.keys(s.keepGoingVotes||{}).length>=na&&(s.extensions||0)<us&&!s.extensionApplied){s={...s,extensions:(s.extensions||0)+1,endsAt:e+di,keepGoingVotes:{},extensionApplied:!1,voteWindowOpen:!0};const u={...t,nowPlaying:s};return pe(u),u}const n=[qa(s,"timer"),...t.history||[]].slice(0,30),l=[...t.queue||[]];let o=null,p=typeof t.houseIndex=="number"?t.houseIndex:0;if(l.length){const u=l.shift();o=Gs(u,e)}else o=Ks($t(p),e);const c={nowPlaying:o,queue:l,history:n,houseIndex:p};return pe(c),c}if(s.awaitingPlayAnother&&s.playAnotherDeadline&&e>=s.playAnotherDeadline){const a=Object.keys(s.playAnotherVotes||{}).length,i=s.playCount||1;if(a>=ra&&i<bs){s={...s,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:i+1,title:s.nextTitle||s.title,startedAt:e,endsAt:null,nextTitle:null};const u={...t,nowPlaying:s};return pe(u),u}const n=[qa(s,"play_another_fail"),...t.history||[]].slice(0,30),l=[...t.queue||[]];let o=null,p=typeof t.houseIndex=="number"?t.houseIndex:0;l.length?o=Gs(l.shift(),e):o=Ks($t(p),e);const c={nowPlaying:o,queue:l,history:n,houseIndex:p};return pe(c),c}return t}function Gs(e,t=Date.now()){const s=e.type==="freestyle";return{id:"sp_"+t.toString(36)+"_"+Math.random().toString(36).slice(2,6),userId:e.userId,username:e.username,type:e.type,title:e.title||(s?"Live Freestyle":"Untitled"),artist:e.artist||e.username,cover:e.cover||"",startedAt:t,endsAt:s?t+Wn:null,extensions:0,playCount:1,keepGoingVotes:{},playAnotherVotes:{},voteWindowOpen:s,awaitingPlayAnother:!1,playAnotherDeadline:null,reactions:{fire:0,heart:0,clap:0},chat:[{id:"c_"+t.toString(36),userId:"system",username:"DBS",text:`${e.username} took the Spotlight · ${Hl(e.type)} · TEST MODE`,at:t,system:!0}]}}function ne(){const e=oe();return{nowPlaying:e.nowPlaying||null,queue:[...e.queue||[]],history:[...e.history||[]],houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0,thresholds:{keepGoing:na,playAnother:ra,maxExtensions:us,maxUploadStreak:bs,freestyleMs:Wn}}}function Qn(){const e=[];for(const s of ye||[])!s||!s.embed||(s.category==="Music Videos"?e.push({id:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube||"",kind:"music_video",chipLabel:"House · Music Video",note:"DatBoiSkeet catalog · original YouTube · not a live act",cover:s.cover||""}):s.category==="Interviews"&&e.push({id:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube||"",kind:"interview",chipLabel:"House · Interview",note:"DatBoiSkeet interview · original YouTube · not a live act",cover:s.cover||""}));const t=(Ma||[]).find(s=>s.id==="pl-vlogs");if(t&&t.youtube){const s=String(t.youtube).match(/[?&]list=([^&]+)/),a=s&&s[1];a&&e.push({id:"house-bts-vlogs",title:t.title||"DatBoiSkeet Vlogs",artist:"DatBoiSkeet",embed:"https://www.youtube.com/embed/videoseries?list="+a,youtube:t.youtube,kind:"bts",chipLabel:"House · BTS",note:"Channel vlogs · dedicated BTS clips thin · original YouTube · not a live act",cover:""})}return e}function Xn(){const e=Qn().length;return e>0?e:1}function $t(e){const t=Qn();if(!t.length)return{id:"house_empty",title:"DatBoiSkeet catalog",artist:"DatBoiSkeet",embed:"",youtube:"https://www.youtube.com/@DatBoiSkeet1",kind:"music_video",chipLabel:"House · Music Video",note:"Catalog loading · not a live act",cover:"",status:"House rotation"};const s=(e%t.length+t.length)%t.length;return{...t[s],status:t[s].chipLabel}}function Ks(e,t=Date.now()){return{id:"house_"+(e.id||"x")+"_"+t.toString(36),userId:"dbs",username:"DatBoiSkeet",type:"music_video",house:!0,houseKind:e.kind||"music_video",chipLabel:e.chipLabel||"House · Music Video",title:e.title,artist:e.artist||"DatBoiSkeet",embed:e.embed||"",youtube:e.youtube||"",note:e.note||"House catalog · not a live act",cover:e.cover||"",startedAt:t,endsAt:null,extensions:0,playCount:1,keepGoingVotes:{},playAnotherVotes:{},voteWindowOpen:!1,awaitingPlayAnother:!1,playAnotherDeadline:null,reactions:{fire:0,heart:0,clap:0},chat:[{id:"c_house_"+t.toString(36),userId:"system",username:"DBS",text:`House catalog · ${e.chipLabel||"House"} · ${e.title} · not a live act · TEST MODE`,at:t,system:!0}]}}function Wl(e,t=Date.now()){if(e.nowPlaying)return e;const s=typeof e.houseIndex=="number"?e.houseIndex:0,a=$t(s),i=Ks(a,t),n={...e,nowPlaying:i,houseIndex:s};return pe(n),n}function Jn(){const e=Yn();return $t(typeof e.houseIndex=="number"?e.houseIndex:0)}function Yl({type:e="song",title:t="",artist:s=""}={}){const a=d.user;if(!a)return{error:"signin"};const i=zl.includes(e)?e:"song",n=oe(),l=a.id,o=(n.queue||[]).some(k=>k.userId===l),p=n.nowPlaying&&!n.nowPlaying.house&&n.nowPlaying.userId===l&&!n.nowPlaying.awaitingPlayAnother;if(o||p)return{error:"already_queued",state:ne()};const c=String(t||"").trim().slice(0,80)||(i==="freestyle"?"Live Freestyle":i==="beat"?"Untitled Beat":i==="music_video"?"Untitled MV":"Untitled Song"),u=String(s||a.username||"").trim().slice(0,60),m={id:"q_"+Date.now().toString(36),userId:l,username:a.username,type:i,title:c,artist:u,cover:"",joinedAt:Date.now()};let h=n.nowPlaying,f=[...n.queue||[]],b=typeof n.houseIndex=="number"?n.houseIndex:0;return h?(h.house,f.push(m)):(h=Gs(m),f=[]),pe({...n,nowPlaying:h,queue:f,houseIndex:b}),{ok:!0,state:ne()}}function _i(){const e=d.user;if(!e)return{error:"signin"};const t=oe(),s=(t.queue||[]).length,a=(t.queue||[]).filter(i=>i.userId!==e.id);return a.length===s?{error:"not_in_queue"}:(pe({...t,queue:a}),{ok:!0,state:ne()})}function Ql(e){if(!d.user)return{error:"signin"};const s=oe(),a=(s.queue||[]).filter(i=>i.id!==e);return pe({...s,queue:a}),{ok:!0,state:ne()}}function Zn(e="advance"){if(!d.user)return{error:"signin"};const s=oe(),a=s.nowPlaying,i=!!(a&&a.house),n=a&&!i?[qa(a,e),...s.history||[]].slice(0,30):[...s.history||[]],l=[...s.queue||[]];let o=typeof s.houseIndex=="number"?s.houseIndex:0;i&&(o=(o+1)%Xn());let p=null;return l.length?p=Gs(l.shift()):p=Ks($t(o)),pe({nowPlaying:p,queue:l,history:n,houseIndex:o}),{ok:!0,state:ne()}}function Xl(){return Zn("skip")}function Jl(){const e=d.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s)return{error:"empty_stage"};if(s.house)return{error:"house_use_skip"};if(s.type==="freestyle")return{error:"freestyle_use_timer"};if(s.awaitingPlayAnother)return{error:"already_voting"};!(s.userId===e.id)&&ee();const i=s.playCount||1;if(i>=bs)return Zn("max_streak");const n={...s,awaitingPlayAnother:!0,playAnotherVotes:{},playAnotherDeadline:Date.now()+30*1e3,nextTitle:s.title+" (take "+(i+1)+")"};return pe({...t,nowPlaying:n}),{ok:!0,state:ne()}}function Zl(){const e=d.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s||s.type!=="freestyle")return{error:"no_freestyle"};if(!s.voteWindowOpen)return{error:"window_closed"};if(s.awaitingPlayAnother)return{error:"wrong_mode"};if((s.extensions||0)>=us)return{error:"max_extensions"};const a={...s.keepGoingVotes||{}};if(a[e.id])return{error:"already_voted",state:ne()};a[e.id]=Date.now();let i={...s,keepGoingVotes:a};const n=Object.keys(a).length;return n>=na&&(s.extensions||0)<us&&(i={...i,extensions:(s.extensions||0)+1,endsAt:Date.now()+di,keepGoingVotes:{},voteWindowOpen:!0}),pe({...t,nowPlaying:i}),{ok:!0,state:ne(),votes:Object.keys(i.keepGoingVotes||{}).length||n}}function ec(e=2){const t=oe(),s=t.nowPlaying;if(!s||s.type!=="freestyle")return{error:"no_freestyle"};const a={...s.keepGoingVotes||{}},i=Object.keys(a).length;for(let o=0;o<e;o++){const p="fan_sim_"+(i+o)+"_"+Date.now().toString(36);a[p]=Date.now()}let n={...s,keepGoingVotes:a};return Object.keys(a).length>=na&&(s.extensions||0)<us&&(n={...n,extensions:(s.extensions||0)+1,endsAt:Date.now()+di,keepGoingVotes:{},voteWindowOpen:!0}),pe({...t,nowPlaying:n}),{ok:!0,state:ne()}}function tc(){const e=d.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s||!s.awaitingPlayAnother)return{error:"no_vote"};const a={...s.playAnotherVotes||{}};if(a[e.id])return{error:"already_voted",state:ne()};a[e.id]=Date.now();let i={...s,playAnotherVotes:a};const n=Object.keys(a).length,l=s.playCount||1;return n>=ra&&l<bs&&(i={...i,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:l+1,title:s.nextTitle||s.title,startedAt:Date.now(),endsAt:null,nextTitle:null}),pe({...t,nowPlaying:i}),{ok:!0,state:ne()}}function sc(e=2){const t=oe(),s=t.nowPlaying;if(!s||!s.awaitingPlayAnother)return{error:"no_vote"};const a={...s.playAnotherVotes||{}},i=Object.keys(a).length;for(let p=0;p<e;p++)a["fan_pa_"+(i+p)+"_"+Date.now().toString(36)]=Date.now();let n={...s,playAnotherVotes:a};const l=Object.keys(a).length,o=s.playCount||1;return l>=ra&&o<bs&&(n={...n,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:o+1,title:s.nextTitle||s.title,startedAt:Date.now(),endsAt:null,nextTitle:null}),pe({...t,nowPlaying:n}),{ok:!0,state:ne()}}function ac(e="fire"){const t=oe(),s=t.nowPlaying;if(!s)return{error:"empty_stage"};const a=["fire","heart","clap"].includes(e)?e:"fire",i={...s.reactions||{fire:0,heart:0,clap:0}};return i[a]=(i[a]||0)+1,pe({...t,nowPlaying:{...s,reactions:i}}),{ok:!0,state:ne()}}function ic(e){const t=d.user;if(!t)return{error:"signin"};const s=String(e||"").trim().slice(0,200);if(!s)return{error:"empty"};const a=oe(),i=a.nowPlaying;if(!i)return{error:"empty_stage"};const n=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:t.id,username:t.username,text:s,at:Date.now()}].slice(-40);return pe({...a,nowPlaying:{...i,chat:n}}),{ok:!0,state:ne()}}function nc(e=20){return(oe().history||[]).slice(0,e)}function Ge(){const e=d.fanClubs||{clubs:[],posts:{},seeded:!1};return{clubs:Array.isArray(e.clubs)?e.clubs:[],posts:e.posts&&typeof e.posts=="object"?e.posts:{},seeded:!!e.seeded}}function Rt(e){d={...d,fanClubs:e},C(d)}function er(e){return e+"_"+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function tr(){return Ke(),Ge().clubs.slice().sort((e,t)=>e.official&&!t.official?-1:!e.official&&t.official?1:(t.memberCount||0)-(e.memberCount||0))}function ys(e){return Ke(),Ge().clubs.find(t=>t.id===e)||null}function Ke({force:e=!1}={}){const t=Ge();if(t.seeded&&!e&&t.clubs.length>0)return{skipped:!0,clubs:t.clubs};const s=Date.now(),a=864e5,i=[{id:"fc_official_dbs",name:"DatBoiSkeet Official",description:"Official DatBoiSkeet fan club inside DBS Lounge. Music drops, Vault tips, Foreign X-Change, and community rules — DBS branding first. Follow optional.",graphic:"/brand/logo-dbs-v3@2x.webp",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"public",official:!0,members:["dbs"],followers:["dbs"],mods:["dbs"],memberCount:1,createdAt:s-14*a},{id:"fc_lss_crew",name:"Long Story Short Crew",description:"Creator club for LSS listeners. Public lounge chat + Skeet+ members-only drop room.",graphic:"/music/01_Long_Story_Short_Coming_Soon.jpg",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"members",official:!1,members:["dbs"],followers:["dbs"],mods:["dbs"],memberCount:1,createdAt:s-7*a},{id:"fc_ladies_only",name:"Ladies Only Circle",description:"Paid / Skeet+ gated room demo for Ladies Only supporters. Unlock via membership TEST MODE.",graphic:"/music/02_Ladies_Only_Coming_Soon.jpg",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"paid",official:!1,members:["dbs"],followers:[],mods:["dbs"],memberCount:1,createdAt:s-3*a}],n={fc_official_dbs:[{id:"fcp_welcome",userId:"dbs",username:"DatBoiSkeet",text:"Welcome to the official club. Discover music on #/music · explore more on #/explore. No forced follows.",at:s-2*a,pinned:!0,removed:!1},{id:"fcp_lounge",userId:"dbs",username:"DatBoiSkeet",text:"DBS Lounge rooms stay music-first. Keep it respectful — see Community Guidelines.",at:s-a,pinned:!1,removed:!1}],fc_lss_crew:[{id:"fcp_lss1",userId:"dbs",username:"DatBoiSkeet",text:"LSS cover art is live in Coming Soon. Members can discuss theories here.",at:s-a,pinned:!1,removed:!1}],fc_ladies_only:[{id:"fcp_lo1",userId:"dbs",username:"DatBoiSkeet",text:"Skeet+ members-only preview chat. Join Skeet+ on Pricing (TEST MODE) to unlock.",at:s-12*36e5,pinned:!0,removed:!1}]};return Rt({clubs:i,posts:n,seeded:!0}),{seeded:i.length,clubs:i}}function rc({name:e,description:t,graphic:s,privacy:a="public"}={}){const i=d.user;if(!i)return{error:"signin"};ee()||i.role==="creator"||i.id;const n=String(e||"").trim().slice(0,48);if(!n)return{error:"name"};const l=["public","members","paid"].includes(a)?a:"public";Ke();const o=Ge(),p={id:er("fc"),name:n,description:String(t||"").trim().slice(0,280),graphic:String(s||"/brand/logo-dbs-v3@2x.webp").slice(0,200),hostId:i.id,hostName:i.username,privacy:l,official:!1,members:[i.id],followers:[i.id],mods:[i.id],memberCount:1,createdAt:Date.now()};return Rt({...o,clubs:[p,...o.clubs],posts:{...o.posts,[p.id]:[]},seeded:!0}),{ok:!0,club:p}}function oa(e,t){Ke();const s=Ge(),a=s.clubs.findIndex(l=>l.id===e);if(a<0)return{error:"missing"};const i=t({...s.clubs[a]});if(i&&i.error)return i;const n=s.clubs.slice();return n[a]=i,Rt({...s,clubs:n}),{ok:!0,club:i}}function sr(e){const t=d.user;return t?oa(e,s=>{const a=new Set(s.members||[]);return a.add(t.id),{...s,members:[...a],memberCount:a.size}}):{error:"signin"}}function oc(e){const t=d.user;return t?oa(e,s=>{if(s.hostId===t.id)return{error:"host"};const a=(s.members||[]).filter(i=>i!==t.id);return{...s,members:a,memberCount:a.length}}):{error:"signin"}}function lc(e){const t=d.user;return t?oa(e,s=>{const a=new Set(s.followers||[]);return a.add(t.id),{...s,followers:[...a]}}):{error:"signin"}}function cc(e){const t=d.user;return t?oa(e,s=>{const a=(s.followers||[]).filter(i=>i!==t.id);return{...s,followers:a}}):{error:"signin"}}function ar(e){const t=d.user;if(!t)return!1;const s=ys(e);return!!(s&&(s.members||[]).includes(t.id))}function dc(e){const t=d.user;if(!t)return!1;const s=ys(e);return!!(s&&(s.followers||[]).includes(t.id))}function ms(e){const t=d.user;if(!t)return!1;const s=ys(e);return s?ee()||s.hostId===t.id||(s.mods||[]).includes(t.id):!1}function ir(e){const t=ys(e);if(!t)return{ok:!1,reason:"missing"};if(t.privacy==="public")return{ok:!0,reason:"public"};if(t.privacy==="members")return ar(e)||ms(e)?{ok:!0,reason:"member"}:{ok:!1,reason:"members"};if(t.privacy==="paid"){const s=xt();return({null:0,"skeet+":1,backstage:2,inner:3}[s||"null"]||0)>=1||ms(e)?{ok:!0,reason:"paid"}:{ok:!1,reason:"paid"}}return{ok:!0,reason:"public"}}function pc(e){return Ke(),(Ge().posts[e]||[]).filter(s=>!s.removed).slice().sort((s,a)=>s.pinned&&!a.pinned?-1:!s.pinned&&a.pinned?1:(a.at||0)-(s.at||0))}function uc(e,t){const s=d.user;if(!s)return{error:"signin"};const a=ir(e);if(!a.ok)return{error:"gated",reason:a.reason};const i=String(t||"").trim().slice(0,500);if(!i)return{error:"empty"};const n=Ge();if(!n.clubs.some(p=>p.id===e))return{error:"missing"};const l={id:er("fcp"),userId:s.id,username:s.username,text:i,at:Date.now(),pinned:!1,removed:!1},o=[l,...n.posts[e]||[]].slice(0,100);return Rt({...n,posts:{...n.posts,[e]:o}}),{ok:!0,post:l}}function mc(e,t){if(!ms(e))return{error:"mod"};const s=Ge(),a=(s.posts[e]||[]).map(i=>i.id===t?{...i,pinned:!i.pinned}:i);return Rt({...s,posts:{...s.posts,[e]:a}}),{ok:!0}}function gc(e,t){if(!ms(e))return{error:"mod"};const s=Ge(),a=(s.posts[e]||[]).map(i=>i.id===t?{...i,removed:!0}:i);return Rt({...s,posts:{...s.posts,[e]:a}}),{ok:!0}}const pi=["instagram","tiktok","facebook","youtube","x","snapchat","other"],nr=[{id:"badge",minVerified:1,label:"Exclusive DBS badge",kind:"badge"},{id:"decoration",minVerified:2,label:"Premium avatar decoration",kind:"decoration"},{id:"skeet7",minVerified:3,label:"7 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:7},{id:"skeet30",minVerified:3,requireAllLinked:!0,label:"30 days Skeet+ (all linked · min 3)",kind:"membership_trial",membership:"skeet+",days:30}],rr=[{n:1,id:"m1",label:"Profile decoration",kind:"decoration"},{n:3,id:"m3",label:"7 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:7},{n:5,id:"m5",label:"30 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:30},{n:10,id:"m10",label:"Premium profile bundle",kind:"bundle"},{n:25,id:"m25",label:"30 days Backstage (TEST MODE)",kind:"membership_trial",membership:"backstage",days:30},{n:50,id:"m50",label:"30 days Inner Circle (TEST MODE)",kind:"membership_trial",membership:"inner",days:30},{n:100,id:"m100",label:"Founder Promoter badge / VIP",kind:"badge"}];function or(){return{platformsLinked:[],challenge:null,submissions:[],rewardsClaimed:[]}}function lr(){return{code:"",invitees:[],milestonesClaimed:[]}}function cr(e){const t=or();return!e||typeof e!="object"?t:{platformsLinked:Array.isArray(e.platformsLinked)?e.platformsLinked:[],challenge:e.challenge&&typeof e.challenge=="object"?e.challenge:null,submissions:Array.isArray(e.submissions)?e.submissions:[],rewardsClaimed:Array.isArray(e.rewardsClaimed)?e.rewardsClaimed:[]}}function dr(e){const t=lr();return!e||typeof e!="object"?t:{code:typeof e.code=="string"?e.code:"",invitees:Array.isArray(e.invitees)?e.invitees:[],milestonesClaimed:Array.isArray(e.milestonesClaimed)?e.milestonesClaimed:[]}}function Xe(e){return d={...d,shareEarn:cr(e)},C(d),d.shareEarn}function ot(e){return d={...d,referEarn:dr(e)},C(d),d.referEarn}function pr(e){if(!e)return"DBS-GUEST";const t=String(e.username||"fan").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8)||"FAN",s=String(e.id||"").replace(/^u_/,"").slice(-4).toUpperCase()||"DEMO";return`DBS-${t}-${s}`}function Ct(e){return e+"_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function es(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function X(){return cr(d.shareEarn)}function qi(){return pi.slice()}function hc(){return nr.map(e=>({...e}))}function fc({platform:e,handle:t="",url:s="",followers:a=""}={}){if(!d.user)return{error:"signin"};const n=String(e||"").toLowerCase().trim();if(!pi.includes(n))return{error:"bad_platform"};const l=String(t||"").trim().replace(/^@+/,"").slice(0,64),o=String(s||"").trim().slice(0,240);if(!l&&!o)return{error:"required"};const p=X();if((p.platformsLinked||[]).some(m=>m.platform===n))return{error:"already_linked",shareEarn:p};const c={id:Ct("plat"),platform:n,handle:l,url:o,followers:String(a||"").trim().slice(0,32),linkedAt:Date.now()},u={...p,platformsLinked:[...p.platformsLinked||[],c]};return Xe(u),{ok:!0,platform:c,shareEarn:X()}}function vc(e){const t=X(),s={...t,platformsLinked:(t.platformsLinked||[]).filter(a=>a.id!==e)};return Xe(s),X()}function bc(){if(!d.user)return{error:"signin"};const t=X();if(t.challenge&&t.challenge.status==="active")return{error:"already_active",shareEarn:t};const s=Ft().code,a=Date.now(),i={id:Ct("ch"),startedAt:a,endsAt:a+24*60*60*1e3,adTitle:"DatBoiSkeet · Long Story Short & Ladies Only",caption:"🔥 Join me on DBS — music, live, vault & more. Long Story Short + Ladies Only Coming Soon. #DBS #PaidPartnership #ad",trackedLink:`https://dbs.app/s/${s}?utm=share24`,status:"active",disclosure:"Incentivized promotion · disclose #ad / Paid partnership"};return Xe({...t,challenge:i,submissions:[],rewardsClaimed:(t.rewardsClaimed||[]).filter(n=>n.challengeId!==i.id)}),{ok:!0,challenge:i,shareEarn:X()}}function yc(){const e=X();if(!e.challenge||e.challenge.status!=="active")return{error:"no_active"};const t={...e.challenge,startedAt:Date.now()-25*60*60*1e3,endsAt:Date.now()-1*60*60*1e3,simulatedElapsed:!0};return Xe({...e,challenge:t}),{ok:!0,challenge:t,shareEarn:X()}}function kc(){const e=X();if(!e.challenge)return{error:"none"};const t={...e.challenge,status:"ended",endedAt:Date.now()};return Xe({...e,challenge:t}),{ok:!0,challenge:t,shareEarn:X()}}function wc({platform:e,postUrl:t=""}={}){if(!d.user)return{error:"signin"};const a=X();if(!a.challenge||a.challenge.status!=="active")return{error:"no_challenge"};const i=String(e||"").toLowerCase().trim();if(!pi.includes(i))return{error:"bad_platform"};const n=String(t||"").trim().slice(0,400);if(!n)return{error:"required"};if((a.submissions||[]).some(p=>p.platform===i&&(p.status==="pending"||p.status==="verified")))return{error:"duplicate",shareEarn:a};const o={id:Ct("sub"),platform:i,postUrl:n,submittedAt:Date.now(),status:"pending",note:"Awaiting 24h continuous visibility check (manual/demo)"};return Xe({...a,submissions:[o,...a.submissions||[]]}),{ok:!0,submission:o,shareEarn:X()}}function Bi(e,t,{note:s=""}={}){if(!["pending","verified","rejected"].includes(t))return{error:"bad_status"};const a=X();let i=null;const n=(a.submissions||[]).map(l=>l.id!==e?l:(i={...l,status:t,verifiedAt:t==="verified"?Date.now():l.verifiedAt||null,note:s||(t==="verified"?"Demo verified · 24h visibility assumed (manual)":t==="rejected"?"Rejected · ineligible / deleted / unverified":l.note)},i));return i?(Xe({...a,submissions:n}),{ok:!0,submission:i,shareEarn:X()}):{error:"not_found"}}function ur(){const e=X();return new Set((e.submissions||[]).filter(s=>s.status==="verified").map(s=>s.platform)).size}function mr(){const e=X(),t=ur(),s=(e.platformsLinked||[]).length,a=new Set((e.rewardsClaimed||[]).map(i=>i.tierId));return nr.filter(i=>{if(a.has(i.id)||t<i.minVerified)return!1;if(i.requireAllLinked){if(s<3)return!1;const n=new Set((e.platformsLinked||[]).map(o=>o.platform)),l=new Set((e.submissions||[]).filter(o=>o.status==="verified").map(o=>o.platform));for(const o of n)if(!l.has(o))return!1}return!0}).map(i=>({...i,verifiedCount:t,linkedCount:s}))}function Sc(e){var l;if(!d.user)return{error:"signin"};const a=mr().find(o=>o.id===e);if(!a)return{error:"not_claimable"};const i=X(),n={id:Ct("srw"),tierId:a.id,label:a.label,kind:a.kind,at:Date.now(),challengeId:((l=i.challenge)==null?void 0:l.id)||null,testMode:!0};return a.membership&&Qs(a.membership,!0),Xe({...i,rewardsClaimed:[n,...i.rewardsClaimed||[]]}),{ok:!0,claim:n,shareEarn:X(),membership:xt()}}function $c(){return Xe(or()),X()}function $e(){return dr(d.referEarn)}function xc(){return rr.map(e=>({...e}))}function Ft(){const e=d.user,t=$e();if(t.code)return t;const s=pr(e);return ot({...t,code:s})}function gr(){return`https://dbs.app/r/${Ft().code}`}function Ec({username:e=""}={}){const t=d.user;if(!t)return{error:"signin"};const s=Ft(),a=String(e||"").trim().slice(0,24)||"Invitee"+(s.invitees.length+1);if(a.toLowerCase()===String(t.username||"").toLowerCase())return{error:"self_referral"};const i={id:Ct("inv"),username:a,signedUpAt:Date.now(),activeDays:[],status:"pending",welcomeClaimed:!1,flaggedFraud:!1};return ot({...s,invitees:[i,...s.invitees||[]]}),{ok:!0,invitee:i,referEarn:$e()}}function Ac(e){const t=$e();let s=null;const a=(t.invitees||[]).map(i=>i.id!==e?i:i.flaggedFraud?(s={error:"fraud",invitee:i},i):(s={...i,welcomeClaimed:!0,welcomeAt:Date.now()},s));return s?s.error?s:(ot({...t,invitees:a}),{ok:!0,invitee:s,perk:"Welcome badge / profile decoration (TEST MODE)"}):{error:"not_found"}}function Cc(e,{day:t=null}={}){const s=$e();let a=null;const i=(s.invitees||[]).map(n=>{if(n.id!==e)return n;if(n.flaggedFraud)return a={error:"fraud",invitee:n},n;const l=Number(n.signedUpAt)||Date.now(),o=l+7*864e5;let p=t;if(!p){const h=new Set(n.activeDays||[]);let f=null;for(let b=0;b<7;b++){const k=es(l+b*864e5);if(!h.has(k)){f=k;break}}if(!f)return a={error:"window_full",invitee:n},n;p=f}const c=Date.parse(p+"T12:00:00Z");if(!Number.isFinite(c)||c<l-864e5||c>o)return a={error:"outside_window",invitee:n},n;const u=Array.from(new Set([...n.activeDays||[],p])).sort();let m=n.status;return u.length>=3&&(m="active"),a={...n,activeDays:u,status:m},a});return a?a.error?a:(ot({...s,invitees:i}),{ok:!0,invitee:a,referEarn:$e()}):{error:"not_found"}}function Oi(e,t=!0){const s=$e();let a=null;const i=(s.invitees||[]).map(n=>{var l;return n.id!==e?n:(a={...n,flaggedFraud:!!t,status:t?"fraud":((l=n.activeDays)==null?void 0:l.length)>=3?"active":"pending"},a)});return a?(ot({...s,invitees:i}),{ok:!0,invitee:a,referEarn:$e()}):{error:"not_found"}}function hr(){return($e().invitees||[]).filter(t=>t.status==="active"&&!t.flaggedFraud).length}function fr(){const e=$e(),t=hr(),s=new Set((e.milestonesClaimed||[]).map(a=>a.milestoneId));return rr.filter(a=>t>=a.n&&!s.has(a.id)).map(a=>({...a,activeCount:t}))}function Tc(e){if(!d.user)return{error:"signin"};const a=fr().find(l=>l.id===e);if(!a)return{error:"not_claimable"};const i=$e(),n={id:Ct("rmw"),milestoneId:a.id,n:a.n,label:a.label,kind:a.kind,at:Date.now(),testMode:!0,note:"Distinct from Clippers commissions · TEST MODE · no real billing"};return a.membership&&Qs(a.membership,!0),ot({...i,milestonesClaimed:[n,...i.milestonesClaimed||[]]}),{ok:!0,claim:n,referEarn:$e(),membership:xt()}}function Dc(){const e=d.user;return ot({...lr(),code:pr(e)}),$e()}function Mc({force:e=!1}={}){if(!d.user)return{error:"signin"};const s=Ft();if(!e&&(s.invitees||[]).length>0)return{error:"already_seeded",referEarn:s};const a=Date.now(),i=864e5,n=[{id:"inv_demo_a",username:"NovaFan",signedUpAt:a-5*i,activeDays:[es(a-5*i),es(a-4*i),es(a-3*i)],status:"active",welcomeClaimed:!0,flaggedFraud:!1},{id:"inv_demo_b",username:"ClipCurious",signedUpAt:a-2*i,activeDays:[es(a-2*i)],status:"pending",welcomeClaimed:!0,flaggedFraud:!1},{id:"inv_demo_c",username:"BottyMcBot",signedUpAt:a-6*i,activeDays:[],status:"fraud",welcomeClaimed:!1,flaggedFraud:!0}];return ot({...s,invitees:n,milestonesClaimed:s.milestonesClaimed||[]}),{ok:!0,seeded:n.length,referEarn:$e()}}const la=[{id:"youtube",label:"YouTube",color:"#ff4444",hint:"YouTube Live / Studio"},{id:"tiktok",label:"TikTok",color:"#69c9d0",hint:"TikTok LIVE"},{id:"twitch",label:"Twitch",color:"#9146ff",hint:"Twitch Dashboard"},{id:"facebook",label:"Facebook",color:"#1877f2",hint:"Facebook Live"},{id:"instagram",label:"Instagram",color:"#e1306c",hint:"IG Live (demo)"},{id:"kick",label:"Kick",color:"#53fc18",hint:"Kick Studio"},{id:"custom_rtmp",label:"Custom RTMP",color:"#ffb020",hint:"Any RTMP endpoint"}],Lc=()=>({freeMaxDestinations:2,houseUnlimited:!0,houseUserIds:["dbs"],tiers:{bronze:{id:"bronze",label:"Bronze",price:4.99,maxDestinations:3,placement:!1,badge:"Bronze Streamer",perks:["3 destination slots","Campaign badge on Go Live"]},silver:{id:"silver",label:"Silver",price:9.99,maxDestinations:5,placement:!0,badge:"Silver Streamer",perks:["5 destination slots","Campaign badge","Explore / Live placement flag"]},gold:{id:"gold",label:"Gold",price:19.99,maxDestinations:7,placement:!0,badge:"Gold Streamer",perks:["All 7 destinations","Campaign badge","Priority Explore / Live placement"]}}});function _s(){return{platforms:{},selected:[],session:null,history:[],ingest:null,campaign:{tier:null,status:"none",enrolledAt:null,cancelledAt:null},campaignConfig:null}}function ca(){const e=d.restream||_s();return{..._s(),...e,platforms:e.platforms&&typeof e.platforms=="object"?e.platforms:{},selected:Array.isArray(e.selected)?e.selected:[],history:Array.isArray(e.history)?e.history:[],campaign:{..._s().campaign,...e.campaign||{}}}}function Gt(e){return d={...d,restream:e},C(d),d.restream}function Pc(e){var s,a;if((s=e.ingest)!=null&&s.rtmpUrl&&((a=e.ingest)!=null&&a.streamKey))return e;const t="dbs_demo_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,10);return{...e,ingest:{rtmpUrl:"rtmp://ingest.dbs.local/live",streamKey:t,rotatedAt:Date.now(),note:"TEST MODE demo key · not a real media server"}}}function lt(){let e=ca();const t=e.ingest;return e=Pc(e),e.ingest!==t&&Gt(e),e}function vr(){const e=lt();return la.map(t=>{const s=e.platforms[t.id]||{};return{...t,connected:!!s.connected,connectedAt:s.connectedAt||null,handle:s.handle||"",lastError:s.lastError||null,enabled:s.enabled!==!1}})}function Ic(e,t=""){const s=la.find(n=>n.id===e);if(!s)return{error:"unknown_platform"};const a=lt(),i={...a.platforms,[e]:{id:e,connected:!0,connectedAt:Date.now(),handle:String(t||s.label+" Demo").slice(0,40),lastError:null,enabled:!0}};return Gt({...a,platforms:i}),{ok:!0,platform:vr().find(n=>n.id===e)}}function _c(e){var n;const t=lt();if(!((n=t.platforms[e])!=null&&n.connected))return{error:"not_connected"};const s={...t.platforms,[e]:{...t.platforms[e],connected:!1,disconnectedAt:Date.now(),lastError:null}},a=(t.selected||[]).filter(l=>l!==e);let i=t.session;return i&&!i.endedAt&&(i={...i,destinations:(i.destinations||[]).map(l=>l.id===e?{...l,status:"disconnected",health:"error"}:l)}),Gt({...t,platforms:s,selected:a,session:i}),{ok:!0}}function qc(e){const t=lt(),s=new Set(Object.values(t.platforms).filter(i=>i.connected).map(i=>i.id)),a=(Array.isArray(e)?e:[]).filter(i=>s.has(i)).slice(0,7);return Gt({...t,selected:a}),{ok:!0,selected:a}}function Bc(e){var a;const t=lt();if(!((a=t.platforms[e])!=null&&a.connected))return{error:"not_connected"};const s=new Set(t.selected||[]);return s.has(e)?s.delete(e):s.add(e),qc([...s])}function br(){var a,i,n;const e=ca(),t=Lc(),s=e.campaignConfig||{};return{...t,...s,tiers:{...t.tiers,...s.tiers||{},bronze:{...t.tiers.bronze,...((a=s.tiers)==null?void 0:a.bronze)||{}},silver:{...t.tiers.silver,...((i=s.tiers)==null?void 0:i.silver)||{}},gold:{...t.tiers.gold,...((n=s.tiers)==null?void 0:n.gold)||{}}},freeMaxDestinations:Number(s.freeMaxDestinations)>0?Number(s.freeMaxDestinations):t.freeMaxDestinations,houseUnlimited:s.houseUnlimited!==!1,houseUserIds:Array.isArray(s.houseUserIds)?s.houseUserIds:t.houseUserIds}}function yr(){return{..._s().campaign,...ca().campaign||{}}}function Oc(){const e=d.user;if(!e)return!1;const t=br();return e.id==="dbs"||e.username==="DatBoiSkeet"?!0:(t.houseUserIds||[]).includes(e.id)}function kr(){const e=br();if(Oc()&&e.houseUnlimited)return{max:la.length,source:"house_free",tier:null};const t=yr();if(t.status==="active"&&t.tier&&e.tiers[t.tier]){const s=e.tiers[t.tier];return{max:s.maxDestinations,source:"campaign",tier:t.tier,badge:s.badge,placement:!!s.placement}}return{max:e.freeMaxDestinations,source:"free_baseline",tier:null,badge:null,placement:!1}}function Nc(){const e=d.user;if(!e)return{error:"signin"};const t=lt();if(t.session&&!t.session.endedAt)return{error:"already_live"};const s=Object.values(t.platforms).filter(p=>p.connected).map(p=>p.id);if(!s.length)return{error:"no_platforms"};let a=(t.selected||[]).filter(p=>s.includes(p));if(!a.length)return{error:"none_selected"};const i=kr();if(a.length>i.max)return{error:"over_cap",max:i.max,selected:a.length,source:i.source};const n=a.map((p,c)=>{const u=la.find(h=>h.id===p),m=c===a.length-1&&a.length>2?"connecting":"streaming";return{id:p,label:(u==null?void 0:u.label)||p,status:m==="connecting"?"connecting":"streaming",health:m,startedAt:Date.now()}}),l=yr(),o={id:Ct("rs"),hostId:e.id,hostName:e.username,startedAt:Date.now(),destinations:n,selected:a.slice(),campaignTier:l.status==="active"?l.tier:null,campaignBadge:i.badge||null,placement:!!i.placement,testMode:!0,endedAt:null};return Gt({...t,session:o,selected:a}),{ok:!0,session:o}}function jc(){const e=lt();if(!e.session||e.session.endedAt)return{error:"offline"};const t={...e.session,endedAt:Date.now(),destinations:(e.session.destinations||[]).map(a=>({...a,status:a.health==="error"?"error":"ended",health:a.health==="error"?"error":"ended"}))},s=[t,...e.history||[]].slice(0,20);return Gt({...e,session:null,history:s}),{ok:!0,session:t,history:s}}function Rc(){const e=ca().session;return e&&!e.endedAt?e:null}function wr(){const e=L().connectPrefs||{};return{ageConfirmed:!!e.ageConfirmed,rulesAccepted:!!e.rulesAccepted}}function Ni(e={}){const t={...wr(),...e};return t.ageConfirmed||(t.rulesAccepted=!1),yo(s=>({...s,connectPrefs:t})),t}const Sr=[{id:"day_one",name:"Day One",blurb:"Joined the Loyalty Club — recognition starts with showing up, not spending.",need:0,kind:"join"},{id:"listener",name:"Listener",blurb:"Logged authorized listening (demo tick). Not purchase-only.",need:1,kind:"listen"},{id:"live_attendee",name:"Live Regular",blurb:"Attended a livestream (demo stub). Healthy participation.",need:1,kind:"live"},{id:"club_member",name:"Club Member",blurb:"Joined a Fan Club discussion community.",need:1,kind:"club"},{id:"helper",name:"Helper",blurb:"Community-helper milestone (welcome tip / guidelines share demo).",need:1,kind:"help"},{id:"top_fan",name:"Top Fan",blurb:"Earned 50+ loyalty points from mixed healthy actions — gifts alone do not unlock this.",needPoints:50}];function $r(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function ks(){const e=d.loyalty||{};return{points:Number(e.points)||0,history:Array.isArray(e.history)?e.history:[],badges:Array.isArray(e.badges)?e.badges:[],publicVisible:e.publicVisible!==!1,lastActionAt:e.lastActionAt&&typeof e.lastActionAt=="object"?e.lastActionAt:{},dayCounts:e.dayCounts&&typeof e.dayCounts=="object"?e.dayCounts:{}}}function ui(e){d={...d,loyalty:e},C(d)}function Fc(){return"loy_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Gc(e,{cooldownMs:t=8e3,dailyCap:s=8}={}){const a=ks(),i=Date.now(),n=Number(a.lastActionAt[e])||0;if(i-n<t)return{ok:!1,reason:"cooldown"};const l=$r(i);return((a.dayCounts[l]||{})[e]||0)>=s?{ok:!1,reason:"daily_cap"}:{ok:!0}}function Kc(e){const t=new Set(e.badges||[]),s={};return(e.history||[]).forEach(a=>{s[a.kind]=(s[a.kind]||0)+1}),Sr.forEach(a=>{if(!t.has(a.id)){if(a.needPoints!=null){e.points>=a.needPoints&&t.add(a.id);return}if(a.id==="day_one"){((e.history||[]).length>0||e.points>0)&&t.add(a.id);return}(s[a.kind]||0)>=(a.need||1)&&t.add(a.id)}}),[...t]}function ws(){return ks()}function Vc(e){const t=ks();return ui({...t,publicVisible:!!e}),ws()}function Uc(e,{points:t=5,note:s=""}={}){if(!d.user)return{error:"signin"};const i=Gc(e);if(!i.ok)return{error:i.reason};const n=ks(),l=Date.now(),o=$r(l),p={...n.dayCounts,[o]:{...n.dayCounts[o]||{},[e]:((n.dayCounts[o]||{})[e]||0)+1}},c={id:Fc(),at:l,kind:e,points:t,note:String(s||e).slice(0,120)},u={...n,points:n.points+t,history:[c,...n.history].slice(0,80),lastActionAt:{...n.lastActionAt,[e]:l},dayCounts:p};return u.badges.includes("day_one")||(u.history=u.history),u.badges=Kc(u),u.badges.includes("day_one")||(u.badges=["day_one",...u.badges]),ui(u),{ok:!0,loyalty:ws(),entry:c,newBadges:u.badges.filter(m=>!(n.badges||[]).includes(m))}}function xr(){const e=ws(),t=new Set(e.badges||[]);return Sr.map(s=>({...s,unlocked:t.has(s.id)}))}function zc(){return ui({points:0,history:[],badges:[],publicVisible:!0,lastActionAt:{},dayCounts:{}}),ws()}function Tt(){const e=d.openMic||{};return{applications:Array.isArray(e.applications)?e.applications:[],seeded:!!e.seeded,houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0}}function da(e){d={...d,openMic:e},C(d)}function Hc(){return"om_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Kt({force:e=!1}={}){const t=Tt();if(t.seeded&&!e&&t.applications.length>0)return{skipped:!0,applications:t.applications};const s=Date.now(),a=864e5,i=[{id:"om_demo_approved",userId:"u_ria",username:"RiaLoops",talent:"producer",trackTitle:"Midnight Pads (demo)",profileNote:"Beatmaker · looking to collab on LSS energy",rightsCertified:!0,status:"approved",at:s-10*a,reviewedAt:s-9*a},{id:"om_demo_pending",userId:"u_dez",username:"DezOnMic",talent:"rapper",trackTitle:"Porch Light Freestyle",profileNote:"Opt-in showcase · not pay-to-win",rightsCertified:!0,status:"pending",at:s-2*a},{id:"om_demo_rejected",userId:"u_spam",username:"SpamBeats",talent:"dj",trackTitle:"Untitled drop",profileNote:"No rights cert honesty",rightsCertified:!1,status:"rejected",at:s-5*a,reviewedAt:s-4*a,reviewNote:"Rights certification required"}],n=typeof t.houseIndex=="number"?t.houseIndex:0;return da({applications:i,seeded:!0,houseIndex:n}),{seeded:i.length,applications:i}}function Ba({status:e=null}={}){Kt();let t=Tt().applications.slice();return e&&(t=t.filter(s=>s.status===e)),t.sort((s,a)=>(a.at||0)-(s.at||0))}function Wc(){return Ba({status:"approved"})}function Yc(){const e=Tt();return $t(typeof e.houseIndex=="number"?e.houseIndex:0)}function Qc(){const e=Tt(),t=((typeof e.houseIndex=="number"?e.houseIndex:0)+1)%Xn();return da({...e,houseIndex:t}),$t(t)}function Xc({talent:e="rapper",trackTitle:t="",profileNote:s="",rightsCertified:a=!1}={}){const i=d.user;if(!i)return{error:"signin"};if(!a)return{error:"rights"};const n=String(t||"").trim().slice(0,80);if(!n)return{error:"title"};Kt();const l=Tt();if(l.applications.some(p=>p.userId===i.id&&p.status==="pending"))return{error:"pending"};const o={id:Hc(),userId:i.id,username:i.username,talent:String(e||"other").slice(0,32),trackTitle:n,profileNote:String(s||"").trim().slice(0,240),rightsCertified:!0,status:"pending",at:Date.now()};return da({...l,applications:[o,...l.applications],seeded:!0}),{ok:!0,application:o}}function Oa(e,t,s=""){if(!ee())return{error:"admin"};if(!["pending","approved","rejected"].includes(t))return{error:"status"};const i=Tt();let n=null;const l=i.applications.map(o=>o.id!==e?o:(n={...o,status:t,reviewedAt:Date.now(),reviewNote:String(s||"").slice(0,160)},n));return n?(da({...i,applications:l}),{ok:!0,application:n}):{error:"missing"}}function Jc(){var E,T;Kt(),Ke();try{Ss(),Re()}catch{}const e=Tt().applications||[],t={pending:0,approved:0,rejected:0};e.forEach(y=>{const D=y.status||"pending";t[D]!==void 0?t[D]+=1:t.pending+=1});const s=e.filter(y=>y.status==="pending").sort((y,D)=>(D.at||0)-(y.at||0)),a=Ge().clubs.slice().sort((y,D)=>(D.createdAt||0)-(y.createdAt||0)),i=a.slice(0,5).map(y=>({id:y.id,name:y.name,privacy:y.privacy,official:!!y.official,memberCount:y.memberCount||(y.members||[]).length||0,createdAt:y.createdAt||0})),n=ks(),o=xr().filter(y=>y.unlocked),p=rt(),c=ti();let u=0,m=0,h=0,f=0,b=0;c.forEach(y=>{u=_(u+(y.gross||0)),m=_(m+(y.fees||0)),h=_(h+(y.creatorShare||0)),f=_(f+(y.dbsShare||0)),b+=y.count||0});const k=d.wallet||{balance:0},v=d.catalog||[],w=An();return{openMic:{total:e.length,byStatus:t,pending:s},fanClubs:{total:a.length,recent:i},loyalty:{points:n.points||0,badgeCount:o.length,badges:o.map(y=>y.name||y.id),publicVisible:n.publicVisible!==!1,historyCount:(n.history||[]).length,note:"Device-local loyalty for signed-in user · not a multi-fan leaderboard"},revenue:{demo:!0,chip:"demo figures · not production",gross:u,fees:m,creatorShare:h,dbsShare:f,earnCount:b,creatorAvailable:_(p.available||0),creatorHolds:_(p.holds||0),fanWalletBalance:Number(k.balance)||0,byCategory:c.filter(y=>y.count>0),catalogPublished:v.filter(y=>y.published).length,catalogTotal:v.length},moderation:{warnings:[],suspensions:[],note:"Stub · Content Polish owns Guidelines copy"},hotFeed:{openAlerts:(d.engagementAlerts||[]).filter(y=>!y.handledAt).length,totalAlerts:(d.engagementAlerts||[]).length,hotPosts:Array.isArray((E=d.hotFeed)==null?void 0:E.posts)?d.hotFeed.posts.length:0,hotLives:Array.isArray((T=d.hotFeed)==null?void 0:T.lives)?d.hotFeed.lives.length:0,note:"§38 · Build posts + Live Social lives"},stats:w}}const Zc={frames:"frame",effects:"effect",banners:"banner","name styles":"nameStyle",badges:"badge"},ji=["frame-rodeo-gold","fx-snowfall","ban-skyline","name-neon","badge-dayone"];function ed(e){const t=e&&typeof e=="object"?e:{},s={};return["frame","effect","banner","nameStyle","badge"].forEach(a=>{typeof t[a]=="string"&&t[a]&&(s[a]=t[a])}),s}function Vt(){const e=d.profileShop||{};return{owned:Array.isArray(e.owned)?[...new Set(e.owned.map(String))]:[],equipped:ed(e.equipped),reduceMotion:!!e.reduceMotion}}function Ut(e){d={...d,profileShop:e},C(d)}function at(){return Vt()}function Er(e){return e&&Zc[e.category]||null}function td(e){const t=String(e||"");if(!t)return{error:"missing"};const s=Vt();return s.owned.includes(t)?{ok:!0,already:!0,shop:at()}:(Ut({...s,owned:[...s.owned,t]}),{ok:!0,shop:at()})}function sd(){const e=Vt(),t=new Set(e.owned);return ji.forEach(s=>t.add(s)),Ut({...e,owned:[...t]}),{ok:!0,unlocked:ji,shop:at()}}function ad(e){const t=String(e||"");return t.startsWith("frame-")?"frame":t.startsWith("fx-")?"effect":t.startsWith("ban-")?"banner":t.startsWith("name-")?"nameStyle":t.startsWith("badge-")?"badge":null}function id(e){const t=String(e||""),s=Vt();if(!s.owned.includes(t))return{error:"not_owned"};const a=ad(t);if(!a)return{error:"unknown_item"};const i={...s.equipped,[a]:t};return Ut({...s,equipped:i}),{ok:!0,slot:a,shop:at()}}function nd(e){const t=String(e||"");if(!["frame","effect","banner","nameStyle","badge"].includes(t))return{error:"bad_slot"};const s=Vt(),a={...s.equipped};return delete a[t],Ut({...s,equipped:a}),{ok:!0,shop:at()}}function rd(e){const t=Vt();return Ut({...t,reduceMotion:!!e}),at()}function od(){return Ut({owned:[],equipped:{},reduceMotion:!1}),at()}const ld=5,cd=8,dd=[{id:"hp_maya_1",userId:"maya",username:"MayaBeats",text:"Studio loop dropping later — who wants the stem pack? 🔥",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",mediaType:"image",atOffset:36e5*5,likeUsers:["dbs","fanjay","u_seed_a","u_seed_b","u_seed_c","u_seed_d","clipqueen"],comments:[{id:"hc_m1",userId:"fanjay",username:"FanJay",text:"Send it 🙌"},{id:"hc_m2",userId:"dbs",username:"DatBoiSkeet",text:"Pull up on Spotlight"},{id:"hc_m3",userId:"clipqueen",username:"ClipQueen",text:"Stem pack please"}],shares:5},{id:"hp_jay_1",userId:"fanjay",username:"FanJay",text:"Foreign X-Change fit check from the community — buffalo energy.",image:"/merch/03_blue_buffalo_jacket.jpeg",mediaType:"image",atOffset:36e5*8,likeUsers:["maya","dbs","u_seed_a","u_seed_c","u_seed_d","clipqueen","u_seed_b"],comments:[{id:"hc_j1",userId:"maya",username:"MayaBeats",text:"Jacket hits"},{id:"hc_j2",userId:"clipqueen",username:"ClipQueen",text:"Need this"}],shares:6},{id:"hp_clip_1",userId:"clipqueen",username:"ClipQueen",text:"New clip cut from last Live — tag @DatBoiSkeet if you remix 🎬",image:"/merch/06_black_ptsd_tee.jpeg",mediaType:"video",atOffset:36e5*12,likeUsers:["dbs","maya","fanjay","u_seed_a","u_seed_b","u_seed_c"],comments:[{id:"hc_c1",userId:"dbs",username:"DatBoiSkeet",text:"Clean edit"},{id:"hc_c2",userId:"maya",username:"MayaBeats",text:"Clipping goals"},{id:"hc_c3",userId:"fanjay",username:"FanJay",text:"Saved"},{id:"hc_c4",userId:"u_seed_a",username:"FanA",text:"Fire"}],shares:4},{id:"hp_dbs_boost",userId:"dbs",username:"DatBoiSkeet",text:"Community shoutout — Maya + Jay keeping the feed hot. Keep posting.",image:"/music/02_Ladies_Only_Coming_Soon.jpg",mediaType:"image",atOffset:36e5*3,likeUsers:["maya","fanjay","u_seed_a"],comments:[{id:"hc_d1",userId:"maya",username:"MayaBeats",text:"Grateful 💛"},{id:"hc_d2",userId:"fanjay",username:"FanJay",text:"Lets go"}],shares:2}];function Pe(){const e=d.hotFeed||{};return{lives:Array.isArray(e.lives)?e.lives:[],posts:Array.isArray(e.posts)?e.posts:[],seededLives:!!e.seededLives,seededPosts:!!e.seededPosts,seededPostsVer:Number(e.seededPostsVer)||0}}function Ar(e){d={...d,hotFeed:e},C(d)}function pd(){const e={...d.profiles};let t=!1;const s=(a,i,n)=>{e[a]||(e[a]={id:a,username:i,bio:n,avatar:"",followers:[],following:["dbs"],verified:!1},t=!0)};s("maya","MayaBeats","Creator · beats & live demos"),s("fanjay","FanJay","Day-one fan · playlist curator"),s("clipqueen","ClipQueen","Clipper · community edits"),t&&(d={...d,profiles:e})}function Ss(){xn(),pd();const e=Pe(),t=Number(e.seededPostsVer)||0;if(e.seededPosts&&t>=2)return Pe();if(e.seededPosts&&t<2){const p={...d.likes||{}},c={...d.comments||{}},u={...d.postShares||{}},m=(h,f,b,k)=>{p[h]=[...new Set([...p[h]||[],...f])];const v=new Set((c[h]||[]).map(E=>E.id)),w=[...c[h]||[]];(b||[]).forEach(E=>{v.has(E.id)||w.push({...E,at:E.at||Date.now()})}),c[h]=w,u[h]=Math.max(Number(u[h]||0),k)};return m("hp_maya_1",["dbs","fanjay","u_seed_a","u_seed_b","u_seed_c","u_seed_d","clipqueen"],[{id:"hc_m3",userId:"clipqueen",username:"ClipQueen",text:"Stem pack please"}],5),m("hp_jay_1",["maya","dbs","u_seed_a","u_seed_c","u_seed_d","clipqueen","u_seed_b"],[{id:"hc_j2",userId:"clipqueen",username:"ClipQueen",text:"Need this"}],6),m("hp_clip_1",["dbs","maya","fanjay","u_seed_a","u_seed_b","u_seed_c"],[{id:"hc_c4",userId:"u_seed_a",username:"FanA",text:"Fire"}],4),p.hp_dbs_boost&&(p.hp_dbs_boost=(p.hp_dbs_boost||[]).slice(0,3),u.hp_dbs_boost=Math.min(Number(u.hp_dbs_boost||0),2)),d={...d,likes:p,comments:c,postShares:u,hotFeed:{...e,seededPosts:!0,seededPostsVer:2}},C(d),Re(),Pe()}const s=new Set((d.posts||[]).map(p=>p.id)),a=[...d.posts||[]],i={...d.likes||{}},n={...d.comments||{}},l={...d.postShares||{}},o=Date.now();return dd.forEach(p=>{s.has(p.id)||(a.unshift({id:p.id,userId:p.userId,username:p.username,text:p.text,image:p.image||"",mediaType:p.mediaType||(p.image?"image":"text"),at:o-(p.atOffset||0),house:p.userId==="dbs"}),i[p.id]=[...p.likeUsers||[]],n[p.id]=(p.comments||[]).map(c=>({...c,text:c.text,at:o-(p.atOffset||0)+6e4})),p.shares&&(l[p.id]=p.shares))}),i.p1&&i.p1.length<3&&(i.p1=[...new Set([...i.p1||[],"maya","fanjay","u_seed_a"])]),i.p2&&i.p2.length<2&&(i.p2=[...new Set([...i.p2||[],"maya","fanjay"])]),(!n.p1||n.p1.length<2)&&(n.p1=[...n.p1||[],{id:"hc_p1a",userId:"maya",username:"MayaBeats",text:"Cover art goes crazy",at:o-8e7},{id:"hc_p1b",userId:"fanjay",username:"FanJay",text:"Been waiting on this",at:o-7e7}]),l.p1=Math.max(l.p1||0,2),l.p2=Math.max(l.p2||0,1),d={...d,posts:a,likes:i,comments:n,postShares:l,hotFeed:{...e,seededPosts:!0,seededPostsVer:2}},C(d),Re(),Pe()}function pa(e){const t=d.likes&&d.likes[e]||[],s=d.comments&&d.comments[e]||[],a=d.postShares&&d.postShares[e]||0;return t.length+s.length+Number(a||0)}function Re(){const e=Pe(),s=(d.posts||[]).map(o=>{const p=(d.likes&&d.likes[o.id]||[]).length,c=(d.comments&&d.comments[o.id]||[]).length,u=Number(d.postShares&&d.postShares[o.id]||0),m=p+c+u;return{id:o.id,postId:o.id,score:m,likes:p,comments:c,shares:u,username:o.username,userId:o.userId,preview:(o.text||"").slice(0,120),text:o.text||"",image:o.image||"",mediaType:o.mediaType||(o.image?"image":"text"),at:o.at||0,house:o.userId==="dbs"||!!o.house}}).filter(o=>o.score>=ld).sort((o,p)=>p.score-o.score||p.at-o.at).slice(0,cd),a=new Set((e.posts||[]).map(o=>o.postId||o.id)),i=Array.isArray(d.engagementAlerts)?[...d.engagementAlerts]:[],n=new Set(i.filter(o=>o.kind==="post").map(o=>o.refId));s.forEach(o=>{n.has(o.id)||a.has(o.id)&&e.posts.length||(i.unshift({id:"ea_post_"+o.id+"_"+Date.now().toString(36),kind:"post",refId:o.id,title:(o.preview||o.text||"Hot post").slice(0,80),username:o.username,score:o.score,mediaType:o.mediaType||"text",at:Date.now(),handledAt:null,handledNote:null}),n.add(o.id))});const l=i.slice(0,60);return d={...d,hotFeed:{lives:e.lives,seededLives:e.seededLives,posts:s,seededPosts:e.seededPosts||s.length>0,seededPostsVer:Number(e.seededPostsVer)||0},engagementAlerts:l},C(d),Pe()}function Cr(e=8){return Ss(),Pe().posts.length||Re(),(Pe().posts||[]).slice(0,Math.max(1,Number(e)||8))}function Tr(e){const t=String(e||"");if(!t)return{error:"missing"};if(!(d.posts||[]).find(i=>i.id===t))return{error:"missing"};const a={...d.postShares||{}};return a[t]=Number(a[t]||0)+1,d={...d,postShares:a},C(d),Re(),{ok:!0,shares:a[t],score:pa(t)}}function ud(e){const t=e||{},s=t.kind==="live"?"live":"post",a=String(t.refId||t.id||"");if(!a)return{error:"missing"};const i=Array.isArray(d.engagementAlerts)?[...d.engagementAlerts]:[],n=i.find(o=>o.kind===s&&o.refId===a&&!o.handledAt);if(n)return{ok:!0,alert:n,deduped:!0};const l={id:t.id||"ea_"+s+"_"+a+"_"+Date.now().toString(36),kind:s,refId:a,title:String(t.title||"Hot item").slice(0,120),username:String(t.username||""),score:Number(t.score)||0,viewers:t.viewers!=null?Number(t.viewers):void 0,gifts:t.gifts!=null?Number(t.gifts):void 0,mediaType:t.mediaType||(s==="live"?"live":"text"),at:t.at||Date.now(),handledAt:t.handledAt||null,handledNote:t.handledNote||null};return d={...d,engagementAlerts:[l,...i].slice(0,60)},C(d),{ok:!0,alert:l}}function Ri({openOnly:e=!0}={}){const t=Array.isArray(d.engagementAlerts)?d.engagementAlerts:[];return(e?t.filter(a=>!a.handledAt):t.slice()).sort((a,i)=>(i.at||0)-(a.at||0))}function Es(e,t){const s=String(e||"");if(!s)return{error:"missing"};const a=Array.isArray(d.engagementAlerts)?d.engagementAlerts:[];let i=null;const n=a.map(l=>l.id!==s?l:(i={...l,handledAt:Date.now(),handledNote:t!=null?String(t):l.handledNote||"handled"},i));return i?(d={...d,engagementAlerts:n},C(d),{ok:!0,alert:i}):{error:"missing"}}function md(e){if(!ee())return{error:"admin"};const t=d.user;if(!t)return{error:"signin"};const s=String(e||""),a=new Set(d.likes&&d.likes[s]||[]);return a.add(t.id),d={...d,likes:{...d.likes,[s]:[...a]}},C(d),Re(),{ok:!0,count:a.size,score:pa(s)}}function gd(e,t){if(!ee())return{error:"admin"};const s=d.user;if(!s)return{error:"signin"};const a=String(e||""),i=t.trim();if(!i)return{error:"empty"};const n={id:"c_admin_"+Date.now().toString(36),userId:s.id,username:s.username,text:i,at:Date.now(),admin:!0},l=d.comments&&d.comments[a]||[];return d={...d,comments:{...d.comments,[a]:[...l,n]}},C(d),Re(),{ok:!0,comment:n,score:pa(a)}}function hd(e){if(!ee())return{error:"admin"};const t=Tr(e);return t.error?t:{ok:!0,shares:t.shares,link:"#/posts",score:t.score}}function mi(e,t){return Math.max(0,Number(e)||0)+Math.max(0,Number(t)||0)*20}function gi(e){if(!e||typeof e!="object")return null;const t=String(e.id||e.liveId||"");if(!t)return null;const s=String(e.hostId||e.userId||""),a=String(e.hostName||e.username||e.handle||"Creator"),i=Math.max(0,Number(e.viewers)||0),n=Math.max(0,Number(e.giftsTotal??e.gifts)||0),l=e.score!=null&&Number.isFinite(Number(e.score))?Number(e.score):mi(i,n);return{id:t,hostId:s,hostName:a,title:String(e.title||"Live"),viewers:i,giftsTotal:n,house:!!e.house,spikedAt:e.spikedAt||null,score:l}}function Dr({force:e=!1}={}){const t=Pe();if(t.seededLives&&!e&&(t.lives||[]).length>0)return{skipped:!0,lives:t.lives.map(gi).filter(Boolean)};const s=[{id:"hl_dbs_house",hostId:"dbs",hostName:"DatBoiSkeet",title:"DBS Live · Listening Session",viewers:8420,giftsTotal:186,house:!0},{id:"hl_dbs_vault",hostId:"dbs",hostName:"DatBoiSkeet",title:"Vault Drop Afterparty · House",viewers:3210,giftsTotal:94,house:!0},{id:"hl_skeetfan",hostId:"u_skeetfanatl",hostName:"SkeetFanATL",title:"ATL reacts · Long Story Short",viewers:1540,giftsTotal:42,house:!1},{id:"hl_vaultwatch",hostId:"u_vaultwatcher",hostName:"VaultWatcher",title:"Vault deep cut night",viewers:980,giftsTotal:61,house:!1},{id:"hl_fxclip",hostId:"u_fxclipper",hostName:"FXClipper",title:"Foreign X-Change clips live",viewers:2210,giftsTotal:28,house:!1},{id:"hl_nightowl",hostId:"u_nightowldbs",hostName:"NightOwlDBS",title:"Late night lounge · chill",viewers:412,giftsTotal:15,house:!1},{id:"hl_longstory",hostId:"u_longstorylistener",hostName:"LongStoryListener",title:"LSS theory hour",viewers:128,giftsTotal:7,house:!1},{id:"hl_ladies",hostId:"u_ladiesonlyfan",hostName:"LadiesOnlyFan",title:"Ladies Only countdown",viewers:67,giftsTotal:3,house:!1}].map(a=>({...a,spikedAt:null,score:mi(a.viewers,a.giftsTotal)}));return Ar({...t,lives:s,seededLives:!0}),{ok:!0,lives:s}}function zt(){return Dr(),(Pe().lives||[]).map(gi).filter(Boolean).sort((t,s)=>(s.score||0)-(t.score||0)||(s.viewers||0)-(t.viewers||0))}function fd(e){const t=String(e||"");if(!t)return{error:"missing"};Dr();const s=Pe();let a=null;const i=(s.lives||[]).map(l=>{const o=gi(l);if(!o||o.id!==t)return l;const p=180+Math.floor(Math.random()*920),c=4+Math.floor(Math.random()*28),u=o.viewers+p,m=o.giftsTotal+c,h=mi(u,m);return a={...o,viewers:u,giftsTotal:m,score:h,spikedAt:Date.now()},a});if(!a)return{error:"missing"};Ar({...s,lives:i,seededLives:!0});const n=ud({kind:"live",refId:a.id,title:a.title,username:a.hostName,score:a.score,viewers:a.viewers,gifts:a.giftsTotal});return{ok:!0,live:a,alert:(n==null?void 0:n.alert)||null,deduped:!!(n!=null&&n.deduped)}}function vd(){return zt().filter(s=>s&&!s.house).sort((s,a)=>(a.score||0)-(s.score||0)||(a.viewers||0)-(s.viewers||0)).slice(0,6).map(s=>({id:s.id,hostId:s.hostId,hostName:s.hostName,title:s.title,viewers:s.viewers,giftsTotal:s.giftsTotal,house:!!s.house,score:s.score,spikedAt:s.spikedAt||null,playbacksToday:s.playbacksToday!=null?s.playbacksToday:Math.max(1,Math.round((s.viewers||0)/40))}))}function Mr(){const e=new Date().toISOString().slice(0,10),s=(wt({publishedOnly:!0,types:["song"]})||[]).map(i=>{const n=Number(i.playsToday)||Number(i.playCount)||Number(i.plays)||0;let l="";return i.coverRef&&!String(i.coverRef).startsWith("idb:")&&(l=i.coverRef),{id:i.id,title:i.title||"Untitled",artist:i.artist||"DatBoiSkeet",cover:l,playsToday:n,href:"#/music",demo:!1,day:e,status:i.status||(i.published?"Published":"Catalog")}}).filter(i=>i.playsToday>0).sort((i,n)=>n.playsToday-i.playsToday||String(i.title).localeCompare(String(n.title)));return s[0]?s[0]:{id:"demo_most_played_lss",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",playsToday:900+e.split("-").reduce((i,n)=>i+Number(n),0)%400,href:"#/music",demo:!0,day:e,status:"Coming Soon"}}const Fi="https://www.youtube.com/iframe_api";let Y=[],re=0,O=null,As=!1,Ie=!1,ct=!1;const Q=new Set;let Gi=!1;function We(e){if(!e)return"";try{const t=new URL(e);if(t.hostname.includes("youtu.be"))return t.pathname.slice(1).split("/")[0]||"";const s=t.searchParams.get("v");if(s)return s;const a=t.pathname.match(/\/embed\/([^/?]+)/);if(a)return a[1]==="videoseries"?"":a[1]}catch{}return""}function Ki(e){if(!e)return"";try{return new URL(e).searchParams.get("list")||""}catch{return""}}function _t(e){return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function bd(){var n,l;const e=[],t=new Set,s=new Set,a=o=>{if(o.playlistId){if(s.has(o.playlistId))return;s.add(o.playlistId)}else if(o.youtubeId){if(t.has(o.youtubeId))return;t.add(o.youtubeId)}else return;e.push(o)};for(const o of yt){const p=((n=o.links)==null?void 0:n.youtube)||"",c=We(p)||We(((l=o.links)==null?void 0:l.youtubeMusic)||"");c&&a({id:o.id,title:o.title,artist:o.artist||"DatBoiSkeet",cover:o.cover||_t(c),youtubeId:c,youtube:p||`https://www.youtube.com/watch?v=${c}`,embed:`https://www.youtube.com/embed/${c}`,links:{...o.links||{},youtube:p||`https://www.youtube.com/watch?v=${c}`},kind:"track"})}for(const o of za){const p=Ki(o.youtube)||Ki(o.embed);p&&a({id:o.id,title:o.title,artist:"DatBoiSkeet",cover:_t("DTe4OiX2otg")||"/brand/logo-dbs-v3@2x.webp",playlistId:p,youtube:o.youtube,embed:o.embed||`https://www.youtube.com/embed/videoseries?list=${p}`,links:{youtube:o.youtube,youtubeMusic:de.youtubeMusic,spotify:de.spotify,apple:de.apple},kind:"mix"})}const i=new Set(["Music Videos"]);for(const o of ye){if(!i.has(o.category||"Music Videos")||!o.featured&&!["dirty-money","93","no-love","bouquet","where-im-from","go-2-work"].includes(o.id)&&!o.featured)continue;const p=We(o.youtube)||We(o.embed);if(!p||t.has(p))continue;const c=yt.find(u=>{var m;return We(((m=u.links)==null?void 0:m.youtube)||"")===p});a({id:o.id,title:o.title,artist:o.artist||"DatBoiSkeet",cover:(c==null?void 0:c.cover)||_t(p),youtubeId:p,youtube:o.youtube,embed:o.embed||`https://www.youtube.com/embed/${p}`,links:{youtube:o.youtube,youtubeMusic:`https://music.youtube.com/watch?v=${p}`,...(c==null?void 0:c.links)||{}},kind:"mv"})}return Y=e,re>=Y.length&&(re=0),Y}function ze(e){return String(e||"").toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z0-9]+/g," ").trim()}function Lr(){var a,i;const e=Mr();if(!e)return{item:null,meta:null,playable:!1};const t=ze(e.title),s=Y.find(n=>ze(n.title)===t||ze(n.title).includes(t)||t.includes(ze(n.title)));if(s&&(s.youtubeId||s.playlistId))return{item:{...s},meta:e,playable:!0};for(const n of yt){if(ze(n.title)!==t&&!ze(n.title).startsWith(t)&&!t.startsWith(ze(n.title)))continue;const l=((a=n.links)==null?void 0:a.youtube)||"",o=We(l)||We(((i=n.links)==null?void 0:i.youtubeMusic)||"");return o?{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:n.cover||_t(o),youtubeId:o,youtube:l||`https://www.youtube.com/watch?v=${o}`,embed:`https://www.youtube.com/embed/${o}`,links:{...n.links||{},youtube:l||`https://www.youtube.com/watch?v=${o}`},kind:"track"},meta:e,playable:!0}:{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:n.cover||e.cover||"",youtube:l||de.youtube,embed:"",links:{...n.links||{}},kind:"track"},meta:e,playable:!1}}for(const n of ye){if(ze(n.title)!==t&&!ze(n.title).includes(t))continue;const l=We(n.youtube)||We(n.embed);if(l)return{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:_t(l),youtubeId:l,youtube:n.youtube,embed:n.embed||`https://www.youtube.com/embed/${l}`,links:{youtube:n.youtube,youtubeMusic:`https://music.youtube.com/watch?v=${l}`},kind:"mv"},meta:e,playable:!0}}return{item:{id:e.id||"most-played",title:e.title||"Most played",artist:e.artist||"DatBoiSkeet",cover:e.cover||"",youtube:"",embed:"",links:{spotify:de.spotify,apple:de.apple,youtubeMusic:de.youtubeMusic,youtube:de.youtube},kind:"track"},meta:e,playable:!1}}function Pr(){const e=document.getElementById("spPlayNextMost"),t=document.getElementById("spPlayNextSub"),{meta:s,playable:a}=Lr();if(e){if(!s){e.hidden=!0;return}if(e.hidden=!1,e.dataset.playable=a?"1":"0",e.dataset.demo=s.demo?"1":"0",e.title=a?`Most played today · ${s.title} → Play next`:`Most played today · ${s.title} (Coming Soon / open platform)`,e.setAttribute("aria-label",`Play next — ${s.title}`),t){const i=s.demo?"DEMO · ":"";t.textContent=`${i}Most played today · ${s.title}`}}}function Vi(e){if(!e)return-1;if(!Y.length)return Y.push(e),re=0,0;let t=Y.findIndex(a=>e.youtubeId&&a.youtubeId===e.youtubeId||e.playlistId&&a.playlistId===e.playlistId||a.id===e.id);if(t===re)return re;if(t>=0){const[a]=Y.splice(t,1);t<re&&(re-=1),e=a}const s=Math.min(re+1,Y.length);return Y.splice(s,0,e),s}function yd(){var n,l,o,p;const{item:e,meta:t,playable:s}=Lr();if(!t||!e){g("No most-played track yet");return}if(!s){const c=document.getElementById("spOpen"),u=((n=e.links)==null?void 0:n.apple)||((l=e.links)==null?void 0:l.youtubeMusic)||((o=e.links)==null?void 0:o.spotify)||((p=e.links)==null?void 0:p.youtube)||de.apple;c&&u&&(c.href=u),g(t.demo||t.status==="Coming Soon"?`${t.title} · Coming Soon — no in-app master. Open Music / Stream Everywhere when it drops.`:`${t.title} — open official platform (not in-app audio)`),Pr();return}if(hi()||!!ct&&Ie&&Q.size===0||Q.size>0){const c=Vi(e);g(c===re?`Already playing · ${e.title}`:`Queued next · ${e.title}`),he();return}let i=Y.findIndex(c=>e.youtubeId&&c.youtubeId===e.youtubeId||e.playlistId&&c.playlistId===e.playlistId||c.id===e.id);i<0&&(i=Vi(e)),Nr(i),g(`Playing · ${e.title}`)}const Wt=[];function Ir(){var e;return(e=window.YT)!=null&&e.Player?Promise.resolve(window.YT):new Promise(t=>{var a;if(Wt.push(t),As)return;As=!0;const s=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{As=!1;try{s==null||s()}catch{}const i=window.YT;for(;Wt.length;)try{Wt.shift()(i)}catch{}qt()},document.querySelector(`script[src="${Fi}"]`)){if((a=window.YT)!=null&&a.Player){As=!1;const i=window.YT;for(;Wt.length;)try{Wt.shift()(i)}catch{}qt()}}else{const i=document.createElement("script");i.src=Fi,i.async=!0,document.head.appendChild(i)}})}function _r(){Ir().then(()=>qt()).catch(()=>{})}function qt(){var n;if(!(document.getElementById("dbsStickyFrame")||document.getElementById("dbsYtHost"))||!((n=window.YT)!=null&&n.Player)||O)return;const t=Y[re],s={autoplay:0,controls:0,rel:0,modestbranding:1,playsinline:1,enablejsapi:1,origin:location.origin},a={height:"1",width:"1",playerVars:s,events:{onReady:()=>{he()},onStateChange:l=>{l.data===0&&Or({auto:!0}),he()},onError:()=>{g("YouTube embed error — Open on YouTube"),he()}}};t!=null&&t.playlistId?a.playerVars={...s,listType:"playlist",list:t.playlistId}:t!=null&&t.youtubeId?a.videoId=t.youtubeId:a.videoId="DTe4OiX2otg";const i=document.getElementById("dbsStickyFrame")?"dbsStickyFrame":"dbsYtHost";O=new window.YT.Player(i,a)}function gs({autoplay:e}={autoplay:!1}){const t=Y[re];if(!t||!(O!=null&&O.cueVideoById)){qt();return}try{t.playlistId?(typeof O.loadPlaylist=="function"?O.loadPlaylist({list:t.playlistId,listType:"playlist",index:0}):typeof O.cuePlaylist=="function"&&O.cuePlaylist({list:t.playlistId,listType:"playlist",index:0}),e&&Ie&&Q.size===0&&setTimeout(()=>{try{O.playVideo()}catch{}},250)):t.youtubeId&&(e&&Ie&&Q.size===0?O.loadVideoById(t.youtubeId):O.cueVideoById(t.youtubeId))}catch{}he()}function hi(){var e;try{return((e=O==null?void 0:O.getPlayerState)==null?void 0:e.call(O))===1}catch{return!1}}function he(){var u,m,h;const e=Y[re],t=document.getElementById("spArt"),s=document.getElementById("spTitle"),a=document.getElementById("spSub"),i=document.getElementById("spPlay"),n=document.getElementById("spOpen"),l=document.getElementById("spSource"),o=Q.size>0,p=!o&&(ct||hi());if(t&&e&&(t.src=e.cover||_t(e.youtubeId||"")||"/brand/logo-dbs-v3@2x.webp",t.alt=e.title||""),s&&(s.textContent=(e==null?void 0:e.title)||"DatBoiSkeet"),a&&(Ie?o?a.textContent=`Paused · ${[...Q][0]} interrupt`:a.textContent=`${(e==null?void 0:e.artist)||"DatBoiSkeet"} · via YouTube (not Spotify in-app)`:a.textContent="Tap Play · YouTube embed · Stream Everywhere"),i&&(i.textContent=p?"❚❚":"▶",i.setAttribute("aria-label",p?"Pause":"Play DBS Music"),i.dataset.playing=p?"1":"0"),n&&e){const f=((u=e.links)==null?void 0:u.apple)||((m=e.links)==null?void 0:m.youtubeMusic)||((h=e.links)==null?void 0:h.spotify)||e.youtube||de.apple;n.href=f,n.title="Open on official platform"}l&&(l.textContent=(e==null?void 0:e.kind)==="mix"?"YT Mix":(e==null?void 0:e.kind)==="mv"?"YT MV":"YouTube");const c=document.getElementById("spBadge");c&&(c.textContent=o?"INTERRUPTED":Ie&&p?"PLAYING · YT":"TEST · YT EMBED"),Pr()}function kd(){var e;if(Q.size>0){g("Paused for "+[...Q][0]+" — resume when done"),he();return}Ie=!0,ct=!0,_r(),qt();try{if(O!=null&&O.playVideo){const t=(e=O.getPlayerState)==null?void 0:e.call(O);t===-1||t===5||t===void 0?gs({autoplay:!0}):O.playVideo()}else{const t=setInterval(()=>{O!=null&&O.playVideo&&(clearInterval(t),gs({autoplay:!0}))},120);setTimeout(()=>clearInterval(t),8e3)}}catch{g("Tap Play DBS Music again if autoplay blocked")}he()}function wd({clearDesire:e}={}){var t;e&&(ct=!1);try{(t=O==null?void 0:O.pauseVideo)==null||t.call(O)}catch{}he()}function $s(e="user"){e&&e!=="user"&&Q.add(e),wd({clearDesire:e==="user"}),he()}function qr(e){var t;if(e?Q.delete(e):Q.clear(),Q.size===0&&Ie&&ct)try{(t=O==null?void 0:O.playVideo)==null||t.call(O)}catch{}he()}function Vs(e){return qr(e)}function Bt(){$s("video")}function va(){$s("live")}function Br(){Vs("live")}function Qe(){Vs("video")}function Or({auto:e}={}){Y.length&&(re=(re+1)%Y.length,ct=!0,e||(Ie=!0),gs({autoplay:Ie&&Q.size===0}),he())}function Sd(){Y.length&&(re=(re-1+Y.length)%Y.length,Ie=!0,ct=!0,gs({autoplay:Q.size===0}),he())}function Nr(e){e<0||e>=Y.length||(re=e,Ie=!0,Q.clear(),ct=!0,gs({autoplay:!0}),he())}function $d(){var e,t,s,a,i,n;Gi||(Gi=!0,(e=document.getElementById("spPlay"))==null||e.addEventListener("click",()=>{Q.size>0&&Q.clear(),hi()?$s("user"):kd()}),(t=document.getElementById("spPrev"))==null||t.addEventListener("click",()=>{Q.clear(),Sd()}),(s=document.getElementById("spNext"))==null||s.addEventListener("click",()=>{Q.clear(),Or()}),(a=document.getElementById("spOpen"))==null||a.addEventListener("click",l=>{g("Opening external music service (playback depends on provider)")}),(i=document.getElementById("spPlayNextMost"))==null||i.addEventListener("click",()=>{yd()}),(n=document.getElementById("spQueueBtn"))==null||n.addEventListener("click",()=>{const l=document.getElementById("spQueuePanel");if(!l)return;l.hasAttribute("hidden")?(l.removeAttribute("hidden"),l.innerHTML=Y.map((p,c)=>`<button type="button" class="sp-q-item${c===re?" on":""}" data-i="${c}">
              <img src="${p.cover||""}" alt="" width="36" height="36" />
              <span><b>${Ui(p.title)}</b><small>${Ui(p.artist)} · ${p.kind}</small></span>
            </button>`).join(""),l.querySelectorAll(".sp-q-item").forEach(p=>{p.addEventListener("click",()=>{Nr(Number(p.dataset.i)),l.setAttribute("hidden","")})})):l.setAttribute("hidden","")}),document.addEventListener("click",l=>{const o=document.getElementById("spQueuePanel");!o||o.hasAttribute("hidden")||!l.target.closest("#spQueuePanel")&&!l.target.closest("#spQueueBtn")&&o.setAttribute("hidden","")}))}function Ui(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let zi=!1;function xd(){zi||(zi=!0,window.addEventListener("dbs:interrupt-music",e=>{var s;const t=((s=e==null?void 0:e.detail)==null?void 0:s.reason)||"user";$s(t)}))}function Ed(){bd(),$d(),xd(),he(),_r(),setTimeout(()=>qt(),400)}function Ad(e){var a,i;const t=e==="/live",s=e==="/videos"||e==="/home"||e==="/music"||e==="/vault";!t&&Q.has("live")&&Vs("live");for(const[n,l]of[...ie.entries()])if(!document.getElementById(n)){l.playing&&(Ne=Math.max(0,Ne-1));try{(i=(a=l.player)==null?void 0:a.destroy)==null||i.call(a)}catch{}ie.delete(n)}Ne===0&&!s&&Q.has("video")&&Vs("video"),he()}const ie=new Map;let Ne=0,Hi=0;function Na(e){var s;if(!e||!(e instanceof Element))return!0;const t=e.id||"";return!!(t==="dbsStickyFrame"||t==="dbsYtHost"||(s=e.closest)!=null&&s.call(e,"#dbs-sticky-player, #stickyPlayer, #dbsStickyFrame, #dbsYtHost"))}function fi(e){return e?/youtube\.com\/embed|youtube-nocookie\.com\/embed|youtu\.be\//.test(e):!1}function Cd(e){let t=e.getAttribute("src")||e.src||"";if(!fi(t))return!1;let s=!1;return/[?&]enablejsapi=1(?:&|$)/.test(t)||(t+=(t.includes("?")?"&":"?")+"enablejsapi=1",s=!0),/[?&]origin=/.test(t)||(t+=(t.includes("?")?"&":"?")+"origin="+encodeURIComponent(location.origin),s=!0),s&&(e.setAttribute("src",t),e.src=t),!0}function Td(e){if(e.id&&!ie.has(e.id)&&e.id!=="dbsStickyFrame"&&e.id!=="dbsYtHost"||e.id&&ie.has(e.id))return e.id;Hi+=1;const t=`dbs-page-yt-${Hi}`;return e.id=t,t}function Dd(e,t){const s=ie.get(e);s&&(t.data===1?(s.playing||(s.playing=!0,Ne+=1),Bt()):(t.data===0||t.data===2)&&(s.playing&&(s.playing=!1,Ne=Math.max(0,Ne-1)),Ne===0&&Qe()))}function jr(e){var n,l;const t=typeof e=="string"?document.getElementById(e):e;if(!t||Na(t))return Promise.resolve(null);let s=t;if(t.tagName!=="IFRAME"&&(s=((n=t.querySelector)==null?void 0:n.call(t,"iframe"))||t),!s||s.tagName!=="IFRAME"||Na(s))return Promise.resolve(null);const a=s.getAttribute("src")||s.src||"";if(!fi(a)||!Cd(s))return Promise.resolve(null);const i=Td(s);return ie.has(i)&&((l=ie.get(i))!=null&&l.player)?Promise.resolve(ie.get(i).player):Ir().then(()=>new Promise(o=>{var m;if(ie.has(i)&&((m=ie.get(i))!=null&&m.player)){o(ie.get(i).player);return}const p=()=>{var h;if(!document.getElementById(i)){o(null);return}if(ie.has(i)&&((h=ie.get(i))!=null&&h.player)){o(ie.get(i).player);return}try{const f=new window.YT.Player(i,{events:{onReady:()=>{},onStateChange:b=>Dd(i,b),onError:()=>{}}});ie.set(i,{player:f,el:s,playing:!1}),s.dataset.dbsYtBound="1",o(f)}catch(f){console.warn("[dbs] bindYoutubeInterrupt failed",i,f),o(null)}};if(s.dataset.dbsYtBound==="1"&&ie.has(i)){o(ie.get(i).player);return}let c=!1;const u=()=>{c||(c=!0,p())};s.addEventListener("load",u,{once:!0}),setTimeout(u,400)}))}function ua(e){const s=[...(e&&e.querySelectorAll?e:document).querySelectorAll("iframe")].filter(a=>{if(Na(a))return!1;const i=a.getAttribute("src")||a.src||"";return fi(i)});return Promise.all(s.map(a=>jr(a)))}function Md(e){var i,n;const t=typeof e=="string"?document.getElementById(e):e,s=typeof e=="string"?e:t==null?void 0:t.id;if(!s||s==="dbsStickyFrame"||s==="dbsYtHost")return;const a=ie.get(s);if(a){a.playing&&(a.playing=!1,Ne=Math.max(0,Ne-1),Ne===0&&Qe());try{(n=(i=a.player)==null?void 0:i.destroy)==null||n.call(i)}catch{}ie.delete(s)}}const Us=new Set;function Je(){const e=(location.hash||"").replace(/^#/,"")||"/home";let t="",s=e;const a=e.indexOf("#");a>=0&&(t=e.slice(a+1).split("?")[0],s=e.slice(0,a));const i=s.startsWith("/")?s:"/"+s,[n,l=""]=i.split("?"),o=n.split("/").filter(Boolean);return{path:"/"+(o[0]||"home"),parts:o,query:Object.fromEntries(new URLSearchParams(l)),elementId:t,raw:i}}function j(e){const s=(e.startsWith("#")?e:"#"+(e.startsWith("/")?e:"/"+e)).replace(/^#/,"");if((location.hash||"").replace(/^#/,"")===s){Us.forEach(i=>i(Je()));return}location.hash=s}function Ld(e){return Us.add(e),()=>Us.delete(e)}function Pd(){const e=()=>Us.forEach(t=>t(Je()));window.addEventListener("hashchange",e),location.hash?e():location.hash="/home"}const ba="/pikk-app/",Mt=ba.endsWith("/")?ba.slice(0,-1):ba;function ts(e){if(e==null||e==="")return e;const t=String(e);return/^(https?:|data:|blob:|idb:|#|\/\/)/i.test(t)||Mt&&(t===Mt||t.startsWith(Mt+"/"))?t:t.startsWith("/")?Mt+t:(Mt||"")+"/"+t}function Rr(e=document){Mt&&(e.querySelectorAll("[src]").forEach(t=>{const s=t.getAttribute("src");if(!s)return;const a=ts(s);a!==s&&t.setAttribute("src",a)}),e.querySelectorAll("[srcset]").forEach(t=>{const s=t.getAttribute("srcset");if(!s||!s.includes("/"))return;const a=s.replace(/(^|,\s*)(\/(?!\/)[^\s,]+)/g,(i,n,l)=>n+ts(l));a!==s&&t.setAttribute("srcset",a)}),e.querySelectorAll("[data-zoom]").forEach(t=>{const s=t.getAttribute("data-zoom");if(!s)return;const a=ts(s);a!==s&&t.setAttribute("data-zoom",a)}),e.querySelectorAll("[poster]").forEach(t=>{const s=t.getAttribute("poster");if(!s)return;const a=ts(s);a!==s&&t.setAttribute("poster",a)}))}function Fr(e,t){e&&e.querySelectorAll("a[data-path]").forEach(s=>{const a=s.getAttribute("data-path")===t;s.classList.toggle("on",a),a?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current")})}const Id=Object.freeze([{label:"Songs",href:"#/music?view=songs",detail:"Browse released singles",icon:"♫"},{label:"Albums",href:"#/music?view=albums",detail:"Browse released albums",icon:"▣"},{label:"Beats",href:"#/music?view=beats",detail:"Beat marketplace not yet available",icon:"◉"},{label:"Playlists",href:"#/music?view=playlists",detail:"Verified YouTube playlists",icon:"▤"},{label:"Upload Music",href:"#/music?view=upload",detail:"Creator uploads coming later",icon:"⇧"}]),_d=Object.freeze({Songs:"music",Albums:"music",Beats:"music",Playlists:"videos","Upload Music":"music"});function ss(e=!1){const t=document.getElementById("pikkMusicMenu");if(!t||t.hidden)return;t.hidden=!0;const s=document.querySelector('#tabbar a[href="#/music"]');s==null||s.setAttribute("aria-expanded","false"),e&&(s==null||s.focus())}function qd(){let e=document.getElementById("pikkMusicMenu");return e||(e=document.createElement("div"),e.id="pikkMusicMenu",e.className="pikk-create-overlay",e.hidden=!0,e.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="pikkMusicMenuTitle">
    <div class="pikk-create-head"><strong id="pikkMusicMenuTitle">Music on PIKK</strong><button type="button" class="btn ghost" data-music-close aria-label="Close music menu">✕</button></div>
    <div class="pikk-create-options pikk-create-grid">
      ${Id.map(t=>`<a class="pikk-create-tile" href="${t.href}"><span class="pikk-menu-icon" aria-hidden="true">${ls[_d[t.label]||"music"]}</span><strong class="pikk-menu-title">${t.label}</strong><small>${t.detail}</small></a>`).join("")}
    </div>
    <button type="button" class="pikk-menu-cancel" data-music-close>Cancel</button>
    <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Beat selling and music uploads are not available yet</p>
  </div>`,document.body.appendChild(e),window.addEventListener("hashchange",()=>ss()),e.addEventListener("click",t=>{t.target===e||t.target.closest("[data-music-close]")?ss(!0):t.target.closest(".pikk-create-options a")&&ss()}),document.addEventListener("keydown",t=>{if(e.hidden||(t.key==="Escape"&&(t.preventDefault(),ss(!0)),t.key!=="Tab"))return;const s=[...e.querySelectorAll("a[href], button:not([disabled])")],a=s[0],i=s[s.length-1];if(!a){t.preventDefault();return}e.contains(document.activeElement)?t.shiftKey&&document.activeElement===a?(t.preventDefault(),i.focus()):!t.shiftKey&&document.activeElement===i&&(t.preventDefault(),a.focus()):(t.preventDefault(),(t.shiftKey?i:a).focus())}),e)}function Bd(e){var i,n;const t=qd(),s=t.hidden,a=document.getElementById("pikkCreateMenu");s&&a&&!a.hidden&&(a.hidden=!0,(i=document.querySelector('#tabbar a[href="#/create"]'))==null||i.setAttribute("aria-expanded","false")),t.hidden=!s,e==null||e.setAttribute("aria-expanded",String(s)),s?(n=t.querySelector("[data-music-close]"))==null||n.focus():e==null||e.focus()}const Od="dbs_media_v1",Ot="blobs",Nd=1;function Gr(){return new Promise((e,t)=>{const s=indexedDB.open(Od,Nd);s.onupgradeneeded=()=>{const a=s.result;a.objectStoreNames.contains(Ot)||a.createObjectStore(Ot,{keyPath:"id"})},s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error||new Error("idb open failed"))})}async function jd(e,t,s={}){const a=await Gr();return new Promise((i,n)=>{const l=a.transaction(Ot,"readwrite");l.objectStore(Ot).put({id:e,blob:t,mime:t.type||s.mime||"application/octet-stream",name:s.name||"",size:t.size||0,at:Date.now()}),l.oncomplete=()=>i(e),l.onerror=()=>n(l.error)})}async function Rd(e){const t=await Gr();return new Promise((s,a)=>{const n=t.transaction(Ot,"readonly").objectStore(Ot).get(e);n.onsuccess=()=>s(n.result||null),n.onerror=()=>a(n.error)})}const ya=new Map;async function ma(e){if(!e)return"";if(e.startsWith("idb:")){const t=e.slice(4);if(ya.has(t))return ya.get(t);const s=await Rd(t);if(!(s!=null&&s.blob))return"";const a=URL.createObjectURL(s.blob);return ya.set(t,a),a}return e}function Fd(e="blob"){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}const Gd={BASE_URL:"/pikk-app/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE:"/pikk-app/",VITE_BUILD_SHA:"9847b39647a958dcb0e5b59388767413f988a048"},zs=Object.freeze([{name:"Block Wars",players:"1–2",icon:"🥊",theme:"fighters",artwork:"/games/approved/01_block_wars.jpg",description:"City-based fighters, combos and special moves.",href:"#/blockwars"},{name:"PIKK Playground",players:"1–8",icon:"🎈",theme:"playground",artwork:"/games/approved/02_pikk_playground.jpg",description:"Create your character, race, jump and explore with friends."},{name:"PIKK Clash",players:"1",icon:"💎",theme:"clash",artwork:"/games/approved/03_pikk_clash.jpg",description:"Original neighborhood-themed match puzzles and venue upgrades."},{name:"PIKK Knockout",players:"1",icon:"💥",theme:"knockout",artwork:"/games/approved/04_pikk_knockout.jpg",description:"Stylized physics challenges: launch, bounce and knock targets off moving platforms."},{name:"PIKK Bowling",players:"1–4",icon:"🎳",theme:"bowling",artwork:"/games/approved/05_pikk_bowling.jpg",description:"Compete for strikes, spares and high scores."},{name:"PIKK Pickleball",players:"2–4",icon:"🏓",theme:"pickleball",artwork:"/games/approved/06_pikk_pickleball.jpg",description:"Play singles or doubles on colorful courts."},{name:"PIKK Pool",players:"1–2",icon:"🎱",theme:"pool",artwork:"/games/approved/07_pikk_pool.jpg",description:"Play 8-ball pool against friends or the computer."},{name:"PIKK Cup Pong",players:"2–4",icon:"🥤",theme:"pong",artwork:"/games/approved/08_pikk_cup_pong.jpg",description:"Aim, throw and eliminate opponents’ cups."},{name:"PIKK Poker",players:"2–8",icon:"♠️",theme:"poker",artwork:"/games/approved/09_pikk_poker.jpg",description:"Social Texas Hold’em with nonredeemable Play Chips."},{name:"PIKK Blackjack",players:"1–5",icon:"🃏",theme:"blackjack",artwork:"/games/approved/10_pikk_blackjack.jpg",description:"Try for 21 against the dealer using Play Chips."},{name:"PIKK Slots",players:"1",icon:"🎰",theme:"slots",artwork:"/games/approved/11_pikk_slots.jpg",description:"Entertainment-only reels and virtual Play Chips."},{name:"PIKK Speed",players:"2",icon:"⚡",theme:"speed",artwork:"/games/approved/12_pikk_speed.jpg",description:"Race to play your cards before your opponent."},{name:"PIKK Spades",players:"4",icon:"♠",theme:"spades",artwork:"/games/approved/13_pikk_spades.jpg",description:"Partner strategy and card battles."},{name:"PIKK Dominoes",players:"2–4",icon:"🁢",theme:"dominoes",artwork:"/games/approved/14_pikk_dominoes.jpg",description:"Match tiles and outplay opponents."},{name:"PIKK Chess",players:"2",icon:"♟",theme:"chess",artwork:"/games/approved/15_pikk_chess.jpg",description:"Challenge opponents in a classic strategy game."}]);function Hs(e){return e!=null&&e.artwork?(Gd&&"/pikk-app/"||"/").replace(/\/?$/,"/")+String(e.artwork).replace(/^\/+/,""):""}const ka=Object.freeze([{tier:"spotlight",name:"Premium Spotlight",slots:1,day:199,week:999},{tier:"featured",name:"Featured Box",slots:2,day:99,week:499},{tier:"promo",name:"Promo Box",slots:3,day:49,week:249}]);function wa(e,t){return`<article class="pikk-ad-slot pikk-ad-${e.tier}" data-promo-tier="${e.tier}" aria-label="${e.name} slot ${t}, pricing preview">
    <span class="pikk-ad-slot-top"><span class="pikk-ad-slot-icon" aria-hidden="true">▶</span><span class="pikk-ad-slot-number">0${t}</span></span>
    <strong>${e.name}</strong>
    <span class="pikk-ad-slot-description">Available placement · booking coming soon</span>
    <span class="pikk-ad-slot-prices"><b>$${e.day}</b><small>/ 24 hours</small></span>
    <span class="pikk-ad-slot-week">$${e.week} / 7 days</span>
  </article>`}function Kr(e){return`<div class="pikk-stories-promotions" data-featured-context="${e==="videos"?"videos":"home"}">
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
        <div class="pikk-featured-row pikk-featured-row-hero">${wa(ka[0],1)}</div>
        <div class="pikk-featured-row pikk-featured-row-two">${[1,2].map(s=>wa(ka[1],s)).join("")}</div>
        <div class="pikk-featured-row pikk-featured-row-three">${[1,2,3].map(s=>wa(ka[2],s)).join("")}</div>
      </div>
      <p class="pikk-featured-footnote">Home and Videos placements are priced separately. Rates are introductory proposals; no paid placement or guaranteed views are currently offered.</p>
    </section>
  </div>`}const Kd={Explore:"🧭","Shorts / Clips":"▶",Music:"🎵",Videos:"🎬",Posts:"📸",Live:"🔴","PIKK Lounge":"💬",Vault:"🔐",Marketplace:"🛍️",Missions:"🎯"},Ws=[{id:"toplive",label:"Top live"},{id:"videos",label:"Videos"},{id:"rising",label:"Rising"},{id:"hot",label:"Hot lives"},{id:"songs",label:"Songs"}],Vd=8e3,vi="dbs_home_stage_v2",Ud=["dbs_home_stage"];function bi(e){const t=Number(e)||0;return t>=1e3?`${(t/1e3).toFixed(t>=1e4?0:1)}k`:String(t)}function Cs(e){return e?!!(e.house||e.hostId==="dbs"||e.hostName==="DatBoiSkeet"):!1}function Wi(e){return e?!!(e.house||e.userId==="dbs"||e.username==="DatBoiSkeet"):!1}function zd(e=3){const t=zt(),s=t.filter(n=>!Cs(n)),a=t.filter(n=>Cs(n)),i=s.slice(0,Math.max(2,e-1));for(a[0]&&i.push(a[0]);i.length<e&&s[i.filter(n=>!Cs(n)).length];){const n=s[i.filter(l=>!Cs(l)).length];if(!n||i.includes(n))break;i.push(n)}return i.slice(0,e)}function Hd(e=4){const t=Cr(Math.max(8,e+4)),s=t.filter(n=>!Wi(n)),a=t.filter(n=>Wi(n)),i=[...s.slice(0,3)];a[0]&&i.push(a[0]);for(const n of s.slice(3)){if(i.length>=e)break;i.includes(n)||i.push(n)}for(const n of a.slice(1)){if(i.length>=e)break;i.includes(n)||i.push(n)}return i.slice(0,e)}function Vr(){const e=L().live,t=zt().map(s=>({...s}));if(e&&!e.endedAt){const s=Math.max(0,Number(e.viewers)||0),a=Math.max(0,Number(e.giftsTotal)||0);t.push({id:e.id||"session",hostId:e.hostId,hostName:e.hostName||"Creator",title:e.title||"Live now",viewers:s,giftsTotal:a,score:s+a*20,house:e.hostId==="dbs"||e.hostName==="DatBoiSkeet"})}return t.sort((s,a)=>(Number(a.viewers)||0)-(Number(s.viewers)||0)||(Number(a.score)||0)-(Number(s.score)||0)),t[0]||null}function qs(e,{rising:t=!1}={}){const s=e.house?"House":t?"Rising":"Hot",a=Number(e.viewers)||0,i=bi(a),n=t&&e.playbacksToday!=null?` · ~${r(String(e.playbacksToday))} playbacks today`:"";return`
    <a class="home-live-card" href="#/live">
      <div class="live-hoodie" aria-hidden="false">
        <span class="live-hoodie-pill">LIVE</span>
        <span class="live-hoodie-viewers" title="${r(i)} watching">${r(i)}</span>
      </div>
      <div class="home-live-top">
        <span class="home-live-dot" aria-hidden="true"></span>
        <strong>@${r(e.hostName)}</strong>
        <span class="chip home-live-chip">${r(s)}</span>
      </div>
      <div class="home-live-title">${r(e.title||"Live now")}</div>
      <div class="home-live-stats muted">
        ${r(i)} watching · ${r(String(e.giftsTotal||0))} gifts
        ${n}
      </div>
      <div class="home-live-score muted">Score ${r(String(e.score||0))} · TEST MODE seed</div>
    </a>`}function Wd(e){return e.mediaType==="video"?"Video":e.image||e.mediaType==="image"?"Pic":"Post"}function Yd(e){if(!e)return"";const t=Number(e.playsToday)||0,s=t>=1e3?`${(t/1e3).toFixed(t>=1e4?0:1)}k`:String(t),a=e.cover?`<img class="la-thumb" src="${r(e.cover)}" alt="" loading="lazy" />`:'<span class="la-thumb la-thumb-empty" aria-hidden="true">♪</span>',i=e.demo?" · DEMO seed":"";return`
    <li class="la-row la-song">
      <a class="la-main" href="#/music">
        ${a}
        <span class="la-body">
          <strong>${r(e.title||"Track")}</strong>
          <span class="la-preview">${r(e.artist||"DatBoiSkeet")} · ${r(s)} plays today${r(i)}</span>
          <span class="la-stats muted">${r(e.status||"Music")} · ${r(e.day||"today")}</span>
        </span>
      </a>
      <span class="chip la-chip-played">Most played · today</span>
    </li>`}function Qd(e){const t=Number(e.viewers)||0,s=bi(t),a=e.house?"House":"Hot";return`
    <li class="la-row la-live">
      <a class="la-main" href="#/live">
        <span class="la-hoodie" aria-label="Live · ${r(s)} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers">${r(s)}</span>
        </span>
        <span class="la-body">
          <strong>@${r(e.hostName)}</strong>
          <span class="la-preview">${r(e.title||"Live now")}</span>
          <span class="la-stats muted">${r(s)} watching · ${r(String(e.giftsTotal||0))} gifts · score ${r(String(e.score||0))}</span>
        </span>
      </a>
      <span class="chip">${r(a)}</span>
    </li>`}function Xd(e){const t=e.postId||e.id,s=Wd(e),a=e.image?`<img class="la-thumb" src="${r(e.image)}" alt="" loading="lazy" />`:`<span class="la-thumb la-thumb-empty" aria-hidden="true">${r(((e.username||"?")[0]||"?").toUpperCase())}</span>`,i=e.house?" · house":"";return`
    <li class="la-row la-post">
      <a class="la-main" href="#/posts?focus=${r(t)}">
        ${a}
        <span class="la-body">
          <strong>@${r(e.username||"creator")}</strong>
          <span class="la-preview">${r((e.preview||e.text||"Hot post").slice(0,72))}</span>
          <span class="la-stats muted">♥ ${r(String(e.likes||0))} · 💬 ${r(String(e.comments||0))} · ↗ ${r(String(e.shares||0))} · score ${r(String(e.score||0))}${r(i)}</span>
        </span>
      </a>
      <span class="chip">${r(s)}</span>
    </li>`}function Jd(e){const t=e.coverRef&&!String(e.coverRef).startsWith("idb:")?e.coverRef:"";return`
    <li class="la-row la-pic">
      <a class="la-main" href="#/posts">
        ${t?`<img class="la-thumb" src="${r(t)}" alt="" loading="lazy" />`:'<span class="la-thumb la-thumb-empty" aria-hidden="true">📷</span>'}
        <span class="la-body">
          <strong>${r(e.title||"Picture")}</strong>
          <span class="la-preview">${r(e.artist||"DatBoiSkeet")} · from Admin catalog</span>
          <span class="la-stats muted">High-engagement pic · TEST MODE</span>
        </span>
      </a>
      <span class="chip">Pic</span>
    </li>`}function Zd(){for(const e of Ud){try{sessionStorage.removeItem(e)}catch{}try{localStorage.removeItem(e)}catch{}}try{localStorage.removeItem(vi)}catch{}}function Ur(){Zd();try{const e=sessionStorage.getItem(vi);if(Ws.some(t=>t.id===e))return e}catch{}return"toplive"}function ep(e){try{sessionStorage.setItem(vi,e)}catch{}}function Yi(e){return"$"+Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2})}function tp(e){const t=Math.max(0,e-Date.now()),s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return t<=0?"Ended":`${s}h ${a}m left`}function zr(e){if(!e)return'<p class="muted" style="margin:0">No daily app goal right now.</p>';const t=Math.min(100,Math.round(e.raised/(e.targetAmount||1)*100));return`
    <div class="home-goal-head"><strong class="home-goal-name">${r(e.name)}</strong>
      <span class="chip home-goal-time" id="homeGoalTimeLeft">${tp(e.endsAt)}</span></div>
    <div class="home-goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${t}">
      <div class="home-goal-fill" style="width:${t}%"></div></div>
    <p class="muted home-goal-amounts" style="margin:6px 0 10px">${Yi(e.raised)} raised of ${Yi(e.targetAmount)} · ${t}%</p>
    <div class="row wrap" style="gap:8px">
      ${[50,100,250].map(s=>`<button type="button" class="btn ghost home-goal-donate" data-goal-id="${r(e.id)}" data-coins="${s}">Donate ${s} coins</button>`).join("")}
      <form class="home-goal-custom-form" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:end">
        <label style="flex:1;min-width:125px">Custom coins
          <input class="home-goal-custom-coins" type="number" inputmode="numeric" min="1" max="1000000" step="1" required placeholder="Enter coins" style="width:100%" />
        </label>
        <button type="submit" class="btn primary">Donate custom</button>
      </form>
    </div>`}function sp(){const e=fo.map(A=>`
    <a class="preview-card" href="#${A.route}${A.hash?"#"+A.hash:""}">
      <span class="pc-icon" aria-hidden="true">${Kd[A.title]||"◆"}</span>
      <strong>${r(A.title)}</strong>
      <span class="muted">${r(A.blurb)}</span>
    </a>`).join(""),t=Pt.map(A=>`
    <a class="cover-card" href="#/music">
      <div class="cover-frame">
        <span class="badge-cs">${r(A.status)}</span>
        <img src="${r(A.cover)}" alt="${r(A.title)}" loading="lazy" />
      </div>
      <div class="t">${r(A.title)}</div>
      <div class="sub">${r(A.artist)}</div>
    </a>`).join(""),s=ye.filter(A=>(A.category||"Music Videos")==="Music Videos"),a=s.filter(A=>A.featured),i=a.length?a:s.slice(0,6),n=i[0]||s[0]||ye[0],l=za[0],o=i.map(A=>`
    <div class="vid">
      <a class="thumb" href="${r(A.youtube)}" target="_blank" rel="noopener" aria-label="Play ${r(A.title)}"><span>▶</span></a>
      <div>
        <strong>${r(A.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">
          <a href="${r(A.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a>
          · <a href="#/videos">Embed on Videos</a>
        </div>
      </div>
    </div>`).join(""),p=i.map((A,De)=>`
    <button type="button" class="mv-pick${De===0?" on":""}" data-embed="${r(A.embed)}" data-title="${r(A.title)}" data-yt="${r(A.youtube)}">
      <span class="mv-pick-play" aria-hidden="true">▶</span>
      <span class="mv-pick-t">${r(A.title)}</span>
    </button>`).join(""),c=l?`<div class="card home-mix" id="home-dbs-mix">
        <h3>DatBoiSkeet Mix</h3>
        <p class="muted" style="margin:0 0 10px">Stream from the original YouTube Mix playlist — not rehosted.</p>
        <div class="hero-video" style="margin:0 0 10px">
          <iframe src="${r(Ye(l.embed))}" title="${r(l.title)}" allowfullscreen loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div class="row wrap" style="gap:8px">
          <a class="btn" href="${r(l.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
          <a class="btn ghost" href="#/music#youtube-mixes">Music · Mixes</a>
          <a class="btn ghost" href="#/videos">All videos</a>
        </div>
      </div>`:"",m=wt({publishedOnly:!0,types:["picture"]}).map(A=>`
    <div class="cover-card catalog-admin-home" data-id="${r(A.id)}">
      <div class="cover-frame">
        <span class="badge-cs">From Admin</span>
        <img data-idb-src="${r(A.coverRef&&A.coverRef.startsWith("idb:")?A.coverRef:"")}" src="${r(A.coverRef&&!A.coverRef.startsWith("idb:")?A.coverRef:"")}" alt="${r(A.title)}" loading="lazy" />
      </div>
      <div class="t">${r(A.title)}</div>
      <div class="sub">${r(A.artist)}</div>
    </div>`).join(""),f=wt({publishedOnly:!0,types:["video"]}).slice(0,3).map(A=>`
    <div class="vid catalog-admin-home" data-id="${r(A.id)}">
      <a class="thumb" href="${r(A.youtube||"#/videos")}" ${A.youtube?'target="_blank" rel="noopener"':""}><span>▶</span></a>
      <div>
        <strong>${r(A.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">${r(A.artist)} · Admin</div>
      </div>
    </div>`).join(""),b=L().live,k=b&&!b.endedAt?`<li class="la-row la-session"><a class="la-main" href="#/live"><span class="la-hoodie" aria-label="Live now"><span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span><span class="live-hoodie-viewers">${r(bi(b.viewers||0))}</span></span><span class="la-body"><strong>@${r(b.hostName)}</strong><span class="la-preview">${r(b.title||"Live now")}</span><span class="la-stats muted">${r(String(b.viewers||0))} watching · your session</span></span></a><span class="chip">Live</span></li>`:"",v=Mr(),w=Yd(v),E=zd(3),T=Hd(4),y=wt({publishedOnly:!0,types:["picture"]}).slice(0,2),D=E.map(Qd).join(""),$=T.map(Xd).join(""),B=y.map(Jd).join(""),ce=`${w}${k}${D}${$}${B}
        <li class="la-row la-kicker"><span class="la-main la-kicker-main"><span class="la-body"><strong>Ladies Only</strong><span class="la-preview">Art live on Music · playback when it drops</span></span></span><span class="chip">Music</span></li>
        <li class="la-row la-kicker"><a class="la-main" href="#/restream"><span class="la-body"><strong>PIKK Restream</strong><span class="la-preview">Stream to YouTube, TikTok, Twitch &amp; more — free inside PIKK</span></span></a><span class="chip">Restream</span></li>${!w&&!D&&!$&&!B&&!k?'<li class="la-row"><span class="la-main la-kicker-main"><span class="la-body"><span class="la-preview muted">No hot activity yet — engage on Posts / go Live to spike the feed.</span></span></span><span class="chip">TEST</span></li>':""}`,K=Ur(),ke=Ws.map(A=>`
    <button type="button" class="home-stage-tab${A.id===K?" on":""}" role="tab"
      aria-selected="${A.id===K?"true":"false"}" data-stage="${A.id}" id="stage-tab-${A.id}">
      ${r(A.label)}
    </button>`).join(""),xe=zt().slice(0,5),M=vd().slice(0,5),P=xe.map(A=>qs(A)).join("")||'<p class="muted">No hot lives yet — seed from Live / Hot Feed.</p>',q=M.map(A=>qs(A,{rising:!0})).join("")||'<p class="muted">No rising streamers yet.</p>',z=Pt.map(A=>`
    <a class="home-song-card" href="#/music">
      <img src="${r(A.cover)}" alt="" loading="lazy" />
      <div>
        <strong>${r(A.title)}</strong>
        <div class="muted" style="font-size:12px">${r(A.artist)} · ${r(A.status)}</div>
        <span class="chip" style="margin-top:6px">Enhancement · Coming Soon</span>
      </div>
    </a>`).join(""),H=Vr(),F=H?qs(H):'<p class="muted">No live streams right now — go Live or check Hot Feed.</p>',V=`
    <div class="home-stage-panel${K==="toplive"?" on":""}" data-panel="toplive" role="tabpanel" id="homeTopLivePanel" ${K==="toplive"?"":"hidden"}>
      <p class="muted home-stage-lead">Top live · highest viewers right now. Red LIVE hoodie on the card · updates as rankings change.</p>
      <div class="home-live-grid" id="homeTopLiveGrid">${F}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,we=`
    <div class="home-stage-panel${K==="videos"?" on":""}" data-panel="videos" role="tabpanel" ${K==="videos"?"":"hidden"}>
      <div class="hero-video" id="homeFeaturedVideo">
        <iframe
          id="homeFeaturedIframe"
          src="${r(Ye(n.embed))}"
          title="${r(n.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"></iframe>
      </div>
      <div class="hero-caption">
        <strong id="homeFeaturedTitle">${r(n.title)}</strong>
        <a href="#/videos">All videos →</a>
      </div>
      <div class="mv-carousel" role="tablist" aria-label="Official music videos">${p}</div>
    </div>`,Ee=`
    <div class="home-stage-panel${K==="rising"?" on":""}" data-panel="rising" role="tabpanel" ${K==="rising"?"":"hidden"}>
      <p class="muted home-stage-lead">Rising streamers · mid-tier creators from §38 Hot Feed signals (non-house). TEST MODE seeds.</p>
      <div class="home-live-grid">${q}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,Ve=`
    <div class="home-stage-panel${K==="hot"?" on":""}" data-panel="hot" role="tabpanel" ${K==="hot"?"":"hidden"}>
      <p class="muted home-stage-lead">Hot lives · ranked by viewers + gifts score (house OK). Strong playbacks / spikes from earlier today count.</p>
      <div class="home-live-grid">${P}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,Ue=`
    <div class="home-stage-panel${K==="songs"?" on":""}" data-panel="songs" role="tabpanel" ${K==="songs"?"":"hidden"}>
      <p class="muted home-stage-lead">Enhancements &amp; songs · Coming Soon covers + featured tracks. Upload &amp; sell on Music when Commerce lands.</p>
      <div class="home-song-grid">${z}
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
    <div class="home-stage card" id="homeFeaturedStage" data-active="${r(K)}">
      <div class="home-stage-head">
        <div>
          <p class="kicker" style="margin:0">Featured stage</p>
          <h2 class="home-stage-title">Top live · Videos · Rising · Hot · Songs</h2>
        </div>
        <span class="chip chip-audit">TEST MODE · auto-cycle</span>
      </div>
      <div class="home-stage-tabs" role="tablist" aria-label="Featured stage">${ke}</div>
      <div class="home-stage-panels">
        ${V}
        ${we}
        ${Ee}
        ${Ve}
        ${Ue}
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
      <div id="homeAppGoalBody">${zr(Ia())}</div>
      <p class="chip" style="margin-top:10px">TEST MODE · no real payments</p>
    </div>`,J=i.slice(0,6).map((A,De)=>{const Ht=new URL(A.youtube).searchParams.get("v")||"",S=Ht?`https://i.ytimg.com/vi/${encodeURIComponent(Ht)}/hqdefault.jpg`:"";return`<a class="pikk-home-media-card ${De<2?"is-featured":""}" href="${r(A.youtube)}" target="_blank" rel="noopener noreferrer"
       aria-label="Watch ${r(A.title)} on YouTube">
       ${S?`<img src="${r(S)}" alt="" loading="${De<2?"eager":"lazy"}" decoding="async" referrerpolicy="no-referrer"/>`:'<span class="pikk-home-media-fallback" aria-hidden="true">♫</span>'}
       <span class="pikk-home-media-shadow"></span>
       <span class="pikk-home-media-badge">▶ OFFICIAL VIDEO</span>
       <span class="pikk-home-media-title">${r(A.title)}</span>
     </a>`}).join(""),xs=`
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
        ${Pt.slice(0,4).map(A=>`
    <a class="pikk-home-circle" href="#/music" aria-label="Explore music: ${r(A.title)}">
      <span class="pikk-home-circle-ring"><img src="${r(A.cover)}" alt="" loading="lazy" decoding="async"/></span>
      <span>${r(A.title)}</span>
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
        ${J}
      </div>
      <div class="pikk-home-media-footer">
        <p class="muted">Real official releases · Video thumbnails from YouTube · No fabricated views or live counts</p>
        <a href="#/videos">View all videos →</a>
      </div>
    </section>`}

    ${dt}

    ${Kr("home")}

    ${pt}

    <section class="home-arcade card" id="homeArcade" aria-label="PIKK Games featured slideshow">
      <div class="home-arcade-top">
        <div><p class="kicker">Discover the arcade</p><h2>15 GAMES. ONE PIKK.</h2></div>
        <a href="#/games" class="btn ghost">All games →</a>
      </div>
      <div class="home-arcade-stage" aria-live="off">
        ${zs.map((A,De)=>`<article class="home-arcade-slide pikk-game-${r(A.theme)}" data-game-slide="${De}" ${De?"hidden":""}>
          <div class="home-arcade-image">${A.artwork?`<img src="${r(Hs(A))}" alt="" loading="lazy" decoding="async" />`:`<span class="home-arcade-symbol" aria-hidden="true">${A.icon}</span>`}</div>
          <div class="home-arcade-info">
            <span class="chip">GAME ${De+1} OF 15 · COMING SOON</span>
            <h3>${r(A.name)}</h3>
            <p>${r(A.description)}</p>
            <small>${r(A.players)} ${A.players==="1"?"Player":"Players"} · Preview only</small>
            <a class="btn primary" href="${r(A.href||"#/games")}">View in Arcade</a>
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
        ${ce}
      </ul>
      <div class="row wrap live-activity-links">
        <a class="btn ghost" href="#/music">Music</a>
        <a class="btn ghost" href="#/live">Live</a>
        <a class="btn ghost" href="#/posts">Posts · Hot</a>
      </div>
    </div>

    <div class="card video-list">
      <h3>Official DatBoiSkeet MVs</h3>
      ${o}${f}
      <a class="btn ghost block" href="#/videos" style="margin-top:10px">All videos</a>
    </div>
  `;return I("Home",xs,{lead:"Featured stage · Top live · Block Wars preview · Live activity (hot lives · high-engagement posts from creators &amp; community · house updates) · Mix · Coming Soon · creator sell DEMO."})}function ap(e){var x,N,ce,K,ke,xe;const t=e.querySelector("#homeArcade");if(t){const M=[...t.querySelectorAll("[data-game-slide]")],P=t.querySelector("#homeArcadePosition");let q=0,z=null;const H=(N=(x=window.matchMedia)==null?void 0:x.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:N.matches,F=Ee=>{q=(Ee+M.length)%M.length,M.forEach((Ve,Ue)=>{Ve.hidden=Ue!==q}),P&&(P.textContent=`${q+1} / ${M.length}`)},V=()=>{z!==null&&clearInterval(z),z=null};(ce=t.querySelector("[data-arcade-prev]"))==null||ce.addEventListener("click",()=>{V(),F(q-1)}),(K=t.querySelector("[data-arcade-next]"))==null||K.addEventListener("click",()=>{V(),F(q+1)}),H||(z=setInterval(()=>{if(!document.body.contains(t)){V();return}document.visibilityState==="visible"&&F(q+1)},6500));const we=new MutationObserver(()=>{document.body.contains(t)||(V(),we.disconnect())});we.observe(document.body,{childList:!0,subtree:!0})}const s=e.querySelector("#homeAppGoalBody");if(s){const M=()=>{document.body.contains(s)?s.innerHTML=zr(Ia()):(clearInterval(q),document.removeEventListener("visibilitychange",P))},P=()=>{document.visibilityState==="visible"&&M()},q=setInterval(M,3e4);document.addEventListener("visibilitychange",P),s.addEventListener("submit",z=>{var we,Ee;if(!z.target.matches(".home-goal-custom-form"))return;z.preventDefault();const H=Number((we=z.target.querySelector(".home-goal-custom-coins"))==null?void 0:we.value);if(!Number.isSafeInteger(H)||H<1||H>1e6)return g("Enter 1–1,000,000 whole coins");const F=(Ee=Ia())==null?void 0:Ee.id,V=Rs(F,H);g(V!=null&&V.ok?"Custom donation sent · TEST MODE":(V==null?void 0:V.error)==="insufficient"?"Not enough demo coins":(V==null?void 0:V.error)==="signin"?"Sign in first":"Donation unavailable · TEST MODE"),M()}),s.addEventListener("click",z=>{const H=z.target.closest(".home-goal-donate");if(!H)return;const F=Rs(H.dataset.goalId,Number(H.dataset.coins));g(F&&F.ok?`TEST MODE · ${H.dataset.coins} coins donated (no real payment)`:"TEST MODE · donate unavailable"),M()})}const a=e.querySelector(".page-head");if(a){a.querySelectorAll(".badge-phase, a.badge-phase, .live-hoodie-pill, .live-hoodie").forEach(P=>{P.remove()}),a.querySelectorAll("a, span, button").forEach(P=>{const q=(P.textContent||"").replace(/\s+/g," ").trim();(/^●?\s*LIVE$/i.test(q)||q==="LIVE")&&P.remove()});const M=a.querySelector("h1");M&&[...M.children].forEach(P=>{const q=(P.textContent||"").replace(/\s+/g," ").trim();(/LIVE/i.test(q)||P.classList.contains("badge-phase")||P.classList.contains("live-hoodie-pill"))&&P.remove()})}e.querySelectorAll("[data-idb-src]").forEach(async M=>{const P=M.getAttribute("data-idb-src");if(!P)return;const q=await ma(P);q&&(M.tagName==="IMG"||M.tagName==="VIDEO"||M.tagName==="AUDIO")&&(M.src=q)});const i=e.querySelector("#homeFeaturedIframe"),n=e.querySelector("#homeFeaturedTitle");e.querySelectorAll(".mv-pick").forEach(M=>{M.addEventListener("click",()=>{e.querySelectorAll(".mv-pick").forEach(q=>q.classList.remove("on")),M.classList.add("on");const P=M.dataset.embed||"";i&&P&&(Md(i),i.removeAttribute("data-dbs-yt-bound"),i.src=P+(P.includes("?")?"&":"?")+"rel=0",i.title=M.dataset.title||"",jr(i)),n&&(n.textContent=M.dataset.title||"")})}),ua(e);const l=e.querySelector("#bwPreviewVideo"),o=e.querySelector("#bwPreviewPlay");if(l){const M=()=>{if(!o)return;const P=l.paused||l.ended;o.hidden=!P,o.setAttribute("aria-hidden",P?"false":"true")};o==null||o.addEventListener("click",P=>{P.preventDefault(),l.play().catch(()=>{})}),l.addEventListener("play",()=>{Bt(),M()}),l.addEventListener("pause",()=>{Qe(),M()}),l.addEventListener("ended",()=>{Qe(),M()}),l.addEventListener("pointerdown",()=>{l.paused||Bt()}),M()}const p=2e4;function c(){const M=e.querySelector("#homeTopLiveGrid");if(!M||!document.body.contains(M))return!1;const P=Vr();return M.innerHTML=P?qs(P):'<p class="muted">No live streams right now — go Live or check Hot Feed.</p>',!0}let u=setInterval(()=>{c()||(clearInterval(u),u=null)},p);const m=()=>{document.visibilityState==="visible"&&c()};document.addEventListener("visibilitychange",m),window.addEventListener("focus",c);const h=e.querySelector("#homeFeaturedStage");if(!h){const M=new MutationObserver(()=>{document.body.contains(e)||(u&&clearInterval(u),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",c),M.disconnect())});M.observe(document.body,{childList:!0,subtree:!0});return}const f=[...e.querySelectorAll(".home-stage-tab")],b=[...e.querySelectorAll(".home-stage-panel")];let k=!1,v=null;const w=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.classList.contains("reduce-motion")||((xe=(ke=document.body)==null?void 0:ke.classList)==null?void 0:xe.contains("reduce-motion"));function E(M){Ws.some(P=>P.id===M)||(M="toplive"),h.dataset.active=M,ep(M),f.forEach(P=>{const q=P.dataset.stage===M;P.classList.toggle("on",q),P.setAttribute("aria-selected",q?"true":"false")}),b.forEach(P=>{const q=P.dataset.panel===M;P.classList.toggle("on",q),q?P.removeAttribute("hidden"):P.setAttribute("hidden","")})}function T(){const M=Ws.map(z=>z.id),P=h.dataset.active||"toplive",q=M.indexOf(P);E(M[(q+1)%M.length])}function y(){D(),!(k||w)&&(v=setInterval(T,Vd))}function D(){v&&(clearInterval(v),v=null)}f.forEach(M=>{M.addEventListener("click",()=>{k=!0,D(),E(M.dataset.stage)})});const $=Ur()||"toplive";E($),w||setTimeout(()=>{!document.body.contains(h)||k||y()},1e4);const B=new MutationObserver(()=>{document.body.contains(h)||(D(),u&&(clearInterval(u),u=null),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",c),B.disconnect())});B.observe(document.body,{childList:!0,subtree:!0})}const ip="9847b39647a958dcb0e5b59388767413f988a048",np=Object.freeze([{title:"Premium Messages",detail:"Refreshed inbox, message search and conversation shortcuts.",route:"#/messages",pr:95},{title:"Seven-tab navigation",detail:"Home, Music, Videos, Create, Connect, Dating and Shop.",route:"#/home",pr:94},{title:"Dating discovery",detail:"New prelaunch landing page and connection cards.",route:"#/dating",pr:93},{title:"Arcade artwork viewer",detail:"Full-size art with previous, next and keyboard navigation.",route:"#/games",pr:92},{title:"15-game Arcade showcase",detail:"Owner-approved game artwork and responsive card layout.",route:"#/games",pr:91}]);function rp(){const e=ip.slice(0,8),t=np.map((s,a)=>`
    <article class="pikk-update-card">
      <span class="pikk-update-number" aria-hidden="true">${String(a+1).padStart(2,"0")}</span>
      <div class="pikk-update-card-copy">
        <h3>${r(s.title)}</h3>
        <p>${r(s.detail)}</p>
        <div class="pikk-update-links">
          <a class="btn primary" href="${r(s.route)}">See in PIKK</a>
          <a class="pikk-update-source" href="https://github.com/scrubdup/pikk-app/pull/${s.pr}" target="_blank" rel="noopener noreferrer">Code update #${s.pr}</a>
        </div>
      </div>
    </article>`).join("");return I("PIKK Updates",`
    <section class="pikk-updates-hero" aria-label="PIKK app release information">
      <div>
        <p class="kicker">PIKK · WHAT'S NEW</p>
        <h2>See what changed. <span>Know what loaded.</span></h2>
        <p>These are the most recent completed visual releases. Use the links below to open each updated section. Some features are still in TEST MODE.</p>
        <div class="pikk-updates-build">
          <span>Version loaded on this device</span>
          <strong id="pikkLoadedBuild" data-build="${r(e)}">${r(e)}</strong>
        </div>
        <div class="pikk-updates-actions">
          <button class="btn primary" type="button" id="pikkUpdatesRefresh">Check for latest version</button>
          <a class="btn ghost" href="#/home">Return home</a>
        </div>
      </div>
      <div class="pikk-updates-hero-mark" aria-hidden="true">PIKK<span>↗</span></div>
    </section>
    <section class="pikk-updates-list" aria-label="Recent published updates">
      <h2>Recent improvements</h2>
      ${t}
    </section>
    <p class="pikk-updates-note">A refresh reloads this browser's app bundle; it does not clear your account or local demo data. If a change still does not appear, compare the version above with the published source commit.</p>
  `,{lead:"A clear record of recent PIKK improvements."})}function op(e){var t;(t=e.querySelector("#pikkUpdatesRefresh"))==null||t.addEventListener("click",()=>{window.location.assign(bn(window.location.href))})}const lp=20*60,cp=250*1024*1024;function dp({duration:e,size:t,type:s}){return s!=null&&s.startsWith("video/")?!Number.isFinite(t)||t<=0||t>cp?"Video must be under 250 MB for this device-local preview.":!Number.isFinite(e)||e<=0?"Unable to read video duration. Try another file.":e>lp?"PIKKUP Phase 1 videos must be 20 minutes or shorter.":"":"Select a supported video file."}function pp(e){return new Promise((t,s)=>{const a=URL.createObjectURL(e),i=document.createElement("video");let n=!1;const l=setTimeout(()=>o(new Error("Video metadata timed out")),12e3);function o(p,c){n||(n=!0,clearTimeout(l),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(a),p?s(p):t(c))}i.preload="metadata",i.onloadedmetadata=()=>o(null,i.duration),i.onerror=()=>o(new Error("Cannot read this video file")),i.src=a})}const Hr=[{id:"song",label:"Song",acceptCover:"image/*",acceptMedia:"audio/*,.mp3,.m4a,.wav,.aac"},{id:"album",label:"Album",acceptCover:"image/*",acceptMedia:"audio/*,.mp3,.m4a,.wav,.aac"},{id:"video",label:"Video",acceptCover:"image/*",acceptMedia:"video/*,.mp4,.mov,.webm"},{id:"picture",label:"Picture",acceptCover:"image/*",acceptMedia:"image/*"}];function up(e){return I("Admin",`<div class="card admin-gate">
      <h3>Admin gate · TEST MODE</h3>
      <p class="muted">Demo-only. No real auth. Enable one of:</p>
      <ol class="admin-gate-steps">
        <li>Sign in on <a href="#/profile">Profile</a>, then toggle <strong>Demo Admin</strong>.</li>
        <li>While signed in, open <code>#/admin?admin=1</code> (sets <code>user.role='admin'</code> in <code>dbs_v1</code>).</li>
      </ol>
      <p>Signed in as: <strong>${r((e==null?void 0:e.username)||"guest")}</strong>
        ${e?"":'· <a class="btn" href="#/profile">Sign in</a>'}</p>
      ${e?'<a class="btn primary" href="#/admin?admin=1">Enable Admin · TEST MODE</a>':""}
    </div>
    <div class="card muted">Full team roles, revenue, and moderation ship later phases.</div>`,{lead:"Gated demo dashboard."})}function mp(){return`
  <section class="card admin-add" id="adminAdd">
    <h3>Add Content</h3>
    <p class="muted admin-add-note">PIKKUP preview: video uploads must be 20 minutes or shorter and at most 250 MB. Device-local only, not public hosting. TEST MODE · no backend. Metadata → <code>localStorage dbs_v1.catalog</code>. Files → IndexedDB <code>dbs_media_v1</code>. Works on iPhone Safari &amp; desktop. Large files stay on this device only.</p>

    <div class="admin-type-tabs" role="tablist" aria-label="Content type">${Hr.map((t,s)=>`<button type="button" class="admin-type-tab${s===0?" on":""}" data-type="${r(t.id)}" role="tab">${r(t.label)}</button>`).join("")}</div>

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
  </section>`}function gp(e){if(!e.length)return'<div class="card admin-catalog"><h3>Catalog</h3><p class="muted">No admin-added items yet.</p></div>';const t=e.map(s=>{const a=s.coverRef&&!s.coverRef.startsWith("idb:")?r(s.coverRef):"";return`<div class="admin-catalog-row" data-id="${r(s.id)}">
        <div class="admin-catalog-thumb">
          ${a?`<img src="${a}" alt="" />`:`<img data-idb-src="${r(s.coverRef||"")}" alt="" class="idb-pending" />`}
        </div>
        <div class="admin-catalog-meta">
          <strong>${r(s.title)}</strong>
          <span class="muted">${r(s.type)} · ${r(s.artist)}</span>
          <span class="chip">${s.published?"Published":"Draft"}</span>
          ${s.streamingLinks&&Object.keys(s.streamingLinks).length?'<span class="chip">Streaming links</span>':""}
        </div>
        <div class="admin-catalog-actions">
          <button type="button" class="btn ghost admin-cat-pub" data-id="${r(s.id)}" data-on="${s.published?"0":"1"}">${s.published?"Unpublish":"Publish"}</button>
          <button type="button" class="btn ghost admin-cat-del" data-id="${r(s.id)}">Delete</button>
        </div>
      </div>`}).join("");return`<div class="card admin-catalog"><h3>Catalog (${e.length})</h3>
    <p class="muted">Drafts are admin-only. Publish to show on Music / Videos / Home.</p>
    <div class="admin-catalog-list">${t}</div></div>`}function qe(e){return"$"+(Number(e)||0).toFixed(2)}function hp(e){var i,n,l;const t=((i=e.openMic)==null?void 0:i.pending)||[],s=((n=e.openMic)==null?void 0:n.byStatus)||{},a=t.length?t.map(o=>`<div class="row wrap admin-om-row" data-om-id="${r(o.id)}">
            <span class="spacer"><strong>${r(o.username)}</strong> · ${r(o.talent)} · ${r(o.trackTitle)}
              <span class="chip">pending</span>
              ${o.rightsCertified?'<span class="chip">rights</span>':'<span class="chip">no rights</span>'}
            </span>
            <button type="button" class="btn primary admin-om" data-id="${r(o.id)}" data-status="approved">Approve</button>
            <button type="button" class="btn ghost admin-om" data-id="${r(o.id)}" data-status="rejected">Reject</button>
          </div>`).join(""):'<p class="muted">No pending applications. Seeded demos may already be approved/rejected — open <a href="#/openmic">Open Mic</a>.</p>';return`<section class="card admin-openmic" id="adminOpenMic">
    <h3>Open Mic queue</h3>
    <p class="muted">TEST MODE · reuse store Approve/Reject. Pending ${s.pending||0} · approved ${s.approved||0} · rejected ${s.rejected||0} · total ${((l=e.openMic)==null?void 0:l.total)||0}</p>
    ${a}
    <p class="admin-panel-links"><a class="btn" href="#/openmic">Full Open Mic page</a></p>
  </section>`}function fp(e){const t=e.fanClubs||{total:0,recent:[]},s=t.recent.length?`<ul class="list-plain">${t.recent.map(a=>`<li><span><strong>${r(a.name)}</strong> · ${r(a.privacy)}${a.official?" · official":""}</span><span class="muted">${a.memberCount} members</span></li>`).join("")}</ul>`:'<p class="muted">No clubs yet.</p>';return`<section class="card admin-fanclubs" id="adminFanClubs">
    <h3>Fan Clubs glance</h3>
    <div class="stats">
      <div><strong>${t.total}</strong><span>Clubs</span></div>
    </div>
    ${s}
    <p class="admin-panel-links"><a class="btn" href="#/fanclubs">Open Fan Clubs</a></p>
  </section>`}function vp(e){const t=e.loyalty||{},s=(t.badges||[]).slice(0,6).map(a=>`<span class="chip">${r(a)}</span>`).join(" ")||'<span class="muted">None unlocked</span>';return`<section class="card admin-loyalty" id="adminLoyalty">
    <h3>Loyalty glance</h3>
    <p class="muted">${r(t.note||"Device-local loyalty")}</p>
    <div class="stats">
      <div><strong>${t.points||0}</strong><span>Points</span></div>
      <div><strong>${t.badgeCount||0}</strong><span>Badges</span></div>
      <div><strong>${t.historyCount||0}</strong><span>Actions</span></div>
    </div>
    <p class="admin-badge-row">${s}</p>
    <p class="admin-panel-links"><a class="btn" href="#/loyalty">Open Loyalty Club</a></p>
  </section>`}function bp(){return`<section class="card admin-quicklinks" id="adminQuickLinks">
    <h3>Quick links</h3>
    <p class="muted">Deep-links only · page ownership stays with Live Social / Commerce / Build.</p>
    ${[{owner:"Live Social",links:[["#/live","Live"],["#/messages","Messages"],["#/giftbattles","Gift battles"],["#/multiguest","Multi-guest"],["#/spotlight","Spotlight"],["#/restream","Restream"],["#/connect","Connect"]]},{owner:"Commerce",links:[["#/marketplace","Marketplace"],["#/wallet","Wallet"],["#/earnings","Earnings"],["#/missions","Missions"],["#/share","Share & Earn"],["#/refer","Refer & Earn"]]},{owner:"Build",links:[["#/explore","Explore"],["#/notifications","Notifications"],["#/fanclubs","Fan Clubs"],["#/loyalty","Loyalty"],["#/openmic","Open Mic"]]}].map(s=>{const a=s.links.map(([i,n])=>`<a class="btn ghost admin-qlink" href="${i}">${r(n)}</a>`).join("");return`<div class="admin-ql-group"><span class="chip">${r(s.owner)}</span><div class="admin-ql-row">${a}</div></div>`}).join("")}
  </section>`}function yp(e){const t=e.revenue||{},s=(t.byCategory||[]).map(a=>`<li><span>${r(a.label||a.category)} ×${a.count}</span><span class="muted">gross ${qe(a.gross)} · creator ${qe(a.creatorShare)} · PIKK ${qe(a.dbsShare)}</span></li>`).join("");return`<section class="card admin-revenue" id="adminRevenue">
    <h3>Revenue / analytics shell</h3>
    <div class="row wrap" style="gap:8px;margin-bottom:8px">
      <span class="chip">TEST MODE</span>
      <span class="chip">${r(t.chip||"demo figures · not production")}</span>
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
  </section>`}function kp(e){Ss(),Re();const t=Ri({openOnly:!0}),s=Ri({openOnly:!1}).length,a=e.hotFeed||{},i=t.length?t.slice(0,12).map(n=>{const l=n.kind==="live"?'<span class="chip">live</span>':'<span class="chip">post</span>',o=n.kind==="live"?` · viewers ${n.viewers??"—"} · gifts ${n.gifts??"—"}`:` · score ${n.score??0}`,p=n.kind==="post"?`<button type="button" class="btn primary admin-ea-like" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Like</button>
                 <button type="button" class="btn ghost admin-ea-comment" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Comment</button>
                 <button type="button" class="btn ghost admin-ea-share" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Share</button>`:'<a class="btn ghost" href="#/live">Open Live</a>';return`<div class="admin-ea-row" data-alert-id="${r(n.id)}">
            <div class="admin-ea-main">
              <strong>${r(n.username||"creator")}</strong> ${l}
              <div class="muted">${r(n.title||"")}${o}</div>
            </div>
            <div class="admin-ea-actions row wrap">
              ${p}
              <button type="button" class="btn ghost admin-ea-handle" data-alert="${r(n.id)}">Mark handled</button>
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
  </section>`}function wp(e){const t=e.moderation||{};return`<section class="card admin-moderation" id="adminModeration">
    <h3>Moderation stub</h3>
    <p class="muted">${r(t.note||"Stub")}</p>
    <div class="stats">
      <div><strong>${(t.warnings||[]).length}</strong><span>Warnings</span></div>
      <div><strong>${(t.suspensions||[]).length}</strong><span>Suspensions</span></div>
    </div>
    <p class="muted">Empty-state · no enforcement actions stored yet.</p>
    <p class="admin-panel-links"><a class="btn" href="#/guidelines">Community Guidelines</a></p>
  </section>`}function Sp(){var p;const e=Je(),{posts:t,clipperApps:s,user:a}=L();if(((p=e.query)==null?void 0:p.admin)==="1"&&a&&a.role!=="admin"&&hs(!0),!ee())return up(a);Kt(),Ke(),Ss();const i=An(),n=Jc(),l=i.clipperByStatus,o=wt({includeUnpublishedForAdmin:!0});return I("Admin",`<div class="card admin-header">
      <div class="row wrap">
        <span class="chip">TEST MODE</span>
        <span class="chip">role=admin</span>
        <span class="spacer muted">Signed in as <strong>${r(a.username)}</strong></span>
        <button class="btn ghost" id="adminRevoke">Revoke admin</button>
      </div>
      <p class="muted admin-gate-hint">Gate: Profile toggle or <code>?admin=1</code> → <code>user.role='admin'</code> in <code>dbs_v1</code>. Phase 2 panels deep-link to owner pages.</p>
    </div>

    ${bp()}
    ${kp(n)}
    ${hp(n)}
    ${fp(n)}
    ${vp(n)}
    ${yp(n)}
    ${wp(n)}

    ${mp()}
    ${gp(o)}

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
      <p class="muted">Clippers — pending ${l.pending} · approved ${l.approved} · waitlisted ${l.waitlisted} · rejected ${l.rejected}</p>
    </div>

    <div class="card admin-posts"><h3>Posts (${t.length})</h3>
      <ul class="list-plain">${t.slice(0,20).map(c=>`<li><span>${r(c.username)}: ${r((c.text||"").slice(0,48))}</span><span class="muted">${new Date(c.at).toLocaleDateString()}</span></li>`).join("")||'<li class="muted">None</li>'}</ul>
      <a class="btn" href="#/posts">Open Posts</a>
    </div>

    <div class="card admin-clippers"><h3>Clipper applications (${s.length})</h3>
      ${s.length?s.map(c=>`<div class="row wrap admin-clip-row">
                     <span class="spacer">${r(c.name)} · ${r(c.email)} <span class="chip">${r(c.status)}</span></span>
                     <button class="btn primary admin-clip" data-id="${r(c.id)}" data-status="approved">Approve</button>
                     <button class="btn ghost admin-clip" data-id="${r(c.id)}" data-status="waitlisted">Waitlist</button>
                     <button class="btn ghost admin-clip" data-id="${r(c.id)}" data-status="rejected">Reject</button>
                   </div>`).join(""):'<p class="muted">None yet — submit via <a href="#/clippers">Clippers</a>.</p>'}</div>`,{lead:"Phase 2 controls · Add Content · Clippers · catalog."})}async function Qi(e){if(!e)return"";const t=Fd("media");return await jd(t,e,{name:e.name,mime:e.type}),"idb:"+t}function Xi(e){if(!e)return"";try{const t=new URL(e);let s=t.searchParams.get("v");return!s&&t.hostname.includes("youtu.be")&&(s=t.pathname.slice(1)),!s&&t.pathname.startsWith("/embed/")&&(s=t.pathname.split("/")[2]),s?`https://www.youtube.com/embed/${s}`:""}catch{return""}}function $p(e){var i,n;(i=e.querySelector("#adminRevoke"))==null||i.addEventListener("click",()=>{hs(!1),g("Admin revoked"),j("#/admin")}),e.querySelectorAll(".admin-clip").forEach(l=>{l.addEventListener("click",()=>{En(l.dataset.id,l.dataset.status),g("Clipper "+l.dataset.status),j("#/admin")})}),e.querySelectorAll(".admin-om").forEach(l=>{l.addEventListener("click",()=>{const o=Oa(l.dataset.id,l.dataset.status,l.dataset.status==="rejected"?"Admin reject":"");if(o!=null&&o.error){g(o.error==="admin"?"Admin required":"Open Mic update failed");return}g(l.dataset.status==="approved"?"Open Mic approved":"Open Mic rejected"),j("#/admin")})}),e.querySelectorAll(".admin-ea-like").forEach(l=>{l.addEventListener("click",()=>{const o=md(l.dataset.ref);if(o!=null&&o.error)return g(o.error==="admin"?"Admin required":"Like failed");l.dataset.alert&&Es(l.dataset.alert,"liked"),g("Liked · TEST MODE"),j("#/admin")})}),e.querySelectorAll(".admin-ea-comment").forEach(l=>{l.addEventListener("click",()=>{const o=gd(l.dataset.ref,"🔥 PIKK team — keep it up! (TEST MODE)");if(o!=null&&o.error)return g(o.error==="admin"?"Admin required":"Comment failed");l.dataset.alert&&Es(l.dataset.alert,"commented"),g("Comment posted · TEST MODE"),j("#/admin")})}),e.querySelectorAll(".admin-ea-share").forEach(l=>{l.addEventListener("click",async()=>{var c;const o=hd(l.dataset.ref);if(o!=null&&o.error)return g(o.error==="admin"?"Admin required":"Share failed");const p=`${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(l.dataset.ref)}`;try{(c=navigator.clipboard)!=null&&c.writeText&&await navigator.clipboard.writeText(p),g("Link copied · share +1 (TEST MODE)")}catch{g("Share +1 (TEST MODE)")}l.dataset.alert&&Es(l.dataset.alert,"shared"),j("#/admin")})}),e.querySelectorAll(".admin-ea-handle").forEach(l=>{l.addEventListener("click",()=>{const o=Es(l.dataset.alert,"handled");if(o!=null&&o.error)return g("Could not mark handled");g("Alert handled"),j("#/admin")})}),e.querySelectorAll("img[data-idb-src]").forEach(async l=>{const o=l.getAttribute("data-idb-src");if(!o)return;const p=await ma(o);p&&(l.src=p,l.classList.remove("idb-pending"))});const t=e.querySelector("#adminType"),s=e.querySelector("#adminMediaFile"),a=e.querySelector("#adminCoverFile");e.querySelectorAll(".admin-type-tab").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll(".admin-type-tab").forEach(m=>m.classList.remove("on")),l.classList.add("on");const o=l.dataset.type;t&&(t.value=o);const p=Hr.find(m=>m.id===o);p&&s&&(s.accept=p.acceptMedia),p&&a&&(a.accept=p.acceptCover);const c=e.querySelector("#adminMediaLabel");c&&(c.textContent=o==="picture"?"Picture file (or use cover only)":o==="video"?"Video file (optional if YouTube link set)":"Audio / media file (optional)");const u=e.querySelector("#adminStreamingFields");u&&(u.style.display=o==="song"||o==="album"?"":"none")})}),e.querySelectorAll(".admin-dropzone").forEach(l=>{const o=l.querySelector(".admin-file-input"),p=l.querySelector(".admin-file-name");l.addEventListener("click",c=>{c.target!==o&&(o==null||o.click())}),l.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),o==null||o.click())}),o==null||o.addEventListener("change",()=>{var u;const c=(u=o.files)==null?void 0:u[0];p&&(p.textContent=c?`${c.name} · ${(c.size/1024/1024).toFixed(2)} MB`:"")}),l.addEventListener("dragover",c=>{c.preventDefault(),l.classList.add("drag")}),l.addEventListener("dragleave",()=>l.classList.remove("drag")),l.addEventListener("drop",c=>{var h,f;c.preventDefault(),l.classList.remove("drag");const u=(f=(h=c.dataTransfer)==null?void 0:h.files)==null?void 0:f[0];if(!u||!o)return;const m=new DataTransfer;m.items.add(u),o.files=m.files,o.dispatchEvent(new Event("change"))})}),(n=e.querySelector("#adminAddForm"))==null||n.addEventListener("submit",async l=>{var T,y,D,$,B,x,N,ce,K,ke,xe,M,P,q,z,H,F,V,we,Ee,Ve,Ue,dt,pt,ut,mt;l.preventDefault();const o=e.querySelector("#adminAddStatus"),p=e.querySelector("#adminSave"),c=(y=(T=e.querySelector("#adminTitle"))==null?void 0:T.value)==null?void 0:y.trim(),u=(($=(D=e.querySelector("#adminArtist"))==null?void 0:D.value)==null?void 0:$.trim())||"DatBoiSkeet",m=((B=e.querySelector("#adminType"))==null?void 0:B.value)||"song",h=((N=(x=e.querySelector("#adminCoverUrl"))==null?void 0:x.value)==null?void 0:N.trim())||"",f=((K=(ce=e.querySelector("#adminMediaUrl"))==null?void 0:ce.value)==null?void 0:K.trim())||"",b=((xe=(ke=e.querySelector("#adminYoutube"))==null?void 0:ke.value)==null?void 0:xe.trim())||"",k={spotify:((P=(M=e.querySelector("#adminSpotify"))==null?void 0:M.value)==null?void 0:P.trim())||"",apple:((z=(q=e.querySelector("#adminApple"))==null?void 0:q.value)==null?void 0:z.trim())||"",youtubeMusic:((F=(H=e.querySelector("#adminYtm"))==null?void 0:H.value)==null?void 0:F.trim())||"",tidal:((we=(V=e.querySelector("#adminTidal"))==null?void 0:V.value)==null?void 0:we.trim())||"",amazon:((Ve=(Ee=e.querySelector("#adminAmazon"))==null?void 0:Ee.value)==null?void 0:Ve.trim())||"",youtube:b||""},v=!!((Ue=e.querySelector("#adminPublished"))!=null&&Ue.checked),w=(pt=(dt=e.querySelector("#adminCoverFile"))==null?void 0:dt.files)==null?void 0:pt[0],E=(mt=(ut=e.querySelector("#adminMediaFile"))==null?void 0:ut.files)==null?void 0:mt[0];if(!c){g("Title required");return}if(m==="video"&&E)try{const J=await pp(E),Ae=dp({duration:J,size:E.size,type:E.type});if(Ae){g(Ae),o&&(o.textContent=Ae);return}}catch{const J="Could not verify video duration. Upload canceled.";g(J),o&&(o.textContent=J);return}p&&(p.disabled=!0),o&&(o.textContent="Saving… (large files may take a moment on iPhone)");try{let J=h,Ae=f;w&&(J=await Qi(w)),E&&(Ae=await Qi(E)),m==="picture"&&!J&&Ae&&(J=Ae);const _e=Mo({type:m,title:c,artist:u,coverRef:J,mediaRef:Ae,youtube:b,streamingLinks:m==="song"||m==="album"?k:{},published:v,embed:Xi(b)});if(_e!=null&&_e.error){g(_e.error==="forbidden"?"Admin required":"Could not save"),o&&(o.textContent=""),p&&(p.disabled=!1);return}b&&_e.id&&Tn(_e.id,{embed:Xi(b)}),g(v?"Published to catalog":"Saved as draft"),j("#/admin")}catch(J){console.error(J),g("Save failed — file may be too large for this browser"),o&&(o.textContent=String((J==null?void 0:J.message)||J)),p&&(p.disabled=!1)}}),e.querySelectorAll(".admin-cat-pub").forEach(l=>{l.addEventListener("click",()=>{Lo(l.dataset.id,l.dataset.on==="1"),g(l.dataset.on==="1"?"Published":"Unpublished"),j("#/admin")})}),e.querySelectorAll(".admin-cat-del").forEach(l=>{l.addEventListener("click",()=>{confirm("Delete this catalog item?")&&(Po(l.dataset.id),g("Deleted"),j("#/admin"))})})}function Dt(){j("#/posts")}function xp(){Ss();const e=Cr(8);return e.length?`<section class="card hot-strip" id="hotStrip">
    <div class="row wrap hot-strip-head">
      <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
      <span class="chip">TEST MODE</span>
      <span class="muted hot-strip-note">likes + comments + shares · house + community</span>
    </div>
    <div class="hot-rail" role="list">${e.map((s,a)=>{const i=a+1,n=s.image?`<img class="hot-thumb" src="${r(s.image)}" alt="" loading="lazy" />`:`<div class="hot-thumb hot-thumb-empty">${r((s.username||"?")[0].toUpperCase())}</div>`,l=s.mediaType==="video"?'<span class="chip">video</span>':s.image?'<span class="chip">pic</span>':'<span class="chip">text</span>',o=s.house?'<span class="chip">house</span>':'<span class="chip">community</span>';return`<a class="hot-card" href="#/posts?focus=${r(s.postId||s.id)}" data-hot-id="${r(s.postId||s.id)}">
        <span class="hot-rank">#${i}</span>
        ${n}
        <span class="hot-meta">
          <span class="hot-user">@${r(s.username)}</span>
          <span class="hot-preview">${r((s.preview||s.text||"").slice(0,64))}</span>
          <span class="hot-stats">♥ ${s.likes} · 💬 ${s.comments} · ↗ ${s.shares} · score ${s.score}</span>
          <span class="hot-chips">${l}${o}</span>
        </span>
      </a>`}).join("")}</div>
  </section>`:`<section class="card hot-strip" id="hotStrip">
      <div class="row wrap hot-strip-head">
        <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted">No hot posts yet — engage (like · comment · share) to spike the feed.</p>
    </section>`}function Ep(e){var w,E,T,y,D;const{posts:t,likes:s,comments:a,user:i,postShares:n}=L(),l=((w=e==null?void 0:e.query)==null?void 0:w.tab)==="following"?"following":"discover",o=((E=e==null?void 0:e.query)==null?void 0:E.focus)||"",p=new Set((i==null?void 0:i.following)||[]),c=l==="following"&&i?t.filter($=>p.has($.userId)||$.userId===i.id):t,u=ho.map($=>`<button type="button" class="chip preset-img" data-src="${r($.src)}" title="${r($.label)}">${r($.label)}</button>`).join(""),m=((T=e==null?void 0:e.query)==null?void 0:T.compose)==="1"||((y=e==null?void 0:e.query)==null?void 0:y.type),h=["text","picture","short","video"].includes((D=e==null?void 0:e.query)==null?void 0:D.type)?e.query.type:"",f=i?`
    <div class="card post-create" id="composer">
      <h3>Create</h3>
      <p class="muted" style="margin:0 0 10px">Pick what you’re posting — not separate tabs.</p>
      <div class="post-type-picker" role="group" aria-label="Post type">
        <button type="button" class="post-type-btn${h==="text"?" on":""}" data-type="text">
          <span class="post-type-ico" aria-hidden="true">Aa</span>
          <strong>Text</strong>
          <span class="muted">Words only</span>
        </button>
        <button type="button" class="post-type-btn${h==="picture"?" on":""}" data-type="picture">
          <span class="post-type-ico" aria-hidden="true">🖼</span>
          <strong>Picture</strong>
          <span class="muted">Photo / still</span>
        </button>
        <button type="button" class="post-type-btn${h==="short"?" on":""}" data-type="short">
          <span class="post-type-ico" aria-hidden="true">▶</span>
          <strong>Short</strong>
          <span class="muted">Vertical clip</span>
        </button>
        <button type="button" class="post-type-btn${h==="video"?" on":""}" data-type="video">
          <span class="post-type-ico" aria-hidden="true">🎬</span>
          <strong>Video</strong>
          <span class="muted">Full video</span>
        </button>
      </div>
      <div class="post-compose-body${h||m?"":" is-collapsed"}" id="postComposeBody" ${h?"":"hidden"}>
        <input type="hidden" id="postType" value="${r(h||"picture")}" />
        <p class="chip" id="postTypeChip">${r((h||"picture").charAt(0).toUpperCase()+(h||"picture").slice(1))} post</p>
        <div class="field"><label>Caption</label>
          <textarea id="postText" placeholder="Say something…" maxlength="2000"></textarea></div>
        <div class="field" id="postMediaField">
          <label id="postMediaLabel">Media link (demo)</label>
          <input id="postImg" placeholder="/music/… · YouTube URL · /merch/…" />
        </div>
        <div class="row wrap" id="postPresets" style="margin-bottom:10px">${u}</div>
        <p class="muted" id="postMediaNote" style="font-size:12px;margin:0 0 10px">TEST MODE · no real upload — paste a path or YouTube link.</p>
        <button class="btn primary" id="postSubmit">Post</button>
      </div>
    </div>`:`<div class="card"><p class="muted">Sign in from Profile to post text, a picture, short, or video.</p>
       <a class="btn primary" href="#/profile">Sign in</a></div>`,b=`
    <div class="row wrap" style="margin-bottom:12px;gap:8px">
      <a class="btn ${l==="discover"?"primary":"ghost"}" href="#/posts">Discover</a>
      <a class="btn ${l==="following"?"primary":"ghost"}" href="#/posts?tab=following">Following</a>
      <a class="btn ghost" href="#/profile/dbs">@DatBoiSkeet</a>
    </div>`,k=c.map($=>{const B=s[$.id]||[],x=i&&B.includes(i.id),N=a[$.id]||[],ce=n&&n[$.id]||0,K=pa($.id),ke=i&&p.has($.userId),xe=o&&o===$.id?" post-focus":"",M=i&&$.userId!==i.id?`<button class="btn ghost follow-btn" data-uid="${r($.userId)}" data-on="${ke?"1":"0"}">${ke?"Following":"Follow"}</button>`:"",P=$.userId==="dbs"?'<span class="chip">house</span>':'<span class="chip">community</span>',q=$.mediaType||($.image?"picture":"text"),z=q==="short"?'<span class="chip">Short</span>':q==="video"?'<span class="chip">Video</span>':q==="picture"||q==="image"?'<span class="chip">Picture</span>':q==="text"?'<span class="chip">Text</span>':"",H=(()=>{const F=($.mediaUrl||$.image||"").trim();if(!F)return"";if(q==="short"||q==="video"){const V=/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/i.exec(F);if(V)return`<div class="media media-video"><iframe src="https://www.youtube.com/embed/${V[1]}?rel=0" title="post video" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`;if(F.startsWith("http")||F.endsWith(".mp4")||F.endsWith(".webm"))return`<video class="media" src="${r(F)}" controls playsinline preload="metadata"></video>`}return`<img class="media" src="${r(F)}" alt="" loading="lazy" />`})();return`
      <article class="post${xe}" data-id="${r($.id)}" id="post-${r($.id)}">
        <div class="meta">
          <a class="avatar" href="#/profile/${r($.userId)}">${r(($.username||"?")[0].toUpperCase())}</a>
          <div class="spacer">
            <div class="who"><a href="#/profile/${r($.userId)}">${r($.username)}</a> ${P}${z}</div>
            <div class="when">${R($.at)}${K>=5?` · <span class="hot-inline">🔥 ${K}</span>`:""}</div>
          </div>
          ${M}
        </div>
        <p class="body-text">${r($.text)}</p>
        ${H}
        <div class="post-actions">
          <button class="btn like-btn ${x?"primary":""}" data-id="${r($.id)}">
            ♥ ${B.length}
          </button>
          <button class="btn ghost comment-toggle" data-id="${r($.id)}">💬 ${N.length}</button>
          <button class="btn ghost share-btn" data-id="${r($.id)}" title="Share (demo count)">↗ ${ce}</button>
        </div>
        <div class="comments" id="c-${r($.id)}" hidden>
          ${N.map(F=>`<div class="comment"><b>${r(F.username)}</b> ${r(F.text)}</div>`).join("")||'<div class="muted">No comments yet</div>'}
          ${i?`<div class="row" style="margin-top:8px">
                  <input class="c-input" data-id="${r($.id)}" placeholder="Add a comment…" style="flex:1;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:8px 10px" />
                  <button class="btn primary c-send" data-id="${r($.id)}">Send</button>
                </div>`:""}
        </div>
      </article>`}).join(""),v=l==="following"?'<div class="card muted">No posts from people you follow yet. Discover feed has official drops.</div>':'<div class="card muted">No posts yet.</div>';return I("Posts",xp()+f+b+(k||v),{lead:"Post Text, a Picture, Short, or Video · Shorts live here (not separate tabs) · Hot strip ranks engagement."})}function Ap(e){var p;const t=e.querySelector(".post-focus");if(t)try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{}else typeof location<"u"&&(location.hash.includes("compose=1")||location.hash.includes("type="))&&setTimeout(()=>{var c;return(c=e.querySelector("#composer"))==null?void 0:c.scrollIntoView({behavior:"smooth",block:"start"})},50);const s=e.querySelector("#postComposeBody"),a=e.querySelector("#postType"),i=e.querySelector("#postTypeChip"),n=e.querySelector("#postMediaLabel"),l=e.querySelector("#postPresets");function o(c){const u=c||"picture";e.querySelectorAll(".post-type-btn").forEach(b=>b.classList.toggle("on",b.dataset.type===u)),a&&(a.value=u),i&&(i.textContent=u.charAt(0).toUpperCase()+u.slice(1)+" post");const m=e.querySelector("#postMediaField"),h=e.querySelector("#postMediaNote"),f=u==="text";m&&(m.hidden=f),h&&(h.hidden=f),n&&!f&&(n.textContent=u==="short"?"Short clip link (YouTube / demo path)":u==="video"?"Video link (YouTube / demo path)":"Picture link (demo path)"),l&&(l.hidden=u!=="picture"),s&&(s.hidden=!1,s.classList.remove("is-collapsed"))}e.querySelectorAll(".post-type-btn").forEach(c=>{c.addEventListener("click",()=>o(c.dataset.type))}),a!=null&&a.value&&o(a.value),e.querySelectorAll(".preset-img").forEach(c=>{c.addEventListener("click",()=>{const u=e.querySelector("#postImg");u&&(u.value=c.dataset.src||""),g("Picture selected")})}),(p=e.querySelector("#postSubmit"))==null||p.addEventListener("click",()=>{var c,u;try{const m=(c=e.querySelector("#postText"))==null?void 0:c.value,h=(a==null?void 0:a.value)||"picture",f=(((u=e.querySelector("#postImg"))==null?void 0:u.value)||"").trim();if(h==="text"){if(!(m!=null&&m.trim()))return g("Write some words for a Text post");Ti({text:m.trim(),mediaType:"text"}),g("Text posted"),Dt();return}if(!(m!=null&&m.trim())&&!f)return g("Add a caption or media");if((h==="short"||h==="video")&&!f)return g("Add a "+h+" link (TEST MODE)");Ti({text:m||(h==="picture"?"Photo":h==="short"?"Short":"Video"),image:h==="picture"?f:"",mediaType:h,mediaUrl:f}),g(h.charAt(0).toUpperCase()+h.slice(1)+" posted"),Dt()}catch(m){g(m.message||"Could not post")}}),e.querySelectorAll(".like-btn").forEach(c=>{c.addEventListener("click",()=>{if($o(c.dataset.id).error)return g("Sign in to like");Dt()})}),e.querySelectorAll(".comment-toggle").forEach(c=>{c.addEventListener("click",()=>{const u=e.querySelector("#c-"+c.dataset.id);u&&(u.hidden=!u.hidden)})}),e.querySelectorAll(".c-send").forEach(c=>{c.addEventListener("click",()=>{var b;const u=c.dataset.id,m=e.querySelector(`.c-input[data-id="${u}"]`),h=(b=m==null?void 0:m.value)==null?void 0:b.trim();if(!h)return;if(xo(u,h).error)return g("Sign in to comment");g("Comment added"),Dt()})}),e.querySelectorAll(".share-btn").forEach(c=>{c.addEventListener("click",async()=>{var f;const u=c.dataset.id;if(Tr(u).error)return g("Could not share");const h=`${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(u)}`;try{(f=navigator.clipboard)!=null&&f.writeText&&await navigator.clipboard.writeText(h),g("Shared · link copied (TEST MODE)")}catch{g("Shared · count +1 (TEST MODE)")}Dt()})}),e.querySelectorAll(".follow-btn").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.uid,m=c.dataset.on==="1";if((m?Js(u):Xs(u)).error)return g("Sign in to follow");g(m?"Unfollowed":"Following"),Dt()})})}function Ji(e){j(e)}const ja={apple:"Apple Music",spotify:"Spotify",youtubeMusic:"YouTube Music",youtube:"YouTube",tidal:"Tidal",amazon:"Amazon Music"};function Wr(e){if(!e||typeof e!="object")return{};const t={};for(const s of Object.keys(ja)){const a=String(e[s]||"").trim();(a.startsWith("http://")||a.startsWith("https://"))&&(t[s]=a)}return t}function Cp(e){const t=Wr(e),s=Object.keys(ja).filter(a=>t[a]);return s.length?s.map(a=>`<a class="btn stream-plat stream-plat-${r(a)}" href="${r(t[a])}" target="_blank" rel="noopener">${r(ja[a])}</a>`).join(""):'<span class="muted" style="font-size:12px">No platform links yet</span>'}function Tp(e){try{const t=new URL(e);return t.protocol!=="https:"||t.hostname!=="music.apple.com"||!/^\/[a-z]{2}(?:-[a-z]{2})?\/(?:song|album)\//i.test(t.pathname)?"":"https://embed.music.apple.com"+t.pathname+t.search}catch{return""}}function Sa(e){var l;const t=e.cover?`<img class="stream-cover" src="${r(e.cover)}" alt="${r(e.title)}" loading="lazy" referrerpolicy="no-referrer" />`:'<div class="stream-cover stream-cover-empty" aria-hidden="true">♪</div>',s=e.albumNote?`<div class="muted" style="font-size:11px">${r(e.albumNote)}</div>`:"",a=e.year?` · ${r(String(e.year))}`:"",i=Tp((l=e.links)==null?void 0:l.apple),n=i?`<details class="apple-music-embed"><summary>▶ Play in PIKK · Apple Music</summary><iframe title="Apple Music player for ${r(e.title)}" src="${r(i)}" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style="width:100%;height:175px;border:0;border-radius:12px"></iframe><small class="muted">Apple controls playback availability. Full listening may require Apple Music.</small></details>`:"";return`
    <article class="stream-release">
      ${t}
      <div class="stream-meta">
        <span class="chip">${r(e.type||"release")}</span>
        <strong>${r(e.title)}</strong>
        <div class="muted" style="font-size:12px">${r(e.artist||"DatBoiSkeet")}${a}</div>
        ${s}
        ${n}
        <div class="stream-plats">${Cp(e.links)}</div>
      </div>
    </article>`}function Zi(e){return e==="inner"?"Inner Circle":e==="backstage"?"Backstage":e==="skeet+"?"Skeet+":"None"}function Dp(e){return mo.map(t=>{const s=t.tier==="backstage"||t.tier==="inner";return e&&Pa(s?"backstage":"skeet")?`
      <article class="vault-card unlocked" data-id="${r(t.id)}">
        <img src="${r(t.cover)}" alt="${r(t.title)}" />
        <div class="vault-meta">
          <span class="chip" style="border-color:#2a4a3a;color:#8dffb0">Unlocked</span>
          <strong>${r(t.title)}</strong>
          <div class="muted" style="font-size:12px">${r(t.artist)} · ${r(t.status)}</div>
          <div class="muted" style="font-size:11px">Requires ${r(t.tier)} · no audio yet</div>
        </div>
      </article>`:`
      <article class="vault-card locked" data-id="${r(t.id)}">
        <div class="vault-art">
          <img src="${r(t.cover)}" alt="${r(t.title)}" />
          <div class="vault-lock-badge" aria-hidden="true">🔒</div>
        </div>
        <div class="vault-meta">
          <span class="chip">Locked</span>
          <strong>${r(t.title)}</strong>
          <div class="muted" style="font-size:12px">${r(t.artist)}</div>
          <div class="muted" style="font-size:11px">Join ${r(t.tier)} to unlock</div>
        </div>
      </article>`}).join("")}function en(e={}){var T;const t=["songs","albums","beats","playlists","upload"].includes((T=e.query)==null?void 0:T.view)?e.query.view:"",{user:s}=L(),a=xt(),i=Pa("skeet"),n=new Set((s==null?void 0:s.purchasedTracks)||[]),l=Pt.map(y=>`
    <div class="cover-card" style="flex:0 0 160px">
      <span class="badge-cs">${r(y.status)}</span>
      <img src="${r(y.cover)}" alt="${r(y.title)}" style="width:160px;height:160px" />
      <div class="t">${r(y.title)}</div>
      <div class="muted" style="font-size:11px">${r(y.artist)}</div>
    </div>`).join(""),o=wn.map(y=>{const D=y.id==="skeet"?"skeet+":y.id==="inner"?"inner":y.id,$=a===D;return`
    <div class="card" style="margin:0">
      <h3>${r(y.name)}</h3>
      <div class="price" style="font-size:22px;font-weight:900">$${y.price}<span class="muted" style="font-size:13px">/mo</span></div>
      <p class="muted">${r(y.blurb)}</p>
      ${s?$?`<button type="button" class="btn ghost block mem-toggle" data-tier="${r(y.id)}" data-on="1">Active · tap to cancel (demo)</button>`:`<button type="button" class="btn primary block mem-toggle" data-tier="${r(y.id)}" data-on="0">Join · TEST MODE</button>`:'<a class="btn primary block" href="#/profile">Sign in to join</a>'}
    </div>`}).join(""),p=Ei.filter(y=>n.has(y.id)),c=Ei.map(y=>{const D=n.has(y.id);return`
      <div class="card" style="margin:0;display:flex;gap:12px;align-items:center">
        <img src="${r(y.cover)}" alt="" style="width:72px;height:72px;border-radius:10px;object-fit:cover;flex:0 0 72px" />
        <div class="spacer">
          <strong>${r(y.title)}</strong>
          <div class="muted" style="font-size:12px">${r(y.artist)} · ${r(y.status)}</div>
          <div style="font-weight:800;margin-top:4px">$${y.price.toFixed(2)}</div>
        </div>
        ${s?D?'<span class="chip">In My Music</span>':`<button type="button" class="btn primary buy-track" data-id="${r(y.id)}">Buy · demo</button>`:'<a class="btn" href="#/profile">Sign in</a>'}
      </div>`}).join(""),u=wt({publishedOnly:!0,types:["song","album"]}),m=u.map(y=>{const D=Wr(y.streamingLinks||{});return Object.keys(D).length?{id:y.id,title:y.title,artist:y.artist,type:y.type||"song",cover:y.coverRef&&!String(y.coverRef).startsWith("idb:")?y.coverRef:"",links:D,fromAdmin:!0}:null}).filter(Boolean),h=[...yt,...m];let f="";if(t==="songs"||t==="albums"){const y=t==="albums",D=h.filter($=>y?$.type==="album":$.type==="single"||$.type==="song");f=`<div class="card" id="music-focused-view">
      <h2>${y?"Albums":"Songs"}</h2>
      <p class="muted">Verified releases and available official listening links.</p>
      <div class="stream-grid">${D.map(Sa).join("")||'<p class="muted">No releases listed in this category yet.</p>'}</div>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`}else if(t==="playlists")f=`<div class="card" id="music-focused-view">
      <h2>Playlists</h2>
      <p class="muted">Official YouTube playlists open on YouTube. No rehosted audio.</p>
      <div class="row wrap" style="gap:8px">
        ${Ma.map(y=>`<a class="btn ghost" href="${r(y.youtube)}" target="_blank" rel="noopener">${r(y.title)}</a>`).join("")}
      </div>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`;else if(t==="beats"||t==="upload"){const y=t==="upload";f=`<div class="card" id="music-focused-view">
      <h2>${y?"Upload Music":"Beats"}</h2>
      <p class="muted">Not available yet · TEST MODE. ${y?"Creator music uploads require secure storage, ownership verification and publishing tools.":"The producer beat marketplace and licensing checkout are still in development."}</p>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`}const b=u.length?`<div class="card catalog-admin-music">
        <h2>From Admin</h2>
        <p class="muted">Published songs &amp; albums added in Admin · TEST MODE (device-local).</p>
        <div class="cover-row">${u.map(y=>`
          <div class="cover-card catalog-item" data-id="${r(y.id)}" style="flex:0 0 160px">
            <span class="badge-cs">${r(y.type)}</span>
            <img data-idb-src="${r(y.coverRef||"")}" src="${r(y.coverRef&&!y.coverRef.startsWith("idb:")?y.coverRef:"")}" alt="${r(y.title)}" style="width:160px;height:160px;object-fit:cover;background:#111" />
            <div class="t">${r(y.title)}</div>
            <div class="muted" style="font-size:11px">${r(y.artist)}</div>
            ${y.mediaRef?`<audio class="catalog-audio" data-idb-src="${r(y.mediaRef)}" controls preload="none" style="width:100%;margin-top:6px"></audio>`:""}
          </div>`).join("")}</div>
      </div>`:"",k=yt.find(y=>y.cover)||null,v=yt.filter(y=>y.cover).slice(0,5),E=`
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
      ${k?`<div class="pikk-music-showcase-art"><img src="${r(k.cover)}" alt="${r(k.title)} official cover" decoding="async" loading="eager"/><span>${r(k.title)}</span></div>`:""}
    </section>
    <nav class="pikk-music-categories" aria-label="Music categories">
      <a href="#/music?view=songs" class="${t==="songs"?"on":""}">Songs</a>
      <a href="#/music?view=albums" class="${t==="albums"?"on":""}">Albums</a>
      <a href="#/music?view=beats" class="${t==="beats"?"on":""}">Beats</a>
      <a href="#/music?view=playlists" class="${t==="playlists"?"on":""}">Playlists</a>
      <a href="#/music#vault">Vault</a>
    </nav>
    <section class="pikk-music-release-strip" aria-label="Official music covers">
      <div class="pikk-music-release-header"><h3>Listen &amp; discover</h3><a href="#/music#stream-everywhere">See all releases →</a></div>
      <div class="pikk-music-release-row">
        ${v.map(y=>`<a class="pikk-music-release-tile" href="#/music#stream-everywhere">
          <img src="${r(y.cover)}" alt="${r(y.title)} cover" loading="lazy" decoding="async"/>
          <strong>${r(y.title)}</strong>
          <small>${r(y.artist||"DatBoiSkeet")}</small>
        </a>`).join("")}
      </div>
    </section>`}
    ${f}
    <div class="card">
      <h2>Upcoming Releases</h2>
      <p class="muted">Real DatBoiSkeet cover art · playback unlocks when released. No fake tracks.</p>
      <div class="cover-row">${l}</div>
    </div>
    ${b}


    <div class="card" id="youtube-mixes">
      <h2>YouTube Mixes · Channel</h2>
      <p class="muted">Dogs &amp; mixes stream from the <strong>original YouTube source</strong> (embeds / Play on YouTube). Not rehosted. Released catalog still uses Stream Everywhere below.</p>
      <div class="row wrap" style="gap:8px;margin:10px 0 14px">
        <a class="btn" href="${r(de.youtube)}" target="_blank" rel="noopener">Official channel</a>
        <a class="btn ghost" href="${r(de.youtubeHandle)}" target="_blank" rel="noopener">@DatBoiSkeet1</a>
        ${Ma.map(y=>`<a class="btn ghost" href="${r(y.youtube)}" target="_blank" rel="noopener">${r(y.title)}</a>`).join("")}
      </div>
      <div class="yt-mix-grid">
        ${za.map(y=>`
          <article class="yt-mix-card">
            <div class="hero-video" style="margin:0 0 10px">
              <iframe src="${r(Ye(y.embed))}" title="${r(y.title)}" allowfullscreen loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <h3 style="margin:0 0 6px">${r(y.title)}</h3>
            <p class="muted" style="margin:0 0 10px;font-size:13px">${r(y.blurb||"")}</p>
            <a class="btn" href="${r(y.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
          </article>`).join("")}
      </div>
    </div>

    <div class="card" id="stream-everywhere">
      <h2>Featured · Stream Everywhere</h2>
      <p class="muted">Official DatBoiSkeet releases — Apple Music is the primary listening destination: use the Apple-hosted player on supported releases or open the song in Apple Music. Other verified platforms are optional. Full Apple Music playback may require a subscription. External streams are not rehosted in-app. Separate from Vault &amp; purchases.</p>
      <div class="stream-artist row wrap" style="gap:8px;margin:10px 0 14px">
        <span class="chip">Artist</span>
        <a class="btn stream-plat stream-plat-apple" href="${r(de.apple)}" target="_blank" rel="noopener">Apple Music · Listen</a>
        <a class="btn ghost stream-plat stream-plat-spotify" href="${r(de.spotify)}" target="_blank" rel="noopener">Spotify · Alternative</a>
        <a class="btn stream-plat stream-plat-youtubeMusic" href="${r(de.youtubeMusic)}" target="_blank" rel="noopener">YouTube Music</a>
        <a class="btn stream-plat stream-plat-youtube" href="${r(de.youtube)}" target="_blank" rel="noopener">YouTube</a>
      </div>
      <div class="stream-grid">
        ${yt.map(Sa).join("")}
        ${m.map(Sa).join("")}
      </div>
      <p class="muted" style="margin-top:12px;font-size:12px">Tidal / Amazon Music omitted until official links are verified. Admin can add more via streaming link fields.</p>
    </div>

    <div class="card">
      <h2>My Music</h2>
      <p class="muted">Purchases stay here even if membership ends.</p>
      ${p.length?`<div class="cover-row">${p.map(y=>`
            <div class="cover-card" style="flex:0 0 120px">
              <img src="${r(y.cover)}" alt="${r(y.title)}" style="width:120px;height:120px" />
              <div class="t">${r(y.title)}</div>
              <div class="muted" style="font-size:11px">Owned · Coming Soon</div>
            </div>`).join("")}</div>`:'<p class="muted">Nothing purchased yet. Buy a Coming Soon cover below (demo · no charge).</p>'}
    </div>

    <div class="card">
      <h2>Buy (demo)</h2>
      <p class="muted">TEST MODE — no charges. Marks the cover as owned in My Music. Audio not available until release.</p>
      <div style="display:flex;flex-direction:column;gap:10px">${c}</div>
    </div>

    <div class="card" id="vault">
      <h2>Vault ${i?'<span class="chip" style="border-color:#2a4a3a;color:#8dffb0">Unlocked · '+r(Zi(a))+"</span>":'<span class="chip">Locked</span>'}</h2>
      <p class="muted">Exclusive unreleased tracks &amp; previews for members. Nested under Music — not a bottom-nav tab.</p>

      <div class="vault-grid" style="margin:12px 0">
        ${Dp(i)}
      </div>

      ${i?`<div class="vault-lock" style="border-style:solid;border-color:#2a4a3a;color:var(--tx)">
              ✅ Membership active: <strong>${r(Zi(a))}</strong>. Exclusive cards above are unlocked.
              Cancel anytime with the tier button below (demo). Purchased My Music items are kept.
            </div>`:`<div class="vault-lock">
              🔒 Vault locked. Sign in, then tap <strong>Join · TEST MODE</strong> on Skeet+ or Backstage below.
              Locked cards show title/cover only — no exclusive content until you join.
            </div>`}

      <h3 style="margin:16px 0 8px">Membership (TEST MODE)</h3>
      <div class="grid-2">${o}</div>
    </div>

  `;return I("Music & Vault",E,{lead:"Singles, albums, Coming Soon, and member Vault."})}function tn(e){const t=e.querySelector("#youtube-mixes")||e;ua(t),e.querySelectorAll(".mem-toggle").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=s.dataset.on==="1",n=Qs(s.dataset.tier,!i);if(n!=null&&n.error)return g("Sign in required — open Profile first");g(i?"Membership cancelled (demo) · My Music purchases kept":`Joined ${s.dataset.tier} (TEST MODE) · Vault unlocked`),Ji("#/music"),setTimeout(()=>{var l;return(l=document.getElementById("vault"))==null?void 0:l.scrollIntoView({behavior:"smooth",block:"start"})},40)})}),e.querySelectorAll(".buy-track").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=So(s.dataset.id);if(i!=null&&i.error)return g("Sign in required");g("Added to My Music (demo · no charge)"),Ji("#/music")})}),e.querySelectorAll("[data-idb-src]").forEach(async s=>{const a=s.getAttribute("data-idb-src");if(!a)return;const i=await ma(a);i&&(s.tagName==="IMG"||s.tagName==="AUDIO"||s.tagName==="VIDEO")&&(s.src=i)})}function Mp(){const t=`
    <div class="card merch-hero">
      <p class="kicker">Physical merch</p>
      <h2 style="margin:0 0 8px">Foreign X-Change</h2>
      <p class="muted">All orders, sizes, shipping, and payment happen on
        <a class="fx-link" href="https://foreignx-change.com" target="_blank" rel="noopener">foreignx-change.com</a>
        — not inside PIKK. Product links open the shop homepage until verified per-item URLs are provided.</p>
      <a class="btn primary" href="https://foreignx-change.com" target="_blank" rel="noopener">Visit Foreign X-Change</a>
      <p class="merch-note" style="margin-top:10px">Hats $30 · Tees $65 · Jackets $200 · prices exclude shipping</p>
    </div>
    <div class="merch-grid">${Oe.map(s=>`
    <article class="merch-card">
      <div class="img-wrap" data-zoom="${r(s.image)}" role="button" tabindex="0" aria-label="Zoom ${r(s.name)}">
        <img src="${r(s.image)}" alt="${r(s.name)}" loading="lazy" />
      </div>
      <div class="body">
        <div class="cat">${r(s.category)}</div>
        <div class="name">${r(s.name)}</div>
        <div class="price">$${s.price}</div>
        <a class="btn primary block shop-link" href="${r(s.shopUrl)}" target="_blank" rel="noopener" data-name="${r(s.name)}">
          Shop on Foreign X-Change
        </a>
        <span class="merch-note">Redirects to Foreign X-Change for secure checkout · shipping &amp; tax calculated there</span>
        <span class="chip">TEST MODE · external checkout</span>
      </div>
    </article>`).join("")}</div>
    <div id="merchLightbox" class="lightbox" aria-hidden="true"><img alt="" /></div>
  `;return I("Merch",t,{lead:"Foreign X-Change showcase · 10 products · external checkout only"})}function Lp(e){e.querySelectorAll(".shop-link").forEach(n=>{n.addEventListener("click",()=>{g("TEST MODE — opening Foreign X-Change")})});const t=e.querySelector("#merchLightbox"),s=t==null?void 0:t.querySelector("img"),a=n=>{!t||!s||(s.src=n,t.classList.add("show"),t.setAttribute("aria-hidden","false"))},i=()=>{t==null||t.classList.remove("show"),t==null||t.setAttribute("aria-hidden","true")};e.querySelectorAll(".img-wrap").forEach(n=>{const l=()=>a(n.dataset.zoom);n.addEventListener("click",l),n.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),l())})}),t==null||t.addEventListener("click",i)}function Yt(e){j(e||"#/profile")}function sn(e){return e.avatar?`<img class="avatar" src="${r(e.avatar)}" alt="" style="object-fit:cover" />`:`<div class="avatar">${r((e.username||"?")[0].toUpperCase())}</div>`}function Ts(e,t){return t.length?`<div class="card"><h3>${r(e)}</h3>
    <ul class="list-plain">${t.map(s=>`<li><a href="#/profile/${r(s.id)}"><span>${r(s.username)}</span></a>
           <a class="chip" href="#/profile/${r(s.id)}">View</a></li>`).join("")}</ul></div>`:`<div class="card"><h3>${r(e)}</h3><p class="muted">None yet.</p></div>`}function Pp(e){var u;const t=((u=e==null?void 0:e.parts)==null?void 0:u[1])||null,{user:s,posts:a}=L();if(t&&(!s||t!==s.id)||t&&t!==(s==null?void 0:s.id)){const m=St(t);if(!m)return I("Profile",`<div class="card muted">User not found.</div>
         <a class="btn" href="#/profile">Back</a>`);const h=a.filter(w=>w.userId===m.id),f=s&&(s.following||[]).includes(m.id),b=Ci(m.id),k=La(m.id),v=`
      <div class="card">
        <div class="profile-hero">
          ${sn(m)}
          <div>
            <h2 style="margin:0">${r(m.username)}${m.verified?" ✓":""}</h2>
            <p class="muted" style="margin:4px 0 0">${r(m.bio||"")}</p>
            ${m.verified?'<span class="chip">Verified</span>':""}
          </div>
        </div>
        <div class="stats">
          <div><strong>${h.length}</strong><span>Posts</span></div>
          <div><strong>${(m.followers||[]).length}</strong><span>Followers</span></div>
          <div><strong>${(m.following||[]).length}</strong><span>Following</span></div>
        </div>
        <div class="row wrap">
          ${s?`<button class="btn ${f?"ghost":"primary"}" id="pubFollow" data-uid="${r(m.id)}" data-on="${f?"1":"0"}">${f?"Unfollow":"Follow"}</button>`:'<a class="btn primary" href="#/profile">Sign in to follow</a>'}
          <a class="btn ghost" href="#/posts">Posts feed</a>
          <a class="btn ghost" href="#/profile">My profile</a>
        </div>
      </div>
      <div class="card">
        <h3>Posts</h3>
        ${h.length?h.map(w=>`<div style="padding:8px 0;border-bottom:1px solid var(--line)">
                      <div class="muted" style="font-size:11px">${new Date(w.at).toLocaleString()}</div>
                      ${r(w.text)}
                      ${w.image?`<img src="${r(w.image)}" alt="" style="margin-top:8px;border-radius:12px;max-height:200px;object-fit:cover;width:100%" />`:""}
                    </div>`).join(""):'<p class="muted">No posts yet.</p>'}
      </div>
      ${Ts("Followers",b)}
      ${Ts("Following",k)}
    `;return I(m.username,v)}if(!s)return I("Profile",`
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
      </div>`,{lead:"Free PIKK fan profile · follow · posts · role apps · TEST MODE."});const n=a.filter(m=>m.userId===s.id),l=Ci(s.id),o=La(s.id),p=s.memberships||{},c=`
    <div class="card">
      <div class="profile-hero">
        ${sn(s)}
        <div>
          <h2 style="margin:0">${r(s.username)}</h2>
          <p class="muted" style="margin:4px 0 0">${r(s.bio)}</p>
          <span class="chip">TEST MODE · demo</span>
          ${p.skeetPlus||p.backstage||p.innerCircle?`<span class="chip">${p.innerCircle?"Inner Circle":p.backstage?"Backstage":"Skeet+"}</span>`:""}
        </div>
      </div>
      <div class="stats">
        <div><strong>${n.length}</strong><span>Posts</span></div>
        <div><strong>${(s.followers||[]).length}</strong><span>Followers</span></div>
        <div><strong>${(s.following||[]).length}</strong><span>Following</span></div>
      </div>
      <div class="row wrap">
        <a class="btn" href="#/posts">New post</a>
        <a class="btn" href="#/profile/${r(s.id)}">Public view</a>
        <a class="btn" href="#/profile-shop">Profile Shop</a>
        <a class="btn" href="#/messages">Messages</a>
        <button class="btn ghost" id="signoutBtn">Sign out</button>
      </div>
    </div>

    <div class="card" id="editCard">
      <h3>Edit profile</h3>
      <div class="field"><label>Bio</label>
        <textarea id="editBio" maxlength="280">${r(s.bio||"")}</textarea></div>
      <div class="field"><label>Avatar URL</label>
        <input id="editAvatar" placeholder="/brand/… or https://…" value="${r(s.avatar||"")}" /></div>
      <button class="btn primary" id="saveProfile">Save</button>
    </div>

    <div class="card">
      <h3>Your posts</h3>
      ${n.length?n.map(m=>`<div style="padding:8px 0;border-bottom:1px solid var(--line)">
                    <div class="muted" style="font-size:11px">${new Date(m.at).toLocaleString()}</div>
                    ${r(m.text)}
                  </div>`).join(""):'<p class="muted">No posts yet.</p>'}
    </div>

    ${Ts("Followers",l)}
    ${Ts("Following",o)}

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
        <span class="chip">${ee()?"role=admin":"role=fan"}</span>
        <button class="btn ${ee()?"ghost":"primary"}" id="toggleAdmin">${ee()?"Revoke admin":"Enable Demo Admin"}</button>
        <a class="btn" href="#/admin">Open Admin</a>
      </div>
    </div>
  `;return I("Profile",c)}function Ip(e){var t,s,a,i,n,l;(t=e.querySelector("#signinBtn"))==null||t.addEventListener("click",()=>{var p;const o=(p=e.querySelector("#signinName"))==null?void 0:p.value;Nt(o),g("Signed in"),Yt("#/profile")}),(s=e.querySelector("#signinName"))==null||s.addEventListener("keydown",o=>{var p;o.key==="Enter"&&((p=e.querySelector("#signinBtn"))==null||p.click())}),(a=e.querySelector("#signoutBtn"))==null||a.addEventListener("click",()=>{ko(),g("Signed out"),Yt("#/profile")}),(i=e.querySelector("#saveProfile"))==null||i.addEventListener("click",()=>{var p,c;if(wo({bio:(p=e.querySelector("#editBio"))==null?void 0:p.value,avatar:(c=e.querySelector("#editAvatar"))==null?void 0:c.value}).error)return g("Sign in required");g("Profile saved"),Yt("#/profile")}),(n=e.querySelector("#pubFollow"))==null||n.addEventListener("click",o=>{const p=o.currentTarget,c=p.dataset.uid,u=p.dataset.on==="1";if((u?Js(c):Xs(c)).error)return g("Sign in to follow");g(u?"Unfollowed":"Following"),Yt("#/profile/"+c)}),(l=e.querySelector("#toggleAdmin"))==null||l.addEventListener("click",()=>{const o=!ee();if(hs(o).error)return g("Sign in required");g(o?"Demo Admin enabled":"Admin revoked"),Yt("#/profile")})}function an(){j("#/clippers")}const _p={pending:"Pending",approved:"Approved",rejected:"Rejected",waitlisted:"Waitlisted"};function qp(){const{clipperApps:e,user:t}=L(),s=`
    <div class="card">
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

    <div class="card">
      <h3>Submissions (this device)</h3>
      ${e.length?e.map(a=>`
            <div class="card" style="margin:0 0 10px;background:#12121a" data-app="${r(a.id)}">
              <div class="row wrap">
                <strong>${r(a.name)}</strong>
                <span class="chip">${r(_p[a.status]||a.status)}</span>
                <span class="muted spacer" style="text-align:right">${R(a.at)}</span>
              </div>
              <p class="muted" style="margin:6px 0;font-size:12px">${r(a.email)} · ${r(a.niche||"—")}</p>
              <p style="font-size:12px;margin:0 0 8px">${r((a.samples||"").slice(0,120))}</p>
              <div class="row wrap admin-actions">
                <button class="btn primary clip-status" data-id="${r(a.id)}" data-status="approved">Approve</button>
                <button class="btn ghost clip-status" data-id="${r(a.id)}" data-status="waitlisted">Waitlist</button>
                <button class="btn ghost clip-status" data-id="${r(a.id)}" data-status="rejected">Reject</button>
              </div>
            </div>`).join(""):'<p class="muted">None yet.</p>'}
      <p class="muted" style="font-size:12px;margin-top:8px">Demo admin: approve / reject here or on <a href="#/admin" style="color:var(--sk)">Admin</a>. Signed in as ${r((t==null?void 0:t.username)||"guest")}.</p>
    </div>
  `;return I("Clippers",s,{lead:"Apply → admin approve → paid campaigns & tracked links."})}function Bp(e){var t;(t=e.querySelector("#cSubmit"))==null||t.addEventListener("click",()=>{var i,n,l,o,p,c,u,m,h,f,b,k,v,w,E,T,y,D,$;const s=(n=(i=e.querySelector("#cName"))==null?void 0:i.value)==null?void 0:n.trim(),a=(o=(l=e.querySelector("#cEmail"))==null?void 0:l.value)==null?void 0:o.trim();if(!s||!a)return g("Name and email required");Eo({name:s,email:a,age:(p=e.querySelector("#cAge"))==null?void 0:p.value,tiktok:(c=e.querySelector("#cTiktok"))==null?void 0:c.value,instagram:(u=e.querySelector("#cIg"))==null?void 0:u.value,youtube:(m=e.querySelector("#cYt"))==null?void 0:m.value,x:(h=e.querySelector("#cX"))==null?void 0:h.value,facebook:(f=e.querySelector("#cFb"))==null?void 0:f.value,followers:(b=e.querySelector("#cFollowers"))==null?void 0:b.value,views:(k=e.querySelector("#cViews"))==null?void 0:k.value,avgViews:(v=e.querySelector("#cAvgViews"))==null?void 0:v.value,engagement:(w=e.querySelector("#cEngage"))==null?void 0:w.value,frequency:(E=e.querySelector("#cFreq"))==null?void 0:E.value,niche:(T=e.querySelector("#cNiche"))==null?void 0:T.value,samples:(y=e.querySelector("#cSamples"))==null?void 0:y.value,analyticsNotes:(D=e.querySelector("#cAnalytics"))==null?void 0:D.value,applicantUserId:(($=L().user)==null?void 0:$.id)||null}),g("Application saved for admin review"),an()}),e.querySelectorAll(".clip-status").forEach(s=>{s.addEventListener("click",()=>{En(s.dataset.id,s.dataset.status),g("Marked "+s.dataset.status),an()})})}const Op={rose:"🌹","big-love":"💖","turn-up":"🔥","cash-rain":"💵","bottle-pop":"🍾","money-gun":"💸","diamond-drip":"💎","foreign-whip":"🚗",helicopter:"🚁","private-jet":"✈️","dbs-crown":"👑","dbs-universe":"🌌","battle-win":"✅","battle-crown":"👑","battle-vs":"⚔️","battle-fire":"🔥"},Np={rose:"/gifts/rose.svg","big-love":"/gifts/big-love.svg","turn-up":"/gifts/turn-up.svg","cash-rain":"/gifts/cash-rain.svg","bottle-pop":"/gifts/bottle-pop.svg","money-gun":"/gifts/money-gun.svg","diamond-drip":"/gifts/diamond-drip.svg","foreign-whip":"/gifts/foreign-whip.svg",helicopter:"/gifts/helicopter.svg","private-jet":"/gifts/private-jet.svg","dbs-crown":"/gifts/dbs-crown.svg","dbs-universe":"/gifts/dbs-universe.svg","battle-win":"/gifts/battle-win.svg","battle-crown":"/gifts/battle-crown.svg","battle-vs":"/gifts/battle-vs.svg","battle-fire":"/gifts/battle-fire.svg"},nn="gift-sticker";function Ds(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function jp(e,t){return t&&typeof t=="object"&&t.className?t.className:`${nn} ${nn}--${e}`}function yi(e,t={}){const s=String(e||""),a=jp(s||"unknown",t),i=Op[s]||"🎁",n=Np[s]||null;return n?{src:n,className:a,emoji:i,html:`<img class="${Ds(a)}" src="${Ds(n)}" alt="" width="48" height="48" decoding="async" draggable="false" data-gift-slug="${Ds(s)}" />`}:{src:null,className:a,emoji:i,html:`<span class="${Ds(a)} gift-sticker--emoji" aria-hidden="true">${i}</span>`}}function it(e,t){return yi(e,t&&typeof t=="object"&&typeof t!="function"?t:{}).html}const Rp=Object.freeze([{id:"women",title:"Women's Rooms",icon:"💗",description:"Conversations, style, wellness, business and community",names:["Ladies Lounge","Girl Talk","Tea Time","What's the Word?","Who Did What?","Beauty Bar","Girls' Night In","Love & Standards","Boss Ladies","Fashion & Fits","Ladies Only Live","Women in Business","Women's Mental Wellness","Dating From Her Side","The Hustle Room: Women"]},{id:"men",title:"Men's Rooms",icon:"🤝",description:"Brotherhood, relationships, business, wellness and hobbies",names:["The Man Cave","The Barbershop","Fellas' Night","Men's Corner","Men in Business","Cars & Motors","Fitness & Brotherhood","Fatherhood","Men's Mental Wellness","Dating From His Side","Sports Debate","Gaming Brotherhood","Men's Style","The Hustle Room","Brotherhood & Mentorship"]},{id:"coed",title:"Coed Communities",icon:"🌐",description:"Shared conversations, learning and networking for everyone",names:["Let's Talk","The Hangout","Business Connect & Wealth Academy","Couples Corner","Conspiracy Room","Game Room","Why Are You Single?","What Are You Looking For?","Single & Ready to Mingle","City Connect"]},{id:"dating",title:"Singles & Dating",icon:"💘",description:"Opt-in conversations, introductions and relationship topics",names:["Looking for My Match","The Flirt Zone","Speed Connections","Poly Connections","Date Night Live","Love & Advice"]},{id:"sports",title:"Sports",icon:"🏆",description:"A separate place for every major sport",names:["Sports Central","Basketball","Football","Soccer","Baseball","Hockey"]},{id:"talent",title:"Music & Talent",icon:"🎙️",description:"Rappers, singers, bands, producers and city competitions",names:["The Booth","Producer Room","The Stage","City Takeover"]},{id:"news",title:"News & Innovation",icon:"📰",description:"World events, markets and new ideas",names:["World News","Economy & Markets","Startups & Innovation","Tech Talk","Money Talk"]},{id:"general",title:"General Live",icon:"📡",description:"IRL, gaming, shows, comedy, food, fitness and more",names:["Just Chatting","Gaming","Music","IRL","Sports","Creative","Podcasts & Talk Shows","Food & Cooking","Fitness","Beauty & Fashion","Business & Money Talk","Dating & Connections","Education","News & Commentary","Comedy & Entertainment","Comedy & Roast Battles","Creator Spotlight"]}]);function Fp(e,t){const s=new Map(e.map(o=>[o[0],o])),a=new Set,i=([o,p,c])=>'<a class="live-cat-card pikk-live-room-card" href="'+(o==="Comedy & Roast Battles"?"#/roast-arena":"#/live?tab=channels&category="+encodeURIComponent(o))+'" aria-label="'+t(o)+': browse channels"><span class="pikk-live-room-emoji" aria-hidden="true">'+t(c)+"</span><strong>"+t(o)+'</strong><p class="muted">'+t(p)+'</p><span class="pikk-live-room-action">Browse channels <span aria-hidden="true">›</span></span></a>',n=Rp.map(o=>{const p=o.names.map(c=>s.get(c)).filter(Boolean);return p.forEach(c=>a.add(c[0])),'<details class="pikk-live-directory-group" id="pikk-live-group-'+o.id+'"'+(o.id==="coed"?" open":"")+'><summary class="pikk-live-directory-summary"><span class="pikk-live-directory-icon" aria-hidden="true">'+o.icon+'</span><span class="pikk-live-directory-label"><strong>'+t(o.title)+"</strong><small>"+t(o.description)+'</small></span><span class="pikk-live-directory-count">'+p.length+' rooms</span><span class="pikk-live-directory-chevron" aria-hidden="true">⌄</span></summary><div class="live-cat-cards pikk-live-directory-cards">'+p.map(i).join("")+"</div></details>"}),l=e.filter(o=>!a.has(o[0]));return l.length&&n.push('<details class="pikk-live-directory-group" open><summary class="pikk-live-directory-summary"><span class="pikk-live-directory-icon" aria-hidden="true">✨</span><span class="pikk-live-directory-label"><strong>More Live</strong><small>Additional topics</small></span><span class="pikk-live-directory-count">'+l.length+' rooms</span><span class="pikk-live-directory-chevron" aria-hidden="true">⌄</span></summary><div class="live-cat-cards pikk-live-directory-cards">'+l.map(i).join("")+"</div></details>"),'<div class="pikk-live-directory" aria-label="Live category groups">'+n.join("")+"</div>"}function Yr(){const e=(Je().query||{}).tab;return e==="live"||e==="channels"?"channels":e==="following"||e==="categories"?e:"channels"}function ge(){const e=Yr();j(e==="channels"?"#/live":`#/live?tab=${e}`)}function fe(e){return"$"+Number(e||0).toFixed(2)}function je(e){const t=Number(e)||0;return t>=1e3?(t/1e3).toFixed(t>=1e4?0:1).replace(/\.0$/,"")+"K":String(t)}function Gp(e="live"){return`
    <nav class="live-cat-chips" aria-label="Live categories">
      ${[{id:"live",href:"#/live?tab=channels",label:"Live"},{id:"openmic",href:"#/openmic",label:"Open Mic / Talent Discovery (24/7)"},{id:"spotlight",href:"#/spotlight",label:"Spotlight (24/7)"}].map(a=>{const i=a.id===e?" on":"",n=a.id===e?' aria-current="page"':"";return`<a class="live-cat-chip${i}" href="${a.href}"${n}>${r(a.label)}</a>`}).join("")}
    </nav>`}function Kp(e="channels"){return`
    <nav class="live-disc-tabs" aria-label="Live discovery">
      ${[{id:"following",href:"#/live?tab=following",label:"Following"},{id:"clips",href:"#/shorts",label:"Clips"},{id:"channels",href:"#/live?tab=channels",label:"Channels"},{id:"categories",href:"#/live?tab=categories",label:"Categories"}].map(a=>{const i=a.id===e?" on":"",n=a.id===e?' aria-current="page"':"";return`<a class="live-disc-tab${i}" href="${a.href}" data-tab="${a.id}"${n}>${r(a.label)}</a>`}).join("")}
    </nav>`}function Qr(e={}){const t=Jn(),s=t.chipLabel||"House · Music Video",a=t.embed?Ye(t.embed,"rel=0"):"",i=e.title||"House catalog · while stages are quiet";return`
    <div class="card sp-house live-house-teaser" style="margin-top:12px">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">${r(s)}</div>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:12px">${r(i)} · original YouTube · not a fake live act</p>
      ${a?`<div class="sp-house-embed hero-video" style="margin-top:10px">
               <iframe src="${r(a)}" title="${r(t.title)}" allowfullscreen loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>`:""}
      <div class="sp-now-title" style="margin-top:10px">${r(t.title)}</div>
      <div class="muted" style="font-size:12px">${r(t.artist||"DatBoiSkeet")} · ${r(t.note||"")}</div>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <a class="btn ghost" href="#/spotlight">24/7 Spotlight</a>
        <a class="btn ghost" href="#/openmic">Open Mic</a>
        ${t.youtube?`<a class="btn ghost" href="${r(t.youtube)}" target="_blank" rel="noopener">YouTube</a>`:""}
      </div>
    </div>`}function Vp(e){const t=e?La(e.id):[],s=new Set(t.map(l=>l.id)),a=zt().filter(l=>s.has(l.hostId)),i=t.length?t.slice(0,12).map(l=>`<a class="chip" href="#/profile">${r("@"+(l.username||l.id))}</a>`).join(""):'<span class="muted">Nobody followed yet · DEMO</span>';let n;if(!e)n=`
      <p class="muted">Sign in to see lives from accounts you follow.</p>
      <a class="btn primary" href="#/profile">Demo profile</a>
      <p class="chip" style="margin-top:10px">TEST MODE · Following is local demo graph</p>`;else if(!a.length)n=`
      <p class="muted" style="margin:0 0 8px">
        None of the people you follow are live right now (demo filter on seeded Hot lives).
      </p>
      <div class="row wrap" style="gap:6px;margin-bottom:10px">${i}</div>
      <a class="btn ghost" href="#/live?tab=channels">Browse Live channels</a>
      <p class="chip" style="margin-top:10px">TEST MODE · not a scrape</p>
      ${Qr({title:"Meanwhile — DatBoiSkeet house catalog on 24/7 stages"})}`;else{const l=a.map(o=>`
        <article class="hot-live-card${o.house?" is-house":""}" data-live-id="${r(o.id)}">
          <div class="live-hoodie" aria-label="Live · ${r(je(o.viewers))} watching">
            <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
            <span class="live-hoodie-viewers">${r(je(o.viewers))}</span>
          </div>
          <div class="hot-live-body">
            <div class="hot-live-host">@${r(o.hostName)}</div>
            <div class="hot-live-title">${r(o.title)}</div>
            <div class="hot-live-actions row wrap">
              <button type="button" class="btn ghost hot-live-watch" data-id="${r(o.id)}" data-host="${r(o.hostName)}">Watch demo</button>
            </div>
          </div>
        </article>`).join("");n=`
      <p class="muted" style="margin:0 0 8px;font-size:12px">Lives from accounts you follow · ${t.length} following · TEST MODE</p>
      <div class="row wrap" style="gap:6px;margin-bottom:10px">${i}</div>
      <div class="hot-lives-track">${l}</div>`}return`
    <div class="card live-disc-panel" id="liveTabFollowing" data-panel="following">
      <h3 style="margin:0 0 8px">Following</h3>
      ${n}
    </div>`}const Up=[["The Booth","Rappers, freestyles, hip-hop performances and song previews","🎙️"],["The Stage","Singers, bands, vocalists and instrumental performances","🎤"],["City Takeover","City-versus-city showcases, performances and local pride challenges","🌆"],["Producer Room","Beat showcases, producer collaborations and beat competitions","🎹"],["Ladies Lounge","Women-centered girl talk, beauty, fashion, relationships and community","💅"],["Girl Talk","Everyday conversations, friendships and women’s discussions","💬"],["Tea Time","Celebrity gossip, trending stories and entertainment drama","🫖"],["Who Did What?","Viral moments, celebrity controversies and debates","👀"],["Boss Ladies","Women entrepreneurs, business networking and financial growth","👑"],["Fashion & Fits","Fashion, outfits and personal style","👗"],["Ladies Only Live","Women-centered livestreams and hosted events","🎥"],["What's the Word?","Entertainment news, celebrity conversations, viral moments and trending discussions","🗣️"],["Women in Business","Women entrepreneurs, founders, business networking and mentorship","👩‍💼"],["The Man Cave","Men’s social conversations, sports and community","🤝"],["Men in Business","Men’s entrepreneurship, networking, mentorship and partnerships","👔"],["Girls' Night In","Women-centered social nights, games and discussions","🌙"],["Beauty Bar","Beauty, hair, makeup and skincare conversations","💄"],["Love & Standards","Dating, relationships and boundaries","💗"],["Women's Mental Wellness","Women-centered stress, confidence, emotional wellbeing and peer support","🧠"],["Dating From Her Side","Women-centered dating experiences, relationships and personal standards","💞"],["The Hustle Room: Women","Women-centered side hustles, extra income ideas and building businesses","📈"],["The Barbershop","Men-centered everyday debates, conversation and community","💈"],["Fellas' Night","Men-centered social events and games","🌃"],["Men's Corner","Men-centered life, relationships and personal development","🧢"],["Cars & Motors","Cars, motorcycles, customization and auto culture","🚘"],["Fitness & Brotherhood","Fitness, wellbeing and peer support","💪"],["Fatherhood","Parenting, family responsibilities and raising children","👨‍👧"],["Men's Mental Wellness","Men-centered stress, wellbeing and peer support","🧠"],["Dating From His Side","Men-centered dating experiences and relationship advice","💬"],["Sports Debate","Sports arguments, player comparisons and predictions","🏅"],["Gaming Brotherhood","Gaming, tournaments and player communities","🎮"],["Men's Style","Fashion, grooming, watches and fragrances","⌚"],["The Hustle Room","Careers, side businesses and professional growth","📈"],["Brotherhood & Mentorship","Intergenerational mentoring and peer support","🤝"],["Sports Central","All-sports discussion, fan talk and analysis","🏆"],["Basketball","Basketball discussion and fan streams","🏀"],["Football","American football discussion and fan streams","🏈"],["Soccer","Soccer discussion and fan streams","⚽"],["Baseball","Baseball discussion and fan streams","⚾"],["Hockey","Hockey discussion and fan streams","🏒"],["Tech Talk","AI, gadgets, apps and technology","💻"],["Startups & Innovation","Building businesses, technology and new ideas","🚀"],["World News","International events and global news discussions","🌍"],["Economy & Markets","Inflation, housing, jobs, interest rates and markets","📈"],["Let's Talk","Open conversations, questions and community discussion","🗣️"],["The Hangout","Conversations and social live streams","💬"],["Creator Spotlight","Featured creators and emerging talent","🌟"],["Game Room","Gameplay, tournaments and community games","🎮"],["Why Are You Single?","Coed conversations about single life, dating experiences and relationship challenges","❓"],["What Are You Looking For?","Coed conversations about dating intentions, values and ideal partners","💭"],["Single & Ready to Mingle","Opt-in coed social conversations and introductions for singles","💘"],["Looking for My Match","Opt-in dating live conversations","❤️"],["The Flirt Zone","Dating and connection conversations","💕"],["Speed Connections","Fast-paced introductions and connections","⏱️"],["Poly Connections","Consensual nonmonogamy discussions and connections","🔗"],["Couples Corner","Couples-versus-couples games, trivia, partner challenges, friendly competitions and rematches","💞"],["Date Night Live","Live dating conversations and activities","🌹"],["Love & Advice","Relationship conversations and advice","💌"],["Business Connect & Wealth Academy","Coed business networking and beginner education in entrepreneurship, credit, stocks, crypto, real estate and Roth IRAs","💼"],["City Connect","Meet people by city for friendship, dating, business networking and local conversations","📍"],["Conspiracy Room","Open discussion of theories and claims","🧩"],["Money Talk","Stocks, housing, crypto and financial discussions","💰"],["Just Chatting","Conversations, Q&A and hanging out","💬"],["Gaming","Gameplay, tournaments and community games","🎮"],["Music","Artists, DJs, producers and listening sessions","🎵"],["IRL","Everyday life, travel and outdoor streams","🌎"],["Sports","Sports talk and watch-along discussions","🏀"],["Creative","Art, design, production and making things","🎨"],["Podcasts & Talk Shows","Interviews, panels and conversations","🎙️"],["Food & Cooking","Recipes, kitchens and food reviews","🍳"],["Fitness","Training, wellness and movement","💪"],["Beauty & Fashion","Style, hair, makeup and fashion","✨"],["Business & Money Talk","Entrepreneurs, careers and money discussions","💼"],["Dating & Connections","Opt-in conversations and dating live rooms","❤️"],["Education","Tutorials, learning and study sessions","📚"],["News & Commentary","Current events and opinions","📰"],["Comedy & Entertainment","Comedy, variety and entertainment","🎭"],["Comedy & Roast Battles","1v1, tag team, open mic and tournaments","🎤"]];function zp(){return`
    <div class="card live-disc-panel" id="liveTabCategories" data-panel="categories">
      <div class="pikk-live-directory-hero">
        <span class="pikk-live-directory-kicker">PIKK LIVE · DISCOVER</span>
        <h3>Find your room.</h3>
        <p>Choose a community, explore a sport or find a conversation. Open a section to browse its topics.</p>
        <span class="pikk-live-directory-note">Discovery categories filter channels; a category is not a hosted room or a live stream. No active stream? You'll see an empty result.</span>
      </div>
      ${Fp(Up,r)}
      <h3 style="margin:20px 0 8px">PIKK 24/7 Stages</h3>
      <div class="live-cat-cards">
        <a class="live-cat-card" href="#/openmic"><strong>Open Mic / Talent Discovery</strong><span class="chip">24/7 stage</span><p class="muted">Join the performance queue</p></a>
        <a class="live-cat-card" href="#/spotlight"><strong>Spotlight Live</strong><span class="chip">24/7 stage</span><p class="muted">Keep Going votes and creator performances</p></a>
        <a class="live-cat-card" href="#/shorts"><strong>Clips / Shorts</strong><span class="chip">Watch</span><p class="muted">Watch short videos</p></a>
      </div>
    </div>`}function Hp(e){return e!=null&&e.spikedAt?Date.now()-Number(e.spikedAt)<15*60*1e3:!1}function Wp(e=""){const t=zt();return`
    <div class="card hot-lives-rail" id="hotLivesRail">
      <div class="row wrap" style="justify-content:space-between;align-items:baseline;gap:8px">
        <h3 style="margin:0">Hot lives · Top streamers</h3>
        <span class="chip">score · viewers + engagement</span>
      </div>
      <p class="muted" style="margin:6px 0 10px;font-size:12px">TEST MODE · seeded demo · not third-party scrape · house + community</p>
      <div class="hot-lives-track">
        ${(e?t.filter(i=>String(i.category||"").toLowerCase()===e.toLowerCase()):t).map(i=>{const n=Hp(i);return`
      <article class="hot-live-card${n?" is-hot":""}${i.house?" is-house":""}" data-live-id="${r(i.id)}">
        <div class="live-hoodie" aria-label="Live · ${r(je(i.viewers))} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" title="${r(je(i.viewers))} watching">${r(je(i.viewers))}</span>
        </div>
        <div class="hot-live-body">
          <div class="hot-live-host">@${r(i.hostName)}</div>
          <div class="hot-live-title">${r(i.title)}</div>
          <div class="hot-live-chips">
            <span class="chip">${r(je(i.viewers))} watching</span>
            ${i.house?'<span class="chip chip-ok">House</span>':""}
            ${n?'<span class="chip live-chip"><span class="dot" aria-hidden="true"></span> HOT</span>':""}
          </div>
          <div class="hot-live-actions row wrap">
            <button type="button" class="btn ghost hot-live-watch" data-id="${r(i.id)}" data-host="${r(i.hostName)}">Watch demo</button>
            <button type="button" class="btn hot-live-spike" data-id="${r(i.id)}">Simulate spike</button>
          </div>
        </div>
      </article>`}).join("")||'<p class="muted">No matching live channels in this category yet.</p>'}
      </div>
    </div>`}function Yp(e){const t=String(e||"queued");return t==="playing"?'<span class="chip live-chip">Playing</span>':t==="played"?'<span class="chip chip-ok">Played</span>':t==="skipped"?'<span class="chip">Skipped</span>':'<span class="chip">Queued</span>'}function Se(e){const t=Number(e)||0;return t>=1e3?(t/1e3).toFixed(t%1e3===0?0:1).replace(/\.0$/,"")+"K":String(t)}function Qp(e,t){if(!e||e.endedAt)return"";const s=ta(),a=Vo(),i=Uo(e.id).slice(0,12),n=a.map(c=>{const u=c.coins>=Go,m=s>=c.coins;return`
      <button type="button" class="lg-gift" data-slug="${r(c.slug)}" data-coins="${c.coins}" data-confirm="${u?"1":"0"}" title="${r(c.animation)}">
        <span class="lg-gift-emoji">${it(c.slug)}</span>
        <span class="lg-gift-name">${r(c.name)}</span>
        <span class="lg-gift-price">${r(Se(c.coins))} · ${fe(c.usd)}</span>
        ${m?'<span class="chip">Ready</span>':'<span class="chip">Need demo coins</span>'}
        ${u?'<span class="chip lg-confirm-chip">Confirm</span>':""}
      </button>`}).join(""),l=Zs.map(c=>`<button type="button" class="btn ghost lg-buy" data-coins="${c.coins}">${r(Se(c.coins))} · ${fe(c.usd)}</button>`).join(""),o=i.length?i.map(c=>`<li class="lg-hist-row">
            <span class="lg-hist-emoji">${it(c.giftSlug)}</span>
            <span><strong>${r(c.giftName)}</strong> · @${r(c.fromUser)} · ${r(Se(c.coins))} coins</span>
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
        <span class="chip">Coins ${r(Se(s))} · TEST MODE</span>
        <a class="btn ghost" href="#/wallet" style="font-size:12px">Wallet</a>
      </div>
      <details class="lg-buy-details" style="margin-top:10px">
        <summary class="muted" style="cursor:pointer;font-size:13px">Add demo coins · no payment</summary>
        <div class="row wrap lg-buy-row" style="gap:6px;margin-top:8px">${l}</div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">Demo coin values only. No charge, cash value, or withdrawal.</p>
      </details>`:`
      <div class="card" style="margin-top:8px;padding:12px">
        <p class="muted" style="margin:0">Create a local demo profile to try gifts during this Live. No real account required.</p>
        <a class="btn primary" href="#/profile" style="margin-top:8px">Sign in</a>
      </div>`}
      <h4 style="margin:14px 0 8px;font-size:13px">Recent gifts</h4>
      <ul class="list-plain lg-hist" id="lgHist">${o}</ul>
    </div>`}function Xp(e,t){var p;if(!e||e.endedAt)return"";const s=!!(t&&e.hostId===t.id),a=Number(((p=L().wallet)==null?void 0:p.balance)||0),i=Ha(e.id),n=Mn.map(c=>{const u=c.save>0?`<span class="chip chip-ok lsr-save">Save $${c.save}</span>`:"";return`
      <button type="button" class="lsr-pack" data-pack="${c.pack}" data-price="${c.price}" aria-pressed="false">
        <strong>${r(c.label)}</strong>
        <span class="lsr-pack-price">${fe(c.price)}</span>
        ${u}
      </button>`}).join(""),l=i.length?i.map(c=>{const u=s?`<div class="row wrap lsr-host-acts" style="gap:6px">
                 ${c.status==="queued"||c.status==="playing"?`<button type="button" class="btn primary lsr-play" data-rid="${r(c.requestId)}" data-si="${c.songIndex}">${c.status==="playing"?"Mark played":"Play"}</button>
                        <button type="button" class="btn ghost lsr-skip" data-rid="${r(c.requestId)}" data-si="${c.songIndex}">Skip</button>`:""}
               </div>`:"";return`
          <li class="lsr-queue-row" data-status="${r(c.status)}">
            <div class="lsr-queue-main">
              <strong>${r(c.title)}</strong>
              <span class="muted" style="font-size:12px">@${r(c.username)} · ${r(String(c.pack))}‑pack</span>
            </div>
            ${Yp(c.status)}
            ${u}
          </li>`}).join(""):'<li class="muted" style="padding:8px 0">No song requests yet · fans can buy a pack below.</li>',o=t?`
      <div class="lsr-form" id="lsrForm">
        <p class="muted" style="margin:0 0 8px;font-size:12px">Pick a pack, enter song title(s), then pay from demo Wallet · <span class="chip">TEST MODE</span></p>
        <div class="lsr-packs" id="lsrPacks" role="group" aria-label="Song request packs">
          ${n}
        </div>
        <div id="lsrTitleFields" class="lsr-titles"></div>
        <div class="row wrap" style="gap:8px;margin-top:10px;align-items:center">
          <button type="button" class="btn primary" id="lsrSubmit">Request songs · pay</button>
          <button type="button" class="btn ghost" id="lsrSeedWallet">+ $50 demo credit</button>
          <span class="chip">Wallet ${fe(a)}</span>
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
      <ul class="list-plain lsr-queue" id="lsrQueue">${l}</ul>
      <h4 style="margin:14px 0 8px;font-size:13px">Request a pack</h4>
      ${o}
    </div>`}function Jp(e){var o;const t=e.endedAt?Math.max(0,Math.floor((e.endedAt-e.startedAt)/1e3)):Math.max(0,Math.floor((Date.now()-e.startedAt)/1e3)),s=String(Math.floor(t/60)).padStart(2,"0"),a=String(t%60).padStart(2,"0"),i=je(e.viewers||0),n=e.endedAt?`<div class="live-stage-meta"><span class="chip">Ended · ${R(e.endedAt)}</span></div>`:`<div class="live-hoodie live-hoodie--stage" aria-label="Live · ${r(i)} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" id="liveViewers" title="${r(i)} watching">${r(i)}</span>
        </div>
        <div class="live-stage-meta">
          <span class="chip">${s}:${a}</span>
        </div>`,l=(e.chat||[]).slice(-40).map(p=>`
      <div class="live-chat-row ${p.support?"support":""}">
        <strong>${r(p.username)}</strong>
        <span>${r(p.text)}</span>
      </div>`).join("");return`
    <div class="card live-stage">
      <div class="live-stage-frame" role="img" aria-label="Fake stream stage · TEST MODE">
        <div class="live-stage-brand">
          <img src="/brand/pikk-official-approved.jpg" alt="PIKK" />
          <div>
            <div class="live-stage-title">${r(e.title)}</div>
            <div class="muted" style="font-size:12px">@${r(e.hostName)} · Follow DatBoiSkeet</div>
          </div>
        </div>
        ${n}
        <p class="live-stage-note">TEST MODE · no camera / no real stream · branding + chat demo only</p>
      </div>

      <div class="row wrap live-earn" style="margin-top:10px">
        <span class="chip">Tips ${fe(e.tipsTotal)}</span>
        <span class="chip">Gifts ${fe(e.giftsTotal||0)}</span>
        <span class="chip">Song reqs (see queue)</span>
        <span class="chip">Coins ${Se(ta())}</span>
        <span class="chip">Wallet ${fe(((o=L().wallet)==null?void 0:o.balance)||0)}</span>
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
      <div class="live-chat" id="liveChat">${l||'<p class="muted">No messages yet.</p>'}</div>
      ${e.endedAt?"":`<div class="row" style="gap:8px;margin-top:10px">
               <input id="liveChatInput" placeholder="Say something…" maxlength="280" style="flex:1" />
               <button class="btn primary" id="liveChatSend">Send</button>
             </div>`}
    </div>
  `}function Zp(e){const t=Number(e==null?void 0:e.targetAmount)||0;return t<=0?0:Math.min(100,Math.round((Number(e.raised)||0)/t*100))}function eu(e){const t=Math.max(0,Number(e)-Date.now());if(t<=0)return"Ended · 24h window over";const s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return s>=1?`Resets in ${s}h ${a}m`:`Resets in ${a}m`}function tu(e,t){if(!e||e.endedAt)return"";const s=e.hostId,a=Yo(s),i=!!(t&&s&&t.id===s),n=ta();if(!a)return i?`
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
      </div>`;const l=Zp(a),o=!!(a.completedAt||l>=100),p=l>=100?"Complete":l>=70?"Close":l>=30?"On the way":"Far",c=[50,100,250].map(m=>`<button type="button" class="btn ghost live-goal-donate" data-goal-id="${r(a.id)}" data-coins="${m}" title="≈ $${(m/50).toFixed(0)}">Donate ${m} coins</button>`).join(""),u=i?`<details class="live-goal-edit" style="margin-top:10px">
        <summary class="muted" style="cursor:pointer;font-size:12px">Edit goal (new 24h window)</summary>
        <div class="field" style="margin-top:8px"><label>Goal name</label>
          <input id="liveGoalName" maxlength="80" value="${r(a.name)}" /></div>
        <div class="field"><label>Goal amount ($)</label>
          <input id="liveGoalAmt" type="number" min="1" step="1" value="${r(String(a.targetAmount))}" /></div>
        <button type="button" class="btn" id="liveGoalSave">Save · reset 24h</button>
      </details>`:"";return`
    <div class="card live-daily-goal" id="liveDailyGoal">
      <div class="live-goal-head">
        <h3 style="margin:0">Daily goal · ${r(a.name)}</h3>
        <span class="chip${o?" chip-ok":""}">${o?"Goal met":r(p)}</span>
      </div>
      <p class="muted" style="margin:4px 0 8px;font-size:12px">${r(eu(a.endsAt))} · @${r(a.hostName||e.hostName)} · TEST MODE</p>
      <div class="live-goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}" aria-label="Goal progress">
        <div class="live-goal-fill" style="width:${l}%"></div>
      </div>
      <p class="live-goal-amounts" style="margin:8px 0 10px">
        <strong>${fe(a.raised)}</strong> / ${fe(a.targetAmount)}
        <span class="muted"> · ${l}%</span>
        <span class="chip" style="margin-left:8px">Coins ${r(Se(n))}</span>
      </p>
      <div class="row wrap live-goal-donate-row" style="gap:8px">
        ${c}
      </div>
      <form class="live-goal-custom-form" data-goal-id="${r(a.id)}" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:end">
        <label style="flex:1;min-width:125px">Custom coins<input type="number" class="live-goal-custom-coins" inputmode="numeric" min="1" max="1000000" step="1" required placeholder="Enter coins" style="width:100%" /></label>
        <button class="btn primary" type="submit">Donate custom</button>
      </form>
      <p class="muted" style="margin:8px 0 0;font-size:11px">50 / 100 / 250 coins ≈ $1 / $2 / $5 · 100 coins = $2 · TEST MODE</p>
      ${u}
    </div>`}function su(e){return e?`
    <div class="card" id="live-go">
      <h3>Go live · TEST MODE</h3>
      <p class="muted">Fake stream UI with title, viewer stub, chat, tips, gifts (coins), and paid song requests. Persisted in localStorage (<code>dbs_v1.live</code> + <code>coins</code> + <code>liveGiftLedger</code> + <code>liveSongRequests</code>).</p>
      <div class="field"><label>Stream title</label>
        <input id="liveTitle" maxlength="80" placeholder="e.g. Listening session · Long Story Short" value="PIKK Live · ${r(e.username)}" />
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
      </div>`}function au(e){return e.length?`
    <div class="card">
      <h3>Recent streams (this device)</h3>
      <ul class="list-plain">
        ${e.slice(0,8).map(t=>`<li>
              <span><strong>${r(t.title)}</strong><br/><span class="muted" style="font-size:12px">@${r(t.hostName)} · ${R(t.endedAt||t.startedAt)} · tips ${fe(t.tipsTotal)}</span></span>
              <span class="chip">${t.endedAt?"Ended":"Live"}</span>
            </li>`).join("")}
      </ul>
    </div>`:""}function iu(e){if(!e||e.endedAt)return"";const t=zo(10),s=t.length?t.map((o,p)=>{const c=it(o.lastSlug||"rose",{className:"gift-sticker gift-sticker--xs"});return`<div class="live-obar-cell" title="${r(o.username)} · ${fe(o.usd)} today">
            <span class="live-obar-rank">${p+1}</span>
            ${c}
            <span class="live-obar-name">${r(o.username)}</span>
          </div>`}).join(""):'<div class="live-obar-empty muted">No gifters yet today</div>',a=oi(10),i=a.length?a.map((o,p)=>{const c=it("battle-win",{className:"gift-sticker gift-sticker--xs"});return`<div class="live-obar-cell" title="${r(o.username)} · rest of day">
            <span class="live-obar-rank">${p+1}</span>
            ${c}
            <span class="live-obar-name">${r(o.username)}</span>
          </div>`}).join(""):'<div class="live-obar-empty muted">No winners yet today</div>',n=Ha(e.id).find(o=>o.status==="playing");let l="";if(n){const o=n.title||"Song";l=`
      <div class="live-obar live-obar-spotlight" id="liveRequestSpotlight" role="status" aria-live="polite">
        <span class="live-obar-label">Request Spotlight</span>
        <span class="live-obar-spotlight-name">@${r(n.username||"fan")}</span>
        <span class="muted live-obar-spotlight-song">${r(o)}</span>
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
      ${l}
    </div>`}function nu(e){const t=kl();if(!t)return"";const s=it(t.giftSlug||"rose",{className:"gift-sticker"}),i=e&&e.id===t.fromUserId?`<p class="muted" style="margin:8px 0 0;font-size:12px">You triggered this · others can Challenge you · TEST MODE</p>
       <button type="button" class="btn ghost" id="liveGbPopDismiss">Dismiss</button>`:`<div class="row wrap" style="gap:8px;margin-top:10px">
         <button type="button" class="btn primary" id="liveGbPopChallenge">Challenge @${r(t.fromUser)}</button>
         <button type="button" class="btn ghost" id="liveGbPopDismiss">Dismiss</button>
       </div>`;return`
    <div class="live-gb-pop" id="liveGbChallengePop" role="dialog" aria-label="Gift Battle challenge">
      <div class="live-gb-pop-card">
        <div class="row wrap" style="gap:10px;align-items:center">
          ${s}
          <div>
            <div class="chip">Gift Battle</div>
            <h3 style="margin:4px 0">@${r(t.fromUser)} sent ${r(t.giftName)}</h3>
            <p class="muted" style="margin:0;font-size:12px">${r(String(t.coins))} demo coins · no real payment · Challenge this gifter · 60s battle</p>
          </div>
        </div>
        ${i}
        <p class="chip" style="margin-top:8px">TEST MODE · broadcast demo · invitations respect prefs</p>
      </div>
    </div>`}function ru(e){var i,n,l,o,p,c,u,m;ri();const t=ii();if(!t||!e)return"";if(t.status==="active"||t.status==="ended"){const h=Math.max(0,Number(t.scoreA)||0),f=Math.max(0,Number(t.scoreB)||0),b=h+f,k=t.status==="active"?Math.max(0,Math.ceil((Number(t.endsAt)-Date.now())/1e3)):0,v=t.winnerName?"@"+r(t.winnerName):"Tie";return`
      <section class="card live-battle-scoreboard" aria-label="Live Gift Battle scoreboard">
        <div class="row wrap" style="justify-content:space-between;align-items:center">
          <strong>⚔️ PIKK Live Battle</strong>
          <span class="chip" id="liveBattleTimer" data-ends-at="${Number(t.endsAt)||0}">${t.status==="active"?k+"s left":"Finished"}</span>
        </div>
        <div class="row" style="justify-content:space-between;gap:12px;margin:12px 0">
          <div><strong>@${r(((i=t.challenger)==null?void 0:i.name)||"Challenger")}</strong><div>${je(h)} demo points</div></div>
          <strong>VS</strong>
          <div style="text-align:right"><strong>@${r(((n=t.opponent)==null?void 0:n.name)||"Opponent")}</strong><div>${je(f)} demo points</div></div>
        </div>
        <div class="live-battle-score-track" role="progressbar" aria-label="Challenger share of battle points" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${b?Math.round(h/b*100):50}" style="height:10px;background:var(--blue);border-radius:10px;overflow:hidden">
          <div style="width:${b?Math.round(h/b*100):50}%;height:100%;background:var(--acc)"></div>
        </div>
        ${t.status==="ended"?`<p class="live-battle-winner" style="font-weight:800;margin-top:10px">🏆 ${v} · Battle complete</p>`:'<p class="muted" style="margin-top:10px">Scores update with demo gifts · no real money</p>'}
        <a href="#/giftbattles" class="btn ghost" style="margin-top:8px">Battle details</a>
      </section>`}if(t.status!=="pending")return"";const s=((l=t.opponent)==null?void 0:l.id)===e.id,a=((o=t.challenger)==null?void 0:o.id)===e.id;return!s&&!a?`
      <div class="card live-gb-pending-note">
        <span class="chip">Pending battle</span>
        <span class="muted" style="margin-left:8px;font-size:12px">${r((p=t.challenger)==null?void 0:p.name)} vs ${r((c=t.opponent)==null?void 0:c.name)} · waiting</span>
      </div>`:s?`
      <div class="card live-gb-pending" id="liveGbPending">
        <strong>@${r((u=t.challenger)==null?void 0:u.name)}</strong> challenged you to a Gift Battle
        <div class="row wrap" style="gap:8px;margin-top:8px">
          <button type="button" class="btn primary" id="liveGbAccept">Accept · 60s</button>
          <button type="button" class="btn ghost" id="liveGbDecline">Decline</button>
        </div>
        <p class="chip" style="margin-top:8px">TEST MODE · recognition only</p>
      </div>`:`
    <div class="card live-gb-pending-note">
      <span class="chip">Waiting</span>
      <span class="muted" style="margin-left:8px;font-size:12px">Challenge sent to @${r((m=t.opponent)==null?void 0:m.name)}</span>
      <a class="btn ghost" href="#/giftbattles" style="margin-left:8px">Open Gift Battles</a>
    </div>`}function ou(){const e=oi(10);return e.length?`
    <div class="card live-gb-day" id="liveGbDayWinners">
      <h3 style="margin:0 0 6px">Gift Battle winners today</h3>
      <p class="muted" style="margin:0 0 8px;font-size:12px">Up to 10 · until end of day · TEST MODE</p>
      <ul class="live-gb-day-list">${e.map((s,a)=>`<li class="live-gb-day-row"><span class="live-gb-day-sticker">${it("battle-win",{className:"gift-sticker gift-sticker--xs"})}</span><span class="chip">#${a+1}</span><strong>${r(s.username)}</strong></li>`).join("")}</ul>
    </div>`:""}function lu(){var u;const{user:e,live:t}=L(),s=Bo(),a=t&&!t.endedAt,i=!!t,n=Yr(),l=((u=Je().query)==null?void 0:u.category)||"";let p=`
    <div class="live-disc-panel" data-panel="channels">
      ${l?`<div class="card"><strong>Category: ${r(l)}</strong> <a class="btn ghost" href="#/live?tab=categories">All categories</a> <a class="btn ghost" href="#/live?tab=channels">All channels</a><p class="muted small">Only channels tagged with this category are shown below.</p></div>`:""}
      ${Wp(l)}
      ${l?"":ou()}
      ${a?"":su(e)}
      ${a?"":Qr({title:"No active Live on this device — house catalog on Spotlight / Open Mic"})}
      ${au(s)}
      <div class="card">
        <p class="muted" style="margin:0 0 8px">More Live tools</p>
        <div class="row wrap">
          <a class="btn ghost" href="#/connect#connect-multistream">Multi-platform go-live</a>
          <a class="btn ghost" href="#/multiguest">Multi-Guest</a>
          <a class="btn ghost" href="#/shorts">Shorts / Clips</a>
        </div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">Open Mic + Spotlight are 24/7 categories (chips above). Clips live under Watch → Shorts / Clips. Gifts + song requests run during an active Live. Gift Battles is not promoted from this page.</p>
      </div>
    </div>`;n==="following"?p=Vp(e):n==="categories"&&(p=zp());const c=`
    ${Kp(n)}
    ${Gp("live")}
    ${a?iu(t):""}
    ${a?nu(e):""}
    ${a?ru(e):""}
    ${i?Jp(t):""}
    ${a?tu(t,e):""}
    ${a?Qp(t,e):""}
    ${a?Xp(t,e):""}
    ${p}
  `;return I("PIKK Live",c,{lead:"Following · Clips · Channels · Categories → Shorts · Request Spotlight · TEST MODE.",badge:a?"LIVE":void 0})}const Ra=[];let $a=!1;function cu(e,t){Ra.push(t),Xr(e)}function Xr(e){if($a)return;const t=e.querySelector("#liveGiftOverlay");if(!t){Ra.length=0;return}const s=Ra.shift();if(!s)return;$a=!0;const i=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?900:s.tier==="cinematic"?4200:s.tier==="premium"?2800:1600;t.innerHTML=`
    <div class="lg-overlay-card lg-tier-${r(s.tier||"small")}" data-slug="${r(s.slug)}">
      <div class="lg-overlay-sticker">${it(s.slug)}</div>
      <div class="lg-overlay-copy">
        <strong>${r(s.name)}</strong>
        <span>@${r(s.fromUser)} · ${r(Se(s.coins))} coins</span>
        <span class="muted lg-overlay-brief">${r(s.animation||"")}</span>
      </div>
    </div>`,t.classList.add("is-on"),window.setTimeout(()=>{t.classList.remove("is-on"),t.innerHTML="",$a=!1,Xr(e)},i)}function du(e){e.querySelectorAll(".lg-buy").forEach(t=>{t.addEventListener("click",()=>{const s=Ln(Number(t.dataset.coins));if((s==null?void 0:s.error)==="bad_package")return g("Unknown coin pack");if(s!=null&&s.error)return g(String(s.error));g(`+${Se(s.pack.coins)} coins · ${fe(s.pack.usd)} · TEST MODE`),ge()})}),e.querySelectorAll(".lg-gift").forEach(t=>{t.addEventListener("click",()=>{var o,p,c;const s=t.dataset.slug,a=t.dataset.confirm==="1",i=Ya.find(u=>u.slug===s);if(!i)return g("Gift not found");if(a&&!window.confirm(`Send ${i.name} for ${Se(i.coins)} coins (${fe(i.usd)})?
TEST MODE · demo coins only`))return;const n=(o=L().live)==null?void 0:o.id,l=Ho({liveId:n,slug:s});if((l==null?void 0:l.error)==="signin")return g("Sign in first");if((l==null?void 0:l.error)==="offline")return g("Not live");if((l==null?void 0:l.error)==="insufficient")return g(`Need ${Se(l.need)} coins — buy a pack below · TEST MODE`);if((l==null?void 0:l.error)==="bad_gift")return g("Unknown gift");if(l!=null&&l.error)return g(String(l.error));cu(e,{slug:i.slug,name:i.name,coins:i.coins,tier:i.tier,animation:i.animation,fromUser:((p=l.entry)==null?void 0:p.fromUser)||((c=L().user)==null?void 0:c.username)||"you"}),g(`Sent ${i.name} · ${Se(i.coins)} coins · TEST MODE`),window.setTimeout(()=>ge(),200)})})}function pu(e){var l,o;const t=e.querySelector("#lsrPacks"),s=e.querySelector("#lsrTitleFields");if(!t||!s)return;let a=1;const i=()=>{const p=a,c=Array.from({length:p},(u,m)=>`<div class="field"><label>Song ${m+1}</label>
        <input class="lsr-title-input" data-i="${m}" maxlength="80" placeholder="Song title…" /></div>`).join("");s.innerHTML=c},n=p=>{a=Number(p)||1,t.querySelectorAll(".lsr-pack").forEach(c=>{const u=Number(c.dataset.pack)===a;c.classList.toggle("on",u),c.setAttribute("aria-pressed",u?"true":"false")}),i()};t.querySelectorAll(".lsr-pack").forEach(p=>{p.addEventListener("click",()=>n(p.dataset.pack))}),n(1),(l=e.querySelector("#lsrSeedWallet"))==null||l.addEventListener("click",()=>{Fs(50,"Song request demo credit · TEST MODE"),g("+$50 wallet demo · TEST MODE"),ge()}),(o=e.querySelector("#lsrSubmit"))==null||o.addEventListener("click",()=>{const p=Array.from(e.querySelectorAll(".lsr-title-input")).map(u=>u.value),c=No({pack:a,titles:p});if((c==null?void 0:c.error)==="signin")return g("Sign in first");if((c==null?void 0:c.error)==="offline")return g("Not live");if((c==null?void 0:c.error)==="bad_pack")return g("Pick a pack");if((c==null?void 0:c.error)==="title_count")return g(`Enter ${c.need} song title${c.need>1?"s":""}`);if((c==null?void 0:c.error)==="insufficient")return g(`Need ${fe(c.need)} — tap + $50 demo credit · TEST MODE`);if(c!=null&&c.error)return g(String(c.error));g(`Song request submitted · ${fe(c.entry.price)} · TEST MODE`),ge()}),e.querySelectorAll(".lsr-play").forEach(p=>{p.addEventListener("click",()=>{var b;const c=p.dataset.rid,u=Number(p.dataset.si),h=Ha((b=L().live)==null?void 0:b.id).find(k=>k.requestId===c&&k.songIndex===u);let f;if((h==null?void 0:h.status)==="playing"){if(f=Fo(c,u),(f==null?void 0:f.error)==="host_only")return g("Host only");if(f!=null&&f.error)return g(String(f.error));g("Marked played · TEST MODE")}else{if(f=jo(c,u),(f==null?void 0:f.error)==="host_only")return g("Host only");if(f!=null&&f.error)return g(String(f.error));g("Now playing · TEST MODE")}ge()})}),e.querySelectorAll(".lsr-skip").forEach(p=>{p.addEventListener("click",()=>{const c=Ro(p.dataset.rid,Number(p.dataset.si));if((c==null?void 0:c.error)==="host_only")return g("Host only");if(c!=null&&c.error)return g(String(c.error));g("Skipped · TEST MODE"),ge()})})}function uu(e){var s,a,i,n,l,o,p,c;e.querySelectorAll(".hot-live-watch").forEach(u=>{u.addEventListener("click",()=>{va();const m=u.dataset.host||"creator",h=u.dataset.id||"",f=e.querySelector(`.hot-live-card[data-live-id="${CSS.escape(h)}"]`);e.querySelectorAll(".hot-live-card.is-watching").forEach(b=>b.classList.remove("is-watching")),f==null||f.classList.add("is-watching"),g(`Watching @${m} · demo only`)})}),e.querySelectorAll(".hot-live-spike").forEach(u=>{u.addEventListener("click",()=>{var b;const m=u.dataset.id,h=fd(m);if((h==null?void 0:h.error)==="missing")return g("Live not found");if(h!=null&&h.error)return g(String(h.error));const f=((b=h.live)==null?void 0:b.hostName)||"creator";g(h.deduped?`Spike @${f} · Admin alert already open`:`Spike @${f} · Admin engagement alert queued`),ge()})}),(s=e.querySelector("#liveStart"))==null||s.addEventListener("click",()=>{var b,k,v,w,E;const u=(k=(b=e.querySelector("#liveTitle"))==null?void 0:b.value)==null?void 0:k.trim(),m=Di(u);if((m==null?void 0:m.error)==="signin")return g("Sign in first");if((m==null?void 0:m.error)==="already_live")return g("Already live");const h=(w=(v=e.querySelector("#liveGoalNameGo"))==null?void 0:v.value)==null?void 0:w.trim(),f=Number((E=e.querySelector("#liveGoalAmtGo"))==null?void 0:E.value);if(h&&f>0){const T=qn({name:h,targetAmount:f});(T==null?void 0:T.error)==="signin"?g("Sign in to set goal"):T!=null&&T.error?g("Goal not set · "+T.error):g(`Live goal set · $${f} · 24h · TEST MODE`)}va(),g("You are live · TEST MODE"),ge()}),(a=e.querySelector("#liveRestart"))==null||a.addEventListener("click",()=>{var h;const u="PIKK Live · "+(((h=L().user)==null?void 0:h.username)||"Demo"),m=Di(u);if(m!=null&&m.error)return g(String(m.error));va(),g("Back live · TEST MODE"),ge()}),(i=e.querySelector("#liveEnd"))==null||i.addEventListener("click",()=>{Io(),Br(),g("Stream ended"),ge()}),(n=e.querySelector("#liveBumpViewers"))==null||n.addEventListener("click",()=>{const u=_o(),m=e.querySelector("#liveViewers");m&&u&&(m.textContent=je(u.viewers||0)),g("Viewers updated (stub)")}),(l=e.querySelector("#liveTip"))==null||l.addEventListener("click",u=>{const m=u.currentTarget,h=Dn({kind:"tip",amount:Number(m.dataset.amt)||1});if((h==null?void 0:h.error)==="signin")return g("Sign in first");if((h==null?void 0:h.error)==="offline")return g("Not live");g("Tip sent · demo"),ge()});const t=()=>{var f;const u=e.querySelector("#liveChatInput"),m=(f=u==null?void 0:u.value)==null?void 0:f.trim();if(!m)return g("Type a message");const h=qo(m);if((h==null?void 0:h.error)==="signin")return g("Sign in first");if((h==null?void 0:h.error)==="offline")return g("Not live");(h==null?void 0:h.error)!=="empty"&&(u&&(u.value=""),ge())};(o=e.querySelector("#liveChatSend"))==null||o.addEventListener("click",t),(p=e.querySelector("#liveChatInput"))==null||p.addEventListener("keydown",u=>{u.key==="Enter"&&t()}),(c=e.querySelector("#liveFocusGifts"))==null||c.addEventListener("click",()=>{var u;(u=e.querySelector("#liveGifts"))==null||u.scrollIntoView({behavior:"smooth",block:"start"})}),du(e),pu(e),mu(e)}function mu(e){var t;(t=e.querySelector("#liveGoalSave"))==null||t.addEventListener("click",()=>{var n,l,o;const s=(l=(n=e.querySelector("#liveGoalName"))==null?void 0:n.value)==null?void 0:l.trim(),a=Number((o=e.querySelector("#liveGoalAmt"))==null?void 0:o.value),i=qn({name:s,targetAmount:a});if((i==null?void 0:i.error)==="signin")return g("Sign in first");if((i==null?void 0:i.error)==="bad_name")return g("Enter a goal name");if((i==null?void 0:i.error)==="bad_amount")return g("Enter a goal amount ($)");if(i!=null&&i.error)return g(String(i.error));g(`Goal live · $${i.goal.targetAmount} · 24h window · TEST MODE`),ge()}),e.querySelectorAll(".live-goal-custom-form").forEach(s=>{s.addEventListener("submit",a=>{var l;a.preventDefault();const i=Number((l=s.querySelector(".live-goal-custom-coins"))==null?void 0:l.value);if(!Number.isSafeInteger(i)||i<1||i>1e6)return g("Enter 1–1,000,000 whole coins");const n=Rs(s.dataset.goalId,i);if((n==null?void 0:n.error)==="signin")return g("Sign in first");if((n==null?void 0:n.error)==="insufficient")return g("Not enough demo coins");if(n!=null&&n.error)return g("Donation unavailable · TEST MODE");g("Custom donation sent · TEST MODE"),ge()})}),e.querySelectorAll(".live-goal-donate").forEach(s=>{s.addEventListener("click",()=>{var o;const a=s.dataset.goalId,i=Number(s.dataset.coins),n=Rs(a,i);if((n==null?void 0:n.error)==="signin")return g("Sign in first");if((n==null?void 0:n.error)==="insufficient")return g(`Need ${Se(n.need)} coins — buy a pack in Gifts · TEST MODE`);if((n==null?void 0:n.error)==="expired")return g("Goal ended · 24h window over");if((n==null?void 0:n.error)==="unknown_goal")return g("Goal not found");if((n==null?void 0:n.error)==="invalid_amount")return g("Pick a donate amount");if(n!=null&&n.error)return g(String(n.error));const l=((o=n.donated)==null?void 0:o.usd)??i/50;g(`Donated ${Se(i)} coins ($${Number(l).toFixed(2)}) · TEST MODE`),ge()})})}function Qt(){j("#/marketplace")}const gu={pending:"Pending",approved:"Approved",rejected:"Rejected"},hu=[{v:"sponsored_post",label:"Sponsored post"},{v:"livestream_promo",label:"Livestream promo"},{v:"affiliate",label:"Affiliate link"},{v:"storefront",label:"Product storefront"}];function fu(){const{brandApps:e,user:t}=L(),s=Zo(),a=s.filter(o=>o.active),i=a.length?a.map(o=>`
      <article class="card market-listing" data-id="${r(o.id)}">
        <div class="row wrap">
          <span class="chip">Sponsored</span>
          <span class="chip">${r(o.disclosure||"Paid partnership")}</span>
          <span class="muted spacer" style="text-align:right;font-size:12px">${R(o.at)}</span>
        </div>
        <h3 style="margin:8px 0 4px">${r(o.title)}</h3>
        <p class="muted" style="margin:0 0 6px">${r(o.brand)}</p>
        <p style="margin:0 0 10px;font-size:14px">${r(o.blurb||"")}</p>
        <div class="row wrap">
          ${o.url?`<a class="btn" href="${r(o.url)}" target="_blank" rel="noopener">Visit offer</a>`:""}
          <button class="btn ghost listing-toggle" data-id="${r(o.id)}" data-active="0">Hide · demo</button>
        </div>
      </article>`).join(""):'<div class="card"><p class="muted" style="margin:0">No active sponsored listings yet. Apply as a brand or create a demo listing below.</p></div>',n=e.length?e.map(o=>`
      <div class="card" style="margin:0 0 10px;background:#12121a" data-app="${r(o.id)}">
        <div class="row wrap">
          <strong>${r(o.brand)}</strong>
          <span class="chip">${r(gu[o.status]||o.status)}</span>
          <span class="muted spacer" style="text-align:right">${R(o.at)}</span>
        </div>
        <p class="muted" style="margin:6px 0;font-size:12px">${r(o.email)} · ${r(o.campaign)} · budget ${r(o.budget||"—")}</p>
        <p style="font-size:13px;margin:0 0 8px">${r((o.pitch||"").slice(0,160))}</p>
        <div class="row wrap">
          <button class="btn primary brand-status" data-id="${r(o.id)}" data-status="approved">Approve</button>
          <button class="btn ghost brand-status" data-id="${r(o.id)}" data-status="rejected">Reject</button>
          ${o.status==="approved"?`<button class="btn brand-to-listing" data-id="${r(o.id)}" data-brand="${r(o.brand)}" data-url="${r(o.url||"")}" data-pitch="${r(o.pitch||"")}">Create listing</button>`:""}
        </div>
      </div>`).join(""):'<p class="muted">No brand applications yet.</p>',l=`
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
          ${hu.map(o=>`<option value="${o.v}">${r(o.label)}</option>`).join("")}
        </select>
      </div>
      <div class="field"><label>Offer / product URL</label><input id="mUrl" placeholder="https://" /></div>
      <div class="field"><label>Pitch</label><textarea id="mPitch" placeholder="What should creators promote?"></textarea></div>
      <button class="btn primary block" id="mSubmit">Submit application</button>
      <p class="chip" style="margin-top:10px">Signed in as ${r((t==null?void 0:t.username)||"guest")}</p>
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

    ${s.some(o=>!o.active)?`<div class="card">
            <h3>Hidden listings</h3>
            ${s.filter(o=>!o.active).map(o=>`<div class="row wrap" style="margin-bottom:8px">
                  <span>${r(o.title)} · ${r(o.brand)}</span>
                  <button class="btn ghost listing-toggle" data-id="${r(o.id)}" data-active="1">Show</button>
                </div>`).join("")}
          </div>`:""}
  `;return I("Marketplace",l,{lead:"Brand applications & sponsored listings · localStorage demo."})}function vu(e){var t,s;(t=e.querySelector("#mSubmit"))==null||t.addEventListener("click",()=>{var i,n,l,o,p,c,u;const a=Qo({brand:(i=e.querySelector("#mBrand"))==null?void 0:i.value,contact:(n=e.querySelector("#mContact"))==null?void 0:n.value,email:(l=e.querySelector("#mEmail"))==null?void 0:l.value,budget:(o=e.querySelector("#mBudget"))==null?void 0:o.value,campaign:(p=e.querySelector("#mCampaign"))==null?void 0:p.value,url:(c=e.querySelector("#mUrl"))==null?void 0:c.value,pitch:(u=e.querySelector("#mPitch"))==null?void 0:u.value});if((a==null?void 0:a.error)==="required")return g("Brand and email required");g("Application saved"),Qt()}),e.querySelectorAll(".brand-status").forEach(a=>{a.addEventListener("click",()=>{Xo(a.dataset.id,a.dataset.status),g("Marked "+a.dataset.status),Qt()})}),e.querySelectorAll(".brand-to-listing").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.brand||"Brand",n=Pi({title:`${i} · sponsored`,brand:i,blurb:a.dataset.pitch||"Sponsored offer from approved brand application.",url:a.dataset.url||"",disclosure:"Paid partnership · TEST MODE",brandAppId:a.dataset.id});if(n!=null&&n.error)return g("Could not create listing");g("Listing published"),Qt()})}),(s=e.querySelector("#lCreate"))==null||s.addEventListener("click",()=>{var i,n,l,o,p;const a=Pi({title:(i=e.querySelector("#lTitle"))==null?void 0:i.value,brand:(n=e.querySelector("#lBrand"))==null?void 0:n.value,blurb:(l=e.querySelector("#lBlurb"))==null?void 0:l.value,url:(o=e.querySelector("#lUrl"))==null?void 0:o.value,disclosure:(p=e.querySelector("#lDisc"))==null?void 0:p.value});if((a==null?void 0:a.error)==="required")return g("Title and brand required");g("Listing published"),Qt()}),e.querySelectorAll(".listing-toggle").forEach(a=>{a.addEventListener("click",()=>{Jo(a.dataset.id,a.dataset.active==="1"),g(a.dataset.active==="1"?"Listing shown":"Listing hidden"),Qt()})})}function me(e){j(e||"#/messages")}function bu(e){const t=e.messages||[];if(!t.length)return"No messages yet";const s=t[t.length-1];return(s.priority?"⚡ ":"")+(s.text||"").slice(0,80)}function yu(){return I("Messages",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Private DMs, team inbox, and group chats need a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Private messaging & team inbox · TEST MODE"})}function ku(e){const t=Bn(),s=L().messagePrefs||{allowDMs:!0,allowRequests:!0};return`
    <section class="pikk-messages-hero" aria-label="PIKK inbox">
      <div><p class="kicker">PIKK CONNECT · MESSAGES</p><h2>Your conversations.</h2><p>Stay connected with people, groups, and the DatBoiSkeet team.</p></div>
      <span class="pikk-messages-hero-mark" aria-hidden="true">✉</span>
    </section>
    <div class="pikk-msg-tools">
      <label for="pikkMsgSearch">Search conversations</label>
      <input id="pikkMsgSearch" type="search" placeholder="Search messages..." autocomplete="off" aria-controls="msgInbox" />
      <div class="pikk-msg-tool-actions"><button type="button" class="btn primary" id="pikkNewChatTop">+ New chat</button><button type="button" class="btn ghost" id="pikkGroupTop">Group chat</button></div>
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
          <button type="button" class="btn" id="msgNewChat">New chat</button>
          <button type="button" class="btn ghost" id="msgOpenGroup">DBS Fans group</button>
        </div>
      </div>
      <div class="msg-inbox" id="msgInbox">
        ${t.map(i=>{const n=i.kind==="group",l=!n&&i.peerId==="dbs",o=[n?'<span class="chip">Group</span>':"",l?'<span class="chip">Team</span>':"",i.request?'<span class="chip">Request</span>':"",i.muted?'<span class="chip">Muted</span>':"",i.blocked?'<span class="chip">Blocked</span>':""].filter(Boolean).join(" "),p=On(i),c=p?`<span class="chip msg-unread-chip" aria-label="${p} unread">${p}</span>`:"";return`
      <button type="button" class="msg-thread-row${p?" has-unread":""}" data-search="${r(String(i.peerName||i.peerId).toLowerCase())}" data-open-thread="${r(i.id)}">
        <div class="pikk-msg-avatar" aria-hidden="true">${r(String(i.peerName||i.peerId||"?").slice(0,1).toUpperCase())}</div>
        <div class="pikk-msg-thread-body"><div class="msg-thread-top">
          <strong>${r(i.peerName||i.peerId)}</strong>
          <span class="muted">${r(R(i.updatedAt||0))}</span>
        </div>
        <div class="msg-thread-preview muted">${r(bu(i))}</div>
        <div class="msg-thread-chips">${c}${o}</div></div>
      </button>`}).join("")||`<div class="msg-empty">
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
          <input type="checkbox" id="msgPrefDMs" ${s.allowDMs?"checked":""}/>
        </label>
        <label class="toggle"><span>Allow requests</span>
          <input type="checkbox" id="msgPrefRequests" ${s.allowRequests?"checked":""}/>
        </label>
      </div>
    </div>
  `}function wu(){return`
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <h3 style="margin:0">Start chat</h3>
        <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
      </div>
      <p class="muted">Demo peers. Mutual follows open a DM; others create a <em>request</em> thread (still usable in TEST MODE).</p>
    </div>
    ${fs().map(s=>{const a=s.team||jn(s.id),i=s.team?"Team inbox":a?"Message":"Message request";return`
      <article class="card msg-contact">
        <div class="msg-contact-head">
          <strong>${r(s.username)}</strong>
          ${s.team?'<span class="chip">Official</span>':a?'<span class="chip">Mutual</span>':'<span class="chip">Request</span>'}
        </div>
        <p class="muted" style="margin:6px 0 10px">${r(s.bio||"")}</p>
        <button type="button" class="btn ${s.team?"primary":""}" data-start-peer="${r(s.id)}" data-peer-name="${r(s.username)}">${r(i)}</button>
      </article>`}).join("")}
  `}function Su(){return`
    <div class="card msg-team-card">
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
  `}function $u(e,{teamPriorityHint:t=!1}={}){const s=L().user,a=e.kind==="group",i=!a&&e.peerId==="dbs",n=!!e.blocked,l=(e.messages||[]).map(c=>`
      <div class="msg-bubble ${c.from===(s==null?void 0:s.id)?"mine":""} ${c.priority?"priority":""}">
        <div class="msg-bubble-meta">
          <strong>${r(c.fromName||c.from)}</strong>
          ${c.priority?'<span class="chip priority-chip">Priority</span>':""}
          <span class="muted">${r(R(c.at))}</span>
        </div>
        <div class="msg-bubble-text">${r(c.text)}</div>
      </div>`).join(""),o=e.request?'<div class="msg-banner">Message request · recipient approval stub (demo still delivers locally)</div>':"",p=t?'<div class="msg-banner priority">Next send can use Priority $2.99 TEST MODE (wallet note only — not charged).</div>':"";return`
    <div class="card msg-thread-head">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <div>
          <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
          <h3 style="margin:8px 0 0">${r(e.peerName||e.peerId)}</h3>
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
    ${o}
    ${p}
    <div class="card msg-thread-card">
      <div class="msg-thread" id="msgThread">${l||'<p class="muted">No messages yet — say hi.</p>'}</div>
      ${n?'<p class="muted" style="margin-top:10px">Thread blocked · composer disabled (demo).</p>':`<div class="msg-composer">
               <input id="msgInput" placeholder="${i?"Write an inquiry…":"Message…"}" maxlength="500" />
               <button type="button" class="btn primary" id="msgSend">Send</button>
               ${i?'<button type="button" class="btn" id="msgSendPriority" title="TEST MODE — not charged">Priority $2.99</button>':""}
             </div>`}
    </div>
  `}function xu(e){var l,o,p;if(!L().user)return yu();fs();const s=((l=e==null?void 0:e.query)==null?void 0:l.view)||"",a=((o=e==null?void 0:e.query)==null?void 0:o.t)||"",i=((p=e==null?void 0:e.query)==null?void 0:p.priority)==="1";let n;if(a){const c=Nn(a);c?n=$u(c,{teamPriorityHint:i&&c.peerId==="dbs"}):n='<div class="card"><p class="muted">Thread not found.</p><button type="button" class="btn" id="msgBackInbox">← Inbox</button></div>'}else s==="new"?n=wu():s==="team"?n=Su():n=ku();return I("Messages",n,{lead:"DMs, group chats, and DatBoiSkeet team inbox · TEST MODE"})}function Eu(e){var o,p,c,u,m,h,f,b,k,v,w,E,T,y,D;if(!L().user)return;Ja();const s=()=>me("#/messages");(o=e.querySelector("#msgBackInbox"))==null||o.addEventListener("click",s),(p=e.querySelector("#msgNewChat"))==null||p.addEventListener("click",()=>me("#/messages?view=new")),(c=e.querySelector("#pikkNewChatTop"))==null||c.addEventListener("click",()=>me("#/messages?view=new")),(u=e.querySelector("#pikkMsgSearch"))==null||u.addEventListener("input",$=>{const B=String($.target.value||"").trim().toLowerCase();let x=0;e.querySelectorAll("#msgInbox [data-open-thread]").forEach(ce=>{ce.hidden=!!B&&!String(ce.dataset.search||"").includes(B),ce.hidden||x++});const N=e.querySelector("#pikkMsgNoResults");N&&(N.hidden=!B||x>0)}),(m=e.querySelector("#msgEmptyNew"))==null||m.addEventListener("click",()=>me("#/messages?view=new")),(h=e.querySelector("#msgOpenTeam"))==null||h.addEventListener("click",()=>me("#/messages?view=team")),(f=e.querySelector("#pikkGroupTop"))==null||f.addEventListener("click",()=>{var $;return($=e.querySelector("#msgOpenGroup"))==null?void 0:$.click()}),(b=e.querySelector("#msgOpenGroup"))==null||b.addEventListener("click",()=>{const $=il();if($!=null&&$.error){g("Sign in required");return}g("Opened DBS Fans"),me("#/messages?t="+encodeURIComponent($.id))}),(k=e.querySelector("#msgTeamFree"))==null||k.addEventListener("click",()=>{const $=rs("dbs","DatBoiSkeet");if($.error)return g("Sign in required");me("#/messages?t="+encodeURIComponent($.id))}),(v=e.querySelector("#msgTeamPriority"))==null||v.addEventListener("click",()=>{const $=rs("dbs","DatBoiSkeet");if($.error)return g("Sign in required");me("#/messages?t="+encodeURIComponent($.id)+"&priority=1")}),e.querySelectorAll("[data-start-peer]").forEach($=>{$.addEventListener("click",()=>{const B=$.dataset.startPeer,x=$.dataset.peerName||B;if(B==="dbs"){me("#/messages?view=team");return}const N=rs(B,x);if(N.error)return g("Sign in required");N.request&&g("Request thread created · demo"),me("#/messages?t="+encodeURIComponent(N.id))})}),e.querySelectorAll("[data-open-thread]").forEach($=>{$.addEventListener("click",()=>{me("#/messages?t="+encodeURIComponent($.dataset.openThread))})}),(w=e.querySelector("#msgPrefDMs"))==null||w.addEventListener("change",$=>{Ii({allowDMs:!!$.target.checked}),g($.target.checked?"DMs allowed":"DMs disabled (stub)")}),(E=e.querySelector("#msgPrefRequests"))==null||E.addEventListener("change",$=>{Ii({allowRequests:!!$.target.checked}),g($.target.checked?"Requests allowed":"Requests disabled (stub)")});const a=new URLSearchParams(location.hash.split("?")[1]||"").get("t"),i=a?Nn(a):null;i&&tl(i.id),e.querySelectorAll("[data-flag]").forEach($=>{$.addEventListener("click",()=>{if(!i)return;const B=$.dataset.flag;if(B==="mute"){const x=ha(i.id,{muted:!i.muted});g(x.muted?"Muted":"Unmuted"),me("#/messages?t="+encodeURIComponent(i.id))}else if(B==="block"){const x=ha(i.id,{blocked:!i.blocked});g(x.blocked?"Blocked":"Unblocked"),me("#/messages?t="+encodeURIComponent(i.id))}else B==="report"&&(ha(i.id,{report:!0}),g("Reported · stub (Guidelines §13)"),me("#/messages?t="+encodeURIComponent(i.id)))})});const n=$=>{if(!i)return;const B=e.querySelector("#msgInput"),x=(B==null?void 0:B.value)||"";let N;if(i.kind==="group"?N=nl(i.id,x):N=sl(i.peerId,i.peerName,x,{priority:!!$}),(N==null?void 0:N.error)==="empty")return g("Type a message");if(N!=null&&N.error)return g("Could not send");g($?"Priority sent · TEST MODE $2.99 not charged":"Sent"),me("#/messages?t="+encodeURIComponent(i.id))};(T=e.querySelector("#msgSend"))==null||T.addEventListener("click",()=>n(!1)),(y=e.querySelector("#msgSendPriority"))==null||y.addEventListener("click",()=>n(!0)),(D=e.querySelector("#msgInput"))==null||D.addEventListener("keydown",$=>{$.key==="Enter"&&($.preventDefault(),n(!1))});const l=e.querySelector("#msgThread");l&&(l.scrollTop=l.scrollHeight)}function gt(){j("#/wallet")}function W(e){return"$"+Number(e||0).toFixed(2)}function xa(e){return Number(e||0).toLocaleString()}const Au={pending:"Pending",completed:"Completed",rejected:"Rejected"};function Cu(){const{wallet:e,user:t,coins:s}=L(),a=e||{balance:0,history:[]},i=ta(),n=[...(s==null?void 0:s.history)||[]].slice(0,10),l=Ko(),o=ds(),p=ti().filter(x=>x.count>0),c=Pn(t==null?void 0:t.id),u=[...a.history||[]].slice(-12).reverse(),m=[...o.earnings||[]].slice(0,20),h=o.payouts||[],f=h.find(x=>x.status==="pending"),b=!f&&o.available>=o.threshold,k=o.verification==="demo_verified",v=u.length>0?`<ul class="list-plain">${u.map(x=>`<li>
          <span>${r(x.note||"Entry")}<br/><span class="muted" style="font-size:12px">${R(x.at)}</span></span>
          <strong style="color:${Number(x.amount)>=0?"var(--ok,#6dffb0)":"inherit"}">${Number(x.amount)>=0?"+":""}${W(x.amount)}</strong>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0">No fan USD credit activity yet.</p>',w=l.map(x=>{const N=`pack_${x.coins}`;return`<button type="button" class="card coin-pack-btn" data-coins="${x.coins}" id="${r(N)}" style="text-align:left;cursor:pointer;margin:0;padding:12px;border:1px solid rgba(255,255,255,.08);background:#12121a">
        <div style="font-size:20px;font-weight:900">${xa(x.coins)} <span class="muted" style="font-size:13px;font-weight:600">coins</span></div>
        <div class="muted" style="font-size:13px;margin-top:4px">${W(x.usd)} · TEST MODE</div>
        <div style="margin-top:8px"><span class="chip">Buy · demo credit</span></div>
      </button>`}).join(""),E=n.length>0?`<ul class="list-plain">${n.map(x=>{const N=Number(x.amount)||0;return`<li>
          <span>${r(x.note||"Coins")}<br/><span class="muted" style="font-size:12px">${R(x.at)}</span></span>
          <strong style="color:${N>=0?"var(--ok,#6dffb0)":"inherit"}">${N>=0?"+":""}${xa(N)}</strong>
        </li>`}).join("")}</ul>`:'<p class="muted" style="margin:0">No coin purchases or gifts yet. Buy a pack below for Live gifts.</p>',T=c.length>0?`<ul class="list-plain">${c.slice(0,8).map(x=>`<li>
          <span>
            <strong>${r(x.note||x.label||"Live gift")}</strong>
            <span class="chip">80/20 NET</span>
            ${x.giftSlug?`<span class="chip">${r(x.giftSlug)}</span>`:""}
            <br/><span class="muted" style="font-size:12px">gross ${W(x.gross)} · fees ${W(x.fees)} · net ${W(x.net)} · ${R(x.at)}</span>
          </span>
          <span style="text-align:right;font-size:13px">
            <strong>${W(x.creatorShare)}</strong><br/>
            <span class="muted">PIKK ${W(x.dbsShare)}</span>
          </span>
        </li>`).join("")}</ul>
        <p class="muted" style="font-size:12px;margin:8px 0 0">Creator-only split view. Live viewers never see 80/20.</p>`:'<p class="muted" style="margin:0">No coin-gift earnings yet. When viewers send catalog gifts on Live, your <strong>80% of NET</strong> lands here (TEST MODE: listed USD = net, 0% external fee).</p>',y=p.length>0?`<div style="overflow-x:auto">
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
          ${p.map(x=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
            <td style="padding:8px 4px"><strong>${r(x.label)}</strong><br/><span class="muted" style="font-size:11px">${x.creatorPct}/${x.dbsPct} · ${x.count} line${x.count===1?"":"s"}</span></td>
            <td style="padding:8px 4px">${W(x.gross)}</td>
            <td style="padding:8px 4px">${W(x.fees)}</td>
            <td style="padding:8px 4px">${W(x.net)}</td>
            <td style="padding:8px 4px"><strong>${W(x.creatorShare)}</strong></td>
            <td style="padding:8px 4px">${W(x.dbsShare)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:12px;margin:8px 0 0">Default fees = demo 2.9% + $0.30. <strong>Live catalog gifts (t185u)</strong> treat listed USD as NET (fees $0) then 80/20. Seeded rows labeled in ledger.</p>`:'<p class="muted" style="margin:0">No creator earnings yet. Load demo earnings or receive Live tips/gifts.</p>',D=m.length>0?`<ul class="list-plain">${m.map(x=>`<li>
          <span>
            <strong>${r(x.label)}</strong>
            ${x.payoutId?'<span class="chip">In payout</span>':'<span class="chip">Open</span>'}
            ${x.source==="seed"?'<span class="chip">Demo seed</span>':""}
            ${x.source==="live_gift"?'<span class="chip">Coin gift</span>':""}
            <br/><span class="muted" style="font-size:12px">${r(x.note)} · ${R(x.at)}</span>
          </span>
          <span style="text-align:right;font-size:13px">
            <strong>${W(x.creatorShare)}</strong><br/>
            <span class="muted">gross ${W(x.gross)}</span>
          </span>
        </li>`).join("")}</ul>`:"",$=h.length>0?h.map(x=>`<div class="card" style="margin:0 0 10px;background:#12121a" data-payout="${r(x.id)}">
        <div class="row wrap">
          <strong>${W(x.amount)}</strong>
          <span class="chip">${r(Au[x.status]||x.status)}</span>
          <span class="muted spacer" style="text-align:right;font-size:12px">${R(x.at)}</span>
        </div>
        <p class="muted" style="margin:6px 0;font-size:12px">${r(x.note||"Payout")} · ${(x.earningIds||[]).length} earning line(s)</p>
        ${x.status==="pending"?`<div class="row wrap">
                <button class="btn primary payout-status" data-id="${r(x.id)}" data-status="completed">Mark completed · demo</button>
                <button class="btn ghost payout-status" data-id="${r(x.id)}" data-status="rejected">Reject · release hold</button>
              </div>`:x.reviewedAt?`<p class="muted" style="margin:0;font-size:12px">Reviewed ${R(x.reviewedAt)}</p>`:""}
      </div>`).join(""):'<p class="muted">No payout requests yet.</p>',B=`
    <div class="card">
      <div class="row wrap">
        <span class="chip">TEST MODE · not real money</span>
        <span class="chip">${k?"Identity / tax · demo verified":"Identity / tax verification · demo"}</span>
        <button class="btn ghost" id="cwVerify" style="margin-left:auto">${k?"Clear demo verify":"Mark verified · demo"}</button>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">Fan <strong>coins</strong> (Live gifts) stay separate from fan USD credits and creator redeemable balances. No real processors, KYC, or charges.</p>
    </div>

    <div class="card" id="wallet-coins">
      <div class="row wrap">
        <h3 style="margin:0">Gift coins</h3>
        <span class="chip">t185u · 100 coins = $2</span>
        <span class="chip">TEST MODE</span>
      </div>
      <div style="font-size:32px;font-weight:900;margin-top:8px">${xa(i)} <span class="muted" style="font-size:16px;font-weight:600">coins</span></div>
      <p class="muted" style="margin:4px 0 12px">≈ ${W(i*.02)} · stored in <code>dbs_v1.coins</code> (not USD <code>wallet</code>). Used for Live gift tray.</p>
      <h4 style="margin:0 0 8px;font-size:14px">Buy coin pack</h4>
      <div class="grid-2" style="gap:10px">${w}</div>
      <p class="muted" style="font-size:12px;margin:10px 0 0">No discounts · packs ${Zs.map(x=>`${x.coins}/$${x.usd}`).join(" · ")}. Demo credit only — no payment processor.</p>
      <h4 style="margin:16px 0 8px;font-size:14px">Recent coin activity</h4>
      ${E}
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
          <div style="font-size:28px;font-weight:900">${W(o.available)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Holds / in review</p>
          <div style="font-size:28px;font-weight:900">${W(o.holds)}</div>
        </div>
      </div>
      <div class="row wrap" style="margin-top:10px">
        <span class="chip">Threshold ${W(o.threshold)}</span>
        <span class="chip">Holds / refunds · demo</span>
        ${f?'<span class="chip">Payout pending</span>':""}
      </div>
      <div class="row wrap" style="margin-top:12px">
        <button class="btn primary" id="cwPayout" ${b?"":"disabled"}>Request payout · TEST MODE</button>
        <button class="btn" id="cwSeed">${(o.earnings||[]).length?"Reload demo earnings":"Load demo earnings"}</button>
        <a class="btn ghost" href="#/earnings">Earnings overview</a>
      </div>
      ${b?'<p class="muted" style="margin:10px 0 0;font-size:12px">Moves available → holds and locks those earning lines until completed or rejected.</p>':`<p class="muted" style="margin:10px 0 0;font-size:12px">${f?"Finish or reject the pending payout before requesting another (anti double-payout).":`Need at least ${W(o.threshold)} available · currently ${W(o.available)}.`}</p>`}
      <p class="chip" style="margin-top:10px">Signed in as ${r((t==null?void 0:t.username)||"guest")}</p>
    </div>

    <div class="card" id="wallet-gift-earnings">
      <h3>Live gift earnings · creator view</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">80% creator / 20% PIKK on NET catalog gifts. Not shown on Live / gift tray.</p>
      ${T}
    </div>

    <div class="card">
      <h3>Earnings breakdown</h3>
      <p class="muted" style="margin:0 0 10px">Gifts, tips, subscriptions, referrals, Clippers, sponsorships, merch/affiliate — gross → fees → net → creator% / PIKK%.</p>
      ${y}
      ${D?`<h4 style="margin:16px 0 8px;font-size:14px">Ledger (recent)</h4>${D}`:""}
    </div>

    <div class="card">
      <h3>Payout history</h3>
      <p class="muted" style="margin:0 0 10px">On-device demo approve / reject. Completed funds leave holds; rejected releases hold and untags earnings.</p>
      ${$}
    </div>
  `;return I("Wallet & Payouts",B,{lead:"Creator Wallet & Payout Center · gift coins + fan USD · TEST MODE."})}function Tu(e){var t,s,a,i,n;e.querySelectorAll(".coin-pack-btn").forEach(l=>{l.addEventListener("click",()=>{const o=Number(l.dataset.coins),p=Ln(o);if((p==null?void 0:p.error)==="bad_package")return g("Unknown pack");if(p!=null&&p.error)return g("Could not buy coins");g(`+${o.toLocaleString()} coins · TEST MODE`),gt()})}),(t=e.querySelector("#fanCredit5"))==null||t.addEventListener("click",()=>{Fs(5,"Demo credit +$5"),g("+$5 fan credits"),gt()}),(s=e.querySelector("#fanCredit25"))==null||s.addEventListener("click",()=>{Fs(25,"Demo credit +$25"),g("+$25 fan credits"),gt()}),(a=e.querySelector("#cwSeed"))==null||a.addEventListener("click",()=>{const l=(ds().earnings||[]).length>0,o=Fn({force:!0});g(l?"Demo earnings reloaded":`Loaded ${o.seeded||0} demo lines`),gt()}),(i=e.querySelector("#cwPayout"))==null||i.addEventListener("click",()=>{const l=ll();if((l==null?void 0:l.error)==="pending_exists")return g("Payout already pending");if((l==null?void 0:l.error)==="below_threshold")return g("Below payout threshold");if(l!=null&&l.error)return g("Could not request payout");g("Payout requested · held"),gt()}),(n=e.querySelector("#cwVerify"))==null||n.addEventListener("click",()=>{const o=ds().verification!=="demo_verified";dl(o),g(o?"Demo verified":"Verification cleared"),gt()}),e.querySelectorAll(".payout-status").forEach(l=>{l.addEventListener("click",()=>{const o=cl(l.dataset.id,l.dataset.status);if(o!=null&&o.error)return g("Could not update payout");g("Payout "+l.dataset.status),gt()})})}function rn(e){j(e||"#/earnings")}function ae(e){return"$"+Number(e||0).toFixed(2)}const Jr=[{id:"all",label:"All"},{id:"gifts",label:"Gifts"},{id:"tips",label:"Tips"},{id:"subscriptions",label:"Subscriptions"},{id:"clippers",label:"Clippers"},{id:"referrals",label:"Referrals"},{id:"sponsorships",label:"Sponsorships"},{id:"merch",label:"Merch"}];function Zr(){var t;const e=(((t=Je().query)==null?void 0:t.cat)||"all").toLowerCase();return Jr.some(s=>s.id===e)?e:"all"}function Du(e){return(e||[]).reduce((t,s)=>(t.gross+=Number(s.gross)||0,t.fees+=Number(s.fees)||0,t.net+=Number(s.net)||0,t.creatorShare+=Number(s.creatorShare)||0,t.dbsShare+=Number(s.dbsShare)||0,t),{gross:0,fees:0,net:0,creatorShare:0,dbsShare:0})}function Xt(e){return Math.round(Number(e)*100)/100}function Mu(){const e=ds(),t=ol(),s=Zr(),a=[...e.earnings||[]].sort((k,v)=>(v.at||0)-(k.at||0)),i=s==="all"?a:a.filter(k=>k.category===s||s==="subscriptions"&&k.category==="paid_content"),n=Du(a),l=ti(),o=Pn(),p=s==="gifts"?`<div class="card" style="margin:0 0 12px;background:#12121a">
      <div class="row wrap">
        <span class="chip">t185u · catalog gifts</span>
        <span class="chip">80% creator / 20% PIKK · NET</span>
        <span class="chip">TEST MODE · listed USD = net</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:13px">Coin gifts from Live use <code>sendLiveGift</code> → creator earnings here. Viewers on Live / gift tray never see this split. ${o.length?`${o.length} gift line(s) on device.`:"Send a catalog gift on an active Live to populate."}</p>
    </div>`:"",c=Jr.map(k=>{const v=k.id==="all"?"#/earnings":`#/earnings?cat=${k.id}`,w=k.id==="all"?a.length:a.filter(T=>T.category===k.id||k.id==="subscriptions"&&T.category==="paid_content").length,E=s===k.id;return`<a class="chip earn-filter${E?" active":""}" href="${v}" data-cat="${r(k.id)}" style="${E?"outline:1px solid var(--accent,#6dffb0);font-weight:700":""}">${r(k.label)}${w?` · ${w}`:""}</a>`}).join(""),u=Object.entries(t).map(([k,v])=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${r(v.label)}</strong><br/><span class="muted" style="font-size:11px">${r(k)}</span></td>
        <td style="padding:8px 4px">${v.creatorPct}%</td>
        <td style="padding:8px 4px">${v.dbsPct}%</td>
      </tr>`).join(""),m=Object.entries(t).map(([k,v])=>`<option value="${r(k)}">${r(v.label)}</option>`).join(""),h=l.filter(k=>k.count>0).length>0?`<div style="overflow-x:auto;margin-top:8px">
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
          ${l.filter(k=>k.count>0).map(k=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
            <td style="padding:8px 4px"><strong>${r(k.label)}</strong><br/><span class="muted" style="font-size:11px">${k.creatorPct}/${k.dbsPct} · ${k.count} line${k.count===1?"":"s"}</span></td>
            <td style="padding:8px 4px">${ae(k.gross)}</td>
            <td style="padding:8px 4px">${ae(k.fees)}</td>
            <td style="padding:8px 4px">${ae(k.net)}</td>
            <td style="padding:8px 4px"><strong>${ae(k.creatorShare)}</strong></td>
            <td style="padding:8px 4px">${ae(k.dbsShare)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`:"",f=i.length>0?`<ul class="list-plain">${i.map(k=>`<li style="align-items:flex-start">
          <span style="flex:1;min-width:0">
            <strong>${r(k.label||k.category)}</strong>
            ${k.payoutId?'<span class="chip">In payout</span>':'<span class="chip">Open</span>'}
            ${k.source==="seed"?'<span class="chip">Demo seed</span>':""}
            <br/><span class="muted" style="font-size:12px">${r(k.note||"")} · ${R(k.at)}</span>
            <br/><span class="muted" style="font-size:11px">gross ${ae(k.gross)} → fees ${ae(k.fees)} → net ${ae(k.net)} · creator ${k.creatorPct}% / PIKK ${k.dbsPct}%</span>
          </span>
          <span style="text-align:right;font-size:13px;white-space:nowrap">
            <strong>${ae(k.creatorShare)}</strong><br/>
            <span class="muted">PIKK ${ae(k.dbsShare)}</span>
          </span>
        </li>`).join("")}</ul>`:a.length===0?`<p class="muted" style="margin:0 0 12px">No earnings yet. Load demo lines or record a single demo earning below.</p>
           <button class="btn primary" id="earnSeed">Load demo earnings</button>`:'<p class="muted" style="margin:0">No lines in this category. <a href="#/earnings">Show all</a></p>',b=`
    <div class="card">
      <div class="row wrap">
        <span class="chip">TEST MODE · not real money</span>
        <span class="chip">Analytics &amp; ledger · payouts on Wallet</span>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">Transparent breakdown of clipping, referrals, merch affiliates, subscriptions, gifts, and tips — with PIKK commission splits. Request payouts on <a href="#/wallet">Wallet</a>.</p>
    </div>

    <div class="card">
      <h3>Summary</h3>
      <div class="grid-2">
        <div>
          <p class="muted" style="margin:0;font-size:12px">Available to payout</p>
          <div style="font-size:26px;font-weight:900">${ae(e.available)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Holds / in review</p>
          <div style="font-size:26px;font-weight:900">${ae(e.holds)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Lifetime creator share</p>
          <div style="font-size:22px;font-weight:800">${ae(Xt(n.creatorShare))}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Lifetime PIKK share</p>
          <div style="font-size:22px;font-weight:800">${ae(Xt(n.dbsShare))}</div>
        </div>
      </div>
      <div class="row wrap" style="margin-top:10px">
        <span class="chip">Lifetime gross ${ae(Xt(n.gross))}</span>
        <span class="chip">Fees ${ae(Xt(n.fees))}</span>
        <span class="chip">Net ${ae(Xt(n.net))}</span>
        <span class="chip">Threshold ${ae(e.threshold)}</span>
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
          <tbody>${u}</tbody>
        </table>
      </div>
      ${h?`<h4 style="margin:16px 0 0;font-size:14px">Totals by source (this device)</h4>${h}`:""}
    </div>

    <div class="card">
      <h3>Earnings ledger</h3>
      ${p}
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
  `;return I("Creator Earnings",b,{lead:"Rewards, commissions & ledger · TEST MODE · payouts on Wallet (§27)."})}function Lu(e){var t,s;(t=e.querySelector("#earnSeed"))==null||t.addEventListener("click",()=>{const a=(ds().earnings||[]).length>0,i=Fn({force:!0});g(a?"Demo earnings reloaded":`Loaded ${i.seeded||0} demo lines`),rn(on(Zr()))}),(s=e.querySelector("#earnDemoForm"))==null||s.addEventListener("submit",a=>{var p,c,u;a.preventDefault();const i=((p=e.querySelector("#earnCat"))==null?void 0:p.value)||"tips",n=Number((c=e.querySelector("#earnGross"))==null?void 0:c.value),l=(((u=e.querySelector("#earnNote"))==null?void 0:u.value)||"").trim()||"Manual demo earning";if(!(n>0))return g("Enter a positive gross amount");const o=ei({category:i,gross:n,note:l,source:"manual_demo"});g(`Recorded ${ae(o.creatorShare)} creator share`),rn(on(i))})}function on(e){return!e||e==="all"?"#/earnings":`#/earnings?cat=${e}`}function ht(){j("#/missions")}const ln={song:"Song",album:"Album",video:"Video",live:"Livestream",app:"DBS App",interview:"Interview"};function Pu(e){return"$"+Number(e||0).toFixed(0)}function Iu(e){const t=Number(e)||0;if(!t)return"No deadline";const s=t-Date.now();if(s<0)return`Ended ${Math.ceil(-s/864e5)}d ago`;const a=Math.ceil(s/864e5);return a<=1?"Due today / tomorrow":`${a}d left`}function _u(e=14){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function Ms(){const{user:e}=L();if(e)return e;const t=Nt("DemoCreator");return g("Signed in as DemoCreator · local demo"),t||L().user}function qu(){const{user:e}=L(),t=ia().sort((c,u)=>(u.createdAt||0)-(c.createdAt||0)),s=t.filter(c=>c.status==="active"||c.status==="paused"),a=t.filter(c=>c.status==="ended"||c.status==="draft"),i=t.length===0?`<div class="card">
          <p class="muted" style="margin:0 0 12px">No missions yet. Load demo campaigns or create one as demo admin.</p>
          <button class="btn primary" id="msnSeed">Load demo missions</button>
        </div>`:"",n=c=>{const u=c.fundSource==="third_party"?'<span class="chip">20% management fee · disclosed</span>':'<span class="chip">DBS-funded · marketing expense</span>',m=Kl(c.id),h=e&&(c.participants||[]).some(w=>w.userId===e.id),f=(c.submissions||[]).filter(w=>e&&w.userId===e.id),b=m.length>0?m.slice(0,8).map((w,E)=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
              <td style="padding:6px 4px">${E+1}</td>
              <td style="padding:6px 4px"><strong>${r(w.username)}</strong>
                ${w.referralCode?`<br/><span class="muted" style="font-size:11px">${r(w.referralCode)}</span>`:""}
              </td>
              <td style="padding:6px 4px">${w.score}</td>
              <td style="padding:6px 4px">${w.submissions}</td>
            </tr>`).join(""):'<tr><td colspan="4" class="muted" style="padding:8px 4px">No participants yet — join to appear on the board.</td></tr>',k=(c.submissions||[]).length>0?`<ul class="list-plain" style="margin-top:8px">${(c.submissions||[]).slice(0,5).map(w=>`<li style="align-items:flex-start">
              <span style="flex:1;min-width:0">
                <strong>${r(w.username)}</strong>
                <span class="chip">${r(w.status||"pending")}</span>
                <br/><span style="font-size:13px">${r(w.proof)}</span>
                <br/><span class="muted" style="font-size:11px">${R(w.at)} · Manual review</span>
              </span>
            </li>`).join("")}</ul>`:'<p class="muted" style="margin:8px 0 0;font-size:13px">No proof submissions yet.</p>',v=c.status==="active"?`<div class="row wrap" style="margin-top:10px;gap:8px">
            ${h?`<span class="chip">Joined</span>
                   <button class="btn" data-bump="${r(c.id)}">+5 demo points</button>`:`<button class="btn primary" data-join="${r(c.id)}">Join mission</button>`}
            <button class="btn ghost" data-status="${r(c.id)}" data-next="paused">Pause</button>
            <button class="btn ghost" data-status="${r(c.id)}" data-next="ended">End mission</button>
          </div>
          ${h?`<form class="msn-proof" data-id="${r(c.id)}" style="display:grid;gap:8px;margin-top:12px;max-width:480px">
                  <div class="field"><label>Submit proof (URL or note)</label>
                    <input name="proof" placeholder="https://… or clip description" maxlength="400" required />
                  </div>
                  <button class="btn" type="submit">Submit for review · +10 pts</button>
                </form>`:""}`:c.status==="paused"?`<div class="row wrap" style="margin-top:10px;gap:8px">
              <button class="btn primary" data-status="${r(c.id)}" data-next="active">Resume</button>
              <button class="btn ghost" data-status="${r(c.id)}" data-next="ended">End mission</button>
            </div>`:`<div class="row wrap" style="margin-top:10px"><span class="chip">Archive · ${r(c.status)}</span></div>`;return`<article class="card" data-mission="${r(c.id)}">
      <div class="row wrap">
        <span class="chip">${r(ln[c.promoteType]||c.promoteType)}</span>
        <span class="chip">${r(c.status)}</span>
        <span class="chip">Budget ${Pu(c.budget)}</span>
        <span class="chip">${r(Iu(c.deadline))}</span>
        ${u}
        <span class="muted spacer" style="text-align:right;font-size:12px">${R(c.createdAt)}</span>
      </div>
      <h3 style="margin:10px 0 4px">${r(c.title)}</h3>
      <p class="muted" style="margin:0 0 6px;font-size:13px">${r(c.reward||"")}</p>
      <p class="muted" style="margin:0;font-size:12px">
        Fund: <strong>${c.fundSource==="third_party"?"Third-party":"DBS"}</strong>
        ${c.fundSource==="third_party"?" · 20% management fee (disclosed)":" · not a creator commission — marketing expense"}
        · ${(c.participants||[]).length} joined · ${(c.submissions||[]).length} submissions
        ${h?` · your proofs: ${f.length}`:""}
      </p>
      ${v}
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
          <tbody>${b}</tbody>
        </table>
      </div>
      <h4 style="margin:14px 0 0;font-size:14px">Submissions</h4>
      ${k}
    </article>`},l=s.length?s.map(n).join(""):t.length?'<div class="card"><p class="muted" style="margin:0">No active or paused missions. Create one or resume from archive.</p></div>':"",o=a.length>0?`<div class="card"><h3>Archive</h3>${a.map(n).join("")}</div>`:"",p=`
    <div class="card">
      <div class="row wrap">
        <span class="chip">TEST MODE · not real money</span>
        <span class="chip">Manual review · TEST MODE — no auto fraud API</span>
        <span class="chip">Signed in as ${r((e==null?void 0:e.username)||"guest")}</span>
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

    ${i}
    ${l}

    <div class="card">
      <h3>Create mission · demo admin</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Stored in <code>dbs_v1.missions</code>. No real charges or fraud API.</p>
      <form id="msnCreate" style="display:grid;gap:10px;max-width:520px">
        <div class="field"><label>Title *</label><input name="title" id="msnTitle" required maxlength="120" placeholder="Push Long Story Short" /></div>
        <div class="grid-2">
          <div class="field"><label>Promote type</label>
            <select name="promoteType" id="msnType">
              ${Object.entries(ln).map(([c,u])=>`<option value="${c}">${r(u)}</option>`).join("")}
            </select>
          </div>
          <div class="field"><label>Budget (USD)</label><input name="budget" id="msnBudget" type="number" min="0" step="1" value="500" /></div>
        </div>
        <div class="grid-2">
          <div class="field"><label>Deadline</label><input name="deadline" id="msnDeadline" type="date" value="${_u(14)}" /></div>
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

    ${o}
  `;return I("Missions",p,{lead:"Promotional campaigns · Clippers & creators · TEST MODE (§6)."})}function Bu(e){var t,s,a;(t=e.querySelector("#msnSeed"))==null||t.addEventListener("click",()=>{const i=ia().length>0,n=Vl({force:!0});g(i?"Demo missions reloaded":`Loaded ${n.seeded||0} demo missions`),ht()}),(s=e.querySelector("#msnSignIn"))==null||s.addEventListener("click",()=>{Ms(),ht()}),(a=e.querySelector("#msnCreate"))==null||a.addEventListener("submit",i=>{var h,f,b,k,v,w;i.preventDefault();const n=((h=e.querySelector("#msnTitle"))==null?void 0:h.value)||"",l=((f=e.querySelector("#msnType"))==null?void 0:f.value)||"app",o=Number((b=e.querySelector("#msnBudget"))==null?void 0:b.value)||0,p=((k=e.querySelector("#msnDeadline"))==null?void 0:k.value)||"",c=((v=e.querySelector("#msnFund"))==null?void 0:v.value)||"dbs",u=((w=e.querySelector("#msnReward"))==null?void 0:w.value)||"",m=Nl({title:n,promoteType:l,budget:o,deadline:p,fundSource:c,reward:u,status:"active"});if(m.error)return g("Title required");g(`Mission created · ${m.title}`),ht()}),e.querySelectorAll("[data-join]").forEach(i=>{i.addEventListener("click",()=>{Ms();const n=i.getAttribute("data-join"),l=Rl(n);if(l.error==="signin")return g("Sign in required");if(l.error==="already_joined")return g("Already joined");if(l.error==="not_active")return g("Mission not active");if(l.error)return g("Could not join");g("Joined mission · referral code assigned"),ht()})}),e.querySelectorAll("[data-bump]").forEach(i=>{i.addEventListener("click",()=>{Ms();const n=i.getAttribute("data-bump"),l=Gl(n,5);if(l.error)return g(l.error==="not_joined"?"Join first":"Bump failed");g("+5 demo points"),ht()})}),e.querySelectorAll("[data-status]").forEach(i=>{i.addEventListener("click",()=>{const n=i.getAttribute("data-status"),l=i.getAttribute("data-next");if(jl(n,l).error)return g("Status update failed");g(`Mission → ${l}`),ht()})}),e.querySelectorAll("form.msn-proof").forEach(i=>{i.addEventListener("submit",n=>{var c;n.preventDefault(),Ms();const l=i.getAttribute("data-id"),o=((c=i.querySelector('[name="proof"]'))==null?void 0:c.value)||"",p=Fl(l,{proof:o});if(p.error==="required")return g("Enter a URL or note");if(p.error==="not_joined")return g("Join first");if(p.error==="not_active")return g("Mission not active");if(p.error)return g("Submit failed");g("Proof submitted · pending manual review · +10 pts"),ht()})})}const Ou=[{id:"trending",label:"Trending"},{id:"following",label:"Following"},{id:"discover",label:"Discover"}];function Nu(){return!!L().exploreDiscoverable}function Ce({href:e,title:t,meta:s,chip:a}){return`<a class="explore-hit" href="${r(e)}">
    <div>
      <strong>${r(t)}</strong>
      <div class="muted" style="font-size:12px;margin-top:2px">${r(s||"")}</div>
    </div>
    ${a?`<span class="chip">${r(a)}</span>`:""}
  </a>`}function Ze(e,t,s){return t?`<div class="card explore-section">
    <h3>${r(e)}</h3>
    <div class="explore-hits">${t}</div>
  </div>`:`<div class="card explore-section">
      <h3>${r(e)}</h3>
      <p class="muted" style="margin:0">${r(s||"No matches")}</p>
    </div>`}function os(e){if(!e||!e.query)return`<div class="card" id="exploreResults">
      <p class="muted" style="margin:0">Search creators, fans, songs, albums, videos, posts, livestreams, and products. Exact locations are never indexed.</p>
    </div>`;const t=e.posts.length+e.profiles.length+e.music.length+e.videos.length+e.lives.length+e.products.length+e.pictures.length;if(!t)return`<div class="card" id="exploreResults">
      <p style="margin:0 0 6px"><strong>No results for “${r(e.query)}”</strong></p>
      <p class="muted" style="margin:0">Try another keyword, or browse Trending / Discover below. Report spam from a result’s destination page (demo shell).</p>
    </div>`;const s=e.posts.slice(0,8).map(m=>Ce({href:"#/posts",title:(m.text||"").slice(0,90)||"Post",meta:`@${m.username||"user"} · ${R(m.at||Date.now())}`,chip:"Post"})).join(""),a=e.profiles.slice(0,8).map(m=>Ce({href:"#/profile",title:`@${m.username||m.id}`,meta:(m.bio||"Creator / fan").slice(0,80),chip:m.verified?"Verified":"Profile"})).join(""),i=e.music.slice(0,8).map(m=>Ce({href:"#/music",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · ${m.type}`,chip:m.type==="album"?"Album":"Song"})).join(""),n=e.videos.slice(0,8).map(m=>Ce({href:"#/videos",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · From Admin`,chip:"Video"})).join(""),l=e.pictures.slice(0,8).map(m=>Ce({href:"#/home",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · picture`,chip:"Picture"})).join(""),o=e.lives.slice(0,8).map(m=>Ce({href:"#/live",title:m.title||"Livestream",meta:`@${m.hostName||"host"} · ${m.status==="live"?"LIVE now":"Ended"}`,chip:m.status==="live"?"Live":"Replay"})).join(""),p=e.products.slice(0,8).map(m=>Ce({href:"#/marketplace",title:m.title,meta:`${m.brand||"Brand"} · ${m.disclosure||"Sponsored"}`,chip:"Ad"})).join(""),c=e.query.toLowerCase(),u=[...Pt.filter(m=>m.title.toLowerCase().includes(c)||m.artist.toLowerCase().includes(c)||c.includes("music")||c.includes("song")||c.includes("album")).map(m=>Ce({href:"#/music",title:m.title,meta:`${m.artist} · ${m.status}`,chip:"Cover"})),...ye.filter(m=>m.title.toLowerCase().includes(c)||(m.artist||"").toLowerCase().includes(c)||c.includes("video")||c.includes("mv")).map(m=>Ce({href:"#/videos",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · Official MV`,chip:"MV"}))].join("");return`<div id="exploreResults">
    <p class="muted" style="margin:0 0 10px">${t} result${t===1?"":"s"} for “${r(e.query)}”</p>
    ${Ze("People",a,"No matching creators or fans")}
    ${Ze("Posts",s,"No matching posts")}
    ${Ze("Music (catalog)",i,"No published songs/albums")}
    ${Ze("Videos (catalog)",n,"No published videos")}
    ${Ze("Pictures",l,"No published pictures")}
    ${Ze("Livestreams",o,"No live or history matches")}
    ${Ze("Products / ads",p,"No marketplace listings")}
    ${u?Ze("Music-based picks",u):""}
  </div>`}function ju(){const e=ul(10);return e.length?`<div class="section-swipe explore-trend">
    ${e.map(t=>`<a class="preview-card" href="${r(t.href)}">
        <strong>${r(t.title)}</strong>
        <span class="muted">${r(t.subtitle)}${t.score?` · ♥${t.score}`:""}</span>
      </a>`).join("")}
  </div>`:'<p class="muted">Nothing trending yet — like posts or publish catalog items.</p>'}function Ru(){const e=L().user;if(!e)return'<div class="card"><p class="muted" style="margin:0">Sign in on <a href="#/profile">Profile</a> to see accounts you follow. Demo only — no exact locations.</p></div>';const t=e.following||[];return t.length?`<div class="card explore-section"><h3>Following</h3><div class="explore-hits">${t.map(a=>{var n;const i=((n=L().profiles)==null?void 0:n[a])||{id:a,username:a};return Ce({href:"#/profile",title:`@${i.username||i.id}`,meta:(i.bio||"Following").slice(0,80),chip:"Following"})}).join("")}</div></div>`:`<div class="card"><p class="muted" style="margin:0">You're not following anyone yet. Discover suggested accounts below, then follow from their profile.</p></div>`}function Fu(){const t=ml().slice(0,8).map(a=>Ce({href:"#/profile",title:`@${a.username}`,meta:(a.bio||"Suggested").slice(0,80),chip:a.verified?"Verified":"Suggest"})).join(""),s=Pt.map(a=>Ce({href:"#/music",title:a.title,meta:`${a.artist} · music-based`,chip:"Cover"})).join("");return`
    <div class="card">
      <h3>Discoverability (opt-in)</h3>
      <p class="muted" style="margin:0 0 10px">Appear in Explore suggestions. Off by default. No exact locations stored or shown.</p>
      <label class="row" style="gap:8px;align-items:center">
        <input type="checkbox" id="exploreDiscoverable" ${Nu()?"checked":""} />
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
    </div>`}function Gu(){const e=L().exploreTab||"trending",t=Ou.map(i=>`<button type="button" class="shop-chip${i.id===e?" on":""}" data-explore-tab="${i.id}">${r(i.label)}</button>`).join("");let s="";e==="following"?s=Ru():e==="discover"?s=Fu():s=`<div class="card">
      <h3>Trending Across DBS</h3>
      <p class="muted" style="margin:0 0 10px">High-engagement public posts and seeded demo cards (not a full engagement pipeline).</p>
      ${ju()}
    </div>
    <div id="exploreResultsWrap">${os(null)}</div>`;const a=`
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
  `;return I("Explore",a,{lead:"Universal search & discovery across DBS.",badge:"Phase 2 demo"})}function Ku(e,t){var n,l,o,p,c,u,m;const s=pl(t),a=e.querySelector("#exploreResultsWrap")||e.querySelector("#explorePanel");if(e.querySelector("#exploreResultsWrap"))e.querySelector("#exploreResultsWrap").innerHTML=os(s);else if(a){let h=e.querySelector("#exploreResults");if(h)h.outerHTML=os(s);else{const f=document.createElement("div");f.id="exploreLiveInsert",f.innerHTML=os(s),a.prepend(f)}}const i=(((n=s.posts)==null?void 0:n.length)||0)+(((l=s.profiles)==null?void 0:l.length)||0)+(((o=s.music)==null?void 0:o.length)||0)+(((p=s.videos)==null?void 0:p.length)||0)+(((c=s.lives)==null?void 0:c.length)||0)+(((u=s.products)==null?void 0:u.length)||0)+(((m=s.pictures)==null?void 0:m.length)||0);s.query&&g(i?`${i} result(s)`:"No matches")}function Vu(e){var l;const t=e.querySelector("#exploreQ"),s=e.querySelector("#exploreGo"),a=e.querySelector("#exploreClear"),i=()=>Ku(e,(t==null?void 0:t.value)||"");s==null||s.addEventListener("click",i),a==null||a.addEventListener("click",()=>{var p;t&&(t.value="");const o=e.querySelector("#exploreResultsWrap");o&&(o.innerHTML=os(null)),(p=e.querySelector("#exploreLiveInsert"))==null||p.remove(),g("Cleared")});let n;t==null||t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(i,220)}),t==null||t.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),i())}),e.querySelectorAll("[data-explore-tab]").forEach(o=>{o.addEventListener("click",()=>{Ai({exploreTab:o.getAttribute("data-explore-tab")}),j("/explore")})}),(l=e.querySelector("#exploreDiscoverable"))==null||l.addEventListener("change",o=>{Ai({exploreDiscoverable:!!o.target.checked}),g(o.target.checked?"Discoverable on":"Discoverable off")})}let Bs=null;function ft(e){j("#/giftbattles")}function cn(){Bs&&(clearInterval(Bs),Bs=null)}function Z(e){return"$"+Number(e||0).toFixed(2)}function eo(e){const t=Math.max(0,Math.ceil(e/1e3)),s=Math.floor(t/60),a=t%60;return`${s}:${String(a).padStart(2,"0")}`}function Uu(){return I("Gift Battles",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Gift battles need a local demo account so scores and history persist on this device.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Runs during Live · not a separate stream · voluntary support · TEST MODE"})}function zu(){return`
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
    </div>`}function Hu(e){if(!e)return`
      <div class="card">
        <h3>Champion Spotlight</h3>
        <p class="muted" style="margin:0">No active champion today. Win a battle to claim the rest-of-day banner.</p>
      </div>`;const t=Math.max(0,(e.championUntil||0)-Date.now()),s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return`
    <div class="card gb-champion" role="status">
      <div class="row wrap" style="gap:8px;align-items:center">
        <span class="gb-sticker-slot" aria-hidden="true">${yi("battle-crown",{className:"gift-sticker gift-sticker--battle"}).html}</span>
        <div class="chip">Challenge Winner · rest of day</div>
      </div>
      <h3 class="gb-champion-name">${r(e.username)}</h3>
      <p class="muted" style="margin:0">
        Score ${r(Z(e.score))} · ~${s}h ${a}m left today
        · ${r(e.mode||"demo")}
      </p>
    </div>`}function Wu(e,t){return e?`
      <div class="card gb-live-banner">
        <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
          <div>
            <span class="chip">LIVE</span>
            <strong style="margin-left:8px">${r(t.title||"Live")}</strong>
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
    </div>`}function Yu(e){return`
    <div class="card gb-battle" data-gb-status="pending">
      <h3>Challenge pending</h3>
      <p><strong>${r(e.challenger.name)}</strong> challenged <strong>${r(e.opponent.name)}</strong></p>
      <p class="muted">Mode: ${r(e.mode)} · opponent must Accept or Decline (demo controls below).</p>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <button type="button" class="btn primary" id="gbAccept">Accept</button>
        <button type="button" class="btn ghost" id="gbDecline">Decline</button>
      </div>
    </div>`}function Qu(e){const t=Math.max(0,(e.endsAt||0)-Date.now()),s=eo(t);return`
    <div class="card gb-battle" data-gb-status="active">
      <div class="gb-countdown" aria-live="polite" aria-atomic="true">
        <span class="gb-countdown-label">Time left</span>
        <span class="gb-countdown-clock" id="gbClock">${r(s)}</span>
      </div>
      <div class="gb-scoreboard" role="group" aria-label="Live battle scores">
        <div class="gb-side">
          <div class="muted">Challenger</div>
          <strong>${r(e.challenger.name)}</strong>
          <div class="gb-score" id="gbScoreA" aria-label="Challenger score ${r(Z(e.scoreA))}">${r(Z(e.scoreA))}</div>
        </div>
        <div class="gb-vs" aria-hidden="true">VS</div>
        <div class="gb-side">
          <div class="muted">Opponent</div>
          <strong>${r(e.opponent.name)}</strong>
          <div class="gb-score" id="gbScoreB" aria-label="Opponent score ${r(Z(e.scoreB))}">${r(Z(e.scoreB))}</div>
        </div>
      </div>
      <p class="muted gb-score-text" id="gbScoreText">
        Live score: ${r(e.challenger.name)} ${r(Z(e.scoreA))} —
        ${r(e.opponent.name)} ${r(Z(e.scoreB))}
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
    </div>`}function Xu(e){var i,n;let t="Tie",s="Equal voluntary support · recognition for both";e.result==="win"&&e.winnerName?(t=`Winner · ${e.winnerName}`,s="Recognition only — no opponent funds transferred"):e.result==="declined"&&(t="Declined",s="Challenge was declined");const a=e.result==="win"?yi("battle-win",{className:"gift-sticker gift-sticker--battle"}).html:"";return`
    <div class="card gb-battle gb-ended" data-gb-status="ended">
      <div class="row wrap" style="gap:8px;align-items:center">
        ${a?`<span class="gb-sticker-slot" aria-hidden="true">${a}</span>`:""}
        <div class="chip">${e.result==="win"?"Winner":e.result==="tie"?"Tie":"Ended"}</div>
      </div>
      <h3 class="gb-winner-banner">${r(t)}</h3>
      <p class="muted">${r(s)}</p>
      <p class="gb-score-text" style="margin:12px 0">
        Final: ${r(((i=e.challenger)==null?void 0:i.name)||"?")} ${r(Z(e.scoreA))} —
        ${r(((n=e.opponent)==null?void 0:n.name)||"?")} ${r(Z(e.scoreB))}
      </p>
      <button type="button" class="btn primary" id="gbClear">New challenge</button>
    </div>`}function Ju(e,t){var i;const a=zn().map(n=>`<option value="${r(n.id)}">${r(n.name)} — ${r(n.bio)}</option>`).join("");return`
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
      <p class="muted" style="margin:10px 0 0">Wallet: <strong id="gbWalletBal">${r(Z(((i=L().wallet)==null?void 0:i.balance)||0))}</strong> · TEST MODE</p>
    </div>`}function Zu(){const e=oi(10),t=e.length?e.map((s,a)=>`<li class="gb-day-row">${it("battle-win",{className:"gift-sticker gift-sticker--xs"})}<span class="chip">#${a+1}</span><strong>${r(s.username)}</strong></li>`).join(""):'<li class="muted">No winners yet today · win a 60s battle</li>';return`
    <div class="card gb-day-board" id="gbDayWinners">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <h3 style="margin:0">Today&apos;s winners</h3>
        <span class="chip">${e.length}/10 · end of day</span>
      </div>
      <p class="muted" style="margin:6px 0 8px;font-size:12px">Sticker board · recognition only · TEST MODE</p>
      <ol class="gb-list gb-day-list">${t}</ol>
    </div>`}function em(){const e=Sl(12),t=xl(15),s=e.length?e.map(i=>{var l,o;const n=i.result==="win"?`Winner ${i.winnerName}`:i.result==="tie"?"Tie":i.result||i.status;return`<li>
            <strong>${r(n)}</strong>
            <span class="muted"> · ${r(((l=i.challenger)==null?void 0:l.name)||"?")} ${r(Z(i.scoreA))} vs ${r(((o=i.opponent)==null?void 0:o.name)||"?")} ${r(Z(i.scoreB))} · ${r(R(i.endedAt||i.createdAt||0))} · ${r(i.mode||"")}</span>
          </li>`}).join(""):'<li class="muted">No battles yet.</li>';return`
    <div class="card">
      <h3>Top winners (local)</h3>
      <ol class="gb-list">${t.length?t.map((i,n)=>`<li><span class="chip">#${n+1}</span> <strong>${r(i.username)}</strong> <span class="muted">${i.wins} win${i.wins===1?"":"s"} · ${r(Z(i.points))} battle pts</span></li>`).join(""):'<li class="muted">Win a battle to appear here.</li>'}</ol>
    </div>
    <div class="card">
      <h3>Battle history</h3>
      <ul class="gb-list">${s}</ul>
    </div>`}function tm(e){return`
    <div class="card">
      <h3>Battle prefs</h3>
      <label class="toggle"><span>Allow battle invitations</span>
        <input type="checkbox" id="gbPrefInvites" ${e.invitationsEnabled?"checked":""}/>
      </label>
      <p class="muted" style="margin:8px 0 0">When off, new challenges are blocked. Existing active battles can still finish.</p>
    </div>`}function sm(){const{user:e,live:t}=L();if(!e)return Uu();ri();const s=ii(),a=ai(),i=$l(),n=!!(t&&!t.endedAt);let l="";(s==null?void 0:s.status)==="pending"?l=Yu(s):(s==null?void 0:s.status)==="active"?l=Qu(s):(s==null?void 0:s.status)==="ended"?l=Xu(s):l=Ju(n,a);const o=`
    ${zu()}
    ${Hu(i)}
    ${Zu()}
    ${Wu(n,t)}
    ${l}
    ${em()}
    ${tm(a)}
  `;return I("Gift Battles",o,{lead:"Runs during Live · not a separate stream · 60s voluntary gift battles · not wagers · TEST MODE",badge:(s==null?void 0:s.status)==="active"?"BATTLE":i?"CHAMP":void 0})}function am(e){var a,i,n,l,o,p,c;cn(),(a=e.querySelector("#gbPrefInvites"))==null||a.addEventListener("change",u=>{hl({invitationsEnabled:u.target.checked}),g(u.target.checked?"Invitations on":"Invitations off")}),(i=e.querySelector("#gbTopUp"))==null||i.addEventListener("click",()=>{var m;Fs(10,"Gift battle demo top-up · TEST MODE"),g("+$10 demo wallet");const u=e.querySelector("#gbWalletBal");u&&(u.textContent=Z(((m=L().wallet)==null?void 0:m.balance)||0))});const t=u=>{const m=e.querySelector("#gbOpponent"),h=m==null?void 0:m.value,f=zn().find(k=>k.id===h),b=fl({opponentId:h,opponentName:f==null?void 0:f.name,mode:u});if((b==null?void 0:b.error)==="signin")return g("Sign in first");if((b==null?void 0:b.error)==="invites_disabled")return g("Invitations disabled");if((b==null?void 0:b.error)==="not_live")return g("Not live — use sandbox");if((b==null?void 0:b.error)==="battle_in_progress")return g("Battle already in progress");if((b==null?void 0:b.error)==="self")return g("Pick another fan");g("Challenge sent · waiting for accept"),ft()};(n=e.querySelector("#gbStartLive"))==null||n.addEventListener("click",()=>t("live")),(l=e.querySelector("#gbStartSandbox"))==null||l.addEventListener("click",()=>t("sandbox")),(o=e.querySelector("#gbAccept"))==null||o.addEventListener("click",()=>{const u=vl();if((u==null?void 0:u.error)==="no_pending")return g("No pending challenge");if((u==null?void 0:u.error)==="invites_disabled")return g("Invitations disabled");g("Battle started · 1:00"),ft()}),(p=e.querySelector("#gbDecline"))==null||p.addEventListener("click",()=>{const u=bl();if(u!=null&&u.error)return g(String(u.error));g("Challenge declined"),ft()}),(c=e.querySelector("#gbClear"))==null||c.addEventListener("click",()=>{const u=yl();if(u!=null&&u.error)return g("Battle still running");ft()}),e.querySelectorAll("[data-gb-gift]").forEach(u=>{u.addEventListener("click",()=>{var v;const m=wl({side:u.dataset.gbGift,kind:u.dataset.kind||"gift",amount:Number(u.dataset.amt)||2,label:u.dataset.label||""});if((m==null?void 0:m.error)==="signin")return g("Sign in first");if((m==null?void 0:m.error)==="no_active"||(m==null?void 0:m.error)==="ended")return g("No active battle");if((m==null?void 0:m.error)==="offline")return g("Live offline — use sandbox");if((m==null?void 0:m.error)==="insufficient")return g("Need wallet credits");if(g(u.dataset.gbGift==="opponent"?"Opponent support (demo)":"Support sent · demo"),((v=m.battle)==null?void 0:v.status)==="ended"){g(m.battle.result==="win"?`Winner · ${m.battle.winnerName}`:"Tie!"),ft();return}const h=e.querySelector("#gbScoreA"),f=e.querySelector("#gbScoreB"),b=e.querySelector("#gbScoreText"),k=m.battle;h&&f&&k?(h.textContent=Z(k.scoreA),h.setAttribute("aria-label",`Challenger score ${Z(k.scoreA)}`),f.textContent=Z(k.scoreB),f.setAttribute("aria-label",`Opponent score ${Z(k.scoreB)}`),b&&(b.textContent=`Live score: ${k.challenger.name} ${Z(k.scoreA)} — ${k.opponent.name} ${Z(k.scoreB)}`)):ft()})});const s=e.querySelector("#gbClock");s&&(Bs=setInterval(()=>{const u=ri();if(!u||u.status==="ended"){cn(),(u==null?void 0:u.status)==="ended"&&g(u.result==="win"?`Winner · ${u.winnerName}`:"Tie!"),ft();return}const m=Math.max(0,(u.endsAt||0)-Date.now());s.textContent=eo(m)},250))}function ve(){j("#/multiguest")}function im(e){return(String(e||"?").trim().slice(0,2)||"?").toUpperCase()}function nm(e){const t=L().user;return!t||!e?!1:(t.following||[]).includes(e)}function ki(e){return((e==null?void 0:e.guests)||[]).filter(t=>t.status==="joined")}function rm(e){return((e==null?void 0:e.guests)||[]).filter(t=>t.status==="invited")}function Fa(e,t){var a,i;return`${Number(((i=(a=e==null?void 0:e.giftSplit)==null?void 0:a.shares)==null?void 0:i[t])||0).toFixed(0)}%`}function om(){return I("Multi-Guest Live",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Start a multi-guest demo session as host. No camera / WebRTC — fake stage tiles only.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Invite 2–4 co-hosts · disclosed gift splits · TEST MODE"})}function lm(){return`
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
    </div>`}function Ea({role:e,name:t,sub:s,muted:a,empty:i,followId:n}){if(i)return`
      <div class="mg-tile mg-tile-empty" aria-label="Empty guest slot">
        <div class="mg-avatar mg-avatar-empty">+</div>
        <div class="mg-tile-name muted">Open slot</div>
        <div class="mg-tile-sub muted">Invite a guest</div>
      </div>`;const l=a?'<span class="chip">Muted</span>':"",o=n&&n!=="dbs"?nm(n)?`<button class="btn ghost mg-follow" data-follow="${r(n)}" data-on="1">Following</button>`:`<button class="btn ghost mg-follow" data-follow="${r(n)}" data-on="0">Follow</button>`:n==="dbs"?'<a class="btn ghost" href="#/profile">Follow PIKK</a>':"";return`
    <div class="mg-tile ${e==="host"?"mg-tile-host":""} ${a?"mg-muted":""}">
      <div class="mg-avatar" aria-hidden="true">${r(im(t))}</div>
      <div class="mg-tile-name">${r(t)}</div>
      <div class="mg-tile-sub">${r(s||"")} ${l}</div>
      <div class="mg-tile-actions">${o}</div>
    </div>`}function cm(e){var n,l;const t=ki(e),s=[];s.push(Ea({role:"host",name:e.hostName,sub:"Host",followId:e.hostId===((n=L().user)==null?void 0:n.id)?"dbs":e.hostId}));for(let o=0;o<(e.maxGuests||4);o++){const p=t[o];p?s.push(Ea({role:"guest",name:p.username,sub:"Guest",muted:p.muted,followId:p.id})):s.push(Ea({empty:!0}))}const a=(l=e.giftSplit)!=null&&l.disclosed?'<span class="chip">Split disclosed</span>':'<span class="chip">Split pending</span>',i=e.broadcastReady?'<span class="chip">Broadcast ready</span>':'<span class="chip">Setup</span>';return`
    <div class="card mg-stage">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div>
          <div class="row wrap" style="gap:8px;align-items:center">
            <img class="mg-brand-logo" src="/brand/pikk-official-approved.jpg" alt="PIKK" />
            <div>
              <strong>${r(e.title)}</strong>
              <div class="muted" style="font-size:12px">@${r(e.hostName)} · Multi-Guest · Follow DatBoiSkeet</div>
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
    </div>`}function dm(e){const t=El(),s=new Set((e.guests||[]).filter(u=>u.status==="invited"||u.status==="joined").map(u=>u.id)),a=t.filter(u=>u.id!==e.hostId&&!s.has(u.id)),i=rm(e),n=ki(e),l=a.length?a.map(u=>`<option value="${r(u.id)}">${r(u.username)} — ${r(u.bio||"demo")}</option>`).join(""):'<option value="">No more demo guests</option>',o=i.length?i.map(u=>`
        <li class="mg-guest-row">
          <span><strong>@${r(u.username)}</strong> <span class="chip">Invited</span></span>
          <span class="row wrap" style="gap:6px">
            <button class="btn primary mg-accept" data-id="${r(u.id)}">Accept (sim)</button>
            <button class="btn ghost mg-decline" data-id="${r(u.id)}">Decline</button>
          </span>
        </li>`).join(""):'<li class="muted">No pending invites.</li>',p=n.length?n.map(u=>`
        <li class="mg-guest-row">
          <span>
            <strong>@${r(u.username)}</strong>
            ${u.muted?'<span class="chip">Muted</span>':'<span class="chip">On stage</span>'}
            <span class="muted" style="font-size:12px"> · gift ${r(Fa(e,u.id))}</span>
          </span>
          <span class="row wrap" style="gap:6px">
            <button class="btn ghost mg-mute" data-id="${r(u.id)}" data-muted="${u.muted?"1":"0"}">
              ${u.muted?"Unmute":"Mute"}
            </button>
            <button class="btn ghost mg-leave" data-id="${r(u.id)}">Leave (sim)</button>
            <button class="btn ghost danger mg-remove" data-id="${r(u.id)}">Remove</button>
          </span>
        </li>`).join(""):'<li class="muted">No guests on stage yet — invite below.</li>',c=n.length+i.length>=(e.maxGuests||4);return`
    <div class="card">
      <h3>Guests &amp; moderation</h3>
      <p class="muted" style="margin:0 0 8px">Host simulates Accept/Decline. Up to ${r(String(e.maxGuests||4))} guests.</p>
      <ul class="mg-list">${p}</ul>
      <h4 style="margin:14px 0 6px">Pending invites</h4>
      <ul class="mg-list">${o}</ul>
      <div class="field" style="margin-top:12px">
        <span>Invite demo guest</span>
        <div class="row wrap" style="gap:8px;margin-top:6px">
          <select id="mgInviteSelect" ${c||!a.length?"disabled":""}>${l}</select>
          <button class="btn primary" id="mgInviteBtn" ${c||!a.length?"disabled":""}>Invite</button>
        </div>
      </div>
      ${c?'<p class="muted" style="margin:8px 0 0">Guest slots full (joined + pending).</p>':""}
    </div>`}function pm(e){var l,o;const t=ki(e),s=[{id:e.hostId,username:e.hostName,role:"Host"},...t.map(p=>({id:p.id,username:p.username,role:"Guest"}))],a=((l=e.giftSplit)==null?void 0:l.mode)||"equal",i=!!((o=e.giftSplit)!=null&&o.disclosed),n=s.map(p=>{var u,m;const c=Number(((m=(u=e.giftSplit)==null?void 0:u.shares)==null?void 0:m[p.id])||0);return`
        <li class="mg-split-row">
          <span><strong>@${r(p.username)}</strong> <span class="chip">${r(p.role)}</span></span>
          ${a==="custom"&&!i?`<label class="mg-pct"><input type="number" min="0" max="100" step="1" class="mg-share-input" data-id="${r(p.id)}" value="${r(String(c))}" /> %</label>`:`<span class="chip">${r(String(Math.round(c)))}%</span>`}
        </li>`}).join("");return`
    <div class="card mg-split">
      <h3>Gift split disclosure</h3>
      <p class="muted">Required before broadcast when multiple hosts/guests share gifts. Display-only · TEST MODE · not a real payout.</p>
      <div class="row wrap" style="gap:8px;margin:10px 0">
        <button class="btn ${a==="equal"?"primary":"ghost"}" id="mgSplitEqual">Equal split</button>
        <button class="btn ${a==="custom"?"primary":"ghost"}" id="mgSplitCustom">Custom %</button>
      </div>
      <ul class="mg-list">${n}</ul>
      <p class="muted" style="margin:8px 0 0">Host share: <strong>${r(Fa(e,e.hostId))}</strong>
        · Guests: ${t.length?t.map(p=>`@${r(p.username)} ${r(Fa(e,p.id))}`).join(" · "):"none yet"}</p>
      ${i?`<p class="mg-ok" style="margin:10px 0 0">✓ Split disclosed ${e.giftSplit.disclosedAt?"· "+R(e.giftSplit.disclosedAt):""}. Broadcast ready (demo).</p>`:`<div class="row wrap" style="gap:8px;margin-top:12px">
               ${a==="custom"?'<button class="btn" id="mgSplitApply">Apply custom %</button>':""}
               <button class="btn primary" id="mgDisclose">Disclose &amp; ready broadcast</button>
             </div>
             <p class="muted" style="margin:8px 0 0">Custom % must total 100 among host + joined guests.</p>`}
    </div>`}function um(e){return`
    <div class="card">
      <h3>Shared chat</h3>
      <div class="mg-chat" id="mgChat">${(e.chat||[]).slice(-40).map(s=>`
      <div class="mg-chat-row ${s.system?"system":""}">
        <strong>${r(s.username)}</strong>
        <span>${r(s.text)}</span>
      </div>`).join("")||'<p class="muted">No messages yet.</p>'}</div>
      <div class="row" style="gap:8px;margin-top:10px">
        <input id="mgChatInput" placeholder="Say something on the collab…" maxlength="280" style="flex:1" />
        <button class="btn primary" id="mgChatSend">Send</button>
      </div>
    </div>`}function dn(e){return e.length?`
    <div class="card">
      <h3>Recent multi-guest sessions</h3>
      <ul class="mg-list">${e.slice(0,8).map(s=>{var i;const a=(s.guests||[]).filter(n=>n.status==="joined"||n.joinedAt).length;return`<li><strong>${r(s.title)}</strong> · ${r(String(a))} guests · ${R(s.endedAt||s.startedAt)}
        ${(i=s.giftSplit)!=null&&i.disclosed?" · split disclosed":""}</li>`}).join("")}</ul>
    </div>`:`
      <div class="card">
        <h3>Recent multi-guest sessions</h3>
        <p class="muted" style="margin:0">No ended sessions yet.</p>
      </div>`}function mm(e){return`
    <div class="card">
      <h3>Start multi-guest session</h3>
      <p class="muted">You host as <strong>@${r(e.username)}</strong>. Invite demo contacts next — no real stream.</p>
      <div class="field" style="margin-top:10px">
        <span>Session title</span>
        <input id="mgTitle" maxlength="80" placeholder="e.g. Friday collab freestyle" value="PIKK Multi-Guest Demo" />
      </div>
      <button class="btn primary" id="mgStart" style="margin-top:12px">Start as host</button>
    </div>`}function gm(){const t=L().user;if(!t)return om();aa();const s=ps(),a=Al();return!s||s.endedAt?I("Multi-Guest Live",`${lm()}${mm(t)}${dn(a)}`,{lead:"2–4 co-hosts · gift split disclosure · TEST MODE"}):I("Multi-Guest Live",`${cm(s)}${dm(s)}${pm(s)}${um(s)}${dn(a)}`,{lead:"Active collab session · fake stage · TEST MODE"})}function hm(e){var s,a,i,n,l,o,p,c,u;if(!e)return;(s=e.querySelector("#mgStart"))==null||s.addEventListener("click",()=>{var f;const m=((f=e.querySelector("#mgTitle"))==null?void 0:f.value)||"",h=Cl(m);if(h.error==="signin")return g("Sign in first");if(h.error==="session_in_progress")return g("Session already active");g("Multi-guest session started"),ve()}),(a=e.querySelector("#mgEnd"))==null||a.addEventListener("click",()=>{const m=Bl();if(m.error)return g(m.error==="host_only"?"Host only":"No session");g("Session ended"),ve()}),(i=e.querySelector("#mgInviteBtn"))==null||i.addEventListener("click",()=>{var f,b;const m=(f=e.querySelector("#mgInviteSelect"))==null?void 0:f.value;if(!m)return g("Pick a guest");const h=Tl(m);if(h.error==="full")return g("Guest slots full");if(h.error==="already_invited")return g("Already invited");if(h.error)return g("Invite failed: "+h.error);g("Invited @"+(((b=h.guest)==null?void 0:b.username)||m)),ve()}),e.querySelectorAll(".mg-accept").forEach(m=>{m.addEventListener("click",()=>{var f;const h=Dl(m.getAttribute("data-id"));if(h.error==="full")return g("Stage full");if(h.error)return g("Accept failed");g("@"+(((f=h.guest)==null?void 0:f.username)||"")+" joined"),ve()})}),e.querySelectorAll(".mg-decline").forEach(m=>{m.addEventListener("click",()=>{if(Ml(m.getAttribute("data-id")).error)return g("Decline failed");g("Invite declined"),ve()})}),e.querySelectorAll(".mg-mute").forEach(m=>{m.addEventListener("click",()=>{const h=m.getAttribute("data-id"),f=m.getAttribute("data-muted")==="1";if(Il(h,!f).error)return g("Mute failed");g(f?"Unmuted":"Muted"),ve()})}),e.querySelectorAll(".mg-leave").forEach(m=>{m.addEventListener("click",()=>{if(Ll(m.getAttribute("data-id")).error)return g("Leave failed");g("Guest left"),ve()})}),e.querySelectorAll(".mg-remove").forEach(m=>{m.addEventListener("click",()=>{if(Pl(m.getAttribute("data-id")).error)return g("Remove failed");g("Guest removed"),ve()})}),e.querySelectorAll(".mg-follow").forEach(m=>{m.addEventListener("click",()=>{const h=m.getAttribute("data-follow");m.getAttribute("data-on")==="1"?(Js(h),g("Unfollowed")):(Xs(h),g("Following")),ve()})}),(n=e.querySelector("#mgSplitEqual"))==null||n.addEventListener("click",()=>{if(Zt({mode:"equal",disclose:!1}).error)return g("Split failed");g("Equal split applied"),ve()}),(l=e.querySelector("#mgSplitCustom"))==null||l.addEventListener("click",()=>{var f;const m=ps();if(Zt({mode:"custom",shares:((f=m==null?void 0:m.giftSplit)==null?void 0:f.shares)||{},disclose:!1}).error)return g("Could not switch to custom");g("Custom split — edit % then Apply"),ve()}),(o=e.querySelector("#mgSplitApply"))==null||o.addEventListener("click",()=>{const m={};e.querySelectorAll(".mg-share-input").forEach(f=>{m[f.getAttribute("data-id")]=Number(f.value)||0});const h=Zt({mode:"custom",shares:m,disclose:!1});if(h.error==="split_total")return g(`Percents total ${h.total}% — need 100%`);if(h.error)return g("Apply failed");g("Custom split saved"),ve()}),(p=e.querySelector("#mgDisclose"))==null||p.addEventListener("click",()=>{var f;const m=ps();if(((f=m==null?void 0:m.giftSplit)==null?void 0:f.mode)==="custom"){const b={},k=e.querySelectorAll(".mg-share-input");if(k.length){k.forEach(w=>{b[w.getAttribute("data-id")]=Number(w.value)||0});const v=Zt({mode:"custom",shares:b,disclose:!1});if(v.error==="split_total")return g(`Percents total ${v.total}% — need 100%`)}}const h=ql();if(h.error==="split_total")return g(`Percents total ${h.total}% — need 100%`);if(h.error)return g("Disclose failed");g("Gift split disclosed · broadcast ready (demo)"),ve()});const t=()=>{const m=e.querySelector("#mgChatInput"),h=(m==null?void 0:m.value)||"",f=_l(h);if(f.error==="empty")return g("Type a message");if(f.error)return g("Chat failed");m&&(m.value=""),ve()};(c=e.querySelector("#mgChatSend"))==null||c.addEventListener("click",t),(u=e.querySelector("#mgChatInput"))==null||u.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),t())})}function be(e){j(e?`#/fanclubs?club=${encodeURIComponent(e)}`:"#/fanclubs")}function He(e="DemoFan"){const{user:t}=L();if(t)return t;const s=Nt(e);return g(`Signed in as ${e} · local demo`),s||L().user}function to(e){return e==="paid"?"Paid / Skeet+":e==="members"?"Members only":"Public"}function fm(e,t){const s=t===e.id,a=[e.official?'<span class="chip">Official DBS</span>':"",`<span class="chip">${r(to(e.privacy))}</span>`,`<span class="chip">${e.memberCount||0} members</span>`].filter(Boolean).join(" ");return`<button type="button" class="fanclub-card${s?" on":""}" data-open-club="${r(e.id)}" style="text-align:left;width:100%;display:block;background:transparent;border:1px solid ${s?"var(--accent, #f59e0b)":"var(--line)"};border-radius:14px;padding:12px;margin:0 0 10px;cursor:pointer;color:inherit">
    <div class="row" style="gap:10px;align-items:center">
      <img src="${r(e.graphic||"/brand/logo-dbs-v3@2x.webp")}" alt="" width="48" height="48" style="border-radius:12px;object-fit:cover;background:#111" />
      <div style="flex:1;min-width:0">
        <strong>${r(e.name)}</strong>
        <div class="muted" style="font-size:12px;margin-top:2px">Host @${r(e.hostName)} · Discover DatBoiSkeet</div>
        <div class="row wrap" style="gap:6px;margin-top:6px">${a}</div>
      </div>
    </div>
  </button>`}function vm(e){const t=ys(e);if(!t)return'<div class="card"><p class="muted" style="margin:0">Club not found.</p><button class="btn" data-back-list>Back to clubs</button></div>';const s=L().user,a=ar(t.id),i=dc(t.id),n=ms(t.id),l=ir(t.id),o=xt(),p=l.ok?"":`<div class="card" style="border-color:rgba(245,158,11,.35)">
          <h3 style="margin:0 0 6px">${t.privacy==="paid"?"Skeet+ room":"Members only"}</h3>
          <p class="muted" style="margin:0 0 10px">${t.privacy==="paid"?"This room uses membership permissions (Skeet+ or higher). TEST MODE unlock below — no real charge.":"Join the club to enter the discussion room."}</p>
          ${t.privacy==="paid"?`<button class="btn primary" id="fcUnlockSkeet">Unlock Skeet+ · TEST MODE</button>
                 <a class="btn" href="#/pricing">Pricing</a>
                 <p class="chip" style="margin-top:8px">Current membership: ${r(o||"none")}</p>`:`<button class="btn primary" data-join="${r(t.id)}">Join club</button>`}
        </div>`,c=l.ok?pc(t.id):[],u=l.ok?c.length?c.map(h=>{const f=n?`<div class="row wrap" style="gap:6px;margin-top:6px">
                   <button class="btn ghost" data-pin="${r(h.id)}" data-club="${r(t.id)}">${h.pinned?"Unpin":"Pin"} · mod</button>
                   <button class="btn ghost" data-remove="${r(h.id)}" data-club="${r(t.id)}">Remove · mod</button>
                 </div>`:"";return`<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between;gap:8px">
                <strong>@${r(h.username)}</strong>
                <span class="muted" style="font-size:12px">${r(R(h.at))}${h.pinned?" · pinned":""}</span>
              </div>
              <p style="margin:6px 0 0">${r(h.text)}</p>
              ${f}
            </li>`}).join(""):'<li class="muted" style="padding:8px 0">No posts yet — start the discussion.</li>':"",m=l.ok?`<form id="fcPostForm" class="card" style="margin-top:10px">
         <label class="muted" style="font-size:12px">Public discussion · local posts</label>
         <textarea id="fcPostText" rows="3" maxlength="500" placeholder="Share with the club…" style="width:100%;margin:8px 0;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:10px;color:inherit;resize:vertical"></textarea>
         <button class="btn primary" type="submit">Post</button>
         <span class="chip">TEST MODE · localStorage</span>
       </form>`:"";return`
    <div class="card">
      <button class="btn ghost" data-back-list style="margin-bottom:8px">← All clubs</button>
      <div class="row" style="gap:12px;align-items:flex-start">
        <img src="${r(t.graphic||"/brand/logo-dbs-v3@2x.webp")}" alt="" width="72" height="72" style="border-radius:16px;object-fit:cover" />
        <div style="flex:1">
          <h2 style="margin:0 0 4px">${r(t.name)}</h2>
          <p class="muted" style="margin:0 0 8px">${r(t.description)}</p>
          <div class="row wrap" style="gap:6px">
            ${t.official?'<span class="chip">Official DatBoiSkeet</span>':""}
            <span class="chip">${r(to(t.privacy))}</span>
            <span class="chip">${t.memberCount||0} members</span>
            <span class="chip">${(t.followers||[]).length} following</span>
          </div>
        </div>
      </div>
      <div class="row wrap" style="gap:8px;margin-top:14px">
        ${a?`<button class="btn" data-leave="${r(t.id)}">Leave club</button>`:`<button class="btn primary" data-join="${r(t.id)}">Join club</button>`}
        ${i?`<button class="btn" data-unfollow="${r(t.id)}">Unfollow</button>`:`<button class="btn" data-follow="${r(t.id)}">Follow · optional</button>`}
        <a class="btn" href="#/community">Lounge</a>
        <a class="btn" href="#/music">Music</a>
        <a class="btn" href="#/explore">Explore</a>
      </div>
      <p class="muted" style="font-size:12px;margin:10px 0 0">Follows are optional — DBS never forces a follow. Channel-style Lounge (Discord-inspired UX) — music-first, DatBoiSkeet branded.</p>
      ${s?"":'<p class="chip" style="margin-top:8px">Sign in to join · local demo</p>'}
      ${n?'<p class="chip" style="margin-top:8px">Mod tools · TEST MODE</p>':""}
    </div>
    ${p}
    ${l.ok?`<div class="card">
             <h3 style="margin:0 0 4px">Discussion</h3>
             <p class="muted" style="margin:0 0 8px;font-size:12px">Local posts in dbs_v1 · mods can pin/remove</p>
             <ul class="list-plain" id="fcPosts">${u}</ul>
           </div>
           ${m}`:""}
  `}function bm(e){var o;Ke();const t=tr(),s=((o=e==null?void 0:e.query)==null?void 0:o.club)||"",{user:a}=L(),i=t.map(p=>fm(p,s)).join(""),l=s?vm(s):`
      <div class="card">
        <p class="kicker">§26 · DBS Lounge</p>
        <h2 style="margin:0 0 6px">Fan Clubs</h2>
        <p class="muted" style="margin:0 0 10px">Approved creators host clubs with public discussions and optional paid/private rooms. Fans join or follow — never forced. DatBoiSkeet discovery stays front and center.</p>
        <div class="row wrap" style="gap:8px">
          <a class="btn" href="#/community">Community / Lounge</a>
          <a class="btn" href="#/music">Music</a>
          <a class="btn" href="#/explore">Explore</a>
          <a class="btn" href="#/loyalty">Loyalty</a>
        </div>
      </div>
      <div class="card">
        <h3 style="margin:0 0 10px">Discover clubs</h3>
        ${i||'<p class="muted">No clubs yet.</p>'}
      </div>
      ${`
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
    </div>`}
    `;return I("Fan Clubs",l,{lead:"Creator communities inside DBS Lounge · DEMO.",badge:"Phase 2 demo"})}function ym(e){var t,s,a,i,n,l,o;e.querySelectorAll("[data-open-club]").forEach(p=>{p.addEventListener("click",()=>be(p.getAttribute("data-open-club")))}),(t=e.querySelector("[data-back-list]"))==null||t.addEventListener("click",()=>be()),(s=e.querySelector("#fcSignIn"))==null||s.addEventListener("click",()=>{He("DemoFan"),be()}),(a=e.querySelector("#fcAdmin"))==null||a.addEventListener("click",()=>{var c,u;He("DemoAdmin");const p=!ee();hs(p),g(p?"Demo admin on":"Demo admin off"),be(((c=e.querySelector("[data-leave],[data-join]"))==null?void 0:c.getAttribute("data-leave"))||((u=e.querySelector("[data-join]"))==null?void 0:u.getAttribute("data-join"))||void 0)}),(i=e.querySelector("#fcSeedBtn"))==null||i.addEventListener("click",()=>{Ke({force:!0}),g("Demo clubs reseeded"),be()}),(n=e.querySelector("#fcCreateForm"))==null||n.addEventListener("submit",p=>{var b,k,v,w,E;p.preventDefault(),He("DemoCreator");const c=(b=e.querySelector("#fcName"))==null?void 0:b.value,u=(k=e.querySelector("#fcDesc"))==null?void 0:k.value,m=((v=e.querySelector("#fcGraphic"))==null?void 0:v.value)||"/brand/logo-dbs-v3@2x.webp",h=((w=e.querySelector("#fcPrivacy"))==null?void 0:w.value)||"public",f=rc({name:c,description:u,graphic:m,privacy:h});if(f.error==="signin")return g("Sign in required");if(f.error==="name")return g("Name required");g("Club created · TEST MODE"),be((E=f.club)==null?void 0:E.id)}),e.querySelectorAll("[data-join]").forEach(p=>{p.addEventListener("click",()=>{He();const c=p.getAttribute("data-join");if(sr(c).error)return g("Could not join");g("Joined club"),be(c)})}),e.querySelectorAll("[data-leave]").forEach(p=>{p.addEventListener("click",()=>{He();const c=p.getAttribute("data-leave"),u=oc(c);if(u.error==="host")return g("Host cannot leave — transfer later");if(u.error)return g("Could not leave");g("Left club"),be(c)})}),e.querySelectorAll("[data-follow]").forEach(p=>{p.addEventListener("click",()=>{He();const c=p.getAttribute("data-follow");lc(c),g("Following · optional"),be(c)})}),e.querySelectorAll("[data-unfollow]").forEach(p=>{p.addEventListener("click",()=>{He();const c=p.getAttribute("data-unfollow");cc(c),g("Unfollowed"),be(c)})}),(l=e.querySelector("#fcUnlockSkeet"))==null||l.addEventListener("click",()=>{He(),Qs("skeet+",!0),g("Skeet+ unlocked · TEST MODE");const p=new URLSearchParams(location.hash.split("?")[1]||"");be(p.get("club")||void 0)}),(o=e.querySelector("#fcPostForm"))==null||o.addEventListener("submit",p=>{var f;p.preventDefault(),He();const u=new URLSearchParams(location.hash.split("?")[1]||"").get("club"),m=(f=e.querySelector("#fcPostText"))==null?void 0:f.value,h=uc(u,m);if(h.error==="gated")return g("Room gated");if(h.error==="empty")return g("Write something");if(h.error)return g("Could not post");g("Posted"),be(u)}),e.querySelectorAll("[data-pin]").forEach(p=>{p.addEventListener("click",()=>{const c=p.getAttribute("data-club");if(mc(c,p.getAttribute("data-pin")).error==="mod")return g("Mods only");g("Pin toggled · TEST MODE"),be(c)})}),e.querySelectorAll("[data-remove]").forEach(p=>{p.addEventListener("click",()=>{const c=p.getAttribute("data-club");if(gc(c,p.getAttribute("data-remove")).error==="mod")return g("Mods only");g("Post removed · TEST MODE"),be(c)})})}function Ga(){j("#/loyalty")}function Ka(){const{user:e}=L();if(e)return e;const t=Nt("LoyalFan");return g("Signed in as LoyalFan · local demo"),t||L().user}function Ls(e,t,s){var i;Ka();const a=Uc(e,{points:t,note:s});if(a.error==="signin")return g("Sign in required");if(a.error==="cooldown")return g("Anti-farming · wait a few seconds");if(a.error==="daily_cap")return g("Daily cap hit · come back tomorrow (demo)");if(a.error)return g("Could not record");(a.newBadges||[]).filter(n=>n!=="day_one"||(a.loyalty.badges||[]).includes("day_one")),(i=a.newBadges)!=null&&i.length?g(`+${t} pts · badge: ${a.newBadges.join(", ")}`):g(`+${t} pts · ${s}`),Ga()}function km(){const{user:e}=L(),t=ws(),a=xr().map(l=>{const o=l.unlocked;return`<div class="card" style="opacity:${o?1:.55};margin:0">
        <div class="row" style="justify-content:space-between;gap:8px">
          <strong>${r(l.name)}</strong>
          <span class="chip">${o?"Unlocked":"Locked"}</span>
        </div>
        <p class="muted" style="margin:6px 0 0;font-size:12px">${r(l.blurb)}</p>
      </div>`}).join(""),i=(t.history||[]).length===0?'<p class="muted" style="margin:0">No actions yet — try a listen tick or join a club.</p>':`<ul class="list-plain">${(t.history||[]).slice(0,12).map(l=>`<li style="padding:8px 0;border-top:1px solid rgba(255,255,255,.06)">
            <div class="row" style="justify-content:space-between">
              <span><strong>+${l.points}</strong> · ${r(l.note||l.kind)}</span>
              <span class="muted" style="font-size:12px">${r(R(l.at))}</span>
            </div>
          </li>`).join("")}</ul>`,n=t.publicVisible?"Your badges & points can appear on your profile (demo flag).":"History & achievements are private — only you see them here.";return I("Loyalty Club",`
    <div class="card">
      <p class="kicker">§28 · Recognition beyond spending</p>
      <h2 style="margin:0 0 6px">Loyalty Club</h2>
      <p class="muted" style="margin:0 0 10px">Badges for listening, attending lives, and Fan Club participation — <strong>not purchase-only</strong>. Paid gifts are never the only loyalty signal. Anti-farming cooldowns + daily caps apply (TEST MODE).</p>
      <div class="row wrap" style="gap:8px;align-items:center">
        <span style="font-size:28px;font-weight:900">${t.points}</span>
        <span class="muted">points</span>
        <span class="chip">${(t.badges||[]).length} badges</span>
        <span class="chip">TEST MODE</span>
      </div>
      ${e?"":'<p class="chip" style="margin-top:10px">Sign in to earn · local demo</p>'}
    </div>

    <div class="card">
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

    <div class="card">
      <h3 style="margin:0 0 6px">Visibility</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">${r(n)}</p>
      <label class="row" style="gap:8px;align-items:center;cursor:pointer">
        <input type="checkbox" id="loyPublic" ${t.publicVisible?"checked":""} />
        <span>Show badges publicly (demo)</span>
      </label>
    </div>

    <div class="card">
      <h3 style="margin:0 0 10px">Badges</h3>
      <div style="display:grid;gap:10px">${a}</div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 8px">Recent activity</h3>
      ${i}
    </div>

    <div class="card">
      <h3 style="margin:0 0 6px">Admin-ish rollup · optional</h3>
      <p class="muted" style="margin:0;font-size:12px">Future Admin Fan Loyalty dashboard (plan § Live Gift Effects) can list tenure, attendance, and opted-in history. This page stays fan-facing; no purchase-only ranking.</p>
    </div>
    `,{lead:"Recognition for healthy participation · DEMO.",badge:"Phase 2 demo"})}function wm(e){var t,s,a,i,n,l;(t=e.querySelector("#loyListen"))==null||t.addEventListener("click",()=>Ls("listen",5,"Authorized listening tick")),(s=e.querySelector("#loyLive"))==null||s.addEventListener("click",()=>Ls("live",8,"Attended live (stub)")),(a=e.querySelector("#loyHelp"))==null||a.addEventListener("click",()=>Ls("help",6,"Shared community helper tip")),(i=e.querySelector("#loyClub"))==null||i.addEventListener("click",()=>{Ka(),Ke();const o=tr(),p=o.find(c=>c.privacy==="public")||o[0];p&&sr(p.id),Ls("club",10,p?`Joined ${p.name}`:"Joined Fan Club")}),(n=e.querySelector("#loyPublic"))==null||n.addEventListener("change",o=>{Ka(),Vc(o.target.checked),g(o.target.checked?"Public visibility on":"Achievements private"),Ga()}),(l=e.querySelector("#loyReset"))==null||l.addEventListener("click",()=>{zc(),g("Loyalty demo reset"),Ga()})}function vt(){j("#/openmic")}function Aa(e="MicHopeful"){const{user:t}=L();if(t)return t;const s=Nt(e);return g(`Signed in as ${e} · local demo`),s||L().user}function pn(e){return`<span class="chip">${r(e==="approved"?"Approved":e==="rejected"?"Rejected":"Pending")}</span>`}function Sm(){const e=Yc(),t=e.chipLabel||"House rotation",s=e.embed?Ye(e.embed,"rel=0"):"";return`
    <div class="card sp-stage sp-house" id="omHouse" role="status">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">${r(t)}</div>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:12px">
        24/7 idle filler · DatBoiSkeet catalog when no live Open Mic performer · <strong>not a fake live act</strong> · original YouTube only
      </p>
      ${s?`<div class="sp-house-embed hero-video" style="margin-top:12px">
               <iframe src="${r(s)}" title="${r(e.title)}" allowfullscreen loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>`:""}
      <div class="sp-now">
        <div>
          <div class="sp-now-title">${r(e.title)}</div>
          <div class="sp-now-meta">${r(e.artist||"DatBoiSkeet")} · house catalog</div>
          <p class="muted sp-note">${r(e.note||"")}</p>
          ${e.youtube?`<p style="margin:8px 0 0"><a class="btn ghost" href="${r(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a></p>`:""}
        </div>
      </div>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <button class="btn" type="button" id="omNextHouse">Next house</button>
        <a class="btn ghost" href="#/spotlight">24/7 Spotlight</a>
      </div>
    </div>`}function $m(){Kt();const{user:e}=L(),t=ee(),s=Wc(),a=e?Ba().filter(p=>p.userId===e.id):[],i=t?Ba({status:"pending"}):[],n=s.length===0?'<p class="muted" style="margin:0">No approved performers yet.</p>':s.map(p=>`<article class="card" style="margin:0 0 10px">
              <div class="row" style="justify-content:space-between;gap:8px">
                <div>
                  <strong>${r(p.trackTitle)}</strong>
                  <div class="muted" style="font-size:12px">@${r(p.username)} · ${r(p.talent)}</div>
                </div>
                ${pn("approved")}
              </div>
              <p style="margin:8px 0 0">${r(p.profileNote||"Featured in PIKK Open Mic showcase.")}</p>
              <p class="muted" style="font-size:11px;margin:8px 0 0">Not a paid ranking · discovery showcase</p>
            </article>`).join(""),l=a.length===0?'<p class="muted" style="margin:0">You have no applications yet.</p>':`<ul class="list-plain">${a.map(p=>`<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between">
                <strong>${r(p.trackTitle)}</strong>
                ${pn(p.status)}
              </div>
              <div class="muted" style="font-size:12px">${r(p.talent)} · ${r(R(p.at))}</div>
            </li>`).join("")}</ul>`,o=t?`<div class="card">
         <h3 style="margin:0 0 8px">Admin review · TEST MODE</h3>
         <p class="muted" style="margin:0 0 10px;font-size:12px">Approve for showcase or reject. Distinct from pay-to-win.</p>
         ${i.length===0?'<p class="muted" style="margin:0">No pending applications.</p>':i.map(p=>`<div style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
                     <strong>${r(p.trackTitle)}</strong> · @${r(p.username)} · ${r(p.talent)}
                     <p class="muted" style="margin:4px 0;font-size:12px">${r(p.profileNote)}</p>
                     <p class="chip">Rights certified: ${p.rightsCertified?"yes":"no"}</p>
                     <div class="row wrap" style="gap:8px;margin-top:8px">
                       <button class="btn primary" data-om-approve="${r(p.id)}">Approve</button>
                       <button class="btn" data-om-reject="${r(p.id)}">Reject</button>
                     </div>
                   </div>`).join("")}
       </div>`:"";return I("Open Mic",`
    ${Sm()}

    <div class="card">
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

    <div class="card">
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

    <div class="card">
      <h3 style="margin:0 0 8px">Your applications</h3>
      ${l}
    </div>

    ${o}

    <div class="card">
      <h3 style="margin:0 0 8px">Approved showcase</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">Featured performers · discovery, not spend rank</p>
      ${n}
    </div>
    `,{lead:"24/7 house catalog when idle · opt-in talent showcase · DEMO.",badge:"Phase 2 demo"})}function xm(e){var t,s,a,i,n;(t=e.querySelector("#omSignIn"))==null||t.addEventListener("click",()=>{Aa(),vt()}),(s=e.querySelector("#omAdmin"))==null||s.addEventListener("click",()=>{Aa("DemoAdmin");const l=!ee();hs(l),g(l?"Demo admin on":"Demo admin off"),vt()}),(a=e.querySelector("#omSeed"))==null||a.addEventListener("click",()=>{Kt({force:!0}),g("Open Mic demos reseeded"),vt()}),(i=e.querySelector("#omForm"))==null||i.addEventListener("submit",l=>{var c,u,m,h;l.preventDefault(),Aa();const o=(c=e.querySelector("#omRights"))==null?void 0:c.checked,p=Xc({talent:(u=e.querySelector("#omTalent"))==null?void 0:u.value,trackTitle:(m=e.querySelector("#omTitle"))==null?void 0:m.value,profileNote:(h=e.querySelector("#omNote"))==null?void 0:h.value,rightsCertified:!!o});if(p.error==="rights")return g("Rights certification required");if(p.error==="title")return g("Title required");if(p.error==="pending")return g("You already have a pending application");if(p.error)return g("Could not submit");g("Application submitted · pending review"),vt()}),e.querySelectorAll("[data-om-approve]").forEach(l=>{l.addEventListener("click",()=>{if(Oa(l.getAttribute("data-om-approve"),"approved").error==="admin")return g("Admin only");g("Approved · showcase"),vt()})}),e.querySelectorAll("[data-om-reject]").forEach(l=>{l.addEventListener("click",()=>{if(Oa(l.getAttribute("data-om-reject"),"rejected","Demo reject").error==="admin")return g("Admin only");g("Rejected"),vt()})}),(n=e.querySelector("#omNextHouse"))==null||n.addEventListener("click",()=>{const l=Qc();g("Next house · "+(l.chipLabel||"House")),vt()})}let Le=null,Lt="all";try{const e=sessionStorage.getItem("dbs_shop_cat");e&&(Lt=e,sessionStorage.removeItem("dbs_shop_cat"));const t=sessionStorage.getItem("dbs_shop_preview");t&&(Le=t,sessionStorage.removeItem("dbs_shop_preview"))}catch{}function et(){j("#/profile-shop")}function st(e){return Is.find(t=>t.id===e)||null}function so(e){return Er(e)}function Em(e){const t={...e.equipped},s=Le?st(Le):null;if(s){const a=so(s);a&&(t[a]=s.id)}return t}function Am(e){return`rarity-${r(e||"rare")}`}function Cm(e){return`$${Number(e).toFixed(2)}`}function Tm(e){const{user:t}=L(),s=Em(e),a=s.frame?st(s.frame):null,i=s.effect?st(s.effect):null,n=s.banner?st(s.banner):null,l=s.nameStyle?st(s.nameStyle):null,o=s.badge?st(s.badge):null,p=(t==null?void 0:t.username)||"DemoFan",c=e.reduceMotion,u=i?`shop-fx shop-fx--${r(i.id.replace(/^fx-/,""))}${c?" shop-fx--still":""}`:"",m=l?`shop-name shop-name--${r(l.id.replace(/^name-/,""))}`:"shop-name",h=a?`shop-avatar-frame shop-frame--${r(a.id.replace(/^frame-/,""))}`:"shop-avatar-frame";return`
    <div class="shop-preview card" id="shopPreview">
      <div class="row wrap" style="justify-content:space-between;gap:8px;margin-bottom:10px">
        <h3 style="margin:0">Live preview</h3>
        <span class="chip">CONCEPT</span>
      </div>
      <div class="${n?`shop-preview-banner shop-banner--${r(n.id.replace(/^ban-/,""))}`:"shop-preview-banner shop-banner--default"}" aria-hidden="true">
        <span class="shop-banner-emoji">${n?r(n.emoji):"🎧"}</span>
      </div>
      <div class="shop-preview-body ${u}">
        <div class="${h}">
          <div class="shop-avatar-inner">${r(p.slice(0,1).toUpperCase())}</div>
          ${a?`<span class="shop-frame-emoji" aria-hidden="true">${r(a.emoji)}</span>`:""}
        </div>
        <div class="shop-preview-meta">
          <div class="${m}">${r(p)}</div>
          <p class="muted small" style="margin:4px 0 0">Cosmetic preview only · not a status grant</p>
          ${o?`<span class="shop-cosmetic-badge" title="Cosmetic style — not Verified/Founder">${r(o.emoji)} ${r(o.name)}</span>`:'<span class="muted small">No cosmetic badge equipped</span>'}
        </div>
      </div>
      <div class="shop-equipped-row">
        ${["frame","effect","banner","nameStyle","badge"].map(b=>{const k=s[b],v=k?st(k):null,w=b==="nameStyle"?"Name":b.charAt(0).toUpperCase()+b.slice(1);return`<span class="shop-eq-chip ${v?"on":""}">${r(w)}: ${v?r(v.emoji+" "+v.name):"—"}</span>`}).join("")}
      </div>
    </div>`}function Dm(e,t){const s=t.owned.includes(e.id),a=so(e),i=a&&t.equipped[a]===e.id,n=Le===e.id;return`
    <article class="cosmetic-card ${Am(e.rarity)} ${n?"is-selected":""} ${s?"is-owned":""} ${i?"is-equipped":""}" data-id="${r(e.id)}">
      <div class="cosmetic-art" role="button" tabindex="0" data-preview="${r(e.id)}" aria-label="Preview ${r(e.name)}">
        <span class="cosmetic-emoji">${r(e.emoji)}</span>
        <span class="concept-flag">CONCEPT</span>
        ${s?'<span class="owned-flag">Owned</span>':""}
        ${i?'<span class="equipped-flag">Equipped</span>':""}
      </div>
      <div class="body">
        <div class="name">${r(e.name)}</div>
        <div class="meta">${r(e.category)} · ${r(e.rarity)}</div>
        <div class="price">${Cm(e.price)} <span class="chip" style="margin-left:4px">TEST MODE</span></div>
        <div class="cosmetic-actions row wrap" style="gap:6px;margin-top:8px">
          <button type="button" class="btn ghost shop-act" data-act="preview" data-id="${r(e.id)}">Preview</button>
          ${s?i?`<button type="button" class="btn shop-act" data-act="unequip" data-slot="${r(a)}" data-id="${r(e.id)}">Unequip</button>`:`<button type="button" class="btn primary shop-act" data-act="equip" data-id="${r(e.id)}">Equip</button>`:`<button type="button" class="btn primary shop-act" data-act="unlock" data-id="${r(e.id)}">Unlock · TEST MODE</button>`}
        </div>
      </div>
    </article>`}function Mm(){const e=at(),t=Lt==="all"?Is:Is.filter(n=>n.category===Lt),s=go.map(n=>`<button type="button" class="shop-chip ${Lt===n.id?"on":""}" data-cat="${r(n.id)}" aria-pressed="${Lt===n.id?"true":"false"}">${r(n.label)}</button>`).join(""),a=t.length===0?'<p class="muted">No cosmetics in this category.</p>':`<div class="cosmetic-grid">${t.map(n=>Dm(n,e)).join("")}</div>`,i=`
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

    ${Tm(e)}

    <div class="card">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center;margin-bottom:10px">
        <h3 style="margin:0">Catalog · ${Is.length} items</h3>
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
  `;return I("Profile Shop",i,{lead:"PIKK digital cosmetics · live preview · CONCEPT / TEST MODE.",badge:"Phase 2 · CONCEPT"})}function Lm(e){var s,a,i;e.querySelectorAll(".shop-chip").forEach(n=>{n.addEventListener("click",()=>{Lt=n.dataset.cat||"all",et()})}),(s=e.querySelector("#shopReduceMotion"))==null||s.addEventListener("change",n=>{rd(n.target.checked),g(n.target.checked?"Motion reduced":"Motion on"),et()}),(a=e.querySelector("#shopBundle"))==null||a.addEventListener("click",()=>{var l;const n=sd();g(`Starter bundle unlocked · ${((l=n.unlocked)==null?void 0:l.length)||0} items · no charge`),et()}),(i=e.querySelector("#shopReset"))==null||i.addEventListener("click",()=>{od(),Le=null,g("Demo inventory reset"),et()});const t=n=>{Le=n,g("Preview updated"),et()};e.querySelectorAll("[data-preview]").forEach(n=>{n.addEventListener("click",()=>t(n.dataset.preview)),n.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),t(n.dataset.preview))})}),e.querySelectorAll(".shop-act").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.act,o=n.dataset.id;if(l==="preview")return t(o);if(l==="unlock"){const p=td(o);return p.error?g("Could not unlock"):(Le=o,g(p.already?"Already owned · TEST MODE":"Unlocked · TEST MODE · no charge"),et())}if(l==="equip"){const p=id(o);return p.error==="not_owned"?g("Unlock first · TEST MODE"):p.error?g("Could not equip"):(Le=o,g("Equipped"),et())}if(l==="unequip"){const p=n.dataset.slot;if(nd(p).error)return g("Could not unequip");const u=Le?st(Le):null;return u&&Er(u)===p&&(Le=null),g("Unequipped"),et()}})})}const Pm=["All","Hats","Shirts","Jackets"],Im=["Ladies Shop","Men's Shop","Beauty & Hair","Fashion & Accessories","Lifestyle & Home","Creator Brands","Live Shopping","Deals"];function _m(e,t="All",s=""){const a=String(s||"").trim().toLocaleLowerCase();return e.filter(i=>(t==="All"||i.category===t)&&(!a||`${i.name} ${i.category}`.toLocaleLowerCase().includes(a)))}function qm(e){return`
    <article class="merch-card pikk-shop-product" data-product-id="${r(e.id)}">
      <div class="img-wrap">
        <img src="${r(e.image)}" alt="${r(e.name)}" loading="lazy" />
      </div>
      <div class="body">
        <span class="chip">${r(e.category)}</span>
        <h3 class="name">${r(e.name)}</h3>
        <p class="price">$ ${Number(e.price).toFixed(2)}</p>
        <a class="btn primary block" href="${r(e.shopUrl)}" target="_blank" rel="noopener noreferrer">
          Shop on Foreign X-Change ↗
        </a>
        <p class="merch-note">External merchant checkout. Confirm sizes, stock, shipping, taxes and returns on the merchant site.</p>
      </div>
    </article>`}function Bm(){const e=Pm.map(i=>`<button type="button" class="btn ${i==="All"?"primary":"ghost"} pikk-shop-filter"
      data-category="${r(i)}" aria-pressed="${i==="All"?"true":"false"}">${r(i)}</button>`).join(""),t=Im.map(i=>`<li><span>${r(i)}</span><span class="chip">Coming Soon</span></li>`).join(""),a=[Oe.find(i=>i.id==="jacket-black")||Oe.find(i=>i.category==="Jackets"),Oe.find(i=>i.id==="hat-716-orange")||Oe.find(i=>i.category==="Hats"),Oe.find(i=>i.id==="tee-ptsd")||Oe.find(i=>i.category==="Shirts")].filter(Boolean).map(i=>'<a class="pikk-shop-featured-product" href="'+r(i.shopUrl)+'" target="_blank" rel="noopener noreferrer" aria-label="View '+r(i.name)+' on Foreign X-Change"><img src="'+r(i.image)+'" alt="'+r(i.name)+'" loading="eager" decoding="async" /><span>'+r(i.category)+"</span></a>").join("");return I("PIKK Shop",`
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
    <section class="card pikk-shop-catalog" id="pikkShopCatalog" aria-label="Browse merchandise">
      <div class="pikk-shop-catalog-heading"><div><p class="kicker">THE COLLECTION</p><h3>Popular items</h3></div><span class="chip">Authentic Foreign X-Change</span></div>
      <label for="pikkShopSearch">Search merchandise</label>
      <input id="pikkShopSearch" type="search" placeholder="Search hats, shirts, jackets…" autocomplete="off" />
      <div class="row wrap" role="group" aria-label="Product category" style="gap:8px;margin-top:12px">
        ${e}
      </div>
      <p class="muted small" id="pikkShopCount" aria-live="polite">${Oe.length} items</p>
      <div class="merch-grid pikk-shop-premium-grid pikk-shop-real-grid" id="pikkShopProducts">${Oe.map(qm).join("")}</div>
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
  `,{lead:"Physical merchandise · external checkout · future verified storefronts"})}function Om(e){var p;const t=e.querySelector("#pikkShopSearch"),s=[...e.querySelectorAll(".pikk-shop-product")],a=[...e.querySelectorAll(".pikk-shop-filter, .pikk-shop-category")],i=e.querySelector("#pikkShopCount"),n=e.querySelector("#pikkShopEmpty");let l="All";function o(){const c=new Set(_m(Oe,l,(t==null?void 0:t.value)||"").map(u=>u.id));for(const u of s){const m=c.has(u.dataset.productId);u.hidden=!m,u.style.display=m?"":"none"}i&&(i.textContent=`${c.size} ${c.size===1?"item":"items"}`),n&&(n.hidden=c.size>0);for(const u of a){const m=u.dataset.category===l;u.setAttribute("aria-pressed",String(m)),u.classList.contains("pikk-shop-filter")&&(u.classList.toggle("primary",m),u.classList.toggle("ghost",!m)),u.classList.toggle("on",m)}}t==null||t.addEventListener("input",o),(p=e.querySelector("[data-shop-scroll]"))==null||p.addEventListener("click",()=>{var c,u,m;return(m=e.querySelector("#pikkShopCatalog"))==null?void 0:m.scrollIntoView({behavior:(u=(c=window.matchMedia)==null?void 0:c.call(window,"(prefers-reduced-motion: reduce)"))!=null&&u.matches?"instant":"smooth",block:"start"})});for(const c of a)c.addEventListener("click",()=>{var u;l=c.dataset.category||"All",o(),c.classList.contains("pikk-shop-category")&&((u=e.querySelector("#pikkShopCatalog"))==null||u.scrollIntoView({behavior:"auto",block:"start"}))})}let Os=null;function le(){j("#/spotlight")}function Ca(){Os&&(clearInterval(Os),Os=null)}function ao(e){const t=Math.max(0,Math.ceil(e/1e3)),s=Math.floor(t/60),a=t%60;return`${s}:${String(a).padStart(2,"0")}`}function wi(e){return e==="freestyle"?"Live Freestyle":e==="beat"?"Beat":e==="music_video"?"Music Video":"Song"}function Nm(e){const t=L().user;return!t||!e?!1:(t.following||[]).includes(e)}function Si(){return!!L().user}function jm(){return I("24/7 Spotlight",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Join the FIFO Spotlight queue, vote Keep Going / Play Another, and chat from a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Continuous music showcase · votes ≠ paid advantage · TEST MODE"})}function Rm(e){return`
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
    </div>`}function Fm(e,{showSkip:t=!0}={}){const s=e.chipLabel||e.status||"House rotation",a=e.embed?Ye(e.embed,"rel=0"):"";return`
    <div class="card sp-stage sp-house" role="status">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">${r(s)}</div>
        <span class="chip">TEST MODE</span>
      </div>
      ${a?`<div class="sp-house-embed hero-video" style="margin-top:12px">
               <iframe src="${r(a)}" title="${r(e.title)}" allowfullscreen loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>`:""}
      <div class="sp-now">
        ${e.cover?`<img class="sp-cover" src="${r(ts(e.cover))}" alt="" />`:""}
        <div>
          <div class="sp-now-title">${r(e.title)}</div>
          <div class="sp-now-meta">${r(e.artist||"DatBoiSkeet")} · house catalog</div>
          <p class="muted sp-note">${r(e.note||"Approved catalog filler · not a live act")}</p>
          ${e.youtube?`<p style="margin:8px 0 0"><a class="btn ghost" href="${r(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a></p>`:""}
        </div>
      </div>
      ${t&&Si()?`<div class="row wrap" style="gap:8px;margin-top:12px">
               <button class="btn" id="spSkipHouse">Skip house · next</button>
               <span class="muted" style="font-size:12px;align-self:center">Join queue takes the stage over house · Skip advances catalog</span>
             </div>`:""}
    </div>`}function Gm(e,t){if(!e||e.house){const b=e&&e.house?{id:e.id,title:e.title,artist:e.artist,embed:e.embed,youtube:e.youtube,chipLabel:e.chipLabel||"House · Music Video",note:e.note,cover:e.cover,kind:e.houseKind}:Jn();return Fm(b)}const s=L().user,a=e.type==="freestyle",i=a&&e.endsAt?Math.max(0,e.endsAt-Date.now()):null,n=Object.keys(e.keepGoingVotes||{}).length,l=Object.keys(e.playAnotherVotes||{}).length,o=e.userId,p=Nm(o),c=s&&s.id===e.userId,u=e.reactions||{fire:0,heart:0,clap:0},m=a?`<div class="sp-timer" aria-live="polite">
         <div class="sp-timer-label">Freestyle timer · ext ${e.extensions||0}/${t.maxExtensions}</div>
         <div class="sp-timer-clock" id="spClock">${ao(i||0)}</div>
         <div class="muted" style="font-size:12px">Keep Going ${n}/${t.keepGoing} · refresh recovers endsAt</div>
       </div>`:`<div class="sp-timer">
         <div class="sp-timer-label">Uploaded · play ${e.playCount||1}/${t.maxUploadStreak}</div>
         <div class="muted" style="font-size:12px">No real audio in TEST MODE · use End set when finished</div>
       </div>`,h=e.awaitingPlayAnother?`<div class="card sp-vote">
         <h3>Play Another?</h3>
         <p class="muted">Audience vote · ${l}/${t.playAnother} · window ends ${e.playAnotherDeadline?R(e.playAnotherDeadline):"soon"} (deadline-based)</p>
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
         </div>`:"",f=c?"":p?`<button class="btn ghost sp-follow" data-follow="${r(o)}" data-on="1">Following</button>`:`<button class="btn ghost sp-follow" data-follow="${r(o)}" data-on="0">Follow</button>`;return`
    <div class="card sp-stage">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">On stage · ${r(wi(e.type))}</div>
        <span class="chip">TEST MODE</span>
      </div>
      <div class="sp-now">
        <div class="sp-avatar" aria-hidden="true">${r((e.username||"?").slice(0,2).toUpperCase())}</div>
        <div>
          <div class="sp-now-title">${r(e.title)}</div>
          <div class="sp-now-meta">${r(e.artist||e.username)} · ${r(e.username)}</div>
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
        <button class="btn ghost sp-react" data-kind="fire">🔥 ${u.fire||0}</button>
        <button class="btn ghost sp-react" data-kind="heart">❤️ ${u.heart||0}</button>
        <button class="btn ghost sp-react" data-kind="clap">👏 ${u.clap||0}</button>
      </div>
    </div>
    ${h}`}function Km(e,t,s){const a=o=>Math.max(1,(o+(t?1:0))*2),i=(e||[]).map((o,p)=>`
      <li class="sp-q-row">
        <div>
          <strong>${r(o.username)}</strong>
          <span class="muted"> · ${r(wi(o.type))} · ${r(o.title)}</span>
          <div class="muted" style="font-size:12px">${p===0?"Next up":`#${p+1}`} · ~${a(p)} min wait (stub)</div>
        </div>
        <div class="row wrap" style="gap:6px">
          ${s&&o.userId===s.id?'<button class="btn ghost sp-leave-q">Leave</button>':""}
          ${Si()?`<button class="btn ghost sp-remove-q" data-qid="${r(o.id)}" title="Demo moderator">Remove</button>`:""}
        </div>
      </li>`).join(""),n=s&&(e||[]).some(o=>o.userId===s.id),l=s&&t&&!t.house&&t.userId===s.id;return`
    <div class="card sp-queue">
      <h3>FIFO queue</h3>
      <p class="muted" style="margin-top:0">${e.length?e.length+" waiting":"Queue empty — house catalog on stage"}${t&&!t.house?" · now: "+r(t.username):t&&t.house?" · house: "+r(t.chipLabel||"House"):""}</p>
      <ul class="sp-list">${i||'<li class="muted">No one waiting</li>'}</ul>
      ${n||l?`<p class="muted">You already have a spot (${l?"on stage":"in queue"}). One active spot per user.</p>
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
                 <input name="artist" id="spArtist" maxlength="60" placeholder="${r((s==null?void 0:s.username)||"You")}" />
               </label>
               <p class="muted" style="font-size:12px">Upload processing is out of scope — demo joins with metadata only. Rights confirmation implied (TEST MODE).</p>
               <button class="btn primary" type="submit">Join queue</button>
             </form>`}
    </div>`}function Vm(e){if(!Si())return"";const t=ee()?"Admin":"Demo moderator · TEST MODE",s=e&&!e.house;return`
    <div class="card sp-mod">
      <h3>Moderator controls</h3>
      <p class="muted" style="margin-top:0"><span class="chip">${r(t)}</span> Skip / remove for safety · fair order otherwise. House Skip → next queue or next house.</p>
      <div class="row wrap" style="gap:8px">
        <button class="btn" id="spSkip" ${e?"":"disabled"}>Skip current</button>
        ${s&&e.type!=="freestyle"&&!e.awaitingPlayAnother?'<button class="btn ghost" id="spEndSet">End set</button>':""}
      </div>
    </div>`}function Um(e){const t=L().user;return!e||e.house||e.type==="freestyle"||e.awaitingPlayAnother||!t||t.id!==e.userId?"":`
    <div class="card">
      <h3>Your set</h3>
      <p class="muted">No real audio file — tap End set when your demo track “finishes”.</p>
      <button class="btn primary" id="spEndSetSelf">End set</button>
    </div>`}function zm(e){return!e||e.house?"":`
    <div class="card sp-chat-card">
      <h3>Stage chat</h3>
      <div class="sp-chat" id="spChat">${(e.chat||[]).slice(-20).map(s=>`<div class="sp-chat-row ${s.system?"system":""}"><strong>${r(s.username)}</strong>${r(s.text)}</div>`).join("")||'<div class="muted">No messages yet</div>'}</div>
      <form id="spChatForm" class="row" style="gap:8px;margin-top:8px">
        <input id="spChatInput" maxlength="200" placeholder="Say something…" style="flex:1" />
        <button class="btn primary" type="submit">Send</button>
      </form>
    </div>`}function Hm(e){return e.length?`
    <div class="card">
      <h3>Recent stage</h3>
      <ul class="sp-list">${e.slice(0,12).map(s=>`<li><strong>${r(s.username)}</strong> · ${r(wi(s.type))} · ${r(s.title)}
         <span class="muted"> · ${r(s.reason||"ended")} · ${R(s.endedAt)}</span></li>`).join("")}</ul>
    </div>`:`
      <div class="card">
        <h3>Recent stage</h3>
        <p class="muted" style="margin:0">No completed turns yet.</p>
      </div>`}function Wm(){oe();const e=L().user;if(!e)return jm();const t=ne(),s=nc(12);return I("24/7 Spotlight",`${Rm(t.thresholds)}
     ${Gm(t.nowPlaying,t.thresholds)}
     ${Um(t.nowPlaying)}
     ${Vm(t.nowPlaying)}
     ${Km(t.queue,t.nowPlaying,e)}
     ${zm(t.nowPlaying)}
     ${Hm(s)}`,{lead:"Always-on music showcase · FIFO queue · votes ≠ wagers · TEST MODE"})}function Ym(e){var n,l,o,p,c,u,m,h,f,b,k;Ca(),oe();const s=ne().nowPlaying;if(s&&s.type==="freestyle"&&s.endsAt){const v=e.querySelector("#spClock");Os=setInterval(()=>{oe();const w=ne().nowPlaying;if(!w||w.type!=="freestyle"||!w.endsAt){Ca(),le();return}const E=Math.max(0,w.endsAt-Date.now());v&&(v.textContent=ao(E)),E<=0&&(Ca(),oe(),le())},250)}if(s&&s.awaitingPlayAnother&&s.playAnotherDeadline){const v=Math.max(0,s.playAnotherDeadline-Date.now())+50;setTimeout(()=>{oe(),le()},Math.min(v,35e3))}(n=e.querySelector("#spJoinForm"))==null||n.addEventListener("submit",v=>{var D,$,B;v.preventDefault();const w=((D=e.querySelector("#spType"))==null?void 0:D.value)||"song",E=(($=e.querySelector("#spTitle"))==null?void 0:$.value)||"",T=((B=e.querySelector("#spArtist"))==null?void 0:B.value)||"",y=Yl({type:w,title:E,artist:T});if(y.error==="signin")return g("Sign in first");if(y.error==="already_queued")return g("You already have a queue/stage spot");g(w==="freestyle"?"Freestyle — you're up or in queue":"Joined Spotlight queue"),le()}),(l=e.querySelector("#spLeaveQueue"))==null||l.addEventListener("click",()=>{if(_i().error)return g("Not in queue");g("Left queue"),le()}),e.querySelectorAll(".sp-leave-q").forEach(v=>{v.addEventListener("click",()=>{_i(),g("Left queue"),le()})}),e.querySelectorAll(".sp-remove-q").forEach(v=>{v.addEventListener("click",()=>{Ql(v.getAttribute("data-qid")),g("Removed from queue (demo mod)"),le()})});const a=()=>{ne().nowPlaying,Xl();const v=ne().nowPlaying;v&&v.house?g("Next house · "+(v.chipLabel||"House")):g(v?"Skipped · "+(v.username||"next")+" on stage":"Skipped"),le()};(o=e.querySelector("#spSkip"))==null||o.addEventListener("click",a),(p=e.querySelector("#spSkipHouse"))==null||p.addEventListener("click",a);const i=()=>{const v=Jl();if(v.error==="max_streak"||v.ok){g(v.error==="max_streak"?"Max 3 in a row — advancing":"Play Another? vote open"),le();return}v.error?g("Cannot end set: "+v.error):le()};(c=e.querySelector("#spEndSet"))==null||c.addEventListener("click",i),(u=e.querySelector("#spEndSetSelf"))==null||u.addEventListener("click",i),(m=e.querySelector("#spKeepGoing"))==null||m.addEventListener("click",()=>{const v=Zl();if(v.error==="already_voted")return g("Already voted");if(v.error==="max_extensions")return g("Max extensions reached");if(v.error)return g(v.error);g("Keep Going counted"),le()}),(h=e.querySelector("#spSimKeepGoing"))==null||h.addEventListener("click",()=>{ec(2),g("+2 simulated fan votes"),le()}),(f=e.querySelector("#spPlayAnother"))==null||f.addEventListener("click",()=>{const v=tc();if(v.error==="already_voted")return g("Already voted");if(v.error)return g(v.error);g("Play Another vote counted"),le()}),(b=e.querySelector("#spSimPlayAnother"))==null||b.addEventListener("click",()=>{sc(2),g("+2 simulated fan votes"),le()}),e.querySelectorAll(".sp-follow").forEach(v=>{v.addEventListener("click",()=>{const w=v.getAttribute("data-follow");v.getAttribute("data-on")==="1"?(Js(w),g("Unfollowed")):(Xs(w),g("Following")),le()})}),e.querySelectorAll(".sp-react").forEach(v=>{v.addEventListener("click",()=>{ac(v.getAttribute("data-kind")||"fire"),le()})}),(k=e.querySelector("#spChatForm"))==null||k.addEventListener("submit",v=>{v.preventDefault();const w=e.querySelector("#spChatInput"),E=ic((w==null?void 0:w.value)||"");if(E.error!=="empty"){if(E.error)return g(E.error);w&&(w.value=""),le()}})}const io="Not available — WebRTC + age assurance required before launch";function Jt(){j("#/connect")}function Qm(){var u;const e=vr(),s=lt().selected||[],a=Rc(),i=kr(),n=Number(i==null?void 0:i.max)||0,l=!!a,o=e.map(m=>{const h=s.includes(m.id),f=m.connected?`<span class="chip">Linked${m.handle?" · "+r(m.handle):""}</span>`:'<span class="chip muted-chip">Not linked</span>';return`
      <div class="connect-mp-plat ${m.connected?"on":""}" data-plat="${r(m.id)}">
        <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
          <div>
            <strong>${r(m.label)}</strong>
            <div class="muted" style="font-size:12px">${r(m.hint||"")}</div>
          </div>
          ${f}
        </div>
        <div class="row wrap" style="gap:6px;margin-top:8px;align-items:center">
          ${m.connected?`<button type="button" class="btn ghost connect-mp-disconnect" data-id="${r(m.id)}">Unlink</button>
                 <label class="connect-mp-select">
                   <input type="checkbox" class="connect-mp-dest" data-id="${r(m.id)}" ${h?"checked":""} ${l?"disabled":""} />
                   Include
                 </label>`:`<button type="button" class="btn primary connect-mp-connect" data-id="${r(m.id)}">Link</button>`}
        </div>
      </div>`}).join(""),p=s.length,c=l?`<button type="button" class="btn danger" id="connectMpEnd">End multi-platform session</button>
       <span class="chip">LIVE · ${r(String(((u=a==null?void 0:a.destinations)==null?void 0:u.length)||p))} dest · TEST MODE</span>`:`<button type="button" class="btn primary" id="connectMpGoLive" ${p?"":"disabled"}>Go live to selected</button>
       <span class="chip">${p}/${n} selected · cap ${n}</span>`;return`
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
      <div class="connect-mp-grid" style="margin-top:12px">${o}</div>
      <div class="row wrap" style="margin-top:12px;gap:8px;align-items:center">
        ${c}
        <a class="btn ghost" href="#/live">Solo Live stage</a>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">
        PIKK Connect combines random video discovery and multi-platform live controls in one place.
      </p>
    </div>`}function Va(){const e=wr(),t=e.ageConfirmed&&e.rulesAccepted;return I("PIKK Connect",`<div class="connect-monkey" id="connectMonkey">
      <section class="pikk-connect-hero" aria-label="Find your community on PIKK">
        <div class="pikk-connect-hero-copy">
          <p class="kicker">PIKK CONNECT · PEOPLE &amp; COMMUNITIES</p>
          <h2>Real connections start here.</h2>
          <p>Find your people, join conversations, and explore the PIKK community. Real-time video matching remains unavailable until safety and infrastructure are ready.</p>
          <div class="pikk-connect-hero-actions">
            <a class="btn primary" href="#/community">Explore communities</a>
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
        <a href="#/community"><span aria-hidden="true">♧</span> Communities</a>
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
          <strong>${io}</strong>
          <p class="muted small">TEST MODE — this is a preview, not a real matching request. No match was created, no camera was requested, and no WebRTC connection was attempted.</p>
        </div>
        <p class="muted small" style="margin-top:10px">Controls are mockups until launch. Prefs save on this device.</p>
      </div>

      ${Qm()}

      <div class="card">
        <p class="muted" style="margin:0 0 8px">PIKK Connect <strong>does not replace</strong> Live, Messages, or Spotlight. Meanwhile:</p>
        <a class="btn" href="#/live">Live</a> <a class="btn" href="#/messages">Messages</a> <a class="btn" href="#/spotlight">Spotlight</a> <a class="btn ghost" href="#/shorts">Shorts / Clips</a>
      </div>
    </div>`,{lead:"1:1 discovery shell · multi-platform go-live · TEST MODE",badge:"Shell · no WebRTC"})}function Xm(e){var t,s;e.querySelectorAll(".connect-mp-connect").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.id,n=Ic(i,"");if(n!=null&&n.error)return g(String(n.error));g(`Linked ${i} · TEST MODE`),Jt()})}),e.querySelectorAll(".connect-mp-disconnect").forEach(a=>{a.addEventListener("click",()=>{_c(a.dataset.id),g("Unlinked · TEST MODE"),Jt()})}),e.querySelectorAll(".connect-mp-dest").forEach(a=>{a.addEventListener("change",()=>{Bc(a.dataset.id),Jt()})}),(t=e.querySelector("#connectMpGoLive"))==null||t.addEventListener("click",()=>{const a=Nc();if((a==null?void 0:a.error)==="signin")return g("Sign in first");if((a==null?void 0:a.error)==="none_selected")return g("Select at least one destination");if(a!=null&&a.error)return g(String(a.error));g("Multi-platform session started · TEST MODE"),Jt()}),(s=e.querySelector("#connectMpEnd"))==null||s.addEventListener("click",()=>{jc(),g("Session ended"),Jt()})}function Ua(e=document,t){var i,n,l;const s=()=>{if(typeof t=="function")return t();e.innerHTML=Va(),Ua(e)};(i=e.querySelector("#connect-age"))==null||i.addEventListener("change",o=>{const p=o.target.checked;Ni(p?{ageConfirmed:!0}:{ageConfirmed:!1,rulesAccepted:!1}),s()}),(n=e.querySelector("#connect-rules"))==null||n.addEventListener("change",o=>{Ni({rulesAccepted:o.target.checked}),s()}),(l=e.querySelector("#connect-start"))==null||l.addEventListener("click",()=>{const o=e.querySelector("#connect-blocked");o==null||o.removeAttribute("hidden"),g(io)}),Xm(e);const a=Je().elementId;(a==="connect-random-chat"||a==="connect-multistream")&&requestAnimationFrame(()=>{var o;(o=e.querySelector(`#${a}`))==null||o.scrollIntoView({behavior:"smooth",block:"start"})})}function Jm(){const e=ye.filter(s=>(s.category||"")==="Music Videos"&&s.embed);return(e.length?e:ye.filter(s=>s.embed)).slice(0,10).map((s,a)=>({id:`clip_${s.id}`,videoId:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube,blurb:a%3===0?"Clip cut · DEMO":a%3===1?"Highlight · DEMO":"Short · DEMO"}))}function Zm(e,t){return`
    <article class="shorts-card" data-clip-id="${r(e.id)}" id="shorts-card-${t}">
      <div class="shorts-stage">
        <div class="shorts-embed hero-video">
          <iframe
            src="${r(Ye(e.embed))}"
            title="${r(e.title)}"
            allowfullscreen
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div class="shorts-meta">
          <span class="chip">${r(e.blurb)}</span>
          <span class="chip">TEST MODE</span>
          <h3 class="shorts-title">${r(e.title)}</h3>
          <p class="muted shorts-artist">@${r(e.artist)}</p>
          <div class="row wrap shorts-actions">
            <a class="btn ghost" href="${r(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a>
            <a class="btn ghost" href="#/videos">Full Videos</a>
            <a class="btn ghost" href="#/live">Live channels</a>
          </div>
        </div>
      </div>
    </article>`}function un(){const e=Jm(),s=`
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
      ${e.map(Zm).join("")||'<p class="muted">No demo clips seeded.</p>'}
    </div>
    <p class="muted" style="margin:12px 0 0;font-size:12px;text-align:center">
      End of DEMO feed · ${e.length} clips · Scroll for more when real clip uploads ship
    </p>`;return I("Shorts / Clips",s,{lead:"Posts · short-form feed · Picture / Short / Video create on Posts · TEST MODE"})}function mn(e){ua(e),e.querySelectorAll(".shorts-card").forEach(t=>{t.addEventListener("focusin",()=>{t.classList.add("is-focus")})}),e.querySelector(".shorts-card")||g("No demo clips · add MVs in data.js")}const Ys=[{id:"ny",name:"NY",tag:"East coast",still:"/blockwars-preview/preview-ny-still.jpg",fighter:"Brooklyn Brawler",blurb:"Street-pressured power from the five boroughs. Heavy combos, tight corners — TEST MODE teaser only."},{id:"la",name:"LA",tag:"West coast",still:"/blockwars-preview/preview-la-still.jpg",fighter:"Sunset Striker",blurb:"Flashy footwork under neon skies. Style meets speed — Coming Soon, not a real match engine."},{id:"chi",name:"Chicago",tag:"Midwest",still:"/blockwars-preview/preview-chi-still.jpg",fighter:"Windy City Wall",blurb:"Defense-first grit from the lakefront. Hold the block — lobby demo only, no live fights yet."}];function eg(e){return Ys.map(t=>{const s=t.id===e?" is-active":"",a=t.id===e?"true":"false";return`<button type="button" class="bw-city-card${s}" data-city="${r(t.id)}" aria-pressed="${a}" aria-label="${r(t.name)} fighter"><img src="${r(t.still)}" alt="" width="120" height="160" loading="lazy" decoding="async" /><span class="bw-city-meta"><span class="bw-city-name">${r(t.name)}</span><span class="bw-city-tag">${r(t.tag)}</span></span></button>`}).join("")}function tg(e){return`<div class="bw-focus" id="bwFocus" data-city="${r(e.id)}"><div class="bw-focus-still"><img id="bwFocusImg" src="${r(e.still)}" alt="${r(e.fighter)}" width="110" height="140" /></div><div class="bw-focus-copy"><p class="bw-focus-city">${r(e.name)} · ${r(e.tag)}</p><h3 id="bwFocusName">${r(e.fighter)}</h3><p id="bwFocusBlurb">${r(e.blurb)}</p></div></div>`}function sg(){const e=Ys[0],t=`
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
        ${eg(e.id)}
      </div>

      ${tg(e)}

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
    </div>`;return I("Block Wars",t,{lead:"Coming Soon · lobby fighter select · preview video · not playable yet."})}function ag(e,t){const s=Ys.find(p=>p.id===t)||Ys[0];e.querySelectorAll(".bw-city-card").forEach(p=>{const c=p.getAttribute("data-city")===s.id;p.classList.toggle("is-active",c),p.setAttribute("aria-pressed",c?"true":"false")});const a=e.querySelector("#bwFocus"),i=e.querySelector("#bwFocusImg"),n=e.querySelector("#bwFocusName"),l=e.querySelector("#bwFocusBlurb"),o=e.querySelector(".bw-focus-city");a&&a.setAttribute("data-city",s.id),i&&(i.src=s.still,i.alt=s.fighter),n&&(n.textContent=s.fighter),l&&(l.textContent=s.blurb),o&&(o.textContent=`${s.name} · ${s.tag}`)}function ig(e){var i,n;(i=e.querySelector("#bwCityGrid"))==null||i.addEventListener("click",l=>{const o=l.target.closest(".bw-city-card");o&&(l.preventDefault(),ag(e,o.getAttribute("data-city")))}),(n=e.querySelector("#bwEnterArena"))==null||n.addEventListener("click",l=>{l.preventDefault(),g("Block Wars arena is Coming Soon — lobby demo only. No match engine yet.")});const t=e.querySelector("#bwCsVideo"),s=e.querySelector("#bwCsPlay");if(!t)return;const a=()=>{if(!s)return;const l=t.paused||t.ended;s.hidden=!l,s.setAttribute("aria-hidden",l?"false":"true")};s==null||s.addEventListener("click",l=>{l.preventDefault(),t.play().catch(()=>{})}),t.addEventListener("play",()=>{Bt(),a()}),t.addEventListener("pause",()=>{Qe(),a()}),t.addEventListener("ended",()=>{Qe(),a()}),t.addEventListener("pointerdown",()=>{t.paused||Bt()}),a()}function ng(){return I("PIKK Arcade",`
    <section class="pikk-arcade-intro card" aria-label="PIKK Arcade">
      <div class="pikk-arcade-heading">
        <div>
          <p class="kicker">Play · Compete · Hang out</p>
          <div class="pikk-arcade-brand"><img src="${r(Hs({artwork:"/brand/pikk-official-approved.jpg"}))}" alt="PIKK" loading="eager" decoding="async"/><span>ARCADE</span></div>
          <p>15 original game concepts. Find your favorites, see the art, and follow their development.</p>
        </div>
        <span class="pikk-arcade-icon" aria-hidden="true">🎮</span>
      </div>
      <p class="pikk-arcade-disclosure">ALL GAMES COMING SOON · Gallery previews, not playable releases. Play Chips have no cash value or cash-out.</p>
    </section>
    <div class="pikk-arcade-toolbar"><strong>15 upcoming games</strong><span>PLAY • COMPETE • HANG OUT</span></div>
    <div class="pikk-arcade-grid">
      ${zs.map((e,t)=>`
        <article class="pikk-arcade-card pikk-game-${r(e.theme)}">
          <div class="pikk-arcade-card-header"><span class="pikk-arcade-number">${t+1}</span><h3>${r(e.name)}</h3></div>
          <div class="pikk-arcade-art" aria-label="${r(e.name)} preview artwork">
            ${e.artwork?`<img src="${r(Hs(e))}" alt="${r(e.name)} concept artwork" loading="lazy" decoding="async"/>`:`<span class="pikk-arcade-symbol" aria-hidden="true">${e.icon}</span>`}
          </div>
          <div class="pikk-arcade-copy">
            <span class="pikk-arcade-players">♙ ${r(e.players)} ${e.players==="1"?"Player":"Players"}</span>
            <p>${r(e.description)}</p>
            <button type="button" class="pikk-arcade-view" data-game-preview="${t}" aria-label="View ${r(e.name)} concept artwork full size">View artwork <span aria-hidden="true">↗</span></button>
            ${e.href?`<a class="pikk-arcade-action" href="${r(e.href)}">View preview →</a>`:`<span class="pikk-arcade-action" aria-label="${r(e.name)} coming soon">Coming Soon</span>`}
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
  `,{lead:"Fifteen upcoming games · mobile-first catalog · previews only"})}function rg(e){const t=zs.length,s=(Math.trunc(Number(e)||0)%t+t)%t,a=zs[s];return{index:s,total:t,title:a.name,description:a.description,players:a.players,image:Hs(a)}}function og(e){const t=e.querySelector(".pikk-arcade-grid"),s=e.querySelector("#pikkArcadeLightbox");if(!t||!s||typeof s.showModal!="function")return;let a=0,i=null;const n=s.querySelector("[data-arcade-full-image]"),l=s.querySelector("[data-arcade-title]"),o=s.querySelector("[data-arcade-description]"),p=s.querySelector("[data-arcade-players]"),c=s.querySelector("[data-arcade-counter]"),u=m=>{const h=rg(m);a=h.index,n.src=h.image,n.alt=h.title+" concept artwork",l.textContent=h.title,o.textContent=h.description,p.textContent=h.players+(h.players==="1"?" Player · Preview only":" Players · Preview only"),c.textContent=String(a+1).padStart(2,"0")+" / "+h.total};t.addEventListener("click",m=>{const h=m.target.closest("[data-game-preview]");h&&(i=h,u(h.dataset.gamePreview),s.showModal())}),s.addEventListener("click",m=>{m.target===s||m.target.closest("[data-arcade-close]")?s.close():m.target.closest("[data-arcade-prev]")?u(a-1):m.target.closest("[data-arcade-next]")&&u(a+1)}),s.addEventListener("keydown",m=>{(m.key==="ArrowLeft"||m.key==="ArrowRight")&&(m.preventDefault(),u(a+(m.key==="ArrowRight"?1:-1)))}),s.addEventListener("close",()=>{i!=null&&i.isConnected&&i.focus()})}function lg(){return I("PIKK Dating & Connections",`
    <section class="pikk-dating-hero" aria-label="PIKK Dating prelaunch">
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
      <a href="#/dating">Discover</a>
      <a href="#/dating#dating-experiences">Experiences</a>
      <a href="#/dating#dating-live">Dating Live</a>
      <a href="#/dating#dating-safety">Safety</a>
    </nav>
    <section class="pikk-dating-experience-grid" id="dating-experiences" aria-label="Ways to connect">
      <a class="pikk-dating-experience" href="#/community"><span aria-hidden="true">♧</span><strong>Meet through interests</strong><small>Community discovery</small></a>
      <a class="pikk-dating-experience" href="#/connect#connect-random-chat"><span aria-hidden="true">◉</span><strong>Random Chat</strong><small>Separate from dating · Preview</small></a>
      <a class="pikk-dating-experience" href="#/messages"><span aria-hidden="true">✉</span><strong>Messages</strong><small>Your existing inbox</small></a>
    </section>
    <div class="card">
      <span class="chip">18+ · Pre-launch</span>
      <h2>PIKK Match</h2>
      <p>Meet people through opt-in dating, mutual matches, dating live rooms and speed introductions when verified safety systems are ready.</p>
      <p class="muted">Swipe & Match, private dating profiles, mutual-match chat and speed dating are in development. No real matches are being created here.</p>
    </div>
    <div class="card">
      <h3>Choose your experience</h3>
      <p class="muted">Dating is for romantic mutual matches. Random Chat is for spontaneous conversations and friendships. These are separate opt-in experiences.</p>
      <div class="row wrap" style="gap:8px">
        <a class="btn primary" href="#/dating" aria-current="page">Dating · current section</a>
        <a class="btn ghost" href="#/connect#connect-random-chat">Random Chat · 18+ TEST MODE</a>
      </div>
      <p class="muted small">Random Chat never automatically creates a dating match. No camera is started when you open either page.</p>
    </div>
    <div class="card" id="dating-live">
      <h3>Dating Live & Connections</h3>
      <p class="muted">Browse the existing Live area. Live sessions are currently a test-mode experience; gifts never buy consent or a match.</p>
      <a class="btn primary" href="#/live">Open Live</a>
      <a class="btn ghost" href="#/connect">PIKK Connect · test mode</a>
    </div>
    <div class="card" id="dating-safety">
      <h3>Privacy & safety</h3>
      <p class="muted">Dating will require verified adult eligibility, explicit profile opt-in, private mutual consent, blocking, reporting and account deletion before launch. Camera and microphone permissions are never requested on this page.</p>
    </div>
  `,{lead:"Dating · mutual matches · live connections"})}const no=60,cg=10,dg=10,gn=3;function pg(){return{phase:"round",round:1,seconds:no,votes:[0,0],scores:[0,0],roundWinners:[],gifts:[0,0],rematchVotes:[0,0],winner:null,tieBreaker:!1}}function ug(e,t){if(e.phase!=="vote"||![0,1].includes(t))return e;const s=[...e.votes];return s[t]+=1,{...e,votes:s}}function mg(e,t){if(e.phase!=="rematch")return e;const s=[...e.rematchVotes];return s[t?0:1]+=1,{...e,rematchVotes:s}}function gg(e){if(!["round","vote","rematch"].includes(e.phase))return e;if(e.seconds>1)return{...e,seconds:e.seconds-1};if(e.phase==="round")return{...e,phase:"vote",seconds:cg,votes:[0,0],voted:!1};if(e.phase==="vote"){const t=e.votes[0]===e.votes[1]?null:e.votes[0]>e.votes[1]?0:1,s=[...e.scores];t!==null&&(s[t]+=1);const a=[...e.roundWinners,t];return e.round>=gn&&s[0]!==s[1]?{...e,scores:s,roundWinners:a,winner:s[0]>s[1]?0:1,phase:"rematch",seconds:dg,rematchVoted:!1}:{...e,scores:s,roundWinners:a,phase:"round",round:e.round+1,seconds:no,votes:[0,0],voted:!1,tieBreaker:e.round>=gn}}return{...e,phase:"finished",seconds:0}}let U=null,Me=null;function Ps(){const e=document.getElementById("roast-demo");if(!e||!U){Me&&clearInterval(Me),Me=null;return}const t=U.phase,s=t==="round"?`Round ${U.round}${U.tieBreaker?" · Final tiebreaker":""}`:t==="vote"?"Vote for the round winner":t==="rematch"?"Run It Back?":"Match finished";e.innerHTML=`<h3>${s}</h3><p><strong>${String(Math.floor(U.seconds/60)).padStart(2,"0")}:${String(U.seconds%60).padStart(2,"0")}</strong></p><p>Contestant A: ${U.scores[0]} rounds · Contestant B: ${U.scores[1]} rounds</p>${t==="vote"?'<button type="button" data-roast-vote="0">Vote A</button> <button type="button" data-roast-vote="1">Vote B</button>':""}${t==="rematch"?`<p>Winner: Contestant ${U.winner===0?"A":"B"}</p><button type="button" data-roast-rematch="yes">Run It Back? Yes</button> <button type="button" data-roast-rematch="no">No</button>`:""}<p class="muted">Local interactive simulation only. Votes are not shared between viewers. No live video or gifts are connected.</p>`}function hg(){Me&&clearInterval(Me),Me=null,U=null;const e=document.getElementById("roast-start");e&&(e.addEventListener("click",()=>{U=pg(),Ps(),Me&&clearInterval(Me),Me=setInterval(()=>{U=gg(U),Ps(),U.phase==="finished"&&(clearInterval(Me),Me=null)},1e3)}),document.getElementById("roast-demo").addEventListener("click",t=>{const s=t.target.closest("[data-roast-vote]"),a=t.target.closest("[data-roast-rematch]");s&&U&&U.phase==="vote"&&!U.voted&&(U={...ug(U,Number(s.dataset.roastVote)),voted:!0},Ps()),a&&U&&U.phase==="rematch"&&!U.rematchVoted&&(U={...mg(U,a.dataset.roastRematch==="yes"),rematchVoted:!0},Ps())}))}function fg(){return I("PIKK Roast Arena",`
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
  `,{lead:"Live comedy competitions · audience votes and gifts tracked separately"})}const as={instagram:"Instagram",tiktok:"TikTok",facebook:"Facebook",youtube:"YouTube",x:"X",snapchat:"Snapchat",other:"Other"};function vg(e){return((e==null?void 0:e.path)||"")==="/refer"?"refer":"share"}function se(e){j(e==="refer"?"#/refer":"#/share")}function Be(){const{user:e}=L();if(e)return e;const t=Nt("DemoCreator");return g("Signed in as DemoCreator · local demo"),t||L().user}function bg(e){const t=Number(e)-Date.now();if(t<=0)return"24h window ended (demo)";const s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return`${s}h ${a}m left`}function yg(e){return`<div class="admin-type-tabs rewards-tabs" style="grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:14px" role="tablist">
    <a class="admin-type-tab ${e==="share"?"on":""}" href="#/share" role="tab" aria-selected="${e==="share"}">Share &amp; Earn</a>
    <a class="admin-type-tab ${e==="refer"?"on":""}" href="#/refer" role="tab" aria-selected="${e==="refer"}">Refer &amp; Earn</a>
  </div>`}function kg(){const{user:e}=L(),t=X(),s=t.platformsLinked||[],a=t.challenge,i=t.submissions||[],n=t.rewardsClaimed||[],l=ur(),o=mr(),p=hc(),c=s.length>0?`<ul class="list-plain">${s.map(v=>`<li>
          <span><strong>${r(as[v.platform]||v.platform)}</strong>
            ${v.handle?`<br/><span class="muted" style="font-size:12px">@${r(String(v.handle).replace(/^@+/,""))}</span>`:""}
            ${v.url?`<br/><span class="muted" style="font-size:11px">${r(v.url)}</span>`:""}
          </span>
          <button class="btn ghost" type="button" data-unlink="${r(v.id)}">Remove</button>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No platforms linked yet — optional. Never asked for social passwords.</p>',u=qi().filter(v=>!s.some(w=>w.platform===v)).map(v=>`<option value="${v}">${r(as[v]||v)}</option>`).join("");let m="";if(!a)m=`<div class="card">
      <h3>24-hour social challenge</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Optional promo · separate from paid Clippers. Post official DBS ad + tracked link · keep live 24h · manual/demo verification (not guaranteed auto-check).</p>
      <button class="btn primary" id="shStart" >Start challenge · TEST MODE</button>
    </div>`;else{const v=a.status==="active",w=Date.now()>=Number(a.endsAt);m=`<div class="card">
      <div class="row wrap" style="gap:8px;margin-bottom:8px">
        <span class="chip">${v?w?"Window ended · demo":"Active":"Ended"}</span>
        <span class="chip">TEST MODE</span>
        <span class="chip">${r(bg(a.endsAt))}</span>
        ${a.simulatedElapsed?'<span class="chip">Simulated 24h elapsed</span>':""}
      </div>
      <h3>${r(a.adTitle)}</h3>
      <p style="margin:8px 0;font-size:14px;white-space:pre-wrap">${r(a.caption)}</p>
      <div class="field"><label>Tracked link</label>
        <input id="shTracked" readonly value="${r(a.trackedLink)}" />
      </div>
      <p class="chip" style="margin:8px 0">#ad · Paid partnership · incentivized promotion disclosure required</p>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <button class="btn" type="button" id="shCopyLink">Copy tracked link</button>
        <button class="btn" type="button" id="shCopyCaption">Copy caption</button>
        ${v?`<button class="btn ghost" type="button" id="shSim24">Simulate 24h elapsed</button>
               <button class="btn ghost" type="button" id="shEnd">End challenge</button>`:""}
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">Honest scope: stories/API may not prove continuous 24h visibility — admin/demo verify only.</p>
    </div>`}const h=qi().map(v=>`<option value="${v}">${r(as[v]||v)}</option>`).join(""),f=i.length>0?`<ul class="list-plain">${i.map(v=>`<li style="align-items:flex-start">
          <span style="flex:1;min-width:0">
            <strong>${r(as[v.platform]||v.platform)}</strong>
            <span class="chip">${r(v.status)}</span>
            <br/><a href="${r(v.postUrl)}" target="_blank" rel="noopener" style="font-size:13px;word-break:break-all">${r(v.postUrl)}</a>
            <br/><span class="muted" style="font-size:11px">${R(v.submittedAt)} · ${r(v.note||"")}</span>
          </span>
          ${v.status==="pending"?`<span class="row wrap" style="gap:4px">
                  <button class="btn" type="button" data-verify="${r(v.id)}">Verify · demo</button>
                  <button class="btn ghost" type="button" data-reject="${r(v.id)}">Reject</button>
                </span>`:""}
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No post URLs submitted yet.</p>',b=p.map(v=>{const w=n.some(T=>T.tierId===v.id),E=o.some(T=>T.id===v.id);return`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${r(v.label)}</strong><br/><span class="muted" style="font-size:11px">≥${v.minVerified} verified platform${v.minVerified===1?"":"s"}${v.requireAllLinked?" · all linked (≥3)":""}</span></td>
        <td style="padding:8px 4px">${w?'<span class="chip">Claimed</span>':E?`<button class="btn primary" type="button" data-claim-share="${r(v.id)}">Claim</button>`:`<span class="muted" style="font-size:12px">Locked (${l}/${v.minVerified})</span>`}</td>
      </tr>`}).join(""),k=n.length>0?`<ul class="list-plain">${n.map(v=>`<li>
          <span>${r(v.label)}<br/><span class="muted" style="font-size:11px">${R(v.at)} · TEST MODE</span></span>
          <span class="chip">${r(v.kind)}</span>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No rewards claimed yet.</p>';return`
    <div class="card">
      <p class="muted" style="margin:0;font-size:13px">
        Optional 24h social promo for registered users. Link platforms by <strong>name + handle/URL only</strong> — never passwords.
        Verification is <strong>manual/demo</strong> (not guaranteed auto-check of continuous 24h visibility).
      </p>
      <div class="row wrap" style="margin-top:10px;gap:8px">
        <span class="chip">Verified platforms: ${l}</span>
        <span class="chip">Linked: ${s.length}</span>
        ${e?`<span class="chip">@${r(e.username)}</span>`:'<button class="btn primary" type="button" id="rwSignIn">Sign in · demo</button>'}
        <button class="btn ghost" type="button" id="shReset">Reset Share demo</button>
      </div>
    </div>

    <div class="card">
      <h3>Linked social platforms</h3>
      ${c}
      <form id="shLinkForm" style="display:grid;gap:10px;max-width:520px;margin-top:12px">
        <div class="grid-2">
          <div class="field"><label>Platform</label>
            <select name="platform" id="shPlat" ${u?"":"disabled"}>
              ${u||'<option value="">All linked</option>'}
            </select>
          </div>
          <div class="field"><label>Handle (no password)</label><input name="handle" id="shHandle" maxlength="64" placeholder="you (no @ needed)" /></div>
        </div>
        <div class="field"><label>Profile URL (optional)</label><input name="url" id="shUrl" maxlength="240" placeholder="https://…" /></div>
        <button class="btn" type="submit" ${u?"":"disabled"}>Link platform</button>
        <p class="muted" style="margin:0;font-size:12px">Skip anytime — do not create fake accounts for rewards.</p>
      </form>
    </div>

    ${m}

    ${a?`<div class="card">
      <h3>Submit post URLs</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Paste the public post link for each platform. Admin Verify/Reject below (demo).</p>
      <form id="shSubmitForm" class="row wrap" style="gap:8px;align-items:flex-end">
        <div class="field" style="margin:0;min-width:140px"><label>Platform</label><select id="shSubPlat">${h}</select></div>
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
      ${k}
    </div>
  `}function wg(){const{user:e}=L(),t=Ft(),s=gr(),a=t.invitees||[],i=hr(),n=fr(),l=xc(),o=t.milestonesClaimed||[],p=xt(),c=l.find(b=>i<b.n),u=c?`${i} / ${c.n} verified active → ${c.label}`:i>=100?"All milestones unlocked":`${i} verified active`,m=a.length>0?`<ul class="list-plain">${a.map(b=>{const k=(b.activeDays||[]).length;return`<li style="align-items:flex-start">
            <span style="flex:1;min-width:0">
              <strong>${r(b.username)}</strong>
              <span class="chip">${r(b.status)}</span>
              ${b.flaggedFraud?'<span class="chip">Fraud flag</span>':""}
              ${b.welcomeClaimed?'<span class="chip">Welcome claimed</span>':""}
              <br/><span class="muted" style="font-size:12px">Active days: ${k}/3 · ${r((b.activeDays||[]).join(", ")||"none")} · signed ${R(b.signedUpAt)}</span>
            </span>
            <span class="row wrap" style="gap:4px;justify-content:flex-end">
              ${!b.welcomeClaimed&&!b.flaggedFraud?`<button class="btn ghost" type="button" data-welcome="${r(b.id)}">Welcome perk</button>`:""}
              ${!b.flaggedFraud&&b.status!=="active"?`<button class="btn" type="button" data-activeday="${r(b.id)}">Mark active day</button>`:""}
              ${b.flaggedFraud?`<button class="btn ghost" type="button" data-unfraud="${r(b.id)}">Clear fraud</button>`:`<button class="btn ghost" type="button" data-fraud="${r(b.id)}">Flag fraud</button>`}
            </span>
          </li>`}).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No invitees yet — simulate a signup or load demo referrals.</p>',h=l.map(b=>{const k=o.some(w=>w.milestoneId===b.id),v=n.some(w=>w.id===b.id);return`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${b.n}</strong> verified active</td>
        <td style="padding:8px 4px">${r(b.label)}</td>
        <td style="padding:8px 4px">${k?'<span class="chip">Claimed</span>':v?`<button class="btn primary" type="button" data-claim-ref="${r(b.id)}">Claim</button>`:`<span class="muted" style="font-size:12px">${i}/${b.n}</span>`}</td>
      </tr>`}).join(""),f=o.length>0?`<ul class="list-plain">${o.map(b=>`<li>
          <span>${r(b.label)}<br/><span class="muted" style="font-size:11px">${R(b.at)} · not Clippers pay</span></span>
          <span class="chip">${b.n}</span>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No milestone claims yet.</p>';return`
    <div class="card">
      <p class="muted" style="margin:0;font-size:13px">
        Personal referral link. Invitee welcome perks; inviter milestones only after <strong>verified active</strong>
        (meaningful participation on <strong>3 distinct days in the first 7 days</strong>). Distinct from Clippers commissions. No purchase required · no auto billing.
      </p>
      <div class="row wrap" style="margin-top:10px;gap:8px">
        <span class="chip">Verified active: ${i}</span>
        ${p?`<span class="chip">Membership: ${r(p)}</span>`:'<span class="chip">Membership: none</span>'}
        ${e?`<span class="chip">@${r(e.username)}</span>`:'<button class="btn primary" type="button" id="rwSignIn">Sign in · demo</button>'}
      </div>
    </div>

    <div class="card">
      <h3>Your referral link</h3>
      <div class="field"><label>Code</label><input readonly value="${r(t.code)}" /></div>
      <div class="field"><label>Link</label><input id="refLink" readonly value="${r(s)}" /></div>
      <div class="row wrap" style="gap:8px">
        <button class="btn primary" type="button" id="refCopy">Copy link</button>
        <button class="btn" type="button" id="refSeed">Load demo invitees</button>
        <button class="btn ghost" type="button" id="refReset">Reset Refer demo</button>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">Progress: ${r(u)}</p>
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
          <tbody>${h}</tbody>
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
  `}function Sg(e){return ro(e||{path:"/share"})}function $g(e){return ro(e||{path:"/refer"})}function ro(e){const t=vg(e),s=`
    ${yg(t)}
    ${t==="refer"?wg():kg()}
  `;return I("DBS Rewards",s,{lead:t==="refer"?"Refer & Earn · verified active friends · TEST MODE (§33).":"Share & Earn · 24h social promo · TEST MODE (§32)."})}function xg(e){oo(e,"share")}function Eg(e){oo(e,"refer")}function oo(e,t){var a,i,n,l,o,p,c,u,m,h,f,b,k;const s=t||(location.hash.includes("/refer")?"refer":"share");(a=e.querySelector("#rwSignIn"))==null||a.addEventListener("click",()=>{Be(),se(s)}),(i=e.querySelector("#shLinkForm"))==null||i.addEventListener("submit",v=>{var D,$,B;v.preventDefault(),Be();const w=(D=e.querySelector("#shPlat"))==null?void 0:D.value,E=(($=e.querySelector("#shHandle"))==null?void 0:$.value)||"",T=((B=e.querySelector("#shUrl"))==null?void 0:B.value)||"",y=fc({platform:w,handle:E,url:T});if(y.error==="signin")return g("Sign in required");if(y.error==="already_linked")return g("Already linked");if(y.error==="required")return g("Handle or URL required");if(y.error)return g("Could not link");g(`Linked ${as[w]||w}`),se("share")}),e.querySelectorAll("[data-unlink]").forEach(v=>{v.addEventListener("click",()=>{vc(v.getAttribute("data-unlink")),g("Platform removed"),se("share")})}),(n=e.querySelector("#shStart"))==null||n.addEventListener("click",()=>{Be();const v=bc();if(v.error==="signin")return g("Sign in required");if(v.error==="already_active")return g("Challenge already active");if(v.error)return g("Could not start");g("Challenge started · 24h window"),se("share")}),(l=e.querySelector("#shCopyLink"))==null||l.addEventListener("click",async()=>{var w;const v=((w=e.querySelector("#shTracked"))==null?void 0:w.value)||"";try{await navigator.clipboard.writeText(v),g("Tracked link copied")}catch{g("Copy manually")}}),(o=e.querySelector("#shCopyCaption"))==null||o.addEventListener("click",async()=>{var E;const w=((E=X().challenge)==null?void 0:E.caption)||"";try{await navigator.clipboard.writeText(w),g("Caption copied")}catch{g("Copy manually")}}),(p=e.querySelector("#shSim24"))==null||p.addEventListener("click",()=>{if(yc().error)return g("No active challenge");g("Simulated 24h elapsed"),se("share")}),(c=e.querySelector("#shEnd"))==null||c.addEventListener("click",()=>{kc(),g("Challenge ended"),se("share")}),(u=e.querySelector("#shSubmitForm"))==null||u.addEventListener("submit",v=>{var y,D;v.preventDefault(),Be();const w=(y=e.querySelector("#shSubPlat"))==null?void 0:y.value,E=((D=e.querySelector("#shSubUrl"))==null?void 0:D.value)||"",T=wc({platform:w,postUrl:E});if(T.error==="required")return g("Post URL required");if(T.error==="duplicate")return g("Already submitted for this platform");if(T.error==="no_challenge")return g("Start a challenge first");if(T.error)return g("Submit failed");g("Submitted · pending demo verification"),se("share")}),e.querySelectorAll("[data-verify]").forEach(v=>{v.addEventListener("click",()=>{Bi(v.getAttribute("data-verify"),"verified"),g("Verified · demo (manual)"),se("share")})}),e.querySelectorAll("[data-reject]").forEach(v=>{v.addEventListener("click",()=>{Bi(v.getAttribute("data-reject"),"rejected"),g("Rejected"),se("share")})}),e.querySelectorAll("[data-claim-share]").forEach(v=>{v.addEventListener("click",()=>{Be();const w=Sc(v.getAttribute("data-claim-share"));if(w.error==="not_claimable")return g("Not claimable yet");if(w.error)return g("Claim failed");g(`Claimed · ${w.claim.label}`),se("share")})}),(m=e.querySelector("#shReset"))==null||m.addEventListener("click",()=>{$c(),g("Share demo reset"),se("share")}),(h=e.querySelector("#refCopy"))==null||h.addEventListener("click",async()=>{var w;Be(),Ft();const v=((w=e.querySelector("#refLink"))==null?void 0:w.value)||gr();try{await navigator.clipboard.writeText(v),g("Referral link copied")}catch{g("Copy manually")}}),(f=e.querySelector("#refInviteForm"))==null||f.addEventListener("submit",v=>{var T;v.preventDefault(),Be();const w=((T=e.querySelector("#refInviteName"))==null?void 0:T.value)||"",E=Ec({username:w});if(E.error==="self_referral")return g("Self-referral blocked");if(E.error==="signin")return g("Sign in required");if(E.error)return g("Could not add invitee");g(`Invitee ${E.invitee.username} signed up`),se("refer")}),e.querySelectorAll("[data-welcome]").forEach(v=>{v.addEventListener("click",()=>{const w=Ac(v.getAttribute("data-welcome"));if(w.error==="fraud")return g("Flagged fraud");if(w.error)return g("Welcome claim failed");g(w.perk||"Welcome perk claimed"),se("refer")})}),e.querySelectorAll("[data-activeday]").forEach(v=>{v.addEventListener("click",()=>{const w=Cc(v.getAttribute("data-activeday"));if(w.error==="fraud")return g("Flagged fraud");if(w.error==="outside_window")return g("Outside first-7-day window");if(w.error==="window_full")return g("All 7 demo days already marked");if(w.error)return g("Could not mark day");const E=(w.invitee.activeDays||[]).length;g(E>=3?`${w.invitee.username} → verified active (${E} days)`:`Active day ${E}/3 for ${w.invitee.username}`),se("refer")})}),e.querySelectorAll("[data-fraud]").forEach(v=>{v.addEventListener("click",()=>{Oi(v.getAttribute("data-fraud"),!0),g("Flagged as fraud · demo"),se("refer")})}),e.querySelectorAll("[data-unfraud]").forEach(v=>{v.addEventListener("click",()=>{Oi(v.getAttribute("data-unfraud"),!1),g("Fraud flag cleared"),se("refer")})}),e.querySelectorAll("[data-claim-ref]").forEach(v=>{v.addEventListener("click",()=>{Be();const w=Tc(v.getAttribute("data-claim-ref"));if(w.error==="not_claimable")return g("Not claimable yet");if(w.error)return g("Claim failed");g(`Milestone claimed · ${w.claim.label}`),se("refer")})}),(b=e.querySelector("#refSeed"))==null||b.addEventListener("click",()=>{Be();const v=Mc({force:!0});if(v.error==="signin")return g("Sign in required");g(`Loaded ${v.seeded||0} demo invitees`),se("refer")}),(k=e.querySelector("#refReset"))==null||k.addEventListener("click",()=>{Be(),Dc(),g("Refer demo reset"),se("refer")})}function Ag(e){return{badge:`Phase ${e} shell`}}function hn(e){return`
    <article class="card pikk-video-tile">
      <div class="hero-video" style="margin:0 0 10px">
        <iframe src="${r(Ye(e.embed))}" title="${r(e.title)}" allowfullscreen loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <span class="chip">${r(e.category||"Music Videos")}</span>
      <h3 style="margin:8px 0 4px">${r(e.title)}</h3>
      <p class="muted" style="margin:0 0 8px">${r(e.artist||"DatBoiSkeet")}</p>
      <div class="row wrap">
        <a class="btn" href="${r(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a>
        <button class="btn ghost video-share" data-url="${r(e.youtube)}" data-title="${r(e.title)}">Share link</button>
      </div>
    </article>`}function Cg(){var p;const e=["Music Videos","Mixes","Interviews"],t={};ye.forEach(c=>{const u=c.category||"Music Videos";(t[u]||(t[u]=[])).push(c)});const s=e.filter(c=>{var u;return(u=t[c])==null?void 0:u.length}).map(c=>{const u=t[c].map(hn).join("");return`<section class="pikk-video-section" data-video-category="${r(c)}"><h3>${r(c)}</h3><div class="pikk-video-grid">${u}</div></section>`}).join(""),a=Object.keys(t).filter(c=>!e.includes(c)).map(c=>`<section class="pikk-video-section" data-video-category="${r(c)}"><h3>${r(c)}</h3><div class="pikk-video-grid">${t[c].map(hn).join("")}</div></section>`).join(""),i=wt({publishedOnly:!0,types:["video"]}),n=i.map(c=>{const u=c.youtube||"",m=c.embed||"";if(m||u){const h=m||"";return`<article class="card catalog-admin-video" data-id="${r(c.id)}">
          ${h?`<div class="hero-video" style="margin:0 0 10px"><iframe src="${r(Ye(h))}" title="${r(c.title)}" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`:""}
          <span class="chip">Admin</span>
          <h3 style="margin:8px 0 4px">${r(c.title)}</h3>
          <p class="muted">${r(c.artist)}</p>
          ${u?`<a class="btn" href="${r(u)}" target="_blank" rel="noopener">Open on YouTube</a>`:""}
        </article>`}return`<article class="card catalog-admin-video" data-id="${r(c.id)}">
        <span class="chip">Admin · uploaded</span>
        <h3 style="margin:8px 0 4px">${r(c.title)}</h3>
        <p class="muted">${r(c.artist)}</p>
        ${c.coverRef?`<img data-idb-src="${r(c.coverRef.startsWith("idb:")?c.coverRef:"")}" src="${r(c.coverRef.startsWith("idb:")?"":c.coverRef)}" alt="" class="catalog-cover" style="width:100%;max-height:220px;object-fit:cover;border-radius:12px;margin:8px 0" />`:""}
        ${c.mediaRef?`<video class="catalog-video" data-idb-src="${r(c.mediaRef.startsWith("idb:")?c.mediaRef:"")}" src="${r(c.mediaRef.startsWith("idb:")?"":c.mediaRef)}" controls playsinline webkit-playsinline preload="metadata" style="width:100%;border-radius:12px;background:#000"></video>`:'<p class="muted">No media file</p>'}
      </article>`}).join(""),l={};uo.forEach(c=>{var u;(l[u=c.category]||(l[u]=[])).push(c)});const o=Object.entries(l).map(([c,u])=>`
      <div class="card">
        <h3>${r(c)}</h3>
        <p class="muted" style="margin:0 0 8px">No verified URLs in repo yet — titles from plan §9 only. No invented view counts.</p>
        <ul class="list-plain">${u.map(m=>`<li><span>${r(m.title)}</span><span class="chip">Coming Soon</span></li>`).join("")}</ul>
      </div>`).join("");return I("Videos & Interviews",`${Kr("videos")}
    <section class="pikk-video-hero card">
      <div class="pikk-video-hero-copy">
        <p class="kicker">PIKK VIDEOS · OFFICIAL RELEASES</p>
        <h2>Watch. Discover. Repeat.</h2>
        <p class="muted">Verified DatBoiSkeet music videos, mixes and interviews. Original YouTube playback, with no invented view counts.</p>
        <a class="btn primary" href="#/explore">Explore creators</a>
      </div>
      ${(p=ye[0])!=null&&p.youtube?`<a class="pikk-video-hero-preview" href="${r(ye[0].youtube)}" target="_blank" rel="noopener" aria-label="Watch ${r(ye[0].title)}">
        <img src="https://i.ytimg.com/vi/${r(new URL(ye[0].youtube).searchParams.get("v")||"")}/hqdefault.jpg" alt="" loading="eager" decoding="async" />
        <span class="pikk-video-hero-label">▶ ${r(ye[0].title)}</span>
      </a>`:""}
    </section>
    <nav class="pikk-video-filters" aria-label="Video categories">
      <button type="button" class="on" data-videos-filter="All" aria-pressed="true">All</button>
      <button type="button" data-videos-filter="Music Videos" aria-pressed="false">Music Videos</button>
      <button type="button" data-videos-filter="Mixes" aria-pressed="false">Mixes</button>
      <button type="button" data-videos-filter="Interviews" aria-pressed="false">Interviews</button>
      ${i.length?'<button type="button" data-videos-filter="Admin" aria-pressed="false">Admin</button>':""}
    </nav>
    <div class="card pikk-video-source-info"><p class="muted" style="margin:0">Official DatBoiSkeet music videos, mixes, and interviews — YouTube embeds from the original source. No rehosted files.</p>
      <div class="row wrap" style="margin-top:8px;gap:8px">
        <a class="btn" href="https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA" target="_blank" rel="noopener">Official YouTube channel</a>
        <a class="btn ghost" href="https://www.youtube.com/@DatBoiSkeet1" target="_blank" rel="noopener">@DatBoiSkeet1</a>
        <a class="btn ghost" href="https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t" target="_blank" rel="noopener">Music Videos playlist</a>
      </div>
    </div>
    ${s}${a}
    ${n?`<section class="pikk-video-section" data-video-category="Admin"><h3>From Admin</h3><div class="pikk-video-grid">${n}</div></section>`:""}
    ${o}`,{lead:"Official MVs · Mixes · Interviews · admin uploads."})}function Tg(e){const t=[...e.querySelectorAll("[data-videos-filter]")],s=[...e.querySelectorAll(".pikk-video-section[data-video-category]")];t.forEach(a=>a.addEventListener("click",()=>{const i=a.dataset.videosFilter||"All";t.forEach(n=>{const l=n===a;n.classList.toggle("on",l),n.setAttribute("aria-pressed",l?"true":"false")}),s.forEach(n=>{const l=i==="All"||n.dataset.videoCategory===i;n.hidden=!l})})),ua(e),e.querySelectorAll("video.catalog-video").forEach(a=>{a.addEventListener("play",()=>Bt()),a.addEventListener("pause",()=>Qe()),a.addEventListener("ended",()=>Qe())}),e.querySelectorAll(".video-share").forEach(a=>{a.addEventListener("click",async()=>{const i=a.dataset.url||"";try{await navigator.clipboard.writeText(i),g("Link copied")}catch{g(i||"Copy failed")}})}),e.querySelectorAll("[data-idb-src]").forEach(async a=>{const i=(a.getAttribute("data-idb-src")||"").trim();if(i)try{const n=await ma(i);if(!n){a.tagName==="VIDEO"&&a.insertAdjacentHTML("afterend",'<p class="muted" style="font-size:12px">Media blob missing — re-upload from Admin.</p>');return}if((a.tagName==="IMG"||a.tagName==="VIDEO"||a.tagName==="AUDIO")&&(a.setAttribute("src",n),a.src=n,a.tagName==="VIDEO"||a.tagName==="AUDIO")){a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.controls=!0;try{a.load()}catch{}}}catch(n){console.warn("idb media hydrate failed",i,n)}})}function Dg(){const e=wn.map(a=>`<li><span>${r(a.name)}</span><strong>$${a.price}/mo</strong></li>`).join(""),t=L().creatorSellApps||[],s=t.length?`<ul class="list-plain" style="margin-top:10px">${t.slice(0,8).map(a=>`<li><span>${r(a.name)} · ${r(a.contact)} · ${r(a.sells)}</span><span class="chip">${r(a.status||"pending")}</span></li>`).join("")}</ul>`:'<p class="muted" style="margin:8px 0 0;font-size:12px">No applications on this device yet.</p>';return I("Pricing",`<div class="card">
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
     </div>`,{lead:"Sell music, videos, beats &amp; merch · rules &amp; fees · apply form · memberships &amp; gifts — admin-adjustable."})}function Mg(e){var s;typeof location<"u"&&(location.hash.includes("focus=sell")||location.hash.includes("creator-sell"))&&setTimeout(()=>{var a;return(a=document.getElementById("creator-sell"))==null?void 0:a.scrollIntoView({behavior:"smooth",block:"start"})},60),(s=e.querySelector("#csSubmit"))==null||s.addEventListener("click",()=>{var p,c,u,m,h,f;const a=(c=(p=e.querySelector("#csName"))==null?void 0:p.value)==null?void 0:c.trim(),i=(m=(u=e.querySelector("#csContact"))==null?void 0:u.value)==null?void 0:m.trim(),n=((h=e.querySelector("#csSells"))==null?void 0:h.value)||"both",l=!!((f=e.querySelector("#csAgree"))!=null&&f.checked);if(!a||!i)return g("Name and email/handle required");if(!l)return g("Agree to rules & fees to continue");const o=Ao({name:a,contact:i,sells:n,agreed:l});if(o!=null&&o.error)return g(o.error==="rules"?"Agree to rules & fees to continue":"Name and email/handle required");g("Application saved · TEST MODE"),j("#/pricing?focus=sell")})}function Lg(){return I("Community Guidelines",`<div class="card">
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
    </div>`,{lead:"Rules for posts, chat, Live & Lounge — plan §13."})}const Ta=[{id:"dbs-lounge",cat:"NETWORK",hash:"#dbs-lounge",name:"PIKK Lounge",blurb:"Main hub · official announcements & network news",chip:"Hub"},{id:"conversation",cat:"NETWORK",hash:"#the-conversation",name:"The Conversation",blurb:"Public music & fan discussion threads",chip:"Public"},{id:"listening",cat:"VOICE / LISTENING",hash:"#listening-rooms",name:"Listening Rooms",blurb:"Listening parties & reactions to new releases",chip:"Parties"},{id:"backstage",cat:"MEMBERS",hash:"#backstage-rooms",name:"Backstage Rooms",blurb:"Tier-restricted spaces for Skeet+ / Backstage / Inner Circle",chip:"Members"},{id:"live-rooms",cat:"NETWORK",hash:"#live-rooms",name:"Live Rooms",blurb:"Scheduled community events & discussions",chip:"Events"},{id:"spotlight",cat:"NETWORK",hash:"#the-spotlight",name:"The Spotlight",blurb:"Featured fan conversations & creator posts",chip:"Featured"}],fn={"dbs-lounge":[{who:"PIKK · System",text:"Welcome to PIKK Lounge — DatBoiSkeet’s channel-style community hub.",tag:"DEMO"},{who:"TEST MODE",text:"Live chat isn’t connected yet. These rows are placeholders so the room pane feels real.",tag:"DEMO"}],conversation:[{who:"DEMO",text:"Drop takes on new releases here once Phase 2 chat ships.",tag:"DEMO"}],listening:[{who:"DEMO",text:"Listening parties will sync reactions here — preview only.",tag:"DEMO"}],backstage:[{who:"DEMO",text:"Member-tier rooms unlock with Skeet+ / Backstage / Inner Circle.",tag:"DEMO"}],"live-rooms":[{who:"DEMO",text:"Scheduled community events will list here — no live presence yet.",tag:"DEMO"}],spotlight:[{who:"DEMO",text:"Featured fan conversations land here in Phase 2.",tag:"DEMO"}]},Pg=[{name:"DatBoiSkeet",role:"Owner"},{name:"SkeetMod",role:"Mod · DEMO"},{name:"FanDemo01",role:"DEMO"},{name:"ListenerX",role:"DEMO"}];function Ig(e){const s=(fn[e.id]||fn["dbs-lounge"]).map(a=>`<div class="lounge-msg">
        <div class="lounge-msg-avatar" aria-hidden="true">${r(a.who.slice(0,1))}</div>
        <div class="lounge-msg-body">
          <div class="lounge-msg-meta"><strong>${r(a.who)}</strong> <span class="chip">${r(a.tag)}</span></div>
          <p>${r(a.text)}</p>
        </div>
      </div>`).join("");return`<div class="lounge-pane" data-pane="${r(e.id)}" ${e.id==="dbs-lounge"?"":"hidden"}>
    <header class="lounge-pane-head">
      <div>
        <h2><span class="lounge-hash">#</span> ${r(e.name)}</h2>
        <p class="muted">${r(e.blurb)}</p>
      </div>
      <span class="chip">${r(e.chip)}</span>
    </header>
    <div class="lounge-honesty">
      <span class="chip">Phase 2</span>
      <span class="chip">TEST MODE</span>
      <p>Live chat, presence, and real member lists aren’t online yet — this is Discord-inspired chrome for PIKK Lounge only.</p>
    </div>
    <div class="lounge-msgs" aria-label="Demo messages">${s}</div>
    <div class="lounge-compose">
      <input type="text" disabled placeholder="Message #${r(e.name.toLowerCase().replace(/\s+/g,"-"))} · Phase 2" aria-label="Message composer disabled"/>
      <button class="btn" disabled>Send</button>
    </div>
  </div>`}function _g(){const e=[],t=new Set;Ta.forEach(n=>{t.has(n.cat)||(t.add(n.cat),e.push(n.cat))});const s=e.map(n=>{const l=Ta.filter(o=>o.cat===n).map(o=>`<button type="button" class="lounge-channel${o.id==="dbs-lounge"?" on":""}" data-channel="${r(o.id)}" aria-pressed="${o.id==="dbs-lounge"?"true":"false"}">
            <span class="lounge-hash">#</span>
            <span class="lounge-channel-label">${r(o.name)}</span>
            <span class="chip lounge-channel-chip">${r(o.chip)}</span>
          </button>`).join("");return`<div class="lounge-cat-block">
        <p class="lounge-cat-label">${r(n)}</p>
        ${l}
      </div>`}).join(""),a=Ta.map(Ig).join(""),i=Pg.map(n=>`<li><span class="lounge-member-dot" aria-hidden="true"></span><span><strong>${r(n.name)}</strong><br/><span class="muted" style="font-size:11px">${r(n.role)}</span></span></li>`).join("");return I("PIKK Lounge",`<div class="card lounge-intro">
      <p class="kicker">Artist-owned network</p>
      <h2 style="margin:0 0 8px">Channel-style Lounge</h2>
      <p>PIKK Lounge is DatBoiSkeet’s premium community — Discord-type channel UX (sidebar + room panes) under silver/dark PIKK branding. Announcements, listening parties, and fan conversations in one place.</p>
      <p class="muted" style="margin:8px 0 0">Not affiliated with Discord. Channels below are the same rooms as before; live chat unlocks in Phase 2.</p>
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
    </div>`,{lead:"Discord-inspired channels · DatBoiSkeet branded.",...Ag(2)})}function qg(e=document){const t=e.querySelector("#loungeDiscord")||e,s=[...t.querySelectorAll(".lounge-channel")],a=[...t.querySelectorAll(".lounge-pane")];s.length&&s.forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.channel;s.forEach(l=>{const o=l===i;l.classList.toggle("on",o),l.setAttribute("aria-pressed",o?"true":"false")}),a.forEach(l=>{l.dataset.pane===n?l.removeAttribute("hidden"):l.setAttribute("hidden","")})})})}function Bg(){return I("Signup & Creator Apps",`<div class="card">
      <p class="kicker">Join PIKK</p>
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
    </div>`,{lead:"Free fan signup + creator role applications · §16."})}function Og(){const e=L().notifications;return I("Notifications",`<div class="card" id="notifPrefs">
      <div class="toggle"><span>New releases</span><input type="checkbox" data-k="releases" ${e.releases?"checked":""}/></div>
      <div class="toggle"><span>Livestreams</span><input type="checkbox" data-k="lives" ${e.lives?"checked":""}/></div>
      <div class="toggle"><span>Messages</span><input type="checkbox" data-k="messages" ${e.messages?"checked":""}/></div>
      <div class="toggle"><span>Quiet hours</span><input type="checkbox" data-k="quietHours" ${e.quietHours?"checked":""}/></div>
      <p class="muted" style="margin-top:10px">Prefs saved on this device.</p>
    </div>`,{lead:"In-app center & alert controls."})}function Ng(e){e.querySelectorAll("#notifPrefs input").forEach(t=>{t.addEventListener("change",()=>{Co({[t.dataset.k]:t.checked}),g("Saved")})})}function jg(){const t=[{label:"Registration & role approval",status:"Demo",note:"Profile/signup local demo · real auth later"},{label:"Moderation / reporting / appeals",status:"TODO",note:"Guidelines copy ready · enforcement UI Phase 2"},{label:"Payments & refunds",status:"TEST",note:"TEST MODE only · no real charges"},{label:"Creator payouts verification",status:"SHELL",note:"Wallet / KYC stubs · not launch-ready"},{label:"Music & video rights",status:"Partial",note:"3 official MVs · streaming links still SHELL"},{label:"Gift-battle fraud prevention",status:"SHELL",note:"Gift Battles not wired for launch"},{label:"Livestream safety",status:"Demo",note:"Go-live demo PASS · age/safety stack incomplete"},{label:"Background audio pause/resume",status:"PARTIAL",note:"§17 sticky top YT player + pauseDbsPlayer hooks"},{label:"Account recovery / optional 2FA",status:"TODO",note:"Local demo sign-in only"},{label:"Loyalty analytics consent",status:"SHELL",note:"Privacy/consent controls before launch"},{label:"PIKK Connect safety (age + WebRTC)",status:"Blocked",note:"Must not launch without assurance"}].map(s=>`<li><span><strong>${r(s.label)}</strong><br/><span class="muted" style="font-size:12px">${r(s.note)}</span></span><span class="chip">${r(s.status)}</span></li>`).join("");return I("Launch Readiness",`<div class="card">
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
    </div>`,{lead:"Pre-launch checklist with honest demo status · §31."})}function Rg(){const e=[{n:1,title:"Foundation",summary:"Videos, Music/Vault, Posts, profiles, followers, engagement alerts, Clippers applications.",status:"DONE",items:[{label:"§1 Posts",status:"DONE",href:"#/posts"},{label:"§2 Clippers apply",status:"DONE",href:"#/clippers"},{label:"§7 Profiles",status:"DONE",href:"#/profile"},{label:"§8 Music & Vault",status:"DONE",href:"#/music"},{label:"§9 Videos & Interviews",status:"DONE",href:"#/videos"},{label:"§14 Streaming links",status:"DONE",href:"#/music"},{label:"§19 Loading splash",status:"DONE",href:"#/home"},{label:"§20 Home dashboard",status:"DONE",href:"#/home"},{label:"§21 Merch showcase",status:"DONE",href:"#/merch"},{label:"§34 Coming Soon covers",status:"DONE",href:"#/music"},{label:"§17 Home MV + continuous play",status:"PARTIAL",href:"#/home",note:"Sticky top YT player · Stream Everywhere open links · PENDING AUDIT"}]},{n:2,title:"Growth & Creator Economy",summary:"Clipper campaigns, missions, referrals, creator earnings, and payouts.",status:"DONE",items:[{label:"§5 Creator Earnings",status:"DONE",href:"#/earnings"},{label:"§6 Missions",status:"DONE",href:"#/missions"},{label:"§27 Wallet & Payouts",status:"DONE",href:"#/wallet"},{label:"§32 Share & Earn",status:"DONE",href:"#/share"},{label:"§33 Refer & Earn",status:"DONE",href:"#/refer"},{label:"§10 Pricing",status:"DONE",href:"#/pricing"},{label:"§11 Admin dashboard",status:"DONE",href:"#/admin"},{label:"§16 Signup / Creator apps",status:"DONE",href:"#/signup"},{label:"§24 Explore",status:"DONE",href:"#/explore"},{label:"§25 Notifications",status:"DONE",href:"#/notifications"},{label:"§26 Fan Clubs",status:"DONE",href:"#/fanclubs"},{label:"§28 Loyalty Club",status:"DONE",href:"#/loyalty"},{label:"§22 Profile Shop cosmetics",status:"DONE",href:"#/shop",note:"Checker PASS · cosmetics demo"}]},{n:3,title:"Live & Marketplace",summary:"Creator livestreaming, gifts, donations, advertising, creator subscriptions, and Marketplace.",status:"DONE",items:[{label:"§3 Live",status:"DONE",href:"#/live"},{label:"§4 Marketplace ads",status:"DONE",href:"#/marketplace"},{label:"§18 Messages",status:"DONE",href:"#/messages"},{label:"§23 Gift Battles",status:"DONE",href:"#/giftbattles"},{label:"§29 Multi-Guest Live",status:"DONE",href:"#/multiguest"},{label:"§30 Open Mic",status:"DONE",href:"#/openmic"},{label:"§35 24/7 Spotlight",status:"DONE",href:"#/spotlight"},{label:"§36 Connect (opt-in shell)",status:"DONE",href:"#/connect"},{label:"§37 Restream + streamer tiers",status:"DONE",href:"#/restream"},{label:"§13 Guidelines",status:"DONE",href:"#/guidelines"},{label:"§15 Community / Lounge",status:"DONE",href:"#/community"},{label:"§31 Launch readiness",status:"DONE",href:"#/launch"}]}],t=a=>a==="DONE"?"chip chip-ok":a==="PARTIAL"?"chip chip-partial":a==="PENDING AUDIT"?"chip chip-audit":"chip",s=e.map(a=>{const i=a.items.map(n=>{const l=n.note?`<br/><span class="muted" style="font-size:12px">${r(n.note)}</span>`:"";return`<li><span>${n.href?`<a href="${r(n.href)}" style="color:inherit;text-decoration:none"><strong>${r(n.label)}</strong></a>`:`<strong>${r(n.label)}</strong>`}${l}</span><span class="${t(n.status)}">${r(n.status)}</span></li>`}).join("");return`<div class="card">
      <div class="row wrap" style="gap:8px;align-items:center;margin-bottom:8px">
        <span class="chip">Phase ${a.n}</span>
        <span class="${t(a.status)}">${r(a.status)}</span>
      </div>
      <h2 style="margin:0 0 6px">${r(a.title)}</h2>
      <p class="muted" style="margin:0 0 12px">${r(a.summary)}</p>
      <ul class="list-plain">${i}</ul>
    </div>`}).join(`

    `);return I("Development Phases",`<div class="card">
      <p class="kicker">Plan §12</p>
      <h2 style="margin:0 0 8px">Roadmap · what shipped vs remaining</h2>
      <p class="muted" style="margin:0">Phase 1–3 from the DatBoiSkeet developer plan. Chips mirror STATUS.md — <strong>DONE</strong> needs Checker PASS; <strong>PARTIAL</strong> and <strong>PENDING AUDIT</strong> are not launch-complete.</p>
      <p class="muted" style="margin:10px 0 0">Still open: <a href="#/home">§17 sticky player</a> (YT embed · no PIKK-hosted audio yet) · <a href="#/shop">§22 Profile Shop</a> (awaiting Checker) · identity/payout verification &amp; fraud controls before activating real money features.</p>
    </div>

    ${s}

    <div class="card">
      <h3>Before activating paid features</h3>
      <p class="muted" style="margin:0">Implement identity and payout verification, payment security, copyright controls, moderation, and fraud prevention before turning on real charges, gifts, or payouts. See <a href="#/launch">Launch Readiness</a>.</p>
    </div>`,{lead:"Phase 1 · Phase 2 · Phase 3 roadmap with live status chips · §12."})}function Fg(e){return I("Not found",`<div class="card"><p>No page for <code>${r(e)}</code>.</p><a class="btn" href="#/home">Home</a></div>`)}const Gg={"/home":{render:sp,bind:ap},"/updates":{render:rp,bind:op},"/posts":{render:Ep,bind:Ap},"/music":{render:en,bind:tn},"/vault":{render:en,bind:tn},"/merch":{render:Mp,bind:Lp},"/profile":{render:Pp,bind:Ip},"/clippers":{render:qp,bind:Bp},"/videos":{render:Cg,bind:Tg},"/live":{render:lu,bind:uu},"/explore":{render:Gu,bind:Vu},"/marketplace":{render:fu,bind:vu},"/earnings":{render:Mu,bind:Lu},"/missions":{render:qu,bind:Bu},"/pricing":{render:Dg,bind:Mg},"/admin":{render:Sp,bind:$p},"/guidelines":{render:Lg},"/community":{render:_g,bind:qg},"/signup":{render:Bg},"/messages":{render:xu,bind:Eu},"/shop":{render:Bm,bind:Om},"/profile-shop":{render:Mm,bind:Lm},"/giftbattles":{render:sm,bind:am},"/notifications":{render:Og,bind:Ng},"/fanclubs":{render:bm,bind:ym},"/wallet":{render:Cu,bind:Tu},"/loyalty":{render:km,bind:wm},"/multiguest":{render:gm,bind:hm},"/openmic":{render:$m,bind:xm},"/launch":{render:jg},"/phases":{render:Rg},"/share":{render:Sg,bind:xg},"/refer":{render:$g,bind:Eg},"/spotlight":{render:Wm,bind:Ym},"/restream":{render:()=>(queueMicrotask(()=>{location.hash="/connect#connect-multistream"}),Va()),bind:Ua},"/shorts":{render:un,bind:mn},"/clips":{render:un,bind:mn},"/connect":{render:Va,bind:Ua},"/blockwars":{render:sg,bind:ig},"/games":{render:ng,bind:og},"/dating":{render:lg},"/roast-arena":{render:fg,bind:hg}};function $i(){var t,s,a;const e=document.getElementById("tabbar");if(L().user)try{Ja()}catch{}e.innerHTML=vo.map(i=>{const l="/"+i.href.replace(/^#/,"").replace(/^\//,"").split(/[?#]/)[0],o=r(i.label);return`<a${i.primary?' class="tab-primary"':""} href="${i.href}" data-path="${l}" aria-label="${o}"${i.href==="#/create"?' aria-haspopup="dialog" aria-controls="pikkCreateMenu" aria-expanded="false"':i.href==="#/music"?' aria-haspopup="dialog" aria-controls="pikkMusicMenu" aria-expanded="false"':Ns[l.slice(1)]?` aria-haspopup="dialog" aria-controls="pikk${o}Menu" aria-expanded="false"`:""}><span class="tab-ico">${i.href==="#/create"?'<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><path d="M9 5 L25 16 L9 27 Z" fill="currentColor"/><path d="M24 5v11m0 0-4-4m4 4 4-4" stroke="white" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>':ls[i.icon]||""}</span><span>${o}</span></a>`}).join("");for(const i of Object.keys(Ns))(t=e.querySelector(`a[href="#/${i}"]`))==null||t.addEventListener("click",n=>{n.preventDefault(),po(i,n.currentTarget)});(s=e.querySelector('a[href="#/music"]'))==null||s.addEventListener("click",i=>{i.preventDefault(),bt(),Bd(i.currentTarget)}),(a=e.querySelector('a[href="#/create"]'))==null||a.addEventListener("click",i=>{var l;ss(),bt(),i.preventDefault();const n=Vg();n.hidden=!n.hidden,i.currentTarget.setAttribute("aria-expanded",String(!n.hidden)),n.hidden||(l=n.querySelector("[data-create-close]"))==null||l.focus()}),e.style.gridTemplateColumns="",e.classList.remove("tabbar-scroll"),e.classList.add("tabbar-reshaped","tabbar-fit7")}function Kg(){return kn.map(e=>{const t=e.items.map(s=>{const a=`<span class="pikk-menu-icon" aria-hidden="true">${ls[s.icon]||ls.explore}</span><strong class="pikk-menu-title">${r(s.title)}</strong><small>${r(s.detail)}</small>`;return s.href?`<a href="${r(s.href)}" class="pikk-create-tile">${a}</a>`:`<div class="pikk-create-tile pikk-create-tile-planned" aria-disabled="true">${a}</div>`}).join("");return`<section class="pikk-create-menu-group" aria-label="${r(e.title)}"><h3>${r(e.title)}</h3><div class="pikk-create-options pikk-create-grid">${t}</div></section>`}).join("")}function Vg(){let e=document.getElementById("pikkCreateMenu");if(e)return e;e=document.createElement("div"),e.id="pikkCreateMenu",e.className="pikk-create-overlay",e.hidden=!0,e.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-label="Create on PIKK">
    <div class="pikk-create-head"><strong>Create on PIKK</strong><button type="button" class="btn ghost" data-create-close aria-label="Close create menu">✕</button></div>
    ${Kg()}
    <button type="button" class="pikk-menu-cancel" data-create-close>Cancel</button>
    <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · uploads depend on available prototype tools</p>
  </div>`,document.body.appendChild(e);const t=(s=!1)=>{e.hidden=!0;const a=document.querySelector('#tabbar a[href="#/create"]');a==null||a.setAttribute("aria-expanded","false"),s&&(a==null||a.focus())};return window.addEventListener("hashchange",()=>t()),e.addEventListener("click",s=>{s.target===e||s.target.closest("[data-create-close]")?t(!0):s.target.closest(".pikk-create-options a")&&t()}),document.addEventListener("keydown",s=>{if(!e.hidden&&(s.key==="Escape"&&(s.preventDefault(),t(!0)),s.key==="Tab")){const a=[...e.querySelectorAll("a[href], button:not([disabled])")],i=a[0],n=a[a.length-1];if(!i){s.preventDefault();return}e.contains(document.activeElement)?s.shiftKey&&document.activeElement===i?(s.preventDefault(),n.focus()):!s.shiftKey&&document.activeElement===n&&(s.preventDefault(),i.focus()):(s.preventDefault(),(s.shiftKey?n:i).focus())}}),e}function Ug(){const e=document.getElementById("tabbar");if(!e)return;$i();const t=Je();Fr(e,t.path);try{lo()}catch{}}function zg(){const e=document.getElementById("sideNav"),t=Je(),s="#"+(t.raw||t.path),a="#"+t.path,i=Sn.map(n=>{if(n.href)return`<a class="drawer-direct${n.href===a||n.href===s?" on":""}" href="${n.href}">${r(n.label)}</a>`;const l=n.links||[],o=l.some(m=>m.href===a||m.href===s),p=o?" open":"",c=o?" has-active":"",u=l.map(m=>`<a class="drawer-link${m.href===a||m.href===s?" on":""}" href="${m.href}">${r(m.label)}</a>`).join("");return`<div class="drawer-group${p}${c}" data-group="${r(n.id)}"><button type="button" class="drawer-cat" aria-expanded="${o?"true":"false"}"><span>${r(n.label)}</span><span class="drawer-caret" aria-hidden="true"></span></button><div class="drawer-children" role="group">${u}</div></div>`}).join("");e.innerHTML=`<h2>PIKK Network</h2>${i}<a class="drawer-direct" href="#/updates">What's New · App Updates</a>`}function Da(e){document.getElementById("sideNav").classList.toggle("open",e),document.getElementById("sideNav").setAttribute("aria-hidden",e?"false":"true"),document.getElementById("scrim").classList.toggle("show",e)}function Hg(e){const t=e.path;$i(),Fr(document.getElementById("tabbar"),t),document.querySelectorAll("#sideNav a").forEach(n=>{const l=n.getAttribute("href")||"";n.classList.toggle("on",l==="#"+t||l==="#"+e.raw)});const s="#"+t,a="#"+e.raw;document.querySelectorAll("#sideNav .drawer-group").forEach(n=>{const l=[...n.querySelectorAll("a")].some(p=>p.getAttribute("href")===s||p.getAttribute("href")===a);n.classList.toggle("open",l),n.classList.toggle("has-active",l);const o=n.querySelector(".drawer-cat");o&&o.setAttribute("aria-expanded",l?"true":"false")});const i=document.getElementById("headerMsg");if(i&&(i.hidden=!1),L().user)try{Ja()}catch{}lo()}function lo(){const e=document.getElementById("headerMsgBadge"),t=document.getElementById("headerMsg");if(!e||!t)return;let s=0;try{s=tt()}catch{s=0}if(s>0){const a=s>99?"99+":String(s);e.textContent=a,e.hidden=!1,t.setAttribute("aria-label",`Messages, ${s} unread`)}else e.textContent="",e.hidden=!0,t.setAttribute("aria-label","Messages")}function Wg(e){var i;const t=document.getElementById("app"),s=Gg[e.path],a=s?s.render(e):Fg(e.path);t.innerHTML=a,Rr(t),(i=s==null?void 0:s.bind)==null||i.call(s,t),Hg(e),Ad(e.path),window.scrollTo(0,0),(e.path==="/music"||e.path==="/vault")&&(location.hash.includes("vault")||e.path==="/vault")&&setTimeout(()=>{var n;return(n=document.getElementById("vault"))==null?void 0:n.scrollIntoView({behavior:"smooth"})},50),e.path==="/pricing"&&(location.hash.includes("focus=sell")||location.hash.includes("creator-sell"))&&setTimeout(()=>{var n;return(n=document.getElementById("creator-sell"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50),e.path==="/wallet"&&(e.elementId==="wallet-coins"||e.query.section==="coins"||location.hash.includes("wallet-coins"))&&setTimeout(()=>{var n;return(n=document.getElementById("wallet-coins"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50),e.path==="/live"&&(e.query.go==="1"||e.elementId==="live-go"||location.hash.includes("go=1"))&&setTimeout(()=>{var n;return(n=document.getElementById("live-go"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50)}function Yg(){if(new URLSearchParams(location.search).has("holdSplash"))return;const e=document.getElementById("splash");!e||e.classList.contains("hide")||(e.classList.add("hide"),To(),setTimeout(()=>e.remove(),500))}function Qg(){const e=document.getElementById("splashChime");if(!e)return;const t=()=>{const a=e.play();a&&typeof a.catch=="function"&&a.catch(()=>{})};t();const s=()=>{t(),window.removeEventListener("pointerdown",s),window.removeEventListener("keydown",s)};window.addEventListener("pointerdown",s,{once:!0}),window.addEventListener("keydown",s,{once:!0})}function Xg(){window.addEventListener("dbs:interrupt-music",e=>{var s;const t=((s=e==null?void 0:e.detail)==null?void 0:s.reason)||"route";$s(t)}),window.addEventListener("dbs:resume-music",e=>{var s;const t=(s=e==null?void 0:e.detail)==null?void 0:s.reason;t==="live"?Br():t==="video"?Qe():qr(t)})}function Jg(){window.addEventListener("dbs:messages-unread",()=>{try{Ug()}catch{}})}function Zg(){if(xn(),Rr(document),$i(),zg(),Ed(),Xg(),Jg(),document.getElementById("menuBtn").addEventListener("click",()=>Da(!0)),document.getElementById("scrim").addEventListener("click",()=>Da(!1)),document.getElementById("sideNav").addEventListener("click",e=>{const t=e.target.closest(".drawer-cat");if(t){e.preventDefault();const s=t.closest(".drawer-group"),a=!s.classList.contains("open");document.querySelectorAll("#sideNav .drawer-group").forEach(i=>{const n=a&&i===s;i.classList.toggle("open",n);const l=i.querySelector(".drawer-cat");l&&l.setAttribute("aria-expanded",n?"true":"false")});return}e.target.closest("a")&&Da(!1)}),document.getElementById("notifBtn").addEventListener("click",()=>{location.hash="/notifications"}),Ld(Wg),Pd(),!Do()&&!new URLSearchParams(location.search).has("holdSplash")){const e=document.getElementById("splash");e&&e.remove()}else{Qg();let e=!1;setTimeout(()=>{e||(e=!0,Yg())},3e3)}}Zg();
