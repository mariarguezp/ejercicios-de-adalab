'use strict';

const linkEl1 = document.querySelector('.js_link_1');
const linkEl2 = document.querySelector('.js_link_2');
const linkEl3 = document.querySelector('.js_link_3');

//Función que deshabilita los enlaces
function handleClickLink(event) {
    event.preventDefault();
}

linkEl1.addEventListener('click', handleClickLink);
linkEl2.addEventListener('click', handleClickLink);
linkEl3.addEventListener('click', handleClickLink);

//Quitamos el listener del tercer link para habilitarlo
linkEl3.removeEventListener('click', handleClickLink);