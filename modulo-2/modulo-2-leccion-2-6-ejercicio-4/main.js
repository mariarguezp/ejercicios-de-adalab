'use strict';

const button = document.querySelector('.button');

function handleClickLogEvent(event) {
    console.log(event);
}

button.addEventListener('click', handleClickLogEvent);