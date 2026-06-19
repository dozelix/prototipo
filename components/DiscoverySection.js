export function DiscoverySection() {
    return `
        <section class="offers-showcase">
            <div class="offers-main-header">
                <div class="luxury-divider-line"></div>
                <h2>Discovery Sets</h2>
                <p class="offers-subtitle">Sets de Exploración Guiada</p>
                <p class="offers-lead">Encuentre su nota olfativa ideal antes de elegir la botella absoluta</p>
            </div>
            <div class="discovery-sets-grid">
                <div class="discovery-card">
                    <div class="discovery-image-wrap">
                        <img src="assets/perfumes/set.svg" alt="Discovery Pack Premium" onerror="this.src='https://via.placeholder.com/200x200?text=Discovery+Set'">
                    </div>
                    <div class="discovery-info">
                        <h3>Muestras de Élite</h3>
                        <p class="set-specs">5 viales x 2ml (Nicho Selecto)</p>
                        <div class="set-features">
                            <span class="feature-item">✓ Vaporizador</span>
                            <span class="feature-item">✓ Folleto Olfativo</span>
                        </div>
                        <span class="discovery-price">$35.000</span>
                        <button class="btn-discovery-buy">ADQUIRIR SET</button>
                        <p class="discovery-footer-text">Incluye un cupón de descuento reembolsable para su próxima compra full-size.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}