'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista'
}

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
}

let textEl = document.querySelector('.text').innerHTML;

textEl = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`;

console.log(textEl);

textEl = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}`;

console.log(textEl);



// ----- EJERCICIO 2: A la carrera -----
adalaber1.run = () => `Estoy corriendo`;
console.log(adalaber1.run());

adalaber1.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kilómetros`;
console.log(adalaber1.runAMarathon(50));


// ----- EJERCICIO 3:Bio de Adalabers 2 -----
adalaber1.showBio = function() {
    console.log(`Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.job}`);
}

adalaber2.showBio = function() {
    console.log(`Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.job}`);
}

adalaber1.showBio();
adalaber2.showBio();
