'use strict';

const divElement = document.querySelector('.js_div');
const titleElement = document.querySelector('.js_title');
const textElement = document.querySelector('.js_text');

if (divElement.classList.contains('warning')) {
    titleElement.innerHTML = `AVISO`;
    textElement.innerHTML = `Tenga cuidado`;
} else if (divElement.classList.contains('error')) {
    titleElement.innerHTML = `ERROR`;
    textElement.innerHTML = `Ha surgido un error`;
} else if (divElement.classList.contains('success')) {
    titleElement.innerHTML = `CORRECTO`;
    textElement.innerHTML = `Los datos son correctos`;
}




// Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
// Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
// Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
// Cambia la clase en HTML y comprueba que el código de JavaScript funciona.