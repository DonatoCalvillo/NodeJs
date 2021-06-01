const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
    const  {nombre = 'No name', edad = 'No age'} = req.query

    res.json({
        msg: 'get API - controlador',
        nombre,
        edad
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })

}

const usuariosPut = (req = request, res = response) => {

    const id = req.params.id
    res.json({
        msg: 'put API - controlador',
        id
    })
}


const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}