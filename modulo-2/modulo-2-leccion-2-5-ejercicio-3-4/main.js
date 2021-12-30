'use strict';

// const loremElement = document.querySelector('.js_lorem');

// function handleMouseAddText() {
//     loremElement.innerHTML += `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero vel quae dolores quisquam possimus rem incidunt eum quam, consectetur ad sit itaque excepturi, suscipit veniam illum, voluptate illo perferendis.</p>`;
// }

// loremElement.addEventListener('mouseover', handleMouseAddText);



// ----- EJERCICIO 4: Scroll es de colores -----
const divElement = document.querySelector('.js_div');

function handleScrollDivColor() {
    const scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
        divElement.classList.add('bgColor1');
        divElement.classList.remove('bgColor2');
    } else {
        divElement.classList.add('bgColor2');
        divElement.classList.remove('bgColor1');
    }
}

window.addEventListener('scroll', handleScrollDivColor);