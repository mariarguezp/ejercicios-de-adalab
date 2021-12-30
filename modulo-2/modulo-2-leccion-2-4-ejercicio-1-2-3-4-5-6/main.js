"use strict";

// ----- EJERCICIO 1: Función multiplicación-----
// function mult(a, b) {
//     const result = a * b;

//     return result;
// }

// console.log(mult(2, 4));
// console.log(mult(3, 5));
// console.log(mult(5, 6));

// ----- EJERCICIO 2: Función media-----
// function media(a, b, c, d) {
//     const result = (a + b + c + d) / 4;

//     return result;
// }

// console.log(media(1, 1, 1, 1));
// console.log(media(2, 3, 5, 2));
// console.log(media(10, 9, 6, 8));

// ----- EJERCICIO 3: Ticket con IVA-----
// function price(a) {
//     const simplePrice = a;
//     const priceIVA = a * 0.21;
//     const totalPrice = simplePrice + priceIVA;

//     return `Precio sin IVA: ${simplePrice}, IVA: ${priceIVA} y Total: ${totalPrice}`;
// }

// console.log(price(2));
// console.log(price(10.50));
// console.log(price(24));

// // ----- EJERCICIO 4: Pares o nones-----
// function number(a) {
//     if (a % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(number(4));
// console.log(number(5));

// ----- EJERCICIO 5: querySelector para todas -----
// function getEl(element) {
//     return document.querySelector(element);
// }

// const btnEl = getEl(".btn");
// console.log(btnEl);

// const titleEl = getEl(".title");
// console.log(titleEl);

// const subtitleEl = getEl(".subtitle");
// console.log(subtitleEl);

// const textEl = getEl(".text");
// console.log(textEl);

// ----- EJERCICIO 6: Logueando errores -----
function getEl(element) {
  const newElement = document.querySelector(element);

  if (newElement === null) {
      console.error(`No existe ningún elemento con clase, id o tag llamado ${element}`)
  }

  return newElement;
}

const btnEl = getEl('.btn');
console.log(btnEl);

const titleEl = getEl('.tittle');
console.log(titleEl);

