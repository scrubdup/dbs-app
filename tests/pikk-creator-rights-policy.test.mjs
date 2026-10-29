import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
const ai=readFileSync(new URL('../src/pages/ai-artists.js',import.meta.url),'utf8');
const shield=readFileSync(new URL('../src/pages/shield.js',import.meta.url),'utf8');
const page=readFileSync(new URL('../src/pages/creator-rights-policy.js',import.meta.url),'utf8');
const policy=readFileSync(new URL('../docs/PIKK_CREATOR_RIGHTS_IP_IMPERSONATION_POLICY_DRAFT.md',import.meta.url),'utf8');
test('Rights rules have separate page and are linked from Shield and AI Artists',()=>{
 assert.match(main,/\/creator-rights': \{ render: renderCreatorRightsPolicy/);
 assert.match(ai,/href="#\/creator-rights"/);
 assert.match(shield,/href="#\/creator-rights"/);
 assert.match(page,/DRAFT POLICY/);
 assert.match(page,/not yet verified as active services/);
});
test('Rights policy addresses piracy, AI, impersonation and fair use without claiming blanket immunity',()=>{
 for(const phrase of ['counter-notice','DMCA agent','repeat-infringer','indemnification','fair use','commercial rights','Counterfeit','voice','appeals','not legal advice'])assert.ok(policy.toLowerCase().includes(phrase.toLowerCase()),phrase);
 assert.match(policy,/do not prevent lawsuits/i);
 assert.match(page,/platform rule does not eliminate/);
});
