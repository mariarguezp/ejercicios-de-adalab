'use strict';

//Declarar e inicializar una lista (array)

const lista = [
    'cero',
    'uno',
    'dos',
    'tres',
    'cuatro'
];

// const lista = [];
// lista[0] = 'cero';
// lista[1] = 'uno';
// lista[20] = 'veinte';

//Cómo usamos las listas
console.log(lista[0]);

lista[4] = 'oveja';
lista[5] = 'gato';

let numero = 0;

console.log(lista[numero]);

numero += 1;
console.log(lista[numero]);

numero++;
console.log(lista[numero]);

//Bucles. 1er elemento: donde inicia. 2º elemento: hasta donde va a recorrer el listado. 3er elemento: como incrementa el valor de la posición.
for (let numero = 0; numero < lista.length; numero++) {
    console.log(lista[numero]);
    lista[numero] = '';
}
console.log(lista);