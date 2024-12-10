document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (toggleButton && navbar) {
        toggleButton.addEventListener('click', () => {
            navbar.classList.toggle('show'); // Alterna a classe 'show'
        });
    } else {
        console.error('Elemento menu-toggle ou navbar não encontrado.');
    }
});