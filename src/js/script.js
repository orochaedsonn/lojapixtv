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

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        autoplay:true,
        type   : 'loop',
        
    } );
    splide.mount();
    
  } );