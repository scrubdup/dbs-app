import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {normalizeShieldSubmission,readShieldIntakes,saveShieldIntake,removeShieldIntake,safeShieldUrl} from '../src/pikk-shield.js';
const page=readFileSync(new URL('../src/pages/shield.js',import.meta.url),'utf8');
const main=readFileSync(new URL('../src/main.js',import.meta.url),'utf8');
const music=readFileSync(new URL('../src/pages/music.js',import.meta.url),'utf8');
test('PIKK Shield validates rights declarations and rejects missing certification',()=>{
  const base={title:'Original track',owner:'Artist',rights:'Original creator',contact:'artist@example.com',certified:true,source:'https://example.com/song'};
  const record=normalizeShieldSubmission(base,123);
  assert.equal(record.title,'Original track');
  assert.equal(record.status,'Local draft — not submitted');
  assert.equal(record.source,'https://example.com/song');
  assert.throws(()=>normalizeShieldSubmission({...base,certified:false}),/certification/);
  assert.throws(()=>normalizeShieldSubmission({...base,rights:'Pirated copy'}),/certification/);
  assert.throws(()=>normalizeShieldSubmission({...base,source:'javascript:alert(1)'}),/valid http/);
  assert.equal(safeShieldUrl('file:///local'), '');
});
test('PIKK Shield stores, reads and deletes local drafts without backend claims',()=>{
  const m=new Map();const storage={getItem:k=>m.get(k)||null,setItem:(k,v)=>m.set(k,v)};
  const item=normalizeShieldSubmission({title:'Song',owner:'Artist',rights:'Original creator',contact:'contact',certified:true},1);
  assert.equal(saveShieldIntake(storage,item).length,1);
  assert.equal(readShieldIntakes(storage)[0].id,item.id);
  assert.equal(removeShieldIntake(storage,item.id).length,0);
  storage.setItem('pikk_shield_intake_v1','corrupt');
  assert.deepEqual(readShieldIntakes(storage),[]);
});
test('Shield page is routed, reachable from music and clear about prototype limits',()=>{
  assert.ok(main.includes("'/shield': { render: renderShield, bind: bindShield }"));
  assert.ok(main.includes("import './shield.css'"));
  assert.ok(music.includes('href="#/shield"'));
  for(const token of ['TEST MODE','No upload scanning','not sent to PIKK','Audio fingerprinting','Dispute and appeals','External platform notices','shieldForm','shieldCertify'])assert.ok(page.includes(token),token);
});
