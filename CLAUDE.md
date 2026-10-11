# Reglas de mantenimiento
1. Un dato se muestra solo con respaldo: CONFIRMADO-PROPIO o CORROBORADO (≥2 fuentes independientes). Sin respaldo se omite; no hay «a confirmar» en la interfaz.
2. Todo dato nuevo se registra en `docs/EVIDENCIA.csv` y en `data/*.json` con fuente, fecha y estado.
3. Avisos de más de 60 días no se muestran como stock vigente. Hoy las fechas de publicación son desconocidas.
4. Fotos: sin personas identificables, patentes difuminadas, solo con permiso del negocio.
5. Mientras `publicacion.publicIndexing` sea `false`: `noindex, nofollow`, `Disallow: /` y banner de no oficial.
6. Ningún dato de otra agencia puede quedar en el repo.
