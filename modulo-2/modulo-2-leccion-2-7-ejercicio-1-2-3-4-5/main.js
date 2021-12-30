'use strict';

// function workWithMovies() {
// const movies = [
//     'Mujeres al borde de un ataque de nervios',
//     'Kika',
//     'Volver'
// ]

// movies[3] = 'La piel que habito';
// movies[1] = 'Tacones lejanos';

// console.log(movies);
// }

// workWithMovies();



// // ----- EJERCICIO 2 -----
// for (let i = 1; i < 11; i++) {
//     console.log(`Voy por la vuelta ` + i);
// }



// // ----- EJERCICIO 3 -----
// let acc = 0;

// for (let i = 0; i < 10; i++) {
//     acc += 2;
// }

// console.log(`El resultado es: ${acc}`);



// // ----- EJERCICIO 4 -----
// let year = 2017;

// for (let i = 0; i < 15; i++) {
//     year += 3;
//     console.log(`En ${year} se podrá ver la Luna del cazador`);    
// }



// ----- EJERCICIO 5: La media -----
const numbers = [
    4,
    10,
    8,
    2,
    6,
]

// numbers[5] = 9;

let sum = 0;
let result;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// // result = sum / 5;

// // console.log(sum);
// // console.log(result);

// result = sum / 6;

// console.log(sum);
// console.log(result);



function average(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    result = sum / numbers.length;

    return result;
}

console.log(average(numbers));


