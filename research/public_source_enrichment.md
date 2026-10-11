# Punto Auto — enriquecimiento de información pública

**Fecha de corte:** 2026-10-11  
**Entidad:** Punto Auto, Concepción del Uruguay, Entre Ríos  
**Fuente primaria de esta extracción:** repositorio público `https://github.com/hnk375561-lab/puntoauto`

## 1. Perfil comercial documentado en el proyecto

El proyecto contiene un archivo `data/dealership.json` con un perfil de negocio. En la documentación previa del repositorio se consignan los siguientes datos, todos sujetos a corroboración independiente:

- Nombre comercial: Punto Auto.
- Localidad: Concepción del Uruguay, Entre Ríos.
- Dirección consignada: Bv. Ricardo Balbín 2086.
- Teléfono consignado: +54 3442 49-7808.
- Perfil de Instagram señalado: https://www.instagram.com/puntoautoer/
- Actividades anunciadas: venta de automóviles y motocicletas usadas.
- Publicaciones descritas: financiación y permutas.
- También se menciona una publicación sobre una Zanella ZB 110 0 km.
- Horarios consignados: lunes a viernes 08:00–12:00 y 16:00–20:00; sábados 08:30–12:30; domingos cerrado.
- Reputación consignada: puntuación Google 5,0 con 6 reseñas, atribuida a una consulta del 2026-10-11.

**Estado:** datos transcritos desde la estructura/documentación del proyecto; no deben presentarse como corroborados en tiempo real. Dirección, teléfono, horarios, puntuación y cantidad de reseñas requieren volver a comprobarse en las fuentes originales.

## 2. Inventario: valor y limitaciones

El archivo `data/vehicles.json` del repositorio declara 24 unidades entre automóviles y motocicletas, y se mencionan ejemplos como Volkswagen Golf 2017, Peugeot 208, Chevrolet S10 y motocicletas Honda, Kawasaki y KTM.

Este dato sirve como pista de cobertura del catálogo registrado en el proyecto, no como prueba de que haya 24 vehículos disponibles actualmente. Antes de publicar un recuento actual, hay que:
1. Abrir cada anuncio original.
2. Registrar URL y fecha/hora de consulta.
3. Confirmar que el anuncio corresponda a Punto Auto.
4. Comprobar si sigue publicado y si el vehículo continúa disponible.
5. Separar precio anunciado de precio confirmado y no inferir ventas a partir de anuncios retirados.
6. Mantener los registros no verificables con estado `unknown` o `needs_review`, sin borrarlos ni presentarlos como vigentes.

## 3. Posibles líneas de enriquecimiento

Las siguientes son tareas de investigación, no hechos confirmados:

- Confirmar identidad, dirección, teléfono y horarios con una fuente oficial o una ficha comercial accesible.
- Capturar las publicaciones públicas que respalden financiación, permutas y venta de motos, registrando vigencia y condiciones exactas.
- Construir una serie temporal del inventario únicamente si se pueden obtener capturas fechadas y comparables.
- Verificar reseñas directamente en Google Maps, incluyendo fecha de consulta y número visible; no inferir calidad general a partir de una muestra pequeña.
- Documentar la diferencia entre información declarada por el negocio, información de plataformas y observaciones del investigador.

## 4. Separación de entidades

No hay evidencia aportada aquí que demuestre una relación societaria, operativa o de propiedad entre Punto Auto y Villon Automotores. Mantener ambas entidades separadas. No transferir a Villon la dirección, teléfono, inventario, reseñas, redes o servicios de Punto Auto.

## 5. Referencias

- Repositorio: https://github.com/hnk375561-lab/puntoauto
- Perfil de negocio (ruta indicada por el proyecto): https://github.com/hnk375561-lab/puntoauto/blob/main/data/dealership.json
- Inventario (ruta indicada por el proyecto): https://github.com/hnk375561-lab/puntoauto/blob/main/data/vehicles.json
- Instagram mencionado en el proyecto: https://www.instagram.com/puntoautoer/

## 6. Criterio de publicación

Publicar únicamente información comercial pertinente y de origen público. No incorporar credenciales, datos privados, capturas con información personal irrelevante ni metadatos internos innecesarios. Si se conserva una captura, registrar su procedencia, fecha de adquisición, permisos de uso y hash; no republicar imágenes ajenas sin revisar derechos y condiciones.
