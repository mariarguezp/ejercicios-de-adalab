'use strict';

// const marks = [5, 4, 6, 7, 9];

// const inflatedMarks = marks.map((value) => value + 1);

// console.log(inflatedMarks);



// // ----- EJERCICIO 2 -----

// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

// const welcomeText = names.map((name) => `Bienvenida ` + name); //O `Bienvenida ${name}`

// console.log(welcomeText);



// ----- EJERCICIO 3 -----

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
  ];

const welcomePremium = users.map((isPremium) => isPremium === true || (name) => `Bienvenida ${users.name}. Gracias por confiar en nosotros`);



// // ----- EJERCICIO 4 -----  

// const users = [
//     { name: "María", isPremium: false },
//     { name: "Lucía", isPremium: true },
//     { name: "Susana", isPremium: true },
//     { name: "Rocío", isPremium: false },
//     { name: "Inmaculada", isPremium: false },
//   ];

// const premiumUsers = users.filter((isPremium) => isPremium = true);

// console.log(premiumUsers);