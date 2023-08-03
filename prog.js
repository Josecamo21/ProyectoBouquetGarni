

(function () {
    //variables
    const imgs = ['/imgs/galeria/1.jpg',
    '/imgs/galeria/2.jpeg',
    '/imgs/galeria/3.jpeg',
    '/imgs/galeria/4.jpeg',
    '/imgs/galeria/5.jpeg',
    '/imgs/galeria/6.jpeg',
    '/imgs/galeria/7.jpeg',
    '/imgs/galeria/8.jpeg',
    '/imgs/galeria/9.jpeg',
    '/imgs/galeria/10.jpeg',
    '/imgs/galeria/11.jpeg',
    '/imgs/galeria/12.jpeg',
    '/imgs/galeria/13.jpeg',];
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');


    //siguiente imagen
    function pasarFoto() {
        posicionActual >= imgs.length-1? posicionActual=0 : posicionActual++;
        renderizarImagen();
    }


    //anterior imagen
    function retrocederFoto() {
        posicionActual >= 0? posicionActual=imgs.length-1 : posicionActual--;
        renderizarImagen();
    }


    //insertar imagen
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${imgs[posicionActual]})`;
    }


    //eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);

    renderizarImagen();
})();


// (function () {
//     let h1 = document.getElementById('h1');
//     h1.textContent = "Galeria";
// })();

