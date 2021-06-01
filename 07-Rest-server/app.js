//Importaciones de terceros
require('dotenv').config()

//Mis importaciones
const Server = require('./models/server')

const server = new Server()
 
server.listen()