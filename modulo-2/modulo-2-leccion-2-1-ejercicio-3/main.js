'use strict';

//Declaramos una constante a la que asignamos el valor del elemento con selector de clase .text (obtenemos el elemento HTML)
const textElement = document.querySelector('.text');

//cambiamos el contenido del elemento
textElement.innerHTML = 'Hola Mundo';