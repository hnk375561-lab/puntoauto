// Genera index.html, 404.html, privacidad.html, robots.txt y site.webmanifest desde data/*.json.
// Solo se renderizan campos con estado CONFIRMADO-PROPIO o CORROBORADO. Sin dato publicable, la sección o botón no existe.
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const D = JSON.parse(fs.readFileSync(path.join(root, 'data/dealership.json'), 'utf8'));
const V = JSON.parse(fs.readFileSync(path.join(root, 'data/vehicles.json'), 'utf8'));
const ok = (f) => f && D._meta.publicables.includes(f.estado);
const e = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const name = D.identity.tradeName.valor, city = ok(D.location.city) ? D.location.city.valor : '';
const ig = ok(D.contact.instagram) ? D.contact.instagram : null;
const phone = ok(D.contact.phone) ? D.contact.phone.valor : null;
const addr = ok(D.location.address) ? D.location.address.valor : null;
const hours = ok(D.hours) ? D.hours.valor : null;
const coords = ok(D.location.coordinates) ? D.location.coordinates : null;
const fmtKm = (k) => k === 0 ? '0 km' : k == null ? '' : k.toLocaleString('es-AR') + ' km';
const title = (v) => `${v.marca} ${v.modelo}${v.version ? ' ' + v.version : ''}${v.anio ? ' ' + v.anio : ''}`;
const meta = (v) => [v.anio, fmtKm(v.km)].filter((x) => x !== '' && x != null).join(' · ');
const nAuto = V.filter((v) => v.tipo === 'auto').length, nMoto = V.length - nAuto;
const card = (v) => `<li class="u" data-t="${v.tipo}"><button type="button" class="ub" data-img="images/${v.imagen}-900.webp" data-title="${e(title(v))}" data-meta="${e(meta(v))}">
<img src="images/${v.imagen}-480.webp" srcset="images/${v.imagen}-480.webp 480w, images/${v.imagen}-900.webp 900w" sizes="(min-width:1000px) 23vw,(min-width:640px) 31vw,46vw" width="480" height="640" loading="lazy" decoding="async" alt="${e(title(v))}">
<span class="un">${e(v.marca + ' ' + v.modelo)}</span><span class="uv">${e([v.version, meta(v)].filter(Boolean).join(' · '))}</span></button></li>`;
const mapsSearch = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${name} ${city}`);
const igUrl = ig ? ig.url : null;
const nav = [['unidades', 'Unidades'], ['servicios', 'Servicios'], ['antes-de-comprar', 'Antes de comprar'], ['contacto', 'Contacto']];
const legal = (D.enlaces_oficiales || []).filter((l) => l.publicar === true);
const banner = '<p class="ban">Propuesta de sitio no oficial, aún no aprobada por el negocio</p>';
const head = (t, d, p = '') => `<!doctype html><html lang="es-AR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${e(t)}</title><meta name="description" content="${e(d)}"><meta name="robots" content="noindex, nofollow"><meta name="theme-color" content="#15181C">
<link rel="icon" href="${p}images/icon.svg" type="image/svg+xml"><link rel="manifest" href="${p}site.webmanifest">
<link rel="preload" href="${p}fonts/bricolage-grotesque-latin.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="${p}css/site.css"></head><body>`;
const mark = (p = '') => `<a class="mk" href="${p}index.html" aria-label="${e(name)}, inicio"><i aria-hidden="true"></i>Punto Auto</a>`;
const foot = `<footer><p>Propuesta de sitio no oficial. Fotos: Instagram de Punto Auto. Las patentes están difuminadas.</p><p><a href="privacidad.html">Privacidad</a></p></footer>`;

const servicios = [];
if (ok(D.services.venta_autos_y_motos_usados)) servicios.push(['Autos y motos usados', 'Las publicaciones del negocio en Instagram son de autos y motos usados.']);
if (ok(D.services.financiacion)) servicios.push(['Financiación', 'El negocio la menciona en varias de sus publicaciones. Las condiciones de cada unidad se consultan con él.']);
if (ok(D.services.permuta)) servicios.push(['Permutas', 'El negocio también ofrece recibir un vehículo como parte de pago, según sus publicaciones.']);

const contacto = [];
if (igUrl) contacto.push(`<a class="btn" href="${e(igUrl)}" rel="noopener" target="_blank">Escribir por Instagram (@${e(ig.valor)})</a>`);
if (phone) contacto.push(`<a class="btn bl" href="tel:${phone.replace(/[^+\d]/g, '')}">Llamar ${e(phone)}</a>`);
const datos = [];
if (addr) datos.push(`<div><dt>Dirección</dt><dd>${e(addr)}, ${e(city)}</dd></div>`);
if (hours) datos.push(`<div><dt>Horarios</dt><dd>${e(hours)}</dd></div>`);
const mapLink = coords ? `<a class="btn bl" href="https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}" rel="noopener" target="_blank">Ver en Google Maps</a>` : '';

const index = head(`${name} · Autos y motos usados${city ? ' en ' + city : ''}`, `Autos y motos usados${city ? ' en ' + city + ', Entre Ríos' : ''}. Unidades publicadas en el Instagram de ${name}.`) +
`<a class="sk" href="#unidades">Ir a las unidades</a>${banner}
<header class="h">${mark()}<nav aria-label="Principal">${nav.filter(([id]) => (id !== 'servicios' || servicios.length) && (id !== 'antes-de-comprar' || legal.length)).map(([id, t]) => `<a href="#${id}">${t}</a>`).join('')}</nav></header>
<main><section class="hero"><div class="hw"><h1>Autos y motos usados${city ? ' en ' + e(city) : ''}</h1>
<p>${V.length} unidades publicadas en el Instagram de ${e(name)}: ${nAuto} autos y ${nMoto} motos.</p>
<p class="hb">${igUrl ? `<a class="btn" href="#contacto">Cómo consultar</a>` : ''}<a class="btn bl" href="#unidades">Ver unidades</a></p></div>
<img fetchpriority="high" decoding="async" src="images/fachada-punto-auto-900.webp" srcset="images/fachada-punto-auto-480.webp 480w, images/fachada-punto-auto-900.webp 900w" sizes="(min-width:900px) 55vw,100vw" width="900" height="506" alt="Frente del local de ${e(name)}, con el cartel sobre la entrada"></section>
<section id="unidades" class="sec"><h2>Unidades</h2><p class="lead">Fotos y datos tomados de las publicaciones de ${igUrl ? `<a href="${e(igUrl)}" rel="noopener" target="_blank">@${e(ig.valor)}</a>` : e(name)} el 11 de octubre de 2026. Para saber si una unidad sigue disponible, hay que consultarla con el negocio.</p>
<div class="fl" role="group" aria-label="Filtrar por tipo"><button type="button" class="f on" data-f="all" aria-pressed="true">Todas (${V.length})</button><button type="button" class="f" data-f="auto" aria-pressed="false">Autos (${nAuto})</button><button type="button" class="f" data-f="moto" aria-pressed="false">Motos (${nMoto})</button></div>
<ul class="g">${V.map(card).join('')}</ul></section>
${servicios.length ? `<section id="servicios" class="sec alt"><h2>Servicios</h2><div class="sv">${servicios.map(([t, d]) => `<div><h3>${e(t)}</h3><p>${e(d)}</p></div>`).join('')}</div></section>` : ''}
${legal.length ? `<section id="antes-de-comprar" class="sec alt"><h2>Antes de comprar un usado</h2><p class="lead">Información oficial para quien compra un vehículo usado. Son páginas del Estado, no del negocio.</p><ul class="lk">${legal.map((l) => `<li><a href="${e(l.url)}" rel="noopener" target="_blank">${e(l.titulo)}</a></li>`).join('')}</ul></section>` : ''}
<section id="contacto" class="sec"><h2>Contacto</h2>${datos.length ? `<dl class="dl">${datos.join('')}</dl>` : ''}<p class="hb">${contacto.join('')}${mapLink}</p>
<p class="sm">Opiniones de clientes: <a href="${e(mapsSearch)}" rel="noopener" target="_blank">buscar ${e(name)} en Google Maps</a>.</p></section></main>
${foot}<dialog id="dlg" aria-label="Detalle de la unidad"><form method="dialog"><button class="x" aria-label="Cerrar">Cerrar</button></form><img alt="" width="900" height="1200"><h3></h3><p></p></dialog>
<script src="js/app.js" defer></script></body></html>`;

const nf = head(`Página no encontrada · ${name}`, 'Página no encontrada', '/') .replace(/href="\/index\.html"/, 'href="/"') +
`${banner}<header class="h">${mark('./')}</header><main class="sec"><h1>No encontramos esa página</h1><p class="lead">Volvé al inicio para ver las unidades.</p><p class="hb"><a class="btn" href="./">Ir al inicio</a></p></main>${foot}</body></html>`;
const priv = head(`Privacidad · ${name}`, 'Privacidad') + `${banner}<header class="h">${mark()}</header><main class="sec txt"><h1>Privacidad</h1>
<p>Este sitio es una propuesta no oficial y no está publicado por el negocio.</p>
<p>No tiene formularios, cuentas, cookies ni herramientas de análisis, y no guarda datos de quien lo visita. Todo el contenido se sirve desde el mismo sitio, sin cargar recursos de terceros.</p>
<p>Los enlaces a Instagram y a Google Maps llevan a servicios de terceros, que tienen sus propias políticas.</p>
<p>Las fotos provienen del Instagram de ${e(name)}. En las fotos de unidades se difuminaron las patentes. Si el negocio quiere que se retire cualquier foto o dato, se retira.</p>
<p class="sm">Texto preliminar, sin revisión legal.</p><p class="hb"><a class="btn bl" href="index.html">Volver al inicio</a></p></main>${foot}</body></html>`;
const w = (f, s) => fs.writeFileSync(path.join(root, f), s);
w('index.html', index); w('404.html', nf); w('privacidad.html', priv); w('robots.txt', 'User-agent: *\nDisallow: /\n');
w('site.webmanifest', JSON.stringify({ name, short_name: name, lang: 'es-AR', start_url: './', display: 'browser', background_color: '#15181C', theme_color: '#15181C', icons: [{ src: 'images/icon.svg', sizes: 'any', type: 'image/svg+xml' }] }, null, 1));
console.log('sitio generado:', V.length, 'unidades;', servicios.length, 'servicios; contacto:', contacto.length, 'botones;', datos.length, 'datos');
