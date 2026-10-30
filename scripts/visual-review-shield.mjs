import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {chromium} from 'playwright';
process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY='1';
const base='http://127.0.0.1:4173/pikk-app/';
const server=spawn('npx',['vite','preview','--host','127.0.0.1','--port','4173','--strictPort'],{env:{...process.env,VITE_BASE:'/pikk-app/'},stdio:'inherit'});
const sleep=t=>new Promise(r=>setTimeout(r,t));
try{
 let ok=false;for(let i=0;i<60;i++){try{if((await fetch(base)).ok){ok=true;break}}catch{}await sleep(250)}
 assert.ok(ok,'preview server failed');await mkdir('visual-review',{recursive:true});
 const browser=await chromium.launch({headless:true});
 try{for(const [label,viewport,mobile] of [['mobile',{width:390,height:844},true],['desktop',{width:1440,height:900},false]]){
  const context=await browser.newContext({viewport,deviceScaleFactor:1,reducedMotion:'reduce',...(mobile?{isMobile:true,hasTouch:true}:{})});
  const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base+'#/shield',{waitUntil:'domcontentloaded',timeout:30000});
  await page.locator('.shield-hero').waitFor({state:'visible',timeout:20000});
  await page.locator('#splash').waitFor({state:'hidden',timeout:15000});
  assert.equal(await page.locator('#tabbar a').count(),7);
  assert.equal(await page.locator('#dbs-sticky-player').isVisible(),true);
  assert.ok(await page.locator('.logo-img').evaluate(el=>el.complete&&el.naturalWidth>0),'official logo loaded');
  assert.equal(await page.locator('.shield-roadmap>div').count(),4);
  const check=async(stage)=>{
   assert.deepEqual(errors,[],'JS errors');
   const bounds=await page.evaluate(()=>({document:document.documentElement.scrollWidth,viewport:innerWidth}));
   assert.ok(bounds.document<=bounds.viewport+3,'horizontal overflow '+JSON.stringify(bounds));
   await page.screenshot({path:'visual-review/shield-'+label+'-'+stage+'.png',fullPage:true,animations:'disabled'});
  };
  await check('empty');
  await page.locator('#shieldTitle').fill('Original demo song');
  await page.locator('#shieldOwner').fill('PIKK Test Artist');
  await page.locator('#shieldContact').fill('test@example.com');
  await page.locator('#shieldSource').fill('https://example.com/official-track');
  await page.locator('#shieldNotes').fill('Original composition; rights held by PIKK Test Artist.');
  await page.locator('#shieldCertify').check();
  await page.locator('#shieldForm button[type=submit]').click();
  await page.locator('.shield-entry').waitFor({state:'visible'});
  assert.match(await page.locator('.shield-entry').first().textContent(),/Local draft — not submitted/);
  await page.reload({waitUntil:'domcontentloaded'});
  await page.locator('.shield-entry').waitFor({state:'visible'});
  assert.equal(await page.locator('.shield-entry').count(),1,'local persistence');
  await check('saved');
  const review=page.locator('.shield-draft-details');
  await review.locator('summary').click();
  assert.equal(await review.getAttribute('open'),'', 'review expands on click');
  assert.match(await review.textContent(),/test@example.com/);
  assert.match(await review.textContent(),/Original composition/);
  const source=review.locator('a');
  assert.equal(await source.getAttribute('href'),'https://example.com/official-track');
  assert.equal(await source.getAttribute('rel'),'noopener noreferrer');
  await check('expanded');
  // Dismiss first: the saved rights draft must remain intact.
  page.once('dialog',dialog=>dialog.dismiss());
  await page.locator('.shield-delete').click();
  assert.equal(await page.locator('.shield-entry').count(),1,'cancelled deletion must preserve draft');
  // Confirm second: deletion removes only the selected browser-local draft.
  page.once('dialog',dialog=>dialog.accept());
  await page.locator('.shield-delete').click();
  await page.locator('.shield-history').getByText('No rights declarations').waitFor();
  await context.close();
 }}finally{await browser.close()}
}finally{server.kill('SIGTERM')}
