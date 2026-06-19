// ==========================================================================
// VISTA SPA: main/src/views/DashboardView.js
// Ensamblador Maestro de la Experiencia del Usuario Altagama
// ==========================================================================

import { Hero } from '../components/Hero.js';
import { TrustBar } from '../components/TrustBar.js';
import { BrandsMarquee } from '../components/BrandsMarquee.js';
import { ProductCatalog } from '../components/ProductCatalog.js';
import { DiscoverySection } from '../components/DiscoverySection.js';

/**
 * Renderiza la experiencia unificada del Dashboard principal.
 * Une los componentes lógicos en una sola estructura responsiva.
 */
export function renderDashboardView() {
    return `
        <main class="dashboard-container">
            ${Hero()}
            ${TrustBar()}
            ${BrandsMarquee()}
            
            ${ProductCatalog()}
            
            ${DiscoverySection()}
        </main>
    `;
}