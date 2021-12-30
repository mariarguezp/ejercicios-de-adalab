'use strict';

const listEl1 = document.querySelector('.teacher--isra');
const listEl2 = document.querySelector('.teacher--nasi');


function handleClickListEl(event) {
    event.currentTarget.classList.toggle('teacher--selected');

    const textEl = event.currentTarget.querySelector('.favorite');

    if (textEl.innerHTML === 'Quitar') {
        textEl.innerHTML = 'Añadir';
    } else {
        textEl.innerHTML = 'Quitar';
    }
    
    //Cambiaba el texto de los dos li, porque no usaba currentTarget
    
    // const textEl1 = listEl1.querySelector('.favorite');
    // const textEl2 = listEl2.querySelector('.favorite');

    // if (textEl1.innerHTML === 'Quitar') {
    //     textEl1.innerHTML = 'Añadir';
    // } else {
    //     textEl1.innerHTML = 'Quitar';
    // }

    // if (textEl2.innerHTML === 'Quitar') {
    //     textEl2.innerHTML = 'Añadir';
    // } else {
    //     textEl2.innerHTML = 'Quitar';
    // }

}

listEl1.addEventListener('click', handleClickListEl);
listEl2.addEventListener('click', handleClickListEl);