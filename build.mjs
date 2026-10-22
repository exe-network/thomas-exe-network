#!/usr/bin/env node
/*
 * Baut dist/ aus index.html, content.js und den Dateien aus assets/, die wirklich verwendet werden.
 * Läuft auf Mac, Windows und bei Vercel (Node, keine Pakete nötig).
 *
 *   node build.mjs
 *
 * Prüft nebenbei: lange Gedankenstriche, "exe" klein, fehlende Sprachen (en/de), zu große Bilder.
 * Warnungen brechen den Build nicht ab, sie stehen am Ende.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const warn = [];

if (!fs.existsSync(path.join(root, 'content.js'))) { console.error('content.js fehlt.'); process.exit(1); }
const sandbox = { window: {} };
try { vm.runInNewContext(read('content.js'), sandbox, { filename: 'content.js' }); }
catch (e) { console.error('Fehler in content.js: ' + e.message); process.exit(1); }
const card = sandbox.window.CARD;
if (!card || !card.person) { console.error('content.js: window.CARD.person fehlt.'); process.exit(1); }

const p = card.person, m = p.meta || {};
const url = String(p.url || '').replace(/\/$/, '');
const role = (p.role && p.role.en) || '';
const v = {
  title: p.name + ' · ' + p.domain,
  description: m.description || role,
  'og:url': url + '/',
  'og:title': p.name,
  'og:description': m.ogDescription || role + '. Flip the cards.',
  'og:image': url + '/assets/og.png'
};
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Titel und Link-Vorschau-Tags aus content.js setzen (Link-Vorschauen führen kein JavaScript aus)
let html = read('index.html');
html = html.replace(/<title>[\s\S]*?<\/title>/, () => '<title>' + esc(v.title) + '</title>');
html = html.replace(/(<meta name="description" content=")[^"]*(")/, (_, a, b) => a + esc(v.description) + b);
for (const k of ['og:url', 'og:title', 'og:description', 'og:image'])
  html = html.replace(new RegExp('(<meta property="' + k + '" content=")[^"]*(")'), (_, a, b) => a + esc(v[k]) + b);
// Entwurf: Suchmaschinen fernhalten, bis "draft" in content.js entfernt wird
html = html.replace(/\s*<meta name="robots"[^>]*>/g, '');
if (p.draft) html = html.replace('</head>', '<meta name="robots" content="noindex, nofollow">\n</head>');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'assets'), { recursive: true });
fs.writeFileSync(path.join(dist, 'index.html'), html);
fs.copyFileSync(path.join(root, 'content.js'), path.join(dist, 'content.js'));
// GitHub Pages: Adresse der Seite und kein Jekyll
fs.writeFileSync(path.join(dist, 'CNAME'), p.domain + '\n');
fs.writeFileSync(path.join(dist, '.nojekyll'), '');

// Nur Dateien aus assets/ kopieren, die die Seite wirklich verwendet
const flat = JSON.stringify(card);
const used = new Set((html + flat).match(/assets\/[A-Za-z0-9_.-]+\.[A-Za-z0-9]+/g) || []);
for (const a of used) {
  const src = path.join(root, a);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(dist, a));
    const kb = fs.statSync(src).size / 1024;
    if (kb > 500) warn.push(`${a} ist ${Math.round(kb)} KB groß. Bitte auf unter 300 KB verkleinern, sonst lädt die Seite langsam.`);
  } else if (a !== 'assets/qr.svg') {
    warn.push(`${a} wird in content.js verwendet, liegt aber nicht in assets/.`);
  }
}

// Schreibregeln prüfen
if (flat.includes('\u2014')) warn.push('In content.js steht ein langer Gedankenstrich. Bitte ersetzen (Komma, Doppelpunkt oder Bindestrich).');
if (/\b(Exe|EXE)\b/.test(flat)) warn.push('"exe" wird immer klein geschrieben.');
const walk = (o, where) => {
  if (!o || typeof o !== 'object') return;
  if (('en' in o) !== ('de' in o)) warn.push(`${where}: Es fehlt eine Sprache (en oder de).`);
  for (const k of Object.keys(o)) walk(o[k], where + '.' + k);
};
walk(card, 'CARD');
if (p.draft) warn.push('Die Seite ist noch ein Entwurf (draft: true) und für Suchmaschinen gesperrt.');

const n = fs.readdirSync(dist, { recursive: true }).length;
console.log(`dist/ gebaut: ${n} Einträge. ${p.name}, ${p.domain}`);
for (const x of warn) console.log('Hinweis: ' + x);
