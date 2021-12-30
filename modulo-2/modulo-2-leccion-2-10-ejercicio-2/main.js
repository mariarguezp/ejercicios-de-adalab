'use strict';

const inputElement = document.querySelector('.js_input');
const btnElement = document.querySelector('.js_btn');

function getUserInput() {
    inputElement.value
}

function handleClick() {
    fetch('https://api.github.com/orgs/Adalab')
    .then(response => response.json())
    .then(data =)
}

btnElement.addEventListener('click', handleClick);