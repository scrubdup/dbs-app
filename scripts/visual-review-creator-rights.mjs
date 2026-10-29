import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {chromium} from 'playwright';
process.env.PW_TEST_SCREENSHOT_NO_FONTS_READY='1';
const base='http://127.0.0.1:4173/pikk-app/';
const server=spawn('npx',['vite','preview','--host','127.0.0.1','--port','4173','--strictPort'],{stdio:'inherit'});
const sleep=t=>new Promise(r=>setTimeout(r,t));
try{
 let ready=false;for(let i=0;i<60;i++){try{if((await fetch(base)).ok){ready=true;break}}catch{}await sleep(250)}
 assert.ok(ready,'preview unavailable');await mkdir('visual-review',{recursive:true});
 const browser=await chromium.launch({headless:true});
 try{
  for(const [device,width,height] of [['mobile',390,844],['desktop',1440,900]]){
   const ctx=await browser.newContext({viewport:{width,height},reducedMotion:'reduce'});
   const page=await ctx.newPage(),errors=[];
   page.on('pageerror',e=>errors.push(e.message));
   await page.goto(base+'#/creator-rights',{waitUntil:'domcontentloaded'});
   await page.locator('.creator-rights-header').waitFor({state:'visible'});
   await page.locator('#splash').waitFor({state:'hidden',timeout:15000});
   assert.equal(await page.locator('.creator-rights-item').count(),9);
   assert.equal(await page.locator('#tabbar a').count(),7);
   assert.equal(await page.locator('#dbs-sticky-player').isVisible(),true);
   assert.ok(await page.locator('.logo-img').evaluate(x=>x.complete&&x.naturalWidth>0));
   assert.deepEqual(errors,[]);
   const b=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}));
   assert.ok(b.scroll<=b.viewport+3,'horizontal overflow '+JSON.stringify(b));
   await page.screenshot({path:'visual-review/creator-rights-'+device+'.png',fullPage:true,animations:'disabled'});
   await page.locator('a[href="#/ai-artists"]').click();
   await page.locator('.ai-artist-hero').waitFor({state:'visible'});
   assert.ok(await page.locator('a[href="#/creator-rights"]').count()>=1);
   await ctx.close();
  }
 }finally{await browser.close()}
}finally{server.kill('SIGTERM')}
