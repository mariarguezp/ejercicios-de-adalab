'use strict';

//traer elementos del HTML
const origenElement = document.querySelector('.js-origen');
const destinoElement = document.querySelector('.js-destino');
const salidaElement = document.querySelector('.js-salida');
const notificacionElement = document.querySelector('.js-notificacion');

//coger los valores
const origenValue = origenElement.innerHTML;
const destinoValue = destinoElement.innerHTML;
let existeDescuento = false;

//Palma -- Barcelona : 5%
//Palma -- Madrid : 10%
//Palma -- Valencia : 15%


// if (origenValue === 'Palma' && destinoValue === 'Barcelona') {
//     salidaElement.innerHTML = '5%';
// } else if (origenValue === 'Palma' && destinoValue === 'Madrid') {
//     salidaElement.innerHTML = '10%';
// } else if (origenValue === 'Palma' && destinoValue === 'Valencia') {
//     salidaElement.innerHTML = '15%';
// } else {
//     salidaElement.innerHTML = 'No tienes descuento';
// }

//Otra forma de hacerlo (anidado)
if (origenValue === 'Palma') {
    if (destinoValue === 'Barcelona') {
        existeDescuento = true; //para mostrar/ocultar notificación
        salidaElement.innerHTML = '5%';
    } else if (destinoValue === 'Madrid') {
        existeDescuento = true;
        salidaElement.innerHTML = '10%';
    } else if (destinoValue === 'Valencia') {
        existeDescuento = true;
        salidaElement.innerHTML = '15%';
    } else {
        salidaElement.innerHTML = 'No tienes descuento';
    }
} else {
    salidaElement.innerHTML = 'No tienes descuento';
}

// //otra forma de hacerlo (ternario)
// if (origenValue === 'Palma' && destinoValue === 'Barcelona') {
//     salidaElement.innerHTML = '5%';
// } else {
//     salidaElement.innerHTML = 'No tienes descuento';
// }

// //Transformamos el if else de justo encima a:
// salidaElement.innerHTML = origenValue === 'Palma' && destinoValue === 'Barcelona' ? '5%' : 'No tienes descuento';

// //Mostrar u ocultar notificación de descuento, dependiendo de si lo hay o no
// if (existeDescuento === true) {
//     notificacionElement.classList.remove('hidden');
// } else {
//     notificacionElement.classList.add('hidden');
// }

// //Otra forma de hacerlo:
// if (salidaElement.innerHTML.includes('%')) {
//     notificacionElement.classList.remove('hidden');
// } else {
//     notificacionElement.classList.add('hidden');
// }

//Otra forma de hacerlo:
if (existeDescuento === true && notificacionElement.classList.contains('hidden')) {
    notificacionElement.classList.remove('hidden');
} else {
    notificacionElement.classList.add('hidden');
}
