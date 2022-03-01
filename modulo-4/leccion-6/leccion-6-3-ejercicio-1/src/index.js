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

// // añadir un nuevo libro, recibiendo por body params todos los datos
// server.post("/books/add-book", (req, res) => {
//   const query = db.prepare(
//     "INSERT INTO books (title, author, summary, price, stock, ebook) VALUES (?, ?, ?, ?, ?, ?)"
//   );
//   const result = query.run(
//     req.body.title,
//     req.body.author,
//     req.body.summary,
//     req.body.price,
//     req.body.stock,
//     req.body.ebook
//   );
//   res.json({
//     result: "book added",
//     bookId: result.lastInsertRowid,
//   });
// });

// convertir title y author en campos obligatorios
server.post("/books/add-book", (req, res) => {
  const query = db.prepare(
    "INSERT INTO books (title, author, summary, price, stock, ebook) VALUES (?, ?, ?, ?, ?, ?)"
  );
  const result = query.run(
    req.body.title,
    req.body.author,
    req.body.summary,
    req.body.price,
    req.body.stock,
    req.body.ebook
  );

  if (req.body.title === null || req.body.author === null) {
    res.json({ error: "Invalid input data" });
  } else {
    res.json({
      result: "book added",
      bookId: result.lastInsertRowid,
    });
  }
});
