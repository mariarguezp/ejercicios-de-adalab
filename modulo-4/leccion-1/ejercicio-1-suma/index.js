// const add = (a, b) => {
//   console.log(a + b);
// };

// add(5, 12);

const fs = require("fs"); //importo el módulo de ficheros fs/filesystem

//LEER UN FICHERO

// fs.readFile(fichero, formato, handler); //parámetros que espera la función readFile

// function handleRead(err, contenido) {} //la función handler trabaja con los parámetros de error y contenido del fichero

// const handleRead = (err, fileContent) => {
//   if (err !== null) {
//     console.log(err);
//   } else {
//     console.log(fileContent);
//   }
// };

// fs.readFile("text", "utf-8", handleRead);

// //ESCRIBIR EN UN FICHERO

// // fs.writeFile(fichero, contenido, handler); //parámetros que espera la función writeFile: fichero donde vamos a escribir, qué contenido queremos escribir, función manejadora

// const contentObject = {
//   nombre: "Conchita",
//   apellido: "Sánchez",
//   edad: "67",
// };

// const handleWrite = (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File saved");
//   }
// };

// fs.writeFile("newFile.json", JSON.stringify(contentObject), handleWrite);

function handleReadJson(err, fileContent) {
  if (err !== null) {
    console.log(err);
  } else {
    const dataObject = JSON.parse(fileContent);
    console.log(dataObject);
    console.log(dataObject.edad);
  }
}

fs.readFile("newFile.json", "utf-8", handleReadJson);
