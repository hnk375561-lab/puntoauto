  # Punto Auto: propuesta de sitio (no oficial)
Sitio estático (HTML/CSS/JS sin dependencias externas). Estructura tomada de la plantilla de referencia indicada por el usuario: `index.html`, `data/dealership.json`, `golive/`, `scripts/`, `docs/`, `css/`, `js/`, `fonts/`, `images/`.
- `npm run build`: genera las páginas desde `data/dealership.json` y `data/vehicles.json`. Solo se renderizan campos CONFIRMADO-PROPIO o CORROBORADO.
- `npm test`: controles de publicación (noindex, alt, imágenes, estados, sin relleno).
- Para mostrar teléfono, dirección, horarios y mapa: cambiar su `estado` en `data/dealership.json` cuando haya captura propia (ver `docs/CAPTURAS_A_TOMAR.md`).
Repo privado, `noindex` activo, banner de «no oficial».
