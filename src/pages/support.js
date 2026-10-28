import {esc, shellPage} from '../ui.js';

export const SUPPORT_TOPICS = Object.freeze([
  {key:'downloads',label:'Downloads & purchased music',words:['download','mp3','flac','offline','owned','purchase','song','album'],answer:'Music purchases and permanent DRM-free downloads are planned, but not active yet. A demo item in My Music is not a paid purchase or downloadable file.'},
  {key:'payments',label:'Payments, coins & refunds',words:['payment','refund','charge','money','coins','billing','credit'],answer:'Real music checkout is not active. If you believe a payment was made elsewhere, verify the merchant and do not share card numbers in chat. PIKK support ticket delivery is not yet connected.'},
  {key:'account',label:'Account and sign-in',words:['login','password','account','signin','sign in','profile','reset'],answer:'Open Profile to access account options. Never share passwords or verification codes with support.'},
  {key:'live',label:'Livestreaming and creator tools',words:['live','stream','broadcast','twitch','youtube','tiktok','kick'],answer:'Open Connect or Live for the current livestream prototype. External multi-platform publishing and some creator tools remain in development.'},
  {key:'rights',label:'Copyright and music protection',words:['copyright','rights','piracy','fingerprint','stolen','claim','sample','royalty','upload'],answer:'PIKK Rights & Protection is planned, not active. Copyright registration, audio fingerprinting, third-party claims and takedowns are not currently provided. Visit Music for the proposal.'},
  {key:'community',label:'Safety and reporting',words:['report','harassment','abuse','ban','safety','bully','inappropriate'],answer:'Use available in-app reporting controls for content issues. For urgent threats or emergencies, contact local emergency services. This preview chat is not monitored by a support team.'},
]);
export function supportAnswer(input) {
  const q = String(input || '').toLowerCase().trim().slice(0,500);
  if (!q) return {matched:false,text:'Choose a help topic, or describe your issue in a few words.'};
  const candidates = SUPPORT_TOPICS.map(x=>({topic:x,score:x.words.reduce((n,w)=>n+(q.includes(w)?w.length:0),0)})).sort((a,b)=>b.score-a.score);
  return candidates[0].score ? {matched:true,topic:candidates[0].topic.key,text:candidates[0].topic.answer} : {matched:false,text:"I don’t have a reliable answer for that yet. You can save a support-ticket draft below. This demo cannot deliver tickets to the PIKK team."};
}
const TICKET_KEY='pikk_support_ticket_drafts_v1';
const MAX_TICKETS=20;
function readDrafts(){
  try {const v=JSON.parse(localStorage.getItem(TICKET_KEY)||'[]');return Array.isArray(v)?v.slice(0,MAX_TICKETS):[]}catch{return [];}
}
function saveDraft(t){
  const all=[t,...readDrafts()].slice(0,MAX_TICKETS);
  try{localStorage.setItem(TICKET_KEY,JSON.stringify(all));return true}catch{return false;}
}
export function renderSupport(){
  return shellPage('PIKK Support', `
  <section class="pikk-support card">
    <p class="kicker">PIKK HELP CENTER · PREVIEW</p>
    <h2>How can we help?</h2>
    <p class="muted">Get instant answers to common questions or prepare a ticket for human support.</p>
    <p class="pikk-support-warning"><strong>TEST MODE:</strong> This is a rule-based help assistant, not a live AI agent. Tickets are saved only in this browser and are <strong>not submitted to staff</strong>. Do not enter passwords, payment-card details, government IDs or private documents.</p>
    <div class="pikk-support-layout">
      <div class="pikk-support-chat">
        <h3>Automated Help Assistant</h3>
        <div class="pikk-support-reply" role="status" aria-live="polite" id="supportReply">Hi! Choose a topic below or ask a question. If I can’t help, you can prepare a ticket.</div>
        <div class="pikk-support-topics">${SUPPORT_TOPICS.map(t=>`<button type="button" data-support-topic="${esc(t.key)}">${esc(t.label)}</button>`).join('')}</div>
        <form id="supportQuestionForm"><label for="supportQuestion">Ask a question</label><div class="pikk-support-inputrow"><input id="supportQuestion" name="question" maxlength="500" placeholder="How do I download a song?" required autocomplete="off"/><button class="btn primary" type="submit">Ask</button></div></form>
      </div>
      <div class="pikk-support-ticket">
        <h3>Need a person? Prepare a ticket</h3>
        <form id="supportTicketForm">
          <label for="supportTicketTopic">Issue category</label>
          <select id="supportTicketTopic" name="category" required>${SUPPORT_TOPICS.map(t=>`<option value="${esc(t.key)}">${esc(t.label)}</option>`).join('')}<option value="other">Other issue</option></select>
          <label for="supportTicketSubject">Subject</label><input id="supportTicketSubject" name="subject" maxlength="100" required placeholder="Briefly explain the issue"/>
          <label for="supportTicketDescription">What happened?</label><textarea id="supportTicketDescription" name="description" rows="5" maxlength="1500" minlength="15" required placeholder="Describe the problem (no sensitive information)"></textarea>
          <button class="btn primary" type="submit">Save ticket draft · TEST MODE</button>
        </form>
        <p id="supportTicketStatus" role="status" aria-live="polite" class="muted">No support team receives these drafts yet. A secure helpdesk and staff response workflow are required before launch.</p>
        <div id="supportDraftList"></div>
      </div>
    </div>
  </section>`,{lead:'Automated answers and ticket drafts. Human support not connected yet.'});
}
export function bindSupport(root){
  const response=root.querySelector('#supportReply');
  const ask=(q)=>{const answer=supportAnswer(q);response.textContent=answer.text; if(answer.topic){root.querySelector('#supportTicketTopic').value=answer.topic;}};
  root.querySelectorAll('[data-support-topic]').forEach(btn=>btn.addEventListener('click',()=>ask(SUPPORT_TOPICS.find(t=>t.key===btn.dataset.supportTopic)?.words[0]||'')));
  root.querySelector('#supportQuestionForm')?.addEventListener('submit',e=>{e.preventDefault();ask(root.querySelector('#supportQuestion').value)});
  const list=root.querySelector('#supportDraftList'),status=root.querySelector('#supportTicketStatus');
  const redraw=()=>{const drafts=readDrafts();list.innerHTML=drafts.length?'<h4>Saved on this device · not sent</h4>'+drafts.map(t=>`<div class="pikk-support-draft"><strong>${esc(t.subject)}</strong><small>Draft only · ${esc(t.category)} · ${esc(t.created)}</small></div>`).join(''):''};
  redraw();
  root.querySelector('#supportTicketForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    const form=e.currentTarget;if(!form.reportValidity())return;
    const d=new FormData(form);
    const record={category:String(d.get('category')||'other').slice(0,30),subject:String(d.get('subject')||'').trim().slice(0,100),description:String(d.get('description')||'').trim().slice(0,1500),created:new Date().toISOString().slice(0,10)};
    if(record.description.length<15){status.textContent='Please provide at least 15 characters describing the issue.';return}
    if(!saveDraft(record)){status.textContent='Could not save ticket draft on this device. It was not submitted.';return}
    form.reset();status.textContent='Draft saved on this device only. Not sent to PIKK staff. A future helpdesk connection is required.';redraw();
  });
}
