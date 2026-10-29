import {esc,shellPage,toast} from '../ui.js';
import {SUPPORT_TOPICS,SUPPORT_GUIDES,createSupportTicket,saveSupportTicket,readSupportTickets,deleteSupportTicket} from '../pikk-support.js';
export function renderSupport(){
 const tickets=readSupportTickets(window.localStorage);
 const guides=SUPPORT_GUIDES.map(g=>`<a class="support-guide" href="${esc(g.href)}"><strong>${esc(g.topic)}</strong><span>${esc(g.answer)}</span><span class="support-guide-link">View related page →</span></a>`).join('');
 const history=tickets.length?tickets.map(t=>`<article class="card support-ticket" data-id="${esc(t.id)}"><strong>${esc(t.subject)}</strong><span class="chip">${esc(t.status)}</span><p class="muted">${esc(t.category)} · ${new Date(t.createdAt).toLocaleDateString()}</p><button class="btn ghost support-delete" type="button" data-id="${esc(t.id)}">Delete local draft</button></article>`).join(''):'<p class="muted">No support drafts saved on this device.</p>';
 return shellPage('PIKK Support',`
  <div class="support-studio">
   <header class="support-hero"><span class="support-eyebrow">PIKK HELP CENTER · EARLY ACCESS</span><h2>Answers, guidance & support</h2><p>Find relevant help and prepare a support ticket. Human agents, AI chat, account actions and backend tickets are not yet connected.</p><p class="support-warning"><strong>TEST MODE:</strong> Tickets are saved only in this browser. No request is sent to staff. For urgent safety concerns or unauthorized charges, contact the relevant service or authorities directly.</p></header>
   <div class="support-layout">
    <section class="card support-pane"><h3>Find help</h3><div class="support-guides">${guides}</div><p class="muted">These are general guides, not an automated resolution or personalized AI answer.</p></section>
    <section class="card support-pane"><h3>Prepare a support ticket</h3><p class="muted">Do not include passwords, payment card numbers, government IDs or confidential documents.</p>
     <form id="pikkSupportForm">
      <div class="field"><label for="pikkSupportTopic">Issue category *</label><select id="pikkSupportTopic" name="category">${SUPPORT_TOPICS.map(t=>`<option value="${esc(t)}">${esc(t)}</option>`).join('')}</select></div>
      <div class="field"><label for="pikkSupportSubject">Subject *</label><input id="pikkSupportSubject" name="subject" maxlength="120" minlength="4" required /></div>
      <div class="field"><label for="pikkSupportContact">Contact *</label><input id="pikkSupportContact" name="contact" maxlength="180" required placeholder="Email or username" /></div>
      <div class="field"><label for="pikkSupportMessage">Describe the issue *</label><textarea id="pikkSupportMessage" name="message" minlength="10" maxlength="1500" required></textarea></div>
      <button class="btn primary" type="submit">Save ticket draft locally</button>
     </form>
    </section>
   </div>
   <section class="card support-pane"><h3>My ticket drafts (${tickets.length})</h3><div class="support-history">${history}</div></section>
  </div>`,{lead:'Local help preview · Ticket submission and AI agents are not yet live'});
}
export function bindSupport(root){
 root.querySelector('#pikkSupportForm')?.addEventListener('submit',event=>{
  event.preventDefault();
  const f=event.currentTarget;
  try{
   const item=createSupportTicket({category:f.elements.category.value,subject:f.elements.subject.value,contact:f.elements.contact.value,message:f.elements.message.value});
   saveSupportTicket(window.localStorage,item);
   toast('Ticket draft saved locally · not sent');
   if(location.hash==='#/support')location.hash='#/support?updated=1';
   window.dispatchEvent(new HashChangeEvent('hashchange'));
  }catch(e){toast(e.message)}
 });
 root.querySelectorAll('.support-delete').forEach(button=>button.addEventListener('click',()=>{
  deleteSupportTicket(window.localStorage,button.dataset.id);
  toast('Local ticket draft deleted');
  window.dispatchEvent(new HashChangeEvent('hashchange'));
 }));
}
