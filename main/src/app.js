// ==========================================================================
// MASTER ORQUESTADOR: main/src/app.js (Modo Single Root)
// ==========================================================================

import { Navbar } from './components/NavBar.js';
import { Footer } from './components/Footer.js';
import { renderDashboardView } from './views/DashboardView.js';

// Controladores visuales del ecosistema
import { 
    inicializarEventosNavbar, 
    inicializarEventosDashboard, 
    inicializarScrollEfecto 
} from './components/Ui.js';

// Captura del nodo raíz unificado
const appRoot = document.getElementById('app-root');

/**
 * Ensamble y arranque del ecosistema Altagama en una sola raíz
 */
function inicializarAplicacion() {
    if (!appRoot) return;

    // 1. Inyección total del esqueleto base en un solo ciclo de renderizado
    appRoot.innerHTML = Navbar() + renderDashboardView() + Footer();

    // 2. Activación inmediata de los sensores y escuchadores de eventos (SRP)
    inicializarEventosNavbar();
    inicializarEventosDashboard();
    inicializarScrollEfecto(); // Activa tu nuevo sensor IntersectionObserver nativo
}

// Encendido del motor global
inicializarAplicacion();