// main/src/script/modules/state.js

export const PRODUCTOS_DATA = [
    { id: 1, nombre: "Creed Aventus", tipo: "Frutal", categoria: "premium", notas: "Piña, Abedul, Almizcle", precio: 349990 },
    { id: 2, nombre: "Tom Ford Noir Extreme", tipo: "Oriental", categoria: "premium", notas: "Kulfi, Vainilla, Ámbar", precio: 279990 },
    { id: 3, nombre: "Roja Elysium", tipo: "Acido", categoria: "premium", notas: "Pomelo, Vetiver, Ámbar gris", precio: 445000 },
    { id: 4, nombre: "Xerjoff Naxos", tipo: "Dulce", categoria: "premium", notas: "Miel, Tabaco, Lavanda", precio: 320000 },
    { id: 5, nombre: "Amouage Interlude", tipo: "Oriental", categoria: "premium", notas: "Orégano, Incienso, Cuero", precio: 360000 },
    { id: 6, nombre: "Parfums de Marly Layton", tipo: "Dulce", categoria: "premium", notas: "Manzana, Vainilla, Sándalo", precio: 290000 },
    { id: 7, nombre: "Citrus Fresh Especial", tipo: "Acido", categoria: "ofertas", notas: "Limón Siciliano, Bergamota, Menta", precio: 60000 },
    { id: 8, nombre: "Forest Mist", tipo: "Herbal", categoria: "ofertas", notas: "Musgo de Roble, Lavanda, Romero", precio: 65000 },
    { id: 9, nombre: "Dolce Duo Pack", tipo: "Dulce", categoria: "combos", notas: "Pack Fragancia + Crema Corporal", precio: 110000 }
];

export const AppState = {
    usuarioAutenticado: false,
    tagSeleccionado: null,
    carrito: []
};

export const DOM = {
    viewDashboard: document.getElementById("dashboard-view"),
    viewAuth: document.getElementById("auth-view"),
    viewSearch: document.getElementById("search-view"),
    dynamicBg: document.querySelector(".dynamic-luxury-bg"),
    
    gridPremium: document.getElementById("grid-premium"),
    gridOfertas: document.getElementById("grid-ofertas"),
    gridCombos: document.getElementById("grid-combos"),
    gridSearchResults: document.getElementById("grid-search-results"),
    searchResultsTitle: document.getElementById("search-results-title"),
    
    menuToggleBtn: document.getElementById("menu-toggle-btn"),
    navMenuLinks: document.getElementById("nav-menu-links"),
    
    // El listado de los 6 enlaces requeridos (3RNF)
    botonInicio: document.getElementById("lnk-inicio"),
    botonPerfumes: document.getElementById("lnk-perfumes"),
    botonOfertas: document.getElementById("lnk-ofertas"),
    botonCombos: document.getElementById("lnk-combos"),
    botonNosotros: document.getElementById("lnk-nosotros"),
    botonContacto: document.getElementById("lnk-contacto"),
    brandBlock: document.querySelector(".brand-block"),
    
    // Los 3 utilitarios en formato SVG a la derecha (3RNF)
    navSearchTrigger: document.getElementById("nav-search-trigger"),
    navAuthTrigger: document.getElementById("nav-auth-trigger"),
    navCartTrigger: document.getElementById("nav-cart-trigger"),
    heroExploreBtn: document.getElementById("hero-explore-btn"),
    
    cartSidebar: document.getElementById("cart-sidebar"),
    closeCartBtn: document.getElementById("close-cart-btn"),
    cartItemsContainer: document.getElementById("cart-items-container"),
    cartCounter: document.getElementById("cart-counter"),
    cartTotalAmount: document.getElementById("cart-total-amount"),
    
    searchNameInput: document.getElementById("search-by-name-input"),
    tagButtons: document.querySelectorAll(".tag-btn"),
    
    loginForm: document.getElementById("login-form-container"),
    registerForm: document.getElementById("register-form-container"),
    goToRegister: document.getElementById("go-to-register"),
    goToLogin: document.getElementById("go-to-login"),
    btnExecuteLogin: document.getElementById("btn-execute-login")
};

// ==========================================================================
// CONTROL DE ESTADO (Agrega esto al fondo de tu State.js actual)
// ==========================================================================

/**
 * Agrega un perfume al carrito de compras global y desencadena la actualización de la interfaz (SRP)
 * @param {number} id - Identificador único del perfume clickeado
 */
export function agregarProductoAlEstadoCarrito(id) {
    // 1. Buscamos si el producto existe en nuestra base de datos inyectada
    const producto = PRODUCTOS_DATA.find(p => p.id === id);
    if (!producto) return;

    // 2. Lógica de negocio: Lo empujamos al array interno de AppState
    AppState.carrito.push(producto);
    console.log(`[STATE] Producto agregado con éxito:`, AppState.carrito);

    // 3. Render reactivo: Actualizar contador visual si el nodo del DOM ya fue capturado
    if (DOM.cartCounter) {
        DOM.cartCounter.textContent = AppState.carrito.length;
    }
}