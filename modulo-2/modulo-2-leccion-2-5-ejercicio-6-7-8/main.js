'use strict';

const inputEl = document.querySelector('.js_input');
const textEl = document.querySelector('.js_text');

function handleWriteText(event) {
    textEl.innerHTML = event.currentTarget.value;
}

inputEl.addEventListener('keyup', handleWriteText);



// ----- EJERCICIO 7: Otro botón -----
// const btnEl = document.querySelector('.js_btn');

// function handleBtnStyle(event) {
//     event.currentTarget.classList.toggle('button__style');

// }

// btnEl.addEventListener('click', handleBtnStyle);



// ----- EJERCICIO 8: Más botones -----
const btnEl = document.querySelector('.js_btn');
const btnEl2 = document.querySelector('.js_btn2');

function handleBtnStyle(event) {
    event.currentTarget.classList.toggle('button__style');

}

btnEl.addEventListener('click', handleBtnStyle);
btnEl2.addEventListener('click', handleBtnStyle);