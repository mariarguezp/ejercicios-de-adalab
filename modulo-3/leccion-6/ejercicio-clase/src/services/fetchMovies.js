// Otras funciones auxiliares que no queremos exportar:

// function Maricarmen() {

// }
// function patata() {

// }

// Funciones que si queremos usar desde otros ficheros JavaScript:

function getMovies() {
  return fetch('https://beta.adalab.es/pw-recursos/apis/adamdb-v1/books_with_id.json')
    .then((response) => response.json());
}

// Export con un objeto con los nombres de las funciones:

export { getMovies };