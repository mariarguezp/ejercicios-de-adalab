'use strict';

//obtenemos el elemento .item1
const firstItem = document.querySelector('.item1');

//obtenemos el elemento .title
let titleElement = document.querySelector('.title');

//modificamos el contenido del elemento .title para añadirle el contenido del elemento .item1

// titleElement.innerHTML = titleElement.innerHTML + firstItem.innerHTML;

//obtenemos el elemento .item2
const secondItem = document.querySelector('.item2');

//modificamos el contenido del elemento .title para añadirle el contenido del elemento .item2
titleElement.innerHTML = titleElement.innerHTML + secondItem.innerHTML;