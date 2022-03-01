//importar dependencias
const express = require("express");
const cors = require("cors");

//crear el servidor
const server = express();

//configurar el servidor
//le estoy diciendo que va a usar cors y a trabajar con datos json
server.use(cors());
server.use(express.json());

//iniciar el servidor
const serverPort = 3001;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

//API
//GET: obtener/devolver datos de la aplicación (pedir datos al servidor)
//POST: enviar datos al servidor
//PUT: actualizar datos ya existentes en el servidor
//DELETE: eliminar datos del servidor

server.get("/", (req, res) => {
  console.log("Petición a la ruta GET /");
  //al final de la petición siempre hay que enviar una respuesta
  res.send("<html><body><h1>Hola</h1></body></html>");
});

server.get("/users", (req, res) => {
  console.log("Petición a la ruta GET /users");
  console.log(req.query);
  const response = {
    users: [
      {
        name: "Isa",
      },
      { name: "Norma" },
    ],
  };
  const filteredData = response.users.filter(
    (user) => user.name === req.query.name
  );
  res.json(filteredData);
});
