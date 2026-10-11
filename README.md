# Punto Auto — enriquecimiento de información pública

Fecha de preparación: 2026-10-11

Este paquete contiene únicamente información comercial pública documentada en el repositorio `hnk375561-lab/puntoauto`, junto con trazabilidad y controles de calidad. No implica verificación independiente de los datos originales ni una relación con Villon Automotores.

## Contenido
- `research/public_source_enrichment.md`: hallazgos nuevos estructurados, procedencia y limitaciones.
- `data/public_business_profile.csv`: perfil comercial con estado de verificación por campo.
- `data/source_register.csv`: registro de fuentes y próximos pasos de corroboración.
- `research/repo_hygiene_and_validation.md`: controles recomendados antes de integrar datos en producción.

## Regla de integración
No reemplazar los datos canónicos existentes automáticamente. Comparar cada campo con el estado actual del repositorio, conservar el historial y actualizar solo cuando exista evidencia nueva, fechada y reproducible.

## Límite importante
El inventario detallado de 24 unidades se menciona en el archivo `data/vehicles.json` del repositorio fuente, pero este paquete no duplica los 24 registros porque no se volvió a inspeccionar aquí el contenido completo de cada ficha. No usar el conteo como inventario vigente.
