/**
 * Installs the owner's 15 approved game images from the extracted approved ZIP.
 * Usage: node scripts/install-approved-arcade-art.mjs /path/to/PIKK_Approved_Arcade_Pictures
 *
 * Intentional non-destructive workflow: leaves existing game data unchanged
 * until ALL 15 image files have been verified and copied successfully.
 */
import { stat, copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(fileURLToPath(new URL('..', import.meta.url)));
const source = resolve(process.argv[2] || '');
const artworkDir = join(repo, 'public', 'games', 'approved');
const catalogPath = join(repo, 'src', 'games', 'arcade-catalog.js');
const names = [
  '01_block_wars.jpg','02_pikk_playground.jpg','03_pikk_clash.jpg',
  '04_pikk_knockout.jpg','05_pikk_bowling.jpg','06_pikk_pickleball.jpg',
  '07_pikk_pool.jpg','08_pikk_cup_pong.jpg','09_pikk_poker.jpg',
  '10_pikk_blackjack.jpg','11_pikk_slots.jpg','12_pikk_speed.jpg',
  '13_pikk_spades.jpg','14_pikk_dominoes.jpg','15_pikk_chess.jpg'
];
// SHA-256 fingerprints measured from the 15 owner-supplied approved crops.
// A wrong or replaced image must fail validation rather than silently get installed.
const approvedSHA256Prefixes = [
  "b45e4bfe786d0da0",
  "b80d624fc76f8d56",
  "f8ec5597686ef294",
  "79bc3110ebc41e5e",
  "d278e0ee09096f3c",
  "0ff1a1b6ab6c5095",
  "6e02042e91199946",
  "d9b9eb131b0ba2f8",
  "29e645481a28221c",
  "26d2b5b98e415afe",
  "13f751fc184fcad7",
  "18a357849241be99",
  "7942aff366e7809e",
  "3e3f550ad0500694",
  "a5349c881dbf6948"
];
if (!process.argv[2]) throw new Error('Pass the extracted approved arcade picture folder as the first argument.');
for (const [index, name] of names.entries()) {
  const f=join(source,name), st=await stat(f);
  if (!st.isFile() || st.size<2048) throw new Error('Missing or incomplete approved artwork: '+name);
  const bytes=await readFile(f);
  if (bytes[0]!==0xff || bytes[1]!==0xd8) throw new Error('Not a JPEG: '+name);
  const sha256=createHash('sha256').update(bytes).digest('hex');
  if (!sha256.startsWith(approvedSHA256Prefixes[index])) throw new Error('Wrong or altered approved picture: '+name);
}
const original=await readFile(catalogPath,'utf8');
const lines=original.split('\n');
let count=0;
const updated=lines.map(line=>{
  if (!/^\s*\{ name:/.test(line)) return line;
  if(count>=names.length)throw new Error('Arcade catalog unexpectedly exceeds 15 titles.');
  const art='/games/approved/'+names[count++];
  const cleaned=line.replace(/,? artwork: '[^']*'/,'');
  return cleaned.replace(/, description:/, ", artwork: '"+art+"', description:");
}).join('\n');
if(count!==15 || updated===original)throw new Error('Catalog must contain exactly 15 games. Nothing was changed.');
await mkdir(artworkDir,{recursive:true});
for(const name of names)await copyFile(join(source,name),join(artworkDir,name));
await writeFile(catalogPath,updated);
console.log('Installed 15 exact approved Arcade pictures and linked game catalog. Check all changes in Git before committing.');
