import burgerMenu from "./burger_menu.js";

const d = document;

d.addEventListener("DOMContentLoaded",e=>{
    burgerMenu(".panel-btn",".menu__panel",".menu__items")
});

document.addEventListener('DOMContentLoaded', function (){
    let imagenes = [
        {img: '/img/gallery/1.jpg'},
        {img: '/img/gallery/2.jpg'},
        {img: '/img/gallery/3.jpg'},
        {img: '/img/gallery/4.jpg'},
        {img: '/img/gallery/5.jpg'},
        {img: '/img/gallery/6.jpg'},
        {img: '/img/gallery/7.jpg'},
        {img: '/img/gallery/8.jpg'},
        {img: '/img/gallery/9.jpg'},
        {img: '/img/gallery/10.jpg'},
        {img: '/img/gallery/11.jpg'},
        {img: '/img/gallery/12.jpg'},
        {img: '/img/gallery/13.jpg'},
        {img: '/img/gallery/14.jpg'},
        {img: '/img/gallery/15.jpg'}]

    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeriaImagenes = document.querySelectorAll ('.galeria img')
    const imgSlideShow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function (event){
        let atras = contenedor.querySelector('.back'),
        adelante = contenedor.querySelector('.next'),
        img = contenedor.querySelector('img'),
        tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }
        }else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }
        }
    })

    Array.from(galeriaImagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagenSeleccionada = +event.target.dataset.imgZoom
            imgSlideShow.src = imagenes[imagenSeleccionada].img
            contador = imagenSeleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn__cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })
})
