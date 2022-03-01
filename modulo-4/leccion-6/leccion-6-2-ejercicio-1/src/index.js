const express = require("express");
const cors = require("cors");
// importar el módulo better-sqlite3
const Database = require("better-sqlite3");

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// indicar qué base de datos vamos a usar con la ruta relativa a la raíz del proyecto
const db = new Database("./src/database.db", {
  // con verbose le decimos que muestre en la consola todas las queries que se ejecuten
  verbose: console.log,
  // así podemos comprobar qué queries estamos haciendo en todo momento
});

// // modificar el título de un libro, recibiendo id por url params y nuevo título por body params
// server.patch("/books/:id", (req, res) => {
//   const query = db.prepare("UPDATE books SET title = ? WHERE id = ?");
//   const result = query.run(req.body.title, req.params.id);
//   res.json(result);
// });

// // cambiar la cantidad de stock de todos los libros, recibiéndola por body params
// server.patch("/books/new-stock", (req, res) => {
//   const query = db.prepare("UPDATE books SET stock = ?");
//   const result = query.run(req.body.stock);
//   res.json(result);
// });

// // cambiar la cantidad de stock solo de los libros físicos
// server.patch("/books/new-stock", (req, res) => {
//   const query = db.prepare("UPDATE books SET stock = ? WHERE ebook = ?");
//   const result = query.run(req.body.stock, "false");
//   res.json(result);
// });

// cambiar todos los datos de un libro, recibiendo por url params el id y por body params los nuevos datos
server.put("/books/:id", (req, res) => {
  const query = db.prepare(
    "UPDATE books SET title = ?, author = ?, summary = ?, price = ?, stock = ?, ebook = ? WHERE id = ?"
  );
  const result = query.run(
    req.body.title,
    req.body.author,
    req.body.summary,
    req.body.price,
    req.body.stock,
    req.body.ebook,
    req.params.id
  );
  res.json(result);
});
