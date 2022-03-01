// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const path = require("path");
const data = require("./data/rick-and-morty.json");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
//OJO con la ruta
server.get("/characters/:characterId", (req, res) => {
  const character = data.results.find(
    (character) => character.id === parseInt(req.params.characterId)
  );
  if (character === undefined) {
    res.json({ error: "character not found" });
  } else {
    res.json(character);
  }
});

server.get("/characters/:characterId/episodes", (req, res) => {
  const character = data.results.find(
    (character) => character.id === parseInt(req.params.characterId)
  );
  const episodes = character.episode;
  res.json(episodes);
});
