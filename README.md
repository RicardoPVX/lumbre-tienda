# Lumbre — tienda de demostración

Sitio estático de comercio electrónico para practicar HTML, CSS y JavaScript. Incluye seis páginas enlazadas: Inicio, Registro, Quiénes somos, Catálogo, Carrito y Búsqueda.

## Abrir localmente

Abre `index.html` en un navegador. No requiere dependencias ni servidor.

## Publicar con GitHub Pages

1. Crea un repositorio en GitHub y sube todos los archivos de esta carpeta a la raíz del repositorio.
2. En GitHub abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/(root)`, luego pulsa **Save**.
5. Cuando termine el despliegue, GitHub mostrará el enlace público en la sección Pages. La página de entrada es `index.html`.

Los vínculos entre páginas y los recursos locales usan rutas relativas. El enlace de términos del formulario y las imágenes externas usan URLs absolutas.

## Interacciones incluidas

- El formulario de registro habilita el envío solo al aceptar términos y revisa que todos los datos estén completos y tengan formato válido.
- El catálogo actualiza el contador ficticio del carrito.
- El botón “Ver más” muestra u oculta información del equipo.
- El carrito recalcula subtotales y total a partir de cantidades numéricas.
- La búsqueda muestra la frase solicitada y una lista ilustrativa de productos.

Datos de equipo y resultados de búsqueda ficticios. Los formularios no envían información ni procesan pagos.
