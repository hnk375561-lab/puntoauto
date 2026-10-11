# Capturas que faltan (en orden de impacto)
1. Ficha de Google Maps abierta: dirección, teléfono y horarios (con fecha visible). Destraba teléfono, dirección, mapa y horarios.
2. Perfil de Instagram @puntoautoer abierto (bio, enlaces, contacto). Destraba el handle documentado y, si figura, teléfono o dirección como CONFIRMADO-PROPIO.
3. Frente del local desde la vía pública mostrando el número de puerta, sin personas y con patentes difuminadas.
4. Capturas de las publicaciones con fecha visible (o su URL), para poder decir qué unidades siguen vigentes.
5. Publicaciones con precio, si el dueño las hace.
Reglas: sin personas identificables, patentes difuminadas, nada de terceros.
Al tener las capturas: cambiar el `estado` del campo en `data/dealership.json` a CONFIRMADO-PROPIO y correr `npm run build && npm test`; el teléfono, la dirección, los horarios y el mapa aparecen solos.
