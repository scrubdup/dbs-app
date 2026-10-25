/** Seed / static catalog for DBS demo */

export const VIDEOS = [
  {
    id: 'dirty-money',
    title: 'Dirty Money ft. Lil Baby',
    youtube: 'https://www.youtube.com/watch?v=-rHDLWfiuDI',
    embed: 'https://www.youtube.com/embed/-rHDLWfiuDI',
  },
  {
    id: '93',
    title: '93 ft. DaBaby',
    youtube: 'https://www.youtube.com/watch?v=zC0BYFxs5W0',
    embed: 'https://www.youtube.com/embed/zC0BYFxs5W0',
  },
  {
    id: 'no-love',
    title: 'No Love ft. YFN Lucci',
    youtube: 'https://www.youtube.com/watch?v=6pCVEIE9pB8',
    embed: 'https://www.youtube.com/embed/6pCVEIE9pB8',
  },
];

export const COMING_SOON = [
  {
    id: 'long-story-short',
    title: 'Long Story Short',
    artist: 'DatBoiSkeet',
    cover: '/music/01_Long_Story_Short_Coming_Soon.jpg',
    status: 'Coming Soon',
    order: 1,
  },
  {
    id: 'ladies-only',
    title: 'Ladies Only',
    artist: 'DatBoiSkeet',
    cover: '/music/02_Ladies_Only_Coming_Soon.jpg',
    status: 'Coming Soon',
    order: 2,
  },
];

export const MERCH = [
  {
    id: 'hat-716-orange',
    name: '716 Buffalo Braves Snapback (Black/Orange)',
    price: 30,
    category: 'Hats',
    image: '/merch/01_black_orange_716_hat.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'hat-716-blue',
    name: '716 Buffalo Hat (Blue/Red)',
    price: 30,
    category: 'Hats',
    image: '/merch/02_blue_red_716_hat.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'jacket-blue',
    name: 'Buffalo Sports Varsity Jacket (Blue/White)',
    price: 200,
    category: 'Jackets',
    image: '/merch/03_blue_buffalo_jacket.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'jacket-black',
    name: 'Foreign X-Change Buffalo Varsity (Black/White)',
    price: 200,
    category: 'Jackets',
    image: '/merch/07_black_buffalo_jacket.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'tee-fx-back',
    name: 'Foreign X-Change Graphic Tee (Back)',
    price: 65,
    category: 'Shirts',
    image: '/merch/04_black_fx_tee_back_screenshot.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'tee-fx-front',
    name: 'Foreign X-Change Text Tee (Front)',
    price: 65,
    category: 'Shirts',
    image: '/merch/05_black_fx_tee_front_screenshot.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'tee-ptsd',
    name: 'PTSD Tee (Black)',
    price: 65,
    category: 'Shirts',
    image: '/merch/06_black_ptsd_tee.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'tee-abstract',
    name: 'Abstract FX Tee (White)',
    price: 65,
    category: 'Shirts',
    image: '/merch/08_white_abstract_fx_tee.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'tee-dealer',
    name: 'Support Your Local Dealer Tee (Navy)',
    price: 65,
    category: 'Shirts',
    image: '/merch/09_navy_dealer_tee.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
  {
    id: 'tee-skulls',
    name: 'Skulls FX Tee (White)',
    price: 65,
    category: 'Shirts',
    image: '/merch/10_white_skulls_tee.jpeg',
    shopUrl: 'https://foreignx-change.com',
  },
];

export const MEMBERSHIPS = [
  { id: 'skeet', name: 'Skeet+', price: 3.99, blurb: 'Early releases, basic Vault' },
  { id: 'backstage', name: 'Backstage', price: 7.99, blurb: 'More Vault, studio lives, listening sessions' },
  { id: 'inner', name: 'Inner Circle', price: 14.99, blurb: 'VIP content, private Q&As, exclusive drops' },
];

export const HOME_SECTIONS = [
  { route: '/music', title: 'Music', blurb: 'Releases, Coming Soon, Vault' },
  { route: '/videos', title: 'Videos', blurb: 'Official music videos & interviews' },
  { route: '/posts', title: 'Posts', blurb: 'Photos, clips, conversations' },
  { route: '/live', title: 'Live', blurb: 'Creators live now' },
  { route: '/community', title: 'PIKK Lounge', blurb: 'Community rooms' },
  { route: '/vault', title: 'Vault', blurb: 'Member exclusives' },
  { route: '/marketplace', title: 'Marketplace', blurb: 'Sponsored offers' },
  { route: '/missions', title: 'Missions', blurb: 'Clipper campaigns' },
];

/** Drawer / side nav entries */
export const DRAWER_LINKS = [
  { href: '#/home', label: 'Home' },
  { href: '#/posts', label: 'Posts' },
  { href: '#/music', label: 'Music & Vault' },
  { href: '#/videos', label: 'Videos' },
  { href: '#/merch', label: 'Foreign X-Change Merch' },
  { href: '#/live', label: 'Live' },
  { href: '#/explore', label: 'Explore' },
  { href: '#/spotlight', label: '24/7 Spotlight' },
  { href: '#/connect', label: 'Connect' },
  { href: '#/clippers', label: 'Clippers Apply' },
  { href: '#/marketplace', label: 'Marketplace' },
  { href: '#/missions', label: 'Missions' },
  { href: '#/messages', label: 'Messages' },
  { href: '#/shop', label: 'Profile Shop' },
  { href: '#/wallet', label: 'Wallet' },
  { href: '#/earnings', label: 'Creator Earnings' },
  { href: '#/loyalty', label: 'Loyalty Club' },
  { href: '#/fanclubs', label: 'Fan Clubs' },
  { href: '#/community', label: 'PIKK Lounge' },
  { href: '#/openmic', label: 'Open Mic' },
  { href: '#/share', label: 'Share & Earn' },
  { href: '#/refer', label: 'Refer & Earn' },
  { href: '#/giftbattles', label: 'Gift Battles' },
  { href: '#/multiguest', label: 'Multi-Guest Live' },
  { href: '#/notifications', label: 'Notifications' },
  { href: '#/pricing', label: 'Pricing' },
  { href: '#/signup', label: 'Signup / Creator Apps' },
  { href: '#/guidelines', label: 'Community Guidelines' },
  { href: '#/admin', label: 'Admin' },
  { href: '#/launch', label: 'Launch Readiness' },
  { href: '#/profile', label: 'Profile' },
];

export const TABBAR = [
  { href: '#/home', label: 'Home', icon: 'home' },
  { href: '#/posts', label: 'Posts', icon: 'posts' },
  { href: '#/music', label: 'Music', icon: 'music' },
  { href: '#/merch', label: 'Merch', icon: 'merch' },
  { href: '#/explore', label: 'Explore', icon: 'explore' },
  { href: '#/live', label: 'Live', icon: 'live' },
  { href: '#/profile', label: 'Profile', icon: 'profile' },
];
