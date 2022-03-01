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

//Un array con todos los libros ordenados de menor a mayor precio
// creamos el endpoint /users de tipo GET
server.get("/books/price/asc", (req, res) => {
  // preparamos y ejecutamos la query
  const query = db.prepare("SELECT * FROM books ORDER BY price");
  const booksList = query.all();
  // respondemos a la petición con los datos que ha devuelto la base de datos
  res.json(booksList);
});

//Un array con los libros con precio superior a 5 €
server.get("/books/price/min-price", (req, res) => {
  const query = db.prepare("SELECT * FROM books WHERE price > 5");
  const booksList = query.all();
  res.json(booksList);
});

//Un array con los libros en stock
server.get("/books/stock", (req, res) => {
  const query = db.prepare("SELECT * FROM books WHERE stock > 0");
  const booksList = query.all();
  res.json(booksList);
});

//Un array con los libros físicos y en stock
server.get("/books/stock/book", (req, res) => {
  const query = db.prepare(
    "SELECT * FROM books WHERE stock > 0 and ebook = 'false'"
  );
  const booksList = query.all();
  res.json(booksList);
});

//Un objeto con el libro con id = 1
server.get("/books/1", (req, res) => {
  const query = db.prepare("SELECT * FROM books WHERE id = 1");
  const booksList = query.get();
  res.json(booksList);
});

//Un array con los 3 primeros libros ordenados alfabéticamente por nombre
server.get("/books/1-3/abc", (req, res) => {
  const query = db.prepare("SELECT * FROM books ORDER BY title LIMIT 3");
  const booksList = query.all();
  res.json(booksList);
});

//Un array con los 3 siguientes libros ordenados alfabéticamente por nombre
server.get("/books/4-5/abc", (req, res) => {
  const query = db.prepare(
    "SELECT * FROM books ORDER BY title LIMIT 2 OFFSET 3"
  );
  const booksList = query.all();
  res.json(booksList);
});
