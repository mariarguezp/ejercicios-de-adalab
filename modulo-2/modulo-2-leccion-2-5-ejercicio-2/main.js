'use strict';

const nameElement = document.querySelector('.name');
const button = document.querySelector('.button');


function displayName() {
    if (nameElement.value !== '') {
        const name = nameElement.value;
        console.log(`Hola ${name}`);
    }
}


button.addEventListener('click', displayName);