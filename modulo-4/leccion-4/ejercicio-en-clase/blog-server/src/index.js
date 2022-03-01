const express = require('express');
const cors = require('cors');
const server = express();
const posts = require("./data/posts.json")

server.use(cors());
server.use(express.json());

// static server

server.use(express.static('./static'));

const serverPort = 4000;
server.listen(serverPort, () => { console.log(`Server listening at http://localhost:${serverPort}`); });


