document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    if (toggleButton && navbar) {
        toggleButton.addEventListener('click', () => {
            navbar.classList.toggle('show');
            toggleButton.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    } else {
        console.error('Elemento menu-toggle ou navbar não encontrado.');
    }
});


  var splide = new Splide( '.splide', {
    type   : 'loop',
    padding: '5rem',
  } );
  
  splide.mount(); 


