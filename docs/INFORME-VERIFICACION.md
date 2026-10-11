# Informe de verificación (2026-10-11)
| Control | Resultado |
|---|---|
| `npm test` (noindex en 3 páginas, robots Disallow, sin `href="#"`, un solo h1, alt en todas las imágenes, imágenes existentes y sin sobrantes, banner, sin relleno ni precios, solo estados publicables en el HTML, sin recursos externos, 24 tarjetas = 24 unidades) | Pasa |
| Auditoría de rastros de la plantilla: se armó una lista de 17 cadenas desde sus datos (nombres, CUIT, direcciones, teléfonos, WhatsApp, coordenadas, usuario del repositorio) y se buscó en todos los archivos de texto del repo (JSON-LD, manifest, metaetiquetas, comentarios, docs) | 13 archivos revisados, 0 coincidencias. La lista no se guardó en el repo para no reintroducir los datos |
| Anchos de pantalla (Chromium headless) | 320 px: sin desborde horizontal (se corrigió uno de 10 px en el encabezado); 768 px y 1280 px: sin desborde |
| Interacción | Filtro Todas/Autos/Motos (10 motos visibles al filtrar), ficha en `<dialog>` abre y cierra con Esc |
| Consola y red | 0 errores y 0 pedidos fallidos en los tres anchos |
| Enlaces | Internos verificados por `npm test`; externos (Instagram, Maps, Ley 24.240, DNRPA) no se abrieron en vivo: las URLs legales provienen de resultados de búsqueda |
| Patentes | 10 fotos de unidades, más la vidriera de la fachada y otro auto de fondo, con patente difuminada; revisión visual ampliada de cada una. `vw-gol-trend` y otras fotos no muestran patente legible |
| Peso | Imágenes: 2.4 MB en total (webp 480 y 900 px, carga diferida); sin dependencias externas ni scripts de terceros; JS propio < 2 KB |
| Lighthouse 12 (servidor local, Chromium headless) | Móvil: rendimiento 94–95 (LCP 2,7–2,8 s, CLS 0, TBT 190 ms), accesibilidad 100, buenas prácticas 100. Escritorio: rendimiento 100 (LCP 0,6 s), accesibilidad 100, buenas prácticas 100. SEO 66 en ambos **solo** por «no rastreable»: es el `noindex` intencional. Medición local, sin red real |
| Safari/iOS | No probado |
