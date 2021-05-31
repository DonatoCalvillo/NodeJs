require('dotenv').config()

const express = require('express')
const hbs = require('hbs')

const app = express()

//Handlebars
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
 
//Midleware (Servir contenido estatico)
app.use(express.static('public'))

//se puede utilizar para elementos estaticos
// app.get('/',  (req, res) => {
//     res.send('Hello World')
// })

// app.get('/generic',  (req, res) => {
//     res.sendFile(__dirname+'/public/generic.html')
// })

// app.get('/elements',  (req, res) => {
//     res.sendFile(__dirname+'/public/elements.html')
// })

// app.get('*',  (req, res) => {
//     res.sendFile(__dirname+'/public/404.html')
// })

//Utilizamos hbs para renderizar lo que se encuentra en nuestra carpeta VIEWS
//Este es el controlador
app.get('/',  (req, res) => {
    res.render('home', {
        nombre: 'Edgar Donato',
        titulo: 'Ejemplo aplicacion web'
    })
})

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'Edgar Donato',
        titulo: 'Ejemplo aplicacion web'
    })
})

app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'Edgar Donato',
        titulo: 'Ejemplo aplicacion web'
    })
})

 
app.listen(env.process.PORT)