document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const pauseButton = document.getElementById('pauseButton');
    let translateX = 0; // Inicializa la posición X de la primera imagen
    let isPaused = false;

    // Función para pausar o reanudar el carrusel
    function togglePause() {
        isPaused = !isPaused;
        pauseButton.textContent = isPaused ? 'Reanudar' : 'Pausa';
    }

    pauseButton.addEventListener('click', togglePause);

    // Función para cambiar de imagen automáticamente
    function moveCarousel() {
        if (!isPaused) {
            translateX -= 100; // Mueve el carrusel hacia la izquierda
            if (translateX < -(carousel.children.length - 1) * 100) {
                translateX = 0; // Vuelve al inicio si alcanza la última imagen
            }
            carousel.style.transform = `translateX(${translateX}%)`;
        }
    }

    setInterval(moveCarousel, 3000); // Cambia de imagen cada 3 segundos (ajusta según tus necesidades)
});
