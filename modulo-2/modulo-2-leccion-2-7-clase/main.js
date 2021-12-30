'use strict';

const listElement = document.querySelector('.js-list');

const lista = [
    {nombre: 'María', edad:24, profesion: 'diseñadora'},
    {nombre: 'Claudia', edad:42, profesion: 'actriz'},
    {nombre: 'Ale', edad:18, profesion: 'periodista'},
    {nombre: 'Susana', edad:34, profesion: 'diseñadora'},
];

console.log(lista[0].nombre);
console.log(lista[0].edad);

// //Bucle for clásico
// for (let index = 0; index < lista.length; index++) {
//     listElement.innerHTML += `<li>${lista[index].nombre} ${lista[index].edad} ${lista[index].profesion}</li>`;
// }

// //Bucle for of
// for (const item of lista) {
//     listElement.innerHTML += `<li>${item.nombre} ${item.edad} ${item.profesion}</li>`;
// }

//Poner condicionales dentro de un bucle. En este caso le estamos pidiendo que nos muestre solo los elementos de la lista que empiezan por C.
for (const item of lista) {
    if (item.nombre.charAt(0) === 'C') {
    listElement.innerHTML += `<li>${item.nombre} ${item.edad} ${item.profesion}</li>`;
    }
}

function countAdalabers(lista) {
    return lista.length;
}

function averageAge(lista) {
    let suma = 0;

    for (let index = 0; index < lista.length; index++) {
        suma += lista[index].edad;
    }
    // for (const item of lista) {
    //     suma += item.edad;
    // }
    let media = suma / lista.length;
    return media;
}

//Le pedimos que nos cuente cuántas diseñadoras hay en la lista
function countDesigners() {
    let count = 0;
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].profesion === 'diseñadora') {
            count++;
        }
    }
    return count;
}

function theYoungest(lista) {
    let min = lista[0].edad;
    let min = lista[0].nombre;
    console.log(min);

    for (let index = 0; index < lista.length; index++) {
        if(min > lista[index].edad) {
            min = lista[index].edad;
            nombre = lista[index].nombre;
        }
    }
    console.log(`el mínimo es ${nombre}`);
}
theYoungest(lista);
