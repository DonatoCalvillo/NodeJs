const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        //Rutas
        this.usuariosPath = '/api/usuarios'

        //Moddlewares
        this.middlewares()

        //Rutas de mi app


        this.routes()
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('servidor corriendo en el puerto ', this.port);
        })
    }

    middlewares(){
        //CORSE sirve para que solo se puedam hacer peticiones
        //desde ciertas paginas web
        this.app.use(cors())

        //Parseo y lectura de body
        this.app.use(express.json())
        
        //Directorio publico
        this.app.use(express.static('public'))
    }
}

module.exports = Server