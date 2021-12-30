'use strict';

// const dogAge = 2;

// if (dogAge <= 1) {
//     const dogAge = 15;
//     console.log(`La edad humana del perro son ${dogAge} años.`);
// } else if (dogAge === 2) {
//     const dogAge = 15 + 9;
//     console.log(`La edad humana del perro son ${dogAge} años.`);
// } else {
//     const dogAge = 15 + 9 + (dogAge - 2) * 5;
// }

const dogAge = 1;
let humanDogAge;

// El primer año de un perro equivale a 15 años de humano
// El segundo año de un perro equivale a nueve años de humano
// A partir del tercero, cada año de perro equivale a 5 años de humano.

if (dogAge === 1) {
    humanDogAge = 15;
    console.log(`La edad humana del perro son ${humanDogAge} años.`);
} else if (dogAge === 2) {
    humanDogAge = 15 + 9;
    console.log(`La edad humana del perro son ${humanDogAge} años.`);
} else {
    humanDogAge = 15 + 9 + (dogAge - 2) * 5;
    console.log(`La edad humana del perro son ${humanDogAge} años.`);
}


