// ==========================================================================
// COMPONENTE: Navbar.js (Estructura de Alta Gama)
// ==========================================================================

export function Navbar() {
    return `
        <nav class="navbar">
            <div class="nav-logo">
                <span class="logo-title">ALTAGAMA</span>
                <span class="logo-subtitle">TU VIAJE, TU ESENCIA</span>
            </div>

            <div class="nav-links">
                <div class="mobile-nav-header">
                    <span>ALTAGAMA</span>
                    <button class="btn-icon close-menu-btn" id="close-mobile-menu">✕</button>
                </div>
                <a href="#inicio" class="active">INICIO</a>
                <a href="#premium">PERFUMES</a>
                <a href="#ofertas">OFERTAS</a>
                <a href="#combos">COMBOS</a>
                <a href="#nosotros">NOSOTROS</a>
                <a href="#contacto">CONTACTO</a>
            </div>

            <div class="nav-utils">
                <button class="btn-icon" aria-label="Buscar" id="nav-search-trigger">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                
                <button class="btn-icon" aria-label="Perfil Privilege">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </button>
                
                <button class="btn-icon" aria-label="Carrito" id="nav-cart-trigger">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </button>
                
                <button class="btn-icon menu-hamburger" id="open-mobile-menu" aria-label="Abrir menú">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </nav>
    `;
}