# Cómo publicar el portafolio de Juliana (jv portfolio)

La carpeta `PortafolioJuliana` es autocontenida: `index.html`, `assets-manifest.js` y `assets/` usan rutas relativas.
Pesa ~97 MB (32 archivos). Ningún archivo supera 25 MB.

> Importante: si abro `index.html` con doble clic (file://), los videos e imágenes funcionan, pero el navegador
> bloquea la lectura automática de los `.fbx`. En el enlace publicado el visor 3D carga todo solo.

---

## Opción A · Netlify Drop (la más rápida)

1. Entro a **https://app.netlify.com/drop** e inicio sesión (o creo una cuenta gratis). Si no inicio sesión, el sitio es temporal.
2. Arrastro **la carpeta completa `PortafolioJuliana`** al recuadro de la página (no un .zip, la carpeta).
3. Espero a que suba (~150 MB, puede tardar unos minutos).
4. Netlify me da un enlace tipo `https://nombre-aleatorio.netlify.app`.
5. Opcional: en **Site configuration → Change site name** lo cambio a algo como `jv-portfolio`.
6. Para actualizar luego: en la pestaña **Deploys** arrastro de nuevo la carpeta.

## Opción B · GitHub Pages

1. En **https://github.com** creo un repositorio **público** llamado, por ejemplo, `jv-portfolio`.
2. En el repositorio: **Add file → Upload files**.
3. Abro la carpeta `PortafolioJuliana` en el Explorador, selecciono **todo su contenido** (`index.html`, `assets-manifest.js`, `.nojekyll`, `COMO_PUBLICAR.md` y la carpeta `assets`) y lo arrastro a la página.
   - GitHub acepta máximo 100 archivos por subida y 25 MB por archivo: mi carpeta cumple ambas cosas.
4. Escribo un mensaje (p. ej. "Portafolio final") y presiono **Commit changes**.
5. Voy a **Settings → Pages** → en *Source* elijo **Deploy from a branch**, rama **main**, carpeta **/(root)** → **Save**.
6. Espero 1–3 minutos. El enlace queda así: `https://MI-USUARIO.github.io/jv-portfolio/`.

---

## Checklist antes de enviar el enlace a mi profesor

Abro el enlace en una ventana de incógnito y reviso:

- [ ] La portada dice **jv portfolio** y "Juliana Vieira — Portafolio de Animación 3D".
- [ ] En **04 Inspector FBX** aparece Ita Naranja caminando con textura (puede tardar unos segundos la primera vez).
- [ ] En el selector del visor pruebo al menos: Task 03 proxy, Idle 02, Jump, Ita Naranja de la Task 07 y el escenario.
- [ ] Abro cada tarjeta de **01 Curaduría** y reproduzco un video de cada una (Task 07 y Final).
- [ ] La pestaña **Capturas** de la Task 07 abre las imágenes en grande.
- [ ] En **03 Proceso** los botones *Lado a lado / Alternar* funcionan.
- [ ] Presiono **P** y navego la presentación con **← →**.
- [ ] En **05 Créditos** el inventario muestra 32 archivos.
- [ ] Si algo no carga: F12 → pestaña *Console* para ver el error, y reviso que el nombre del archivo coincida exactamente (mayúsculas incluidas) con el de `assets-manifest.js`.

## Cómo agregar o cambiar una evidencia

1. Copio el archivo a `assets/<task>/` (sin espacios ni tildes en el nombre, idealmente).
2. Agrego una línea en el bloque de esa task dentro de `assets-manifest.js`, por ejemplo:
   `{ label: "Mi nuevo playblast", file: "assets/task05/nuevo.mp4", source: "Maya" }`
3. Vuelvo a subir la carpeta.

Formatos que reproduce el navegador: `.mp4` (H.264), `.jpg`, `.png`, `.fbx` (binario 7.x o ASCII).
Los `.mov` de Maya con H.264 funcionan si les cambio la extensión a `.mp4` (así lo hice con mis playblasts).

