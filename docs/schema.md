main/
└── src/
    ├── assets/                  # Recursos estáticos
    ├── components/              # Lógica de componentes (JS)
    │   ├── BrandsMarquee.js
    │   ├── Cart.js
    │   ├── DiscoverySection.js
    │   ├── Footer.js
    │   ├── Hero.js
    │   ├── NavBar.js
    │   ├── ProductCatalog.js   
    │   ├── Search.js
    │   ├── State.js
    │   ├── TrustBar.js
    │   └── Ui.js
    │
    ├── style/                   # Capa de Presentación (CSS)
    │   ├── styles.css           # Orquestador Central (Aquí realizas los @import)
    │   └── styles/              # Hojas de Estilo Fragmentadas (Nombres únicos)
    │       ├── auth.css         # Formularios de Login/Registro
    │       ├── base.css         # Resets, scroll-behavior y motor .dynamic-luxury-bg
    │       ├── brandsmarquee.css# Estilos de la pasarela de logos
    │       ├── cart.css         # Sidebar deslizable
    │       ├── discoverysection.css # 
    │       ├── footer.css       # Estructura del Footer
    │       ├── hero.css         # Banner principal
    │       ├── navbar.css       # Menú y cortina móvil
    │       ├── productcatalog.css# 
    │       ├── search.css       # Buscador y filtros
    │       ├── trustbar.css     # Barra de atributos (Separada de hero.css)
    │       └── variables.css    # Tokens de diseño (:root, colores, fuentes)
    │
    └── views/
        └── DashboardView.js     # Ensamblador maestro