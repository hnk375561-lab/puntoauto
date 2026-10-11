// Controles del sitio. Uso: node scripts/validate.mjs
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'); const R = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const D = JSON.parse(R('data/dealership.json')), V = JSON.parse(R('data/vehicles.json')); const bad = [], pass = (c, m) => { if (!c) bad.push(m); };
const pub = D._meta.publicables, pages = ['index.html', '404.html', 'privacidad.html'];
for (const p of pages) { const h = R(p); pass(/name="robots" content="noindex, nofollow"/.test(h), p + ': falta noindex'); pass(!/href="#"/.test(h), p + ': href="#"');
  pass((h.match(/<h1/g) || []).length === 1, p + ': debe haber un solo h1'); pass(!/<img(?![^>]*\balt=)/.test(h), p + ': img sin alt'); pass(/Propuesta de sitio no oficial, aún no aprobada por el negocio/.test(h), p + ': falta banner');
  for (const m of h.matchAll(/(?:src|href)="([^"#?:]+\.(?:webp|css|js|svg|woff2|webmanifest|html))"/g)) { const f = m[1].replace(/^\//, ''); pass(fs.existsSync(path.join(root, f)), p + ': no existe ' + f); }
  pass(!/https?:\/\/(?!www\.instagram\.com|www\.google\.com\/maps|www\.argentina\.gob\.ar)/.test(h.replace(/<a [^>]*>/g, (a) => a)), p + ': recurso externo inesperado'); }
pass(/Disallow: \//.test(R('robots.txt')), 'robots.txt sin Disallow');
const idx = R('index.html');
// Solo estados publicables llegan al HTML
const gate = [['address', D.location.address], ['phone', D.contact.phone], ['hours', D.hours]];
for (const [k, f] of gate) { const v = f.valor; const shown = idx.includes(v.replace(/&/g, '&amp;')) || (k === 'phone' && idx.includes('tel:')); pass(pub.includes(f.estado) === shown, `${k}: estado ${f.estado} pero ${shown ? 'se muestra' : 'no se muestra'}`); }
pass(pub.includes(D.location.coordinates.estado) === /google\.com\/maps\/search\/\?api=1&amp;query=-?\d/.test(idx) || pub.includes(D.location.coordinates.estado) === /query=-?\d/.test(idx), 'coordenadas: estado y render no coinciden');
pass(!/(a confirmar|verificado|Lorem|\$\s?\d)/i.test(idx.replace(/<[^>]+>/g, ' ')), 'texto de relleno, "verificado" o precios en la interfaz');
pass(!/\b[A-Z]{2,3}\s?\d{3}\s?[A-Z]{0,2}\b/.test(idx.replace(/<[^>]+>/g, ' ').replace(/\b(TSI|DSG|XR|NS|LT|TD|ZB|EL|KTM)\b/g, '')), 'posible patente en texto');
for (const v of V) for (const w of [480, 900]) pass(fs.existsSync(path.join(root, `images/${v.imagen}-${w}.webp`)), 'falta imagen ' + v.imagen);
const used = new Set([...V.flatMap((v) => [480, 900].map((w) => `${v.imagen}-${w}.webp`)), 'fachada-punto-auto-480.webp', 'fachada-punto-auto-900.webp', 'icon.svg']);
for (const f of fs.readdirSync(path.join(root, 'images'))) pass(used.has(f), 'imagen sin uso: ' + f);
pass(V.every((v) => pub.includes(v.estado) && v.precio == null), 'unidad con estado no publicable o con precio');
pass(V.length === (idx.match(/class="u"/g) || []).length, 'cantidad de tarjetas != unidades');
console.log(bad.length ? 'FALLAS:\n- ' + bad.join('\n- ') : 'OK: todos los controles pasan'); process.exit(bad.length ? 1 : 0);
