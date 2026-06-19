// ==========================================================================
// COMPONENTE: ProductCatalog.js (Sincronizado con la cascada de Dashboard.css)
// ==========================================================================

export function ProductCatalog() {
    return `
        <section id="premium" class="dynamic-luxury-bg dashboard-section">
            <div class="catalog-internal-wrap">
                
                <div class="catalog-header">
                    <div class="luxury-divider-line"></div>
                    <span class="catalog-pretitle">SELECCIÓN EXCLUSIVA</span>
                    <h2 class="catalog-main-title">Fragancias de Élite Disponibles</h2>
                </div>

                <div class="grid-container" id="grid-premium">
                    
                    <div class="product-card">
                        <div class="product-image-wrap">
                            <img src="assets/perfumes/perfume.svg" alt="Creed Aventus" onerror="this.src='https://via.placeholder.com/180x180?text=Creed+Aventus'">
                        </div>
                        <div class="product-info">
                            <h3 class="brand-title">CREED</h3>
                            <p class="product-name">Aventus Premium</p>
                            <p class="product-size">100 ml</p>
                            <span class="product-price">$349.99</span>
                        </div>
                        <button class="btn-buy">COMPRAR</button>
                    </div>

                </div>
            </div>
        </section>
    `;
}