# Integración segura y validación del repositorio

## Qué sí conviene subir
- El registro de fuentes, procedencia y estado de verificación.
- El perfil comercial como datos de investigación con etiquetas explícitas de confianza.
- Notas metodológicas que impidan confundir publicaciones históricas con inventario actual.
- Cambios posteriores con fecha, URL de origen y hash de capturas cuando sea legítimo conservarlas.

## Qué no conviene subir como si fuera nuevo o confirmado
- Una copia duplicada de todos los datos ya existentes sin comparación de diferencias.
- Precios, disponibilidad, horarios o reputación sin fecha de consulta y fuente exacta.
- Fotos de terceros sin revisar licencia, derechos y condiciones de uso.
- Suposiciones sobre propietarios, empleados o vínculos con otras concesionarias.
- Credenciales, tokens, cookies, exportaciones privadas o datos personales de clientes.

## Checklist antes de integrar
- [ ] Comparar estos campos con el contenido actual del repositorio y evitar duplicados.
- [ ] Confirmar rama y ruta de destino antes de copiar.
- [ ] Conservar la fuente y fecha de cada campo.
- [ ] Marcar datos temporales como `last_checked_at` y `verification_status`.
- [ ] No declarar inventario actual sin verificación unidad por unidad.
- [ ] Revisar que no haya secretos o datos privados en archivos y commits.
- [ ] Validar CSV y JSON con herramientas del proyecto.
- [ ] Añadir cambios al changelog y revisar el diff antes de hacer commit.

## Esquema recomendado para nuevas observaciones
`entity_id, field, value, source_url, captured_at, evidence_type, verification_status, notes`

Valores sugeridos:
- `evidence_type`: `official_statement`, `public_listing`, `public_social_post`, `third_party_reference`, `inference`.
- `verification_status`: `verified`, `partially_verified`, `unverified`, `stale`, `contradicted`, `unknown`.

No cambiar el esquema existente sin revisar primero cómo lo consumen el sitio y los tests.
