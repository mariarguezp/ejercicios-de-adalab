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

const db = new Database("./src/database.db", {
  verbose: console.log,
});

// borrar libro cuyo id llegue por url params
server.delete("/books/delete/:id", (req, res) => {
  const query = db.prepare("DELETE FROM books WHERE id = ?");
  const result = query.run(req.params.id);
  res.json(result);
});

// borrar todos los libros físicos sin stock
server.delete("/books/delete/books-out-of-stock", (req, res) => {
  const query = db.prepare("DELETE FROM books WHERE ebook = ? AND stock = ?");
  const result = query.run("false", 0);
  res.json(result);
});
