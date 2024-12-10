window.addEventListener('load', () => {
    const bgPreload = document.querySelector('.bg-preload');
    
    // Adiciona a classe para ocultar o preloader com transição
    bgPreload.classList.add('hidden');
    
    // Remove completamente o elemento após a transição
    setTimeout(() => {
        bgPreload.remove();
    }, 500); // Tempo correspondente ao da transição no CSS
});