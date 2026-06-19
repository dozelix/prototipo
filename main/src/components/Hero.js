export function Hero() {
    return `
        <section class="hero-section">
            <div class="hero-grid">
                <div class="hero-content">
                    <span class="hero-pre">ALTAGAMA PERFUMERÍA</span>
                    <h1>PRIVILEGE</h1>
                    <p class="hero-sub-title">COLECCIÓN NICHO</p>
                    <p class="hero-description">Explore fragancias exclusivas y elíxires diseñados para quienes exigen distinción absoluta.</p>
                    <button class="btn-hero" id="hero-explore-btn">EXPLORAR COLECCIÓN</button>
                </div>
                <div class="hero-display">
                    <img src="assets/hero-display.png" alt="Estuche Privilege Altagama" onerror="this.src='https://via.placeholder.com/350x400/000/fff?text=Privilege+Luxe'">
                </div>
            </div>
        </section>
    `;
}