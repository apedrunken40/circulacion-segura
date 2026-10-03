# Mapa digital bilingüe de circulación segura
Centro Histórico de San José del Cabo · Proyecto de servicio social CEFODEH / UNITEC · Raúl Celaya Pacheco

## Qué hay en esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El **mapa público** (español / inglés). Es la página que abre la gente con el QR. |
| `captura.html` | El **modo captura** para tus recorridos: registras puntos con el GPS del celular y los exportas. |
| `qr.html` | Genera el **cartel con código QR** para imprimir y dejar en los comercios. |
| `puntos.js` | Los datos del mapa. Hoy trae 3 puntos de **EJEMPLO**; se reemplaza con el que exporta `captura.html`. |
| `pendientes.js` | 18 puntos ya redactados (español e inglés) a partir de tus fotos de recorrido. Solo falta ubicarlos en el mapa. |
| `config.js` | Ligas de la encuesta y del formulario de reportes, y otros ajustes. |
| `fotos/` | Aquí van las fotos de los puntos (opcional). |
| `comun.js`, `estilos.css`, `lib/` | Partes internas del mapa. No necesitas tocarlas. |

Todo es gratis: OpenStreetMap para el mapa y GitHub Pages para publicarlo. No se maneja dinero.

---

## 1. Publicar el mapa (una sola vez, ~10 minutos)

1. Crea una cuenta en **github.com** (si no tienes).
2. Botón **New repository** → nombre: `circulacion-segura` → **Public** → *Create repository*.
3. En el repositorio: **Add file → Upload files** y arrastra **todo el contenido** de esta carpeta (no la carpeta en sí: `index.html` debe quedar en la raíz). → *Commit changes*.
4. Ve a **Settings → Pages** → en *Branch* elige `main` y `/ (root)` → *Save*.
5. Espera 1–2 minutos. Tu mapa queda en:
   `https://TU-USUARIO.github.io/circulacion-segura/`
   y el modo captura en:
   `https://TU-USUARIO.github.io/circulacion-segura/captura.html`

## 2. Recorridos de campo (con tu celular)

1. Abre la liga de `captura.html` en el celular y **permite la ubicación**.
2. Espera a que el GPS diga precisión **±15 m o menos** (en verde).
3. Párate frente a la señal o el cierre y toca **📍 Registrar punto donde estoy**. Elige el tipo, qué tan peligroso es y escribe el título y la descripción (en español y en inglés).
   - Si el GPS falla, toca directamente el mapa en el lugar exacto.
4. Para el **sentido de una calle** o un **desvío**: toca **➜ Dibujar sentido / desvío**, luego toca en el mapa donde **empieza** la calle y después donde **termina** (hacia donde van los autos) → **Terminar línea**.
5. Al terminar cada recorrido: **📋 Mis puntos y exportar** →
   - **Descargar puntos.js** (respaldo y datos para el mapa).
   - **Descargar tabla CSV** → ábrela en Excel: es tu evidencia de la *hoja de cálculo con los puntos registrados*.

> Los puntos se guardan solo en el navegador de ese celular. Descarga `puntos.js` después de cada recorrido para no perderlos.

**Recuerda para tus evidencias:** toma tus fotos de campo apareciendo tú con el letrero **#SOYVOLUNTARIOCEFODEH**. Las fotos deben ser tuyas (no de internet ni hechas con IA).

### Puntos ya redactados (pendientes.js)
En `captura.html` → **📋 Mis puntos y exportar** verás 18 puntos marcados **Sin ubicar**. Toca **📍 Ubicar**, luego toca el mapa en el lugar exacto (el aviso azul te recuerda dónde es) y revisa el texto antes de **Guardar**. Funciona también en la computadora, sin GPS.

## 3. Actualizar el mapa con tus datos

1. En GitHub: **Add file → Upload files** → sube el `puntos.js` que descargaste (reemplaza al de ejemplo). → *Commit*.
2. (Opcional) Sube tus fotos a la carpeta `fotos/` con el mismo nombre que escribiste en el campo *Foto* (ej. `fotos/punto-01.jpg`). Usa fotos ligeras (menos de 500 KB) y evita que se vean caras o placas.
3. En 1–2 minutos el mapa público ya muestra tus puntos y desaparece el aviso de "ejemplo".

## 4. Encuesta y reportes (Google Forms, gratis)

Crea un formulario en **forms.google.com**, copia su liga (botón *Enviar → 🔗*) y pégala en `config.js`, en `encuestaUrl`. Preguntas sugeridas (cortas y fáciles):

1. Usted es: Residente / Turista / Comerciante / Otro — *You are: Resident / Tourist / Business / Other*
2. ¿Entendió el mapa? Sí / Más o menos / No — *Was the map easy to understand?*
3. ¿Le ayuda a saber por dónde circular? Sí / No — *Does it help you know where to drive?*
4. ¿Qué le agregaría o mejoraría? (respuesta corta) — *What would you add or improve?*

Si quieres que la gente avise de nuevos cierres, crea otro formulario y pon su liga en `reporteUrl`.
Los resultados del formulario son la evidencia de tu **meta 3** (30 personas).

## 5. Cartel con QR para los comercios

Abre `https://TU-USUARIO.github.io/circulacion-segura/qr.html`, revisa que la liga sea la correcta y presiona **Imprimir cartel** (o "Guardar como PDF"). Pide permiso al comercio antes de colocarlo.

## 6. (Opcional) Contar visitas

Crea una cuenta gratis en **goatcounter.com** (por ejemplo `mapacabos`) y escribe ese nombre en `config.js` → `goatcounter: 'mapacabos'`. Ahí verás cuántas personas abrieron el mapa: dato útil para tu informe final.
