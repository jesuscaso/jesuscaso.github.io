const imagenes = document.querySelectorAll('.parallax');
new simpleParallax(imagenes, {
    scale: 1.3, 
    delay: 0.75,
    transition: 'cubic-bezier(0,0,0,1)'
});
