"use strict";

// ----- EJERCICIO 1: Función multiplicación-----
// function mult(a, b) {
//     const result = a * b;

//     return result;
// }

// console.log(mult(2, 4));
// console.log(mult(3, 5));
// console.log(mult(5, 6));

//ARROW FUNCTION
const mult = (a, b) => a*b;

console.log(mult(2, 4));



// ----- EJERCICIO 2: Función media-----
// function media(a, b, c, d) {
//     const result = (a + b + c + d) / 4;

//     return result;
// }

// console.log(media(1, 1, 1, 1));
// console.log(media(2, 3, 5, 2));
// console.log(media(10, 9, 6, 8));

//ARROW FUNCTION
const media = (a, b, c, d) => (a + b + c + d) / 4;

console.log(media(10, 9, 6, 8));



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

//ARROW FUNCTION
const price = (a) => `Precio sin IVA: ` + a + `, IVA: ` + a * 0.21 + ` y Total: ` + a + a * 0.21;

console.log(price(2));




