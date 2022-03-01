const express = require("express");
const cors = require("cors");

//Crear el servidor
const server = express();

//Configurar el servidor
server.use(cors());
server.use(express.json());

//Iniciar el servidor
const serverPort = 3000;
server.listen(serverPort, () =>
  console.log(`Server listening at http://localhost:${serverPort}`)
);

//API
server.post("/login", (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  if (!email || !pass) {
    res.status(404);
    res.json({ success: false, error: "Faltan datos" });
  } else {
    if (email === "ivan@adalab.es" && pass === "12345") {
      res.json({ success: true, userId: "12345678" });
    } else {
      res.json({ success: false, error: "Error en el login" });
    }
  }
});
