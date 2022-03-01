//importar dependencias
const express = require("express");
const cors = require("cors");
const fs = require("fs"); //importamos para poder crear fichero de listado de usuarios

//crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//iniciar el servidor
const serverPort = 3001;
server.listen(serverPort, () =>
  console.log(`Server listening ah http://localhost:${serverPort}`)
);

//API
//GET: obtener/devolver datos de la aplicación
//POST: enviar datos
//PUT: actualizar datos
//DELETE: eliminar datos

server.get("/", (req, res) => {
  console.log("Petición a la ruta GET /");
  res.send("<html><body><h1>Hola</h1></body></html>");
});

server.get("/users", (req, res) => {
  console.log("Petición a la ruta GET /users");
  console.log(req.query);
  const response = {
    users: [{ name: "Isa" }, { name: "Norma" }],
  };
  const filteredData = response.users.filter(
    (user) => user.name === req.query.name
  );

  res.json(users);
});

//añadir un nuevo usuario
//creo listado de usuarios
const users = [{ name: "Isa" }, { name: "Norma" }];

server.post("/user/add", (req, res) => {
  console.log("Petición a la ruta POST /user/add");
  console.log(req.body);
  const nameUser = req.body.name;
  users.push({ name: nameUser });
  res.json({
    success: true,
    result: "user created",
  });
});

//descargar listado de usuarios
const handleWrite = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created");
  }
};

server.get("/users/export", (req, res) => {
  console.log("Petición a la ruta GET /users/export");
  //primero tenemos que crear un fichero con el listado de usuarios
  fs.writeFile("./src/users.json", JSON.stringify(users), handleWrite);

  //enviamos el fichero
  res.download(__dirname + "/users.json", "listado.json");
});
