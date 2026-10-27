(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();function so(e,t=Date.now()){const s=new URL(e);return s.searchParams.set("refresh",String(t)),s.toString()}var pn;(pn=document.getElementById("pikk-refresh-link"))==null||pn.addEventListener("click",function(e){e.preventDefault(),window.location.assign(so(window.location.href))});const Ps=Object.freeze({videos:[{title:"Video Feed",href:"#/videos",detail:"Watch and discover videos",icon:"▶"},{title:"Shorts & Reels",href:"#/shorts",detail:"Browse short-form clips",icon:"▣"},{title:"Posts",href:"#/posts",detail:"View the community feed",icon:"▤"},{title:"Upload Video",href:"#/posts?type=video",detail:"Available prototype publishing tools · TEST MODE",icon:"⇧"}],connect:[{title:"Connect",href:"#/connect",detail:"Discover people and communities",icon:"♧"},{title:"Communities",href:"#/community",detail:"Explore community rooms",icon:"☷"},{title:"Messages",href:"#/messages",detail:"Open your messages",icon:"✉"},{title:"Random Chat",href:"#/connect#connect-random-chat",detail:"Preview only · real matching unavailable",icon:"◉"},{title:"Multistream",href:"#/connect#connect-multistream",detail:"Broadcast connection preview · TEST MODE",icon:"▹"}],dating:[{title:"Discover Dating",href:"#/dating",detail:"Explore dating features · TEST MODE",icon:"♡"},{title:"Messages",href:"#/messages",detail:"Open private messages",icon:"✉"},{title:"My Profile",href:"#/profile",detail:"Review your profile settings",icon:"◉"},{title:"Safety Guidelines",href:"#/guidelines",detail:"Review community safety rules",icon:"◇"}],games:[{title:"PIKK Arcade",href:"#/games",detail:"Browse upcoming PIKK games · preview",icon:"♜"},{title:"Block Wars",href:"#/blockwars",detail:"Development preview · not live multiplayer",icon:"▣"}],shop:[{title:"PIKK Shop",href:"#/shop",detail:"Browse available products",icon:"▤"},{title:"Marketplace",href:"#/marketplace",detail:"Community listings · TEST MODE",icon:"◇"},{title:"Foreign X-Change",href:"#/merch",detail:"Official merchandise",icon:"✦"},{title:"Creator Pricing",href:"#/pricing",detail:"Explore creator selling information",icon:"$"}]}),mn={videos:"pikkVideosMenu",connect:"pikkConnectMenu",dating:"pikkDatingMenu",games:"pikkGamesMenu",shop:"pikkShopMenu"};function ft(e=!1){for(const[t,s]of Object.entries(mn)){const i=document.getElementById(s);if(!i||i.hidden)continue;i.hidden=!0;const a=document.querySelector(`#tabbar a[href="#/${t}"]`);a==null||a.setAttribute("aria-expanded","false"),e&&(a==null||a.focus())}}function io(e,t){var o,c,d;if(!Object.hasOwn(Ps,e))return;const s=mn[e];let i=document.getElementById(s);i||(i=document.createElement("div"),i.id=s,i.className="pikk-create-overlay",i.hidden=!0,i.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="${s}Title">
      <div class="pikk-create-head"><strong id="${s}Title">${e[0].toUpperCase()+e.slice(1)} on PIKK</strong><button type="button" class="btn ghost" data-section-close aria-label="Close ${e} menu">✕</button></div>
      <div class="pikk-create-options">${Ps[e].map(p=>`<a href="${p.href}">${p.icon} ${p.title}<small>${p.detail}</small></a>`).join("")}</div>
      <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Production features are not enabled until secure services are available.</p>
    </div>`,document.body.appendChild(i),i.addEventListener("click",p=>{p.target===i||p.target.closest("[data-section-close]")?ft(!0):p.target.closest(".pikk-create-options a")&&ft()}),document.addEventListener("keydown",p=>{if(i.hidden)return;if(p.key==="Escape"){p.preventDefault(),ft(!0);return}if(p.key!=="Tab")return;const m=[...i.querySelectorAll("button:not([disabled]), a[href]")],f=m[0],b=m[m.length-1];if(!f){p.preventDefault();return}i.contains(document.activeElement)?p.shiftKey&&document.activeElement===f?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),f.focus()):(p.preventDefault(),(p.shiftKey?b:f).focus())}),window.addEventListener("hashchange",()=>ft()));const a=i.hidden;ft();const n=document.getElementById("pikkMusicMenu");n&&!n.hidden&&(n.hidden=!0,(o=document.querySelector('#tabbar a[href="#/music"]'))==null||o.setAttribute("aria-expanded","false"));const l=document.getElementById("pikkCreateMenu");l&&!l.hidden&&(l.hidden=!0,(c=document.querySelector('#tabbar a[href="#/create"]'))==null||c.setAttribute("aria-expanded","false")),i.hidden=!a,t==null||t.setAttribute("aria-expanded",String(a)),a?(d=i.querySelector("[data-section-close]"))==null||d.focus():t==null||t.focus()}const Ve=[{id:"dirty-money",title:"Dirty Money ft. Lil Baby",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI",embed:"https://www.youtube.com/embed/-rHDLWfiuDI"},{id:"93",title:"93 ft. DaBaby",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0",embed:"https://www.youtube.com/embed/zC0BYFxs5W0"},{id:"no-love",title:"No Love ft. YFN Lucci",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8",embed:"https://www.youtube.com/embed/6pCVEIE9pB8"},{id:"bouquet",title:"Bouquet",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=DTe4OiX2otg",embed:"https://www.youtube.com/embed/DTe4OiX2otg"},{id:"where-im-from",title:"Where I'm From ft. Tee Grizzley",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=BH7_Ttk86eQ",embed:"https://www.youtube.com/embed/BH7_Ttk86eQ"},{id:"gang-ties",title:"Gang Ties",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=0ikbrk901Kc",embed:"https://www.youtube.com/embed/0ikbrk901Kc"},{id:"go-2-work",title:"Go 2 Work",artist:"DatBoiSkeet",category:"Music Videos",featured:!0,youtube:"https://www.youtube.com/watch?v=gRq8c2i4ESM",embed:"https://www.youtube.com/embed/gRq8c2i4ESM"},{id:"ramen-noodles",title:"Ramen Noodles",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=YNCdtAC273M",embed:"https://www.youtube.com/embed/YNCdtAC273M"},{id:"men-in-blacc",title:"Men In Blacc",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=MKyw-hzxQWY",embed:"https://www.youtube.com/embed/MKyw-hzxQWY"},{id:"king-city",title:"King City",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=wyNJYUqpRFM",embed:"https://www.youtube.com/embed/wyNJYUqpRFM"},{id:"in-her-bag",title:"In Her Bag",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=Dux8rm-pzRg",embed:"https://www.youtube.com/embed/Dux8rm-pzRg"},{id:"lonely",title:"Lonely",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=IVnDjPJ8dRg",embed:"https://www.youtube.com/embed/IVnDjPJ8dRg"},{id:"they-aint-coming-home",title:"They Ain't Coming Home",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=Yi4uBFkn0-o",embed:"https://www.youtube.com/embed/Yi4uBFkn0-o"},{id:"mind-on-a-licc",title:"Mind On A Licc",artist:"DatBoiSkeet",category:"Music Videos",youtube:"https://www.youtube.com/watch?v=sADinuRcRr4",embed:"https://www.youtube.com/embed/sADinuRcRr4"},{id:"dbs-mix",title:"DatBoiSkeet Mix",artist:"DatBoiSkeet",category:"Mixes",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",embed:"https://www.youtube.com/embed/videoseries?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",openLink:"https://www.youtube.com/playlist?list=RDEMDYIvPhQWVGU3Zf3gcxT_4w"},{id:"on-the-radar",title:"On The Radar Interview — Talk of The Town",artist:"DatBoiSkeet",category:"Interviews",youtube:"https://www.youtube.com/watch?v=6IFiHo5HrdE",embed:"https://www.youtube.com/embed/6IFiHo5HrdE"}],Oi=[{id:"dbs-mix",title:"DatBoiSkeet Mix",blurb:"Official channel Music Videos playlist embed (stable). YouTube Radio Mix link kept as Play on YouTube — RD mixes often fail to embed.",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",embed:"https://www.youtube.com/embed/videoseries?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t",openLink:"https://www.youtube.com/playlist?list=RDEMDYIvPhQWVGU3Zf3gcxT_4w",source:"channel-pl-music-videos + user-t96u openLink"}],Si=[{id:"pl-music-videos",title:"DatBoiSkeet Music Videos",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t"},{id:"pl-interviews",title:"DatBoiSkeet Interviews",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQHoRjRTD58TpLGqm0XMsa7U"},{id:"pl-vlogs",title:"DatBoiSkeet Vlogs",youtube:"https://www.youtube.com/playlist?list=PLC6_HdjaVaQEqroQ8LYGLgpDfzK3pyutQ"}],ao=[{category:"Interviews",title:"Off The Porch (no verified DatBoiSkeet YouTube URL yet — add via Admin)"},{category:"Behind the Scenes",title:"BTS clips (coming soon)"},{category:"Exclusive Videos",title:"Vault / member exclusives (coming soon)"}],ce={youtube:"https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA",youtubeHandle:"https://www.youtube.com/@DatBoiSkeet1",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA",spotify:"https://open.spotify.com/artist/0Po64h8VleQOR97okM68zh",apple:"https://music.apple.com/us/artist/datboiskeet/1270542870"},ss=[{id:"stream-dirty-money",title:"Dirty Money (feat. Lil Baby)",artist:"DatBoiSkeet",type:"single",year:2018,albumNote:"From Broke Is the Root of All Evil",cover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/7a/67/2a7a676e-af85-489e-55fd-2bae2793948b/datboiskeet-bitroae-cover-3000px.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/17Pw88uBIWpgOVCfhEyszG",apple:"https://music.apple.com/us/song/dirty-money-feat-lil-baby/1395681218",youtubeMusic:"https://music.youtube.com/watch?v=-rHDLWfiuDI",youtube:"https://www.youtube.com/watch?v=-rHDLWfiuDI"}},{id:"stream-93",title:"93 (feat. DaBaby)",artist:"DatBoiSkeet",type:"single",year:2019,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/19/60/5f/19605f4c-7014-6dbc-ca18-baa2a672c697/194923194110.png/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/3gKwZybDOkUoz2wXquDHVZ",apple:"https://music.apple.com/us/album/93-feat-da-baby-single/1493456214",youtubeMusic:"https://music.youtube.com/watch?v=zC0BYFxs5W0",youtube:"https://www.youtube.com/watch?v=zC0BYFxs5W0"}},{id:"stream-no-love",title:"No Love (feat. YFN Lucci)",artist:"DatBoiSkeet",type:"single",year:2017,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/49/e5/62/49e56292-e427-3992-84bd-ead0b06fb06a/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/track/2KqnCXMM0lAMlEv1fDN63o",apple:"https://music.apple.com/us/album/no-love-feat-yfn-lucci-single/1317778810",youtubeMusic:"https://music.youtube.com/watch?v=6pCVEIE9pB8",youtube:"https://www.youtube.com/watch?v=6pCVEIE9pB8"}},{id:"stream-broke",title:"Broke Is the Root of All Evil",artist:"DatBoiSkeet",type:"album",year:2018,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2a/7a/67/2a7a676e-af85-489e-55fd-2bae2793948b/datboiskeet-bitroae-cover-3000px.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/51j6ReXYreCDV0ZwtPdj1Q",apple:"https://music.apple.com/us/album/broke-is-the-root-of-all-evil/1395680910",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}},{id:"stream-talk",title:"Talk of the Town",artist:"DatBoiSkeet",type:"album",year:2020,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/0d/a0/f60da0bf-c3de-8b12-5cd8-e8c1d3c2053b/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/4OY5rM0TBPDsC4n8Dka4Gr",apple:"https://music.apple.com/us/album/talk-of-the-town/1541180619",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}},{id:"stream-said-you-love-me",title:"Said You Love Me",artist:"DatBoiSkeet",type:"single",year:2025,cover:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/f4/4f/6b/f44f6b18-dff9-0486-e6e6-a615724e02fe/artwork.jpg/600x600bb.jpg",links:{spotify:"https://open.spotify.com/album/7FhoRIzhuGgmt2pZlWMc5c",apple:"https://music.apple.com/us/album/said-you-love-me-single/1835164001",youtubeMusic:"https://music.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA"}}],is=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",status:"Coming Soon",order:1},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",status:"Coming Soon",order:2}],no=[{id:"vault-long-story-short",title:"Long Story Short (Vault Preview)",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",tier:"skeet+",status:"Coming Soon"},{id:"vault-ladies-only",title:"Ladies Only (Vault Exclusive)",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",tier:"backstage",status:"Coming Soon"}],ya=[{id:"long-story-short",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",price:1.29,status:"Coming Soon"},{id:"ladies-only",title:"Ladies Only",artist:"DatBoiSkeet",cover:"/music/02_Ladies_Only_Coming_Soon.jpg",price:1.29,status:"Coming Soon"}],Is=[{id:"hat-716-orange",name:"716 Buffalo Braves Snapback (Black/Orange)",price:30,category:"Hats",image:"/merch/01_black_orange_716_hat.jpeg",shopUrl:"https://foreignx-change.com"},{id:"hat-716-blue",name:"716 Buffalo Hat (Blue/Red)",price:30,category:"Hats",image:"/merch/02_blue_red_716_hat.jpeg",shopUrl:"https://foreignx-change.com"},{id:"jacket-blue",name:"Buffalo Sports Varsity Jacket (Blue/White)",price:200,category:"Jackets",image:"/merch/03_blue_buffalo_jacket.jpeg",shopUrl:"https://foreignx-change.com"},{id:"jacket-black",name:"Foreign X-Change Buffalo Varsity (Black/White)",price:200,category:"Jackets",image:"/merch/07_black_buffalo_jacket.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-fx-back",name:"Foreign X-Change Graphic Tee (Back)",price:65,category:"Shirts",image:"/merch/04_black_fx_tee_back_screenshot.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-fx-front",name:"Foreign X-Change Text Tee (Front)",price:65,category:"Shirts",image:"/merch/05_black_fx_tee_front_screenshot.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-ptsd",name:"PTSD Tee (Black)",price:65,category:"Shirts",image:"/merch/06_black_ptsd_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-abstract",name:"Abstract FX Tee (White)",price:65,category:"Shirts",image:"/merch/08_white_abstract_fx_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-dealer",name:"Support Your Local Dealer Tee (Navy)",price:65,category:"Shirts",image:"/merch/09_navy_dealer_tee.jpeg",shopUrl:"https://foreignx-change.com"},{id:"tee-skulls",name:"Skulls FX Tee (White)",price:65,category:"Shirts",image:"/merch/10_white_skulls_tee.jpeg",shopUrl:"https://foreignx-change.com"}],Ts=[{id:"frame-chrome-crown",name:"Chrome Crown",category:"frames",rarity:"legendary",price:12.99,emoji:"👑"},{id:"frame-iced-out",name:"Iced Out",category:"frames",rarity:"epic",price:9.99,emoji:"💎"},{id:"frame-trap-flame",name:"Trap Flame",category:"frames",rarity:"epic",price:7.99,emoji:"🔥"},{id:"frame-rodeo-gold",name:"Rodeo Gold",category:"frames",rarity:"rare",price:5.99,emoji:"🤠"},{id:"frame-rose-petals",name:"Rose Petals",category:"frames",rarity:"rare",price:4.99,emoji:"🌹"},{id:"fx-bass-pulse",name:"Bass Pulse",category:"effects",rarity:"epic",price:8.99,emoji:"🎵"},{id:"fx-snowfall",name:"Snowfall",category:"effects",rarity:"rare",price:5.99,emoji:"❄️"},{id:"fx-city-lights",name:"City Lights",category:"effects",rarity:"epic",price:7.99,emoji:"🌃"},{id:"fx-holo-glitch",name:"Holographic Glitch",category:"effects",rarity:"legendary",price:14.99,emoji:"✨"},{id:"ban-skyline",name:"City Skyline",category:"banners",rarity:"rare",price:4.99,emoji:"🏙️"},{id:"ban-studio",name:"Studio Booth",category:"banners",rarity:"rare",price:4.99,emoji:"🎙️"},{id:"ban-arena",name:"Arena Lights",category:"banners",rarity:"epic",price:6.99,emoji:"🏟️"},{id:"ban-chrome",name:"Luxury Chrome",category:"banners",rarity:"legendary",price:11.99,emoji:"🪞"},{id:"name-chrome",name:"Chrome Name",category:"name styles",rarity:"epic",price:6.99,emoji:"🅰️"},{id:"name-neon",name:"Neon Name",category:"name styles",rarity:"rare",price:3.99,emoji:"💜"},{id:"name-varsity",name:"Bold Varsity",category:"name styles",rarity:"rare",price:3.99,emoji:"🏟️"},{id:"name-western",name:"Western Script",category:"name styles",rarity:"epic",price:5.99,emoji:"🏜️"},{id:"badge-dayone",name:"Day One (cosmetic style)",category:"badges",rarity:"rare",price:2.99,emoji:"1️⃣"},{id:"badge-topfan",name:"Top Fan (cosmetic style)",category:"badges",rarity:"epic",price:4.99,emoji:"⭐"},{id:"badge-backstage",name:"Backstage Glow",category:"badges",rarity:"epic",price:5.99,emoji:"🎫"}],ro=[{id:"all",label:"All"},{id:"frames",label:"Frames"},{id:"effects",label:"Effects"},{id:"banners",label:"Banners"},{id:"name styles",label:"Name styles"},{id:"badges",label:"Badges"}],gn=[{id:"skeet",name:"Skeet+",price:3.99,blurb:"Early DatBoiSkeet releases · basic Vault"},{id:"backstage",name:"Backstage",price:7.99,blurb:"Deeper Vault · studio lives · listening rooms"},{id:"inner",name:"Inner Circle",price:14.99,blurb:"VIP drops · private Q&As · Inner Circle rooms"}],oo=[{label:"Long Story Short",src:"/music/01_Long_Story_Short_Coming_Soon.jpg"},{label:"Ladies Only",src:"/music/02_Ladies_Only_Coming_Soon.jpg"},{label:"716 Orange Hat",src:"/merch/01_black_orange_716_hat.jpeg"},{label:"716 Blue Hat",src:"/merch/02_blue_red_716_hat.jpeg"},{label:"Blue Jacket",src:"/merch/03_blue_buffalo_jacket.jpeg"},{label:"PTSD Tee",src:"/merch/06_black_ptsd_tee.jpeg"}],lo=[{route:"/explore",title:"Explore",blurb:"Discover DatBoiSkeet · creators · drops"},{route:"/music",title:"Music",blurb:"Long Story Short · Ladies Only · Vault"},{route:"/videos",title:"Videos",blurb:"Official DatBoiSkeet MVs"},{route:"/posts",title:"Posts",blurb:"Text · Picture · Short · Video"},{route:"/shorts",title:"Shorts",blurb:"Under Posts · quick clips"},{route:"/live",title:"Live",blurb:"Go live · TEST MODE demo"},{route:"/shop",title:"PIKK Shop",blurb:"Foreign X-Change merch · external checkout"},{route:"/community",title:"PIKK Lounge",blurb:"Artist-owned rooms · Phase 2"},{route:"/music",title:"Vault",blurb:"Member exclusives · Coming Soon",hash:"vault"},{route:"/marketplace",title:"Marketplace",blurb:"Brand ads & sponsored offers"},{route:"/missions",title:"Missions",blurb:"Clipper promo campaigns"},{route:"/clippers",title:"Clippers",blurb:"Apply · cut clips · earn"}],fn=[{id:"home",label:"Home",href:"#/home"},{id:"explore",label:"Explore",href:"#/explore"},{id:"profile",label:"Profile / Sign in",href:"#/profile"},{id:"watch",label:"Watch",links:[{href:"#/videos",label:"Videos"},{href:"#/live",label:"Live"},{href:"#/openmic",label:"Open Mic / Talent Discovery (24/7)"},{href:"#/spotlight",label:"Spotlight (24/7)"},{href:"#/multiguest",label:"Multi-Guest Live"}]},{id:"music",label:"Music",links:[{href:"#/music",label:"Music & Vault"}]},{id:"social",label:"Social",links:[{href:"#/posts",label:"Posts"},{href:"#/posts?compose=1",label:"Post · Text / Picture / Short / Video"},{href:"#/shorts",label:"Shorts (in Posts)"},{href:"#/notifications",label:"Notifications"},{href:"#/connect",label:"Connect"},{href:"#/dating",label:"Dating & Connections"},{href:"#/community",label:"Community / Lounge"}]},{id:"messages",label:"Messages",href:"#/messages"},{id:"games",label:"Games",links:[{href:"#/games",label:"PIKK Arcade · 15 Games Coming Soon"},{href:"#/blockwars",label:"Block Wars · Coming Soon"}]},{id:"shop",label:"Shop",links:[{href:"#/merch",label:"Foreign X-Change Merch"},{href:"#/marketplace",label:"Marketplace"},{href:"#/shop",label:"PIKK Shop"},{href:"#/profile-shop",label:"Profile Shop · cosmetics"}]},{id:"earn",label:"Creators & Earnings",links:[{href:"#/wallet",label:"Wallet"},{href:"#/earnings",label:"Creator Earnings"},{href:"#/missions",label:"Missions"},{href:"#/clippers",label:"Clippers Apply"},{href:"#/share",label:"Share & Earn"},{href:"#/refer",label:"Refer & Earn"},{href:"#/pricing",label:"Pricing (rules & fees)"}]},{id:"account",label:"Account",links:[{href:"#/profile",label:"Profile"},{href:"#/signup",label:"Signup / Creator Apps"},{href:"#/loyalty",label:"Loyalty Club"},{href:"#/fanclubs",label:"Fan Clubs"},{href:"#/guidelines",label:"Community Guidelines"}]},{id:"studio",label:"Studio / Owner",links:[{href:"#/admin",label:"Admin"},{href:"#/phases",label:"Development Phases"},{href:"#/launch",label:"Launch Readiness"}]}];fn.flatMap(e=>e.href?[{href:e.href,label:e.label}]:e.links||[]);const co=[{href:"#/music",label:"Music",icon:"music"},{href:"#/videos",label:"Videos",icon:"videos"},{href:"#/connect",label:"Connect",icon:"profile"},{href:"#/create",label:"Create",icon:"live",primary:!0},{href:"#/dating",label:"Dating",icon:"heart"},{href:"#/games",label:"Games",icon:"game"},{href:"#/shop",label:"Shop",icon:"merch"}],hn="dbs_v1",Xt=()=>({user:null,profiles:{dbs:{id:"dbs",username:"DatBoiSkeet",bio:"Official DatBoiSkeet · Long Story Short & Ladies Only Coming Soon · Vault · Foreign X-Change",avatar:"/brand/logo-dbs-v3@2x.webp",followers:[],following:[],verified:!0}},posts:[],comments:{},likes:{},clipperApps:[],creatorSellApps:[],brandApps:[],listings:[],live:null,liveHistory:[],liveSongRequests:[],coins:{balance:0,history:[]},liveGiftLedger:[],liveGbChallengePop:null,threads:{},demoUnreadSeeded:!1,messagePrefs:{allowDMs:!0,allowRequests:!0},notifications:{releases:!0,lives:!0,messages:!0,quietHours:!1},wallet:{balance:0,history:[]},creatorWallet:{available:0,holds:0,threshold:25,verification:"demo_unverified",earnings:[],payouts:[]},catalog:[],missions:[],giftBattles:{active:null,history:[],champions:[],prefs:{invitationsEnabled:!0}},multiGuest:{active:null,history:[]},spotlight:{nowPlaying:null,queue:[],history:[],houseIndex:0},fanClubs:{clubs:[],posts:{},seeded:!1},shareEarn:{platformsLinked:[],challenge:null,submissions:[],rewardsClaimed:[]},referEarn:{code:"",invitees:[],milestonesClaimed:[]},restream:{platforms:{},selected:[],session:null,history:[],ingest:null,campaign:{tier:null,status:"none",enrolledAt:null,cancelledAt:null},campaignConfig:null},loyalty:{points:0,history:[],badges:[],publicVisible:!0,lastActionAt:{},dayCounts:{}},openMic:{applications:[],seeded:!1,houseIndex:0},profileShop:{owned:[],equipped:{},reduceMotion:!1},hotFeed:{lives:[],posts:[],seededLives:!1,seededPosts:!1,seededPostsVer:0},engagementAlerts:[],postShares:{},splashSeenAt:0,dailyGoals:{app:null,liveByHost:{},history:[]}});function uo(){var e,t,s,i,a,n,l,o,c,d,p,m,f,b,y,w,h,v,$,k,x,L,D,F,T,ne,$e,G,ye,xe,C,P,q,V,H,j,z,we,Ee,Re,Fe,ot,lt,ct,dt,J,E,pe,fa,ha,ba;try{const va=localStorage.getItem(hn);if(!va)return Xt();const S=JSON.parse(va),ee=Xt();return{...ee,...S,profiles:{...ee.profiles,...S.profiles||{}},notifications:{...ee.notifications,...S.notifications||{}},wallet:{...ee.wallet,...S.wallet||{}},creatorWallet:{...ee.creatorWallet,...S.creatorWallet||{},earnings:Array.isArray((e=S.creatorWallet)==null?void 0:e.earnings)?S.creatorWallet.earnings:[],payouts:Array.isArray((t=S.creatorWallet)==null?void 0:t.payouts)?S.creatorWallet.payouts:[],available:Number((s=S.creatorWallet)==null?void 0:s.available)||0,holds:Number((i=S.creatorWallet)==null?void 0:i.holds)||0,threshold:Number((a=S.creatorWallet)==null?void 0:a.threshold)>0?Number(S.creatorWallet.threshold):25,verification:((n=S.creatorWallet)==null?void 0:n.verification)==="demo_verified"?"demo_verified":"demo_unverified"},brandApps:S.brandApps||[],listings:Array.isArray(S.listings)?S.listings:[],live:S.live??null,liveHistory:Array.isArray(S.liveHistory)?S.liveHistory:[],liveSongRequests:Array.isArray(S.liveSongRequests)?S.liveSongRequests:[],coins:{balance:Number((l=S.coins)==null?void 0:l.balance)||0,history:Array.isArray((o=S.coins)==null?void 0:o.history)?S.coins.history:[]},liveGiftLedger:Array.isArray(S.liveGiftLedger)?S.liveGiftLedger:[],liveGbChallengePop:S.liveGbChallengePop||null,threads:{...S.threads||{}},demoUnreadSeeded:!!S.demoUnreadSeeded,messagePrefs:{...ee.messagePrefs,...S.messagePrefs||{}},catalog:Array.isArray(S.catalog)?S.catalog:[],missions:Array.isArray(S.missions)?S.missions:[],giftBattles:{...ee.giftBattles,...S.giftBattles||{},history:Array.isArray((c=S.giftBattles)==null?void 0:c.history)?S.giftBattles.history:[],champions:Array.isArray((d=S.giftBattles)==null?void 0:d.champions)?S.giftBattles.champions:[],prefs:{...ee.giftBattles.prefs,...((p=S.giftBattles)==null?void 0:p.prefs)||{}},active:((m=S.giftBattles)==null?void 0:m.active)??null},multiGuest:{...ee.multiGuest,...S.multiGuest||{},history:Array.isArray((f=S.multiGuest)==null?void 0:f.history)?S.multiGuest.history:[],active:((b=S.multiGuest)==null?void 0:b.active)??null},fanClubs:{...ee.fanClubs,...S.fanClubs||{},clubs:Array.isArray((y=S.fanClubs)==null?void 0:y.clubs)?S.fanClubs.clubs:[],posts:(w=S.fanClubs)!=null&&w.posts&&typeof S.fanClubs.posts=="object"?S.fanClubs.posts:{},seeded:!!((h=S.fanClubs)!=null&&h.seeded)},shareEarn:{...ee.shareEarn,...S.shareEarn||{},platformsLinked:Array.isArray((v=S.shareEarn)==null?void 0:v.platformsLinked)?S.shareEarn.platformsLinked:[],challenge:(($=S.shareEarn)==null?void 0:$.challenge)??null,submissions:Array.isArray((k=S.shareEarn)==null?void 0:k.submissions)?S.shareEarn.submissions:[],rewardsClaimed:Array.isArray((x=S.shareEarn)==null?void 0:x.rewardsClaimed)?S.shareEarn.rewardsClaimed:[]},referEarn:{...ee.referEarn,...S.referEarn||{},code:typeof((L=S.referEarn)==null?void 0:L.code)=="string"?S.referEarn.code:"",invitees:Array.isArray((D=S.referEarn)==null?void 0:D.invitees)?S.referEarn.invitees:[],milestonesClaimed:Array.isArray((F=S.referEarn)==null?void 0:F.milestonesClaimed)?S.referEarn.milestonesClaimed:[]},restream:{...ee.restream,...S.restream||{},platforms:(T=S.restream)!=null&&T.platforms&&typeof S.restream.platforms=="object"?S.restream.platforms:{},selected:Array.isArray((ne=S.restream)==null?void 0:ne.selected)?S.restream.selected:[],session:(($e=S.restream)==null?void 0:$e.session)??null,history:Array.isArray((G=S.restream)==null?void 0:G.history)?S.restream.history:[],ingest:((ye=S.restream)==null?void 0:ye.ingest)??null,campaign:{...ee.restream.campaign,...((xe=S.restream)==null?void 0:xe.campaign)||{}},campaignConfig:((C=S.restream)==null?void 0:C.campaignConfig)??null},loyalty:{...ee.loyalty,...S.loyalty||{},points:Number((P=S.loyalty)==null?void 0:P.points)||0,history:Array.isArray((q=S.loyalty)==null?void 0:q.history)?S.loyalty.history:[],badges:Array.isArray((V=S.loyalty)==null?void 0:V.badges)?S.loyalty.badges:[],publicVisible:((H=S.loyalty)==null?void 0:H.publicVisible)===void 0?!0:!!S.loyalty.publicVisible,lastActionAt:(j=S.loyalty)!=null&&j.lastActionAt&&typeof S.loyalty.lastActionAt=="object"?S.loyalty.lastActionAt:{},dayCounts:(z=S.loyalty)!=null&&z.dayCounts&&typeof S.loyalty.dayCounts=="object"?S.loyalty.dayCounts:{}},openMic:{...ee.openMic,...S.openMic||{},applications:Array.isArray((we=S.openMic)==null?void 0:we.applications)?S.openMic.applications:[],seeded:!!((Ee=S.openMic)!=null&&Ee.seeded),houseIndex:typeof((Re=S.openMic)==null?void 0:Re.houseIndex)=="number"?S.openMic.houseIndex:0},profileShop:{...ee.profileShop,...S.profileShop||{},owned:Array.isArray((Fe=S.profileShop)==null?void 0:Fe.owned)?S.profileShop.owned:[],equipped:(ot=S.profileShop)!=null&&ot.equipped&&typeof S.profileShop.equipped=="object"?S.profileShop.equipped:{},reduceMotion:!!((lt=S.profileShop)!=null&&lt.reduceMotion)},hotFeed:{...ee.hotFeed,...S.hotFeed||{},lives:Array.isArray((ct=S.hotFeed)==null?void 0:ct.lives)?S.hotFeed.lives:[],posts:Array.isArray((dt=S.hotFeed)==null?void 0:dt.posts)?S.hotFeed.posts:[],seededLives:!!((J=S.hotFeed)!=null&&J.seededLives),seededPosts:!!((E=S.hotFeed)!=null&&E.seededPosts),seededPostsVer:Number((pe=S.hotFeed)==null?void 0:pe.seededPostsVer)||0},engagementAlerts:Array.isArray(S.engagementAlerts)?S.engagementAlerts:[],postShares:S.postShares&&typeof S.postShares=="object"?S.postShares:{},creatorSellApps:Array.isArray(S.creatorSellApps)?S.creatorSellApps:[],dailyGoals:{...ee.dailyGoals,...S.dailyGoals||{},app:((fa=S.dailyGoals)==null?void 0:fa.app)??null,liveByHost:(ha=S.dailyGoals)!=null&&ha.liveByHost&&typeof S.dailyGoals.liveByHost=="object"?S.dailyGoals.liveByHost:{},history:Array.isArray((ba=S.dailyGoals)==null?void 0:ba.history)?S.dailyGoals.history:[]}}}catch{return Xt()}}function A(e){localStorage.setItem(hn,JSON.stringify(e))}let u=uo();function M(){return u}function wa(e){return u={...u,...e},A(u),u}function po(e){return u=e(u)||u,A(u),u}function st(e){e&&(u={...u,profiles:{...u.profiles,[e.id]:{id:e.id,username:e.username,bio:e.bio||"",avatar:e.avatar||"",followers:e.followers||[],following:e.following||[],memberships:e.memberships||{},verified:!!e.verified}}})}function vt(e){return e?u.user&&u.user.id===e?u.user:u.profiles[e]||null:null}function Sa(e){const t=vt(e);return t?(t.followers||[]).map(s=>vt(s)||{id:s,username:s}).filter(Boolean):[]}function ki(e){const t=vt(e);return t?(t.following||[]).map(s=>vt(s)||{id:s,username:s}).filter(Boolean):[]}function bn(){if(u.posts.length)return;const e=[{id:"p1",userId:"dbs",username:"DatBoiSkeet",text:"Long Story Short — cover is up. Coming Soon on DBS Music. Stay ready.",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",at:Date.now()-864e5*2},{id:"p2",userId:"dbs",username:"DatBoiSkeet",text:"Foreign X-Change — hats, tees & jackets. Checkout on ForeignX-Change.com (not inside DBS).",image:"/merch/01_black_orange_716_hat.jpeg",at:Date.now()-864e5},{id:"p3",userId:"dbs",username:"DatBoiSkeet",text:"Ladies Only — cover art live. Official playback unlocks when the single drops.",image:"/music/02_Ladies_Only_Coming_Soon.jpg",at:Date.now()-864e5*3},{id:"p4",userId:"dbs",username:"DatBoiSkeet",text:"716 Buffalo Braves snapback on Foreign X-Change — shop the external store.",image:"/merch/02_blue_red_716_hat.jpeg",at:Date.now()-864e5*4}];u={...u,posts:e,likes:{p1:[],p2:[],p3:[],p4:[]},comments:{p1:[],p2:[],p3:[],p4:[]}},A(u)}function It(e){const t=(e||"Fan").trim().slice(0,24)||"Fan",s="u_"+t.toLowerCase().replace(/\W+/g,"_")+"_"+Date.now().toString(36),i={id:s,username:t,bio:"DBS fan · local demo account (TEST MODE)",avatar:"",followers:[],following:["dbs"],membership:null,memberships:{skeetPlus:!1,backstage:!1,innerCircle:!1},purchasedTracks:[],createdAt:Date.now()},a=u.profiles.dbs||Xt().profiles.dbs,n=new Set(a.followers||[]);return n.add(s),u={...u,user:i,profiles:{...u.profiles,dbs:{...a,followers:[...n]}}},st(i),A(u),i}function mo(){u={...u,user:null},A(u)}function go({bio:e,avatar:t,username:s}){const i=u.user;if(!i)return{error:"signin"};const a={...i,bio:e!==void 0?String(e).slice(0,280):i.bio,avatar:t!==void 0?String(t).trim():i.avatar,username:s!==void 0&&String(s).trim().slice(0,24)||i.username};return u={...u,user:a},st(a),A(u),a}function zs(e,t=!0){const s=u.user;if(!s)return{error:"signin"};let i=s.membership??null;const a=d=>d==="skeet"||d==="skeetPlus"||d==="skeet+"?"skeet+":d==="backstage"?"backstage":d==="inner"||d==="innerCircle"?"inner":null,n={null:0,"skeet+":1,backstage:2,inner:3},l=a(e);t?l&&(i=l):i=null;const o={skeetPlus:n[i||"null"]>=1,backstage:n[i||"null"]>=2,innerCircle:n[i||"null"]>=3},c={...s,membership:i,memberships:o};return u={...u,user:c},st(c),A(u),c}function wt(){const e=u.user;if(!e)return null;if(e.membership)return e.membership;const t=e.memberships||{};return t.innerCircle?"inner":t.backstage?"backstage":t.skeetPlus?"skeet+":null}function $i(e="skeet"){const t=wt(),s={null:0,"skeet+":1,backstage:2,inner:3},i=e==="backstage"?2:e==="inner"?3:1;return(s[t||"null"]||0)>=i}function fo(e){const t=u.user;if(!t)return{error:"signin"};const s=new Set(t.purchasedTracks||[]);s.add(e);const i={...t,purchasedTracks:[...s]};return u={...u,user:i},st(i),A(u),i}function ka({text:e,image:t,mediaType:s,mediaUrl:i}){const a=u.user;if(!a)throw new Error("Sign in required");const n="p_"+Date.now().toString(36),l=["picture","short","video","image","text"].includes(s)?s==="image"?"picture":s:t?"picture":"text",o={id:n,userId:a.id,username:a.username,text:(e||"").trim(),image:(t||"").trim(),mediaType:l==="text"&&!(t||"").trim()?"text":l,mediaUrl:(i||"").trim(),at:Date.now()};return u={...u,posts:[o,...u.posts],likes:{...u.likes,[n]:[]},comments:{...u.comments,[n]:[]}},A(u),o}function ho(e){const t=u.user;if(!t)return{error:"signin"};const s=new Set(u.likes[e]||[]);s.has(t.id)?s.delete(t.id):s.add(t.id),u={...u,likes:{...u.likes,[e]:[...s]}},A(u);try{Be()}catch{}return{count:s.size,liked:s.has(t.id)}}function bo(e,t){const s=u.user;if(!s)return{error:"signin"};const i={id:"c_"+Date.now().toString(36),userId:s.id,username:s.username,text:t.trim(),at:Date.now()},a=u.comments[e]||[];u={...u,comments:{...u.comments,[e]:[...a,i]}},A(u);try{Be()}catch{}return i}function Us(e){const t=u.user;if(!t)return{error:"signin"};if(e===t.id)return{error:"self"};if(t.following.includes(e))return t;const s={...t,following:[...t.following,e]},i={...u.profiles},a=i[e]||vt(e);if(a){const n=new Set(a.followers||[]);n.add(t.id),i[e]={...a,followers:[...n]}}return u={...u,user:s,profiles:i},st(s),A(u),s}function Vs(e){const t=u.user;if(!t)return{error:"signin"};const s={...t,following:(t.following||[]).filter(n=>n!==e)},i={...u.profiles},a=i[e]||vt(e);return a&&(i[e]={...a,followers:(a.followers||[]).filter(n=>n!==t.id)}),u={...u,user:s,profiles:i},st(s),A(u),s}function vo(e){const t={id:"clip_"+Date.now().toString(36),...e,status:"pending",at:Date.now()};return u={...u,clipperApps:[t,...u.clipperApps]},A(u),t}function yo(e){const t=e||{},s=String(t.name||"").trim().slice(0,80),i=String(t.contact||t.email||t.handle||"").trim().slice(0,120),a=String(t.sells||"both").trim().slice(0,40),n=!!t.agreed;if(!s||!i)return{error:"missing"};if(!n)return{error:"rules"};const l={id:"csa_"+Date.now().toString(36),name:s,contact:i,sells:["music","merch","both"].includes(a)?a:"both",agreed:!0,status:"pending",at:Date.now()},o=[l,...u.creatorSellApps||[]].slice(0,40);return u={...u,creatorSellApps:o},A(u),{ok:!0,app:l}}function vn(e,t){if(!["pending","approved","rejected","waitlisted"].includes(t))return{error:"bad_status"};const i=u.clipperApps.map(a=>a.id===e?{...a,status:t,reviewedAt:Date.now()}:a);return u={...u,clipperApps:i},A(u),i.find(a=>a.id===e)}function wo(e){u={...u,notifications:{...u.notifications,...e}},A(u)}function So(){u={...u,splashSeenAt:Date.now()},A(u)}function ko(){return!u.splashSeenAt}function Z(){return!!(u.user&&u.user.role==="admin")}function ds(e=!0){const t=u.user;if(!t)return{error:"signin"};const s={...t,role:e?"admin":"fan"};return u={...u,user:s},st(s),A(u),s}function yn(){var o;const e=u.posts||[],t=u.clipperApps||[],s={pending:0,approved:0,rejected:0,waitlisted:0};t.forEach(c=>{const d=c.status||"pending";s[d]!==void 0?s[d]+=1:s.pending+=1});let i=0;Object.values(u.likes||{}).forEach(c=>{i+=(c||[]).length});let a=0;Object.values(u.comments||{}).forEach(c=>{a+=(c||[]).length});let n=0;u.user&&(u.user.membership||(o=u.user.memberships)!=null&&o.skeetPlus)&&(n+=1),Object.values(u.profiles||{}).forEach(c=>{var d,p;c.id!==((d=u.user)==null?void 0:d.id)&&(c.membership||(p=c.memberships)!=null&&p.skeetPlus)&&(n+=1)});const l=u.catalog||[];return{posts:e.length,likes:i,comments:a,clippers:t.length,clipperByStatus:s,members:n,profiles:Object.keys(u.profiles||{}).length,catalogTotal:l.length,catalogPublished:l.filter(c=>c.published).length}}function wn(e){const t=["spotify","apple","youtubeMusic","youtube","tidal","amazon"],s={};if(!e||typeof e!="object")return s;for(const i of t){const a=String(e[i]||"").trim();(a.startsWith("http://")||a.startsWith("https://"))&&(s[i]=a.slice(0,500))}return s}function bt({publishedOnly:e=!1,types:t=null,includeUnpublishedForAdmin:s=!1}={}){let i=u.catalog||[];if(e?i=i.filter(a=>a.published):s||(i=i.filter(a=>a.published)),t&&t.length){const a=new Set(t);i=i.filter(n=>a.has(n.type))}return[...i].sort((a,n)=>(n.createdAt||0)-(a.createdAt||0))}function $o(e){var i;if(!Z())return{error:"forbidden"};const s={id:e.id||"cat_"+Date.now().toString(36),type:e.type,title:String(e.title||"").trim().slice(0,120),artist:String(e.artist).trim().slice(0,80),coverRef:e.coverRef||"",mediaRef:e.mediaRef||"",youtube:String(e.youtube||"").trim(),embed:String(e.embed||"").trim(),streamingLinks:wn(e.streamingLinks),published:!!e.published,createdAt:Date.now(),updatedAt:Date.now(),createdBy:((i=u.user)==null?void 0:i.id)||null};return s.title?["song","album","video","picture"].includes(s.type)?(u={...u,catalog:[s,...u.catalog||[]]},A(u),s):{error:"type"}:{error:"title"}}function Sn(e,t){if(!Z())return{error:"forbidden"};let s=null;const i=(u.catalog||[]).map(a=>{if(a.id!==e)return a;const n={...a,...t,id:a.id,updatedAt:Date.now()};return t&&Object.prototype.hasOwnProperty.call(t,"streamingLinks")&&(n.streamingLinks=wn(t.streamingLinks)),s=n,s});return s?(u={...u,catalog:i},A(u),s):{error:"missing"}}function xo(e,t){return Sn(e,{published:!!t})}function Eo(e){if(!Z())return{error:"forbidden"};const t=(u.catalog||[]).filter(s=>s.id!==e);return u={...u,catalog:t},A(u),!0}function $a(e){const t=u.user;if(!t)return{error:"signin"};if(u.live&&!u.live.endedAt)return{error:"already_live",live:u.live};const s={id:"live_"+Date.now().toString(36),hostId:t.id,hostName:t.username,title:(e||"DBS Live · TEST MODE").trim().slice(0,80),startedAt:Date.now(),viewers:3+Math.floor(Math.random()*18),giftsTotal:0,tipsTotal:0,giftLog:[],chat:[{id:"sys1",userId:"system",username:"DBS",text:"Welcome · Follow DatBoiSkeet · TEST MODE (no real stream)",at:Date.now()}],endedAt:null};return u={...u,live:s},A(u),s}function Ao(){if(!u.live||u.live.endedAt)return u.live;const e={...u.live,endedAt:Date.now()},t=[e,...u.liveHistory||[]].slice(0,20);return u={...u,live:e,liveHistory:t},A(u),e}function To(){if(!u.live||u.live.endedAt)return u.live;const e=Math.floor(Math.random()*5)-1,t=Math.max(1,(u.live.viewers||1)+e),s={...u.live,viewers:t};return u={...u,live:s},A(u),s}function Do(e){const t=u.user;if(!t)return{error:"signin"};if(!u.live||u.live.endedAt)return{error:"offline"};const s={id:"lc_"+Date.now().toString(36),userId:t.id,username:t.username,text:String(e||"").trim().slice(0,280),at:Date.now()};if(!s.text)return{error:"empty"};const i={...u.live,chat:[...u.live.chat||[],s]};return u={...u,live:i},A(u),s}function kn({kind:e="tip",amount:t=1,label:s=""}={}){var m;const i=u.user;if(!i)return{error:"signin"};if(!u.live||u.live.endedAt)return{error:"offline"};const a=Math.max(.5,Number(t)||1),n=e==="gift"?"gift":"tip",l=((m=u.wallet)==null?void 0:m.balance)||0;let o=u.wallet||{balance:0,history:[]};l>=a&&(o={balance:+(l-a).toFixed(2),history:[...o.history||[],{at:Date.now(),amount:-a,note:`Live ${n} · ${u.live.title}`}]});const c={id:"lg_"+Date.now().toString(36),userId:i.id,username:i.username,kind:n,amount:a,label:(s||(n==="gift"?"🔥 Fire":"Tip")).slice(0,40),at:Date.now()},d={id:"lc_"+Date.now().toString(36)+"g",userId:i.id,username:i.username,text:n==="gift"?`sent ${c.label} ($${a.toFixed(2)}) · TEST MODE`:`tipped $${a.toFixed(2)} · TEST MODE`,at:Date.now(),support:!0},p={...u.live,giftsTotal:(u.live.giftsTotal||0)+(n==="gift"?a:0),tipsTotal:(u.live.tipsTotal||0)+(n==="tip"?a:0),giftLog:[...u.live.giftLog||[],c],chat:[...u.live.chat||[],d]};return u={...u,live:p,wallet:o},A(u),l>=a&&Vi({category:n==="gift"?"gifts":"tips",gross:a,note:`Live ${n} from @${i.username} · ${u.live.title}`,source:"live"}),{live:p,entry:c,wallet:u.wallet,creatorWallet:u.creatorWallet}}function Co(){return u.liveHistory||[]}const $n=[{pack:1,price:10,label:"1 song",save:0},{pack:2,price:25,label:"2 songs",save:0},{pack:3,price:45,label:"3 songs",save:5}];function Zt(){return Array.isArray(u.liveSongRequests)?u.liveSongRequests:[]}function Mo(e){var s;const t=e||((s=u.live)==null?void 0:s.id);return t?Zt().filter(i=>i.liveId===t):[]}function Ni(e){const t=[];for(const s of Mo(e))(s.titles||[]).forEach((i,a)=>{t.push({requestId:s.id,songIndex:a,title:i,status:s.songStatuses&&s.songStatuses[a]||"queued",username:s.username,userId:s.userId,pack:s.pack,price:s.price,at:s.at})});return t}function Lo({pack:e,titles:t}={}){var p;const s=u.user;if(!s)return{error:"signin"};if(!u.live||u.live.endedAt)return{error:"offline"};const i=$n.find(m=>m.pack===Number(e));if(!i)return{error:"bad_pack"};const a=(Array.isArray(t)?t:[]).map(m=>String(m||"").trim().slice(0,80)).filter(Boolean);if(a.length!==i.pack)return{error:"title_count",need:i.pack,got:a.length};const n=qn(i.price,`Song request ×${i.pack} · ${u.live.title} · TEST MODE`);if((n==null?void 0:n.error)==="insufficient")return{error:"insufficient",need:i.price,balance:Number(((p=u.wallet)==null?void 0:p.balance)||0)};const l={id:"lsr_"+Date.now().toString(36),liveId:u.live.id,hostId:u.live.hostId,userId:s.id,username:s.username,pack:i.pack,price:i.price,titles:a,songStatuses:a.map(()=>"queued"),status:"open",at:Date.now(),charged:i.price},o=[l,...Zt()].slice(0,200),c={id:"lc_"+Date.now().toString(36)+"sr",userId:s.id,username:s.username,text:`requested ${i.pack} song${i.pack>1?"s":""} ($${i.price}) · TEST MODE`,at:Date.now(),support:!0},d={...u.live,chat:[...u.live.chat||[],c]};return u={...u,liveSongRequests:o,live:d},A(u),Vi({category:"tips",gross:i.price,note:`Song request ×${i.pack} from @${s.username} · ${u.live.title}`,source:"live_song_request"}),{ok:!0,entry:l,wallet:u.wallet,live:u.live}}function ji(e,t,s){var y;const i=u.user;if(!i)return{error:"signin"};if(!["playing","played","skipped","queued"].includes(s))return{error:"bad_status"};const n=Zt().findIndex(w=>w.id===e);if(n<0)return{error:"missing"};const l=Zt()[n],o=u.live;if(!(o&&o.hostId===i.id&&o.id===l.liveId||i.id===l.hostId)&&!Z())return{error:"host_only"};const d=Number(t);if(!Number.isInteger(d)||d<0||d>=(l.titles||[]).length)return{error:"bad_index"};let p=[...l.songStatuses||l.titles.map(()=>"queued")];if(s==="playing"){const w=Zt().map(h=>{if(h.liveId!==l.liveId)return h;const v=[...h.songStatuses||(h.titles||[]).map(()=>"queued")];let $=!1;for(let x=0;x<v.length;x++)v[x]==="playing"&&(v[x]="played",$=!0);if(!$)return h;const k=v.every(x=>x==="played"||x==="skipped");return{...h,songStatuses:v,status:k?"done":"open"}});u={...u,liveSongRequests:w},p=[...((y=u.liveSongRequests[n])==null?void 0:y.songStatuses)||p]}p[d]=s;const m=p.every(w=>w==="played"||w==="skipped"),f={...u.liveSongRequests[n],songStatuses:p,status:m?"done":"open"},b=[...u.liveSongRequests];return b[n]=f,u={...u,liveSongRequests:b},A(u),{ok:!0,entry:f}}function Po(e,t){return ji(e,t,"playing")}function Io(e,t){return ji(e,t,"skipped")}function _o(e,t){return ji(e,t,"played")}const Ri=[{slug:"rose",name:"DBS Rose",coins:5,usd:.1,animation:"Rotating glossy rose and petals",tier:"small"},{slug:"big-love",name:"Big Love",coins:25,usd:.5,animation:"Pulsing luminous heart",tier:"small"},{slug:"turn-up",name:"Turn Up",coins:50,usd:1,animation:"Flame burst and DBS sparks",tier:"small"},{slug:"cash-rain",name:"Cash Rain",coins:150,usd:3,animation:"Stylized bills and confetti",tier:"mid"},{slug:"bottle-pop",name:"Bottle Pop",coins:300,usd:6,animation:"Bottle pop and confetti",tier:"mid"},{slug:"money-gun",name:"Money Gun",coins:750,usd:15,animation:"Stylized cash launcher",tier:"premium"},{slug:"diamond-drip",name:"Diamond Drip",coins:1500,usd:30,animation:"Rotating diamond",tier:"premium"},{slug:"foreign-whip",name:"Foreign Whip",coins:3e3,usd:60,animation:"Original luxury vehicle drives across screen",tier:"premium"},{slug:"helicopter",name:"Helicopter",coins:5e3,usd:100,animation:"Helicopter spotlight flyover",tier:"cinematic"},{slug:"private-jet",name:"Private Jet",coins:1e4,usd:200,animation:"Jet cinematic flyover",tier:"cinematic"},{slug:"dbs-crown",name:"DBS Crown",coins:25e3,usd:500,animation:"Gold diamond crown",tier:"cinematic"},{slug:"dbs-universe",name:"DBS Universe",coins:5e4,usd:1e3,animation:"Galaxy DBS logo reveal",tier:"cinematic"}],Hs=[{coins:100,usd:2},{coins:500,usd:10},{coins:1e3,usd:20},{coins:2500,usd:50},{coins:5e3,usd:100},{coins:1e4,usd:200}],qo=750,oi=80,xa=20;function Ks(e){return{balance:Math.max(0,Number(e==null?void 0:e.balance)||0),history:Array.isArray(e==null?void 0:e.history)?e.history:[]}}function Ws(){return Ks(u.coins).balance}function Bo(){return Hs.map(e=>({...e}))}function Oo(){return Ri.map(e=>({...e}))}function xn(e){const t=Hs.find(n=>n.coins===Number(e));if(!t)return{error:"bad_package"};const s=Ks(u.coins),i={at:Date.now(),amount:t.coins,note:`Bought ${t.coins} coins ($${t.usd}) · TEST MODE`,kind:"buy",packageCoins:t.coins,usd:t.usd},a={balance:s.balance+t.coins,history:[i,...s.history].slice(0,200)};return u={...u,coins:a},A(u),{ok:!0,coins:a,pack:t,entry:i}}function Fi(){return Array.isArray(u.liveGiftLedger)?u.liveGiftLedger:[]}function No(e){var s;const t=e||((s=u.live)==null?void 0:s.id);return t?Fi().filter(i=>i.liveId===t).map(i=>({id:i.id,liveId:i.liveId,giftSlug:i.giftSlug,giftName:i.giftName,coins:i.coins,usd:i.usd,fromUserId:i.fromUserId,fromUser:i.fromUser,at:i.at,animation:i.animation,tier:i.tier})):[]}function jo(e=10,t=Date.now()){const s=Math.min(Math.max(1,Number(e)||10),10),i=new Date(t);i.setHours(0,0,0,0);const a=i.getTime(),n=new Date(t);n.setHours(23,59,59,999);const l=n.getTime(),o={};for(const c of Fi()){const d=Number(c.at||0);if(d<a||d>l)continue;const p=c.fromUserId||c.fromUser||"anon",m=o[p]||{userId:p,username:c.fromUser||p,usd:0,coins:0,gifts:0,lastSlug:c.giftSlug||"rose"};m.usd=+(m.usd+Number(c.usd||0)).toFixed(2),m.coins+=Number(c.coins||0),m.gifts+=1,m.username=c.fromUser||m.username,m.lastSlug=c.giftSlug||m.lastSlug,o[p]=m}return Object.values(o).sort((c,d)=>d.usd-c.usd||d.coins-c.coins||c.username.localeCompare(d.username)).slice(0,s)}function En(e){let s=(Ui(u.creatorWallet).earnings||[]).filter(i=>i.category==="gifts");return e&&(s=s.filter(i=>!i.hostId||i.hostId===e)),s.map(i=>({...i}))}function Ro({liveId:e,slug:t}={}){const s=u.user;if(!s)return{error:"signin"};const i=u.live;if(!i||i.endedAt)return{error:"offline"};if(e&&e!==i.id)return{error:"live_mismatch"};const a=Ri.find(T=>T.slug===t);if(!a)return{error:"bad_gift"};const n=Ks(u.coins);if(n.balance<a.coins)return{error:"insufficient",need:a.coins,balance:n.balance};const l=_(a.usd),o=0,c=l,d=_(c*oi/100),p=_(c-d),m=Date.now(),f="lgift_"+m.toString(36)+"_"+Math.random().toString(36).slice(2,6),b={at:m,amount:-a.coins,note:`Gift ${a.name} · ${i.title} · TEST MODE`,kind:"gift",giftSlug:a.slug,liveId:i.id,usd:l},y={balance:n.balance-a.coins,history:[b,...n.history].slice(0,200)},w={id:f,liveId:i.id,hostId:i.hostId,giftSlug:a.slug,giftName:a.name,coins:a.coins,usd:l,fees:o,net:c,creatorShare:d,platformShare:p,dbsShare:p,creatorPct:oi,dbsPct:xa,fromUserId:s.id,fromUser:s.username,at:m,animation:a.animation,tier:a.tier,testModeNetAsListed:!0},h={id:f,userId:s.id,username:s.username,kind:"gift",giftSlug:a.slug,label:a.name,amount:l,coins:a.coins,at:m},v={id:"lc_"+m.toString(36)+"gf",userId:s.id,username:s.username,text:`sent ${a.name} (${a.coins} coins) · TEST MODE`,at:m,support:!0,giftSlug:a.slug},$={...i,giftsTotal:_((i.giftsTotal||0)+l),giftLog:[...i.giftLog||[],h],chat:[...i.chat||[],v]},k=[w,...Fi()].slice(0,500),x=Ui(u.creatorWallet),L={id:"earn_"+m.toString(36)+"_"+Math.random().toString(36).slice(2,6),category:"gifts",label:"Live gifts",note:`Live gift ${a.name} from @${s.username} · ${i.title}`,gross:l,fees:o,net:c,creatorPct:oi,dbsPct:xa,creatorShare:d,dbsShare:p,source:"live_gift",giftSlug:a.slug,giftId:f,liveId:i.id,hostId:i.hostId,fromUserId:s.id,at:m,payoutId:null},D={...x,available:_(x.available+d),earnings:[L,...x.earnings||[]]},F={id:"gbpop_"+m.toString(36),liveId:i.id,fromUserId:s.id,fromUser:s.username,giftSlug:a.slug,giftName:a.name,coins:a.coins,usd:l,at:m,expiresAt:m+6e4};return u={...u,coins:y,live:$,liveGiftLedger:k,creatorWallet:D,liveGbChallengePop:F},A(u),{ok:!0,entry:w,viewerEntry:h,coins:y,live:$,earning:L,creatorWallet:D,challengePop:F}}const An=24*60*60*1e3,Ea=50;function Ys(e){return{app:e!=null&&e.app&&typeof e.app=="object"?e.app:null,liveByHost:e!=null&&e.liveByHost&&typeof e.liveByHost=="object"?{...e.liveByHost}:{},history:Array.isArray(e==null?void 0:e.history)?e.history:[]}}function as(e,t=Date.now()){return!e||typeof e!="object"?!1:(Number(e.endsAt)||0)>t}function Dt(e){return e?{...e}:null}function Tn(e){return"goal_"+e+"_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6)}function Gi(e,t){if(!t)return e;const s=[{...t,archivedAt:Date.now()},...e.history||[]].slice(0,40);return{...e,history:s}}function Fo(e=Date.now()){return{id:Tn("app"),scope:"app",name:"PIKK daily community goal",targetAmount:50,raised:0,endsAt:e+An,createdAt:e}}function _s(e){return u={...u,dailyGoals:e},A(u),e}function xi(e=Date.now()){let t=Ys(u.dailyGoals),s=!1;return t.app&&!as(t.app,e)&&(t={...Gi(t,t.app),app:null},s=!0),as(t.app,e)||(t={...t,app:Fo(e)},s=!0),s&&_s(t),t.app&&t.app.name==="DBS daily community goal"&&(t={...t,app:{...t.app,name:"PIKK daily community goal"}},_s(t)),Dt(t.app)}function Go(e,t=Date.now()){var n,l;const s=e||((n=u.live)==null?void 0:n.hostId)||((l=u.user)==null?void 0:l.id)||null;if(!s)return null;let i=Ys(u.dailyGoals);const a=i.liveByHost[s]||null;if(a&&!as(a,t)){const o={...i.liveByHost};return delete o[s],i={...Gi(i,a),liveByHost:o},_s(i),null}return Dt(as(a,t)?a:null)}function Dn({name:e,targetAmount:t}={}){const s=u.user;if(!s)return{error:"signin"};const i=String(e||"").trim().slice(0,80),a=Number(t);if(!i)return{error:"bad_name"};if(!Number.isFinite(a)||a<=0)return{error:"bad_amount"};const n=Date.now();let l=Ys(u.dailyGoals);const o=l.liveByHost[s.id];o&&(l=Gi(l,o));const c={id:Tn("live"),scope:"live",hostId:s.id,hostName:s.username,name:i,targetAmount:_(a),raised:0,endsAt:n+An,createdAt:n};return l={...l,liveByHost:{...l.liveByHost,[s.id]:c}},_s(l),{ok:!0,goal:Dt(c)}}function qs(e,t){if(!u.user)return{error:"signin"};const i=Math.floor(Number(t));if(!Number.isFinite(i)||i<=0)return{error:"invalid_amount"};const a=String(e||"");if(!a)return{error:"unknown_goal"};const n=Date.now();let l=Ys(u.dailyGoals),o=null,c=null,d=null;if(l.app&&l.app.id===a)o="app",d=l.app;else for(const[x,L]of Object.entries(l.liveByHost))if(L&&L.id===a){o="live",c=x,d=L;break}if(!d)return{error:"unknown_goal"};if(!as(d,n))return{error:"expired"};const p=Number(d.targetAmount)||0,m=Number(d.raised)||0;if(d.completedAt||p>0&&m>=p)return{error:"completed",goal:Dt(d)};let f=i;if(p>0){const x=Math.max(0,_(p-m)),L=Math.ceil(x*Ea);if(L<=0)return{error:"completed",goal:Dt(d)};f>L&&(f=L)}const b=Ks(u.coins);if(b.balance<f)return{error:"insufficient",need:f,balance:b.balance};const y=_(f/Ea),w=_(m+y),h=p>0&&w>=p?n:d.completedAt,v={...d,raised:p>0?Math.min(w,_(p)):w,...h?{completedAt:h}:{}},$={at:n,amount:-f,note:`Goal donate · ${d.name} · $${y.toFixed(2)} · TEST MODE`,kind:"goal",goalId:d.id,usd:y},k={balance:b.balance-f,history:[$,...b.history].slice(0,200)};return o==="app"?l={...l,app:v}:l={...l,liveByHost:{...l.liveByHost,[c]:v}},u={...u,dailyGoals:l,coins:k},A(u),{ok:!0,goal:Dt(v),coins:k,donated:{coins:f,usd:y,requested:i}}}function zo(e){const t=u.user,s={id:"brand_"+Date.now().toString(36),brand:String(e.brand||"").trim().slice(0,80),contact:String(e.contact||"").trim().slice(0,120),email:String(e.email||"").trim().slice(0,120),campaign:String(e.campaign||"sponsored_post").trim().slice(0,40),budget:String(e.budget||"").trim().slice(0,40),pitch:String(e.pitch||"").trim().slice(0,500),url:String(e.url||"").trim().slice(0,300),applicantUserId:(t==null?void 0:t.id)||null,status:"pending",at:Date.now()};return!s.brand||!s.email?{error:"required"}:(u={...u,brandApps:[s,...u.brandApps]},A(u),s)}function Uo(e,t){if(!["pending","approved","rejected"].includes(t))return{error:"bad_status"};const i=u.brandApps.map(a=>a.id===e?{...a,status:t,reviewedAt:Date.now()}:a);return u={...u,brandApps:i},A(u),i.find(a=>a.id===e)}function Aa(e){const t=u.user,s={id:"list_"+Date.now().toString(36),title:String(e.title||"").trim().slice(0,80),brand:String(e.brand||"").trim().slice(0,80),blurb:String(e.blurb||"").trim().slice(0,280),url:String(e.url||"").trim().slice(0,300),disclosure:String(e.disclosure||"Paid partnership · TEST MODE").trim().slice(0,120),brandAppId:e.brandAppId||null,createdBy:(t==null?void 0:t.id)||null,active:!0,at:Date.now()};return!s.title||!s.brand?{error:"required"}:(u={...u,listings:[s,...u.listings||[]]},A(u),s)}function Vo(e,t){const s=(u.listings||[]).map(i=>i.id===e?{...i,active:!!t}:i);return u={...u,listings:s},A(u),s.find(i=>i.id===e)}function Ho({activeOnly:e=!1}={}){const t=u.listings||[];return e?t.filter(s=>s.active):t}function Ko(e){var s;return[((s=u.user)==null?void 0:s.id)||"guest",e].sort().join("__")}function Cn(){const e=u.user;return e?Object.values(u.threads||{}).filter(t=>{var s;return(s=t.participants)==null?void 0:s.includes(e.id)}).sort((t,s)=>(s.updatedAt||0)-(t.updatedAt||0)):[]}function Mn(e){const t=u.user;if(!t||!e||e.muted||e.blocked)return 0;const s=e.lastReadAt||0;return(e.messages||[]).filter(i=>i.from!==t.id&&(i.at||0)>s).length}function Xe(){return Cn().reduce((e,t)=>e+Mn(t),0)}function Wo(e){const t=u.user;if(!t||!e)return null;const s=u.threads[e];if(!s||!(s.participants||[]).includes(t.id))return null;const i={...s,lastReadAt:Date.now()};u={...u,threads:{...u.threads,[i.id]:i},demoUnreadSeeded:!0},A(u);try{typeof window<"u"&&window.dispatchEvent&&window.dispatchEvent(new CustomEvent("dbs:messages-unread",{detail:{count:Xe()}}))}catch{}return u.threads[i.id]}function zi(){var d;const e=u.user;if(!e)return{seeded:!1};if(us(),u.demoUnreadSeeded)return{seeded:!1,count:Xe(),once:!0};if(Xe()>0)return u={...u,demoUnreadSeeded:!0},A(u),{seeded:!1,count:Xe()};const t="maya",s=(((d=u.profiles)==null?void 0:d.maya)||{}).username||"MayaBeats",i=es(t,s);if(i.error)return i;const a=u.threads[i.id];if((a.messages||[]).some(p=>p.from!==e.id)){const p=(a.messages||[]).filter(w=>w.from!==e.id).map(w=>w.at||0),m=a.lastReadAt||0;if(m>=Math.max(...p,0)||m>0)return u={...u,demoUnreadSeeded:!0},A(u),{seeded:!1,count:Xe()};const b=Math.min(...p),y={...a,lastReadAt:Math.max(0,b-1)};return u={...u,threads:{...u.threads,[y.id]:y},demoUnreadSeeded:!0},A(u),{seeded:!0,count:Xe()}}const l=Date.now(),o=[{id:"m_demo_unread_1",from:t,fromName:s,text:"Yo — drop coming Friday. You in for the listening party?",at:l-1e3*60*12},{id:"m_demo_unread_2",from:t,fromName:s,text:"Also sent a beat pack in the vault 🔥",at:l-1e3*60*5}],c={...a,messages:[...a.messages||[],...o],updatedAt:l-1e3*60*5,lastReadAt:0,request:!1};return u={...u,threads:{...u.threads,[c.id]:c},demoUnreadSeeded:!0},A(u),{seeded:!0,count:Xe()}}function Ln(e){return(u.threads||{})[e]||null}function Pn(e){var i;const t=u.user;if(!t||!e)return!1;const s=(i=u.profiles)==null?void 0:i[e];return s?(t.following||[]).includes(e)&&(s.following||[]).includes(t.id):!1}function es(e,t){const s=u.user;if(!s)return{error:"signin"};const i=Ko(e);let a=u.threads[i];if(!a){const n=e==="dbs"||Pn(e);a={id:i,kind:"dm",participants:[s.id,e],peerId:e,peerName:t||e,messages:[],updatedAt:Date.now(),request:!n,muted:!1,blocked:!1},u={...u,threads:{...u.threads,[i]:a}},A(u)}return a}function Yo(e,t,s,{priority:i=!1}={}){const a=u.user;if(!a)return{error:"signin"};const n=String(s||"").trim().slice(0,500);if(!n)return{error:"empty"};const l=es(e,t);if(l.error)return l;const o={id:"m_"+Date.now().toString(36),from:a.id,fromName:a.username,text:n,at:Date.now(),priority:!!i},c={...u.threads[l.id],messages:[...u.threads[l.id].messages||[],o],updatedAt:Date.now(),peerName:t||u.threads[l.id].peerName};if(u={...u,threads:{...u.threads,[c.id]:c}},i){const d=u.wallet||{balance:0,history:[]};u={...u,wallet:{balance:d.balance,history:[...d.history||[],{at:Date.now(),amount:0,note:"Priority message · TEST MODE $2.99 (not charged)"}]}}}return A(u),{thread:u.threads[c.id],message:o}}function us(){const e={...u.profiles||{}};let t=!1;e.maya||(e.maya={id:"maya",username:"MayaBeats",bio:"Creator · beats & live demos",avatar:"",followers:[],following:["dbs"],verified:!1},t=!0),e.fanjay||(e.fanjay={id:"fanjay",username:"FanJay",bio:"Day-one fan · playlist curator",avatar:"",followers:[],following:["dbs"],verified:!1},t=!0);const s=u.user;if(s){const i={...e.maya},a=new Set(i.following||[]),n=new Set(i.followers||[]);a.has(s.id)||(a.add(s.id),t=!0),n.has(s.id)||(n.add(s.id),t=!0),i.following=[...a],i.followers=[...n],e.maya=i;let l=s;(s.following||[]).includes("maya")||(l={...s,following:[...s.following||[],"maya"]},t=!0),t&&(u={...u,user:l,profiles:e},st(l),A(u))}else t&&(u={...u,profiles:e},A(u));return[{id:"dbs",username:"DatBoiSkeet",team:!0,bio:(u.profiles.dbs||{}).bio||""},{id:"maya",username:u.profiles.maya.username,team:!1,bio:u.profiles.maya.bio},{id:"fanjay",username:u.profiles.fanjay.username,team:!1,bio:u.profiles.fanjay.bio}]}function Qo(e,t=[]){const s=u.user;if(!s)return{error:"signin"};const i=String(e).trim().slice(0,60)||"Group",a=[...new Set([s.id,...t.filter(Boolean)])],n=i.toLowerCase().replace(/\W+/g,"_").slice(0,24)||"group",l=n==="dbs_fans"?"group_dbs_fans":"group_"+n+"_"+String(s.id).slice(-4);let o=u.threads[l];if(!o)o={id:l,kind:"group",peerId:l,peerName:i,participants:a,memberIds:a,messages:[],updatedAt:Date.now(),muted:!1,blocked:!1},u={...u,threads:{...u.threads,[l]:o}},A(u);else if(s&&!(o.participants||[]).includes(s.id)){const c=[...new Set([...o.participants||[],s.id])],d=[...new Set([...o.memberIds||c,s.id])];o={...o,participants:c,memberIds:d},u={...u,threads:{...u.threads,[l]:o}},A(u)}return u.threads[l]}function Jo(){return u.user?(us(),Qo("DBS Fans",["dbs","maya","fanjay"])):{error:"signin"}}function Xo(e,t){const s=u.user;if(!s)return{error:"signin"};const i=u.threads[e];if(!i||i.kind!=="group")return{error:"not_group"};if(!(i.participants||[]).includes(s.id))return{error:"forbidden"};const a=String(t||"").trim().slice(0,500);if(!a)return{error:"empty"};const n={id:"m_"+Date.now().toString(36),from:s.id,fromName:s.username,text:a,at:Date.now(),priority:!1},l={...i,messages:[...i.messages||[],n],updatedAt:Date.now()};return u={...u,threads:{...u.threads,[l.id]:l}},A(u),{thread:u.threads[l.id],message:n}}function li(e,t={}){const s=u.threads[e];if(!s)return{error:"missing"};const i={...s,muted:t.muted!==void 0?!!t.muted:!!s.muted,blocked:t.blocked!==void 0?!!t.blocked:!!s.blocked,reportedAt:t.report?Date.now():s.reportedAt||null};return u={...u,threads:{...u.threads,[i.id]:i}},A(u),i}function Ta(e={}){const t={...u.messagePrefs||{allowDMs:!0,allowRequests:!0},...e};return u={...u,messagePrefs:t},A(u),t}const ht={gifts:{creatorPct:80,dbsPct:20,label:"Live gifts"},tips:{creatorPct:90,dbsPct:10,label:"Tips"},subscriptions:{creatorPct:85,dbsPct:15,label:"Subscriptions"},paid_content:{creatorPct:85,dbsPct:15,label:"Paid content"},referrals:{creatorPct:85,dbsPct:15,label:"Referrals"},clippers:{creatorPct:80,dbsPct:20,label:"Clippers"},sponsorships:{creatorPct:80,dbsPct:20,label:"Sponsorships"},merch:{creatorPct:85,dbsPct:15,label:"Merch / affiliate"}},Zo=[{category:"gifts",gross:40,note:"Live gifts · demo week"},{category:"tips",gross:22.5,note:"Live tips · demo week"},{category:"subscriptions",gross:29.99,note:"Skeet+ fan sub · demo"},{category:"referrals",gross:15,note:"Refer & Earn milestone · demo"},{category:"clippers",gross:50,note:"Clippers campaign payout · demo"},{category:"sponsorships",gross:100,note:"Sponsored livestream · demo"},{category:"merch",gross:35,note:"Foreign X-Change affiliate · demo"}];function _(e){return Math.round(Number(e)*100)/100}function Ui(e){const t=Xt().creatorWallet;return!e||typeof e!="object"?{...t}:{...t,...e,available:_(e.available??0),holds:_(e.holds??0),threshold:Number(e.threshold)>0?Number(e.threshold):25,verification:e.verification==="demo_verified"?"demo_verified":"demo_unverified",earnings:Array.isArray(e.earnings)?e.earnings:[],payouts:Array.isArray(e.payouts)?e.payouts:[]}}function it(){const e=Ui(u.creatorWallet);return u.creatorWallet!==e&&(u={...u,creatorWallet:e}),e}function In({category:e,gross:t,note:s,source:i="demo",at:a=Date.now()}){const n=ht[e]||ht.tips,l=_(Math.max(0,Number(t)||0)),o=_(l*.029+(l>0?.3:0)),c=_(Math.max(0,l-o)),d=_(c*n.creatorPct/100),p=_(c-d);return{id:"earn_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6),category:e,label:n.label,note:String(s||n.label).slice(0,120),gross:l,fees:o,net:c,creatorPct:n.creatorPct,dbsPct:n.dbsPct,creatorShare:d,dbsShare:p,source:i,at:a,payoutId:null}}function el(){return{...ht}}function ns(){return it()}function Vi(e){const t=In(e),s=it(),i={...s,available:_(s.available+t.creatorShare),earnings:[t,...s.earnings||[]]};return u={...u,creatorWallet:i},A(u),t}function _n({force:e=!1}={}){const t=it();if(!e&&(t.earnings||[]).length>0)return{skipped:!0,creatorWallet:t};const s=Date.now()-6*864e5,a=Zo.map((o,c)=>In({category:o.category,gross:o.gross,note:o.note,source:"seed",at:s+c*36e5})).map((o,c)=>({...o,id:"earn_seed_"+c+"_"+o.category})),n=_(a.reduce((o,c)=>o+c.creatorShare,0)),l={...t,available:e?n:_(t.available+n),earnings:e?a:[...a,...t.earnings||[]],holds:e?0:t.holds,payouts:e?[]:t.payouts};return e&&(l.available=n,l.holds=0,l.payouts=[],l.earnings=a),u={...u,creatorWallet:l},A(u),{seeded:a.length,creatorWallet:l}}function tl({amount:e}={}){const t=it(),s=(t.payouts||[]).find(f=>f.status==="pending");if(s)return{error:"pending_exists",pending:s};const i=_(t.available);if(i<t.threshold)return{error:"below_threshold",available:i,threshold:t.threshold};const a=e!=null?_(e):i;if(a<=0||a>i)return{error:"bad_amount"};const n=(t.earnings||[]).filter(f=>!f.payoutId).sort((f,b)=>f.at-b.at),l=[];let o=0;for(const f of n){const b=_(f.creatorShare);if(!(b<=0)&&!(_(o+b)>a)&&(l.push(f.id),o=_(o+b),o>=a))break}if(!l.length){const f=n.find(b=>_(b.creatorShare)>0);if(!f)return{error:"no_earnings"};if(_(f.creatorShare)>i)return{error:"bad_amount"};l.push(f.id),o=_(f.creatorShare)}const c=o,d={id:"po_"+Date.now().toString(36),amount:c,status:"pending",at:Date.now(),earningIds:l,note:"TEST MODE payout request · not real money"},p=(t.earnings||[]).map(f=>l.includes(f.id)?{...f,payoutId:d.id}:f),m={...t,available:_(i-c),holds:_(t.holds+c),earnings:p,payouts:[d,...t.payouts||[]]};return u={...u,creatorWallet:m},A(u),d}function sl(e,t){if(!["pending","completed","rejected"].includes(t))return{error:"bad_status"};const i=it(),a=(i.payouts||[]).find(p=>p.id===e);if(!a)return{error:"missing"};if(a.status!=="pending"&&t!=="pending")return{error:"already_final",payout:a};let n=i.available,l=i.holds,o=i.earnings||[];if(a.status==="pending"&&t==="completed")l=_(Math.max(0,l-a.amount));else if(a.status==="pending"&&t==="rejected"){l=_(Math.max(0,l-a.amount)),n=_(n+a.amount);const p=new Set(a.earningIds||[]);o=o.map(m=>p.has(m.id)?{...m,payoutId:null}:m)}const c=i.payouts.map(p=>p.id===e?{...p,status:t,reviewedAt:Date.now()}:p),d={...i,available:n,holds:l,earnings:o,payouts:c};return u={...u,creatorWallet:d},A(u),c.find(p=>p.id===e)}function il(e){const s={...it(),verification:e?"demo_verified":"demo_unverified"};return u={...u,creatorWallet:s},A(u),s}function Hi(){const e=it(),t={};for(const s of Object.keys(ht))t[s]={category:s,label:ht[s].label,creatorPct:ht[s].creatorPct,dbsPct:ht[s].dbsPct,gross:0,fees:0,net:0,creatorShare:0,dbsShare:0,count:0};for(const s of e.earnings||[]){const i=t[s.category]||(t[s.category]={category:s.category,label:s.label||s.category,creatorPct:s.creatorPct,dbsPct:s.dbsPct,gross:0,fees:0,net:0,creatorShare:0,dbsShare:0,count:0});i.gross=_(i.gross+s.gross),i.fees=_(i.fees+s.fees),i.net=_(i.net+s.net),i.creatorShare=_(i.creatorShare+s.creatorShare),i.dbsShare=_(i.dbsShare+s.dbsShare),i.count+=1}return Object.values(t)}function Bs(e=5,t="Demo credit"){const s=u.wallet||{balance:0,history:[]},i=Number(s.balance||0)+Number(e),a=[...s.history||[],{at:Date.now(),amount:Number(e),note:t}];return u={...u,wallet:{balance:i,history:a}},A(u),u.wallet}function qn(e,t="Demo spend"){const s=u.wallet||{balance:0,history:[]},i=Number(e);if(Number(s.balance||0)<i)return{error:"insufficient"};const a=Number(s.balance||0)-i,n=[...s.history||[],{at:Date.now(),amount:-i,note:t}];return u={...u,wallet:{balance:a,history:n}},A(u),u.wallet}function R(e,t){return String(e||"").toLowerCase().includes(t)}function al(e){const t=String(e||"").trim().toLowerCase(),s={query:String(e||"").trim(),posts:[],profiles:[],music:[],videos:[],lives:[],products:[],pictures:[]};if(!t)return s;const i=(u.posts||[]).filter(f=>R(f.text,t)||R(f.username,t)),a=Object.values(u.profiles||{}).filter(f=>R(f.username,t)||R(f.bio,t));if(u.user){const f=u.user;(R(f.username,t)||R(f.bio,t))&&(a.find(b=>b.id===f.id)||a.push(f))}const n=(u.catalog||[]).filter(f=>f.published),l=n.filter(f=>(f.type==="song"||f.type==="album")&&(R(f.title,t)||R(f.artist,t)||R(f.type,t))),o=n.filter(f=>f.type==="video"&&(R(f.title,t)||R(f.artist,t)||R("video",t))),c=n.filter(f=>f.type==="picture"&&(R(f.title,t)||R(f.artist,t)||R("picture",t))),d=[],p=u.live;p&&!p.endedAt&&(R(p.title,t)||R(p.hostName,t)||R("live",t))&&d.push({...p,status:"live"}),(u.liveHistory||[]).forEach(f=>{(R(f.title,t)||R(f.hostName,t)||R("live",t))&&d.push({...f,status:"ended"})});const m=(u.listings||[]).filter(f=>f.active!==!1&&(R(f.title,t)||R(f.brand,t)||R(f.blurb,t)||R("marketplace",t)||R("product",t)));return{query:String(e||"").trim(),posts:i,profiles:a,music:l,videos:o,lives:d,products:m,pictures:c}}function nl(e=8){const t=u.likes||{},s=(u.posts||[]).map(o=>({kind:"post",id:o.id,title:(o.text||"").slice(0,72)||"Post",subtitle:"@"+(o.username||"creator"),href:"#/posts",score:(t[o.id]||[]).length,image:o.image||""})).sort((o,c)=>c.score-o.score||(c.id>o.id?1:-1)),i=[{kind:"music",id:"trend_music",title:"Long Story Short",subtitle:"Coming Soon · Music",href:"#/music",score:3,image:"/music/01_Long_Story_Short_Coming_Soon.jpg"},{kind:"video",id:"trend_video",title:"Dirty Money ft. Lil Baby",subtitle:"Official MV",href:"#/videos",score:3,image:""},{kind:"live",id:"trend_live",title:"Go live on DBS",subtitle:"Creators · Live",href:"#/live",score:2,image:""},{kind:"market",id:"trend_mkt",title:"Sponsored Marketplace",subtitle:"Brand ads · demo",href:"#/marketplace",score:2,image:""},{kind:"spotlight",id:"trend_spot",title:"24/7 Spotlight",subtitle:"Stage · Discover",href:"#/spotlight",score:1,image:""}],a=u.live;return a&&!a.endedAt&&i.unshift({kind:"live",id:"trend_live_now",title:a.title||"Live now",subtitle:"@"+(a.hostName||"creator")+" · LIVE",href:"#/live",score:99,image:""}),(u.catalog||[]).filter(o=>o.published).slice(0,3).forEach(o=>{const c=o.type==="video"?"#/videos":o.type==="picture"?"#/home":"#/music";i.push({kind:o.type,id:"trend_cat_"+o.id,title:o.title,subtitle:(o.artist||"Admin")+" · From Admin",href:c,score:4,image:o.coverRef&&!String(o.coverRef).startsWith("idb:")?o.coverRef:""})}),[...s,...i].sort((o,c)=>c.score-o.score).slice(0,e)}function rl(){const e=Object.values(u.profiles||{}).map(t=>({id:t.id,username:t.username,bio:t.bio||"",avatar:t.avatar||"",verified:!!t.verified,followers:(t.followers||[]).length}));return u.user&&!e.find(t=>t.id===u.user.id)&&e.push({id:u.user.id,username:u.user.username,bio:u.user.bio||"",avatar:u.user.avatar||"",verified:!!u.user.verified,followers:(u.user.followers||[]).length}),e.sort((t,s)=>s.followers-t.followers||t.username.localeCompare(s.username))}const Bn=6e4,ci=10;function On(e=Date.now()){const t=new Date(e);return t.setHours(23,59,59,999),t.getTime()}function ol(e=Date.now()){const t=new Date(e);return t.setHours(0,0,0,0),t.getTime()}const Nn=[{id:"fan_maya",name:"MayaBeats",bio:"Demo fan · mutual"},{id:"fan_jay",name:"FanJay",bio:"Demo fan · sandbox opponent"}];function ue(){return u.giftBattles||{active:null,history:[],champions:[],prefs:{invitationsEnabled:!0}}}function St(e){return u={...u,giftBattles:e},A(u),e}function Ki(e,t=Date.now()){if(!e||e.status!=="active"||t<(e.endsAt||0))return e;const s=Number(e.scoreA||0),i=Number(e.scoreB||0);let a="tie",n=null,l=null;return s>i?(a="win",n=e.challenger.id,l=e.challenger.name):i>s&&(a="win",n=e.opponent.id,l=e.opponent.name),{...e,status:"ended",endedAt:t,result:a,winnerId:n,winnerName:l,scoreA:s,scoreB:i,championUntil:n?On(t):null}}function jn(){return Nn.map(e=>({...e}))}function Wi(){return{invitationsEnabled:!0,...ue().prefs||{}}}function ll(e={}){const t=ue(),s={...t.prefs,...e};return St({...t,prefs:s})}function Yi(){let t=ue().active;if(!t)return null;if(t.status==="active"){const s=Ki(t);if(s!==t&&s.status==="ended")return Qi(s);t=s}return t}function Qi(e){const t=ue(),s=[e,...(t.history||[]).filter(a=>a.id!==e.id)].slice(0,40);let i=t.champions||[];return e.winnerId&&(i=[{battleId:e.id,userId:e.winnerId,username:e.winnerName,score:e.winnerId===e.challenger.id?e.scoreA:e.scoreB,opponentScore:e.winnerId===e.challenger.id?e.scoreB:e.scoreA,endedAt:e.endedAt,championUntil:e.championUntil,mode:e.mode},...i.filter(n=>n.battleId!==e.id)].slice(0,30)),St({...t,active:e,history:s,champions:i}),e}function cl({opponentId:e,opponentName:t,mode:s}={}){const i=u.user;if(!i)return{error:"signin"};if(!Wi().invitationsEnabled)return{error:"invites_disabled"};const n=u.live&&!u.live.endedAt,l=s||(n?"live":"sandbox");if(l==="live"&&!n)return{error:"not_live"};const o=ue(),c=o.active;if(c&&(c.status==="pending"||c.status==="active"))return{error:"battle_in_progress",battle:c};const d=Nn.find(f=>f.id===e),p={id:e||(d==null?void 0:d.id)||"fan_maya",name:t||(d==null?void 0:d.name)||"MayaBeats"};if(p.id===i.id)return{error:"self"};const m={id:"gb_"+Date.now().toString(36),status:"pending",mode:l,liveId:n?u.live.id:null,liveTitle:n?u.live.title:null,challenger:{id:i.id,name:i.username},opponent:p,createdAt:Date.now(),startedAt:null,endsAt:null,durationMs:Bn,scoreA:0,scoreB:0,giftLog:[],result:null,winnerId:null,winnerName:null,endedAt:null,championUntil:null};return St({...o,active:m}),{battle:m}}function dl(){const e=ue(),t=e.active;if(!t||t.status!=="pending")return{error:"no_pending"};if(!Wi().invitationsEnabled)return{error:"invites_disabled"};const s=Date.now(),i={...t,status:"active",startedAt:s,endsAt:s+(t.durationMs||Bn),scoreA:0,scoreB:0};return St({...e,active:i}),{battle:i}}function ul(){const e=ue(),t=e.active;if(!t||t.status!=="pending")return{error:"no_pending"};const s={...t,status:"declined",endedAt:Date.now(),result:"declined"},i=[s,...e.history||[]].slice(0,40);return St({...e,active:null,history:i}),{battle:s}}function pl(){const e=ue(),t=e.active;return t&&(t.status==="pending"||t.status==="active")?{error:"still_running",battle:t}:(St({...e,active:null}),{ok:!0})}function ml(e=Date.now()){const t=u.liveGbChallengePop;return t?t.expiresAt&&e>t.expiresAt?(u={...u,liveGbChallengePop:null},A(u),null):!u.live||u.live.endedAt||t.liveId&&t.liveId!==u.live.id?null:{...t}:null}function gl({side:e="challenger",kind:t="gift",amount:s=2,label:i=""}={}){var w;if(!u.user)return{error:"signin"};let n=Yi();if(!n||n.status!=="active")return{error:"no_active"};if(n=ue().active,!n||n.status!=="active")return{error:"ended"};const l=Math.max(.5,Number(s)||1),o=t==="tip"?"tip":"gift",c=e==="opponent",d=c?n.opponent:n.challenger;let p=null;if(n.mode==="live"&&!c){if(p=kn({kind:o,amount:l,label:i||(o==="gift"?"🔥 Fire":"Tip")}),p!=null&&p.error)return p}else(((w=u.wallet)==null?void 0:w.balance)||0)>=l&&qn(l,`Gift battle ${o} · ${d.name} · TEST MODE`);const m={id:"gbg_"+Date.now().toString(36),side:c?"opponent":"challenger",userId:d.id,username:d.name,kind:o,amount:l,label:(i||(o==="gift"?"🔥 Fire":"Tip")).slice(0,40),at:Date.now()},f=Number(n.scoreA||0)+(c?0:l),b=Number(n.scoreB||0)+(c?l:0);let y={...n,scoreA:+f.toFixed(2),scoreB:+b.toFixed(2),giftLog:[...n.giftLog||[],m]};return y=Ki(y),y.status==="ended"?Qi(y):St({...ue(),active:y}),{battle:y,entry:m,live:(p==null?void 0:p.live)||null,wallet:u.wallet}}function Ji(){const t=ue().active;if(!t||t.status!=="active")return t;const s=Ki(t);return s.status==="ended"&&t.status!=="ended"?Qi(s):s}function fl(e=20){return(ue().history||[]).slice(0,e)}function hl(e=Date.now()){const t=ue(),s=t.active;return s&&s.status==="ended"&&s.winnerId&&s.championUntil&&e<s.championUntil?{battleId:s.id,userId:s.winnerId,username:s.winnerName,score:s.winnerId===s.challenger.id?s.scoreA:s.scoreB,endedAt:s.endedAt,championUntil:s.championUntil,mode:s.mode}:(t.champions||[]).find(a=>a.championUntil&&e<a.championUntil)||null}function bl(e=15){var s;const t={};for(const i of ue().history||[]){if(i.result!=="win"||!i.winnerId)continue;const a=t[i.winnerId]||{userId:i.winnerId,username:i.winnerName,wins:0,points:0};a.wins+=1;const n=i.winnerId===((s=i.challenger)==null?void 0:s.id)?Number(i.scoreA||0):Number(i.scoreB||0);a.points=+(a.points+n).toFixed(2),a.username=i.winnerName||a.username,t[i.winnerId]=a}return Object.values(t).sort((i,a)=>a.wins-i.wins||a.points-i.points||i.username.localeCompare(a.username)).slice(0,e)}function Xi(e=ci,t=Date.now()){var c;const s=Math.min(Math.max(1,Number(e)||ci),ci),i=ol(t),a=On(t),n=new Set,l=[],o=d=>{if(!(d!=null&&d.userId)||!(d!=null&&d.username)||n.has(d.userId))return;const p=Number(d.endedAt||0);p<i||p>a||d.championUntil&&t>d.championUntil||(n.add(d.userId),l.push({userId:d.userId,username:d.username,score:Number(d.score||0),endedAt:p,championUntil:d.championUntil||a,battleId:d.battleId||d.id||null,mode:d.mode||"demo"}))};for(const d of ue().champions||[])if(o(d),l.length>=s)return l;for(const d of ue().history||[])if(!(d.result!=="win"||!d.winnerId)&&(o({userId:d.winnerId,username:d.winnerName,score:d.winnerId===((c=d.challenger)==null?void 0:c.id)?d.scoreA:d.scoreB,endedAt:d.endedAt,championUntil:d.championUntil||a,battleId:d.id,mode:d.mode}),l.length>=s))break;return l}const Zi=4,Ei=[{id:"maya",username:"MayaBeats",bio:"Creator · beats & live demos"},{id:"fanjay",username:"FanJay",bio:"Day-one fan · playlist curator"},{id:"ria",username:"RiaLoops",bio:"Demo co-host · loops & hooks"},{id:"dez",username:"DezOnMic",bio:"Demo guest · freestyle nights"}];function Te(){return u.multiGuest||{active:null,history:[]}}function Oe(e){return u={...u,multiGuest:e},A(u),e}function ps(e,t){const s=[e,...t],i=s.length||1,a=Math.floor(100/i*100)/100,n={};let l=0;return s.forEach((o,c)=>{c===s.length-1?n[o]=+(100-l).toFixed(2):(n[o]=a,l=+(l+a).toFixed(2))}),n}function Qs(){us();const e={...u.profiles||{}};let t=!1;for(const s of Ei)e[s.id]||(e[s.id]={id:s.id,username:s.username,bio:s.bio,avatar:"",followers:[],following:["dbs"],verified:!1},t=!0);return t&&(u={...u,profiles:e},A(u)),Ei.map(s=>{const i=u.profiles[s.id]||s;return{id:s.id,username:i.username||s.username,bio:i.bio||s.bio,followers:(i.followers||[]).length}})}function vl(){return Qs()}function rs(){return Te().active||null}function yl(e=20){return(Te().history||[]).slice(0,e)}function wl(e){const t=u.user;if(!t)return{error:"signin"};const s=Te();if(s.active&&!s.active.endedAt)return{error:"session_in_progress",session:s.active};const i=String(e||"").trim().slice(0,80)||"Multi-Guest Live";Qs();const a={id:"mg_"+Date.now().toString(36),title:i,hostId:t.id,hostName:t.username,startedAt:Date.now(),endedAt:null,maxGuests:Zi,guests:[],chat:[{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:"Multi-guest session started · TEST MODE · no camera / WebRTC",at:Date.now(),system:!0}],giftSplit:{mode:"equal",shares:{[t.id]:100},disclosed:!1,disclosedAt:null},broadcastReady:!1};return Oe({...s,active:a}),{session:a}}function Sl(e){var f;const t=u.user;if(!t)return{error:"signin"};const s=Te(),i=s.active;if(!i||i.endedAt)return{error:"no_session"};if(i.hostId!==t.id)return{error:"host_only"};Qs();const a=Ei.find(b=>b.id===e),n=(f=u.profiles)==null?void 0:f[e];if(!a&&!n)return{error:"unknown_guest"};if(e===t.id||e===i.hostId)return{error:"self"};const l=(i.guests||[]).find(b=>b.id===e);if(l&&(l.status==="invited"||l.status==="joined"))return{error:"already_invited",session:i};if((i.guests||[]).filter(b=>b.status==="joined"||b.status==="invited").length>=(i.maxGuests||Zi))return{error:"full"};const c={id:e,username:(n==null?void 0:n.username)||(a==null?void 0:a.username)||e,status:"invited",muted:!1,invitedAt:Date.now(),joinedAt:null},d=[...(i.guests||[]).filter(b=>b.id!==e),c],p=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`Invited @${c.username} to the stage`,at:Date.now(),system:!0}].slice(-80),m={...i,guests:d,chat:p,broadcastReady:!1};return m.giftSplit={...m.giftSplit,disclosed:!1,disclosedAt:null,shares:ps(i.hostId,d.filter(b=>b.status==="joined").map(b=>b.id))},Oe({...s,active:m}),{session:m,guest:c}}function kl(e){var p;const t=u.user;if(!t)return{error:"signin"};const s=Te(),i=s.active;if(!i||i.endedAt)return{error:"no_session"};if(i.hostId!==t.id)return{error:"host_only"};const a=(i.guests||[]).map(m=>({...m})),n=a.findIndex(m=>m.id===e);if(n<0)return{error:"not_found"};if(a[n].status==="joined")return{session:i,guest:a[n]};if(a.filter(m=>m.status==="joined").length>=(i.maxGuests||Zi))return{error:"full"};a[n]={...a[n],status:"joined",joinedAt:Date.now(),muted:!1};const o=a.filter(m=>m.status==="joined").map(m=>m.id),c=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${a[n].username} joined the stage`,at:Date.now(),system:!0}].slice(-80),d={...i,guests:a,chat:c,broadcastReady:!1,giftSplit:{mode:((p=i.giftSplit)==null?void 0:p.mode)||"equal",shares:ps(i.hostId,o),disclosed:!1,disclosedAt:null}};return Oe({...s,active:d}),{session:d,guest:a[n]}}function $l(e){var c;const t=u.user;if(!t)return{error:"signin"};const s=Te(),i=s.active;if(!i||i.endedAt)return{error:"no_session"};if(i.hostId!==t.id)return{error:"host_only"};const a=(i.guests||[]).map(d=>d.id===e?{...d,status:"declined"}:d);if(!(i.guests||[]).some(d=>d.id===e))return{error:"not_found"};const n=((c=(i.guests||[]).find(d=>d.id===e))==null?void 0:c.username)||e,l=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${n} declined the invite`,at:Date.now(),system:!0}].slice(-80),o={...i,guests:a,chat:l};return Oe({...s,active:o}),{session:o}}function xl(e){var d,p;const t=u.user;if(!t)return{error:"signin"};const s=Te(),i=s.active;if(!i||i.endedAt)return{error:"no_session"};if(i.hostId!==t.id&&t.id!==e)return{error:"forbidden"};const a=(i.guests||[]).map(m=>m.id===e?{...m,status:"left",muted:!1}:m);if(!(i.guests||[]).some(m=>m.id===e))return{error:"not_found"};const n=((d=(i.guests||[]).find(m=>m.id===e))==null?void 0:d.username)||e,l=a.filter(m=>m.status==="joined").map(m=>m.id),o=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`@${n} left the stage`,at:Date.now(),system:!0}].slice(-80),c={...i,guests:a,chat:o,broadcastReady:!1,giftSplit:{mode:((p=i.giftSplit)==null?void 0:p.mode)||"equal",shares:ps(i.hostId,l),disclosed:!1,disclosedAt:null}};return Oe({...s,active:c}),{session:c}}function El(e){var d,p;const t=u.user;if(!t)return{error:"signin"};const s=Te(),i=s.active;if(!i||i.endedAt)return{error:"no_session"};if(i.hostId!==t.id)return{error:"host_only"};const a=(i.guests||[]).map(m=>m.id===e?{...m,status:"removed",muted:!1}:m);if(!(i.guests||[]).some(m=>m.id===e))return{error:"not_found"};const n=((d=(i.guests||[]).find(m=>m.id===e))==null?void 0:d.username)||e,l=a.filter(m=>m.status==="joined").map(m=>m.id),o=[...i.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:`Host removed @${n} from the stage`,at:Date.now(),system:!0}].slice(-80),c={...i,guests:a,chat:o,broadcastReady:!1,giftSplit:{mode:((p=i.giftSplit)==null?void 0:p.mode)||"equal",shares:ps(i.hostId,l),disclosed:!1,disclosedAt:null}};return Oe({...s,active:c}),{session:c}}function Al(e,t=!0){var d;const s=u.user;if(!s)return{error:"signin"};const i=Te(),a=i.active;if(!a||a.endedAt)return{error:"no_session"};if(a.hostId!==s.id)return{error:"host_only"};const n=(a.guests||[]).map(p=>p.id===e&&p.status==="joined"?{...p,muted:!!t}:p);if(!(a.guests||[]).some(p=>p.id===e&&p.status==="joined"))return{error:"not_joined"};const l=((d=(a.guests||[]).find(p=>p.id===e))==null?void 0:d.username)||e,o=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:"system",username:"DBS",text:t?`Host muted @${l}`:`Host unmuted @${l}`,at:Date.now(),system:!0}].slice(-80),c={...a,guests:n,chat:o};return Oe({...i,active:c}),{session:c}}function Tl(e){const t=u.user;if(!t)return{error:"signin"};const s=Te(),i=s.active;if(!i||i.endedAt)return{error:"no_session"};const a=String(e||"").trim().slice(0,280);if(!a)return{error:"empty"};const n={id:"c_"+Date.now().toString(36),userId:t.id,username:t.username,text:a,at:Date.now()},l=[...i.chat||[],n].slice(-80),o={...i,chat:l};return Oe({...s,active:o}),{session:o,message:n}}function Kt({mode:e="equal",shares:t=null,disclose:s=!1}={}){var f,b;const i=u.user;if(!i)return{error:"signin"};const a=Te(),n=a.active;if(!n||n.endedAt)return{error:"no_session"};if(n.hostId!==i.id)return{error:"host_only"};const l=(n.guests||[]).filter(y=>y.status==="joined").map(y=>y.id),o=[n.hostId,...l];let c,d=e==="custom"?"custom":"equal";if(d==="equal")c=ps(n.hostId,l);else{c={};let y=0;for(const w of o){const h=Math.max(0,Number(t==null?void 0:t[w])||0);c[w]=+h.toFixed(2),y+=c[w]}if(y=+y.toFixed(2),Math.abs(y-100)>.05)return{error:"split_total",total:y,expected:100}}const p={mode:d,shares:c,disclosed:!!s||!!((f=n.giftSplit)!=null&&f.disclosed),disclosedAt:s?Date.now():((b=n.giftSplit)==null?void 0:b.disclosedAt)||null};s&&(p.disclosed=!0),s&&(p.disclosedAt=Date.now());const m={...n,giftSplit:p,broadcastReady:!!p.disclosed};return Oe({...a,active:m}),{session:m}}function Dl(){var e,t,s,i;return Kt({mode:((t=(e=rs())==null?void 0:e.giftSplit)==null?void 0:t.mode)||"equal",shares:((i=(s=rs())==null?void 0:s.giftSplit)==null?void 0:i.shares)||null,disclose:!0})}function Cl(){const e=u.user;if(!e)return{error:"signin"};const t=Te(),s=t.active;if(!s||s.endedAt)return{error:"no_session"};if(s.hostId!==e.id)return{error:"host_only"};const i={...s,endedAt:Date.now(),broadcastReady:!1},a=[i,...(t.history||[]).filter(n=>n.id!==i.id)].slice(0,20);return Oe({active:null,history:a}),{session:i}}const Rn=["song","album","video","live","app","interview"],ea=["draft","active","paused","ended"];function kt(e){if(!e||typeof e!="object")return null;const t=e.fundSource==="third_party"?"third_party":"dbs",s=Rn.includes(e.promoteType)?e.promoteType:"app",i=ea.includes(e.status)?e.status:"draft",a=Number(e.deadline)||0;return{id:String(e.id||""),title:String(e.title||"").slice(0,120),promoteType:s,budget:Math.max(0,Number(e.budget)||0),deadline:a,fundSource:t,managementFeePct:t==="third_party"?20:0,reward:String(e.reward||"").slice(0,200),status:i,participants:Array.isArray(e.participants)?e.participants:[],submissions:Array.isArray(e.submissions)?e.submissions:[],createdAt:Number(e.createdAt)||Date.now(),createdBy:e.createdBy||null}}function _t(e){u={...u,missions:e},A(u)}function Js({status:e=null}={}){const t=(u.missions||[]).map(kt).filter(Boolean);if(!e)return t;const s=Array.isArray(e)?e:[e];return t.filter(i=>s.includes(i.status))}function Ml(e){return Js().find(t=>t.id===e)||null}function Ll(e={}){var o;const t=String(e.title||"").trim().slice(0,120);if(!t)return{error:"required"};const s=Rn.includes(e.promoteType)?e.promoteType:"app",i=e.fundSource==="third_party"?"third_party":"dbs";let a=e.deadline;if(typeof a=="string"&&a){const c=Date.parse(a);a=Number.isFinite(c)?c:Date.now()+7*864e5}else a=Number(a)||Date.now()+7*864e5;const n=ea.includes(e.status)?e.status:"active",l=kt({id:"msn_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),title:t,promoteType:s,budget:Number(e.budget)||0,deadline:a,fundSource:i,reward:String(e.reward||"").trim().slice(0,200)||"Demo reward · TEST MODE",status:n,participants:[],submissions:[],createdAt:Date.now(),createdBy:((o=u.user)==null?void 0:o.id)||"demo_admin"});return _t([l,...u.missions||[]]),l}function Pl(e,t){if(!ea.includes(t))return{error:"bad_status"};let s=null;const i=(u.missions||[]).map(a=>{const n=kt(a);return!n||n.id!==e?a:(s={...n,status:t},s)});return s?(_t(i),s):{error:"not_found"}}function Il(e){const t=u.user;if(!t)return{error:"signin"};let s=null;const i=(u.missions||[]).map(a=>{const n=kt(a);if(!n||n.id!==e)return a;if(n.status!=="active")return s={error:"not_active",mission:n},a;if((n.participants||[]).some(c=>c.userId===t.id))return s={error:"already_joined",mission:n},a;const o={userId:t.id,username:t.username||"creator",joinedAt:Date.now(),score:0,referralCode:"REF-"+t.id.slice(0,6).toUpperCase()+"-"+Math.random().toString(36).slice(2,5).toUpperCase()};return s={...n,participants:[...n.participants||[],o]},s});return s?(s.error||_t(i),s):{error:"not_found"}}function _l(e,{proof:t=""}={}){const s=u.user;if(!s)return{error:"signin"};const i=String(t||"").trim().slice(0,400);if(!i)return{error:"required"};let a=null;const n=(u.missions||[]).map(l=>{const o=kt(l);if(!o||o.id!==e)return l;if(o.status!=="active")return a={error:"not_active",mission:o},l;if(!(o.participants||[]).some(m=>m.userId===s.id))return a={error:"not_joined",mission:o},l;const d={id:"sub_"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),userId:s.id,username:s.username||"creator",proof:i,at:Date.now(),status:"pending"},p=(o.participants||[]).map(m=>m.userId===s.id?{...m,score:(Number(m.score)||0)+10}:m);return a={...o,participants:p,submissions:[d,...o.submissions||[]]},a});return a?(a.error||_t(n),a):{error:"not_found"}}function ql(e,t=5){const s=u.user;if(!s)return{error:"signin"};const i=Math.max(1,Math.min(50,Number(t)||5));let a=null;const n=(u.missions||[]).map(l=>{const o=kt(l);if(!o||o.id!==e)return l;if(!(o.participants||[]).some(p=>p.userId===s.id))return a={error:"not_joined",mission:o},l;const d=(o.participants||[]).map(p=>p.userId===s.id?{...p,score:(Number(p.score)||0)+i}:p);return a={...o,participants:d},a});return a?(a.error||_t(n),a):{error:"not_found"}}function Bl(e){const t=Ml(e);return t?[...t.participants||[]].map(s=>({userId:s.userId,username:s.username,score:Number(s.score)||0,referralCode:s.referralCode||"",joinedAt:s.joinedAt,submissions:(t.submissions||[]).filter(i=>i.userId===s.userId).length})).sort((s,i)=>i.score-s.score||(s.joinedAt||0)-(i.joinedAt||0)):[]}function Ol({force:e=!1}={}){if((u.missions||[]).length&&!e)return{skipped:!0,missions:Js()};const s=Date.now(),i=864e5,a=[{id:"msn_demo_song",title:"Push Long Story Short (clip challenge)",promoteType:"song",budget:2500,deadline:s+14*i,fundSource:"dbs",reward:"$50–$200 demo credits by rank · DBS-funded marketing",status:"active",participants:[{userId:"clipper_demo",username:"ClipQueen",joinedAt:s-2*i,score:42,referralCode:"REF-CLIP-AAA"},{userId:"dbs",username:"DatBoiSkeet",joinedAt:s-i,score:28,referralCode:"REF-DBS-001"}],submissions:[{id:"sub_demo1",userId:"clipper_demo",username:"ClipQueen",proof:"https://example.com/tiktok/lss-clip-1 · 12k views",at:s-i,status:"pending"}],createdAt:s-3*i,createdBy:"demo_admin"},{id:"msn_demo_live",title:"Boost Friday Night Live",promoteType:"live",budget:800,deadline:s+5*i,fundSource:"third_party",reward:"Share of $800 pot after 20% management fee",status:"active",participants:[],submissions:[],createdAt:s-i,createdBy:"demo_admin"},{id:"msn_demo_app",title:"Download DBS · invite 3 friends",promoteType:"app",budget:1200,deadline:s+30*i,fundSource:"dbs",reward:"Referral bonus stack · verified installs only",status:"active",participants:[],submissions:[],createdAt:s-5*i,createdBy:"demo_admin"},{id:"msn_demo_ended",title:"Ladies Only teaser push (ended)",promoteType:"video",budget:500,deadline:s-2*i,fundSource:"third_party",reward:"Completed · demo archive",status:"ended",participants:[{userId:"clipper_demo",username:"ClipQueen",joinedAt:s-10*i,score:90,referralCode:"REF-CLIP-OLD"}],submissions:[],createdAt:s-20*i,createdBy:"demo_admin"}].map(kt);return _t(a),{seeded:a.length,missions:a}}const Fn=60*1e3,ta=60*1e3,os=2,Xs=3,Zs=3,ms=3,Nl=["song","beat","music_video"],jl=[...Nl,"freestyle"];function Gn(){const e=u.spotlight||{};return{nowPlaying:e.nowPlaying||null,queue:Array.isArray(e.queue)?e.queue:[],history:Array.isArray(e.history)?e.history:[],houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0}}function de(e){return u={...u,spotlight:e},A(u),e}function Rl(e){return e==="freestyle"?"Live Freestyle":e==="beat"?"Beat":e==="music_video"?"Music Video":"Song"}function Ai(e,t="ended"){return e?{id:e.id,userId:e.userId,username:e.username,type:e.type,title:e.title,artist:e.artist,startedAt:e.startedAt,endedAt:Date.now(),extensions:e.extensions||0,playCount:e.playCount||1,reason:t}:null}function oe(e=Date.now()){let t=Gn(),s=t.nowPlaying;if(!s)return Fl(t,e);if(s.house)return t;if(s.type==="freestyle"&&s.endsAt&&e>=s.endsAt&&!s.awaitingPlayAnother){if(Object.keys(s.keepGoingVotes||{}).length>=Xs&&(s.extensions||0)<os&&!s.extensionApplied){s={...s,extensions:(s.extensions||0)+1,endsAt:e+ta,keepGoingVotes:{},extensionApplied:!1,voteWindowOpen:!0};const p={...t,nowPlaying:s};return de(p),p}const n=[Ai(s,"timer"),...t.history||[]].slice(0,30),l=[...t.queue||[]];let o=null,c=typeof t.houseIndex=="number"?t.houseIndex:0;if(l.length){const p=l.shift();o=Os(p,e)}else o=Ns(yt(c),e);const d={nowPlaying:o,queue:l,history:n,houseIndex:c};return de(d),d}if(s.awaitingPlayAnother&&s.playAnotherDeadline&&e>=s.playAnotherDeadline){const i=Object.keys(s.playAnotherVotes||{}).length,a=s.playCount||1;if(i>=Zs&&a<ms){s={...s,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:a+1,title:s.nextTitle||s.title,startedAt:e,endsAt:null,nextTitle:null};const p={...t,nowPlaying:s};return de(p),p}const n=[Ai(s,"play_another_fail"),...t.history||[]].slice(0,30),l=[...t.queue||[]];let o=null,c=typeof t.houseIndex=="number"?t.houseIndex:0;l.length?o=Os(l.shift(),e):o=Ns(yt(c),e);const d={nowPlaying:o,queue:l,history:n,houseIndex:c};return de(d),d}return t}function Os(e,t=Date.now()){const s=e.type==="freestyle";return{id:"sp_"+t.toString(36)+"_"+Math.random().toString(36).slice(2,6),userId:e.userId,username:e.username,type:e.type,title:e.title||(s?"Live Freestyle":"Untitled"),artist:e.artist||e.username,cover:e.cover||"",startedAt:t,endsAt:s?t+Fn:null,extensions:0,playCount:1,keepGoingVotes:{},playAnotherVotes:{},voteWindowOpen:s,awaitingPlayAnother:!1,playAnotherDeadline:null,reactions:{fire:0,heart:0,clap:0},chat:[{id:"c_"+t.toString(36),userId:"system",username:"DBS",text:`${e.username} took the Spotlight · ${Rl(e.type)} · TEST MODE`,at:t,system:!0}]}}function ae(){const e=oe();return{nowPlaying:e.nowPlaying||null,queue:[...e.queue||[]],history:[...e.history||[]],houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0,thresholds:{keepGoing:Xs,playAnother:Zs,maxExtensions:os,maxUploadStreak:ms,freestyleMs:Fn}}}function zn(){const e=[];for(const s of Ve||[])!s||!s.embed||(s.category==="Music Videos"?e.push({id:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube||"",kind:"music_video",chipLabel:"House · Music Video",note:"DatBoiSkeet catalog · original YouTube · not a live act",cover:s.cover||""}):s.category==="Interviews"&&e.push({id:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube||"",kind:"interview",chipLabel:"House · Interview",note:"DatBoiSkeet interview · original YouTube · not a live act",cover:s.cover||""}));const t=(Si||[]).find(s=>s.id==="pl-vlogs");if(t&&t.youtube){const s=String(t.youtube).match(/[?&]list=([^&]+)/),i=s&&s[1];i&&e.push({id:"house-bts-vlogs",title:t.title||"DatBoiSkeet Vlogs",artist:"DatBoiSkeet",embed:"https://www.youtube.com/embed/videoseries?list="+i,youtube:t.youtube,kind:"bts",chipLabel:"House · BTS",note:"Channel vlogs · dedicated BTS clips thin · original YouTube · not a live act",cover:""})}return e}function Un(){const e=zn().length;return e>0?e:1}function yt(e){const t=zn();if(!t.length)return{id:"house_empty",title:"DatBoiSkeet catalog",artist:"DatBoiSkeet",embed:"",youtube:"https://www.youtube.com/@DatBoiSkeet1",kind:"music_video",chipLabel:"House · Music Video",note:"Catalog loading · not a live act",cover:"",status:"House rotation"};const s=(e%t.length+t.length)%t.length;return{...t[s],status:t[s].chipLabel}}function Ns(e,t=Date.now()){return{id:"house_"+(e.id||"x")+"_"+t.toString(36),userId:"dbs",username:"DatBoiSkeet",type:"music_video",house:!0,houseKind:e.kind||"music_video",chipLabel:e.chipLabel||"House · Music Video",title:e.title,artist:e.artist||"DatBoiSkeet",embed:e.embed||"",youtube:e.youtube||"",note:e.note||"House catalog · not a live act",cover:e.cover||"",startedAt:t,endsAt:null,extensions:0,playCount:1,keepGoingVotes:{},playAnotherVotes:{},voteWindowOpen:!1,awaitingPlayAnother:!1,playAnotherDeadline:null,reactions:{fire:0,heart:0,clap:0},chat:[{id:"c_house_"+t.toString(36),userId:"system",username:"DBS",text:`House catalog · ${e.chipLabel||"House"} · ${e.title} · not a live act · TEST MODE`,at:t,system:!0}]}}function Fl(e,t=Date.now()){if(e.nowPlaying)return e;const s=typeof e.houseIndex=="number"?e.houseIndex:0,i=yt(s),a=Ns(i,t),n={...e,nowPlaying:a,houseIndex:s};return de(n),n}function Vn(){const e=Gn();return yt(typeof e.houseIndex=="number"?e.houseIndex:0)}function Gl({type:e="song",title:t="",artist:s=""}={}){const i=u.user;if(!i)return{error:"signin"};const a=jl.includes(e)?e:"song",n=oe(),l=i.id,o=(n.queue||[]).some(w=>w.userId===l),c=n.nowPlaying&&!n.nowPlaying.house&&n.nowPlaying.userId===l&&!n.nowPlaying.awaitingPlayAnother;if(o||c)return{error:"already_queued",state:ae()};const d=String(t||"").trim().slice(0,80)||(a==="freestyle"?"Live Freestyle":a==="beat"?"Untitled Beat":a==="music_video"?"Untitled MV":"Untitled Song"),p=String(s||i.username||"").trim().slice(0,60),m={id:"q_"+Date.now().toString(36),userId:l,username:i.username,type:a,title:d,artist:p,cover:"",joinedAt:Date.now()};let f=n.nowPlaying,b=[...n.queue||[]],y=typeof n.houseIndex=="number"?n.houseIndex:0;return f?(f.house,b.push(m)):(f=Os(m),b=[]),de({...n,nowPlaying:f,queue:b,houseIndex:y}),{ok:!0,state:ae()}}function Da(){const e=u.user;if(!e)return{error:"signin"};const t=oe(),s=(t.queue||[]).length,i=(t.queue||[]).filter(a=>a.userId!==e.id);return i.length===s?{error:"not_in_queue"}:(de({...t,queue:i}),{ok:!0,state:ae()})}function zl(e){if(!u.user)return{error:"signin"};const s=oe(),i=(s.queue||[]).filter(a=>a.id!==e);return de({...s,queue:i}),{ok:!0,state:ae()}}function Hn(e="advance"){if(!u.user)return{error:"signin"};const s=oe(),i=s.nowPlaying,a=!!(i&&i.house),n=i&&!a?[Ai(i,e),...s.history||[]].slice(0,30):[...s.history||[]],l=[...s.queue||[]];let o=typeof s.houseIndex=="number"?s.houseIndex:0;a&&(o=(o+1)%Un());let c=null;return l.length?c=Os(l.shift()):c=Ns(yt(o)),de({nowPlaying:c,queue:l,history:n,houseIndex:o}),{ok:!0,state:ae()}}function Ul(){return Hn("skip")}function Vl(){const e=u.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s)return{error:"empty_stage"};if(s.house)return{error:"house_use_skip"};if(s.type==="freestyle")return{error:"freestyle_use_timer"};if(s.awaitingPlayAnother)return{error:"already_voting"};!(s.userId===e.id)&&Z();const a=s.playCount||1;if(a>=ms)return Hn("max_streak");const n={...s,awaitingPlayAnother:!0,playAnotherVotes:{},playAnotherDeadline:Date.now()+30*1e3,nextTitle:s.title+" (take "+(a+1)+")"};return de({...t,nowPlaying:n}),{ok:!0,state:ae()}}function Hl(){const e=u.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s||s.type!=="freestyle")return{error:"no_freestyle"};if(!s.voteWindowOpen)return{error:"window_closed"};if(s.awaitingPlayAnother)return{error:"wrong_mode"};if((s.extensions||0)>=os)return{error:"max_extensions"};const i={...s.keepGoingVotes||{}};if(i[e.id])return{error:"already_voted",state:ae()};i[e.id]=Date.now();let a={...s,keepGoingVotes:i};const n=Object.keys(i).length;return n>=Xs&&(s.extensions||0)<os&&(a={...a,extensions:(s.extensions||0)+1,endsAt:Date.now()+ta,keepGoingVotes:{},voteWindowOpen:!0}),de({...t,nowPlaying:a}),{ok:!0,state:ae(),votes:Object.keys(a.keepGoingVotes||{}).length||n}}function Kl(e=2){const t=oe(),s=t.nowPlaying;if(!s||s.type!=="freestyle")return{error:"no_freestyle"};const i={...s.keepGoingVotes||{}},a=Object.keys(i).length;for(let o=0;o<e;o++){const c="fan_sim_"+(a+o)+"_"+Date.now().toString(36);i[c]=Date.now()}let n={...s,keepGoingVotes:i};return Object.keys(i).length>=Xs&&(s.extensions||0)<os&&(n={...n,extensions:(s.extensions||0)+1,endsAt:Date.now()+ta,keepGoingVotes:{},voteWindowOpen:!0}),de({...t,nowPlaying:n}),{ok:!0,state:ae()}}function Wl(){const e=u.user;if(!e)return{error:"signin"};const t=oe(),s=t.nowPlaying;if(!s||!s.awaitingPlayAnother)return{error:"no_vote"};const i={...s.playAnotherVotes||{}};if(i[e.id])return{error:"already_voted",state:ae()};i[e.id]=Date.now();let a={...s,playAnotherVotes:i};const n=Object.keys(i).length,l=s.playCount||1;return n>=Zs&&l<ms&&(a={...a,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:l+1,title:s.nextTitle||s.title,startedAt:Date.now(),endsAt:null,nextTitle:null}),de({...t,nowPlaying:a}),{ok:!0,state:ae()}}function Yl(e=2){const t=oe(),s=t.nowPlaying;if(!s||!s.awaitingPlayAnother)return{error:"no_vote"};const i={...s.playAnotherVotes||{}},a=Object.keys(i).length;for(let c=0;c<e;c++)i["fan_pa_"+(a+c)+"_"+Date.now().toString(36)]=Date.now();let n={...s,playAnotherVotes:i};const l=Object.keys(i).length,o=s.playCount||1;return l>=Zs&&o<ms&&(n={...n,awaitingPlayAnother:!1,playAnotherVotes:{},playAnotherDeadline:null,playCount:o+1,title:s.nextTitle||s.title,startedAt:Date.now(),endsAt:null,nextTitle:null}),de({...t,nowPlaying:n}),{ok:!0,state:ae()}}function Ql(e="fire"){const t=oe(),s=t.nowPlaying;if(!s)return{error:"empty_stage"};const i=["fire","heart","clap"].includes(e)?e:"fire",a={...s.reactions||{fire:0,heart:0,clap:0}};return a[i]=(a[i]||0)+1,de({...t,nowPlaying:{...s,reactions:a}}),{ok:!0,state:ae()}}function Jl(e){const t=u.user;if(!t)return{error:"signin"};const s=String(e||"").trim().slice(0,200);if(!s)return{error:"empty"};const i=oe(),a=i.nowPlaying;if(!a)return{error:"empty_stage"};const n=[...a.chat||[],{id:"c_"+Date.now().toString(36),userId:t.id,username:t.username,text:s,at:Date.now()}].slice(-40);return de({...i,nowPlaying:{...a,chat:n}}),{ok:!0,state:ae()}}function Xl(e=20){return(oe().history||[]).slice(0,e)}function Ne(){const e=u.fanClubs||{clubs:[],posts:{},seeded:!1};return{clubs:Array.isArray(e.clubs)?e.clubs:[],posts:e.posts&&typeof e.posts=="object"?e.posts:{},seeded:!!e.seeded}}function qt(e){u={...u,fanClubs:e},A(u)}function Kn(e){return e+"_"+Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function Wn(){return je(),Ne().clubs.slice().sort((e,t)=>e.official&&!t.official?-1:!e.official&&t.official?1:(t.memberCount||0)-(e.memberCount||0))}function gs(e){return je(),Ne().clubs.find(t=>t.id===e)||null}function je({force:e=!1}={}){const t=Ne();if(t.seeded&&!e&&t.clubs.length>0)return{skipped:!0,clubs:t.clubs};const s=Date.now(),i=864e5,a=[{id:"fc_official_dbs",name:"DatBoiSkeet Official",description:"Official DatBoiSkeet fan club inside DBS Lounge. Music drops, Vault tips, Foreign X-Change, and community rules — DBS branding first. Follow optional.",graphic:"/brand/logo-dbs-v3@2x.webp",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"public",official:!0,members:["dbs"],followers:["dbs"],mods:["dbs"],memberCount:1,createdAt:s-14*i},{id:"fc_lss_crew",name:"Long Story Short Crew",description:"Creator club for LSS listeners. Public lounge chat + Skeet+ members-only drop room.",graphic:"/music/01_Long_Story_Short_Coming_Soon.jpg",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"members",official:!1,members:["dbs"],followers:["dbs"],mods:["dbs"],memberCount:1,createdAt:s-7*i},{id:"fc_ladies_only",name:"Ladies Only Circle",description:"Paid / Skeet+ gated room demo for Ladies Only supporters. Unlock via membership TEST MODE.",graphic:"/music/02_Ladies_Only_Coming_Soon.jpg",hostId:"dbs",hostName:"DatBoiSkeet",privacy:"paid",official:!1,members:["dbs"],followers:[],mods:["dbs"],memberCount:1,createdAt:s-3*i}],n={fc_official_dbs:[{id:"fcp_welcome",userId:"dbs",username:"DatBoiSkeet",text:"Welcome to the official club. Discover music on #/music · explore more on #/explore. No forced follows.",at:s-2*i,pinned:!0,removed:!1},{id:"fcp_lounge",userId:"dbs",username:"DatBoiSkeet",text:"DBS Lounge rooms stay music-first. Keep it respectful — see Community Guidelines.",at:s-i,pinned:!1,removed:!1}],fc_lss_crew:[{id:"fcp_lss1",userId:"dbs",username:"DatBoiSkeet",text:"LSS cover art is live in Coming Soon. Members can discuss theories here.",at:s-i,pinned:!1,removed:!1}],fc_ladies_only:[{id:"fcp_lo1",userId:"dbs",username:"DatBoiSkeet",text:"Skeet+ members-only preview chat. Join Skeet+ on Pricing (TEST MODE) to unlock.",at:s-12*36e5,pinned:!0,removed:!1}]};return qt({clubs:a,posts:n,seeded:!0}),{seeded:a.length,clubs:a}}function Zl({name:e,description:t,graphic:s,privacy:i="public"}={}){const a=u.user;if(!a)return{error:"signin"};Z()||a.role==="creator"||a.id;const n=String(e||"").trim().slice(0,48);if(!n)return{error:"name"};const l=["public","members","paid"].includes(i)?i:"public";je();const o=Ne(),c={id:Kn("fc"),name:n,description:String(t||"").trim().slice(0,280),graphic:String(s||"/brand/logo-dbs-v3@2x.webp").slice(0,200),hostId:a.id,hostName:a.username,privacy:l,official:!1,members:[a.id],followers:[a.id],mods:[a.id],memberCount:1,createdAt:Date.now()};return qt({...o,clubs:[c,...o.clubs],posts:{...o.posts,[c.id]:[]},seeded:!0}),{ok:!0,club:c}}function ei(e,t){je();const s=Ne(),i=s.clubs.findIndex(l=>l.id===e);if(i<0)return{error:"missing"};const a=t({...s.clubs[i]});if(a&&a.error)return a;const n=s.clubs.slice();return n[i]=a,qt({...s,clubs:n}),{ok:!0,club:a}}function Yn(e){const t=u.user;return t?ei(e,s=>{const i=new Set(s.members||[]);return i.add(t.id),{...s,members:[...i],memberCount:i.size}}):{error:"signin"}}function ec(e){const t=u.user;return t?ei(e,s=>{if(s.hostId===t.id)return{error:"host"};const i=(s.members||[]).filter(a=>a!==t.id);return{...s,members:i,memberCount:i.length}}):{error:"signin"}}function tc(e){const t=u.user;return t?ei(e,s=>{const i=new Set(s.followers||[]);return i.add(t.id),{...s,followers:[...i]}}):{error:"signin"}}function sc(e){const t=u.user;return t?ei(e,s=>{const i=(s.followers||[]).filter(a=>a!==t.id);return{...s,followers:i}}):{error:"signin"}}function Qn(e){const t=u.user;if(!t)return!1;const s=gs(e);return!!(s&&(s.members||[]).includes(t.id))}function ic(e){const t=u.user;if(!t)return!1;const s=gs(e);return!!(s&&(s.followers||[]).includes(t.id))}function ls(e){const t=u.user;if(!t)return!1;const s=gs(e);return s?Z()||s.hostId===t.id||(s.mods||[]).includes(t.id):!1}function Jn(e){const t=gs(e);if(!t)return{ok:!1,reason:"missing"};if(t.privacy==="public")return{ok:!0,reason:"public"};if(t.privacy==="members")return Qn(e)||ls(e)?{ok:!0,reason:"member"}:{ok:!1,reason:"members"};if(t.privacy==="paid"){const s=wt();return({null:0,"skeet+":1,backstage:2,inner:3}[s||"null"]||0)>=1||ls(e)?{ok:!0,reason:"paid"}:{ok:!1,reason:"paid"}}return{ok:!0,reason:"public"}}function ac(e){return je(),(Ne().posts[e]||[]).filter(s=>!s.removed).slice().sort((s,i)=>s.pinned&&!i.pinned?-1:!s.pinned&&i.pinned?1:(i.at||0)-(s.at||0))}function nc(e,t){const s=u.user;if(!s)return{error:"signin"};const i=Jn(e);if(!i.ok)return{error:"gated",reason:i.reason};const a=String(t||"").trim().slice(0,500);if(!a)return{error:"empty"};const n=Ne();if(!n.clubs.some(c=>c.id===e))return{error:"missing"};const l={id:Kn("fcp"),userId:s.id,username:s.username,text:a,at:Date.now(),pinned:!1,removed:!1},o=[l,...n.posts[e]||[]].slice(0,100);return qt({...n,posts:{...n.posts,[e]:o}}),{ok:!0,post:l}}function rc(e,t){if(!ls(e))return{error:"mod"};const s=Ne(),i=(s.posts[e]||[]).map(a=>a.id===t?{...a,pinned:!a.pinned}:a);return qt({...s,posts:{...s.posts,[e]:i}}),{ok:!0}}function oc(e,t){if(!ls(e))return{error:"mod"};const s=Ne(),i=(s.posts[e]||[]).map(a=>a.id===t?{...a,removed:!0}:a);return qt({...s,posts:{...s.posts,[e]:i}}),{ok:!0}}const sa=["instagram","tiktok","facebook","youtube","x","snapchat","other"],Xn=[{id:"badge",minVerified:1,label:"Exclusive DBS badge",kind:"badge"},{id:"decoration",minVerified:2,label:"Premium avatar decoration",kind:"decoration"},{id:"skeet7",minVerified:3,label:"7 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:7},{id:"skeet30",minVerified:3,requireAllLinked:!0,label:"30 days Skeet+ (all linked · min 3)",kind:"membership_trial",membership:"skeet+",days:30}],Zn=[{n:1,id:"m1",label:"Profile decoration",kind:"decoration"},{n:3,id:"m3",label:"7 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:7},{n:5,id:"m5",label:"30 days Skeet+ (TEST MODE)",kind:"membership_trial",membership:"skeet+",days:30},{n:10,id:"m10",label:"Premium profile bundle",kind:"bundle"},{n:25,id:"m25",label:"30 days Backstage (TEST MODE)",kind:"membership_trial",membership:"backstage",days:30},{n:50,id:"m50",label:"30 days Inner Circle (TEST MODE)",kind:"membership_trial",membership:"inner",days:30},{n:100,id:"m100",label:"Founder Promoter badge / VIP",kind:"badge"}];function er(){return{platformsLinked:[],challenge:null,submissions:[],rewardsClaimed:[]}}function tr(){return{code:"",invitees:[],milestonesClaimed:[]}}function sr(e){const t=er();return!e||typeof e!="object"?t:{platformsLinked:Array.isArray(e.platformsLinked)?e.platformsLinked:[],challenge:e.challenge&&typeof e.challenge=="object"?e.challenge:null,submissions:Array.isArray(e.submissions)?e.submissions:[],rewardsClaimed:Array.isArray(e.rewardsClaimed)?e.rewardsClaimed:[]}}function ir(e){const t=tr();return!e||typeof e!="object"?t:{code:typeof e.code=="string"?e.code:"",invitees:Array.isArray(e.invitees)?e.invitees:[],milestonesClaimed:Array.isArray(e.milestonesClaimed)?e.milestonesClaimed:[]}}function We(e){return u={...u,shareEarn:sr(e)},A(u),u.shareEarn}function at(e){return u={...u,referEarn:ir(e)},A(u),u.referEarn}function ar(e){if(!e)return"DBS-GUEST";const t=String(e.username||"fan").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8)||"FAN",s=String(e.id||"").replace(/^u_/,"").slice(-4).toUpperCase()||"DEMO";return`DBS-${t}-${s}`}function $t(e){return e+"_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Wt(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function Q(){return sr(u.shareEarn)}function Ca(){return sa.slice()}function lc(){return Xn.map(e=>({...e}))}function cc({platform:e,handle:t="",url:s="",followers:i=""}={}){if(!u.user)return{error:"signin"};const n=String(e||"").toLowerCase().trim();if(!sa.includes(n))return{error:"bad_platform"};const l=String(t||"").trim().replace(/^@+/,"").slice(0,64),o=String(s||"").trim().slice(0,240);if(!l&&!o)return{error:"required"};const c=Q();if((c.platformsLinked||[]).some(m=>m.platform===n))return{error:"already_linked",shareEarn:c};const d={id:$t("plat"),platform:n,handle:l,url:o,followers:String(i||"").trim().slice(0,32),linkedAt:Date.now()},p={...c,platformsLinked:[...c.platformsLinked||[],d]};return We(p),{ok:!0,platform:d,shareEarn:Q()}}function dc(e){const t=Q(),s={...t,platformsLinked:(t.platformsLinked||[]).filter(i=>i.id!==e)};return We(s),Q()}function uc(){if(!u.user)return{error:"signin"};const t=Q();if(t.challenge&&t.challenge.status==="active")return{error:"already_active",shareEarn:t};const s=Bt().code,i=Date.now(),a={id:$t("ch"),startedAt:i,endsAt:i+24*60*60*1e3,adTitle:"DatBoiSkeet · Long Story Short & Ladies Only",caption:"🔥 Join me on DBS — music, live, vault & more. Long Story Short + Ladies Only Coming Soon. #DBS #PaidPartnership #ad",trackedLink:`https://dbs.app/s/${s}?utm=share24`,status:"active",disclosure:"Incentivized promotion · disclose #ad / Paid partnership"};return We({...t,challenge:a,submissions:[],rewardsClaimed:(t.rewardsClaimed||[]).filter(n=>n.challengeId!==a.id)}),{ok:!0,challenge:a,shareEarn:Q()}}function pc(){const e=Q();if(!e.challenge||e.challenge.status!=="active")return{error:"no_active"};const t={...e.challenge,startedAt:Date.now()-25*60*60*1e3,endsAt:Date.now()-1*60*60*1e3,simulatedElapsed:!0};return We({...e,challenge:t}),{ok:!0,challenge:t,shareEarn:Q()}}function mc(){const e=Q();if(!e.challenge)return{error:"none"};const t={...e.challenge,status:"ended",endedAt:Date.now()};return We({...e,challenge:t}),{ok:!0,challenge:t,shareEarn:Q()}}function gc({platform:e,postUrl:t=""}={}){if(!u.user)return{error:"signin"};const i=Q();if(!i.challenge||i.challenge.status!=="active")return{error:"no_challenge"};const a=String(e||"").toLowerCase().trim();if(!sa.includes(a))return{error:"bad_platform"};const n=String(t||"").trim().slice(0,400);if(!n)return{error:"required"};if((i.submissions||[]).some(c=>c.platform===a&&(c.status==="pending"||c.status==="verified")))return{error:"duplicate",shareEarn:i};const o={id:$t("sub"),platform:a,postUrl:n,submittedAt:Date.now(),status:"pending",note:"Awaiting 24h continuous visibility check (manual/demo)"};return We({...i,submissions:[o,...i.submissions||[]]}),{ok:!0,submission:o,shareEarn:Q()}}function Ma(e,t,{note:s=""}={}){if(!["pending","verified","rejected"].includes(t))return{error:"bad_status"};const i=Q();let a=null;const n=(i.submissions||[]).map(l=>l.id!==e?l:(a={...l,status:t,verifiedAt:t==="verified"?Date.now():l.verifiedAt||null,note:s||(t==="verified"?"Demo verified · 24h visibility assumed (manual)":t==="rejected"?"Rejected · ineligible / deleted / unverified":l.note)},a));return a?(We({...i,submissions:n}),{ok:!0,submission:a,shareEarn:Q()}):{error:"not_found"}}function nr(){const e=Q();return new Set((e.submissions||[]).filter(s=>s.status==="verified").map(s=>s.platform)).size}function rr(){const e=Q(),t=nr(),s=(e.platformsLinked||[]).length,i=new Set((e.rewardsClaimed||[]).map(a=>a.tierId));return Xn.filter(a=>{if(i.has(a.id)||t<a.minVerified)return!1;if(a.requireAllLinked){if(s<3)return!1;const n=new Set((e.platformsLinked||[]).map(o=>o.platform)),l=new Set((e.submissions||[]).filter(o=>o.status==="verified").map(o=>o.platform));for(const o of n)if(!l.has(o))return!1}return!0}).map(a=>({...a,verifiedCount:t,linkedCount:s}))}function fc(e){var l;if(!u.user)return{error:"signin"};const i=rr().find(o=>o.id===e);if(!i)return{error:"not_claimable"};const a=Q(),n={id:$t("srw"),tierId:i.id,label:i.label,kind:i.kind,at:Date.now(),challengeId:((l=a.challenge)==null?void 0:l.id)||null,testMode:!0};return i.membership&&zs(i.membership,!0),We({...a,rewardsClaimed:[n,...a.rewardsClaimed||[]]}),{ok:!0,claim:n,shareEarn:Q(),membership:wt()}}function hc(){return We(er()),Q()}function ke(){return ir(u.referEarn)}function bc(){return Zn.map(e=>({...e}))}function Bt(){const e=u.user,t=ke();if(t.code)return t;const s=ar(e);return at({...t,code:s})}function or(){return`https://dbs.app/r/${Bt().code}`}function vc({username:e=""}={}){const t=u.user;if(!t)return{error:"signin"};const s=Bt(),i=String(e||"").trim().slice(0,24)||"Invitee"+(s.invitees.length+1);if(i.toLowerCase()===String(t.username||"").toLowerCase())return{error:"self_referral"};const a={id:$t("inv"),username:i,signedUpAt:Date.now(),activeDays:[],status:"pending",welcomeClaimed:!1,flaggedFraud:!1};return at({...s,invitees:[a,...s.invitees||[]]}),{ok:!0,invitee:a,referEarn:ke()}}function yc(e){const t=ke();let s=null;const i=(t.invitees||[]).map(a=>a.id!==e?a:a.flaggedFraud?(s={error:"fraud",invitee:a},a):(s={...a,welcomeClaimed:!0,welcomeAt:Date.now()},s));return s?s.error?s:(at({...t,invitees:i}),{ok:!0,invitee:s,perk:"Welcome badge / profile decoration (TEST MODE)"}):{error:"not_found"}}function wc(e,{day:t=null}={}){const s=ke();let i=null;const a=(s.invitees||[]).map(n=>{if(n.id!==e)return n;if(n.flaggedFraud)return i={error:"fraud",invitee:n},n;const l=Number(n.signedUpAt)||Date.now(),o=l+7*864e5;let c=t;if(!c){const f=new Set(n.activeDays||[]);let b=null;for(let y=0;y<7;y++){const w=Wt(l+y*864e5);if(!f.has(w)){b=w;break}}if(!b)return i={error:"window_full",invitee:n},n;c=b}const d=Date.parse(c+"T12:00:00Z");if(!Number.isFinite(d)||d<l-864e5||d>o)return i={error:"outside_window",invitee:n},n;const p=Array.from(new Set([...n.activeDays||[],c])).sort();let m=n.status;return p.length>=3&&(m="active"),i={...n,activeDays:p,status:m},i});return i?i.error?i:(at({...s,invitees:a}),{ok:!0,invitee:i,referEarn:ke()}):{error:"not_found"}}function La(e,t=!0){const s=ke();let i=null;const a=(s.invitees||[]).map(n=>{var l;return n.id!==e?n:(i={...n,flaggedFraud:!!t,status:t?"fraud":((l=n.activeDays)==null?void 0:l.length)>=3?"active":"pending"},i)});return i?(at({...s,invitees:a}),{ok:!0,invitee:i,referEarn:ke()}):{error:"not_found"}}function lr(){return(ke().invitees||[]).filter(t=>t.status==="active"&&!t.flaggedFraud).length}function cr(){const e=ke(),t=lr(),s=new Set((e.milestonesClaimed||[]).map(i=>i.milestoneId));return Zn.filter(i=>t>=i.n&&!s.has(i.id)).map(i=>({...i,activeCount:t}))}function Sc(e){if(!u.user)return{error:"signin"};const i=cr().find(l=>l.id===e);if(!i)return{error:"not_claimable"};const a=ke(),n={id:$t("rmw"),milestoneId:i.id,n:i.n,label:i.label,kind:i.kind,at:Date.now(),testMode:!0,note:"Distinct from Clippers commissions · TEST MODE · no real billing"};return i.membership&&zs(i.membership,!0),at({...a,milestonesClaimed:[n,...a.milestonesClaimed||[]]}),{ok:!0,claim:n,referEarn:ke(),membership:wt()}}function kc(){const e=u.user;return at({...tr(),code:ar(e)}),ke()}function $c({force:e=!1}={}){if(!u.user)return{error:"signin"};const s=Bt();if(!e&&(s.invitees||[]).length>0)return{error:"already_seeded",referEarn:s};const i=Date.now(),a=864e5,n=[{id:"inv_demo_a",username:"NovaFan",signedUpAt:i-5*a,activeDays:[Wt(i-5*a),Wt(i-4*a),Wt(i-3*a)],status:"active",welcomeClaimed:!0,flaggedFraud:!1},{id:"inv_demo_b",username:"ClipCurious",signedUpAt:i-2*a,activeDays:[Wt(i-2*a)],status:"pending",welcomeClaimed:!0,flaggedFraud:!1},{id:"inv_demo_c",username:"BottyMcBot",signedUpAt:i-6*a,activeDays:[],status:"fraud",welcomeClaimed:!1,flaggedFraud:!0}];return at({...s,invitees:n,milestonesClaimed:s.milestonesClaimed||[]}),{ok:!0,seeded:n.length,referEarn:ke()}}const ti=[{id:"youtube",label:"YouTube",color:"#ff4444",hint:"YouTube Live / Studio"},{id:"tiktok",label:"TikTok",color:"#69c9d0",hint:"TikTok LIVE"},{id:"twitch",label:"Twitch",color:"#9146ff",hint:"Twitch Dashboard"},{id:"facebook",label:"Facebook",color:"#1877f2",hint:"Facebook Live"},{id:"instagram",label:"Instagram",color:"#e1306c",hint:"IG Live (demo)"},{id:"kick",label:"Kick",color:"#53fc18",hint:"Kick Studio"},{id:"custom_rtmp",label:"Custom RTMP",color:"#ffb020",hint:"Any RTMP endpoint"}],xc=()=>({freeMaxDestinations:2,houseUnlimited:!0,houseUserIds:["dbs"],tiers:{bronze:{id:"bronze",label:"Bronze",price:4.99,maxDestinations:3,placement:!1,badge:"Bronze Streamer",perks:["3 destination slots","Campaign badge on Go Live"]},silver:{id:"silver",label:"Silver",price:9.99,maxDestinations:5,placement:!0,badge:"Silver Streamer",perks:["5 destination slots","Campaign badge","Explore / Live placement flag"]},gold:{id:"gold",label:"Gold",price:19.99,maxDestinations:7,placement:!0,badge:"Gold Streamer",perks:["All 7 destinations","Campaign badge","Priority Explore / Live placement"]}}});function Ds(){return{platforms:{},selected:[],session:null,history:[],ingest:null,campaign:{tier:null,status:"none",enrolledAt:null,cancelledAt:null},campaignConfig:null}}function si(){const e=u.restream||Ds();return{...Ds(),...e,platforms:e.platforms&&typeof e.platforms=="object"?e.platforms:{},selected:Array.isArray(e.selected)?e.selected:[],history:Array.isArray(e.history)?e.history:[],campaign:{...Ds().campaign,...e.campaign||{}}}}function Ot(e){return u={...u,restream:e},A(u),u.restream}function Ec(e){var s,i;if((s=e.ingest)!=null&&s.rtmpUrl&&((i=e.ingest)!=null&&i.streamKey))return e;const t="dbs_demo_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,10);return{...e,ingest:{rtmpUrl:"rtmp://ingest.dbs.local/live",streamKey:t,rotatedAt:Date.now(),note:"TEST MODE demo key · not a real media server"}}}function nt(){let e=si();const t=e.ingest;return e=Ec(e),e.ingest!==t&&Ot(e),e}function dr(){const e=nt();return ti.map(t=>{const s=e.platforms[t.id]||{};return{...t,connected:!!s.connected,connectedAt:s.connectedAt||null,handle:s.handle||"",lastError:s.lastError||null,enabled:s.enabled!==!1}})}function Ac(e,t=""){const s=ti.find(n=>n.id===e);if(!s)return{error:"unknown_platform"};const i=nt(),a={...i.platforms,[e]:{id:e,connected:!0,connectedAt:Date.now(),handle:String(t||s.label+" Demo").slice(0,40),lastError:null,enabled:!0}};return Ot({...i,platforms:a}),{ok:!0,platform:dr().find(n=>n.id===e)}}function Tc(e){var n;const t=nt();if(!((n=t.platforms[e])!=null&&n.connected))return{error:"not_connected"};const s={...t.platforms,[e]:{...t.platforms[e],connected:!1,disconnectedAt:Date.now(),lastError:null}},i=(t.selected||[]).filter(l=>l!==e);let a=t.session;return a&&!a.endedAt&&(a={...a,destinations:(a.destinations||[]).map(l=>l.id===e?{...l,status:"disconnected",health:"error"}:l)}),Ot({...t,platforms:s,selected:i,session:a}),{ok:!0}}function Dc(e){const t=nt(),s=new Set(Object.values(t.platforms).filter(a=>a.connected).map(a=>a.id)),i=(Array.isArray(e)?e:[]).filter(a=>s.has(a)).slice(0,7);return Ot({...t,selected:i}),{ok:!0,selected:i}}function Cc(e){var i;const t=nt();if(!((i=t.platforms[e])!=null&&i.connected))return{error:"not_connected"};const s=new Set(t.selected||[]);return s.has(e)?s.delete(e):s.add(e),Dc([...s])}function ur(){var i,a,n;const e=si(),t=xc(),s=e.campaignConfig||{};return{...t,...s,tiers:{...t.tiers,...s.tiers||{},bronze:{...t.tiers.bronze,...((i=s.tiers)==null?void 0:i.bronze)||{}},silver:{...t.tiers.silver,...((a=s.tiers)==null?void 0:a.silver)||{}},gold:{...t.tiers.gold,...((n=s.tiers)==null?void 0:n.gold)||{}}},freeMaxDestinations:Number(s.freeMaxDestinations)>0?Number(s.freeMaxDestinations):t.freeMaxDestinations,houseUnlimited:s.houseUnlimited!==!1,houseUserIds:Array.isArray(s.houseUserIds)?s.houseUserIds:t.houseUserIds}}function pr(){return{...Ds().campaign,...si().campaign||{}}}function Mc(){const e=u.user;if(!e)return!1;const t=ur();return e.id==="dbs"||e.username==="DatBoiSkeet"?!0:(t.houseUserIds||[]).includes(e.id)}function mr(){const e=ur();if(Mc()&&e.houseUnlimited)return{max:ti.length,source:"house_free",tier:null};const t=pr();if(t.status==="active"&&t.tier&&e.tiers[t.tier]){const s=e.tiers[t.tier];return{max:s.maxDestinations,source:"campaign",tier:t.tier,badge:s.badge,placement:!!s.placement}}return{max:e.freeMaxDestinations,source:"free_baseline",tier:null,badge:null,placement:!1}}function Lc(){const e=u.user;if(!e)return{error:"signin"};const t=nt();if(t.session&&!t.session.endedAt)return{error:"already_live"};const s=Object.values(t.platforms).filter(c=>c.connected).map(c=>c.id);if(!s.length)return{error:"no_platforms"};let i=(t.selected||[]).filter(c=>s.includes(c));if(!i.length)return{error:"none_selected"};const a=mr();if(i.length>a.max)return{error:"over_cap",max:a.max,selected:i.length,source:a.source};const n=i.map((c,d)=>{const p=ti.find(f=>f.id===c),m=d===i.length-1&&i.length>2?"connecting":"streaming";return{id:c,label:(p==null?void 0:p.label)||c,status:m==="connecting"?"connecting":"streaming",health:m,startedAt:Date.now()}}),l=pr(),o={id:$t("rs"),hostId:e.id,hostName:e.username,startedAt:Date.now(),destinations:n,selected:i.slice(),campaignTier:l.status==="active"?l.tier:null,campaignBadge:a.badge||null,placement:!!a.placement,testMode:!0,endedAt:null};return Ot({...t,session:o,selected:i}),{ok:!0,session:o}}function Pc(){const e=nt();if(!e.session||e.session.endedAt)return{error:"offline"};const t={...e.session,endedAt:Date.now(),destinations:(e.session.destinations||[]).map(i=>({...i,status:i.health==="error"?"error":"ended",health:i.health==="error"?"error":"ended"}))},s=[t,...e.history||[]].slice(0,20);return Ot({...e,session:null,history:s}),{ok:!0,session:t,history:s}}function Ic(){const e=si().session;return e&&!e.endedAt?e:null}function gr(){const e=M().connectPrefs||{};return{ageConfirmed:!!e.ageConfirmed,rulesAccepted:!!e.rulesAccepted}}function Pa(e={}){const t={...gr(),...e};return t.ageConfirmed||(t.rulesAccepted=!1),po(s=>({...s,connectPrefs:t})),t}const fr=[{id:"day_one",name:"Day One",blurb:"Joined the Loyalty Club — recognition starts with showing up, not spending.",need:0,kind:"join"},{id:"listener",name:"Listener",blurb:"Logged authorized listening (demo tick). Not purchase-only.",need:1,kind:"listen"},{id:"live_attendee",name:"Live Regular",blurb:"Attended a livestream (demo stub). Healthy participation.",need:1,kind:"live"},{id:"club_member",name:"Club Member",blurb:"Joined a Fan Club discussion community.",need:1,kind:"club"},{id:"helper",name:"Helper",blurb:"Community-helper milestone (welcome tip / guidelines share demo).",need:1,kind:"help"},{id:"top_fan",name:"Top Fan",blurb:"Earned 50+ loyalty points from mixed healthy actions — gifts alone do not unlock this.",needPoints:50}];function hr(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function fs(){const e=u.loyalty||{};return{points:Number(e.points)||0,history:Array.isArray(e.history)?e.history:[],badges:Array.isArray(e.badges)?e.badges:[],publicVisible:e.publicVisible!==!1,lastActionAt:e.lastActionAt&&typeof e.lastActionAt=="object"?e.lastActionAt:{},dayCounts:e.dayCounts&&typeof e.dayCounts=="object"?e.dayCounts:{}}}function ia(e){u={...u,loyalty:e},A(u)}function _c(){return"loy_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function qc(e,{cooldownMs:t=8e3,dailyCap:s=8}={}){const i=fs(),a=Date.now(),n=Number(i.lastActionAt[e])||0;if(a-n<t)return{ok:!1,reason:"cooldown"};const l=hr(a);return((i.dayCounts[l]||{})[e]||0)>=s?{ok:!1,reason:"daily_cap"}:{ok:!0}}function Bc(e){const t=new Set(e.badges||[]),s={};return(e.history||[]).forEach(i=>{s[i.kind]=(s[i.kind]||0)+1}),fr.forEach(i=>{if(!t.has(i.id)){if(i.needPoints!=null){e.points>=i.needPoints&&t.add(i.id);return}if(i.id==="day_one"){((e.history||[]).length>0||e.points>0)&&t.add(i.id);return}(s[i.kind]||0)>=(i.need||1)&&t.add(i.id)}}),[...t]}function hs(){return fs()}function Oc(e){const t=fs();return ia({...t,publicVisible:!!e}),hs()}function Nc(e,{points:t=5,note:s=""}={}){if(!u.user)return{error:"signin"};const a=qc(e);if(!a.ok)return{error:a.reason};const n=fs(),l=Date.now(),o=hr(l),c={...n.dayCounts,[o]:{...n.dayCounts[o]||{},[e]:((n.dayCounts[o]||{})[e]||0)+1}},d={id:_c(),at:l,kind:e,points:t,note:String(s||e).slice(0,120)},p={...n,points:n.points+t,history:[d,...n.history].slice(0,80),lastActionAt:{...n.lastActionAt,[e]:l},dayCounts:c};return p.badges.includes("day_one")||(p.history=p.history),p.badges=Bc(p),p.badges.includes("day_one")||(p.badges=["day_one",...p.badges]),ia(p),{ok:!0,loyalty:hs(),entry:d,newBadges:p.badges.filter(m=>!(n.badges||[]).includes(m))}}function br(){const e=hs(),t=new Set(e.badges||[]);return fr.map(s=>({...s,unlocked:t.has(s.id)}))}function jc(){return ia({points:0,history:[],badges:[],publicVisible:!0,lastActionAt:{},dayCounts:{}}),hs()}function xt(){const e=u.openMic||{};return{applications:Array.isArray(e.applications)?e.applications:[],seeded:!!e.seeded,houseIndex:typeof e.houseIndex=="number"?e.houseIndex:0}}function ii(e){u={...u,openMic:e},A(u)}function Rc(){return"om_"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Nt({force:e=!1}={}){const t=xt();if(t.seeded&&!e&&t.applications.length>0)return{skipped:!0,applications:t.applications};const s=Date.now(),i=864e5,a=[{id:"om_demo_approved",userId:"u_ria",username:"RiaLoops",talent:"producer",trackTitle:"Midnight Pads (demo)",profileNote:"Beatmaker · looking to collab on LSS energy",rightsCertified:!0,status:"approved",at:s-10*i,reviewedAt:s-9*i},{id:"om_demo_pending",userId:"u_dez",username:"DezOnMic",talent:"rapper",trackTitle:"Porch Light Freestyle",profileNote:"Opt-in showcase · not pay-to-win",rightsCertified:!0,status:"pending",at:s-2*i},{id:"om_demo_rejected",userId:"u_spam",username:"SpamBeats",talent:"dj",trackTitle:"Untitled drop",profileNote:"No rights cert honesty",rightsCertified:!1,status:"rejected",at:s-5*i,reviewedAt:s-4*i,reviewNote:"Rights certification required"}],n=typeof t.houseIndex=="number"?t.houseIndex:0;return ii({applications:a,seeded:!0,houseIndex:n}),{seeded:a.length,applications:a}}function Ti({status:e=null}={}){Nt();let t=xt().applications.slice();return e&&(t=t.filter(s=>s.status===e)),t.sort((s,i)=>(i.at||0)-(s.at||0))}function Fc(){return Ti({status:"approved"})}function Gc(){const e=xt();return yt(typeof e.houseIndex=="number"?e.houseIndex:0)}function zc(){const e=xt(),t=((typeof e.houseIndex=="number"?e.houseIndex:0)+1)%Un();return ii({...e,houseIndex:t}),yt(t)}function Uc({talent:e="rapper",trackTitle:t="",profileNote:s="",rightsCertified:i=!1}={}){const a=u.user;if(!a)return{error:"signin"};if(!i)return{error:"rights"};const n=String(t||"").trim().slice(0,80);if(!n)return{error:"title"};Nt();const l=xt();if(l.applications.some(c=>c.userId===a.id&&c.status==="pending"))return{error:"pending"};const o={id:Rc(),userId:a.id,username:a.username,talent:String(e||"other").slice(0,32),trackTitle:n,profileNote:String(s||"").trim().slice(0,240),rightsCertified:!0,status:"pending",at:Date.now()};return ii({...l,applications:[o,...l.applications],seeded:!0}),{ok:!0,application:o}}function Di(e,t,s=""){if(!Z())return{error:"admin"};if(!["pending","approved","rejected"].includes(t))return{error:"status"};const a=xt();let n=null;const l=a.applications.map(o=>o.id!==e?o:(n={...o,status:t,reviewedAt:Date.now(),reviewNote:String(s||"").slice(0,160)},n));return n?(ii({...a,applications:l}),{ok:!0,application:n}):{error:"missing"}}function Vc(){var $,k;Nt(),je();try{bs(),Be()}catch{}const e=xt().applications||[],t={pending:0,approved:0,rejected:0};e.forEach(x=>{const L=x.status||"pending";t[L]!==void 0?t[L]+=1:t.pending+=1});const s=e.filter(x=>x.status==="pending").sort((x,L)=>(L.at||0)-(x.at||0)),i=Ne().clubs.slice().sort((x,L)=>(L.createdAt||0)-(x.createdAt||0)),a=i.slice(0,5).map(x=>({id:x.id,name:x.name,privacy:x.privacy,official:!!x.official,memberCount:x.memberCount||(x.members||[]).length||0,createdAt:x.createdAt||0})),n=fs(),o=br().filter(x=>x.unlocked),c=it(),d=Hi();let p=0,m=0,f=0,b=0,y=0;d.forEach(x=>{p=_(p+(x.gross||0)),m=_(m+(x.fees||0)),f=_(f+(x.creatorShare||0)),b=_(b+(x.dbsShare||0)),y+=x.count||0});const w=u.wallet||{balance:0},h=u.catalog||[],v=yn();return{openMic:{total:e.length,byStatus:t,pending:s},fanClubs:{total:i.length,recent:a},loyalty:{points:n.points||0,badgeCount:o.length,badges:o.map(x=>x.name||x.id),publicVisible:n.publicVisible!==!1,historyCount:(n.history||[]).length,note:"Device-local loyalty for signed-in user · not a multi-fan leaderboard"},revenue:{demo:!0,chip:"demo figures · not production",gross:p,fees:m,creatorShare:f,dbsShare:b,earnCount:y,creatorAvailable:_(c.available||0),creatorHolds:_(c.holds||0),fanWalletBalance:Number(w.balance)||0,byCategory:d.filter(x=>x.count>0),catalogPublished:h.filter(x=>x.published).length,catalogTotal:h.length},moderation:{warnings:[],suspensions:[],note:"Stub · Content Polish owns Guidelines copy"},hotFeed:{openAlerts:(u.engagementAlerts||[]).filter(x=>!x.handledAt).length,totalAlerts:(u.engagementAlerts||[]).length,hotPosts:Array.isArray(($=u.hotFeed)==null?void 0:$.posts)?u.hotFeed.posts.length:0,hotLives:Array.isArray((k=u.hotFeed)==null?void 0:k.lives)?u.hotFeed.lives.length:0,note:"§38 · Build posts + Live Social lives"},stats:v}}const Hc={frames:"frame",effects:"effect",banners:"banner","name styles":"nameStyle",badges:"badge"},Ia=["frame-rodeo-gold","fx-snowfall","ban-skyline","name-neon","badge-dayone"];function Kc(e){const t=e&&typeof e=="object"?e:{},s={};return["frame","effect","banner","nameStyle","badge"].forEach(i=>{typeof t[i]=="string"&&t[i]&&(s[i]=t[i])}),s}function jt(){const e=u.profileShop||{};return{owned:Array.isArray(e.owned)?[...new Set(e.owned.map(String))]:[],equipped:Kc(e.equipped),reduceMotion:!!e.reduceMotion}}function Rt(e){u={...u,profileShop:e},A(u)}function et(){return jt()}function vr(e){return e&&Hc[e.category]||null}function Wc(e){const t=String(e||"");if(!t)return{error:"missing"};const s=jt();return s.owned.includes(t)?{ok:!0,already:!0,shop:et()}:(Rt({...s,owned:[...s.owned,t]}),{ok:!0,shop:et()})}function Yc(){const e=jt(),t=new Set(e.owned);return Ia.forEach(s=>t.add(s)),Rt({...e,owned:[...t]}),{ok:!0,unlocked:Ia,shop:et()}}function Qc(e){const t=String(e||"");return t.startsWith("frame-")?"frame":t.startsWith("fx-")?"effect":t.startsWith("ban-")?"banner":t.startsWith("name-")?"nameStyle":t.startsWith("badge-")?"badge":null}function Jc(e){const t=String(e||""),s=jt();if(!s.owned.includes(t))return{error:"not_owned"};const i=Qc(t);if(!i)return{error:"unknown_item"};const a={...s.equipped,[i]:t};return Rt({...s,equipped:a}),{ok:!0,slot:i,shop:et()}}function Xc(e){const t=String(e||"");if(!["frame","effect","banner","nameStyle","badge"].includes(t))return{error:"bad_slot"};const s=jt(),i={...s.equipped};return delete i[t],Rt({...s,equipped:i}),{ok:!0,shop:et()}}function Zc(e){const t=jt();return Rt({...t,reduceMotion:!!e}),et()}function ed(){return Rt({owned:[],equipped:{},reduceMotion:!1}),et()}const td=5,sd=8,id=[{id:"hp_maya_1",userId:"maya",username:"MayaBeats",text:"Studio loop dropping later — who wants the stem pack? 🔥",image:"/music/01_Long_Story_Short_Coming_Soon.jpg",mediaType:"image",atOffset:36e5*5,likeUsers:["dbs","fanjay","u_seed_a","u_seed_b","u_seed_c","u_seed_d","clipqueen"],comments:[{id:"hc_m1",userId:"fanjay",username:"FanJay",text:"Send it 🙌"},{id:"hc_m2",userId:"dbs",username:"DatBoiSkeet",text:"Pull up on Spotlight"},{id:"hc_m3",userId:"clipqueen",username:"ClipQueen",text:"Stem pack please"}],shares:5},{id:"hp_jay_1",userId:"fanjay",username:"FanJay",text:"Foreign X-Change fit check from the community — buffalo energy.",image:"/merch/03_blue_buffalo_jacket.jpeg",mediaType:"image",atOffset:36e5*8,likeUsers:["maya","dbs","u_seed_a","u_seed_c","u_seed_d","clipqueen","u_seed_b"],comments:[{id:"hc_j1",userId:"maya",username:"MayaBeats",text:"Jacket hits"},{id:"hc_j2",userId:"clipqueen",username:"ClipQueen",text:"Need this"}],shares:6},{id:"hp_clip_1",userId:"clipqueen",username:"ClipQueen",text:"New clip cut from last Live — tag @DatBoiSkeet if you remix 🎬",image:"/merch/06_black_ptsd_tee.jpeg",mediaType:"video",atOffset:36e5*12,likeUsers:["dbs","maya","fanjay","u_seed_a","u_seed_b","u_seed_c"],comments:[{id:"hc_c1",userId:"dbs",username:"DatBoiSkeet",text:"Clean edit"},{id:"hc_c2",userId:"maya",username:"MayaBeats",text:"Clipping goals"},{id:"hc_c3",userId:"fanjay",username:"FanJay",text:"Saved"},{id:"hc_c4",userId:"u_seed_a",username:"FanA",text:"Fire"}],shares:4},{id:"hp_dbs_boost",userId:"dbs",username:"DatBoiSkeet",text:"Community shoutout — Maya + Jay keeping the feed hot. Keep posting.",image:"/music/02_Ladies_Only_Coming_Soon.jpg",mediaType:"image",atOffset:36e5*3,likeUsers:["maya","fanjay","u_seed_a"],comments:[{id:"hc_d1",userId:"maya",username:"MayaBeats",text:"Grateful 💛"},{id:"hc_d2",userId:"fanjay",username:"FanJay",text:"Lets go"}],shares:2}];function Me(){const e=u.hotFeed||{};return{lives:Array.isArray(e.lives)?e.lives:[],posts:Array.isArray(e.posts)?e.posts:[],seededLives:!!e.seededLives,seededPosts:!!e.seededPosts,seededPostsVer:Number(e.seededPostsVer)||0}}function yr(e){u={...u,hotFeed:e},A(u)}function ad(){const e={...u.profiles};let t=!1;const s=(i,a,n)=>{e[i]||(e[i]={id:i,username:a,bio:n,avatar:"",followers:[],following:["dbs"],verified:!1},t=!0)};s("maya","MayaBeats","Creator · beats & live demos"),s("fanjay","FanJay","Day-one fan · playlist curator"),s("clipqueen","ClipQueen","Clipper · community edits"),t&&(u={...u,profiles:e})}function bs(){bn(),ad();const e=Me(),t=Number(e.seededPostsVer)||0;if(e.seededPosts&&t>=2)return Me();if(e.seededPosts&&t<2){const c={...u.likes||{}},d={...u.comments||{}},p={...u.postShares||{}},m=(f,b,y,w)=>{c[f]=[...new Set([...c[f]||[],...b])];const h=new Set((d[f]||[]).map($=>$.id)),v=[...d[f]||[]];(y||[]).forEach($=>{h.has($.id)||v.push({...$,at:$.at||Date.now()})}),d[f]=v,p[f]=Math.max(Number(p[f]||0),w)};return m("hp_maya_1",["dbs","fanjay","u_seed_a","u_seed_b","u_seed_c","u_seed_d","clipqueen"],[{id:"hc_m3",userId:"clipqueen",username:"ClipQueen",text:"Stem pack please"}],5),m("hp_jay_1",["maya","dbs","u_seed_a","u_seed_c","u_seed_d","clipqueen","u_seed_b"],[{id:"hc_j2",userId:"clipqueen",username:"ClipQueen",text:"Need this"}],6),m("hp_clip_1",["dbs","maya","fanjay","u_seed_a","u_seed_b","u_seed_c"],[{id:"hc_c4",userId:"u_seed_a",username:"FanA",text:"Fire"}],4),c.hp_dbs_boost&&(c.hp_dbs_boost=(c.hp_dbs_boost||[]).slice(0,3),p.hp_dbs_boost=Math.min(Number(p.hp_dbs_boost||0),2)),u={...u,likes:c,comments:d,postShares:p,hotFeed:{...e,seededPosts:!0,seededPostsVer:2}},A(u),Be(),Me()}const s=new Set((u.posts||[]).map(c=>c.id)),i=[...u.posts||[]],a={...u.likes||{}},n={...u.comments||{}},l={...u.postShares||{}},o=Date.now();return id.forEach(c=>{s.has(c.id)||(i.unshift({id:c.id,userId:c.userId,username:c.username,text:c.text,image:c.image||"",mediaType:c.mediaType||(c.image?"image":"text"),at:o-(c.atOffset||0),house:c.userId==="dbs"}),a[c.id]=[...c.likeUsers||[]],n[c.id]=(c.comments||[]).map(d=>({...d,text:d.text,at:o-(c.atOffset||0)+6e4})),c.shares&&(l[c.id]=c.shares))}),a.p1&&a.p1.length<3&&(a.p1=[...new Set([...a.p1||[],"maya","fanjay","u_seed_a"])]),a.p2&&a.p2.length<2&&(a.p2=[...new Set([...a.p2||[],"maya","fanjay"])]),(!n.p1||n.p1.length<2)&&(n.p1=[...n.p1||[],{id:"hc_p1a",userId:"maya",username:"MayaBeats",text:"Cover art goes crazy",at:o-8e7},{id:"hc_p1b",userId:"fanjay",username:"FanJay",text:"Been waiting on this",at:o-7e7}]),l.p1=Math.max(l.p1||0,2),l.p2=Math.max(l.p2||0,1),u={...u,posts:i,likes:a,comments:n,postShares:l,hotFeed:{...e,seededPosts:!0,seededPostsVer:2}},A(u),Be(),Me()}function ai(e){const t=u.likes&&u.likes[e]||[],s=u.comments&&u.comments[e]||[],i=u.postShares&&u.postShares[e]||0;return t.length+s.length+Number(i||0)}function Be(){const e=Me(),s=(u.posts||[]).map(o=>{const c=(u.likes&&u.likes[o.id]||[]).length,d=(u.comments&&u.comments[o.id]||[]).length,p=Number(u.postShares&&u.postShares[o.id]||0),m=c+d+p;return{id:o.id,postId:o.id,score:m,likes:c,comments:d,shares:p,username:o.username,userId:o.userId,preview:(o.text||"").slice(0,120),text:o.text||"",image:o.image||"",mediaType:o.mediaType||(o.image?"image":"text"),at:o.at||0,house:o.userId==="dbs"||!!o.house}}).filter(o=>o.score>=td).sort((o,c)=>c.score-o.score||c.at-o.at).slice(0,sd),i=new Set((e.posts||[]).map(o=>o.postId||o.id)),a=Array.isArray(u.engagementAlerts)?[...u.engagementAlerts]:[],n=new Set(a.filter(o=>o.kind==="post").map(o=>o.refId));s.forEach(o=>{n.has(o.id)||i.has(o.id)&&e.posts.length||(a.unshift({id:"ea_post_"+o.id+"_"+Date.now().toString(36),kind:"post",refId:o.id,title:(o.preview||o.text||"Hot post").slice(0,80),username:o.username,score:o.score,mediaType:o.mediaType||"text",at:Date.now(),handledAt:null,handledNote:null}),n.add(o.id))});const l=a.slice(0,60);return u={...u,hotFeed:{lives:e.lives,seededLives:e.seededLives,posts:s,seededPosts:e.seededPosts||s.length>0,seededPostsVer:Number(e.seededPostsVer)||0},engagementAlerts:l},A(u),Me()}function wr(e=8){return bs(),Me().posts.length||Be(),(Me().posts||[]).slice(0,Math.max(1,Number(e)||8))}function Sr(e){const t=String(e||"");if(!t)return{error:"missing"};if(!(u.posts||[]).find(a=>a.id===t))return{error:"missing"};const i={...u.postShares||{}};return i[t]=Number(i[t]||0)+1,u={...u,postShares:i},A(u),Be(),{ok:!0,shares:i[t],score:ai(t)}}function nd(e){const t=e||{},s=t.kind==="live"?"live":"post",i=String(t.refId||t.id||"");if(!i)return{error:"missing"};const a=Array.isArray(u.engagementAlerts)?[...u.engagementAlerts]:[],n=a.find(o=>o.kind===s&&o.refId===i&&!o.handledAt);if(n)return{ok:!0,alert:n,deduped:!0};const l={id:t.id||"ea_"+s+"_"+i+"_"+Date.now().toString(36),kind:s,refId:i,title:String(t.title||"Hot item").slice(0,120),username:String(t.username||""),score:Number(t.score)||0,viewers:t.viewers!=null?Number(t.viewers):void 0,gifts:t.gifts!=null?Number(t.gifts):void 0,mediaType:t.mediaType||(s==="live"?"live":"text"),at:t.at||Date.now(),handledAt:t.handledAt||null,handledNote:t.handledNote||null};return u={...u,engagementAlerts:[l,...a].slice(0,60)},A(u),{ok:!0,alert:l}}function _a({openOnly:e=!0}={}){const t=Array.isArray(u.engagementAlerts)?u.engagementAlerts:[];return(e?t.filter(i=>!i.handledAt):t.slice()).sort((i,a)=>(a.at||0)-(i.at||0))}function ys(e,t){const s=String(e||"");if(!s)return{error:"missing"};const i=Array.isArray(u.engagementAlerts)?u.engagementAlerts:[];let a=null;const n=i.map(l=>l.id!==s?l:(a={...l,handledAt:Date.now(),handledNote:t!=null?String(t):l.handledNote||"handled"},a));return a?(u={...u,engagementAlerts:n},A(u),{ok:!0,alert:a}):{error:"missing"}}function rd(e){if(!Z())return{error:"admin"};const t=u.user;if(!t)return{error:"signin"};const s=String(e||""),i=new Set(u.likes&&u.likes[s]||[]);return i.add(t.id),u={...u,likes:{...u.likes,[s]:[...i]}},A(u),Be(),{ok:!0,count:i.size,score:ai(s)}}function od(e,t){if(!Z())return{error:"admin"};const s=u.user;if(!s)return{error:"signin"};const i=String(e||""),a=t.trim();if(!a)return{error:"empty"};const n={id:"c_admin_"+Date.now().toString(36),userId:s.id,username:s.username,text:a,at:Date.now(),admin:!0},l=u.comments&&u.comments[i]||[];return u={...u,comments:{...u.comments,[i]:[...l,n]}},A(u),Be(),{ok:!0,comment:n,score:ai(i)}}function ld(e){if(!Z())return{error:"admin"};const t=Sr(e);return t.error?t:{ok:!0,shares:t.shares,link:"#/posts",score:t.score}}function aa(e,t){return Math.max(0,Number(e)||0)+Math.max(0,Number(t)||0)*20}function na(e){if(!e||typeof e!="object")return null;const t=String(e.id||e.liveId||"");if(!t)return null;const s=String(e.hostId||e.userId||""),i=String(e.hostName||e.username||e.handle||"Creator"),a=Math.max(0,Number(e.viewers)||0),n=Math.max(0,Number(e.giftsTotal??e.gifts)||0),l=e.score!=null&&Number.isFinite(Number(e.score))?Number(e.score):aa(a,n);return{id:t,hostId:s,hostName:i,title:String(e.title||"Live"),viewers:a,giftsTotal:n,house:!!e.house,spikedAt:e.spikedAt||null,score:l}}function kr({force:e=!1}={}){const t=Me();if(t.seededLives&&!e&&(t.lives||[]).length>0)return{skipped:!0,lives:t.lives.map(na).filter(Boolean)};const s=[{id:"hl_dbs_house",hostId:"dbs",hostName:"DatBoiSkeet",title:"DBS Live · Listening Session",viewers:8420,giftsTotal:186,house:!0},{id:"hl_dbs_vault",hostId:"dbs",hostName:"DatBoiSkeet",title:"Vault Drop Afterparty · House",viewers:3210,giftsTotal:94,house:!0},{id:"hl_skeetfan",hostId:"u_skeetfanatl",hostName:"SkeetFanATL",title:"ATL reacts · Long Story Short",viewers:1540,giftsTotal:42,house:!1},{id:"hl_vaultwatch",hostId:"u_vaultwatcher",hostName:"VaultWatcher",title:"Vault deep cut night",viewers:980,giftsTotal:61,house:!1},{id:"hl_fxclip",hostId:"u_fxclipper",hostName:"FXClipper",title:"Foreign X-Change clips live",viewers:2210,giftsTotal:28,house:!1},{id:"hl_nightowl",hostId:"u_nightowldbs",hostName:"NightOwlDBS",title:"Late night lounge · chill",viewers:412,giftsTotal:15,house:!1},{id:"hl_longstory",hostId:"u_longstorylistener",hostName:"LongStoryListener",title:"LSS theory hour",viewers:128,giftsTotal:7,house:!1},{id:"hl_ladies",hostId:"u_ladiesonlyfan",hostName:"LadiesOnlyFan",title:"Ladies Only countdown",viewers:67,giftsTotal:3,house:!1}].map(i=>({...i,spikedAt:null,score:aa(i.viewers,i.giftsTotal)}));return yr({...t,lives:s,seededLives:!0}),{ok:!0,lives:s}}function Ft(){return kr(),(Me().lives||[]).map(na).filter(Boolean).sort((t,s)=>(s.score||0)-(t.score||0)||(s.viewers||0)-(t.viewers||0))}function cd(e){const t=String(e||"");if(!t)return{error:"missing"};kr();const s=Me();let i=null;const a=(s.lives||[]).map(l=>{const o=na(l);if(!o||o.id!==t)return l;const c=180+Math.floor(Math.random()*920),d=4+Math.floor(Math.random()*28),p=o.viewers+c,m=o.giftsTotal+d,f=aa(p,m);return i={...o,viewers:p,giftsTotal:m,score:f,spikedAt:Date.now()},i});if(!i)return{error:"missing"};yr({...s,lives:a,seededLives:!0});const n=nd({kind:"live",refId:i.id,title:i.title,username:i.hostName,score:i.score,viewers:i.viewers,gifts:i.giftsTotal});return{ok:!0,live:i,alert:(n==null?void 0:n.alert)||null,deduped:!!(n!=null&&n.deduped)}}function dd(){return Ft().filter(s=>s&&!s.house).sort((s,i)=>(i.score||0)-(s.score||0)||(i.viewers||0)-(s.viewers||0)).slice(0,6).map(s=>({id:s.id,hostId:s.hostId,hostName:s.hostName,title:s.title,viewers:s.viewers,giftsTotal:s.giftsTotal,house:!!s.house,score:s.score,spikedAt:s.spikedAt||null,playbacksToday:s.playbacksToday!=null?s.playbacksToday:Math.max(1,Math.round((s.viewers||0)/40))}))}function $r(){const e=new Date().toISOString().slice(0,10),s=(bt({publishedOnly:!0,types:["song"]})||[]).map(a=>{const n=Number(a.playsToday)||Number(a.playCount)||Number(a.plays)||0;let l="";return a.coverRef&&!String(a.coverRef).startsWith("idb:")&&(l=a.coverRef),{id:a.id,title:a.title||"Untitled",artist:a.artist||"DatBoiSkeet",cover:l,playsToday:n,href:"#/music",demo:!1,day:e,status:a.status||(a.published?"Published":"Catalog")}}).filter(a=>a.playsToday>0).sort((a,n)=>n.playsToday-a.playsToday||String(a.title).localeCompare(String(n.title)));return s[0]?s[0]:{id:"demo_most_played_lss",title:"Long Story Short",artist:"DatBoiSkeet",cover:"/music/01_Long_Story_Short_Coming_Soon.jpg",playsToday:900+e.split("-").reduce((a,n)=>a+Number(n),0)%400,href:"#/music",demo:!0,day:e,status:"Coming Soon"}}let qa;function g(e){const t=document.getElementById("toast");t&&(t.textContent=e,t.classList.add("show"),clearTimeout(qa),qa=setTimeout(()=>t.classList.remove("show"),2400))}function r(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function N(e){const t=Math.max(0,Math.floor((Date.now()-e)/1e3));if(t<60)return t+"s";const s=Math.floor(t/60);if(s<60)return s+"m";const i=Math.floor(s/60);return i<24?i+"h":Math.floor(i/24)+"d"}function I(e,t,s={}){let i="";if(s.badgeHtml)i=s.badgeHtml;else if(s.badge){const n=r(s.badge),l=s.badgeAria?` aria-label="${r(s.badgeAria)}"`:"",o=s.badgeTitle||s.badgeAria?` title="${r(s.badgeTitle||s.badgeAria)}"`:"";s.badgeHref?i=`<a class="badge-phase"${l}${o} href="${r(s.badgeHref)}">${n}</a>`:i=`<span class="badge-phase"${l}${o}>${n}</span>`}const a=s.lead?`<p class="lead">${s.lead}</p>`:"";return`
    <section class="page">
      <header class="page-head">
        <h1>${r(e)} ${i}</h1>
        ${a}
      </header>
      ${t}
    </section>
  `}const ud={heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.5c0 4.6-8.8 10.4-8.8 10.4S3.2 13.1 3.2 8.5a4.5 4.5 0 0 1 8.8-1.2 4.5 4.5 0 0 1 8.8 1.2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',home:'<svg viewBox="0 0 24 24"><path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',posts:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',camera:'<svg viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h2.1l1.2-1.8A1.5 1.5 0 0 1 11 3.5h2a1.5 1.5 0 0 1 1.2.7L15.4 6h2.1A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-8z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',music:'<svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7" cy="18" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="16" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',merch:'<svg viewBox="0 0 24 24"><path d="M6 8h12l1 12H5L6 8zm3-3a3 3 0 0 1 6 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',explore:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',live:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor"/><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.2" opacity=".5"/></svg>',profile:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 19a7 7 0 0 1 14 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',videos:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor"/></svg>',chat:'<svg viewBox="0 0 24 24"><path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v5A2.5 2.5 0 0 1 16.5 14H11l-3.5 3v-3H7.5A2.5 2.5 0 0 1 5 11.5v-5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 17.5V19a1 1 0 0 0 1.5.85L14 17h2.5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".55"/></svg>',msg:'<svg viewBox="0 0 24 24"><rect x="3.5" y="6" width="17" height="12" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4.5 7.5 7.5 5.2L19.5 7.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',game:'<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="11" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 13h2.5M9.25 11.5v3M15.2 12.2h.01M17.3 14.2h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'};function He(e,t="rel=0"){const s=String(e||"").trim();if(!s)return"";const i=s.includes("?")?"&":"?";return`${s}${i}${t}`}const Ba="https://www.youtube.com/iframe_api";let W=[],re=0,B=null,ws=!1,Le=!1,rt=!1;const Y=new Set;let Oa=!1;function Ue(e){if(!e)return"";try{const t=new URL(e);if(t.hostname.includes("youtu.be"))return t.pathname.slice(1).split("/")[0]||"";const s=t.searchParams.get("v");if(s)return s;const i=t.pathname.match(/\/embed\/([^/?]+)/);if(i)return i[1]==="videoseries"?"":i[1]}catch{}return""}function Na(e){if(!e)return"";try{return new URL(e).searchParams.get("list")||""}catch{return""}}function Ct(e){return e?`https://i.ytimg.com/vi/${e}/hqdefault.jpg`:""}function pd(){var n,l;const e=[],t=new Set,s=new Set,i=o=>{if(o.playlistId){if(s.has(o.playlistId))return;s.add(o.playlistId)}else if(o.youtubeId){if(t.has(o.youtubeId))return;t.add(o.youtubeId)}else return;e.push(o)};for(const o of ss){const c=((n=o.links)==null?void 0:n.youtube)||"",d=Ue(c)||Ue(((l=o.links)==null?void 0:l.youtubeMusic)||"");d&&i({id:o.id,title:o.title,artist:o.artist||"DatBoiSkeet",cover:o.cover||Ct(d),youtubeId:d,youtube:c||`https://www.youtube.com/watch?v=${d}`,embed:`https://www.youtube.com/embed/${d}`,links:{...o.links||{},youtube:c||`https://www.youtube.com/watch?v=${d}`},kind:"track"})}for(const o of Oi){const c=Na(o.youtube)||Na(o.embed);c&&i({id:o.id,title:o.title,artist:"DatBoiSkeet",cover:Ct("DTe4OiX2otg")||"/brand/logo-dbs-v3@2x.webp",playlistId:c,youtube:o.youtube,embed:o.embed||`https://www.youtube.com/embed/videoseries?list=${c}`,links:{youtube:o.youtube,youtubeMusic:ce.youtubeMusic,spotify:ce.spotify,apple:ce.apple},kind:"mix"})}const a=new Set(["Music Videos"]);for(const o of Ve){if(!a.has(o.category||"Music Videos")||!o.featured&&!["dirty-money","93","no-love","bouquet","where-im-from","go-2-work"].includes(o.id)&&!o.featured)continue;const c=Ue(o.youtube)||Ue(o.embed);if(!c||t.has(c))continue;const d=ss.find(p=>{var m;return Ue(((m=p.links)==null?void 0:m.youtube)||"")===c});i({id:o.id,title:o.title,artist:o.artist||"DatBoiSkeet",cover:(d==null?void 0:d.cover)||Ct(c),youtubeId:c,youtube:o.youtube,embed:o.embed||`https://www.youtube.com/embed/${c}`,links:{youtube:o.youtube,youtubeMusic:`https://music.youtube.com/watch?v=${c}`,...(d==null?void 0:d.links)||{}},kind:"mv"})}return W=e,re>=W.length&&(re=0),W}function Ge(e){return String(e||"").toLowerCase().replace(/\(.*?\)/g,"").replace(/[^a-z0-9]+/g," ").trim()}function xr(){var i,a;const e=$r();if(!e)return{item:null,meta:null,playable:!1};const t=Ge(e.title),s=W.find(n=>Ge(n.title)===t||Ge(n.title).includes(t)||t.includes(Ge(n.title)));if(s&&(s.youtubeId||s.playlistId))return{item:{...s},meta:e,playable:!0};for(const n of ss){if(Ge(n.title)!==t&&!Ge(n.title).startsWith(t)&&!t.startsWith(Ge(n.title)))continue;const l=((i=n.links)==null?void 0:i.youtube)||"",o=Ue(l)||Ue(((a=n.links)==null?void 0:a.youtubeMusic)||"");return o?{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:n.cover||Ct(o),youtubeId:o,youtube:l||`https://www.youtube.com/watch?v=${o}`,embed:`https://www.youtube.com/embed/${o}`,links:{...n.links||{},youtube:l||`https://www.youtube.com/watch?v=${o}`},kind:"track"},meta:e,playable:!0}:{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:n.cover||e.cover||"",youtube:l||ce.youtube,embed:"",links:{...n.links||{}},kind:"track"},meta:e,playable:!1}}for(const n of Ve){if(Ge(n.title)!==t&&!Ge(n.title).includes(t))continue;const l=Ue(n.youtube)||Ue(n.embed);if(l)return{item:{id:n.id,title:n.title,artist:n.artist||"DatBoiSkeet",cover:Ct(l),youtubeId:l,youtube:n.youtube,embed:n.embed||`https://www.youtube.com/embed/${l}`,links:{youtube:n.youtube,youtubeMusic:`https://music.youtube.com/watch?v=${l}`},kind:"mv"},meta:e,playable:!0}}return{item:{id:e.id||"most-played",title:e.title||"Most played",artist:e.artist||"DatBoiSkeet",cover:e.cover||"",youtube:"",embed:"",links:{spotify:ce.spotify,apple:ce.apple,youtubeMusic:ce.youtubeMusic,youtube:ce.youtube},kind:"track"},meta:e,playable:!1}}function Er(){const e=document.getElementById("spPlayNextMost"),t=document.getElementById("spPlayNextSub"),{meta:s,playable:i}=xr();if(e){if(!s){e.hidden=!0;return}if(e.hidden=!1,e.dataset.playable=i?"1":"0",e.dataset.demo=s.demo?"1":"0",e.title=i?`Most played today · ${s.title} → Play next`:`Most played today · ${s.title} (Coming Soon / open platform)`,e.setAttribute("aria-label",`Play next — ${s.title}`),t){const a=s.demo?"DEMO · ":"";t.textContent=`${a}Most played today · ${s.title}`}}}function ja(e){if(!e)return-1;if(!W.length)return W.push(e),re=0,0;let t=W.findIndex(i=>e.youtubeId&&i.youtubeId===e.youtubeId||e.playlistId&&i.playlistId===e.playlistId||i.id===e.id);if(t===re)return re;if(t>=0){const[i]=W.splice(t,1);t<re&&(re-=1),e=i}const s=Math.min(re+1,W.length);return W.splice(s,0,e),s}function md(){var n,l,o,c;const{item:e,meta:t,playable:s}=xr();if(!t||!e){g("No most-played track yet");return}if(!s){const d=document.getElementById("spOpen"),p=((n=e.links)==null?void 0:n.apple)||((l=e.links)==null?void 0:l.youtubeMusic)||((o=e.links)==null?void 0:o.spotify)||((c=e.links)==null?void 0:c.youtube)||ce.apple;d&&p&&(d.href=p),g(t.demo||t.status==="Coming Soon"?`${t.title} · Coming Soon — no in-app master. Open Music / Stream Everywhere when it drops.`:`${t.title} — open official platform (not in-app audio)`),Er();return}if(ra()||!!rt&&Le&&Y.size===0||Y.size>0){const d=ja(e);g(d===re?`Already playing · ${e.title}`:`Queued next · ${e.title}`),ge();return}let a=W.findIndex(d=>e.youtubeId&&d.youtubeId===e.youtubeId||e.playlistId&&d.playlistId===e.playlistId||d.id===e.id);a<0&&(a=ja(e)),Lr(a),g(`Playing · ${e.title}`)}const Gt=[];function Ar(){var e;return(e=window.YT)!=null&&e.Player?Promise.resolve(window.YT):new Promise(t=>{var i;if(Gt.push(t),ws)return;ws=!0;const s=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{ws=!1;try{s==null||s()}catch{}const a=window.YT;for(;Gt.length;)try{Gt.shift()(a)}catch{}Mt()},document.querySelector(`script[src="${Ba}"]`)){if((i=window.YT)!=null&&i.Player){ws=!1;const a=window.YT;for(;Gt.length;)try{Gt.shift()(a)}catch{}Mt()}}else{const a=document.createElement("script");a.src=Ba,a.async=!0,document.head.appendChild(a)}})}function Tr(){Ar().then(()=>Mt()).catch(()=>{})}function Mt(){var n;if(!(document.getElementById("dbsStickyFrame")||document.getElementById("dbsYtHost"))||!((n=window.YT)!=null&&n.Player)||B)return;const t=W[re],s={autoplay:0,controls:0,rel:0,modestbranding:1,playsinline:1,enablejsapi:1,origin:location.origin},i={height:"1",width:"1",playerVars:s,events:{onReady:()=>{ge()},onStateChange:l=>{l.data===0&&Mr({auto:!0}),ge()},onError:()=>{g("YouTube embed error — Open on YouTube"),ge()}}};t!=null&&t.playlistId?i.playerVars={...s,listType:"playlist",list:t.playlistId}:t!=null&&t.youtubeId?i.videoId=t.youtubeId:i.videoId="DTe4OiX2otg";const a=document.getElementById("dbsStickyFrame")?"dbsStickyFrame":"dbsYtHost";B=new window.YT.Player(a,i)}function cs({autoplay:e}={autoplay:!1}){const t=W[re];if(!t||!(B!=null&&B.cueVideoById)){Mt();return}try{t.playlistId?(typeof B.loadPlaylist=="function"?B.loadPlaylist({list:t.playlistId,listType:"playlist",index:0}):typeof B.cuePlaylist=="function"&&B.cuePlaylist({list:t.playlistId,listType:"playlist",index:0}),e&&Le&&Y.size===0&&setTimeout(()=>{try{B.playVideo()}catch{}},250)):t.youtubeId&&(e&&Le&&Y.size===0?B.loadVideoById(t.youtubeId):B.cueVideoById(t.youtubeId))}catch{}ge()}function ra(){var e;try{return((e=B==null?void 0:B.getPlayerState)==null?void 0:e.call(B))===1}catch{return!1}}function ge(){var p,m,f;const e=W[re],t=document.getElementById("spArt"),s=document.getElementById("spTitle"),i=document.getElementById("spSub"),a=document.getElementById("spPlay"),n=document.getElementById("spOpen"),l=document.getElementById("spSource"),o=Y.size>0,c=!o&&(rt||ra());if(t&&e&&(t.src=e.cover||Ct(e.youtubeId||"")||"/brand/logo-dbs-v3@2x.webp",t.alt=e.title||""),s&&(s.textContent=(e==null?void 0:e.title)||"DatBoiSkeet"),i&&(Le?o?i.textContent=`Paused · ${[...Y][0]} interrupt`:i.textContent=`${(e==null?void 0:e.artist)||"DatBoiSkeet"} · via YouTube (not Spotify in-app)`:i.textContent="Tap Play · YouTube embed · Stream Everywhere"),a&&(a.textContent=c?"❚❚":"▶",a.setAttribute("aria-label",c?"Pause":"Play DBS Music"),a.dataset.playing=c?"1":"0"),n&&e){const b=((p=e.links)==null?void 0:p.apple)||((m=e.links)==null?void 0:m.youtubeMusic)||((f=e.links)==null?void 0:f.spotify)||e.youtube||ce.apple;n.href=b,n.title="Open on official platform"}l&&(l.textContent=(e==null?void 0:e.kind)==="mix"?"YT Mix":(e==null?void 0:e.kind)==="mv"?"YT MV":"YouTube");const d=document.getElementById("spBadge");d&&(d.textContent=o?"INTERRUPTED":Le&&c?"PLAYING · YT":"TEST · YT EMBED"),Er()}function gd(){var e;if(Y.size>0){g("Paused for "+[...Y][0]+" — resume when done"),ge();return}Le=!0,rt=!0,Tr(),Mt();try{if(B!=null&&B.playVideo){const t=(e=B.getPlayerState)==null?void 0:e.call(B);t===-1||t===5||t===void 0?cs({autoplay:!0}):B.playVideo()}else{const t=setInterval(()=>{B!=null&&B.playVideo&&(clearInterval(t),cs({autoplay:!0}))},120);setTimeout(()=>clearInterval(t),8e3)}}catch{g("Tap Play DBS Music again if autoplay blocked")}ge()}function fd({clearDesire:e}={}){var t;e&&(rt=!1);try{(t=B==null?void 0:B.pauseVideo)==null||t.call(B)}catch{}ge()}function vs(e="user"){e&&e!=="user"&&Y.add(e),fd({clearDesire:e==="user"}),ge()}function Dr(e){var t;if(e?Y.delete(e):Y.clear(),Y.size===0&&Le&&rt)try{(t=B==null?void 0:B.playVideo)==null||t.call(B)}catch{}ge()}function js(e){return Dr(e)}function Lt(){vs("video")}function di(){vs("live")}function Cr(){js("live")}function Ke(){js("video")}function Mr({auto:e}={}){W.length&&(re=(re+1)%W.length,rt=!0,e||(Le=!0),cs({autoplay:Le&&Y.size===0}),ge())}function hd(){W.length&&(re=(re-1+W.length)%W.length,Le=!0,rt=!0,cs({autoplay:Y.size===0}),ge())}function Lr(e){e<0||e>=W.length||(re=e,Le=!0,Y.clear(),rt=!0,cs({autoplay:!0}),ge())}function bd(){var e,t,s,i,a,n;Oa||(Oa=!0,(e=document.getElementById("spPlay"))==null||e.addEventListener("click",()=>{Y.size>0&&Y.clear(),ra()?vs("user"):gd()}),(t=document.getElementById("spPrev"))==null||t.addEventListener("click",()=>{Y.clear(),hd()}),(s=document.getElementById("spNext"))==null||s.addEventListener("click",()=>{Y.clear(),Mr()}),(i=document.getElementById("spOpen"))==null||i.addEventListener("click",l=>{g("Opening external music service (playback depends on provider)")}),(a=document.getElementById("spPlayNextMost"))==null||a.addEventListener("click",()=>{md()}),(n=document.getElementById("spQueueBtn"))==null||n.addEventListener("click",()=>{const l=document.getElementById("spQueuePanel");if(!l)return;l.hasAttribute("hidden")?(l.removeAttribute("hidden"),l.innerHTML=W.map((c,d)=>`<button type="button" class="sp-q-item${d===re?" on":""}" data-i="${d}">
              <img src="${c.cover||""}" alt="" width="36" height="36" />
              <span><b>${Ra(c.title)}</b><small>${Ra(c.artist)} · ${c.kind}</small></span>
            </button>`).join(""),l.querySelectorAll(".sp-q-item").forEach(c=>{c.addEventListener("click",()=>{Lr(Number(c.dataset.i)),l.setAttribute("hidden","")})})):l.setAttribute("hidden","")}),document.addEventListener("click",l=>{const o=document.getElementById("spQueuePanel");!o||o.hasAttribute("hidden")||!l.target.closest("#spQueuePanel")&&!l.target.closest("#spQueueBtn")&&o.setAttribute("hidden","")}))}function Ra(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}let Fa=!1;function vd(){Fa||(Fa=!0,window.addEventListener("dbs:interrupt-music",e=>{var s;const t=((s=e==null?void 0:e.detail)==null?void 0:s.reason)||"user";vs(t)}))}function yd(){pd(),bd(),vd(),ge(),Tr(),setTimeout(()=>Mt(),400)}function wd(e){var i,a;const t=e==="/live",s=e==="/videos"||e==="/home"||e==="/music"||e==="/vault";!t&&Y.has("live")&&js("live");for(const[n,l]of[...ie.entries()])if(!document.getElementById(n)){l.playing&&(_e=Math.max(0,_e-1));try{(a=(i=l.player)==null?void 0:i.destroy)==null||a.call(i)}catch{}ie.delete(n)}_e===0&&!s&&Y.has("video")&&js("video"),ge()}const ie=new Map;let _e=0,Ga=0;function Ci(e){var s;if(!e||!(e instanceof Element))return!0;const t=e.id||"";return!!(t==="dbsStickyFrame"||t==="dbsYtHost"||(s=e.closest)!=null&&s.call(e,"#dbs-sticky-player, #stickyPlayer, #dbsStickyFrame, #dbsYtHost"))}function oa(e){return e?/youtube\.com\/embed|youtube-nocookie\.com\/embed|youtu\.be\//.test(e):!1}function Sd(e){let t=e.getAttribute("src")||e.src||"";if(!oa(t))return!1;let s=!1;return/[?&]enablejsapi=1(?:&|$)/.test(t)||(t+=(t.includes("?")?"&":"?")+"enablejsapi=1",s=!0),/[?&]origin=/.test(t)||(t+=(t.includes("?")?"&":"?")+"origin="+encodeURIComponent(location.origin),s=!0),s&&(e.setAttribute("src",t),e.src=t),!0}function kd(e){if(e.id&&!ie.has(e.id)&&e.id!=="dbsStickyFrame"&&e.id!=="dbsYtHost"||e.id&&ie.has(e.id))return e.id;Ga+=1;const t=`dbs-page-yt-${Ga}`;return e.id=t,t}function $d(e,t){const s=ie.get(e);s&&(t.data===1?(s.playing||(s.playing=!0,_e+=1),Lt()):(t.data===0||t.data===2)&&(s.playing&&(s.playing=!1,_e=Math.max(0,_e-1)),_e===0&&Ke()))}function Pr(e){var n,l;const t=typeof e=="string"?document.getElementById(e):e;if(!t||Ci(t))return Promise.resolve(null);let s=t;if(t.tagName!=="IFRAME"&&(s=((n=t.querySelector)==null?void 0:n.call(t,"iframe"))||t),!s||s.tagName!=="IFRAME"||Ci(s))return Promise.resolve(null);const i=s.getAttribute("src")||s.src||"";if(!oa(i)||!Sd(s))return Promise.resolve(null);const a=kd(s);return ie.has(a)&&((l=ie.get(a))!=null&&l.player)?Promise.resolve(ie.get(a).player):Ar().then(()=>new Promise(o=>{var m;if(ie.has(a)&&((m=ie.get(a))!=null&&m.player)){o(ie.get(a).player);return}const c=()=>{var f;if(!document.getElementById(a)){o(null);return}if(ie.has(a)&&((f=ie.get(a))!=null&&f.player)){o(ie.get(a).player);return}try{const b=new window.YT.Player(a,{events:{onReady:()=>{},onStateChange:y=>$d(a,y),onError:()=>{}}});ie.set(a,{player:b,el:s,playing:!1}),s.dataset.dbsYtBound="1",o(b)}catch(b){console.warn("[dbs] bindYoutubeInterrupt failed",a,b),o(null)}};if(s.dataset.dbsYtBound==="1"&&ie.has(a)){o(ie.get(a).player);return}let d=!1;const p=()=>{d||(d=!0,c())};s.addEventListener("load",p,{once:!0}),setTimeout(p,400)}))}function ni(e){const s=[...(e&&e.querySelectorAll?e:document).querySelectorAll("iframe")].filter(i=>{if(Ci(i))return!1;const a=i.getAttribute("src")||i.src||"";return oa(a)});return Promise.all(s.map(i=>Pr(i)))}function xd(e){var a,n;const t=typeof e=="string"?document.getElementById(e):e,s=typeof e=="string"?e:t==null?void 0:t.id;if(!s||s==="dbsStickyFrame"||s==="dbsYtHost")return;const i=ie.get(s);if(i){i.playing&&(i.playing=!1,_e=Math.max(0,_e-1),_e===0&&Ke());try{(n=(a=i.player)==null?void 0:a.destroy)==null||n.call(a)}catch{}ie.delete(s)}}const Rs=new Set;function Ye(){const e=(location.hash||"").replace(/^#/,"")||"/home";let t="",s=e;const i=e.indexOf("#");i>=0&&(t=e.slice(i+1).split("?")[0],s=e.slice(0,i));const a=s.startsWith("/")?s:"/"+s,[n,l=""]=a.split("?"),o=n.split("/").filter(Boolean);return{path:"/"+(o[0]||"home"),parts:o,query:Object.fromEntries(new URLSearchParams(l)),elementId:t,raw:a}}function O(e){const s=(e.startsWith("#")?e:"#"+(e.startsWith("/")?e:"/"+e)).replace(/^#/,"");if((location.hash||"").replace(/^#/,"")===s){Rs.forEach(a=>a(Ye()));return}location.hash=s}function Ed(e){return Rs.add(e),()=>Rs.delete(e)}function Ad(){const e=()=>Rs.forEach(t=>t(Ye()));window.addEventListener("hashchange",e),location.hash?e():location.hash="/home"}const ui="/pikk-app/",At=ui.endsWith("/")?ui.slice(0,-1):ui;function Yt(e){if(e==null||e==="")return e;const t=String(e);return/^(https?:|data:|blob:|idb:|#|\/\/)/i.test(t)||At&&(t===At||t.startsWith(At+"/"))?t:t.startsWith("/")?At+t:(At||"")+"/"+t}function Ir(e=document){At&&(e.querySelectorAll("[src]").forEach(t=>{const s=t.getAttribute("src");if(!s)return;const i=Yt(s);i!==s&&t.setAttribute("src",i)}),e.querySelectorAll("[srcset]").forEach(t=>{const s=t.getAttribute("srcset");if(!s||!s.includes("/"))return;const i=s.replace(/(^|,\s*)(\/(?!\/)[^\s,]+)/g,(a,n,l)=>n+Yt(l));i!==s&&t.setAttribute("srcset",i)}),e.querySelectorAll("[data-zoom]").forEach(t=>{const s=t.getAttribute("data-zoom");if(!s)return;const i=Yt(s);i!==s&&t.setAttribute("data-zoom",i)}),e.querySelectorAll("[poster]").forEach(t=>{const s=t.getAttribute("poster");if(!s)return;const i=Yt(s);i!==s&&t.setAttribute("poster",i)}))}function _r(e,t){e&&e.querySelectorAll("a[data-path]").forEach(s=>{const i=s.getAttribute("data-path")===t;s.classList.toggle("on",i),i?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current")})}const Td=Object.freeze([{label:"Songs",href:"#/music?view=songs",detail:"Browse released singles",icon:"♫"},{label:"Albums",href:"#/music?view=albums",detail:"Browse released albums",icon:"▣"},{label:"Beats",href:"#/music?view=beats",detail:"Beat marketplace not yet available",icon:"◉"},{label:"Playlists",href:"#/music?view=playlists",detail:"Verified YouTube playlists",icon:"▤"},{label:"Upload Music",href:"#/music?view=upload",detail:"Creator uploads coming later",icon:"⇧"}]);function Qt(e=!1){const t=document.getElementById("pikkMusicMenu");if(!t||t.hidden)return;t.hidden=!0;const s=document.querySelector('#tabbar a[href="#/music"]');s==null||s.setAttribute("aria-expanded","false"),e&&(s==null||s.focus())}function Dd(){let e=document.getElementById("pikkMusicMenu");return e||(e=document.createElement("div"),e.id="pikkMusicMenu",e.className="pikk-create-overlay",e.hidden=!0,e.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-labelledby="pikkMusicMenuTitle">
    <div class="pikk-create-head"><strong id="pikkMusicMenuTitle">Music on PIKK</strong><button type="button" class="btn ghost" data-music-close aria-label="Close music menu">✕</button></div>
    <div class="pikk-create-options">
      ${Td.map(t=>`<a href="${t.href}">${t.icon} ${t.label}<small>${t.detail}</small></a>`).join("")}
    </div>
    <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · Beat selling and music uploads are not available yet</p>
  </div>`,document.body.appendChild(e),window.addEventListener("hashchange",()=>Qt()),e.addEventListener("click",t=>{t.target===e||t.target.closest("[data-music-close]")?Qt(!0):t.target.closest(".pikk-create-options a")&&Qt()}),document.addEventListener("keydown",t=>{if(e.hidden||(t.key==="Escape"&&(t.preventDefault(),Qt(!0)),t.key!=="Tab"))return;const s=[...e.querySelectorAll("a[href], button:not([disabled])")],i=s[0],a=s[s.length-1];if(!i){t.preventDefault();return}e.contains(document.activeElement)?t.shiftKey&&document.activeElement===i?(t.preventDefault(),a.focus()):!t.shiftKey&&document.activeElement===a&&(t.preventDefault(),i.focus()):(t.preventDefault(),(t.shiftKey?a:i).focus())}),e)}function Cd(e){var a,n;const t=Dd(),s=t.hidden,i=document.getElementById("pikkCreateMenu");s&&i&&!i.hidden&&(i.hidden=!0,(a=document.querySelector('#tabbar a[href="#/create"]'))==null||a.setAttribute("aria-expanded","false")),t.hidden=!s,e==null||e.setAttribute("aria-expanded",String(s)),s?(n=t.querySelector("[data-music-close]"))==null||n.focus():e==null||e.focus()}const Md="dbs_media_v1",Pt="blobs",Ld=1;function qr(){return new Promise((e,t)=>{const s=indexedDB.open(Md,Ld);s.onupgradeneeded=()=>{const i=s.result;i.objectStoreNames.contains(Pt)||i.createObjectStore(Pt,{keyPath:"id"})},s.onsuccess=()=>e(s.result),s.onerror=()=>t(s.error||new Error("idb open failed"))})}async function Pd(e,t,s={}){const i=await qr();return new Promise((a,n)=>{const l=i.transaction(Pt,"readwrite");l.objectStore(Pt).put({id:e,blob:t,mime:t.type||s.mime||"application/octet-stream",name:s.name||"",size:t.size||0,at:Date.now()}),l.oncomplete=()=>a(e),l.onerror=()=>n(l.error)})}async function Id(e){const t=await qr();return new Promise((s,i)=>{const n=t.transaction(Pt,"readonly").objectStore(Pt).get(e);n.onsuccess=()=>s(n.result||null),n.onerror=()=>i(n.error)})}const pi=new Map;async function ri(e){if(!e)return"";if(e.startsWith("idb:")){const t=e.slice(4);if(pi.has(t))return pi.get(t);const s=await Id(t);if(!(s!=null&&s.blob))return"";const i=URL.createObjectURL(s.blob);return pi.set(t,i),i}return e}function _d(e="blob"){return`${e}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}const Br=Object.freeze([{name:"Block Wars",players:"1–2",icon:"🥊",theme:"fighters",artwork:"/blockwars-preview/preview-ny-still.jpg",description:"City-based fighters, combos and special moves.",href:"#/blockwars"},{name:"PIKK Playground",players:"1–8",icon:"🎈",theme:"playground",description:"Create your character, race, jump and explore with friends."},{name:"PIKK Clash",players:"1",icon:"💎",theme:"clash",description:"Original neighborhood-themed match puzzles and venue upgrades."},{name:"PIKK Knockout",players:"1",icon:"💥",theme:"knockout",description:"Stylized physics challenges: launch, bounce and knock targets off moving platforms."},{name:"PIKK Bowling",players:"1–4",icon:"🎳",theme:"bowling",description:"Compete for strikes, spares and high scores."},{name:"PIKK Pickleball",players:"2–4",icon:"🏓",theme:"pickleball",description:"Play singles or doubles on colorful courts."},{name:"PIKK Pool",players:"1–2",icon:"🎱",theme:"pool",description:"Play 8-ball pool against friends or the computer."},{name:"PIKK Cup Pong",players:"2–4",icon:"🥤",theme:"pong",description:"Aim, throw and eliminate opponents’ cups."},{name:"PIKK Poker",players:"2–8",icon:"♠️",theme:"poker",description:"Social Texas Hold’em with nonredeemable Play Chips."},{name:"PIKK Blackjack",players:"1–5",icon:"🃏",theme:"blackjack",description:"Try for 21 against the dealer using Play Chips."},{name:"PIKK Slots",players:"1",icon:"🎰",theme:"slots",description:"Entertainment-only reels and virtual Play Chips."},{name:"PIKK Speed",players:"2",icon:"⚡",theme:"speed",description:"Race to play your cards before your opponent."},{name:"PIKK Spades",players:"4",icon:"♠",theme:"spades",description:"Partner strategy and card battles."},{name:"PIKK Dominoes",players:"2–4",icon:"🁢",theme:"dominoes",description:"Match tiles and outplay opponents."},{name:"PIKK Chess",players:"2",icon:"♟",theme:"chess",description:"Challenge opponents in a classic strategy game."}]),qd={Explore:"🧭","Shorts / Clips":"▶",Music:"🎵",Videos:"🎬",Posts:"📸",Live:"🔴","PIKK Lounge":"💬",Vault:"🔐",Marketplace:"🛍️",Missions:"🎯"},Fs=[{id:"toplive",label:"Top live"},{id:"videos",label:"Videos"},{id:"rising",label:"Rising"},{id:"hot",label:"Hot lives"},{id:"songs",label:"Songs"}],Bd=8e3,la="dbs_home_stage_v2",Od=["dbs_home_stage"];function ca(e){const t=Number(e)||0;return t>=1e3?`${(t/1e3).toFixed(t>=1e4?0:1)}k`:String(t)}function Ss(e){return e?!!(e.house||e.hostId==="dbs"||e.hostName==="DatBoiSkeet"):!1}function za(e){return e?!!(e.house||e.userId==="dbs"||e.username==="DatBoiSkeet"):!1}function Nd(e=3){const t=Ft(),s=t.filter(n=>!Ss(n)),i=t.filter(n=>Ss(n)),a=s.slice(0,Math.max(2,e-1));for(i[0]&&a.push(i[0]);a.length<e&&s[a.filter(n=>!Ss(n)).length];){const n=s[a.filter(l=>!Ss(l)).length];if(!n||a.includes(n))break;a.push(n)}return a.slice(0,e)}function jd(e=4){const t=wr(Math.max(8,e+4)),s=t.filter(n=>!za(n)),i=t.filter(n=>za(n)),a=[...s.slice(0,3)];i[0]&&a.push(i[0]);for(const n of s.slice(3)){if(a.length>=e)break;a.includes(n)||a.push(n)}for(const n of i.slice(1)){if(a.length>=e)break;a.includes(n)||a.push(n)}return a.slice(0,e)}function Or(){const e=M().live,t=Ft().map(s=>({...s}));if(e&&!e.endedAt){const s=Math.max(0,Number(e.viewers)||0),i=Math.max(0,Number(e.giftsTotal)||0);t.push({id:e.id||"session",hostId:e.hostId,hostName:e.hostName||"Creator",title:e.title||"Live now",viewers:s,giftsTotal:i,score:s+i*20,house:e.hostId==="dbs"||e.hostName==="DatBoiSkeet"})}return t.sort((s,i)=>(Number(i.viewers)||0)-(Number(s.viewers)||0)||(Number(i.score)||0)-(Number(s.score)||0)),t[0]||null}function Cs(e,{rising:t=!1}={}){const s=e.house?"House":t?"Rising":"Hot",i=Number(e.viewers)||0,a=ca(i),n=t&&e.playbacksToday!=null?` · ~${r(String(e.playbacksToday))} playbacks today`:"";return`
    <a class="home-live-card" href="#/live">
      <div class="live-hoodie" aria-hidden="false">
        <span class="live-hoodie-pill">LIVE</span>
        <span class="live-hoodie-viewers" title="${r(a)} watching">${r(a)}</span>
      </div>
      <div class="home-live-top">
        <span class="home-live-dot" aria-hidden="true"></span>
        <strong>@${r(e.hostName)}</strong>
        <span class="chip home-live-chip">${r(s)}</span>
      </div>
      <div class="home-live-title">${r(e.title||"Live now")}</div>
      <div class="home-live-stats muted">
        ${r(a)} watching · ${r(String(e.giftsTotal||0))} gifts
        ${n}
      </div>
      <div class="home-live-score muted">Score ${r(String(e.score||0))} · TEST MODE seed</div>
    </a>`}function Rd(e){return e.mediaType==="video"?"Video":e.image||e.mediaType==="image"?"Pic":"Post"}function Fd(e){if(!e)return"";const t=Number(e.playsToday)||0,s=t>=1e3?`${(t/1e3).toFixed(t>=1e4?0:1)}k`:String(t),i=e.cover?`<img class="la-thumb" src="${r(e.cover)}" alt="" loading="lazy" />`:'<span class="la-thumb la-thumb-empty" aria-hidden="true">♪</span>',a=e.demo?" · DEMO seed":"";return`
    <li class="la-row la-song">
      <a class="la-main" href="#/music">
        ${i}
        <span class="la-body">
          <strong>${r(e.title||"Track")}</strong>
          <span class="la-preview">${r(e.artist||"DatBoiSkeet")} · ${r(s)} plays today${r(a)}</span>
          <span class="la-stats muted">${r(e.status||"Music")} · ${r(e.day||"today")}</span>
        </span>
      </a>
      <span class="chip la-chip-played">Most played · today</span>
    </li>`}function Gd(e){const t=Number(e.viewers)||0,s=ca(t),i=e.house?"House":"Hot";return`
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
      <span class="chip">${r(i)}</span>
    </li>`}function zd(e){const t=e.postId||e.id,s=Rd(e),i=e.image?`<img class="la-thumb" src="${r(e.image)}" alt="" loading="lazy" />`:`<span class="la-thumb la-thumb-empty" aria-hidden="true">${r(((e.username||"?")[0]||"?").toUpperCase())}</span>`,a=e.house?" · house":"";return`
    <li class="la-row la-post">
      <a class="la-main" href="#/posts?focus=${r(t)}">
        ${i}
        <span class="la-body">
          <strong>@${r(e.username||"creator")}</strong>
          <span class="la-preview">${r((e.preview||e.text||"Hot post").slice(0,72))}</span>
          <span class="la-stats muted">♥ ${r(String(e.likes||0))} · 💬 ${r(String(e.comments||0))} · ↗ ${r(String(e.shares||0))} · score ${r(String(e.score||0))}${r(a)}</span>
        </span>
      </a>
      <span class="chip">${r(s)}</span>
    </li>`}function Ud(e){const t=e.coverRef&&!String(e.coverRef).startsWith("idb:")?e.coverRef:"";return`
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
    </li>`}function Vd(){for(const e of Od){try{sessionStorage.removeItem(e)}catch{}try{localStorage.removeItem(e)}catch{}}try{localStorage.removeItem(la)}catch{}}function Nr(){Vd();try{const e=sessionStorage.getItem(la);if(Fs.some(t=>t.id===e))return e}catch{}return"toplive"}function Hd(e){try{sessionStorage.setItem(la,e)}catch{}}function Ua(e){return"$"+Number(e||0).toLocaleString(void 0,{maximumFractionDigits:2})}function Kd(e){const t=Math.max(0,e-Date.now()),s=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4);return t<=0?"Ended":`${s}h ${i}m left`}function jr(e){if(!e)return'<p class="muted" style="margin:0">No daily app goal right now.</p>';const t=Math.min(100,Math.round(e.raised/(e.targetAmount||1)*100));return`
    <div class="home-goal-head"><strong class="home-goal-name">${r(e.name)}</strong>
      <span class="chip home-goal-time" id="homeGoalTimeLeft">${Kd(e.endsAt)}</span></div>
    <div class="home-goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${t}">
      <div class="home-goal-fill" style="width:${t}%"></div></div>
    <p class="muted home-goal-amounts" style="margin:6px 0 10px">${Ua(e.raised)} raised of ${Ua(e.targetAmount)} · ${t}%</p>
    <div class="row wrap" style="gap:8px">
      ${[50,100,250].map(s=>`<button type="button" class="btn ghost home-goal-donate" data-goal-id="${r(e.id)}" data-coins="${s}">Donate ${s} coins</button>`).join("")}
      <form class="home-goal-custom-form" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:end">
        <label style="flex:1;min-width:125px">Custom coins
          <input class="home-goal-custom-coins" type="number" inputmode="numeric" min="1" max="1000000" step="1" required placeholder="Enter coins" style="width:100%" />
        </label>
        <button type="submit" class="btn primary">Donate custom</button>
      </form>
    </div>`}function Wd(){const e=lo.map(E=>`
    <a class="preview-card" href="#${E.route}${E.hash?"#"+E.hash:""}">
      <span class="pc-icon" aria-hidden="true">${qd[E.title]||"◆"}</span>
      <strong>${r(E.title)}</strong>
      <span class="muted">${r(E.blurb)}</span>
    </a>`).join(""),t=is.map(E=>`
    <a class="cover-card" href="#/music">
      <div class="cover-frame">
        <span class="badge-cs">${r(E.status)}</span>
        <img src="${r(E.cover)}" alt="${r(E.title)}" loading="lazy" />
      </div>
      <div class="t">${r(E.title)}</div>
      <div class="sub">${r(E.artist)}</div>
    </a>`).join(""),s=Ve.filter(E=>(E.category||"Music Videos")==="Music Videos"),i=s.filter(E=>E.featured),a=i.length?i:s.slice(0,6),n=a[0]||s[0]||Ve[0],l=Oi[0],o=a.map(E=>`
    <div class="vid">
      <a class="thumb" href="${r(E.youtube)}" target="_blank" rel="noopener" aria-label="Play ${r(E.title)}"><span>▶</span></a>
      <div>
        <strong>${r(E.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">
          <a href="${r(E.youtube)}" target="_blank" rel="noopener">Watch on YouTube</a>
          · <a href="#/videos">Embed on Videos</a>
        </div>
      </div>
    </div>`).join(""),c=a.map((E,pe)=>`
    <button type="button" class="mv-pick${pe===0?" on":""}" data-embed="${r(E.embed)}" data-title="${r(E.title)}" data-yt="${r(E.youtube)}">
      <span class="mv-pick-play" aria-hidden="true">▶</span>
      <span class="mv-pick-t">${r(E.title)}</span>
    </button>`).join(""),d=l?`<div class="card home-mix" id="home-dbs-mix">
        <h3>DatBoiSkeet Mix</h3>
        <p class="muted" style="margin:0 0 10px">Stream from the original YouTube Mix playlist — not rehosted.</p>
        <div class="hero-video" style="margin:0 0 10px">
          <iframe src="${r(He(l.embed))}" title="${r(l.title)}" allowfullscreen loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div class="row wrap" style="gap:8px">
          <a class="btn" href="${r(l.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
          <a class="btn ghost" href="#/music#youtube-mixes">Music · Mixes</a>
          <a class="btn ghost" href="#/videos">All videos</a>
        </div>
      </div>`:"",m=bt({publishedOnly:!0,types:["picture"]}).map(E=>`
    <div class="cover-card catalog-admin-home" data-id="${r(E.id)}">
      <div class="cover-frame">
        <span class="badge-cs">From Admin</span>
        <img data-idb-src="${r(E.coverRef&&E.coverRef.startsWith("idb:")?E.coverRef:"")}" src="${r(E.coverRef&&!E.coverRef.startsWith("idb:")?E.coverRef:"")}" alt="${r(E.title)}" loading="lazy" />
      </div>
      <div class="t">${r(E.title)}</div>
      <div class="sub">${r(E.artist)}</div>
    </div>`).join(""),b=bt({publishedOnly:!0,types:["video"]}).slice(0,3).map(E=>`
    <div class="vid catalog-admin-home" data-id="${r(E.id)}">
      <a class="thumb" href="${r(E.youtube||"#/videos")}" ${E.youtube?'target="_blank" rel="noopener"':""}><span>▶</span></a>
      <div>
        <strong>${r(E.title)}</strong>
        <div class="muted" style="font-size:12px;margin-top:4px">${r(E.artist)} · Admin</div>
      </div>
    </div>`).join(""),y=M().live,w=y&&!y.endedAt?`<li class="la-row la-session"><a class="la-main" href="#/live"><span class="la-hoodie" aria-label="Live now"><span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span><span class="live-hoodie-viewers">${r(ca(y.viewers||0))}</span></span><span class="la-body"><strong>@${r(y.hostName)}</strong><span class="la-preview">${r(y.title||"Live now")}</span><span class="la-stats muted">${r(String(y.viewers||0))} watching · your session</span></span></a><span class="chip">Live</span></li>`:"",h=$r(),v=Fd(h),$=Nd(3),k=jd(4),x=bt({publishedOnly:!0,types:["picture"]}).slice(0,2),L=$.map(Gd).join(""),D=k.map(zd).join(""),F=x.map(Ud).join(""),$e=`${v}${w}${L}${D}${F}
        <li class="la-row la-kicker"><span class="la-main la-kicker-main"><span class="la-body"><strong>Ladies Only</strong><span class="la-preview">Art live on Music · playback when it drops</span></span></span><span class="chip">Music</span></li>
        <li class="la-row la-kicker"><a class="la-main" href="#/restream"><span class="la-body"><strong>PIKK Restream</strong><span class="la-preview">Stream to YouTube, TikTok, Twitch &amp; more — free inside PIKK</span></span></a><span class="chip">Restream</span></li>${!v&&!L&&!D&&!F&&!w?'<li class="la-row"><span class="la-main la-kicker-main"><span class="la-body"><span class="la-preview muted">No hot activity yet — engage on Posts / go Live to spike the feed.</span></span></span><span class="chip">TEST</span></li>':""}`,G=Nr(),ye=Fs.map(E=>`
    <button type="button" class="home-stage-tab${E.id===G?" on":""}" role="tab"
      aria-selected="${E.id===G?"true":"false"}" data-stage="${E.id}" id="stage-tab-${E.id}">
      ${r(E.label)}
    </button>`).join(""),xe=Ft().slice(0,5),C=dd().slice(0,5),P=xe.map(E=>Cs(E)).join("")||'<p class="muted">No hot lives yet — seed from Live / Hot Feed.</p>',q=C.map(E=>Cs(E,{rising:!0})).join("")||'<p class="muted">No rising streamers yet.</p>',V=is.map(E=>`
    <a class="home-song-card" href="#/music">
      <img src="${r(E.cover)}" alt="" loading="lazy" />
      <div>
        <strong>${r(E.title)}</strong>
        <div class="muted" style="font-size:12px">${r(E.artist)} · ${r(E.status)}</div>
        <span class="chip" style="margin-top:6px">Enhancement · Coming Soon</span>
      </div>
    </a>`).join(""),H=Or(),j=H?Cs(H):'<p class="muted">No live streams right now — go Live or check Hot Feed.</p>',z=`
    <div class="home-stage-panel${G==="toplive"?" on":""}" data-panel="toplive" role="tabpanel" id="homeTopLivePanel" ${G==="toplive"?"":"hidden"}>
      <p class="muted home-stage-lead">Top live · highest viewers right now. Red LIVE hoodie on the card · updates as rankings change.</p>
      <div class="home-live-grid" id="homeTopLiveGrid">${j}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,we=`
    <div class="home-stage-panel${G==="videos"?" on":""}" data-panel="videos" role="tabpanel" ${G==="videos"?"":"hidden"}>
      <div class="hero-video" id="homeFeaturedVideo">
        <iframe
          id="homeFeaturedIframe"
          src="${r(He(n.embed))}"
          title="${r(n.title)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"></iframe>
      </div>
      <div class="hero-caption">
        <strong id="homeFeaturedTitle">${r(n.title)}</strong>
        <a href="#/videos">All videos →</a>
      </div>
      <div class="mv-carousel" role="tablist" aria-label="Official music videos">${c}</div>
    </div>`,Ee=`
    <div class="home-stage-panel${G==="rising"?" on":""}" data-panel="rising" role="tabpanel" ${G==="rising"?"":"hidden"}>
      <p class="muted home-stage-lead">Rising streamers · mid-tier creators from §38 Hot Feed signals (non-house). TEST MODE seeds.</p>
      <div class="home-live-grid">${q}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,Re=`
    <div class="home-stage-panel${G==="hot"?" on":""}" data-panel="hot" role="tabpanel" ${G==="hot"?"":"hidden"}>
      <p class="muted home-stage-lead">Hot lives · ranked by viewers + gifts score (house OK). Strong playbacks / spikes from earlier today count.</p>
      <div class="home-live-grid">${P}</div>
      <a class="btn ghost block" href="#/live" style="margin-top:10px">Open Live</a>
    </div>`,Fe=`
    <div class="home-stage-panel${G==="songs"?" on":""}" data-panel="songs" role="tabpanel" ${G==="songs"?"":"hidden"}>
      <p class="muted home-stage-lead">Enhancements &amp; songs · Coming Soon covers + featured tracks. Upload &amp; sell on Music when Commerce lands.</p>
      <div class="home-song-grid">${V}
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
    </div>`,ot=`
    <div class="home-stage card" id="homeFeaturedStage" data-active="${r(G)}">
      <div class="home-stage-head">
        <div>
          <p class="kicker" style="margin:0">Featured stage</p>
          <h2 class="home-stage-title">Top live · Videos · Rising · Hot · Songs</h2>
        </div>
        <span class="chip chip-audit">TEST MODE · auto-cycle</span>
      </div>
      <div class="home-stage-tabs" role="tablist" aria-label="Featured stage">${ye}</div>
      <div class="home-stage-panels">
        ${z}
        ${we}
        ${Ee}
        ${Re}
        ${Fe}
      </div>
    </div>`,lt=`
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
    </div>`,ct=`
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
    </div>`,dt=`
    <div class="card home-sell-promo home-app-goal" id="home-app-goal">
      <p class="kicker">Daily app goal · 24h</p>
      <div id="homeAppGoalBody">${jr(xi())}</div>
      <p class="chip" style="margin-top:10px">TEST MODE · no real payments</p>
    </div>`,J=`
    ${ot}

    ${lt}

    <section class="home-arcade card" id="homeArcade" aria-label="PIKK Games featured slideshow">
      <div class="home-arcade-top">
        <div><p class="kicker">Discover the arcade</p><h2>15 GAMES. ONE PIKK.</h2></div>
        <a href="#/games" class="btn ghost">All games →</a>
      </div>
      <div class="home-arcade-stage" aria-live="off">
        ${Br.map((E,pe)=>`<article class="home-arcade-slide pikk-game-${r(E.theme)}" data-game-slide="${pe}" ${pe?"hidden":""}>
          <div class="home-arcade-image">${E.artwork?`<img src="${r(E.artwork)}" alt="" loading="lazy" decoding="async" />`:`<span class="home-arcade-symbol" aria-hidden="true">${E.icon}</span>`}</div>
          <div class="home-arcade-info">
            <span class="chip">GAME ${pe+1} OF 15 · COMING SOON</span>
            <h3>${r(E.name)}</h3>
            <p>${r(E.description)}</p>
            <small>${r(E.players)} ${E.players==="1"?"Player":"Players"} · Preview only</small>
            <a class="btn primary" href="${r(E.href||"#/games")}">View in Arcade</a>
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


    ${dt}

    ${ct}

    ${d}

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
        ${$e}
      </ul>
      <div class="row wrap live-activity-links">
        <a class="btn ghost" href="#/music">Music</a>
        <a class="btn ghost" href="#/live">Live</a>
        <a class="btn ghost" href="#/posts">Posts · Hot</a>
      </div>
    </div>

    <div class="card video-list">
      <h3>Official DatBoiSkeet MVs</h3>
      ${o}${b}
      <a class="btn ghost block" href="#/videos" style="margin-top:10px">All videos</a>
    </div>
  `;return I("Home",J,{lead:"Featured stage · Top live · Block Wars preview · Live activity (hot lives · high-engagement posts from creators &amp; community · house updates) · Mix · Coming Soon · creator sell DEMO."})}function Yd(e){var T,ne,$e,G,ye,xe;const t=e.querySelector("#homeArcade");if(t){const C=[...t.querySelectorAll("[data-game-slide]")],P=t.querySelector("#homeArcadePosition");let q=0,V=null;const H=(ne=(T=window.matchMedia)==null?void 0:T.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:ne.matches,j=Ee=>{q=(Ee+C.length)%C.length,C.forEach((Re,Fe)=>{Re.hidden=Fe!==q}),P&&(P.textContent=`${q+1} / ${C.length}`)},z=()=>{V!==null&&clearInterval(V),V=null};($e=t.querySelector("[data-arcade-prev]"))==null||$e.addEventListener("click",()=>{z(),j(q-1)}),(G=t.querySelector("[data-arcade-next]"))==null||G.addEventListener("click",()=>{z(),j(q+1)}),H||(V=setInterval(()=>{if(!document.body.contains(t)){z();return}document.visibilityState==="visible"&&j(q+1)},6500));const we=new MutationObserver(()=>{document.body.contains(t)||(z(),we.disconnect())});we.observe(document.body,{childList:!0,subtree:!0})}const s=e.querySelector("#homeAppGoalBody");if(s){const C=()=>{document.body.contains(s)?s.innerHTML=jr(xi()):(clearInterval(q),document.removeEventListener("visibilitychange",P))},P=()=>{document.visibilityState==="visible"&&C()},q=setInterval(C,3e4);document.addEventListener("visibilitychange",P),s.addEventListener("submit",V=>{var we,Ee;if(!V.target.matches(".home-goal-custom-form"))return;V.preventDefault();const H=Number((we=V.target.querySelector(".home-goal-custom-coins"))==null?void 0:we.value);if(!Number.isSafeInteger(H)||H<1||H>1e6)return g("Enter 1–1,000,000 whole coins");const j=(Ee=xi())==null?void 0:Ee.id,z=qs(j,H);g(z!=null&&z.ok?"Custom donation sent · TEST MODE":(z==null?void 0:z.error)==="insufficient"?"Not enough demo coins":(z==null?void 0:z.error)==="signin"?"Sign in first":"Donation unavailable · TEST MODE"),C()}),s.addEventListener("click",V=>{const H=V.target.closest(".home-goal-donate");if(!H)return;const j=qs(H.dataset.goalId,Number(H.dataset.coins));g(j&&j.ok?`TEST MODE · ${H.dataset.coins} coins donated (no real payment)`:"TEST MODE · donate unavailable"),C()})}const i=e.querySelector(".page-head");if(i){i.querySelectorAll(".badge-phase, a.badge-phase, .live-hoodie-pill, .live-hoodie").forEach(P=>{P.remove()}),i.querySelectorAll("a, span, button").forEach(P=>{const q=(P.textContent||"").replace(/\s+/g," ").trim();(/^●?\s*LIVE$/i.test(q)||q==="LIVE")&&P.remove()});const C=i.querySelector("h1");C&&[...C.children].forEach(P=>{const q=(P.textContent||"").replace(/\s+/g," ").trim();(/LIVE/i.test(q)||P.classList.contains("badge-phase")||P.classList.contains("live-hoodie-pill"))&&P.remove()})}e.querySelectorAll("[data-idb-src]").forEach(async C=>{const P=C.getAttribute("data-idb-src");if(!P)return;const q=await ri(P);q&&(C.tagName==="IMG"||C.tagName==="VIDEO"||C.tagName==="AUDIO")&&(C.src=q)});const a=e.querySelector("#homeFeaturedIframe"),n=e.querySelector("#homeFeaturedTitle");e.querySelectorAll(".mv-pick").forEach(C=>{C.addEventListener("click",()=>{e.querySelectorAll(".mv-pick").forEach(q=>q.classList.remove("on")),C.classList.add("on");const P=C.dataset.embed||"";a&&P&&(xd(a),a.removeAttribute("data-dbs-yt-bound"),a.src=P+(P.includes("?")?"&":"?")+"rel=0",a.title=C.dataset.title||"",Pr(a)),n&&(n.textContent=C.dataset.title||"")})}),ni(e);const l=e.querySelector("#bwPreviewVideo"),o=e.querySelector("#bwPreviewPlay");if(l){const C=()=>{if(!o)return;const P=l.paused||l.ended;o.hidden=!P,o.setAttribute("aria-hidden",P?"false":"true")};o==null||o.addEventListener("click",P=>{P.preventDefault(),l.play().catch(()=>{})}),l.addEventListener("play",()=>{Lt(),C()}),l.addEventListener("pause",()=>{Ke(),C()}),l.addEventListener("ended",()=>{Ke(),C()}),l.addEventListener("pointerdown",()=>{l.paused||Lt()}),C()}const c=2e4;function d(){const C=e.querySelector("#homeTopLiveGrid");if(!C||!document.body.contains(C))return!1;const P=Or();return C.innerHTML=P?Cs(P):'<p class="muted">No live streams right now — go Live or check Hot Feed.</p>',!0}let p=setInterval(()=>{d()||(clearInterval(p),p=null)},c);const m=()=>{document.visibilityState==="visible"&&d()};document.addEventListener("visibilitychange",m),window.addEventListener("focus",d);const f=e.querySelector("#homeFeaturedStage");if(!f){const C=new MutationObserver(()=>{document.body.contains(e)||(p&&clearInterval(p),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",d),C.disconnect())});C.observe(document.body,{childList:!0,subtree:!0});return}const b=[...e.querySelectorAll(".home-stage-tab")],y=[...e.querySelectorAll(".home-stage-panel")];let w=!1,h=null;const v=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.classList.contains("reduce-motion")||((xe=(ye=document.body)==null?void 0:ye.classList)==null?void 0:xe.contains("reduce-motion"));function $(C){Fs.some(P=>P.id===C)||(C="toplive"),f.dataset.active=C,Hd(C),b.forEach(P=>{const q=P.dataset.stage===C;P.classList.toggle("on",q),P.setAttribute("aria-selected",q?"true":"false")}),y.forEach(P=>{const q=P.dataset.panel===C;P.classList.toggle("on",q),q?P.removeAttribute("hidden"):P.setAttribute("hidden","")})}function k(){const C=Fs.map(V=>V.id),P=f.dataset.active||"toplive",q=C.indexOf(P);$(C[(q+1)%C.length])}function x(){L(),!(w||v)&&(h=setInterval(k,Bd))}function L(){h&&(clearInterval(h),h=null)}b.forEach(C=>{C.addEventListener("click",()=>{w=!0,L(),$(C.dataset.stage)})});const D=Nr()||"toplive";$(D),v||setTimeout(()=>{!document.body.contains(f)||w||x()},1e4);const F=new MutationObserver(()=>{document.body.contains(f)||(L(),p&&(clearInterval(p),p=null),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",d),F.disconnect())});F.observe(document.body,{childList:!0,subtree:!0})}const Qd=20*60,Jd=250*1024*1024;function Xd({duration:e,size:t,type:s}){return s!=null&&s.startsWith("video/")?!Number.isFinite(t)||t<=0||t>Jd?"Video must be under 250 MB for this device-local preview.":!Number.isFinite(e)||e<=0?"Unable to read video duration. Try another file.":e>Qd?"PIKKUP Phase 1 videos must be 20 minutes or shorter.":"":"Select a supported video file."}function Zd(e){return new Promise((t,s)=>{const i=URL.createObjectURL(e),a=document.createElement("video");let n=!1;const l=setTimeout(()=>o(new Error("Video metadata timed out")),12e3);function o(c,d){n||(n=!0,clearTimeout(l),a.removeAttribute("src"),a.load(),URL.revokeObjectURL(i),c?s(c):t(d))}a.preload="metadata",a.onloadedmetadata=()=>o(null,a.duration),a.onerror=()=>o(new Error("Cannot read this video file")),a.src=i})}const Rr=[{id:"song",label:"Song",acceptCover:"image/*",acceptMedia:"audio/*,.mp3,.m4a,.wav,.aac"},{id:"album",label:"Album",acceptCover:"image/*",acceptMedia:"audio/*,.mp3,.m4a,.wav,.aac"},{id:"video",label:"Video",acceptCover:"image/*",acceptMedia:"video/*,.mp4,.mov,.webm"},{id:"picture",label:"Picture",acceptCover:"image/*",acceptMedia:"image/*"}];function eu(e){return I("Admin",`<div class="card admin-gate">
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
    <div class="card muted">Full team roles, revenue, and moderation ship later phases.</div>`,{lead:"Gated demo dashboard."})}function tu(){return`
  <section class="card admin-add" id="adminAdd">
    <h3>Add Content</h3>
    <p class="muted admin-add-note">PIKKUP preview: video uploads must be 20 minutes or shorter and at most 250 MB. Device-local only, not public hosting. TEST MODE · no backend. Metadata → <code>localStorage dbs_v1.catalog</code>. Files → IndexedDB <code>dbs_media_v1</code>. Works on iPhone Safari &amp; desktop. Large files stay on this device only.</p>

    <div class="admin-type-tabs" role="tablist" aria-label="Content type">${Rr.map((t,s)=>`<button type="button" class="admin-type-tab${s===0?" on":""}" data-type="${r(t.id)}" role="tab">${r(t.label)}</button>`).join("")}</div>

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
  </section>`}function su(e){if(!e.length)return'<div class="card admin-catalog"><h3>Catalog</h3><p class="muted">No admin-added items yet.</p></div>';const t=e.map(s=>{const i=s.coverRef&&!s.coverRef.startsWith("idb:")?r(s.coverRef):"";return`<div class="admin-catalog-row" data-id="${r(s.id)}">
        <div class="admin-catalog-thumb">
          ${i?`<img src="${i}" alt="" />`:`<img data-idb-src="${r(s.coverRef||"")}" alt="" class="idb-pending" />`}
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
    <div class="admin-catalog-list">${t}</div></div>`}function Pe(e){return"$"+(Number(e)||0).toFixed(2)}function iu(e){var a,n,l;const t=((a=e.openMic)==null?void 0:a.pending)||[],s=((n=e.openMic)==null?void 0:n.byStatus)||{},i=t.length?t.map(o=>`<div class="row wrap admin-om-row" data-om-id="${r(o.id)}">
            <span class="spacer"><strong>${r(o.username)}</strong> · ${r(o.talent)} · ${r(o.trackTitle)}
              <span class="chip">pending</span>
              ${o.rightsCertified?'<span class="chip">rights</span>':'<span class="chip">no rights</span>'}
            </span>
            <button type="button" class="btn primary admin-om" data-id="${r(o.id)}" data-status="approved">Approve</button>
            <button type="button" class="btn ghost admin-om" data-id="${r(o.id)}" data-status="rejected">Reject</button>
          </div>`).join(""):'<p class="muted">No pending applications. Seeded demos may already be approved/rejected — open <a href="#/openmic">Open Mic</a>.</p>';return`<section class="card admin-openmic" id="adminOpenMic">
    <h3>Open Mic queue</h3>
    <p class="muted">TEST MODE · reuse store Approve/Reject. Pending ${s.pending||0} · approved ${s.approved||0} · rejected ${s.rejected||0} · total ${((l=e.openMic)==null?void 0:l.total)||0}</p>
    ${i}
    <p class="admin-panel-links"><a class="btn" href="#/openmic">Full Open Mic page</a></p>
  </section>`}function au(e){const t=e.fanClubs||{total:0,recent:[]},s=t.recent.length?`<ul class="list-plain">${t.recent.map(i=>`<li><span><strong>${r(i.name)}</strong> · ${r(i.privacy)}${i.official?" · official":""}</span><span class="muted">${i.memberCount} members</span></li>`).join("")}</ul>`:'<p class="muted">No clubs yet.</p>';return`<section class="card admin-fanclubs" id="adminFanClubs">
    <h3>Fan Clubs glance</h3>
    <div class="stats">
      <div><strong>${t.total}</strong><span>Clubs</span></div>
    </div>
    ${s}
    <p class="admin-panel-links"><a class="btn" href="#/fanclubs">Open Fan Clubs</a></p>
  </section>`}function nu(e){const t=e.loyalty||{},s=(t.badges||[]).slice(0,6).map(i=>`<span class="chip">${r(i)}</span>`).join(" ")||'<span class="muted">None unlocked</span>';return`<section class="card admin-loyalty" id="adminLoyalty">
    <h3>Loyalty glance</h3>
    <p class="muted">${r(t.note||"Device-local loyalty")}</p>
    <div class="stats">
      <div><strong>${t.points||0}</strong><span>Points</span></div>
      <div><strong>${t.badgeCount||0}</strong><span>Badges</span></div>
      <div><strong>${t.historyCount||0}</strong><span>Actions</span></div>
    </div>
    <p class="admin-badge-row">${s}</p>
    <p class="admin-panel-links"><a class="btn" href="#/loyalty">Open Loyalty Club</a></p>
  </section>`}function ru(){return`<section class="card admin-quicklinks" id="adminQuickLinks">
    <h3>Quick links</h3>
    <p class="muted">Deep-links only · page ownership stays with Live Social / Commerce / Build.</p>
    ${[{owner:"Live Social",links:[["#/live","Live"],["#/messages","Messages"],["#/giftbattles","Gift battles"],["#/multiguest","Multi-guest"],["#/spotlight","Spotlight"],["#/restream","Restream"],["#/connect","Connect"]]},{owner:"Commerce",links:[["#/marketplace","Marketplace"],["#/wallet","Wallet"],["#/earnings","Earnings"],["#/missions","Missions"],["#/share","Share & Earn"],["#/refer","Refer & Earn"]]},{owner:"Build",links:[["#/explore","Explore"],["#/notifications","Notifications"],["#/fanclubs","Fan Clubs"],["#/loyalty","Loyalty"],["#/openmic","Open Mic"]]}].map(s=>{const i=s.links.map(([a,n])=>`<a class="btn ghost admin-qlink" href="${a}">${r(n)}</a>`).join("");return`<div class="admin-ql-group"><span class="chip">${r(s.owner)}</span><div class="admin-ql-row">${i}</div></div>`}).join("")}
  </section>`}function ou(e){const t=e.revenue||{},s=(t.byCategory||[]).map(i=>`<li><span>${r(i.label||i.category)} ×${i.count}</span><span class="muted">gross ${Pe(i.gross)} · creator ${Pe(i.creatorShare)} · PIKK ${Pe(i.dbsShare)}</span></li>`).join("");return`<section class="card admin-revenue" id="adminRevenue">
    <h3>Revenue / analytics shell</h3>
    <div class="row wrap" style="gap:8px;margin-bottom:8px">
      <span class="chip">TEST MODE</span>
      <span class="chip">${r(t.chip||"demo figures · not production")}</span>
    </div>
    <div class="stats">
      <div><strong>${Pe(t.gross)}</strong><span>Gross</span></div>
      <div><strong>${Pe(t.fees)}</strong><span>Fees</span></div>
      <div><strong>${Pe(t.creatorShare)}</strong><span>Creator net</span></div>
      <div><strong>${Pe(t.dbsShare)}</strong><span>PIKK net</span></div>
    </div>
    <p class="muted">Creator available ${Pe(t.creatorAvailable)} · holds ${Pe(t.creatorHolds)} · fan wallet ${Pe(t.fanWalletBalance)} · catalog ${t.catalogPublished||0}/${t.catalogTotal||0} published · earning lines ${t.earnCount||0}</p>
    ${s?`<ul class="list-plain">${s}</ul>`:'<p class="muted">No creator earnings in store yet — open Wallet / Earnings (Commerce) to seed demos.</p>'}
    <p class="admin-panel-links">
      <a class="btn" href="#/wallet">Wallet</a>
      <a class="btn" href="#/earnings">Earnings</a>
    </p>
  </section>`}function lu(e){bs(),Be();const t=_a({openOnly:!0}),s=_a({openOnly:!1}).length,i=e.hotFeed||{},a=t.length?t.slice(0,12).map(n=>{const l=n.kind==="live"?'<span class="chip">live</span>':'<span class="chip">post</span>',o=n.kind==="live"?` · viewers ${n.viewers??"—"} · gifts ${n.gifts??"—"}`:` · score ${n.score??0}`,c=n.kind==="post"?`<button type="button" class="btn primary admin-ea-like" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Like</button>
                 <button type="button" class="btn ghost admin-ea-comment" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Comment</button>
                 <button type="button" class="btn ghost admin-ea-share" data-ref="${r(n.refId)}" data-alert="${r(n.id)}">Share</button>`:'<a class="btn ghost" href="#/live">Open Live</a>';return`<div class="admin-ea-row" data-alert-id="${r(n.id)}">
            <div class="admin-ea-main">
              <strong>${r(n.username||"creator")}</strong> ${l}
              <div class="muted">${r(n.title||"")}${o}</div>
            </div>
            <div class="admin-ea-actions row wrap">
              ${c}
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
      <div><strong>${i.hotPosts||0}</strong><span>Hot posts</span></div>
      <div><strong>${i.hotLives||0}</strong><span>Hot lives</span></div>
    </div>
    ${a}
    <p class="admin-panel-links"><a class="btn" href="#/posts">Open Posts Hot strip</a><a class="btn" href="#/live">Open Live</a></p>
  </section>`}function cu(e){const t=e.moderation||{};return`<section class="card admin-moderation" id="adminModeration">
    <h3>Moderation stub</h3>
    <p class="muted">${r(t.note||"Stub")}</p>
    <div class="stats">
      <div><strong>${(t.warnings||[]).length}</strong><span>Warnings</span></div>
      <div><strong>${(t.suspensions||[]).length}</strong><span>Suspensions</span></div>
    </div>
    <p class="muted">Empty-state · no enforcement actions stored yet.</p>
    <p class="admin-panel-links"><a class="btn" href="#/guidelines">Community Guidelines</a></p>
  </section>`}function du(){var c;const e=Ye(),{posts:t,clipperApps:s,user:i}=M();if(((c=e.query)==null?void 0:c.admin)==="1"&&i&&i.role!=="admin"&&ds(!0),!Z())return eu(i);Nt(),je(),bs();const a=yn(),n=Vc(),l=a.clipperByStatus,o=bt({includeUnpublishedForAdmin:!0});return I("Admin",`<div class="card admin-header">
      <div class="row wrap">
        <span class="chip">TEST MODE</span>
        <span class="chip">role=admin</span>
        <span class="spacer muted">Signed in as <strong>${r(i.username)}</strong></span>
        <button class="btn ghost" id="adminRevoke">Revoke admin</button>
      </div>
      <p class="muted admin-gate-hint">Gate: Profile toggle or <code>?admin=1</code> → <code>user.role='admin'</code> in <code>dbs_v1</code>. Phase 2 panels deep-link to owner pages.</p>
    </div>

    ${ru()}
    ${lu(n)}
    ${iu(n)}
    ${au(n)}
    ${nu(n)}
    ${ou(n)}
    ${cu(n)}

    ${tu()}
    ${su(o)}

    <div class="card admin-stats">
      <h3>Phase 1 stats</h3>
      <div class="stats">
        <div><strong>${a.posts}</strong><span>Posts</span></div>
        <div><strong>${a.likes}</strong><span>Likes</span></div>
        <div><strong>${a.comments}</strong><span>Comments</span></div>
        <div><strong>${a.clippers}</strong><span>Clipper apps</span></div>
        <div><strong>${a.catalogPublished||0}</strong><span>Published</span></div>
        <div><strong>${a.catalogTotal||0}</strong><span>Catalog</span></div>
      </div>
      <p class="muted">Clippers — pending ${l.pending} · approved ${l.approved} · waitlisted ${l.waitlisted} · rejected ${l.rejected}</p>
    </div>

    <div class="card admin-posts"><h3>Posts (${t.length})</h3>
      <ul class="list-plain">${t.slice(0,20).map(d=>`<li><span>${r(d.username)}: ${r((d.text||"").slice(0,48))}</span><span class="muted">${new Date(d.at).toLocaleDateString()}</span></li>`).join("")||'<li class="muted">None</li>'}</ul>
      <a class="btn" href="#/posts">Open Posts</a>
    </div>

    <div class="card admin-clippers"><h3>Clipper applications (${s.length})</h3>
      ${s.length?s.map(d=>`<div class="row wrap admin-clip-row">
                     <span class="spacer">${r(d.name)} · ${r(d.email)} <span class="chip">${r(d.status)}</span></span>
                     <button class="btn primary admin-clip" data-id="${r(d.id)}" data-status="approved">Approve</button>
                     <button class="btn ghost admin-clip" data-id="${r(d.id)}" data-status="waitlisted">Waitlist</button>
                     <button class="btn ghost admin-clip" data-id="${r(d.id)}" data-status="rejected">Reject</button>
                   </div>`).join(""):'<p class="muted">None yet — submit via <a href="#/clippers">Clippers</a>.</p>'}</div>`,{lead:"Phase 2 controls · Add Content · Clippers · catalog."})}async function Va(e){if(!e)return"";const t=_d("media");return await Pd(t,e,{name:e.name,mime:e.type}),"idb:"+t}function Ha(e){if(!e)return"";try{const t=new URL(e);let s=t.searchParams.get("v");return!s&&t.hostname.includes("youtu.be")&&(s=t.pathname.slice(1)),!s&&t.pathname.startsWith("/embed/")&&(s=t.pathname.split("/")[2]),s?`https://www.youtube.com/embed/${s}`:""}catch{return""}}function uu(e){var a,n;(a=e.querySelector("#adminRevoke"))==null||a.addEventListener("click",()=>{ds(!1),g("Admin revoked"),O("#/admin")}),e.querySelectorAll(".admin-clip").forEach(l=>{l.addEventListener("click",()=>{vn(l.dataset.id,l.dataset.status),g("Clipper "+l.dataset.status),O("#/admin")})}),e.querySelectorAll(".admin-om").forEach(l=>{l.addEventListener("click",()=>{const o=Di(l.dataset.id,l.dataset.status,l.dataset.status==="rejected"?"Admin reject":"");if(o!=null&&o.error){g(o.error==="admin"?"Admin required":"Open Mic update failed");return}g(l.dataset.status==="approved"?"Open Mic approved":"Open Mic rejected"),O("#/admin")})}),e.querySelectorAll(".admin-ea-like").forEach(l=>{l.addEventListener("click",()=>{const o=rd(l.dataset.ref);if(o!=null&&o.error)return g(o.error==="admin"?"Admin required":"Like failed");l.dataset.alert&&ys(l.dataset.alert,"liked"),g("Liked · TEST MODE"),O("#/admin")})}),e.querySelectorAll(".admin-ea-comment").forEach(l=>{l.addEventListener("click",()=>{const o=od(l.dataset.ref,"🔥 PIKK team — keep it up! (TEST MODE)");if(o!=null&&o.error)return g(o.error==="admin"?"Admin required":"Comment failed");l.dataset.alert&&ys(l.dataset.alert,"commented"),g("Comment posted · TEST MODE"),O("#/admin")})}),e.querySelectorAll(".admin-ea-share").forEach(l=>{l.addEventListener("click",async()=>{var d;const o=ld(l.dataset.ref);if(o!=null&&o.error)return g(o.error==="admin"?"Admin required":"Share failed");const c=`${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(l.dataset.ref)}`;try{(d=navigator.clipboard)!=null&&d.writeText&&await navigator.clipboard.writeText(c),g("Link copied · share +1 (TEST MODE)")}catch{g("Share +1 (TEST MODE)")}l.dataset.alert&&ys(l.dataset.alert,"shared"),O("#/admin")})}),e.querySelectorAll(".admin-ea-handle").forEach(l=>{l.addEventListener("click",()=>{const o=ys(l.dataset.alert,"handled");if(o!=null&&o.error)return g("Could not mark handled");g("Alert handled"),O("#/admin")})}),e.querySelectorAll("img[data-idb-src]").forEach(async l=>{const o=l.getAttribute("data-idb-src");if(!o)return;const c=await ri(o);c&&(l.src=c,l.classList.remove("idb-pending"))});const t=e.querySelector("#adminType"),s=e.querySelector("#adminMediaFile"),i=e.querySelector("#adminCoverFile");e.querySelectorAll(".admin-type-tab").forEach(l=>{l.addEventListener("click",()=>{e.querySelectorAll(".admin-type-tab").forEach(m=>m.classList.remove("on")),l.classList.add("on");const o=l.dataset.type;t&&(t.value=o);const c=Rr.find(m=>m.id===o);c&&s&&(s.accept=c.acceptMedia),c&&i&&(i.accept=c.acceptCover);const d=e.querySelector("#adminMediaLabel");d&&(d.textContent=o==="picture"?"Picture file (or use cover only)":o==="video"?"Video file (optional if YouTube link set)":"Audio / media file (optional)");const p=e.querySelector("#adminStreamingFields");p&&(p.style.display=o==="song"||o==="album"?"":"none")})}),e.querySelectorAll(".admin-dropzone").forEach(l=>{const o=l.querySelector(".admin-file-input"),c=l.querySelector(".admin-file-name");l.addEventListener("click",d=>{d.target!==o&&(o==null||o.click())}),l.addEventListener("keydown",d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),o==null||o.click())}),o==null||o.addEventListener("change",()=>{var p;const d=(p=o.files)==null?void 0:p[0];c&&(c.textContent=d?`${d.name} · ${(d.size/1024/1024).toFixed(2)} MB`:"")}),l.addEventListener("dragover",d=>{d.preventDefault(),l.classList.add("drag")}),l.addEventListener("dragleave",()=>l.classList.remove("drag")),l.addEventListener("drop",d=>{var f,b;d.preventDefault(),l.classList.remove("drag");const p=(b=(f=d.dataTransfer)==null?void 0:f.files)==null?void 0:b[0];if(!p||!o)return;const m=new DataTransfer;m.items.add(p),o.files=m.files,o.dispatchEvent(new Event("change"))})}),(n=e.querySelector("#adminAddForm"))==null||n.addEventListener("submit",async l=>{var k,x,L,D,F,T,ne,$e,G,ye,xe,C,P,q,V,H,j,z,we,Ee,Re,Fe,ot,lt,ct,dt;l.preventDefault();const o=e.querySelector("#adminAddStatus"),c=e.querySelector("#adminSave"),d=(x=(k=e.querySelector("#adminTitle"))==null?void 0:k.value)==null?void 0:x.trim(),p=((D=(L=e.querySelector("#adminArtist"))==null?void 0:L.value)==null?void 0:D.trim())||"DatBoiSkeet",m=((F=e.querySelector("#adminType"))==null?void 0:F.value)||"song",f=((ne=(T=e.querySelector("#adminCoverUrl"))==null?void 0:T.value)==null?void 0:ne.trim())||"",b=((G=($e=e.querySelector("#adminMediaUrl"))==null?void 0:$e.value)==null?void 0:G.trim())||"",y=((xe=(ye=e.querySelector("#adminYoutube"))==null?void 0:ye.value)==null?void 0:xe.trim())||"",w={spotify:((P=(C=e.querySelector("#adminSpotify"))==null?void 0:C.value)==null?void 0:P.trim())||"",apple:((V=(q=e.querySelector("#adminApple"))==null?void 0:q.value)==null?void 0:V.trim())||"",youtubeMusic:((j=(H=e.querySelector("#adminYtm"))==null?void 0:H.value)==null?void 0:j.trim())||"",tidal:((we=(z=e.querySelector("#adminTidal"))==null?void 0:z.value)==null?void 0:we.trim())||"",amazon:((Re=(Ee=e.querySelector("#adminAmazon"))==null?void 0:Ee.value)==null?void 0:Re.trim())||"",youtube:y||""},h=!!((Fe=e.querySelector("#adminPublished"))!=null&&Fe.checked),v=(lt=(ot=e.querySelector("#adminCoverFile"))==null?void 0:ot.files)==null?void 0:lt[0],$=(dt=(ct=e.querySelector("#adminMediaFile"))==null?void 0:ct.files)==null?void 0:dt[0];if(!d){g("Title required");return}if(m==="video"&&$)try{const J=await Zd($),E=Xd({duration:J,size:$.size,type:$.type});if(E){g(E),o&&(o.textContent=E);return}}catch{const J="Could not verify video duration. Upload canceled.";g(J),o&&(o.textContent=J);return}c&&(c.disabled=!0),o&&(o.textContent="Saving… (large files may take a moment on iPhone)");try{let J=f,E=b;v&&(J=await Va(v)),$&&(E=await Va($)),m==="picture"&&!J&&E&&(J=E);const pe=$o({type:m,title:d,artist:p,coverRef:J,mediaRef:E,youtube:y,streamingLinks:m==="song"||m==="album"?w:{},published:h,embed:Ha(y)});if(pe!=null&&pe.error){g(pe.error==="forbidden"?"Admin required":"Could not save"),o&&(o.textContent=""),c&&(c.disabled=!1);return}y&&pe.id&&Sn(pe.id,{embed:Ha(y)}),g(h?"Published to catalog":"Saved as draft"),O("#/admin")}catch(J){console.error(J),g("Save failed — file may be too large for this browser"),o&&(o.textContent=String((J==null?void 0:J.message)||J)),c&&(c.disabled=!1)}}),e.querySelectorAll(".admin-cat-pub").forEach(l=>{l.addEventListener("click",()=>{xo(l.dataset.id,l.dataset.on==="1"),g(l.dataset.on==="1"?"Published":"Unpublished"),O("#/admin")})}),e.querySelectorAll(".admin-cat-del").forEach(l=>{l.addEventListener("click",()=>{confirm("Delete this catalog item?")&&(Eo(l.dataset.id),g("Deleted"),O("#/admin"))})})}function Et(){O("#/posts")}function pu(){bs();const e=wr(8);return e.length?`<section class="card hot-strip" id="hotStrip">
    <div class="row wrap hot-strip-head">
      <h3 class="hot-strip-title">🔥 Hot / Trending</h3>
      <span class="chip">TEST MODE</span>
      <span class="muted hot-strip-note">likes + comments + shares · house + community</span>
    </div>
    <div class="hot-rail" role="list">${e.map((s,i)=>{const a=i+1,n=s.image?`<img class="hot-thumb" src="${r(s.image)}" alt="" loading="lazy" />`:`<div class="hot-thumb hot-thumb-empty">${r((s.username||"?")[0].toUpperCase())}</div>`,l=s.mediaType==="video"?'<span class="chip">video</span>':s.image?'<span class="chip">pic</span>':'<span class="chip">text</span>',o=s.house?'<span class="chip">house</span>':'<span class="chip">community</span>';return`<a class="hot-card" href="#/posts?focus=${r(s.postId||s.id)}" data-hot-id="${r(s.postId||s.id)}">
        <span class="hot-rank">#${a}</span>
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
    </section>`}function mu(e){var v,$,k,x,L;const{posts:t,likes:s,comments:i,user:a,postShares:n}=M(),l=((v=e==null?void 0:e.query)==null?void 0:v.tab)==="following"?"following":"discover",o=(($=e==null?void 0:e.query)==null?void 0:$.focus)||"",c=new Set((a==null?void 0:a.following)||[]),d=l==="following"&&a?t.filter(D=>c.has(D.userId)||D.userId===a.id):t,p=oo.map(D=>`<button type="button" class="chip preset-img" data-src="${r(D.src)}" title="${r(D.label)}">${r(D.label)}</button>`).join(""),m=((k=e==null?void 0:e.query)==null?void 0:k.compose)==="1"||((x=e==null?void 0:e.query)==null?void 0:x.type),f=["text","picture","short","video"].includes((L=e==null?void 0:e.query)==null?void 0:L.type)?e.query.type:"",b=a?`
    <div class="card post-create" id="composer">
      <h3>Create</h3>
      <p class="muted" style="margin:0 0 10px">Pick what you’re posting — not separate tabs.</p>
      <div class="post-type-picker" role="group" aria-label="Post type">
        <button type="button" class="post-type-btn${f==="text"?" on":""}" data-type="text">
          <span class="post-type-ico" aria-hidden="true">Aa</span>
          <strong>Text</strong>
          <span class="muted">Words only</span>
        </button>
        <button type="button" class="post-type-btn${f==="picture"?" on":""}" data-type="picture">
          <span class="post-type-ico" aria-hidden="true">🖼</span>
          <strong>Picture</strong>
          <span class="muted">Photo / still</span>
        </button>
        <button type="button" class="post-type-btn${f==="short"?" on":""}" data-type="short">
          <span class="post-type-ico" aria-hidden="true">▶</span>
          <strong>Short</strong>
          <span class="muted">Vertical clip</span>
        </button>
        <button type="button" class="post-type-btn${f==="video"?" on":""}" data-type="video">
          <span class="post-type-ico" aria-hidden="true">🎬</span>
          <strong>Video</strong>
          <span class="muted">Full video</span>
        </button>
      </div>
      <div class="post-compose-body${f||m?"":" is-collapsed"}" id="postComposeBody" ${f?"":"hidden"}>
        <input type="hidden" id="postType" value="${r(f||"picture")}" />
        <p class="chip" id="postTypeChip">${r((f||"picture").charAt(0).toUpperCase()+(f||"picture").slice(1))} post</p>
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
       <a class="btn primary" href="#/profile">Sign in</a></div>`,y=`
    <div class="row wrap" style="margin-bottom:12px;gap:8px">
      <a class="btn ${l==="discover"?"primary":"ghost"}" href="#/posts">Discover</a>
      <a class="btn ${l==="following"?"primary":"ghost"}" href="#/posts?tab=following">Following</a>
      <a class="btn ghost" href="#/profile/dbs">@DatBoiSkeet</a>
    </div>`,w=d.map(D=>{const F=s[D.id]||[],T=a&&F.includes(a.id),ne=i[D.id]||[],$e=n&&n[D.id]||0,G=ai(D.id),ye=a&&c.has(D.userId),xe=o&&o===D.id?" post-focus":"",C=a&&D.userId!==a.id?`<button class="btn ghost follow-btn" data-uid="${r(D.userId)}" data-on="${ye?"1":"0"}">${ye?"Following":"Follow"}</button>`:"",P=D.userId==="dbs"?'<span class="chip">house</span>':'<span class="chip">community</span>',q=D.mediaType||(D.image?"picture":"text"),V=q==="short"?'<span class="chip">Short</span>':q==="video"?'<span class="chip">Video</span>':q==="picture"||q==="image"?'<span class="chip">Picture</span>':q==="text"?'<span class="chip">Text</span>':"",H=(()=>{const j=(D.mediaUrl||D.image||"").trim();if(!j)return"";if(q==="short"||q==="video"){const z=/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/i.exec(j);if(z)return`<div class="media media-video"><iframe src="https://www.youtube.com/embed/${z[1]}?rel=0" title="post video" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`;if(j.startsWith("http")||j.endsWith(".mp4")||j.endsWith(".webm"))return`<video class="media" src="${r(j)}" controls playsinline preload="metadata"></video>`}return`<img class="media" src="${r(j)}" alt="" loading="lazy" />`})();return`
      <article class="post${xe}" data-id="${r(D.id)}" id="post-${r(D.id)}">
        <div class="meta">
          <a class="avatar" href="#/profile/${r(D.userId)}">${r((D.username||"?")[0].toUpperCase())}</a>
          <div class="spacer">
            <div class="who"><a href="#/profile/${r(D.userId)}">${r(D.username)}</a> ${P}${V}</div>
            <div class="when">${N(D.at)}${G>=5?` · <span class="hot-inline">🔥 ${G}</span>`:""}</div>
          </div>
          ${C}
        </div>
        <p class="body-text">${r(D.text)}</p>
        ${H}
        <div class="post-actions">
          <button class="btn like-btn ${T?"primary":""}" data-id="${r(D.id)}">
            ♥ ${F.length}
          </button>
          <button class="btn ghost comment-toggle" data-id="${r(D.id)}">💬 ${ne.length}</button>
          <button class="btn ghost share-btn" data-id="${r(D.id)}" title="Share (demo count)">↗ ${$e}</button>
        </div>
        <div class="comments" id="c-${r(D.id)}" hidden>
          ${ne.map(j=>`<div class="comment"><b>${r(j.username)}</b> ${r(j.text)}</div>`).join("")||'<div class="muted">No comments yet</div>'}
          ${a?`<div class="row" style="margin-top:8px">
                  <input class="c-input" data-id="${r(D.id)}" placeholder="Add a comment…" style="flex:1;background:#0e0e14;border:1px solid var(--line);border-radius:12px;padding:8px 10px" />
                  <button class="btn primary c-send" data-id="${r(D.id)}">Send</button>
                </div>`:""}
        </div>
      </article>`}).join(""),h=l==="following"?'<div class="card muted">No posts from people you follow yet. Discover feed has official drops.</div>':'<div class="card muted">No posts yet.</div>';return I("Posts",pu()+b+y+(w||h),{lead:"Post Text, a Picture, Short, or Video · Shorts live here (not separate tabs) · Hot strip ranks engagement."})}function gu(e){var c;const t=e.querySelector(".post-focus");if(t)try{t.scrollIntoView({behavior:"smooth",block:"center"})}catch{}else typeof location<"u"&&(location.hash.includes("compose=1")||location.hash.includes("type="))&&setTimeout(()=>{var d;return(d=e.querySelector("#composer"))==null?void 0:d.scrollIntoView({behavior:"smooth",block:"start"})},50);const s=e.querySelector("#postComposeBody"),i=e.querySelector("#postType"),a=e.querySelector("#postTypeChip"),n=e.querySelector("#postMediaLabel"),l=e.querySelector("#postPresets");function o(d){const p=d||"picture";e.querySelectorAll(".post-type-btn").forEach(y=>y.classList.toggle("on",y.dataset.type===p)),i&&(i.value=p),a&&(a.textContent=p.charAt(0).toUpperCase()+p.slice(1)+" post");const m=e.querySelector("#postMediaField"),f=e.querySelector("#postMediaNote"),b=p==="text";m&&(m.hidden=b),f&&(f.hidden=b),n&&!b&&(n.textContent=p==="short"?"Short clip link (YouTube / demo path)":p==="video"?"Video link (YouTube / demo path)":"Picture link (demo path)"),l&&(l.hidden=p!=="picture"),s&&(s.hidden=!1,s.classList.remove("is-collapsed"))}e.querySelectorAll(".post-type-btn").forEach(d=>{d.addEventListener("click",()=>o(d.dataset.type))}),i!=null&&i.value&&o(i.value),e.querySelectorAll(".preset-img").forEach(d=>{d.addEventListener("click",()=>{const p=e.querySelector("#postImg");p&&(p.value=d.dataset.src||""),g("Picture selected")})}),(c=e.querySelector("#postSubmit"))==null||c.addEventListener("click",()=>{var d,p;try{const m=(d=e.querySelector("#postText"))==null?void 0:d.value,f=(i==null?void 0:i.value)||"picture",b=(((p=e.querySelector("#postImg"))==null?void 0:p.value)||"").trim();if(f==="text"){if(!(m!=null&&m.trim()))return g("Write some words for a Text post");ka({text:m.trim(),mediaType:"text"}),g("Text posted"),Et();return}if(!(m!=null&&m.trim())&&!b)return g("Add a caption or media");if((f==="short"||f==="video")&&!b)return g("Add a "+f+" link (TEST MODE)");ka({text:m||(f==="picture"?"Photo":f==="short"?"Short":"Video"),image:f==="picture"?b:"",mediaType:f,mediaUrl:b}),g(f.charAt(0).toUpperCase()+f.slice(1)+" posted"),Et()}catch(m){g(m.message||"Could not post")}}),e.querySelectorAll(".like-btn").forEach(d=>{d.addEventListener("click",()=>{if(ho(d.dataset.id).error)return g("Sign in to like");Et()})}),e.querySelectorAll(".comment-toggle").forEach(d=>{d.addEventListener("click",()=>{const p=e.querySelector("#c-"+d.dataset.id);p&&(p.hidden=!p.hidden)})}),e.querySelectorAll(".c-send").forEach(d=>{d.addEventListener("click",()=>{var y;const p=d.dataset.id,m=e.querySelector(`.c-input[data-id="${p}"]`),f=(y=m==null?void 0:m.value)==null?void 0:y.trim();if(!f)return;if(bo(p,f).error)return g("Sign in to comment");g("Comment added"),Et()})}),e.querySelectorAll(".share-btn").forEach(d=>{d.addEventListener("click",async()=>{var b;const p=d.dataset.id;if(Sr(p).error)return g("Could not share");const f=`${location.origin}${location.pathname}#/posts?focus=${encodeURIComponent(p)}`;try{(b=navigator.clipboard)!=null&&b.writeText&&await navigator.clipboard.writeText(f),g("Shared · link copied (TEST MODE)")}catch{g("Shared · count +1 (TEST MODE)")}Et()})}),e.querySelectorAll(".follow-btn").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.uid,m=d.dataset.on==="1";if((m?Vs(p):Us(p)).error)return g("Sign in to follow");g(m?"Unfollowed":"Following"),Et()})})}function Ka(e){O(e)}const Mi={apple:"Apple Music",spotify:"Spotify",youtubeMusic:"YouTube Music",youtube:"YouTube",tidal:"Tidal",amazon:"Amazon Music"};function Fr(e){if(!e||typeof e!="object")return{};const t={};for(const s of Object.keys(Mi)){const i=String(e[s]||"").trim();(i.startsWith("http://")||i.startsWith("https://"))&&(t[s]=i)}return t}function fu(e){const t=Fr(e),s=Object.keys(Mi).filter(i=>t[i]);return s.length?s.map(i=>`<a class="btn stream-plat stream-plat-${r(i)}" href="${r(t[i])}" target="_blank" rel="noopener">${r(Mi[i])}</a>`).join(""):'<span class="muted" style="font-size:12px">No platform links yet</span>'}function hu(e){try{const t=new URL(e);return t.protocol!=="https:"||t.hostname!=="music.apple.com"||!/^\/[a-z]{2}(?:-[a-z]{2})?\/(?:song|album)\//i.test(t.pathname)?"":"https://embed.music.apple.com"+t.pathname+t.search}catch{return""}}function mi(e){var l;const t=e.cover?`<img class="stream-cover" src="${r(e.cover)}" alt="${r(e.title)}" loading="lazy" referrerpolicy="no-referrer" />`:'<div class="stream-cover stream-cover-empty" aria-hidden="true">♪</div>',s=e.albumNote?`<div class="muted" style="font-size:11px">${r(e.albumNote)}</div>`:"",i=e.year?` · ${r(String(e.year))}`:"",a=hu((l=e.links)==null?void 0:l.apple),n=a?`<details class="apple-music-embed"><summary>▶ Play in PIKK · Apple Music</summary><iframe title="Apple Music player for ${r(e.title)}" src="${r(a)}" loading="lazy" allow="autoplay *; encrypted-media *; fullscreen *" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style="width:100%;height:175px;border:0;border-radius:12px"></iframe><small class="muted">Apple controls playback availability. Full listening may require Apple Music.</small></details>`:"";return`
    <article class="stream-release">
      ${t}
      <div class="stream-meta">
        <span class="chip">${r(e.type||"release")}</span>
        <strong>${r(e.title)}</strong>
        <div class="muted" style="font-size:12px">${r(e.artist||"DatBoiSkeet")}${i}</div>
        ${s}
        ${n}
        <div class="stream-plats">${fu(e.links)}</div>
      </div>
    </article>`}function Wa(e){return e==="inner"?"Inner Circle":e==="backstage"?"Backstage":e==="skeet+"?"Skeet+":"None"}function bu(e){return no.map(t=>{const s=t.tier==="backstage"||t.tier==="inner";return e&&$i(s?"backstage":"skeet")?`
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
      </article>`}).join("")}function Ya(e={}){var h;const t=["songs","albums","beats","playlists","upload"].includes((h=e.query)==null?void 0:h.view)?e.query.view:"",{user:s}=M(),i=wt(),a=$i("skeet"),n=new Set((s==null?void 0:s.purchasedTracks)||[]),l=is.map(v=>`
    <div class="cover-card" style="flex:0 0 160px">
      <span class="badge-cs">${r(v.status)}</span>
      <img src="${r(v.cover)}" alt="${r(v.title)}" style="width:160px;height:160px" />
      <div class="t">${r(v.title)}</div>
      <div class="muted" style="font-size:11px">${r(v.artist)}</div>
    </div>`).join(""),o=gn.map(v=>{const $=v.id==="skeet"?"skeet+":v.id==="inner"?"inner":v.id,k=i===$;return`
    <div class="card" style="margin:0">
      <h3>${r(v.name)}</h3>
      <div class="price" style="font-size:22px;font-weight:900">$${v.price}<span class="muted" style="font-size:13px">/mo</span></div>
      <p class="muted">${r(v.blurb)}</p>
      ${s?k?`<button type="button" class="btn ghost block mem-toggle" data-tier="${r(v.id)}" data-on="1">Active · tap to cancel (demo)</button>`:`<button type="button" class="btn primary block mem-toggle" data-tier="${r(v.id)}" data-on="0">Join · TEST MODE</button>`:'<a class="btn primary block" href="#/profile">Sign in to join</a>'}
    </div>`}).join(""),c=ya.filter(v=>n.has(v.id)),d=ya.map(v=>{const $=n.has(v.id);return`
      <div class="card" style="margin:0;display:flex;gap:12px;align-items:center">
        <img src="${r(v.cover)}" alt="" style="width:72px;height:72px;border-radius:10px;object-fit:cover;flex:0 0 72px" />
        <div class="spacer">
          <strong>${r(v.title)}</strong>
          <div class="muted" style="font-size:12px">${r(v.artist)} · ${r(v.status)}</div>
          <div style="font-weight:800;margin-top:4px">$${v.price.toFixed(2)}</div>
        </div>
        ${s?$?'<span class="chip">In My Music</span>':`<button type="button" class="btn primary buy-track" data-id="${r(v.id)}">Buy · demo</button>`:'<a class="btn" href="#/profile">Sign in</a>'}
      </div>`}).join(""),p=bt({publishedOnly:!0,types:["song","album"]}),m=p.map(v=>{const $=Fr(v.streamingLinks||{});return Object.keys($).length?{id:v.id,title:v.title,artist:v.artist,type:v.type||"song",cover:v.coverRef&&!String(v.coverRef).startsWith("idb:")?v.coverRef:"",links:$,fromAdmin:!0}:null}).filter(Boolean),f=[...ss,...m];let b="";if(t==="songs"||t==="albums"){const v=t==="albums",$=f.filter(k=>v?k.type==="album":k.type==="single"||k.type==="song");b=`<div class="card" id="music-focused-view">
      <h2>${v?"Albums":"Songs"}</h2>
      <p class="muted">Verified releases and available official listening links.</p>
      <div class="stream-grid">${$.map(mi).join("")||'<p class="muted">No releases listed in this category yet.</p>'}</div>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`}else if(t==="playlists")b=`<div class="card" id="music-focused-view">
      <h2>Playlists</h2>
      <p class="muted">Official YouTube playlists open on YouTube. No rehosted audio.</p>
      <div class="row wrap" style="gap:8px">
        ${Si.map(v=>`<a class="btn ghost" href="${r(v.youtube)}" target="_blank" rel="noopener">${r(v.title)}</a>`).join("")}
      </div>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`;else if(t==="beats"||t==="upload"){const v=t==="upload";b=`<div class="card" id="music-focused-view">
      <h2>${v?"Upload Music":"Beats"}</h2>
      <p class="muted">Not available yet · TEST MODE. ${v?"Creator music uploads require secure storage, ownership verification and publishing tools.":"The producer beat marketplace and licensing checkout are still in development."}</p>
      <a class="btn ghost" href="#/music">Music overview</a>
    </div>`}const y=p.length?`<div class="card catalog-admin-music">
        <h2>From Admin</h2>
        <p class="muted">Published songs &amp; albums added in Admin · TEST MODE (device-local).</p>
        <div class="cover-row">${p.map(v=>`
          <div class="cover-card catalog-item" data-id="${r(v.id)}" style="flex:0 0 160px">
            <span class="badge-cs">${r(v.type)}</span>
            <img data-idb-src="${r(v.coverRef||"")}" src="${r(v.coverRef&&!v.coverRef.startsWith("idb:")?v.coverRef:"")}" alt="${r(v.title)}" style="width:160px;height:160px;object-fit:cover;background:#111" />
            <div class="t">${r(v.title)}</div>
            <div class="muted" style="font-size:11px">${r(v.artist)}</div>
            ${v.mediaRef?`<audio class="catalog-audio" data-idb-src="${r(v.mediaRef)}" controls preload="none" style="width:100%;margin-top:6px"></audio>`:""}
          </div>`).join("")}</div>
      </div>`:"",w=`
    ${b}
    <div class="card">
      <h2>Upcoming Releases</h2>
      <p class="muted">Real DatBoiSkeet cover art · playback unlocks when released. No fake tracks.</p>
      <div class="cover-row">${l}</div>
    </div>
    ${y}


    <div class="card" id="youtube-mixes">
      <h2>YouTube Mixes · Channel</h2>
      <p class="muted">Dogs &amp; mixes stream from the <strong>original YouTube source</strong> (embeds / Play on YouTube). Not rehosted. Released catalog still uses Stream Everywhere below.</p>
      <div class="row wrap" style="gap:8px;margin:10px 0 14px">
        <a class="btn" href="${r(ce.youtube)}" target="_blank" rel="noopener">Official channel</a>
        <a class="btn ghost" href="${r(ce.youtubeHandle)}" target="_blank" rel="noopener">@DatBoiSkeet1</a>
        ${Si.map(v=>`<a class="btn ghost" href="${r(v.youtube)}" target="_blank" rel="noopener">${r(v.title)}</a>`).join("")}
      </div>
      <div class="yt-mix-grid">
        ${Oi.map(v=>`
          <article class="yt-mix-card">
            <div class="hero-video" style="margin:0 0 10px">
              <iframe src="${r(He(v.embed))}" title="${r(v.title)}" allowfullscreen loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <h3 style="margin:0 0 6px">${r(v.title)}</h3>
            <p class="muted" style="margin:0 0 10px;font-size:13px">${r(v.blurb||"")}</p>
            <a class="btn" href="${r(v.youtube)}" target="_blank" rel="noopener">Play on YouTube</a>
          </article>`).join("")}
      </div>
    </div>

    <div class="card" id="stream-everywhere">
      <h2>Featured · Stream Everywhere</h2>
      <p class="muted">Official DatBoiSkeet releases — Apple Music is the primary listening destination: use the Apple-hosted player on supported releases or open the song in Apple Music. Other verified platforms are optional. Full Apple Music playback may require a subscription. External streams are not rehosted in-app. Separate from Vault &amp; purchases.</p>
      <div class="stream-artist row wrap" style="gap:8px;margin:10px 0 14px">
        <span class="chip">Artist</span>
        <a class="btn stream-plat stream-plat-apple" href="${r(ce.apple)}" target="_blank" rel="noopener">Apple Music · Listen</a>
        <a class="btn ghost stream-plat stream-plat-spotify" href="${r(ce.spotify)}" target="_blank" rel="noopener">Spotify · Alternative</a>
        <a class="btn stream-plat stream-plat-youtubeMusic" href="${r(ce.youtubeMusic)}" target="_blank" rel="noopener">YouTube Music</a>
        <a class="btn stream-plat stream-plat-youtube" href="${r(ce.youtube)}" target="_blank" rel="noopener">YouTube</a>
      </div>
      <div class="stream-grid">
        ${ss.map(mi).join("")}
        ${m.map(mi).join("")}
      </div>
      <p class="muted" style="margin-top:12px;font-size:12px">Tidal / Amazon Music omitted until official links are verified. Admin can add more via streaming link fields.</p>
    </div>

    <div class="card">
      <h2>My Music</h2>
      <p class="muted">Purchases stay here even if membership ends.</p>
      ${c.length?`<div class="cover-row">${c.map(v=>`
            <div class="cover-card" style="flex:0 0 120px">
              <img src="${r(v.cover)}" alt="${r(v.title)}" style="width:120px;height:120px" />
              <div class="t">${r(v.title)}</div>
              <div class="muted" style="font-size:11px">Owned · Coming Soon</div>
            </div>`).join("")}</div>`:'<p class="muted">Nothing purchased yet. Buy a Coming Soon cover below (demo · no charge).</p>'}
    </div>

    <div class="card">
      <h2>Buy (demo)</h2>
      <p class="muted">TEST MODE — no charges. Marks the cover as owned in My Music. Audio not available until release.</p>
      <div style="display:flex;flex-direction:column;gap:10px">${d}</div>
    </div>

    <div class="card" id="vault">
      <h2>Vault ${a?'<span class="chip" style="border-color:#2a4a3a;color:#8dffb0">Unlocked · '+r(Wa(i))+"</span>":'<span class="chip">Locked</span>'}</h2>
      <p class="muted">Exclusive unreleased tracks &amp; previews for members. Nested under Music — not a bottom-nav tab.</p>

      <div class="vault-grid" style="margin:12px 0">
        ${bu(a)}
      </div>

      ${a?`<div class="vault-lock" style="border-style:solid;border-color:#2a4a3a;color:var(--tx)">
              ✅ Membership active: <strong>${r(Wa(i))}</strong>. Exclusive cards above are unlocked.
              Cancel anytime with the tier button below (demo). Purchased My Music items are kept.
            </div>`:`<div class="vault-lock">
              🔒 Vault locked. Sign in, then tap <strong>Join · TEST MODE</strong> on Skeet+ or Backstage below.
              Locked cards show title/cover only — no exclusive content until you join.
            </div>`}

      <h3 style="margin:16px 0 8px">Membership (TEST MODE)</h3>
      <div class="grid-2">${o}</div>
    </div>

  `;return I("Music & Vault",w,{lead:"Singles, albums, Coming Soon, and member Vault."})}function Qa(e){const t=e.querySelector("#youtube-mixes")||e;ni(t),e.querySelectorAll(".mem-toggle").forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const a=s.dataset.on==="1",n=zs(s.dataset.tier,!a);if(n!=null&&n.error)return g("Sign in required — open Profile first");g(a?"Membership cancelled (demo) · My Music purchases kept":`Joined ${s.dataset.tier} (TEST MODE) · Vault unlocked`),Ka("#/music"),setTimeout(()=>{var l;return(l=document.getElementById("vault"))==null?void 0:l.scrollIntoView({behavior:"smooth",block:"start"})},40)})}),e.querySelectorAll(".buy-track").forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const a=fo(s.dataset.id);if(a!=null&&a.error)return g("Sign in required");g("Added to My Music (demo · no charge)"),Ka("#/music")})}),e.querySelectorAll("[data-idb-src]").forEach(async s=>{const i=s.getAttribute("data-idb-src");if(!i)return;const a=await ri(i);a&&(s.tagName==="IMG"||s.tagName==="AUDIO"||s.tagName==="VIDEO")&&(s.src=a)})}function vu(){const t=`
    <div class="card merch-hero">
      <p class="kicker">Physical merch</p>
      <h2 style="margin:0 0 8px">Foreign X-Change</h2>
      <p class="muted">All orders, sizes, shipping, and payment happen on
        <a class="fx-link" href="https://foreignx-change.com" target="_blank" rel="noopener">foreignx-change.com</a>
        — not inside PIKK. Product links open the shop homepage until verified per-item URLs are provided.</p>
      <a class="btn primary" href="https://foreignx-change.com" target="_blank" rel="noopener">Visit Foreign X-Change</a>
      <p class="merch-note" style="margin-top:10px">Hats $30 · Tees $65 · Jackets $200 · prices exclude shipping</p>
    </div>
    <div class="merch-grid">${Is.map(s=>`
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
  `;return I("Merch",t,{lead:"Foreign X-Change showcase · 10 products · external checkout only"})}function yu(e){e.querySelectorAll(".shop-link").forEach(n=>{n.addEventListener("click",()=>{g("TEST MODE — opening Foreign X-Change")})});const t=e.querySelector("#merchLightbox"),s=t==null?void 0:t.querySelector("img"),i=n=>{!t||!s||(s.src=n,t.classList.add("show"),t.setAttribute("aria-hidden","false"))},a=()=>{t==null||t.classList.remove("show"),t==null||t.setAttribute("aria-hidden","true")};e.querySelectorAll(".img-wrap").forEach(n=>{const l=()=>i(n.dataset.zoom);n.addEventListener("click",l),n.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),l())})}),t==null||t.addEventListener("click",a)}function zt(e){O(e||"#/profile")}function Ja(e){return e.avatar?`<img class="avatar" src="${r(e.avatar)}" alt="" style="object-fit:cover" />`:`<div class="avatar">${r((e.username||"?")[0].toUpperCase())}</div>`}function ks(e,t){return t.length?`<div class="card"><h3>${r(e)}</h3>
    <ul class="list-plain">${t.map(s=>`<li><a href="#/profile/${r(s.id)}"><span>${r(s.username)}</span></a>
           <a class="chip" href="#/profile/${r(s.id)}">View</a></li>`).join("")}</ul></div>`:`<div class="card"><h3>${r(e)}</h3><p class="muted">None yet.</p></div>`}function wu(e){var p;const t=((p=e==null?void 0:e.parts)==null?void 0:p[1])||null,{user:s,posts:i}=M();if(t&&(!s||t!==s.id)||t&&t!==(s==null?void 0:s.id)){const m=vt(t);if(!m)return I("Profile",`<div class="card muted">User not found.</div>
         <a class="btn" href="#/profile">Back</a>`);const f=i.filter(v=>v.userId===m.id),b=s&&(s.following||[]).includes(m.id),y=Sa(m.id),w=ki(m.id),h=`
      <div class="card">
        <div class="profile-hero">
          ${Ja(m)}
          <div>
            <h2 style="margin:0">${r(m.username)}${m.verified?" ✓":""}</h2>
            <p class="muted" style="margin:4px 0 0">${r(m.bio||"")}</p>
            ${m.verified?'<span class="chip">Verified</span>':""}
          </div>
        </div>
        <div class="stats">
          <div><strong>${f.length}</strong><span>Posts</span></div>
          <div><strong>${(m.followers||[]).length}</strong><span>Followers</span></div>
          <div><strong>${(m.following||[]).length}</strong><span>Following</span></div>
        </div>
        <div class="row wrap">
          ${s?`<button class="btn ${b?"ghost":"primary"}" id="pubFollow" data-uid="${r(m.id)}" data-on="${b?"1":"0"}">${b?"Unfollow":"Follow"}</button>`:'<a class="btn primary" href="#/profile">Sign in to follow</a>'}
          <a class="btn ghost" href="#/posts">Posts feed</a>
          <a class="btn ghost" href="#/profile">My profile</a>
        </div>
      </div>
      <div class="card">
        <h3>Posts</h3>
        ${f.length?f.map(v=>`<div style="padding:8px 0;border-bottom:1px solid var(--line)">
                      <div class="muted" style="font-size:11px">${new Date(v.at).toLocaleString()}</div>
                      ${r(v.text)}
                      ${v.image?`<img src="${r(v.image)}" alt="" style="margin-top:8px;border-radius:12px;max-height:200px;object-fit:cover;width:100%" />`:""}
                    </div>`).join(""):'<p class="muted">No posts yet.</p>'}
      </div>
      ${ks("Followers",y)}
      ${ks("Following",w)}
    `;return I(m.username,h)}if(!s)return I("Profile",`
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
      </div>`,{lead:"Free PIKK fan profile · follow · posts · role apps · TEST MODE."});const n=i.filter(m=>m.userId===s.id),l=Sa(s.id),o=ki(s.id),c=s.memberships||{},d=`
    <div class="card">
      <div class="profile-hero">
        ${Ja(s)}
        <div>
          <h2 style="margin:0">${r(s.username)}</h2>
          <p class="muted" style="margin:4px 0 0">${r(s.bio)}</p>
          <span class="chip">TEST MODE · demo</span>
          ${c.skeetPlus||c.backstage||c.innerCircle?`<span class="chip">${c.innerCircle?"Inner Circle":c.backstage?"Backstage":"Skeet+"}</span>`:""}
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

    ${ks("Followers",l)}
    ${ks("Following",o)}

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
        <span class="chip">${Z()?"role=admin":"role=fan"}</span>
        <button class="btn ${Z()?"ghost":"primary"}" id="toggleAdmin">${Z()?"Revoke admin":"Enable Demo Admin"}</button>
        <a class="btn" href="#/admin">Open Admin</a>
      </div>
    </div>
  `;return I("Profile",d)}function Su(e){var t,s,i,a,n,l;(t=e.querySelector("#signinBtn"))==null||t.addEventListener("click",()=>{var c;const o=(c=e.querySelector("#signinName"))==null?void 0:c.value;It(o),g("Signed in"),zt("#/profile")}),(s=e.querySelector("#signinName"))==null||s.addEventListener("keydown",o=>{var c;o.key==="Enter"&&((c=e.querySelector("#signinBtn"))==null||c.click())}),(i=e.querySelector("#signoutBtn"))==null||i.addEventListener("click",()=>{mo(),g("Signed out"),zt("#/profile")}),(a=e.querySelector("#saveProfile"))==null||a.addEventListener("click",()=>{var c,d;if(go({bio:(c=e.querySelector("#editBio"))==null?void 0:c.value,avatar:(d=e.querySelector("#editAvatar"))==null?void 0:d.value}).error)return g("Sign in required");g("Profile saved"),zt("#/profile")}),(n=e.querySelector("#pubFollow"))==null||n.addEventListener("click",o=>{const c=o.currentTarget,d=c.dataset.uid,p=c.dataset.on==="1";if((p?Vs(d):Us(d)).error)return g("Sign in to follow");g(p?"Unfollowed":"Following"),zt("#/profile/"+d)}),(l=e.querySelector("#toggleAdmin"))==null||l.addEventListener("click",()=>{const o=!Z();if(ds(o).error)return g("Sign in required");g(o?"Demo Admin enabled":"Admin revoked"),zt("#/profile")})}function Xa(){O("#/clippers")}const ku={pending:"Pending",approved:"Approved",rejected:"Rejected",waitlisted:"Waitlisted"};function $u(){const{clipperApps:e,user:t}=M(),s=`
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
      ${e.length?e.map(i=>`
            <div class="card" style="margin:0 0 10px;background:#12121a" data-app="${r(i.id)}">
              <div class="row wrap">
                <strong>${r(i.name)}</strong>
                <span class="chip">${r(ku[i.status]||i.status)}</span>
                <span class="muted spacer" style="text-align:right">${N(i.at)}</span>
              </div>
              <p class="muted" style="margin:6px 0;font-size:12px">${r(i.email)} · ${r(i.niche||"—")}</p>
              <p style="font-size:12px;margin:0 0 8px">${r((i.samples||"").slice(0,120))}</p>
              <div class="row wrap admin-actions">
                <button class="btn primary clip-status" data-id="${r(i.id)}" data-status="approved">Approve</button>
                <button class="btn ghost clip-status" data-id="${r(i.id)}" data-status="waitlisted">Waitlist</button>
                <button class="btn ghost clip-status" data-id="${r(i.id)}" data-status="rejected">Reject</button>
              </div>
            </div>`).join(""):'<p class="muted">None yet.</p>'}
      <p class="muted" style="font-size:12px;margin-top:8px">Demo admin: approve / reject here or on <a href="#/admin" style="color:var(--sk)">Admin</a>. Signed in as ${r((t==null?void 0:t.username)||"guest")}.</p>
    </div>
  `;return I("Clippers",s,{lead:"Apply → admin approve → paid campaigns & tracked links."})}function xu(e){var t;(t=e.querySelector("#cSubmit"))==null||t.addEventListener("click",()=>{var a,n,l,o,c,d,p,m,f,b,y,w,h,v,$,k,x,L,D;const s=(n=(a=e.querySelector("#cName"))==null?void 0:a.value)==null?void 0:n.trim(),i=(o=(l=e.querySelector("#cEmail"))==null?void 0:l.value)==null?void 0:o.trim();if(!s||!i)return g("Name and email required");vo({name:s,email:i,age:(c=e.querySelector("#cAge"))==null?void 0:c.value,tiktok:(d=e.querySelector("#cTiktok"))==null?void 0:d.value,instagram:(p=e.querySelector("#cIg"))==null?void 0:p.value,youtube:(m=e.querySelector("#cYt"))==null?void 0:m.value,x:(f=e.querySelector("#cX"))==null?void 0:f.value,facebook:(b=e.querySelector("#cFb"))==null?void 0:b.value,followers:(y=e.querySelector("#cFollowers"))==null?void 0:y.value,views:(w=e.querySelector("#cViews"))==null?void 0:w.value,avgViews:(h=e.querySelector("#cAvgViews"))==null?void 0:h.value,engagement:(v=e.querySelector("#cEngage"))==null?void 0:v.value,frequency:($=e.querySelector("#cFreq"))==null?void 0:$.value,niche:(k=e.querySelector("#cNiche"))==null?void 0:k.value,samples:(x=e.querySelector("#cSamples"))==null?void 0:x.value,analyticsNotes:(L=e.querySelector("#cAnalytics"))==null?void 0:L.value,applicantUserId:((D=M().user)==null?void 0:D.id)||null}),g("Application saved for admin review"),Xa()}),e.querySelectorAll(".clip-status").forEach(s=>{s.addEventListener("click",()=>{vn(s.dataset.id,s.dataset.status),g("Marked "+s.dataset.status),Xa()})})}const Eu={rose:"🌹","big-love":"💖","turn-up":"🔥","cash-rain":"💵","bottle-pop":"🍾","money-gun":"💸","diamond-drip":"💎","foreign-whip":"🚗",helicopter:"🚁","private-jet":"✈️","dbs-crown":"👑","dbs-universe":"🌌","battle-win":"✅","battle-crown":"👑","battle-vs":"⚔️","battle-fire":"🔥"},Au={rose:"/gifts/rose.svg","big-love":"/gifts/big-love.svg","turn-up":"/gifts/turn-up.svg","cash-rain":"/gifts/cash-rain.svg","bottle-pop":"/gifts/bottle-pop.svg","money-gun":"/gifts/money-gun.svg","diamond-drip":"/gifts/diamond-drip.svg","foreign-whip":"/gifts/foreign-whip.svg",helicopter:"/gifts/helicopter.svg","private-jet":"/gifts/private-jet.svg","dbs-crown":"/gifts/dbs-crown.svg","dbs-universe":"/gifts/dbs-universe.svg","battle-win":"/gifts/battle-win.svg","battle-crown":"/gifts/battle-crown.svg","battle-vs":"/gifts/battle-vs.svg","battle-fire":"/gifts/battle-fire.svg"},Za="gift-sticker";function $s(e){return String(e??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function Tu(e,t){return t&&typeof t=="object"&&t.className?t.className:`${Za} ${Za}--${e}`}function da(e,t={}){const s=String(e||""),i=Tu(s||"unknown",t),a=Eu[s]||"🎁",n=Au[s]||null;return n?{src:n,className:i,emoji:a,html:`<img class="${$s(i)}" src="${$s(n)}" alt="" width="48" height="48" decoding="async" draggable="false" data-gift-slug="${$s(s)}" />`}:{src:null,className:i,emoji:a,html:`<span class="${$s(i)} gift-sticker--emoji" aria-hidden="true">${a}</span>`}}function tt(e,t){return da(e,t&&typeof t=="object"&&typeof t!="function"?t:{}).html}function Gr(){const e=(Ye().query||{}).tab;return e==="live"||e==="channels"?"channels":e==="following"||e==="categories"?e:"channels"}function me(){const e=Gr();O(e==="channels"?"#/live":`#/live?tab=${e}`)}function fe(e){return"$"+Number(e||0).toFixed(2)}function qe(e){const t=Number(e)||0;return t>=1e3?(t/1e3).toFixed(t>=1e4?0:1).replace(/\.0$/,"")+"K":String(t)}function Du(e="live"){return`
    <nav class="live-cat-chips" aria-label="Live categories">
      ${[{id:"live",href:"#/live?tab=channels",label:"Live"},{id:"openmic",href:"#/openmic",label:"Open Mic / Talent Discovery (24/7)"},{id:"spotlight",href:"#/spotlight",label:"Spotlight (24/7)"}].map(i=>{const a=i.id===e?" on":"",n=i.id===e?' aria-current="page"':"";return`<a class="live-cat-chip${a}" href="${i.href}"${n}>${r(i.label)}</a>`}).join("")}
    </nav>`}function Cu(e="channels"){return`
    <nav class="live-disc-tabs" aria-label="Live discovery">
      ${[{id:"following",href:"#/live?tab=following",label:"Following"},{id:"clips",href:"#/shorts",label:"Clips"},{id:"channels",href:"#/live?tab=channels",label:"Channels"},{id:"categories",href:"#/live?tab=categories",label:"Categories"}].map(i=>{const a=i.id===e?" on":"",n=i.id===e?' aria-current="page"':"";return`<a class="live-disc-tab${a}" href="${i.href}" data-tab="${i.id}"${n}>${r(i.label)}</a>`}).join("")}
    </nav>`}function zr(e={}){const t=Vn(),s=t.chipLabel||"House · Music Video",i=t.embed?He(t.embed,"rel=0"):"",a=e.title||"House catalog · while stages are quiet";return`
    <div class="card sp-house live-house-teaser" style="margin-top:12px">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">${r(s)}</div>
        <span class="chip">TEST MODE</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:12px">${r(a)} · original YouTube · not a fake live act</p>
      ${i?`<div class="sp-house-embed hero-video" style="margin-top:10px">
               <iframe src="${r(i)}" title="${r(t.title)}" allowfullscreen loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>`:""}
      <div class="sp-now-title" style="margin-top:10px">${r(t.title)}</div>
      <div class="muted" style="font-size:12px">${r(t.artist||"DatBoiSkeet")} · ${r(t.note||"")}</div>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <a class="btn ghost" href="#/spotlight">24/7 Spotlight</a>
        <a class="btn ghost" href="#/openmic">Open Mic</a>
        ${t.youtube?`<a class="btn ghost" href="${r(t.youtube)}" target="_blank" rel="noopener">YouTube</a>`:""}
      </div>
    </div>`}function Mu(e){const t=e?ki(e.id):[],s=new Set(t.map(l=>l.id)),i=Ft().filter(l=>s.has(l.hostId)),a=t.length?t.slice(0,12).map(l=>`<a class="chip" href="#/profile">${r("@"+(l.username||l.id))}</a>`).join(""):'<span class="muted">Nobody followed yet · DEMO</span>';let n;if(!e)n=`
      <p class="muted">Sign in to see lives from accounts you follow.</p>
      <a class="btn primary" href="#/profile">Demo profile</a>
      <p class="chip" style="margin-top:10px">TEST MODE · Following is local demo graph</p>`;else if(!i.length)n=`
      <p class="muted" style="margin:0 0 8px">
        None of the people you follow are live right now (demo filter on seeded Hot lives).
      </p>
      <div class="row wrap" style="gap:6px;margin-bottom:10px">${a}</div>
      <a class="btn ghost" href="#/live?tab=channels">Browse Live channels</a>
      <p class="chip" style="margin-top:10px">TEST MODE · not a scrape</p>
      ${zr({title:"Meanwhile — DatBoiSkeet house catalog on 24/7 stages"})}`;else{const l=i.map(o=>`
        <article class="hot-live-card${o.house?" is-house":""}" data-live-id="${r(o.id)}">
          <div class="live-hoodie" aria-label="Live · ${r(qe(o.viewers))} watching">
            <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
            <span class="live-hoodie-viewers">${r(qe(o.viewers))}</span>
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
      <div class="row wrap" style="gap:6px;margin-bottom:10px">${a}</div>
      <div class="hot-lives-track">${l}</div>`}return`
    <div class="card live-disc-panel" id="liveTabFollowing" data-panel="following">
      <h3 style="margin:0 0 8px">Following</h3>
      ${n}
    </div>`}const Lu=[["Just Chatting","Conversations, Q&A and hanging out","💬"],["Gaming","Gameplay, tournaments and community games","🎮"],["Music","Artists, DJs, producers and listening sessions","🎵"],["IRL","Everyday life, travel and outdoor streams","🌎"],["Sports","Sports talk and watch-along discussions","🏀"],["Creative","Art, design, production and making things","🎨"],["Podcasts & Talk Shows","Interviews, panels and conversations","🎙️"],["Food & Cooking","Recipes, kitchens and food reviews","🍳"],["Fitness","Training, wellness and movement","💪"],["Beauty & Fashion","Style, hair, makeup and fashion","✨"],["Business & Money Talk","Entrepreneurs, careers and money discussions","💼"],["Dating & Connections","Opt-in conversations and dating live rooms","❤️"],["Education","Tutorials, learning and study sessions","📚"],["News & Commentary","Current events and opinions","📰"],["Comedy & Entertainment","Comedy, variety and entertainment","🎭"],["Comedy & Roast Battles","1v1, tag team, open mic and tournaments","🎤"]];function Pu(){return`
    <div class="card live-disc-panel" id="liveTabCategories" data-panel="categories">
      <h3 style="margin:0 0 8px">Browse Live Categories</h3>
      <p class="muted" style="margin:0 0 12px;font-size:12px">Explore topics like Twitch and Kick. Select a topic to filter available PIKK live channels. Categories without an active stream show an empty result; no invented viewers.</p>
      <div class="live-cat-cards">${Lu.map(([t,s,i])=>`
    <a class="live-cat-card" href="${t==="Comedy & Roast Battles"?"#/roast-arena":`#/live?tab=channels&category=${encodeURIComponent(t)}`}" aria-label="${r(t)}: browse channels">
      <span style="font-size:26px" aria-hidden="true">${i}</span>
      <strong>${r(t)}</strong>
      <p class="muted" style="margin:6px 0 0;font-size:12px">${r(s)}</p>
      <span class="chip">Browse channels</span>
    </a>`).join("")}</div>
      <h3 style="margin:18px 0 8px">PIKK 24/7 Stages</h3>
      <div class="live-cat-cards">
        <a class="live-cat-card" href="#/openmic"><strong>Open Mic / Talent Discovery</strong><span class="chip">24/7 stage</span><p class="muted">Join the performance queue</p></a>
        <a class="live-cat-card" href="#/spotlight"><strong>Spotlight Live</strong><span class="chip">24/7 stage</span><p class="muted">Keep Going votes and creator performances</p></a>
        <a class="live-cat-card" href="#/shorts"><strong>Clips / Shorts</strong><span class="chip">Watch</span><p class="muted">Watch short videos</p></a>
      </div>
    </div>`}function Iu(e){return e!=null&&e.spikedAt?Date.now()-Number(e.spikedAt)<15*60*1e3:!1}function _u(e=""){const t=Ft();return`
    <div class="card hot-lives-rail" id="hotLivesRail">
      <div class="row wrap" style="justify-content:space-between;align-items:baseline;gap:8px">
        <h3 style="margin:0">Hot lives · Top streamers</h3>
        <span class="chip">score · viewers + engagement</span>
      </div>
      <p class="muted" style="margin:6px 0 10px;font-size:12px">TEST MODE · seeded demo · not third-party scrape · house + community</p>
      <div class="hot-lives-track">
        ${(e?t.filter(a=>String(a.category||"").toLowerCase()===e.toLowerCase()):t).map(a=>{const n=Iu(a);return`
      <article class="hot-live-card${n?" is-hot":""}${a.house?" is-house":""}" data-live-id="${r(a.id)}">
        <div class="live-hoodie" aria-label="Live · ${r(qe(a.viewers))} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" title="${r(qe(a.viewers))} watching">${r(qe(a.viewers))}</span>
        </div>
        <div class="hot-live-body">
          <div class="hot-live-host">@${r(a.hostName)}</div>
          <div class="hot-live-title">${r(a.title)}</div>
          <div class="hot-live-chips">
            <span class="chip">${r(qe(a.viewers))} watching</span>
            ${a.house?'<span class="chip chip-ok">House</span>':""}
            ${n?'<span class="chip live-chip"><span class="dot" aria-hidden="true"></span> HOT</span>':""}
          </div>
          <div class="hot-live-actions row wrap">
            <button type="button" class="btn ghost hot-live-watch" data-id="${r(a.id)}" data-host="${r(a.hostName)}">Watch demo</button>
            <button type="button" class="btn hot-live-spike" data-id="${r(a.id)}">Simulate spike</button>
          </div>
        </div>
      </article>`}).join("")||'<p class="muted">No matching live channels in this category yet.</p>'}
      </div>
    </div>`}function qu(e){const t=String(e||"queued");return t==="playing"?'<span class="chip live-chip">Playing</span>':t==="played"?'<span class="chip chip-ok">Played</span>':t==="skipped"?'<span class="chip">Skipped</span>':'<span class="chip">Queued</span>'}function Se(e){const t=Number(e)||0;return t>=1e3?(t/1e3).toFixed(t%1e3===0?0:1).replace(/\.0$/,"")+"K":String(t)}function Bu(e,t){if(!e||e.endedAt)return"";const s=Ws(),i=Oo(),a=No(e.id).slice(0,12),n=i.map(d=>{const p=d.coins>=qo,m=s>=d.coins;return`
      <button type="button" class="lg-gift" data-slug="${r(d.slug)}" data-coins="${d.coins}" data-confirm="${p?"1":"0"}" title="${r(d.animation)}">
        <span class="lg-gift-emoji">${tt(d.slug)}</span>
        <span class="lg-gift-name">${r(d.name)}</span>
        <span class="lg-gift-price">${r(Se(d.coins))} · ${fe(d.usd)}</span>
        ${m?'<span class="chip">Ready</span>':'<span class="chip">Need demo coins</span>'}
        ${p?'<span class="chip lg-confirm-chip">Confirm</span>':""}
      </button>`}).join(""),l=Hs.map(d=>`<button type="button" class="btn ghost lg-buy" data-coins="${d.coins}">${r(Se(d.coins))} · ${fe(d.usd)}</button>`).join(""),o=a.length?a.map(d=>`<li class="lg-hist-row">
            <span class="lg-hist-emoji">${tt(d.giftSlug)}</span>
            <span><strong>${r(d.giftName)}</strong> · @${r(d.fromUser)} · ${r(Se(d.coins))} coins</span>
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
    </div>`}function Ou(e,t){var c;if(!e||e.endedAt)return"";const s=!!(t&&e.hostId===t.id),i=Number(((c=M().wallet)==null?void 0:c.balance)||0),a=Ni(e.id),n=$n.map(d=>{const p=d.save>0?`<span class="chip chip-ok lsr-save">Save $${d.save}</span>`:"";return`
      <button type="button" class="lsr-pack" data-pack="${d.pack}" data-price="${d.price}" aria-pressed="false">
        <strong>${r(d.label)}</strong>
        <span class="lsr-pack-price">${fe(d.price)}</span>
        ${p}
      </button>`}).join(""),l=a.length?a.map(d=>{const p=s?`<div class="row wrap lsr-host-acts" style="gap:6px">
                 ${d.status==="queued"||d.status==="playing"?`<button type="button" class="btn primary lsr-play" data-rid="${r(d.requestId)}" data-si="${d.songIndex}">${d.status==="playing"?"Mark played":"Play"}</button>
                        <button type="button" class="btn ghost lsr-skip" data-rid="${r(d.requestId)}" data-si="${d.songIndex}">Skip</button>`:""}
               </div>`:"";return`
          <li class="lsr-queue-row" data-status="${r(d.status)}">
            <div class="lsr-queue-main">
              <strong>${r(d.title)}</strong>
              <span class="muted" style="font-size:12px">@${r(d.username)} · ${r(String(d.pack))}‑pack</span>
            </div>
            ${qu(d.status)}
            ${p}
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
          <span class="chip">Wallet ${fe(i)}</span>
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
    </div>`}function Nu(e){var o;const t=e.endedAt?Math.max(0,Math.floor((e.endedAt-e.startedAt)/1e3)):Math.max(0,Math.floor((Date.now()-e.startedAt)/1e3)),s=String(Math.floor(t/60)).padStart(2,"0"),i=String(t%60).padStart(2,"0"),a=qe(e.viewers||0),n=e.endedAt?`<div class="live-stage-meta"><span class="chip">Ended · ${N(e.endedAt)}</span></div>`:`<div class="live-hoodie live-hoodie--stage" aria-label="Live · ${r(a)} watching">
          <span class="live-hoodie-pill"><span class="dot" aria-hidden="true"></span> LIVE</span>
          <span class="live-hoodie-viewers" id="liveViewers" title="${r(a)} watching">${r(a)}</span>
        </div>
        <div class="live-stage-meta">
          <span class="chip">${s}:${i}</span>
        </div>`,l=(e.chat||[]).slice(-40).map(c=>`
      <div class="live-chat-row ${c.support?"support":""}">
        <strong>${r(c.username)}</strong>
        <span>${r(c.text)}</span>
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
        <span class="chip">Coins ${Se(Ws())}</span>
        <span class="chip">Wallet ${fe(((o=M().wallet)==null?void 0:o.balance)||0)}</span>
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
  `}function ju(e){const t=Number(e==null?void 0:e.targetAmount)||0;return t<=0?0:Math.min(100,Math.round((Number(e.raised)||0)/t*100))}function Ru(e){const t=Math.max(0,Number(e)-Date.now());if(t<=0)return"Ended · 24h window over";const s=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4);return s>=1?`Resets in ${s}h ${i}m`:`Resets in ${i}m`}function Fu(e,t){if(!e||e.endedAt)return"";const s=e.hostId,i=Go(s),a=!!(t&&s&&t.id===s),n=Ws();if(!i)return a?`
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
      </div>`;const l=ju(i),o=!!(i.completedAt||l>=100),c=l>=100?"Complete":l>=70?"Close":l>=30?"On the way":"Far",d=[50,100,250].map(m=>`<button type="button" class="btn ghost live-goal-donate" data-goal-id="${r(i.id)}" data-coins="${m}" title="≈ $${(m/50).toFixed(0)}">Donate ${m} coins</button>`).join(""),p=a?`<details class="live-goal-edit" style="margin-top:10px">
        <summary class="muted" style="cursor:pointer;font-size:12px">Edit goal (new 24h window)</summary>
        <div class="field" style="margin-top:8px"><label>Goal name</label>
          <input id="liveGoalName" maxlength="80" value="${r(i.name)}" /></div>
        <div class="field"><label>Goal amount ($)</label>
          <input id="liveGoalAmt" type="number" min="1" step="1" value="${r(String(i.targetAmount))}" /></div>
        <button type="button" class="btn" id="liveGoalSave">Save · reset 24h</button>
      </details>`:"";return`
    <div class="card live-daily-goal" id="liveDailyGoal">
      <div class="live-goal-head">
        <h3 style="margin:0">Daily goal · ${r(i.name)}</h3>
        <span class="chip${o?" chip-ok":""}">${o?"Goal met":r(c)}</span>
      </div>
      <p class="muted" style="margin:4px 0 8px;font-size:12px">${r(Ru(i.endsAt))} · @${r(i.hostName||e.hostName)} · TEST MODE</p>
      <div class="live-goal-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}" aria-label="Goal progress">
        <div class="live-goal-fill" style="width:${l}%"></div>
      </div>
      <p class="live-goal-amounts" style="margin:8px 0 10px">
        <strong>${fe(i.raised)}</strong> / ${fe(i.targetAmount)}
        <span class="muted"> · ${l}%</span>
        <span class="chip" style="margin-left:8px">Coins ${r(Se(n))}</span>
      </p>
      <div class="row wrap live-goal-donate-row" style="gap:8px">
        ${d}
      </div>
      <form class="live-goal-custom-form" data-goal-id="${r(i.id)}" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:end">
        <label style="flex:1;min-width:125px">Custom coins<input type="number" class="live-goal-custom-coins" inputmode="numeric" min="1" max="1000000" step="1" required placeholder="Enter coins" style="width:100%" /></label>
        <button class="btn primary" type="submit">Donate custom</button>
      </form>
      <p class="muted" style="margin:8px 0 0;font-size:11px">50 / 100 / 250 coins ≈ $1 / $2 / $5 · 100 coins = $2 · TEST MODE</p>
      ${p}
    </div>`}function Gu(e){return e?`
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
      </div>`}function zu(e){return e.length?`
    <div class="card">
      <h3>Recent streams (this device)</h3>
      <ul class="list-plain">
        ${e.slice(0,8).map(t=>`<li>
              <span><strong>${r(t.title)}</strong><br/><span class="muted" style="font-size:12px">@${r(t.hostName)} · ${N(t.endedAt||t.startedAt)} · tips ${fe(t.tipsTotal)}</span></span>
              <span class="chip">${t.endedAt?"Ended":"Live"}</span>
            </li>`).join("")}
      </ul>
    </div>`:""}function Uu(e){if(!e||e.endedAt)return"";const t=jo(10),s=t.length?t.map((o,c)=>{const d=tt(o.lastSlug||"rose",{className:"gift-sticker gift-sticker--xs"});return`<div class="live-obar-cell" title="${r(o.username)} · ${fe(o.usd)} today">
            <span class="live-obar-rank">${c+1}</span>
            ${d}
            <span class="live-obar-name">${r(o.username)}</span>
          </div>`}).join(""):'<div class="live-obar-empty muted">No gifters yet today</div>',i=Xi(10),a=i.length?i.map((o,c)=>{const d=tt("battle-win",{className:"gift-sticker gift-sticker--xs"});return`<div class="live-obar-cell" title="${r(o.username)} · rest of day">
            <span class="live-obar-rank">${c+1}</span>
            ${d}
            <span class="live-obar-name">${r(o.username)}</span>
          </div>`}).join(""):'<div class="live-obar-empty muted">No winners yet today</div>',n=Ni(e.id).find(o=>o.status==="playing");let l="";if(n){const o=n.title||"Song";l=`
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
        <div class="live-obar-track">${a}</div>
        <span class="chip live-obar-chip">1–10 · day</span>
      </div>
      ${l}
    </div>`}function Vu(e){const t=ml();if(!t)return"";const s=tt(t.giftSlug||"rose",{className:"gift-sticker"}),a=e&&e.id===t.fromUserId?`<p class="muted" style="margin:8px 0 0;font-size:12px">You triggered this · others can Challenge you · TEST MODE</p>
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
        ${a}
        <p class="chip" style="margin-top:8px">TEST MODE · broadcast demo · invitations respect prefs</p>
      </div>
    </div>`}function Hu(e){var a,n,l,o,c,d,p,m;Ji();const t=Yi();if(!t||!e)return"";if(t.status==="active"||t.status==="ended"){const f=Math.max(0,Number(t.scoreA)||0),b=Math.max(0,Number(t.scoreB)||0),y=f+b,w=t.status==="active"?Math.max(0,Math.ceil((Number(t.endsAt)-Date.now())/1e3)):0,h=t.winnerName?"@"+r(t.winnerName):"Tie";return`
      <section class="card live-battle-scoreboard" aria-label="Live Gift Battle scoreboard">
        <div class="row wrap" style="justify-content:space-between;align-items:center">
          <strong>⚔️ PIKK Live Battle</strong>
          <span class="chip" id="liveBattleTimer" data-ends-at="${Number(t.endsAt)||0}">${t.status==="active"?w+"s left":"Finished"}</span>
        </div>
        <div class="row" style="justify-content:space-between;gap:12px;margin:12px 0">
          <div><strong>@${r(((a=t.challenger)==null?void 0:a.name)||"Challenger")}</strong><div>${qe(f)} demo points</div></div>
          <strong>VS</strong>
          <div style="text-align:right"><strong>@${r(((n=t.opponent)==null?void 0:n.name)||"Opponent")}</strong><div>${qe(b)} demo points</div></div>
        </div>
        <div class="live-battle-score-track" role="progressbar" aria-label="Challenger share of battle points" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${y?Math.round(f/y*100):50}" style="height:10px;background:var(--blue);border-radius:10px;overflow:hidden">
          <div style="width:${y?Math.round(f/y*100):50}%;height:100%;background:var(--acc)"></div>
        </div>
        ${t.status==="ended"?`<p class="live-battle-winner" style="font-weight:800;margin-top:10px">🏆 ${h} · Battle complete</p>`:'<p class="muted" style="margin-top:10px">Scores update with demo gifts · no real money</p>'}
        <a href="#/giftbattles" class="btn ghost" style="margin-top:8px">Battle details</a>
      </section>`}if(t.status!=="pending")return"";const s=((l=t.opponent)==null?void 0:l.id)===e.id,i=((o=t.challenger)==null?void 0:o.id)===e.id;return!s&&!i?`
      <div class="card live-gb-pending-note">
        <span class="chip">Pending battle</span>
        <span class="muted" style="margin-left:8px;font-size:12px">${r((c=t.challenger)==null?void 0:c.name)} vs ${r((d=t.opponent)==null?void 0:d.name)} · waiting</span>
      </div>`:s?`
      <div class="card live-gb-pending" id="liveGbPending">
        <strong>@${r((p=t.challenger)==null?void 0:p.name)}</strong> challenged you to a Gift Battle
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
    </div>`}function Ku(){const e=Xi(10);return e.length?`
    <div class="card live-gb-day" id="liveGbDayWinners">
      <h3 style="margin:0 0 6px">Gift Battle winners today</h3>
      <p class="muted" style="margin:0 0 8px;font-size:12px">Up to 10 · until end of day · TEST MODE</p>
      <ul class="live-gb-day-list">${e.map((s,i)=>`<li class="live-gb-day-row"><span class="live-gb-day-sticker">${tt("battle-win",{className:"gift-sticker gift-sticker--xs"})}</span><span class="chip">#${i+1}</span><strong>${r(s.username)}</strong></li>`).join("")}</ul>
    </div>`:""}function Wu(){var p;const{user:e,live:t}=M(),s=Co(),i=t&&!t.endedAt,a=!!t,n=Gr(),l=((p=Ye().query)==null?void 0:p.category)||"";let c=`
    <div class="live-disc-panel" data-panel="channels">
      ${l?`<div class="card"><strong>Category: ${r(l)}</strong> <a class="btn ghost" href="#/live?tab=categories">All categories</a> <a class="btn ghost" href="#/live?tab=channels">All channels</a><p class="muted small">Only channels tagged with this category are shown below.</p></div>`:""}
      ${_u(l)}
      ${l?"":Ku()}
      ${i?"":Gu(e)}
      ${i?"":zr({title:"No active Live on this device — house catalog on Spotlight / Open Mic"})}
      ${zu(s)}
      <div class="card">
        <p class="muted" style="margin:0 0 8px">More Live tools</p>
        <div class="row wrap">
          <a class="btn ghost" href="#/connect#connect-multistream">Multi-platform go-live</a>
          <a class="btn ghost" href="#/multiguest">Multi-Guest</a>
          <a class="btn ghost" href="#/shorts">Shorts / Clips</a>
        </div>
        <p class="muted" style="margin:8px 0 0;font-size:12px">Open Mic + Spotlight are 24/7 categories (chips above). Clips live under Watch → Shorts / Clips. Gifts + song requests run during an active Live. Gift Battles is not promoted from this page.</p>
      </div>
    </div>`;n==="following"?c=Mu(e):n==="categories"&&(c=Pu());const d=`
    ${Cu(n)}
    ${Du("live")}
    ${i?Uu(t):""}
    ${i?Vu(e):""}
    ${i?Hu(e):""}
    ${a?Nu(t):""}
    ${i?Fu(t,e):""}
    ${i?Bu(t,e):""}
    ${i?Ou(t,e):""}
    ${c}
  `;return I("PIKK Live",d,{lead:"Following · Clips · Channels · Categories → Shorts · Request Spotlight · TEST MODE.",badge:i?"LIVE":void 0})}const Li=[];let gi=!1;function Yu(e,t){Li.push(t),Ur(e)}function Ur(e){if(gi)return;const t=e.querySelector("#liveGiftOverlay");if(!t){Li.length=0;return}const s=Li.shift();if(!s)return;gi=!0;const a=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?900:s.tier==="cinematic"?4200:s.tier==="premium"?2800:1600;t.innerHTML=`
    <div class="lg-overlay-card lg-tier-${r(s.tier||"small")}" data-slug="${r(s.slug)}">
      <div class="lg-overlay-sticker">${tt(s.slug)}</div>
      <div class="lg-overlay-copy">
        <strong>${r(s.name)}</strong>
        <span>@${r(s.fromUser)} · ${r(Se(s.coins))} coins</span>
        <span class="muted lg-overlay-brief">${r(s.animation||"")}</span>
      </div>
    </div>`,t.classList.add("is-on"),window.setTimeout(()=>{t.classList.remove("is-on"),t.innerHTML="",gi=!1,Ur(e)},a)}function Qu(e){e.querySelectorAll(".lg-buy").forEach(t=>{t.addEventListener("click",()=>{const s=xn(Number(t.dataset.coins));if((s==null?void 0:s.error)==="bad_package")return g("Unknown coin pack");if(s!=null&&s.error)return g(String(s.error));g(`+${Se(s.pack.coins)} coins · ${fe(s.pack.usd)} · TEST MODE`),me()})}),e.querySelectorAll(".lg-gift").forEach(t=>{t.addEventListener("click",()=>{var o,c,d;const s=t.dataset.slug,i=t.dataset.confirm==="1",a=Ri.find(p=>p.slug===s);if(!a)return g("Gift not found");if(i&&!window.confirm(`Send ${a.name} for ${Se(a.coins)} coins (${fe(a.usd)})?
TEST MODE · demo coins only`))return;const n=(o=M().live)==null?void 0:o.id,l=Ro({liveId:n,slug:s});if((l==null?void 0:l.error)==="signin")return g("Sign in first");if((l==null?void 0:l.error)==="offline")return g("Not live");if((l==null?void 0:l.error)==="insufficient")return g(`Need ${Se(l.need)} coins — buy a pack below · TEST MODE`);if((l==null?void 0:l.error)==="bad_gift")return g("Unknown gift");if(l!=null&&l.error)return g(String(l.error));Yu(e,{slug:a.slug,name:a.name,coins:a.coins,tier:a.tier,animation:a.animation,fromUser:((c=l.entry)==null?void 0:c.fromUser)||((d=M().user)==null?void 0:d.username)||"you"}),g(`Sent ${a.name} · ${Se(a.coins)} coins · TEST MODE`),window.setTimeout(()=>me(),200)})})}function Ju(e){var l,o;const t=e.querySelector("#lsrPacks"),s=e.querySelector("#lsrTitleFields");if(!t||!s)return;let i=1;const a=()=>{const c=i,d=Array.from({length:c},(p,m)=>`<div class="field"><label>Song ${m+1}</label>
        <input class="lsr-title-input" data-i="${m}" maxlength="80" placeholder="Song title…" /></div>`).join("");s.innerHTML=d},n=c=>{i=Number(c)||1,t.querySelectorAll(".lsr-pack").forEach(d=>{const p=Number(d.dataset.pack)===i;d.classList.toggle("on",p),d.setAttribute("aria-pressed",p?"true":"false")}),a()};t.querySelectorAll(".lsr-pack").forEach(c=>{c.addEventListener("click",()=>n(c.dataset.pack))}),n(1),(l=e.querySelector("#lsrSeedWallet"))==null||l.addEventListener("click",()=>{Bs(50,"Song request demo credit · TEST MODE"),g("+$50 wallet demo · TEST MODE"),me()}),(o=e.querySelector("#lsrSubmit"))==null||o.addEventListener("click",()=>{const c=Array.from(e.querySelectorAll(".lsr-title-input")).map(p=>p.value),d=Lo({pack:i,titles:c});if((d==null?void 0:d.error)==="signin")return g("Sign in first");if((d==null?void 0:d.error)==="offline")return g("Not live");if((d==null?void 0:d.error)==="bad_pack")return g("Pick a pack");if((d==null?void 0:d.error)==="title_count")return g(`Enter ${d.need} song title${d.need>1?"s":""}`);if((d==null?void 0:d.error)==="insufficient")return g(`Need ${fe(d.need)} — tap + $50 demo credit · TEST MODE`);if(d!=null&&d.error)return g(String(d.error));g(`Song request submitted · ${fe(d.entry.price)} · TEST MODE`),me()}),e.querySelectorAll(".lsr-play").forEach(c=>{c.addEventListener("click",()=>{var y;const d=c.dataset.rid,p=Number(c.dataset.si),f=Ni((y=M().live)==null?void 0:y.id).find(w=>w.requestId===d&&w.songIndex===p);let b;if((f==null?void 0:f.status)==="playing"){if(b=_o(d,p),(b==null?void 0:b.error)==="host_only")return g("Host only");if(b!=null&&b.error)return g(String(b.error));g("Marked played · TEST MODE")}else{if(b=Po(d,p),(b==null?void 0:b.error)==="host_only")return g("Host only");if(b!=null&&b.error)return g(String(b.error));g("Now playing · TEST MODE")}me()})}),e.querySelectorAll(".lsr-skip").forEach(c=>{c.addEventListener("click",()=>{const d=Io(c.dataset.rid,Number(c.dataset.si));if((d==null?void 0:d.error)==="host_only")return g("Host only");if(d!=null&&d.error)return g(String(d.error));g("Skipped · TEST MODE"),me()})})}function Xu(e){var s,i,a,n,l,o,c,d;e.querySelectorAll(".hot-live-watch").forEach(p=>{p.addEventListener("click",()=>{di();const m=p.dataset.host||"creator",f=p.dataset.id||"",b=e.querySelector(`.hot-live-card[data-live-id="${CSS.escape(f)}"]`);e.querySelectorAll(".hot-live-card.is-watching").forEach(y=>y.classList.remove("is-watching")),b==null||b.classList.add("is-watching"),g(`Watching @${m} · demo only`)})}),e.querySelectorAll(".hot-live-spike").forEach(p=>{p.addEventListener("click",()=>{var y;const m=p.dataset.id,f=cd(m);if((f==null?void 0:f.error)==="missing")return g("Live not found");if(f!=null&&f.error)return g(String(f.error));const b=((y=f.live)==null?void 0:y.hostName)||"creator";g(f.deduped?`Spike @${b} · Admin alert already open`:`Spike @${b} · Admin engagement alert queued`),me()})}),(s=e.querySelector("#liveStart"))==null||s.addEventListener("click",()=>{var y,w,h,v,$;const p=(w=(y=e.querySelector("#liveTitle"))==null?void 0:y.value)==null?void 0:w.trim(),m=$a(p);if((m==null?void 0:m.error)==="signin")return g("Sign in first");if((m==null?void 0:m.error)==="already_live")return g("Already live");const f=(v=(h=e.querySelector("#liveGoalNameGo"))==null?void 0:h.value)==null?void 0:v.trim(),b=Number(($=e.querySelector("#liveGoalAmtGo"))==null?void 0:$.value);if(f&&b>0){const k=Dn({name:f,targetAmount:b});(k==null?void 0:k.error)==="signin"?g("Sign in to set goal"):k!=null&&k.error?g("Goal not set · "+k.error):g(`Live goal set · $${b} · 24h · TEST MODE`)}di(),g("You are live · TEST MODE"),me()}),(i=e.querySelector("#liveRestart"))==null||i.addEventListener("click",()=>{var f;const p="PIKK Live · "+(((f=M().user)==null?void 0:f.username)||"Demo"),m=$a(p);if(m!=null&&m.error)return g(String(m.error));di(),g("Back live · TEST MODE"),me()}),(a=e.querySelector("#liveEnd"))==null||a.addEventListener("click",()=>{Ao(),Cr(),g("Stream ended"),me()}),(n=e.querySelector("#liveBumpViewers"))==null||n.addEventListener("click",()=>{const p=To(),m=e.querySelector("#liveViewers");m&&p&&(m.textContent=qe(p.viewers||0)),g("Viewers updated (stub)")}),(l=e.querySelector("#liveTip"))==null||l.addEventListener("click",p=>{const m=p.currentTarget,f=kn({kind:"tip",amount:Number(m.dataset.amt)||1});if((f==null?void 0:f.error)==="signin")return g("Sign in first");if((f==null?void 0:f.error)==="offline")return g("Not live");g("Tip sent · demo"),me()});const t=()=>{var b;const p=e.querySelector("#liveChatInput"),m=(b=p==null?void 0:p.value)==null?void 0:b.trim();if(!m)return g("Type a message");const f=Do(m);if((f==null?void 0:f.error)==="signin")return g("Sign in first");if((f==null?void 0:f.error)==="offline")return g("Not live");(f==null?void 0:f.error)!=="empty"&&(p&&(p.value=""),me())};(o=e.querySelector("#liveChatSend"))==null||o.addEventListener("click",t),(c=e.querySelector("#liveChatInput"))==null||c.addEventListener("keydown",p=>{p.key==="Enter"&&t()}),(d=e.querySelector("#liveFocusGifts"))==null||d.addEventListener("click",()=>{var p;(p=e.querySelector("#liveGifts"))==null||p.scrollIntoView({behavior:"smooth",block:"start"})}),Qu(e),Ju(e),Zu(e)}function Zu(e){var t;(t=e.querySelector("#liveGoalSave"))==null||t.addEventListener("click",()=>{var n,l,o;const s=(l=(n=e.querySelector("#liveGoalName"))==null?void 0:n.value)==null?void 0:l.trim(),i=Number((o=e.querySelector("#liveGoalAmt"))==null?void 0:o.value),a=Dn({name:s,targetAmount:i});if((a==null?void 0:a.error)==="signin")return g("Sign in first");if((a==null?void 0:a.error)==="bad_name")return g("Enter a goal name");if((a==null?void 0:a.error)==="bad_amount")return g("Enter a goal amount ($)");if(a!=null&&a.error)return g(String(a.error));g(`Goal live · $${a.goal.targetAmount} · 24h window · TEST MODE`),me()}),e.querySelectorAll(".live-goal-custom-form").forEach(s=>{s.addEventListener("submit",i=>{var l;i.preventDefault();const a=Number((l=s.querySelector(".live-goal-custom-coins"))==null?void 0:l.value);if(!Number.isSafeInteger(a)||a<1||a>1e6)return g("Enter 1–1,000,000 whole coins");const n=qs(s.dataset.goalId,a);if((n==null?void 0:n.error)==="signin")return g("Sign in first");if((n==null?void 0:n.error)==="insufficient")return g("Not enough demo coins");if(n!=null&&n.error)return g("Donation unavailable · TEST MODE");g("Custom donation sent · TEST MODE"),me()})}),e.querySelectorAll(".live-goal-donate").forEach(s=>{s.addEventListener("click",()=>{var o;const i=s.dataset.goalId,a=Number(s.dataset.coins),n=qs(i,a);if((n==null?void 0:n.error)==="signin")return g("Sign in first");if((n==null?void 0:n.error)==="insufficient")return g(`Need ${Se(n.need)} coins — buy a pack in Gifts · TEST MODE`);if((n==null?void 0:n.error)==="expired")return g("Goal ended · 24h window over");if((n==null?void 0:n.error)==="unknown_goal")return g("Goal not found");if((n==null?void 0:n.error)==="invalid_amount")return g("Pick a donate amount");if(n!=null&&n.error)return g(String(n.error));const l=((o=n.donated)==null?void 0:o.usd)??a/50;g(`Donated ${Se(a)} coins ($${Number(l).toFixed(2)}) · TEST MODE`),me()})})}function Ut(){O("#/marketplace")}const ep={pending:"Pending",approved:"Approved",rejected:"Rejected"},tp=[{v:"sponsored_post",label:"Sponsored post"},{v:"livestream_promo",label:"Livestream promo"},{v:"affiliate",label:"Affiliate link"},{v:"storefront",label:"Product storefront"}];function sp(){const{brandApps:e,user:t}=M(),s=Ho(),i=s.filter(o=>o.active),a=i.length?i.map(o=>`
      <article class="card market-listing" data-id="${r(o.id)}">
        <div class="row wrap">
          <span class="chip">Sponsored</span>
          <span class="chip">${r(o.disclosure||"Paid partnership")}</span>
          <span class="muted spacer" style="text-align:right;font-size:12px">${N(o.at)}</span>
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
          <span class="chip">${r(ep[o.status]||o.status)}</span>
          <span class="muted spacer" style="text-align:right">${N(o.at)}</span>
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
    ${a}

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
          ${tp.map(o=>`<option value="${o.v}">${r(o.label)}</option>`).join("")}
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
  `;return I("Marketplace",l,{lead:"Brand applications & sponsored listings · localStorage demo."})}function ip(e){var t,s;(t=e.querySelector("#mSubmit"))==null||t.addEventListener("click",()=>{var a,n,l,o,c,d,p;const i=zo({brand:(a=e.querySelector("#mBrand"))==null?void 0:a.value,contact:(n=e.querySelector("#mContact"))==null?void 0:n.value,email:(l=e.querySelector("#mEmail"))==null?void 0:l.value,budget:(o=e.querySelector("#mBudget"))==null?void 0:o.value,campaign:(c=e.querySelector("#mCampaign"))==null?void 0:c.value,url:(d=e.querySelector("#mUrl"))==null?void 0:d.value,pitch:(p=e.querySelector("#mPitch"))==null?void 0:p.value});if((i==null?void 0:i.error)==="required")return g("Brand and email required");g("Application saved"),Ut()}),e.querySelectorAll(".brand-status").forEach(i=>{i.addEventListener("click",()=>{Uo(i.dataset.id,i.dataset.status),g("Marked "+i.dataset.status),Ut()})}),e.querySelectorAll(".brand-to-listing").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.brand||"Brand",n=Aa({title:`${a} · sponsored`,brand:a,blurb:i.dataset.pitch||"Sponsored offer from approved brand application.",url:i.dataset.url||"",disclosure:"Paid partnership · TEST MODE",brandAppId:i.dataset.id});if(n!=null&&n.error)return g("Could not create listing");g("Listing published"),Ut()})}),(s=e.querySelector("#lCreate"))==null||s.addEventListener("click",()=>{var a,n,l,o,c;const i=Aa({title:(a=e.querySelector("#lTitle"))==null?void 0:a.value,brand:(n=e.querySelector("#lBrand"))==null?void 0:n.value,blurb:(l=e.querySelector("#lBlurb"))==null?void 0:l.value,url:(o=e.querySelector("#lUrl"))==null?void 0:o.value,disclosure:(c=e.querySelector("#lDisc"))==null?void 0:c.value});if((i==null?void 0:i.error)==="required")return g("Title and brand required");g("Listing published"),Ut()}),e.querySelectorAll(".listing-toggle").forEach(i=>{i.addEventListener("click",()=>{Vo(i.dataset.id,i.dataset.active==="1"),g(i.dataset.active==="1"?"Listing shown":"Listing hidden"),Ut()})})}function he(e){O(e||"#/messages")}function ap(e){const t=e.messages||[];if(!t.length)return"No messages yet";const s=t[t.length-1];return(s.priority?"⚡ ":"")+(s.text||"").slice(0,80)}function np(){return I("Messages",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Private DMs, team inbox, and group chats need a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Private messaging & team inbox · TEST MODE"})}function rp(e){const t=Cn(),s=M().messagePrefs||{allowDMs:!0,allowRequests:!0};return`
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
        ${t.map(a=>{const n=a.kind==="group",l=!n&&a.peerId==="dbs",o=[n?'<span class="chip">Group</span>':"",l?'<span class="chip">Team</span>':"",a.request?'<span class="chip">Request</span>':"",a.muted?'<span class="chip">Muted</span>':"",a.blocked?'<span class="chip">Blocked</span>':""].filter(Boolean).join(" "),c=Mn(a),d=c?`<span class="chip msg-unread-chip" aria-label="${c} unread">${c}</span>`:"";return`
      <button type="button" class="msg-thread-row${c?" has-unread":""}" data-open-thread="${r(a.id)}">
        <div class="msg-thread-top">
          <strong>${r(a.peerName||a.peerId)}</strong>
          <span class="muted">${r(N(a.updatedAt||0))}</span>
        </div>
        <div class="msg-thread-preview muted">${r(ap(a))}</div>
        <div class="msg-thread-chips">${d}${o}</div>
      </button>`}).join("")||`<div class="msg-empty">
            <p class="muted">No conversations yet.</p>
            <button type="button" class="btn primary" id="msgEmptyNew">Start a chat</button>
          </div>`}
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
  `}function op(){return`
    <div class="card">
      <div class="row" style="justify-content:space-between">
        <h3 style="margin:0">Start chat</h3>
        <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
      </div>
      <p class="muted">Demo peers. Mutual follows open a DM; others create a <em>request</em> thread (still usable in TEST MODE).</p>
    </div>
    ${us().map(s=>{const i=s.team||Pn(s.id),a=s.team?"Team inbox":i?"Message":"Message request";return`
      <article class="card msg-contact">
        <div class="msg-contact-head">
          <strong>${r(s.username)}</strong>
          ${s.team?'<span class="chip">Official</span>':i?'<span class="chip">Mutual</span>':'<span class="chip">Request</span>'}
        </div>
        <p class="muted" style="margin:6px 0 10px">${r(s.bio||"")}</p>
        <button type="button" class="btn ${s.team?"primary":""}" data-start-peer="${r(s.id)}" data-peer-name="${r(s.username)}">${r(a)}</button>
      </article>`}).join("")}
  `}function lp(){return`
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
  `}function cp(e,{teamPriorityHint:t=!1}={}){const s=M().user,i=e.kind==="group",a=!i&&e.peerId==="dbs",n=!!e.blocked,l=(e.messages||[]).map(d=>`
      <div class="msg-bubble ${d.from===(s==null?void 0:s.id)?"mine":""} ${d.priority?"priority":""}">
        <div class="msg-bubble-meta">
          <strong>${r(d.fromName||d.from)}</strong>
          ${d.priority?'<span class="chip priority-chip">Priority</span>':""}
          <span class="muted">${r(N(d.at))}</span>
        </div>
        <div class="msg-bubble-text">${r(d.text)}</div>
      </div>`).join(""),o=e.request?'<div class="msg-banner">Message request · recipient approval stub (demo still delivers locally)</div>':"",c=t?'<div class="msg-banner priority">Next send can use Priority $2.99 TEST MODE (wallet note only — not charged).</div>':"";return`
    <div class="card msg-thread-head">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <div>
          <button type="button" class="btn ghost" id="msgBackInbox">← Inbox</button>
          <h3 style="margin:8px 0 0">${r(e.peerName||e.peerId)}</h3>
          <div class="row wrap" style="gap:6px;margin-top:6px">
            ${i?'<span class="chip">Group</span>':""}
            ${a?'<span class="chip">Team</span>':""}
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
    ${c}
    <div class="card msg-thread-card">
      <div class="msg-thread" id="msgThread">${l||'<p class="muted">No messages yet — say hi.</p>'}</div>
      ${n?'<p class="muted" style="margin-top:10px">Thread blocked · composer disabled (demo).</p>':`<div class="msg-composer">
               <input id="msgInput" placeholder="${a?"Write an inquiry…":"Message…"}" maxlength="500" />
               <button type="button" class="btn primary" id="msgSend">Send</button>
               ${a?'<button type="button" class="btn" id="msgSendPriority" title="TEST MODE — not charged">Priority $2.99</button>':""}
             </div>`}
    </div>
  `}function dp(e){var l,o,c;if(!M().user)return np();us();const s=((l=e==null?void 0:e.query)==null?void 0:l.view)||"",i=((o=e==null?void 0:e.query)==null?void 0:o.t)||"",a=((c=e==null?void 0:e.query)==null?void 0:c.priority)==="1";let n;if(i){const d=Ln(i);d?n=cp(d,{teamPriorityHint:a&&d.peerId==="dbs"}):n='<div class="card"><p class="muted">Thread not found.</p><button type="button" class="btn" id="msgBackInbox">← Inbox</button></div>'}else s==="new"?n=op():s==="team"?n=lp():n=rp();return I("Messages",n,{lead:"DMs, group chats, and DatBoiSkeet team inbox · TEST MODE"})}function up(e){var o,c,d,p,m,f,b,y,w,h,v,$;if(!M().user)return;zi();const s=()=>he("#/messages");(o=e.querySelector("#msgBackInbox"))==null||o.addEventListener("click",s),(c=e.querySelector("#msgNewChat"))==null||c.addEventListener("click",()=>he("#/messages?view=new")),(d=e.querySelector("#msgEmptyNew"))==null||d.addEventListener("click",()=>he("#/messages?view=new")),(p=e.querySelector("#msgOpenTeam"))==null||p.addEventListener("click",()=>he("#/messages?view=team")),(m=e.querySelector("#msgOpenGroup"))==null||m.addEventListener("click",()=>{const k=Jo();if(k!=null&&k.error){g("Sign in required");return}g("Opened DBS Fans"),he("#/messages?t="+encodeURIComponent(k.id))}),(f=e.querySelector("#msgTeamFree"))==null||f.addEventListener("click",()=>{const k=es("dbs","DatBoiSkeet");if(k.error)return g("Sign in required");he("#/messages?t="+encodeURIComponent(k.id))}),(b=e.querySelector("#msgTeamPriority"))==null||b.addEventListener("click",()=>{const k=es("dbs","DatBoiSkeet");if(k.error)return g("Sign in required");he("#/messages?t="+encodeURIComponent(k.id)+"&priority=1")}),e.querySelectorAll("[data-start-peer]").forEach(k=>{k.addEventListener("click",()=>{const x=k.dataset.startPeer,L=k.dataset.peerName||x;if(x==="dbs"){he("#/messages?view=team");return}const D=es(x,L);if(D.error)return g("Sign in required");D.request&&g("Request thread created · demo"),he("#/messages?t="+encodeURIComponent(D.id))})}),e.querySelectorAll("[data-open-thread]").forEach(k=>{k.addEventListener("click",()=>{he("#/messages?t="+encodeURIComponent(k.dataset.openThread))})}),(y=e.querySelector("#msgPrefDMs"))==null||y.addEventListener("change",k=>{Ta({allowDMs:!!k.target.checked}),g(k.target.checked?"DMs allowed":"DMs disabled (stub)")}),(w=e.querySelector("#msgPrefRequests"))==null||w.addEventListener("change",k=>{Ta({allowRequests:!!k.target.checked}),g(k.target.checked?"Requests allowed":"Requests disabled (stub)")});const i=new URLSearchParams(location.hash.split("?")[1]||"").get("t"),a=i?Ln(i):null;a&&Wo(a.id),e.querySelectorAll("[data-flag]").forEach(k=>{k.addEventListener("click",()=>{if(!a)return;const x=k.dataset.flag;if(x==="mute"){const L=li(a.id,{muted:!a.muted});g(L.muted?"Muted":"Unmuted"),he("#/messages?t="+encodeURIComponent(a.id))}else if(x==="block"){const L=li(a.id,{blocked:!a.blocked});g(L.blocked?"Blocked":"Unblocked"),he("#/messages?t="+encodeURIComponent(a.id))}else x==="report"&&(li(a.id,{report:!0}),g("Reported · stub (Guidelines §13)"),he("#/messages?t="+encodeURIComponent(a.id)))})});const n=k=>{if(!a)return;const x=e.querySelector("#msgInput"),L=(x==null?void 0:x.value)||"";let D;if(a.kind==="group"?D=Xo(a.id,L):D=Yo(a.peerId,a.peerName,L,{priority:!!k}),(D==null?void 0:D.error)==="empty")return g("Type a message");if(D!=null&&D.error)return g("Could not send");g(k?"Priority sent · TEST MODE $2.99 not charged":"Sent"),he("#/messages?t="+encodeURIComponent(a.id))};(h=e.querySelector("#msgSend"))==null||h.addEventListener("click",()=>n(!1)),(v=e.querySelector("#msgSendPriority"))==null||v.addEventListener("click",()=>n(!0)),($=e.querySelector("#msgInput"))==null||$.addEventListener("keydown",k=>{k.key==="Enter"&&(k.preventDefault(),n(!1))});const l=e.querySelector("#msgThread");l&&(l.scrollTop=l.scrollHeight)}function ut(){O("#/wallet")}function K(e){return"$"+Number(e||0).toFixed(2)}function fi(e){return Number(e||0).toLocaleString()}const pp={pending:"Pending",completed:"Completed",rejected:"Rejected"};function mp(){const{wallet:e,user:t,coins:s}=M(),i=e||{balance:0,history:[]},a=Ws(),n=[...(s==null?void 0:s.history)||[]].slice(0,10),l=Bo(),o=ns(),c=Hi().filter(T=>T.count>0),d=En(t==null?void 0:t.id),p=[...i.history||[]].slice(-12).reverse(),m=[...o.earnings||[]].slice(0,20),f=o.payouts||[],b=f.find(T=>T.status==="pending"),y=!b&&o.available>=o.threshold,w=o.verification==="demo_verified",h=p.length>0?`<ul class="list-plain">${p.map(T=>`<li>
          <span>${r(T.note||"Entry")}<br/><span class="muted" style="font-size:12px">${N(T.at)}</span></span>
          <strong style="color:${Number(T.amount)>=0?"var(--ok,#6dffb0)":"inherit"}">${Number(T.amount)>=0?"+":""}${K(T.amount)}</strong>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0">No fan USD credit activity yet.</p>',v=l.map(T=>{const ne=`pack_${T.coins}`;return`<button type="button" class="card coin-pack-btn" data-coins="${T.coins}" id="${r(ne)}" style="text-align:left;cursor:pointer;margin:0;padding:12px;border:1px solid rgba(255,255,255,.08);background:#12121a">
        <div style="font-size:20px;font-weight:900">${fi(T.coins)} <span class="muted" style="font-size:13px;font-weight:600">coins</span></div>
        <div class="muted" style="font-size:13px;margin-top:4px">${K(T.usd)} · TEST MODE</div>
        <div style="margin-top:8px"><span class="chip">Buy · demo credit</span></div>
      </button>`}).join(""),$=n.length>0?`<ul class="list-plain">${n.map(T=>{const ne=Number(T.amount)||0;return`<li>
          <span>${r(T.note||"Coins")}<br/><span class="muted" style="font-size:12px">${N(T.at)}</span></span>
          <strong style="color:${ne>=0?"var(--ok,#6dffb0)":"inherit"}">${ne>=0?"+":""}${fi(ne)}</strong>
        </li>`}).join("")}</ul>`:'<p class="muted" style="margin:0">No coin purchases or gifts yet. Buy a pack below for Live gifts.</p>',k=d.length>0?`<ul class="list-plain">${d.slice(0,8).map(T=>`<li>
          <span>
            <strong>${r(T.note||T.label||"Live gift")}</strong>
            <span class="chip">80/20 NET</span>
            ${T.giftSlug?`<span class="chip">${r(T.giftSlug)}</span>`:""}
            <br/><span class="muted" style="font-size:12px">gross ${K(T.gross)} · fees ${K(T.fees)} · net ${K(T.net)} · ${N(T.at)}</span>
          </span>
          <span style="text-align:right;font-size:13px">
            <strong>${K(T.creatorShare)}</strong><br/>
            <span class="muted">PIKK ${K(T.dbsShare)}</span>
          </span>
        </li>`).join("")}</ul>
        <p class="muted" style="font-size:12px;margin:8px 0 0">Creator-only split view. Live viewers never see 80/20.</p>`:'<p class="muted" style="margin:0">No coin-gift earnings yet. When viewers send catalog gifts on Live, your <strong>80% of NET</strong> lands here (TEST MODE: listed USD = net, 0% external fee).</p>',x=c.length>0?`<div style="overflow-x:auto">
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
          ${c.map(T=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
            <td style="padding:8px 4px"><strong>${r(T.label)}</strong><br/><span class="muted" style="font-size:11px">${T.creatorPct}/${T.dbsPct} · ${T.count} line${T.count===1?"":"s"}</span></td>
            <td style="padding:8px 4px">${K(T.gross)}</td>
            <td style="padding:8px 4px">${K(T.fees)}</td>
            <td style="padding:8px 4px">${K(T.net)}</td>
            <td style="padding:8px 4px"><strong>${K(T.creatorShare)}</strong></td>
            <td style="padding:8px 4px">${K(T.dbsShare)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <p class="muted" style="font-size:12px;margin:8px 0 0">Default fees = demo 2.9% + $0.30. <strong>Live catalog gifts (t185u)</strong> treat listed USD as NET (fees $0) then 80/20. Seeded rows labeled in ledger.</p>`:'<p class="muted" style="margin:0">No creator earnings yet. Load demo earnings or receive Live tips/gifts.</p>',L=m.length>0?`<ul class="list-plain">${m.map(T=>`<li>
          <span>
            <strong>${r(T.label)}</strong>
            ${T.payoutId?'<span class="chip">In payout</span>':'<span class="chip">Open</span>'}
            ${T.source==="seed"?'<span class="chip">Demo seed</span>':""}
            ${T.source==="live_gift"?'<span class="chip">Coin gift</span>':""}
            <br/><span class="muted" style="font-size:12px">${r(T.note)} · ${N(T.at)}</span>
          </span>
          <span style="text-align:right;font-size:13px">
            <strong>${K(T.creatorShare)}</strong><br/>
            <span class="muted">gross ${K(T.gross)}</span>
          </span>
        </li>`).join("")}</ul>`:"",D=f.length>0?f.map(T=>`<div class="card" style="margin:0 0 10px;background:#12121a" data-payout="${r(T.id)}">
        <div class="row wrap">
          <strong>${K(T.amount)}</strong>
          <span class="chip">${r(pp[T.status]||T.status)}</span>
          <span class="muted spacer" style="text-align:right;font-size:12px">${N(T.at)}</span>
        </div>
        <p class="muted" style="margin:6px 0;font-size:12px">${r(T.note||"Payout")} · ${(T.earningIds||[]).length} earning line(s)</p>
        ${T.status==="pending"?`<div class="row wrap">
                <button class="btn primary payout-status" data-id="${r(T.id)}" data-status="completed">Mark completed · demo</button>
                <button class="btn ghost payout-status" data-id="${r(T.id)}" data-status="rejected">Reject · release hold</button>
              </div>`:T.reviewedAt?`<p class="muted" style="margin:0;font-size:12px">Reviewed ${N(T.reviewedAt)}</p>`:""}
      </div>`).join(""):'<p class="muted">No payout requests yet.</p>',F=`
    <div class="card">
      <div class="row wrap">
        <span class="chip">TEST MODE · not real money</span>
        <span class="chip">${w?"Identity / tax · demo verified":"Identity / tax verification · demo"}</span>
        <button class="btn ghost" id="cwVerify" style="margin-left:auto">${w?"Clear demo verify":"Mark verified · demo"}</button>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:13px">Fan <strong>coins</strong> (Live gifts) stay separate from fan USD credits and creator redeemable balances. No real processors, KYC, or charges.</p>
    </div>

    <div class="card" id="wallet-coins">
      <div class="row wrap">
        <h3 style="margin:0">Gift coins</h3>
        <span class="chip">t185u · 100 coins = $2</span>
        <span class="chip">TEST MODE</span>
      </div>
      <div style="font-size:32px;font-weight:900;margin-top:8px">${fi(a)} <span class="muted" style="font-size:16px;font-weight:600">coins</span></div>
      <p class="muted" style="margin:4px 0 12px">≈ ${K(a*.02)} · stored in <code>dbs_v1.coins</code> (not USD <code>wallet</code>). Used for Live gift tray.</p>
      <h4 style="margin:0 0 8px;font-size:14px">Buy coin pack</h4>
      <div class="grid-2" style="gap:10px">${v}</div>
      <p class="muted" style="font-size:12px;margin:10px 0 0">No discounts · packs ${Hs.map(T=>`${T.coins}/$${T.usd}`).join(" · ")}. Demo credit only — no payment processor.</p>
      <h4 style="margin:16px 0 8px;font-size:14px">Recent coin activity</h4>
      ${$}
      <div class="row wrap" style="margin-top:12px">
        <a class="btn ghost" href="#/live">Go to Live · send gifts</a>
        <a class="btn ghost" href="#/earnings?cat=gifts">Gift earnings</a>
      </div>
    </div>

    <div class="card">
      <h3>Fan spendable USD credits</h3>
      <div style="font-size:32px;font-weight:900">${K(i.balance)}</div>
      <p class="muted" style="margin:4px 0 12px">Tips &amp; song requests on this device (<code>dbs_v1.wallet</code>). Separate from gift coins.</p>
      <div class="row wrap">
        <button class="btn primary" id="fanCredit5">Add $5 demo credit</button>
        <button class="btn" id="fanCredit25">Add $25</button>
        <a class="btn ghost" href="#/live">Go to Live</a>
      </div>
      <h4 style="margin:16px 0 8px;font-size:14px">Recent fan USD activity</h4>
      ${h}
    </div>

    <div class="card">
      <h3>Creator redeemable balance</h3>
      <div class="grid-2">
        <div>
          <p class="muted" style="margin:0;font-size:12px">Available to payout</p>
          <div style="font-size:28px;font-weight:900">${K(o.available)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Holds / in review</p>
          <div style="font-size:28px;font-weight:900">${K(o.holds)}</div>
        </div>
      </div>
      <div class="row wrap" style="margin-top:10px">
        <span class="chip">Threshold ${K(o.threshold)}</span>
        <span class="chip">Holds / refunds · demo</span>
        ${b?'<span class="chip">Payout pending</span>':""}
      </div>
      <div class="row wrap" style="margin-top:12px">
        <button class="btn primary" id="cwPayout" ${y?"":"disabled"}>Request payout · TEST MODE</button>
        <button class="btn" id="cwSeed">${(o.earnings||[]).length?"Reload demo earnings":"Load demo earnings"}</button>
        <a class="btn ghost" href="#/earnings">Earnings overview</a>
      </div>
      ${y?'<p class="muted" style="margin:10px 0 0;font-size:12px">Moves available → holds and locks those earning lines until completed or rejected.</p>':`<p class="muted" style="margin:10px 0 0;font-size:12px">${b?"Finish or reject the pending payout before requesting another (anti double-payout).":`Need at least ${K(o.threshold)} available · currently ${K(o.available)}.`}</p>`}
      <p class="chip" style="margin-top:10px">Signed in as ${r((t==null?void 0:t.username)||"guest")}</p>
    </div>

    <div class="card" id="wallet-gift-earnings">
      <h3>Live gift earnings · creator view</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">80% creator / 20% PIKK on NET catalog gifts. Not shown on Live / gift tray.</p>
      ${k}
    </div>

    <div class="card">
      <h3>Earnings breakdown</h3>
      <p class="muted" style="margin:0 0 10px">Gifts, tips, subscriptions, referrals, Clippers, sponsorships, merch/affiliate — gross → fees → net → creator% / PIKK%.</p>
      ${x}
      ${L?`<h4 style="margin:16px 0 8px;font-size:14px">Ledger (recent)</h4>${L}`:""}
    </div>

    <div class="card">
      <h3>Payout history</h3>
      <p class="muted" style="margin:0 0 10px">On-device demo approve / reject. Completed funds leave holds; rejected releases hold and untags earnings.</p>
      ${D}
    </div>
  `;return I("Wallet & Payouts",F,{lead:"Creator Wallet & Payout Center · gift coins + fan USD · TEST MODE."})}function gp(e){var t,s,i,a,n;e.querySelectorAll(".coin-pack-btn").forEach(l=>{l.addEventListener("click",()=>{const o=Number(l.dataset.coins),c=xn(o);if((c==null?void 0:c.error)==="bad_package")return g("Unknown pack");if(c!=null&&c.error)return g("Could not buy coins");g(`+${o.toLocaleString()} coins · TEST MODE`),ut()})}),(t=e.querySelector("#fanCredit5"))==null||t.addEventListener("click",()=>{Bs(5,"Demo credit +$5"),g("+$5 fan credits"),ut()}),(s=e.querySelector("#fanCredit25"))==null||s.addEventListener("click",()=>{Bs(25,"Demo credit +$25"),g("+$25 fan credits"),ut()}),(i=e.querySelector("#cwSeed"))==null||i.addEventListener("click",()=>{const l=(ns().earnings||[]).length>0,o=_n({force:!0});g(l?"Demo earnings reloaded":`Loaded ${o.seeded||0} demo lines`),ut()}),(a=e.querySelector("#cwPayout"))==null||a.addEventListener("click",()=>{const l=tl();if((l==null?void 0:l.error)==="pending_exists")return g("Payout already pending");if((l==null?void 0:l.error)==="below_threshold")return g("Below payout threshold");if(l!=null&&l.error)return g("Could not request payout");g("Payout requested · held"),ut()}),(n=e.querySelector("#cwVerify"))==null||n.addEventListener("click",()=>{const o=ns().verification!=="demo_verified";il(o),g(o?"Demo verified":"Verification cleared"),ut()}),e.querySelectorAll(".payout-status").forEach(l=>{l.addEventListener("click",()=>{const o=sl(l.dataset.id,l.dataset.status);if(o!=null&&o.error)return g("Could not update payout");g("Payout "+l.dataset.status),ut()})})}function en(e){O(e||"#/earnings")}function se(e){return"$"+Number(e||0).toFixed(2)}const Vr=[{id:"all",label:"All"},{id:"gifts",label:"Gifts"},{id:"tips",label:"Tips"},{id:"subscriptions",label:"Subscriptions"},{id:"clippers",label:"Clippers"},{id:"referrals",label:"Referrals"},{id:"sponsorships",label:"Sponsorships"},{id:"merch",label:"Merch"}];function Hr(){var t;const e=(((t=Ye().query)==null?void 0:t.cat)||"all").toLowerCase();return Vr.some(s=>s.id===e)?e:"all"}function fp(e){return(e||[]).reduce((t,s)=>(t.gross+=Number(s.gross)||0,t.fees+=Number(s.fees)||0,t.net+=Number(s.net)||0,t.creatorShare+=Number(s.creatorShare)||0,t.dbsShare+=Number(s.dbsShare)||0,t),{gross:0,fees:0,net:0,creatorShare:0,dbsShare:0})}function Vt(e){return Math.round(Number(e)*100)/100}function hp(){const e=ns(),t=el(),s=Hr(),i=[...e.earnings||[]].sort((w,h)=>(h.at||0)-(w.at||0)),a=s==="all"?i:i.filter(w=>w.category===s||s==="subscriptions"&&w.category==="paid_content"),n=fp(i),l=Hi(),o=En(),c=s==="gifts"?`<div class="card" style="margin:0 0 12px;background:#12121a">
      <div class="row wrap">
        <span class="chip">t185u · catalog gifts</span>
        <span class="chip">80% creator / 20% PIKK · NET</span>
        <span class="chip">TEST MODE · listed USD = net</span>
      </div>
      <p class="muted" style="margin:8px 0 0;font-size:13px">Coin gifts from Live use <code>sendLiveGift</code> → creator earnings here. Viewers on Live / gift tray never see this split. ${o.length?`${o.length} gift line(s) on device.`:"Send a catalog gift on an active Live to populate."}</p>
    </div>`:"",d=Vr.map(w=>{const h=w.id==="all"?"#/earnings":`#/earnings?cat=${w.id}`,v=w.id==="all"?i.length:i.filter(k=>k.category===w.id||w.id==="subscriptions"&&k.category==="paid_content").length,$=s===w.id;return`<a class="chip earn-filter${$?" active":""}" href="${h}" data-cat="${r(w.id)}" style="${$?"outline:1px solid var(--accent,#6dffb0);font-weight:700":""}">${r(w.label)}${v?` · ${v}`:""}</a>`}).join(""),p=Object.entries(t).map(([w,h])=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${r(h.label)}</strong><br/><span class="muted" style="font-size:11px">${r(w)}</span></td>
        <td style="padding:8px 4px">${h.creatorPct}%</td>
        <td style="padding:8px 4px">${h.dbsPct}%</td>
      </tr>`).join(""),m=Object.entries(t).map(([w,h])=>`<option value="${r(w)}">${r(h.label)}</option>`).join(""),f=l.filter(w=>w.count>0).length>0?`<div style="overflow-x:auto;margin-top:8px">
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
          ${l.filter(w=>w.count>0).map(w=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
            <td style="padding:8px 4px"><strong>${r(w.label)}</strong><br/><span class="muted" style="font-size:11px">${w.creatorPct}/${w.dbsPct} · ${w.count} line${w.count===1?"":"s"}</span></td>
            <td style="padding:8px 4px">${se(w.gross)}</td>
            <td style="padding:8px 4px">${se(w.fees)}</td>
            <td style="padding:8px 4px">${se(w.net)}</td>
            <td style="padding:8px 4px"><strong>${se(w.creatorShare)}</strong></td>
            <td style="padding:8px 4px">${se(w.dbsShare)}</td>
          </tr>`).join("")}
        </tbody>
      </table>
    </div>`:"",b=a.length>0?`<ul class="list-plain">${a.map(w=>`<li style="align-items:flex-start">
          <span style="flex:1;min-width:0">
            <strong>${r(w.label||w.category)}</strong>
            ${w.payoutId?'<span class="chip">In payout</span>':'<span class="chip">Open</span>'}
            ${w.source==="seed"?'<span class="chip">Demo seed</span>':""}
            <br/><span class="muted" style="font-size:12px">${r(w.note||"")} · ${N(w.at)}</span>
            <br/><span class="muted" style="font-size:11px">gross ${se(w.gross)} → fees ${se(w.fees)} → net ${se(w.net)} · creator ${w.creatorPct}% / PIKK ${w.dbsPct}%</span>
          </span>
          <span style="text-align:right;font-size:13px;white-space:nowrap">
            <strong>${se(w.creatorShare)}</strong><br/>
            <span class="muted">PIKK ${se(w.dbsShare)}</span>
          </span>
        </li>`).join("")}</ul>`:i.length===0?`<p class="muted" style="margin:0 0 12px">No earnings yet. Load demo lines or record a single demo earning below.</p>
           <button class="btn primary" id="earnSeed">Load demo earnings</button>`:'<p class="muted" style="margin:0">No lines in this category. <a href="#/earnings">Show all</a></p>',y=`
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
          <div style="font-size:26px;font-weight:900">${se(e.available)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Holds / in review</p>
          <div style="font-size:26px;font-weight:900">${se(e.holds)}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Lifetime creator share</p>
          <div style="font-size:22px;font-weight:800">${se(Vt(n.creatorShare))}</div>
        </div>
        <div>
          <p class="muted" style="margin:0;font-size:12px">Lifetime PIKK share</p>
          <div style="font-size:22px;font-weight:800">${se(Vt(n.dbsShare))}</div>
        </div>
      </div>
      <div class="row wrap" style="margin-top:10px">
        <span class="chip">Lifetime gross ${se(Vt(n.gross))}</span>
        <span class="chip">Fees ${se(Vt(n.fees))}</span>
        <span class="chip">Net ${se(Vt(n.net))}</span>
        <span class="chip">Threshold ${se(e.threshold)}</span>
      </div>
      <div class="row wrap" style="margin-top:12px">
        <a class="btn primary" href="#/wallet">Open Wallet &amp; request payout</a>
        <button class="btn" id="earnSeed">${i.length?"Reload demo earnings":"Load demo earnings"}</button>
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
      ${f?`<h4 style="margin:16px 0 0;font-size:14px">Totals by source (this device)</h4>${f}`:""}
    </div>

    <div class="card">
      <h3>Earnings ledger</h3>
      ${c}
      <div class="row wrap" style="margin:0 0 12px;gap:6px">${d}</div>
      ${b}
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
  `;return I("Creator Earnings",y,{lead:"Rewards, commissions & ledger · TEST MODE · payouts on Wallet (§27)."})}function bp(e){var t,s;(t=e.querySelector("#earnSeed"))==null||t.addEventListener("click",()=>{const i=(ns().earnings||[]).length>0,a=_n({force:!0});g(i?"Demo earnings reloaded":`Loaded ${a.seeded||0} demo lines`),en(tn(Hr()))}),(s=e.querySelector("#earnDemoForm"))==null||s.addEventListener("submit",i=>{var c,d,p;i.preventDefault();const a=((c=e.querySelector("#earnCat"))==null?void 0:c.value)||"tips",n=Number((d=e.querySelector("#earnGross"))==null?void 0:d.value),l=(((p=e.querySelector("#earnNote"))==null?void 0:p.value)||"").trim()||"Manual demo earning";if(!(n>0))return g("Enter a positive gross amount");const o=Vi({category:a,gross:n,note:l,source:"manual_demo"});g(`Recorded ${se(o.creatorShare)} creator share`),en(tn(a))})}function tn(e){return!e||e==="all"?"#/earnings":`#/earnings?cat=${e}`}function pt(){O("#/missions")}const sn={song:"Song",album:"Album",video:"Video",live:"Livestream",app:"DBS App",interview:"Interview"};function vp(e){return"$"+Number(e||0).toFixed(0)}function yp(e){const t=Number(e)||0;if(!t)return"No deadline";const s=t-Date.now();if(s<0)return`Ended ${Math.ceil(-s/864e5)}d ago`;const i=Math.ceil(s/864e5);return i<=1?"Due today / tomorrow":`${i}d left`}function wp(e=14){return new Date(Date.now()+e*864e5).toISOString().slice(0,10)}function xs(){const{user:e}=M();if(e)return e;const t=It("DemoCreator");return g("Signed in as DemoCreator · local demo"),t||M().user}function Sp(){const{user:e}=M(),t=Js().sort((d,p)=>(p.createdAt||0)-(d.createdAt||0)),s=t.filter(d=>d.status==="active"||d.status==="paused"),i=t.filter(d=>d.status==="ended"||d.status==="draft"),a=t.length===0?`<div class="card">
          <p class="muted" style="margin:0 0 12px">No missions yet. Load demo campaigns or create one as demo admin.</p>
          <button class="btn primary" id="msnSeed">Load demo missions</button>
        </div>`:"",n=d=>{const p=d.fundSource==="third_party"?'<span class="chip">20% management fee · disclosed</span>':'<span class="chip">DBS-funded · marketing expense</span>',m=Bl(d.id),f=e&&(d.participants||[]).some(v=>v.userId===e.id),b=(d.submissions||[]).filter(v=>e&&v.userId===e.id),y=m.length>0?m.slice(0,8).map((v,$)=>`<tr style="border-top:1px solid rgba(255,255,255,.06)">
              <td style="padding:6px 4px">${$+1}</td>
              <td style="padding:6px 4px"><strong>${r(v.username)}</strong>
                ${v.referralCode?`<br/><span class="muted" style="font-size:11px">${r(v.referralCode)}</span>`:""}
              </td>
              <td style="padding:6px 4px">${v.score}</td>
              <td style="padding:6px 4px">${v.submissions}</td>
            </tr>`).join(""):'<tr><td colspan="4" class="muted" style="padding:8px 4px">No participants yet — join to appear on the board.</td></tr>',w=(d.submissions||[]).length>0?`<ul class="list-plain" style="margin-top:8px">${(d.submissions||[]).slice(0,5).map(v=>`<li style="align-items:flex-start">
              <span style="flex:1;min-width:0">
                <strong>${r(v.username)}</strong>
                <span class="chip">${r(v.status||"pending")}</span>
                <br/><span style="font-size:13px">${r(v.proof)}</span>
                <br/><span class="muted" style="font-size:11px">${N(v.at)} · Manual review</span>
              </span>
            </li>`).join("")}</ul>`:'<p class="muted" style="margin:8px 0 0;font-size:13px">No proof submissions yet.</p>',h=d.status==="active"?`<div class="row wrap" style="margin-top:10px;gap:8px">
            ${f?`<span class="chip">Joined</span>
                   <button class="btn" data-bump="${r(d.id)}">+5 demo points</button>`:`<button class="btn primary" data-join="${r(d.id)}">Join mission</button>`}
            <button class="btn ghost" data-status="${r(d.id)}" data-next="paused">Pause</button>
            <button class="btn ghost" data-status="${r(d.id)}" data-next="ended">End mission</button>
          </div>
          ${f?`<form class="msn-proof" data-id="${r(d.id)}" style="display:grid;gap:8px;margin-top:12px;max-width:480px">
                  <div class="field"><label>Submit proof (URL or note)</label>
                    <input name="proof" placeholder="https://… or clip description" maxlength="400" required />
                  </div>
                  <button class="btn" type="submit">Submit for review · +10 pts</button>
                </form>`:""}`:d.status==="paused"?`<div class="row wrap" style="margin-top:10px;gap:8px">
              <button class="btn primary" data-status="${r(d.id)}" data-next="active">Resume</button>
              <button class="btn ghost" data-status="${r(d.id)}" data-next="ended">End mission</button>
            </div>`:`<div class="row wrap" style="margin-top:10px"><span class="chip">Archive · ${r(d.status)}</span></div>`;return`<article class="card" data-mission="${r(d.id)}">
      <div class="row wrap">
        <span class="chip">${r(sn[d.promoteType]||d.promoteType)}</span>
        <span class="chip">${r(d.status)}</span>
        <span class="chip">Budget ${vp(d.budget)}</span>
        <span class="chip">${r(yp(d.deadline))}</span>
        ${p}
        <span class="muted spacer" style="text-align:right;font-size:12px">${N(d.createdAt)}</span>
      </div>
      <h3 style="margin:10px 0 4px">${r(d.title)}</h3>
      <p class="muted" style="margin:0 0 6px;font-size:13px">${r(d.reward||"")}</p>
      <p class="muted" style="margin:0;font-size:12px">
        Fund: <strong>${d.fundSource==="third_party"?"Third-party":"DBS"}</strong>
        ${d.fundSource==="third_party"?" · 20% management fee (disclosed)":" · not a creator commission — marketing expense"}
        · ${(d.participants||[]).length} joined · ${(d.submissions||[]).length} submissions
        ${f?` · your proofs: ${b.length}`:""}
      </p>
      ${h}
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
      ${w}
    </article>`},l=s.length?s.map(n).join(""):t.length?'<div class="card"><p class="muted" style="margin:0">No active or paused missions. Create one or resume from archive.</p></div>':"",o=i.length>0?`<div class="card"><h3>Archive</h3>${i.map(n).join("")}</div>`:"",c=`
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

    ${a}
    ${l}

    <div class="card">
      <h3>Create mission · demo admin</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Stored in <code>dbs_v1.missions</code>. No real charges or fraud API.</p>
      <form id="msnCreate" style="display:grid;gap:10px;max-width:520px">
        <div class="field"><label>Title *</label><input name="title" id="msnTitle" required maxlength="120" placeholder="Push Long Story Short" /></div>
        <div class="grid-2">
          <div class="field"><label>Promote type</label>
            <select name="promoteType" id="msnType">
              ${Object.entries(sn).map(([d,p])=>`<option value="${d}">${r(p)}</option>`).join("")}
            </select>
          </div>
          <div class="field"><label>Budget (USD)</label><input name="budget" id="msnBudget" type="number" min="0" step="1" value="500" /></div>
        </div>
        <div class="grid-2">
          <div class="field"><label>Deadline</label><input name="deadline" id="msnDeadline" type="date" value="${wp(14)}" /></div>
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
  `;return I("Missions",c,{lead:"Promotional campaigns · Clippers & creators · TEST MODE (§6)."})}function kp(e){var t,s,i;(t=e.querySelector("#msnSeed"))==null||t.addEventListener("click",()=>{const a=Js().length>0,n=Ol({force:!0});g(a?"Demo missions reloaded":`Loaded ${n.seeded||0} demo missions`),pt()}),(s=e.querySelector("#msnSignIn"))==null||s.addEventListener("click",()=>{xs(),pt()}),(i=e.querySelector("#msnCreate"))==null||i.addEventListener("submit",a=>{var f,b,y,w,h,v;a.preventDefault();const n=((f=e.querySelector("#msnTitle"))==null?void 0:f.value)||"",l=((b=e.querySelector("#msnType"))==null?void 0:b.value)||"app",o=Number((y=e.querySelector("#msnBudget"))==null?void 0:y.value)||0,c=((w=e.querySelector("#msnDeadline"))==null?void 0:w.value)||"",d=((h=e.querySelector("#msnFund"))==null?void 0:h.value)||"dbs",p=((v=e.querySelector("#msnReward"))==null?void 0:v.value)||"",m=Ll({title:n,promoteType:l,budget:o,deadline:c,fundSource:d,reward:p,status:"active"});if(m.error)return g("Title required");g(`Mission created · ${m.title}`),pt()}),e.querySelectorAll("[data-join]").forEach(a=>{a.addEventListener("click",()=>{xs();const n=a.getAttribute("data-join"),l=Il(n);if(l.error==="signin")return g("Sign in required");if(l.error==="already_joined")return g("Already joined");if(l.error==="not_active")return g("Mission not active");if(l.error)return g("Could not join");g("Joined mission · referral code assigned"),pt()})}),e.querySelectorAll("[data-bump]").forEach(a=>{a.addEventListener("click",()=>{xs();const n=a.getAttribute("data-bump"),l=ql(n,5);if(l.error)return g(l.error==="not_joined"?"Join first":"Bump failed");g("+5 demo points"),pt()})}),e.querySelectorAll("[data-status]").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-status"),l=a.getAttribute("data-next");if(Pl(n,l).error)return g("Status update failed");g(`Mission → ${l}`),pt()})}),e.querySelectorAll("form.msn-proof").forEach(a=>{a.addEventListener("submit",n=>{var d;n.preventDefault(),xs();const l=a.getAttribute("data-id"),o=((d=a.querySelector('[name="proof"]'))==null?void 0:d.value)||"",c=_l(l,{proof:o});if(c.error==="required")return g("Enter a URL or note");if(c.error==="not_joined")return g("Join first");if(c.error==="not_active")return g("Mission not active");if(c.error)return g("Submit failed");g("Proof submitted · pending manual review · +10 pts"),pt()})})}const $p=[{id:"trending",label:"Trending"},{id:"following",label:"Following"},{id:"discover",label:"Discover"}];function xp(){return!!M().exploreDiscoverable}function Ae({href:e,title:t,meta:s,chip:i}){return`<a class="explore-hit" href="${r(e)}">
    <div>
      <strong>${r(t)}</strong>
      <div class="muted" style="font-size:12px;margin-top:2px">${r(s||"")}</div>
    </div>
    ${i?`<span class="chip">${r(i)}</span>`:""}
  </a>`}function Qe(e,t,s){return t?`<div class="card explore-section">
    <h3>${r(e)}</h3>
    <div class="explore-hits">${t}</div>
  </div>`:`<div class="card explore-section">
      <h3>${r(e)}</h3>
      <p class="muted" style="margin:0">${r(s||"No matches")}</p>
    </div>`}function ts(e){if(!e||!e.query)return`<div class="card" id="exploreResults">
      <p class="muted" style="margin:0">Search creators, fans, songs, albums, videos, posts, livestreams, and products. Exact locations are never indexed.</p>
    </div>`;const t=e.posts.length+e.profiles.length+e.music.length+e.videos.length+e.lives.length+e.products.length+e.pictures.length;if(!t)return`<div class="card" id="exploreResults">
      <p style="margin:0 0 6px"><strong>No results for “${r(e.query)}”</strong></p>
      <p class="muted" style="margin:0">Try another keyword, or browse Trending / Discover below. Report spam from a result’s destination page (demo shell).</p>
    </div>`;const s=e.posts.slice(0,8).map(m=>Ae({href:"#/posts",title:(m.text||"").slice(0,90)||"Post",meta:`@${m.username||"user"} · ${N(m.at||Date.now())}`,chip:"Post"})).join(""),i=e.profiles.slice(0,8).map(m=>Ae({href:"#/profile",title:`@${m.username||m.id}`,meta:(m.bio||"Creator / fan").slice(0,80),chip:m.verified?"Verified":"Profile"})).join(""),a=e.music.slice(0,8).map(m=>Ae({href:"#/music",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · ${m.type}`,chip:m.type==="album"?"Album":"Song"})).join(""),n=e.videos.slice(0,8).map(m=>Ae({href:"#/videos",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · From Admin`,chip:"Video"})).join(""),l=e.pictures.slice(0,8).map(m=>Ae({href:"#/home",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · picture`,chip:"Picture"})).join(""),o=e.lives.slice(0,8).map(m=>Ae({href:"#/live",title:m.title||"Livestream",meta:`@${m.hostName||"host"} · ${m.status==="live"?"LIVE now":"Ended"}`,chip:m.status==="live"?"Live":"Replay"})).join(""),c=e.products.slice(0,8).map(m=>Ae({href:"#/marketplace",title:m.title,meta:`${m.brand||"Brand"} · ${m.disclosure||"Sponsored"}`,chip:"Ad"})).join(""),d=e.query.toLowerCase(),p=[...is.filter(m=>m.title.toLowerCase().includes(d)||m.artist.toLowerCase().includes(d)||d.includes("music")||d.includes("song")||d.includes("album")).map(m=>Ae({href:"#/music",title:m.title,meta:`${m.artist} · ${m.status}`,chip:"Cover"})),...Ve.filter(m=>m.title.toLowerCase().includes(d)||(m.artist||"").toLowerCase().includes(d)||d.includes("video")||d.includes("mv")).map(m=>Ae({href:"#/videos",title:m.title,meta:`${m.artist||"DatBoiSkeet"} · Official MV`,chip:"MV"}))].join("");return`<div id="exploreResults">
    <p class="muted" style="margin:0 0 10px">${t} result${t===1?"":"s"} for “${r(e.query)}”</p>
    ${Qe("People",i,"No matching creators or fans")}
    ${Qe("Posts",s,"No matching posts")}
    ${Qe("Music (catalog)",a,"No published songs/albums")}
    ${Qe("Videos (catalog)",n,"No published videos")}
    ${Qe("Pictures",l,"No published pictures")}
    ${Qe("Livestreams",o,"No live or history matches")}
    ${Qe("Products / ads",c,"No marketplace listings")}
    ${p?Qe("Music-based picks",p):""}
  </div>`}function Ep(){const e=nl(10);return e.length?`<div class="section-swipe explore-trend">
    ${e.map(t=>`<a class="preview-card" href="${r(t.href)}">
        <strong>${r(t.title)}</strong>
        <span class="muted">${r(t.subtitle)}${t.score?` · ♥${t.score}`:""}</span>
      </a>`).join("")}
  </div>`:'<p class="muted">Nothing trending yet — like posts or publish catalog items.</p>'}function Ap(){const e=M().user;if(!e)return'<div class="card"><p class="muted" style="margin:0">Sign in on <a href="#/profile">Profile</a> to see accounts you follow. Demo only — no exact locations.</p></div>';const t=e.following||[];return t.length?`<div class="card explore-section"><h3>Following</h3><div class="explore-hits">${t.map(i=>{var n;const a=((n=M().profiles)==null?void 0:n[i])||{id:i,username:i};return Ae({href:"#/profile",title:`@${a.username||a.id}`,meta:(a.bio||"Following").slice(0,80),chip:"Following"})}).join("")}</div></div>`:`<div class="card"><p class="muted" style="margin:0">You're not following anyone yet. Discover suggested accounts below, then follow from their profile.</p></div>`}function Tp(){const t=rl().slice(0,8).map(i=>Ae({href:"#/profile",title:`@${i.username}`,meta:(i.bio||"Suggested").slice(0,80),chip:i.verified?"Verified":"Suggest"})).join(""),s=is.map(i=>Ae({href:"#/music",title:i.title,meta:`${i.artist} · music-based`,chip:"Cover"})).join("");return`
    <div class="card">
      <h3>Discoverability (opt-in)</h3>
      <p class="muted" style="margin:0 0 10px">Appear in Explore suggestions. Off by default. No exact locations stored or shown.</p>
      <label class="row" style="gap:8px;align-items:center">
        <input type="checkbox" id="exploreDiscoverable" ${xp()?"checked":""} />
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
    </div>`}function Dp(){const e=M().exploreTab||"trending",t=$p.map(a=>`<button type="button" class="shop-chip${a.id===e?" on":""}" data-explore-tab="${a.id}">${r(a.label)}</button>`).join("");let s="";e==="following"?s=Ap():e==="discover"?s=Tp():s=`<div class="card">
      <h3>Trending Across DBS</h3>
      <p class="muted" style="margin:0 0 10px">High-engagement public posts and seeded demo cards (not a full engagement pipeline).</p>
      ${Ep()}
    </div>
    <div id="exploreResultsWrap">${ts(null)}</div>`;const i=`
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
  `;return I("Explore",i,{lead:"Universal search & discovery across DBS.",badge:"Phase 2 demo"})}function Cp(e,t){var n,l,o,c,d,p,m;const s=al(t),i=e.querySelector("#exploreResultsWrap")||e.querySelector("#explorePanel");if(e.querySelector("#exploreResultsWrap"))e.querySelector("#exploreResultsWrap").innerHTML=ts(s);else if(i){let f=e.querySelector("#exploreResults");if(f)f.outerHTML=ts(s);else{const b=document.createElement("div");b.id="exploreLiveInsert",b.innerHTML=ts(s),i.prepend(b)}}const a=(((n=s.posts)==null?void 0:n.length)||0)+(((l=s.profiles)==null?void 0:l.length)||0)+(((o=s.music)==null?void 0:o.length)||0)+(((c=s.videos)==null?void 0:c.length)||0)+(((d=s.lives)==null?void 0:d.length)||0)+(((p=s.products)==null?void 0:p.length)||0)+(((m=s.pictures)==null?void 0:m.length)||0);s.query&&g(a?`${a} result(s)`:"No matches")}function Mp(e){var l;const t=e.querySelector("#exploreQ"),s=e.querySelector("#exploreGo"),i=e.querySelector("#exploreClear"),a=()=>Cp(e,(t==null?void 0:t.value)||"");s==null||s.addEventListener("click",a),i==null||i.addEventListener("click",()=>{var c;t&&(t.value="");const o=e.querySelector("#exploreResultsWrap");o&&(o.innerHTML=ts(null)),(c=e.querySelector("#exploreLiveInsert"))==null||c.remove(),g("Cleared")});let n;t==null||t.addEventListener("input",()=>{clearTimeout(n),n=setTimeout(a,220)}),t==null||t.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),a())}),e.querySelectorAll("[data-explore-tab]").forEach(o=>{o.addEventListener("click",()=>{wa({exploreTab:o.getAttribute("data-explore-tab")}),O("/explore")})}),(l=e.querySelector("#exploreDiscoverable"))==null||l.addEventListener("change",o=>{wa({exploreDiscoverable:!!o.target.checked}),g(o.target.checked?"Discoverable on":"Discoverable off")})}let Ms=null;function mt(e){O("#/giftbattles")}function an(){Ms&&(clearInterval(Ms),Ms=null)}function X(e){return"$"+Number(e||0).toFixed(2)}function Kr(e){const t=Math.max(0,Math.ceil(e/1e3)),s=Math.floor(t/60),i=t%60;return`${s}:${String(i).padStart(2,"0")}`}function Lp(){return I("Gift Battles",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Gift battles need a local demo account so scores and history persist on this device.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Runs during Live · not a separate stream · voluntary support · TEST MODE"})}function Pp(){return`
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
    </div>`}function Ip(e){if(!e)return`
      <div class="card">
        <h3>Champion Spotlight</h3>
        <p class="muted" style="margin:0">No active champion today. Win a battle to claim the rest-of-day banner.</p>
      </div>`;const t=Math.max(0,(e.championUntil||0)-Date.now()),s=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4);return`
    <div class="card gb-champion" role="status">
      <div class="row wrap" style="gap:8px;align-items:center">
        <span class="gb-sticker-slot" aria-hidden="true">${da("battle-crown",{className:"gift-sticker gift-sticker--battle"}).html}</span>
        <div class="chip">Challenge Winner · rest of day</div>
      </div>
      <h3 class="gb-champion-name">${r(e.username)}</h3>
      <p class="muted" style="margin:0">
        Score ${r(X(e.score))} · ~${s}h ${i}m left today
        · ${r(e.mode||"demo")}
      </p>
    </div>`}function _p(e,t){return e?`
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
    </div>`}function qp(e){return`
    <div class="card gb-battle" data-gb-status="pending">
      <h3>Challenge pending</h3>
      <p><strong>${r(e.challenger.name)}</strong> challenged <strong>${r(e.opponent.name)}</strong></p>
      <p class="muted">Mode: ${r(e.mode)} · opponent must Accept or Decline (demo controls below).</p>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <button type="button" class="btn primary" id="gbAccept">Accept</button>
        <button type="button" class="btn ghost" id="gbDecline">Decline</button>
      </div>
    </div>`}function Bp(e){const t=Math.max(0,(e.endsAt||0)-Date.now()),s=Kr(t);return`
    <div class="card gb-battle" data-gb-status="active">
      <div class="gb-countdown" aria-live="polite" aria-atomic="true">
        <span class="gb-countdown-label">Time left</span>
        <span class="gb-countdown-clock" id="gbClock">${r(s)}</span>
      </div>
      <div class="gb-scoreboard" role="group" aria-label="Live battle scores">
        <div class="gb-side">
          <div class="muted">Challenger</div>
          <strong>${r(e.challenger.name)}</strong>
          <div class="gb-score" id="gbScoreA" aria-label="Challenger score ${r(X(e.scoreA))}">${r(X(e.scoreA))}</div>
        </div>
        <div class="gb-vs" aria-hidden="true">VS</div>
        <div class="gb-side">
          <div class="muted">Opponent</div>
          <strong>${r(e.opponent.name)}</strong>
          <div class="gb-score" id="gbScoreB" aria-label="Opponent score ${r(X(e.scoreB))}">${r(X(e.scoreB))}</div>
        </div>
      </div>
      <p class="muted gb-score-text" id="gbScoreText">
        Live score: ${r(e.challenger.name)} ${r(X(e.scoreA))} —
        ${r(e.opponent.name)} ${r(X(e.scoreB))}
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
    </div>`}function Op(e){var a,n;let t="Tie",s="Equal voluntary support · recognition for both";e.result==="win"&&e.winnerName?(t=`Winner · ${e.winnerName}`,s="Recognition only — no opponent funds transferred"):e.result==="declined"&&(t="Declined",s="Challenge was declined");const i=e.result==="win"?da("battle-win",{className:"gift-sticker gift-sticker--battle"}).html:"";return`
    <div class="card gb-battle gb-ended" data-gb-status="ended">
      <div class="row wrap" style="gap:8px;align-items:center">
        ${i?`<span class="gb-sticker-slot" aria-hidden="true">${i}</span>`:""}
        <div class="chip">${e.result==="win"?"Winner":e.result==="tie"?"Tie":"Ended"}</div>
      </div>
      <h3 class="gb-winner-banner">${r(t)}</h3>
      <p class="muted">${r(s)}</p>
      <p class="gb-score-text" style="margin:12px 0">
        Final: ${r(((a=e.challenger)==null?void 0:a.name)||"?")} ${r(X(e.scoreA))} —
        ${r(((n=e.opponent)==null?void 0:n.name)||"?")} ${r(X(e.scoreB))}
      </p>
      <button type="button" class="btn primary" id="gbClear">New challenge</button>
    </div>`}function Np(e,t){var a;const i=jn().map(n=>`<option value="${r(n.id)}">${r(n.name)} — ${r(n.bio)}</option>`).join("");return`
    <div class="card">
      <h3>Start a challenge</h3>
      <p class="muted">You are the challenger. Pick a demo opponent. ${e?"Live mode will record your gifts through Live support stubs.":"No live session — sandbox mode."}</p>
      ${t.invitationsEnabled?"":'<p class="gb-warn">Invitations are disabled in prefs — enable below to challenge.</p>'}
      <label class="field">
        <span>Opponent</span>
        <select id="gbOpponent">${i}</select>
      </label>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        ${e?`<button type="button" class="btn primary" id="gbStartLive" ${t.invitationsEnabled?"":"disabled"}>Challenge (Live mode)</button>`:""}
        <button type="button" class="btn ${e?"ghost":"primary"}" id="gbStartSandbox" ${t.invitationsEnabled?"":"disabled"}>
          Demo battle sandbox
        </button>
        <button type="button" class="btn ghost" id="gbTopUp">Add $10 demo wallet</button>
      </div>
      <p class="muted" style="margin:10px 0 0">Wallet: <strong id="gbWalletBal">${r(X(((a=M().wallet)==null?void 0:a.balance)||0))}</strong> · TEST MODE</p>
    </div>`}function jp(){const e=Xi(10),t=e.length?e.map((s,i)=>`<li class="gb-day-row">${tt("battle-win",{className:"gift-sticker gift-sticker--xs"})}<span class="chip">#${i+1}</span><strong>${r(s.username)}</strong></li>`).join(""):'<li class="muted">No winners yet today · win a 60s battle</li>';return`
    <div class="card gb-day-board" id="gbDayWinners">
      <div class="row wrap" style="justify-content:space-between;gap:8px">
        <h3 style="margin:0">Today&apos;s winners</h3>
        <span class="chip">${e.length}/10 · end of day</span>
      </div>
      <p class="muted" style="margin:6px 0 8px;font-size:12px">Sticker board · recognition only · TEST MODE</p>
      <ol class="gb-list gb-day-list">${t}</ol>
    </div>`}function Rp(){const e=fl(12),t=bl(15),s=e.length?e.map(a=>{var l,o;const n=a.result==="win"?`Winner ${a.winnerName}`:a.result==="tie"?"Tie":a.result||a.status;return`<li>
            <strong>${r(n)}</strong>
            <span class="muted"> · ${r(((l=a.challenger)==null?void 0:l.name)||"?")} ${r(X(a.scoreA))} vs ${r(((o=a.opponent)==null?void 0:o.name)||"?")} ${r(X(a.scoreB))} · ${r(N(a.endedAt||a.createdAt||0))} · ${r(a.mode||"")}</span>
          </li>`}).join(""):'<li class="muted">No battles yet.</li>';return`
    <div class="card">
      <h3>Top winners (local)</h3>
      <ol class="gb-list">${t.length?t.map((a,n)=>`<li><span class="chip">#${n+1}</span> <strong>${r(a.username)}</strong> <span class="muted">${a.wins} win${a.wins===1?"":"s"} · ${r(X(a.points))} battle pts</span></li>`).join(""):'<li class="muted">Win a battle to appear here.</li>'}</ol>
    </div>
    <div class="card">
      <h3>Battle history</h3>
      <ul class="gb-list">${s}</ul>
    </div>`}function Fp(e){return`
    <div class="card">
      <h3>Battle prefs</h3>
      <label class="toggle"><span>Allow battle invitations</span>
        <input type="checkbox" id="gbPrefInvites" ${e.invitationsEnabled?"checked":""}/>
      </label>
      <p class="muted" style="margin:8px 0 0">When off, new challenges are blocked. Existing active battles can still finish.</p>
    </div>`}function Gp(){const{user:e,live:t}=M();if(!e)return Lp();Ji();const s=Yi(),i=Wi(),a=hl(),n=!!(t&&!t.endedAt);let l="";(s==null?void 0:s.status)==="pending"?l=qp(s):(s==null?void 0:s.status)==="active"?l=Bp(s):(s==null?void 0:s.status)==="ended"?l=Op(s):l=Np(n,i);const o=`
    ${Pp()}
    ${Ip(a)}
    ${jp()}
    ${_p(n,t)}
    ${l}
    ${Rp()}
    ${Fp(i)}
  `;return I("Gift Battles",o,{lead:"Runs during Live · not a separate stream · 60s voluntary gift battles · not wagers · TEST MODE",badge:(s==null?void 0:s.status)==="active"?"BATTLE":a?"CHAMP":void 0})}function zp(e){var i,a,n,l,o,c,d;an(),(i=e.querySelector("#gbPrefInvites"))==null||i.addEventListener("change",p=>{ll({invitationsEnabled:p.target.checked}),g(p.target.checked?"Invitations on":"Invitations off")}),(a=e.querySelector("#gbTopUp"))==null||a.addEventListener("click",()=>{var m;Bs(10,"Gift battle demo top-up · TEST MODE"),g("+$10 demo wallet");const p=e.querySelector("#gbWalletBal");p&&(p.textContent=X(((m=M().wallet)==null?void 0:m.balance)||0))});const t=p=>{const m=e.querySelector("#gbOpponent"),f=m==null?void 0:m.value,b=jn().find(w=>w.id===f),y=cl({opponentId:f,opponentName:b==null?void 0:b.name,mode:p});if((y==null?void 0:y.error)==="signin")return g("Sign in first");if((y==null?void 0:y.error)==="invites_disabled")return g("Invitations disabled");if((y==null?void 0:y.error)==="not_live")return g("Not live — use sandbox");if((y==null?void 0:y.error)==="battle_in_progress")return g("Battle already in progress");if((y==null?void 0:y.error)==="self")return g("Pick another fan");g("Challenge sent · waiting for accept"),mt()};(n=e.querySelector("#gbStartLive"))==null||n.addEventListener("click",()=>t("live")),(l=e.querySelector("#gbStartSandbox"))==null||l.addEventListener("click",()=>t("sandbox")),(o=e.querySelector("#gbAccept"))==null||o.addEventListener("click",()=>{const p=dl();if((p==null?void 0:p.error)==="no_pending")return g("No pending challenge");if((p==null?void 0:p.error)==="invites_disabled")return g("Invitations disabled");g("Battle started · 1:00"),mt()}),(c=e.querySelector("#gbDecline"))==null||c.addEventListener("click",()=>{const p=ul();if(p!=null&&p.error)return g(String(p.error));g("Challenge declined"),mt()}),(d=e.querySelector("#gbClear"))==null||d.addEventListener("click",()=>{const p=pl();if(p!=null&&p.error)return g("Battle still running");mt()}),e.querySelectorAll("[data-gb-gift]").forEach(p=>{p.addEventListener("click",()=>{var h;const m=gl({side:p.dataset.gbGift,kind:p.dataset.kind||"gift",amount:Number(p.dataset.amt)||2,label:p.dataset.label||""});if((m==null?void 0:m.error)==="signin")return g("Sign in first");if((m==null?void 0:m.error)==="no_active"||(m==null?void 0:m.error)==="ended")return g("No active battle");if((m==null?void 0:m.error)==="offline")return g("Live offline — use sandbox");if((m==null?void 0:m.error)==="insufficient")return g("Need wallet credits");if(g(p.dataset.gbGift==="opponent"?"Opponent support (demo)":"Support sent · demo"),((h=m.battle)==null?void 0:h.status)==="ended"){g(m.battle.result==="win"?`Winner · ${m.battle.winnerName}`:"Tie!"),mt();return}const f=e.querySelector("#gbScoreA"),b=e.querySelector("#gbScoreB"),y=e.querySelector("#gbScoreText"),w=m.battle;f&&b&&w?(f.textContent=X(w.scoreA),f.setAttribute("aria-label",`Challenger score ${X(w.scoreA)}`),b.textContent=X(w.scoreB),b.setAttribute("aria-label",`Opponent score ${X(w.scoreB)}`),y&&(y.textContent=`Live score: ${w.challenger.name} ${X(w.scoreA)} — ${w.opponent.name} ${X(w.scoreB)}`)):mt()})});const s=e.querySelector("#gbClock");s&&(Ms=setInterval(()=>{const p=Ji();if(!p||p.status==="ended"){an(),(p==null?void 0:p.status)==="ended"&&g(p.result==="win"?`Winner · ${p.winnerName}`:"Tie!"),mt();return}const m=Math.max(0,(p.endsAt||0)-Date.now());s.textContent=Kr(m)},250))}function be(){O("#/multiguest")}function Up(e){return(String(e||"?").trim().slice(0,2)||"?").toUpperCase()}function Vp(e){const t=M().user;return!t||!e?!1:(t.following||[]).includes(e)}function ua(e){return((e==null?void 0:e.guests)||[]).filter(t=>t.status==="joined")}function Hp(e){return((e==null?void 0:e.guests)||[]).filter(t=>t.status==="invited")}function Pi(e,t){var i,a;return`${Number(((a=(i=e==null?void 0:e.giftSplit)==null?void 0:i.shares)==null?void 0:a[t])||0).toFixed(0)}%`}function Kp(){return I("Multi-Guest Live",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Start a multi-guest demo session as host. No camera / WebRTC — fake stage tiles only.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Invite 2–4 co-hosts · disclosed gift splits · TEST MODE"})}function Wp(){return`
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
    </div>`}function hi({role:e,name:t,sub:s,muted:i,empty:a,followId:n}){if(a)return`
      <div class="mg-tile mg-tile-empty" aria-label="Empty guest slot">
        <div class="mg-avatar mg-avatar-empty">+</div>
        <div class="mg-tile-name muted">Open slot</div>
        <div class="mg-tile-sub muted">Invite a guest</div>
      </div>`;const l=i?'<span class="chip">Muted</span>':"",o=n&&n!=="dbs"?Vp(n)?`<button class="btn ghost mg-follow" data-follow="${r(n)}" data-on="1">Following</button>`:`<button class="btn ghost mg-follow" data-follow="${r(n)}" data-on="0">Follow</button>`:n==="dbs"?'<a class="btn ghost" href="#/profile">Follow PIKK</a>':"";return`
    <div class="mg-tile ${e==="host"?"mg-tile-host":""} ${i?"mg-muted":""}">
      <div class="mg-avatar" aria-hidden="true">${r(Up(t))}</div>
      <div class="mg-tile-name">${r(t)}</div>
      <div class="mg-tile-sub">${r(s||"")} ${l}</div>
      <div class="mg-tile-actions">${o}</div>
    </div>`}function Yp(e){var n,l;const t=ua(e),s=[];s.push(hi({role:"host",name:e.hostName,sub:"Host",followId:e.hostId===((n=M().user)==null?void 0:n.id)?"dbs":e.hostId}));for(let o=0;o<(e.maxGuests||4);o++){const c=t[o];c?s.push(hi({role:"guest",name:c.username,sub:"Guest",muted:c.muted,followId:c.id})):s.push(hi({empty:!0}))}const i=(l=e.giftSplit)!=null&&l.disclosed?'<span class="chip">Split disclosed</span>':'<span class="chip">Split pending</span>',a=e.broadcastReady?'<span class="chip">Broadcast ready</span>':'<span class="chip">Setup</span>';return`
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
          ${a}
          ${i}
        </div>
      </div>
      <p class="muted mg-stage-note">TEST MODE · placeholder tiles · no camera / bandwidth stream</p>
      <div class="mg-grid" role="list">${s.join("")}</div>
      <div class="row wrap" style="gap:8px;margin-top:12px">
        <a class="btn ghost" href="#/music">PIKK Music</a>
        <a class="btn ghost" href="#/live">Solo Live</a>
        <button class="btn ghost danger" id="mgEnd">End session</button>
      </div>
    </div>`}function Qp(e){const t=vl(),s=new Set((e.guests||[]).filter(p=>p.status==="invited"||p.status==="joined").map(p=>p.id)),i=t.filter(p=>p.id!==e.hostId&&!s.has(p.id)),a=Hp(e),n=ua(e),l=i.length?i.map(p=>`<option value="${r(p.id)}">${r(p.username)} — ${r(p.bio||"demo")}</option>`).join(""):'<option value="">No more demo guests</option>',o=a.length?a.map(p=>`
        <li class="mg-guest-row">
          <span><strong>@${r(p.username)}</strong> <span class="chip">Invited</span></span>
          <span class="row wrap" style="gap:6px">
            <button class="btn primary mg-accept" data-id="${r(p.id)}">Accept (sim)</button>
            <button class="btn ghost mg-decline" data-id="${r(p.id)}">Decline</button>
          </span>
        </li>`).join(""):'<li class="muted">No pending invites.</li>',c=n.length?n.map(p=>`
        <li class="mg-guest-row">
          <span>
            <strong>@${r(p.username)}</strong>
            ${p.muted?'<span class="chip">Muted</span>':'<span class="chip">On stage</span>'}
            <span class="muted" style="font-size:12px"> · gift ${r(Pi(e,p.id))}</span>
          </span>
          <span class="row wrap" style="gap:6px">
            <button class="btn ghost mg-mute" data-id="${r(p.id)}" data-muted="${p.muted?"1":"0"}">
              ${p.muted?"Unmute":"Mute"}
            </button>
            <button class="btn ghost mg-leave" data-id="${r(p.id)}">Leave (sim)</button>
            <button class="btn ghost danger mg-remove" data-id="${r(p.id)}">Remove</button>
          </span>
        </li>`).join(""):'<li class="muted">No guests on stage yet — invite below.</li>',d=n.length+a.length>=(e.maxGuests||4);return`
    <div class="card">
      <h3>Guests &amp; moderation</h3>
      <p class="muted" style="margin:0 0 8px">Host simulates Accept/Decline. Up to ${r(String(e.maxGuests||4))} guests.</p>
      <ul class="mg-list">${c}</ul>
      <h4 style="margin:14px 0 6px">Pending invites</h4>
      <ul class="mg-list">${o}</ul>
      <div class="field" style="margin-top:12px">
        <span>Invite demo guest</span>
        <div class="row wrap" style="gap:8px;margin-top:6px">
          <select id="mgInviteSelect" ${d||!i.length?"disabled":""}>${l}</select>
          <button class="btn primary" id="mgInviteBtn" ${d||!i.length?"disabled":""}>Invite</button>
        </div>
      </div>
      ${d?'<p class="muted" style="margin:8px 0 0">Guest slots full (joined + pending).</p>':""}
    </div>`}function Jp(e){var l,o;const t=ua(e),s=[{id:e.hostId,username:e.hostName,role:"Host"},...t.map(c=>({id:c.id,username:c.username,role:"Guest"}))],i=((l=e.giftSplit)==null?void 0:l.mode)||"equal",a=!!((o=e.giftSplit)!=null&&o.disclosed),n=s.map(c=>{var p,m;const d=Number(((m=(p=e.giftSplit)==null?void 0:p.shares)==null?void 0:m[c.id])||0);return`
        <li class="mg-split-row">
          <span><strong>@${r(c.username)}</strong> <span class="chip">${r(c.role)}</span></span>
          ${i==="custom"&&!a?`<label class="mg-pct"><input type="number" min="0" max="100" step="1" class="mg-share-input" data-id="${r(c.id)}" value="${r(String(d))}" /> %</label>`:`<span class="chip">${r(String(Math.round(d)))}%</span>`}
        </li>`}).join("");return`
    <div class="card mg-split">
      <h3>Gift split disclosure</h3>
      <p class="muted">Required before broadcast when multiple hosts/guests share gifts. Display-only · TEST MODE · not a real payout.</p>
      <div class="row wrap" style="gap:8px;margin:10px 0">
        <button class="btn ${i==="equal"?"primary":"ghost"}" id="mgSplitEqual">Equal split</button>
        <button class="btn ${i==="custom"?"primary":"ghost"}" id="mgSplitCustom">Custom %</button>
      </div>
      <ul class="mg-list">${n}</ul>
      <p class="muted" style="margin:8px 0 0">Host share: <strong>${r(Pi(e,e.hostId))}</strong>
        · Guests: ${t.length?t.map(c=>`@${r(c.username)} ${r(Pi(e,c.id))}`).join(" · "):"none yet"}</p>
      ${a?`<p class="mg-ok" style="margin:10px 0 0">✓ Split disclosed ${e.giftSplit.disclosedAt?"· "+N(e.giftSplit.disclosedAt):""}. Broadcast ready (demo).</p>`:`<div class="row wrap" style="gap:8px;margin-top:12px">
               ${i==="custom"?'<button class="btn" id="mgSplitApply">Apply custom %</button>':""}
               <button class="btn primary" id="mgDisclose">Disclose &amp; ready broadcast</button>
             </div>
             <p class="muted" style="margin:8px 0 0">Custom % must total 100 among host + joined guests.</p>`}
    </div>`}function Xp(e){return`
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
    </div>`}function nn(e){return e.length?`
    <div class="card">
      <h3>Recent multi-guest sessions</h3>
      <ul class="mg-list">${e.slice(0,8).map(s=>{var a;const i=(s.guests||[]).filter(n=>n.status==="joined"||n.joinedAt).length;return`<li><strong>${r(s.title)}</strong> · ${r(String(i))} guests · ${N(s.endedAt||s.startedAt)}
        ${(a=s.giftSplit)!=null&&a.disclosed?" · split disclosed":""}</li>`}).join("")}</ul>
    </div>`:`
      <div class="card">
        <h3>Recent multi-guest sessions</h3>
        <p class="muted" style="margin:0">No ended sessions yet.</p>
      </div>`}function Zp(e){return`
    <div class="card">
      <h3>Start multi-guest session</h3>
      <p class="muted">You host as <strong>@${r(e.username)}</strong>. Invite demo contacts next — no real stream.</p>
      <div class="field" style="margin-top:10px">
        <span>Session title</span>
        <input id="mgTitle" maxlength="80" placeholder="e.g. Friday collab freestyle" value="PIKK Multi-Guest Demo" />
      </div>
      <button class="btn primary" id="mgStart" style="margin-top:12px">Start as host</button>
    </div>`}function em(){const t=M().user;if(!t)return Kp();Qs();const s=rs(),i=yl();return!s||s.endedAt?I("Multi-Guest Live",`${Wp()}${Zp(t)}${nn(i)}`,{lead:"2–4 co-hosts · gift split disclosure · TEST MODE"}):I("Multi-Guest Live",`${Yp(s)}${Qp(s)}${Jp(s)}${Xp(s)}${nn(i)}`,{lead:"Active collab session · fake stage · TEST MODE"})}function tm(e){var s,i,a,n,l,o,c,d,p;if(!e)return;(s=e.querySelector("#mgStart"))==null||s.addEventListener("click",()=>{var b;const m=((b=e.querySelector("#mgTitle"))==null?void 0:b.value)||"",f=wl(m);if(f.error==="signin")return g("Sign in first");if(f.error==="session_in_progress")return g("Session already active");g("Multi-guest session started"),be()}),(i=e.querySelector("#mgEnd"))==null||i.addEventListener("click",()=>{const m=Cl();if(m.error)return g(m.error==="host_only"?"Host only":"No session");g("Session ended"),be()}),(a=e.querySelector("#mgInviteBtn"))==null||a.addEventListener("click",()=>{var b,y;const m=(b=e.querySelector("#mgInviteSelect"))==null?void 0:b.value;if(!m)return g("Pick a guest");const f=Sl(m);if(f.error==="full")return g("Guest slots full");if(f.error==="already_invited")return g("Already invited");if(f.error)return g("Invite failed: "+f.error);g("Invited @"+(((y=f.guest)==null?void 0:y.username)||m)),be()}),e.querySelectorAll(".mg-accept").forEach(m=>{m.addEventListener("click",()=>{var b;const f=kl(m.getAttribute("data-id"));if(f.error==="full")return g("Stage full");if(f.error)return g("Accept failed");g("@"+(((b=f.guest)==null?void 0:b.username)||"")+" joined"),be()})}),e.querySelectorAll(".mg-decline").forEach(m=>{m.addEventListener("click",()=>{if($l(m.getAttribute("data-id")).error)return g("Decline failed");g("Invite declined"),be()})}),e.querySelectorAll(".mg-mute").forEach(m=>{m.addEventListener("click",()=>{const f=m.getAttribute("data-id"),b=m.getAttribute("data-muted")==="1";if(Al(f,!b).error)return g("Mute failed");g(b?"Unmuted":"Muted"),be()})}),e.querySelectorAll(".mg-leave").forEach(m=>{m.addEventListener("click",()=>{if(xl(m.getAttribute("data-id")).error)return g("Leave failed");g("Guest left"),be()})}),e.querySelectorAll(".mg-remove").forEach(m=>{m.addEventListener("click",()=>{if(El(m.getAttribute("data-id")).error)return g("Remove failed");g("Guest removed"),be()})}),e.querySelectorAll(".mg-follow").forEach(m=>{m.addEventListener("click",()=>{const f=m.getAttribute("data-follow");m.getAttribute("data-on")==="1"?(Vs(f),g("Unfollowed")):(Us(f),g("Following")),be()})}),(n=e.querySelector("#mgSplitEqual"))==null||n.addEventListener("click",()=>{if(Kt({mode:"equal",disclose:!1}).error)return g("Split failed");g("Equal split applied"),be()}),(l=e.querySelector("#mgSplitCustom"))==null||l.addEventListener("click",()=>{var b;const m=rs();if(Kt({mode:"custom",shares:((b=m==null?void 0:m.giftSplit)==null?void 0:b.shares)||{},disclose:!1}).error)return g("Could not switch to custom");g("Custom split — edit % then Apply"),be()}),(o=e.querySelector("#mgSplitApply"))==null||o.addEventListener("click",()=>{const m={};e.querySelectorAll(".mg-share-input").forEach(b=>{m[b.getAttribute("data-id")]=Number(b.value)||0});const f=Kt({mode:"custom",shares:m,disclose:!1});if(f.error==="split_total")return g(`Percents total ${f.total}% — need 100%`);if(f.error)return g("Apply failed");g("Custom split saved"),be()}),(c=e.querySelector("#mgDisclose"))==null||c.addEventListener("click",()=>{var b;const m=rs();if(((b=m==null?void 0:m.giftSplit)==null?void 0:b.mode)==="custom"){const y={},w=e.querySelectorAll(".mg-share-input");if(w.length){w.forEach(v=>{y[v.getAttribute("data-id")]=Number(v.value)||0});const h=Kt({mode:"custom",shares:y,disclose:!1});if(h.error==="split_total")return g(`Percents total ${h.total}% — need 100%`)}}const f=Dl();if(f.error==="split_total")return g(`Percents total ${f.total}% — need 100%`);if(f.error)return g("Disclose failed");g("Gift split disclosed · broadcast ready (demo)"),be()});const t=()=>{const m=e.querySelector("#mgChatInput"),f=(m==null?void 0:m.value)||"",b=Tl(f);if(b.error==="empty")return g("Type a message");if(b.error)return g("Chat failed");m&&(m.value=""),be()};(d=e.querySelector("#mgChatSend"))==null||d.addEventListener("click",t),(p=e.querySelector("#mgChatInput"))==null||p.addEventListener("keydown",m=>{m.key==="Enter"&&(m.preventDefault(),t())})}function ve(e){O(e?`#/fanclubs?club=${encodeURIComponent(e)}`:"#/fanclubs")}function ze(e="DemoFan"){const{user:t}=M();if(t)return t;const s=It(e);return g(`Signed in as ${e} · local demo`),s||M().user}function Wr(e){return e==="paid"?"Paid / Skeet+":e==="members"?"Members only":"Public"}function sm(e,t){const s=t===e.id,i=[e.official?'<span class="chip">Official DBS</span>':"",`<span class="chip">${r(Wr(e.privacy))}</span>`,`<span class="chip">${e.memberCount||0} members</span>`].filter(Boolean).join(" ");return`<button type="button" class="fanclub-card${s?" on":""}" data-open-club="${r(e.id)}" style="text-align:left;width:100%;display:block;background:transparent;border:1px solid ${s?"var(--accent, #f59e0b)":"var(--line)"};border-radius:14px;padding:12px;margin:0 0 10px;cursor:pointer;color:inherit">
    <div class="row" style="gap:10px;align-items:center">
      <img src="${r(e.graphic||"/brand/logo-dbs-v3@2x.webp")}" alt="" width="48" height="48" style="border-radius:12px;object-fit:cover;background:#111" />
      <div style="flex:1;min-width:0">
        <strong>${r(e.name)}</strong>
        <div class="muted" style="font-size:12px;margin-top:2px">Host @${r(e.hostName)} · Discover DatBoiSkeet</div>
        <div class="row wrap" style="gap:6px;margin-top:6px">${i}</div>
      </div>
    </div>
  </button>`}function im(e){const t=gs(e);if(!t)return'<div class="card"><p class="muted" style="margin:0">Club not found.</p><button class="btn" data-back-list>Back to clubs</button></div>';const s=M().user,i=Qn(t.id),a=ic(t.id),n=ls(t.id),l=Jn(t.id),o=wt(),c=l.ok?"":`<div class="card" style="border-color:rgba(245,158,11,.35)">
          <h3 style="margin:0 0 6px">${t.privacy==="paid"?"Skeet+ room":"Members only"}</h3>
          <p class="muted" style="margin:0 0 10px">${t.privacy==="paid"?"This room uses membership permissions (Skeet+ or higher). TEST MODE unlock below — no real charge.":"Join the club to enter the discussion room."}</p>
          ${t.privacy==="paid"?`<button class="btn primary" id="fcUnlockSkeet">Unlock Skeet+ · TEST MODE</button>
                 <a class="btn" href="#/pricing">Pricing</a>
                 <p class="chip" style="margin-top:8px">Current membership: ${r(o||"none")}</p>`:`<button class="btn primary" data-join="${r(t.id)}">Join club</button>`}
        </div>`,d=l.ok?ac(t.id):[],p=l.ok?d.length?d.map(f=>{const b=n?`<div class="row wrap" style="gap:6px;margin-top:6px">
                   <button class="btn ghost" data-pin="${r(f.id)}" data-club="${r(t.id)}">${f.pinned?"Unpin":"Pin"} · mod</button>
                   <button class="btn ghost" data-remove="${r(f.id)}" data-club="${r(t.id)}">Remove · mod</button>
                 </div>`:"";return`<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between;gap:8px">
                <strong>@${r(f.username)}</strong>
                <span class="muted" style="font-size:12px">${r(N(f.at))}${f.pinned?" · pinned":""}</span>
              </div>
              <p style="margin:6px 0 0">${r(f.text)}</p>
              ${b}
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
            <span class="chip">${r(Wr(t.privacy))}</span>
            <span class="chip">${t.memberCount||0} members</span>
            <span class="chip">${(t.followers||[]).length} following</span>
          </div>
        </div>
      </div>
      <div class="row wrap" style="gap:8px;margin-top:14px">
        ${i?`<button class="btn" data-leave="${r(t.id)}">Leave club</button>`:`<button class="btn primary" data-join="${r(t.id)}">Join club</button>`}
        ${a?`<button class="btn" data-unfollow="${r(t.id)}">Unfollow</button>`:`<button class="btn" data-follow="${r(t.id)}">Follow · optional</button>`}
        <a class="btn" href="#/community">Lounge</a>
        <a class="btn" href="#/music">Music</a>
        <a class="btn" href="#/explore">Explore</a>
      </div>
      <p class="muted" style="font-size:12px;margin:10px 0 0">Follows are optional — DBS never forces a follow. Channel-style Lounge (Discord-inspired UX) — music-first, DatBoiSkeet branded.</p>
      ${s?"":'<p class="chip" style="margin-top:8px">Sign in to join · local demo</p>'}
      ${n?'<p class="chip" style="margin-top:8px">Mod tools · TEST MODE</p>':""}
    </div>
    ${c}
    ${l.ok?`<div class="card">
             <h3 style="margin:0 0 4px">Discussion</h3>
             <p class="muted" style="margin:0 0 8px;font-size:12px">Local posts in dbs_v1 · mods can pin/remove</p>
             <ul class="list-plain" id="fcPosts">${p}</ul>
           </div>
           ${m}`:""}
  `}function am(e){var o;je();const t=Wn(),s=((o=e==null?void 0:e.query)==null?void 0:o.club)||"",{user:i}=M(),a=t.map(c=>sm(c,s)).join(""),l=s?im(s):`
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
        ${a||'<p class="muted">No clubs yet.</p>'}
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
        ${i?"":'<button class="btn" type="button" id="fcSignIn">Sign in demo</button>'}
        <button class="btn ghost" type="button" id="fcAdmin">Toggle demo admin</button>
        <p class="chip" style="margin-top:10px">TEST MODE · no real payments · DBS branding stays prominent</p>
      </form>
    </div>`}
    `;return I("Fan Clubs",l,{lead:"Creator communities inside DBS Lounge · DEMO.",badge:"Phase 2 demo"})}function nm(e){var t,s,i,a,n,l,o;e.querySelectorAll("[data-open-club]").forEach(c=>{c.addEventListener("click",()=>ve(c.getAttribute("data-open-club")))}),(t=e.querySelector("[data-back-list]"))==null||t.addEventListener("click",()=>ve()),(s=e.querySelector("#fcSignIn"))==null||s.addEventListener("click",()=>{ze("DemoFan"),ve()}),(i=e.querySelector("#fcAdmin"))==null||i.addEventListener("click",()=>{var d,p;ze("DemoAdmin");const c=!Z();ds(c),g(c?"Demo admin on":"Demo admin off"),ve(((d=e.querySelector("[data-leave],[data-join]"))==null?void 0:d.getAttribute("data-leave"))||((p=e.querySelector("[data-join]"))==null?void 0:p.getAttribute("data-join"))||void 0)}),(a=e.querySelector("#fcSeedBtn"))==null||a.addEventListener("click",()=>{je({force:!0}),g("Demo clubs reseeded"),ve()}),(n=e.querySelector("#fcCreateForm"))==null||n.addEventListener("submit",c=>{var y,w,h,v,$;c.preventDefault(),ze("DemoCreator");const d=(y=e.querySelector("#fcName"))==null?void 0:y.value,p=(w=e.querySelector("#fcDesc"))==null?void 0:w.value,m=((h=e.querySelector("#fcGraphic"))==null?void 0:h.value)||"/brand/logo-dbs-v3@2x.webp",f=((v=e.querySelector("#fcPrivacy"))==null?void 0:v.value)||"public",b=Zl({name:d,description:p,graphic:m,privacy:f});if(b.error==="signin")return g("Sign in required");if(b.error==="name")return g("Name required");g("Club created · TEST MODE"),ve(($=b.club)==null?void 0:$.id)}),e.querySelectorAll("[data-join]").forEach(c=>{c.addEventListener("click",()=>{ze();const d=c.getAttribute("data-join");if(Yn(d).error)return g("Could not join");g("Joined club"),ve(d)})}),e.querySelectorAll("[data-leave]").forEach(c=>{c.addEventListener("click",()=>{ze();const d=c.getAttribute("data-leave"),p=ec(d);if(p.error==="host")return g("Host cannot leave — transfer later");if(p.error)return g("Could not leave");g("Left club"),ve(d)})}),e.querySelectorAll("[data-follow]").forEach(c=>{c.addEventListener("click",()=>{ze();const d=c.getAttribute("data-follow");tc(d),g("Following · optional"),ve(d)})}),e.querySelectorAll("[data-unfollow]").forEach(c=>{c.addEventListener("click",()=>{ze();const d=c.getAttribute("data-unfollow");sc(d),g("Unfollowed"),ve(d)})}),(l=e.querySelector("#fcUnlockSkeet"))==null||l.addEventListener("click",()=>{ze(),zs("skeet+",!0),g("Skeet+ unlocked · TEST MODE");const c=new URLSearchParams(location.hash.split("?")[1]||"");ve(c.get("club")||void 0)}),(o=e.querySelector("#fcPostForm"))==null||o.addEventListener("submit",c=>{var b;c.preventDefault(),ze();const p=new URLSearchParams(location.hash.split("?")[1]||"").get("club"),m=(b=e.querySelector("#fcPostText"))==null?void 0:b.value,f=nc(p,m);if(f.error==="gated")return g("Room gated");if(f.error==="empty")return g("Write something");if(f.error)return g("Could not post");g("Posted"),ve(p)}),e.querySelectorAll("[data-pin]").forEach(c=>{c.addEventListener("click",()=>{const d=c.getAttribute("data-club");if(rc(d,c.getAttribute("data-pin")).error==="mod")return g("Mods only");g("Pin toggled · TEST MODE"),ve(d)})}),e.querySelectorAll("[data-remove]").forEach(c=>{c.addEventListener("click",()=>{const d=c.getAttribute("data-club");if(oc(d,c.getAttribute("data-remove")).error==="mod")return g("Mods only");g("Post removed · TEST MODE"),ve(d)})})}function Ii(){O("#/loyalty")}function _i(){const{user:e}=M();if(e)return e;const t=It("LoyalFan");return g("Signed in as LoyalFan · local demo"),t||M().user}function Es(e,t,s){var a;_i();const i=Nc(e,{points:t,note:s});if(i.error==="signin")return g("Sign in required");if(i.error==="cooldown")return g("Anti-farming · wait a few seconds");if(i.error==="daily_cap")return g("Daily cap hit · come back tomorrow (demo)");if(i.error)return g("Could not record");(i.newBadges||[]).filter(n=>n!=="day_one"||(i.loyalty.badges||[]).includes("day_one")),(a=i.newBadges)!=null&&a.length?g(`+${t} pts · badge: ${i.newBadges.join(", ")}`):g(`+${t} pts · ${s}`),Ii()}function rm(){const{user:e}=M(),t=hs(),i=br().map(l=>{const o=l.unlocked;return`<div class="card" style="opacity:${o?1:.55};margin:0">
        <div class="row" style="justify-content:space-between;gap:8px">
          <strong>${r(l.name)}</strong>
          <span class="chip">${o?"Unlocked":"Locked"}</span>
        </div>
        <p class="muted" style="margin:6px 0 0;font-size:12px">${r(l.blurb)}</p>
      </div>`}).join(""),a=(t.history||[]).length===0?'<p class="muted" style="margin:0">No actions yet — try a listen tick or join a club.</p>':`<ul class="list-plain">${(t.history||[]).slice(0,12).map(l=>`<li style="padding:8px 0;border-top:1px solid rgba(255,255,255,.06)">
            <div class="row" style="justify-content:space-between">
              <span><strong>+${l.points}</strong> · ${r(l.note||l.kind)}</span>
              <span class="muted" style="font-size:12px">${r(N(l.at))}</span>
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
      <div style="display:grid;gap:10px">${i}</div>
    </div>

    <div class="card">
      <h3 style="margin:0 0 8px">Recent activity</h3>
      ${a}
    </div>

    <div class="card">
      <h3 style="margin:0 0 6px">Admin-ish rollup · optional</h3>
      <p class="muted" style="margin:0;font-size:12px">Future Admin Fan Loyalty dashboard (plan § Live Gift Effects) can list tenure, attendance, and opted-in history. This page stays fan-facing; no purchase-only ranking.</p>
    </div>
    `,{lead:"Recognition for healthy participation · DEMO.",badge:"Phase 2 demo"})}function om(e){var t,s,i,a,n,l;(t=e.querySelector("#loyListen"))==null||t.addEventListener("click",()=>Es("listen",5,"Authorized listening tick")),(s=e.querySelector("#loyLive"))==null||s.addEventListener("click",()=>Es("live",8,"Attended live (stub)")),(i=e.querySelector("#loyHelp"))==null||i.addEventListener("click",()=>Es("help",6,"Shared community helper tip")),(a=e.querySelector("#loyClub"))==null||a.addEventListener("click",()=>{_i(),je();const o=Wn(),c=o.find(d=>d.privacy==="public")||o[0];c&&Yn(c.id),Es("club",10,c?`Joined ${c.name}`:"Joined Fan Club")}),(n=e.querySelector("#loyPublic"))==null||n.addEventListener("change",o=>{_i(),Oc(o.target.checked),g(o.target.checked?"Public visibility on":"Achievements private"),Ii()}),(l=e.querySelector("#loyReset"))==null||l.addEventListener("click",()=>{jc(),g("Loyalty demo reset"),Ii()})}function gt(){O("#/openmic")}function bi(e="MicHopeful"){const{user:t}=M();if(t)return t;const s=It(e);return g(`Signed in as ${e} · local demo`),s||M().user}function rn(e){return`<span class="chip">${r(e==="approved"?"Approved":e==="rejected"?"Rejected":"Pending")}</span>`}function lm(){const e=Gc(),t=e.chipLabel||"House rotation",s=e.embed?He(e.embed,"rel=0"):"";return`
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
    </div>`}function cm(){Nt();const{user:e}=M(),t=Z(),s=Fc(),i=e?Ti().filter(c=>c.userId===e.id):[],a=t?Ti({status:"pending"}):[],n=s.length===0?'<p class="muted" style="margin:0">No approved performers yet.</p>':s.map(c=>`<article class="card" style="margin:0 0 10px">
              <div class="row" style="justify-content:space-between;gap:8px">
                <div>
                  <strong>${r(c.trackTitle)}</strong>
                  <div class="muted" style="font-size:12px">@${r(c.username)} · ${r(c.talent)}</div>
                </div>
                ${rn("approved")}
              </div>
              <p style="margin:8px 0 0">${r(c.profileNote||"Featured in PIKK Open Mic showcase.")}</p>
              <p class="muted" style="font-size:11px;margin:8px 0 0">Not a paid ranking · discovery showcase</p>
            </article>`).join(""),l=i.length===0?'<p class="muted" style="margin:0">You have no applications yet.</p>':`<ul class="list-plain">${i.map(c=>`<li style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
              <div class="row" style="justify-content:space-between">
                <strong>${r(c.trackTitle)}</strong>
                ${rn(c.status)}
              </div>
              <div class="muted" style="font-size:12px">${r(c.talent)} · ${r(N(c.at))}</div>
            </li>`).join("")}</ul>`,o=t?`<div class="card">
         <h3 style="margin:0 0 8px">Admin review · TEST MODE</h3>
         <p class="muted" style="margin:0 0 10px;font-size:12px">Approve for showcase or reject. Distinct from pay-to-win.</p>
         ${a.length===0?'<p class="muted" style="margin:0">No pending applications.</p>':a.map(c=>`<div style="padding:10px 0;border-top:1px solid rgba(255,255,255,.06)">
                     <strong>${r(c.trackTitle)}</strong> · @${r(c.username)} · ${r(c.talent)}
                     <p class="muted" style="margin:4px 0;font-size:12px">${r(c.profileNote)}</p>
                     <p class="chip">Rights certified: ${c.rightsCertified?"yes":"no"}</p>
                     <div class="row wrap" style="gap:8px;margin-top:8px">
                       <button class="btn primary" data-om-approve="${r(c.id)}">Approve</button>
                       <button class="btn" data-om-reject="${r(c.id)}">Reject</button>
                     </div>
                   </div>`).join("")}
       </div>`:"";return I("Open Mic",`
    ${lm()}

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
    `,{lead:"24/7 house catalog when idle · opt-in talent showcase · DEMO.",badge:"Phase 2 demo"})}function dm(e){var t,s,i,a,n;(t=e.querySelector("#omSignIn"))==null||t.addEventListener("click",()=>{bi(),gt()}),(s=e.querySelector("#omAdmin"))==null||s.addEventListener("click",()=>{bi("DemoAdmin");const l=!Z();ds(l),g(l?"Demo admin on":"Demo admin off"),gt()}),(i=e.querySelector("#omSeed"))==null||i.addEventListener("click",()=>{Nt({force:!0}),g("Open Mic demos reseeded"),gt()}),(a=e.querySelector("#omForm"))==null||a.addEventListener("submit",l=>{var d,p,m,f;l.preventDefault(),bi();const o=(d=e.querySelector("#omRights"))==null?void 0:d.checked,c=Uc({talent:(p=e.querySelector("#omTalent"))==null?void 0:p.value,trackTitle:(m=e.querySelector("#omTitle"))==null?void 0:m.value,profileNote:(f=e.querySelector("#omNote"))==null?void 0:f.value,rightsCertified:!!o});if(c.error==="rights")return g("Rights certification required");if(c.error==="title")return g("Title required");if(c.error==="pending")return g("You already have a pending application");if(c.error)return g("Could not submit");g("Application submitted · pending review"),gt()}),e.querySelectorAll("[data-om-approve]").forEach(l=>{l.addEventListener("click",()=>{if(Di(l.getAttribute("data-om-approve"),"approved").error==="admin")return g("Admin only");g("Approved · showcase"),gt()})}),e.querySelectorAll("[data-om-reject]").forEach(l=>{l.addEventListener("click",()=>{if(Di(l.getAttribute("data-om-reject"),"rejected","Demo reject").error==="admin")return g("Admin only");g("Rejected"),gt()})}),(n=e.querySelector("#omNextHouse"))==null||n.addEventListener("click",()=>{const l=zc();g("Next house · "+(l.chipLabel||"House")),gt()})}let Ce=null,Tt="all";try{const e=sessionStorage.getItem("dbs_shop_cat");e&&(Tt=e,sessionStorage.removeItem("dbs_shop_cat"));const t=sessionStorage.getItem("dbs_shop_preview");t&&(Ce=t,sessionStorage.removeItem("dbs_shop_preview"))}catch{}function Je(){O("#/profile-shop")}function Ze(e){return Ts.find(t=>t.id===e)||null}function Yr(e){return vr(e)}function um(e){const t={...e.equipped},s=Ce?Ze(Ce):null;if(s){const i=Yr(s);i&&(t[i]=s.id)}return t}function pm(e){return`rarity-${r(e||"rare")}`}function mm(e){return`$${Number(e).toFixed(2)}`}function gm(e){const{user:t}=M(),s=um(e),i=s.frame?Ze(s.frame):null,a=s.effect?Ze(s.effect):null,n=s.banner?Ze(s.banner):null,l=s.nameStyle?Ze(s.nameStyle):null,o=s.badge?Ze(s.badge):null,c=(t==null?void 0:t.username)||"DemoFan",d=e.reduceMotion,p=a?`shop-fx shop-fx--${r(a.id.replace(/^fx-/,""))}${d?" shop-fx--still":""}`:"",m=l?`shop-name shop-name--${r(l.id.replace(/^name-/,""))}`:"shop-name",f=i?`shop-avatar-frame shop-frame--${r(i.id.replace(/^frame-/,""))}`:"shop-avatar-frame";return`
    <div class="shop-preview card" id="shopPreview">
      <div class="row wrap" style="justify-content:space-between;gap:8px;margin-bottom:10px">
        <h3 style="margin:0">Live preview</h3>
        <span class="chip">CONCEPT</span>
      </div>
      <div class="${n?`shop-preview-banner shop-banner--${r(n.id.replace(/^ban-/,""))}`:"shop-preview-banner shop-banner--default"}" aria-hidden="true">
        <span class="shop-banner-emoji">${n?r(n.emoji):"🎧"}</span>
      </div>
      <div class="shop-preview-body ${p}">
        <div class="${f}">
          <div class="shop-avatar-inner">${r(c.slice(0,1).toUpperCase())}</div>
          ${i?`<span class="shop-frame-emoji" aria-hidden="true">${r(i.emoji)}</span>`:""}
        </div>
        <div class="shop-preview-meta">
          <div class="${m}">${r(c)}</div>
          <p class="muted small" style="margin:4px 0 0">Cosmetic preview only · not a status grant</p>
          ${o?`<span class="shop-cosmetic-badge" title="Cosmetic style — not Verified/Founder">${r(o.emoji)} ${r(o.name)}</span>`:'<span class="muted small">No cosmetic badge equipped</span>'}
        </div>
      </div>
      <div class="shop-equipped-row">
        ${["frame","effect","banner","nameStyle","badge"].map(y=>{const w=s[y],h=w?Ze(w):null,v=y==="nameStyle"?"Name":y.charAt(0).toUpperCase()+y.slice(1);return`<span class="shop-eq-chip ${h?"on":""}">${r(v)}: ${h?r(h.emoji+" "+h.name):"—"}</span>`}).join("")}
      </div>
    </div>`}function fm(e,t){const s=t.owned.includes(e.id),i=Yr(e),a=i&&t.equipped[i]===e.id,n=Ce===e.id;return`
    <article class="cosmetic-card ${pm(e.rarity)} ${n?"is-selected":""} ${s?"is-owned":""} ${a?"is-equipped":""}" data-id="${r(e.id)}">
      <div class="cosmetic-art" role="button" tabindex="0" data-preview="${r(e.id)}" aria-label="Preview ${r(e.name)}">
        <span class="cosmetic-emoji">${r(e.emoji)}</span>
        <span class="concept-flag">CONCEPT</span>
        ${s?'<span class="owned-flag">Owned</span>':""}
        ${a?'<span class="equipped-flag">Equipped</span>':""}
      </div>
      <div class="body">
        <div class="name">${r(e.name)}</div>
        <div class="meta">${r(e.category)} · ${r(e.rarity)}</div>
        <div class="price">${mm(e.price)} <span class="chip" style="margin-left:4px">TEST MODE</span></div>
        <div class="cosmetic-actions row wrap" style="gap:6px;margin-top:8px">
          <button type="button" class="btn ghost shop-act" data-act="preview" data-id="${r(e.id)}">Preview</button>
          ${s?a?`<button type="button" class="btn shop-act" data-act="unequip" data-slot="${r(i)}" data-id="${r(e.id)}">Unequip</button>`:`<button type="button" class="btn primary shop-act" data-act="equip" data-id="${r(e.id)}">Equip</button>`:`<button type="button" class="btn primary shop-act" data-act="unlock" data-id="${r(e.id)}">Unlock · TEST MODE</button>`}
        </div>
      </div>
    </article>`}function hm(){const e=et(),t=Tt==="all"?Ts:Ts.filter(n=>n.category===Tt),s=ro.map(n=>`<button type="button" class="shop-chip ${Tt===n.id?"on":""}" data-cat="${r(n.id)}" aria-pressed="${Tt===n.id?"true":"false"}">${r(n.label)}</button>`).join(""),i=t.length===0?'<p class="muted">No cosmetics in this category.</p>':`<div class="cosmetic-grid">${t.map(n=>fm(n,e)).join("")}</div>`,a=`
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

    ${gm(e)}

    <div class="card">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center;margin-bottom:10px">
        <h3 style="margin:0">Catalog · ${Ts.length} items</h3>
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
      ${i}
    </div>
  `;return I("Profile Shop",a,{lead:"PIKK digital cosmetics · live preview · CONCEPT / TEST MODE.",badge:"Phase 2 · CONCEPT"})}function bm(e){var s,i,a;e.querySelectorAll(".shop-chip").forEach(n=>{n.addEventListener("click",()=>{Tt=n.dataset.cat||"all",Je()})}),(s=e.querySelector("#shopReduceMotion"))==null||s.addEventListener("change",n=>{Zc(n.target.checked),g(n.target.checked?"Motion reduced":"Motion on"),Je()}),(i=e.querySelector("#shopBundle"))==null||i.addEventListener("click",()=>{var l;const n=Yc();g(`Starter bundle unlocked · ${((l=n.unlocked)==null?void 0:l.length)||0} items · no charge`),Je()}),(a=e.querySelector("#shopReset"))==null||a.addEventListener("click",()=>{ed(),Ce=null,g("Demo inventory reset"),Je()});const t=n=>{Ce=n,g("Preview updated"),Je()};e.querySelectorAll("[data-preview]").forEach(n=>{n.addEventListener("click",()=>t(n.dataset.preview)),n.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),t(n.dataset.preview))})}),e.querySelectorAll(".shop-act").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.act,o=n.dataset.id;if(l==="preview")return t(o);if(l==="unlock"){const c=Wc(o);return c.error?g("Could not unlock"):(Ce=o,g(c.already?"Already owned · TEST MODE":"Unlocked · TEST MODE · no charge"),Je())}if(l==="equip"){const c=Jc(o);return c.error==="not_owned"?g("Unlock first · TEST MODE"):c.error?g("Could not equip"):(Ce=o,g("Equipped"),Je())}if(l==="unequip"){const c=n.dataset.slot;if(Xc(c).error)return g("Could not unequip");const p=Ce?Ze(Ce):null;return p&&vr(p)===c&&(Ce=null),g("Unequipped"),Je()}})})}const vm=["All","Hats","Shirts","Jackets"],ym=["Ladies Shop","Men's Shop","Beauty & Hair","Fashion & Accessories","Lifestyle & Home","Creator Brands","Live Shopping","Deals"];function wm(e,t="All",s=""){const i=String(s||"").trim().toLocaleLowerCase();return e.filter(a=>(t==="All"||a.category===t)&&(!i||`${a.name} ${a.category}`.toLocaleLowerCase().includes(i)))}function Sm(e){return`
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
    </article>`}function km(){const e=vm.map(s=>`<button type="button" class="btn ${s==="All"?"primary":"ghost"} pikk-shop-filter"
      data-category="${r(s)}" aria-pressed="${s==="All"?"true":"false"}">${r(s)}</button>`).join(""),t=ym.map(s=>`<li><span>${r(s)}</span><span class="chip">Coming Soon</span></li>`).join("");return I("PIKK Shop",`
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
    <section class="card" id="pikkShopCatalog" aria-label="Browse merchandise">
      <h3>Foreign X-Change catalog</h3>
      <label for="pikkShopSearch">Search merchandise</label>
      <input id="pikkShopSearch" type="search" placeholder="Search hats, shirts, jackets…" autocomplete="off" />
      <div class="row wrap" role="group" aria-label="Product category" style="gap:8px;margin-top:12px">
        ${e}
      </div>
      <p class="muted small" id="pikkShopCount" aria-live="polite">${Is.length} items</p>
      <div class="merch-grid" id="pikkShopProducts">${Is.map(Sm).join("")}</div>
      <p class="muted" id="pikkShopEmpty" hidden>No matching merchandise. Try another search or category.</p>
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
  `,{lead:"Physical merchandise · external checkout · future verified storefronts"})}function $m(e){const t=e.querySelector("#pikkShopSearch"),s=[...e.querySelectorAll(".pikk-shop-product")],i=[...e.querySelectorAll(".pikk-shop-filter")],a=e.querySelector("#pikkShopCount"),n=e.querySelector("#pikkShopEmpty");let l="All";function o(){const c=new Set(wm(Is,l,(t==null?void 0:t.value)||"").map(d=>d.id));for(const d of s){const p=c.has(d.dataset.productId);d.hidden=!p,d.style.display=p?"":"none"}a&&(a.textContent=`${c.size} ${c.size===1?"item":"items"}`),n&&(n.hidden=c.size>0);for(const d of i){const p=d.dataset.category===l;d.setAttribute("aria-pressed",String(p)),d.classList.toggle("primary",p),d.classList.toggle("ghost",!p)}}t==null||t.addEventListener("input",o);for(const c of i)c.addEventListener("click",()=>{l=c.dataset.category||"All",o()})}let Ls=null;function le(){O("#/spotlight")}function vi(){Ls&&(clearInterval(Ls),Ls=null)}function Qr(e){const t=Math.max(0,Math.ceil(e/1e3)),s=Math.floor(t/60),i=t%60;return`${s}:${String(i).padStart(2,"0")}`}function pa(e){return e==="freestyle"?"Live Freestyle":e==="beat"?"Beat":e==="music_video"?"Music Video":"Song"}function xm(e){const t=M().user;return!t||!e?!1:(t.following||[]).includes(e)}function ma(){return!!M().user}function Em(){return I("24/7 Spotlight",`<div class="card">
      <h3>Sign in required</h3>
      <p class="muted">Join the FIFO Spotlight queue, vote Keep Going / Play Another, and chat from a local demo account.</p>
      <a class="btn primary" href="#/profile">Sign in</a>
    </div>`,{lead:"Continuous music showcase · votes ≠ paid advantage · TEST MODE"})}function Am(e){return`
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
    </div>`}function Tm(e,{showSkip:t=!0}={}){const s=e.chipLabel||e.status||"House rotation",i=e.embed?He(e.embed,"rel=0"):"";return`
    <div class="card sp-stage sp-house" role="status">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">${r(s)}</div>
        <span class="chip">TEST MODE</span>
      </div>
      ${i?`<div class="sp-house-embed hero-video" style="margin-top:12px">
               <iframe src="${r(i)}" title="${r(e.title)}" allowfullscreen loading="lazy"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
             </div>`:""}
      <div class="sp-now">
        ${e.cover?`<img class="sp-cover" src="${r(Yt(e.cover))}" alt="" />`:""}
        <div>
          <div class="sp-now-title">${r(e.title)}</div>
          <div class="sp-now-meta">${r(e.artist||"DatBoiSkeet")} · house catalog</div>
          <p class="muted sp-note">${r(e.note||"Approved catalog filler · not a live act")}</p>
          ${e.youtube?`<p style="margin:8px 0 0"><a class="btn ghost" href="${r(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a></p>`:""}
        </div>
      </div>
      ${t&&ma()?`<div class="row wrap" style="gap:8px;margin-top:12px">
               <button class="btn" id="spSkipHouse">Skip house · next</button>
               <span class="muted" style="font-size:12px;align-self:center">Join queue takes the stage over house · Skip advances catalog</span>
             </div>`:""}
    </div>`}function Dm(e,t){if(!e||e.house){const y=e&&e.house?{id:e.id,title:e.title,artist:e.artist,embed:e.embed,youtube:e.youtube,chipLabel:e.chipLabel||"House · Music Video",note:e.note,cover:e.cover,kind:e.houseKind}:Vn();return Tm(y)}const s=M().user,i=e.type==="freestyle",a=i&&e.endsAt?Math.max(0,e.endsAt-Date.now()):null,n=Object.keys(e.keepGoingVotes||{}).length,l=Object.keys(e.playAnotherVotes||{}).length,o=e.userId,c=xm(o),d=s&&s.id===e.userId,p=e.reactions||{fire:0,heart:0,clap:0},m=i?`<div class="sp-timer" aria-live="polite">
         <div class="sp-timer-label">Freestyle timer · ext ${e.extensions||0}/${t.maxExtensions}</div>
         <div class="sp-timer-clock" id="spClock">${Qr(a||0)}</div>
         <div class="muted" style="font-size:12px">Keep Going ${n}/${t.keepGoing} · refresh recovers endsAt</div>
       </div>`:`<div class="sp-timer">
         <div class="sp-timer-label">Uploaded · play ${e.playCount||1}/${t.maxUploadStreak}</div>
         <div class="muted" style="font-size:12px">No real audio in TEST MODE · use End set when finished</div>
       </div>`,f=e.awaitingPlayAnother?`<div class="card sp-vote">
         <h3>Play Another?</h3>
         <p class="muted">Audience vote · ${l}/${t.playAnother} · window ends ${e.playAnotherDeadline?N(e.playAnotherDeadline):"soon"} (deadline-based)</p>
         <div class="row wrap" style="gap:8px">
           <button class="btn primary" id="spPlayAnother">Play Another</button>
           <button class="btn ghost" id="spSimPlayAnother">+2 fan votes (demo)</button>
         </div>
       </div>`:i?`<div class="card sp-vote">
           <h3>Keep Going</h3>
           <p class="muted">Votes extend stage time only — not paid advantage · ${n}/${t.keepGoing}</p>
           <div class="row wrap" style="gap:8px">
             <button class="btn primary" id="spKeepGoing" ${(e.extensions||0)>=t.maxExtensions?"disabled":""}>Keep Going</button>
             <button class="btn ghost" id="spSimKeepGoing" ${(e.extensions||0)>=t.maxExtensions?"disabled":""}>+2 fan votes (demo)</button>
           </div>
         </div>`:"",b=d?"":c?`<button class="btn ghost sp-follow" data-follow="${r(o)}" data-on="1">Following</button>`:`<button class="btn ghost sp-follow" data-follow="${r(o)}" data-on="0">Follow</button>`;return`
    <div class="card sp-stage">
      <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
        <div class="chip">On stage · ${r(pa(e.type))}</div>
        <span class="chip">TEST MODE</span>
      </div>
      <div class="sp-now">
        <div class="sp-avatar" aria-hidden="true">${r((e.username||"?").slice(0,2).toUpperCase())}</div>
        <div>
          <div class="sp-now-title">${r(e.title)}</div>
          <div class="sp-now-meta">${r(e.artist||e.username)} · ${r(e.username)}</div>
          <div class="row wrap sp-perf-actions" style="gap:8px;margin-top:8px">
            ${b}
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
    ${f}`}function Cm(e,t,s){const i=o=>Math.max(1,(o+(t?1:0))*2),a=(e||[]).map((o,c)=>`
      <li class="sp-q-row">
        <div>
          <strong>${r(o.username)}</strong>
          <span class="muted"> · ${r(pa(o.type))} · ${r(o.title)}</span>
          <div class="muted" style="font-size:12px">${c===0?"Next up":`#${c+1}`} · ~${i(c)} min wait (stub)</div>
        </div>
        <div class="row wrap" style="gap:6px">
          ${s&&o.userId===s.id?'<button class="btn ghost sp-leave-q">Leave</button>':""}
          ${ma()?`<button class="btn ghost sp-remove-q" data-qid="${r(o.id)}" title="Demo moderator">Remove</button>`:""}
        </div>
      </li>`).join(""),n=s&&(e||[]).some(o=>o.userId===s.id),l=s&&t&&!t.house&&t.userId===s.id;return`
    <div class="card sp-queue">
      <h3>FIFO queue</h3>
      <p class="muted" style="margin-top:0">${e.length?e.length+" waiting":"Queue empty — house catalog on stage"}${t&&!t.house?" · now: "+r(t.username):t&&t.house?" · house: "+r(t.chipLabel||"House"):""}</p>
      <ul class="sp-list">${a||'<li class="muted">No one waiting</li>'}</ul>
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
    </div>`}function Mm(e){if(!ma())return"";const t=Z()?"Admin":"Demo moderator · TEST MODE",s=e&&!e.house;return`
    <div class="card sp-mod">
      <h3>Moderator controls</h3>
      <p class="muted" style="margin-top:0"><span class="chip">${r(t)}</span> Skip / remove for safety · fair order otherwise. House Skip → next queue or next house.</p>
      <div class="row wrap" style="gap:8px">
        <button class="btn" id="spSkip" ${e?"":"disabled"}>Skip current</button>
        ${s&&e.type!=="freestyle"&&!e.awaitingPlayAnother?'<button class="btn ghost" id="spEndSet">End set</button>':""}
      </div>
    </div>`}function Lm(e){const t=M().user;return!e||e.house||e.type==="freestyle"||e.awaitingPlayAnother||!t||t.id!==e.userId?"":`
    <div class="card">
      <h3>Your set</h3>
      <p class="muted">No real audio file — tap End set when your demo track “finishes”.</p>
      <button class="btn primary" id="spEndSetSelf">End set</button>
    </div>`}function Pm(e){return!e||e.house?"":`
    <div class="card sp-chat-card">
      <h3>Stage chat</h3>
      <div class="sp-chat" id="spChat">${(e.chat||[]).slice(-20).map(s=>`<div class="sp-chat-row ${s.system?"system":""}"><strong>${r(s.username)}</strong>${r(s.text)}</div>`).join("")||'<div class="muted">No messages yet</div>'}</div>
      <form id="spChatForm" class="row" style="gap:8px;margin-top:8px">
        <input id="spChatInput" maxlength="200" placeholder="Say something…" style="flex:1" />
        <button class="btn primary" type="submit">Send</button>
      </form>
    </div>`}function Im(e){return e.length?`
    <div class="card">
      <h3>Recent stage</h3>
      <ul class="sp-list">${e.slice(0,12).map(s=>`<li><strong>${r(s.username)}</strong> · ${r(pa(s.type))} · ${r(s.title)}
         <span class="muted"> · ${r(s.reason||"ended")} · ${N(s.endedAt)}</span></li>`).join("")}</ul>
    </div>`:`
      <div class="card">
        <h3>Recent stage</h3>
        <p class="muted" style="margin:0">No completed turns yet.</p>
      </div>`}function _m(){oe();const e=M().user;if(!e)return Em();const t=ae(),s=Xl(12);return I("24/7 Spotlight",`${Am(t.thresholds)}
     ${Dm(t.nowPlaying,t.thresholds)}
     ${Lm(t.nowPlaying)}
     ${Mm(t.nowPlaying)}
     ${Cm(t.queue,t.nowPlaying,e)}
     ${Pm(t.nowPlaying)}
     ${Im(s)}`,{lead:"Always-on music showcase · FIFO queue · votes ≠ wagers · TEST MODE"})}function qm(e){var n,l,o,c,d,p,m,f,b,y,w;vi(),oe();const s=ae().nowPlaying;if(s&&s.type==="freestyle"&&s.endsAt){const h=e.querySelector("#spClock");Ls=setInterval(()=>{oe();const v=ae().nowPlaying;if(!v||v.type!=="freestyle"||!v.endsAt){vi(),le();return}const $=Math.max(0,v.endsAt-Date.now());h&&(h.textContent=Qr($)),$<=0&&(vi(),oe(),le())},250)}if(s&&s.awaitingPlayAnother&&s.playAnotherDeadline){const h=Math.max(0,s.playAnotherDeadline-Date.now())+50;setTimeout(()=>{oe(),le()},Math.min(h,35e3))}(n=e.querySelector("#spJoinForm"))==null||n.addEventListener("submit",h=>{var L,D,F;h.preventDefault();const v=((L=e.querySelector("#spType"))==null?void 0:L.value)||"song",$=((D=e.querySelector("#spTitle"))==null?void 0:D.value)||"",k=((F=e.querySelector("#spArtist"))==null?void 0:F.value)||"",x=Gl({type:v,title:$,artist:k});if(x.error==="signin")return g("Sign in first");if(x.error==="already_queued")return g("You already have a queue/stage spot");g(v==="freestyle"?"Freestyle — you're up or in queue":"Joined Spotlight queue"),le()}),(l=e.querySelector("#spLeaveQueue"))==null||l.addEventListener("click",()=>{if(Da().error)return g("Not in queue");g("Left queue"),le()}),e.querySelectorAll(".sp-leave-q").forEach(h=>{h.addEventListener("click",()=>{Da(),g("Left queue"),le()})}),e.querySelectorAll(".sp-remove-q").forEach(h=>{h.addEventListener("click",()=>{zl(h.getAttribute("data-qid")),g("Removed from queue (demo mod)"),le()})});const i=()=>{ae().nowPlaying,Ul();const h=ae().nowPlaying;h&&h.house?g("Next house · "+(h.chipLabel||"House")):g(h?"Skipped · "+(h.username||"next")+" on stage":"Skipped"),le()};(o=e.querySelector("#spSkip"))==null||o.addEventListener("click",i),(c=e.querySelector("#spSkipHouse"))==null||c.addEventListener("click",i);const a=()=>{const h=Vl();if(h.error==="max_streak"||h.ok){g(h.error==="max_streak"?"Max 3 in a row — advancing":"Play Another? vote open"),le();return}h.error?g("Cannot end set: "+h.error):le()};(d=e.querySelector("#spEndSet"))==null||d.addEventListener("click",a),(p=e.querySelector("#spEndSetSelf"))==null||p.addEventListener("click",a),(m=e.querySelector("#spKeepGoing"))==null||m.addEventListener("click",()=>{const h=Hl();if(h.error==="already_voted")return g("Already voted");if(h.error==="max_extensions")return g("Max extensions reached");if(h.error)return g(h.error);g("Keep Going counted"),le()}),(f=e.querySelector("#spSimKeepGoing"))==null||f.addEventListener("click",()=>{Kl(2),g("+2 simulated fan votes"),le()}),(b=e.querySelector("#spPlayAnother"))==null||b.addEventListener("click",()=>{const h=Wl();if(h.error==="already_voted")return g("Already voted");if(h.error)return g(h.error);g("Play Another vote counted"),le()}),(y=e.querySelector("#spSimPlayAnother"))==null||y.addEventListener("click",()=>{Yl(2),g("+2 simulated fan votes"),le()}),e.querySelectorAll(".sp-follow").forEach(h=>{h.addEventListener("click",()=>{const v=h.getAttribute("data-follow");h.getAttribute("data-on")==="1"?(Vs(v),g("Unfollowed")):(Us(v),g("Following")),le()})}),e.querySelectorAll(".sp-react").forEach(h=>{h.addEventListener("click",()=>{Ql(h.getAttribute("data-kind")||"fire"),le()})}),(w=e.querySelector("#spChatForm"))==null||w.addEventListener("submit",h=>{h.preventDefault();const v=e.querySelector("#spChatInput"),$=Jl((v==null?void 0:v.value)||"");if($.error!=="empty"){if($.error)return g($.error);v&&(v.value=""),le()}})}const Jr="Not available — WebRTC + age assurance required before launch";function Ht(){O("#/connect")}function Bm(){var p;const e=dr(),s=nt().selected||[],i=Ic(),a=mr(),n=Number(a==null?void 0:a.max)||0,l=!!i,o=e.map(m=>{const f=s.includes(m.id),b=m.connected?`<span class="chip">Linked${m.handle?" · "+r(m.handle):""}</span>`:'<span class="chip muted-chip">Not linked</span>';return`
      <div class="connect-mp-plat ${m.connected?"on":""}" data-plat="${r(m.id)}">
        <div class="row wrap" style="justify-content:space-between;gap:8px;align-items:center">
          <div>
            <strong>${r(m.label)}</strong>
            <div class="muted" style="font-size:12px">${r(m.hint||"")}</div>
          </div>
          ${b}
        </div>
        <div class="row wrap" style="gap:6px;margin-top:8px;align-items:center">
          ${m.connected?`<button type="button" class="btn ghost connect-mp-disconnect" data-id="${r(m.id)}">Unlink</button>
                 <label class="connect-mp-select">
                   <input type="checkbox" class="connect-mp-dest" data-id="${r(m.id)}" ${f?"checked":""} ${l?"disabled":""} />
                   Include
                 </label>`:`<button type="button" class="btn primary connect-mp-connect" data-id="${r(m.id)}">Link</button>`}
        </div>
      </div>`}).join(""),c=s.length,d=l?`<button type="button" class="btn danger" id="connectMpEnd">End multi-platform session</button>
       <span class="chip">LIVE · ${r(String(((p=i==null?void 0:i.destinations)==null?void 0:p.length)||c))} dest · TEST MODE</span>`:`<button type="button" class="btn primary" id="connectMpGoLive" ${c?"":"disabled"}>Go live to selected</button>
       <span class="chip">${c}/${n} selected · cap ${n}</span>`;return`
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
        ${d}
        <a class="btn ghost" href="#/live">Solo Live stage</a>
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">
        PIKK Connect combines random video discovery and multi-platform live controls in one place.
      </p>
    </div>`}function qi(){const e=gr(),t=e.ageConfirmed&&e.rulesAccepted;return I("PIKK Connect",`<div class="connect-monkey" id="connectMonkey">
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
          <strong>${Jr}</strong>
          <p class="muted small">TEST MODE — this is a preview, not a real matching request. No match was created, no camera was requested, and no WebRTC connection was attempted.</p>
        </div>
        <p class="muted small" style="margin-top:10px">Controls are mockups until launch. Prefs save on this device.</p>
      </div>

      ${Bm()}

      <div class="card">
        <p class="muted" style="margin:0 0 8px">PIKK Connect <strong>does not replace</strong> Live, Messages, or Spotlight. Meanwhile:</p>
        <a class="btn" href="#/live">Live</a> <a class="btn" href="#/messages">Messages</a> <a class="btn" href="#/spotlight">Spotlight</a> <a class="btn ghost" href="#/shorts">Shorts / Clips</a>
      </div>
    </div>`,{lead:"1:1 discovery shell · multi-platform go-live · TEST MODE",badge:"Shell · no WebRTC"})}function Om(e){var t,s;e.querySelectorAll(".connect-mp-connect").forEach(i=>{i.addEventListener("click",()=>{const a=i.dataset.id,n=Ac(a,"");if(n!=null&&n.error)return g(String(n.error));g(`Linked ${a} · TEST MODE`),Ht()})}),e.querySelectorAll(".connect-mp-disconnect").forEach(i=>{i.addEventListener("click",()=>{Tc(i.dataset.id),g("Unlinked · TEST MODE"),Ht()})}),e.querySelectorAll(".connect-mp-dest").forEach(i=>{i.addEventListener("change",()=>{Cc(i.dataset.id),Ht()})}),(t=e.querySelector("#connectMpGoLive"))==null||t.addEventListener("click",()=>{const i=Lc();if((i==null?void 0:i.error)==="signin")return g("Sign in first");if((i==null?void 0:i.error)==="none_selected")return g("Select at least one destination");if(i!=null&&i.error)return g(String(i.error));g("Multi-platform session started · TEST MODE"),Ht()}),(s=e.querySelector("#connectMpEnd"))==null||s.addEventListener("click",()=>{Pc(),g("Session ended"),Ht()})}function Bi(e=document,t){var a,n,l;const s=()=>{if(typeof t=="function")return t();e.innerHTML=qi(),Bi(e)};(a=e.querySelector("#connect-age"))==null||a.addEventListener("change",o=>{const c=o.target.checked;Pa(c?{ageConfirmed:!0}:{ageConfirmed:!1,rulesAccepted:!1}),s()}),(n=e.querySelector("#connect-rules"))==null||n.addEventListener("change",o=>{Pa({rulesAccepted:o.target.checked}),s()}),(l=e.querySelector("#connect-start"))==null||l.addEventListener("click",()=>{const o=e.querySelector("#connect-blocked");o==null||o.removeAttribute("hidden"),g(Jr)}),Om(e);const i=Ye().elementId;(i==="connect-random-chat"||i==="connect-multistream")&&requestAnimationFrame(()=>{var o;(o=e.querySelector(`#${i}`))==null||o.scrollIntoView({behavior:"smooth",block:"start"})})}function Nm(){const e=Ve.filter(s=>(s.category||"")==="Music Videos"&&s.embed);return(e.length?e:Ve.filter(s=>s.embed)).slice(0,10).map((s,i)=>({id:`clip_${s.id}`,videoId:s.id,title:s.title,artist:s.artist||"DatBoiSkeet",embed:s.embed,youtube:s.youtube,blurb:i%3===0?"Clip cut · DEMO":i%3===1?"Highlight · DEMO":"Short · DEMO"}))}function jm(e,t){return`
    <article class="shorts-card" data-clip-id="${r(e.id)}" id="shorts-card-${t}">
      <div class="shorts-stage">
        <div class="shorts-embed hero-video">
          <iframe
            src="${r(He(e.embed))}"
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
    </article>`}function on(){const e=Nm(),s=`
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
      ${e.map(jm).join("")||'<p class="muted">No demo clips seeded.</p>'}
    </div>
    <p class="muted" style="margin:12px 0 0;font-size:12px;text-align:center">
      End of DEMO feed · ${e.length} clips · Scroll for more when real clip uploads ship
    </p>`;return I("Shorts / Clips",s,{lead:"Posts · short-form feed · Picture / Short / Video create on Posts · TEST MODE"})}function ln(e){ni(e),e.querySelectorAll(".shorts-card").forEach(t=>{t.addEventListener("focusin",()=>{t.classList.add("is-focus")})}),e.querySelector(".shorts-card")||g("No demo clips · add MVs in data.js")}const Gs=[{id:"ny",name:"NY",tag:"East coast",still:"/blockwars-preview/preview-ny-still.jpg",fighter:"Brooklyn Brawler",blurb:"Street-pressured power from the five boroughs. Heavy combos, tight corners — TEST MODE teaser only."},{id:"la",name:"LA",tag:"West coast",still:"/blockwars-preview/preview-la-still.jpg",fighter:"Sunset Striker",blurb:"Flashy footwork under neon skies. Style meets speed — Coming Soon, not a real match engine."},{id:"chi",name:"Chicago",tag:"Midwest",still:"/blockwars-preview/preview-chi-still.jpg",fighter:"Windy City Wall",blurb:"Defense-first grit from the lakefront. Hold the block — lobby demo only, no live fights yet."}];function Rm(e){return Gs.map(t=>{const s=t.id===e?" is-active":"",i=t.id===e?"true":"false";return`<button type="button" class="bw-city-card${s}" data-city="${r(t.id)}" aria-pressed="${i}" aria-label="${r(t.name)} fighter"><img src="${r(t.still)}" alt="" width="120" height="160" loading="lazy" decoding="async" /><span class="bw-city-meta"><span class="bw-city-name">${r(t.name)}</span><span class="bw-city-tag">${r(t.tag)}</span></span></button>`}).join("")}function Fm(e){return`<div class="bw-focus" id="bwFocus" data-city="${r(e.id)}"><div class="bw-focus-still"><img id="bwFocusImg" src="${r(e.still)}" alt="${r(e.fighter)}" width="110" height="140" /></div><div class="bw-focus-copy"><p class="bw-focus-city">${r(e.name)} · ${r(e.tag)}</p><h3 id="bwFocusName">${r(e.fighter)}</h3><p id="bwFocusBlurb">${r(e.blurb)}</p></div></div>`}function Gm(){const e=Gs[0],t=`
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
        ${Rm(e.id)}
      </div>

      ${Fm(e)}

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
    </div>`;return I("Block Wars",t,{lead:"Coming Soon · lobby fighter select · preview video · not playable yet."})}function zm(e,t){const s=Gs.find(c=>c.id===t)||Gs[0];e.querySelectorAll(".bw-city-card").forEach(c=>{const d=c.getAttribute("data-city")===s.id;c.classList.toggle("is-active",d),c.setAttribute("aria-pressed",d?"true":"false")});const i=e.querySelector("#bwFocus"),a=e.querySelector("#bwFocusImg"),n=e.querySelector("#bwFocusName"),l=e.querySelector("#bwFocusBlurb"),o=e.querySelector(".bw-focus-city");i&&i.setAttribute("data-city",s.id),a&&(a.src=s.still,a.alt=s.fighter),n&&(n.textContent=s.fighter),l&&(l.textContent=s.blurb),o&&(o.textContent=`${s.name} · ${s.tag}`)}function Um(e){var a,n;(a=e.querySelector("#bwCityGrid"))==null||a.addEventListener("click",l=>{const o=l.target.closest(".bw-city-card");o&&(l.preventDefault(),zm(e,o.getAttribute("data-city")))}),(n=e.querySelector("#bwEnterArena"))==null||n.addEventListener("click",l=>{l.preventDefault(),g("Block Wars arena is Coming Soon — lobby demo only. No match engine yet.")});const t=e.querySelector("#bwCsVideo"),s=e.querySelector("#bwCsPlay");if(!t)return;const i=()=>{if(!s)return;const l=t.paused||t.ended;s.hidden=!l,s.setAttribute("aria-hidden",l?"false":"true")};s==null||s.addEventListener("click",l=>{l.preventDefault(),t.play().catch(()=>{})}),t.addEventListener("play",()=>{Lt(),i()}),t.addEventListener("pause",()=>{Ke(),i()}),t.addEventListener("ended",()=>{Ke(),i()}),t.addEventListener("pointerdown",()=>{t.paused||Lt()}),i()}function Vm(){return I("PIKK Arcade",`
    <section class="pikk-arcade-intro card">
      <div class="pikk-arcade-heading"><div>
        <p class="kicker">Play · Compete · Hang out</p>
        <h2>PIKK <span>ARCADE</span></h2>
        <p>All 15 approved games in one place. Choose a title to see its preview as development continues.</p>
      </div><span class="pikk-arcade-icon" aria-hidden="true">🎮</span></div>
      <p class="pikk-arcade-disclosure">ALL GAMES COMING SOON · Gallery previews, not playable releases. Play Chips have no cash value or cash-out.</p>
    </section>
    <div class="pikk-arcade-grid">
      ${Br.map((e,t)=>`
        <article class="pikk-arcade-card pikk-game-${r(e.theme)}">
          <div class="pikk-arcade-art" aria-label="${r(e.name)} preview artwork">
            ${e.artwork?`<img src="${r(e.artwork)}" alt="Block Wars fighter preview" loading="lazy" decoding="async"/>`:`<span class="pikk-arcade-symbol" aria-hidden="true">${e.icon}</span>`}
            <span class="pikk-arcade-number">${t+1}</span>
            <span class="pikk-arcade-soon">Coming Soon</span>
          </div>
          <div class="pikk-arcade-copy">
            <h3>${r(e.name)}</h3>
            <span class="pikk-arcade-players">♙ ${r(e.players)} ${e.players==="1"?"Player":"Players"}</span>
            <p>${r(e.description)}</p>
            ${e.href?`<a class="pikk-arcade-action" href="${r(e.href)}">View preview →</a>`:`<span class="pikk-arcade-action" aria-label="${r(e.name)} coming soon">Coming Soon</span>`}
          </div>
        </article>`).join("")}
    </div>
    <p class="muted" style="font-size:12px;margin-top:16px">Game art is a temporary themed preview except for the existing Block Wars still. Approved custom game images are still being integrated; no gambling or real-money prizes are available.</p>
  `,{lead:"Fifteen upcoming games · mobile-first catalog · previews only"})}function Hm(){return I("PIKK Dating & Connections",`
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
    <div class="card">
      <h3>Dating Live & Connections</h3>
      <p class="muted">Browse the existing Live area. Live sessions are currently a test-mode experience; gifts never buy consent or a match.</p>
      <a class="btn primary" href="#/live">Open Live</a>
      <a class="btn ghost" href="#/connect">PIKK Connect · test mode</a>
    </div>
    <div class="card">
      <h3>Privacy & safety</h3>
      <p class="muted">Dating will require verified adult eligibility, explicit profile opt-in, private mutual consent, blocking, reporting and account deletion before launch. Camera and microphone permissions are never requested on this page.</p>
    </div>
  `,{lead:"Dating · mutual matches · live connections"})}const Xr=60,Km=10,Wm=10,cn=3;function Ym(){return{phase:"round",round:1,seconds:Xr,votes:[0,0],scores:[0,0],roundWinners:[],gifts:[0,0],rematchVotes:[0,0],winner:null,tieBreaker:!1}}function Qm(e,t){if(e.phase!=="vote"||![0,1].includes(t))return e;const s=[...e.votes];return s[t]+=1,{...e,votes:s}}function Jm(e,t){if(e.phase!=="rematch")return e;const s=[...e.rematchVotes];return s[t?0:1]+=1,{...e,rematchVotes:s}}function Xm(e){if(!["round","vote","rematch"].includes(e.phase))return e;if(e.seconds>1)return{...e,seconds:e.seconds-1};if(e.phase==="round")return{...e,phase:"vote",seconds:Km,votes:[0,0],voted:!1};if(e.phase==="vote"){const t=e.votes[0]===e.votes[1]?null:e.votes[0]>e.votes[1]?0:1,s=[...e.scores];t!==null&&(s[t]+=1);const i=[...e.roundWinners,t];return e.round>=cn&&s[0]!==s[1]?{...e,scores:s,roundWinners:i,winner:s[0]>s[1]?0:1,phase:"rematch",seconds:Wm,rematchVoted:!1}:{...e,scores:s,roundWinners:i,phase:"round",round:e.round+1,seconds:Xr,votes:[0,0],voted:!1,tieBreaker:e.round>=cn}}return{...e,phase:"finished",seconds:0}}let U=null,De=null;function As(){const e=document.getElementById("roast-demo");if(!e||!U){De&&clearInterval(De),De=null;return}const t=U.phase,s=t==="round"?`Round ${U.round}${U.tieBreaker?" · Final tiebreaker":""}`:t==="vote"?"Vote for the round winner":t==="rematch"?"Run It Back?":"Match finished";e.innerHTML=`<h3>${s}</h3><p><strong>${String(Math.floor(U.seconds/60)).padStart(2,"0")}:${String(U.seconds%60).padStart(2,"0")}</strong></p><p>Contestant A: ${U.scores[0]} rounds · Contestant B: ${U.scores[1]} rounds</p>${t==="vote"?'<button type="button" data-roast-vote="0">Vote A</button> <button type="button" data-roast-vote="1">Vote B</button>':""}${t==="rematch"?`<p>Winner: Contestant ${U.winner===0?"A":"B"}</p><button type="button" data-roast-rematch="yes">Run It Back? Yes</button> <button type="button" data-roast-rematch="no">No</button>`:""}<p class="muted">Local interactive simulation only. Votes are not shared between viewers. No live video or gifts are connected.</p>`}function Zm(){De&&clearInterval(De),De=null,U=null;const e=document.getElementById("roast-start");e&&(e.addEventListener("click",()=>{U=Ym(),As(),De&&clearInterval(De),De=setInterval(()=>{U=Xm(U),As(),U.phase==="finished"&&(clearInterval(De),De=null)},1e3)}),document.getElementById("roast-demo").addEventListener("click",t=>{const s=t.target.closest("[data-roast-vote]"),i=t.target.closest("[data-roast-rematch]");s&&U&&U.phase==="vote"&&!U.voted&&(U={...Qm(U,Number(s.dataset.roastVote)),voted:!0},As()),i&&U&&U.phase==="rematch"&&!U.rematchVoted&&(U={...Jm(U,i.dataset.roastRematch==="yes"),rematchVoted:!0},As())}))}function eg(){return I("PIKK Roast Arena",`
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
  `,{lead:"Live comedy competitions · audience votes and gifts tracked separately"})}const Jt={instagram:"Instagram",tiktok:"TikTok",facebook:"Facebook",youtube:"YouTube",x:"X",snapchat:"Snapchat",other:"Other"};function tg(e){return((e==null?void 0:e.path)||"")==="/refer"?"refer":"share"}function te(e){O(e==="refer"?"#/refer":"#/share")}function Ie(){const{user:e}=M();if(e)return e;const t=It("DemoCreator");return g("Signed in as DemoCreator · local demo"),t||M().user}function sg(e){const t=Number(e)-Date.now();if(t<=0)return"24h window ended (demo)";const s=Math.floor(t/36e5),i=Math.floor(t%36e5/6e4);return`${s}h ${i}m left`}function ig(e){return`<div class="admin-type-tabs rewards-tabs" style="grid-template-columns:repeat(2,minmax(0,1fr));margin-bottom:14px" role="tablist">
    <a class="admin-type-tab ${e==="share"?"on":""}" href="#/share" role="tab" aria-selected="${e==="share"}">Share &amp; Earn</a>
    <a class="admin-type-tab ${e==="refer"?"on":""}" href="#/refer" role="tab" aria-selected="${e==="refer"}">Refer &amp; Earn</a>
  </div>`}function ag(){const{user:e}=M(),t=Q(),s=t.platformsLinked||[],i=t.challenge,a=t.submissions||[],n=t.rewardsClaimed||[],l=nr(),o=rr(),c=lc(),d=s.length>0?`<ul class="list-plain">${s.map(h=>`<li>
          <span><strong>${r(Jt[h.platform]||h.platform)}</strong>
            ${h.handle?`<br/><span class="muted" style="font-size:12px">@${r(String(h.handle).replace(/^@+/,""))}</span>`:""}
            ${h.url?`<br/><span class="muted" style="font-size:11px">${r(h.url)}</span>`:""}
          </span>
          <button class="btn ghost" type="button" data-unlink="${r(h.id)}">Remove</button>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No platforms linked yet — optional. Never asked for social passwords.</p>',p=Ca().filter(h=>!s.some(v=>v.platform===h)).map(h=>`<option value="${h}">${r(Jt[h]||h)}</option>`).join("");let m="";if(!i)m=`<div class="card">
      <h3>24-hour social challenge</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Optional promo · separate from paid Clippers. Post official DBS ad + tracked link · keep live 24h · manual/demo verification (not guaranteed auto-check).</p>
      <button class="btn primary" id="shStart" >Start challenge · TEST MODE</button>
    </div>`;else{const h=i.status==="active",v=Date.now()>=Number(i.endsAt);m=`<div class="card">
      <div class="row wrap" style="gap:8px;margin-bottom:8px">
        <span class="chip">${h?v?"Window ended · demo":"Active":"Ended"}</span>
        <span class="chip">TEST MODE</span>
        <span class="chip">${r(sg(i.endsAt))}</span>
        ${i.simulatedElapsed?'<span class="chip">Simulated 24h elapsed</span>':""}
      </div>
      <h3>${r(i.adTitle)}</h3>
      <p style="margin:8px 0;font-size:14px;white-space:pre-wrap">${r(i.caption)}</p>
      <div class="field"><label>Tracked link</label>
        <input id="shTracked" readonly value="${r(i.trackedLink)}" />
      </div>
      <p class="chip" style="margin:8px 0">#ad · Paid partnership · incentivized promotion disclosure required</p>
      <div class="row wrap" style="gap:8px;margin-top:10px">
        <button class="btn" type="button" id="shCopyLink">Copy tracked link</button>
        <button class="btn" type="button" id="shCopyCaption">Copy caption</button>
        ${h?`<button class="btn ghost" type="button" id="shSim24">Simulate 24h elapsed</button>
               <button class="btn ghost" type="button" id="shEnd">End challenge</button>`:""}
      </div>
      <p class="muted" style="margin:10px 0 0;font-size:12px">Honest scope: stories/API may not prove continuous 24h visibility — admin/demo verify only.</p>
    </div>`}const f=Ca().map(h=>`<option value="${h}">${r(Jt[h]||h)}</option>`).join(""),b=a.length>0?`<ul class="list-plain">${a.map(h=>`<li style="align-items:flex-start">
          <span style="flex:1;min-width:0">
            <strong>${r(Jt[h.platform]||h.platform)}</strong>
            <span class="chip">${r(h.status)}</span>
            <br/><a href="${r(h.postUrl)}" target="_blank" rel="noopener" style="font-size:13px;word-break:break-all">${r(h.postUrl)}</a>
            <br/><span class="muted" style="font-size:11px">${N(h.submittedAt)} · ${r(h.note||"")}</span>
          </span>
          ${h.status==="pending"?`<span class="row wrap" style="gap:4px">
                  <button class="btn" type="button" data-verify="${r(h.id)}">Verify · demo</button>
                  <button class="btn ghost" type="button" data-reject="${r(h.id)}">Reject</button>
                </span>`:""}
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No post URLs submitted yet.</p>',y=c.map(h=>{const v=n.some(k=>k.tierId===h.id),$=o.some(k=>k.id===h.id);return`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${r(h.label)}</strong><br/><span class="muted" style="font-size:11px">≥${h.minVerified} verified platform${h.minVerified===1?"":"s"}${h.requireAllLinked?" · all linked (≥3)":""}</span></td>
        <td style="padding:8px 4px">${v?'<span class="chip">Claimed</span>':$?`<button class="btn primary" type="button" data-claim-share="${r(h.id)}">Claim</button>`:`<span class="muted" style="font-size:12px">Locked (${l}/${h.minVerified})</span>`}</td>
      </tr>`}).join(""),w=n.length>0?`<ul class="list-plain">${n.map(h=>`<li>
          <span>${r(h.label)}<br/><span class="muted" style="font-size:11px">${N(h.at)} · TEST MODE</span></span>
          <span class="chip">${r(h.kind)}</span>
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
      ${d}
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

    ${i?`<div class="card">
      <h3>Submit post URLs</h3>
      <p class="muted" style="margin:0 0 10px;font-size:13px">Paste the public post link for each platform. Admin Verify/Reject below (demo).</p>
      <form id="shSubmitForm" class="row wrap" style="gap:8px;align-items:flex-end">
        <div class="field" style="margin:0;min-width:140px"><label>Platform</label><select id="shSubPlat">${f}</select></div>
        <div class="field" style="margin:0;flex:1;min-width:180px"><label>Post URL</label><input id="shSubUrl" type="url" placeholder="https://…" required /></div>
        <button class="btn primary" type="submit">Submit</button>
      </form>
      <div style="margin-top:12px">${b}</div>
    </div>`:""}

    <div class="card">
      <h3>Rewards</h3>
      <p class="muted" style="margin:0 0 8px;font-size:13px">1 → badge · 2 → decoration · 3 → 7d Skeet+ · all linked (≥3) → 30d Skeet+. No auto paid billing.</p>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <tbody>${y}</tbody>
        </table>
      </div>
      <h4 style="margin:16px 0 8px;font-size:14px">Claim history</h4>
      ${w}
    </div>
  `}function ng(){const{user:e}=M(),t=Bt(),s=or(),i=t.invitees||[],a=lr(),n=cr(),l=bc(),o=t.milestonesClaimed||[],c=wt(),d=l.find(y=>a<y.n),p=d?`${a} / ${d.n} verified active → ${d.label}`:a>=100?"All milestones unlocked":`${a} verified active`,m=i.length>0?`<ul class="list-plain">${i.map(y=>{const w=(y.activeDays||[]).length;return`<li style="align-items:flex-start">
            <span style="flex:1;min-width:0">
              <strong>${r(y.username)}</strong>
              <span class="chip">${r(y.status)}</span>
              ${y.flaggedFraud?'<span class="chip">Fraud flag</span>':""}
              ${y.welcomeClaimed?'<span class="chip">Welcome claimed</span>':""}
              <br/><span class="muted" style="font-size:12px">Active days: ${w}/3 · ${r((y.activeDays||[]).join(", ")||"none")} · signed ${N(y.signedUpAt)}</span>
            </span>
            <span class="row wrap" style="gap:4px;justify-content:flex-end">
              ${!y.welcomeClaimed&&!y.flaggedFraud?`<button class="btn ghost" type="button" data-welcome="${r(y.id)}">Welcome perk</button>`:""}
              ${!y.flaggedFraud&&y.status!=="active"?`<button class="btn" type="button" data-activeday="${r(y.id)}">Mark active day</button>`:""}
              ${y.flaggedFraud?`<button class="btn ghost" type="button" data-unfraud="${r(y.id)}">Clear fraud</button>`:`<button class="btn ghost" type="button" data-fraud="${r(y.id)}">Flag fraud</button>`}
            </span>
          </li>`}).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No invitees yet — simulate a signup or load demo referrals.</p>',f=l.map(y=>{const w=o.some(v=>v.milestoneId===y.id),h=n.some(v=>v.id===y.id);return`<tr style="border-top:1px solid rgba(255,255,255,.06)">
        <td style="padding:8px 4px"><strong>${y.n}</strong> verified active</td>
        <td style="padding:8px 4px">${r(y.label)}</td>
        <td style="padding:8px 4px">${w?'<span class="chip">Claimed</span>':h?`<button class="btn primary" type="button" data-claim-ref="${r(y.id)}">Claim</button>`:`<span class="muted" style="font-size:12px">${a}/${y.n}</span>`}</td>
      </tr>`}).join(""),b=o.length>0?`<ul class="list-plain">${o.map(y=>`<li>
          <span>${r(y.label)}<br/><span class="muted" style="font-size:11px">${N(y.at)} · not Clippers pay</span></span>
          <span class="chip">${y.n}</span>
        </li>`).join("")}</ul>`:'<p class="muted" style="margin:0;font-size:13px">No milestone claims yet.</p>';return`
    <div class="card">
      <p class="muted" style="margin:0;font-size:13px">
        Personal referral link. Invitee welcome perks; inviter milestones only after <strong>verified active</strong>
        (meaningful participation on <strong>3 distinct days in the first 7 days</strong>). Distinct from Clippers commissions. No purchase required · no auto billing.
      </p>
      <div class="row wrap" style="margin-top:10px;gap:8px">
        <span class="chip">Verified active: ${a}</span>
        ${c?`<span class="chip">Membership: ${r(c)}</span>`:'<span class="chip">Membership: none</span>'}
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
      <p class="muted" style="margin:10px 0 0;font-size:12px">Progress: ${r(p)}</p>
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
          <tbody>${f}</tbody>
        </table>
      </div>
      <h4 style="margin:16px 0 8px;font-size:14px">Claim history</h4>
      ${b}
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
  `}function rg(e){return Zr(e||{path:"/share"})}function og(e){return Zr(e||{path:"/refer"})}function Zr(e){const t=tg(e),s=`
    ${ig(t)}
    ${t==="refer"?ng():ag()}
  `;return I("DBS Rewards",s,{lead:t==="refer"?"Refer & Earn · verified active friends · TEST MODE (§33).":"Share & Earn · 24h social promo · TEST MODE (§32)."})}function lg(e){eo(e,"share")}function cg(e){eo(e,"refer")}function eo(e,t){var i,a,n,l,o,c,d,p,m,f,b,y,w;const s=t||(location.hash.includes("/refer")?"refer":"share");(i=e.querySelector("#rwSignIn"))==null||i.addEventListener("click",()=>{Ie(),te(s)}),(a=e.querySelector("#shLinkForm"))==null||a.addEventListener("submit",h=>{var L,D,F;h.preventDefault(),Ie();const v=(L=e.querySelector("#shPlat"))==null?void 0:L.value,$=((D=e.querySelector("#shHandle"))==null?void 0:D.value)||"",k=((F=e.querySelector("#shUrl"))==null?void 0:F.value)||"",x=cc({platform:v,handle:$,url:k});if(x.error==="signin")return g("Sign in required");if(x.error==="already_linked")return g("Already linked");if(x.error==="required")return g("Handle or URL required");if(x.error)return g("Could not link");g(`Linked ${Jt[v]||v}`),te("share")}),e.querySelectorAll("[data-unlink]").forEach(h=>{h.addEventListener("click",()=>{dc(h.getAttribute("data-unlink")),g("Platform removed"),te("share")})}),(n=e.querySelector("#shStart"))==null||n.addEventListener("click",()=>{Ie();const h=uc();if(h.error==="signin")return g("Sign in required");if(h.error==="already_active")return g("Challenge already active");if(h.error)return g("Could not start");g("Challenge started · 24h window"),te("share")}),(l=e.querySelector("#shCopyLink"))==null||l.addEventListener("click",async()=>{var v;const h=((v=e.querySelector("#shTracked"))==null?void 0:v.value)||"";try{await navigator.clipboard.writeText(h),g("Tracked link copied")}catch{g("Copy manually")}}),(o=e.querySelector("#shCopyCaption"))==null||o.addEventListener("click",async()=>{var $;const v=(($=Q().challenge)==null?void 0:$.caption)||"";try{await navigator.clipboard.writeText(v),g("Caption copied")}catch{g("Copy manually")}}),(c=e.querySelector("#shSim24"))==null||c.addEventListener("click",()=>{if(pc().error)return g("No active challenge");g("Simulated 24h elapsed"),te("share")}),(d=e.querySelector("#shEnd"))==null||d.addEventListener("click",()=>{mc(),g("Challenge ended"),te("share")}),(p=e.querySelector("#shSubmitForm"))==null||p.addEventListener("submit",h=>{var x,L;h.preventDefault(),Ie();const v=(x=e.querySelector("#shSubPlat"))==null?void 0:x.value,$=((L=e.querySelector("#shSubUrl"))==null?void 0:L.value)||"",k=gc({platform:v,postUrl:$});if(k.error==="required")return g("Post URL required");if(k.error==="duplicate")return g("Already submitted for this platform");if(k.error==="no_challenge")return g("Start a challenge first");if(k.error)return g("Submit failed");g("Submitted · pending demo verification"),te("share")}),e.querySelectorAll("[data-verify]").forEach(h=>{h.addEventListener("click",()=>{Ma(h.getAttribute("data-verify"),"verified"),g("Verified · demo (manual)"),te("share")})}),e.querySelectorAll("[data-reject]").forEach(h=>{h.addEventListener("click",()=>{Ma(h.getAttribute("data-reject"),"rejected"),g("Rejected"),te("share")})}),e.querySelectorAll("[data-claim-share]").forEach(h=>{h.addEventListener("click",()=>{Ie();const v=fc(h.getAttribute("data-claim-share"));if(v.error==="not_claimable")return g("Not claimable yet");if(v.error)return g("Claim failed");g(`Claimed · ${v.claim.label}`),te("share")})}),(m=e.querySelector("#shReset"))==null||m.addEventListener("click",()=>{hc(),g("Share demo reset"),te("share")}),(f=e.querySelector("#refCopy"))==null||f.addEventListener("click",async()=>{var v;Ie(),Bt();const h=((v=e.querySelector("#refLink"))==null?void 0:v.value)||or();try{await navigator.clipboard.writeText(h),g("Referral link copied")}catch{g("Copy manually")}}),(b=e.querySelector("#refInviteForm"))==null||b.addEventListener("submit",h=>{var k;h.preventDefault(),Ie();const v=((k=e.querySelector("#refInviteName"))==null?void 0:k.value)||"",$=vc({username:v});if($.error==="self_referral")return g("Self-referral blocked");if($.error==="signin")return g("Sign in required");if($.error)return g("Could not add invitee");g(`Invitee ${$.invitee.username} signed up`),te("refer")}),e.querySelectorAll("[data-welcome]").forEach(h=>{h.addEventListener("click",()=>{const v=yc(h.getAttribute("data-welcome"));if(v.error==="fraud")return g("Flagged fraud");if(v.error)return g("Welcome claim failed");g(v.perk||"Welcome perk claimed"),te("refer")})}),e.querySelectorAll("[data-activeday]").forEach(h=>{h.addEventListener("click",()=>{const v=wc(h.getAttribute("data-activeday"));if(v.error==="fraud")return g("Flagged fraud");if(v.error==="outside_window")return g("Outside first-7-day window");if(v.error==="window_full")return g("All 7 demo days already marked");if(v.error)return g("Could not mark day");const $=(v.invitee.activeDays||[]).length;g($>=3?`${v.invitee.username} → verified active (${$} days)`:`Active day ${$}/3 for ${v.invitee.username}`),te("refer")})}),e.querySelectorAll("[data-fraud]").forEach(h=>{h.addEventListener("click",()=>{La(h.getAttribute("data-fraud"),!0),g("Flagged as fraud · demo"),te("refer")})}),e.querySelectorAll("[data-unfraud]").forEach(h=>{h.addEventListener("click",()=>{La(h.getAttribute("data-unfraud"),!1),g("Fraud flag cleared"),te("refer")})}),e.querySelectorAll("[data-claim-ref]").forEach(h=>{h.addEventListener("click",()=>{Ie();const v=Sc(h.getAttribute("data-claim-ref"));if(v.error==="not_claimable")return g("Not claimable yet");if(v.error)return g("Claim failed");g(`Milestone claimed · ${v.claim.label}`),te("refer")})}),(y=e.querySelector("#refSeed"))==null||y.addEventListener("click",()=>{Ie();const h=$c({force:!0});if(h.error==="signin")return g("Sign in required");g(`Loaded ${h.seeded||0} demo invitees`),te("refer")}),(w=e.querySelector("#refReset"))==null||w.addEventListener("click",()=>{Ie(),kc(),g("Refer demo reset"),te("refer")})}function dg(e){return{badge:`Phase ${e} shell`}}function dn(e){return`
    <article class="card">
      <div class="hero-video" style="margin:0 0 10px">
        <iframe src="${r(He(e.embed))}" title="${r(e.title)}" allowfullscreen loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <span class="chip">${r(e.category||"Music Videos")}</span>
      <h3 style="margin:8px 0 4px">${r(e.title)}</h3>
      <p class="muted" style="margin:0 0 8px">${r(e.artist||"DatBoiSkeet")}</p>
      <div class="row wrap">
        <a class="btn" href="${r(e.youtube)}" target="_blank" rel="noopener">Open on YouTube</a>
        <button class="btn ghost video-share" data-url="${r(e.youtube)}" data-title="${r(e.title)}">Share link</button>
      </div>
    </article>`}function ug(){const e=["Music Videos","Mixes","Interviews"],t={};Ve.forEach(c=>{const d=c.category||"Music Videos";(t[d]||(t[d]=[])).push(c)});const s=e.filter(c=>{var d;return(d=t[c])==null?void 0:d.length}).map(c=>{const d=t[c].map(dn).join("");return`<h3 style="margin:16px 0 8px">${r(c)}</h3>${d}`}).join(""),i=Object.keys(t).filter(c=>!e.includes(c)).map(c=>`<h3 style="margin:16px 0 8px">${r(c)}</h3>${t[c].map(dn).join("")}`).join(""),n=bt({publishedOnly:!0,types:["video"]}).map(c=>{const d=c.youtube||"",p=c.embed||"";if(p||d){const m=p||"";return`<article class="card catalog-admin-video" data-id="${r(c.id)}">
          ${m?`<div class="hero-video" style="margin:0 0 10px"><iframe src="${r(He(m))}" title="${r(c.title)}" allowfullscreen loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`:""}
          <span class="chip">Admin</span>
          <h3 style="margin:8px 0 4px">${r(c.title)}</h3>
          <p class="muted">${r(c.artist)}</p>
          ${d?`<a class="btn" href="${r(d)}" target="_blank" rel="noopener">Open on YouTube</a>`:""}
        </article>`}return`<article class="card catalog-admin-video" data-id="${r(c.id)}">
        <span class="chip">Admin · uploaded</span>
        <h3 style="margin:8px 0 4px">${r(c.title)}</h3>
        <p class="muted">${r(c.artist)}</p>
        ${c.coverRef?`<img data-idb-src="${r(c.coverRef.startsWith("idb:")?c.coverRef:"")}" src="${r(c.coverRef.startsWith("idb:")?"":c.coverRef)}" alt="" class="catalog-cover" style="width:100%;max-height:220px;object-fit:cover;border-radius:12px;margin:8px 0" />`:""}
        ${c.mediaRef?`<video class="catalog-video" data-idb-src="${r(c.mediaRef.startsWith("idb:")?c.mediaRef:"")}" src="${r(c.mediaRef.startsWith("idb:")?"":c.mediaRef)}" controls playsinline webkit-playsinline preload="metadata" style="width:100%;border-radius:12px;background:#000"></video>`:'<p class="muted">No media file</p>'}
      </article>`}).join(""),l={};ao.forEach(c=>{var d;(l[d=c.category]||(l[d]=[])).push(c)});const o=Object.entries(l).map(([c,d])=>`
      <div class="card">
        <h3>${r(c)}</h3>
        <p class="muted" style="margin:0 0 8px">No verified URLs in repo yet — titles from plan §9 only. No invented view counts.</p>
        <ul class="list-plain">${d.map(p=>`<li><span>${r(p.title)}</span><span class="chip">Coming Soon</span></li>`).join("")}</ul>
      </div>`).join("");return I("Videos & Interviews",`<div class="card"><p class="muted" style="margin:0">Official DatBoiSkeet music videos, mixes, and interviews — YouTube embeds from the original source. No rehosted files.</p>
      <div class="row wrap" style="margin-top:8px;gap:8px">
        <a class="btn" href="https://www.youtube.com/channel/UCA2GGwQ-cOUW0ZqmWaGzEBA" target="_blank" rel="noopener">Official YouTube channel</a>
        <a class="btn ghost" href="https://www.youtube.com/@DatBoiSkeet1" target="_blank" rel="noopener">@DatBoiSkeet1</a>
        <a class="btn ghost" href="https://www.youtube.com/playlist?list=PLC6_HdjaVaQERro-n6XWI2ECIC4crgf4t" target="_blank" rel="noopener">Music Videos playlist</a>
      </div>
    </div>
    ${s}${i}
    ${n?`<h3 style="margin:16px 0 8px">From Admin</h3>${n}`:""}
    ${o}`,{lead:"Official MVs · Mixes · Interviews · admin uploads."})}function pg(e){ni(e),e.querySelectorAll("video.catalog-video").forEach(t=>{t.addEventListener("play",()=>Lt()),t.addEventListener("pause",()=>Ke()),t.addEventListener("ended",()=>Ke())}),e.querySelectorAll(".video-share").forEach(t=>{t.addEventListener("click",async()=>{const s=t.dataset.url||"";try{await navigator.clipboard.writeText(s),g("Link copied")}catch{g(s||"Copy failed")}})}),e.querySelectorAll("[data-idb-src]").forEach(async t=>{const s=(t.getAttribute("data-idb-src")||"").trim();if(s)try{const i=await ri(s);if(!i){t.tagName==="VIDEO"&&t.insertAdjacentHTML("afterend",'<p class="muted" style="font-size:12px">Media blob missing — re-upload from Admin.</p>');return}if((t.tagName==="IMG"||t.tagName==="VIDEO"||t.tagName==="AUDIO")&&(t.setAttribute("src",i),t.src=i,t.tagName==="VIDEO"||t.tagName==="AUDIO")){t.setAttribute("playsinline",""),t.setAttribute("webkit-playsinline",""),t.controls=!0;try{t.load()}catch{}}}catch(i){console.warn("idb media hydrate failed",s,i)}})}function mg(){const e=gn.map(i=>`<li><span>${r(i.name)}</span><strong>$${i.price}/mo</strong></li>`).join(""),t=M().creatorSellApps||[],s=t.length?`<ul class="list-plain" style="margin-top:10px">${t.slice(0,8).map(i=>`<li><span>${r(i.name)} · ${r(i.contact)} · ${r(i.sells)}</span><span class="chip">${r(i.status||"pending")}</span></li>`).join("")}</ul>`:'<p class="muted" style="margin:8px 0 0;font-size:12px">No applications on this device yet.</p>';return I("Pricing",`<div class="card">
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
     </div>`,{lead:"Sell music, videos, beats &amp; merch · rules &amp; fees · apply form · memberships &amp; gifts — admin-adjustable."})}function gg(e){var s;typeof location<"u"&&(location.hash.includes("focus=sell")||location.hash.includes("creator-sell"))&&setTimeout(()=>{var i;return(i=document.getElementById("creator-sell"))==null?void 0:i.scrollIntoView({behavior:"smooth",block:"start"})},60),(s=e.querySelector("#csSubmit"))==null||s.addEventListener("click",()=>{var c,d,p,m,f,b;const i=(d=(c=e.querySelector("#csName"))==null?void 0:c.value)==null?void 0:d.trim(),a=(m=(p=e.querySelector("#csContact"))==null?void 0:p.value)==null?void 0:m.trim(),n=((f=e.querySelector("#csSells"))==null?void 0:f.value)||"both",l=!!((b=e.querySelector("#csAgree"))!=null&&b.checked);if(!i||!a)return g("Name and email/handle required");if(!l)return g("Agree to rules & fees to continue");const o=yo({name:i,contact:a,sells:n,agreed:l});if(o!=null&&o.error)return g(o.error==="rules"?"Agree to rules & fees to continue":"Name and email/handle required");g("Application saved · TEST MODE"),O("#/pricing?focus=sell")})}function fg(){return I("Community Guidelines",`<div class="card">
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
    </div>`,{lead:"Rules for posts, chat, Live & Lounge — plan §13."})}const yi=[{id:"dbs-lounge",cat:"NETWORK",hash:"#dbs-lounge",name:"PIKK Lounge",blurb:"Main hub · official announcements & network news",chip:"Hub"},{id:"conversation",cat:"NETWORK",hash:"#the-conversation",name:"The Conversation",blurb:"Public music & fan discussion threads",chip:"Public"},{id:"listening",cat:"VOICE / LISTENING",hash:"#listening-rooms",name:"Listening Rooms",blurb:"Listening parties & reactions to new releases",chip:"Parties"},{id:"backstage",cat:"MEMBERS",hash:"#backstage-rooms",name:"Backstage Rooms",blurb:"Tier-restricted spaces for Skeet+ / Backstage / Inner Circle",chip:"Members"},{id:"live-rooms",cat:"NETWORK",hash:"#live-rooms",name:"Live Rooms",blurb:"Scheduled community events & discussions",chip:"Events"},{id:"spotlight",cat:"NETWORK",hash:"#the-spotlight",name:"The Spotlight",blurb:"Featured fan conversations & creator posts",chip:"Featured"}],un={"dbs-lounge":[{who:"PIKK · System",text:"Welcome to PIKK Lounge — DatBoiSkeet’s channel-style community hub.",tag:"DEMO"},{who:"TEST MODE",text:"Live chat isn’t connected yet. These rows are placeholders so the room pane feels real.",tag:"DEMO"}],conversation:[{who:"DEMO",text:"Drop takes on new releases here once Phase 2 chat ships.",tag:"DEMO"}],listening:[{who:"DEMO",text:"Listening parties will sync reactions here — preview only.",tag:"DEMO"}],backstage:[{who:"DEMO",text:"Member-tier rooms unlock with Skeet+ / Backstage / Inner Circle.",tag:"DEMO"}],"live-rooms":[{who:"DEMO",text:"Scheduled community events will list here — no live presence yet.",tag:"DEMO"}],spotlight:[{who:"DEMO",text:"Featured fan conversations land here in Phase 2.",tag:"DEMO"}]},hg=[{name:"DatBoiSkeet",role:"Owner"},{name:"SkeetMod",role:"Mod · DEMO"},{name:"FanDemo01",role:"DEMO"},{name:"ListenerX",role:"DEMO"}];function bg(e){const s=(un[e.id]||un["dbs-lounge"]).map(i=>`<div class="lounge-msg">
        <div class="lounge-msg-avatar" aria-hidden="true">${r(i.who.slice(0,1))}</div>
        <div class="lounge-msg-body">
          <div class="lounge-msg-meta"><strong>${r(i.who)}</strong> <span class="chip">${r(i.tag)}</span></div>
          <p>${r(i.text)}</p>
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
  </div>`}function vg(){const e=[],t=new Set;yi.forEach(n=>{t.has(n.cat)||(t.add(n.cat),e.push(n.cat))});const s=e.map(n=>{const l=yi.filter(o=>o.cat===n).map(o=>`<button type="button" class="lounge-channel${o.id==="dbs-lounge"?" on":""}" data-channel="${r(o.id)}" aria-pressed="${o.id==="dbs-lounge"?"true":"false"}">
            <span class="lounge-hash">#</span>
            <span class="lounge-channel-label">${r(o.name)}</span>
            <span class="chip lounge-channel-chip">${r(o.chip)}</span>
          </button>`).join("");return`<div class="lounge-cat-block">
        <p class="lounge-cat-label">${r(n)}</p>
        ${l}
      </div>`}).join(""),i=yi.map(bg).join(""),a=hg.map(n=>`<li><span class="lounge-member-dot" aria-hidden="true"></span><span><strong>${r(n.name)}</strong><br/><span class="muted" style="font-size:11px">${r(n.role)}</span></span></li>`).join("");return I("PIKK Lounge",`<div class="card lounge-intro">
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
        ${i}
      </section>
      <aside class="lounge-members" aria-label="Demo members">
        <p class="lounge-cat-label">MEMBERS · DEMO</p>
        <ul class="lounge-member-list">${a}</ul>
        <p class="muted" style="font-size:11px;margin:8px 4px 0">Placeholder names — not live presence.</p>
      </aside>
    </div>`,{lead:"Discord-inspired channels · DatBoiSkeet branded.",...dg(2)})}function yg(e=document){const t=e.querySelector("#loungeDiscord")||e,s=[...t.querySelectorAll(".lounge-channel")],i=[...t.querySelectorAll(".lounge-pane")];s.length&&s.forEach(a=>{a.addEventListener("click",()=>{const n=a.dataset.channel;s.forEach(l=>{const o=l===a;l.classList.toggle("on",o),l.setAttribute("aria-pressed",o?"true":"false")}),i.forEach(l=>{l.dataset.pane===n?l.removeAttribute("hidden"):l.setAttribute("hidden","")})})})}function wg(){return I("Signup & Creator Apps",`<div class="card">
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
    </div>`,{lead:"Free fan signup + creator role applications · §16."})}function Sg(){const e=M().notifications;return I("Notifications",`<div class="card" id="notifPrefs">
      <div class="toggle"><span>New releases</span><input type="checkbox" data-k="releases" ${e.releases?"checked":""}/></div>
      <div class="toggle"><span>Livestreams</span><input type="checkbox" data-k="lives" ${e.lives?"checked":""}/></div>
      <div class="toggle"><span>Messages</span><input type="checkbox" data-k="messages" ${e.messages?"checked":""}/></div>
      <div class="toggle"><span>Quiet hours</span><input type="checkbox" data-k="quietHours" ${e.quietHours?"checked":""}/></div>
      <p class="muted" style="margin-top:10px">Prefs saved on this device.</p>
    </div>`,{lead:"In-app center & alert controls."})}function kg(e){e.querySelectorAll("#notifPrefs input").forEach(t=>{t.addEventListener("change",()=>{wo({[t.dataset.k]:t.checked}),g("Saved")})})}function $g(){const t=[{label:"Registration & role approval",status:"Demo",note:"Profile/signup local demo · real auth later"},{label:"Moderation / reporting / appeals",status:"TODO",note:"Guidelines copy ready · enforcement UI Phase 2"},{label:"Payments & refunds",status:"TEST",note:"TEST MODE only · no real charges"},{label:"Creator payouts verification",status:"SHELL",note:"Wallet / KYC stubs · not launch-ready"},{label:"Music & video rights",status:"Partial",note:"3 official MVs · streaming links still SHELL"},{label:"Gift-battle fraud prevention",status:"SHELL",note:"Gift Battles not wired for launch"},{label:"Livestream safety",status:"Demo",note:"Go-live demo PASS · age/safety stack incomplete"},{label:"Background audio pause/resume",status:"PARTIAL",note:"§17 sticky top YT player + pauseDbsPlayer hooks"},{label:"Account recovery / optional 2FA",status:"TODO",note:"Local demo sign-in only"},{label:"Loyalty analytics consent",status:"SHELL",note:"Privacy/consent controls before launch"},{label:"PIKK Connect safety (age + WebRTC)",status:"Blocked",note:"Must not launch without assurance"}].map(s=>`<li><span><strong>${r(s.label)}</strong><br/><span class="muted" style="font-size:12px">${r(s.note)}</span></span><span class="chip">${r(s.status)}</span></li>`).join("");return I("Launch Readiness",`<div class="card">
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
    </div>`,{lead:"Pre-launch checklist with honest demo status · §31."})}function xg(){const e=[{n:1,title:"Foundation",summary:"Videos, Music/Vault, Posts, profiles, followers, engagement alerts, Clippers applications.",status:"DONE",items:[{label:"§1 Posts",status:"DONE",href:"#/posts"},{label:"§2 Clippers apply",status:"DONE",href:"#/clippers"},{label:"§7 Profiles",status:"DONE",href:"#/profile"},{label:"§8 Music & Vault",status:"DONE",href:"#/music"},{label:"§9 Videos & Interviews",status:"DONE",href:"#/videos"},{label:"§14 Streaming links",status:"DONE",href:"#/music"},{label:"§19 Loading splash",status:"DONE",href:"#/home"},{label:"§20 Home dashboard",status:"DONE",href:"#/home"},{label:"§21 Merch showcase",status:"DONE",href:"#/merch"},{label:"§34 Coming Soon covers",status:"DONE",href:"#/music"},{label:"§17 Home MV + continuous play",status:"PARTIAL",href:"#/home",note:"Sticky top YT player · Stream Everywhere open links · PENDING AUDIT"}]},{n:2,title:"Growth & Creator Economy",summary:"Clipper campaigns, missions, referrals, creator earnings, and payouts.",status:"DONE",items:[{label:"§5 Creator Earnings",status:"DONE",href:"#/earnings"},{label:"§6 Missions",status:"DONE",href:"#/missions"},{label:"§27 Wallet & Payouts",status:"DONE",href:"#/wallet"},{label:"§32 Share & Earn",status:"DONE",href:"#/share"},{label:"§33 Refer & Earn",status:"DONE",href:"#/refer"},{label:"§10 Pricing",status:"DONE",href:"#/pricing"},{label:"§11 Admin dashboard",status:"DONE",href:"#/admin"},{label:"§16 Signup / Creator apps",status:"DONE",href:"#/signup"},{label:"§24 Explore",status:"DONE",href:"#/explore"},{label:"§25 Notifications",status:"DONE",href:"#/notifications"},{label:"§26 Fan Clubs",status:"DONE",href:"#/fanclubs"},{label:"§28 Loyalty Club",status:"DONE",href:"#/loyalty"},{label:"§22 Profile Shop cosmetics",status:"DONE",href:"#/shop",note:"Checker PASS · cosmetics demo"}]},{n:3,title:"Live & Marketplace",summary:"Creator livestreaming, gifts, donations, advertising, creator subscriptions, and Marketplace.",status:"DONE",items:[{label:"§3 Live",status:"DONE",href:"#/live"},{label:"§4 Marketplace ads",status:"DONE",href:"#/marketplace"},{label:"§18 Messages",status:"DONE",href:"#/messages"},{label:"§23 Gift Battles",status:"DONE",href:"#/giftbattles"},{label:"§29 Multi-Guest Live",status:"DONE",href:"#/multiguest"},{label:"§30 Open Mic",status:"DONE",href:"#/openmic"},{label:"§35 24/7 Spotlight",status:"DONE",href:"#/spotlight"},{label:"§36 Connect (opt-in shell)",status:"DONE",href:"#/connect"},{label:"§37 Restream + streamer tiers",status:"DONE",href:"#/restream"},{label:"§13 Guidelines",status:"DONE",href:"#/guidelines"},{label:"§15 Community / Lounge",status:"DONE",href:"#/community"},{label:"§31 Launch readiness",status:"DONE",href:"#/launch"}]}],t=i=>i==="DONE"?"chip chip-ok":i==="PARTIAL"?"chip chip-partial":i==="PENDING AUDIT"?"chip chip-audit":"chip",s=e.map(i=>{const a=i.items.map(n=>{const l=n.note?`<br/><span class="muted" style="font-size:12px">${r(n.note)}</span>`:"";return`<li><span>${n.href?`<a href="${r(n.href)}" style="color:inherit;text-decoration:none"><strong>${r(n.label)}</strong></a>`:`<strong>${r(n.label)}</strong>`}${l}</span><span class="${t(n.status)}">${r(n.status)}</span></li>`}).join("");return`<div class="card">
      <div class="row wrap" style="gap:8px;align-items:center;margin-bottom:8px">
        <span class="chip">Phase ${i.n}</span>
        <span class="${t(i.status)}">${r(i.status)}</span>
      </div>
      <h2 style="margin:0 0 6px">${r(i.title)}</h2>
      <p class="muted" style="margin:0 0 12px">${r(i.summary)}</p>
      <ul class="list-plain">${a}</ul>
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
    </div>`,{lead:"Phase 1 · Phase 2 · Phase 3 roadmap with live status chips · §12."})}function Eg(e){return I("Not found",`<div class="card"><p>No page for <code>${r(e)}</code>.</p><a class="btn" href="#/home">Home</a></div>`)}const Ag={"/home":{render:Wd,bind:Yd},"/posts":{render:mu,bind:gu},"/music":{render:Ya,bind:Qa},"/vault":{render:Ya,bind:Qa},"/merch":{render:vu,bind:yu},"/profile":{render:wu,bind:Su},"/clippers":{render:$u,bind:xu},"/videos":{render:ug,bind:pg},"/live":{render:Wu,bind:Xu},"/explore":{render:Dp,bind:Mp},"/marketplace":{render:sp,bind:ip},"/earnings":{render:hp,bind:bp},"/missions":{render:Sp,bind:kp},"/pricing":{render:mg,bind:gg},"/admin":{render:du,bind:uu},"/guidelines":{render:fg},"/community":{render:vg,bind:yg},"/signup":{render:wg},"/messages":{render:dp,bind:up},"/shop":{render:km,bind:$m},"/profile-shop":{render:hm,bind:bm},"/giftbattles":{render:Gp,bind:zp},"/notifications":{render:Sg,bind:kg},"/fanclubs":{render:am,bind:nm},"/wallet":{render:mp,bind:gp},"/loyalty":{render:rm,bind:om},"/multiguest":{render:em,bind:tm},"/openmic":{render:cm,bind:dm},"/launch":{render:$g},"/phases":{render:xg},"/share":{render:rg,bind:lg},"/refer":{render:og,bind:cg},"/spotlight":{render:_m,bind:qm},"/restream":{render:()=>(queueMicrotask(()=>{location.hash="/connect#connect-multistream"}),qi()),bind:Bi},"/shorts":{render:on,bind:ln},"/clips":{render:on,bind:ln},"/connect":{render:qi,bind:Bi},"/blockwars":{render:Gm,bind:Um},"/games":{render:Vm},"/dating":{render:Hm},"/roast-arena":{render:eg,bind:Zm}};function ga(){var t,s,i;const e=document.getElementById("tabbar");if(M().user)try{zi()}catch{}e.innerHTML=co.map(a=>{const l="/"+a.href.replace(/^#/,"").replace(/^\//,"").split(/[?#]/)[0],o=r(a.label);return`<a${a.primary?' class="tab-primary"':""} href="${a.href}" data-path="${l}" aria-label="${o}"${a.href==="#/create"?' aria-haspopup="dialog" aria-controls="pikkCreateMenu" aria-expanded="false"':a.href==="#/music"?' aria-haspopup="dialog" aria-controls="pikkMusicMenu" aria-expanded="false"':Ps[l.slice(1)]?` aria-haspopup="dialog" aria-controls="pikk${o}Menu" aria-expanded="false"`:""}><span class="tab-ico">${a.href==="#/create"?'<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><path d="M9 5 L25 16 L9 27 Z" fill="currentColor"/><path d="M24 5v11m0 0-4-4m4 4 4-4" stroke="white" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>':ud[a.icon]||""}</span><span>${o}</span></a>`}).join("");for(const a of Object.keys(Ps))(t=e.querySelector(`a[href="#/${a}"]`))==null||t.addEventListener("click",n=>{n.preventDefault(),io(a,n.currentTarget)});(s=e.querySelector('a[href="#/music"]'))==null||s.addEventListener("click",a=>{a.preventDefault(),ft(),Cd(a.currentTarget)}),(i=e.querySelector('a[href="#/create"]'))==null||i.addEventListener("click",a=>{var l;Qt(),ft(),a.preventDefault();const n=Tg();n.hidden=!n.hidden,a.currentTarget.setAttribute("aria-expanded",String(!n.hidden)),n.hidden||(l=n.querySelector("[data-create-close]"))==null||l.focus()}),e.style.gridTemplateColumns="",e.classList.remove("tabbar-scroll"),e.classList.add("tabbar-reshaped","tabbar-fit7")}function Tg(){let e=document.getElementById("pikkCreateMenu");if(e)return e;e=document.createElement("div"),e.id="pikkCreateMenu",e.className="pikk-create-overlay",e.hidden=!0,e.innerHTML=`<div class="pikk-create-sheet" role="dialog" aria-modal="true" aria-label="Create on PIKK">
    <div class="pikk-create-head"><strong>Create on PIKK</strong><button type="button" class="btn ghost" data-create-close aria-label="Close create menu">✕</button></div>
    <div class="pikk-create-options">
      <a href="#/posts?type=picture">▧ Post Picture <small>Photo or album · TEST MODE</small></a>
      <a href="#/posts?type=short">▣ Create Reel <small>Short-form video · TEST MODE</small></a>
      <a href="#/posts?type=short">▶ Upload Short <small>Vertical clip · TEST MODE</small></a>
      <a href="#/posts?type=picture">◌ Post Story <small>Story publishing not yet available</small></a>
      <a href="#/music">◉ Upload Beat <small>Producer uploads coming later</small></a>
      <a href="#/music">♫ Upload Song <small>Music uploads coming later</small></a>
      <a href="#/live?go=1">● Go Live <small>Livestream controls · TEST MODE</small></a>
      <a href="#/posts?type=video">▸ Upload Video <small>Long video · TEST MODE</small></a>
      <a href="#/shop">▤ Sell Something <small>Shop listing tools · TEST MODE</small></a>
      <a href="#/posts?type=text">✎ Write Post <small>Text and updates</small></a>
    </div>
    <p class="muted" style="font-size:11px;margin:10px 0 0">TEST MODE · uploads depend on available prototype tools</p>
  </div>`,document.body.appendChild(e);const t=(s=!1)=>{e.hidden=!0;const i=document.querySelector('#tabbar a[href="#/create"]');i==null||i.setAttribute("aria-expanded","false"),s&&(i==null||i.focus())};return window.addEventListener("hashchange",()=>t()),e.addEventListener("click",s=>{s.target===e||s.target.closest("[data-create-close]")?t(!0):s.target.closest(".pikk-create-options a")&&t()}),document.addEventListener("keydown",s=>{if(!e.hidden&&(s.key==="Escape"&&(s.preventDefault(),t(!0)),s.key==="Tab")){const i=[...e.querySelectorAll("a[href], button:not([disabled])")],a=i[0],n=i[i.length-1];if(!a){s.preventDefault();return}e.contains(document.activeElement)?s.shiftKey&&document.activeElement===a?(s.preventDefault(),n.focus()):!s.shiftKey&&document.activeElement===n&&(s.preventDefault(),a.focus()):(s.preventDefault(),(s.shiftKey?n:a).focus())}}),e}function Dg(){const e=document.getElementById("tabbar");if(!e)return;ga();const t=Ye();_r(e,t.path);try{to()}catch{}}function Cg(){const e=document.getElementById("sideNav"),t=Ye(),s="#"+(t.raw||t.path),i="#"+t.path,a=fn.map(n=>{if(n.href)return`<a class="drawer-direct${n.href===i||n.href===s?" on":""}" href="${n.href}">${r(n.label)}</a>`;const l=n.links||[],o=l.some(m=>m.href===i||m.href===s),c=o?" open":"",d=o?" has-active":"",p=l.map(m=>`<a class="drawer-link${m.href===i||m.href===s?" on":""}" href="${m.href}">${r(m.label)}</a>`).join("");return`<div class="drawer-group${c}${d}" data-group="${r(n.id)}"><button type="button" class="drawer-cat" aria-expanded="${o?"true":"false"}"><span>${r(n.label)}</span><span class="drawer-caret" aria-hidden="true"></span></button><div class="drawer-children" role="group">${p}</div></div>`}).join("");e.innerHTML=`<h2>PIKK Network</h2>${a}`}function wi(e){document.getElementById("sideNav").classList.toggle("open",e),document.getElementById("sideNav").setAttribute("aria-hidden",e?"false":"true"),document.getElementById("scrim").classList.toggle("show",e)}function Mg(e){const t=e.path;ga(),_r(document.getElementById("tabbar"),t),document.querySelectorAll("#sideNav a").forEach(n=>{const l=n.getAttribute("href")||"";n.classList.toggle("on",l==="#"+t||l==="#"+e.raw)});const s="#"+t,i="#"+e.raw;document.querySelectorAll("#sideNav .drawer-group").forEach(n=>{const l=[...n.querySelectorAll("a")].some(c=>c.getAttribute("href")===s||c.getAttribute("href")===i);n.classList.toggle("open",l),n.classList.toggle("has-active",l);const o=n.querySelector(".drawer-cat");o&&o.setAttribute("aria-expanded",l?"true":"false")});const a=document.getElementById("headerMsg");if(a&&(a.hidden=!1),M().user)try{zi()}catch{}to()}function to(){const e=document.getElementById("headerMsgBadge"),t=document.getElementById("headerMsg");if(!e||!t)return;let s=0;try{s=Xe()}catch{s=0}if(s>0){const i=s>99?"99+":String(s);e.textContent=i,e.hidden=!1,t.setAttribute("aria-label",`Messages, ${s} unread`)}else e.textContent="",e.hidden=!0,t.setAttribute("aria-label","Messages")}function Lg(e){var a;const t=document.getElementById("app"),s=Ag[e.path],i=s?s.render(e):Eg(e.path);t.innerHTML=i,Ir(t),(a=s==null?void 0:s.bind)==null||a.call(s,t),Mg(e),wd(e.path),window.scrollTo(0,0),(e.path==="/music"||e.path==="/vault")&&(location.hash.includes("vault")||e.path==="/vault")&&setTimeout(()=>{var n;return(n=document.getElementById("vault"))==null?void 0:n.scrollIntoView({behavior:"smooth"})},50),e.path==="/pricing"&&(location.hash.includes("focus=sell")||location.hash.includes("creator-sell"))&&setTimeout(()=>{var n;return(n=document.getElementById("creator-sell"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50),e.path==="/wallet"&&(e.elementId==="wallet-coins"||e.query.section==="coins"||location.hash.includes("wallet-coins"))&&setTimeout(()=>{var n;return(n=document.getElementById("wallet-coins"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50),e.path==="/live"&&(e.query.go==="1"||e.elementId==="live-go"||location.hash.includes("go=1"))&&setTimeout(()=>{var n;return(n=document.getElementById("live-go"))==null?void 0:n.scrollIntoView({behavior:"smooth",block:"start"})},50)}function Pg(){if(new URLSearchParams(location.search).has("holdSplash"))return;const e=document.getElementById("splash");!e||e.classList.contains("hide")||(e.classList.add("hide"),So(),setTimeout(()=>e.remove(),500))}function Ig(){const e=document.getElementById("splashChime");if(!e)return;const t=()=>{const i=e.play();i&&typeof i.catch=="function"&&i.catch(()=>{})};t();const s=()=>{t(),window.removeEventListener("pointerdown",s),window.removeEventListener("keydown",s)};window.addEventListener("pointerdown",s,{once:!0}),window.addEventListener("keydown",s,{once:!0})}function _g(){window.addEventListener("dbs:interrupt-music",e=>{var s;const t=((s=e==null?void 0:e.detail)==null?void 0:s.reason)||"route";vs(t)}),window.addEventListener("dbs:resume-music",e=>{var s;const t=(s=e==null?void 0:e.detail)==null?void 0:s.reason;t==="live"?Cr():t==="video"?Ke():Dr(t)})}function qg(){window.addEventListener("dbs:messages-unread",()=>{try{Dg()}catch{}})}function Bg(){if(bn(),Ir(document),ga(),Cg(),yd(),_g(),qg(),document.getElementById("menuBtn").addEventListener("click",()=>wi(!0)),document.getElementById("scrim").addEventListener("click",()=>wi(!1)),document.getElementById("sideNav").addEventListener("click",e=>{const t=e.target.closest(".drawer-cat");if(t){e.preventDefault();const s=t.closest(".drawer-group"),i=!s.classList.contains("open");document.querySelectorAll("#sideNav .drawer-group").forEach(a=>{const n=i&&a===s;a.classList.toggle("open",n);const l=a.querySelector(".drawer-cat");l&&l.setAttribute("aria-expanded",n?"true":"false")});return}e.target.closest("a")&&wi(!1)}),document.getElementById("notifBtn").addEventListener("click",()=>{location.hash="/notifications"}),Ed(Lg),Ad(),!ko()&&!new URLSearchParams(location.search).has("holdSplash")){const e=document.getElementById("splash");e&&e.remove()}else{Ig();let e=!1;setTimeout(()=>{e||(e=!0,Pg())},3e3)}}Bg();
