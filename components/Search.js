import { DOM, AppState, PRODUCTOS_DATA } from './State.js';
import { renderizarCatalogo } from '../../../modules/ui.js';

export function ejecutarBusquedaCombinada() {
    if (!DOM.searchNameInput) return;
    const textoBusqueda = DOM.searchNameInput.value.toLowerCase().trim();
    let filtrados = PRODUCTOS_DATA;

    if (AppState.tagSeleccionado) {
        filtrados = filtrados.filter(p => p.tipo === AppState.tagSeleccionado);
    }

    if (textoBusqueda !== "") {
        filtrados = filtrados.filter(p => p.nombre.toLowerCase().includes(textoBusqueda));
    }

    if (textoBusqueda === "" && !AppState.tagSeleccionado) {
        DOM.searchResultsTitle.innerText = "Selecciona una categoría superior o escribe un nombre";
        DOM.gridSearchResults.innerHTML = "";
    } else {
        DOM.searchResultsTitle.innerText = `Resultados encontrados (${filtrados.length})`;
        renderizarCatalogo(filtrados, DOM.gridSearchResults);
    }
}

export function filtrarPorFamiliaOlfativa(botonSeleccionado) {
    const tipoFiltro = botonSeleccionado.getAttribute("data-tipo");
    
    // Cambios visuales de los Tags activos (Toggle elegante)
    DOM.tagButtons.forEach(btn => btn.classList.remove("active-tag"));
    
    if (AppState.tagSeleccionado === tipoFiltro) {
        AppState.tagSeleccionado = null;
    } else {
        AppState.tagSeleccionado = tipoFiltro;
        botonSeleccionado.classList.add("active-tag");
    }
    ejecutarBusquedaCombinada();
}