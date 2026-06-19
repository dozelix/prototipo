

# 📑 DOCUMENTACIÓN TÉCNICA DE INTERFAZ (UX/UI)

**Proyecto:** Altagama Boutique

**Versión:** 1.0.0 (Base Modular ESM)

**Autor:** dozelix

---

## 1. ESPECIFICACIONES DE DISEÑO Y IDENTIDAD VISUAL (UI)

La interfaz de Altagama debe evocar exclusividad, limpieza y alto valor. Basándonos en la curaduría de marcas de nicho, se definen dos atmósferas cromáticas controladas dinámicamente:

### 1.1. Paleta de Colores y Atmósferas

* **Atmósfera Dark (Hero/Default):** Fondo `#0b0c0e`, tipografías blancas/doradas. Diseñado para impactar al usuario al cargar la página (Sección `#inicio`).
* **Atmósfera "Blanco Elegante" (Catálogo):** Fondo `#fcfbfa` (blanco crema texturizado), tipografía negra `#111111` y acentos dorados (`var(--gold)`). Se activa automáticamente al hacer scroll hacia abajo.

### 1.2. Tipografía y Componentes de Navegación

* **Logotipo / Brand Block:** Estilo Serif, tracking (espaciado) expandido. Actúa como disparador de retorno absoluto.
* **Iconografía Utilitaria:** 100% Vectores SVG puros, sin pesos de librerías externas. Trazo (`stroke-width="2"`) responsivo que hereda el color del contenedor (`currentColor`).

---

## 2. REQUERIMIENTOS NO FUNCIONALES DE INTERFAZ (RNF)

### 1NRF: Transición de Contenedor Inmersivo (Scroll UX)

* **Descripción:** Al hacer scroll descendente, la opacidad y el color de fondo del contenedor maestro `.dynamic-luxury-bg` deben mutar fluidamente hacia el Blanco Elegante.
* **Comportamiento Técnico:** El módulo `ui.js` calcula mediante `getBoundingClientRect().top` la entrada de `#grid-premium`. Si cruza el **75%** de la altura de la pantalla (`window.innerHeight`), inyecta la clase CSS `.luxury-white-mode`.

### 2NRF: Botón "Inicio" y Reset Absoluto (First-Mobile)

* **Descripción:** El enlace `#lnk-inicio` (y el logo) debe retornar al usuario a la zona más alta de la boutique de manera inmediata y limpia.
* **Comportamiento Técnico:** Enfoque unificado para PC y Teléfono usando la API nativa `window.scrollTo` con comportamiento `behavior: "smooth"`. En dispositivos móviles, esta acción **debe obligatoriamente colapsar y cerrar** cualquier menú desplegable abierto antes de iniciar el viaje de subida.

### 3RNF: Arquitectura Estándar del Navbar (Estructura de Secciones)

El Navbar se divide estrictamente en tres bloques de responsabilidad visual:

| Bloque Izquierdo (Brand) | Bloque Central (Enlaces de Navegación) | Bloque Derecho (Utilitarios SVG) |
| --- | --- | --- |
| Logotipo `ALTAGAMA` + Slogan | 1. Inicio
| --- |2. Perfumes |
| --- |3. Ofertas| |
| --- |4. Combos | |
| --- |5. Nosotros ||
| --- |6. Contacto ||
| --- | --- |  • Icono Buscar (Lupa) |
| --- | --- |• Icono Perfil (Usuario)|
| --- | --- |• Icono Colección (Bolsa/Carrito + Badge contador) |

---

## 3. ARQUITECTURA DE ARCHIVOS Y DELEGACIÓN DE MÓDULOS (ESM)

Para mantener el proyecto escalable y compatible con el ofuscador del pipeline de producción (`npm run build`), la lógica se fragmenta en módulos especializados:

### 📁 `main/src/script/`

* **`app.js` (Orquestador Central):** Único archivo que interactúa con el ciclo de vida del DOM (`DOMContentLoaded`). Escucha los eventos globales de clic y scroll, y llama a las funciones de los módulos. No busca elementos en el DOM directamente.
* **`modules/state.js` (Estructura de Datos y DOM):** Almacena la base de datos fija de perfumes (`PRODUCTOS_DATA`), el estado de autenticación (`AppState`) y posee el mapa exclusivo de nodos HTML (`DOM`). **Ningún otro archivo puede usar `document.getElementById**`.
* **`modules/ui.js` (Control de Vistas y Animaciones):** Contiene la lógica para alternar pantallas (`hidden`), abrir/cerrar el menú colapsable, calcular el scroll inmersivo y renderizar visualmente las tarjetas de productos.
* **`modules/search.js` (Filtros Estéticos):** Maneja la conmutación visual de las etiquetas de familias olfativas (`.active-tag`) y actualiza los resultados en la vista de búsqueda.

---

## 4. PRÓXIMO PASO: ESTANDARIZACIÓN DEL MENÚ MÓVIL (Mesa de Trabajo)

> ⚠️ **Diagnóstico actual:** El menú de teléfono se ve desordenado ("feo") porque está heredando reglas globales del escritorio combinadas con el comportamiento nativo de los enlaces `<a href>`. Pierde la simetría premium que muestran tus referencias (`nav-cel.jpg`).

### Lineamientos acordados para el nuevo diseño móvil:

1. **Layout Pantalla Completa (Overlay):** Al presionar el botón de tres líneas, el menú debe cubrir el ancho móvil con un fondo limpio y oscuro, posicionando un botón de cierre `✕` asimétrico arriba a la derecha.
2. **Encapsulamiento del Scroll:** Bloquear el scroll del fondo de la página mientras el menú móvil esté abierto.
3. **Alineación de los SVGs:** Los tres iconos utilitarios (Buscar, Usuario, Carrito) deben agruparse en una barra horizontal baja o alta perfectamente equilibrada con el pulgar del usuario.

---

¿Qué te parece este documento base? Si hay alguna regla de diseño o comportamiento que quieras añadir o modificar en la documentación, dime. Si estás conforme, la guardamos y nos lanzamos de lleno a reescribir el CSS/JS del Navbar para teléfono.