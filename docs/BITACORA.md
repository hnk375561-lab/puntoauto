# Bitácora de consultas (2026-10-11)
| # | Consulta | Método | Resultado | Errores |
|---|---|---|---|---|
| 1 | Repositorio de la plantilla indicado por el usuario | clon con git | Plantilla leída (estructura, README, CLAUDE.md, REUTILIZAR.md, scripts) | — |
| 2 | Búsqueda web: «Punto Auto Concepción del Uruguay Balbín 2086» | web_search estándar | 8 resultados ajenos (listados de Mercado Libre, Expedia, directorios generales). Ninguno corrobora dirección, teléfono ni horario | Sin coincidencias útiles |
| 3 | fotos_punto_auto.zip y dealership_draft.json | Lectura de archivos subidos | 27 fotos + manifiesto con el texto de cada publicación; borrador de datos | — |
| 4 | Búsqueda web extendida: «puntoautoer instagram Punto Auto Concepción del Uruguay» | web_search extendido | 8 resultados, **ninguno es @puntoautoer**: homónimos (@puntoautosv, @punto_auto_, @ilpuntoauto, @punto.app, @autopunto_uy, @punto1concepcion) y Autopoint (concesionaria Chevrolet, 9 de Julio 1756). Se descartan para no mezclar datos de otros negocios | Sin corroboración de dirección, teléfono ni horario |
| 5 | Búsqueda web: Ley 24.240 texto oficial | web_search estándar | Texto oficial en https://www.argentina.gob.ar/normativa/nacional/ley-24240-638/texto; el mismo texto en WIPO Lex | — |
| 6 | Búsqueda web: DNRPA, comprar auto usado | web_search estándar | Guía oficial de preguntas frecuentes en https://www.argentina.gob.ar/node/145671 | — |
| 7 | Lighthouse 12 sobre el sitio local (móvil y escritorio) | CLI con Chromium headless | Ver INFORME-VERIFICACION | — |
Google Maps, Instagram, OpenStreetMap y Wayback **no** se consultaron directamente en esta sesión: lo que figura de Maps e Instagram viene del borrador y del material del usuario.
