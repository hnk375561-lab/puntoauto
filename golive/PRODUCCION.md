# Antes de publicar
- Aprobación escrita del dueño (texto, fotos, datos).
- Dominio definitivo: actualizar `<base>`/rutas de `404.html` (usa rutas absolutas desde «/»), crear `sitemap.xml`, agregar canonical y JSON-LD solo con datos publicables.
- Quitar el banner y los `noindex`/`Disallow: /` solo después de la aprobación y poniendo `publicacion.publicIndexing` en `true`.
- Reemplazar las fotos o confirmar su uso; confirmar que las patentes sigan difuminadas.
- Probar en Safari/iOS y repetir Lighthouse con el dominio real (SEO dará 100 recién al quitar `noindex`).
