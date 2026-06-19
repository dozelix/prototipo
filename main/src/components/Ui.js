// ==========================================================================
// CONTROLADOR DE INTERFAZ: main/src/components/Ui.js (Fiel a SRP)
// Opciones avanzadas de renderizado y optimización de animaciones web
// ==========================================================================

import { DOM, agregarProductoAlEstadoCarrito } from './State.js';

/**
 * Renderiza de manera elegante las tarjetas de perfumes en su rejilla correspondiente.
 * @param {Array} productos - Listado de objetos de perfumes filtrados.
 * @param {HTMLElement} contenedorGrid - Nodo destino en el DOM (#grid-premium, etc.)
 */
export function renderizarCatalogo(productos, contenedorGrid) {
    if (!contenedorGrid) return;

    // Limpieza imperativa del contenedor para prevenir duplicaciones de renderizado
    contenedorGrid.innerHTML = "";

    if (productos.length === 0) {
        contenedorGrid.innerHTML = `<p class="no-products-msg">No se encontraron fragancias en esta categoría.</p>`;
        return;
    }

    // Fragmento de memoria temporal para optimizar la inserción masiva en el DOM
    const fragmento = document.createDocumentFragment();

    productos.forEach(perfume => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "product-card";

        // Parámetro de volumen adaptativo según id del producto
        const mililitros = perfume.id === 6 ? "125 ml" : "100 ml";

        // Formateador internacional para pesos chilenos (CLP)
        const precioFormateado = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        }).format(perfume.precio);

        // Segmentación de cadenas para extraer marca y nombre de la fragancia
        const palabrasNombre = perfume.nombre.split(' ');
        const marcaEnfoque = palabrasNombre[0];
        const detalleFragancia = palabrasNombre.slice(1).join(' ') || 'Fragrance';

        tarjeta.innerHTML = `
            <div class="product-image-wrap">
                <img src="assets/perfumes/${perfume.id}.png" alt="${perfume.nombre}" onerror="this.src='https://via.placeholder.com/180x180?text=${perfume.nombre}'">
            </div>
            <div class="product-info">
                <h3 class="brand-title">${marcaEnfoque}</h3> 
                <p class="product-name">${detalleFragancia}</p>
                <p class="product-size">${mililitros}</p>
                <span class="product-price">${precioFormateado}</span>
            </div>
            <button class="btn-buy" data-id="${perfume.id}">COMPRAR</button>
        `;

        // Asignación de evento local al botón de compra
        const botonCompra = tarjeta.querySelector(".btn-buy");
        botonCompra.addEventListener("click", () => {
            agregarProductoAlEstadoCarrito(perfume.id);
        });

        fragmento.appendChild(tarjeta);
    });

    // Una sola inserción física en el DOM para maximizar los FPS de la interfaz
    contenedorGrid.appendChild(fragmento);
}

/**
 * Cierra la cortina del menú móvil con transiciones limpias
 */
export function cerrarMenuMovil() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.remove("menu-open");
    }
}

/**
 * Retorna al usuario al inicio absoluto de la boutique (Scroll suave)
 */
export function subirCompletamente() {
    cerrarMenuMovil();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/**
 * Conmuta entre las vistas principales de la SPA (Dashboard / Auth / Search)
 * @param {HTMLElement} vistaDestino 
 */
export function conmutarVista(vistaDestino) {
    const vistas = [DOM.viewDashboard, DOM.viewAuth, DOM.viewSearch];
    vistas.forEach(vista => {
        if (vista) vista.classList.add("hidden");
    });
    if (vistaDestino) vistaDestino.classList.remove("hidden");
}

/**
 * Sensor de scroll inmersivo de alto rendimiento (Intersection Observer API)
 * Cambia la atmósfera del Dashboard de forma nativa sin saturar hilos de ejecución.
 */
export function inicializarScrollEfecto() {
    const dynamicBg = document.querySelector(".dynamic-luxury-bg");
    const catalogoZona = document.getElementById("premium");

    // Control de fallos si los nodos no están presentes en la vista actual
    if (!dynamicBg || !catalogoZona) return;

    const opcionesConfig = {
        root: null,          // Utiliza el viewport global del navegador
        threshold: 0.15,     // Se activa cuando el 15% del catálogo es visible
        rootMargin: "0px"
    };

    const observadorInstancia = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                dynamicBg.classList.add("luxury-white-mode");
            } else {
                // Si el usuario vuelve arriba y sale de la sección, regresa al modo oscuro
                if (window.scrollY < 450) {
                    dynamicBg.classList.remove("luxury-white-mode");
                }
            }
        });
    }, opcionesConfig);

    observadorInstancia.observe(catalogoZona);
}

/**
 * Inicialización de listeners para la barra de navegación móvil
 */
export function inicializarEventosNavbar() {
    const openMenuBtn = document.getElementById('open-mobile-menu');
    const closeMenuBtn = document.getElementById('close-mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (openMenuBtn && navLinks) {
        openMenuBtn.addEventListener('click', () => navLinks.classList.add('menu-open'));
    }
    if (closeMenuBtn && navLinks) {
        closeMenuBtn.addEventListener('click', () => navLinks.classList.remove('menu-open'));
    }
}

/**
 * Inicialización de listeners para interacciones del Dashboard
 */
export function inicializarEventosDashboard() {
    const exploreBtn = document.getElementById('hero-explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const catalogSection = document.getElementById('premium');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}