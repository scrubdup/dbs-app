(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function En(e,t=Date.now()){const s=new URL(e);return s.searchParams.set("refresh",String(t)),s.toString()}var xn;(xn=document.getElementById("pikk-refresh-link"))==null||xn.addEventListener("click",function(e){e.preventDefault(),window.location.assign(En(window.location.href))});let Mi;function h(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"),clearTimeout(Mi),Mi=setTimeout(()=>t.classList.remove("show"),2400))}function r(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function j(e){const t=Math.max(0,Math.floor((Date.now()-e)/1e3));if(t<60)return t+"s";const s=Math.floor(t/60);if(s<60)return s+"m";const a=Math.floor(s/60);return a<24?a+"h":Math.floor(a/24)+"d"}function I(e,t,s={}){let a="";if(s.badgeHtml)a=s.badgeHtml;else if(s.badge){const n=r(s.badge),o=s.badgeAria?` aria-label="${r(s.badgeAria)}"`:"",l=s.badgeTitle||s.badgeAria?` title="${r(s.badgeTitle||s.badgeAria)}"`:"";s.badgeHref?a=`<a class="badge-phase"${o}${l} href="${r(s.badgeHref)}">${n}</a>`:a=`<span class="badge-phase"${o}${l}>${n}</span>`}const i=s.lead?`<p class="lead">${s.lead}</p>`:"";return`
    <section class="page">
      <header class="page-head">
        <h1>${r(e)} ${a}</h1>
        ${i}
      </header>
      ${t}
    </section>
  `}const ps={heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.5c0 4.6-8.8 10.4-8.8 10.4S3.2 13.1 3.2 8.5a4.5 4.5 0 0 1 8.8-1.2 4.5 4.5 0 0 1 8.8 1.2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',posts:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',camera:'<svg viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h2.1l1.2-1.8A1.5 1.5 0 0 1 11 3.5h2a1.5 1.5 0 0 1 1.2.7L15.4 6h2.1A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',music:'<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',merch:'<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8zm3-3a3 3 0 0 1 6 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',explore:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',live:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".5"/></svg>',profile:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 19a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',videos:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v5A2.5 2.5 0 0 1 16.5 14H11l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 11.5v-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 17.5V19a1 1 0 0 0 1.5.85L14 17h2.5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".55"/></svg>',msg:'<svg viewBox="0 0 24 24"><rect x="3.5" y="6" width="17" height="12" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4.5 7.5 7.5 5.2L19.5 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',game:'<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 13h2.5M9.25 11.5v3M15.2 12.2h.01M17.3 14.2h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'};function Ye(e,t="rel=0"){const s=String(e||"").trim();if(!s)return"";const a=s.includes("?")?"&":"?";return`${s}${a}${t}`}const Gs=Object.freeze({videos:[{title:"Video Feed",href:"#/videos",detail:"Watch and discover videos",icon:"▶"},{title:"Shorts & Reels",href:"#/shorts",detail:"Browse short-form clips",icon:"▣"},{title:"Posts",href:"#/posts",detail:"View the community feed",icon:"▤"},{title:"Upload Video",href:"#/posts?type=video",detail:"Available prototype publishing tools · TEST MODE",icon:"⇧"}],connect:[{title:"Connect",href:"#/connect",detail:"Discover people and communities",icon:"♧"},{title:"PIKK Communities",href:"#/communities",detail:"Topic discussions, votes and replies · TEST MODE",icon:"#"},{title:"Communities",href:"#/community",detail:"Explore PIKK Lounge channel rooms",icon:"☷"},{title:"Messages",href:"#/messages",detail:"Open your messages",icon:"✉"},{title:"Random Chat",href:"#/connect#connect-random-chat",detail:"Preview only · real matching unavailable",icon:"◉"},{title:"Multistream",href:"#/connect#connect-multistream",detail:"Broadcast connection preview · TEST MODE",icon:"▹"}],dating:[{title:"Discover Dating",href:"#/dating",detail:"Explore dating features · TEST MODE",icon:"♡"},{title:"Messages",href:"#/messages",detail:"Open private messages",icon:"✉"},{title:"My Profile",href:"#/profile",detail:"Review your profile settings",icon:"◉"},{title:"Safety Guidelines",href:"#/guidelines",detail:"Review community safety rules",icon:"◇"}],games:[{title:"PIKK Arcade",href:"#/games",detail:"View the full game collection · preview",icon:"♜"},{title:"PIKK Speed",detail:"Card game · planned",icon:"♠"},{title:"PIKK Blackjack",detail:"Card game · planned",icon:"♠"},{title:"PIKK Slots",detail:"Play-chip game · planned",icon:"♜"},{title:"PIKK Poker",detail:"Play-chip card game · planned",icon:"♠"},{title:"PIKK Spades",detail:"Card game · planned",icon:"♠"},{title:"PIKK Dominoes",detail:"Table game · planned",icon:"♜"},{title:"PIKK Chess",detail:"Strategy game · planned",icon:"♜"},{title:"PIKK Clash",detail:"Neighborhood puzzle · planned",icon:"♜"},{title:"PIKK Knockout",detail:"Physics challenge · planned",icon:"♜"},{title:"PIKK Playground",detail:"Social mini-games · planned",icon:"♜"},{title:"PIKK Bowling",detail:"Bowling · planned",icon:"♜"},{title:"PIKK Pickleball",detail:"Pickleball · planned",icon:"♜"},{title:"PIKK Pool",detail:"Pool · planned",icon:"♜"},{title:"PIKK Cup Pong",detail:"Cup pong · planned",icon:"♜"},{title:"Block Wars",href:"#/blockwars",detail:"Fighting game · development preview",icon:"▣"}],shop:[{title:"PIKK Shop",href:"#/shop",detail:"Browse available products",icon:"▤"},{title:"Marketplace",href:"#/marketplace",detail:"Community listings · TEST MODE",icon:"◇"},{title:"Foreign X-Change",href:"#/merch",detail:"Official merchandise",icon:"✦"},{title:"Creator Pricing",href:"#/pricing",detail:"Explore creator selling information",icon:"$"}]}),bo=Object.freeze({"Video Feed":"videos","Shorts & Reels":"videos",Posts:"posts","Upload Video":"videos",Connect:"profile","PIKK Communities":"chat",Communities:"chat",Messages:"msg","Random Chat":"camera",Multistream:"live","Discover Dating":"heart","My Profile":"profile","Safety Guidelines":"heart","PIKK Arcade":"game","PIKK Speed":"game","PIKK Blackjack":"game","PIKK Slots":"game","PIKK Poker":"game","PIKK Spades":"game","PIKK Dominoes":"game","PIKK Chess":"game","PIKK Clash":"game","PIKK Knockout":"game","PIKK Playground":"game","PIKK Bowling":"game","PIKK Pickleball":"game","PIKK Pool":"game","PIKK Cup Pong":"game","Block Wars":"game","PIKK Shop":"merch",Marketplace:"merch","Foreign X-Change":"merch","Creator Pricing":"posts"}),An={videos:"pikkVideosMenu",connect:"pikkConnectMenu",dating:"pikkDatingMenu",games:"pikkGamesMenu",shop:"pikkShopMenu"};function bt(e=!1){for(const[t,s]of Object.entries(An)){const a=document.getElementById(s);if(!a||a.hidden)continue;a.hidden=!0;const i=document.querySelector(`#tabbar a[href="#/${t}"]`);i==null||i.setAttribute("aria-expanded","false"),e&&(i==null||i.focus())}}function yo(e,t){var l,d,c;if(!Object.hasOwn(Gs,e))return;const s=An[e];let a=document.getElementById(s);a||(a=document.createElement("div"),a.id=s,a.className="pikk-create-overlay",a.hidden=!0,a.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="${s}Title">
      <div class="pikk-create-head"><strong id="${s}Title">${e[0].toUpperCase()+e.slice(1)} on PIKK</strong><button type="button" class="btn ghost" data-section-close aria-label="Close ${e} menu">✕</button></div>
      <div class="pikk-create-options pikk-create-grid">${Gs[e].map(u=>{const m=`<span class="pikk-menu-icon" aria-hidden="true">${ps[bo[u.title]||"explore"]}</span><strong class="pikk-menu-title">${u.title}</strong><small>${u.detail}</small>`;return u.href?`<a class="pikk-create-tile" href="${u.href}">${m}</a>`:`<div class="pikk-create-tile pikk-menu-planned" aria-disabled="true">${m}</div>`}).join("")}</div>
      <button type="button" class="pikk-menu-cancel" data-section-close>Cancel</button>
      <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Production features are not enabled until secure services are available.</p>
    </div>`,document.body.appendChild(a),a.addEventListener("click",u=>{u.target===a||u.target.closest("[data-section-close]")?bt(!0):u.target.closest(".pikk-create-options a")&&bt()}),document.addEventListener("keydown",u=>{if(a.hidden)return;if(u.key==="Escape"){u.preventDefault(),bt(!0);return}if(u.key!=="Tab")return;const m=[...a.querySelectorAll("button:not([disabled]), a[href]")],g=m[0],f=m[m.length-1];if(!g){u.preventDefault();return}a.contains(document.activeElement)?u.shiftKey&&document.activeElement===g?(u.preventDefault(),f.focus()):!u.shiftKey&&document.activeElement===f&&(u.preventDefault(),g.focus()):(u.preventDefault(),(u.shiftKey?f:g).focus())}),window.addEventListener("hashchange",()=>bt()));const i=a.hidden;bt();const n=document.getElementById("pikkMusicMenu");n&&!n.hidden&&(n.hidden=!0,(l=document.querySelector('#tabbar a[href="#/music"]'))==null||l.setAttribute("aria-expanded","false"));const o=document.getElementById("pikkCreateMenu");o&&!o.hidden&&(o.hidden=!0,(d=document.querySelector('#tabbar a[href="#/create"]'))==null||d.setAttribute("aria-expanded","false")),a.hidden=!i,t==null||t.setAttribute("aria-expanded",String(i)),i?(c=a.querySelector("[data-section-close]"))==null||c.focus():t==null||t.focus()}const Cn=Object.freeze([{title:"Social & Community",items:[{title:"Create Post",href:"#/posts?type=text",detail:"Text post · TEST MODE",icon:"posts"},{title:"Community Post",href:"#/community",detail:"Open community · preview",icon:"chat"},{title:"Story",detail:"24-hour stories · Planned",icon:"camera"},{title:"Reels",href:"#/posts?type=short",detail:"Short video · TEST MODE",icon:"videos"},{title:"Photo Post",href:"#/posts?type=picture",detail:"Photos · TEST MODE",icon:"camera"},{title:"Create Poll",detail:"Interactive polls · Planned",icon:"posts"},{title:"Create Community",href:"#/community",detail:"Community area · preview",icon:"chat"},{title:"Create Chatroom",detail:"Room creation · Planned",icon:"msg"},{title:"Create Event",detail:"Events · Planned",icon:"explore"}]},{title:"Videos & Music",items:[{title:"Upload Video",href:"#/posts?type=video",detail:"Video upload · TEST MODE",icon:"videos"},{title:"Music Video",href:"#/posts?type=video",detail:"Video composer · TEST MODE",icon:"videos"},{title:"Short Video",href:"#/posts?type=short",detail:"Short composer · TEST MODE",icon:"videos"},{title:"Upload Song",detail:"Song publishing · Planned",icon:"music"},{title:"Upload Album",detail:"Album publishing · Planned",icon:"music"},{title:"Upload EP",detail:"EP publishing · Planned",icon:"music"},{title:"Upload Beats",detail:"Beat publishing · Planned",icon:"music"},{title:"Create Playlist",href:"#/music",detail:"Open music area · preview",icon:"music"},{title:"Add to Vault",href:"#/vault",detail:"Open Vault · preview",icon:"music"}]},{title:"Live & Commerce",items:[{title:"Go Live",href:"#/live?go=1",detail:"Livestream · TEST MODE",icon:"live"},{title:"Schedule Live",detail:"Live scheduling · Planned",icon:"live"},{title:"Live Battle",href:"#/giftbattles",detail:"Battle area · preview",icon:"live"},{title:"List Product",href:"#/marketplace",detail:"Marketplace · TEST MODE",icon:"merch"},{title:"Seller Store",detail:"Store creation · Planned",icon:"merch"},{title:"Paid Content",href:"#/pricing",detail:"Creator pricing · preview",icon:"merch"},{title:"Exclusive Content",detail:"Exclusive publishing · Planned",icon:"heart"}]},{title:"Creator Tools & Protection",items:[{title:"Creator Dashboard",href:"#/profile",detail:"Creator profile",icon:"profile"},{title:"Manage Content",href:"#/posts",detail:"Posts and content",icon:"posts"},{title:"Drafts",detail:"Draft management · Planned",icon:"posts"},{title:"Artist Protection",detail:"PIKK Shield · Planned",icon:"music"},{title:"AI Support",detail:"Support assistant · Planned",icon:"chat"}]}]);Object.freeze(Cn.flatMap(e=>e.items));const he=[{id:"dirty-money",title:"Dirty Money ft. Lil Baby",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI",embed:"https://www.youtube.com/embed/-rHDLWfiuDI"},{id:"93",title:"93 ft. DaBaby",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0",embed:"https://www.youtube.com/embed/zC0BYFxs5W0"},{id:"no-love",title:"No Love ft. YFN Lucci",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8",embed:"https://www.youtube.com/embed/6pCVEIE9pB8"},{id:"bouquet",title:"Bouquet",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=DTe4OiX2otg",embed:"https://www.youtube.com/embed/DTe4OiX2otg"},{id:"where-im-from",title:"Where I'm From ft. Tee Grizzley",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=BH7_Ttk86eQ",embed:"https://www.youtube.com/embed/BH7_Ttk86eQ"},{id:"gang-ties",title:"Gang Ties",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=0ikbrk901Kc",embed:"https://www.youtube.com/embed/0ikbrk901Kc"},{id:"go-2-work",title:"Go 2 Work",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=gRq8c2i4ESM",embed:"https://www.youtube.com/embed/gRq8c2i4ESM"},{id:"ramen-noodles",title:"Ramen Noodles",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=YNCdtAC273M",embed:"https://www.youtube.com/embed/YNCdtAC273M"},{id:"men-in-blacc",title:"Men In Blacc",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=MKyw-hzxQWY",embed:"https://www.youtube.com/embed/MKyw-hzxQWY"},{id:"king-city",title:"King City",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=wyNJYUqpRFM",embed:"https://www.youtube.com/embed/wyNJYUqpRFM"},{id:"in-her-bag",title:"In Her Bag",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=Dux8rm-pzRg",embed:"https://www.youtube.com/embed/Dux8rm-pzRg"},{id:"lonely",title:"Lonely",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=IVnDjPJ8dRg",embed:"https://www.youtube.com/embed/IVnDjPJ8dRg"},{id:"they-aint-coming-home",title:"They Ain't Coming Home",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=Yi4uBFkn0-o",embed:"https://www.youtube.com/embed/Yi4uBFkn0-o"},{id:"mind-on-a-licc",title:"Mind On A Licc",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=sADinuRcRr4",embed:"https://www.youtube.com/embed/sADinuRcRr4"},{id:"dbs-mix",title:"DatBoiSkeet Mix",artist:"DatBoiSkeet",category:"Mixes",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",embed:"https://www.youtube.com/embed/videoseries?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",openLink:"https://www.youtube.com/playlist?list=RDEMDYIvPhQWVGU3Zf3gcxT_4w"},{id:"on-the-radar",title:"On The Radar Interview — Talk of The Town",artist:"DatBoiSkeet",category:"Interviews",youtube:"https://www.youtube.com/watch?v=6IFiHo5HrdE",embed:"https://www.youtube.com/embed/6IFiHo5HrdE"}],Xa=[{id:"dbs-mix",title:"DatBoiSkeet Mix",blurb:"Official channel Music Videos playlist embed (stable). YouTube Radio Mix link kept as Play on YouTube — RD mixes often fail to embed.",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",embed:"https://www.youtube.com/embed/videoseries?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",openLink:"https://www.youtube.com/playlist?list=RDEMDYIvPhQWVGU3Zf3gcxT_4w",source:"channel-pl-music-videos + user-t96u openLink"}],qa=[{id:"pl-music-videos",title:"DatBoiSkeet Music Videos",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t"},{id:"pl-interviews",title:"DatBoiSkeet Interviews",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQHoRjRTD58TpLGqm0XMsa7U"},{id:"pl-vlogs",title:"DatBoiSkeet Vlogs",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQEqroQ8LYGLgpDfzK3pyutQ"}],ko=[{category:"Interviews",title:"Off The Porch (no verified DatBoiSkeet YouTube URL yet — add via Admin)"},{category:"Behind the Scenes",title:"BTS clips (coming soon)"},{category:"Exclusive Videos",title:"Vault / member exclusives (coming soon)"}],de={youtube:"https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA",youtubeHandle:"https://www.youtube.com/@DatBoiSkeet1",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA",spotify:"https://open.spotify.com/artist/0Po64h8VleQOR97okM68zh",apple:"https://music.apple.com/us/artist/datboiskeet/1270542870"},yt=[{id:"stream-dirty-money",title:"Dirty Money (feat. Lil Baby)",artist:"DatBoiSkeet",type:"single",year:2018,albumNote:"From Broke Is the Root of All Evil",cover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/7a/67/2a7a676e-af85-489e-55fd-2bae2793948b/datboiskeet-bitroae-cover-3000px.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/17Pw88uBIWpgOVCfhEyszG",apple:"https://music.apple.com/us/song/dirty-money-feat-lil-baby/1395681218",youtubeMusic:"https://music.youtube.com/watch?v=-rHDLWfiuDI",youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI"}},{id:"stream-93",title:"93 (feat. DaBaby)",artist:"DatBoiSkeet",type:"single",year:2019,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/19/60/5f/19605f4c-7014-6dbc-ca18-baa2a672c697/194923194110.png/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/3gKwZybDOkUoz2wXquDHVZ",apple:"https://music.apple.com/us/album/93-feat-da-baby-single/1493456214",youtubeMusic:"https://music.youtube.com/watch?v=zC0BYFxs5W0",youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0"}},{id:"stream-no-love",title:"No Love (feat. YFN Lucci)",artist:"DatBoiSkeet",type:"single",year:2017,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/49/e5/62/49e56292-e427-3992-84bd-ead0b06fb06a/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/2KqnCXMM0lAMlEv1fDN63o",apple:"https://music.apple.com/us/album/no-love-feat-yfn-lucci-single/1317778810",youtubeMusic:"https://music.youtube.com/watch?v=6pCVEIE9pB8",youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8"}},{id:"stream-broke",title:"Broke Is the Root of All Evil",artist:"DatBoiSkeet",type:"album",year:2018,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/7a/67/2a7a676e-af85-489e-55fd-2bae2793948b/datboiskeet-bitroae-cover-3000px.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/51j6ReXYreCDV0ZwtPdj1Q",apple:"https://music.apple.com/us/album/broke-is-the-root-of-all-evil/1395680910",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}},{id:"stream-talk",title:"Talk of the Town",artist:"DatBoiSkeet",type:"album",year:2020,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/0d/a0/f60da0bf-c3de-8b12-5cd8-e8c1d3c2053b/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/4OY5rM0TBPDsC4n8Dka4Gr",apple:"https://music.apple.com/us/album/talk-of-the-town/1541180619",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}},{id:"stream-said-you-love-me",title:"Said You Love Me",artist:"DatBoiSkeet",type:"single",year:2025,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f4/4f/6b/f44f6b18-dff9-0486-e6e6-a615724e02fe/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/7FhoRIzhuGgmt2pZlWMc5c",apple:"https://music.apple.com/us/album/said-you-love-me-single/1835164001",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}}],Pt=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",status:"Coming Soon",order:1},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",status:"Coming Soon",order:2}],wo=[{id:"vault-long-story-short",title:"Long Story Short (Vault Preview)",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",tier:"skeet+",status:"Coming Soon"},{id:"vault-ladies-only",title:"Ladies Only (Vault Exclusive)",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",tier:"backstage",status:"Coming Soon"}],Li=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",price:1.29,status:"Coming Soon"},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",price:1.29,status:"Coming Soon"}],Oe=[{id:"hat-716-orange",name:"716 Buffalo Braves Snapback (Black/Orange)",price:30,category:"Hats",image:"/merch/01_black_orange_716_hat.jpeg",shopUrl:"https://foreignx-change.com"},{id:"hat-716-blue",name:"716 Buffalo Hat (Blue/Red)",price:30,category:"Hats",image:"/merch/02_blue_red_716_hat.jpeg",shopUrl:"https://foreignx-change.com"},{id:"jacket-blue",name:"Buffalo Sports Varsity Jacket (Blue/White)",price:200,category:"Jackets",image:"/merch/03_blue_buffalo_jacket.jpeg",shopUrl:"https://foreignx-change.com"},{id:"jacket-black",name:"Foreign X-Change Buffalo Varsity (Black/White)",price:200,category:"Jackets",image:"/merch/07_black_buffalo_jacket.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-fx-back",name:"Foreign X-Change Graphic Tee (Back)",price:65,category:"Shirts",image:"/merch/04_black_fx_tee_back_screenshot.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-fx-front",name:"Foreign X-Change Text Tee (Front)",price:65,category:"Shirts",image:"/merch/05_black_fx_tee_front_screenshot.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-ptsd",name:"PTSD Tee (Black)",price:65,category:"Shirts",image:"/merch/06_black_ptsd_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-abstract",name:"Abstract FX Tee (White)",price:65,category:"Shirts",image:"/merch/08_white_abstract_fx_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-dealer",name:"Support Your Local Dealer Tee (Navy)",price:65,category:"Shirts",image:"/merch/09_navy_dealer_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-skulls",name:"Skulls FX Tee (White)",price:65,category:"Shirts",image:"/merch/10_white_skulls_tee.jpeg",shopUrl:"https://foreignx-change.com"}],Os=[{id:"frame-chrome-crown",name:"Chrome Crown",category:"frames",rarity:"legendary",price:12.99,emoji:"👑"},{id:"frame-iced-out",name:"Iced Out",category:"frames",rarity:"epic",price:9.99,emoji:"💎"},{id:"frame-trap-flame",name:"Trap Flame",category:"frames",rarity:"epic",price:7.99,emoji:"🔥"},{id:"frame-rodeo-gold",name:"Rodeo Gold",category:"frames",rarity:"rare",price:5.99,emoji:"🤠"},{id:"frame-rose-petals",name:"Rose Petals",category:"frames",rarity:"rare",price:4.99,emoji:"🌹"},{id:"fx-bass-pulse",name:"Bass Pulse",category:"effects",rarity:"epic",price:8.99,emoji:"🎵"},{id:"fx-snowfall",name:"Snowfall",category:"effects",rarity:"rare",price:5.99,emoji:"❄️"},{id:"fx-city-lights",name:"City Lights",category:"effects",rarity:"epic",price:7.99,emoji:"🌃"},{id:"fx-holo-glitch",name:"Holographic Glitch",category:"effects",rarity:"legendary",price:14.99,emoji:"✨"},{id:"ban-skyline",name:"City Skyline",category:"banners",rarity:"rare",price:4.99,emoji:"🏙️"},{id:"ban-studio",name:"Studio Booth",category:"banners",rarity:"rare",price:4.99,emoji:"🎙️"},{id:"ban-arena",name:"Arena Lights",category:"banners",rarity:"epic",price:6.99,emoji:"🏟️"},{id:"ban-chrome",name:"Luxury Chrome",category:"banners",rarity:"legendary",price:11.99,emoji:"🪞"},{id:"name-chrome",name:"Chrome Name",category:"name styles",rarity:"epic",price:6.99,emoji:"🅰️"},{id:"name-neon",name:"Neon Name",category:"name styles",rarity:"rare",price:3.99,emoji:"💜"},{id:"name-varsity",name:"Bold Varsity",category:"name styles",rarity:"rare",price:3.99,emoji:"🏟️"},{id:"name-western",name:"Western Script",category:"name styles",rarity:"epic",price:5.99,emoji:"🏜️"},{id:"badge-dayone",name:"Day One (cosmetic style)",category:"badges",rarity:"rare",price:2.99,emoji:"1️⃣"},{id:"badge-topfan",name:"Top Fan (cosmetic style)",category:"badges",rarity:"epic",price:4.99,emoji:"⭐"},{id:"badge-backstage",name:"Backstage Glow",category:"badges",rarity:"epic",price:5.99,emoji:"🎫"}],So=[{id:"all",label:"All"},{id:"frames",label:"Frames"},{id:"effects",label:"Effects"},{id:"banners",label:"Banners"},{id:"name styles",label:"Name styles"},{id:"badges",label:"Badges"}],Tn=[{id:"skeet",name:"Skeet+",price:3.99,blurb:"Early DatBoiSkeet releases · basic Vault"},{id:"backstage",name:"Backstage",price:7.99,blurb:"Deeper Vault · studio lives · listening rooms"},{id:"inner",name:"Inner Circle",price:14.99,blurb:"VIP drops · private Q&As · Inner Circle rooms"}],$o=[{label:"Long Story Short",src:"/music/01_Long_Story_Short_Coming_Soon.jpg"},{label:"Ladies Only",src:"/music/02_Ladies_Only_Coming_Soon.jpg"},{label:"716 Orange Hat",src:"/merch/01_black_orange_716_hat.jpeg"},{label:"716 Blue Hat",src:"/merch/02_blue_red_716_hat.jpeg"},{label:"Blue Jacket",src:"/merch/03_blue_buffalo_jacket.jpeg"},{label:"PTSD Tee",src:"/merch/06_black_ptsd_tee.jpeg"}],xo=[{route:"/explore",title:"Explore",blurb:"Discover DatBoiSkeet · creators · drops"},{route:"/music",title:"Music",blurb:"Long Story Short · Ladies Only · Vault"},{route:"/videos",title:"Videos",blurb:"Official DatBoiSkeet MVs"},{route:"/posts",title:"Posts",blurb:"Text · Picture · Short · Video"},{route:"/shorts",title:"Shorts",blurb:"Under Posts · quick clips"},{route:"/live",title:"Live",blurb:"Go live · TEST MODE demo"},{route:"/shop",title:"PIKK Shop",blurb:"Foreign X-Change merch · external checkout"},{route:"/community",title:"PIKK Lounge",blurb:"Artist-owned rooms · Phase 2"},{route:"/music",title:"Vault",blurb:"Member exclusives · Coming Soon",hash:"vault"},{route:"/marketplace",title:"Marketplace",blurb:"Brand ads & sponsored offers"},{route:"/missions",title:"Missions",blurb:"Clipper promo campaigns"},{route:"/clippers",title:"Clippers",blurb:"Apply · cut clips · earn"}],Dn=[{id:"home",label:"Home",href:"#/home"},{id:"explore",label:"Explore",href:"#/explore"},{id:"profile",label:"Profile / Sign in",href:"#/profile"},{id:"watch",label:"Watch",links:[{href:"#/videos",label:"Videos"},{href:"#/live",label:"Live"},{href:"#/openmic",label:"Open Mic / Talent Discovery (24/7)"},{href:"#/spotlight",label:"Spotlight (24/7)"},{href:"#/multiguest",label:"Multi-Guest Live"}]},{id:"music",label:"Music",links:[{href:"#/music",label:"Music & Vault"}]},{id:"social",label:"Social",links:[{href:"#/posts",label:"Posts"},{href:"#/posts?compose=1",label:"Post · Text / Picture / Short / Video"},{href:"#/shorts",label:"Shorts (in Posts)"},{href:"#/notifications",label:"Notifications"},{href:"#/connect",label:"Connect"},{href:"#/dating",label:"Dating & Connections"},{href:"#/community",label:"Community / Lounge"}]},{id:"messages",label:"Messages",href:"#/messages"},{id:"games",label:"Games",links:[{href:"#/games",label:"PIKK Arcade · 15 Games Coming Soon"},{href:"#/blockwars",label:"Block Wars · Coming Soon"}]},{id:"shop",label:"Shop",links:[{href:"#/merch",label:"Foreign X-Change Merch"},{href:"#/marketplace",label:"Marketplace"},{href:"#/shop",label:"PIKK Shop"},{href:"#/profile-shop",label:"Profile Shop · cosmetics"}]},{id:"earn",label:"Creators & Earnings",links:[{href:"#/wallet",label:"Wallet"},{href:"#/earnings",label:"Creator Earnings"},{href:"#/missions",label:"Missions"},{href:"#/clippers",label:"Clippers Apply"},{href:"#/share",label:"Share & Earn"},{href:"#/refer",label:"Refer & Earn"},{href:"#/pricing",label:"Pricing (rules & fees)"}]},{id:"account",label:"Account",links:[{href:"#/profile",label:"Profile"},{href:"#/signup",label:"Signup / Creator Apps"},{href:"#/loyalty",label:"Loyalty Club"},{href:"#/fanclubs",label:"Fan Clubs"},{href:"#/guidelines",label:"Community Guidelines"}]},{id:"studio",label:"Studio / Owner",links:[{href:"#/admin",label:"Admin"},{href:"#/phases",label:"Development Phases"},{href:"#/launch",label:"Launch Readiness"}]}];Dn.flatMap(e=>e.href?[{href:e.href,label:e.label}]:e.links||[]);const Eo=[{href:"#/music",label:"Music",icon:"music"},{href:"#/videos",label:"Videos",icon:"videos"},{href:"#/connect",label:"Connect",icon:"profile"},{href:"#/create",label:"Create",icon:"live",primary:!0},{href:"#/dating",label:"Dating",icon:"heart"},{href:"#/games",label:"Games",icon:"game"},{href:"#/shop",label:"Shop",icon:"merch"}],Mn="dbs_v1",rs=()=>({user:null,profiles:{dbs:{id:"dbs",username:"DatBoiSkeet",bio:"Official DatBoiSkeet · Long Story Short & Ladies Only Coming Soon · Vault · Foreign X-Change",avatar:"/brand/logo-dbs-v3@2x.webp",followers:[],following:[],verified:!0}},posts:[],comments:{},likes:{},clipperApps:[],creatorSellApps:[],brandApps:[],listings:[],live:null,liveHistory:[],liveSongRequests:[],coins:{balance:0,history:[]},liveGiftLedger:[],liveGbChallengePop:null,threads:{},demoUnreadSeeded:!1,messagePrefs:{allowDMs:!0,allowRequests:!0},notifications:{releases:!0,lives:!0,messages:!0,quietHours:!1},wallet:{balance:0,history:[]},creatorWallet:{available:0,holds:0,threshold:25,verification:"demo_unverified",earnings:[],payouts:[]},catalog:[],missions:[],giftBattles:{active:null,history:[],champions:[],prefs:{invitationsEnabled:!0}},multiGuest:{active:null,history:[]},spotlight:{nowPlaying:null,queue:[],history:[],houseIndex:0},fanClubs:{clubs:[],posts:{},seeded:!1},shareEarn:{platformsLinked:[],challenge:null,submissions:[],rewardsClaimed:[]},referEarn:{code:"",invitees:[],milestonesClaimed:[]},restream:{platforms:{},selected:[],session:null,history:[],ingest:null,campaign:{tier:null,status:"none",enrolledAt:null,cancelledAt:null},campaignConfig:null},loyalty:{points:0,history:[],badges:[],publicVisible:!0,lastActionAt:{},dayCounts:{}},openMic:{applications:[],seeded:!1,houseIndex:0},profileShop:{owned:[],equipped:{},reduceMotion:!1},hotFeed:{lives:[],posts:[],seededLives:!1,seededPosts:!1,seededPostsVer:0},engagementAlerts:[],postShares:{},splashSeenAt:0,dailyGoals:{app:null,liveByHost:{},history:[]}});function Ao(){var e,t,s,a,i,n,o,l,d,c,u,m,g,f,b,y,v,w,x,D,k,M,$,B,E,N,ce,G,ke,xe,L,P,q,z,H,F,V,we,Ee,Ve,Ue,dt,pt,ut,mt,X,Ae,_e,Cs,A,De;try{const Ht=localStorage.getItem(Mn);if(!Ht)return rs();const S=JSON.parse(Ht),te=rs();return{...te,...S,profiles:{...te.profiles,...S.profiles||{}},notifications:{...te.notifications,...S.notifications||{}},wallet:{...te.wallet,...S.wallet||{}},creatorWallet:{...te.creatorWallet,...S.creatorWallet||{},earnings:Array.isArray((e=S.creatorWallet)==null?void 0:e.earnings)?S.creatorWallet.earnings:[],payouts:Array.isArray((t=S.creatorWallet)==null?void 0:t.payouts)?S.creatorWallet.payouts:[],available:Number((s=S.creatorWallet)==null?void 0:s.available)||0,holds:Number((a=S.creatorWallet)==null?void 0:a.holds)||0,threshold:Number((i=S.creatorWallet)==null?void 0:i.threshold)>0?Number(S.creatorWallet.threshold):25,verification:((n=S.creatorWallet)==null?void 0:n.verification)==="demo_verified"?"demo_verified":"demo_unverified"},brandApps:S.brandApps||[],listings:Array.isArray(S.listings)?S.listings:[],live:S.live??null,liveHistory:Array.isArray(S.liveHistory)?S.liveHistory:[],liveSongRequests:Array.isArray(S.liveSongRequests)?S.liveSongRequests:[],coins:{balance:Number((o=S.coins)==null?void 0:o.balance)||0,history:Array.isArray((l=S.coins)==null?void 0:l.history)?S.coins.history:[]},liveGiftLedger:Array.isArray(S.liveGiftLedger)?S.liveGiftLedger:[],liveGbChallengePop:S.liveGbChallengePop||null,threads:{...S.threads||{}},demoUnreadSeeded:!!S.demoUnreadSeeded,messagePrefs:{...te.messagePrefs,...S.messagePrefs||{}},catalog:Array.isArray(S.catalog)?S.catalog:[],missions:Array.isArray(S.missions)?S.missions:[],giftBattles:{...te.giftBattles,...S.giftBattles||{},history:Array.isArray((d=S.giftBattles)==null?void 0:d.history)?S.giftBattles.history:[],champions:Array.isArray((c=S.giftBattles)==null?void 0:c.champions)?S.giftBattles.champions:[],prefs:{...te.giftBattles.prefs,...((u=S.giftBattles)==null?void 0:u.prefs)||{}},active:((m=S.giftBattles)==null?void 0:m.active)??null},multiGuest:{...te.multiGuest,...S.multiGuest||{},history:Array.isArray((g=S.multiGuest)==null?void 0:g.history)?S.multiGuest.history:[],active:((f=S.multiGuest)==null?void 0:f.active)??null},fanClubs:{...te.fanClubs,...S.fanClubs||{},clubs:Array.isArray((b=S.fanClubs)==null?void 0:b.clubs)?S.fanClubs.clubs:[],posts:(y=S.fanClubs)!=null&&y.posts&&typeof S.fanClubs.posts=="object"?S.fanClubs.posts:{},seeded:!!((v=S.fanClubs)!=null&&v.seeded)},shareEarn:{...te.shareEarn,...S.shareEarn||{},platformsLinked:Array.isArray((w=S.shareEarn)==null?void 0:w.platformsLinked)?S.shareEarn.platformsLinked:[],challenge:((x=S.shareEarn)==null?void 0:x.challenge)??null,submissions:Array.isArray((D=S.shareEarn)==null?void 0:D.submissions)?S.shareEarn.submissions:[],rewardsClaimed:Array.isArray((k=S.shareEarn)==null?void 0:k.rewardsClaimed)?S.shareEarn.rewardsClaimed:[]},referEarn:{...te.referEarn,...S.referEarn||{},code:typeof((M=S.referEarn)==null?void 0:M.code)=="string"?S.referEarn.code:"",invitees:Array.isArray(($=S.referEarn)==null?void 0:$.invitees)?S.referEarn.invitees:[],milestonesClaimed:Array.isArray((B=S.referEarn)==null?void 0:B.milestonesClaimed)?S.referEarn.milestonesClaimed:[]},restream:{...te.restream,...S.restream||{},platforms:(E=S.restream)!=null&&E.platforms&&typeof S.restream.platforms=="object"?S.restream.platforms:{},selected:Array.isArray((N=S.restream)==null?void 0:N.selected)?S.restream.selected:[],session:((ce=S.restream)==null?void 0:ce.session)??null,history:Array.isArray((G=S.restream)==null?void 0:G.history)?S.restream.history:[],ingest:((ke=S.restream)==null?void 0:ke.ingest)??null,campaign:{...te.restream.campaign,...((xe=S.restream)==null?void 0:xe.campaign)||{}},campaignConfig:((L=S.restream)==null?void 0:L.campaignConfig)??null},loyalty:{...te.loyalty,...S.loyalty||{},points:Number((P=S.loyalty)==null?void 0:P.points)||0,history:Array.isArray((q=S.loyalty)==null?void 0:q.history)?S.loyalty.history:[],badges:Array.isArray((z=S.loyalty)==null?void 0:z.badges)?S.loyalty.badges:[],publicVisible:((H=S.loyalty)==null?void 0:H.publicVisible)===void 0?!0:!!S.loyalty.publicVisible,lastActionAt:(F=S.loyalty)!=null&&F.lastActionAt&&typeof S.loyalty.lastActionAt=="object"?S.loyalty.lastActionAt:{},dayCounts:(V=S.loyalty)!=null&&V.dayCounts&&typeof S.loyalty.dayCounts=="object"?S.loyalty.dayCounts:{}},openMic:{...te.openMic,...S.openMic||{},applications:Array.isArray((we=S.openMic)==null?void 0:we.applications)?S.openMic.applications:[],seeded:!!((Ee=S.openMic)!=null&&Ee.seeded),houseIndex:typeof((Ve=S.openMic)==null?void 0:Ve.houseIndex)=="number"?S.openMic.houseIndex:0},profileShop:{...te.profileShop,...S.profileShop||{},owned:Array.isArray((Ue=S.profileShop)==null?void 0:Ue.owned)?S.profileShop.owned:[],equipped:(dt=S.profileShop)!=null&&dt.equipped&&typeof S.profileShop.equipped=="object"?S.profileShop.equipped:{},reduceMotion:!!((pt=S.profileShop)!=null&&pt.reduceMotion)},hotFeed:{...te.hotFeed,...S.hotFeed||{},lives:Array.isArray((ut=S.hotFeed)==null?void 0:ut.lives)?S.hotFeed.lives:[],posts:Array.isArray((mt=S.hotFeed)==null?void 0:mt.posts)?S.hotFeed.posts:[],seededLives:!!((X=S.hotFeed)!=null&&X.seededLives),seededPosts:!!((Ae=S.hotFeed)!=null&&Ae.seededPosts),seededPostsVer:Number((_e=S.hotFeed)==null?void 0:_e.seededPostsVer)||0},engagementAlerts:Array.isArray(S.engagementAlerts)?S.engagementAlerts:[],postShares:S.postShares&&typeof S.postShares=="object"?S.postShares:{},creatorSellApps:Array.isArray(S.creatorSellApps)?S.creatorSellApps:[],dailyGoals:{...te.dailyGoals,...S.dailyGoals||{},app:((Cs=S.dailyGoals)==null?void 0:Cs.app)??null,liveByHost:(A=S.dailyGoals)!=null&&A.liveByHost&&typeof S.dailyGoals.liveByHost=="object"?S.dailyGoals.liveByHost:{},history:Array.isArray((De=S.dailyGoals)==null?void 0:De.history)?S.dailyGoals.history:[]}}}catch{return rs()}}function C(e){localStorage.setItem(Mn,JSON.stringify(e))}let p=Ao();function T(){return p}function Pi(e){return p={...p,...e},C(p),p}function Co(e){return p=e(p)||p,C(p),p}function nt(e){e&&(p={...p,profiles:{...p.profiles,[e.id]:{id:e.id,username:e.username,bio:e.bio||"",avatar:e.avatar||"",followers:e.followers||[],following:e.following||[],memberships:e.memberships||{},verified:!!e.verified}}})}function St(e){return e?p.user&&p.user.id===e?p.user:p.profiles[e]||null:null}function Ii(e){const t=St(e);return t?(t.followers||[]).map(s=>St(s)||{id:s,username:s}).filter(Boolean):[]}function Ba(e){const t=St(e);return t?(t.following||[]).map(s=>St(s)||{id:s,username:s}).filter(Boolean):[]}function Ln(){if(p.posts.length)return;const e=[{id:"p1",userId:"dbs",username:"DatBoiSkeet",text:"Long Story Short — cover is up. Coming Soon on DBS Music. Stay ready.",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",at:Date.now()-864e5*2},{id:"p2",userId:"dbs",username:"DatBoiSkeet",text:"Foreign X-Change — hats, tees & jackets. Checkout on ForeignX-Change.com (not inside DBS).",image:"/merch/01_black_orange_716_hat.jpeg",at:Date.now()-864e5},{id:"p3",userId:"dbs",username:"DatBoiSkeet",text:"Ladies Only — cover art live. Official playback unlocks when the single drops.",image:"/music/02_Ladies_Only_Coming_Soon.jpg",at:Date.now()-864e5*3},{id:"p4",userId:"dbs",username:"DatBoiSkeet",text:"716 Buffalo Braves snapback on Foreign X-Change — shop the external store.",image:"/merch/02_blue_red_716_hat.jpeg",at:Date.now()-864e5*4}];p={...p,posts:e,likes:{p1:[],p2:[],p3:[],p4:[]},comments:{p1:[],p2:[],p3:[],p4:[]}},C(p)}function Nt(e){const t=(e||"Fan").trim().slice(0,24)||"Fan",s="u_"+t.toLowerCase().replace(/\W+/g,"_")+"_"+Date.now().toString(36),a={id:s,username:t,bio:"DBS fan · local demo account (TEST MODE)",avatar:"",followers:[],following:["dbs"],membership:null,memberships:{skeetPlus:!1,backstage:!1,innerCircle:!1},purchasedTracks:[],createdAt:Date.now()},i=p.profiles.dbs||rs().profiles.dbs,n=new Set(i.followers||[]);return n.add(s),p={...p,user:a,profiles:{...p.profiles,dbs:{...i,followers:[...n]}}},nt(a),C(p),a}function To(){p={...p,user:null},C(p)}function Do({bio:e,avatar:t,username:s}){const a=p.user;if(!a)return{error:"signin"};const i={...a,bio:e!==void 0?String(e).slice(0,280):a.bio,avatar:t!==void 0?String(t).trim():a.avatar,username:s!==void 0&&String(s).trim().slice(0,24)||a.username};return p={...p,user:i},nt(i),C(p),i}function ta(e,t=!0){const s=p.user;if(!s)return{error:"signin"};let a=s.membership??null;const i=c=>c==="skeet"||c==="skeetPlus"||c==="skeet+"?"skeet+":c==="backstage"?"backstage":c==="inner"||c==="innerCircle"?"inner":null,n={null:0,"skeet+":1,backstage:2,inner:3},o=i(e);t?o&&(a=o):a=null;const l={skeetPlus:n[a||"null"]>=1,backstage:n[a||"null"]>=2,innerCircle:n[a||"null"]>=3},d={...s,membership:a,memberships:l};return p={...p,user:d},nt(d),C(p),d}function xt(){const e=p.user;if(!e)return null;if(e.membership)return e.membership;const t=e.memberships||{};return t.innerCircle?"inner":t.backstage?"backstage":t.skeetPlus?"skeet+":null}function Oa(e="skeet"){const t=xt(),s={null:0,"skeet+":1,backstage:2,inner:3},a=e==="backstage"?2:e==="inner"?3:1;return(s[t||"null"]||0)>=a}function Mo(e){const t=p.user;if(!t)return{error:"signin"};const s=new Set(t.purchasedTracks||[]);s.add(e);const a={...t,purchasedTracks:[...s]};return p={...p,user:a},nt(a),C(p),a}function _i({text:e,image:t,mediaType:s,mediaUrl:a}){const i=p.user;if(!i)throw new Error("Sign in required");const n="p_"+Date.now().toString(36),o=["picture","short","video","image","text"].includes(s)?s==="image"?"picture":s:t?"picture":"text",l={id:n,userId:i.id,username:i.username,text:(e||"").trim(),image:(t||"").trim(),mediaType:o==="text"&&!(t||"").trim()?"text":o,mediaUrl:(a||"").trim(),at:Date.now()};return p={...p,posts:[l,...p.posts],likes:{...p.likes,[n]:[]},comments:{...p.comments,[n]:[]}},C(p),l}function Lo(e){const t=p.user;if(!t)return{error:"signin"};const s=new Set(p.likes[e]||[]);s.has(t.id)?s.delete(t.id):s.add(t.id),p={...p,likes:{...p.likes,[e]:[...s]}},C(p);try{je()}catch{}return{count:s.size,liked:s.has(t.id)}}function Po(e,t){const s=p.user;if(!s)return{error:"signin"};const a={id:"c_"+Date.now().toString(36),userId:s.id,username:s.username,text:t.trim(),at:Date.now()},i=p.comments[e]||[];p={...p,comments:{...p.comments,[e]:[...i,a]}},C(p);try{je()}catch{}return a}function sa(e){const t=p.user;if(!t)return{error:"signin"};if(e===t.id)return{error:"self"};if(t.following.includes(e))return t;const s={...t,following:[...t.following,e]},a={...p.profiles},i=a[e]||St(e);if(i){const n=new Set(i.followers||[]);n.add(t.id),a[e]={...i,followers:[...n]}}return p={...p,user:s,profiles:a},nt(s),C(p),s}function aa(e){const t=p.user;if(!t)return{error:"signin"};const s={...t,following:(t.following||[]).filter(n=>n!==e)},a={...p.profiles},i=a[e]||St(e);return i&&(a[e]={...i,followers:(i.followers||[]).filter(n=>n!==t.id)}),p={...p,user:s,profiles:a},nt(s),C(p),s}function Io(e){const t={id:"clip_"+Date.now().toString(36),...e,status:"pending",at:Date.now()};return p={...p,clipperApps:[t,...p.clipperApps]},C(p),t}function _o(e){const t=e||{},s=String(t.name||"").trim().slice(0,80),a=String(t.contact||t.email||t.handle||"").trim().slice(0,120),i=String(t.sells||"both").trim().slice(0,40),n=!!t.agreed;if(!s||!a)return{error:"missing"};if(!n)return{error:"rules"};const o={id:"csa_"+Date.now().toString(36),name:s,contact:a,sells:["music","merch","both"].includes(i)?i:"both",agreed:!0,status:"pending",at:Date.now()},l=[o,...p.creatorSellApps||[]].slice(0,40);return p={...p,creatorSellApps:l},C(p),{ok:!0,app:o}}function Pn(e,t){if(!["pending","approved","rejected","waitlisted"].includes(t))return{error:"bad_status"};const a=p.clipperApps.map(i=>i.id===e?{...i,status:t,reviewedAt:Date.now()}:i);return p={...p,clipperApps:a},C(p),a.find(i=>i.id===e)}function qo(e){p={...p,notifications:{...p.notifications,...e}},C(p)}function Bo(){p={...p,splashSeenAt:Date.now()},C(p)}function Oo(){return!p.splashSeenAt}function ee(){return!!(p.user&&p.user.role==="admin")}function bs(e=!0){const t=p.user;if(!t)return{error:"signin"};const s={...t,role:e?"admin":"fan"};return p={...p,user:s},nt(s),C(p),s}function In(){var l;const e=p.posts||[],t=p.clipperApps||[],s={pending:0,approved:0,rejected:0,waitlisted:0};t.forEach(d=>{const c=d.status||"pending";s[c]!==void 0?s[c]+=1:s.pending+=1});let a=0;Object.values(p.likes||{}).forEach(d=>{a+=(d||[]).length});let i=0;Object.values(p.comments||{}).forEach(d=>{i+=(d||[]).length});let n=0;p.user&&(p.user.membership||(l=p.user.memberships)!=null&&l.skeetPlus)&&(n+=1),Object.values(p.profiles||{}).forEach(d=>{var c,u;d.id!==((c=p.user)==null?void 0:c.id)&&(d.membership||(u=d.memberships)!=null&&u.skeetPlus)&&(n+=1)});const o=p.catalog||[];return{posts:e.length,likes:a,comments:i,clippers:t.length,clipperByStatus:s,members:n,profiles:Object.keys(p.profiles||{}).length,catalogTotal:o.length,catalogPublished:o.filter(d=>d.published).length}}function _n(e){const t=["spotify","apple","youtubeMusic","youtube","tidal","amazon"],s={};if(!e||typeof e!="object")return s;for(const a of t){const i=String(e[a]||"").trim();(i.startsWith("http://")||i.startsWith("https://"))&&(s[a]=i.slice(0,500))}return s}function wt({publishedOnly:e=!1,types:t=null,includeUnpublishedForAdmin:s=!1}={}){let a=p.catalog||[];if(e?a=a.filter(i=>i.published):s||(a=a.filter(i=>i.published)),t&&t.length){const i=new Set(t);a=a.filter(n=>i.has(n.type))}return[...a].sort((i,n)=>(n.createdAt||0)-(i.createdAt||0))}function No(e){var a;if(!ee())return{error:"forbidden"};const s={id:e.id||"cat_"+Date.now().toString(36),type:e.type,title:String(e.title||"").trim().slice(0,120),artist:String(e.artist).trim().slice(0,80),coverRef:e.coverRef||"",mediaRef:e.mediaRef||"",youtube:String(e.youtube||"").trim(),embed:String(e.embed||"").trim(),streamingLinks:_n(e.streamingLinks),published:!!e.published,createdAt:Date.now(),updatedAt:Date.now(),createdBy:((a=p.user)==null?void 0:a.id)||null};return s.title?["song","album","video","picture"].includes(s.type)?(p={...p,catalog:[s,...p.catalog||[]]},C(p),s):{error:"type"}:{error:"title"}}function qn(e,t){if(!ee())return{error:"forbidden"};let s=null;const a=(p.catalog||[]).map(i=>{if(i.id!==e)return i;const n={...i,...t,id:i.id,updatedAt:Date.now()};return t&&Object.prototype.hasOwnProperty.call(t,"streamingLinks")&&(n.streamingLinks=_n(t.streamingLinks)),s=n,s});return s?(p={...p,catalog:a},C(p),s):{error:"missing"}}function Ro(e,t){return qn(e,{published:!!t})}function jo(e){if(!ee())return{error:"forbidden"};const t=(p.catalog||[]).filter(s=>s.id!==e);return p={...p,catalog:t},C(p),!0}function qi(e){const t=p.user;if(!t)return{error:"signin"};if(p.live&&!p.live.endedAt)return{error:"already_live",live:p.live};const s={id:"live_"+Date.now().toString(36),hostId:t.id,hostName:t.username,title:(e||"DBS Live · TEST MODE").trim().slice(0,80),startedAt:Date.now(),viewers:3+Math.floor(Math.random()*18),giftsTotal:0,tipsTotal:0,giftLog:[],chat:[{id:"sys1",userId:"system",username:"DBS",text:"Welcome · Follow DatBoiSkeet · TEST MODE (no real stream)",at:Date.now()}],endedAt:null};return p={...p,live:s},C(p),s}function Fo(){if(!p.live||p.live.endedAt)return p.live;const e={...p.live,endedAt:Date.now()},t=[e,...p.liveHistory||[]].slice(0,20);return p={...p,live:e,liveHistory:t},C(p),e}function Ko(){if(!p.live||p.live.endedAt)return p.live;const e=Math.floor(Math.random()*5)-1,t=Math.max(1,(p.live.viewers||1)+e),s={...p.live,viewers:t};return p={...p,live:s},C(p),s}function Go(e){const t=p.user;if(!t)return{error:"signin"};if(!p.live||p.live.endedAt)return{error:"offline"};const s={id:"lc_"+Date.now().toString(36),userId:t.id,username:t.username,text:String(e||"").trim().slice(0,280),at:Date.now()};if(!s.text)return{error:"empty"};const a={...p.live,chat:[...p.live.chat||[],s]};return p={...p,live:a},C(p),s}function Bn({kind:e="tip",amount:t=1,label:s=""}={}){var m;const a=p.user;if(!a)return{error:"signin"};if(!p.live||p.live.endedAt)return{error:"offline"};const i=Math.max(.5,Number(t)||1),n=e==="gift"?"gift":"tip",o=((m=p.wallet)==null?void 0:m.balance)||0;let l=p.wallet||{balance:0,history:[]};o>=i&&(l={balance:+(o-i).toFixed(2),history:[...l.history||[],{at:Date.now(),amount:-i,note:`Live ${n} · ${p.live.title}`}]});const d={id:"lg_"+Date.now().toString(36),userId:a.id,username:a.username,kind:n,amount:i,label:(s||(n==="gift"?"🔥 Fire":"Tip")).slice(0,40),at:Date.now()},c={id:"lc_"+Date.now().toString(36)+"g",userId:a.id,username:a.username,text:n==="gift"?`sent ${d.label} ($${i.toFixed(2)}) · TEST MODE`:`tipped $${i.toFixed(2)} · TEST MODE`,at:Date.now(),support:!0},u={...p.live,giftsTotal:(p.live.giftsTotal||0)+(n==="gift"?i:0),tipsTotal:(p.live.tipsTotal||0)+(n==="tip"?i:0),giftLog:[...p.live.giftLog||[],d],chat:[...p.live.chat||[],c]};return p={...p,live:u,wallet:l},C(p),o>=i&&ri({category:n==="gift"?"gifts":"tips",gross:i,note:`Live ${n} from @${a.username} · ${p.live.title}`,source:"live"}),{live:u,entry:d,wallet:p.wallet,creatorWallet:p.creatorWallet}}function Vo(){return p.liveHistory||[]}const On=[{pack:1,price:10,label:"1 song",save:0},{pack:2,price:25,label:"2 songs",save:0},{pack:3,price:45,label:"3 songs",save:5}];function os(){return Array.isArray(p.liveSongRequests)?p.liveSongRequests:[]}function Uo(e){var s;const t=e||((s=p.live)==null?void 0:s.id);return t?os().filter(a=>a.liveId===t):[]}function Za(e){const t=[];for(const s of Uo(e))(s.titles||[]).forEach((a,i)=>{t.push({requestId:s.id,songIndex:i,title:a,status:s.songStatuses&&s.songStatuses[i]||"queued",username:s.username,userId:s.userId,pack:s.pack,price:s.price,at:s.at})});return t}function zo({pack:e,titles:t}={}){var u;const s=p.user;if(!s)return{error:"signin"};if(!p.live||p.live.endedAt)return{error:"offline"};const a=On.find(m=>m.pack===Number(e));if(!a)return{error:"bad_pack"};const i=(Array.isArray(t)?t:[]).map(m=>String(m||"").trim().slice(0,80)).filter(Boolean);if(i.length!==a.pack)return{error:"title_count",need:a.pack,got:i.length};const n=Yn(a.price,`Song request ×${a.pack} · ${p.live.title} · TEST MODE`);if((n==null?void 0:n.error)==="insufficient")return{error:"insufficient",need:a.price,balance:Number(((u=p.wallet)==null?void 0:u.balance)||0)};const o={id:"lsr_"+Date.now().toString(36),liveId:p.live.id,hostId:p.live.hostId,userId:s.id,username:s.username,pack:a.pack,price:a.price,titles:i,songStatuses:i.map(()=>"queued"),status:"open",at:Date.now(),charged:a.price},l=[o,...os()].slice(0,200),d={id:"lc_"+Date.now().toString(36)+"sr",userId:s.id,username:s.username,text:`requested ${a.pack} song${a.pack>1?"s":""} ($${a.price}) · TEST MODE`,at:Date.now(),support:!0},c={...p.live,chat:[...p.live.chat||[],d]};return p={...p,liveSongRequests:l,live:c},C(p),ri({category:"tips",gross:a.price,note:`Song request ×${a.pack} from @${s.username} · ${p.live.title}`,source:"live_song_request"}),{ok:!0,entry:o,wallet:p.wallet,live:p.live}}function ei(e,t,s){var b;const a=p.user;if(!a)return{error:"signin"};if(!["playing","played","skipped","queued"].includes(s))return{error:"bad_status"};const n=os().findIndex(y=>y.id===e);if(n<0)return{error:"missing"};const o=os()[n],l=p.live;if(!(l&&l.hostId===a.id&&l.id===o.liveId||a.id===o.hostId)&&!ee())return{error:"host_only"};const c=Number(t);if(!Number.isInteger(c)||c<0||c>=(o.titles||[]).length)return{error:"bad_index"};let u=[...o.songStatuses||o.titles.map(()=>"queued")];if(s==="playing"){const y=os().map(v=>{if(v.liveId!==o.liveId)return v;const w=[...v.songStatuses||(v.titles||[]).map(()=>"queued")];let x=!1;for(let k=0;k<w.length;k++)w[k]==="playing"&&(w[k]="played",x=!0);if(!x)return v;const D=w.every(k=>k==="played"||k==="skipped");return{...v,songStatuses:w,status:D?"done":"open"}});p={...p,liveSongRequests:y},u=[...((b=p.liveSongRequests[n])==null?void 0:b.songStatuses)||u]}u[c]=s;const m=u.every(y=>y==="played"||y==="skipped"),g={...p.liveSongRequests[n],songStatuses:u,status:m?"done":"open"},f=[...p.liveSongRequests];return f[n]=g,p={...p,liveSongRequests:f},C(p),{ok:!0,entry:g}}function Ho(e,t){return ei(e,t,"playing")}function Wo(e,t){return ei(e,t,"skipped")}function Yo(e,t){return ei(e,t,"played")}const ti=[{slug:"rose",name:"DBS Rose",coins:5,usd:.1,animation:"Rotating glossy rose and petals",tier:"small"},{slug:"big-love",name:"Big Love",coins:25,usd:.5,animation:"Pulsing luminous heart",tier:"small"},{slug:"turn-up",name:"Turn Up",coins:50,usd:1,animation:"Flame burst and DBS sparks",tier:"small"},{slug:"cash-rain",name:"Cash Rain",coins:150,usd:3,animation:"Stylized bills and confetti",tier:"mid"},{slug:"bottle-pop",name:"Bottle Pop",coins:300,usd:6,animation:"Bottle pop and confetti",tier:"mid"},{slug:"money-gun",name:"Money Gun",coins:750,usd:15,animation:"Stylized cash launcher",tier:"premium"},{slug:"diamond-drip",name:"Diamond Drip",coins:1500,usd:30,animation:"Rotating diamond",tier:"premium"},{slug:"foreign-whip",name:"Foreign Whip",coins:3e3,usd:60,animation:"Original luxury vehicle drives across screen",tier:"premium"},{slug:"helicopter",name:"Helicopter",coins:5e3,usd:100,animation:"Helicopter spotlight flyover",tier:"cinematic"},{slug:"private-jet",name:"Private Jet",coins:1e4,usd:200,animation:"Jet cinematic flyover",tier:"cinematic"},{slug:"dbs-crown",name:"DBS Crown",coins:25e3,usd:500,animation:"Gold diamond crown",tier:"cinematic"},{slug:"dbs-universe",name:"DBS Universe",coins:5e4,usd:1e3,animation:"Galaxy DBS logo reveal",tier:"cinematic"}],ia=[{coins:100,usd:2},{coins:500,usd:10},{coins:1e3,usd:20},{coins:2500,usd:50},{coins:5e3,usd:100},{coins:1e4,usd:200}],Qo=750,ya=80,Bi=20;function na(e){return{balance:Math.max(0,Number(e==null?void 0:e.balance)||0),history:Array.isArray(e==null?void 0:e.history)?e.history:[]}}function ra(){return na(p.coins).balance}function Jo(){return ia.map(e=>({...e}))}function Xo(){return ti.map(e=>({...e}))}function Nn(e){const t=ia.find(n=>n.coins===Number(e));if(!t)return{error:"bad_package"};const s=na(p.coins),a={at:Date.now(),amount:t.coins,note:`Bought ${t.coins} coins ($${t.usd}) · TEST MODE`,kind:"buy",packageCoins:t.coins,usd:t.usd},i={balance:s.balance+t.coins,history:[a,...s.history].slice(0,200)};return p={...p,coins:i},C(p),{ok:!0,coins:i,pack:t,entry:a}}function si(){return Array.isArray(p.liveGiftLedger)?p.liveGiftLedger:[]}function Zo(e){var s;const t=e||((s=p.live)==null?void 0:s.id);return t?si().filter(a=>a.liveId===t).map(a=>({id:a.id,liveId:a.liveId,giftSlug:a.giftSlug,giftName:a.giftName,coins:a.coins,usd:a.usd,fromUserId:a.fromUserId,fromUser:a.fromUser,at:a.at,animation:a.animation,tier:a.tier})):[]}function el(e=10,t=Date.now()){const s=Math.min(Math.max(1,Number(e)||10),10),a=new Date(t);a.setHours(0,0,0,0);const i=a.getTime(),n=new Date(t);n.setHours(23,59,59,999);const o=n.getTime(),l={};for(const d of si()){const c=Number(d.at||0);if(c<i||c>o)continue;const u=d.fromUserId||d.fromUser||"anon",m=l[u]||{userId:u,username:d.fromUser||u,usd:0,coins:0,gifts:0,lastSlug:d.giftSlug||"rose"};m.usd=+(m.usd+Number(d.usd||0)).toFixed(2),m.coins+=Number(d.coins||0),m.gifts+=1,m.username=d.fromUser||m.username,m.lastSlug=d.giftSlug||m.lastSlug,l[u]=m}return Object.values(l).sort((d,c)=>c.usd-d.usd||c.coins-d.coins||d.username.localeCompare(c.username)).slice(0,s)}function Rn(e){let s=(ni(p.creatorWallet).earnings||[]).filter(a=>a.category==="gifts");return e&&(s=s.filter(a=>!a.hostId||a.hostId===e)),s.map(a=>({...a}))}function tl({liveId:e,slug:t}={}){const s=p.user;if(!s)return{error:"signin"};const a=p.live;if(!a||a.endedAt)return{error:"offline"};if(e&&e!==a.id)return{error:"live_mismatch"};const i=ti.find(E=>E.slug===t);if(!i)return{error:"bad_gift"};const n=na(p.coins);if(n.balance<i.coins)return{error:"insufficient",need:i.coins,balance:n.balance};const o=_(i.usd),l=0,d=o,c=_(d*ya/100),u=_(d-c),m=Date.now(),g="lgift_"+m.toString(36)+"_"+Math.random().toString(36).slice(2,6),f={at:m,amount:-i.coins,note:`Gift ${i.name} · ${a.title} · TEST MODE`,kind:"gift",giftSlug:i.slug,liveId:a.id,usd:o},b={balance:n.balance-i.coins,history:[f,...n.history].slice(0,200)},y={id:g,liveId:a.id,hostId:a.hostId,giftSlug:i.slug,giftName:i.name,coins:i.coins,usd:o,fees:l,net:d,creatorShare:c,platformShare:u,dbsShare:u,creatorPct:ya,dbsPct:Bi,fromUserId:s.id,fromUser:s.username,at:m,animation:i.animation,tier:i.tier,testModeNetAsListed:!0},v={id:g,userId:s.id,username:s.username,kind:"gift",giftSlug:i.slug,label:i.name,amount:o,coins:i.coins,at:m},w={id:"lc_"+m.toString(36)+"gf",userId:s.id,username:s.username,text:`sent ${i.name} (${i.coins} coins) · TEST MODE`,at:m,support:!0,giftSlug:i.slug},x={...a,giftsTotal:_((a.giftsTotal||0)+o),giftLog:[...a.giftLog||[],v],chat:[...a.chat||[],w]},D=[y,...si()].slice(0,500),k=ni(p.creatorWallet),M={id:"earn_"+m.toString(36)+"_"+Math.random().toString(36).slice(2,6),category:"gifts",label:"Live gifts",note:`Live gift ${i.name} from @${s.username} · ${a.title}`,gross:o,fees:l,net:d,creatorPct:ya,dbsPct:Bi,creatorShare:c,dbsShare:u,source:"live_gift",giftSlug:i.slug,giftId:g,liveId:a.id,hostId:a.hostId,fromUserId:s.id,at:m,payoutId:null},$={...k,available:_(k.available+c),earnings:[M,...k.earnings||[]]},B={id:"gbpop_"+m.toString(36),liveId:a.id,fromUserId:s.id,fromUser:s.username,giftSlug:i.slug,giftName:i.name,coins:i.coins,usd:o,at:m,expiresAt:m+6e4};return p={...p,coins:b,live:x,liveGiftLedger:D,creatorWallet:$,liveGbChallengePop:B},C(p),{ok:!0,entry:y,viewerEntry:v,coins:b,live:x,earning:M,creatorWallet:$,challengePop:B}}const jn=24*60*60*1e3,Oi=50;function oa(e){return{app:e!=null&&e.app&&typeof e.app=="object"?e.app:null,liveByHost:e!=null&&e.liveByHost&&typeof e.liveByHost=="object"?{...e.liveByHost}:{},history:Array.isArray(e==null?void 0:e.history)?e.history:[]}}function us(e,t=Date.now()){return!e||typeof e!="object"?!1:(Number(e.endsAt)||0)>t}function It(e){return e?{...e}:null}function Fn(e){return"goal_"+e+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6)}function ai(e,t){if(!t)return e;const s=[{...t,archivedAt:Date.now()},...e.history||[]].slice(0,40);return{...e,history:s}}function sl(e=Date.now()){return{id:Fn("app"),scope:"app",name:"PIKK daily community goal",targetAmount:50,raised:0,endsAt:e+jn,createdAt:e}}function Vs(e){return p={...p,dailyGoals:e},C(p),e}function Na(e=Date.now()){let t=oa(p.dailyGoals),s=!1;return t.app&&!us(t.app,e)&&(t={...ai(t,t.app),app:null},s=!0),us(t.app,e)||(t={...t,app:sl(e)},s=!0),s&&Vs(t),t.app&&t.app.name==="DBS daily community goal"&&(t={...t,app:{...t.app,name:"PIKK daily community goal"}},Vs(t)),It(t.app)}function al(e,t=Date.now()){var n,o;const s=e||((n=p.live)==null?void 0:n.hostId)||((o=p.user)==null?void 0:o.id)||null;if(!s)return null;let a=oa(p.dailyGoals);const i=a.liveByHost[s]||null;if(i&&!us(i,t)){const l={...a.liveByHost};return delete l[s],a={...ai(a,i),liveByHost:l},Vs(a),null}return It(us(i,t)?i:null)}function Kn({name:e,targetAmount:t}={}){const s=p.user;if(!s)return{error:"signin"};const a=String(e||"").trim().slice(0,80),i=Number(t);if(!a)return{error:"bad_name"};if(!Number.isFinite(i)||i<=0)return{error:"bad_amount"};const n=Date.now();let o=oa(p.dailyGoals);const l=o.liveByHost[s.id];l&&(o=ai(o,l));const d={id:Fn("live"),scope:"live",hostId:s.id,hostName:s.username,name:a,targetAmount:_(i),raised:0,endsAt:n+jn,createdAt:n};return o={...o,liveByHost:{...o.liveByHost,[s.id]:d}},Vs(o),{ok:!0,goal:It(d)}}function Us(e,t){if(!p.user)return{error:"signin"};const a=Math.floor(Number(t));if(!Number.isFinite(a)||a<=0)return{error:"invalid_amount"};const i=String(e||"");if(!i)return{error:"unknown_goal"};const n=Date.now();let o=oa(p.dailyGoals),l=null,d=null,c=null;if(o.app&&o.app.id===i)l="app",c=o.app;else for(const[k,M]of Object.entries(o.liveByHost))if(M&&M.id===i){l="live",d=k,c=M;break}if(!c)return{error:"unknown_goal"};if(!us(c,n))return{error:"expired"};const u=Number(c.targetAmount)||0,m=Number(c.raised)||0;if(c.completedAt||u>0&&m>=u)return{error:"completed",goal:It(c)};let g=a;if(u>0){const k=Math.max(0,_(u-m)),M=Math.ceil(k*Oi);if(M<=0)return{error:"completed",goal:It(c)};g>M&&(g=M)}const f=na(p.coins);if(f.balance<g)return{error:"insufficient",need:g,balance:f.balance};const b=_(g/Oi),y=_(m+b),v=u>0&&y>=u?n:c.completedAt,w={...c,raised:u>0?Math.min(y,_(u)):y,...v?{completedAt:v}:{}},x={at:n,amount:-g,note:`Goal donate · ${c.name} · $${b.toFixed(2)} · TEST MODE`,kind:"goal",goalId:c.id,usd:b},D={balance:f.balance-g,history:[x,...f.history].slice(0,200)};return l==="app"?o={...o,app:w}:o={...o,liveByHost:{...o.liveByHost,[d]:w}},p={...p,dailyGoals:o,coins:D},C(p),{ok:!0,goal:It(w),coins:D,donated:{coins:g,usd:b,requested:a}}}function il(e){const t=p.user,s={id:"brand_"+Date.now().toString(36),brand:String(e.brand||"").trim().slice(0,80),contact:String(e.contact||"").trim().slice(0,120),email:String(e.email||"").trim().slice(0,120),campaign:String(e.campaign||"sponsored_post").trim().slice(0,40),budget:String(e.budget||"").trim().slice(0,40),pitch:String(e.pitch||"").trim().slice(0,500),url:String(e.url||"").trim().slice(0,300),applicantUserId:(t==null?void 0:t.id)||null,status:"pending",at:Date.now()};return!s.brand||!s.email?{error:"required"}:(p={...p,brandApps:[s,...p.brandApps]},C(p),s)}function nl(e,t){if(!["pending","approved","rejected"].includes(t))return{error:"bad_status"};const a=p.brandApps.map(i=>i.id===e?{...i,status:t,reviewedAt:Date.now()}:i);return p={...p,brandApps:a},C(p),a.find(i=>i.id===e)}function Ni(e){const t=p.user,s={id:"list_"+Date.now().toString(36),title:String(e.title||"").trim().slice(0,80),brand:String(e.brand||"").trim().slice(0,80),blurb:String(e.blurb||"").trim().slice(0,280),url:String(e.url||"").trim().slice(0,300),disclosure:String(e.disclosure||"Paid partnership · TEST MODE").trim().slice(0,120),brandAppId:e.brandAppId||null,createdBy:(t==null?void 0:t.id)||null,active:!0,at:Date.now()};return!s.title||!s.brand?{error:"required"}:(p={...p,listings:[s,...p.listings||[]]},C(p),s)}function rl(e,t){const s=(p.listings||[]).map(a=>a.id===e?{...a,active:!!t}:a);return p={...p,listings:s},C(p),s.find(a=>a.id===e)}function ol({activeOnly:e=!1}={}){const t=p.listings||[];return e?t.filter(s=>s.active):t}function ll(e){var s;return[((s=p.user)==null?void 0:s.id)||"guest",e].sort().join("__")}function Gn(){const e=p.user;return e?Object.values(p.threads||{}).filter(t=>{var s;return(s=t.participants)==null?void 0:s.includes(e.id)}).sort((t,s)=>(s.updatedAt||0)-(t.updatedAt||0)):[]}function Vn(e){const t=p.user;if(!t||!e||e.muted||e.blocked)return 0;const s=e.lastReadAt||0;return(e.messages||[]).filter(a=>a.from!==t.id&&(a.at||0)>s).length}function tt(){return Gn().reduce((e,t)=>e+Vn(t),0)}function cl(e){const t=p.user;if(!t||!e)return null;const s=p.threads[e];if(!s||!(s.participants||[]).includes(t.id))return null;const a={...s,lastReadAt:Date.now()};p={...p,threads:{...p.threads,[a.id]:a},demoUnreadSeeded:!0},C(p);try{typeof window<"u"&&window.dispatchEvent&&window.dispatchEvent(new CustomEvent("dbs:messages-unread",{detail:{count:tt()}}))}catch{}return p.threads[a.id]}function ii(){var c;const e=p.user;if(!e)return{seeded:!1};if(ys(),p.demoUnreadSeeded)return{seeded:!1,count:tt(),once:!0};if(tt()>0)return p={...p,demoUnreadSeeded:!0},C(p),{seeded:!1,count:tt()};const t="maya",s=(((c=p.profiles)==null?void 0:c.maya)||{}).username||"MayaBeats",a=ls(t,s);if(a.error)return a;const i=p.threads[a.id];if((i.messages||[]).some(u=>u.from!==e.id)){const u=(i.messages||[]).filter(y=>y.from!==e.id).map(y=>y.at||0),m=i.lastReadAt||0;if(m>=Math.max(...u,0)||m>0)return p={...p,demoUnreadSeeded:!0},C(p),{seeded:!1,count:tt()};const f=Math.min(...u),b={...i,lastReadAt:Math.max(0,f-1)};return p={...p,threads:{...p.threads,[b.id]:b},demoUnreadSeeded:!0},C(p),{seeded:!0,count:tt()}}const o=Date.now(),l=[{id:"m_demo_unread_1",from:t,fromName:s,text:"Yo — drop coming Friday. You in for the listening party?",at:o-1e3*60*12},{id:"m_demo_unread_2",from:t,fromName:s,text:"Also sent a beat pack in the vault 🔥",at:o-1e3*60*5}],d={...i,messages:[...i.messages||[],...l],updatedAt:o-1e3*60*5,lastReadAt:0,request:!1};return p={...p,threads:{...p.threads,[d.id]:d},demoUnreadSeeded:!0},C(p),{seeded:!0,count:tt()}}function Un(e){return(p.threads||{})[e]||null}function zn(e){var a;const t=p.user;if(!t||!e)return!1;const s=(a=p.profiles)==null?void 0:a[e];return s?(t.following||[]).includes(e)&&(s.following||[]).includes(t.id):!1}function ls(e,t){const s=p.user;if(!s)return{error:"signin"};const a=ll(e);let i=p.threads[a];if(!i){const n=e==="dbs"||zn(e);i={id:a,kind:"dm",participants:[s.id,e],peerId:e,peerName:t||e,messages:[],updatedAt:Date.now(),request:!n,muted:!1,blocked:!1},p={...p,threads:{...p.threads,[a]:i}},C(p)}return i}function dl(e,t,s,{priority:a=!1}={}){const i=p.user;if(!i)return{error:"signin"};const n=String(s||"").trim().slice(0,500);if(!n)return{error:"empty"};const o=ls(e,t);if(o.error)return o;const l={id:"m_"+Date.now().toString(36),from:i.id,fromName:i.username,text:n,at:Date.now(),priority:!!a},d={...p.threads[o.id],messages:[...p.threads[o.id].messages||[],l],updatedAt:Date.now(),peerName:t||p.threads[o.id].peerName};if(p={...p,threads:{...p.threads,[d.id]:d}},a){const c=p.wallet||{balance:0,history:[]};p={...p,wallet:{balance:c.balance,history:[...c.history||[],{at:Date.now(),amount:0,note:"Priority message · TEST MODE $2.99 (not charged)"}]}}}return C(p),{thread:p.threads[d.id],message:l}}function ys(){const e={...p.profiles||{}};let t=!1;e.maya||(e.maya={id:"maya",username:"MayaBeats",bio:"Creator · beats & live demos",avatar:"",followers:[],following:["dbs"],verified:!1},t=!0),e.fanjay||(e.fanjay={id:"fanjay",username:"FanJay",bio:"Day-one fan · playlist curator",avatar:"",followers:[],following:["dbs"],verified:!1},t=!0);const s=p.user;if(s){const a={...e.maya},i=new Set(a.following||[]),n=new Set(a.followers||[]);i.has(s.id)||(i.add(s.id),t=!0),n.has(s.id)||(n.add(s.id),t=!0),a.following=[...i],a.followers=[...n],e.maya=a;let o=s;(s.following||[]).includes("maya")||(o={...s,following:[...s.following||[],"maya"]},t=!0),t&&(p={...p,user:o,profiles:e},nt(o),C(p))}else t&&(p={...p,profiles:e},C(p));return[{id:"dbs",username:"DatBoiSkeet",team:!0,bio:(p.profiles.dbs||{}).bio||""},{id:"maya",username:p.profiles.maya.username,team:!1,bio:p.profiles.maya.bio},{id:"fanjay",username:p.profiles.fanjay.username,team:!1,bio:p.profiles.fanjay.bio}]}function pl(e,t=[]){const s=p.user;if(!s)return{error:"signin"};const a=String(e).trim().slice(0,60)||"Group",i=[...new Set([s.id,...t.filter(Boolean)])],n=a.toLowerCase().replace(/\W+/g,"_").slice(0,24)||"group",o=n==="dbs_fans"?"group_dbs_fans":"group_"+n+"_"+String(s.id).slice(-4);let l=p.threads[o];if(!l)l={id:o,kind:"group",peerId:o,peerName:a,participants:i,memberIds:i,messages:[],updatedAt:Date.now(),muted:!1,blocked:!1},p={...p,threads:{...p.threads,[o]:l}},C(p);else if(s&&!(l.participants||[]).includes(s.id)){const d=[...new Set([...l.participants||[],s.id])],c=[...new Set([...l.memberIds||d,s.id])];l={...l,participants:d,memberIds:c},p={...p,threads:{...p.threads,[o]:l}},C(p)}return p.threads[o]}function ul(){return p.user?(ys(),pl("DBS Fans",["dbs","maya","fanjay"])):{error:"signin"}}function ml(e,t){const s=p.user;if(!s)return{error:"signin"};const a=p.threads[e];if(!a||a.kind!=="group")return{error:"not_group"};if(!(a.participants||[]).includes(s.id))return{error:"forbidden"};const i=String(t||"").trim().slice(0,500);if(!i)return{error:"empty"};const n={id:"m_"+Date.now().toString(36),from:s.id,fromName:s.username,text:i,at:Date.now(),priority:!1},o={...a,messages:[...a.messages||[],n],updatedAt:Date.now()};return p={...p,threads:{...p.threads,[o.id]:o}},C(p),{thread:p.threads[o.id],message:n}}function ka(e,t={}){const s=p.threads[e];if(!s)return{error:"missing"};const a={...s,muted:t.muted!==void 0?!!t.muted:!!s.muted,blocked:t.blocked!==void 0?!!t.blocked:!!s.blocked,reportedAt:t.report?Date.now():s.reportedAt||null};return p={...p,threads:{...p.threads,[a.id]:a}},C(p),a}function Ri(e={}){const t={...p.messagePrefs||{allowDMs:!0,allowRequests:!0},...e};return p={...p,messagePrefs:t},C(p),t}const kt={gifts:{creatorPct:80,dbsPct:20,label:"Live gifts"},tips:{creatorPct:90,dbsPct:10,label:"Tips"},subscriptions:{creatorPct:85,dbsPct:15,label:"Subscriptions"},paid_content:{creatorPct:85,dbsPct:15,label:"Paid content"},referrals:{creatorPct:85,dbsPct:15,label:"Referrals"},clippers:{creatorPct:80,dbsPct:20,label:"Clippers"},sponsorships:{creatorPct:80,dbsPct:20,label:"Sponsorships"},merch:{creatorPct:85,dbsPct:15,label:"Merch / affiliate"}},hl=[{category:"gifts",gross:40,note:"Live gifts · demo week"},{category:"tips",gross:22.5,note:"Live tips · demo week"},{category:"subscriptions",gross:29.99,note:"Skeet+ fan sub · demo"},{category:"referrals",gross:15,note:"Refer & Earn milestone · demo"},{category:"clippers",gross:50,note:"Clippers campaign payout · demo"},{category:"sponsorships",gross:100,note:"Sponsored livestream · demo"},{category:"merch",gross:35,note:"Foreign X-Change affiliate · demo"}];function _(e){return Math.round(Number(e)*100)/100}function ni(e){const t=rs().creatorWallet;return!e||typeof e!="object"?{...t}:{...t,...e,available:_(e.available??0),holds:_(e.holds??0),threshold:Number(e.threshold)>0?Number(e.threshold):25,verification:e.verification==="demo_verified"?"demo_verified":"demo_unverified",earnings:Array.isArray(e.earnings)?e.earnings:[],payouts:Array.isArray(e.payouts)?e.payouts:[]}}function rt(){const e=ni(p.creatorWallet);return p.creatorWallet!==e&&(p={...p,creatorWallet:e}),e}function Hn({category:e,gross:t,note:s,source:a="demo",at:i=Date.now()}){const n=kt[e]||kt.tips,o=_(Math.max(0,Number(t)||0)),l=_(o*.029+(o>0?.3:0)),d=_(Math.max(0,o-l)),c=_(d*n.creatorPct/100),u=_(d-c);return{id:"earn_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6),category:e,label:n.label,note:String(s||n.label).slice(0,120),gross:o,fees:l,net:d,creatorPct:n.creatorPct,dbsPct:n.dbsPct,creatorShare:c,dbsShare:u,source:a,at:i,payoutId:null}}function gl(){return{...kt}}function ms(){return rt()}function ri(e){const t=Hn(e),s=rt(),a={...s,available:_(s.available+t.creatorShare),earnings:[t,...s.earnings||[]]};return p={...p,creatorWallet:a},C(p),t}function Wn({force:e=!1}={}){const t=rt();if(!e&&(t.earnings||[]).length>0)return{skipped:!0,creatorWallet:t};const s=Date.now()-6*864e5,i=hl.map((l,d)=>Hn({category:l.category,gross:l.gross,note:l.note,source:"seed",at:s+d*36e5})).map((l,d)=>({...l,id:"earn_seed_"+d+"_"+l.category})),n=_(i.reduce((l,d)=>l+d.creatorShare,0)),o={...t,available:e?n:_(t.available+n),earnings:e?i:[...i,...t.earnings||[]],holds:e?0:t.holds,payouts:e?[]:t.payouts};return e&&(o.available=n,o.holds=0,o.payouts=[],o.earnings=i),p={...p,creatorWallet:o},C(p),{seeded:i.length,creatorWallet:o}}function fl({amount:e}={}){const t=rt(),s=(t.payouts||[]).find(g=>g.status==="pending");if(s)return{error:"pending_exists",pending:s};const a=_(t.available);if(a<t.threshold)return{error:"below_threshold",available:a,threshold:t.threshold};const i=e!=null?_(e):a;if(i<=0||i>a)return{error:"bad_amount"};const n=(t.earnings||[]).filter(g=>!g.payoutId).sort((g,f)=>g.at-f.at),o=[];let l=0;for(const g of n){const f=_(g.creatorShare);if(!(f<=0)&&!(_(l+f)>i)&&(o.push(g.id),l=_(l+f),l>=i))break}if(!o.length){const g=n.find(f=>_(f.creatorShare)>0);if(!g)return{error:"no_earnings"};if(_(g.creatorShare)>a)return{error:"bad_amount"};o.push(g.id),l=_(g.creatorShare)}const d=l,c={id:"po_"+Date.now().toString(36),amount:d,status:"pending",at:Date.now(),earningIds:o,note:"TEST MODE payout request · not real money"},u=(t.earnings||[]).map(g=>o.includes(g.id)?{...g,payoutId:c.id}:g),m={...t,available:_(a-d),holds:_(t.holds+d),earnings:u,payouts:[c,...t.payouts||[]]};return p={...p,creatorWallet:m},C(p),c}function vl(e,t){if(!["pending","completed","rejected"].includes(t))return{error:"bad_status"};const a=rt(),i=(a.payouts||[]).find(u=>u.id===e);if(!i)return{error:"missing"};if(i.status!=="pending"&&t!=="pending")return{error:"already_final",payout:i};let n=a.available,o=a.holds,l=a.earnings||[];if(i.status==="pending"&&t==="completed")o=_(Math.max(0,o-i.amount));else if(i.status==="pending"&&t==="rejected"){o=_(Math.max(0,o-i.amount)),n=_(n+i.amount);const u=new Set(i.earningIds||[]);l=l.map(m=>u.has(m.id)?{...m,payoutId:null}:m)}const d=a.payouts.map(u=>u.id===e?{...u,status:t,reviewedAt:Date.now()}:u),c={...a,available:n,holds:o,earnings:l,payouts:d};return p={...p,creatorWallet:c},C(p),d.find(u=>u.id===e)}function bl(e){const s={...rt(),verification:e?"demo_verified":"demo_unverified"};return p={...p,creatorWallet:s},C(p),s}function oi(){const e=rt(),t={};for(const s of Object.keys(kt))t[s]={category:s,label:kt[s].label,creatorPct:kt[s].creatorPct,dbsPct:kt[s].dbsPct,gross:0,fees:0,net:0,creatorShare:0,dbsShare:0,count:0};for(const s of e.earnings||[]){const a=t[s.category]||(t[s.category]={category:s.category,label:s.label||s.category,creatorPct:s.creatorPct,dbsPct:s.dbsPct,gross:0,fees:0,net:0,creatorShare:0,dbsShare:0,count:0});a.gross=_(a.gross+s.gross),a.fees=_(a.fees+s.fees),a.net=_(a.net+s.net),a.creatorShare=_(a.creatorShare+s.creatorShare),a.dbsShare=_(a.dbsShare+s.dbsShare),a.count+=1}return Object.values(t)}function zs(e=5,t="Demo credit"){const s=p.wallet||{balance:0,history:[]},a=Number(s.balance||0)+Number(e),i=[...s.history||[],{at:Date.now(),amount:Number(e),note:t}];return p={...p,wallet:{balance:a,history:i}},C(p),p.wallet}function Yn(e,t="Demo spend"){const s=p.wallet||{balance:0,history:[]},a=Number(e);if(Number(s.balance||0)<a)return{error:"insufficient"};const i=Number(s.balance||0)-a,n=[...s.history||[],{at:Date.now(),amount:-a,note:t}];return p={...p,wallet:{balance:i,history:n}},C(p),p.wallet}function K(e,t){return String(e||"").toLowerCase().includes(t)}function yl(e){const t=String(e||"").trim().toLowerCase(),s={query:String(e||"").trim(),posts:[],profiles:[],music:[],videos:[],lives:[],products:[],pictures:[]};if(!t)return s;const a=(p.posts||[]).filter(g=>K(g.text,t)||K(g.username,t)),i=Object.values(p.profiles||{}).filter(g=>K(g.username,t)||K(g.bio,t));if(p.user){const g=p.user;(K(g.username,t)||K(g.bio,t))&&(i.find(f=>f.id===g.id)||i.push(g))}const n=(p.catalog||[]).filter(g=>g.published),o=n.filter(g=>(g.type==="song"||g.type==="album")&&(K(g.title,t)||K(g.artist,t)||K(g.type,t))),l=n.filter(g=>g.type==="video"&&(K(g.title,t)||K(g.artist,t)||K("video",t))),d=n.filter(g=>g.type==="picture"&&(K(g.title,t)||K(g.artist,t)||K("picture",t))),c=[],u=p.live;u&&!u.endedAt&&(K(u.title,t)||K(u.hostName,t)||K("live",t))&&c.push({...u,status:"live"}),(p.liveHistory||[]).forEach(g=>{(K(g.title,t)||K(g.hostName,t)||K("live",t))&&c.push({...g,status:"ended"})});const m=(p.listings||[]).filter(g=>g.active!==!1&&(K(g.title,t)||K(g.brand,t)||K(g.blurb,t)||K("marketplace",t)||K("product",t)));return{query:String(e||"").trim(),posts:a,profiles:i,music:o,videos:l,lives:c,products:m,pictures:d}}function kl(e=8){const t=p.likes||{},s=(p.posts||[]).map(l=>({kind:"post",id:l.id,title:(l.text||"").slice(0,72)||"Post",subtitle:"@"+(l.username||"creator"),href:"#/posts",score:(t[l.id]||[]).length,image:l.image||""})).sort((l,d)=>d.score-l.score||(d.id>l.id?1:-1)),a=[{kind:"music",id:"trend_music",title:"Long Story Short",subtitle:"Coming Soon · Music",href:"#/music",score:3,image:"/music/01_Long_Story_Short_Coming_Soon.jpg"},{kind:"video",id:"trend_video",title:"Dirty Money ft. Lil Baby",subtitle:"Official MV",href:"#/videos",score:3,image:""},{kind:"live",id:"trend_live",title:"Go live on DBS",subtitle:"Creators · Live",href:"#/live",score:2,image:""},{kind:"market",id:"trend_mkt",title:"Sponsored Marketplace",subtitle:"Brand ads · demo",href:"#/marketplace",score:2,image:""},{kind:"spotlight",id:"trend_spot",title:"24/7 Spotlight",subtitle:"Stage · Discover",href:"#/spotlight",score:1,image:""}],i=p.live;return i&&!i.endedAt&&a.unshift({kind:"live",id:"trend_live_now",title:i.title||"Live now",subtitle:"@"+(i.hostName||"creator")+" · LIVE",href:"#/live",score:99,image:""}),(p.catalog||[]).filter(l=>l.published).slice(0,3).forEach(l=>{const d=l.type==="video"?"#/videos":l.type==="picture"?"#/home":"#/music";a.push({kind:l.type,id:"trend_cat_"+l.id,title:l.title,subtitle:(l.artist||"Admin")+" · From Admin",href:d,score:4,image:l.coverRef&&!String(l.coverRef).startsWith("idb:")?l.coverRef:""})}),[...s,...a].sort((l,d)=>d.score-l.score).slice(0,e)}function wl(){const e=Object.values(p.profiles||{}).map(t=>({id:t.id,username:t.username,bio:t.bio||"",avatar:t.avatar||"",verified:!!t.verified,followers:(t.followers||[]).length}));return p.user&&!e.find(t=>t.id===p.user.id)&&e.push({id:p.user.id,username:p.user.username,bio:p.user.bio||"",avatar:p.user.avatar||"",verified:!!p.user.verified,followers:(p.user.followers||[]).length}),e.sort((t,s)=>s.followers-t.followers||t.username.localeCompare(s.username))}const Qn=6e4,wa=10;function Jn(e=Date.now()){const t=new Date(e);return t.setHours(23,59,59,999),t.getTime()}function Sl(e=Date.now()){const t=new Date(e);return t.setHours(0,0,0,0),t.getTime()}const Xn=[{id:"fan_maya",name:"MayaBeats",bio:"Demo fan · mutual"},{id:"fan_jay",name:"FanJay",bio:"Demo fan · sandbox opponent"}];function ue(){return p.giftBattles||{active:null,history:[],champions:[],prefs:{invitationsEnabled:!0}}}function Et(e){return p={...p,giftBattles:e},C(p),e}function li(e,t=Date.now()){if(!e||e.status!=="active"||t<(e.endsAt||0))return e;const s=Number(e.scoreA||0),a=Number(e.scoreB||0);let i="tie",n=null,o=null;return s>a?(i="win",n=e.challenger.id,o=e.challenger.name):a>s&&(i="win",n=e.opponent.id,o=e.opponent.name),{...e,status:"ended",endedAt:t,result:i,winnerId:n,winnerName:o,scoreA:s,scoreB:a,championUntil:n?Jn(t):null}}function Zn(){return Xn.map(e=>({...e}))}function ci(){return{invitationsEnabled:!0,...ue().prefs||{}}}function $l(e={}){const t=ue(),s={...t.prefs,...e};return Et({...t,prefs:s})}function di(){let t=ue().active;if(!t)return null;if(t.status==="active"){const s=li(t);if(s!==t&&s.status==="ended")return pi(s);t=s}return t}function pi(e){const t=ue(),s=[e,...(t.history||[]).filter(i=>i.id!==e.id)].slice(0,40);let a=t.champions||[];return e.winnerId&&(a=[{battleId:e.id,userId:e.winnerId,username:e.winnerName,score:e.winnerId===e.challenger.id?e.scoreA:e.scoreB,opponentScore:e.winnerId===e.challenger.id?e.scoreB:e.scoreA,endedAt:e.endedAt,championUntil:e.championUntil,mode:e.mode},...a.filter(n=>n.battleId!==e.id)].slice(0,30)),Et({...t,active:e,history:s,champions:a}),e}function xl({opponentId:e,opponentName:t,mode:s}={}){const a=p.user;if(!a)return{error:"signin"};if(!ci().invitationsEnabled)return{error:"invites_disabled"};const n=p.live&&!p.live.endedAt,o=s||(n?"live":"sandbox");if(o==="live"&&!n)return{error:"not_live"};const l=ue(),d=l.active;if(d&&(d.status==="pending"||d.status==="active"))return{error:"battle_in_progress",battle:d};const c=Xn.find(g=>g.id===e),u={id:e||(c==null?void 0:c.id)||"fan_maya",name:t||(c==null?void 0:c.name)||"MayaBeats"};if(u.id===a.id)return{error:"self"};const m={id:"gb_"+Date.now().toString(36),status:"pending",mode:o,liveId:n?p.live.id:null,liveTitle:n?p.live.title:null,challenger:{id:a.id,name:a.username},opponent:u,createdAt:Date.now(),startedAt:null,endsAt:null,durationMs:Qn,scoreA:0,scoreB:0,giftLog:[],result:null,winnerId:null,winnerName:null,endedAt:null,championUntil:null};return Et({...l,active:m}),{battle:m}}function El(){const e=ue(),t=e.active;if(!t||t.status!=="pending")return{error:"no_pending"};if(!ci().invitationsEnabled)return{error:"invites_disabled"};const s=Date.now(),a={...t,status:"active",startedAt:s,endsAt:s+(t.durationMs||Qn),scoreA:0,scoreB:0};return Et({...e,active:a}),{battle:a}}function Al(){const e=ue(),t=e.active;if(!t||t.status!=="pending")return{error:"no_pending"};const s={...t,status:"declined",endedAt:Date.now(),result:"declined"},a=[s,...e.history||[]].slice(0,40);return Et({...e,active:null,history:a}),{battle:s}}function Cl(){const e=ue(),t=e.active;return t&&(t.status==="pending"||t.status==="active")?{error:"still_running",battle:t}:(Et({...e,active:null}),{ok:!0})}function Tl(e=Date.now()){const t=p.liveGbChallengePop;return t?t.expiresAt&&e>t.expiresAt?(p={...p,liveGbChallengePop:null},C(p),null):!p.live||p.live.endedAt||t.liveId&&t.liveId!==p.live.id?null:{...t}:null}function Dl({side:e="challenger",kind:t="gift",amount:s=2,label:a=""}={}){var y;if(!p.user)return{error:"signin"};let n=di();if(!n||n.status!=="active")return{error:"no_active"};if(n=ue().active,!n||n.status!=="active")return{error:"ended"};const o=Math.max(.5,Number(s)||1),l=t==="tip"?"tip":"gift",d=e==="opponent",c=d?n.opponent:n.challenger;let u=null;if(n.mode==="live"&&!d){if(u=Bn({kind:l,amount:o,label:a||(l==="gift"?"🔥 Fire":"Tip")}),u!=null&&u.error)return u}else(((y=p.wallet)==null?void 0:y.balance)||0)>=o&&Yn(o,`Gift battle ${l} · ${c.name} · TEST MODE`);const m={id:"gbg_"+Date.now().toString(36),side:d?"opponent":"challenger",userId:c.id,username:c.name,kind:l,amount:o,label:(a||(l==="gift"?"🔥 Fire":"Tip")).slice(0,40),at:Date.now()},g=Number(n.scoreA||0)+(d?0:o),f=Number(n.scoreB||0)+(d?o:0);let b={...n,scoreA:+g.toFixed(2),scoreB:+f.toFixed(2),giftLog:[...n.giftLog||[],m]};return b=li(b),b.status==="ended"?pi(b):Et({...ue(),active:b}),{battle:b,entry:m,live:(u==null?void 0:u.live)||null,wallet:p.wallet}}function ui(){const t=ue().active;if(!t||t.status!=="active")return t;const s=li(t);return s.status==="ended"&&t.status!=="ended"?pi(s):s}function Ml(e=20){return(ue().history||[]).slice(0,e)}function Ll(e=Date.now()){const t=ue(),s=t.active;return s&&s.status==="ended"&&s.winnerId&&s.championUntil&&e<s.championUntil?{battleId:s.id,userId:s.winnerId,username:s.winnerName,score:s.winnerId===s.challenger.id?s.scoreA:s.scoreB,endedAt:s.endedAt,championUntil:s.championUntil,mode:s.mode}:(t.champions||[]).find(i=>i.championUntil&&e<i.championUntil)||null}function Pl(e=15){var s;const t={};for(const a of ue().history||[]){if(a.result!=="win"||!a.winnerId)continue;const i=t[a.winnerId]||{userId:a.winnerId,username:a.winnerName,wins:0,points:0};i.wins+=1;const n=a.winnerId===((s=a.challenger)==null?void 0:s.id)?Number(a.scoreA||0):Number(a.scoreB||0);i.points=+(i.points+n).toFixed(2),i.username=a.winnerName||i.username,t[a.winnerId]=i}return Object.values(t).sort((a,i)=>i.wins-a.wins||i.points-a.points||a.username.localeCompare(i.username)).slice(0,e)}function mi(e=wa,t=Date.now()){var d;const s=Math.min(Math.max(1,Number(e)||wa),wa),a=Sl(t),i=Jn(t),n=new Set,o=[],l=c=>{if(!(c!=null&&c.userId)||!(c!=null&&c.username)||n.has(c.userId))return;const u=Number(c.endedAt||0);u<a||u>i||c.championUntil&&t>c.championUntil||(n.add(c.userId),o.push({userId:c.userId,username:c.username,score:Number(c.score||0),endedAt:u,championUntil:c.championUntil||i,battleId:c.battleId||c.id||null,mode:c.mode||"demo"}))};for(const c of ue().champions||[])if(l(c),o.length>=s)return o;for(const c of ue().history||[])if(!(c.result!=="win"||!c.winnerId)&&(l({userId:c.winnerId,username:c.winnerName,score:c.winnerId===((d=c.challenger)==null?void 0:d.id)?c.scoreA:c.scoreB,endedAt:c.endedAt,championUntil:c.championUntil||i,battleId:c.id,mode:c.mode}),o.length>=s))break;return o}const hi=4,Ra=[{id:"maya",username:"MayaBeats",bio:"Creator · beats & live demos"},{id:"fanjay",username:"FanJay",bio:"Day-one fan · playlist curator"},{id:"ria",username:"RiaLoops",bio:"Demo co-host · loops & hooks"},{id:"dez",username:"DezOnMic",bio:"Demo guest · freestyle nights"}];function Te(){return p.multiGuest||{active:null,history:[]}}function Fe(e){return p={...p,multiGuest:e},C(p),e}function ks(e,t){const s=[e,...t],a=s.length||1,i=Math.floor(100/a*100)/100,n={};let o=0;return s.forEach((l,d)=>{d===s.length-1?n[l]=+(100-o).toFixed(2):(n[l]=i,o=+(o+i).toFixed(2))}),n}function la(){ys();const e={...p.profiles||{}};let t=!1;for(const s of Ra)e[s.id]||(e[s.id]={id:s.id,username:s.username,bio:s.bio,avatar:"",followers:[],following:["dbs"],verified:!1},t=!0);return t&&(p={...p,profiles:e},C(p)),Ra.map(s=>{const a=p.profiles[s.id]||s;return{id:s.id,username:a.username||s.username,bio:a.bio||s.bio,followers:(a.followers||[]).length}})}function Il(){return la()}function hs(){return Te().active||null}function _l(e=20){return(Te().history||[]).slice(0,e)}function ql(e){const t=p.user;if(!t)return{error:"signin"};const s=Te();if(s.active&&!s.active.endedAt)return{error:"session_in_progress",session:s.active};const a=String(e||"").trim().slice(0,80)||"Multi-Guest Live";la();const i={id:"mg_"+Date.now().toString(36),title:a,hostId:t.id,hostName:t.username,startedAt:Date.now(),endedAt:null,maxGuests:hi,guests:[],chat:[{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:"Multi-guest session started · TEST MODE · no camera / WebRTC",at:Date.now(),system:!0}],giftSplit:{mode:"equal",shares:{[t.id]:100},disclosed:!1,disclosedAt:null},broadcastReady:!1};return Fe({...s,active:i}),{session:i}}function Bl(e){var g;const t=p.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};la();const i=Ra.find(f=>f.id===e),n=(g=p.profiles)==null?void 0:g[e];if(!i&&!n)return{error:"unknown_guest"};if(e===t.id||e===a.hostId)return{error:"self"};const o=(a.guests||[]).find(f=>f.id===e);if(o&&(o.status==="invited"||o.status==="joined"))return{error:"already_invited",session:a};if((a.guests||[]).filter(f=>f.status==="joined"||f.status==="invited").length>=(a.maxGuests||hi))return{error:"full"};const d={id:e,username:(n==null?void 0:n.username)||(i==null?void 0:i.username)||e,status:"invited",muted:!1,invitedAt:Date.now(),joinedAt:null},c=[...(a.guests||[]).filter(f=>f.id!==e),d],u=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`Invited @${d.username} to the stage`,at:Date.now(),system:!0}].slice(-80),m={...a,guests:c,chat:u,broadcastReady:!1};return m.giftSplit={...m.giftSplit,disclosed:!1,disclosedAt:null,shares:ks(a.hostId,c.filter(f=>f.status==="joined").map(f=>f.id))},Fe({...s,active:m}),{session:m,guest:d}}function Ol(e){var u;const t=p.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(m=>({...m})),n=i.findIndex(m=>m.id===e);if(n<0)return{error:"not_found"};if(i[n].status==="joined")return{session:a,guest:i[n]};if(i.filter(m=>m.status==="joined").length>=(a.maxGuests||hi))return{error:"full"};i[n]={...i[n],status:"joined",joinedAt:Date.now(),muted:!1};const l=i.filter(m=>m.status==="joined").map(m=>m.id),d=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${i[n].username} joined the stage`,at:Date.now(),system:!0}].slice(-80),c={...a,guests:i,chat:d,broadcastReady:!1,giftSplit:{mode:((u=a.giftSplit)==null?void 0:u.mode)||"equal",shares:ks(a.hostId,l),disclosed:!1,disclosedAt:null}};return Fe({...s,active:c}),{session:c,guest:i[n]}}function Nl(e){var d;const t=p.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(c=>c.id===e?{...c,status:"declined"}:c);if(!(a.guests||[]).some(c=>c.id===e))return{error:"not_found"};const n=((d=(a.guests||[]).find(c=>c.id===e))==null?void 0:d.username)||e,o=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${n} declined the invite`,at:Date.now(),system:!0}].slice(-80),l={...a,guests:i,chat:o};return Fe({...s,active:l}),{session:l}}function Rl(e){var c,u;const t=p.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id&&t.id!==e)return{error:"forbidden"};const i=(a.guests||[]).map(m=>m.id===e?{...m,status:"left",muted:!1}:m);if(!(a.guests||[]).some(m=>m.id===e))return{error:"not_found"};const n=((c=(a.guests||[]).find(m=>m.id===e))==null?void 0:c.username)||e,o=i.filter(m=>m.status==="joined").map(m=>m.id),l=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${n} left the stage`,at:Date.now(),system:!0}].slice(-80),d={...a,guests:i,chat:l,broadcastReady:!1,giftSplit:{mode:((u=a.giftSplit)==null?void 0:u.mode)||"equal",shares:ks(a.hostId,o),disclosed:!1,disclosedAt:null}};return Fe({...s,active:d}),{session:d}}function jl(e){var c,u;const t=p.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==t.id)return{error:"host_only"};const i=(a.guests||[]).map(m=>m.id===e?{...m,status:"removed",muted:!1}:m);if(!(a.guests||[]).some(m=>m.id===e))return{error:"not_found"};const n=((c=(a.guests||[]).find(m=>m.id===e))==null?void 0:c.username)||e,o=i.filter(m=>m.status==="joined").map(m=>m.id),l=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`Host removed @${n} from the stage`,at:Date.now(),system:!0}].slice(-80),d={...a,guests:i,chat:l,broadcastReady:!1,giftSplit:{mode:((u=a.giftSplit)==null?void 0:u.mode)||"equal",shares:ks(a.hostId,o),disclosed:!1,disclosedAt:null}};return Fe({...s,active:d}),{session:d}}function Fl(e,t=!0){var c;const s=p.user;if(!s)return{error:"signin"};const a=Te(),i=a.active;if(!i||i.endedAt)return{error:"no_session"};if(i.hostId!==s.id)return{error:"host_only"};const n=(i.guests||[]).map(u=>u.id===e&&u.status==="joined"?{...u,muted:!!t}:u);if(!(i.guests||[]).some(u=>u.id===e&&u.status==="joined"))return{error:"not_joined"};const o=((c=(i.guests||[]).find(u=>u.id===e))==null?void 0:c.username)||e,l=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:t?`Host muted @${o}`:`Host unmuted @${o}`,at:Date.now(),system:!0}].slice(-80),d={...i,guests:n,chat:l};return Fe({...a,active:d}),{session:d}}function Kl(e){const t=p.user;if(!t)return{error:"signin"};const s=Te(),a=s.active;if(!a||a.endedAt)return{error:"no_session"};const i=String(e||"").trim().slice(0,280);if(!i)return{error:"empty"};const n={id:"c_"+Date.now().toString(36),userId:t.id,username:t.username,text:i,at:Date.now()},o=[...a.chat||[],n].slice(-80),l={...a,chat:o};return Fe({...s,active:l}),{session:l,message:n}}function ts({mode:e="equal",shares:t=null,disclose:s=!1}={}){var g,f;const a=p.user;if(!a)return{error:"signin"};const i=Te(),n=i.active;if(!n||n.endedAt)return{error:"no_session"};if(n.hostId!==a.id)return{error:"host_only"};const o=(n.guests||[]).filter(b=>b.status==="joined").map(b=>b.id),l=[n.hostId,...o];let d,c=e==="custom"?"custom":"equal";if(c==="equal")d=ks(n.hostId,o);else{d={};let b=0;for(const y of l){const v=Math.max(0,Number(t==null?void 0:t[y])||0);d[y]=+v.toFixed(2),b+=d[y]}if(b=+b.toFixed(2),Math.abs(b-100)>.05)return{error:"split_total",total:b,expected:100}}const u={mode:c,shares:d,disclosed:!!s||!!((g=n.giftSplit)!=null&&g.disclosed),disclosedAt:s?Date.now():((f=n.giftSplit)==null?void 0:f.disclosedAt)||null};s&&(u.disclosed=!0),s&&(u.disclosedAt=Date.now());const m={...n,giftSplit:u,broadcastReady:!!u.disclosed};return Fe({...i,active:m}),{session:m}}function Gl(){var e,t,s,a;return ts({mode:((t=(e=hs())==null?void 0:e.giftSplit)==null?void 0:t.mode)||"equal",shares:((a=(s=hs())==null?void 0:s.giftSplit)==null?void 0:a.shares)||null,disclose:!0})}function Vl(){const e=p.user;if(!e)return{error:"signin"};const t=Te(),s=t.active;if(!s||s.endedAt)return{error:"no_session"};if(s.hostId!==e.id)return{error:"host_only"};const a={...s,endedAt:Date.now(),broadcastReady:!1},i=[a,...(t.history||[]).filter(n=>n.id!==a.id)].slice(0,20);return Fe({active:null,history:i}),{session:a}}const er=["song","album","video","live","app","interview"],gi=["draft","active","paused","ended"];function At(e){if(!e||typeof e!="object")return null;const t=e.fundSource==="third_party"?"third_party":"dbs",s=er.includes(e.promoteType)?e.promoteType:"app",a=gi.includes(e.status)?e.status:"draft",i=Number(e.deadline)||0;return{id:String(e.id||""),title:String(e.title||"").slice(0,120),promoteType:s,budget:Math.max(0,Number(e.budget)||0),deadline:i,fundSource:t,managementFeePct:t==="third_party"?20:0,reward:String(e.reward||"").slice(0,200),status:a,participants:Array.isArray(e.participants)?e.participants:[],submissions:Array.isArray(e.submissions)?e.submissions:[],createdAt:Number(e.createdAt)||Date.now(),createdBy:e.createdBy||null}}function Rt(e){p={...p,missions:e},C(p)}function ca({status:e=null}={}){const t=(p.missions||[]).map(At).filter(Boolean);if(!e)return t;const s=Array.isArray(e)?e:[e];return t.filter(a=>s.includes(a.status))}function Ul(e){return ca().find(t=>t.id===e)||null}function zl(e={}){var l;const t=String(e.title||"").trim().slice(0,120);if(!t)return{error:"required"};const s=er.includes(e.promoteType)?e.promoteType:"app",a=e.fundSource==="third_party"?"third_party":"dbs";let i=e.deadline;if(typeof i=="string"&&i){const d=Date.parse(i);i=Number.isFinite(d)?d:Date.now()+7*864e5}else i=Number(i)||Date.now()+7*864e5;const n=gi.includes(e.status)?e.status:"active",o=At({id:"msn_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),title:t,promoteType:s,budget:Number(e.budget)||0,deadline:i,fundSource:a,reward:String(e.reward||"").trim().slice(0,200)||"Demo reward · TEST MODE",status:n,participants:[],submissions:[],createdAt:Date.now(),createdBy:((l=p.user)==null?void 0:l.id)||"demo_admin"});return Rt([o,...p.missions||[]]),o}function Hl(e,t){if(!gi.includes(t))return{error:"bad_status"};let s=null;const a=(p.missions||[]).map(i=>{const n=At(i);return!n||n.id!==e?i:(s={...n,status:t},s)});return s?(Rt(a),s):{error:"not_found"}}function Wl(e){const t=p.user;if(!t)return{error:"signin"};let s=null;const a=(p.missions||[]).map(i=>{const n=At(i);if(!n||n.id!==e)return i;if(n.status!=="active")return s={error:"not_active",mission:n},i;if((n.participants||[]).some(d=>d.userId===t.id))return s={error:"already_joined",mission:n},i;const l={userId:t.id,username:t.username||"creator",joinedAt:Date.now(),score:0,referralCode:"REF-"+t.id.slice(0,6).toUpperCase()+"-"+Math.random().toString(36).slice(2,5).toUpperCase()};return s={...n,participants:[...n.participants||[],l]},s});return s?(s.error||Rt(a),s):{error:"not_found"}}function Yl(e,{proof:t=""}={}){const s=p.user;if(!s)return{error:"signin"};const a=String(t||"").trim().slice(0,400);if(!a)return{error:"required"};let i=null;const n=(p.missions||[]).map(o=>{const l=At(o);if(!l||l.id!==e)return o;if(l.status!=="active")return i={error:"not_active",mission:l},o;if(!(l.participants||[]).some(m=>m.userId===s.id))return i={error:"not_joined",mission:l},o;const c={id:"sub_"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),userId:s.id,username:s.username||"creator",proof:a,at:Date.now(),status:"pending"},u=(l.participants||[]).map(m=>m.userId===s.id?{...m,score:(Number(m.score)||0)+10}:m);return i={...l,participants:u,submissions:[c,...l.submissions||[]]},i});return i?(i.error||Rt(n),i):{error:"not_found"}}function Ql(e,t=5){const s=p.user;if(!s)return{error:"signin"};const a=Math.max(1,Math.min(50,Number(t)||5));let i=null;const n=(p.missions||[]).map(o=>{const l=At(o);if(!l||l.id!==e)return o;if(!(l.participants||[]).some(u=>u.userId===s.id))return i={error:"not_joined",mission:l},o;const c=(l.participants||[]).map(u=>u.userId===s.id?{...u,score:(Number(u.score)||0)+a}:u);return i={...l,participants:c},i});return i?(i.error||Rt(n),i):{error:"not_found"}}function Jl(e){const t=Ul(e);return t?[...t.participants||[]].map(s=>({userId:s.userId,username:s.username,score:Number(s.score)||0,referralCode:s.referralCode||"",joinedAt:s.joinedAt,submissions:(t.submissions||[]).filter(a=>a.userId===s.userId).length})).sort((s,a)=>a.score-s.score||(s.joinedAt||0)-(a.joinedAt||0)):[]}function Xl({force:e=!1}={}){if((p.missions||[]).length&&!e)return{skipped:!0,missions:ca()};const s=Date.now(),a=864e5,i=[{id:"msn_demo_song",title:"Push Long Story Short (clip challenge)",promoteType:"song",budget:2500,deadline:s+14*a,fundSource:"dbs",reward:"$50–$200 demo credits by rank · DBS-funded marketing",status:"active",participants:[{userId:"clipper_demo",username:"ClipQueen",joinedAt:s-2*a,score:42,referralCode:"REF-CLIP-AAA"},{userId:"dbs",username:"DatBoiSkeet",joinedAt:s-a,score:28,referralCode:"REF-DBS-001"}],submissions:[{id:"sub_demo1",userId:"clipper_demo",username:"ClipQueen",proof:"https://example.com/tiktok/lss-clip-1 · 12k views",at:s-a,status:"pending"}],createdAt:s-3*a,createdBy:"demo_admin"},{id:"msn_demo_live",title:"Boost Friday Night Live",promoteType:"live",budget:800,deadline:s+5*a,fundSource:"third_party",reward:"Share of $800 pot after 20% management fee",status:"active",participants:[],submissions:[],createdAt:s-a,createdBy:"demo_admin"},{id:"msn_demo_app",title:"Download DBS · invite 3 friends",promoteType:"app",budget:1200,deadline:s+30*a,fundSource:"dbs",reward:"Referral bonus stack · verified installs only",status:"active",participants:[],submissions:[],createdAt:s-5*a,createdBy:"demo_admin"},{id:"msn_demo_ended",title:"Ladies Only teaser push (ended)",promoteType:"video",budget:500,deadline:s-2*a,fundSource:"third_party",reward:"Completed · demo archive",status:"ended",participants:[{userId:"clipper_demo",username:"ClipQueen",joinedAt:s-10*a,score:90,referralCode:"REF-CLIP-OLD"}],submissions:[],createdAt:s-20*a,createdBy:"demo_admin"}].map(At);return Rt(i),{seeded:i.length,missions:i}}const tr=60*1e3,fi=60*1e3,gs=2,da=3,pa=3,ws=3,Zl=["song","beat","music_video"],ec=[...Zl,"freestyle"];function sr(){const e=p.spotlight||{};return{nowPlaying:e.nowPlaying||null,queue:Array.isArray(e.queue)?e.queue:[],history:Array.isArray(e.history)?e.history:[],houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0}}function pe(e){return p={...p,spotlight:e},C(p),e}function tc(e){return e==="freestyle"?"Live Freestyle":e==="beat"?"Beat":e==="music_video"?"Music Video":"Song"}function ja(e,t="ended"){return e?{id:e.id,userId:e.userId,username:e.username,type:e.type,title:e.title,artist:e.artist,startedAt:e.startedAt,endedAt:Date.now(),extensions:e.extensions||0,playCount:e.playCount||1,reason:t}:null}function oe(e=Date.now()){let t=sr(),s=t.nowPlaying;if(!s)return sc(t,e);if(s.house)return t;if(s.type==="freestyle"&&s.endsAt&&e>=s.endsAt&&!s.awaitingPlayAnother){if(Object.keys(s.keepGoingVotes||{}).length>=da&&(s.extensions||0)<gs&&!s.extensionApplied){s={...s,extensions:(s.extensions||0)+1,endsAt:e+fi,keepGoingVotes:{},extensionApplied:!1,voteWindowOpen:!0};const u={...t,nowPlaying:s};return pe(u),u}const n=[ja(s,"timer"),...t.history||[]].slice(0,30),o=[...t.queue||[]];let l=null,d=typeof t.houseIndex=="number"?t.houseIndex:0;if(o.length){const u=o.shift();l=Hs(u,e)}else l=Ws($t(d),e);const c={nowPlaying:l,queue:o,history:n,houseIndex:d};return pe(c),c}if(s.awaitingPlayAnother&&s.playAnotherDeadline&&e>=s.playAnotherDeadline){const a=Object.keys(s.playAnotherVotes||{}).length,i=s.playCount||1;if(a>=pa&&i<ws){s={...s,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:i+1,title:s.nextTitle||s.title,startedAt:e,endsAt:null,nextTitle:null};const u={...t,nowPlaying:s};return pe(u),u}const n=[ja(s,"play_another_fail"),...t.history||[]].slice(0,30),o=[...t.queue||[]];let l=null,d=typeof t.houseIndex=="number"?t.houseIndex:0;o.length?l=Hs(o.shift(),e):l=Ws($t(d),e);const c={nowPlaying:l,queue:o,history:n,houseIndex:d};return pe(c),c}return t}function Hs(e,t=Date.now()){const s=e.type==="freestyle";return{id:"sp_"+t.toString(36)+"_"+Math.random().toString(36).slice(2,6),userId:e.userId,username:e.username,type:e.type,title:e.title||(s?"Live Freestyle":"Untitled"),artist:e.artist||e.username,cover:e.cover||"",startedAt:t,endsAt:s?t+tr:null,extensions:0,playCount:1,keepGoingVotes:{},playAnotherVotes:{},voteWindowOpen:s,awaitingPlayAnother:!1,playAnotherDeadline:null,reactions:{fire:0,heart:0,clap:0},chat:[{id:"c_"+t.toString(36),userId:"system",username:"DBS",text:`${e.username} took the Spotlight · ${tc(e.type)} · TEST MODE`,at:t,system:!0}]}}function ne(){const e=oe();return{nowPlaying:e.nowPlaying||null,queue:[...e.queue||[]],history:[...e.history||[]],houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0,thresholds:{keepGoing:da,playAnother:pa,maxExtensions:gs,maxUploadStreak:ws,freestyleMs:tr}}}function ar(){const e=[];for(const s of he||[])!s||!s.embed||(s.category==="Music Videos"?e.push({id:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube||"",kind:"music_video",chipLabel:"House · Music Video",note:"DatBoiSkeet catalog · original YouTube · not a live act",cover:s.cover||""}):s.category==="Interviews"&&e.push({id:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube||"",kind:"interview",chipLabel:"House · Interview",note:"DatBoiSkeet interview · original YouTube · not a live act",cover:s.cover||""}));const t=(qa||[]).find(s=>s.id==="pl-vlogs");if(t&&t.youtube){const s=String(t.youtube).match(/[?&]list=([^&]+)/),a=s&&s[1];a&&e.push({id:"house-bts-vlogs",title:t.title||"DatBoiSkeet Vlogs",artist:"DatBoiSkeet",embed:"https://www.youtube.com/embed/videoseries?list="+a,youtube:t.youtube,kind:"bts",chipLabel:"House · BTS",note:"Channel vlogs · dedicated BTS clips thin · original YouTube · not a live act",cover:""})}return e}function ir(){const e=ar().length;return e>0?e:1}function $t(e){const t=ar();if(!t.length)return{id:"house_empty",title:"DatBoiSkeet catalog",artist:"DatBoiSkeet",embed:"",youtube:"https://www.youtube.com/@DatBoiSkeet1",kind:"music_video",chipLabel:"House · Music Video",note:"Catalog loading · not a live act",cover:"",status:"House rotation"};const s=(e%t.length+t.length)%t.length;return{...t[s],status:t[s].chipLabel}}function Ws(e,t=Date.now()){return{id:"house_"+(e.id||"x")+"_"+t.toString(36),userId:"dbs",username:"DatBoiSkeet",type:"music_video",house:!0,houseKind:e.kind||"music_video",chipLabel:e.chipLabel||"House · Music Video",title:e.title,artist:e.artist||"DatBoiSkeet",embed:e.embed||"",youtube:e.youtube||"",note:e.note||"House catalog · not a live act",cover:e.cover||"",startedAt:t,endsAt:null,extensions:0,playCount:1,keepGoingVotes:{},playAnotherVotes:{},voteWindowOpen:!1,awaitingPlayAnother:!1,playAnotherDeadline:null,reactions:{fire:0,heart:0,clap:0},chat:[{id:"c_house_"+t.toString(36),userId:"system",username:"DBS",text:`House catalog · ${e.chipLabel||"House"} · ${e.title} · not a live act · TEST MODE`,at:t,system:!0}]}}function sc(e,t=Date.now()){if(e.nowPlaying)return e;const s=typeof e.houseIndex=="number"?e.houseIndex:0,a=$t(s),i=Ws(a,t),n={...e,nowPlaying:i,houseIndex:s};return pe(n),n}function nr(){const e=sr();return $t(typeof e.houseIndex=="number"?e.houseIndex:0)}function ac({type:e="song",title:t="",artist:s=""}={}){const a=p.user;if(!a)return{error:"signin"};const i=ec.includes(e)?e:"song",n=oe(),o=a.id,l=(n.queue||[]).some(y=>y.userId===o),d=n.nowPlaying&&!n.nowPlaying.house&&n.nowPlaying.userId===o&&!n.nowPlaying.awaitingPlayAnother;if(l||d)return{error:"already_queued",state:ne()};const c=String(t||"").trim().slice(0,80)||(i==="freestyle"?"Live Freestyle":i==="beat"?"Untitled Beat":i==="music_video"?"Untitled MV":"Untitled Song"),u=String(s||a.username||"").trim().slice(0,60),m={id:"q_"+Date.now().toString(36),userId:o,username:a.username,type:i,title:c,artist:u,cover:"",joinedAt:Date.now()};let g=n.nowPlaying,f=[...n.queue||[]],b=typeof n.houseIndex=="number"?n.houseIndex:0;return g?(g.house,f.push(m)):(g=Hs(m),f=[]),pe({...n,nowPlaying:g,queue:f,houseIndex:b}),{ok:!0,state:ne()}}function ji(){const e=p.user;if(!e)return{error:"signin"};const t=oe(),s=(t.queue||[]).length,a=(t.queue||[]).filter(i=>i.userId!==e.id);return a.length===s?{error:"not_in_queue"}:(pe({...t,queue:a}),{ok:!0,state:ne()})}function ic(e){if(!p.user)return{error:"signin"};const s=oe(),a=(s.queue||[]).filter(i=>i.id!==e);return pe({...s,queue:a}),{ok:!0,state:ne()}}function rr(e="advance"){if(!p.user)return{error:"signin"};const s=oe(),a=s.nowPlaying,i=!!(a&&a.house),n=a&&!i?[ja(a,e),...s.history||[]].slice(0,30):[...s.history||[]],o=[...s.queue||[]];let l=typeof s.houseIndex=="number"?s.houseIndex:0;i&&(l=(l+1)%ir());let d=null;return o.length?d=Hs(o.shift()):d=Ws($t(l)),pe({nowPlaying:d,queue:o,history:n,houseIndex:l}),{ok:!0,state:ne()}}function nc(){return rr("skip")}function rc(){const e=p.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s)return{error:"empty_stage"};if(s.house)return{error:"house_use_skip"};if(s.type==="freestyle")return{error:"freestyle_use_timer"};if(s.awaitingPlayAnother)return{error:"already_voting"};!(s.userId===e.id)&&ee();const i=s.playCount||1;if(i>=ws)return rr("max_streak");const n={...s,awaitingPlayAnother:!0,playAnotherVotes:{},playAnotherDeadline:Date.now()+30*1e3,nextTitle:s.title+" (take "+(i+1)+")"};return pe({...t,nowPlaying:n}),{ok:!0,state:ne()}}function oc(){const e=p.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s||s.type!=="freestyle")return{error:"no_freestyle"};if(!s.voteWindowOpen)return{error:"window_closed"};if(s.awaitingPlayAnother)return{error:"wrong_mode"};if((s.extensions||0)>=gs)return{error:"max_extensions"};const a={...s.keepGoingVotes||{}};if(a[e.id])return{error:"already_voted",state:ne()};a[e.id]=Date.now();let i={...s,keepGoingVotes:a};const n=Object.keys(a).length;return n>=da&&(s.extensions||0)<gs&&(i={...i,extensions:(s.extensions||0)+1,endsAt:Date.now()+fi,keepGoingVotes:{},voteWindowOpen:!0}),pe({...t,nowPlaying:i}),{ok:!0,state:ne(),votes:Object.keys(i.keepGoingVotes||{}).length||n}}function lc(e=2){const t=oe(),s=t.nowPlaying;if(!s||s.type!=="freestyle")return{error:"no_freestyle"};const a={...s.keepGoingVotes||{}},i=Object.keys(a).length;for(let l=0;l<e;l++){const d="fan_sim_"+(i+l)+"_"+Date.now().toString(36);a[d]=Date.now()}let n={...s,keepGoingVotes:a};return Object.keys(a).length>=da&&(s.extensions||0)<gs&&(n={...n,extensions:(s.extensions||0)+1,endsAt:Date.now()+fi,keepGoingVotes:{},voteWindowOpen:!0}),pe({...t,nowPlaying:n}),{ok:!0,state:ne()}}function cc(){const e=p.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s||!s.awaitingPlayAnother)return{error:"no_vote"};const a={...s.playAnotherVotes||{}};if(a[e.id])return{error:"already_voted",state:ne()};a[e.id]=Date.now();let i={...s,playAnotherVotes:a};const n=Object.keys(a).length,o=s.playCount||1;return n>=pa&&o<ws&&(i={...i,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:o+1,title:s.nextTitle||s.title,startedAt:Date.now(),endsAt:null,nextTitle:null}),pe({...t,nowPlaying:i}),{ok:!0,state:ne()}}function dc(e=2){const t=oe(),s=t.nowPlaying;if(!s||!s.awaitingPlayAnother)return{error:"no_vote"};const a={...s.playAnotherVotes||{}},i=Object.keys(a).length;for(let d=0;d<e;d++)a["fan_pa_"+(i+d)+"_"+Date.now().toString(36)]=Date.now();let n={...s,playAnotherVotes:a};const o=Object.keys(a).length,l=s.playCount||1;return o>=pa&&l<ws&&(n={...n,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:l+1,title:s.nextTitle||s.title,startedAt:Date.now(),endsAt:null,nextTitle:null}),pe({...t,nowPlaying:n}),{ok:!0,state:ne()}}function pc(e="fire"){const t=oe(),s=t.nowPlaying;if(!s)return{error:"empty_stage"};const a=["fire","heart","clap"].includes(e)?e:"fire",i={...s.reactions||{fire:0,heart:0,clap:0}};return i[a]=(i[a]||0)+1,pe({...t,nowPlaying:{...s,reactions:i}}),{ok:!0,state:ne()}}function uc(e){const t=p.user;if(!t)return{error:"signin"};const s=String(e||"").trim().slice(0,200);if(!s)return{error:"empty"};const a=oe(),i=a.nowPlaying;if(!i)return{error:"empty_stage"};const n=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:t.id,username:t.username,text:s,at:Date.now()}].slice(-40);return pe({...a,nowPlaying:{...i,chat:n}}),{ok:!0,state:ne()}}function mc(e=20){return(oe().history||[]).slice(0,e)}function Ke(){const e=p.fanClubs||{clubs:[],posts:{},seeded:!1};return{clubs:Array.isArray(e.clubs)?e.clubs:[],posts:e.posts&&typeof e.posts=="object"?e.posts:{},seeded:!!e.seeded}}function jt(e){p={...p,fanClubs:e},C(p)}function or(e){return e+"_"+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function lr(){return Ge(),Ke().clubs.slice().sort((e,t)=>e.official&&!t.official?-1:!e.official&&t.official?1:(t.memberCount||0)-(e.memberCount||0))}function Ss(e){return Ge(),Ke().clubs.find(t=>t.id===e)||null}function Ge({force:e=!1}={}){const t=Ke();if(t.seeded&&!e&&t.clubs.length>0)return{skipped:!0,clubs:t.clubs};const s=Date.now(),a=864e5,i=[{id:"fc_official_dbs",name:"DatBoiSkeet Official",description:"Official DatBoiSkeet fan club inside DBS Lounge. Music drops, Vault tips, Foreign X-Change, and community rules — DBS branding first. Follow optional.",graphic:"/brand/logo-dbs-v3@2x.webp",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"public",official:!0,members:["dbs"],followers:["dbs"],mods:["dbs"],memberCount:1,createdAt:s-14*a},{id:"fc_lss_crew",name:"Long Story Short Crew",description:"Creator club for LSS listeners. Public lounge chat + Skeet+ members-only drop room.",graphic:"/music/01_Long_Story_Short_Coming_Soon.jpg",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"members",official:!1,members:["dbs"],followers:["dbs"],mods:["dbs"],memberCount:1,createdAt:s-7*a},{id:"fc_ladies_only",name:"Ladies Only Circle",description:"Paid / Skeet+ gated room demo for Ladies Only supporters. Unlock via membership TEST MODE.",graphic:"/music/02_Ladies_Only_Coming_Soon.jpg",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"paid",official:!1,members:["dbs"],followers:[],mods:["dbs"],memberCount:1,createdAt:s-3*a}],n={fc_official_dbs:[{id:"fcp_welcome",userId:"dbs",username:"DatBoiSkeet",text:"Welcome to the official club. Discover music on #/music · explore more on #/explore. No forced follows.",at:s-2*a,pinned:!0,removed:!1},{id:"fcp_lounge",userId:"dbs",username:"DatBoiSkeet",text:"DBS Lounge rooms stay music-first. Keep it respectful — see Community Guidelines.",at:s-a,pinned:!1,removed:!1}],fc_lss_crew:[{id:"fcp_lss1",userId:"dbs",username:"DatBoiSkeet",text:"LSS cover art is live in Coming Soon. Members can discuss theories here.",at:s-a,pinned:!1,removed:!1}],fc_ladies_only:[{id:"fcp_lo1",userId:"dbs",username:"DatBoiSkeet",text:"Skeet+ members-only preview chat. Join Skeet+ on Pricing (TEST MODE) to unlock.",at:s-12*36e5,pinned:!0,removed:!1}]};return jt({clubs:i,posts:n,seeded:!0}),{seeded:i.length,clubs:i}}function hc({name:e,description:t,graphic:s,privacy:a="public"}={}){const i=p.user;if(!i)return{error:"signin"};ee()||i.role==="creator"||i.id;const n=String(e||"").trim().slice(0,48);if(!n)return{error:"name"};const o=["public","members","paid"].includes(a)?a:"public";Ge();const l=Ke(),d={id:or("fc"),name:n,description:String(t||"").trim().slice(0,280),graphic:String(s||"/brand/logo-dbs-v3@2x.webp").slice(0,200),hostId:i.id,hostName:i.username,privacy:o,official:!1,members:[i.id],followers:[i.id],mods:[i.id],memberCount:1,createdAt:Date.now()};return jt({...l,clubs:[d,...l.clubs],posts:{...l.posts,[d.id]:[]},seeded:!0}),{ok:!0,club:d}}function ua(e,t){Ge();const s=Ke(),a=s.clubs.findIndex(o=>o.id===e);if(a<0)return{error:"missing"};const i=t({...s.clubs[a]});if(i&&i.error)return i;const n=s.clubs.slice();return n[a]=i,jt({...s,clubs:n}),{ok:!0,club:i}}function cr(e){const t=p.user;return t?ua(e,s=>{const a=new Set(s.members||[]);return a.add(t.id),{...s,members:[...a],memberCount:a.size}}):{error:"signin"}}function gc(e){const t=p.user;return t?ua(e,s=>{if(s.hostId===t.id)return{error:"host"};const a=(s.members||[]).filter(i=>i!==t.id);return{...s,members:a,memberCount:a.length}}):{error:"signin"}}function fc(e){const t=p.user;return t?ua(e,s=>{const a=new Set(s.followers||[]);return a.add(t.id),{...s,followers:[...a]}}):{error:"signin"}}function vc(e){const t=p.user;return t?ua(e,s=>{const a=(s.followers||[]).filter(i=>i!==t.id);return{...s,followers:a}}):{error:"signin"}}function dr(e){const t=p.user;if(!t)return!1;const s=Ss(e);return!!(s&&(s.members||[]).includes(t.id))}function bc(e){const t=p.user;if(!t)return!1;const s=Ss(e);return!!(s&&(s.followers||[]).includes(t.id))}function fs(e){const t=p.user;if(!t)return!1;const s=Ss(e);return s?ee()||s.hostId===t.id||(s.mods||[]).includes(t.id):!1}function pr(e){const t=Ss(e);if(!t)return{ok:!1,reason:"missing"};if(t.privacy==="public")return{ok:!0,reason:"public"};if(t.privacy==="members")return dr(e)||fs(e)?{ok:!0,reason:"member"}:{ok:!1,reason:"members"};if(t.privacy==="paid"){const s=xt();return({null:0,"skeet+":1,backstage:2,inner:3}[s||"null"]||0)>=1||fs(e)?{ok:!0,reason:"paid"}:{ok:!1,reason:"paid"}}return{ok:!0,reason:"public"}}function yc(e){return Ge(),(Ke().posts[e]||[]).filter(s=>!s.removed).slice().sort((s,a)=>s.pinned&&!a.pinned?-1:!s.pinned&&a.pinned?1:(a.at||0)-(s.at||0))}function kc(e,t){const s=p.user;if(!s)return{error:"signin"};const a=pr(e);if(!a.ok)return{error:"gated",reason:a.reason};const i=String(t||"").trim().slice(0,500);if(!i)return{error:"empty"};const n=Ke();if(!n.clubs.some(d=>d.id===e))return{error:"missing"};const o={id:or("fcp"),userId:s.id,username:s.username,text:i,at:Date.now(),pinned:!1,removed:!1},l=[o,...n.posts[e]||[]].slice(0,100);return jt({...n,posts:{...n.posts,[e]:l}}),{ok:!0,post:o}}function wc(e,t){if(!fs(e))return{error:"mod"};const s=Ke(),a=(s.posts[e]||[]).map(i=>i.id===t?{...i,pinned:!i.pinned}:i);return jt({...s,posts:{...s.posts,[e]:a}}),{ok:!0}}function Sc(e,t){if(!fs(e))return{error:"mod"};const s=Ke(),a=(s.posts[e]||[]).map(i=>i.id===t?{...i,removed:!0}:i);return jt({...s,posts:{...s.posts,[e]:a}}),{ok:!0}}const vi=["instagram","tiktok","facebook","youtube","x","snapchat","other"],ur=[{id:"badge",minVerified:1,label:"Exclusive DBS badge",kind:"badge"},{id:"decoration",minVerified:2,label:"Premium avatar decoration",kind:"decoration"},{id:"skeet7",minVerified:3,label:"7 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:7},{id:"skeet30",minVerified:3,requireAllLinked:!0,label:"30 days Skeet+ (all linked · min 3)",kind:"membership_trial",membership:"skeet+",days:30}],mr=[{n:1,id:"m1",label:"Profile decoration",kind:"decoration"},{n:3,id:"m3",label:"7 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:7},{n:5,id:"m5",label:"30 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:30},{n:10,id:"m10",label:"Premium profile bundle",kind:"bundle"},{n:25,id:"m25",label:"30 days Backstage (TEST MODE)",kind:"membership_trial",membership:"backstage",days:30},{n:50,id:"m50",label:"30 days Inner Circle (TEST MODE)",kind:"membership_trial",membership:"inner",days:30},{n:100,id:"m100",label:"Founder Promoter badge / VIP",kind:"badge"}];function hr(){return{platformsLinked:[],challenge:null,submissions:[],rewardsClaimed:[]}}function gr(){return{code:"",invitees:[],milestonesClaimed:[]}}function fr(e){const t=hr();return!e||typeof e!="object"?t:{platformsLinked:Array.isArray(e.platformsLinked)?e.platformsLinked:[],challenge:e.challenge&&typeof e.challenge=="object"?e.challenge:null,submissions:Array.isArray(e.submissions)?e.submissions:[],rewardsClaimed:Array.isArray(e.rewardsClaimed)?e.rewardsClaimed:[]}}function vr(e){const t=gr();return!e||typeof e!="object"?t:{code:typeof e.code=="string"?e.code:"",invitees:Array.isArray(e.invitees)?e.invitees:[],milestonesClaimed:Array.isArray(e.milestonesClaimed)?e.milestonesClaimed:[]}}function Je(e){return p={...p,shareEarn:fr(e)},C(p),p.shareEarn}function ot(e){return p={...p,referEarn:vr(e)},C(p),p.referEarn}function br(e){if(!e)return"DBS-GUEST";const t=String(e.username||"fan").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8)||"FAN",s=String(e.id||"").replace(/^u_/,"").slice(-4).toUpperCase()||"DEMO";return`DBS-${t}-${s}`}function Ct(e){return e+"_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function ss(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function J(){return fr(p.shareEarn)}function Fi(){return vi.slice()}function $c(){return ur.map(e=>({...e}))}function xc({platform:e,handle:t="",url:s="",followers:a=""}={}){if(!p.user)return{error:"signin"};const n=String(e||"").toLowerCase().trim();if(!vi.includes(n))return{error:"bad_platform"};const o=String(t||"").trim().replace(/^@+/,"").slice(0,64),l=String(s||"").trim().slice(0,240);if(!o&&!l)return{error:"required"};const d=J();if((d.platformsLinked||[]).some(m=>m.platform===n))return{error:"already_linked",shareEarn:d};const c={id:Ct("plat"),platform:n,handle:o,url:l,followers:String(a||"").trim().slice(0,32),linkedAt:Date.now()},u={...d,platformsLinked:[...d.platformsLinked||[],c]};return Je(u),{ok:!0,platform:c,shareEarn:J()}}function Ec(e){const t=J(),s={...t,platformsLinked:(t.platformsLinked||[]).filter(a=>a.id!==e)};return Je(s),J()}function Ac(){if(!p.user)return{error:"signin"};const t=J();if(t.challenge&&t.challenge.status==="active")return{error:"already_active",shareEarn:t};const s=Ft().code,a=Date.now(),i={id:Ct("ch"),startedAt:a,endsAt:a+24*60*60*1e3,adTitle:"DatBoiSkeet · Long Story Short & Ladies Only",caption:"🔥 Join me on DBS — music, live, vault & more. Long Story Short + Ladies Only Coming Soon. #DBS #PaidPartnership #ad",trackedLink:`https://dbs.app/s/${s}?utm=share24`,status:"active",disclosure:"Incentivized promotion · disclose #ad / Paid partnership"};return Je({...t,challenge:i,submissions:[],rewardsClaimed:(t.rewardsClaimed||[]).filter(n=>n.challengeId!==i.id)}),{ok:!0,challenge:i,shareEarn:J()}}function Cc(){const e=J();if(!e.challenge||e.challenge.status!=="active")return{error:"no_active"};const t={...e.challenge,startedAt:Date.now()-25*60*60*1e3,endsAt:Date.now()-1*60*60*1e3,simulatedElapsed:!0};return Je({...e,challenge:t}),{ok:!0,challenge:t,shareEarn:J()}}function Tc(){const e=J();if(!e.challenge)return{error:"none"};const t={...e.challenge,status:"ended",endedAt:Date.now()};return Je({...e,challenge:t}),{ok:!0,challenge:t,shareEarn:J()}}function Dc({platform:e,postUrl:t=""}={}){if(!p.user)return{error:"signin"};const a=J();if(!a.challenge||a.challenge.status!=="active")return{error:"no_challenge"};const i=String(e||"").toLowerCase().trim();if(!vi.includes(i))return{error:"bad_platform"};const n=String(t||"").trim().slice(0,400);if(!n)return{error:"required"};if((a.submissions||[]).some(d=>d.platform===i&&(d.status==="pending"||d.status==="verified")))return{error:"duplicate",shareEarn:a};const l={id:Ct("sub"),platform:i,postUrl:n,submittedAt:Date.now(),status:"pending",note:"Awaiting 24h continuous visibility check (manual/demo)"};return Je({...a,submissions:[l,...a.submissions||[]]}),{ok:!0,submission:l,shareEarn:J()}}function Ki(e,t,{note:s=""}={}){if(!["pending","verified","rejected"].includes(t))return{error:"bad_status"};const a=J();let i=null;const n=(a.submissions||[]).map(o=>o.id!==e?o:(i={...o,status:t,verifiedAt:t==="verified"?Date.now():o.verifiedAt||null,note:s||(t==="verified"?"Demo verified · 24h visibility assumed (manual)":t==="rejected"?"Rejected · ineligible / deleted / unverified":o.note)},i));return i?(Je({...a,submissions:n}),{ok:!0,submission:i,shareEarn:J()}):{error:"not_found"}}function yr(){const e=J();return new Set((e.submissions||[]).filter(s=>s.status==="verified").map(s=>s.platform)).size}function kr(){const e=J(),t=yr(),s=(e.platformsLinked||[]).length,a=new Set((e.rewardsClaimed||[]).map(i=>i.tierId));return ur.filter(i=>{if(a.has(i.id)||t<i.minVerified)return!1;if(i.requireAllLinked){if(s<3)return!1;const n=new Set((e.platformsLinked||[]).map(l=>l.platform)),o=new Set((e.submissions||[]).filter(l=>l.status==="verified").map(l=>l.platform));for(const l of n)if(!o.has(l))return!1}return!0}).map(i=>({...i,verifiedCount:t,linkedCount:s}))}function Mc(e){var o;if(!p.user)return{error:"signin"};const a=kr().find(l=>l.id===e);if(!a)return{error:"not_claimable"};const i=J(),n={id:Ct("srw"),tierId:a.id,label:a.label,kind:a.kind,at:Date.now(),challengeId:((o=i.challenge)==null?void 0:o.id)||null,testMode:!0};return a.membership&&ta(a.membership,!0),Je({...i,rewardsClaimed:[n,...i.rewardsClaimed||[]]}),{ok:!0,claim:n,shareEarn:J(),membership:xt()}}function Lc(){return Je(hr()),J()}function $e(){return vr(p.referEarn)}function Pc(){return mr.map(e=>({...e}))}function Ft(){const e=p.user,t=$e();if(t.code)return t;const s=br(e);return ot({...t,code:s})}function wr(){return`https://dbs.app/r/${Ft().code}`}function Ic({username:e=""}={}){const t=p.user;if(!t)return{error:"signin"};const s=Ft(),a=String(e||"").trim().slice(0,24)||"Invitee"+(s.invitees.length+1);if(a.toLowerCase()===String(t.username||"").toLowerCase())return{error:"self_referral"};const i={id:Ct("inv"),username:a,signedUpAt:Date.now(),activeDays:[],status:"pending",welcomeClaimed:!1,flaggedFraud:!1};return ot({...s,invitees:[i,...s.invitees||[]]}),{ok:!0,invitee:i,referEarn:$e()}}function _c(e){const t=$e();let s=null;const a=(t.invitees||[]).map(i=>i.id!==e?i:i.flaggedFraud?(s={error:"fraud",invitee:i},i):(s={...i,welcomeClaimed:!0,welcomeAt:Date.now()},s));return s?s.error?s:(ot({...t,invitees:a}),{ok:!0,invitee:s,perk:"Welcome badge / profile decoration (TEST MODE)"}):{error:"not_found"}}function qc(e,{day:t=null}={}){const s=$e();let a=null;const i=(s.invitees||[]).map(n=>{if(n.id!==e)return n;if(n.flaggedFraud)return a={error:"fraud",invitee:n},n;const o=Number(n.signedUpAt)||Date.now(),l=o+7*864e5;let d=t;if(!d){const g=new Set(n.activeDays||[]);let f=null;for(let b=0;b<7;b++){const y=ss(o+b*864e5);if(!g.has(y)){f=y;break}}if(!f)return a={error:"window_full",invitee:n},n;d=f}const c=Date.parse(d+"T12:00:00Z");if(!Number.isFinite(c)||c<o-864e5||c>l)return a={error:"outside_window",invitee:n},n;const u=Array.from(new Set([...n.activeDays||[],d])).sort();let m=n.status;return u.length>=3&&(m="active"),a={...n,activeDays:u,status:m},a});return a?a.error?a:(ot({...s,invitees:i}),{ok:!0,invitee:a,referEarn:$e()}):{error:"not_found"}}function Gi(e,t=!0){const s=$e();let a=null;const i=(s.invitees||[]).map(n=>{var o;return n.id!==e?n:(a={...n,flaggedFraud:!!t,status:t?"fraud":((o=n.activeDays)==null?void 0:o.length)>=3?"active":"pending"},a)});return a?(ot({...s,invitees:i}),{ok:!0,invitee:a,referEarn:$e()}):{error:"not_found"}}function Sr(){return($e().invitees||[]).filter(t=>t.status==="active"&&!t.flaggedFraud).length}function $r(){const e=$e(),t=Sr(),s=new Set((e.milestonesClaimed||[]).map(a=>a.milestoneId));return mr.filter(a=>t>=a.n&&!s.has(a.id)).map(a=>({...a,activeCount:t}))}function Bc(e){if(!p.user)return{error:"signin"};const a=$r().find(o=>o.id===e);if(!a)return{error:"not_claimable"};const i=$e(),n={id:Ct("rmw"),milestoneId:a.id,n:a.n,label:a.label,kind:a.kind,at:Date.now(),testMode:!0,note:"Distinct from Clippers commissions · TEST MODE · no real billing"};return a.membership&&ta(a.membership,!0),ot({...i,milestonesClaimed:[n,...i.milestonesClaimed||[]]}),{ok:!0,claim:n,referEarn:$e(),membership:xt()}}function Oc(){const e=p.user;return ot({...gr(),code:br(e)}),$e()}function Nc({force:e=!1}={}){if(!p.user)return{error:"signin"};const s=Ft();if(!e&&(s.invitees||[]).length>0)return{error:"already_seeded",referEarn:s};const a=Date.now(),i=864e5,n=[{id:"inv_demo_a",username:"NovaFan",signedUpAt:a-5*i,activeDays:[ss(a-5*i),ss(a-4*i),ss(a-3*i)],status:"active",welcomeClaimed:!0,flaggedFraud:!1},{id:"inv_demo_b",username:"ClipCurious",signedUpAt:a-2*i,activeDays:[ss(a-2*i)],status:"pending",welcomeClaimed:!0,flaggedFraud:!1},{id:"inv_demo_c",username:"BottyMcBot",signedUpAt:a-6*i,activeDays:[],status:"fraud",welcomeClaimed:!1,flaggedFraud:!0}];return ot({...s,invitees:n,milestonesClaimed:s.milestonesClaimed||[]}),{ok:!0,seeded:n.length,referEarn:$e()}}const ma=[{id:"youtube",label:"YouTube",color:"#ff4444",hint:"YouTube Live / Studio"},{id:"tiktok",label:"TikTok",color:"#69c9d0",hint:"TikTok LIVE"},{id:"twitch",label:"Twitch",color:"#9146ff",hint:"Twitch Dashboard"},{id:"facebook",label:"Facebook",color:"#1877f2",hint:"Facebook Live"},{id:"instagram",label:"Instagram",color:"#e1306c",hint:"IG Live (demo)"},{id:"kick",label:"Kick",color:"#53fc18",hint:"Kick Studio"},{id:"custom_rtmp",label:"Custom RTMP",color:"#ffb020",hint:"Any RTMP endpoint"}],Rc=()=>({freeMaxDestinations:2,houseUnlimited:!0,houseUserIds:["dbs"],tiers:{bronze:{id:"bronze",label:"Bronze",price:4.99,maxDestinations:3,placement:!1,badge:"Bronze Streamer",perks:["3 destination slots","Campaign badge on Go Live"]},silver:{id:"silver",label:"Silver",price:9.99,maxDestinations:5,placement:!0,badge:"Silver Streamer",perks:["5 destination slots","Campaign badge","Explore / Live placement flag"]},gold:{id:"gold",label:"Gold",price:19.99,maxDestinations:7,placement:!0,badge:"Gold Streamer",perks:["All 7 destinations","Campaign badge","Priority Explore / Live placement"]}}});function Ns(){return{platforms:{},selected:[],session:null,history:[],ingest:null,campaign:{tier:null,status:"none",enrolledAt:null,cancelledAt:null},campaignConfig:null}}function ha(){const e=p.restream||Ns();return{...Ns(),...e,platforms:e.platforms&&typeof e.platforms=="object"?e.platforms:{},selected:Array.isArray(e.selected)?e.selected:[],history:Array.isArray(e.history)?e.history:[],campaign:{...Ns().campaign,...e.campaign||{}}}}function Kt(e){return p={...p,restream:e},C(p),p.restream}function jc(e){var s,a;if((s=e.ingest)!=null&&s.rtmpUrl&&((a=e.ingest)!=null&&a.streamKey))return e;const t="dbs_demo_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,10);return{...e,ingest:{rtmpUrl:"rtmp://ingest.dbs.local/live",streamKey:t,rotatedAt:Date.now(),note:"TEST MODE demo key · not a real media server"}}}function lt(){let e=ha();const t=e.ingest;return e=jc(e),e.ingest!==t&&Kt(e),e}function xr(){const e=lt();return ma.map(t=>{const s=e.platforms[t.id]||{};return{...t,connected:!!s.connected,connectedAt:s.connectedAt||null,handle:s.handle||"",lastError:s.lastError||null,enabled:s.enabled!==!1}})}function Fc(e,t=""){const s=ma.find(n=>n.id===e);if(!s)return{error:"unknown_platform"};const a=lt(),i={...a.platforms,[e]:{id:e,connected:!0,connectedAt:Date.now(),handle:String(t||s.label+" Demo").slice(0,40),lastError:null,enabled:!0}};return Kt({...a,platforms:i}),{ok:!0,platform:xr().find(n=>n.id===e)}}function Kc(e){var n;const t=lt();if(!((n=t.platforms[e])!=null&&n.connected))return{error:"not_connected"};const s={...t.platforms,[e]:{...t.platforms[e],connected:!1,disconnectedAt:Date.now(),lastError:null}},a=(t.selected||[]).filter(o=>o!==e);let i=t.session;return i&&!i.endedAt&&(i={...i,destinations:(i.destinations||[]).map(o=>o.id===e?{...o,status:"disconnected",health:"error"}:o)}),Kt({...t,platforms:s,selected:a,session:i}),{ok:!0}}function Gc(e){const t=lt(),s=new Set(Object.values(t.platforms).filter(i=>i.connected).map(i=>i.id)),a=(Array.isArray(e)?e:[]).filter(i=>s.has(i)).slice(0,7);return Kt({...t,selected:a}),{ok:!0,selected:a}}function Vc(e){var a;const t=lt();if(!((a=t.platforms[e])!=null&&a.connected))return{error:"not_connected"};const s=new Set(t.selected||[]);return s.has(e)?s.delete(e):s.add(e),Gc([...s])}function Er(){var a,i,n;const e=ha(),t=Rc(),s=e.campaignConfig||{};return{...t,...s,tiers:{...t.tiers,...s.tiers||{},bronze:{...t.tiers.bronze,...((a=s.tiers)==null?void 0:a.bronze)||{}},silver:{...t.tiers.silver,...((i=s.tiers)==null?void 0:i.silver)||{}},gold:{...t.tiers.gold,...((n=s.tiers)==null?void 0:n.gold)||{}}},freeMaxDestinations:Number(s.freeMaxDestinations)>0?Number(s.freeMaxDestinations):t.freeMaxDestinations,houseUnlimited:s.houseUnlimited!==!1,houseUserIds:Array.isArray(s.houseUserIds)?s.houseUserIds:t.houseUserIds}}function Ar(){return{...Ns().campaign,...ha().campaign||{}}}function Uc(){const e=p.user;if(!e)return!1;const t=Er();return e.id==="dbs"||e.username==="DatBoiSkeet"?!0:(t.houseUserIds||[]).includes(e.id)}function Cr(){const e=Er();if(Uc()&&e.houseUnlimited)return{max:ma.length,source:"house_free",tier:null};const t=Ar();if(t.status==="active"&&t.tier&&e.tiers[t.tier]){const s=e.tiers[t.tier];return{max:s.maxDestinations,source:"campaign",tier:t.tier,badge:s.badge,placement:!!s.placement}}return{max:e.freeMaxDestinations,source:"free_baseline",tier:null,badge:null,placement:!1}}function zc(){const e=p.user;if(!e)return{error:"signin"};const t=lt();if(t.session&&!t.session.endedAt)return{error:"already_live"};const s=Object.values(t.platforms).filter(d=>d.connected).map(d=>d.id);if(!s.length)return{error:"no_platforms"};let a=(t.selected||[]).filter(d=>s.includes(d));if(!a.length)return{error:"none_selected"};const i=Cr();if(a.length>i.max)return{error:"over_cap",max:i.max,selected:a.length,source:i.source};const n=a.map((d,c)=>{const u=ma.find(g=>g.id===d),m=c===a.length-1&&a.length>2?"connecting":"streaming";return{id:d,label:(u==null?void 0:u.label)||d,status:m==="connecting"?"connecting":"streaming",health:m,startedAt:Date.now()}}),o=Ar(),l={id:Ct("rs"),hostId:e.id,hostName:e.username,startedAt:Date.now(),destinations:n,selected:a.slice(),campaignTier:o.status==="active"?o.tier:null,campaignBadge:i.badge||null,placement:!!i.placement,testMode:!0,endedAt:null};return Kt({...t,session:l,selected:a}),{ok:!0,session:l}}function Hc(){const e=lt();if(!e.session||e.session.endedAt)return{error:"offline"};const t={...e.session,endedAt:Date.now(),destinations:(e.session.destinations||[]).map(a=>({...a,status:a.health==="error"?"error":"ended",health:a.health==="error"?"error":"ended"}))},s=[t,...e.history||[]].slice(0,20);return Kt({...e,session:null,history:s}),{ok:!0,session:t,history:s}}function Wc(){const e=ha().session;return e&&!e.endedAt?e:null}function Tr(){const e=T().connectPrefs||{};return{ageConfirmed:!!e.ageConfirmed,rulesAccepted:!!e.rulesAccepted}}function Vi(e={}){const t={...Tr(),...e};return t.ageConfirmed||(t.rulesAccepted=!1),Co(s=>({...s,connectPrefs:t})),t}const Dr=[{id:"day_one",name:"Day One",blurb:"Joined the Loyalty Club — recognition starts with showing up, not spending.",need:0,kind:"join"},{id:"listener",name:"Listener",blurb:"Logged authorized listening (demo tick). Not purchase-only.",need:1,kind:"listen"},{id:"live_attendee",name:"Live Regular",blurb:"Attended a livestream (demo stub). Healthy participation.",need:1,kind:"live"},{id:"club_member",name:"Club Member",blurb:"Joined a Fan Club discussion community.",need:1,kind:"club"},{id:"helper",name:"Helper",blurb:"Community-helper milestone (welcome tip / guidelines share demo).",need:1,kind:"help"},{id:"top_fan",name:"Top Fan",blurb:"Earned 50+ loyalty points from mixed healthy actions — gifts alone do not unlock this.",needPoints:50}];function Mr(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function $s(){const e=p.loyalty||{};return{points:Number(e.points)||0,history:Array.isArray(e.history)?e.history:[],badges:Array.isArray(e.badges)?e.badges:[],publicVisible:e.publicVisible!==!1,lastActionAt:e.lastActionAt&&typeof e.lastActionAt=="object"?e.lastActionAt:{},dayCounts:e.dayCounts&&typeof e.dayCounts=="object"?e.dayCounts:{}}}function bi(e){p={...p,loyalty:e},C(p)}function Yc(){return"loy_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Qc(e,{cooldownMs:t=8e3,dailyCap:s=8}={}){const a=$s(),i=Date.now(),n=Number(a.lastActionAt[e])||0;if(i-n<t)return{ok:!1,reason:"cooldown"};const o=Mr(i);return((a.dayCounts[o]||{})[e]||0)>=s?{ok:!1,reason:"daily_cap"}:{ok:!0}}function Jc(e){const t=new Set(e.badges||[]),s={};return(e.history||[]).forEach(a=>{s[a.kind]=(s[a.kind]||0)+1}),Dr.forEach(a=>{if(!t.has(a.id)){if(a.needPoints!=null){e.points>=a.needPoints&&t.add(a.id);return}if(a.id==="day_one"){((e.history||[]).length>0||e.points>0)&&t.add(a.id);return}(s[a.kind]||0)>=(a.need||1)&&t.add(a.id)}}),[...t]}function xs(){return $s()}function Xc(e){const t=$s();return bi({...t,publicVisible:!!e}),xs()}function Zc(e,{points:t=5,note:s=""}={}){if(!p.user)return{error:"signin"};const i=Qc(e);if(!i.ok)return{error:i.reason};const n=$s(),o=Date.now(),l=Mr(o),d={...n.dayCounts,[l]:{...n.dayCounts[l]||{},[e]:((n.dayCounts[l]||{})[e]||0)+1}},c={id:Yc(),at:o,kind:e,points:t,note:String(s||e).slice(0,120)},u={...n,points:n.points+t,history:[c,...n.history].slice(0,80),lastActionAt:{...n.lastActionAt,[e]:o},dayCounts:d};return u.badges.includes("day_one")||(u.history=u.history),u.badges=Jc(u),u.badges.includes("day_one")||(u.badges=["day_one",...u.badges]),bi(u),{ok:!0,loyalty:xs(),entry:c,newBadges:u.badges.filter(m=>!(n.badges||[]).includes(m))}}function Lr(){const e=xs(),t=new Set(e.badges||[]);return Dr.map(s=>({...s,unlocked:t.has(s.id)}))}function ed(){return bi({points:0,history:[],badges:[],publicVisible:!0,lastActionAt:{},dayCounts:{}}),xs()}function Tt(){const e=p.openMic||{};return{applications:Array.isArray(e.applications)?e.applications:[],seeded:!!e.seeded,houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0}}function ga(e){p={...p,openMic:e},C(p)}function td(){return"om_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Gt({force:e=!1}={}){const t=Tt();if(t.seeded&&!e&&t.applications.length>0)return{skipped:!0,applications:t.applications};const s=Date.now(),a=864e5,i=[{id:"om_demo_approved",userId:"u_ria",username:"RiaLoops",talent:"producer",trackTitle:"Midnight Pads (demo)",profileNote:"Beatmaker · looking to collab on LSS energy",rightsCertified:!0,status:"approved",at:s-10*a,reviewedAt:s-9*a},{id:"om_demo_pending",userId:"u_dez",username:"DezOnMic",talent:"rapper",trackTitle:"Porch Light Freestyle",profileNote:"Opt-in showcase · not pay-to-win",rightsCertified:!0,status:"pending",at:s-2*a},{id:"om_demo_rejected",userId:"u_spam",username:"SpamBeats",talent:"dj",trackTitle:"Untitled drop",profileNote:"No rights cert honesty",rightsCertified:!1,status:"rejected",at:s-5*a,reviewedAt:s-4*a,reviewNote:"Rights certification required"}],n=typeof t.houseIndex=="number"?t.houseIndex:0;return ga({applications:i,seeded:!0,houseIndex:n}),{seeded:i.length,applications:i}}function Fa({status:e=null}={}){Gt();let t=Tt().applications.slice();return e&&(t=t.filter(s=>s.status===e)),t.sort((s,a)=>(a.at||0)-(s.at||0))}function sd(){return Fa({status:"approved"})}function ad(){const e=Tt();return $t(typeof e.houseIndex=="number"?e.houseIndex:0)}function id(){const e=Tt(),t=((typeof e.houseIndex=="number"?e.houseIndex:0)+1)%ir();return ga({...e,houseIndex:t}),$t(t)}function nd({talent:e="rapper",trackTitle:t="",profileNote:s="",rightsCertified:a=!1}={}){const i=p.user;if(!i)return{error:"signin"};if(!a)return{error:"rights"};const n=String(t||"").trim().slice(0,80);if(!n)return{error:"title"};Gt();const o=Tt();if(o.applications.some(d=>d.userId===i.id&&d.status==="pending"))return{error:"pending"};const l={id:td(),userId:i.id,username:i.username,talent:String(e||"other").slice(0,32),trackTitle:n,profileNote:String(s||"").trim().slice(0,240),rightsCertified:!0,status:"pending",at:Date.now()};return ga({...o,applications:[l,...o.applications],seeded:!0}),{ok:!0,application:l}}function Ka(e,t,s=""){if(!ee())return{error:"admin"};if(!["pending","approved","rejected"].includes(t))return{error:"status"};const i=Tt();let n=null;const o=i.applications.map(l=>l.id!==e?l:(n={...l,status:t,reviewedAt:Date.now(),reviewNote:String(s||"").slice(0,160)},n));return n?(ga({...i,applications:o}),{ok:!0,application:n}):{error:"missing"}}function rd(){var x,D;Gt(),Ge();try{Es(),je()}catch{}const e=Tt().applications||[],t={pending:0,approved:0,rejected:0};e.forEach(k=>{const M=k.status||"pending";t[M]!==void 0?t[M]+=1:t.pending+=1});const s=e.filter(k=>k.status==="pending").sort((k,M)=>(M.at||0)-(k.at||0)),a=Ke().clubs.slice().sort((k,M)=>(M.createdAt||0)-(k.createdAt||0)),i=a.slice(0,5).map(k=>({id:k.id,name:k.name,privacy:k.privacy,official:!!k.official,memberCount:k.memberCount||(k.members||[]).length||0,createdAt:k.createdAt||0})),n=$s(),l=Lr().filter(k=>k.unlocked),d=rt(),c=oi();let u=0,m=0,g=0,f=0,b=0;c.forEach(k=>{u=_(u+(k.gross||0)),m=_(m+(k.fees||0)),g=_(g+(k.creatorShare||0)),f=_(f+(k.dbsShare||0)),b+=k.count||0});const y=p.wallet||{balance:0},v=p.catalog||[],w=In();return{openMic:{total:e.length,byStatus:t,pending:s},fanClubs:{total:a.length,recent:i},loyalty:{points:n.points||0,badgeCount:l.length,badges:l.map(k=>k.name||k.id),publicVisible:n.publicVisible!==!1,historyCount:(n.history||[]).length,note:"Device-local loyalty for signed-in user · not a multi-fan leaderboard"},revenue:{demo:!0,chip:"demo figures · not production",gross:u,fees:m,creatorShare:g,dbsShare:f,earnCount:b,creatorAvailable:_(d.available||0),creatorHolds:_(d.holds||0),fanWalletBalance:Number(y.balance)||0,byCategory:c.filter(k=>k.count>0),catalogPublished:v.filter(k=>k.published).length,catalogTotal:v.length},moderation:{warnings:[],suspensions:[],note:"Stub · Content Polish owns Guidelines copy"},hotFeed:{openAlerts:(p.engagementAlerts||[]).filter(k=>!k.handledAt).length,totalAlerts:(p.engagementAlerts||[]).length,hotPosts:Array.isArray((x=p.hotFeed)==null?void 0:x.posts)?p.hotFeed.posts.length:0,hotLives:Array.isArray((D=p.hotFeed)==null?void 0:D.lives)?p.hotFeed.lives.length:0,note:"§38 · Build posts + Live Social lives"},stats:w}}const od={frames:"frame",effects:"effect",banners:"banner","name styles":"nameStyle",badges:"badge"},Ui=["frame-rodeo-gold","fx-snowfall","ban-skyline","name-neon","badge-dayone"];function ld(e){const t=e&&typeof e=="object"?e:{},s={};return["frame","effect","banner","nameStyle","badge"].forEach(a=>{typeof t[a]=="string"&&t[a]&&(s[a]=t[a])}),s}function Vt(){const e=p.profileShop||{};return{owned:Array.isArray(e.owned)?[...new Set(e.owned.map(String))]:[],equipped:ld(e.equipped),reduceMotion:!!e.reduceMotion}}function Ut(e){p={...p,profileShop:e},C(p)}function at(){return Vt()}function Pr(e){return e&&od[e.category]||null}function cd(e){const t=String(e||"");if(!t)return{error:"missing"};const s=Vt();return s.owned.includes(t)?{ok:!0,already:!0,shop:at()}:(Ut({...s,owned:[...s.owned,t]}),{ok:!0,shop:at()})}function dd(){const e=Vt(),t=new Set(e.owned);return Ui.forEach(s=>t.add(s)),Ut({...e,owned:[...t]}),{ok:!0,unlocked:Ui,shop:at()}}function pd(e){const t=String(e||"");return t.startsWith("frame-")?"frame":t.startsWith("fx-")?"effect":t.startsWith("ban-")?"banner":t.startsWith("name-")?"nameStyle":t.startsWith("badge-")?"badge":null}function ud(e){const t=String(e||""),s=Vt();if(!s.owned.includes(t))return{error:"not_owned"};const a=pd(t);if(!a)return{error:"unknown_item"};const i={...s.equipped,[a]:t};return Ut({...s,equipped:i}),{ok:!0,slot:a,shop:at()}}function md(e){const t=String(e||"");if(!["frame","effect","banner","nameStyle","badge"].includes(t))return{error:"bad_slot"};const s=Vt(),a={...s.equipped};return delete a[t],Ut({...s,equipped:a}),{ok:!0,shop:at()}}function hd(e){const t=Vt();return Ut({...t,reduceMotion:!!e}),at()}function gd(){return Ut({owned:[],equipped:{},reduceMotion:!1}),at()}const fd=5,vd=8,bd=[{id:"hp_maya_1",userId:"maya",username:"MayaBeats",text:"Studio loop dropping later — who wants the stem pack? 🔥",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",mediaType:"image",atOffset:36e5*5,likeUsers:["dbs","fanjay","u_seed_a","u_seed_b","u_seed_c","u_seed_d","clipqueen"],comments:[{id:"hc_m1",userId:"fanjay",username:"FanJay",text:"Send it 🙌"},{id:"hc_m2",userId:"dbs",username:"DatBoiSkeet",text:"Pull up on Spotlight"},{id:"hc_m3",userId:"clipqueen",username:"ClipQueen",text:"Stem pack please"}],shares:5},{id:"hp_jay_1",userId:"fanjay",username:"FanJay",text:"Foreign X-Change fit check from the community — buffalo energy.",image:"/merch/03_blue_buffalo_jacket.jpeg",mediaType:"image",atOffset:36e5*8,likeUsers:["maya","dbs","u_seed_a","u_seed_c","u_seed_d","clipqueen","u_seed_b"],comments:[{id:"hc_j1",userId:"maya",username:"MayaBeats",text:"Jacket hits"},{id:"hc_j2",userId:"clipqueen",username:"ClipQueen",text:"Need this"}],shares:6},{id:"hp_clip_1",userId:"clipqueen",username:"ClipQueen",text:"New clip cut from last Live — tag @DatBoiSkeet if you remix 🎬",image:"/merch/06_black_ptsd_tee.jpeg",mediaType:"video",atOffset:36e5*12,likeUsers:["dbs","maya","fanjay","u_seed_a","u_seed_b","u_seed_c"],comments:[{id:"hc_c1",userId:"dbs",username:"DatBoiSkeet",text:"Clean edit"},{id:"hc_c2",userId:"maya",username:"MayaBeats",text:"Clipping goals"},{id:"hc_c3",userId:"fanjay",username:"FanJay",text:"Saved"},{id:"hc_c4",userId:"u_seed_a",username:"FanA",text:"Fire"}],shares:4},{id:"hp_dbs_boost",userId:"dbs",username:"DatBoiSkeet",text:"Community shoutout — Maya + Jay keeping the feed hot. Keep posting.",image:"/music/02_Ladies_Only_Coming_Soon.jpg",mediaType:"image",atOffset:36e5*3,likeUsers:["maya","fanjay","u_seed_a"],comments:[{id:"hc_d1",userId:"maya",username:"MayaBeats",text:"Grateful 💛"},{id:"hc_d2",userId:"fanjay",username:"FanJay",text:"Lets go"}],shares:2}];function Pe(){const e=p.hotFeed||{};return{lives:Array.isArray(e.lives)?e.lives:[],posts:Array.isArray(e.posts)?e.posts:[],seededLives:!!e.seededLives,seededPosts:!!e.seededPosts,seededPostsVer:Number(e.seededPostsVer)||0}}function Ir(e){p={...p,hotFeed:e},C(p)}function yd(){const e={...p.profiles};let t=!1;const s=(a,i,n)=>{e[a]||(e[a]={id:a,username:i,bio:n,avatar:"",followers:[],following:["dbs"],verified:!1},t=!0)};s("maya","MayaBeats","Creator · beats & live demos"),s("fanjay","FanJay","Day-one fan · playlist curator"),s("clipqueen","ClipQueen","Clipper · community edits"),t&&(p={...p,profiles:e})}function Es(){Ln(),yd();const e=Pe(),t=Number(e.seededPostsVer)||0;if(e.seededPosts&&t>=2)return Pe();if(e.seededPosts&&t<2){const d={...p.likes||{}},c={...p.comments||{}},u={...p.postShares||{}},m=(g,f,b,y)=>{d[g]=[...new Set([...d[g]||[],...f])];const v=new Set((c[g]||[]).map(x=>x.id)),w=[...c[g]||[]];(b||[]).forEach(x=>{v.has(x.id)||w.push({...x,at:x.at||Date.now()})}),c[g]=w,u[g]=Math.max(Number(u[g]||0),y)};return m("hp_maya_1",["dbs","fanjay","u_seed_a","u_seed_b","u_seed_c","u_seed_d","clipqueen"],[{id:"hc_m3",userId:"clipqueen",username:"ClipQueen",text:"Stem pack please"}],5),m("hp_jay_1",["maya","dbs","u_seed_a","u_seed_c","u_seed_d","clipqueen","u_seed_b"],[{id:"hc_j2",userId:"clipqueen",username:"ClipQueen",text:"Need this"}],6),m("hp_clip_1",["dbs","maya","fanjay","u_seed_a","u_seed_b","u_seed_c"],[{id:"hc_c4",userId:"u_seed_a",username:"FanA",text:"Fire"}],4),d.hp_dbs_boost&&(d.hp_dbs_boost=(d.hp_dbs_boost||[]).slice(0,3),u.hp_dbs_boost=Math.min(Number(u.hp_dbs_boost||0),2)),p={...p,likes:d,comments:c,postShares:u,hotFeed:{...e,seededPosts:!0,seededPostsVer:2}},C(p),je(),Pe()}const s=new Set((p.posts||[]).map(d=>d.id)),a=[...p.posts||[]],i={...p.likes||{}},n={...p.comments||{}},o={...p.postShares||{}},l=Date.now();return bd.forEach(d=>{s.has(d.id)||(a.unshift({id:d.id,userId:d.userId,username:d.username,text:d.text,image:d.image||"",mediaType:d.mediaType||(d.image?"image":"text"),at:l-(d.atOffset||0),house:d.userId==="dbs"}),i[d.id]=[...d.likeUsers||[]],n[d.id]=(d.comments||[]).map(c=>({...c,text:c.text,at:l-(d.atOffset||0)+6e4})),d.shares&&(o[d.id]=d.shares))}),i.p1&&i.p1.length<3&&(i.p1=[...new Set([...i.p1||[],"maya","fanjay","u_seed_a"])]),i.p2&&i.p2.length<2&&(i.p2=[...new Set([...i.p2||[],"maya","fanjay"])]),(!n.p1||n.p1.length<2)&&(n.p1=[...n.p1||[],{id:"hc_p1a",userId:"maya",username:"MayaBeats",text:"Cover art goes crazy",at:l-8e7},{id:"hc_p1b",userId:"fanjay",username:"FanJay",text:"Been waiting on this",at:l-7e7}]),o.p1=Math.max(o.p1||0,2),o.p2=Math.max(o.p2||0,1),p={...p,posts:a,likes:i,comments:n,postShares:o,hotFeed:{...e,seededPosts:!0,seededPostsVer:2}},C(p),je(),Pe()}function fa(e){const t=p.likes&&p.likes[e]||[],s=p.comments&&p.comments[e]||[],a=p.postShares&&p.postShares[e]||0;return t.length+s.length+Number(a||0)}function je(){const e=Pe(),s=(p.posts||[]).map(l=>{const d=(p.likes&&p.likes[l.id]||[]).length,c=(p.comments&&p.comments[l.id]||[]).length,u=Number(p.postShares&&p.postShares[l.id]||0),m=d+c+u;return{id:l.id,postId:l.id,score:m,likes:d,comments:c,shares:u,username:l.username,userId:l.userId,preview:(l.text||"").slice(0,120),text:l.text||"",image:l.image||"",mediaType:l.mediaType||(l.image?"image":"text"),at:l.at||0,house:l.userId==="dbs"||!!l.house}}).filter(l=>l.score>=fd).sort((l,d)=>d.score-l.score||d.at-l.at).slice(0,vd),a=new Set((e.posts||[]).map(l=>l.postId||l.id)),i=Array.isArray(p.engagementAlerts)?[...p.engagementAlerts]:[],n=new Set(i.filter(l=>l.kind==="post").map(l=>l.refId));s.forEach(l=>{n.has(l.id)||a.has(l.id)&&e.posts.length||(i.unshift({id:"ea_post_"+l.id+"_"+Date.now().toString(36),kind:"post",refId:l.id,title:(l.preview||l.text||"Hot post").slice(0,80),username:l.username,score:l.score,mediaType:l.mediaType||"text",at:Date.now(),handledAt:null,handledNote:null}),n.add(l.id))});const o=i.slice(0,60);return p={...p,hotFeed:{lives:e.lives,seededLives:e.seededLives,posts:s,seededPosts:e.seededPosts||s.length>0,seededPostsVer:Number(e.seededPostsVer)||0},engagementAlerts:o},C(p),Pe()}function _r(e=8){return Es(),Pe().posts.length||je(),(Pe().posts||[]).slice(0,Math.max(1,Number(e)||8))}function qr(e){const t=String(e||"");if(!t)return{error:"missing"};if(!(p.posts||[]).find(i=>i.id===t))return{error:"missing"};const a={...p.postShares||{}};return a[t]=Number(a[t]||0)+1,p={...p,postShares:a},C(p),je(),{ok:!0,shares:a[t],score:fa(t)}}function kd(e){const t=e||{},s=t.kind==="live"?"live":"post",a=String(t.refId||t.id||"");if(!a)return{error:"missing"};const i=Array.isArray(p.engagementAlerts)?[...p.engagementAlerts]:[],n=i.find(l=>l.kind===s&&l.refId===a&&!l.handledAt);if(n)return{ok:!0,alert:n,deduped:!0};const o={id:t.id||"ea_"+s+"_"+a+"_"+Date.now().toString(36),kind:s,refId:a,title:String(t.title||"Hot item").slice(0,120),username:String(t.username||""),score:Number(t.score)||0,viewers:t.viewers!=null?Number(t.viewers):void 0,gifts:t.gifts!=null?Number(t.gifts):void 0,mediaType:t.mediaType||(s==="live"?"live":"text"),at:t.at||Date.now(),handledAt:t.handledAt||null,handledNote:t.handledNote||null};return p={...p,engagementAlerts:[o,...i].slice(0,60)},C(p),{ok:!0,alert:o}}function zi({openOnly:e=!0}={}){const t=Array.isArray(p.engagementAlerts)?p.engagementAlerts:[];return(e?t.filter(a=>!a.handledAt):t.slice()).sort((a,i)=>(i.at||0)-(a.at||0))}function Ts(e,t){const s=String(e||"");if(!s)return{error:"missing"};const a=Array.isArray(p.engagementAlerts)?p.engagementAlerts:[];let i=null;const n=a.map(o=>o.id!==s?o:(i={...o,handledAt:Date.now(),handledNote:t!=null?String(t):o.handledNote||"handled"},i));return i?(p={...p,engagementAlerts:n},C(p),{ok:!0,alert:i}):{error:"missing"}}function wd(e){if(!ee())return{error:"admin"};const t=p.user;if(!t)return{error:"signin"};const s=String(e||""),a=new Set(p.likes&&p.likes[s]||[]);return a.add(t.id),p={...p,likes:{...p.likes,[s]:[...a]}},C(p),je(),{ok:!0,count:a.size,score:fa(s)}}function Sd(e,t){if(!ee())return{error:"admin"};const s=p.user;if(!s)return{error:"signin"};const a=String(e||""),i=t.trim();if(!i)return{error:"empty"};const n={id:"c_admin_"+Date.now().toString(36),userId:s.id,username:s.username,text:i,at:Date.now(),admin:!0},o=p.comments&&p.comments[a]||[];return p={...p,comments:{...p.comments,[a]:[...o,n]}},C(p),je(),{ok:!0,comment:n,score:fa(a)}}function $d(e){if(!ee())return{error:"admin"};const t=qr(e);return t.error?t:{ok:!0,shares:t.shares,link:"#/posts",score:t.score}}function yi(e,t){return Math.max(0,Number(e)||0)+Math.max(0,Number(t)||0)*20}function ki(e){if(!e||typeof e!="object")return null;const t=String(e.id||e.liveId||"");if(!t)return null;const s=String(e.hostId||e.userId||""),a=String(e.hostName||e.username||e.handle||"Creator"),i=Math.max(0,Number(e.viewers)||0),n=Math.max(0,Number(e.giftsTotal??e.gifts)||0),o=e.score!=null&&Number.isFinite(Number(e.score))?Number(e.score):yi(i,n);return{id:t,hostId:s,hostName:a,title:String(e.title||"Live"),viewers:i,giftsTotal:n,house:!!e.house,spikedAt:e.spikedAt||null,score:o}}function Br({force:e=!1}={}){const t=Pe();if(t.seededLives&&!e&&(t.lives||[]).length>0)return{skipped:!0,lives:t.lives.map(ki).filter(Boolean)};const s=[{id:"hl_dbs_house",hostId:"dbs",hostName:"DatBoiSkeet",title:"DBS Live · Listening Session",viewers:8420,giftsTotal:186,house:!0},{id:"hl_dbs_vault",hostId:"dbs",hostName:"DatBoiSkeet",title:"Vault Drop Afterparty · House",viewers:3210,giftsTotal:94,house:!0},{id:"hl_skeetfan",hostId:"u_skeetfanatl",hostName:"SkeetFanATL",title:"ATL reacts · Long Story Short",viewers:1540,giftsTotal:42,house:!1},{id:"hl_vaultwatch",hostId:"u_vaultwatcher",hostName:"VaultWatcher",title:"Vault deep cut night",viewers:980,giftsTotal:61,house:!1},{id:"hl_fxclip",hostId:"u_fxclipper",hostName:"FXClipper",title:"Foreign X-Change clips live",viewers:2210,giftsTotal:28,house:!1},{id:"hl_nightowl",hostId:"u_nightowldbs",hostName:"NightOwlDBS",title:"Late night lounge · chill",viewers:412,giftsTotal:15,house:!1},{id:"hl_longstory",hostId:"u_longstorylistener",hostName:"LongStoryListener",title:"LSS theory hour",viewers:128,giftsTotal:7,house:!1},{id:"hl_ladies",hostId:"u_ladiesonlyfan",hostName:"LadiesOnlyFan",title:"Ladies Only countdown",viewers:67,giftsTotal:3,house:!1}].map(a=>({...a,spikedAt:null,score:yi(a.viewers,a.giftsTotal)}));return Ir({...t,lives:s,seededLives:!0}),{ok:!0,lives:s}}function zt(){return Br(),(Pe().lives||[]).map(ki).filter(Boolean).sort((t,s)=>(s.score||0)-(t.score||0)||(s.viewers||0)-(t.viewers||0))}function xd(e){const t=String(e||"");if(!t)return{error:"missing"};Br();const s=Pe();let a=null;const i=(s.lives||[]).map(o=>{const l=ki(o);if(!l||l.id!==t)return o;const d=180+Math.floor(Math.random()*920),c=4+Math.floor(Math.random()*28),u=l.viewers+d,m=l.giftsTotal+c,g=yi(u,m);return a={...l,viewers:u,giftsTotal:m,score:g,spikedAt:Date.now()},a});if(!a)return{error:"missing"};Ir({...s,lives:i,seededLives:!0});const n=kd({kind:"live",refId:a.id,title:a.title,username:a.hostName,score:a.score,viewers:a.viewers,gifts:a.giftsTotal});return{ok:!0,live:a,alert:(n==null?void 0:n.alert)||null,deduped:!!(n!=null&&n.deduped)}}function Ed(){return zt().filter(s=>s&&!s.house).sort((s,a)=>(a.score||0)-(s.score||0)||(a.viewers||0)-(s.viewers||0)).slice(0,6).map(s=>({id:s.id,hostId:s.hostId,hostName:s.hostName,title:s.title,viewers:s.viewers,giftsTotal:s.giftsTotal,house:!!s.house,score:s.score,spikedAt:s.spikedAt||null,playbacksToday:s.playbacksToday!=null?s.playbacksToday:Math.max(1,Math.round((s.viewers||0)/40))}))}function Or(){const e=new Date().toISOString().slice(0,10),s=(wt({publishedOnly:!0,types:["song"]})||[]).map(i=>{const n=Number(i.playsToday)||Number(i.playCount)||Number(i.plays)||0;let o="";return i.coverRef&&!String(i.coverRef).startsWith("idb:")&&(o=i.coverRef),{id:i.id,title:i.title||"Untitled",artist:i.artist||"DatBoiSkeet",cover:o,playsToday:n,href:"#/music",demo:!1,day:e,status:i.status||(i.published?"Published":"Catalog")}}).filter(i=>i.playsToday>0).sort((i,n)=>n.playsToday-i.playsToday||String(i.title).localeCompare(String(n.title)));return s[0]?s[0]:{id:"demo_most_played_lss",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",playsToday:900+e.split("-").reduce((i,n)=>i+Number(n),0)%400,href:"#/music",demo:!0,day:e,status:"Coming Soon"}}const Hi="https://www.youtube.com/iframe_api";let Y=[],re=0,O=null,Ds=!1,Ie=!1,ct=!1;const Q=new Set;let Wi=!1;function We(e){if(!e)return"";try{const t=new URL(e);if(t.hostname.includes("youtu.be"))return t.pathname.slice(1).split("/")[0]||"";const s=t.searchParams.get("v");if(s)return s;const a=t.pathname.match(/\/embed\/([^/?]+)/);if(a)return a[1]==="videoseries"?"":a[1]}catch{}return""}function Yi(e){if(!e)return"";try{return new URL(e).searchParams.get("list")||""}catch{return""}}function _t(e){return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function Ad(){var n,o;const e=[],t=new Set,s=new Set,a=l=>{if(l.playlistId){if(s.has(l.playlistId))return;s.add(l.playlistId)}else if(l.youtubeId){if(t.has(l.youtubeId))return;t.add(l.youtubeId)}else return;e.push(l)};for(const l of yt){const d=((n=l.links)==null?void 0:n.youtube)||"",c=We(d)||We(((o=l.links)==null?void 0:o.youtubeMusic)||"");c&&a({id:l.id,title:l.title,artist:l.artist||"DatBoiSkeet",cover:l.cover||_t(c),youtubeId:c,youtube:d||`https://www.youtube.com/watch?v=${c}`,embed:`https://www.youtube.com/embed/${c}`,links:{...l.links||{},youtube:d||`https://www.youtube.com/watch?v=${c}`},kind:"track"})}for(const l of Xa){const d=Yi(l.youtube)||Yi(l.embed);d&&a({id:l.id,title:l.title,artist:"DatBoiSkeet",cover:_t("DTe4OiX2otg")||"/brand/logo-dbs-v3@2x.webp",playlistId:d,youtube:l.youtube,embed:l.embed||`https://www.youtube.com/embed/videoseries?list=${d}`,links:{youtube:l.youtube,youtubeMusic:de.youtubeMusic,spotify:de.spotify,apple:de.apple},kind:"mix"})}const i=new Set(["Music Videos"]);for(const l of he){if(!i.has(l.category||"Music Videos")||!l.featured&&!["dirty-money","93","no-love","bouquet","where-im-from","go-2-work"].includes(l.id)&&!l.featured)continue;const d=We(l.youtube)||We(l.embed);if(!d||t.has(d))continue;const c=yt.find(u=>{var m;return We(((m=u.links)==null?void 0:m.youtube)||"")===d});a({id:l.id,title:l.title,artist:l.artist||"DatBoiSkeet",cover:(c==null?void 0:c.cover)||_t(d),youtubeId:d,youtube:l.youtube,embed:l.embed||`https://www.youtube.com/embed/${d}`,links:{youtube:l.youtube,youtubeMusic:`https://music.youtube.com/watch?v=${d}`,...(c==null?void 0:c.links)||{}},kind:"mv"})}return Y=e,re>=Y.length&&(re=0),Y}function ze(e){return String(e||"").toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z0-9]+/g," ").trim()}function Nr(){var a,i;const e=Or();if(!e)return{item:null,meta:null,playable:!1};const t=ze(e.title),s=Y.find(n=>ze(n.title)===t||ze(n.title).includes(t)||t.includes(ze(n.title)));if(s&&(s.youtubeId||s.playlistId))return{item:{...s},meta:e,playable:!0};for(const n of yt){if(ze(n.title)!==t&&!ze(n.title).startsWith(t)&&!t.startsWith(ze(n.title)))continue;const o=((a=n.links)==null?void 0:a.youtube)||"",l=We(o)||We(((i=n.links)==null?void 0:i.youtubeMusic)||"");return l?{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:n.cover||_t(l),youtubeId:l,youtube:o||`https://www.youtube.com/watch?v=${l}`,embed:`https://www.youtube.com/embed/${l}`,links:{...n.links||{},youtube:o||`https://www.youtube.com/watch?v=${l}`},kind:"track"},meta:e,playable:!0}:{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:n.cover||e.cover||"",youtube:o||de.youtube,embed:"",links:{...n.links||{}},kind:"track"},meta:e,playable:!1}}for(const n of he){if(ze(n.title)!==t&&!ze(n.title).includes(t))continue;const o=We(n.youtube)||We(n.embed);if(o)return{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:_t(o),youtubeId:o,youtube:n.youtube,embed:n.embed||`https://www.youtube.com/embed/${o}`,links:{youtube:n.youtube,youtubeMusic:`https://music.youtube.com/watch?v=${o}`},kind:"mv"},meta:e,playable:!0}}return{item:{id:e.id||"most-played",title:e.title||"Most played",artist:e.artist||"DatBoiSkeet",cover:e.cover||"",youtube:"",embed:"",links:{spotify:de.spotify,apple:de.apple,youtubeMusic:de.youtubeMusic,youtube:de.youtube},kind:"track"},meta:e,playable:!1}}function Rr(){const e=document.getElementById("spPlayNextMost"),t=document.getElementById("spPlayNextSub"),{meta:s,playable:a}=Nr();if(e){if(!s){e.hidden=!0;return}if(e.hidden=!1,e.dataset.playable=a?"1":"0",e.dataset.demo=s.demo?"1":"0",e.title=a?`Most played today · ${s.title} → Play next`:`Most played today · ${s.title} (Coming Soon / open platform)`,e.setAttribute("aria-label",`Play next — ${s.title}`),t){const i=s.demo?"DEMO · ":"";t.textContent=`${i}Most played today · ${s.title}`}}}function Qi(e){if(!e)return-1;if(!Y.length)return Y.push(e),re=0,0;let t=Y.findIndex(a=>e.youtubeId&&a.youtubeId===e.youtubeId||e.playlistId&&a.playlistId===e.playlistId||a.id===e.id);if(t===re)return re;if(t>=0){const[a]=Y.splice(t,1);t<re&&(re-=1),e=a}const s=Math.min(re+1,Y.length);return Y.splice(s,0,e),s}function Cd(){var n,o,l,d;const{item:e,meta:t,playable:s}=Nr();if(!t||!e){h("No most-played track yet");return}if(!s){const c=document.getElementById("spOpen"),u=((n=e.links)==null?void 0:n.apple)||((o=e.links)==null?void 0:o.youtubeMusic)||((l=e.links)==null?void 0:l.spotify)||((d=e.links)==null?void 0:d.youtube)||de.apple;c&&u&&(c.href=u),h(t.demo||t.status==="Coming Soon"?`${t.title} · Coming Soon — no in-app master. Open Music / Stream Everywhere when it drops.`:`${t.title} — open official platform (not in-app audio)`),Rr();return}if(wi()||!!ct&&Ie&&Q.size===0||Q.size>0){const c=Qi(e);h(c===re?`Already playing · ${e.title}`:`Queued next · ${e.title}`),fe();return}let i=Y.findIndex(c=>e.youtubeId&&c.youtubeId===e.youtubeId||e.playlistId&&c.playlistId===e.playlistId||c.id===e.id);i<0&&(i=Qi(e)),Ur(i),h(`Playing · ${e.title}`)}const Wt=[];function jr(){var e;return(e=window.YT)!=null&&e.Player?Promise.resolve(window.YT):new Promise(t=>{var a;if(Wt.push(t),Ds)return;Ds=!0;const s=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{Ds=!1;try{s==null||s()}catch{}const i=window.YT;for(;Wt.length;)try{Wt.shift()(i)}catch{}qt()},document.querySelector(`script[src="${Hi}"]`)){if((a=window.YT)!=null&&a.Player){Ds=!1;const i=window.YT;for(;Wt.length;)try{Wt.shift()(i)}catch{}qt()}}else{const i=document.createElement("script");i.src=Hi,i.async=!0,document.head.appendChild(i)}})}function Fr(){jr().then(()=>qt()).catch(()=>{})}function qt(){var n;if(!(document.getElementById("dbsStickyFrame")||document.getElementById("dbsYtHost"))||!((n=window.YT)!=null&&n.Player)||O)return;const t=Y[re],s={autoplay:0,controls:0,rel:0,modestbranding:1,playsinline:1,enablejsapi:1,origin:location.origin},a={height:"1",width:"1",playerVars:s,events:{onReady:()=>{fe()},onStateChange:o=>{o.data===0&&Vr({auto:!0}),fe()},onError:()=>{h("YouTube embed error — Open on YouTube"),fe()}}};t!=null&&t.playlistId?a.playerVars={...s,listType:"playlist",list:t.playlistId}:t!=null&&t.youtubeId?a.videoId=t.youtubeId:a.videoId="DTe4OiX2otg";const i=document.getElementById("dbsStickyFrame")?"dbsStickyFrame":"dbsYtHost";O=new window.YT.Player(i,a)}function vs({autoplay:e}={autoplay:!1}){const t=Y[re];if(!t||!(O!=null&&O.cueVideoById)){qt();return}try{t.playlistId?(typeof O.loadPlaylist=="function"?O.loadPlaylist({list:t.playlistId,listType:"playlist",index:0}):typeof O.cuePlaylist=="function"&&O.cuePlaylist({list:t.playlistId,listType:"playlist",index:0}),e&&Ie&&Q.size===0&&setTimeout(()=>{try{O.playVideo()}catch{}},250)):t.youtubeId&&(e&&Ie&&Q.size===0?O.loadVideoById(t.youtubeId):O.cueVideoById(t.youtubeId))}catch{}fe()}function wi(){var e;try{return((e=O==null?void 0:O.getPlayerState)==null?void 0:e.call(O))===1}catch{return!1}}function fe(){var u,m,g;const e=Y[re],t=document.getElementById("spArt"),s=document.getElementById("spTitle"),a=document.getElementById("spSub"),i=document.getElementById("spPlay"),n=document.getElementById("spOpen"),o=document.getElementById("spSource"),l=Q.size>0,d=!l&&(ct||wi());if(t&&e&&(t.src=e.cover||_t(e.youtubeId||"")||"/brand/logo-dbs-v3@2x.webp",t.alt=e.title||""),s&&(s.textContent=(e==null?void 0:e.title)||"DatBoiSkeet"),a&&(Ie?l?a.textContent=`Paused · ${[...Q][0]} interrupt`:a.textContent=`${(e==null?void 0:e.artist)||"DatBoiSkeet"} · via YouTube (not Spotify in-app)`:a.textContent="Tap Play · YouTube embed · Stream Everywhere"),i&&(i.textContent=d?"❚❚":"▶",i.setAttribute("aria-label",d?"Pause":"Play DBS Music"),i.dataset.playing=d?"1":"0"),n&&e){const f=((u=e.links)==null?void 0:u.apple)||((m=e.links)==null?void 0:m.youtubeMusic)||((g=e.links)==null?void 0:g.spotify)||e.youtube||de.apple;n.href=f,n.title="Open on official platform"}o&&(o.textContent=(e==null?void 0:e.kind)==="mix"?"YT Mix":(e==null?void 0:e.kind)==="mv"?"YT MV":"YouTube");const c=document.getElementById("spBadge");c&&(c.textContent=l?"INTERRUPTED":Ie&&d?"PLAYING · YT":"TEST · YT EMBED"),Rr()}function Td(){var e;if(Q.size>0){h("Paused for "+[...Q][0]+" — resume when done"),fe();return}Ie=!0,ct=!0,Fr(),qt();try{if(O!=null&&O.playVideo){const t=(e=O.getPlayerState)==null?void 0:e.call(O);t===-1||t===5||t===void 0?vs({autoplay:!0}):O.playVideo()}else{const t=setInterval(()=>{O!=null&&O.playVideo&&(clearInterval(t),vs({autoplay:!0}))},120);setTimeout(()=>clearInterval(t),8e3)}}catch{h("Tap Play DBS Music again if autoplay blocked")}fe()}function Dd({clearDesire:e}={}){var t;e&&(ct=!1);try{(t=O==null?void 0:O.pauseVideo)==null||t.call(O)}catch{}fe()}function As(e="user"){e&&e!=="user"&&Q.add(e),Dd({clearDesire:e==="user"}),fe()}function Kr(e){var t;if(e?Q.delete(e):Q.clear(),Q.size===0&&Ie&&ct)try{(t=O==null?void 0:O.playVideo)==null||t.call(O)}catch{}fe()}function Ys(e){return Kr(e)}function Bt(){As("video")}function Sa(){As("live")}function Gr(){Ys("live")}function Qe(){Ys("video")}function Vr({auto:e}={}){Y.length&&(re=(re+1)%Y.length,ct=!0,e||(Ie=!0),vs({autoplay:Ie&&Q.size===0}),fe())}function Md(){Y.length&&(re=(re-1+Y.length)%Y.length,Ie=!0,ct=!0,vs({autoplay:Q.size===0}),fe())}function Ur(e){e<0||e>=Y.length||(re=e,Ie=!0,Q.clear(),ct=!0,vs({autoplay:!0}),fe())}function Ld(){var e,t,s,a,i,n;Wi||(Wi=!0,(e=document.getElementById("spPlay"))==null||e.addEventListener("click",()=>{Q.size>0&&Q.clear(),wi()?As("user"):Td()}),(t=document.getElementById("spPrev"))==null||t.addEventListener("click",()=>{Q.clear(),Md()}),(s=document.getElementById("spNext"))==null||s.addEventListener("click",()=>{Q.clear(),Vr()}),(a=document.getElementById("spOpen"))==null||a.addEventListener("click",o=>{h("Opening external music service (playback depends on provider)")}),(i=document.getElementById("spPlayNextMost"))==null||i.addEventListener("click",()=>{Cd()}),(n=document.getElementById("spQueueBtn"))==null||n.addEventListener("click",()=>{const o=document.getElementById("spQueuePanel");if(!o)return;o.hasAttribute("hidden")?(o.removeAttribute("hidden"),o.innerHTML=Y.map((d,c)=>`<button type="button" class="sp-q-item${c===re?" on":""}" data-i="${c}">
              <img src="${d.cover||""}" alt="" width="36" height="36" />
              <span><b>${Ji(d.title)}</b><small>${Ji(d.artist)} · ${d.kind}</small></span>
            </button>`).join(""),o.querySelectorAll(".sp-q-item").forEach(d=>{d.addEventListener("click",()=>{Ur(Number(d.dataset.i)),o.setAttribute("hidden","")})})):o.setAttribute("hidden","")}),document.addEventListener("click",o=>{const l=document.getElementById("spQueuePanel");!l||l.hasAttribute("hidden")||!o.target.closest("#spQueuePanel")&&!o.target.closest("#spQueueBtn")&&l.setAttribute("hidden","")}))}function Ji(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let Xi=!1;function Pd(){Xi||(Xi=!0,window.addEventListener("dbs:interrupt-music",e=>{var s;const t=((s=e==null?void 0:e.detail)==null?void 0:s.reason)||"user";As(t)}))}function Id(){Ad(),Ld(),Pd(),fe(),Fr(),setTimeout(()=>qt(),400)}function _d(e){var a,i;const t=e==="/live",s=e==="/videos"||e==="/home"||e==="/music"||e==="/vault";!t&&Q.has("live")&&Ys("live");for(const[n,o]of[...ie.entries()])if(!document.getElementById(n)){o.playing&&(Ne=Math.max(0,Ne-1));try{(i=(a=o.player)==null?void 0:a.destroy)==null||i.call(a)}catch{}ie.delete(n)}Ne===0&&!s&&Q.has("video")&&Ys("video"),fe()}const ie=new Map;let Ne=0,Zi=0;function Ga(e){var s;if(!e||!(e instanceof Element))return!0;const t=e.id||"";return!!(t==="dbsStickyFrame"||t==="dbsYtHost"||(s=e.closest)!=null&&s.call(e,"#dbs-sticky-player, #stickyPlayer, #dbsStickyFrame, #dbsYtHost"))}function Si(e){return e?/youtube\.com\/embed|youtube-nocookie\.com\/embed|youtu\.be\//.test(e):!1}function qd(e){let t=e.getAttribute("src")||e.src||"";if(!Si(t))return!1;let s=!1;return/[?&]enablejsapi=1(?:&|$)/.test(t)||(t+=(t.includes("?")?"&":"?")+"enablejsapi=1",s=!0),/[?&]origin=/.test(t)||(t+=(t.includes("?")?"&":"?")+"origin="+encodeURIComponent(location.origin),s=!0),s&&(e.setAttribute("src",t),e.src=t),!0}function Bd(e){if(e.id&&!ie.has(e.id)&&e.id!=="dbsStickyFrame"&&e.id!=="dbsYtHost"||e.id&&ie.has(e.id))return e.id;Zi+=1;const t=`dbs-page-yt-${Zi}`;return e.id=t,t}function Od(e,t){const s=ie.get(e);s&&(t.data===1?(s.playing||(s.playing=!0,Ne+=1),Bt()):(t.data===0||t.data===2)&&(s.playing&&(s.playing=!1,Ne=Math.max(0,Ne-1)),Ne===0&&Qe()))}function zr(e){var n,o;const t=typeof e=="string"?document.getElementById(e):e;if(!t||Ga(t))return Promise.resolve(null);let s=t;if(t.tagName!=="IFRAME"&&(s=((n=t.querySelector)==null?void 0:n.call(t,"iframe"))||t),!s||s.tagName!=="IFRAME"||Ga(s))return Promise.resolve(null);const a=s.getAttribute("src")||s.src||"";if(!Si(a)||!qd(s))return Promise.resolve(null);const i=Bd(s);return ie.has(i)&&((o=ie.get(i))!=null&&o.player)?Promise.resolve(ie.get(i).player):jr().then(()=>new Promise(l=>{var m;if(ie.has(i)&&((m=ie.get(i))!=null&&m.player)){l(ie.get(i).player);return}const d=()=>{var g;if(!document.getElementById(i)){l(null);return}if(ie.has(i)&&((g=ie.get(i))!=null&&g.player)){l(ie.get(i).player);return}try{const f=new window.YT.Player(i,{events:{onReady:()=>{},onStateChange:b=>Od(i,b),onError:()=>{}}});ie.set(i,{player:f,el:s,playing:!1}),s.dataset.dbsYtBound="1",l(f)}catch(f){console.warn("[dbs] bindYoutubeInterrupt failed",i,f),l(null)}};if(s.dataset.dbsYtBound==="1"&&ie.has(i)){l(ie.get(i).player);return}let c=!1;const u=()=>{c||(c=!0,d())};s.addEventListener("load",u,{once:!0}),setTimeout(u,400)}))}function va(e){const s=[...(e&&e.querySelectorAll?e:document).querySelectorAll("iframe")].filter(a=>{if(Ga(a))return!1;const i=a.getAttribute("src")||a.src||"";return Si(i)});return Promise.all(s.map(a=>zr(a)))}function Nd(e){var i,n;const t=typeof e=="string"?document.getElementById(e):e,s=typeof e=="string"?e:t==null?void 0:t.id;if(!s||s==="dbsStickyFrame"||s==="dbsYtHost")return;const a=ie.get(s);if(a){a.playing&&(a.playing=!1,Ne=Math.max(0,Ne-1),Ne===0&&Qe());try{(n=(i=a.player)==null?void 0:i.destroy)==null||n.call(i)}catch{}ie.delete(s)}}const Qs=new Set;function Xe(){const e=(location.hash||"").replace(/^#/,"")||"/home";let t="",s=e;const a=e.indexOf("#");a>=0&&(t=e.slice(a+1).split("?")[0],s=e.slice(0,a));const i=s.startsWith("/")?s:"/"+s,[n,o=""]=i.split("?"),l=n.split("/").filter(Boolean);return{path:"/"+(l[0]||"home"),parts:l,query:Object.fromEntries(new URLSearchParams(o)),elementId:t,raw:i}}function R(e){const s=(e.startsWith("#")?e:"#"+(e.startsWith("/")?e:"/"+e)).replace(/^#/,"");if((location.hash||"").replace(/^#/,"")===s){Qs.forEach(i=>i(Xe()));return}location.hash=s}function Rd(e){return Qs.add(e),()=>Qs.delete(e)}function jd(){const e=()=>Qs.forEach(t=>t(Xe()));window.addEventListener("hashchange",e),location.hash?e():location.hash="/home"}const $a="/pikk-app/",Mt=$a.endsWith("/")?$a.slice(0,-1):$a;function as(e){if(e==null||e==="")return e;const t=String(e);return/^(https?:|data:|blob:|idb:|#|\/\/)/i.test(t)||Mt&&(t===Mt||t.startsWith(Mt+"/"))?t:t.startsWith("/")?Mt+t:(Mt||"")+"/"+t}function Hr(e=document){Mt&&(e.querySelectorAll("[src]").forEach(t=>{const s=t.getAttribute("src");if(!s)return;const a=as(s);a!==s&&t.setAttribute("src",a)}),e.querySelectorAll("[srcset]").forEach(t=>{const s=t.getAttribute("srcset");if(!s||!s.includes("/"))return;const a=s.replace(/(^|,\s*)(\/(?!\/)[^\s,]+)/g,(i,n,o)=>n+as(o));a!==s&&t.setAttribute("srcset",a)}),e.querySelectorAll("[data-zoom]").forEach(t=>{const s=t.getAttribute("data-zoom");if(!s)return;const a=as(s);a!==s&&t.setAttribute("data-zoom",a)}),e.querySelectorAll("[poster]").forEach(t=>{const s=t.getAttribute("poster");if(!s)return;const a=as(s);a!==s&&t.setAttribute("poster",a)}))}function Wr(e,t){e&&e.querySelectorAll("a[data-path]").forEach(s=>{const a=s.getAttribute("data-path")===t;s.classList.toggle("on",a),a?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current")})}const Fd=Object.freeze([{label:"Songs",href:"#/music?view=songs",detail:"Browse released singles",icon:"♫"},{label:"Albums",href:"#/music?view=albums",detail:"Browse released albums",icon:"▣"},{label:"Beats",href:"#/music?view=beats",detail:"Beat marketplace not yet available",icon:"◉"},{label:"Playlists",href:"#/music?view=playlists",detail:"Verified YouTube playlists",icon:"▤"},{label:"Upload Music",href:"#/music?view=upload",detail:"Creator uploads coming later",icon:"⇧"}]),Kd=Object.freeze({Songs:"music",Albums:"music",Beats:"music",Playlists:"videos","Upload Music":"music"});function is(e=!1){const t=document.getElementById("pikkMusicMenu");if(!t||t.hidden)return;t.hidden=!0;const s=document.querySelector('#tabbar a[href="#/music"]');s==null||s.setAttribute("aria-expanded","false"),e&&(s==null||s.focus())}function Gd(){let e=document.getElementById("pikkMusicMenu");return e||(e=document.createElement("div"),e.id="pikkMusicMenu",e.className="pikk-create-overlay",e.hidden=!0,e.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="pikkMusicMenuTitle">
    <div class="pikk-create-head"><strong id="pikkMusicMenuTitle">Music on PIKK</strong><button type="button" class="btn ghost" data-music-close aria-label="Close music menu">✕</button></div>
    <div class="pikk-create-options pikk-create-grid">
      ${Fd.map(t=>`<a class="pikk-create-tile" href="${t.href}"><span class="pikk-menu-icon" aria-hidden="true">${ps[Kd[t.label]||"music"]}</span><strong class="pikk-menu-title">${t.label}</strong><small>${t.detail}</small></a>`).join("")}
    </div>
    <button type="button" class="pikk-menu-cancel" data-music-close>Cancel</button>
    <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Beat selling and music uploads are not available yet</p>
  </div>`,document.body.appendChild(e),window.addEventListener("hashchange",()=>is()),e.addEventListener("click",t=>{t.target===e||t.target.closest("[data-music-close]")?is(!0):t.target.closest(".pikk-create-options a")&&is()}),document.addEventListener("keydown",t=>{if(e.hidden||(t.key==="Escape"&&(t.preventDefault(),is(!0)),t.key!=="Tab"))return;const s=[...e.querySelectorAll("a[href], button:not([disabled])")],a=s[0],i=s[s.length-1];if(!a){t.preventDefault();return}e.contains(document.activeElement)?t.shiftKey&&document.activeElement===a?(t.preventDefault(),i.focus()):!t.shiftKey&&document.activeElement===i&&(t.preventDefault(),a.focus()):(t.preventDefault(),(t.shiftKey?i:a).focus())}),e)}function Vd(e){var i,n;const t=Gd(),s=t.hidden,a=document.getElementById("pikkCreateMenu");s&&a&&!a.hidden&&(a.hidden=!0,(i=document.querySelector('#tabbar a[href="#/create"]'))==null||i.setAttribute("aria-expanded","false")),t.hidden=!s,e==null||e.setAttribute("aria-expanded",String(s)),s?(n=t.querySelector("[data-music-close]"))==null||n.focus():e==null||e.focus()}const Ud="dbs_media_v1",Ot="blobs",zd=1;function Yr(){return new Promise((e,t)=>{const s=indexedDB.open(Ud,zd);s.onupgradeneeded=()=>{const a=s.result;a.objectStoreNames.contains(Ot)||a.createObjectStore(Ot,{keyPath:"id"})},s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error||new Error("idb open failed"))})}async function Hd(e,t,s={}){const a=await Yr();return new Promise((i,n)=>{const o=a.transaction(Ot,"readwrite");o.objectStore(Ot).put({id:e,blob:t,mime:t.type||s.mime||"application/octet-stream",name:s.name||"",size:t.size||0,at:Date.now()}),o.oncomplete=()=>i(e),o.onerror=()=>n(o.error)})}async function Wd(e){const t=await Yr();return new Promise((s,a)=>{const n=t.transaction(Ot,"readonly").objectStore(Ot).get(e);n.onsuccess=()=>s(n.result||null),n.onerror=()=>a(n.error)})}const xa=new Map;async function ba(e){if(!e)return"";if(e.startsWith("idb:")){const t=e.slice(4);if(xa.has(t))return xa.get(t);const s=await Wd(t);if(!(s!=null&&s.blob))return"";const a=URL.createObjectURL(s.blob);return xa.set(t,a),a}return e}function Yd(e="blob"){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}const Qd={BASE_URL:"/pikk-app/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_BASE:"/pikk-app/",VITE_BUILD_SHA:"1f5e171a6e0cbcfebd61e7816b0fab0fbe72bd03"},Js=Object.freeze([{name:"Block Wars",players:"1–2",icon:"🥊",theme:"fighters",artwork:"/games/approved/01_block_wars.jpg",description:"City-based fighters, combos and special moves.",href:"#/blockwars"},{name:"PIKK Playground",players:"1–8",icon:"🎈",theme:"playground",artwork:"/games/approved/02_pikk_playground.jpg",description:"Create your character, race, jump and explore with friends."},{name:"PIKK Clash",players:"1",icon:"💎",theme:"clash",artwork:"/games/approved/03_pikk_clash.jpg",description:"Original neighborhood-themed match puzzles and venue upgrades."},{name:"PIKK Knockout",players:"1",icon:"💥",theme:"knockout",artwork:"/games/approved/04_pikk_knockout.jpg",description:"Stylized physics challenges: launch, bounce and knock targets off moving platforms."},{name:"PIKK Bowling",players:"1–4",icon:"🎳",theme:"bowling",artwork:"/games/approved/05_pikk_bowling.jpg",description:"Compete for strikes, spares and high scores."},{name:"PIKK Pickleball",players:"2–4",icon:"🏓",theme:"pickleball",artwork:"/games/approved/06_pikk_pickleball.jpg",description:"Play singles or doubles on colorful courts."},{name:"PIKK Pool",players:"1–2",icon:"🎱",theme:"pool",artwork:"/games/approved/07_pikk_pool.jpg",description:"Play 8-ball pool against friends or the computer."},{name:"PIKK Cup Pong",players:"2–4",icon:"🥤",theme:"pong",artwork:"/games/approved/08_pikk_cup_pong.jpg",description:"Aim, throw and eliminate opponents’ cups."},{name:"PIKK Poker",players:"2–8",icon:"♠️",theme:"poker",artwork:"/games/approved/09_pikk_poker.jpg",description:"Social Texas Hold’em with nonredeemable Play Chips."},{name:"PIKK Blackjack",players:"1–5",icon:"🃏",theme:"blackjack",artwork:"/games/approved/10_pikk_blackjack.jpg",description:"Try for 21 against the dealer using Play Chips."},{name:"PIKK Slots",players:"1",icon:"🎰",theme:"slots",artwork:"/games/approved/11_pikk_slots.jpg",description:"Entertainment-only reels and virtual Play Chips."},{name:"PIKK Speed",players:"2",icon:"⚡",theme:"speed",artwork:"/games/approved/12_pikk_speed.jpg",description:"Race to play your cards before your opponent."},{name:"PIKK Spades",players:"4",icon:"♠",theme:"spades",artwork:"/games/approved/13_pikk_spades.jpg",description:"Partner strategy and card battles."},{name:"PIKK Dominoes",players:"2–4",icon:"🁢",theme:"dominoes",artwork:"/games/approved/14_pikk_dominoes.jpg",description:"Match tiles and outplay opponents."},{name:"PIKK Chess",players:"2",icon:"♟",theme:"chess",artwork:"/games/approved/15_pikk_chess.jpg",description:"Challenge opponents in a classic strategy game."}]);function Xs(e){return e!=null&&e.artwork?(Qd&&"/pikk-app/"||"/").replace(/\/?$/,"/")+String(e.artwork).replace(/^\/+/,""):""}const Ea=Object.freeze([{tier:"spotlight",name:"Premium Spotlight",slots:1,day:199,week:999},{tier:"featured",name:"Featured Box",slots:2,day:99,week:499},{tier:"promo",name:"Promo Box",slots:3,day:49,week:249}]);function Aa(e,t){return`<article class="pikk-ad-slot pikk-ad-${e.tier}" data-promo-tier="${e.tier}" aria-label="${e.name} slot ${t}, pricing preview">
    <span class="pikk-ad-slot-top"><span class="pikk-ad-slot-icon" aria-hidden="true">▶</span><span class="pikk-ad-slot-number">0${t}</span></span>
    <strong>${e.name}</strong>
    <span class="pikk-ad-slot-description">Available placement · booking coming soon</span>
    <span class="pikk-ad-slot-prices"><b>$${e.day}</b><small>/ 24 hours</small></span>
    <span class="pikk-ad-slot-week">$${e.week} / 7 days</span>
  </article>`}function Qr(e){return`<div class="pikk-stories-promotions" data-featured-context="${e==="videos"?"videos":"home"}">
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
        <div class="pikk-featured-row pikk-featured-row-hero">${Aa(Ea[0],1)}</div>
        <div class="pikk-featured-row pikk-featured-row-two">${[1,2].map(s=>Aa(Ea[1],s)).join("")}</div>
        <div class="pikk-featured-row pikk-featured-row-three">${[1,2,3].map(s=>Aa(Ea[2],s)).join("")}</div>
      </div>
      <p class="pikk-featured-footnote">Home and Videos placements are priced separately. Rates are introductory proposals; no paid placement or guaranteed views are currently offered.</p>
    </section>
  </div>`}const Jd={Explore:"🧭","Shorts / Clips":"▶",Music:"🎵",Videos:"🎬",Posts:"📸",Live:"🔴","PIKK Lounge":"💬",Vault:"🔐",Marketplace:"🛍️",Missions:"🎯"},Zs=[{id:"toplive",label:"Top live"},{id:"videos",label:"Videos"},{id:"rising",label:"Rising"},{id:"hot",label:"Hot lives"},{id:"songs",label:"Songs"}],Xd=8e3,$i="dbs_home_stage_v2",Zd=["dbs_home_stage"];function xi(e){const t=Number(e)||0;return t>=1e3?`${(t/1e3).toFixed(t>=1e4?0:1)}k`:String(t)}function Ms(e){return e?!!(e.house||e.hostId==="dbs"||e.hostName==="DatBoiSkeet"):!1}function en(e){return e?!!(e.house||e.userId==="dbs"||e.username==="DatBoiSkeet"):!1}function ep(e=3){const t=zt(),s=t.filter(n=>!Ms(n)),a=t.filter(n=>Ms(n)),i=s.slice(0,Math.max(2,e-1));for(a[0]&&i.push(a[0]);i.length<e&&s[i.filter(n=>!Ms(n)).length];){const n=s[i.filter(o=>!Ms(o)).length];if(!n||i.includes(n))break;i.push(n)}return i.slice(0,e)}function tp(e=4){const t=_r(Math.max(8,e+4)),s=t.filter(n=>!en(n)),a=t.filter(n=>en(n)),i=[...s.slice(0,3)];a[0]&&i.push(a[0]);for(const n of s.slice(3)){if(i.length>=e)break;i.includes(n)||i.push(n)}for(const n of a.slice(1)){if(i.length>=e)break;i.includes(n)||i.push(n)}return i.slice(0,e)}function Jr(){const e=T().live,t=zt().map(s=>({...s}));if(e&&!e.endedAt){const s=Math.max(0,Number(e.viewers)||0),a=Math.max(0,Number(e.giftsTotal)||0);t.push({id:e.id||"session",hostId:e.hostId,hostName:e.hostName||"Creator",title:e.title||"Live now",viewers:s,giftsTotal:a,score:s+a*20,house:e.hostId==="dbs"||e.hostName==="DatBoiSkeet"})}return t.sort((s,a)=>(Number(a.viewers)||0)-(Number(s.viewers)||0)||(Number(a.score)||0)-(Number(s.score)||0)),t[0]||null}function Rs(e,{rising:t=!1}={}){const s=e.house?"House":t?"Rising":"Hot",a=Number(e.viewers)||0,i=xi(a),n=t&&e.playbacksToday!=null?` · ~${r(String(e.playbacksToday))} playbacks today`:"";return`
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
    </a>`}function sp(e){return e.mediaType==="video"?"Video":e.image||e.mediaType==="image"?"Pic":"Post"}function ap(e){if(!e)return"";const t=Number(e.playsToday)||0,s=t>=1e3?`${(t/1e3).toFixed(t>=1e4?0:1)}k`:String(t),a=e.cover?`<img class="la-thumb" src="${r(e.cover)}" alt="" loading="lazy" />`:'<span class="la-thumb la-thumb-empty" aria-hidden="true">♪</span>',i=e.demo?" · DEMO seed":"";return`
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
    </li>`}function ip(e){const t=Number(e.viewers)||0,s=xi(t),a=e.house?"House":"Hot";return`
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
    </li>`}function np(e){const t=e.postId||e.id,s=sp(e),a=e.image?`<img class="la-thumb" src="${r(e.image)}" alt="" loading="lazy" />`:`<span class="la-thumb la-thumb-empty" aria-hidden="true">${r(((e.username||"?")[0]||"?").toUpperCase())}</span>`,i=e.house?" · house":"";return`
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
    </li>`}function rp(e){const t=e.coverRef&&!String(e.coverRef).startsWith("idb:")?e.coverRef:"";return`
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
    </li>`}function op(){for(const e of Zd){try{sessionStorage.removeItem(e)}catch{}try{localStorage.removeItem(e)}catch{}}try{localStorage.removeItem($i)}catch{}}function Xr(){op();try{const e=sessionStorage.getItem($i);if(Zs.some(t=>t.id===e))return e}catch{}return"toplive"}function lp(e){try{sessionStorage.setItem($i,e)}catch{}}function tn(e){return"$"+Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2})}function cp(e){const t=Math.max(0,e-Date.now()),s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return t<=0?"Ended":`${s}h ${a}m left`}function Zr(e){if(!e)return'<p class="muted" style="margin:0">No daily app goal right now.</p>';const t=Math.min(100,Math.round(e.raised/(e.targetAmount||1)*100));return`
    <div class="home-goal-head"><strong class="home-goal-name">${r(e.name)}</strong>
      <span class="chip home-goal-time" id="homeGoalTimeLeft">${cp(e.endsAt)}</span></div>
    <div class="home-goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${t}">
      <div class="home-goal-fill" style="width:${t}%"></div></div>
    <p class="muted home-goal-amounts" style="margin:6px 0 10px">${tn(e.raised)} raised of ${tn(e.targetAmount)} · ${t}%</p>
    <div class="row wrap" style="gap:8px">
      ${[50,100,250].map(s=>`<button type="button" class="btn ghost home-goal-donate" data-goal-id="${r(e.id)}" data-coins="${s}">Donate ${s} coins</button>`).join("")}
      <form class="home-goal-custom-form" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:end">
        <label style="flex:1;min-width:125px">Custom coins
          <input class="home-goal-custom-coins" type="number" inputmode="numeric" min="1" max="1000000" step="1" required placeholder="Enter coins" style="width:100%" />
        </label>
        <button type="submit" class="btn primary">Donate custom</button>
      </form>
    </div>`}function dp(){const e=xo.map(A=>`
    <a class="preview-card" href="#${A.route}${A.hash?"#"+A.hash:""}">
      <span class="pc-icon" aria-hidden="true">${Jd[A.title]||"◆"}</span>
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
    </a>`).join(""),s=he.filter(A=>(A.category||"Music Videos")==="Music Videos"),a=s.filter(A=>A.featured),i=a.length?a:s.slice(0,6),n=i[0]||s[0]||he[0],o=Xa[0],l=i.map(A=>`
    <div class="vid">
      <a class="thumb" href="${r(A.youtube)}" target="_blank" rel="noopener" aria-label="Play ${r(A.title)}"><span>▶</span></a>
      <div>
        <strong>${r(A.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">
          <a href="${r(A.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a>
          · <a href="#/videos">Embed on Videos</a>
        </div>
      </div>
    </div>`).join(""),d=i.map((A,De)=>`
    <button type="button" class="mv-pick${De===0?" on":""}" data-embed="${r(A.embed)}" data-title="${r(A.title)}" data-yt="${r(A.youtube)}">
      <span class="mv-pick-play" aria-hidden="true">▶</span>
      <span class="mv-pick-t">${r(A.title)}</span>
    </button>`).join(""),c=o?`<div class="card home-mix" id="home-dbs-mix">
        <h3>DatBoiSkeet Mix</h3>
        <p class="muted" style="margin:0 0 10px">Stream from the original YouTube Mix playlist — not rehosted.</p>
        <div class="hero-video" style="margin:0 0 10px">
          <iframe src="${r(Ye(o.embed))}" title="${r(o.title)}" allowfullscreen loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div class="row wrap" style="gap:8px">
          <a class="btn" href="${r(o.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
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
    </div>`).join(""),b=T().live,y=b&&!b.endedAt?`<li class="la-row la-session"><a class="la-main" href="#/live"><span class="la-hoodie" aria-label="Live now"><span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span><span class="live-hoodie-viewers">${r(xi(b.viewers||0))}</span></span><span class="la-body"><strong>@${r(b.hostName)}</strong><span class="la-preview">${r(b.title||"Live now")}</span><span class="la-stats muted">${r(String(b.viewers||0))} watching · your session</span></span></a><span class="chip">Live</span></li>`:"",v=Or(),w=ap(v),x=ep(3),D=tp(4),k=wt({publishedOnly:!0,types:["picture"]}).slice(0,2),M=x.map(ip).join(""),$=D.map(np).join(""),B=k.map(rp).join(""),ce=`${w}${y}${M}${$}${B}
        <li class="la-row la-kicker"><span class="la-main la-kicker-main"><span class="la-body"><strong>Ladies Only</strong><span class="la-preview">Art live on Music · playback when it drops</span></span></span><span class="chip">Music</span></li>
        <li class="la-row la-kicker"><a class="la-main" href="#/restream"><span class="la-body"><strong>PIKK Restream</strong><span class="la-preview">Stream to YouTube, TikTok, Twitch &amp; more — free inside PIKK</span></span></a><span class="chip">Restream</span></li>${!w&&!M&&!$&&!B&&!y?'<li class="la-row"><span class="la-main la-kicker-main"><span class="la-body"><span class="la-preview muted">No hot activity yet — engage on Posts / go Live to spike the feed.</span></span></span><span class="chip">TEST</span></li>':""}`,G=Xr(),ke=Zs.map(A=>`
    <button type="button" class="home-stage-tab${A.id===G?" on":""}" role="tab"
      aria-selected="${A.id===G?"true":"false"}" data-stage="${A.id}" id="stage-tab-${A.id}">
      ${r(A.label)}
    </button>`).join(""),xe=zt().slice(0,5),L=Ed().slice(0,5),P=xe.map(A=>Rs(A)).join("")||'<p class="muted">No hot lives yet — seed from Live / Hot Feed.</p>',q=L.map(A=>Rs(A,{rising:!0})).join("")||'<p class="muted">No rising streamers yet.</p>',z=Pt.map(A=>`
    <a class="home-song-card" href="#/music">
      <img src="${r(A.cover)}" alt="" loading="lazy" />
      <div>
        <strong>${r(A.title)}</strong>
        <div class="muted" style="font-size:12px">${r(A.artist)} · ${r(A.status)}</div>
        <span class="chip" style="margin-top:6px">Enhancement · Coming Soon</span>
      </div>
    </a>`).join(""),H=Jr(),F=H?Rs(H):'<p class="muted">No live streams right now — go Live or check Hot Feed.</p>',V=`
    <div class="home-stage-panel${G==="toplive"?" on":""}" data-panel="toplive" role="tabpanel" id="homeTopLivePanel" ${G==="toplive"?"":"hidden"}>
      <p class="muted home-stage-lead">Top live · highest viewers right now. Red LIVE hoodie on the card · updates as rankings change.</p>
      <div class="home-live-grid" id="homeTopLiveGrid">${F}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,we=`
    <div class="home-stage-panel${G==="videos"?" on":""}" data-panel="videos" role="tabpanel" ${G==="videos"?"":"hidden"}>
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
      <div class="mv-carousel" role="tablist" aria-label="Official music videos">${d}</div>
    </div>`,Ee=`
    <div class="home-stage-panel${G==="rising"?" on":""}" data-panel="rising" role="tabpanel" ${G==="rising"?"":"hidden"}>
      <p class="muted home-stage-lead">Rising streamers · mid-tier creators from §38 Hot Feed signals (non-house). TEST MODE seeds.</p>
      <div class="home-live-grid">${q}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,Ve=`
    <div class="home-stage-panel${G==="hot"?" on":""}" data-panel="hot" role="tabpanel" ${G==="hot"?"":"hidden"}>
      <p class="muted home-stage-lead">Hot lives · ranked by viewers + gifts score (house OK). Strong playbacks / spikes from earlier today count.</p>
      <div class="home-live-grid">${P}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,Ue=`
    <div class="home-stage-panel${G==="songs"?" on":""}" data-panel="songs" role="tabpanel" ${G==="songs"?"":"hidden"}>
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
    <div class="home-stage card" id="homeFeaturedStage" data-active="${r(G)}">
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
      <div id="homeAppGoalBody">${Zr(Na())}</div>
      <p class="chip" style="margin-top:10px">TEST MODE · no real payments</p>
    </div>`,X=i.slice(0,6).map((A,De)=>{const Ht=new URL(A.youtube).searchParams.get("v")||"",S=Ht?`https://i.ytimg.com/vi/${encodeURIComponent(Ht)}/hqdefault.jpg`:"";return`<a class="pikk-home-media-card ${De<2?"is-featured":""}" href="${r(A.youtube)}" target="_blank" rel="noopener noreferrer"
       aria-label="Watch ${r(A.title)} on YouTube">
       ${S?`<img src="${r(S)}" alt="" loading="${De<2?"eager":"lazy"}" decoding="async" referrerpolicy="no-referrer"/>`:'<span class="pikk-home-media-fallback" aria-hidden="true">♫</span>'}
       <span class="pikk-home-media-shadow"></span>
       <span class="pikk-home-media-badge">▶ OFFICIAL VIDEO</span>
       <span class="pikk-home-media-title">${r(A.title)}</span>
     </a>`}).join(""),Cs=`
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
        ${X}
      </div>
      <div class="pikk-home-media-footer">
        <p class="muted">Real official releases · Video thumbnails from YouTube · No fabricated views or live counts</p>
        <a href="#/videos">View all videos →</a>
      </div>
    </section>`}

    ${dt}

    ${Qr("home")}

    ${pt}

    <section class="home-arcade card" id="homeArcade" aria-label="PIKK Games featured slideshow">
      <div class="home-arcade-top">
        <div><p class="kicker">Discover the arcade</p><h2>15 GAMES. ONE PIKK.</h2></div>
        <a href="#/games" class="btn ghost">All games →</a>
      </div>
      <div class="home-arcade-stage" aria-live="off">
        ${Js.map((A,De)=>`<article class="home-arcade-slide pikk-game-${r(A.theme)}" data-game-slide="${De}" ${De?"hidden":""}>
          <div class="home-arcade-image">${A.artwork?`<img src="${r(Xs(A))}" alt="" loading="lazy" decoding="async" />`:`<span class="home-arcade-symbol" aria-hidden="true">${A.icon}</span>`}</div>
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
      ${l}${f}
      <a class="btn ghost block" href="#/videos" style="margin-top:10px">All videos</a>
    </div>
  `;return I("Home",Cs,{lead:"Featured stage · Top live · Block Wars preview · Live activity (hot lives · high-engagement posts from creators &amp; community · house updates) · Mix · Coming Soon · creator sell DEMO."})}function pp(e){var E,N,ce,G,ke,xe;const t=e.querySelector("#homeArcade");if(t){const L=[...t.querySelectorAll("[data-game-slide]")],P=t.querySelector("#homeArcadePosition");let q=0,z=null;const H=(N=(E=window.matchMedia)==null?void 0:E.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:N.matches,F=Ee=>{q=(Ee+L.length)%L.length,L.forEach((Ve,Ue)=>{Ve.hidden=Ue!==q}),P&&(P.textContent=`${q+1} / ${L.length}`)},V=()=>{z!==null&&clearInterval(z),z=null};(ce=t.querySelector("[data-arcade-prev]"))==null||ce.addEventListener("click",()=>{V(),F(q-1)}),(G=t.querySelector("[data-arcade-next]"))==null||G.addEventListener("click",()=>{V(),F(q+1)}),H||(z=setInterval(()=>{if(!document.body.contains(t)){V();return}document.visibilityState==="visible"&&F(q+1)},6500));const we=new MutationObserver(()=>{document.body.contains(t)||(V(),we.disconnect())});we.observe(document.body,{childList:!0,subtree:!0})}const s=e.querySelector("#homeAppGoalBody");if(s){const L=()=>{document.body.contains(s)?s.innerHTML=Zr(Na()):(clearInterval(q),document.removeEventListener("visibilitychange",P))},P=()=>{document.visibilityState==="visible"&&L()},q=setInterval(L,3e4);document.addEventListener("visibilitychange",P),s.addEventListener("submit",z=>{var we,Ee;if(!z.target.matches(".home-goal-custom-form"))return;z.preventDefault();const H=Number((we=z.target.querySelector(".home-goal-custom-coins"))==null?void 0:we.value);if(!Number.isSafeInteger(H)||H<1||H>1e6)return h("Enter 1–1,000,000 whole coins");const F=(Ee=Na())==null?void 0:Ee.id,V=Us(F,H);h(V!=null&&V.ok?"Custom donation sent · TEST MODE":(V==null?void 0:V.error)==="insufficient"?"Not enough demo coins":(V==null?void 0:V.error)==="signin"?"Sign in first":"Donation unavailable · TEST MODE"),L()}),s.addEventListener("click",z=>{const H=z.target.closest(".home-goal-donate");if(!H)return;const F=Us(H.dataset.goalId,Number(H.dataset.coins));h(F&&F.ok?`TEST MODE · ${H.dataset.coins} coins donated (no real payment)`:"TEST MODE · donate unavailable"),L()})}const a=e.querySelector(".page-head");if(a){a.querySelectorAll(".badge-phase, a.badge-phase, .live-hoodie-pill, .live-hoodie").forEach(P=>{P.remove()}),a.querySelectorAll("a, span, button").forEach(P=>{const q=(P.textContent||"").replace(/\s+/g," ").trim();(/^●?\s*LIVE$/i.test(q)||q==="LIVE")&&P.remove()});const L=a.querySelector("h1");L&&[...L.children].forEach(P=>{const q=(P.textContent||"").replace(/\s+/g," ").trim();(/LIVE/i.test(q)||P.classList.contains("badge-phase")||P.classList.contains("live-hoodie-pill"))&&P.remove()})}e.querySelectorAll("[data-idb-src]").forEach(async L=>{const P=L.getAttribute("data-idb-src");if(!P)return;const q=await ba(P);q&&(L.tagName==="IMG"||L.tagName==="VIDEO"||L.tagName==="AUDIO")&&(L.src=q)});const i=e.querySelector("#homeFeaturedIframe"),n=e.querySelector("#homeFeaturedTitle");e.querySelectorAll(".mv-pick").forEach(L=>{L.addEventListener("click",()=>{e.querySelectorAll(".mv-pick").forEach(q=>q.classList.remove("on")),L.classList.add("on");const P=L.dataset.embed||"";i&&P&&(Nd(i),i.removeAttribute("data-dbs-yt-bound"),i.src=P+(P.includes("?")?"&":"?")+"rel=0",i.title=L.dataset.title||"",zr(i)),n&&(n.textContent=L.dataset.title||"")})}),va(e);const o=e.querySelector("#bwPreviewVideo"),l=e.querySelector("#bwPreviewPlay");if(o){const L=()=>{if(!l)return;const P=o.paused||o.ended;l.hidden=!P,l.setAttribute("aria-hidden",P?"false":"true")};l==null||l.addEventListener("click",P=>{P.preventDefault(),o.play().catch(()=>{})}),o.addEventListener("play",()=>{Bt(),L()}),o.addEventListener("pause",()=>{Qe(),L()}),o.addEventListener("ended",()=>{Qe(),L()}),o.addEventListener("pointerdown",()=>{o.paused||Bt()}),L()}const d=2e4;function c(){const L=e.querySelector("#homeTopLiveGrid");if(!L||!document.body.contains(L))return!1;const P=Jr();return L.innerHTML=P?Rs(P):'<p class="muted">No live streams right now — go Live or check Hot Feed.</p>',!0}let u=setInterval(()=>{c()||(clearInterval(u),u=null)},d);const m=()=>{document.visibilityState==="visible"&&c()};document.addEventListener("visibilitychange",m),window.addEventListener("focus",c);const g=e.querySelector("#homeFeaturedStage");if(!g){const L=new MutationObserver(()=>{document.body.contains(e)||(u&&clearInterval(u),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",c),L.disconnect())});L.observe(document.body,{childList:!0,subtree:!0});return}const f=[...e.querySelectorAll(".home-stage-tab")],b=[...e.querySelectorAll(".home-stage-panel")];let y=!1,v=null;const w=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.classList.contains("reduce-motion")||((xe=(ke=document.body)==null?void 0:ke.classList)==null?void 0:xe.contains("reduce-motion"));function x(L){Zs.some(P=>P.id===L)||(L="toplive"),g.dataset.active=L,lp(L),f.forEach(P=>{const q=P.dataset.stage===L;P.classList.toggle("on",q),P.setAttribute("aria-selected",q?"true":"false")}),b.forEach(P=>{const q=P.dataset.panel===L;P.classList.toggle("on",q),q?P.removeAttribute("hidden"):P.setAttribute("hidden","")})}function D(){const L=Zs.map(z=>z.id),P=g.dataset.active||"toplive",q=L.indexOf(P);x(L[(q+1)%L.length])}function k(){M(),!(y||w)&&(v=setInterval(D,Xd))}function M(){v&&(clearInterval(v),v=null)}f.forEach(L=>{L.addEventListener("click",()=>{y=!0,M(),x(L.dataset.stage)})});const $=Xr()||"toplive";x($),w||setTimeout(()=>{!document.body.contains(g)||y||k()},1e4);const B=new MutationObserver(()=>{document.body.contains(g)||(M(),u&&(clearInterval(u),u=null),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",c),B.disconnect())});B.observe(document.body,{childList:!0,subtree:!0})}const up="1f5e171a6e0cbcfebd61e7816b0fab0fbe72bd03",mp=Object.freeze([{title:"Premium Messages",detail:"Refreshed inbox, message search and conversation shortcuts.",route:"#/messages",pr:95},{title:"Seven-tab navigation",detail:"Home, Music, Videos, Create, Connect, Dating and Shop.",route:"#/home",pr:94},{title:"Dating discovery",detail:"New prelaunch landing page and connection cards.",route:"#/dating",pr:93},{title:"Arcade artwork viewer",detail:"Full-size art with previous, next and keyboard navigation.",route:"#/games",pr:92},{title:"15-game Arcade showcase",detail:"Owner-approved game artwork and responsive card layout.",route:"#/games",pr:91}]);function hp(){const e=up.slice(0,8),t=mp.map((s,a)=>`
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
  `,{lead:"A clear record of recent PIKK improvements."})}function gp(e){var t;(t=e.querySelector("#pikkUpdatesRefresh"))==null||t.addEventListener("click",()=>{window.location.assign(En(window.location.href))})}const fp=20*60,vp=250*1024*1024;function bp({duration:e,size:t,type:s}){return s!=null&&s.startsWith("video/")?!Number.isFinite(t)||t<=0||t>vp?"Video must be under 250 MB for this device-local preview.":!Number.isFinite(e)||e<=0?"Unable to read video duration. Try another file.":e>fp?"PIKKUP Phase 1 videos must be 20 minutes or shorter.":"":"Select a supported video file."}function yp(e){return new Promise((t,s)=>{const a=URL.createObjectURL(e),i=document.createElement("video");let n=!1;const o=setTimeout(()=>l(new Error("Video metadata timed out")),12e3);function l(d,c){n||(n=!0,clearTimeout(o),i.removeAttribute("src"),i.load(),URL.revokeObjectURL(a),d?s(d):t(c))}i.preload="metadata",i.onloadedmetadata=()=>l(null,i.duration),i.onerror=()=>l(new Error("Cannot read this video file")),i.src=a})}const eo=[{id:"song",label:"Song",acceptCover:"image/*",acceptMedia:"audio/*,.mp3,.m4a,.wav,.aac"},{id:"album",label:"Album",acceptCover:"image/*",acceptMedia:"audio/*,.mp3,.m4a,.wav,.aac"},{id:"video",label:"Video",acceptCover:"image/*",acceptMedia:"video/*,.mp4,.mov,.webm"},{id:"picture",label:"Picture",acceptCover:"image/*",acceptMedia:"image/*"}];function kp(e){return I("Admin",`<div class="card admin-gate">
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
    <div class="card muted">Full team roles, revenue, and moderation ship later phases.</div>`,{lead:"Gated demo dashboard."})}function wp(){return`
  <section class="card admin-add" id="adminAdd">
    <h3>Add Content</h3>
    <p class="muted admin-add-note">PIKKUP preview: video uploads must be 20 minutes or shorter and at most 250 MB. Device-local only, not public hosting. TEST MODE · no backend. Metadata → <code>localStorage dbs_v1.catalog</code>. Files → IndexedDB <code>dbs_media_v1</code>. Works on iPhone Safari &amp; desktop. Large files stay on this device only.</p>

    <div class="admin-type-tabs" role="tablist" aria-label="Content type">${eo.map((t,s)=>`<button type="button" class="admin-type-tab${s===0?" on":""}" data-type="${r(t.id)}" role="tab">${r(t.label)}</button>`).join("")}</div>

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
  </section>`}function Sp(e){if(!e.length)return'<div class="card admin-catalog"><h3>Catalog</h3><p class="muted">No admin-added items yet.</p></div>';const t=e.map(s=>{const a=s.coverRef&&!s.coverRef.startsWith("idb:")?r(s.coverRef):"";return`<div class="admin-catalog-row" data-id="${r(s.id)}">
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
    <div class="admin-catalog-list">${t}</div></div>`}function qe(e){return"$"+(Number(e)||0).toFixed(2)}function $p(e){var i,n,o;const t=((i=e.openMic)==null?void 0:i.pending)||[],s=((n=e.openMic)==null?void 0:n.byStatus)||{},a=t.length?t.map(l=>`<div class="row wrap admin-om-row" data-om-id="${r(l.id)}">
            <span class="spacer"><strong>${r(l.username)}</strong> · ${r(l.talent)} · ${r(l.trackTitle)}
              <span class="chip">pending</span>
              ${l.rightsCertified?'<span class="chip">rights</span>':'<span class="chip">no rights</span>'}
            </span>
            <button type="button" class="btn primary admin-om" data-id="${r(l.id)}" data-status="approved">Approve</button>
            <button type="button" class="btn ghost admin-om" data-id="${r(l.id)}" data-status="rejected">Reject</button>
          </div>`).join(""):'<p class="muted">No pending applications. Seeded demos may already be approved/rejected — open <a href="#/openmic">Open Mic</a>.</p>';return`<section class="card admin-openmic" id="adminOpenMic">
    <h3>Open Mic queue</h3>
    <p class="muted">TEST MODE · reuse store Approve/Reject. Pending ${s.pending||0} · approved ${s.approved||0} · rejected ${s.rejected||0} · total ${((o=e.openMic)==null?void 0:o.total)||0}</p>
    ${a}
    <p class="admin-panel-links"><a class="btn" href="#/openmic">Full Open Mic page</a></p>
  </section>`}function xp(e){const t=e.fanClubs||{total:0,recent:[]},s=t.recent.length?`<ul class="list-plain">${t.recent.map(a=>`<li><span><strong>${r(a.name)}</strong> · ${r(a.privacy)}${a.official?" · official":""}</span><span class="muted">${a.memberCount} members</span></li>`).join("")}</ul>`:'<p class="muted">No clubs yet.</p>';return`<section class="card admin-fanclubs" id="adminFanClubs">
    <h3>Fan Clubs glance</h3>
    <div class="stats">
      <div><strong>${t.total}</strong><span>Clubs</span></div>
    </div>
    ${s}
    <p class="admin-panel-links"><a class="btn" href="#/fanclubs">Open Fan Clubs</a></p>
  </section>`}function Ep(e){const t=e.loyalty||{},s=(t.badges||[]).slice(0,6).map(a=>`<span class="chip">${r(a)}</span>`).join(" ")||'<span class="muted">None unlocked</span>';return`<section class="card admin-loyalty" id="adminLoyalty">
    <h3>Loyalty glance</h3>
    <p class="muted">${r(t.note||"Device-local loyalty")}</p>
    <div class="stats">
      <div><strong>${t.points||0}</strong><span>Points</span></div>
      <div><strong>${t.badgeCount||0}</strong><span>Badges</span></div>
      <div><strong>${t.historyCount||0}</strong><span>Actions</span></div>
    </div>
    <p class="admin-badge-row">${s}</p>
    <p class="admin-panel-links"><a class="btn" href="#/loyalty">Open Loyalty Club</a></p>
  </section>`}function Ap(){return`<section class="card admin-quicklinks" id="adminQuickLinks">
    <h3>Quick links</h3>
    <p class="muted">Deep-links only · page ownership stays with Live Social / Commerce / Build.</p>
    ${[{owner:"Live Social",links:[["#/live","Live"],["#/messages","Messages"],["#/giftbattles","Gift battles"],["#/multiguest","Multi-guest"],["#/spotlight","Spotlight"],["#/restream","Restream"],["#/connect","Connect"]]},{owner:"Commerce",links:[["#/marketplace","Marketplace"],["#/wallet","Wallet"],["#/earnings","Earnings"],["#/missions","Missions"],["#/share","Share & Earn"],["#/refer","Refer & Earn"]]},{owner:"Build",links:[["#/explore","Explore"],["#/notifications","Notifications"],["#/fanclubs","Fan Clubs"],["#/loyalty","Loyalty"],["#/openmic","Open Mic"]]}].map(s=>{const a=s.links.map(([i,n])=>`<a class="btn ghost admin-qlink" href="${i}">${r(n)}</a>`).join("");return`<div class="admin-ql-group"><span class="chip">${r(s.owner)}</span><div class="admin-ql-row">${a}</div></div>`}).join("")}
  </section>`}function Cp(e){const t=e.revenue||{},s=(t.byCategory||[]).map(a=>`<li><span>${r(a.label||a.category)} ×${a.count}</span><span class="muted">gross ${qe(a.gross)} · creator ${qe(a.creatorShare)} · PIKK ${qe(a.dbsShare)}</span></li>`).join("");return`<section class="card admin-revenue" id="adminRevenue">
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
  </section>`}function Tp(e){Es(),je();const t=zi({openOnly:!0}),s=zi({openOnly:!1}).length,a=e.hotFeed||{},i=t.length?t.slice(0,12).map(n=>{const o=n.kind==="live"?'<span class="chip">live</span>':'<span class="chip">post</span>',l=n.kind==="live"?` · viewers ${n.viewers??"—"} · gifts ${n.gifts??"—"}`:` · score ${n.score??0}`,d=n.kind==="post"?`<button type="button" class="btn primary admin-ea-like" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Like</button>
                 <button type="button" class="btn ghost admin-ea-comment" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Comment</button>
                 <button type="button" class="btn ghost admin-ea-share" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Share</button>`:'<a class="btn ghost" href="#/live">Open Live</a>';return`<div class="admin-ea-row" data-alert-id="${r(n.id)}">
            <div class="admin-ea-main">
              <strong>${r(n.username||"creator")}</strong> ${o}
              <div class="muted">${r(n.title||"")}${l}</div>
            </div>
            <div class="admin-ea-actions row wrap">
              ${d}
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
  </section>`}function Dp(e){const t=e.moderation||{};return`<section class="card admin-moderation" id="adminModeration">
    <h3>Moderation stub</h3>
    <p class="muted">${r(t.note||"Stub")}</p>
    <div class="stats">
      <div><strong>${(t.warnings||[]).length}</strong><span>Warnings</span></div>
      <div><strong>${(t.suspensions||[]).length}</strong><span>Suspensions</span></div>
    </div>
    <p class="muted">Empty-state · no enforcement actions stored yet.</p>
    <p class="admin-panel-links"><a class="btn" href="#/guidelines">Community Guidelines</a></p>
  </section>`}function Mp(){var d;const e=Xe(),{posts:t,clipperApps:s,user:a}=T();if(((d=e.query)==null?void 0:d.admin)==="1"&&a&&a.role!=="admin"&&bs(!0),!ee())return kp(a);Gt(),Ge(),Es();const i=In(),n=rd(),o=i.clipperByStatus,l=wt({includeUnpublishedForAdmin:!0});return I("Admin",`<div class="card admin-header">
      <div class="row wrap">
        <span class="chip">TEST MODE</span>
        <span class="chip">role=admin</span>
        <span class="spacer muted">Signed in as <strong>${r(a.username)}</strong></span>
        <button class="btn ghost" id="adminRevoke">Revoke admin</button>
      </div>
      <p class="muted admin-gate-hint">Gate: Profile toggle or <code>?admin=1</code> → <code>user.role='admin'</code> in <code>dbs_v1</code>. Phase 2 panels deep-link to owner pages.</p>
    </div>

    ${Ap()}
    ${Tp(n)}
    ${$p(n)}
    ${xp(n)}
    ${Ep(n)}
    ${Cp(n)}
    ${Dp(n)}

    ${wp()}
    ${Sp(l)}

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
      <p class="muted">Clippers — pending ${o.pending} · approved ${o.approved} · waitlisted ${o.waitlisted} · rejected ${o.rejected}</p>
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
                   </div>`).join(""):'<p class="muted">None yet — submit via <a href="#/clippers">Clippers</a>.</p>'}</div>`,{lead:"Phase 2 controls · Add Content · Clippers · catalog."})}async function sn(e){if(!e)return"";const t=Yd("media");return await Hd(t,e,{name:e.name,mime:e.type}),"idb:"+t}function an(e){if(!e)return"";try{const t=new URL(e);let s=t.searchParams.get("v");return!s&&t.hostname.includes("youtu.be")&&(s=t.pathname.slice(1)),!s&&t.pathname.startsWith("/embed/")&&(s=t.pathname.split("/")[2]),s?`https://www.youtube.com/embed/${s}`:""}catch{return""}}function Lp(e){var i,n;(i=e.querySelector("#adminRevoke"))==null||i.addEventListener("click",()=>{bs(!1),h("Admin revoked"),R("#/admin")}),e.querySelectorAll(".admin-clip").forEach(o=>{o.addEventListener("click",()=>{Pn(o.dataset.id,o.dataset.status),h("Clipper "+o.dataset.status),R("#/admin")})}),e.querySelectorAll(".admin-om").forEach(o=>{o.addEventListener("click",()=>{const l=Ka(o.dataset.id,o.dataset.status,o.dataset.status==="rejected"?"Admin reject":"");if(l!=null&&l.error){h(l.error==="admin"?"Admin required":"Open Mic update failed");return}h(o.dataset.status==="approved"?"Open Mic approved":"Open Mic rejected"),R("#/admin")})}),e.querySelectorAll(".admin-ea-like").forEach(o=>{o.addEventListener("click",()=>{const l=wd(o.dataset.ref);if(l!=null&&l.error)return h(l.error==="admin"?"Admin required":"Like failed");o.dataset.alert&&Ts(o.dataset.alert,"liked"),h("Liked · TEST MODE"),R("#/admin")})}),e.querySelectorAll(".admin-ea-comment").forEach(o=>{o.addEventListener("click",()=>{const l=Sd(o.dataset.ref,"🔥 PIKK team — keep it up! (TEST MODE)");if(l!=null&&l.error)return h(l.error==="admin"?"Admin required":"Comment failed");o.dataset.alert&&Ts(o.dataset.alert,"commented"),h("Comment posted · TEST MODE"),R("#/admin")})}),e.querySelectorAll(".admin-ea-share").forEach(o=>{o.addEventListener("click",async()=>{var c;const l=$d(o.dataset.ref);if(l!=null&&l.error)return h(l.error==="admin"?"Admin required":"Share failed");const d=`${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(o.dataset.ref)}`;try{(c=navigator.clipboard)!=null&&c.writeText&&await navigator.clipboard.writeText(d),h("Link copied · share +1 (TEST MODE)")}catch{h("Share +1 (TEST MODE)")}o.dataset.alert&&Ts(o.dataset.alert,"shared"),R("#/admin")})}),e.querySelectorAll(".admin-ea-handle").forEach(o=>{o.addEventListener("click",()=>{const l=Ts(o.dataset.alert,"handled");if(l!=null&&l.error)return h("Could not mark handled");h("Alert handled"),R("#/admin")})}),e.querySelectorAll("img[data-idb-src]").forEach(async o=>{const l=o.getAttribute("data-idb-src");if(!l)return;const d=await ba(l);d&&(o.src=d,o.classList.remove("idb-pending"))});const t=e.querySelector("#adminType"),s=e.querySelector("#adminMediaFile"),a=e.querySelector("#adminCoverFile");e.querySelectorAll(".admin-type-tab").forEach(o=>{o.addEventListener("click",()=>{e.querySelectorAll(".admin-type-tab").forEach(m=>m.classList.remove("on")),o.classList.add("on");const l=o.dataset.type;t&&(t.value=l);const d=eo.find(m=>m.id===l);d&&s&&(s.accept=d.acceptMedia),d&&a&&(a.accept=d.acceptCover);const c=e.querySelector("#adminMediaLabel");c&&(c.textContent=l==="picture"?"Picture file (or use cover only)":l==="video"?"Video file (optional if YouTube link set)":"Audio / media file (optional)");const u=e.querySelector("#adminStreamingFields");u&&(u.style.display=l==="song"||l==="album"?"":"none")})}),e.querySelectorAll(".admin-dropzone").forEach(o=>{const l=o.querySelector(".admin-file-input"),d=o.querySelector(".admin-file-name");o.addEventListener("click",c=>{c.target!==l&&(l==null||l.click())}),o.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),l==null||l.click())}),l==null||l.addEventListener("change",()=>{var u;const c=(u=l.files)==null?void 0:u[0];d&&(d.textContent=c?`${c.name} · ${(c.size/1024/1024).toFixed(2)} MB`:"")}),o.addEventListener("dragover",c=>{c.preventDefault(),o.classList.add("drag")}),o.addEventListener("dragleave",()=>o.classList.remove("drag")),o.addEventListener("drop",c=>{var g,f;c.preventDefault(),o.classList.remove("drag");const u=(f=(g=c.dataTransfer)==null?void 0:g.files)==null?void 0:f[0];if(!u||!l)return;const m=new DataTransfer;m.items.add(u),l.files=m.files,l.dispatchEvent(new Event("change"))})}),(n=e.querySelector("#adminAddForm"))==null||n.addEventListener("submit",async o=>{var D,k,M,$,B,E,N,ce,G,ke,xe,L,P,q,z,H,F,V,we,Ee,Ve,Ue,dt,pt,ut,mt;o.preventDefault();const l=e.querySelector("#adminAddStatus"),d=e.querySelector("#adminSave"),c=(k=(D=e.querySelector("#adminTitle"))==null?void 0:D.value)==null?void 0:k.trim(),u=(($=(M=e.querySelector("#adminArtist"))==null?void 0:M.value)==null?void 0:$.trim())||"DatBoiSkeet",m=((B=e.querySelector("#adminType"))==null?void 0:B.value)||"song",g=((N=(E=e.querySelector("#adminCoverUrl"))==null?void 0:E.value)==null?void 0:N.trim())||"",f=((G=(ce=e.querySelector("#adminMediaUrl"))==null?void 0:ce.value)==null?void 0:G.trim())||"",b=((xe=(ke=e.querySelector("#adminYoutube"))==null?void 0:ke.value)==null?void 0:xe.trim())||"",y={spotify:((P=(L=e.querySelector("#adminSpotify"))==null?void 0:L.value)==null?void 0:P.trim())||"",apple:((z=(q=e.querySelector("#adminApple"))==null?void 0:q.value)==null?void 0:z.trim())||"",youtubeMusic:((F=(H=e.querySelector("#adminYtm"))==null?void 0:H.value)==null?void 0:F.trim())||"",tidal:((we=(V=e.querySelector("#adminTidal"))==null?void 0:V.value)==null?void 0:we.trim())||"",amazon:((Ve=(Ee=e.querySelector("#adminAmazon"))==null?void 0:Ee.value)==null?void 0:Ve.trim())||"",youtube:b||""},v=!!((Ue=e.querySelector("#adminPublished"))!=null&&Ue.checked),w=(pt=(dt=e.querySelector("#adminCoverFile"))==null?void 0:dt.files)==null?void 0:pt[0],x=(mt=(ut=e.querySelector("#adminMediaFile"))==null?void 0:ut.files)==null?void 0:mt[0];if(!c){h("Title required");return}if(m==="video"&&x)try{const X=await yp(x),Ae=bp({duration:X,size:x.size,type:x.type});if(Ae){h(Ae),l&&(l.textContent=Ae);return}}catch{const X="Could not verify video duration. Upload canceled.";h(X),l&&(l.textContent=X);return}d&&(d.disabled=!0),l&&(l.textContent="Saving… (large files may take a moment on iPhone)");try{let X=g,Ae=f;w&&(X=await sn(w)),x&&(Ae=await sn(x)),m==="picture"&&!X&&Ae&&(X=Ae);const _e=No({type:m,title:c,artist:u,coverRef:X,mediaRef:Ae,youtube:b,streamingLinks:m==="song"||m==="album"?y:{},published:v,embed:an(b)});if(_e!=null&&_e.error){h(_e.error==="forbidden"?"Admin required":"Could not save"),l&&(l.textContent=""),d&&(d.disabled=!1);return}b&&_e.id&&qn(_e.id,{embed:an(b)}),h(v?"Published to catalog":"Saved as draft"),R("#/admin")}catch(X){console.error(X),h("Save failed — file may be too large for this browser"),l&&(l.textContent=String((X==null?void 0:X.message)||X)),d&&(d.disabled=!1)}}),e.querySelectorAll(".admin-cat-pub").forEach(o=>{o.addEventListener("click",()=>{Ro(o.dataset.id,o.dataset.on==="1"),h(o.dataset.on==="1"?"Published":"Unpublished"),R("#/admin")})}),e.querySelectorAll(".admin-cat-del").forEach(o=>{o.addEventListener("click",()=>{confirm("Delete this catalog item?")&&(jo(o.dataset.id),h("Deleted"),R("#/admin"))})})}function Dt(){R("#/posts")}function Pp(){Es();const e=_r(8);return e.length?`<section class="card hot-strip" id="hotStrip">
    <div class="row wrap hot-strip-head">
      <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
      <span class="chip">TEST MODE</span>
      <span class="muted hot-strip-note">likes + comments + shares · house + community</span>
    </div>
    <div class="hot-rail" role="list">${e.map((s,a)=>{const i=a+1,n=s.image?`<img class="hot-thumb" src="${r(s.image)}" alt="" loading="lazy" />`:`<div class="hot-thumb hot-thumb-empty">${r((s.username||"?")[0].toUpperCase())}</div>`,o=s.mediaType==="video"?'<span class="chip">video</span>':s.image?'<span class="chip">pic</span>':'<span class="chip">text</span>',l=s.house?'<span class="chip">house</span>':'<span class="chip">community</span>';return`<a class="hot-card" href="#/posts?focus=${r(s.postId||s.id)}" data-hot-id="${r(s.postId||s.id)}">
        <span class="hot-rank">#${i}</span>
        ${n}
        <span class="hot-meta">
          <span class="hot-user">@${r(s.username)}</span>
          <span class="hot-preview">${r((s.preview||s.text||"").slice(0,64))}</span>
          <span class="hot-stats">♥ ${s.likes} · 💬 ${s.comments} · ↗ ${s.shares} · score ${s.score}</span>
          <span class="hot-chips">${o}${l}</span>
        </span>
      </a>`}).join("")}</div>
  </section>`:`<section class="card hot-strip" id="hotStrip">
      <div class="row wrap hot-strip-head">
        <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted">No hot posts yet — engage (like · comment · share) to spike the feed.</p>
    </section>`}function Ip(e){var w,x,D,k,M;const{posts:t,likes:s,comments:a,user:i,postShares:n}=T(),o=((w=e==null?void 0:e.query)==null?void 0:w.tab)==="following"?"following":"discover",l=((x=e==null?void 0:e.query)==null?void 0:x.focus)||"",d=new Set((i==null?void 0:i.following)||[]),c=o==="following"&&i?t.filter($=>d.has($.userId)||$.userId===i.id):t,u=$o.map($=>`<button type="button" class="chip preset-img" data-src="${r($.src)}" title="${r($.label)}">${r($.label)}</button>`).join(""),m=((D=e==null?void 0:e.query)==null?void 0:D.compose)==="1"||((k=e==null?void 0:e.query)==null?void 0:k.type),g=["text","picture","short","video"].includes((M=e==null?void 0:e.query)==null?void 0:M.type)?e.query.type:"",f=i?`
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
        <input type="hidden" id="postType" value="${r(g||"picture")}" />
        <p class="chip" id="postTypeChip">${r((g||"picture").charAt(0).toUpperCase()+(g||"picture").slice(1))} post</p>
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
      <a class="btn ${o==="discover"?"primary":"ghost"}" href="#/posts">Discover</a>
      <a class="btn ${o==="following"?"primary":"ghost"}" href="#/posts?tab=following">Following</a>
      <a class="btn ghost" href="#/profile/dbs">@DatBoiSkeet</a>
    </div>`,y=c.map($=>{const B=s[$.id]||[],E=i&&B.includes(i.id),N=a[$.id]||[],ce=n&&n[$.id]||0,G=fa($.id),ke=i&&d.has($.userId),xe=l&&l===$.id?" post-focus":"",L=i&&$.userId!==i.id?`<button class="btn ghost follow-btn" data-uid="${r($.userId)}" data-on="${ke?"1":"0"}">${ke?"Following":"Follow"}</button>`:"",P=$.userId==="dbs"?'<span class="chip">house</span>':'<span class="chip">community</span>',q=$.mediaType||($.image?"picture":"text"),z=q==="short"?'<span class="chip">Short</span>':q==="video"?'<span class="chip">Video</span>':q==="picture"||q==="image"?'<span class="chip">Picture</span>':q==="text"?'<span class="chip">Text</span>':"",H=(()=>{const F=($.mediaUrl||$.image||"").trim();if(!F)return"";if(q==="short"||q==="video"){const V=/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/i.exec(F);if(V)return`<div class="media media-video"><iframe src="https://www.youtube.com/embed/${V[1]}?rel=0" title="post video" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`;if(F.startsWith("http")||F.endsWith(".mp4")||F.endsWith(".webm"))return`<video class="media" src="${r(F)}" controls playsinline preload="metadata"></video>`}return`<img class="media" src="${r(F)}" alt="" loading="lazy" />`})();return`
      <article class="post${xe}" data-id="${r($.id)}" id="post-${r($.id)}">
        <div class="meta">
          <a class="avatar" href="#/profile/${r($.userId)}">${r(($.username||"?")[0].toUpperCase())}</a>
          <div class="spacer">
            <div class="who"><a href="#/profile/${r($.userId)}">${r($.username)}</a> ${P}${z}</div>
            <div class="when">${j($.at)}${G>=5?` · <span class="hot-inline">🔥 ${G}</span>`:""}</div>
          </div>
          ${L}
        </div>
        <p class="body-text">${r($.text)}</p>
        ${H}
        <div class="post-actions">
          <button class="btn like-btn ${E?"primary":""}" data-id="${r($.id)}">
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
      </article>`}).join(""),v=o==="following"?'<div class="card muted">No posts from people you follow yet. Discover feed has official drops.</div>':'<div class="card muted">No posts yet.</div>';return I("Posts",Pp()+f+b+(y||v),{lead:"Post Text, a Picture, Short, or Video · Shorts live here (not separate tabs) · Hot strip ranks engagement."})}function _p(e){var d;const t=e.querySelector(".post-focus");if(t)try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{}else typeof location<"u"&&(location.hash.includes("compose=1")||location.hash.includes("type="))&&setTimeout(()=>{var c;return(c=e.querySelector("#composer"))==null?void 0:c.scrollIntoView({behavior:"smooth",block:"start"})},50);const s=e.querySelector("#postComposeBody"),a=e.querySelector("#postType"),i=e.querySelector("#postTypeChip"),n=e.querySelector("#postMediaLabel"),o=e.querySelector("#postPresets");function l(c){const u=c||"picture";e.querySelectorAll(".post-type-btn").forEach(b=>b.classList.toggle("on",b.dataset.type===u)),a&&(a.value=u),i&&(i.textContent=u.charAt(0).toUpperCase()+u.slice(1)+" post");const m=e.querySelector("#postMediaField"),g=e.querySelector("#postMediaNote"),f=u==="text";m&&(m.hidden=f),g&&(g.hidden=f),n&&!f&&(n.textContent=u==="short"?"Short clip link (YouTube / demo path)":u==="video"?"Video link (YouTube / demo path)":"Picture link (demo path)"),o&&(o.hidden=u!=="picture"),s&&(s.hidden=!1,s.classList.remove("is-collapsed"))}e.querySelectorAll(".post-type-btn").forEach(c=>{c.addEventListener("click",()=>l(c.dataset.type))}),a!=null&&a.value&&l(a.value),e.querySelectorAll(".preset-img").forEach(c=>{c.addEventListener("click",()=>{const u=e.querySelector("#postImg");u&&(u.value=c.dataset.src||""),h("Picture selected")})}),(d=e.querySelector("#postSubmit"))==null||d.addEventListener("click",()=>{var c,u;try{const m=(c=e.querySelector("#postText"))==null?void 0:c.value,g=(a==null?void 0:a.value)||"picture",f=(((u=e.querySelector("#postImg"))==null?void 0:u.value)||"").trim();if(g==="text"){if(!(m!=null&&m.trim()))return h("Write some words for a Text post");_i({text:m.trim(),mediaType:"text"}),h("Text posted"),Dt();return}if(!(m!=null&&m.trim())&&!f)return h("Add a caption or media");if((g==="short"||g==="video")&&!f)return h("Add a "+g+" link (TEST MODE)");_i({text:m||(g==="picture"?"Photo":g==="short"?"Short":"Video"),image:g==="picture"?f:"",mediaType:g,mediaUrl:f}),h(g.charAt(0).toUpperCase()+g.slice(1)+" posted"),Dt()}catch(m){h(m.message||"Could not post")}}),e.querySelectorAll(".like-btn").forEach(c=>{c.addEventListener("click",()=>{if(Lo(c.dataset.id).error)return h("Sign in to like");Dt()})}),e.querySelectorAll(".comment-toggle").forEach(c=>{c.addEventListener("click",()=>{const u=e.querySelector("#c-"+c.dataset.id);u&&(u.hidden=!u.hidden)})}),e.querySelectorAll(".c-send").forEach(c=>{c.addEventListener("click",()=>{var b;const u=c.dataset.id,m=e.querySelector(`.c-input[data-id="${u}"]`),g=(b=m==null?void 0:m.value)==null?void 0:b.trim();if(!g)return;if(Po(u,g).error)return h("Sign in to comment");h("Comment added"),Dt()})}),e.querySelectorAll(".share-btn").forEach(c=>{c.addEventListener("click",async()=>{var f;const u=c.dataset.id;if(qr(u).error)return h("Could not share");const g=`${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(u)}`;try{(f=navigator.clipboard)!=null&&f.writeText&&await navigator.clipboard.writeText(g),h("Shared · link copied (TEST MODE)")}catch{h("Shared · count +1 (TEST MODE)")}Dt()})}),e.querySelectorAll(".follow-btn").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.uid,m=c.dataset.on==="1";if((m?aa(u):sa(u)).error)return h("Sign in to follow");h(m?"Unfollowed":"Following"),Dt()})})}function nn(e){R(e)}const Va={apple:"Apple Music",spotify:"Spotify",youtubeMusic:"YouTube Music",youtube:"YouTube",tidal:"Tidal",amazon:"Amazon Music"};function to(e){if(!e||typeof e!="object")return{};const t={};for(const s of Object.keys(Va)){const a=String(e[s]||"").trim();(a.startsWith("http://")||a.startsWith("https://"))&&(t[s]=a)}return t}function qp(e){const t=to(e),s=Object.keys(Va).filter(a=>t[a]);return s.length?s.map(a=>`<a class="btn stream-plat stream-plat-${r(a)}" href="${r(t[a])}" target="_blank" rel="noopener">${r(Va[a])}</a>`).join(""):'<span class="muted" style="font-size:12px">No platform links yet</span>'}function Bp(e){try{const t=new URL(e);return t.protocol!=="https:"||t.hostname!=="music.apple.com"||!/^\/[a-z]{2}(?:-[a-z]{2})?\/(?:song|album)\//i.test(t.pathname)?"":"https://embed.music.apple.com"+t.pathname+t.search}catch{return""}}function Ca(e){var o;const t=e.cover?`<img class="stream-cover" src="${r(e.cover)}" alt="${r(e.title)}" loading="lazy" referrerpolicy="no-referrer" />`:'<div class="stream-cover stream-cover-empty" aria-hidden="true">♪</div>',s=e.albumNote?`<div class="muted" style="font-size:11px">${r(e.albumNote)}</div>`:"",a=e.year?` · ${r(String(e.year))}`:"",i=Bp((o=e.links)==null?void 0:o.apple),n=i?`<details class="apple-music-embed"><summary>▶ Play in PIKK · Apple Music</summary><iframe title="Apple Music player for ${r(e.title)}" src="${r(i)}" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style="width:100%;height:175px;border:0;border-radius:12px"></iframe><small class="muted">Apple controls playback availability. Full listening may require Apple Music.</small></details>`:"";return`
    <article class="stream-release">
      ${t}
      <div class="stream-meta">
        <span class="chip">${r(e.type||"release")}</span>
        <strong>${r(e.title)}</strong>
        <div class="muted" style="font-size:12px">${r(e.artist||"DatBoiSkeet")}${a}</div>
        ${s}
        ${n}
        <div class="stream-plats">${qp(e.links)}</div>
      </div>
    </article>`}function rn(e){return e==="inner"?"Inner Circle":e==="backstage"?"Backstage":e==="skeet+"?"Skeet+":"None"}function Op(e){return wo.map(t=>{const s=t.tier==="backstage"||t.tier==="inner";return e&&Oa(s?"backstage":"skeet")?`
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
      </article>`}).join("")}function on(e={}){var D;const t=["songs","albums","beats","playlists","upload"].includes((D=e.query)==null?void 0:D.view)?e.query.view:"",{user:s}=T(),a=xt(),i=Oa("skeet"),n=new Set((s==null?void 0:s.purchasedTracks)||[]),o=Pt.map(k=>`
    <div class="cover-card" style="flex:0 0 160px">
      <span class="badge-cs">${r(k.status)}</span>
      <img src="${r(k.cover)}" alt="${r(k.title)}" style="width:160px;height:160px" />
      <div class="t">${r(k.title)}</div>
      <div class="muted" style="font-size:11px">${r(k.artist)}</div>
    </div>`).join(""),l=Tn.map(k=>{const M=k.id==="skeet"?"skeet+":k.id==="inner"?"inner":k.id,$=a===M;return`
    <div class="card" style="margin:0">
      <h3>${r(k.name)}</h3>
      <div class="price" style="font-size:22px;font-weight:900">$${k.price}<span class="muted" style="font-size:13px">/mo</span></div>
      <p class="muted">${r(k.blurb)}</p>
      ${s?$?`<button type="button" class="btn ghost block mem-toggle" data-tier="${r(k.id)}" data-on="1">Active · tap to cancel (demo)</button>`:`<button type="button" class="btn primary block mem-toggle" data-tier="${r(k.id)}" data-on="0">Join · TEST MODE</button>`:'<a class="btn primary block" href="#/profile">Sign in to join</a>'}
    </div>`}).join(""),d=Li.filter(k=>n.has(k.id)),c=Li.map(k=>{const M=n.has(k.id);return`
      <div class="card" style="margin:0;display:flex;gap:12px;align-items:center">
        <img src="${r(k.cover)}" alt="" style="width:72px;height:72px;border-radius:10px;object-fit:cover;flex:0 0 72px" />
        <div class="spacer">
          <strong>${r(k.title)}</strong>
          <div class="muted" style="font-size:12px">${r(k.artist)} · ${r(k.status)}</div>
          <div style="font-weight:800;margin-top:4px">$${k.price.toFixed(2)}</div>
        </div>
        ${s?M?'<span class="chip">In My Music</span>':`<button type="button" class="btn primary buy-track" data-id="${r(k.id)}">Buy · demo</button>`:'<a class="btn" href="#/profile">Sign in</a>'}
      </div>`}).join(""),u=wt({publishedOnly:!0,types:["song","album"]}),m=u.map(k=>{const M=to(k.streamingLinks||{});return Object.keys(M).length?{id:k.id,title:k.title,artist:k.artist,type:k.type||"song",cover:k.coverRef&&!String(k.coverRef).startsWith("idb:")?k.coverRef:"",links:M,fromAdmin:!0}:null}).filter(Boolean),g=[...yt,...m];let f="";if(t==="songs"||t==="albums"){const k=t==="albums",M=g.filter($=>k?$.type==="album":$.type==="single"||$.type==="song");f=`<div class="card" id="music-focused-view">
      <h2>${k?"Albums":"Songs"}</h2>
      <p class="muted">Verified releases and available official listening links.</p>
      <div class="stream-grid">${M.map(Ca).join("")||'<p class="muted">No releases listed in this category yet.</p>'}</div>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`}else if(t==="playlists")f=`<div class="card" id="music-focused-view">
      <h2>Playlists</h2>
      <p class="muted">Official YouTube playlists open on YouTube. No rehosted audio.</p>
      <div class="row wrap" style="gap:8px">
        ${qa.map(k=>`<a class="btn ghost" href="${r(k.youtube)}" target="_blank" rel="noopener">${r(k.title)}</a>`).join("")}
      </div>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`;else if(t==="beats"||t==="upload"){const k=t==="upload";f=`<div class="card" id="music-focused-view">
      <h2>${k?"Upload Music":"Beats"}</h2>
      <p class="muted">Not available yet · TEST MODE. ${k?"Creator music uploads require secure storage, ownership verification and publishing tools.":"The producer beat marketplace and licensing checkout are still in development."}</p>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`}const b=u.length?`<div class="card catalog-admin-music">
        <h2>From Admin</h2>
        <p class="muted">Published songs &amp; albums added in Admin · TEST MODE (device-local).</p>
        <div class="cover-row">${u.map(k=>`
          <div class="cover-card catalog-item" data-id="${r(k.id)}" style="flex:0 0 160px">
            <span class="badge-cs">${r(k.type)}</span>
            <img data-idb-src="${r(k.coverRef||"")}" src="${r(k.coverRef&&!k.coverRef.startsWith("idb:")?k.coverRef:"")}" alt="${r(k.title)}" style="width:160px;height:160px;object-fit:cover;background:#111" />
            <div class="t">${r(k.title)}</div>
            <div class="muted" style="font-size:11px">${r(k.artist)}</div>
            ${k.mediaRef?`<audio class="catalog-audio" data-idb-src="${r(k.mediaRef)}" controls preload="none" style="width:100%;margin-top:6px"></audio>`:""}
          </div>`).join("")}</div>
      </div>`:"",y=yt.find(k=>k.cover)||null,v=yt.filter(k=>k.cover).slice(0,5),x=`
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
      ${y?`<div class="pikk-music-showcase-art"><img src="${r(y.cover)}" alt="${r(y.title)} official cover" decoding="async" loading="eager"/><span>${r(y.title)}</span></div>`:""}
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
        ${v.map(k=>`<a class="pikk-music-release-tile" href="#/music#stream-everywhere">
          <img src="${r(k.cover)}" alt="${r(k.title)} cover" loading="lazy" decoding="async"/>
          <strong>${r(k.title)}</strong>
          <small>${r(k.artist||"DatBoiSkeet")}</small>
        </a>`).join("")}
      </div>
    </section>`}
    ${f}
    <div class="card">
      <h2>Upcoming Releases</h2>
      <p class="muted">Real DatBoiSkeet cover art · playback unlocks when released. No fake tracks.</p>
      <div class="cover-row">${o}</div>
    </div>
    ${b}


    <div class="card" id="youtube-mixes">
      <h2>YouTube Mixes · Channel</h2>
      <p class="muted">Dogs &amp; mixes stream from the <strong>original YouTube source</strong> (embeds / Play on YouTube). Not rehosted. Released catalog still uses Stream Everywhere below.</p>
      <div class="row wrap" style="gap:8px;margin:10px 0 14px">
        <a class="btn" href="${r(de.youtube)}" target="_blank" rel="noopener">Official channel</a>
        <a class="btn ghost" href="${r(de.youtubeHandle)}" target="_blank" rel="noopener">@DatBoiSkeet1</a>
        ${qa.map(k=>`<a class="btn ghost" href="${r(k.youtube)}" target="_blank" rel="noopener">${r(k.title)}</a>`).join("")}
      </div>
      <div class="yt-mix-grid">
        ${Xa.map(k=>`
          <article class="yt-mix-card">
            <div class="hero-video" style="margin:0 0 10px">
              <iframe src="${r(Ye(k.embed))}" title="${r(k.title)}" allowfullscreen loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <h3 style="margin:0 0 6px">${r(k.title)}</h3>
            <p class="muted" style="margin:0 0 10px;font-size:13px">${r(k.blurb||"")}</p>
            <a class="btn" href="${r(k.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
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
        ${yt.map(Ca).join("")}
        ${m.map(Ca).join("")}
      </div>
      <p class="muted" style="margin-top:12px;font-size:12px">Tidal / Amazon Music omitted until official links are verified. Admin can add more via streaming link fields.</p>
    </div>

    <div class="card">
      <h2>My Music</h2>
      <p class="muted">Purchases stay here even if membership ends.</p>
      ${d.length?`<div class="cover-row">${d.map(k=>`
            <div class="cover-card" style="flex:0 0 120px">
              <img src="${r(k.cover)}" alt="${r(k.title)}" style="width:120px;height:120px" />
              <div class="t">${r(k.title)}</div>
              <div class="muted" style="font-size:11px">Owned · Coming Soon</div>
            </div>`).join("")}</div>`:'<p class="muted">Nothing purchased yet. Buy a Coming Soon cover below (demo · no charge).</p>'}
    </div>

    <div class="card">
      <h2>Buy (demo)</h2>
      <p class="muted">TEST MODE — no charges. Marks the cover as owned in My Music. Audio not available until release.</p>
      <div style="display:flex;flex-direction:column;gap:10px">${c}</div>
    </div>

    <div class="card" id="vault">
      <h2>Vault ${i?'<span class="chip" style="border-color:#2a4a3a;color:#8dffb0">Unlocked · '+r(rn(a))+"</span>":'<span class="chip">Locked</span>'}</h2>
      <p class="muted">Exclusive unreleased tracks &amp; previews for members. Nested under Music — not a bottom-nav tab.</p>

      <div class="vault-grid" style="margin:12px 0">
        ${Op(i)}
      </div>

      ${i?`<div class="vault-lock" style="border-style:solid;border-color:#2a4a3a;color:var(--tx)">
              ✅ Membership active: <strong>${r(rn(a))}</strong>. Exclusive cards above are unlocked.
              Cancel anytime with the tier button below (demo). Purchased My Music items are kept.
            </div>`:`<div class="vault-lock">
              🔒 Vault locked. Sign in, then tap <strong>Join · TEST MODE</strong> on Skeet+ or Backstage below.
              Locked cards show title/cover only — no exclusive content until you join.
            </div>`}

      <h3 style="margin:16px 0 8px">Membership (TEST MODE)</h3>
      <div class="grid-2">${l}</div>
    </div>

  `;return I("Music & Vault",x,{lead:"Singles, albums, Coming Soon, and member Vault."})}function ln(e){const t=e.querySelector("#youtube-mixes")||e;va(t),e.querySelectorAll(".mem-toggle").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=s.dataset.on==="1",n=ta(s.dataset.tier,!i);if(n!=null&&n.error)return h("Sign in required — open Profile first");h(i?"Membership cancelled (demo) · My Music purchases kept":`Joined ${s.dataset.tier} (TEST MODE) · Vault unlocked`),nn("#/music"),setTimeout(()=>{var o;return(o=document.getElementById("vault"))==null?void 0:o.scrollIntoView({behavior:"smooth",block:"start"})},40)})}),e.querySelectorAll(".buy-track").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault();const i=Mo(s.dataset.id);if(i!=null&&i.error)return h("Sign in required");h("Added to My Music (demo · no charge)"),nn("#/music")})}),e.querySelectorAll("[data-idb-src]").forEach(async s=>{const a=s.getAttribute("data-idb-src");if(!a)return;const i=await ba(a);i&&(s.tagName==="IMG"||s.tagName==="AUDIO"||s.tagName==="VIDEO")&&(s.src=i)})}function Np(){const t=`
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
  `;return I("Merch",t,{lead:"Foreign X-Change showcase · 10 products · external checkout only"})}function Rp(e){e.querySelectorAll(".shop-link").forEach(n=>{n.addEventListener("click",()=>{h("TEST MODE — opening Foreign X-Change")})});const t=e.querySelector("#merchLightbox"),s=t==null?void 0:t.querySelector("img"),a=n=>{!t||!s||(s.src=n,t.classList.add("show"),t.setAttribute("aria-hidden","false"))},i=()=>{t==null||t.classList.remove("show"),t==null||t.setAttribute("aria-hidden","true")};e.querySelectorAll(".img-wrap").forEach(n=>{const o=()=>a(n.dataset.zoom);n.addEventListener("click",o),n.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),o())})}),t==null||t.addEventListener("click",i)}function Yt(e){R(e||"#/profile")}function cn(e){return e.avatar?`<img class="avatar" src="${r(e.avatar)}" alt="" style="object-fit:cover" />`:`<div class="avatar">${r((e.username||"?")[0].toUpperCase())}</div>`}function Ls(e,t){return t.length?`<div class="card"><h3>${r(e)}</h3>
    <ul class="list-plain">${t.map(s=>`<li><a href="#/profile/${r(s.id)}"><span>${r(s.username)}</span></a>
           <a class="chip" href="#/profile/${r(s.id)}">View</a></li>`).join("")}</ul></div>`:`<div class="card"><h3>${r(e)}</h3><p class="muted">None yet.</p></div>`}function jp(e){var u;const t=((u=e==null?void 0:e.parts)==null?void 0:u[1])||null,{user:s,posts:a}=T();if(t&&(!s||t!==s.id)||t&&t!==(s==null?void 0:s.id)){const m=St(t);if(!m)return I("Profile",`<div class="card muted">User not found.</div>
         <a class="btn" href="#/profile">Back</a>`);const g=a.filter(w=>w.userId===m.id),f=s&&(s.following||[]).includes(m.id),b=Ii(m.id),y=Ba(m.id),v=`
      <div class="card">
        <div class="profile-hero">
          ${cn(m)}
          <div>
            <h2 style="margin:0">${r(m.username)}${m.verified?" ✓":""}</h2>
            <p class="muted" style="margin:4px 0 0">${r(m.bio||"")}</p>
            ${m.verified?'<span class="chip">Verified</span>':""}
          </div>
        </div>
        <div class="stats">
          <div><strong>${g.length}</strong><span>Posts</span></div>
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
        ${g.length?g.map(w=>`<div style="padding:8px 0;border-bottom:1px solid var(--line)">
                      <div class="muted" style="font-size:11px">${new Date(w.at).toLocaleString()}</div>
                      ${r(w.text)}
                      ${w.image?`<img src="${r(w.image)}" alt="" style="margin-top:8px;border-radius:12px;max-height:200px;object-fit:cover;width:100%" />`:""}
                    </div>`).join(""):'<p class="muted">No posts yet.</p>'}
      </div>
      ${Ls("Followers",b)}
      ${Ls("Following",y)}
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
      </div>`,{lead:"Free PIKK fan profile · follow · posts · role apps · TEST MODE."});const n=a.filter(m=>m.userId===s.id),o=Ii(s.id),l=Ba(s.id),d=s.memberships||{},c=`
    <div class="card">
      <div class="profile-hero">
        ${cn(s)}
        <div>
          <h2 style="margin:0">${r(s.username)}</h2>
          <p class="muted" style="margin:4px 0 0">${r(s.bio)}</p>
          <span class="chip">TEST MODE · demo</span>
          ${d.skeetPlus||d.backstage||d.innerCircle?`<span class="chip">${d.innerCircle?"Inner Circle":d.backstage?"Backstage":"Skeet+"}</span>`:""}
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

    ${Ls("Followers",o)}
    ${Ls("Following",l)}

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
  `;return I("Profile",c)}function Fp(e){var t,s,a,i,n,o;(t=e.querySelector("#signinBtn"))==null||t.addEventListener("click",()=>{var d;const l=(d=e.querySelector("#signinName"))==null?void 0:d.value;Nt(l),h("Signed in"),Yt("#/profile")}),(s=e.querySelector("#signinName"))==null||s.addEventListener("keydown",l=>{var d;l.key==="Enter"&&((d=e.querySelector("#signinBtn"))==null||d.click())}),(a=e.querySelector("#signoutBtn"))==null||a.addEventListener("click",()=>{To(),h("Signed out"),Yt("#/profile")}),(i=e.querySelector("#saveProfile"))==null||i.addEventListener("click",()=>{var d,c;if(Do({bio:(d=e.querySelector("#editBio"))==null?void 0:d.value,avatar:(c=e.querySelector("#editAvatar"))==null?void 0:c.value}).error)return h("Sign in required");h("Profile saved"),Yt("#/profile")}),(n=e.querySelector("#pubFollow"))==null||n.addEventListener("click",l=>{const d=l.currentTarget,c=d.dataset.uid,u=d.dataset.on==="1";if((u?aa(c):sa(c)).error)return h("Sign in to follow");h(u?"Unfollowed":"Following"),Yt("#/profile/"+c)}),(o=e.querySelector("#toggleAdmin"))==null||o.addEventListener("click",()=>{const l=!ee();if(bs(l).error)return h("Sign in required");h(l?"Demo Admin enabled":"Admin revoked"),Yt("#/profile")})}function dn(){R("#/clippers")}const Kp={pending:"Pending",approved:"Approved",rejected:"Rejected",waitlisted:"Waitlisted"};function Gp(){const{clipperApps:e,user:t}=T(),s=`
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
                <span class="chip">${r(Kp[a.status]||a.status)}</span>
                <span class="muted spacer" style="text-align:right">${j(a.at)}</span>
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
  `;return I("Clippers",s,{lead:"Apply → admin approve → paid campaigns & tracked links."})}function Vp(e){var t;(t=e.querySelector("#cSubmit"))==null||t.addEventListener("click",()=>{var i,n,o,l,d,c,u,m,g,f,b,y,v,w,x,D,k,M,$;const s=(n=(i=e.querySelector("#cName"))==null?void 0:i.value)==null?void 0:n.trim(),a=(l=(o=e.querySelector("#cEmail"))==null?void 0:o.value)==null?void 0:l.trim();if(!s||!a)return h("Name and email required");Io({name:s,email:a,age:(d=e.querySelector("#cAge"))==null?void 0:d.value,tiktok:(c=e.querySelector("#cTiktok"))==null?void 0:c.value,instagram:(u=e.querySelector("#cIg"))==null?void 0:u.value,youtube:(m=e.querySelector("#cYt"))==null?void 0:m.value,x:(g=e.querySelector("#cX"))==null?void 0:g.value,facebook:(f=e.querySelector("#cFb"))==null?void 0:f.value,followers:(b=e.querySelector("#cFollowers"))==null?void 0:b.value,views:(y=e.querySelector("#cViews"))==null?void 0:y.value,avgViews:(v=e.querySelector("#cAvgViews"))==null?void 0:v.value,engagement:(w=e.querySelector("#cEngage"))==null?void 0:w.value,frequency:(x=e.querySelector("#cFreq"))==null?void 0:x.value,niche:(D=e.querySelector("#cNiche"))==null?void 0:D.value,samples:(k=e.querySelector("#cSamples"))==null?void 0:k.value,analyticsNotes:(M=e.querySelector("#cAnalytics"))==null?void 0:M.value,applicantUserId:(($=T().user)==null?void 0:$.id)||null}),h("Application saved for admin review"),dn()}),e.querySelectorAll(".clip-status").forEach(s=>{s.addEventListener("click",()=>{Pn(s.dataset.id,s.dataset.status),h("Marked "+s.dataset.status),dn()})})}const Up={rose:"🌹","big-love":"💖","turn-up":"🔥","cash-rain":"💵","bottle-pop":"🍾","money-gun":"💸","diamond-drip":"💎","foreign-whip":"🚗",helicopter:"🚁","private-jet":"✈️","dbs-crown":"👑","dbs-universe":"🌌","battle-win":"✅","battle-crown":"👑","battle-vs":"⚔️","battle-fire":"🔥"},zp={rose:"/gifts/rose.svg","big-love":"/gifts/big-love.svg","turn-up":"/gifts/turn-up.svg","cash-rain":"/gifts/cash-rain.svg","bottle-pop":"/gifts/bottle-pop.svg","money-gun":"/gifts/money-gun.svg","diamond-drip":"/gifts/diamond-drip.svg","foreign-whip":"/gifts/foreign-whip.svg",helicopter:"/gifts/helicopter.svg","private-jet":"/gifts/private-jet.svg","dbs-crown":"/gifts/dbs-crown.svg","dbs-universe":"/gifts/dbs-universe.svg","battle-win":"/gifts/battle-win.svg","battle-crown":"/gifts/battle-crown.svg","battle-vs":"/gifts/battle-vs.svg","battle-fire":"/gifts/battle-fire.svg"},pn="gift-sticker";function Ps(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function Hp(e,t){return t&&typeof t=="object"&&t.className?t.className:`${pn} ${pn}--${e}`}function Ei(e,t={}){const s=String(e||""),a=Hp(s||"unknown",t),i=Up[s]||"🎁",n=zp[s]||null;return n?{src:n,className:a,emoji:i,html:`<img class="${Ps(a)}" src="${Ps(n)}" alt="" width="48" height="48" decoding="async" draggable="false" data-gift-slug="${Ps(s)}" />`}:{src:null,className:a,emoji:i,html:`<span class="${Ps(a)} gift-sticker--emoji" aria-hidden="true">${i}</span>`}}function it(e,t){return Ei(e,t&&typeof t=="object"&&typeof t!="function"?t:{}).html}const Wp=Object.freeze([{id:"women",title:"Women's Rooms",icon:"💗",description:"Conversations, style, wellness, business and community",names:["Ladies Lounge","Girl Talk","Tea Time","What's the Word?","Who Did What?","Beauty Bar","Girls' Night In","Love & Standards","Boss Ladies","Fashion & Fits","Ladies Only Live","Women in Business","Women's Mental Wellness","Dating From Her Side","The Hustle Room: Women"]},{id:"men",title:"Men's Rooms",icon:"🤝",description:"Brotherhood, relationships, business, wellness and hobbies",names:["The Man Cave","The Barbershop","Fellas' Night","Men's Corner","Men in Business","Cars & Motors","Fitness & Brotherhood","Fatherhood","Men's Mental Wellness","Dating From His Side","Sports Debate","Gaming Brotherhood","Men's Style","The Hustle Room","Brotherhood & Mentorship"]},{id:"coed",title:"Coed Communities",icon:"🌐",description:"Shared conversations, learning and networking for everyone",names:["Let's Talk","The Hangout","Business Connect & Wealth Academy","Couples Corner","Conspiracy Room","Game Room","Why Are You Single?","What Are You Looking For?","Single & Ready to Mingle","City Connect"]},{id:"dating",title:"Singles & Dating",icon:"💘",description:"Opt-in conversations, introductions and relationship topics",names:["Looking for My Match","The Flirt Zone","Speed Connections","Poly Connections","Date Night Live","Love & Advice"]},{id:"sports",title:"Sports",icon:"🏆",description:"A separate place for every major sport",names:["Sports Central","Basketball","Football","Soccer","Baseball","Hockey"]},{id:"talent",title:"Music & Talent",icon:"🎙️",description:"Rappers, singers, bands, producers and city competitions",names:["The Booth","Producer Room","The Stage","City Takeover"]},{id:"news",title:"News & Innovation",icon:"📰",description:"World events, markets and new ideas",names:["World News","Economy & Markets","Startups & Innovation","Tech Talk","Money Talk"]},{id:"general",title:"General Live",icon:"📡",description:"IRL, gaming, shows, comedy, food, fitness and more",names:["Just Chatting","Gaming","Music","IRL","Sports","Creative","Podcasts & Talk Shows","Food & Cooking","Fitness","Beauty & Fashion","Business & Money Talk","Dating & Connections","Education","News & Commentary","Comedy & Entertainment","Comedy & Roast Battles","Creator Spotlight"]}]);function Yp(e,t){const s=new Map(e.map(l=>[l[0],l])),a=new Set,i=([l,d,c])=>'<a class="live-cat-card pikk-live-room-card" href="'+(l==="Comedy & Roast Battles"?"#/roast-arena":"#/live?tab=channels&category="+encodeURIComponent(l))+'" aria-label="'+t(l)+': browse channels"><span class="pikk-live-room-emoji" aria-hidden="true">'+t(c)+"</span><strong>"+t(l)+'</strong><p class="muted">'+t(d)+'</p><span class="pikk-live-room-action">Browse channels <span aria-hidden="true">›</span></span></a>',n=Wp.map(l=>{const d=l.names.map(c=>s.get(c)).filter(Boolean);return d.forEach(c=>a.add(c[0])),'<details class="pikk-live-directory-group" id="pikk-live-group-'+l.id+'"'+(l.id==="coed"?" open":"")+'><summary class="pikk-live-directory-summary"><span class="pikk-live-directory-icon" aria-hidden="true">'+l.icon+'</span><span class="pikk-live-directory-label"><strong>'+t(l.title)+"</strong><small>"+t(l.description)+'</small></span><span class="pikk-live-directory-count">'+d.length+' rooms</span><span class="pikk-live-directory-chevron" aria-hidden="true">⌄</span></summary><div class="live-cat-cards pikk-live-directory-cards">'+d.map(i).join("")+"</div></details>"}),o=e.filter(l=>!a.has(l[0]));return o.length&&n.push('<details class="pikk-live-directory-group" open><summary class="pikk-live-directory-summary"><span class="pikk-live-directory-icon" aria-hidden="true">✨</span><span class="pikk-live-directory-label"><strong>More Live</strong><small>Additional topics</small></span><span class="pikk-live-directory-count">'+o.length+' rooms</span><span class="pikk-live-directory-chevron" aria-hidden="true">⌄</span></summary><div class="live-cat-cards pikk-live-directory-cards">'+o.map(i).join("")+"</div></details>"),'<div class="pikk-live-directory" aria-label="Live category groups">'+n.join("")+"</div>"}function so(){const e=(Xe().query||{}).tab;return e==="live"||e==="channels"?"channels":e==="following"||e==="categories"?e:"channels"}function ge(){const e=so();R(e==="channels"?"#/live":`#/live?tab=${e}`)}function ve(e){return"$"+Number(e||0).toFixed(2)}function Re(e){const t=Number(e)||0;return t>=1e3?(t/1e3).toFixed(t>=1e4?0:1).replace(/\.0$/,"")+"K":String(t)}function Qp(e="live"){return`
    <nav class="live-cat-chips" aria-label="Live categories">
      ${[{id:"live",href:"#/live?tab=channels",label:"Live"},{id:"openmic",href:"#/openmic",label:"Open Mic / Talent Discovery (24/7)"},{id:"spotlight",href:"#/spotlight",label:"Spotlight (24/7)"},{id:"viral",href:"#/viral-live",label:"Viral Live · Preview"}].map(a=>{const i=a.id===e?" on":"",n=a.id===e?' aria-current="page"':"";return`<a class="live-cat-chip${i}" href="${a.href}"${n}>${r(a.label)}</a>`}).join("")}
    </nav>`}function Jp(e="channels"){return`
    <nav class="live-disc-tabs" aria-label="Live discovery">
      ${[{id:"following",href:"#/live?tab=following",label:"Following"},{id:"clips",href:"#/shorts",label:"Clips"},{id:"channels",href:"#/live?tab=channels",label:"Channels"},{id:"categories",href:"#/live?tab=categories",label:"Categories"}].map(a=>{const i=a.id===e?" on":"",n=a.id===e?' aria-current="page"':"";return`<a class="live-disc-tab${i}" href="${a.href}" data-tab="${a.id}"${n}>${r(a.label)}</a>`}).join("")}
    </nav>`}function ao(e={}){const t=nr(),s=t.chipLabel||"House · Music Video",a=t.embed?Ye(t.embed,"rel=0"):"",i=e.title||"House catalog · while stages are quiet";return`
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
    </div>`}function Xp(e){const t=e?Ba(e.id):[],s=new Set(t.map(o=>o.id)),a=zt().filter(o=>s.has(o.hostId)),i=t.length?t.slice(0,12).map(o=>`<a class="chip" href="#/profile">${r("@"+(o.username||o.id))}</a>`).join(""):'<span class="muted">Nobody followed yet · DEMO</span>';let n;if(!e)n=`
      <p class="muted">Sign in to see lives from accounts you follow.</p>
      <a class="btn primary" href="#/profile">Demo profile</a>
      <p class="chip" style="margin-top:10px">TEST MODE · Following is local demo graph</p>`;else if(!a.length)n=`
      <p class="muted" style="margin:0 0 8px">
        None of the people you follow are live right now (demo filter on seeded Hot lives).
      </p>
      <div class="row wrap" style="gap:6px;margin-bottom:10px">${i}</div>
      <a class="btn ghost" href="#/live?tab=channels">Browse Live channels</a>
      <p class="chip" style="margin-top:10px">TEST MODE · not a scrape</p>
      ${ao({title:"Meanwhile — DatBoiSkeet house catalog on 24/7 stages"})}`;else{const o=a.map(l=>`
        <article class="hot-live-card${l.house?" is-house":""}" data-live-id="${r(l.id)}">
          <div class="live-hoodie" aria-label="Live · ${r(Re(l.viewers))} watching">
            <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
            <span class="live-hoodie-viewers">${r(Re(l.viewers))}</span>
          </div>
          <div class="hot-live-body">
            <div class="hot-live-host">@${r(l.hostName)}</div>
            <div class="hot-live-title">${r(l.title)}</div>
            <div class="hot-live-actions row wrap">
              <button type="button" class="btn ghost hot-live-watch" data-id="${r(l.id)}" data-host="${r(l.hostName)}">Watch demo</button>
            </div>
          </div>
        </article>`).join("");n=`
      <p class="muted" style="margin:0 0 8px;font-size:12px">Lives from accounts you follow · ${t.length} following · TEST MODE</p>
      <div class="row wrap" style="gap:6px;margin-bottom:10px">${i}</div>
      <div class="hot-lives-track">${o}</div>`}return`
    <div class="card live-disc-panel" id="liveTabFollowing" data-panel="following">
      <h3 style="margin:0 0 8px">Following</h3>
      ${n}
    </div>`}const Zp=[["The Booth","Rappers, freestyles, hip-hop performances and song previews","🎙️"],["The Stage","Singers, bands, vocalists and instrumental performances","🎤"],["City Takeover","City-versus-city showcases, performances and local pride challenges","🌆"],["Producer Room","Beat showcases, producer collaborations and beat competitions","🎹"],["Ladies Lounge","Women-centered girl talk, beauty, fashion, relationships and community","💅"],["Girl Talk","Everyday conversations, friendships and women’s discussions","💬"],["Tea Time","Celebrity gossip, trending stories and entertainment drama","🫖"],["Who Did What?","Viral moments, celebrity controversies and debates","👀"],["Boss Ladies","Women entrepreneurs, business networking and financial growth","👑"],["Fashion & Fits","Fashion, outfits and personal style","👗"],["Ladies Only Live","Women-centered livestreams and hosted events","🎥"],["What's the Word?","Entertainment news, celebrity conversations, viral moments and trending discussions","🗣️"],["Women in Business","Women entrepreneurs, founders, business networking and mentorship","👩‍💼"],["The Man Cave","Men’s social conversations, sports and community","🤝"],["Men in Business","Men’s entrepreneurship, networking, mentorship and partnerships","👔"],["Girls' Night In","Women-centered social nights, games and discussions","🌙"],["Beauty Bar","Beauty, hair, makeup and skincare conversations","💄"],["Love & Standards","Dating, relationships and boundaries","💗"],["Women's Mental Wellness","Women-centered stress, confidence, emotional wellbeing and peer support","🧠"],["Dating From Her Side","Women-centered dating experiences, relationships and personal standards","💞"],["The Hustle Room: Women","Women-centered side hustles, extra income ideas and building businesses","📈"],["The Barbershop","Men-centered everyday debates, conversation and community","💈"],["Fellas' Night","Men-centered social events and games","🌃"],["Men's Corner","Men-centered life, relationships and personal development","🧢"],["Cars & Motors","Cars, motorcycles, customization and auto culture","🚘"],["Fitness & Brotherhood","Fitness, wellbeing and peer support","💪"],["Fatherhood","Parenting, family responsibilities and raising children","👨‍👧"],["Men's Mental Wellness","Men-centered stress, wellbeing and peer support","🧠"],["Dating From His Side","Men-centered dating experiences and relationship advice","💬"],["Sports Debate","Sports arguments, player comparisons and predictions","🏅"],["Gaming Brotherhood","Gaming, tournaments and player communities","🎮"],["Men's Style","Fashion, grooming, watches and fragrances","⌚"],["The Hustle Room","Careers, side businesses and professional growth","📈"],["Brotherhood & Mentorship","Intergenerational mentoring and peer support","🤝"],["Sports Central","All-sports discussion, fan talk and analysis","🏆"],["Basketball","Basketball discussion and fan streams","🏀"],["Football","American football discussion and fan streams","🏈"],["Soccer","Soccer discussion and fan streams","⚽"],["Baseball","Baseball discussion and fan streams","⚾"],["Hockey","Hockey discussion and fan streams","🏒"],["Tech Talk","AI, gadgets, apps and technology","💻"],["Startups & Innovation","Building businesses, technology and new ideas","🚀"],["World News","International events and global news discussions","🌍"],["Economy & Markets","Inflation, housing, jobs, interest rates and markets","📈"],["Let's Talk","Open conversations, questions and community discussion","🗣️"],["The Hangout","Conversations and social live streams","💬"],["Creator Spotlight","Featured creators and emerging talent","🌟"],["Game Room","Gameplay, tournaments and community games","🎮"],["Why Are You Single?","Coed conversations about single life, dating experiences and relationship challenges","❓"],["What Are You Looking For?","Coed conversations about dating intentions, values and ideal partners","💭"],["Single & Ready to Mingle","Opt-in coed social conversations and introductions for singles","💘"],["Looking for My Match","Opt-in dating live conversations","❤️"],["The Flirt Zone","Dating and connection conversations","💕"],["Speed Connections","Fast-paced introductions and connections","⏱️"],["Poly Connections","Consensual nonmonogamy discussions and connections","🔗"],["Couples Corner","Couples-versus-couples games, trivia, partner challenges, friendly competitions and rematches","💞"],["Date Night Live","Live dating conversations and activities","🌹"],["Love & Advice","Relationship conversations and advice","💌"],["Business Connect & Wealth Academy","Coed business networking and beginner education in entrepreneurship, credit, stocks, crypto, real estate and Roth IRAs","💼"],["City Connect","Meet people by city for friendship, dating, business networking and local conversations","📍"],["Conspiracy Room","Open discussion of theories and claims","🧩"],["Money Talk","Stocks, housing, crypto and financial discussions","💰"],["Just Chatting","Conversations, Q&A and hanging out","💬"],["Gaming","Gameplay, tournaments and community games","🎮"],["Music","Artists, DJs, producers and listening sessions","🎵"],["IRL","Everyday life, travel and outdoor streams","🌎"],["Sports","Sports talk and watch-along discussions","🏀"],["Creative","Art, design, production and making things","🎨"],["Podcasts & Talk Shows","Interviews, panels and conversations","🎙️"],["Food & Cooking","Recipes, kitchens and food reviews","🍳"],["Fitness","Training, wellness and movement","💪"],["Beauty & Fashion","Style, hair, makeup and fashion","✨"],["Business & Money Talk","Entrepreneurs, careers and money discussions","💼"],["Dating & Connections","Opt-in conversations and dating live rooms","❤️"],["Education","Tutorials, learning and study sessions","📚"],["News & Commentary","Current events and opinions","📰"],["Comedy & Entertainment","Comedy, variety and entertainment","🎭"],["Comedy & Roast Battles","1v1, tag team, open mic and tournaments","🎤"]];function eu(){return`
    <div class="card live-disc-panel" id="liveTabCategories" data-panel="categories">
      <div class="pikk-live-directory-hero">
        <span class="pikk-live-directory-kicker">PIKK LIVE · DISCOVER</span>
        <h3>Find your room.</h3>
        <p>Choose a community, explore a sport or find a conversation. Open a section to browse its topics.</p>
        <span class="pikk-live-directory-note">Discovery categories filter channels; a category is not a hosted room or a live stream. No active stream? You'll see an empty result.</span>
      </div>
      ${Yp(Zp,r)}
      <h3 style="margin:20px 0 8px">PIKK 24/7 Stages</h3>
      <div class="live-cat-cards">
        <a class="live-cat-card" href="#/openmic"><strong>Open Mic / Talent Discovery</strong><span class="chip">24/7 stage</span><p class="muted">Join the performance queue</p></a>
        <a class="live-cat-card" href="#/spotlight"><strong>Spotlight Live</strong><span class="chip">24/7 stage</span><p class="muted">Keep Going votes and creator performances</p></a>
        <a class="live-cat-card" href="#/shorts"><strong>Clips / Shorts</strong><span class="chip">Watch</span><p class="muted">Watch short videos</p></a>
        <a class="live-cat-card" href="#/viral-live"><strong>PIKK Viral Live</strong><span class="chip">Preview · not broadcasting</span><p class="muted">Explore the future 24/7 trending channel and original video sources</p></a>
      </div>
    </div>`}function tu(e){return e!=null&&e.spikedAt?Date.now()-Number(e.spikedAt)<15*60*1e3:!1}function su(e=""){const t=zt();return`
    <div class="card hot-lives-rail" id="hotLivesRail">
      <div class="row wrap" style="justify-content:space-between;align-items:baseline;gap:8px">
        <h3 style="margin:0">Hot lives · Top streamers</h3>
        <span class="chip">score · viewers + engagement</span>
      </div>
      <p class="muted" style="margin:6px 0 10px;font-size:12px">TEST MODE · seeded demo · not third-party scrape · house + community</p>
      <div class="hot-lives-track">
        ${(e?t.filter(i=>String(i.category||"").toLowerCase()===e.toLowerCase()):t).map(i=>{const n=tu(i);return`
      <article class="hot-live-card${n?" is-hot":""}${i.house?" is-house":""}" data-live-id="${r(i.id)}">
        <div class="live-hoodie" aria-label="Live · ${r(Re(i.viewers))} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" title="${r(Re(i.viewers))} watching">${r(Re(i.viewers))}</span>
        </div>
        <div class="hot-live-body">
          <div class="hot-live-host">@${r(i.hostName)}</div>
          <div class="hot-live-title">${r(i.title)}</div>
          <div class="hot-live-chips">
            <span class="chip">${r(Re(i.viewers))} watching</span>
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
    </div>`}function au(e){const t=String(e||"queued");return t==="playing"?'<span class="chip live-chip">Playing</span>':t==="played"?'<span class="chip chip-ok">Played</span>':t==="skipped"?'<span class="chip">Skipped</span>':'<span class="chip">Queued</span>'}function Se(e){const t=Number(e)||0;return t>=1e3?(t/1e3).toFixed(t%1e3===0?0:1).replace(/\.0$/,"")+"K":String(t)}function iu(e,t){if(!e||e.endedAt)return"";const s=ra(),a=Xo(),i=Zo(e.id).slice(0,12),n=a.map(c=>{const u=c.coins>=Qo,m=s>=c.coins;return`
      <button type="button" class="lg-gift" data-slug="${r(c.slug)}" data-coins="${c.coins}" data-confirm="${u?"1":"0"}" title="${r(c.animation)}">
        <span class="lg-gift-emoji">${it(c.slug)}</span>
        <span class="lg-gift-name">${r(c.name)}</span>
        <span class="lg-gift-price">${r(Se(c.coins))} · ${ve(c.usd)}</span>
        ${m?'<span class="chip">Ready</span>':'<span class="chip">Need demo coins</span>'}
        ${u?'<span class="chip lg-confirm-chip">Confirm</span>':""}
      </button>`}).join(""),o=ia.map(c=>`<button type="button" class="btn ghost lg-buy" data-coins="${c.coins}">${r(Se(c.coins))} · ${ve(c.usd)}</button>`).join(""),l=i.length?i.map(c=>`<li class="lg-hist-row">
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
        <div class="row wrap lg-buy-row" style="gap:6px;margin-top:8px">${o}</div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">Demo coin values only. No charge, cash value, or withdrawal.</p>
      </details>`:`
      <div class="card" style="margin-top:8px;padding:12px">
        <p class="muted" style="margin:0">Create a local demo profile to try gifts during this Live. No real account required.</p>
        <a class="btn primary" href="#/profile" style="margin-top:8px">Sign in</a>
      </div>`}
      <h4 style="margin:14px 0 8px;font-size:13px">Recent gifts</h4>
      <ul class="list-plain lg-hist" id="lgHist">${l}</ul>
    </div>`}function nu(e,t){var d;if(!e||e.endedAt)return"";const s=!!(t&&e.hostId===t.id),a=Number(((d=T().wallet)==null?void 0:d.balance)||0),i=Za(e.id),n=On.map(c=>{const u=c.save>0?`<span class="chip chip-ok lsr-save">Save $${c.save}</span>`:"";return`
      <button type="button" class="lsr-pack" data-pack="${c.pack}" data-price="${c.price}" aria-pressed="false">
        <strong>${r(c.label)}</strong>
        <span class="lsr-pack-price">${ve(c.price)}</span>
        ${u}
      </button>`}).join(""),o=i.length?i.map(c=>{const u=s?`<div class="row wrap lsr-host-acts" style="gap:6px">
                 ${c.status==="queued"||c.status==="playing"?`<button type="button" class="btn primary lsr-play" data-rid="${r(c.requestId)}" data-si="${c.songIndex}">${c.status==="playing"?"Mark played":"Play"}</button>
                        <button type="button" class="btn ghost lsr-skip" data-rid="${r(c.requestId)}" data-si="${c.songIndex}">Skip</button>`:""}
               </div>`:"";return`
          <li class="lsr-queue-row" data-status="${r(c.status)}">
            <div class="lsr-queue-main">
              <strong>${r(c.title)}</strong>
              <span class="muted" style="font-size:12px">@${r(c.username)} · ${r(String(c.pack))}‑pack</span>
            </div>
            ${au(c.status)}
            ${u}
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
          <span class="chip">Wallet ${ve(a)}</span>
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
      <ul class="list-plain lsr-queue" id="lsrQueue">${o}</ul>
      <h4 style="margin:14px 0 8px;font-size:13px">Request a pack</h4>
      ${l}
    </div>`}function ru(e){var l;const t=e.endedAt?Math.max(0,Math.floor((e.endedAt-e.startedAt)/1e3)):Math.max(0,Math.floor((Date.now()-e.startedAt)/1e3)),s=String(Math.floor(t/60)).padStart(2,"0"),a=String(t%60).padStart(2,"0"),i=Re(e.viewers||0),n=e.endedAt?`<div class="live-stage-meta"><span class="chip">Ended · ${j(e.endedAt)}</span></div>`:`<div class="live-hoodie live-hoodie--stage" aria-label="Live · ${r(i)} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" id="liveViewers" title="${r(i)} watching">${r(i)}</span>
        </div>
        <div class="live-stage-meta">
          <span class="chip">${s}:${a}</span>
        </div>`,o=(e.chat||[]).slice(-40).map(d=>`
      <div class="live-chat-row ${d.support?"support":""}">
        <strong>${r(d.username)}</strong>
        <span>${r(d.text)}</span>
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
        <span class="chip">Tips ${ve(e.tipsTotal)}</span>
        <span class="chip">Gifts ${ve(e.giftsTotal||0)}</span>
        <span class="chip">Song reqs (see queue)</span>
        <span class="chip">Coins ${Se(ra())}</span>
        <span class="chip">Wallet ${ve(((l=T().wallet)==null?void 0:l.balance)||0)}</span>
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
      <div class="live-chat" id="liveChat">${o||'<p class="muted">No messages yet.</p>'}</div>
      ${e.endedAt?"":`<div class="row" style="gap:8px;margin-top:10px">
               <input id="liveChatInput" placeholder="Say something…" maxlength="280" style="flex:1" />
               <button class="btn primary" id="liveChatSend">Send</button>
             </div>`}
    </div>
  `}function ou(e){const t=Number(e==null?void 0:e.targetAmount)||0;return t<=0?0:Math.min(100,Math.round((Number(e.raised)||0)/t*100))}function lu(e){const t=Math.max(0,Number(e)-Date.now());if(t<=0)return"Ended · 24h window over";const s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return s>=1?`Resets in ${s}h ${a}m`:`Resets in ${a}m`}function cu(e,t){if(!e||e.endedAt)return"";const s=e.hostId,a=al(s),i=!!(t&&s&&t.id===s),n=ra();if(!a)return i?`
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
      </div>`;const o=ou(a),l=!!(a.completedAt||o>=100),d=o>=100?"Complete":o>=70?"Close":o>=30?"On the way":"Far",c=[50,100,250].map(m=>`<button type="button" class="btn ghost live-goal-donate" data-goal-id="${r(a.id)}" data-coins="${m}" title="≈ $${(m/50).toFixed(0)}">Donate ${m} coins</button>`).join(""),u=i?`<details class="live-goal-edit" style="margin-top:10px">
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
        <span class="chip${l?" chip-ok":""}">${l?"Goal met":r(d)}</span>
      </div>
      <p class="muted" style="margin:4px 0 8px;font-size:12px">${r(lu(a.endsAt))} · @${r(a.hostName||e.hostName)} · TEST MODE</p>
      <div class="live-goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${o}" aria-label="Goal progress">
        <div class="live-goal-fill" style="width:${o}%"></div>
      </div>
      <p class="live-goal-amounts" style="margin:8px 0 10px">
        <strong>${ve(a.raised)}</strong> / ${ve(a.targetAmount)}
        <span class="muted"> · ${o}%</span>
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
    </div>`}function du(e){return e?`
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
      </div>`}function pu(e){return e.length?`
    <div class="card">
      <h3>Recent streams (this device)</h3>
      <ul class="list-plain">
        ${e.slice(0,8).map(t=>`<li>
              <span><strong>${r(t.title)}</strong><br/><span class="muted" style="font-size:12px">@${r(t.hostName)} · ${j(t.endedAt||t.startedAt)} · tips ${ve(t.tipsTotal)}</span></span>
              <span class="chip">${t.endedAt?"Ended":"Live"}</span>
            </li>`).join("")}
      </ul>
    </div>`:""}function uu(e){if(!e||e.endedAt)return"";const t=el(10),s=t.length?t.map((l,d)=>{const c=it(l.lastSlug||"rose",{className:"gift-sticker gift-sticker--xs"});return`<div class="live-obar-cell" title="${r(l.username)} · ${ve(l.usd)} today">
            <span class="live-obar-rank">${d+1}</span>
            ${c}
            <span class="live-obar-name">${r(l.username)}</span>
          </div>`}).join(""):'<div class="live-obar-empty muted">No gifters yet today</div>',a=mi(10),i=a.length?a.map((l,d)=>{const c=it("battle-win",{className:"gift-sticker gift-sticker--xs"});return`<div class="live-obar-cell" title="${r(l.username)} · rest of day">
            <span class="live-obar-rank">${d+1}</span>
            ${c}
            <span class="live-obar-name">${r(l.username)}</span>
          </div>`}).join(""):'<div class="live-obar-empty muted">No winners yet today</div>',n=Za(e.id).find(l=>l.status==="playing");let o="";if(n){const l=n.title||"Song";o=`
      <div class="live-obar live-obar-spotlight" id="liveRequestSpotlight" role="status" aria-live="polite">
        <span class="live-obar-label">Request Spotlight</span>
        <span class="live-obar-spotlight-name">@${r(n.username||"fan")}</span>
        <span class="muted live-obar-spotlight-song">${r(l)}</span>
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
      ${o}
    </div>`}function mu(e){const t=Tl();if(!t)return"";const s=it(t.giftSlug||"rose",{className:"gift-sticker"}),i=e&&e.id===t.fromUserId?`<p class="muted" style="margin:8px 0 0;font-size:12px">You triggered this · others can Challenge you · TEST MODE</p>
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
    </div>`}function hu(e){var i,n,o,l,d,c,u,m;ui();const t=di();if(!t||!e)return"";if(t.status==="active"||t.status==="ended"){const g=Math.max(0,Number(t.scoreA)||0),f=Math.max(0,Number(t.scoreB)||0),b=g+f,y=t.status==="active"?Math.max(0,Math.ceil((Number(t.endsAt)-Date.now())/1e3)):0,v=t.winnerName?"@"+r(t.winnerName):"Tie";return`
      <section class="card live-battle-scoreboard" aria-label="Live Gift Battle scoreboard">
        <div class="row wrap" style="justify-content:space-between;align-items:center">
          <strong>⚔️ PIKK Live Battle</strong>
          <span class="chip" id="liveBattleTimer" data-ends-at="${Number(t.endsAt)||0}">${t.status==="active"?y+"s left":"Finished"}</span>
        </div>
        <div class="row" style="justify-content:space-between;gap:12px;margin:12px 0">
          <div><strong>@${r(((i=t.challenger)==null?void 0:i.name)||"Challenger")}</strong><div>${Re(g)} demo points</div></div>
          <strong>VS</strong>
          <div style="text-align:right"><strong>@${r(((n=t.opponent)==null?void 0:n.name)||"Opponent")}</strong><div>${Re(f)} demo points</div></div>
        </div>
        <div class="live-battle-score-track" role="progressbar" aria-label="Challenger share of battle points" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${b?Math.round(g/b*100):50}" style="height:10px;background:var(--blue);border-radius:10px;overflow:hidden">
          <div style="width:${b?Math.round(g/b*100):50}%;height:100%;background:var(--acc)"></div>
        </div>
        ${t.status==="ended"?`<p class="live-battle-winner" style="font-weight:800;margin-top:10px">🏆 ${v} · Battle complete</p>`:'<p class="muted" style="margin-top:10px">Scores update with demo gifts · no real money</p>'}
        <a href="#/giftbattles" class="btn ghost" style="margin-top:8px">Battle details</a>
      </section>`}if(t.status!=="pending")return"";const s=((o=t.opponent)==null?void 0:o.id)===e.id,a=((l=t.challenger)==null?void 0:l.id)===e.id;return!s&&!a?`
      <div class="card live-gb-pending-note">
        <span class="chip">Pending battle</span>
        <span class="muted" style="margin-left:8px;font-size:12px">${r((d=t.challenger)==null?void 0:d.name)} vs ${r((c=t.opponent)==null?void 0:c.name)} · waiting</span>
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
    </div>`}function gu(){const e=mi(10);return e.length?`
    <div class="card live-gb-day" id="liveGbDayWinners">
      <h3 style="margin:0 0 6px">Gift Battle winners today</h3>
      <p class="muted" style="margin:0 0 8px;font-size:12px">Up to 10 · until end of day · TEST MODE</p>
      <ul class="live-gb-day-list">${e.map((s,a)=>`<li class="live-gb-day-row"><span class="live-gb-day-sticker">${it("battle-win",{className:"gift-sticker gift-sticker--xs"})}</span><span class="chip">#${a+1}</span><strong>${r(s.username)}</strong></li>`).join("")}</ul>
    </div>`:""}function fu(){var u;const{user:e,live:t}=T(),s=Vo(),a=t&&!t.endedAt,i=!!t,n=so(),o=((u=Xe().query)==null?void 0:u.category)||"";let d=`
    <div class="live-disc-panel" data-panel="channels">
      ${o?`<div class="card"><strong>Category: ${r(o)}</strong> <a class="btn ghost" href="#/live?tab=categories">All categories</a> <a class="btn ghost" href="#/live?tab=channels">All channels</a><p class="muted small">Only channels tagged with this category are shown below.</p></div>`:""}
      ${su(o)}
      ${o?"":gu()}
      ${a?"":du(e)}
      ${a?"":ao({title:"No active Live on this device — house catalog on Spotlight / Open Mic"})}
      ${pu(s)}
      <div class="card">
        <p class="muted" style="margin:0 0 8px">More Live tools</p>
        <div class="row wrap">
          <a class="btn ghost" href="#/connect#connect-multistream">Multi-platform go-live</a>
          <a class="btn ghost" href="#/multiguest">Multi-Guest</a>
          <a class="btn ghost" href="#/shorts">Shorts / Clips</a>
        </div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">Open Mic + Spotlight are 24/7 categories (chips above). Clips live under Watch → Shorts / Clips. Gifts + song requests run during an active Live. Gift Battles is not promoted from this page.</p>
      </div>
    </div>`;n==="following"?d=Xp(e):n==="categories"&&(d=eu());const c=`
    ${Jp(n)}
    ${Qp("live")}
    ${a?uu(t):""}
    ${a?mu(e):""}
    ${a?hu(e):""}
    ${i?ru(t):""}
    ${a?cu(t,e):""}
    ${a?iu(t,e):""}
    ${a?nu(t,e):""}
    ${d}
  `;return I("PIKK Live",c,{lead:"Following · Clips · Channels · Categories → Shorts · Request Spotlight · TEST MODE.",badge:a?"LIVE":void 0})}const Ua=[];let Ta=!1;function vu(e,t){Ua.push(t),io(e)}function io(e){if(Ta)return;const t=e.querySelector("#liveGiftOverlay");if(!t){Ua.length=0;return}const s=Ua.shift();if(!s)return;Ta=!0;const i=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?900:s.tier==="cinematic"?4200:s.tier==="premium"?2800:1600;t.innerHTML=`
    <div class="lg-overlay-card lg-tier-${r(s.tier||"small")}" data-slug="${r(s.slug)}">
      <div class="lg-overlay-sticker">${it(s.slug)}</div>
      <div class="lg-overlay-copy">
        <strong>${r(s.name)}</strong>
        <span>@${r(s.fromUser)} · ${r(Se(s.coins))} coins</span>
        <span class="muted lg-overlay-brief">${r(s.animation||"")}</span>
      </div>
    </div>`,t.classList.add("is-on"),window.setTimeout(()=>{t.classList.remove("is-on"),t.innerHTML="",Ta=!1,io(e)},i)}function bu(e){e.querySelectorAll(".lg-buy").forEach(t=>{t.addEventListener("click",()=>{const s=Nn(Number(t.dataset.coins));if((s==null?void 0:s.error)==="bad_package")return h("Unknown coin pack");if(s!=null&&s.error)return h(String(s.error));h(`+${Se(s.pack.coins)} coins · ${ve(s.pack.usd)} · TEST MODE`),ge()})}),e.querySelectorAll(".lg-gift").forEach(t=>{t.addEventListener("click",()=>{var l,d,c;const s=t.dataset.slug,a=t.dataset.confirm==="1",i=ti.find(u=>u.slug===s);if(!i)return h("Gift not found");if(a&&!window.confirm(`Send ${i.name} for ${Se(i.coins)} coins (${ve(i.usd)})?
TEST MODE · demo coins only`))return;const n=(l=T().live)==null?void 0:l.id,o=tl({liveId:n,slug:s});if((o==null?void 0:o.error)==="signin")return h("Sign in first");if((o==null?void 0:o.error)==="offline")return h("Not live");if((o==null?void 0:o.error)==="insufficient")return h(`Need ${Se(o.need)} coins — buy a pack below · TEST MODE`);if((o==null?void 0:o.error)==="bad_gift")return h("Unknown gift");if(o!=null&&o.error)return h(String(o.error));vu(e,{slug:i.slug,name:i.name,coins:i.coins,tier:i.tier,animation:i.animation,fromUser:((d=o.entry)==null?void 0:d.fromUser)||((c=T().user)==null?void 0:c.username)||"you"}),h(`Sent ${i.name} · ${Se(i.coins)} coins · TEST MODE`),window.setTimeout(()=>ge(),200)})})}function yu(e){var o,l;const t=e.querySelector("#lsrPacks"),s=e.querySelector("#lsrTitleFields");if(!t||!s)return;let a=1;const i=()=>{const d=a,c=Array.from({length:d},(u,m)=>`<div class="field"><label>Song ${m+1}</label>
        <input class="lsr-title-input" data-i="${m}" maxlength="80" placeholder="Song title…" /></div>`).join("");s.innerHTML=c},n=d=>{a=Number(d)||1,t.querySelectorAll(".lsr-pack").forEach(c=>{const u=Number(c.dataset.pack)===a;c.classList.toggle("on",u),c.setAttribute("aria-pressed",u?"true":"false")}),i()};t.querySelectorAll(".lsr-pack").forEach(d=>{d.addEventListener("click",()=>n(d.dataset.pack))}),n(1),(o=e.querySelector("#lsrSeedWallet"))==null||o.addEventListener("click",()=>{zs(50,"Song request demo credit · TEST MODE"),h("+$50 wallet demo · TEST MODE"),ge()}),(l=e.querySelector("#lsrSubmit"))==null||l.addEventListener("click",()=>{const d=Array.from(e.querySelectorAll(".lsr-title-input")).map(u=>u.value),c=zo({pack:a,titles:d});if((c==null?void 0:c.error)==="signin")return h("Sign in first");if((c==null?void 0:c.error)==="offline")return h("Not live");if((c==null?void 0:c.error)==="bad_pack")return h("Pick a pack");if((c==null?void 0:c.error)==="title_count")return h(`Enter ${c.need} song title${c.need>1?"s":""}`);if((c==null?void 0:c.error)==="insufficient")return h(`Need ${ve(c.need)} — tap + $50 demo credit · TEST MODE`);if(c!=null&&c.error)return h(String(c.error));h(`Song request submitted · ${ve(c.entry.price)} · TEST MODE`),ge()}),e.querySelectorAll(".lsr-play").forEach(d=>{d.addEventListener("click",()=>{var b;const c=d.dataset.rid,u=Number(d.dataset.si),g=Za((b=T().live)==null?void 0:b.id).find(y=>y.requestId===c&&y.songIndex===u);let f;if((g==null?void 0:g.status)==="playing"){if(f=Yo(c,u),(f==null?void 0:f.error)==="host_only")return h("Host only");if(f!=null&&f.error)return h(String(f.error));h("Marked played · TEST MODE")}else{if(f=Ho(c,u),(f==null?void 0:f.error)==="host_only")return h("Host only");if(f!=null&&f.error)return h(String(f.error));h("Now playing · TEST MODE")}ge()})}),e.querySelectorAll(".lsr-skip").forEach(d=>{d.addEventListener("click",()=>{const c=Wo(d.dataset.rid,Number(d.dataset.si));if((c==null?void 0:c.error)==="host_only")return h("Host only");if(c!=null&&c.error)return h(String(c.error));h("Skipped · TEST MODE"),ge()})})}function ku(e){var s,a,i,n,o,l,d,c;e.querySelectorAll(".hot-live-watch").forEach(u=>{u.addEventListener("click",()=>{Sa();const m=u.dataset.host||"creator",g=u.dataset.id||"",f=e.querySelector(`.hot-live-card[data-live-id="${CSS.escape(g)}"]`);e.querySelectorAll(".hot-live-card.is-watching").forEach(b=>b.classList.remove("is-watching")),f==null||f.classList.add("is-watching"),h(`Watching @${m} · demo only`)})}),e.querySelectorAll(".hot-live-spike").forEach(u=>{u.addEventListener("click",()=>{var b;const m=u.dataset.id,g=xd(m);if((g==null?void 0:g.error)==="missing")return h("Live not found");if(g!=null&&g.error)return h(String(g.error));const f=((b=g.live)==null?void 0:b.hostName)||"creator";h(g.deduped?`Spike @${f} · Admin alert already open`:`Spike @${f} · Admin engagement alert queued`),ge()})}),(s=e.querySelector("#liveStart"))==null||s.addEventListener("click",()=>{var b,y,v,w,x;const u=(y=(b=e.querySelector("#liveTitle"))==null?void 0:b.value)==null?void 0:y.trim(),m=qi(u);if((m==null?void 0:m.error)==="signin")return h("Sign in first");if((m==null?void 0:m.error)==="already_live")return h("Already live");const g=(w=(v=e.querySelector("#liveGoalNameGo"))==null?void 0:v.value)==null?void 0:w.trim(),f=Number((x=e.querySelector("#liveGoalAmtGo"))==null?void 0:x.value);if(g&&f>0){const D=Kn({name:g,targetAmount:f});(D==null?void 0:D.error)==="signin"?h("Sign in to set goal"):D!=null&&D.error?h("Goal not set · "+D.error):h(`Live goal set · $${f} · 24h · TEST MODE`)}Sa(),h("You are live · TEST MODE"),ge()}),(a=e.querySelector("#liveRestart"))==null||a.addEventListener("click",()=>{var g;const u="PIKK Live · "+(((g=T().user)==null?void 0:g.username)||"Demo"),m=qi(u);if(m!=null&&m.error)return h(String(m.error));Sa(),h("Back live · TEST MODE"),ge()}),(i=e.querySelector("#liveEnd"))==null||i.addEventListener("click",()=>{Fo(),Gr(),h("Stream ended"),ge()}),(n=e.querySelector("#liveBumpViewers"))==null||n.addEventListener("click",()=>{const u=Ko(),m=e.querySelector("#liveViewers");m&&u&&(m.textContent=Re(u.viewers||0)),h("Viewers updated (stub)")}),(o=e.querySelector("#liveTip"))==null||o.addEventListener("click",u=>{const m=u.currentTarget,g=Bn({kind:"tip",amount:Number(m.dataset.amt)||1});if((g==null?void 0:g.error)==="signin")return h("Sign in first");if((g==null?void 0:g.error)==="offline")return h("Not live");h("Tip sent · demo"),ge()});const t=()=>{var f;const u=e.querySelector("#liveChatInput"),m=(f=u==null?void 0:u.value)==null?void 0:f.trim();if(!m)return h("Type a message");const g=Go(m);if((g==null?void 0:g.error)==="signin")return h("Sign in first");if((g==null?void 0:g.error)==="offline")return h("Not live");(g==null?void 0:g.error)!=="empty"&&(u&&(u.value=""),ge())};(l=e.querySelector("#liveChatSend"))==null||l.addEventListener("click",t),(d=e.querySelector("#liveChatInput"))==null||d.addEventListener("keydown",u=>{u.key==="Enter"&&t()}),(c=e.querySelector("#liveFocusGifts"))==null||c.addEventListener("click",()=>{var u;(u=e.querySelector("#liveGifts"))==null||u.scrollIntoView({behavior:"smooth",block:"start"})}),bu(e),yu(e),wu(e)}function wu(e){var t;(t=e.querySelector("#liveGoalSave"))==null||t.addEventListener("click",()=>{var n,o,l;const s=(o=(n=e.querySelector("#liveGoalName"))==null?void 0:n.value)==null?void 0:o.trim(),a=Number((l=e.querySelector("#liveGoalAmt"))==null?void 0:l.value),i=Kn({name:s,targetAmount:a});if((i==null?void 0:i.error)==="signin")return h("Sign in first");if((i==null?void 0:i.error)==="bad_name")return h("Enter a goal name");if((i==null?void 0:i.error)==="bad_amount")return h("Enter a goal amount ($)");if(i!=null&&i.error)return h(String(i.error));h(`Goal live · $${i.goal.targetAmount} · 24h window · TEST MODE`),ge()}),e.querySelectorAll(".live-goal-custom-form").forEach(s=>{s.addEventListener("submit",a=>{var o;a.preventDefault();const i=Number((o=s.querySelector(".live-goal-custom-coins"))==null?void 0:o.value);if(!Number.isSafeInteger(i)||i<1||i>1e6)return h("Enter 1–1,000,000 whole coins");const n=Us(s.dataset.goalId,i);if((n==null?void 0:n.error)==="signin")return h("Sign in first");if((n==null?void 0:n.error)==="insufficient")return h("Not enough demo coins");if(n!=null&&n.error)return h("Donation unavailable · TEST MODE");h("Custom donation sent · TEST MODE"),ge()})}),e.querySelectorAll(".live-goal-donate").forEach(s=>{s.addEventListener("click",()=>{var l;const a=s.dataset.goalId,i=Number(s.dataset.coins),n=Us(a,i);if((n==null?void 0:n.error)==="signin")return h("Sign in first");if((n==null?void 0:n.error)==="insufficient")return h(`Need ${Se(n.need)} coins — buy a pack in Gifts · TEST MODE`);if((n==null?void 0:n.error)==="expired")return h("Goal ended · 24h window over");if((n==null?void 0:n.error)==="unknown_goal")return h("Goal not found");if((n==null?void 0:n.error)==="invalid_amount")return h("Pick a donate amount");if(n!=null&&n.error)return h(String(n.error));const o=((l=n.donated)==null?void 0:l.usd)??i/50;h(`Donated ${Se(i)} coins ($${Number(o).toFixed(2)}) · TEST MODE`),ge()})})}const js=he.filter(e=>["dirty-money","93","no-love"].includes(e.id)).map(e=>({id:e.id,title:e.title,artist:"DatBoiSkeet",url:e.youtube})),un=[{id:"videos",label:"Videos"},{id:"clips",label:"Viral clips"},{id:"songs",label:"Songs"},{id:"photos",label:"Photos"}];function Su(){const e=js[0],t=js.map((s,a)=>`
    <button type="button" class="pikk-viral-choice${a===0?" is-selected":""}"
      data-viral-pick="${a}" aria-pressed="${a===0}">
      <span class="pikk-viral-choice-num">${String(a+1).padStart(2,"0")}</span>
      <span class="pikk-viral-choice-copy"><strong>${r(s.title)}</strong><small>${r(s.artist)} · Original YouTube source</small></span>
      <span class="pikk-viral-choice-arrow" aria-hidden="true">↗</span>
    </button>`).join("");return I("PIKK Viral Live",`
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
        <div class="pikk-viral-hero-mark" aria-hidden="true"><span>▶</span><small>PIKK</small></div>
      </section>

      <div class="pikk-viral-notice" role="status">
        <strong>PREVIEW · NOT BROADCASTING</strong>
        <span>Real-time viewer counts, live chat, engagement ranking and 24/7 playback are not connected. Nothing here is represented as live.</span>
      </div>

      <nav class="pikk-viral-tabs" aria-label="Viral Live content types" role="tablist">
        ${un.map((s,a)=>`<button type="button" role="tab" data-viral-type="${s.id}" aria-selected="${a===0}" aria-controls="viral-panel-${s.id}" id="viral-tab-${s.id}">${s.label}</button>`).join("")}
      </nav>

      <section id="viral-panel-videos" data-viral-panel="videos" role="tabpanel" aria-labelledby="viral-tab-videos">
        <div class="pikk-viral-stage" aria-label="Original video discovery">
          <div class="pikk-viral-stage-art" aria-hidden="true"><span>▶</span><small>ORIGINAL VIDEO</small></div>
          <div class="pikk-viral-stage-body">
            <span class="pikk-viral-stage-eyebrow">FEATURED SOURCE · NOT A LIVESTREAM</span>
            <h3 id="pikkViralTitle" aria-live="polite">${r(e.title)}</h3>
            <p id="pikkViralCreator">${r(e.artist)} · Watch from the original publisher</p>
            <a class="btn primary" id="pikkViralSource" href="${r(e.url)}" target="_blank" rel="noopener noreferrer">Watch original on YouTube</a>
            <p class="pikk-viral-caption">Opening the source does not grant PIKK rebroadcast or music licensing rights.</p>
          </div>
        </div>
        <div class="pikk-viral-section-head"><h3>Up next · source library</h3><span>Manual preview · ${js.length} existing music videos</span></div>
        <div class="pikk-viral-queue" id="pikkViralQueue">${t}</div>
      </section>

      ${un.filter(s=>s.id!=="videos").map(s=>`
        <section class="pikk-viral-empty" id="viral-panel-${s.id}" data-viral-panel="${s.id}" role="tabpanel" aria-labelledby="viral-tab-${s.id}" hidden>
          <span class="pikk-viral-empty-symbol" aria-hidden="true">◇</span>
          <h3>${r(s.label)} are being prepared</h3>
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
  `,{lead:"Discover the planned 24/7 viral channel · preview only"})}function $u(e){const t=e.querySelector("#pikkViralPreview");t&&(t.querySelectorAll("[data-viral-pick]").forEach(s=>{s.addEventListener("click",()=>{const a=Number(s.dataset.viralPick),i=js[a];i&&(t.querySelector("#pikkViralTitle").textContent=i.title,t.querySelector("#pikkViralCreator").textContent=i.artist+" · Watch from the original publisher",t.querySelector("#pikkViralSource").href=i.url,t.querySelectorAll("[data-viral-pick]").forEach(n=>{const o=n===s;n.classList.toggle("is-selected",o),n.setAttribute("aria-pressed",String(o))}))})}),t.querySelectorAll("[data-viral-type]").forEach(s=>{s.addEventListener("click",()=>{const a=s.dataset.viralType;t.querySelectorAll("[data-viral-type]").forEach(i=>{i.setAttribute("aria-selected",String(i===s))}),t.querySelectorAll("[data-viral-panel]").forEach(i=>{i.hidden=i.dataset.viralPanel!==a})})}))}function Qt(){R("#/marketplace")}const xu={pending:"Pending",approved:"Approved",rejected:"Rejected"},Eu=[{v:"sponsored_post",label:"Sponsored post"},{v:"livestream_promo",label:"Livestream promo"},{v:"affiliate",label:"Affiliate link"},{v:"storefront",label:"Product storefront"}];function Au(){const{brandApps:e,user:t}=T(),s=ol(),a=s.filter(l=>l.active),i=a.length?a.map(l=>`
      <article class="card market-listing" data-id="${r(l.id)}">
        <div class="row wrap">
          <span class="chip">Sponsored</span>
          <span class="chip">${r(l.disclosure||"Paid partnership")}</span>
          <span class="muted spacer" style="text-align:right;font-size:12px">${j(l.at)}</span>
        </div>
        <h3 style="margin:8px 0 4px">${r(l.title)}</h3>
        <p class="muted" style="margin:0 0 6px">${r(l.brand)}</p>
        <p style="margin:0 0 10px;font-size:14px">${r(l.blurb||"")}</p>
        <div class="row wrap">
          ${l.url?`<a class="btn" href="${r(l.url)}" target="_blank" rel="noopener">Visit offer</a>`:""}
          <button class="btn ghost listing-toggle" data-id="${r(l.id)}" data-active="0">Hide · demo</button>
        </div>
      </article>`).join(""):'<div class="card"><p class="muted" style="margin:0">No active sponsored listings yet. Apply as a brand or create a demo listing below.</p></div>',n=e.length?e.map(l=>`
      <div class="card" style="margin:0 0 10px;background:#12121a" data-app="${r(l.id)}">
        <div class="row wrap">
          <strong>${r(l.brand)}</strong>
          <span class="chip">${r(xu[l.status]||l.status)}</span>
          <span class="muted spacer" style="text-align:right">${j(l.at)}</span>
        </div>
        <p class="muted" style="margin:6px 0;font-size:12px">${r(l.email)} · ${r(l.campaign)} · budget ${r(l.budget||"—")}</p>
        <p style="font-size:13px;margin:0 0 8px">${r((l.pitch||"").slice(0,160))}</p>
        <div class="row wrap">
          <button class="btn primary brand-status" data-id="${r(l.id)}" data-status="approved">Approve</button>
          <button class="btn ghost brand-status" data-id="${r(l.id)}" data-status="rejected">Reject</button>
          ${l.status==="approved"?`<button class="btn brand-to-listing" data-id="${r(l.id)}" data-brand="${r(l.brand)}" data-url="${r(l.url||"")}" data-pitch="${r(l.pitch||"")}">Create listing</button>`:""}
        </div>
      </div>`).join(""):'<p class="muted">No brand applications yet.</p>',o=`
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
          ${Eu.map(l=>`<option value="${l.v}">${r(l.label)}</option>`).join("")}
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

    ${s.some(l=>!l.active)?`<div class="card">
            <h3>Hidden listings</h3>
            ${s.filter(l=>!l.active).map(l=>`<div class="row wrap" style="margin-bottom:8px">
                  <span>${r(l.title)} · ${r(l.brand)}</span>
                  <button class="btn ghost listing-toggle" data-id="${r(l.id)}" data-active="1">Show</button>
                </div>`).join("")}
          </div>`:""}
  `;return I("Marketplace",o,{lead:"Brand applications & sponsored listings · localStorage demo."})}function Cu(e){var t,s;(t=e.querySelector("#mSubmit"))==null||t.addEventListener("click",()=>{var i,n,o,l,d,c,u;const a=il({brand:(i=e.querySelector("#mBrand"))==null?void 0:i.value,contact:(n=e.querySelector("#mContact"))==null?void 0:n.value,email:(o=e.querySelector("#mEmail"))==null?void 0:o.value,budget:(l=e.querySelector("#mBudget"))==null?void 0:l.value,campaign:(d=e.querySelector("#mCampaign"))==null?void 0:d.value,url:(c=e.querySelector("#mUrl"))==null?void 0:c.value,pitch:(u=e.querySelector("#mPitch"))==null?void 0:u.value});if((a==null?void 0:a.error)==="required")return h("Brand and email required");h("Application saved"),Qt()}),e.querySelectorAll(".brand-status").forEach(a=>{a.addEventListener("click",()=>{nl(a.dataset.id,a.dataset.status),h("Marked "+a.dataset.status),Qt()})}),e.querySelectorAll(".brand-to-listing").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.brand||"Brand",n=Ni({title:`${i} · sponsored`,brand:i,blurb:a.dataset.pitch||"Sponsored offer from approved brand application.",url:a.dataset.url||"",disclosure:"Paid partnership · TEST MODE",brandAppId:a.dataset.id});if(n!=null&&n.error)return h("Could not create listing");h("Listing published"),Qt()})}),(s=e.querySelector("#lCreate"))==null||s.addEventListener("click",()=>{var i,n,o,l,d;const a=Ni({title:(i=e.querySelector("#lTitle"))==null?void 0:i.value,brand:(n=e.querySelector("#lBrand"))==null?void 0:n.value,blurb:(o=e.querySelector("#lBlurb"))==null?void 0:o.value,url:(l=e.querySelector("#lUrl"))==null?void 0:l.value,disclosure:(d=e.querySelector("#lDisc"))==null?void 0:d.value});if((a==null?void 0:a.error)==="required")return h("Title and brand required");h("Listing published"),Qt()}),e.querySelectorAll(".listing-toggle").forEach(a=>{a.addEventListener("click",()=>{rl(a.dataset.id,a.dataset.active==="1"),h(a.dataset.active==="1"?"Listing shown":"Listing hidden"),Qt()})})}function me(e){R(e||"#/messages")}function Tu(e){const t=e.messages||[];if(!t.length)return"No messages yet";const s=t[t.length-1];return(s.priority?"⚡ ":"")+(s.text||"").slice(0,80)}function Du(){return I("Messages",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Private DMs, team inbox, and group chats need a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Private messaging & team inbox · TEST MODE"})}function Mu(e){const t=Gn(),s=T().messagePrefs||{allowDMs:!0,allowRequests:!0};return`
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
        ${t.map(i=>{const n=i.kind==="group",o=!n&&i.peerId==="dbs",l=[n?'<span class="chip">Group</span>':"",o?'<span class="chip">Team</span>':"",i.request?'<span class="chip">Request</span>':"",i.muted?'<span class="chip">Muted</span>':"",i.blocked?'<span class="chip">Blocked</span>':""].filter(Boolean).join(" "),d=Vn(i),c=d?`<span class="chip msg-unread-chip" aria-label="${d} unread">${d}</span>`:"";return`
      <button type="button" class="msg-thread-row${d?" has-unread":""}" data-search="${r(String(i.peerName||i.peerId).toLowerCase())}" data-open-thread="${r(i.id)}">
        <div class="pikk-msg-avatar" aria-hidden="true">${r(String(i.peerName||i.peerId||"?").slice(0,1).toUpperCase())}</div>
        <div class="pikk-msg-thread-body"><div class="msg-thread-top">
          <strong>${r(i.peerName||i.peerId)}</strong>
          <span class="muted">${r(j(i.updatedAt||0))}</span>
        </div>
        <div class="msg-thread-preview muted">${r(Tu(i))}</div>
        <div class="msg-thread-chips">${c}${l}</div></div>
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
  `}function Lu(){return`
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <h3 style="margin:0">Start chat</h3>
        <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
      </div>
      <p class="muted">Demo peers. Mutual follows open a DM; others create a <em>request</em> thread (still usable in TEST MODE).</p>
    </div>
    ${ys().map(s=>{const a=s.team||zn(s.id),i=s.team?"Team inbox":a?"Message":"Message request";return`
      <article class="card msg-contact">
        <div class="msg-contact-head">
          <strong>${r(s.username)}</strong>
          ${s.team?'<span class="chip">Official</span>':a?'<span class="chip">Mutual</span>':'<span class="chip">Request</span>'}
        </div>
        <p class="muted" style="margin:6px 0 10px">${r(s.bio||"")}</p>
        <button type="button" class="btn ${s.team?"primary":""}" data-start-peer="${r(s.id)}" data-peer-name="${r(s.username)}">${r(i)}</button>
      </article>`}).join("")}
  `}function Pu(){return`
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
  `}function Iu(e,{teamPriorityHint:t=!1}={}){const s=T().user,a=e.kind==="group",i=!a&&e.peerId==="dbs",n=!!e.blocked,o=(e.messages||[]).map(c=>`
      <div class="msg-bubble ${c.from===(s==null?void 0:s.id)?"mine":""} ${c.priority?"priority":""}">
        <div class="msg-bubble-meta">
          <strong>${r(c.fromName||c.from)}</strong>
          ${c.priority?'<span class="chip priority-chip">Priority</span>':""}
          <span class="muted">${r(j(c.at))}</span>
        </div>
        <div class="msg-bubble-text">${r(c.text)}</div>
      </div>`).join(""),l=e.request?'<div class="msg-banner">Message request · recipient approval stub (demo still delivers locally)</div>':"",d=t?'<div class="msg-banner priority">Next send can use Priority $2.99 TEST MODE (wallet note only — not charged).</div>':"";return`
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
    ${l}
    ${d}
    <div class="card msg-thread-card">
      <div class="msg-thread" id="msgThread">${o||'<p class="muted">No messages yet — say hi.</p>'}</div>
      ${n?'<p class="muted" style="margin-top:10px">Thread blocked · composer disabled (demo).</p>':`<div class="msg-composer">
               <input id="msgInput" placeholder="${i?"Write an inquiry…":"Message…"}" maxlength="500" />
               <button type="button" class="btn primary" id="msgSend">Send</button>
               ${i?'<button type="button" class="btn" id="msgSendPriority" title="TEST MODE — not charged">Priority $2.99</button>':""}
             </div>`}
    </div>
  `}function _u(e){var o,l,d;if(!T().user)return Du();ys();const s=((o=e==null?void 0:e.query)==null?void 0:o.view)||"",a=((l=e==null?void 0:e.query)==null?void 0:l.t)||"",i=((d=e==null?void 0:e.query)==null?void 0:d.priority)==="1";let n;if(a){const c=Un(a);c?n=Iu(c,{teamPriorityHint:i&&c.peerId==="dbs"}):n='<div class="card"><p class="muted">Thread not found.</p><button type="button" class="btn" id="msgBackInbox">← Inbox</button></div>'}else s==="new"?n=Lu():s==="team"?n=Pu():n=Mu();return I("Messages",n,{lead:"DMs, group chats, and DatBoiSkeet team inbox · TEST MODE"})}function qu(e){var l,d,c,u,m,g,f,b,y,v,w,x,D,k,M;if(!T().user)return;ii();const s=()=>me("#/messages");(l=e.querySelector("#msgBackInbox"))==null||l.addEventListener("click",s),(d=e.querySelector("#msgNewChat"))==null||d.addEventListener("click",()=>me("#/messages?view=new")),(c=e.querySelector("#pikkNewChatTop"))==null||c.addEventListener("click",()=>me("#/messages?view=new")),(u=e.querySelector("#pikkMsgSearch"))==null||u.addEventListener("input",$=>{const B=String($.target.value||"").trim().toLowerCase();let E=0;e.querySelectorAll("#msgInbox [data-open-thread]").forEach(ce=>{ce.hidden=!!B&&!String(ce.dataset.search||"").includes(B),ce.hidden||E++});const N=e.querySelector("#pikkMsgNoResults");N&&(N.hidden=!B||E>0)}),(m=e.querySelector("#msgEmptyNew"))==null||m.addEventListener("click",()=>me("#/messages?view=new")),(g=e.querySelector("#msgOpenTeam"))==null||g.addEventListener("click",()=>me("#/messages?view=team")),(f=e.querySelector("#pikkGroupTop"))==null||f.addEventListener("click",()=>{var $;return($=e.querySelector("#msgOpenGroup"))==null?void 0:$.click()}),(b=e.querySelector("#msgOpenGroup"))==null||b.addEventListener("click",()=>{const $=ul();if($!=null&&$.error){h("Sign in required");return}h("Opened DBS Fans"),me("#/messages?t="+encodeURIComponent($.id))}),(y=e.querySelector("#msgTeamFree"))==null||y.addEventListener("click",()=>{const $=ls("dbs","DatBoiSkeet");if($.error)return h("Sign in required");me("#/messages?t="+encodeURIComponent($.id))}),(v=e.querySelector("#msgTeamPriority"))==null||v.addEventListener("click",()=>{const $=ls("dbs","DatBoiSkeet");if($.error)return h("Sign in required");me("#/messages?t="+encodeURIComponent($.id)+"&priority=1")}),e.querySelectorAll("[data-start-peer]").forEach($=>{$.addEventListener("click",()=>{const B=$.dataset.startPeer,E=$.dataset.peerName||B;if(B==="dbs"){me("#/messages?view=team");return}const N=ls(B,E);if(N.error)return h("Sign in required");N.request&&h("Request thread created · demo"),me("#/messages?t="+encodeURIComponent(N.id))})}),e.querySelectorAll("[data-open-thread]").forEach($=>{$.addEventListener("click",()=>{me("#/messages?t="+encodeURIComponent($.dataset.openThread))})}),(w=e.querySelector("#msgPrefDMs"))==null||w.addEventListener("change",$=>{Ri({allowDMs:!!$.target.checked}),h($.target.checked?"DMs allowed":"DMs disabled (stub)")}),(x=e.querySelector("#msgPrefRequests"))==null||x.addEventListener("change",$=>{Ri({allowRequests:!!$.target.checked}),h($.target.checked?"Requests allowed":"Requests disabled (stub)")});const a=new URLSearchParams(location.hash.split("?")[1]||"").get("t"),i=a?Un(a):null;i&&cl(i.id),e.querySelectorAll("[data-flag]").forEach($=>{$.addEventListener("click",()=>{if(!i)return;const B=$.dataset.flag;if(B==="mute"){const E=ka(i.id,{muted:!i.muted});h(E.muted?"Muted":"Unmuted"),me("#/messages?t="+encodeURIComponent(i.id))}else if(B==="block"){const E=ka(i.id,{blocked:!i.blocked});h(E.blocked?"Blocked":"Unblocked"),me("#/messages?t="+encodeURIComponent(i.id))}else B==="report"&&(ka(i.id,{report:!0}),h("Reported · stub (Guidelines §13)"),me("#/messages?t="+encodeURIComponent(i.id)))})});const n=$=>{if(!i)return;const B=e.querySelector("#msgInput"),E=(B==null?void 0:B.value)||"";let N;if(i.kind==="group"?N=ml(i.id,E):N=dl(i.peerId,i.peerName,E,{priority:!!$}),(N==null?void 0:N.error)==="empty")return h("Type a message");if(N!=null&&N.error)return h("Could not send");h($?"Priority sent · TEST MODE $2.99 not charged":"Sent"),me("#/messages?t="+encodeURIComponent(i.id))};(D=e.querySelector("#msgSend"))==null||D.addEventListener("click",()=>n(!1)),(k=e.querySelector("#msgSendPriority"))==null||k.addEventListener("click",()=>n(!0)),(M=e.querySelector("#msgInput"))==null||M.addEventListener("keydown",$=>{$.key==="Enter"&&($.preventDefault(),n(!1))});const o=e.querySelector("#msgThread");o&&(o.scrollTop=o.scrollHeight)}function ht(){R("#/wallet")}function W(e){return"$"+Number(e||0).toFixed(2)}function Da(e){return Number(e||0).toLocaleString()}const Bu={pending:"Pending",completed:"Completed",rejected:"Rejected"};function Ou(){const{wallet:e,user:t,coins:s}=T(),a=e||{balance:0,history:[]},i=ra(),n=[...(s==null?void 0:s.history)||[]].slice(0,10),o=Jo(),l=ms(),d=oi().filter(E=>E.count>0),c=Rn(t==null?void 0:t.id),u=[...a.history||[]].slice(-12).reverse(),m=[...l.earnings||[]].slice(0,20),g=l.payouts||[],f=g.find(E=>E.status==="pending"),b=!f&&l.available>=l.threshold,y=l.verification==="demo_verified",v=u.length>0?`<ul class="list-plain">${u.map(E=>`<li>
          <span>${r(E.note||"Entry")}<br/><span class="muted" style="font-size:12px">${j(E.at)}</span></span>
          <strong style="color:${Number(E.amount)>=0?"var(--ok,#6dffb0)":"inherit"}">${Number(E.amount)>=0?"+":""}${W(E.amount)}</strong>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0">No fan USD credit activity yet.</p>',w=o.map(E=>{const N=`pack_${E.coins}`;return`<button type="button" class="card coin-pack-btn" data-coins="${E.coins}" id="${r(N)}" style="text-align:left;cursor:pointer;margin:0;padding:12px;border:1px solid rgba(255,255,255,.08);background:#12121a">
        <div style="font-size:20px;font-weight:900">${Da(E.coins)} <span class="muted" style="font-size:13px;font-weight:600">coins</span></div>
        <div class="muted" style="font-size:13px;margin-top:4px">${W(E.usd)} · TEST MODE</div>
        <div style="margin-top:8px"><span class="chip">Buy · demo credit</span></div>
      </button>`}).join(""),x=n.length>0?`<ul class="list-plain">${n.map(E=>{const N=Number(E.amount)||0;return`<li>
          <span>${r(E.note||"Coins")}<br/><span class="muted" style="font-size:12px">${j(E.at)}</span></span>
          <strong style="color:${N>=0?"var(--ok,#6dffb0)":"inherit"}">${N>=0?"+":""}${Da(N)}</strong>
        </li>`}).join("")}</ul>`:'<p class="muted" style="margin:0">No coin purchases or gifts yet. Buy a pack below for Live gifts.</p>',D=c.length>0?`<ul class="list-plain">${c.slice(0,8).map(E=>`<li>
          <span>
            <strong>${r(E.note||E.label||"Live gift")}</strong>
            <span class="chip">80/20 NET</span>
            ${E.giftSlug?`<span class="chip">${r(E.giftSlug)}</span>`:""}
            <br/><span class="muted" style="font-size:12px">gross ${W(E.gross)} · fees ${W(E.fees)} · net ${W(E.net)} · ${j(E.at)}</span>
          </span>
          <span style="text-align:right;font-size:13px">
            <strong>${W(E.creatorShare)}</strong><br/>
            <span class="muted">PIKK ${W(E.dbsShare)}</span>
          </span>
        </li>`).join("")}</ul>
        <p class="muted" style="font-size:12px;margin:8px 0 0">Creator-only split view. Live viewers never see 80/20.</p>`:'<p class="muted" style="margin:0">No coin-gift earnings yet. When viewers send catalog gifts on Live, your <strong>80% of NET</strong> lands here (TEST MODE: listed USD = net, 0% external fee).</p>',k=d.length>0?`<div style="overflow-x:auto">
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
          ${d.map(E=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
            <td style="padding:8px 4px"><strong>${r(E.label)}</strong><br/><span class="muted" style="font-size:11px">${E.creatorPct}/${E.dbsPct} · ${E.count} line${E.count===1?"":"s"}</span></td>
            <td style="padding:8px 4px">${W(E.gross)}</td>
            <td style="padding:8px 4px">${W(E.fees)}</td>
            <td style="padding:8px 4px">${W(E.net)}</td>
            <td style="padding:8px 4px"><strong>${W(E.creatorShare)}</strong></td>
            <td style="padding:8px 4px">${W(E.dbsShare)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:12px;margin:8px 0 0">Default fees = demo 2.9% + $0.30. <strong>Live catalog gifts (t185u)</strong> treat listed USD as NET (fees $0) then 80/20. Seeded rows labeled in ledger.</p>`:'<p class="muted" style="margin:0">No creator earnings yet. Load demo earnings or receive Live tips/gifts.</p>',M=m.length>0?`<ul class="list-plain">${m.map(E=>`<li>
          <span>
            <strong>${r(E.label)}</strong>
            ${E.payoutId?'<span class="chip">In payout</span>':'<span class="chip">Open</span>'}
            ${E.source==="seed"?'<span class="chip">Demo seed</span>':""}
            ${E.source==="live_gift"?'<span class="chip">Coin gift</span>':""}
            <br/><span class="muted" style="font-size:12px">${r(E.note)} · ${j(E.at)}</span>
          </span>
          <span style="text-align:right;font-size:13px">
            <strong>${W(E.creatorShare)}</strong><br/>
            <span class="muted">gross ${W(E.gross)}</span>
          </span>
        </li>`).join("")}</ul>`:"",$=g.length>0?g.map(E=>`<div class="card" style="margin:0 0 10px;background:#12121a" data-payout="${r(E.id)}">
        <div class="row wrap">
          <strong>${W(E.amount)}</strong>
          <span class="chip">${r(Bu[E.status]||E.status)}</span>
          <span class="muted spacer" style="text-align:right;font-size:12px">${j(E.at)}</span>
        </div>
        <p class="muted" style="margin:6px 0;font-size:12px">${r(E.note||"Payout")} · ${(E.earningIds||[]).length} earning line(s)</p>
        ${E.status==="pending"?`<div class="row wrap">
                <button class="btn primary payout-status" data-id="${r(E.id)}" data-status="completed">Mark completed · demo</button>
                <button class="btn ghost payout-status" data-id="${r(E.id)}" data-status="rejected">Reject · release hold</button>
              </div>`:E.reviewedAt?`<p class="muted" style="margin:0;font-size:12px">Reviewed ${j(E.reviewedAt)}</p>`:""}
      </div>`).join(""):'<p class="muted">No payout requests yet.</p>',B=`
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
      <div style="font-size:32px;font-weight:900;margin-top:8px">${Da(i)} <span class="muted" style="font-size:16px;font-weight:600">coins</span></div>
      <p class="muted" style="margin:4px 0 12px">≈ ${W(i*.02)} · stored in <code>dbs_v1.coins</code> (not USD <code>wallet</code>). Used for Live gift tray.</p>
      <h4 style="margin:0 0 8px;font-size:14px">Buy coin pack</h4>
      <div class="grid-2" style="gap:10px">${w}</div>
      <p class="muted" style="font-size:12px;margin:10px 0 0">No discounts · packs ${ia.map(E=>`${E.coins}/$${E.usd}`).join(" · ")}. Demo credit only — no payment processor.</p>
      <h4 style="margin:16px 0 8px;font-size:14px">Recent coin activity</h4>
      ${x}
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
      <p class="chip" style="margin-top:10px">Signed in as ${r((t==null?void 0:t.username)||"guest")}</p>
    </div>

    <div class="card" id="wallet-gift-earnings">
      <h3>Live gift earnings · creator view</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">80% creator / 20% PIKK on NET catalog gifts. Not shown on Live / gift tray.</p>
      ${D}
    </div>

    <div class="card">
      <h3>Earnings breakdown</h3>
      <p class="muted" style="margin:0 0 10px">Gifts, tips, subscriptions, referrals, Clippers, sponsorships, merch/affiliate — gross → fees → net → creator% / PIKK%.</p>
      ${k}
      ${M?`<h4 style="margin:16px 0 8px;font-size:14px">Ledger (recent)</h4>${M}`:""}
    </div>

    <div class="card">
      <h3>Payout history</h3>
      <p class="muted" style="margin:0 0 10px">On-device demo approve / reject. Completed funds leave holds; rejected releases hold and untags earnings.</p>
      ${$}
    </div>
  `;return I("Wallet & Payouts",B,{lead:"Creator Wallet & Payout Center · gift coins + fan USD · TEST MODE."})}function Nu(e){var t,s,a,i,n;e.querySelectorAll(".coin-pack-btn").forEach(o=>{o.addEventListener("click",()=>{const l=Number(o.dataset.coins),d=Nn(l);if((d==null?void 0:d.error)==="bad_package")return h("Unknown pack");if(d!=null&&d.error)return h("Could not buy coins");h(`+${l.toLocaleString()} coins · TEST MODE`),ht()})}),(t=e.querySelector("#fanCredit5"))==null||t.addEventListener("click",()=>{zs(5,"Demo credit +$5"),h("+$5 fan credits"),ht()}),(s=e.querySelector("#fanCredit25"))==null||s.addEventListener("click",()=>{zs(25,"Demo credit +$25"),h("+$25 fan credits"),ht()}),(a=e.querySelector("#cwSeed"))==null||a.addEventListener("click",()=>{const o=(ms().earnings||[]).length>0,l=Wn({force:!0});h(o?"Demo earnings reloaded":`Loaded ${l.seeded||0} demo lines`),ht()}),(i=e.querySelector("#cwPayout"))==null||i.addEventListener("click",()=>{const o=fl();if((o==null?void 0:o.error)==="pending_exists")return h("Payout already pending");if((o==null?void 0:o.error)==="below_threshold")return h("Below payout threshold");if(o!=null&&o.error)return h("Could not request payout");h("Payout requested · held"),ht()}),(n=e.querySelector("#cwVerify"))==null||n.addEventListener("click",()=>{const l=ms().verification!=="demo_verified";bl(l),h(l?"Demo verified":"Verification cleared"),ht()}),e.querySelectorAll(".payout-status").forEach(o=>{o.addEventListener("click",()=>{const l=vl(o.dataset.id,o.dataset.status);if(l!=null&&l.error)return h("Could not update payout");h("Payout "+o.dataset.status),ht()})})}function mn(e){R(e||"#/earnings")}function ae(e){return"$"+Number(e||0).toFixed(2)}const no=[{id:"all",label:"All"},{id:"gifts",label:"Gifts"},{id:"tips",label:"Tips"},{id:"subscriptions",label:"Subscriptions"},{id:"clippers",label:"Clippers"},{id:"referrals",label:"Referrals"},{id:"sponsorships",label:"Sponsorships"},{id:"merch",label:"Merch"}];function ro(){var t;const e=(((t=Xe().query)==null?void 0:t.cat)||"all").toLowerCase();return no.some(s=>s.id===e)?e:"all"}function Ru(e){return(e||[]).reduce((t,s)=>(t.gross+=Number(s.gross)||0,t.fees+=Number(s.fees)||0,t.net+=Number(s.net)||0,t.creatorShare+=Number(s.creatorShare)||0,t.dbsShare+=Number(s.dbsShare)||0,t),{gross:0,fees:0,net:0,creatorShare:0,dbsShare:0})}function Jt(e){return Math.round(Number(e)*100)/100}function ju(){const e=ms(),t=gl(),s=ro(),a=[...e.earnings||[]].sort((y,v)=>(v.at||0)-(y.at||0)),i=s==="all"?a:a.filter(y=>y.category===s||s==="subscriptions"&&y.category==="paid_content"),n=Ru(a),o=oi(),l=Rn(),d=s==="gifts"?`<div class="card" style="margin:0 0 12px;background:#12121a">
      <div class="row wrap">
        <span class="chip">t185u · catalog gifts</span>
        <span class="chip">80% creator / 20% PIKK · NET</span>
        <span class="chip">TEST MODE · listed USD = net</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:13px">Coin gifts from Live use <code>sendLiveGift</code> → creator earnings here. Viewers on Live / gift tray never see this split. ${l.length?`${l.length} gift line(s) on device.`:"Send a catalog gift on an active Live to populate."}</p>
    </div>`:"",c=no.map(y=>{const v=y.id==="all"?"#/earnings":`#/earnings?cat=${y.id}`,w=y.id==="all"?a.length:a.filter(D=>D.category===y.id||y.id==="subscriptions"&&D.category==="paid_content").length,x=s===y.id;return`<a class="chip earn-filter${x?" active":""}" href="${v}" data-cat="${r(y.id)}" style="${x?"outline:1px solid var(--accent,#6dffb0);font-weight:700":""}">${r(y.label)}${w?` · ${w}`:""}</a>`}).join(""),u=Object.entries(t).map(([y,v])=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${r(v.label)}</strong><br/><span class="muted" style="font-size:11px">${r(y)}</span></td>
        <td style="padding:8px 4px">${v.creatorPct}%</td>
        <td style="padding:8px 4px">${v.dbsPct}%</td>
      </tr>`).join(""),m=Object.entries(t).map(([y,v])=>`<option value="${r(y)}">${r(v.label)}</option>`).join(""),g=o.filter(y=>y.count>0).length>0?`<div style="overflow-x:auto;margin-top:8px">
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
          ${o.filter(y=>y.count>0).map(y=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
            <td style="padding:8px 4px"><strong>${r(y.label)}</strong><br/><span class="muted" style="font-size:11px">${y.creatorPct}/${y.dbsPct} · ${y.count} line${y.count===1?"":"s"}</span></td>
            <td style="padding:8px 4px">${ae(y.gross)}</td>
            <td style="padding:8px 4px">${ae(y.fees)}</td>
            <td style="padding:8px 4px">${ae(y.net)}</td>
            <td style="padding:8px 4px"><strong>${ae(y.creatorShare)}</strong></td>
            <td style="padding:8px 4px">${ae(y.dbsShare)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`:"",f=i.length>0?`<ul class="list-plain">${i.map(y=>`<li style="align-items:flex-start">
          <span style="flex:1;min-width:0">
            <strong>${r(y.label||y.category)}</strong>
            ${y.payoutId?'<span class="chip">In payout</span>':'<span class="chip">Open</span>'}
            ${y.source==="seed"?'<span class="chip">Demo seed</span>':""}
            <br/><span class="muted" style="font-size:12px">${r(y.note||"")} · ${j(y.at)}</span>
            <br/><span class="muted" style="font-size:11px">gross ${ae(y.gross)} → fees ${ae(y.fees)} → net ${ae(y.net)} · creator ${y.creatorPct}% / PIKK ${y.dbsPct}%</span>
          </span>
          <span style="text-align:right;font-size:13px;white-space:nowrap">
            <strong>${ae(y.creatorShare)}</strong><br/>
            <span class="muted">PIKK ${ae(y.dbsShare)}</span>
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
          <div style="font-size:22px;font-weight:800">${ae(Jt(n.creatorShare))}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Lifetime PIKK share</p>
          <div style="font-size:22px;font-weight:800">${ae(Jt(n.dbsShare))}</div>
        </div>
      </div>
      <div class="row wrap" style="margin-top:10px">
        <span class="chip">Lifetime gross ${ae(Jt(n.gross))}</span>
        <span class="chip">Fees ${ae(Jt(n.fees))}</span>
        <span class="chip">Net ${ae(Jt(n.net))}</span>
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
      ${g?`<h4 style="margin:16px 0 0;font-size:14px">Totals by source (this device)</h4>${g}`:""}
    </div>

    <div class="card">
      <h3>Earnings ledger</h3>
      ${d}
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
  `;return I("Creator Earnings",b,{lead:"Rewards, commissions & ledger · TEST MODE · payouts on Wallet (§27)."})}function Fu(e){var t,s;(t=e.querySelector("#earnSeed"))==null||t.addEventListener("click",()=>{const a=(ms().earnings||[]).length>0,i=Wn({force:!0});h(a?"Demo earnings reloaded":`Loaded ${i.seeded||0} demo lines`),mn(hn(ro()))}),(s=e.querySelector("#earnDemoForm"))==null||s.addEventListener("submit",a=>{var d,c,u;a.preventDefault();const i=((d=e.querySelector("#earnCat"))==null?void 0:d.value)||"tips",n=Number((c=e.querySelector("#earnGross"))==null?void 0:c.value),o=(((u=e.querySelector("#earnNote"))==null?void 0:u.value)||"").trim()||"Manual demo earning";if(!(n>0))return h("Enter a positive gross amount");const l=ri({category:i,gross:n,note:o,source:"manual_demo"});h(`Recorded ${ae(l.creatorShare)} creator share`),mn(hn(i))})}function hn(e){return!e||e==="all"?"#/earnings":`#/earnings?cat=${e}`}function gt(){R("#/missions")}const gn={song:"Song",album:"Album",video:"Video",live:"Livestream",app:"DBS App",interview:"Interview"};function Ku(e){return"$"+Number(e||0).toFixed(0)}function Gu(e){const t=Number(e)||0;if(!t)return"No deadline";const s=t-Date.now();if(s<0)return`Ended ${Math.ceil(-s/864e5)}d ago`;const a=Math.ceil(s/864e5);return a<=1?"Due today / tomorrow":`${a}d left`}function Vu(e=14){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function Is(){const{user:e}=T();if(e)return e;const t=Nt("DemoCreator");return h("Signed in as DemoCreator · local demo"),t||T().user}function Uu(){const{user:e}=T(),t=ca().sort((c,u)=>(u.createdAt||0)-(c.createdAt||0)),s=t.filter(c=>c.status==="active"||c.status==="paused"),a=t.filter(c=>c.status==="ended"||c.status==="draft"),i=t.length===0?`<div class="card">
          <p class="muted" style="margin:0 0 12px">No missions yet. Load demo campaigns or create one as demo admin.</p>
          <button class="btn primary" id="msnSeed">Load demo missions</button>
        </div>`:"",n=c=>{const u=c.fundSource==="third_party"?'<span class="chip">20% management fee · disclosed</span>':'<span class="chip">DBS-funded · marketing expense</span>',m=Jl(c.id),g=e&&(c.participants||[]).some(w=>w.userId===e.id),f=(c.submissions||[]).filter(w=>e&&w.userId===e.id),b=m.length>0?m.slice(0,8).map((w,x)=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
              <td style="padding:6px 4px">${x+1}</td>
              <td style="padding:6px 4px"><strong>${r(w.username)}</strong>
                ${w.referralCode?`<br/><span class="muted" style="font-size:11px">${r(w.referralCode)}</span>`:""}
              </td>
              <td style="padding:6px 4px">${w.score}</td>
              <td style="padding:6px 4px">${w.submissions}</td>
            </tr>`).join(""):'<tr><td colspan="4" class="muted" style="padding:8px 4px">No participants yet — join to appear on the board.</td></tr>',y=(c.submissions||[]).length>0?`<ul class="list-plain" style="margin-top:8px">${(c.submissions||[]).slice(0,5).map(w=>`<li style="align-items:flex-start">
              <span style="flex:1;min-width:0">
                <strong>${r(w.username)}</strong>
                <span class="chip">${r(w.status||"pending")}</span>
                <br/><span style="font-size:13px">${r(w.proof)}</span>
                <br/><span class="muted" style="font-size:11px">${j(w.at)} · Manual review</span>
              </span>
            </li>`).join("")}</ul>`:'<p class="muted" style="margin:8px 0 0;font-size:13px">No proof submissions yet.</p>',v=c.status==="active"?`<div class="row wrap" style="margin-top:10px;gap:8px">
            ${g?`<span class="chip">Joined</span>
                   <button class="btn" data-bump="${r(c.id)}">+5 demo points</button>`:`<button class="btn primary" data-join="${r(c.id)}">Join mission</button>`}
            <button class="btn ghost" data-status="${r(c.id)}" data-next="paused">Pause</button>
            <button class="btn ghost" data-status="${r(c.id)}" data-next="ended">End mission</button>
          </div>
          ${g?`<form class="msn-proof" data-id="${r(c.id)}" style="display:grid;gap:8px;margin-top:12px;max-width:480px">
                  <div class="field"><label>Submit proof (URL or note)</label>
                    <input name="proof" placeholder="https://… or clip description" maxlength="400" required />
                  </div>
                  <button class="btn" type="submit">Submit for review · +10 pts</button>
                </form>`:""}`:c.status==="paused"?`<div class="row wrap" style="margin-top:10px;gap:8px">
              <button class="btn primary" data-status="${r(c.id)}" data-next="active">Resume</button>
              <button class="btn ghost" data-status="${r(c.id)}" data-next="ended">End mission</button>
            </div>`:`<div class="row wrap" style="margin-top:10px"><span class="chip">Archive · ${r(c.status)}</span></div>`;return`<article class="card" data-mission="${r(c.id)}">
      <div class="row wrap">
        <span class="chip">${r(gn[c.promoteType]||c.promoteType)}</span>
        <span class="chip">${r(c.status)}</span>
        <span class="chip">Budget ${Ku(c.budget)}</span>
        <span class="chip">${r(Gu(c.deadline))}</span>
        ${u}
        <span class="muted spacer" style="text-align:right;font-size:12px">${j(c.createdAt)}</span>
      </div>
      <h3 style="margin:10px 0 4px">${r(c.title)}</h3>
      <p class="muted" style="margin:0 0 6px;font-size:13px">${r(c.reward||"")}</p>
      <p class="muted" style="margin:0;font-size:12px">
        Fund: <strong>${c.fundSource==="third_party"?"Third-party":"DBS"}</strong>
        ${c.fundSource==="third_party"?" · 20% management fee (disclosed)":" · not a creator commission — marketing expense"}
        · ${(c.participants||[]).length} joined · ${(c.submissions||[]).length} submissions
        ${g?` · your proofs: ${f.length}`:""}
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
      ${y}
    </article>`},o=s.length?s.map(n).join(""):t.length?'<div class="card"><p class="muted" style="margin:0">No active or paused missions. Create one or resume from archive.</p></div>':"",l=a.length>0?`<div class="card"><h3>Archive</h3>${a.map(n).join("")}</div>`:"",d=`
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
    ${o}

    <div class="card">
      <h3>Create mission · demo admin</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Stored in <code>dbs_v1.missions</code>. No real charges or fraud API.</p>
      <form id="msnCreate" style="display:grid;gap:10px;max-width:520px">
        <div class="field"><label>Title *</label><input name="title" id="msnTitle" required maxlength="120" placeholder="Push Long Story Short" /></div>
        <div class="grid-2">
          <div class="field"><label>Promote type</label>
            <select name="promoteType" id="msnType">
              ${Object.entries(gn).map(([c,u])=>`<option value="${c}">${r(u)}</option>`).join("")}
            </select>
          </div>
          <div class="field"><label>Budget (USD)</label><input name="budget" id="msnBudget" type="number" min="0" step="1" value="500" /></div>
        </div>
        <div class="grid-2">
          <div class="field"><label>Deadline</label><input name="deadline" id="msnDeadline" type="date" value="${Vu(14)}" /></div>
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

    ${l}
  `;return I("Missions",d,{lead:"Promotional campaigns · Clippers & creators · TEST MODE (§6)."})}function zu(e){var t,s,a;(t=e.querySelector("#msnSeed"))==null||t.addEventListener("click",()=>{const i=ca().length>0,n=Xl({force:!0});h(i?"Demo missions reloaded":`Loaded ${n.seeded||0} demo missions`),gt()}),(s=e.querySelector("#msnSignIn"))==null||s.addEventListener("click",()=>{Is(),gt()}),(a=e.querySelector("#msnCreate"))==null||a.addEventListener("submit",i=>{var g,f,b,y,v,w;i.preventDefault();const n=((g=e.querySelector("#msnTitle"))==null?void 0:g.value)||"",o=((f=e.querySelector("#msnType"))==null?void 0:f.value)||"app",l=Number((b=e.querySelector("#msnBudget"))==null?void 0:b.value)||0,d=((y=e.querySelector("#msnDeadline"))==null?void 0:y.value)||"",c=((v=e.querySelector("#msnFund"))==null?void 0:v.value)||"dbs",u=((w=e.querySelector("#msnReward"))==null?void 0:w.value)||"",m=zl({title:n,promoteType:o,budget:l,deadline:d,fundSource:c,reward:u,status:"active"});if(m.error)return h("Title required");h(`Mission created · ${m.title}`),gt()}),e.querySelectorAll("[data-join]").forEach(i=>{i.addEventListener("click",()=>{Is();const n=i.getAttribute("data-join"),o=Wl(n);if(o.error==="signin")return h("Sign in required");if(o.error==="already_joined")return h("Already joined");if(o.error==="not_active")return h("Mission not active");if(o.error)return h("Could not join");h("Joined mission · referral code assigned"),gt()})}),e.querySelectorAll("[data-bump]").forEach(i=>{i.addEventListener("click",()=>{Is();const n=i.getAttribute("data-bump"),o=Ql(n,5);if(o.error)return h(o.error==="not_joined"?"Join first":"Bump failed");h("+5 demo points"),gt()})}),e.querySelectorAll("[data-status]").forEach(i=>{i.addEventListener("click",()=>{const n=i.getAttribute("data-status"),o=i.getAttribute("data-next");if(Hl(n,o).error)return h("Status update failed");h(`Mission → ${o}`),gt()})}),e.querySelectorAll("form.msn-proof").forEach(i=>{i.addEventListener("submit",n=>{var c;n.preventDefault(),Is();const o=i.getAttribute("data-id"),l=((c=i.querySelector('[name="proof"]'))==null?void 0:c.value)||"",d=Yl(o,{proof:l});if(d.error==="required")return h("Enter a URL or note");if(d.error==="not_joined")return h("Join first");if(d.error==="not_active")return h("Mission not active");if(d.error)return h("Submit failed");h("Proof submitted · pending manual review · +10 pts"),gt()})})}const Hu=[{id:"trending",label:"Trending"},{id:"following",label:"Following"},{id:"discover",label:"Discover"}];function Wu(){return!!T().exploreDiscoverable}function Ce({href:e,title:t,meta:s,chip:a}){return`<a class="explore-hit" href="${r(e)}">
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
    </div>`}function cs(e){if(!e||!e.query)return`<div class="card" id="exploreResults">
      <p class="muted" style="margin:0">Search creators, fans, songs, albums, videos, posts, livestreams, and products. Exact locations are never indexed.</p>
    </div>`;const t=e.posts.length+e.profiles.length+e.music.length+e.videos.length+e.lives.length+e.products.length+e.pictures.length;if(!t)return`<div class="card" id="exploreResults">
      <p style="margin:0 0 6px"><strong>No results for “${r(e.query)}”</strong></p>
      <p class="muted" style="margin:0">Try another keyword, or browse Trending / Discover below. Report spam from a result’s destination page (demo shell).</p>
    </div>`;const s=e.posts.slice(0,8).map(m=>Ce({href:"#/posts",title:(m.text||"").slice(0,90)||"Post",meta:`@${m.username||"user"} · ${j(m.at||Date.now())}`,chip:"Post"})).join(""),a=e.profiles.slice(0,8).map(m=>Ce({href:"#/profile",title:`@${m.username||m.id}`,meta:(m.bio||"Creator / fan").slice(0,80),chip:m.verified?"Verified":"Profile"})).join(""),i=e.music.slice(0,8).map(m=>Ce({href:"#/music",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · ${m.type}`,chip:m.type==="album"?"Album":"Song"})).join(""),n=e.videos.slice(0,8).map(m=>Ce({href:"#/videos",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · From Admin`,chip:"Video"})).join(""),o=e.pictures.slice(0,8).map(m=>Ce({href:"#/home",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · picture`,chip:"Picture"})).join(""),l=e.lives.slice(0,8).map(m=>Ce({href:"#/live",title:m.title||"Livestream",meta:`@${m.hostName||"host"} · ${m.status==="live"?"LIVE now":"Ended"}`,chip:m.status==="live"?"Live":"Replay"})).join(""),d=e.products.slice(0,8).map(m=>Ce({href:"#/marketplace",title:m.title,meta:`${m.brand||"Brand"} · ${m.disclosure||"Sponsored"}`,chip:"Ad"})).join(""),c=e.query.toLowerCase(),u=[...Pt.filter(m=>m.title.toLowerCase().includes(c)||m.artist.toLowerCase().includes(c)||c.includes("music")||c.includes("song")||c.includes("album")).map(m=>Ce({href:"#/music",title:m.title,meta:`${m.artist} · ${m.status}`,chip:"Cover"})),...he.filter(m=>m.title.toLowerCase().includes(c)||(m.artist||"").toLowerCase().includes(c)||c.includes("video")||c.includes("mv")).map(m=>Ce({href:"#/videos",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · Official MV`,chip:"MV"}))].join("");return`<div id="exploreResults">
    <p class="muted" style="margin:0 0 10px">${t} result${t===1?"":"s"} for “${r(e.query)}”</p>
    ${Ze("People",a,"No matching creators or fans")}
    ${Ze("Posts",s,"No matching posts")}
    ${Ze("Music (catalog)",i,"No published songs/albums")}
    ${Ze("Videos (catalog)",n,"No published videos")}
    ${Ze("Pictures",o,"No published pictures")}
    ${Ze("Livestreams",l,"No live or history matches")}
    ${Ze("Products / ads",d,"No marketplace listings")}
    ${u?Ze("Music-based picks",u):""}
  </div>`}function Yu(){const e=kl(10);return e.length?`<div class="section-swipe explore-trend">
    ${e.map(t=>`<a class="preview-card" href="${r(t.href)}">
        <strong>${r(t.title)}</strong>
        <span class="muted">${r(t.subtitle)}${t.score?` · ♥${t.score}`:""}</span>
      </a>`).join("")}
  </div>`:'<p class="muted">Nothing trending yet — like posts or publish catalog items.</p>'}function Qu(){const e=T().user;if(!e)return'<div class="card"><p class="muted" style="margin:0">Sign in on <a href="#/profile">Profile</a> to see accounts you follow. Demo only — no exact locations.</p></div>';const t=e.following||[];return t.length?`<div class="card explore-section"><h3>Following</h3><div class="explore-hits">${t.map(a=>{var n;const i=((n=T().profiles)==null?void 0:n[a])||{id:a,username:a};return Ce({href:"#/profile",title:`@${i.username||i.id}`,meta:(i.bio||"Following").slice(0,80),chip:"Following"})}).join("")}</div></div>`:`<div class="card"><p class="muted" style="margin:0">You're not following anyone yet. Discover suggested accounts below, then follow from their profile.</p></div>`}function Ju(){const t=wl().slice(0,8).map(a=>Ce({href:"#/profile",title:`@${a.username}`,meta:(a.bio||"Suggested").slice(0,80),chip:a.verified?"Verified":"Suggest"})).join(""),s=Pt.map(a=>Ce({href:"#/music",title:a.title,meta:`${a.artist} · music-based`,chip:"Cover"})).join("");return`
    <div class="card">
      <h3>Discoverability (opt-in)</h3>
      <p class="muted" style="margin:0 0 10px">Appear in Explore suggestions. Off by default. No exact locations stored or shown.</p>
      <label class="row" style="gap:8px;align-items:center">
        <input type="checkbox" id="exploreDiscoverable" ${Wu()?"checked":""} />
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
    </div>`}function Xu(){const e=T().exploreTab||"trending",t=Hu.map(i=>`<button type="button" class="shop-chip${i.id===e?" on":""}" data-explore-tab="${i.id}">${r(i.label)}</button>`).join("");let s="";e==="following"?s=Qu():e==="discover"?s=Ju():s=`<div class="card">
      <h3>Trending Across DBS</h3>
      <p class="muted" style="margin:0 0 10px">High-engagement public posts and seeded demo cards (not a full engagement pipeline).</p>
      ${Yu()}
    </div>
    <div id="exploreResultsWrap">${cs(null)}</div>`;const a=`
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
  `;return I("Explore",a,{lead:"Universal search & discovery across DBS.",badge:"Phase 2 demo"})}function Zu(e,t){var n,o,l,d,c,u,m;const s=yl(t),a=e.querySelector("#exploreResultsWrap")||e.querySelector("#explorePanel");if(e.querySelector("#exploreResultsWrap"))e.querySelector("#exploreResultsWrap").innerHTML=cs(s);else if(a){let g=e.querySelector("#exploreResults");if(g)g.outerHTML=cs(s);else{const f=document.createElement("div");f.id="exploreLiveInsert",f.innerHTML=cs(s),a.prepend(f)}}const i=(((n=s.posts)==null?void 0:n.length)||0)+(((o=s.profiles)==null?void 0:o.length)||0)+(((l=s.music)==null?void 0:l.length)||0)+(((d=s.videos)==null?void 0:d.length)||0)+(((c=s.lives)==null?void 0:c.length)||0)+(((u=s.products)==null?void 0:u.length)||0)+(((m=s.pictures)==null?void 0:m.length)||0);s.query&&h(i?`${i} result(s)`:"No matches")}function em(e){var o;const t=e.querySelector("#exploreQ"),s=e.querySelector("#exploreGo"),a=e.querySelector("#exploreClear"),i=()=>Zu(e,(t==null?void 0:t.value)||"");s==null||s.addEventListener("click",i),a==null||a.addEventListener("click",()=>{var d;t&&(t.value="");const l=e.querySelector("#exploreResultsWrap");l&&(l.innerHTML=cs(null)),(d=e.querySelector("#exploreLiveInsert"))==null||d.remove(),h("Cleared")});let n;t==null||t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(i,220)}),t==null||t.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),i())}),e.querySelectorAll("[data-explore-tab]").forEach(l=>{l.addEventListener("click",()=>{Pi({exploreTab:l.getAttribute("data-explore-tab")}),R("/explore")})}),(o=e.querySelector("#exploreDiscoverable"))==null||o.addEventListener("change",l=>{Pi({exploreDiscoverable:!!l.target.checked}),h(l.target.checked?"Discoverable on":"Discoverable off")})}let Fs=null;function ft(e){R("#/giftbattles")}function fn(){Fs&&(clearInterval(Fs),Fs=null)}function Z(e){return"$"+Number(e||0).toFixed(2)}function oo(e){const t=Math.max(0,Math.ceil(e/1e3)),s=Math.floor(t/60),a=t%60;return`${s}:${String(a).padStart(2,"0")}`}function tm(){return I("Gift Battles",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Gift battles need a local demo account so scores and history persist on this device.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Runs during Live · not a separate stream · voluntary support · TEST MODE"})}function sm(){return`
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
    </div>`}function am(e){if(!e)return`
      <div class="card">
        <h3>Champion Spotlight</h3>
        <p class="muted" style="margin:0">No active champion today. Win a battle to claim the rest-of-day banner.</p>
      </div>`;const t=Math.max(0,(e.championUntil||0)-Date.now()),s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return`
    <div class="card gb-champion" role="status">
      <div class="row wrap" style="gap:8px;align-items:center">
        <span class="gb-sticker-slot" aria-hidden="true">${Ei("battle-crown",{className:"gift-sticker gift-sticker--battle"}).html}</span>
        <div class="chip">Challenge Winner · rest of day</div>
      </div>
      <h3 class="gb-champion-name">${r(e.username)}</h3>
      <p class="muted" style="margin:0">
        Score ${r(Z(e.score))} · ~${s}h ${a}m left today
        · ${r(e.mode||"demo")}
      </p>
    </div>`}function im(e,t){return e?`
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
    </div>`}function nm(e){return`
    <div class="card gb-battle" data-gb-status="pending">
      <h3>Challenge pending</h3>
      <p><strong>${r(e.challenger.name)}</strong> challenged <strong>${r(e.opponent.name)}</strong></p>
      <p class="muted">Mode: ${r(e.mode)} · opponent must Accept or Decline (demo controls below).</p>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <button type="button" class="btn primary" id="gbAccept">Accept</button>
        <button type="button" class="btn ghost" id="gbDecline">Decline</button>
      </div>
    </div>`}function rm(e){const t=Math.max(0,(e.endsAt||0)-Date.now()),s=oo(t);return`
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
    </div>`}function om(e){var i,n;let t="Tie",s="Equal voluntary support · recognition for both";e.result==="win"&&e.winnerName?(t=`Winner · ${e.winnerName}`,s="Recognition only — no opponent funds transferred"):e.result==="declined"&&(t="Declined",s="Challenge was declined");const a=e.result==="win"?Ei("battle-win",{className:"gift-sticker gift-sticker--battle"}).html:"";return`
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
    </div>`}function lm(e,t){var i;const a=Zn().map(n=>`<option value="${r(n.id)}">${r(n.name)} — ${r(n.bio)}</option>`).join("");return`
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
      <p class="muted" style="margin:10px 0 0">Wallet: <strong id="gbWalletBal">${r(Z(((i=T().wallet)==null?void 0:i.balance)||0))}</strong> · TEST MODE</p>
    </div>`}function cm(){const e=mi(10),t=e.length?e.map((s,a)=>`<li class="gb-day-row">${it("battle-win",{className:"gift-sticker gift-sticker--xs"})}<span class="chip">#${a+1}</span><strong>${r(s.username)}</strong></li>`).join(""):'<li class="muted">No winners yet today · win a 60s battle</li>';return`
    <div class="card gb-day-board" id="gbDayWinners">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <h3 style="margin:0">Today&apos;s winners</h3>
        <span class="chip">${e.length}/10 · end of day</span>
      </div>
      <p class="muted" style="margin:6px 0 8px;font-size:12px">Sticker board · recognition only · TEST MODE</p>
      <ol class="gb-list gb-day-list">${t}</ol>
    </div>`}function dm(){const e=Ml(12),t=Pl(15),s=e.length?e.map(i=>{var o,l;const n=i.result==="win"?`Winner ${i.winnerName}`:i.result==="tie"?"Tie":i.result||i.status;return`<li>
            <strong>${r(n)}</strong>
            <span class="muted"> · ${r(((o=i.challenger)==null?void 0:o.name)||"?")} ${r(Z(i.scoreA))} vs ${r(((l=i.opponent)==null?void 0:l.name)||"?")} ${r(Z(i.scoreB))} · ${r(j(i.endedAt||i.createdAt||0))} · ${r(i.mode||"")}</span>
          </li>`}).join(""):'<li class="muted">No battles yet.</li>';return`
    <div class="card">
      <h3>Top winners (local)</h3>
      <ol class="gb-list">${t.length?t.map((i,n)=>`<li><span class="chip">#${n+1}</span> <strong>${r(i.username)}</strong> <span class="muted">${i.wins} win${i.wins===1?"":"s"} · ${r(Z(i.points))} battle pts</span></li>`).join(""):'<li class="muted">Win a battle to appear here.</li>'}</ol>
    </div>
    <div class="card">
      <h3>Battle history</h3>
      <ul class="gb-list">${s}</ul>
    </div>`}function pm(e){return`
    <div class="card">
      <h3>Battle prefs</h3>
      <label class="toggle"><span>Allow battle invitations</span>
        <input type="checkbox" id="gbPrefInvites" ${e.invitationsEnabled?"checked":""}/>
      </label>
      <p class="muted" style="margin:8px 0 0">When off, new challenges are blocked. Existing active battles can still finish.</p>
    </div>`}function um(){const{user:e,live:t}=T();if(!e)return tm();ui();const s=di(),a=ci(),i=Ll(),n=!!(t&&!t.endedAt);let o="";(s==null?void 0:s.status)==="pending"?o=nm(s):(s==null?void 0:s.status)==="active"?o=rm(s):(s==null?void 0:s.status)==="ended"?o=om(s):o=lm(n,a);const l=`
    ${sm()}
    ${am(i)}
    ${cm()}
    ${im(n,t)}
    ${o}
    ${dm()}
    ${pm(a)}
  `;return I("Gift Battles",l,{lead:"Runs during Live · not a separate stream · 60s voluntary gift battles · not wagers · TEST MODE",badge:(s==null?void 0:s.status)==="active"?"BATTLE":i?"CHAMP":void 0})}function mm(e){var a,i,n,o,l,d,c;fn(),(a=e.querySelector("#gbPrefInvites"))==null||a.addEventListener("change",u=>{$l({invitationsEnabled:u.target.checked}),h(u.target.checked?"Invitations on":"Invitations off")}),(i=e.querySelector("#gbTopUp"))==null||i.addEventListener("click",()=>{var m;zs(10,"Gift battle demo top-up · TEST MODE"),h("+$10 demo wallet");const u=e.querySelector("#gbWalletBal");u&&(u.textContent=Z(((m=T().wallet)==null?void 0:m.balance)||0))});const t=u=>{const m=e.querySelector("#gbOpponent"),g=m==null?void 0:m.value,f=Zn().find(y=>y.id===g),b=xl({opponentId:g,opponentName:f==null?void 0:f.name,mode:u});if((b==null?void 0:b.error)==="signin")return h("Sign in first");if((b==null?void 0:b.error)==="invites_disabled")return h("Invitations disabled");if((b==null?void 0:b.error)==="not_live")return h("Not live — use sandbox");if((b==null?void 0:b.error)==="battle_in_progress")return h("Battle already in progress");if((b==null?void 0:b.error)==="self")return h("Pick another fan");h("Challenge sent · waiting for accept"),ft()};(n=e.querySelector("#gbStartLive"))==null||n.addEventListener("click",()=>t("live")),(o=e.querySelector("#gbStartSandbox"))==null||o.addEventListener("click",()=>t("sandbox")),(l=e.querySelector("#gbAccept"))==null||l.addEventListener("click",()=>{const u=El();if((u==null?void 0:u.error)==="no_pending")return h("No pending challenge");if((u==null?void 0:u.error)==="invites_disabled")return h("Invitations disabled");h("Battle started · 1:00"),ft()}),(d=e.querySelector("#gbDecline"))==null||d.addEventListener("click",()=>{const u=Al();if(u!=null&&u.error)return h(String(u.error));h("Challenge declined"),ft()}),(c=e.querySelector("#gbClear"))==null||c.addEventListener("click",()=>{const u=Cl();if(u!=null&&u.error)return h("Battle still running");ft()}),e.querySelectorAll("[data-gb-gift]").forEach(u=>{u.addEventListener("click",()=>{var v;const m=Dl({side:u.dataset.gbGift,kind:u.dataset.kind||"gift",amount:Number(u.dataset.amt)||2,label:u.dataset.label||""});if((m==null?void 0:m.error)==="signin")return h("Sign in first");if((m==null?void 0:m.error)==="no_active"||(m==null?void 0:m.error)==="ended")return h("No active battle");if((m==null?void 0:m.error)==="offline")return h("Live offline — use sandbox");if((m==null?void 0:m.error)==="insufficient")return h("Need wallet credits");if(h(u.dataset.gbGift==="opponent"?"Opponent support (demo)":"Support sent · demo"),((v=m.battle)==null?void 0:v.status)==="ended"){h(m.battle.result==="win"?`Winner · ${m.battle.winnerName}`:"Tie!"),ft();return}const g=e.querySelector("#gbScoreA"),f=e.querySelector("#gbScoreB"),b=e.querySelector("#gbScoreText"),y=m.battle;g&&f&&y?(g.textContent=Z(y.scoreA),g.setAttribute("aria-label",`Challenger score ${Z(y.scoreA)}`),f.textContent=Z(y.scoreB),f.setAttribute("aria-label",`Opponent score ${Z(y.scoreB)}`),b&&(b.textContent=`Live score: ${y.challenger.name} ${Z(y.scoreA)} — ${y.opponent.name} ${Z(y.scoreB)}`)):ft()})});const s=e.querySelector("#gbClock");s&&(Fs=setInterval(()=>{const u=ui();if(!u||u.status==="ended"){fn(),(u==null?void 0:u.status)==="ended"&&h(u.result==="win"?`Winner · ${u.winnerName}`:"Tie!"),ft();return}const m=Math.max(0,(u.endsAt||0)-Date.now());s.textContent=oo(m)},250))}function be(){R("#/multiguest")}function hm(e){return(String(e||"?").trim().slice(0,2)||"?").toUpperCase()}function gm(e){const t=T().user;return!t||!e?!1:(t.following||[]).includes(e)}function Ai(e){return((e==null?void 0:e.guests)||[]).filter(t=>t.status==="joined")}function fm(e){return((e==null?void 0:e.guests)||[]).filter(t=>t.status==="invited")}function za(e,t){var a,i;return`${Number(((i=(a=e==null?void 0:e.giftSplit)==null?void 0:a.shares)==null?void 0:i[t])||0).toFixed(0)}%`}function vm(){return I("Multi-Guest Live",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Start a multi-guest demo session as host. No camera / WebRTC — fake stage tiles only.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Invite 2–4 co-hosts · disclosed gift splits · TEST MODE"})}function bm(){return`
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
    </div>`}function Ma({role:e,name:t,sub:s,muted:a,empty:i,followId:n}){if(i)return`
      <div class="mg-tile mg-tile-empty" aria-label="Empty guest slot">
        <div class="mg-avatar mg-avatar-empty">+</div>
        <div class="mg-tile-name muted">Open slot</div>
        <div class="mg-tile-sub muted">Invite a guest</div>
      </div>`;const o=a?'<span class="chip">Muted</span>':"",l=n&&n!=="dbs"?gm(n)?`<button class="btn ghost mg-follow" data-follow="${r(n)}" data-on="1">Following</button>`:`<button class="btn ghost mg-follow" data-follow="${r(n)}" data-on="0">Follow</button>`:n==="dbs"?'<a class="btn ghost" href="#/profile">Follow PIKK</a>':"";return`
    <div class="mg-tile ${e==="host"?"mg-tile-host":""} ${a?"mg-muted":""}">
      <div class="mg-avatar" aria-hidden="true">${r(hm(t))}</div>
      <div class="mg-tile-name">${r(t)}</div>
      <div class="mg-tile-sub">${r(s||"")} ${o}</div>
      <div class="mg-tile-actions">${l}</div>
    </div>`}function ym(e){var n,o;const t=Ai(e),s=[];s.push(Ma({role:"host",name:e.hostName,sub:"Host",followId:e.hostId===((n=T().user)==null?void 0:n.id)?"dbs":e.hostId}));for(let l=0;l<(e.maxGuests||4);l++){const d=t[l];d?s.push(Ma({role:"guest",name:d.username,sub:"Guest",muted:d.muted,followId:d.id})):s.push(Ma({empty:!0}))}const a=(o=e.giftSplit)!=null&&o.disclosed?'<span class="chip">Split disclosed</span>':'<span class="chip">Split pending</span>',i=e.broadcastReady?'<span class="chip">Broadcast ready</span>':'<span class="chip">Setup</span>';return`
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
    </div>`}function km(e){const t=Il(),s=new Set((e.guests||[]).filter(u=>u.status==="invited"||u.status==="joined").map(u=>u.id)),a=t.filter(u=>u.id!==e.hostId&&!s.has(u.id)),i=fm(e),n=Ai(e),o=a.length?a.map(u=>`<option value="${r(u.id)}">${r(u.username)} — ${r(u.bio||"demo")}</option>`).join(""):'<option value="">No more demo guests</option>',l=i.length?i.map(u=>`
        <li class="mg-guest-row">
          <span><strong>@${r(u.username)}</strong> <span class="chip">Invited</span></span>
          <span class="row wrap" style="gap:6px">
            <button class="btn primary mg-accept" data-id="${r(u.id)}">Accept (sim)</button>
            <button class="btn ghost mg-decline" data-id="${r(u.id)}">Decline</button>
          </span>
        </li>`).join(""):'<li class="muted">No pending invites.</li>',d=n.length?n.map(u=>`
        <li class="mg-guest-row">
          <span>
            <strong>@${r(u.username)}</strong>
            ${u.muted?'<span class="chip">Muted</span>':'<span class="chip">On stage</span>'}
            <span class="muted" style="font-size:12px"> · gift ${r(za(e,u.id))}</span>
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
      <ul class="mg-list">${d}</ul>
      <h4 style="margin:14px 0 6px">Pending invites</h4>
      <ul class="mg-list">${l}</ul>
      <div class="field" style="margin-top:12px">
        <span>Invite demo guest</span>
        <div class="row wrap" style="gap:8px;margin-top:6px">
          <select id="mgInviteSelect" ${c||!a.length?"disabled":""}>${o}</select>
          <button class="btn primary" id="mgInviteBtn" ${c||!a.length?"disabled":""}>Invite</button>
        </div>
      </div>
      ${c?'<p class="muted" style="margin:8px 0 0">Guest slots full (joined + pending).</p>':""}
    </div>`}function wm(e){var o,l;const t=Ai(e),s=[{id:e.hostId,username:e.hostName,role:"Host"},...t.map(d=>({id:d.id,username:d.username,role:"Guest"}))],a=((o=e.giftSplit)==null?void 0:o.mode)||"equal",i=!!((l=e.giftSplit)!=null&&l.disclosed),n=s.map(d=>{var u,m;const c=Number(((m=(u=e.giftSplit)==null?void 0:u.shares)==null?void 0:m[d.id])||0);return`
        <li class="mg-split-row">
          <span><strong>@${r(d.username)}</strong> <span class="chip">${r(d.role)}</span></span>
          ${a==="custom"&&!i?`<label class="mg-pct"><input type="number" min="0" max="100" step="1" class="mg-share-input" data-id="${r(d.id)}" value="${r(String(c))}" /> %</label>`:`<span class="chip">${r(String(Math.round(c)))}%</span>`}
        </li>`}).join("");return`
    <div class="card mg-split">
      <h3>Gift split disclosure</h3>
      <p class="muted">Required before broadcast when multiple hosts/guests share gifts. Display-only · TEST MODE · not a real payout.</p>
      <div class="row wrap" style="gap:8px;margin:10px 0">
        <button class="btn ${a==="equal"?"primary":"ghost"}" id="mgSplitEqual">Equal split</button>
        <button class="btn ${a==="custom"?"primary":"ghost"}" id="mgSplitCustom">Custom %</button>
      </div>
      <ul class="mg-list">${n}</ul>
      <p class="muted" style="margin:8px 0 0">Host share: <strong>${r(za(e,e.hostId))}</strong>
        · Guests: ${t.length?t.map(d=>`@${r(d.username)} ${r(za(e,d.id))}`).join(" · "):"none yet"}</p>
      ${i?`<p class="mg-ok" style="margin:10px 0 0">✓ Split disclosed ${e.giftSplit.disclosedAt?"· "+j(e.giftSplit.disclosedAt):""}. Broadcast ready (demo).</p>`:`<div class="row wrap" style="gap:8px;margin-top:12px">
               ${a==="custom"?'<button class="btn" id="mgSplitApply">Apply custom %</button>':""}
               <button class="btn primary" id="mgDisclose">Disclose &amp; ready broadcast</button>
             </div>
             <p class="muted" style="margin:8px 0 0">Custom % must total 100 among host + joined guests.</p>`}
    </div>`}function Sm(e){return`
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
    </div>`}function vn(e){return e.length?`
    <div class="card">
      <h3>Recent multi-guest sessions</h3>
      <ul class="mg-list">${e.slice(0,8).map(s=>{var i;const a=(s.guests||[]).filter(n=>n.status==="joined"||n.joinedAt).length;return`<li><strong>${r(s.title)}</strong> · ${r(String(a))} guests · ${j(s.endedAt||s.startedAt)}
        ${(i=s.giftSplit)!=null&&i.disclosed?" · split disclosed":""}</li>`}).join("")}</ul>
    </div>`:`
      <div class="card">
        <h3>Recent multi-guest sessions</h3>
        <p class="muted" style="margin:0">No ended sessions yet.</p>
      </div>`}function $m(e){return`
    <div class="card">
      <h3>Start multi-guest session</h3>
      <p class="muted">You host as <strong>@${r(e.username)}</strong>. Invite demo contacts next — no real stream.</p>
      <div class="field" style="margin-top:10px">
        <span>Session title</span>
        <input id="mgTitle" maxlength="80" placeholder="e.g. Friday collab freestyle" value="PIKK Multi-Guest Demo" />
      </div>
      <button class="btn primary" id="mgStart" style="margin-top:12px">Start as host</button>
    </div>`}function xm(){const t=T().user;if(!t)return vm();la();const s=hs(),a=_l();return!s||s.endedAt?I("Multi-Guest Live",`${bm()}${$m(t)}${vn(a)}`,{lead:"2–4 co-hosts · gift split disclosure · TEST MODE"}):I("Multi-Guest Live",`${ym(s)}${km(s)}${wm(s)}${Sm(s)}${vn(a)}`,{lead:"Active collab session · fake stage · TEST MODE"})}function Em(e){var s,a,i,n,o,l,d,c,u;if(!e)return;(s=e.querySelector("#mgStart"))==null||s.addEventListener("click",()=>{var f;const m=((f=e.querySelector("#mgTitle"))==null?void 0:f.value)||"",g=ql(m);if(g.error==="signin")return h("Sign in first");if(g.error==="session_in_progress")return h("Session already active");h("Multi-guest session started"),be()}),(a=e.querySelector("#mgEnd"))==null||a.addEventListener("click",()=>{const m=Vl();if(m.error)return h(m.error==="host_only"?"Host only":"No session");h("Session ended"),be()}),(i=e.querySelector("#mgInviteBtn"))==null||i.addEventListener("click",()=>{var f,b;const m=(f=e.querySelector("#mgInviteSelect"))==null?void 0:f.value;if(!m)return h("Pick a guest");const g=Bl(m);if(g.error==="full")return h("Guest slots full");if(g.error==="already_invited")return h("Already invited");if(g.error)return h("Invite failed: "+g.error);h("Invited @"+(((b=g.guest)==null?void 0:b.username)||m)),be()}),e.querySelectorAll(".mg-accept").forEach(m=>{m.addEventListener("click",()=>{var f;const g=Ol(m.getAttribute("data-id"));if(g.error==="full")return h("Stage full");if(g.error)return h("Accept failed");h("@"+(((f=g.guest)==null?void 0:f.username)||"")+" joined"),be()})}),e.querySelectorAll(".mg-decline").forEach(m=>{m.addEventListener("click",()=>{if(Nl(m.getAttribute("data-id")).error)return h("Decline failed");h("Invite declined"),be()})}),e.querySelectorAll(".mg-mute").forEach(m=>{m.addEventListener("click",()=>{const g=m.getAttribute("data-id"),f=m.getAttribute("data-muted")==="1";if(Fl(g,!f).error)return h("Mute failed");h(f?"Unmuted":"Muted"),be()})}),e.querySelectorAll(".mg-leave").forEach(m=>{m.addEventListener("click",()=>{if(Rl(m.getAttribute("data-id")).error)return h("Leave failed");h("Guest left"),be()})}),e.querySelectorAll(".mg-remove").forEach(m=>{m.addEventListener("click",()=>{if(jl(m.getAttribute("data-id")).error)return h("Remove failed");h("Guest removed"),be()})}),e.querySelectorAll(".mg-follow").forEach(m=>{m.addEventListener("click",()=>{const g=m.getAttribute("data-follow");m.getAttribute("data-on")==="1"?(aa(g),h("Unfollowed")):(sa(g),h("Following")),be()})}),(n=e.querySelector("#mgSplitEqual"))==null||n.addEventListener("click",()=>{if(ts({mode:"equal",disclose:!1}).error)return h("Split failed");h("Equal split applied"),be()}),(o=e.querySelector("#mgSplitCustom"))==null||o.addEventListener("click",()=>{var f;const m=hs();if(ts({mode:"custom",shares:((f=m==null?void 0:m.giftSplit)==null?void 0:f.shares)||{},disclose:!1}).error)return h("Could not switch to custom");h("Custom split — edit % then Apply"),be()}),(l=e.querySelector("#mgSplitApply"))==null||l.addEventListener("click",()=>{const m={};e.querySelectorAll(".mg-share-input").forEach(f=>{m[f.getAttribute("data-id")]=Number(f.value)||0});const g=ts({mode:"custom",shares:m,disclose:!1});if(g.error==="split_total")return h(`Percents total ${g.total}% — need 100%`);if(g.error)return h("Apply failed");h("Custom split saved"),be()}),(d=e.querySelector("#mgDisclose"))==null||d.addEventListener("click",()=>{var f;const m=hs();if(((f=m==null?void 0:m.giftSplit)==null?void 0:f.mode)==="custom"){const b={},y=e.querySelectorAll(".mg-share-input");if(y.length){y.forEach(w=>{b[w.getAttribute("data-id")]=Number(w.value)||0});const v=ts({mode:"custom",shares:b,disclose:!1});if(v.error==="split_total")return h(`Percents total ${v.total}% — need 100%`)}}const g=Gl();if(g.error==="split_total")return h(`Percents total ${g.total}% — need 100%`);if(g.error)return h("Disclose failed");h("Gift split disclosed · broadcast ready (demo)"),be()});const t=()=>{const m=e.querySelector("#mgChatInput"),g=(m==null?void 0:m.value)||"",f=Kl(g);if(f.error==="empty")return h("Type a message");if(f.error)return h("Chat failed");m&&(m.value=""),be()};(c=e.querySelector("#mgChatSend"))==null||c.addEventListener("click",t),(u=e.querySelector("#mgChatInput"))==null||u.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),t())})}function ye(e){R(e?`#/fanclubs?club=${encodeURIComponent(e)}`:"#/fanclubs")}function He(e="DemoFan"){const{user:t}=T();if(t)return t;const s=Nt(e);return h(`Signed in as ${e} · local demo`),s||T().user}function lo(e){return e==="paid"?"Paid / Skeet+":e==="members"?"Members only":"Public"}function Am(e,t){const s=t===e.id,a=[e.official?'<span class="chip">Official DBS</span>':"",`<span class="chip">${r(lo(e.privacy))}</span>`,`<span class="chip">${e.memberCount||0} members</span>`].filter(Boolean).join(" ");return`<button type="button" class="fanclub-card${s?" on":""}" data-open-club="${r(e.id)}" style="text-align:left;width:100%;display:block;background:transparent;border:1px solid ${s?"var(--accent, #f59e0b)":"var(--line)"};border-radius:14px;padding:12px;margin:0 0 10px;cursor:pointer;color:inherit">
    <div class="row" style="gap:10px;align-items:center">
      <img src="${r(e.graphic||"/brand/logo-dbs-v3@2x.webp")}" alt="" width="48" height="48" style="border-radius:12px;object-fit:cover;background:#111" />
      <div style="flex:1;min-width:0">
        <strong>${r(e.name)}</strong>
        <div class="muted" style="font-size:12px;margin-top:2px">Host @${r(e.hostName)} · Discover DatBoiSkeet</div>
        <div class="row wrap" style="gap:6px;margin-top:6px">${a}</div>
      </div>
    </div>
  </button>`}function Cm(e){const t=Ss(e);if(!t)return'<div class="card"><p class="muted" style="margin:0">Club not found.</p><button class="btn" data-back-list>Back to clubs</button></div>';const s=T().user,a=dr(t.id),i=bc(t.id),n=fs(t.id),o=pr(t.id),l=xt(),d=o.ok?"":`<div class="card" style="border-color:rgba(245,158,11,.35)">
          <h3 style="margin:0 0 6px">${t.privacy==="paid"?"Skeet+ room":"Members only"}</h3>
          <p class="muted" style="margin:0 0 10px">${t.privacy==="paid"?"This room uses membership permissions (Skeet+ or higher). TEST MODE unlock below — no real charge.":"Join the club to enter the discussion room."}</p>
          ${t.privacy==="paid"?`<button class="btn primary" id="fcUnlockSkeet">Unlock Skeet+ · TEST MODE</button>
                 <a class="btn" href="#/pricing">Pricing</a>
                 <p class="chip" style="margin-top:8px">Current membership: ${r(l||"none")}</p>`:`<button class="btn primary" data-join="${r(t.id)}">Join club</button>`}
        </div>`,c=o.ok?yc(t.id):[],u=o.ok?c.length?c.map(g=>{const f=n?`<div class="row wrap" style="gap:6px;margin-top:6px">
                   <button class="btn ghost" data-pin="${r(g.id)}" data-club="${r(t.id)}">${g.pinned?"Unpin":"Pin"} · mod</button>
                   <button class="btn ghost" data-remove="${r(g.id)}" data-club="${r(t.id)}">Remove · mod</button>
                 </div>`:"";return`<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between;gap:8px">
                <strong>@${r(g.username)}</strong>
                <span class="muted" style="font-size:12px">${r(j(g.at))}${g.pinned?" · pinned":""}</span>
              </div>
              <p style="margin:6px 0 0">${r(g.text)}</p>
              ${f}
            </li>`}).join(""):'<li class="muted" style="padding:8px 0">No posts yet — start the discussion.</li>':"",m=o.ok?`<form id="fcPostForm" class="card" style="margin-top:10px">
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
            <span class="chip">${r(lo(t.privacy))}</span>
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
    ${d}
    ${o.ok?`<div class="card">
             <h3 style="margin:0 0 4px">Discussion</h3>
             <p class="muted" style="margin:0 0 8px;font-size:12px">Local posts in dbs_v1 · mods can pin/remove</p>
             <ul class="list-plain" id="fcPosts">${u}</ul>
           </div>
           ${m}`:""}
  `}function Tm(e){var l;Ge();const t=lr(),s=((l=e==null?void 0:e.query)==null?void 0:l.club)||"",{user:a}=T(),i=t.map(d=>Am(d,s)).join(""),o=s?Cm(s):`
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
    `;return I("Fan Clubs",o,{lead:"Creator communities inside DBS Lounge · DEMO.",badge:"Phase 2 demo"})}function Dm(e){var t,s,a,i,n,o,l;e.querySelectorAll("[data-open-club]").forEach(d=>{d.addEventListener("click",()=>ye(d.getAttribute("data-open-club")))}),(t=e.querySelector("[data-back-list]"))==null||t.addEventListener("click",()=>ye()),(s=e.querySelector("#fcSignIn"))==null||s.addEventListener("click",()=>{He("DemoFan"),ye()}),(a=e.querySelector("#fcAdmin"))==null||a.addEventListener("click",()=>{var c,u;He("DemoAdmin");const d=!ee();bs(d),h(d?"Demo admin on":"Demo admin off"),ye(((c=e.querySelector("[data-leave],[data-join]"))==null?void 0:c.getAttribute("data-leave"))||((u=e.querySelector("[data-join]"))==null?void 0:u.getAttribute("data-join"))||void 0)}),(i=e.querySelector("#fcSeedBtn"))==null||i.addEventListener("click",()=>{Ge({force:!0}),h("Demo clubs reseeded"),ye()}),(n=e.querySelector("#fcCreateForm"))==null||n.addEventListener("submit",d=>{var b,y,v,w,x;d.preventDefault(),He("DemoCreator");const c=(b=e.querySelector("#fcName"))==null?void 0:b.value,u=(y=e.querySelector("#fcDesc"))==null?void 0:y.value,m=((v=e.querySelector("#fcGraphic"))==null?void 0:v.value)||"/brand/logo-dbs-v3@2x.webp",g=((w=e.querySelector("#fcPrivacy"))==null?void 0:w.value)||"public",f=hc({name:c,description:u,graphic:m,privacy:g});if(f.error==="signin")return h("Sign in required");if(f.error==="name")return h("Name required");h("Club created · TEST MODE"),ye((x=f.club)==null?void 0:x.id)}),e.querySelectorAll("[data-join]").forEach(d=>{d.addEventListener("click",()=>{He();const c=d.getAttribute("data-join");if(cr(c).error)return h("Could not join");h("Joined club"),ye(c)})}),e.querySelectorAll("[data-leave]").forEach(d=>{d.addEventListener("click",()=>{He();const c=d.getAttribute("data-leave"),u=gc(c);if(u.error==="host")return h("Host cannot leave — transfer later");if(u.error)return h("Could not leave");h("Left club"),ye(c)})}),e.querySelectorAll("[data-follow]").forEach(d=>{d.addEventListener("click",()=>{He();const c=d.getAttribute("data-follow");fc(c),h("Following · optional"),ye(c)})}),e.querySelectorAll("[data-unfollow]").forEach(d=>{d.addEventListener("click",()=>{He();const c=d.getAttribute("data-unfollow");vc(c),h("Unfollowed"),ye(c)})}),(o=e.querySelector("#fcUnlockSkeet"))==null||o.addEventListener("click",()=>{He(),ta("skeet+",!0),h("Skeet+ unlocked · TEST MODE");const d=new URLSearchParams(location.hash.split("?")[1]||"");ye(d.get("club")||void 0)}),(l=e.querySelector("#fcPostForm"))==null||l.addEventListener("submit",d=>{var f;d.preventDefault(),He();const u=new URLSearchParams(location.hash.split("?")[1]||"").get("club"),m=(f=e.querySelector("#fcPostText"))==null?void 0:f.value,g=kc(u,m);if(g.error==="gated")return h("Room gated");if(g.error==="empty")return h("Write something");if(g.error)return h("Could not post");h("Posted"),ye(u)}),e.querySelectorAll("[data-pin]").forEach(d=>{d.addEventListener("click",()=>{const c=d.getAttribute("data-club");if(wc(c,d.getAttribute("data-pin")).error==="mod")return h("Mods only");h("Pin toggled · TEST MODE"),ye(c)})}),e.querySelectorAll("[data-remove]").forEach(d=>{d.addEventListener("click",()=>{const c=d.getAttribute("data-club");if(Sc(c,d.getAttribute("data-remove")).error==="mod")return h("Mods only");h("Post removed · TEST MODE"),ye(c)})})}function Ha(){R("#/loyalty")}function Wa(){const{user:e}=T();if(e)return e;const t=Nt("LoyalFan");return h("Signed in as LoyalFan · local demo"),t||T().user}function _s(e,t,s){var i;Wa();const a=Zc(e,{points:t,note:s});if(a.error==="signin")return h("Sign in required");if(a.error==="cooldown")return h("Anti-farming · wait a few seconds");if(a.error==="daily_cap")return h("Daily cap hit · come back tomorrow (demo)");if(a.error)return h("Could not record");(a.newBadges||[]).filter(n=>n!=="day_one"||(a.loyalty.badges||[]).includes("day_one")),(i=a.newBadges)!=null&&i.length?h(`+${t} pts · badge: ${a.newBadges.join(", ")}`):h(`+${t} pts · ${s}`),Ha()}function Mm(){const{user:e}=T(),t=xs(),a=Lr().map(o=>{const l=o.unlocked;return`<div class="card" style="opacity:${l?1:.55};margin:0">
        <div class="row" style="justify-content:space-between;gap:8px">
          <strong>${r(o.name)}</strong>
          <span class="chip">${l?"Unlocked":"Locked"}</span>
        </div>
        <p class="muted" style="margin:6px 0 0;font-size:12px">${r(o.blurb)}</p>
      </div>`}).join(""),i=(t.history||[]).length===0?'<p class="muted" style="margin:0">No actions yet — try a listen tick or join a club.</p>':`<ul class="list-plain">${(t.history||[]).slice(0,12).map(o=>`<li style="padding:8px 0;border-top:1px solid rgba(255,255,255,.06)">
            <div class="row" style="justify-content:space-between">
              <span><strong>+${o.points}</strong> · ${r(o.note||o.kind)}</span>
              <span class="muted" style="font-size:12px">${r(j(o.at))}</span>
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
    `,{lead:"Recognition for healthy participation · DEMO.",badge:"Phase 2 demo"})}function Lm(e){var t,s,a,i,n,o;(t=e.querySelector("#loyListen"))==null||t.addEventListener("click",()=>_s("listen",5,"Authorized listening tick")),(s=e.querySelector("#loyLive"))==null||s.addEventListener("click",()=>_s("live",8,"Attended live (stub)")),(a=e.querySelector("#loyHelp"))==null||a.addEventListener("click",()=>_s("help",6,"Shared community helper tip")),(i=e.querySelector("#loyClub"))==null||i.addEventListener("click",()=>{Wa(),Ge();const l=lr(),d=l.find(c=>c.privacy==="public")||l[0];d&&cr(d.id),_s("club",10,d?`Joined ${d.name}`:"Joined Fan Club")}),(n=e.querySelector("#loyPublic"))==null||n.addEventListener("change",l=>{Wa(),Xc(l.target.checked),h(l.target.checked?"Public visibility on":"Achievements private"),Ha()}),(o=e.querySelector("#loyReset"))==null||o.addEventListener("click",()=>{ed(),h("Loyalty demo reset"),Ha()})}function vt(){R("#/openmic")}function La(e="MicHopeful"){const{user:t}=T();if(t)return t;const s=Nt(e);return h(`Signed in as ${e} · local demo`),s||T().user}function bn(e){return`<span class="chip">${r(e==="approved"?"Approved":e==="rejected"?"Rejected":"Pending")}</span>`}function Pm(){const e=ad(),t=e.chipLabel||"House rotation",s=e.embed?Ye(e.embed,"rel=0"):"";return`
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
    </div>`}function Im(){Gt();const{user:e}=T(),t=ee(),s=sd(),a=e?Fa().filter(d=>d.userId===e.id):[],i=t?Fa({status:"pending"}):[],n=s.length===0?'<p class="muted" style="margin:0">No approved performers yet.</p>':s.map(d=>`<article class="card" style="margin:0 0 10px">
              <div class="row" style="justify-content:space-between;gap:8px">
                <div>
                  <strong>${r(d.trackTitle)}</strong>
                  <div class="muted" style="font-size:12px">@${r(d.username)} · ${r(d.talent)}</div>
                </div>
                ${bn("approved")}
              </div>
              <p style="margin:8px 0 0">${r(d.profileNote||"Featured in PIKK Open Mic showcase.")}</p>
              <p class="muted" style="font-size:11px;margin:8px 0 0">Not a paid ranking · discovery showcase</p>
            </article>`).join(""),o=a.length===0?'<p class="muted" style="margin:0">You have no applications yet.</p>':`<ul class="list-plain">${a.map(d=>`<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between">
                <strong>${r(d.trackTitle)}</strong>
                ${bn(d.status)}
              </div>
              <div class="muted" style="font-size:12px">${r(d.talent)} · ${r(j(d.at))}</div>
            </li>`).join("")}</ul>`,l=t?`<div class="card">
         <h3 style="margin:0 0 8px">Admin review · TEST MODE</h3>
         <p class="muted" style="margin:0 0 10px;font-size:12px">Approve for showcase or reject. Distinct from pay-to-win.</p>
         ${i.length===0?'<p class="muted" style="margin:0">No pending applications.</p>':i.map(d=>`<div style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
                     <strong>${r(d.trackTitle)}</strong> · @${r(d.username)} · ${r(d.talent)}
                     <p class="muted" style="margin:4px 0;font-size:12px">${r(d.profileNote)}</p>
                     <p class="chip">Rights certified: ${d.rightsCertified?"yes":"no"}</p>
                     <div class="row wrap" style="gap:8px;margin-top:8px">
                       <button class="btn primary" data-om-approve="${r(d.id)}">Approve</button>
                       <button class="btn" data-om-reject="${r(d.id)}">Reject</button>
                     </div>
                   </div>`).join("")}
       </div>`:"";return I("Open Mic",`
    ${Pm()}

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
      ${o}
    </div>

    ${l}

    <div class="card">
      <h3 style="margin:0 0 8px">Approved showcase</h3>
      <p class="muted" style="margin:0 0 10px;font-size:12px">Featured performers · discovery, not spend rank</p>
      ${n}
    </div>
    `,{lead:"24/7 house catalog when idle · opt-in talent showcase · DEMO.",badge:"Phase 2 demo"})}function _m(e){var t,s,a,i,n;(t=e.querySelector("#omSignIn"))==null||t.addEventListener("click",()=>{La(),vt()}),(s=e.querySelector("#omAdmin"))==null||s.addEventListener("click",()=>{La("DemoAdmin");const o=!ee();bs(o),h(o?"Demo admin on":"Demo admin off"),vt()}),(a=e.querySelector("#omSeed"))==null||a.addEventListener("click",()=>{Gt({force:!0}),h("Open Mic demos reseeded"),vt()}),(i=e.querySelector("#omForm"))==null||i.addEventListener("submit",o=>{var c,u,m,g;o.preventDefault(),La();const l=(c=e.querySelector("#omRights"))==null?void 0:c.checked,d=nd({talent:(u=e.querySelector("#omTalent"))==null?void 0:u.value,trackTitle:(m=e.querySelector("#omTitle"))==null?void 0:m.value,profileNote:(g=e.querySelector("#omNote"))==null?void 0:g.value,rightsCertified:!!l});if(d.error==="rights")return h("Rights certification required");if(d.error==="title")return h("Title required");if(d.error==="pending")return h("You already have a pending application");if(d.error)return h("Could not submit");h("Application submitted · pending review"),vt()}),e.querySelectorAll("[data-om-approve]").forEach(o=>{o.addEventListener("click",()=>{if(Ka(o.getAttribute("data-om-approve"),"approved").error==="admin")return h("Admin only");h("Approved · showcase"),vt()})}),e.querySelectorAll("[data-om-reject]").forEach(o=>{o.addEventListener("click",()=>{if(Ka(o.getAttribute("data-om-reject"),"rejected","Demo reject").error==="admin")return h("Admin only");h("Rejected"),vt()})}),(n=e.querySelector("#omNextHouse"))==null||n.addEventListener("click",()=>{const o=id();h("Next house · "+(o.chipLabel||"House")),vt()})}let Le=null,Lt="all";try{const e=sessionStorage.getItem("dbs_shop_cat");e&&(Lt=e,sessionStorage.removeItem("dbs_shop_cat"));const t=sessionStorage.getItem("dbs_shop_preview");t&&(Le=t,sessionStorage.removeItem("dbs_shop_preview"))}catch{}function et(){R("#/profile-shop")}function st(e){return Os.find(t=>t.id===e)||null}function co(e){return Pr(e)}function qm(e){const t={...e.equipped},s=Le?st(Le):null;if(s){const a=co(s);a&&(t[a]=s.id)}return t}function Bm(e){return`rarity-${r(e||"rare")}`}function Om(e){return`$${Number(e).toFixed(2)}`}function Nm(e){const{user:t}=T(),s=qm(e),a=s.frame?st(s.frame):null,i=s.effect?st(s.effect):null,n=s.banner?st(s.banner):null,o=s.nameStyle?st(s.nameStyle):null,l=s.badge?st(s.badge):null,d=(t==null?void 0:t.username)||"DemoFan",c=e.reduceMotion,u=i?`shop-fx shop-fx--${r(i.id.replace(/^fx-/,""))}${c?" shop-fx--still":""}`:"",m=o?`shop-name shop-name--${r(o.id.replace(/^name-/,""))}`:"shop-name",g=a?`shop-avatar-frame shop-frame--${r(a.id.replace(/^frame-/,""))}`:"shop-avatar-frame";return`
    <div class="shop-preview card" id="shopPreview">
      <div class="row wrap" style="justify-content:space-between;gap:8px;margin-bottom:10px">
        <h3 style="margin:0">Live preview</h3>
        <span class="chip">CONCEPT</span>
      </div>
      <div class="${n?`shop-preview-banner shop-banner--${r(n.id.replace(/^ban-/,""))}`:"shop-preview-banner shop-banner--default"}" aria-hidden="true">
        <span class="shop-banner-emoji">${n?r(n.emoji):"🎧"}</span>
      </div>
      <div class="shop-preview-body ${u}">
        <div class="${g}">
          <div class="shop-avatar-inner">${r(d.slice(0,1).toUpperCase())}</div>
          ${a?`<span class="shop-frame-emoji" aria-hidden="true">${r(a.emoji)}</span>`:""}
        </div>
        <div class="shop-preview-meta">
          <div class="${m}">${r(d)}</div>
          <p class="muted small" style="margin:4px 0 0">Cosmetic preview only · not a status grant</p>
          ${l?`<span class="shop-cosmetic-badge" title="Cosmetic style — not Verified/Founder">${r(l.emoji)} ${r(l.name)}</span>`:'<span class="muted small">No cosmetic badge equipped</span>'}
        </div>
      </div>
      <div class="shop-equipped-row">
        ${["frame","effect","banner","nameStyle","badge"].map(b=>{const y=s[b],v=y?st(y):null,w=b==="nameStyle"?"Name":b.charAt(0).toUpperCase()+b.slice(1);return`<span class="shop-eq-chip ${v?"on":""}">${r(w)}: ${v?r(v.emoji+" "+v.name):"—"}</span>`}).join("")}
      </div>
    </div>`}function Rm(e,t){const s=t.owned.includes(e.id),a=co(e),i=a&&t.equipped[a]===e.id,n=Le===e.id;return`
    <article class="cosmetic-card ${Bm(e.rarity)} ${n?"is-selected":""} ${s?"is-owned":""} ${i?"is-equipped":""}" data-id="${r(e.id)}">
      <div class="cosmetic-art" role="button" tabindex="0" data-preview="${r(e.id)}" aria-label="Preview ${r(e.name)}">
        <span class="cosmetic-emoji">${r(e.emoji)}</span>
        <span class="concept-flag">CONCEPT</span>
        ${s?'<span class="owned-flag">Owned</span>':""}
        ${i?'<span class="equipped-flag">Equipped</span>':""}
      </div>
      <div class="body">
        <div class="name">${r(e.name)}</div>
        <div class="meta">${r(e.category)} · ${r(e.rarity)}</div>
        <div class="price">${Om(e.price)} <span class="chip" style="margin-left:4px">TEST MODE</span></div>
        <div class="cosmetic-actions row wrap" style="gap:6px;margin-top:8px">
          <button type="button" class="btn ghost shop-act" data-act="preview" data-id="${r(e.id)}">Preview</button>
          ${s?i?`<button type="button" class="btn shop-act" data-act="unequip" data-slot="${r(a)}" data-id="${r(e.id)}">Unequip</button>`:`<button type="button" class="btn primary shop-act" data-act="equip" data-id="${r(e.id)}">Equip</button>`:`<button type="button" class="btn primary shop-act" data-act="unlock" data-id="${r(e.id)}">Unlock · TEST MODE</button>`}
        </div>
      </div>
    </article>`}function jm(){const e=at(),t=Lt==="all"?Os:Os.filter(n=>n.category===Lt),s=So.map(n=>`<button type="button" class="shop-chip ${Lt===n.id?"on":""}" data-cat="${r(n.id)}" aria-pressed="${Lt===n.id?"true":"false"}">${r(n.label)}</button>`).join(""),a=t.length===0?'<p class="muted">No cosmetics in this category.</p>':`<div class="cosmetic-grid">${t.map(n=>Rm(n,e)).join("")}</div>`,i=`
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

    ${Nm(e)}

    <div class="card">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center;margin-bottom:10px">
        <h3 style="margin:0">Catalog · ${Os.length} items</h3>
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
  `;return I("Profile Shop",i,{lead:"PIKK digital cosmetics · live preview · CONCEPT / TEST MODE.",badge:"Phase 2 · CONCEPT"})}function Fm(e){var s,a,i;e.querySelectorAll(".shop-chip").forEach(n=>{n.addEventListener("click",()=>{Lt=n.dataset.cat||"all",et()})}),(s=e.querySelector("#shopReduceMotion"))==null||s.addEventListener("change",n=>{hd(n.target.checked),h(n.target.checked?"Motion reduced":"Motion on"),et()}),(a=e.querySelector("#shopBundle"))==null||a.addEventListener("click",()=>{var o;const n=dd();h(`Starter bundle unlocked · ${((o=n.unlocked)==null?void 0:o.length)||0} items · no charge`),et()}),(i=e.querySelector("#shopReset"))==null||i.addEventListener("click",()=>{gd(),Le=null,h("Demo inventory reset"),et()});const t=n=>{Le=n,h("Preview updated"),et()};e.querySelectorAll("[data-preview]").forEach(n=>{n.addEventListener("click",()=>t(n.dataset.preview)),n.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),t(n.dataset.preview))})}),e.querySelectorAll(".shop-act").forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.act,l=n.dataset.id;if(o==="preview")return t(l);if(o==="unlock"){const d=cd(l);return d.error?h("Could not unlock"):(Le=l,h(d.already?"Already owned · TEST MODE":"Unlocked · TEST MODE · no charge"),et())}if(o==="equip"){const d=ud(l);return d.error==="not_owned"?h("Unlock first · TEST MODE"):d.error?h("Could not equip"):(Le=l,h("Equipped"),et())}if(o==="unequip"){const d=n.dataset.slot;if(md(d).error)return h("Could not unequip");const u=Le?st(Le):null;return u&&Pr(u)===d&&(Le=null),h("Unequipped"),et()}})})}const Km=["All","Hats","Shirts","Jackets"],Gm=["Ladies Shop","Men's Shop","Beauty & Hair","Fashion & Accessories","Lifestyle & Home","Creator Brands","Live Shopping","Deals"];function Vm(e,t="All",s=""){const a=String(s||"").trim().toLocaleLowerCase();return e.filter(i=>(t==="All"||i.category===t)&&(!a||`${i.name} ${i.category}`.toLocaleLowerCase().includes(a)))}function Um(e){return`
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
    </article>`}function zm(){const e=Km.map(i=>`<button type="button" class="btn ${i==="All"?"primary":"ghost"} pikk-shop-filter"
      data-category="${r(i)}" aria-pressed="${i==="All"?"true":"false"}">${r(i)}</button>`).join(""),t=Gm.map(i=>`<li><span>${r(i)}</span><span class="chip">Coming Soon</span></li>`).join(""),a=[Oe.find(i=>i.id==="jacket-black")||Oe.find(i=>i.category==="Jackets"),Oe.find(i=>i.id==="hat-716-orange")||Oe.find(i=>i.category==="Hats"),Oe.find(i=>i.id==="tee-ptsd")||Oe.find(i=>i.category==="Shirts")].filter(Boolean).map(i=>'<a class="pikk-shop-featured-product" href="'+r(i.shopUrl)+'" target="_blank" rel="noopener noreferrer" aria-label="View '+r(i.name)+' on Foreign X-Change"><img src="'+r(i.image)+'" alt="'+r(i.name)+'" loading="eager" decoding="async" /><span>'+r(i.category)+"</span></a>").join("");return I("PIKK Shop",`
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
      <div class="merch-grid pikk-shop-premium-grid pikk-shop-real-grid" id="pikkShopProducts">${Oe.map(Um).join("")}</div>
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
  `,{lead:"Physical merchandise · external checkout · future verified storefronts"})}function Hm(e){var d;const t=e.querySelector("#pikkShopSearch"),s=[...e.querySelectorAll(".pikk-shop-product")],a=[...e.querySelectorAll(".pikk-shop-filter, .pikk-shop-category")],i=e.querySelector("#pikkShopCount"),n=e.querySelector("#pikkShopEmpty");let o="All";function l(){const c=new Set(Vm(Oe,o,(t==null?void 0:t.value)||"").map(u=>u.id));for(const u of s){const m=c.has(u.dataset.productId);u.hidden=!m,u.style.display=m?"":"none"}i&&(i.textContent=`${c.size} ${c.size===1?"item":"items"}`),n&&(n.hidden=c.size>0);for(const u of a){const m=u.dataset.category===o;u.setAttribute("aria-pressed",String(m)),u.classList.contains("pikk-shop-filter")&&(u.classList.toggle("primary",m),u.classList.toggle("ghost",!m)),u.classList.toggle("on",m)}}t==null||t.addEventListener("input",l),(d=e.querySelector("[data-shop-scroll]"))==null||d.addEventListener("click",()=>{var c,u,m;return(m=e.querySelector("#pikkShopCatalog"))==null?void 0:m.scrollIntoView({behavior:(u=(c=window.matchMedia)==null?void 0:c.call(window,"(prefers-reduced-motion: reduce)"))!=null&&u.matches?"instant":"smooth",block:"start"})});for(const c of a)c.addEventListener("click",()=>{var u;o=c.dataset.category||"All",l(),c.classList.contains("pikk-shop-category")&&((u=e.querySelector("#pikkShopCatalog"))==null||u.scrollIntoView({behavior:"auto",block:"start"}))})}let Ks=null;function le(){R("#/spotlight")}function Pa(){Ks&&(clearInterval(Ks),Ks=null)}function po(e){const t=Math.max(0,Math.ceil(e/1e3)),s=Math.floor(t/60),a=t%60;return`${s}:${String(a).padStart(2,"0")}`}function Ci(e){return e==="freestyle"?"Live Freestyle":e==="beat"?"Beat":e==="music_video"?"Music Video":"Song"}function Wm(e){const t=T().user;return!t||!e?!1:(t.following||[]).includes(e)}function Ti(){return!!T().user}function Ym(){return I("24/7 Spotlight",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Join the FIFO Spotlight queue, vote Keep Going / Play Another, and chat from a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Continuous music showcase · votes ≠ paid advantage · TEST MODE"})}function Qm(e){return`
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
    </div>`}function Jm(e,{showSkip:t=!0}={}){const s=e.chipLabel||e.status||"House rotation",a=e.embed?Ye(e.embed,"rel=0"):"";return`
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
        ${e.cover?`<img class="sp-cover" src="${r(as(e.cover))}" alt="" />`:""}
        <div>
          <div class="sp-now-title">${r(e.title)}</div>
          <div class="sp-now-meta">${r(e.artist||"DatBoiSkeet")} · house catalog</div>
          <p class="muted sp-note">${r(e.note||"Approved catalog filler · not a live act")}</p>
          ${e.youtube?`<p style="margin:8px 0 0"><a class="btn ghost" href="${r(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a></p>`:""}
        </div>
      </div>
      ${t&&Ti()?`<div class="row wrap" style="gap:8px;margin-top:12px">
               <button class="btn" id="spSkipHouse">Skip house · next</button>
               <span class="muted" style="font-size:12px;align-self:center">Join queue takes the stage over house · Skip advances catalog</span>
             </div>`:""}
    </div>`}function Xm(e,t){if(!e||e.house){const b=e&&e.house?{id:e.id,title:e.title,artist:e.artist,embed:e.embed,youtube:e.youtube,chipLabel:e.chipLabel||"House · Music Video",note:e.note,cover:e.cover,kind:e.houseKind}:nr();return Jm(b)}const s=T().user,a=e.type==="freestyle",i=a&&e.endsAt?Math.max(0,e.endsAt-Date.now()):null,n=Object.keys(e.keepGoingVotes||{}).length,o=Object.keys(e.playAnotherVotes||{}).length,l=e.userId,d=Wm(l),c=s&&s.id===e.userId,u=e.reactions||{fire:0,heart:0,clap:0},m=a?`<div class="sp-timer" aria-live="polite">
         <div class="sp-timer-label">Freestyle timer · ext ${e.extensions||0}/${t.maxExtensions}</div>
         <div class="sp-timer-clock" id="spClock">${po(i||0)}</div>
         <div class="muted" style="font-size:12px">Keep Going ${n}/${t.keepGoing} · refresh recovers endsAt</div>
       </div>`:`<div class="sp-timer">
         <div class="sp-timer-label">Uploaded · play ${e.playCount||1}/${t.maxUploadStreak}</div>
         <div class="muted" style="font-size:12px">No real audio in TEST MODE · use End set when finished</div>
       </div>`,g=e.awaitingPlayAnother?`<div class="card sp-vote">
         <h3>Play Another?</h3>
         <p class="muted">Audience vote · ${o}/${t.playAnother} · window ends ${e.playAnotherDeadline?j(e.playAnotherDeadline):"soon"} (deadline-based)</p>
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
         </div>`:"",f=c?"":d?`<button class="btn ghost sp-follow" data-follow="${r(l)}" data-on="1">Following</button>`:`<button class="btn ghost sp-follow" data-follow="${r(l)}" data-on="0">Follow</button>`;return`
    <div class="card sp-stage">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">On stage · ${r(Ci(e.type))}</div>
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
    ${g}`}function Zm(e,t,s){const a=l=>Math.max(1,(l+(t?1:0))*2),i=(e||[]).map((l,d)=>`
      <li class="sp-q-row">
        <div>
          <strong>${r(l.username)}</strong>
          <span class="muted"> · ${r(Ci(l.type))} · ${r(l.title)}</span>
          <div class="muted" style="font-size:12px">${d===0?"Next up":`#${d+1}`} · ~${a(d)} min wait (stub)</div>
        </div>
        <div class="row wrap" style="gap:6px">
          ${s&&l.userId===s.id?'<button class="btn ghost sp-leave-q">Leave</button>':""}
          ${Ti()?`<button class="btn ghost sp-remove-q" data-qid="${r(l.id)}" title="Demo moderator">Remove</button>`:""}
        </div>
      </li>`).join(""),n=s&&(e||[]).some(l=>l.userId===s.id),o=s&&t&&!t.house&&t.userId===s.id;return`
    <div class="card sp-queue">
      <h3>FIFO queue</h3>
      <p class="muted" style="margin-top:0">${e.length?e.length+" waiting":"Queue empty — house catalog on stage"}${t&&!t.house?" · now: "+r(t.username):t&&t.house?" · house: "+r(t.chipLabel||"House"):""}</p>
      <ul class="sp-list">${i||'<li class="muted">No one waiting</li>'}</ul>
      ${n||o?`<p class="muted">You already have a spot (${o?"on stage":"in queue"}). One active spot per user.</p>
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
    </div>`}function eh(e){if(!Ti())return"";const t=ee()?"Admin":"Demo moderator · TEST MODE",s=e&&!e.house;return`
    <div class="card sp-mod">
      <h3>Moderator controls</h3>
      <p class="muted" style="margin-top:0"><span class="chip">${r(t)}</span> Skip / remove for safety · fair order otherwise. House Skip → next queue or next house.</p>
      <div class="row wrap" style="gap:8px">
        <button class="btn" id="spSkip" ${e?"":"disabled"}>Skip current</button>
        ${s&&e.type!=="freestyle"&&!e.awaitingPlayAnother?'<button class="btn ghost" id="spEndSet">End set</button>':""}
      </div>
    </div>`}function th(e){const t=T().user;return!e||e.house||e.type==="freestyle"||e.awaitingPlayAnother||!t||t.id!==e.userId?"":`
    <div class="card">
      <h3>Your set</h3>
      <p class="muted">No real audio file — tap End set when your demo track “finishes”.</p>
      <button class="btn primary" id="spEndSetSelf">End set</button>
    </div>`}function sh(e){return!e||e.house?"":`
    <div class="card sp-chat-card">
      <h3>Stage chat</h3>
      <div class="sp-chat" id="spChat">${(e.chat||[]).slice(-20).map(s=>`<div class="sp-chat-row ${s.system?"system":""}"><strong>${r(s.username)}</strong>${r(s.text)}</div>`).join("")||'<div class="muted">No messages yet</div>'}</div>
      <form id="spChatForm" class="row" style="gap:8px;margin-top:8px">
        <input id="spChatInput" maxlength="200" placeholder="Say something…" style="flex:1" />
        <button class="btn primary" type="submit">Send</button>
      </form>
    </div>`}function ah(e){return e.length?`
    <div class="card">
      <h3>Recent stage</h3>
      <ul class="sp-list">${e.slice(0,12).map(s=>`<li><strong>${r(s.username)}</strong> · ${r(Ci(s.type))} · ${r(s.title)}
         <span class="muted"> · ${r(s.reason||"ended")} · ${j(s.endedAt)}</span></li>`).join("")}</ul>
    </div>`:`
      <div class="card">
        <h3>Recent stage</h3>
        <p class="muted" style="margin:0">No completed turns yet.</p>
      </div>`}function ih(){oe();const e=T().user;if(!e)return Ym();const t=ne(),s=mc(12);return I("24/7 Spotlight",`${Qm(t.thresholds)}
     ${Xm(t.nowPlaying,t.thresholds)}
     ${th(t.nowPlaying)}
     ${eh(t.nowPlaying)}
     ${Zm(t.queue,t.nowPlaying,e)}
     ${sh(t.nowPlaying)}
     ${ah(s)}`,{lead:"Always-on music showcase · FIFO queue · votes ≠ wagers · TEST MODE"})}function nh(e){var n,o,l,d,c,u,m,g,f,b,y;Pa(),oe();const s=ne().nowPlaying;if(s&&s.type==="freestyle"&&s.endsAt){const v=e.querySelector("#spClock");Ks=setInterval(()=>{oe();const w=ne().nowPlaying;if(!w||w.type!=="freestyle"||!w.endsAt){Pa(),le();return}const x=Math.max(0,w.endsAt-Date.now());v&&(v.textContent=po(x)),x<=0&&(Pa(),oe(),le())},250)}if(s&&s.awaitingPlayAnother&&s.playAnotherDeadline){const v=Math.max(0,s.playAnotherDeadline-Date.now())+50;setTimeout(()=>{oe(),le()},Math.min(v,35e3))}(n=e.querySelector("#spJoinForm"))==null||n.addEventListener("submit",v=>{var M,$,B;v.preventDefault();const w=((M=e.querySelector("#spType"))==null?void 0:M.value)||"song",x=(($=e.querySelector("#spTitle"))==null?void 0:$.value)||"",D=((B=e.querySelector("#spArtist"))==null?void 0:B.value)||"",k=ac({type:w,title:x,artist:D});if(k.error==="signin")return h("Sign in first");if(k.error==="already_queued")return h("You already have a queue/stage spot");h(w==="freestyle"?"Freestyle — you're up or in queue":"Joined Spotlight queue"),le()}),(o=e.querySelector("#spLeaveQueue"))==null||o.addEventListener("click",()=>{if(ji().error)return h("Not in queue");h("Left queue"),le()}),e.querySelectorAll(".sp-leave-q").forEach(v=>{v.addEventListener("click",()=>{ji(),h("Left queue"),le()})}),e.querySelectorAll(".sp-remove-q").forEach(v=>{v.addEventListener("click",()=>{ic(v.getAttribute("data-qid")),h("Removed from queue (demo mod)"),le()})});const a=()=>{ne().nowPlaying,nc();const v=ne().nowPlaying;v&&v.house?h("Next house · "+(v.chipLabel||"House")):h(v?"Skipped · "+(v.username||"next")+" on stage":"Skipped"),le()};(l=e.querySelector("#spSkip"))==null||l.addEventListener("click",a),(d=e.querySelector("#spSkipHouse"))==null||d.addEventListener("click",a);const i=()=>{const v=rc();if(v.error==="max_streak"||v.ok){h(v.error==="max_streak"?"Max 3 in a row — advancing":"Play Another? vote open"),le();return}v.error?h("Cannot end set: "+v.error):le()};(c=e.querySelector("#spEndSet"))==null||c.addEventListener("click",i),(u=e.querySelector("#spEndSetSelf"))==null||u.addEventListener("click",i),(m=e.querySelector("#spKeepGoing"))==null||m.addEventListener("click",()=>{const v=oc();if(v.error==="already_voted")return h("Already voted");if(v.error==="max_extensions")return h("Max extensions reached");if(v.error)return h(v.error);h("Keep Going counted"),le()}),(g=e.querySelector("#spSimKeepGoing"))==null||g.addEventListener("click",()=>{lc(2),h("+2 simulated fan votes"),le()}),(f=e.querySelector("#spPlayAnother"))==null||f.addEventListener("click",()=>{const v=cc();if(v.error==="already_voted")return h("Already voted");if(v.error)return h(v.error);h("Play Another vote counted"),le()}),(b=e.querySelector("#spSimPlayAnother"))==null||b.addEventListener("click",()=>{dc(2),h("+2 simulated fan votes"),le()}),e.querySelectorAll(".sp-follow").forEach(v=>{v.addEventListener("click",()=>{const w=v.getAttribute("data-follow");v.getAttribute("data-on")==="1"?(aa(w),h("Unfollowed")):(sa(w),h("Following")),le()})}),e.querySelectorAll(".sp-react").forEach(v=>{v.addEventListener("click",()=>{pc(v.getAttribute("data-kind")||"fire"),le()})}),(y=e.querySelector("#spChatForm"))==null||y.addEventListener("submit",v=>{v.preventDefault();const w=e.querySelector("#spChatInput"),x=uc((w==null?void 0:w.value)||"");if(x.error!=="empty"){if(x.error)return h(x.error);w&&(w.value=""),le()}})}const uo="Not available — WebRTC + age assurance required before launch";function Xt(){R("#/connect")}function rh(){var u;const e=xr(),s=lt().selected||[],a=Wc(),i=Cr(),n=Number(i==null?void 0:i.max)||0,o=!!a,l=e.map(m=>{const g=s.includes(m.id),f=m.connected?`<span class="chip">Linked${m.handle?" · "+r(m.handle):""}</span>`:'<span class="chip muted-chip">Not linked</span>';return`
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
                   <input type="checkbox" class="connect-mp-dest" data-id="${r(m.id)}" ${g?"checked":""} ${o?"disabled":""} />
                   Include
                 </label>`:`<button type="button" class="btn primary connect-mp-connect" data-id="${r(m.id)}">Link</button>`}
        </div>
      </div>`}).join(""),d=s.length,c=o?`<button type="button" class="btn danger" id="connectMpEnd">End multi-platform session</button>
       <span class="chip">LIVE · ${r(String(((u=a==null?void 0:a.destinations)==null?void 0:u.length)||d))} dest · TEST MODE</span>`:`<button type="button" class="btn primary" id="connectMpGoLive" ${d?"":"disabled"}>Go live to selected</button>
       <span class="chip">${d}/${n} selected · cap ${n}</span>`;return`
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
    </div>`}function Ya(){const e=Tr(),t=e.ageConfirmed&&e.rulesAccepted;return I("PIKK Connect",`<div class="connect-monkey" id="connectMonkey">
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
          <strong>${uo}</strong>
          <p class="muted small">TEST MODE — this is a preview, not a real matching request. No match was created, no camera was requested, and no WebRTC connection was attempted.</p>
        </div>
        <p class="muted small" style="margin-top:10px">Controls are mockups until launch. Prefs save on this device.</p>
      </div>

      ${rh()}

      <div class="card">
        <p class="muted" style="margin:0 0 8px">PIKK Connect <strong>does not replace</strong> Live, Messages, or Spotlight. Meanwhile:</p>
        <a class="btn" href="#/live">Live</a> <a class="btn" href="#/messages">Messages</a> <a class="btn" href="#/spotlight">Spotlight</a> <a class="btn ghost" href="#/shorts">Shorts / Clips</a>
      </div>
    </div>`,{lead:"1:1 discovery shell · multi-platform go-live · TEST MODE",badge:"Shell · no WebRTC"})}function oh(e){var t,s;e.querySelectorAll(".connect-mp-connect").forEach(a=>{a.addEventListener("click",()=>{const i=a.dataset.id,n=Fc(i,"");if(n!=null&&n.error)return h(String(n.error));h(`Linked ${i} · TEST MODE`),Xt()})}),e.querySelectorAll(".connect-mp-disconnect").forEach(a=>{a.addEventListener("click",()=>{Kc(a.dataset.id),h("Unlinked · TEST MODE"),Xt()})}),e.querySelectorAll(".connect-mp-dest").forEach(a=>{a.addEventListener("change",()=>{Vc(a.dataset.id),Xt()})}),(t=e.querySelector("#connectMpGoLive"))==null||t.addEventListener("click",()=>{const a=zc();if((a==null?void 0:a.error)==="signin")return h("Sign in first");if((a==null?void 0:a.error)==="none_selected")return h("Select at least one destination");if(a!=null&&a.error)return h(String(a.error));h("Multi-platform session started · TEST MODE"),Xt()}),(s=e.querySelector("#connectMpEnd"))==null||s.addEventListener("click",()=>{Hc(),h("Session ended"),Xt()})}function Qa(e=document,t){var i,n,o;const s=()=>{if(typeof t=="function")return t();e.innerHTML=Ya(),Qa(e)};(i=e.querySelector("#connect-age"))==null||i.addEventListener("change",l=>{const d=l.target.checked;Vi(d?{ageConfirmed:!0}:{ageConfirmed:!1,rulesAccepted:!1}),s()}),(n=e.querySelector("#connect-rules"))==null||n.addEventListener("change",l=>{Vi({rulesAccepted:l.target.checked}),s()}),(o=e.querySelector("#connect-start"))==null||o.addEventListener("click",()=>{const l=e.querySelector("#connect-blocked");l==null||l.removeAttribute("hidden"),h(uo)}),oh(e);const a=Xe().elementId;(a==="connect-random-chat"||a==="connect-multistream")&&requestAnimationFrame(()=>{var l;(l=e.querySelector(`#${a}`))==null||l.scrollIntoView({behavior:"smooth",block:"start"})})}const mo="pikk_forum_local_v1",ds=[["music","Music & Artists","♫"],["business","Business & Money","$"],["relationships","Relationships","♡"],["gaming","Gaming","♜"],["sports","Sports","★"],["entertainment","Entertainment","▶"],["lifestyle","Lifestyle","✦"],["general","General Discussion","#"]],Ja=new Set(ds.map(e=>e[0])),Zt=e=>String(e||"").trim();function es(){try{const e=JSON.parse(localStorage.getItem(mo)||"{}");return{posts:Array.isArray(e.posts)?e.posts.filter(t=>t&&Ja.has(t.topic)).slice(-150):[],votes:e.votes&&typeof e.votes=="object"?e.votes:{},hidden:Array.isArray(e.hidden)?e.hidden:[]}}catch{return{posts:[],votes:{},hidden:[]}}}function qs(e){try{return localStorage.setItem(mo,JSON.stringify(e)),!0}catch{return h("Local storage unavailable"),!1}}function lh(e,t,s,a){let i=e.posts.filter(o=>!e.hidden.includes(o.id)&&(s==="all"||o.topic===s));const n=o=>Object.entries(e.votes).reduce((l,d)=>l+(d[0].startsWith(o.id+":")&&Number(d[1])||0),0);return i.sort((o,l)=>{var d,c;return a==="top"?n(l)-n(o):a==="discussed"?(((d=l.replies)==null?void 0:d.length)||0)-(((c=o.replies)==null?void 0:c.length)||0):l.when-o.when}),i.length?i.map(o=>{var u;const l=((u=ds.find(m=>m[0]===o.topic))==null?void 0:u[1])||"Community",d=Array.isArray(o.replies)?o.replies:[],c=Number(e.votes[o.id+":"+((t==null?void 0:t.id)||"guest")])||0;return'<article class="pikk-forum-post"><div class="pikk-forum-votes"><button data-fvote="1" data-id="'+r(o.id)+'" aria-label="Upvote" aria-pressed="'+(c===1)+'" '+(t?"":"disabled")+">▲</button><b>"+n(o)+'</b><button data-fvote="-1" data-id="'+r(o.id)+'" aria-label="Downvote" aria-pressed="'+(c===-1)+'" '+(t?"":"disabled")+'>▼</button></div><div class="pikk-forum-post-content"><p class="pikk-forum-meta">'+r(l)+" · u/"+r(o.author)+" · local preview</p><h3>"+r(o.title)+'</h3><p class="pikk-forum-text">'+r(o.body)+'</p><button class="pikk-forum-reply-button" data-fopen="'+r(o.id)+'">▤ '+d.length+" replies</button> "+(t&&t.id!==o.owner?'<button class="pikk-forum-reply-button" data-freport="'+r(o.id)+'">◇ Hide / report locally</button>':"")+'<div class="pikk-forum-thread" data-thread="'+r(o.id)+'" hidden>'+d.map(m=>'<p class="pikk-forum-comment"><strong>'+r(m.author)+"</strong> "+r(m.body)+"</p>").join("")+(t?'<form data-freply="'+r(o.id)+'"><label>Reply</label><textarea maxlength="1000" required rows="2" placeholder="Join the discussion"></textarea><button class="btn primary" type="submit">Reply · local</button></form>':'<a href="#/profile" class="btn ghost">Sign in to reply</a>')+"</div></div></article>"}).join(""):'<div class="pikk-forum-empty">No discussions yet. Start the first conversation on this browser.</div>'}function ch(){const e=T().user,t=ds.map(s=>'<button data-ftopic="'+s[0]+'" type="button" aria-pressed="false"><span>'+s[2]+"</span>"+r(s[1])+"</button>").join("");return I("PIKK Communities",'<section class="pikk-forum-hero"><p class="kicker">PIKK CONNECT · TOPICS & DISCUSSIONS</p><h2>Find your people. <span>Start the conversation.</span></h2><p>Explore communities around what matters to you. Discuss, upvote, reply and discover new ideas.</p><a class="btn ghost" href="#/community">PIKK Lounge</a> <a class="btn ghost" href="#/posts">Social Posts</a></section><p class="pikk-forum-warning"><b>TEST MODE:</b> These conversations and votes are saved only in this browser. No public posting, account verification or server-side moderation is active.</p><div id="pikkForum" class="pikk-forum-layout"><aside class="pikk-forum-sidebar"><h3>Explore topics</h3><button class="on" data-ftopic="all" aria-pressed="true">✦ All discussions</button>'+t+'</aside><main class="pikk-forum-center"><nav class="pikk-forum-sort" aria-label="Sort posts"><button class="on" data-fsort="new" aria-pressed="true">✦ New</button><button data-fsort="top" aria-pressed="false">▲ Top</button><button data-fsort="discussed" aria-pressed="false">▤ Discussed</button></nav><div class="pikk-forum-topic-board"><h3>Discover communities</h3><div class="pikk-forum-topic-cards">'+ds.map(s=>'<button data-ftopic="'+s[0]+'" aria-pressed="false"><span>'+s[2]+"</span><strong>"+r(s[1])+"</strong></button>").join("")+'</div></div><section class="pikk-forum-compose"><h3>Start a discussion</h3>'+(e?'<form id="pikkForumForm"><label for="pikkForumTopic">Community</label><select id="pikkForumTopic">'+ds.map(s=>'<option value="'+s[0]+'">'+r(s[1])+"</option>").join("")+'</select><label for="pikkForumTitle">Title</label><input id="pikkForumTitle" required maxlength="110" placeholder="What is on your mind?" /><label for="pikkForumBody">Discussion</label><textarea id="pikkForumBody" required maxlength="4000" rows="3" placeholder="Ask a question or share a thought..."></textarea><button class="btn primary" type="submit">Publish locally · TEST MODE</button></form>':'<p class="muted">Sign in with a PIKK demo account to write discussions and vote.</p><a href="#/profile" class="btn primary">Sign in</a>')+'</section><section><h3 class="pikk-forum-feed-title">Community discussions</h3><div id="pikkForumFeed"></div></section></main><aside class="pikk-forum-info"><h3>About PIKK Communities</h3><p>Topic-based discussion with an original PIKK look, separate from the live Lounge and social feed.</p><h3>Community safety</h3><p>Respect others. No harassment, hate, scams or personal information. Reports on this preview only hide posts on your device.</p><a href="#/guidelines">Community Guidelines</a></aside></div>',{lead:"Topic communities · discussions · voting · replies · local preview"})}function dh(e){const t=e.querySelector("#pikkForum");if(!t)return;let s="all",a="new";const i=()=>T().user,n=t.querySelector("#pikkForumFeed"),o=()=>{n.innerHTML=lh(es(),i(),s,a)},l=new URLSearchParams(location.hash.split("?")[1]||"").get("topic");Ja.has(l)&&(s=l);function d(c,u,m){t.querySelectorAll(c).forEach(g=>{let f=g.dataset[u]===m;g.classList.toggle("on",f),g.setAttribute("aria-pressed",String(f))})}d("[data-ftopic]","ftopic",s),t.addEventListener("click",c=>{const u=c.target.closest("[data-ftopic]");if(u){s=u.dataset.ftopic,d("[data-ftopic]","ftopic",s);const y=t.querySelector("#pikkForumTopic");y&&s!=="all"&&(y.value=s),o();return}const m=c.target.closest("[data-fsort]");if(m){a=m.dataset.fsort,d("[data-fsort]","fsort",a),o();return}const g=c.target.closest("[data-fopen]");if(g){const y=t.querySelector('[data-thread="'+g.dataset.fopen+'"]');y&&(y.hidden=!y.hidden);return}const f=c.target.closest("[data-fvote]");if(f&&i()){const y=es(),v=f.dataset.id+":"+i().id,w=Number(f.dataset.fvote);y.votes[v]=y.votes[v]===w?0:w,qs(y)&&o();return}const b=c.target.closest("[data-freport]");if(b&&i()){if(!confirm("Hide this post on this browser? This will NOT submit a report to a server."))return;const y=es();y.hidden.push(b.dataset.freport),qs(y)&&o(),h("Hidden locally only — no server report submitted")}}),t.addEventListener("submit",c=>{var m,g,f,b;const u=c.target;if(!(!(u instanceof HTMLFormElement)||!i())){if(c.preventDefault(),u.id==="pikkForumForm"){const y=Zt((m=u.querySelector("input"))==null?void 0:m.value),v=Zt((g=u.querySelector("textarea"))==null?void 0:g.value),w=(f=u.querySelector("select"))==null?void 0:f.value;if(!y||!v||!Ja.has(w))return;const x=es();x.posts.push({id:"local-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),owner:i().id,author:Zt(i().username).slice(0,30)||"Member",title:y,body:v,topic:w,when:Date.now(),replies:[]}),qs(x)&&(s=w,d("[data-ftopic]","ftopic",s),u.reset(),o(),h("Saved only on this browser · TEST MODE"))}else if(u.dataset.freply){const y=Zt((b=u.querySelector("textarea"))==null?void 0:b.value);if(!y)return;const v=es(),w=v.posts.find(x=>x.id===u.dataset.freply);if(!w)return;if(w.replies||(w.replies=[]),w.replies.push({author:Zt(i().username).slice(0,30)||"Member",body:y}),qs(v)){o();const x=t.querySelector('[data-thread="'+w.id+'"]');x&&(x.hidden=!1),h("Reply saved locally")}}}}),o()}function ph(){const e=he.filter(s=>(s.category||"")==="Music Videos"&&s.embed);return(e.length?e:he.filter(s=>s.embed)).slice(0,10).map((s,a)=>({id:`clip_${s.id}`,videoId:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube,blurb:a%3===0?"Clip cut · DEMO":a%3===1?"Highlight · DEMO":"Short · DEMO"}))}function uh(e,t){return`
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
    </article>`}function yn(){const e=ph(),s=`
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
      ${e.map(uh).join("")||'<p class="muted">No demo clips seeded.</p>'}
    </div>
    <p class="muted" style="margin:12px 0 0;font-size:12px;text-align:center">
      End of DEMO feed · ${e.length} clips · Scroll for more when real clip uploads ship
    </p>`;return I("Shorts / Clips",s,{lead:"Posts · short-form feed · Picture / Short / Video create on Posts · TEST MODE"})}function kn(e){va(e),e.querySelectorAll(".shorts-card").forEach(t=>{t.addEventListener("focusin",()=>{t.classList.add("is-focus")})}),e.querySelector(".shorts-card")||h("No demo clips · add MVs in data.js")}const ea=[{id:"ny",name:"NY",tag:"East coast",still:"/blockwars-preview/preview-ny-still.jpg",fighter:"Brooklyn Brawler",blurb:"Street-pressured power from the five boroughs. Heavy combos, tight corners — TEST MODE teaser only."},{id:"la",name:"LA",tag:"West coast",still:"/blockwars-preview/preview-la-still.jpg",fighter:"Sunset Striker",blurb:"Flashy footwork under neon skies. Style meets speed — Coming Soon, not a real match engine."},{id:"chi",name:"Chicago",tag:"Midwest",still:"/blockwars-preview/preview-chi-still.jpg",fighter:"Windy City Wall",blurb:"Defense-first grit from the lakefront. Hold the block — lobby demo only, no live fights yet."}];function mh(e){return ea.map(t=>{const s=t.id===e?" is-active":"",a=t.id===e?"true":"false";return`<button type="button" class="bw-city-card${s}" data-city="${r(t.id)}" aria-pressed="${a}" aria-label="${r(t.name)} fighter"><img src="${r(t.still)}" alt="" width="120" height="160" loading="lazy" decoding="async" /><span class="bw-city-meta"><span class="bw-city-name">${r(t.name)}</span><span class="bw-city-tag">${r(t.tag)}</span></span></button>`}).join("")}function hh(e){return`<div class="bw-focus" id="bwFocus" data-city="${r(e.id)}"><div class="bw-focus-still"><img id="bwFocusImg" src="${r(e.still)}" alt="${r(e.fighter)}" width="110" height="140" /></div><div class="bw-focus-copy"><p class="bw-focus-city">${r(e.name)} · ${r(e.tag)}</p><h3 id="bwFocusName">${r(e.fighter)}</h3><p id="bwFocusBlurb">${r(e.blurb)}</p></div></div>`}function gh(){const e=ea[0],t=`
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
        ${mh(e.id)}
      </div>

      ${hh(e)}

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
    </div>`;return I("Block Wars",t,{lead:"Coming Soon · lobby fighter select · preview video · not playable yet."})}function fh(e,t){const s=ea.find(d=>d.id===t)||ea[0];e.querySelectorAll(".bw-city-card").forEach(d=>{const c=d.getAttribute("data-city")===s.id;d.classList.toggle("is-active",c),d.setAttribute("aria-pressed",c?"true":"false")});const a=e.querySelector("#bwFocus"),i=e.querySelector("#bwFocusImg"),n=e.querySelector("#bwFocusName"),o=e.querySelector("#bwFocusBlurb"),l=e.querySelector(".bw-focus-city");a&&a.setAttribute("data-city",s.id),i&&(i.src=s.still,i.alt=s.fighter),n&&(n.textContent=s.fighter),o&&(o.textContent=s.blurb),l&&(l.textContent=`${s.name} · ${s.tag}`)}function vh(e){var i,n;(i=e.querySelector("#bwCityGrid"))==null||i.addEventListener("click",o=>{const l=o.target.closest(".bw-city-card");l&&(o.preventDefault(),fh(e,l.getAttribute("data-city")))}),(n=e.querySelector("#bwEnterArena"))==null||n.addEventListener("click",o=>{o.preventDefault(),h("Block Wars arena is Coming Soon — lobby demo only. No match engine yet.")});const t=e.querySelector("#bwCsVideo"),s=e.querySelector("#bwCsPlay");if(!t)return;const a=()=>{if(!s)return;const o=t.paused||t.ended;s.hidden=!o,s.setAttribute("aria-hidden",o?"false":"true")};s==null||s.addEventListener("click",o=>{o.preventDefault(),t.play().catch(()=>{})}),t.addEventListener("play",()=>{Bt(),a()}),t.addEventListener("pause",()=>{Qe(),a()}),t.addEventListener("ended",()=>{Qe(),a()}),t.addEventListener("pointerdown",()=>{t.paused||Bt()}),a()}function bh(){return I("PIKK Arcade",`
    <section class="pikk-arcade-intro card" aria-label="PIKK Arcade">
      <div class="pikk-arcade-heading">
        <div>
          <p class="kicker">Play · Compete · Hang out</p>
          <div class="pikk-arcade-brand"><img src="${r(Xs({artwork:"/brand/pikk-official-approved.jpg"}))}" alt="PIKK" loading="eager" decoding="async"/><span>ARCADE</span></div>
          <p>15 original game concepts. Find your favorites, see the art, and follow their development.</p>
        </div>
        <span class="pikk-arcade-icon" aria-hidden="true">🎮</span>
      </div>
      <p class="pikk-arcade-disclosure">ALL GAMES COMING SOON · Gallery previews, not playable releases. Play Chips have no cash value or cash-out.</p>
    </section>
    <div class="pikk-arcade-toolbar"><strong>15 upcoming games</strong><span>PLAY • COMPETE • HANG OUT</span></div>
    <div class="pikk-arcade-grid">
      ${Js.map((e,t)=>`
        <article class="pikk-arcade-card pikk-game-${r(e.theme)}">
          <div class="pikk-arcade-card-header"><span class="pikk-arcade-number">${t+1}</span><h3>${r(e.name)}</h3></div>
          <div class="pikk-arcade-art" aria-label="${r(e.name)} preview artwork">
            ${e.artwork?`<img src="${r(Xs(e))}" alt="${r(e.name)} concept artwork" loading="lazy" decoding="async"/>`:`<span class="pikk-arcade-symbol" aria-hidden="true">${e.icon}</span>`}
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
  `,{lead:"Fifteen upcoming games · mobile-first catalog · previews only"})}function yh(e){const t=Js.length,s=(Math.trunc(Number(e)||0)%t+t)%t,a=Js[s];return{index:s,total:t,title:a.name,description:a.description,players:a.players,image:Xs(a)}}function kh(e){const t=e.querySelector(".pikk-arcade-grid"),s=e.querySelector("#pikkArcadeLightbox");if(!t||!s||typeof s.showModal!="function")return;let a=0,i=null;const n=s.querySelector("[data-arcade-full-image]"),o=s.querySelector("[data-arcade-title]"),l=s.querySelector("[data-arcade-description]"),d=s.querySelector("[data-arcade-players]"),c=s.querySelector("[data-arcade-counter]"),u=m=>{const g=yh(m);a=g.index,n.src=g.image,n.alt=g.title+" concept artwork",o.textContent=g.title,l.textContent=g.description,d.textContent=g.players+(g.players==="1"?" Player · Preview only":" Players · Preview only"),c.textContent=String(a+1).padStart(2,"0")+" / "+g.total};t.addEventListener("click",m=>{const g=m.target.closest("[data-game-preview]");g&&(i=g,u(g.dataset.gamePreview),s.showModal())}),s.addEventListener("click",m=>{m.target===s||m.target.closest("[data-arcade-close]")?s.close():m.target.closest("[data-arcade-prev]")?u(a-1):m.target.closest("[data-arcade-next]")&&u(a+1)}),s.addEventListener("keydown",m=>{(m.key==="ArrowLeft"||m.key==="ArrowRight")&&(m.preventDefault(),u(a+(m.key==="ArrowRight"?1:-1)))}),s.addEventListener("close",()=>{i!=null&&i.isConnected&&i.focus()})}function wh(){return I("PIKK Dating & Connections",`
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
  `,{lead:"Dating · mutual matches · live connections"})}const ho=60,Sh=10,$h=10,wn=3;function xh(){return{phase:"round",round:1,seconds:ho,votes:[0,0],scores:[0,0],roundWinners:[],gifts:[0,0],rematchVotes:[0,0],winner:null,tieBreaker:!1}}function Eh(e,t){if(e.phase!=="vote"||![0,1].includes(t))return e;const s=[...e.votes];return s[t]+=1,{...e,votes:s}}function Ah(e,t){if(e.phase!=="rematch")return e;const s=[...e.rematchVotes];return s[t?0:1]+=1,{...e,rematchVotes:s}}function Ch(e){if(!["round","vote","rematch"].includes(e.phase))return e;if(e.seconds>1)return{...e,seconds:e.seconds-1};if(e.phase==="round")return{...e,phase:"vote",seconds:Sh,votes:[0,0],voted:!1};if(e.phase==="vote"){const t=e.votes[0]===e.votes[1]?null:e.votes[0]>e.votes[1]?0:1,s=[...e.scores];t!==null&&(s[t]+=1);const a=[...e.roundWinners,t];return e.round>=wn&&s[0]!==s[1]?{...e,scores:s,roundWinners:a,winner:s[0]>s[1]?0:1,phase:"rematch",seconds:$h,rematchVoted:!1}:{...e,scores:s,roundWinners:a,phase:"round",round:e.round+1,seconds:ho,votes:[0,0],voted:!1,tieBreaker:e.round>=wn}}return{...e,phase:"finished",seconds:0}}let U=null,Me=null;function Bs(){const e=document.getElementById("roast-demo");if(!e||!U){Me&&clearInterval(Me),Me=null;return}const t=U.phase,s=t==="round"?`Round ${U.round}${U.tieBreaker?" · Final tiebreaker":""}`:t==="vote"?"Vote for the round winner":t==="rematch"?"Run It Back?":"Match finished";e.innerHTML=`<h3>${s}</h3><p><strong>${String(Math.floor(U.seconds/60)).padStart(2,"0")}:${String(U.seconds%60).padStart(2,"0")}</strong></p><p>Contestant A: ${U.scores[0]} rounds · Contestant B: ${U.scores[1]} rounds</p>${t==="vote"?'<button type="button" data-roast-vote="0">Vote A</button> <button type="button" data-roast-vote="1">Vote B</button>':""}${t==="rematch"?`<p>Winner: Contestant ${U.winner===0?"A":"B"}</p><button type="button" data-roast-rematch="yes">Run It Back? Yes</button> <button type="button" data-roast-rematch="no">No</button>`:""}<p class="muted">Local interactive simulation only. Votes are not shared between viewers. No live video or gifts are connected.</p>`}function Th(){Me&&clearInterval(Me),Me=null,U=null;const e=document.getElementById("roast-start");e&&(e.addEventListener("click",()=>{U=xh(),Bs(),Me&&clearInterval(Me),Me=setInterval(()=>{U=Ch(U),Bs(),U.phase==="finished"&&(clearInterval(Me),Me=null)},1e3)}),document.getElementById("roast-demo").addEventListener("click",t=>{const s=t.target.closest("[data-roast-vote]"),a=t.target.closest("[data-roast-rematch]");s&&U&&U.phase==="vote"&&!U.voted&&(U={...Eh(U,Number(s.dataset.roastVote)),voted:!0},Bs()),a&&U&&U.phase==="rematch"&&!U.rematchVoted&&(U={...Ah(U,a.dataset.roastRematch==="yes"),rematchVoted:!0},Bs())}))}function Dh(){return I("PIKK Roast Arena",`
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
  `,{lead:"Live comedy competitions · audience votes and gifts tracked separately"})}const ns={instagram:"Instagram",tiktok:"TikTok",facebook:"Facebook",youtube:"YouTube",x:"X",snapchat:"Snapchat",other:"Other"};function Mh(e){return((e==null?void 0:e.path)||"")==="/refer"?"refer":"share"}function se(e){R(e==="refer"?"#/refer":"#/share")}function Be(){const{user:e}=T();if(e)return e;const t=Nt("DemoCreator");return h("Signed in as DemoCreator · local demo"),t||T().user}function Lh(e){const t=Number(e)-Date.now();if(t<=0)return"24h window ended (demo)";const s=Math.floor(t/36e5),a=Math.floor(t%36e5/6e4);return`${s}h ${a}m left`}function Ph(e){return`<div class="admin-type-tabs rewards-tabs" style="grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:14px" role="tablist">
    <a class="admin-type-tab ${e==="share"?"on":""}" href="#/share" role="tab" aria-selected="${e==="share"}">Share &amp; Earn</a>
    <a class="admin-type-tab ${e==="refer"?"on":""}" href="#/refer" role="tab" aria-selected="${e==="refer"}">Refer &amp; Earn</a>
  </div>`}function Ih(){const{user:e}=T(),t=J(),s=t.platformsLinked||[],a=t.challenge,i=t.submissions||[],n=t.rewardsClaimed||[],o=yr(),l=kr(),d=$c(),c=s.length>0?`<ul class="list-plain">${s.map(v=>`<li>
          <span><strong>${r(ns[v.platform]||v.platform)}</strong>
            ${v.handle?`<br/><span class="muted" style="font-size:12px">@${r(String(v.handle).replace(/^@+/,""))}</span>`:""}
            ${v.url?`<br/><span class="muted" style="font-size:11px">${r(v.url)}</span>`:""}
          </span>
          <button class="btn ghost" type="button" data-unlink="${r(v.id)}">Remove</button>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No platforms linked yet — optional. Never asked for social passwords.</p>',u=Fi().filter(v=>!s.some(w=>w.platform===v)).map(v=>`<option value="${v}">${r(ns[v]||v)}</option>`).join("");let m="";if(!a)m=`<div class="card">
      <h3>24-hour social challenge</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Optional promo · separate from paid Clippers. Post official DBS ad + tracked link · keep live 24h · manual/demo verification (not guaranteed auto-check).</p>
      <button class="btn primary" id="shStart" >Start challenge · TEST MODE</button>
    </div>`;else{const v=a.status==="active",w=Date.now()>=Number(a.endsAt);m=`<div class="card">
      <div class="row wrap" style="gap:8px;margin-bottom:8px">
        <span class="chip">${v?w?"Window ended · demo":"Active":"Ended"}</span>
        <span class="chip">TEST MODE</span>
        <span class="chip">${r(Lh(a.endsAt))}</span>
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
    </div>`}const g=Fi().map(v=>`<option value="${v}">${r(ns[v]||v)}</option>`).join(""),f=i.length>0?`<ul class="list-plain">${i.map(v=>`<li style="align-items:flex-start">
          <span style="flex:1;min-width:0">
            <strong>${r(ns[v.platform]||v.platform)}</strong>
            <span class="chip">${r(v.status)}</span>
            <br/><a href="${r(v.postUrl)}" target="_blank" rel="noopener" style="font-size:13px;word-break:break-all">${r(v.postUrl)}</a>
            <br/><span class="muted" style="font-size:11px">${j(v.submittedAt)} · ${r(v.note||"")}</span>
          </span>
          ${v.status==="pending"?`<span class="row wrap" style="gap:4px">
                  <button class="btn" type="button" data-verify="${r(v.id)}">Verify · demo</button>
                  <button class="btn ghost" type="button" data-reject="${r(v.id)}">Reject</button>
                </span>`:""}
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No post URLs submitted yet.</p>',b=d.map(v=>{const w=n.some(D=>D.tierId===v.id),x=l.some(D=>D.id===v.id);return`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${r(v.label)}</strong><br/><span class="muted" style="font-size:11px">≥${v.minVerified} verified platform${v.minVerified===1?"":"s"}${v.requireAllLinked?" · all linked (≥3)":""}</span></td>
        <td style="padding:8px 4px">${w?'<span class="chip">Claimed</span>':x?`<button class="btn primary" type="button" data-claim-share="${r(v.id)}">Claim</button>`:`<span class="muted" style="font-size:12px">Locked (${o}/${v.minVerified})</span>`}</td>
      </tr>`}).join(""),y=n.length>0?`<ul class="list-plain">${n.map(v=>`<li>
          <span>${r(v.label)}<br/><span class="muted" style="font-size:11px">${j(v.at)} · TEST MODE</span></span>
          <span class="chip">${r(v.kind)}</span>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No rewards claimed yet.</p>';return`
    <div class="card">
      <p class="muted" style="margin:0;font-size:13px">
        Optional 24h social promo for registered users. Link platforms by <strong>name + handle/URL only</strong> — never passwords.
        Verification is <strong>manual/demo</strong> (not guaranteed auto-check of continuous 24h visibility).
      </p>
      <div class="row wrap" style="margin-top:10px;gap:8px">
        <span class="chip">Verified platforms: ${o}</span>
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
  `}function _h(){const{user:e}=T(),t=Ft(),s=wr(),a=t.invitees||[],i=Sr(),n=$r(),o=Pc(),l=t.milestonesClaimed||[],d=xt(),c=o.find(b=>i<b.n),u=c?`${i} / ${c.n} verified active → ${c.label}`:i>=100?"All milestones unlocked":`${i} verified active`,m=a.length>0?`<ul class="list-plain">${a.map(b=>{const y=(b.activeDays||[]).length;return`<li style="align-items:flex-start">
            <span style="flex:1;min-width:0">
              <strong>${r(b.username)}</strong>
              <span class="chip">${r(b.status)}</span>
              ${b.flaggedFraud?'<span class="chip">Fraud flag</span>':""}
              ${b.welcomeClaimed?'<span class="chip">Welcome claimed</span>':""}
              <br/><span class="muted" style="font-size:12px">Active days: ${y}/3 · ${r((b.activeDays||[]).join(", ")||"none")} · signed ${j(b.signedUpAt)}</span>
            </span>
            <span class="row wrap" style="gap:4px;justify-content:flex-end">
              ${!b.welcomeClaimed&&!b.flaggedFraud?`<button class="btn ghost" type="button" data-welcome="${r(b.id)}">Welcome perk</button>`:""}
              ${!b.flaggedFraud&&b.status!=="active"?`<button class="btn" type="button" data-activeday="${r(b.id)}">Mark active day</button>`:""}
              ${b.flaggedFraud?`<button class="btn ghost" type="button" data-unfraud="${r(b.id)}">Clear fraud</button>`:`<button class="btn ghost" type="button" data-fraud="${r(b.id)}">Flag fraud</button>`}
            </span>
          </li>`}).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No invitees yet — simulate a signup or load demo referrals.</p>',g=o.map(b=>{const y=l.some(w=>w.milestoneId===b.id),v=n.some(w=>w.id===b.id);return`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${b.n}</strong> verified active</td>
        <td style="padding:8px 4px">${r(b.label)}</td>
        <td style="padding:8px 4px">${y?'<span class="chip">Claimed</span>':v?`<button class="btn primary" type="button" data-claim-ref="${r(b.id)}">Claim</button>`:`<span class="muted" style="font-size:12px">${i}/${b.n}</span>`}</td>
      </tr>`}).join(""),f=l.length>0?`<ul class="list-plain">${l.map(b=>`<li>
          <span>${r(b.label)}<br/><span class="muted" style="font-size:11px">${j(b.at)} · not Clippers pay</span></span>
          <span class="chip">${b.n}</span>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No milestone claims yet.</p>';return`
    <div class="card">
      <p class="muted" style="margin:0;font-size:13px">
        Personal referral link. Invitee welcome perks; inviter milestones only after <strong>verified active</strong>
        (meaningful participation on <strong>3 distinct days in the first 7 days</strong>). Distinct from Clippers commissions. No purchase required · no auto billing.
      </p>
      <div class="row wrap" style="margin-top:10px;gap:8px">
        <span class="chip">Verified active: ${i}</span>
        ${d?`<span class="chip">Membership: ${r(d)}</span>`:'<span class="chip">Membership: none</span>'}
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
  `}function qh(e){return go(e||{path:"/share"})}function Bh(e){return go(e||{path:"/refer"})}function go(e){const t=Mh(e),s=`
    ${Ph(t)}
    ${t==="refer"?_h():Ih()}
  `;return I("DBS Rewards",s,{lead:t==="refer"?"Refer & Earn · verified active friends · TEST MODE (§33).":"Share & Earn · 24h social promo · TEST MODE (§32)."})}function Oh(e){fo(e,"share")}function Nh(e){fo(e,"refer")}function fo(e,t){var a,i,n,o,l,d,c,u,m,g,f,b,y;const s=t||(location.hash.includes("/refer")?"refer":"share");(a=e.querySelector("#rwSignIn"))==null||a.addEventListener("click",()=>{Be(),se(s)}),(i=e.querySelector("#shLinkForm"))==null||i.addEventListener("submit",v=>{var M,$,B;v.preventDefault(),Be();const w=(M=e.querySelector("#shPlat"))==null?void 0:M.value,x=(($=e.querySelector("#shHandle"))==null?void 0:$.value)||"",D=((B=e.querySelector("#shUrl"))==null?void 0:B.value)||"",k=xc({platform:w,handle:x,url:D});if(k.error==="signin")return h("Sign in required");if(k.error==="already_linked")return h("Already linked");if(k.error==="required")return h("Handle or URL required");if(k.error)return h("Could not link");h(`Linked ${ns[w]||w}`),se("share")}),e.querySelectorAll("[data-unlink]").forEach(v=>{v.addEventListener("click",()=>{Ec(v.getAttribute("data-unlink")),h("Platform removed"),se("share")})}),(n=e.querySelector("#shStart"))==null||n.addEventListener("click",()=>{Be();const v=Ac();if(v.error==="signin")return h("Sign in required");if(v.error==="already_active")return h("Challenge already active");if(v.error)return h("Could not start");h("Challenge started · 24h window"),se("share")}),(o=e.querySelector("#shCopyLink"))==null||o.addEventListener("click",async()=>{var w;const v=((w=e.querySelector("#shTracked"))==null?void 0:w.value)||"";try{await navigator.clipboard.writeText(v),h("Tracked link copied")}catch{h("Copy manually")}}),(l=e.querySelector("#shCopyCaption"))==null||l.addEventListener("click",async()=>{var x;const w=((x=J().challenge)==null?void 0:x.caption)||"";try{await navigator.clipboard.writeText(w),h("Caption copied")}catch{h("Copy manually")}}),(d=e.querySelector("#shSim24"))==null||d.addEventListener("click",()=>{if(Cc().error)return h("No active challenge");h("Simulated 24h elapsed"),se("share")}),(c=e.querySelector("#shEnd"))==null||c.addEventListener("click",()=>{Tc(),h("Challenge ended"),se("share")}),(u=e.querySelector("#shSubmitForm"))==null||u.addEventListener("submit",v=>{var k,M;v.preventDefault(),Be();const w=(k=e.querySelector("#shSubPlat"))==null?void 0:k.value,x=((M=e.querySelector("#shSubUrl"))==null?void 0:M.value)||"",D=Dc({platform:w,postUrl:x});if(D.error==="required")return h("Post URL required");if(D.error==="duplicate")return h("Already submitted for this platform");if(D.error==="no_challenge")return h("Start a challenge first");if(D.error)return h("Submit failed");h("Submitted · pending demo verification"),se("share")}),e.querySelectorAll("[data-verify]").forEach(v=>{v.addEventListener("click",()=>{Ki(v.getAttribute("data-verify"),"verified"),h("Verified · demo (manual)"),se("share")})}),e.querySelectorAll("[data-reject]").forEach(v=>{v.addEventListener("click",()=>{Ki(v.getAttribute("data-reject"),"rejected"),h("Rejected"),se("share")})}),e.querySelectorAll("[data-claim-share]").forEach(v=>{v.addEventListener("click",()=>{Be();const w=Mc(v.getAttribute("data-claim-share"));if(w.error==="not_claimable")return h("Not claimable yet");if(w.error)return h("Claim failed");h(`Claimed · ${w.claim.label}`),se("share")})}),(m=e.querySelector("#shReset"))==null||m.addEventListener("click",()=>{Lc(),h("Share demo reset"),se("share")}),(g=e.querySelector("#refCopy"))==null||g.addEventListener("click",async()=>{var w;Be(),Ft();const v=((w=e.querySelector("#refLink"))==null?void 0:w.value)||wr();try{await navigator.clipboard.writeText(v),h("Referral link copied")}catch{h("Copy manually")}}),(f=e.querySelector("#refInviteForm"))==null||f.addEventListener("submit",v=>{var D;v.preventDefault(),Be();const w=((D=e.querySelector("#refInviteName"))==null?void 0:D.value)||"",x=Ic({username:w});if(x.error==="self_referral")return h("Self-referral blocked");if(x.error==="signin")return h("Sign in required");if(x.error)return h("Could not add invitee");h(`Invitee ${x.invitee.username} signed up`),se("refer")}),e.querySelectorAll("[data-welcome]").forEach(v=>{v.addEventListener("click",()=>{const w=_c(v.getAttribute("data-welcome"));if(w.error==="fraud")return h("Flagged fraud");if(w.error)return h("Welcome claim failed");h(w.perk||"Welcome perk claimed"),se("refer")})}),e.querySelectorAll("[data-activeday]").forEach(v=>{v.addEventListener("click",()=>{const w=qc(v.getAttribute("data-activeday"));if(w.error==="fraud")return h("Flagged fraud");if(w.error==="outside_window")return h("Outside first-7-day window");if(w.error==="window_full")return h("All 7 demo days already marked");if(w.error)return h("Could not mark day");const x=(w.invitee.activeDays||[]).length;h(x>=3?`${w.invitee.username} → verified active (${x} days)`:`Active day ${x}/3 for ${w.invitee.username}`),se("refer")})}),e.querySelectorAll("[data-fraud]").forEach(v=>{v.addEventListener("click",()=>{Gi(v.getAttribute("data-fraud"),!0),h("Flagged as fraud · demo"),se("refer")})}),e.querySelectorAll("[data-unfraud]").forEach(v=>{v.addEventListener("click",()=>{Gi(v.getAttribute("data-unfraud"),!1),h("Fraud flag cleared"),se("refer")})}),e.querySelectorAll("[data-claim-ref]").forEach(v=>{v.addEventListener("click",()=>{Be();const w=Bc(v.getAttribute("data-claim-ref"));if(w.error==="not_claimable")return h("Not claimable yet");if(w.error)return h("Claim failed");h(`Milestone claimed · ${w.claim.label}`),se("refer")})}),(b=e.querySelector("#refSeed"))==null||b.addEventListener("click",()=>{Be();const v=Nc({force:!0});if(v.error==="signin")return h("Sign in required");h(`Loaded ${v.seeded||0} demo invitees`),se("refer")}),(y=e.querySelector("#refReset"))==null||y.addEventListener("click",()=>{Be(),Oc(),h("Refer demo reset"),se("refer")})}function Rh(e){return{badge:`Phase ${e} shell`}}function Sn(e){return`
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
    </article>`}function jh(){var d;const e=["Music Videos","Mixes","Interviews"],t={};he.forEach(c=>{const u=c.category||"Music Videos";(t[u]||(t[u]=[])).push(c)});const s=e.filter(c=>{var u;return(u=t[c])==null?void 0:u.length}).map(c=>{const u=t[c].map(Sn).join("");return`<section class="pikk-video-section" data-video-category="${r(c)}"><h3>${r(c)}</h3><div class="pikk-video-grid">${u}</div></section>`}).join(""),a=Object.keys(t).filter(c=>!e.includes(c)).map(c=>`<section class="pikk-video-section" data-video-category="${r(c)}"><h3>${r(c)}</h3><div class="pikk-video-grid">${t[c].map(Sn).join("")}</div></section>`).join(""),i=wt({publishedOnly:!0,types:["video"]}),n=i.map(c=>{const u=c.youtube||"",m=c.embed||"";if(m||u){const g=m||"";return`<article class="card catalog-admin-video" data-id="${r(c.id)}">
          ${g?`<div class="hero-video" style="margin:0 0 10px"><iframe src="${r(Ye(g))}" title="${r(c.title)}" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`:""}
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
      </article>`}).join(""),o={};ko.forEach(c=>{var u;(o[u=c.category]||(o[u]=[])).push(c)});const l=Object.entries(o).map(([c,u])=>`
      <div class="card">
        <h3>${r(c)}</h3>
        <p class="muted" style="margin:0 0 8px">No verified URLs in repo yet — titles from plan §9 only. No invented view counts.</p>
        <ul class="list-plain">${u.map(m=>`<li><span>${r(m.title)}</span><span class="chip">Coming Soon</span></li>`).join("")}</ul>
      </div>`).join("");return I("Videos & Interviews",`${Qr("videos")}
    <section class="pikk-video-hero card">
      <div class="pikk-video-hero-copy">
        <p class="kicker">PIKK VIDEOS · OFFICIAL RELEASES</p>
        <h2>Watch. Discover. Repeat.</h2>
        <p class="muted">Verified DatBoiSkeet music videos, mixes and interviews. Original YouTube playback, with no invented view counts.</p>
        <a class="btn primary" href="#/explore">Explore creators</a>
      </div>
      ${(d=he[0])!=null&&d.youtube?`<a class="pikk-video-hero-preview" href="${r(he[0].youtube)}" target="_blank" rel="noopener" aria-label="Watch ${r(he[0].title)}">
        <img src="https://i.ytimg.com/vi/${r(new URL(he[0].youtube).searchParams.get("v")||"")}/hqdefault.jpg" alt="" loading="eager" decoding="async" />
        <span class="pikk-video-hero-label">▶ ${r(he[0].title)}</span>
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
    ${l}`,{lead:"Official MVs · Mixes · Interviews · admin uploads."})}function Fh(e){const t=[...e.querySelectorAll("[data-videos-filter]")],s=[...e.querySelectorAll(".pikk-video-section[data-video-category]")];t.forEach(a=>a.addEventListener("click",()=>{const i=a.dataset.videosFilter||"All";t.forEach(n=>{const o=n===a;n.classList.toggle("on",o),n.setAttribute("aria-pressed",o?"true":"false")}),s.forEach(n=>{const o=i==="All"||n.dataset.videoCategory===i;n.hidden=!o})})),va(e),e.querySelectorAll("video.catalog-video").forEach(a=>{a.addEventListener("play",()=>Bt()),a.addEventListener("pause",()=>Qe()),a.addEventListener("ended",()=>Qe())}),e.querySelectorAll(".video-share").forEach(a=>{a.addEventListener("click",async()=>{const i=a.dataset.url||"";try{await navigator.clipboard.writeText(i),h("Link copied")}catch{h(i||"Copy failed")}})}),e.querySelectorAll("[data-idb-src]").forEach(async a=>{const i=(a.getAttribute("data-idb-src")||"").trim();if(i)try{const n=await ba(i);if(!n){a.tagName==="VIDEO"&&a.insertAdjacentHTML("afterend",'<p class="muted" style="font-size:12px">Media blob missing — re-upload from Admin.</p>');return}if((a.tagName==="IMG"||a.tagName==="VIDEO"||a.tagName==="AUDIO")&&(a.setAttribute("src",n),a.src=n,a.tagName==="VIDEO"||a.tagName==="AUDIO")){a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.controls=!0;try{a.load()}catch{}}}catch(n){console.warn("idb media hydrate failed",i,n)}})}function Kh(){const e=Tn.map(a=>`<li><span>${r(a.name)}</span><strong>$${a.price}/mo</strong></li>`).join(""),t=T().creatorSellApps||[],s=t.length?`<ul class="list-plain" style="margin-top:10px">${t.slice(0,8).map(a=>`<li><span>${r(a.name)} · ${r(a.contact)} · ${r(a.sells)}</span><span class="chip">${r(a.status||"pending")}</span></li>`).join("")}</ul>`:'<p class="muted" style="margin:8px 0 0;font-size:12px">No applications on this device yet.</p>';return I("Pricing",`<div class="card">
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
     </div>`,{lead:"Sell music, videos, beats &amp; merch · rules &amp; fees · apply form · memberships &amp; gifts — admin-adjustable."})}function Gh(e){var s;typeof location<"u"&&(location.hash.includes("focus=sell")||location.hash.includes("creator-sell"))&&setTimeout(()=>{var a;return(a=document.getElementById("creator-sell"))==null?void 0:a.scrollIntoView({behavior:"smooth",block:"start"})},60),(s=e.querySelector("#csSubmit"))==null||s.addEventListener("click",()=>{var d,c,u,m,g,f;const a=(c=(d=e.querySelector("#csName"))==null?void 0:d.value)==null?void 0:c.trim(),i=(m=(u=e.querySelector("#csContact"))==null?void 0:u.value)==null?void 0:m.trim(),n=((g=e.querySelector("#csSells"))==null?void 0:g.value)||"both",o=!!((f=e.querySelector("#csAgree"))!=null&&f.checked);if(!a||!i)return h("Name and email/handle required");if(!o)return h("Agree to rules & fees to continue");const l=_o({name:a,contact:i,sells:n,agreed:o});if(l!=null&&l.error)return h(l.error==="rules"?"Agree to rules & fees to continue":"Name and email/handle required");h("Application saved · TEST MODE"),R("#/pricing?focus=sell")})}function Vh(){return I("Community Guidelines",`<div class="card">
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
    </div>`,{lead:"Rules for posts, chat, Live & Lounge — plan §13."})}const Ia=[{id:"dbs-lounge",cat:"NETWORK",hash:"#dbs-lounge",name:"PIKK Lounge",blurb:"Main hub · official announcements & network news",chip:"Hub"},{id:"conversation",cat:"NETWORK",hash:"#the-conversation",name:"The Conversation",blurb:"Public music & fan discussion threads",chip:"Public"},{id:"listening",cat:"VOICE / LISTENING",hash:"#listening-rooms",name:"Listening Rooms",blurb:"Listening parties & reactions to new releases",chip:"Parties"},{id:"backstage",cat:"MEMBERS",hash:"#backstage-rooms",name:"Backstage Rooms",blurb:"Tier-restricted spaces for Skeet+ / Backstage / Inner Circle",chip:"Members"},{id:"live-rooms",cat:"NETWORK",hash:"#live-rooms",name:"Live Rooms",blurb:"Scheduled community events & discussions",chip:"Events"},{id:"spotlight",cat:"NETWORK",hash:"#the-spotlight",name:"The Spotlight",blurb:"Featured fan conversations & creator posts",chip:"Featured"}],$n={"dbs-lounge":[{who:"PIKK · System",text:"Welcome to PIKK Lounge — DatBoiSkeet’s channel-style community hub.",tag:"DEMO"},{who:"TEST MODE",text:"Live chat isn’t connected yet. These rows are placeholders so the room pane feels real.",tag:"DEMO"}],conversation:[{who:"DEMO",text:"Drop takes on new releases here once Phase 2 chat ships.",tag:"DEMO"}],listening:[{who:"DEMO",text:"Listening parties will sync reactions here — preview only.",tag:"DEMO"}],backstage:[{who:"DEMO",text:"Member-tier rooms unlock with Skeet+ / Backstage / Inner Circle.",tag:"DEMO"}],"live-rooms":[{who:"DEMO",text:"Scheduled community events will list here — no live presence yet.",tag:"DEMO"}],spotlight:[{who:"DEMO",text:"Featured fan conversations land here in Phase 2.",tag:"DEMO"}]},Uh=[{name:"DatBoiSkeet",role:"Owner"},{name:"SkeetMod",role:"Mod · DEMO"},{name:"FanDemo01",role:"DEMO"},{name:"ListenerX",role:"DEMO"}];function zh(e){const s=($n[e.id]||$n["dbs-lounge"]).map(a=>`<div class="lounge-msg">
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
  </div>`}function Hh(){const e=[],t=new Set;Ia.forEach(n=>{t.has(n.cat)||(t.add(n.cat),e.push(n.cat))});const s=e.map(n=>{const o=Ia.filter(l=>l.cat===n).map(l=>`<button type="button" class="lounge-channel${l.id==="dbs-lounge"?" on":""}" data-channel="${r(l.id)}" aria-pressed="${l.id==="dbs-lounge"?"true":"false"}">
            <span class="lounge-hash">#</span>
            <span class="lounge-channel-label">${r(l.name)}</span>
            <span class="chip lounge-channel-chip">${r(l.chip)}</span>
          </button>`).join("");return`<div class="lounge-cat-block">
        <p class="lounge-cat-label">${r(n)}</p>
        ${o}
      </div>`}).join(""),a=Ia.map(zh).join(""),i=Uh.map(n=>`<li><span class="lounge-member-dot" aria-hidden="true"></span><span><strong>${r(n.name)}</strong><br/><span class="muted" style="font-size:11px">${r(n.role)}</span></span></li>`).join("");return I("PIKK Lounge",`<div class="card lounge-intro">
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
    </div>`,{lead:"Discord-inspired channels · DatBoiSkeet branded.",...Rh(2)})}function Wh(e=document){const t=e.querySelector("#loungeDiscord")||e,s=[...t.querySelectorAll(".lounge-channel")],a=[...t.querySelectorAll(".lounge-pane")];s.length&&s.forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.channel;s.forEach(o=>{const l=o===i;o.classList.toggle("on",l),o.setAttribute("aria-pressed",l?"true":"false")}),a.forEach(o=>{o.dataset.pane===n?o.removeAttribute("hidden"):o.setAttribute("hidden","")})})})}function Yh(){return I("Signup & Creator Apps",`<div class="card">
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
    </div>`,{lead:"Free fan signup + creator role applications · §16."})}function Qh(){const e=T().notifications;return I("Notifications",`<div class="card" id="notifPrefs">
      <div class="toggle"><span>New releases</span><input type="checkbox" data-k="releases" ${e.releases?"checked":""}/></div>
      <div class="toggle"><span>Livestreams</span><input type="checkbox" data-k="lives" ${e.lives?"checked":""}/></div>
      <div class="toggle"><span>Messages</span><input type="checkbox" data-k="messages" ${e.messages?"checked":""}/></div>
      <div class="toggle"><span>Quiet hours</span><input type="checkbox" data-k="quietHours" ${e.quietHours?"checked":""}/></div>
      <p class="muted" style="margin-top:10px">Prefs saved on this device.</p>
    </div>`,{lead:"In-app center & alert controls."})}function Jh(e){e.querySelectorAll("#notifPrefs input").forEach(t=>{t.addEventListener("change",()=>{qo({[t.dataset.k]:t.checked}),h("Saved")})})}function Xh(){const t=[{label:"Registration & role approval",status:"Demo",note:"Profile/signup local demo · real auth later"},{label:"Moderation / reporting / appeals",status:"TODO",note:"Guidelines copy ready · enforcement UI Phase 2"},{label:"Payments & refunds",status:"TEST",note:"TEST MODE only · no real charges"},{label:"Creator payouts verification",status:"SHELL",note:"Wallet / KYC stubs · not launch-ready"},{label:"Music & video rights",status:"Partial",note:"3 official MVs · streaming links still SHELL"},{label:"Gift-battle fraud prevention",status:"SHELL",note:"Gift Battles not wired for launch"},{label:"Livestream safety",status:"Demo",note:"Go-live demo PASS · age/safety stack incomplete"},{label:"Background audio pause/resume",status:"PARTIAL",note:"§17 sticky top YT player + pauseDbsPlayer hooks"},{label:"Account recovery / optional 2FA",status:"TODO",note:"Local demo sign-in only"},{label:"Loyalty analytics consent",status:"SHELL",note:"Privacy/consent controls before launch"},{label:"PIKK Connect safety (age + WebRTC)",status:"Blocked",note:"Must not launch without assurance"}].map(s=>`<li><span><strong>${r(s.label)}</strong><br/><span class="muted" style="font-size:12px">${r(s.note)}</span></span><span class="chip">${r(s.status)}</span></li>`).join("");return I("Launch Readiness",`<div class="card">
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
    </div>`,{lead:"Pre-launch checklist with honest demo status · §31."})}function Zh(){const e=[{n:1,title:"Foundation",summary:"Videos, Music/Vault, Posts, profiles, followers, engagement alerts, Clippers applications.",status:"DONE",items:[{label:"§1 Posts",status:"DONE",href:"#/posts"},{label:"§2 Clippers apply",status:"DONE",href:"#/clippers"},{label:"§7 Profiles",status:"DONE",href:"#/profile"},{label:"§8 Music & Vault",status:"DONE",href:"#/music"},{label:"§9 Videos & Interviews",status:"DONE",href:"#/videos"},{label:"§14 Streaming links",status:"DONE",href:"#/music"},{label:"§19 Loading splash",status:"DONE",href:"#/home"},{label:"§20 Home dashboard",status:"DONE",href:"#/home"},{label:"§21 Merch showcase",status:"DONE",href:"#/merch"},{label:"§34 Coming Soon covers",status:"DONE",href:"#/music"},{label:"§17 Home MV + continuous play",status:"PARTIAL",href:"#/home",note:"Sticky top YT player · Stream Everywhere open links · PENDING AUDIT"}]},{n:2,title:"Growth & Creator Economy",summary:"Clipper campaigns, missions, referrals, creator earnings, and payouts.",status:"DONE",items:[{label:"§5 Creator Earnings",status:"DONE",href:"#/earnings"},{label:"§6 Missions",status:"DONE",href:"#/missions"},{label:"§27 Wallet & Payouts",status:"DONE",href:"#/wallet"},{label:"§32 Share & Earn",status:"DONE",href:"#/share"},{label:"§33 Refer & Earn",status:"DONE",href:"#/refer"},{label:"§10 Pricing",status:"DONE",href:"#/pricing"},{label:"§11 Admin dashboard",status:"DONE",href:"#/admin"},{label:"§16 Signup / Creator apps",status:"DONE",href:"#/signup"},{label:"§24 Explore",status:"DONE",href:"#/explore"},{label:"§25 Notifications",status:"DONE",href:"#/notifications"},{label:"§26 Fan Clubs",status:"DONE",href:"#/fanclubs"},{label:"§28 Loyalty Club",status:"DONE",href:"#/loyalty"},{label:"§22 Profile Shop cosmetics",status:"DONE",href:"#/shop",note:"Checker PASS · cosmetics demo"}]},{n:3,title:"Live & Marketplace",summary:"Creator livestreaming, gifts, donations, advertising, creator subscriptions, and Marketplace.",status:"DONE",items:[{label:"§3 Live",status:"DONE",href:"#/live"},{label:"§4 Marketplace ads",status:"DONE",href:"#/marketplace"},{label:"§18 Messages",status:"DONE",href:"#/messages"},{label:"§23 Gift Battles",status:"DONE",href:"#/giftbattles"},{label:"§29 Multi-Guest Live",status:"DONE",href:"#/multiguest"},{label:"§30 Open Mic",status:"DONE",href:"#/openmic"},{label:"§35 24/7 Spotlight",status:"DONE",href:"#/spotlight"},{label:"§36 Connect (opt-in shell)",status:"DONE",href:"#/connect"},{label:"§37 Restream + streamer tiers",status:"DONE",href:"#/restream"},{label:"§13 Guidelines",status:"DONE",href:"#/guidelines"},{label:"§15 Community / Lounge",status:"DONE",href:"#/community"},{label:"§31 Launch readiness",status:"DONE",href:"#/launch"}]}],t=a=>a==="DONE"?"chip chip-ok":a==="PARTIAL"?"chip chip-partial":a==="PENDING AUDIT"?"chip chip-audit":"chip",s=e.map(a=>{const i=a.items.map(n=>{const o=n.note?`<br/><span class="muted" style="font-size:12px">${r(n.note)}</span>`:"";return`<li><span>${n.href?`<a href="${r(n.href)}" style="color:inherit;text-decoration:none"><strong>${r(n.label)}</strong></a>`:`<strong>${r(n.label)}</strong>`}${o}</span><span class="${t(n.status)}">${r(n.status)}</span></li>`}).join("");return`<div class="card">
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
    </div>`,{lead:"Phase 1 · Phase 2 · Phase 3 roadmap with live status chips · §12."})}function eg(e){return I("Not found",`<div class="card"><p>No page for <code>${r(e)}</code>.</p><a class="btn" href="#/home">Home</a></div>`)}const tg={"/home":{render:dp,bind:pp},"/updates":{render:hp,bind:gp},"/posts":{render:Ip,bind:_p},"/music":{render:on,bind:ln},"/vault":{render:on,bind:ln},"/merch":{render:Np,bind:Rp},"/profile":{render:jp,bind:Fp},"/clippers":{render:Gp,bind:Vp},"/videos":{render:jh,bind:Fh},"/live":{render:fu,bind:ku},"/viral-live":{render:Su,bind:$u},"/explore":{render:Xu,bind:em},"/marketplace":{render:Au,bind:Cu},"/earnings":{render:ju,bind:Fu},"/missions":{render:Uu,bind:zu},"/pricing":{render:Kh,bind:Gh},"/admin":{render:Mp,bind:Lp},"/guidelines":{render:Vh},"/community":{render:Hh,bind:Wh},"/communities":{render:ch,bind:dh},"/signup":{render:Yh},"/messages":{render:_u,bind:qu},"/shop":{render:zm,bind:Hm},"/profile-shop":{render:jm,bind:Fm},"/giftbattles":{render:um,bind:mm},"/notifications":{render:Qh,bind:Jh},"/fanclubs":{render:Tm,bind:Dm},"/wallet":{render:Ou,bind:Nu},"/loyalty":{render:Mm,bind:Lm},"/multiguest":{render:xm,bind:Em},"/openmic":{render:Im,bind:_m},"/launch":{render:Xh},"/phases":{render:Zh},"/share":{render:qh,bind:Oh},"/refer":{render:Bh,bind:Nh},"/spotlight":{render:ih,bind:nh},"/restream":{render:()=>(queueMicrotask(()=>{location.hash="/connect#connect-multistream"}),Ya()),bind:Qa},"/shorts":{render:yn,bind:kn},"/clips":{render:yn,bind:kn},"/connect":{render:Ya,bind:Qa},"/blockwars":{render:gh,bind:vh},"/games":{render:bh,bind:kh},"/dating":{render:wh},"/roast-arena":{render:Dh,bind:Th}};function Di(){var t,s,a;const e=document.getElementById("tabbar");if(T().user)try{ii()}catch{}e.innerHTML=Eo.map(i=>{const o="/"+i.href.replace(/^#/,"").replace(/^\//,"").split(/[?#]/)[0],l=r(i.label);return`<a${i.primary?' class="tab-primary"':""} href="${i.href}" data-path="${o}" aria-label="${l}"${i.href==="#/create"?' aria-haspopup="dialog" aria-controls="pikkCreateMenu" aria-expanded="false"':i.href==="#/music"?' aria-haspopup="dialog" aria-controls="pikkMusicMenu" aria-expanded="false"':Gs[o.slice(1)]?` aria-haspopup="dialog" aria-controls="pikk${l}Menu" aria-expanded="false"`:""}><span class="tab-ico">${i.href==="#/create"?'<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><path d="M9 5 L25 16 L9 27 Z" fill="currentColor"/><path d="M24 5v11m0 0-4-4m4 4 4-4" stroke="white" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>':ps[i.icon]||""}</span><span>${l}</span></a>`}).join("");for(const i of Object.keys(Gs))(t=e.querySelector(`a[href="#/${i}"]`))==null||t.addEventListener("click",n=>{n.preventDefault(),yo(i,n.currentTarget)});(s=e.querySelector('a[href="#/music"]'))==null||s.addEventListener("click",i=>{i.preventDefault(),bt(),Vd(i.currentTarget)}),(a=e.querySelector('a[href="#/create"]'))==null||a.addEventListener("click",i=>{var o;is(),bt(),i.preventDefault();const n=ag();n.hidden=!n.hidden,i.currentTarget.setAttribute("aria-expanded",String(!n.hidden)),n.hidden||(o=n.querySelector("[data-create-close]"))==null||o.focus()}),e.style.gridTemplateColumns="",e.classList.remove("tabbar-scroll"),e.classList.add("tabbar-reshaped","tabbar-fit7")}function sg(){return Cn.map(e=>{const t=e.items.map(s=>{const a=`<span class="pikk-menu-icon" aria-hidden="true">${ps[s.icon]||ps.explore}</span><strong class="pikk-menu-title">${r(s.title)}</strong><small>${r(s.detail)}</small>`;return s.href?`<a href="${r(s.href)}" class="pikk-create-tile">${a}</a>`:`<div class="pikk-create-tile pikk-create-tile-planned" aria-disabled="true">${a}</div>`}).join("");return`<section class="pikk-create-menu-group" aria-label="${r(e.title)}"><h3>${r(e.title)}</h3><div class="pikk-create-options pikk-create-grid">${t}</div></section>`}).join("")}function ag(){let e=document.getElementById("pikkCreateMenu");if(e)return e;e=document.createElement("div"),e.id="pikkCreateMenu",e.className="pikk-create-overlay",e.hidden=!0,e.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-label="Create on PIKK">
    <div class="pikk-create-head"><strong>Create on PIKK</strong><button type="button" class="btn ghost" data-create-close aria-label="Close create menu">✕</button></div>
    ${sg()}
    <button type="button" class="pikk-menu-cancel" data-create-close>Cancel</button>
    <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · uploads depend on available prototype tools</p>
  </div>`,document.body.appendChild(e);const t=(s=!1)=>{e.hidden=!0;const a=document.querySelector('#tabbar a[href="#/create"]');a==null||a.setAttribute("aria-expanded","false"),s&&(a==null||a.focus())};return window.addEventListener("hashchange",()=>t()),e.addEventListener("click",s=>{s.target===e||s.target.closest("[data-create-close]")?t(!0):s.target.closest(".pikk-create-options a")&&t()}),document.addEventListener("keydown",s=>{if(!e.hidden&&(s.key==="Escape"&&(s.preventDefault(),t(!0)),s.key==="Tab")){const a=[...e.querySelectorAll("a[href], button:not([disabled])")],i=a[0],n=a[a.length-1];if(!i){s.preventDefault();return}e.contains(document.activeElement)?s.shiftKey&&document.activeElement===i?(s.preventDefault(),n.focus()):!s.shiftKey&&document.activeElement===n&&(s.preventDefault(),i.focus()):(s.preventDefault(),(s.shiftKey?n:i).focus())}}),e}function ig(){const e=document.getElementById("tabbar");if(!e)return;Di();const t=Xe();Wr(e,t.path);try{vo()}catch{}}function ng(){const e=document.getElementById("sideNav"),t=Xe(),s="#"+(t.raw||t.path),a="#"+t.path,i=Dn.map(n=>{if(n.href)return`<a class="drawer-direct${n.href===a||n.href===s?" on":""}" href="${n.href}">${r(n.label)}</a>`;const o=n.links||[],l=o.some(m=>m.href===a||m.href===s),d=l?" open":"",c=l?" has-active":"",u=o.map(m=>`<a class="drawer-link${m.href===a||m.href===s?" on":""}" href="${m.href}">${r(m.label)}</a>`).join("");return`<div class="drawer-group${d}${c}" data-group="${r(n.id)}"><button type="button" class="drawer-cat" aria-expanded="${l?"true":"false"}"><span>${r(n.label)}</span><span class="drawer-caret" aria-hidden="true"></span></button><div class="drawer-children" role="group">${u}</div></div>`}).join("");e.innerHTML=`<h2>PIKK Network</h2>${i}<a class="drawer-direct" href="#/updates">What's New · App Updates</a>`}function _a(e){document.getElementById("sideNav").classList.toggle("open",e),document.getElementById("sideNav").setAttribute("aria-hidden",e?"false":"true"),document.getElementById("scrim").classList.toggle("show",e)}function rg(e){const t=e.path;Di(),Wr(document.getElementById("tabbar"),t),document.querySelectorAll("#sideNav a").forEach(n=>{const o=n.getAttribute("href")||"";n.classList.toggle("on",o==="#"+t||o==="#"+e.raw)});const s="#"+t,a="#"+e.raw;document.querySelectorAll("#sideNav .drawer-group").forEach(n=>{const o=[...n.querySelectorAll("a")].some(d=>d.getAttribute("href")===s||d.getAttribute("href")===a);n.classList.toggle("open",o),n.classList.toggle("has-active",o);const l=n.querySelector(".drawer-cat");l&&l.setAttribute("aria-expanded",o?"true":"false")});const i=document.getElementById("headerMsg");if(i&&(i.hidden=!1),T().user)try{ii()}catch{}vo()}function vo(){const e=document.getElementById("headerMsgBadge"),t=document.getElementById("headerMsg");if(!e||!t)return;let s=0;try{s=tt()}catch{s=0}if(s>0){const a=s>99?"99+":String(s);e.textContent=a,e.hidden=!1,t.setAttribute("aria-label",`Messages, ${s} unread`)}else e.textContent="",e.hidden=!0,t.setAttribute("aria-label","Messages")}function og(e){var i;const t=document.getElementById("app"),s=tg[e.path],a=s?s.render(e):eg(e.path);t.innerHTML=a,Hr(t),(i=s==null?void 0:s.bind)==null||i.call(s,t),rg(e),_d(e.path),window.scrollTo(0,0),(e.path==="/music"||e.path==="/vault")&&(location.hash.includes("vault")||e.path==="/vault")&&setTimeout(()=>{var n;return(n=document.getElementById("vault"))==null?void 0:n.scrollIntoView({behavior:"smooth"})},50),e.path==="/pricing"&&(location.hash.includes("focus=sell")||location.hash.includes("creator-sell"))&&setTimeout(()=>{var n;return(n=document.getElementById("creator-sell"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50),e.path==="/wallet"&&(e.elementId==="wallet-coins"||e.query.section==="coins"||location.hash.includes("wallet-coins"))&&setTimeout(()=>{var n;return(n=document.getElementById("wallet-coins"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50),e.path==="/live"&&(e.query.go==="1"||e.elementId==="live-go"||location.hash.includes("go=1"))&&setTimeout(()=>{var n;return(n=document.getElementById("live-go"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50)}function lg(){if(new URLSearchParams(location.search).has("holdSplash"))return;const e=document.getElementById("splash");!e||e.classList.contains("hide")||(e.classList.add("hide"),Bo(),setTimeout(()=>e.remove(),500))}function cg(){const e=document.getElementById("splashChime");if(!e)return;const t=()=>{const a=e.play();a&&typeof a.catch=="function"&&a.catch(()=>{})};t();const s=()=>{t(),window.removeEventListener("pointerdown",s),window.removeEventListener("keydown",s)};window.addEventListener("pointerdown",s,{once:!0}),window.addEventListener("keydown",s,{once:!0})}function dg(){window.addEventListener("dbs:interrupt-music",e=>{var s;const t=((s=e==null?void 0:e.detail)==null?void 0:s.reason)||"route";As(t)}),window.addEventListener("dbs:resume-music",e=>{var s;const t=(s=e==null?void 0:e.detail)==null?void 0:s.reason;t==="live"?Gr():t==="video"?Qe():Kr(t)})}function pg(){window.addEventListener("dbs:messages-unread",()=>{try{ig()}catch{}})}function ug(){if(Ln(),Hr(document),Di(),ng(),Id(),dg(),pg(),document.getElementById("menuBtn").addEventListener("click",()=>_a(!0)),document.getElementById("scrim").addEventListener("click",()=>_a(!1)),document.getElementById("sideNav").addEventListener("click",e=>{const t=e.target.closest(".drawer-cat");if(t){e.preventDefault();const s=t.closest(".drawer-group"),a=!s.classList.contains("open");document.querySelectorAll("#sideNav .drawer-group").forEach(i=>{const n=a&&i===s;i.classList.toggle("open",n);const o=i.querySelector(".drawer-cat");o&&o.setAttribute("aria-expanded",n?"true":"false")});return}e.target.closest("a")&&_a(!1)}),document.getElementById("notifBtn").addEventListener("click",()=>{location.hash="/notifications"}),Rd(og),jd(),!Oo()&&!new URLSearchParams(location.search).has("holdSplash")){const e=document.getElementById("splash");e&&e.remove()}else{cg();let e=!1;setTimeout(()=>{e||(e=!0,lg())},3e3)}}ug();
