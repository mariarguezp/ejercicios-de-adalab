'use strict';

let ingredient = '';

switch (ingredient) {
    case 'pollo':
        console.log(`Tu ingrediente es ${ingredient}. Puedes hacerte un filete con patatas.`);
        break;
    case 'merluza':
        console.log(`Tu ingrediente es ${ingredient}. Puedes hacer una merluzita en salsa verde.`);
        break;
    case 'espinacas':
        console.log(`Tu ingrediente es ${ingredient}. Puedes cocinar unas espinacas rehogadas.`);
        break;
    default:
        console.log(`Nada en la nevera`);
}



