import { DOM, AppState, PRODUCTOS_DATA } from './state.js';

export function agregarAlCarrito(id) {
    const producto = PRODUCTOS_DATA.find(p => p.id === id);
    if (producto) {
        AppState.carrito.push(producto);
        actualizarInterfazCarrito();
    }
}

export function eliminarDelCarrito(index) {
    AppState.carrito.splice(index, 1);
    actualizarInterfazCarrito();
}

export function actualizarInterfazCarrito() {
    DOM.cartCounter.innerText = AppState.carrito.length;
    DOM.cartItemsContainer.innerHTML = "";

    if (AppState.carrito.length === 0) {
        DOM.cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Tu carrito está vacío.</p>`;
        DOM.cartTotalAmount.innerText = "$0";
        return;
    }

    let total = 0;
    AppState.carrito.forEach((item, index) => {
        total += item.precio;
        const itemRow = document.createElement("div");
        itemRow.className = "cart-item";
        itemRow.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.nombre}</h4>
                <span>$${item.precio.toLocaleString("es-CL")}</span>
            </div>
            <button class="remove-item-btn">✕</button>
        `;
        
        itemRow.querySelector(".remove-item-btn").addEventListener("click", () => eliminarDelCarrito(index));
        DOM.cartItemsContainer.appendChild(itemRow);
    });

    DOM.cartTotalAmount.innerText = `$${total.toLocaleString("es-CL")}`;
}