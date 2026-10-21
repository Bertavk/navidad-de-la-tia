# La Navidad de la tía 🎄

Una web estática y gratuita para un calendario de Adviento familiar.

## Archivos
- `index.html`: estructura de la página.
- `styles.css`: diseño adaptable a móvil y ordenador.
- `script.js`: contador, sobres y mensajes de los 24 días.

## Personalizar las sorpresas
Abre `script.js` y busca `const SURPRISES`. Cambia el texto de cada día:
- `title`: título de la sorpresa.
- `body`: mensaje principal.
- `extra`: frase final opcional.
- `icon`: emoji que aparece arriba.

No añadas datos privados ni fotos de otras personas sin su permiso: GitHub Pages publica el contenido en internet.

## Publicar gratis con GitHub Pages
1. Entra en https://github.com y crea una cuenta o inicia sesión.
2. Pulsa **New repository**.
3. Ponle un nombre, por ejemplo `navidad-de-la-tia`.
4. Selecciona **Public** y crea el repositorio.
5. Pulsa **Add file → Upload files** y sube `index.html`, `styles.css` y `script.js` (no hace falta subir este README si no quieres).
6. Pulsa **Commit changes**.
7. Abre **Settings → Pages**.
8. En **Build and deployment**, elige **Deploy from a branch**; selecciona `main` y `/ (root)` y guarda.
9. Espera unos minutos. GitHub mostrará la dirección publicada en esa misma sección.
10. Abre el enlace en el móvil y en el ordenador para comprobarlo.

La dirección suele tener una forma parecida a `https://TU-USUARIO.github.io/navidad-de-la-tia/`. No uses ese ejemplo literalmente: copia la URL real que muestre GitHub.

## Crear el QR
Cuando la página esté publicada, copia su URL real y genera un QR estático gratuito con un generador de confianza. Escanéalo con otro móvil antes de imprimirlo. Un QR estático seguirá apuntando a esa dirección; si cambias el nombre del repositorio o la URL, tendrás que generar otro.

## Nota sobre las fechas
Los sobres se desbloquean según la fecha local del dispositivo. Es una función sencilla, no un bloqueo seguro: alguien con conocimientos básicos puede modificar la fecha o el código.
