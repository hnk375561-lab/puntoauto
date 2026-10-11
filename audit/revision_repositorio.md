# Revisión del repositorio — segunda entrega

## 1. Estado público y propósito

El repositorio `hnk375561-lab/puntoauto` es visible públicamente en GitHub y se presenta como una propuesta de sitio no oficial. El README describe un sitio estático en HTML/CSS/JS, sin dependencias externas de runtime, generado a partir de `data/dealership.json` y `data/vehicles.json`.

Fuentes:
- https://github.com/hnk375561-lab/puntoauto
- https://raw.githubusercontent.com/hnk375561-lab/puntoauto/main/README.md
- https://raw.githubusercontent.com/hnk375561-lab/puntoauto/main/package.json
- https://raw.githubusercontent.com/hnk375561-lab/puntoauto/main/CLAUDE.md

## 2. Flujo técnico que ya está documentado

`package.json` define:
- `npm run build` → `node scripts/build.mjs`
- `npm test` → `node scripts/validate.mjs`
- Node.js `>=20`

El README indica que el build solo debe renderizar campos con estado `CONFIRMADO-PROPIO` o `CORROBORADO`. Las reglas de mantenimiento exigen registrar cada dato nuevo en `docs/EVIDENCIA.csv` y en el JSON correspondiente, con fuente, fecha y estado.

**Acción recomendada:** no integrar archivos nuevos a ciegas. Comparar el diff con el esquema actual, actualizar `docs/EVIDENCIA.csv` si corresponde y ejecutar ambas comprobaciones en el entorno del repositorio.

## 3. Política de antigüedad y publicación

`CLAUDE.md` indica que anuncios de más de 60 días no deben mostrarse como stock vigente; también señala que las fechas de publicación actuales son desconocidas. Por lo tanto, las 24 unidades del JSON deben tratarse como publicaciones históricas registradas, no como stock actual.

El mismo archivo indica:
- imágenes solo con permiso del negocio;
- no mostrar personas identificables;
- difuminar patentes;
- mientras `publicacion.publicIndexing` sea `false`, mantener `noindex, nofollow`, `Disallow: /` y un banner de sitio no oficial;
- no incorporar datos de otra agencia.

**Riesgo operativo:** el repositorio está marcado como público en GitHub aunque el README diga “Repo privado”. Esa diferencia debe corregirse en el README o en la configuración de visibilidad. La etiqueta `noindex` afecta a buscadores, no convierte los archivos de GitHub en privados.

## 4. Capturas prioritarias documentadas

`docs/CAPTURAS_A_TOMAR.md` ya establece este orden:
1. Ficha de Google Maps abierta con dirección, teléfono y horarios.
2. Perfil de Instagram abierto con bio, enlaces y contacto.
3. Fachada desde la vía pública mostrando número de puerta, sin personas y con patentes difuminadas.
4. Publicaciones con fecha visible o URL, para comprobar vigencia de vehículos.
5. Publicaciones con precio, cuando existan.

Estas tareas son una lista de trabajo existente en el repositorio, no evidencia de que las capturas ya se hayan realizado.

## 5. Huecos del perfil comercial

En `data/dealership.json` figuran como nulos el nombre legal, CUIT, WhatsApp, email, Facebook y sitio web. No deben completarse por inferencia ni buscando datos privados. Solo añadirlos si el negocio los publica oficialmente y hay una fuente apropiada.

El perfil registra financiación y permuta como servicios respaldados por textos de publicaciones de Instagram, pero aclara que no se deben publicar condiciones concretas porque las publicaciones sueltas no tienen fecha. Consignación y garantía permanecen como desconocidas; trámites figura como indicio y se omite.

## 6. Hallazgos de calidad en los registros de vehículos

La inspección estática del JSON revela referencias de imagen que merecen revisión manual:
- `peugeot-208-allure-2016` apunta a `archivo_origen: "peugeot-208-2018.jpg"`.
- `peugeot-208-feline-2018` apunta a `archivo_origen: "peugeot-208-allure-2016.jpg"`.

Estas diferencias pueden ser nombres de archivo heredados o cruces de imágenes; no prueban por sí solas que la foto esté mal atribuida. Abrir las imágenes y compararlas con las publicaciones fuente antes de corregir.

También se observan registros con año o kilometraje ausente, por ejemplo:
- Volkswagen Golf 2017: km nulo.
- Renault Sandero Stepway Privilege: año y km nulos.
- Chevrolet S10 2013: km nulo.
- Honda XR 190L 2019: km nulo.
- Bajaj Rouser NS 200 2019: km nulo.

No rellenar valores ausentes mediante estimaciones. Conservar `null` hasta hallar respaldo.

## 7. Limitaciones de esta entrega

No se pudo ejecutar el proyecto ni abrir cada imagen en el entorno de esta revisión. Tampoco se verificaron de forma independiente la ficha de Maps, las publicaciones de Instagram o la disponibilidad de las unidades. Los datos temporales deben volver a comprobarse en su fuente primaria.

## 8. Próxima secuencia recomendada

1. Resolver la discrepancia “repo público” frente a “Repo privado” en la documentación.
2. Verificar manualmente las dos referencias de imagen sospechosas.
3. Generar una auditoría automatizada de campos nulos, referencias de imagen inexistentes, IDs duplicados, valores fuera de esquema y campos obligatorios.
4. Registrar fecha de publicación o URL original por vehículo, si está disponible.
5. Solo después, evaluar qué campos podrían pasar a `CORROBORADO` o `CONFIRMADO-PROPIO`.
