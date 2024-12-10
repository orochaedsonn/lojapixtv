window.addEventListener('load', () => {
    const preload = document.getElementById('preload');
    preload.style.opacity = '0';
    setTimeout(() => preload.style.display = 'none', 500); // Esconde após a transição
});