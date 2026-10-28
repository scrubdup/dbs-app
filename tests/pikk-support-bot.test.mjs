import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {SUPPORT_TOPICS,supportAnswer} from '../src/pages/support.js';
const page=readFileSync(new URL('../src/pages/support.js',import.meta.url),'utf8');
const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
test('support bot answers six common question categories without inventing active features',()=>{
 assert.equal(SUPPORT_TOPICS.length,6);
 assert.equal(supportAnswer('how do I download mp3').topic,'downloads');
 assert.equal(supportAnswer('my account password').topic,'account');
 assert.equal(supportAnswer('copyright upload stolen').topic,'rights');
 assert.equal(supportAnswer('weird nonsense 123').matched,false);
 assert.match(supportAnswer('weird nonsense 123').text,/cannot deliver tickets/);
});
test('support ticket clearly remains a local prototype with no invented delivery',()=>{
 assert.match(page,/NOT submitted to staff/);
 assert.match(page,/Saved on this device/);
 assert.match(page,/localStorage\.setItem/);
 assert.match(page,/maxlength="1500"/);
 assert.match(page,/Do not enter passwords/);
 assert.match(main,/\/support': \{ render: renderSupport, bind: bindSupport \}/);
 assert.match(main,/href="#\/support">PIKK Support/);
});
