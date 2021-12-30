'use strict';

const backgoundElement = document.querySelector('.js_body');

function handleBackgroundColor(event) {
    const pressedKey = event.key;

    if (pressedKey === 'r') {
        backgoundElement.classList.add('bgColor1');
        backgoundElement.classList.remove('bgColor2');
    } else if (pressedKey === 'm') {
        backgoundElement.classList.add('bgColor2');
        backgoundElement.classList.remove('bgColor1');
    } else {
        backgoundElement.classList.remove('bgColor2');
        backgoundElement.classList.remove('bgColor1');
    }
}

document.addEventListener('keydown', handleBackgroundColor);

