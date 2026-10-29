import {shellPage} from '../ui.js';
const VIOLATIONS = [
 ['Unlicensed uploads','Uploading or selling other people\'s songs, beats, samples, videos, photos, art, writing or designs without permission or another valid legal basis.'],
 ['Counterfeit goods and piracy','Selling knockoff brands, copied products, pirated downloads or copied designs while suggesting they are genuine.'],
 ['False identity or affiliation','Impersonating artists, designers, creators, labels or brands; using logos, verified badges or handles to mislead fans.'],
 ['AI voice, face and identity misuse','Using realistic AI clones of a person\'s voice, face, name or likeness without required permission, particularly for fake endorsements or sales.'],
 ['Hidden AI content','Misrepresenting fully AI-generated music or virtual performers as human-made, or hiding required AI disclosures.'],
 ['Altered unauthorized copies','Reuploading protected music or video with speed, pitch, crops or filters to evade rights detection.'],
 ['Fake rights and complaints','Forging licenses, making false ownership claims or knowingly submitting false infringement notices or counter-notices.'],
 ['Misleading merchandise','Using stolen product photos, unlicensed trademarks or fabricated official partnerships to sell goods.'],
 ['Ban and takedown evasion','Reposting material already removed for rights violations or using new accounts to avoid enforcement.'],
];
export function renderCreatorRightsPolicy(){
 const cards=VIOLATIONS.map(([title,description],i)=>`<article class="card creator-rights-item"><strong>${i+1}. ${title}</strong><p>${description}</p></article>`).join('');
 return shellPage('Creator Rights & Authenticity',`
 <div class="creator-rights-policy">
  <header class="creator-rights-header"><span class="chip">PIKK CREATOR PROTECTION · DRAFT POLICY</span><h2>Protect original creators. Keep PIKK authentic.</h2><p>Artists, designers and sellers must have the necessary permissions to upload, promote or sell other people's protected work. AI creators are welcome, but must identify AI use and avoid deceptive impersonation.</p><p class="creator-rights-warning"><strong>Policy preview:</strong> This explains proposed rules. Official legal terms, DMCA intake, human review and enforcement are not yet verified as active services. A platform rule does not eliminate anyone's legal liability.</p></header>
  <h3>Prohibited conduct</h3><div class="creator-rights-grid">${cards}</div>
  <section class="card creator-rights-action"><h3>Possible consequences</h3><p>Depending on severity and evidence: warnings, correction of labels, limits on sales, removal, temporary suspension or account termination. Serious impersonation and counterfeiting may require immediate action. Disputes must have appropriate review and appeal procedures.</p></section>
  <section class="card creator-rights-action"><h3>Protection for PIKK and legitimate creators</h3><p>PIKK needs accurate rights declarations, versioned creator agreements, clear reporting and appeals, evidence records, a reasonably implemented repeat-infringer policy and a publicly registered DMCA agent. Contracts can include lawful warranties and indemnification, but cannot guarantee that PIKK will never face a claim.</p><p>Copyright, trademark, right-of-publicity and AI digital-replica issues may involve different laws. Authorized uses, including some fair-use cases, require individualized review.</p><div class="row wrap"><a class="btn" href="#/shield">PIKK Shield preview</a><a class="btn ghost" href="#/ai-artists">AI Artists disclosure</a></div></section>
 </div>`,{lead:'Draft creator rules · Pending legal review and production enforcement'});
}
export function bindCreatorRightsPolicy(){}
