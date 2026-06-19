// ==========================================================================
// COMPONENTE: Footer.js (Cierre Premium Centralizado para Altagama)
// ==========================================================================

export function Footer() {
    return `
        <footer class="main-luxury-footer">
            <div class="footer-container">
                
                <div class="footer-column brand-info-col">
                    <div class="footer-brand">
                        <span class="footer-logo">ALTAGAMA</span>
                        <span class="footer-slogan">HAUTE PARFUMERIE</span>
                    </div>
                    <p class="footer-description">
                        Curaduría exclusiva de fragancias de élite y colecciones nicho. Alta perfumería diseñada para la vanguardia.
                    </p>
                </div>

                <div class="footer-column links-col">
                    <h3>EXPLORAR</h3>
                    <ul class="footer-links-list">
                        <li><a href="#premium">Colección Élite</a></li>
                        <li><a href="#ofertas">Discovery Sets</a></li>
                        <li><a href="#buscar">Búsqueda Guiada</a></li>
                        <li><a href="#cuenta">Mi Galería</a></li>
                    </ul>
                </div>

                <div class="footer-column contact-col">
                    <h3>CONCIERGE</h3>
                    <ul class="footer-contact-list">
                        <li>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <span>concierge@altagama.com</span>
                        </li>
                        <li>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .8 2.81A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>Atención Exclusiva (Mon-Sat)</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="footer-bottom-bar">
                <p>&copy; ${new Date().getFullYear()} ALTAGAMA PRIV PRIVÉE. TODOS LOS DERECHOS RESERVADOS.</p>
                <div class="footer-legal-links">
                    <a href="#terminos">TÉRMINOS DE LUJO</a>
                    <a href="#privacidad">PRIVACIDAD</a>
                </div>
            </div>
        </footer>
    `;
}