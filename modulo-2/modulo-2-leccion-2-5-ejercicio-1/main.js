'use strict';

//llamo al párrafo
const textElement = document.querySelector('.text');
//llamo al botón
const button = document.querySelector('.button');

//defino la función handler y le indico que cambie el contenido del párrafo
function modifyText() {
    textElement.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}

//registro la función listener sobre el elemento button, con el tipo de evento (click) y handler. Le estoy indicando que al hacer click en el botón debe ejecutar la función modifyText, cambiando el conenido del párrafo
button.addEventListener('click', modifyText);
