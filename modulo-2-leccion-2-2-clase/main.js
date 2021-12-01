'use strict';

//declaración de constantes
const list = document.querySelector('.js-list');

const item1 = 'Papel higiénico';
const price1 = '1.80';
const item2 = 'Jabón';
const price2 = '1.20';
const item3 = 'Jabón líquido';
const price3 = '1.80';

// list.innerHTML = `<li>${item1} ${price1}</li>`;
// list.innerHTML += `<li>${item2} ${price2}</li>`;

let html = '';

html += `<li>${item1} ${price1}</li>`;
html += `<li>${item2} ${price2}</li>`;
html += `<li>${item3} ${price3}</li>`;

const totalIva = parseFloat(price1) + parseFloat(price2) + parseFloat(price3);
html += `<li>Precio total: ${totalIva}</li>`

const total = Math.round(totalIva * 0.21);
html += `<li>Precio total + IVA%: ${total}</li>`
//math.round y math.floor sirven para redondear

list.innerHTML = html;

console.log(item1.charAt(2));
//charAt sirve para quedarse u operar con un caracter concreto de un string