'use strict';


//Declaración de objetos literales
const gato = {
    nombre: 'Missy',
    color: 'negro',
    numeroPatas: 4,
    comidaFavorita: 'lasaña'
}

console.log(gato.nombre);

//Modifico proiedad objeto
gato.nombre = 'Dayana';
console.log(gato.nombre);


//Declaración del objeto, e inicializar objeto vacío (2 formas de hacerlo). Se suele usar cuando se declara un objeto pero áun no se sabe qué propiedades va a tener
const gato2 = {}
// gato2['nombre'] = 'Ivan';
// gato2['color'] = 'negro';
// gato2['numeroPatas'] = 4;

gato2.nombre = 'Ivan';
gato2.color = 'Negro';
gato2.comidaFavorita = 'Lasaña';

gato2.maullar = function() {
    console.log('Miau');
}
gato2.maullar();

