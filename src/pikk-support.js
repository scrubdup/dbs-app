// PIKK Support browser-local ticket prototype; no backend or AI service attached.
export const SUPPORT_KEY='pikk_support_local_tickets_v1';
export const SUPPORT_TOPICS=Object.freeze(['Account & login','Music & artist rights','Livestreams & gifts','Billing & purchases','Safety & reporting','Technical issue','Other']);
const LIMIT=40;
export function createSupportTicket(input,now=Date.now()){
 const category=String(input.category||'');
 const subject=String(input.subject||'').trim().slice(0,120);
 const message=String(input.message||'').trim().slice(0,1500);
 const contact=String(input.contact||'').trim().slice(0,180);
 if(!SUPPORT_TOPICS.includes(category)||subject.length<4||message.length<10||!contact)throw Error('Select a topic and enter a subject, contact and detailed message.');
 return {id:'draft-'+now+'-'+Math.random().toString(36).slice(2,7),category,subject,message,contact,createdAt:now,status:'Saved on this device · not submitted'};
}
export function readSupportTickets(storage){
 try{const value=JSON.parse(storage.getItem(SUPPORT_KEY)||'[]');return Array.isArray(value)?value.filter(x=>x&&typeof x.id==='string').slice(0,LIMIT):[]}catch{return []}
}
export function saveSupportTicket(storage,ticket){
 const all=[ticket,...readSupportTickets(storage)].slice(0,LIMIT);
 storage.setItem(SUPPORT_KEY,JSON.stringify(all));return all;
}
export function deleteSupportTicket(storage,id){
 const all=readSupportTickets(storage).filter(x=>x.id!==id);
 storage.setItem(SUPPORT_KEY,JSON.stringify(all));return all;
}
export const SUPPORT_GUIDES=Object.freeze([
 {topic:'Music & artist rights',answer:'For copyright protection, review PIKK Shield. Fingerprinting, review and takedowns are not yet operating.',href:'#/shield'},
 {topic:'Livestreams & gifts',answer:'Check the Live section for available demo features. Real payouts and broadcasts require production integrations.',href:'#/live'},
 {topic:'Billing & purchases',answer:'Wallet and payments shown in this preview may be demonstration values. Do not assume money was charged or refunded.',href:'#/wallet'},
 {topic:'Account & login',answer:'This early version does not provide verified human account recovery or password reset via Support.',href:'#/profile'}
]);
