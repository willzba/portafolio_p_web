// Obtener elementos del DOM
const openModalLink = document.getElementById('openModalLink');
const alertModal = document.getElementById('alertModal');
const closeBtn = document.querySelector('.close-btn');
let closeModalTimeout;

// Mostrar el modal al hacer clic en el enlace
openModalLink.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    alertModal.style.display = 'flex';

    // Iniciar cronómetro para cerrar el modal automáticamente después de 3 segundos
    closeModalTimeout = setTimeout(() => {
        alertModal.style.display = 'none';
    }, 8000);
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener('click', () => {
    alertModal.style.display = 'none';
    clearTimeout(closeModalTimeout); // Cancelar el cierre automático si se cierra manualmente
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === alertModal) {
        alertModal.style.display = 'none';
        clearTimeout(closeModalTimeout); // Cancelar el cierre automático si se cierra manualmente
    }
});
