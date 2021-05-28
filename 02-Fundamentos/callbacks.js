//Callbacks
const getUserByID = ( id , callback) =>{
    const user = {
        id,
        nombre: 'Edgar'
    }

    setTimeout(() =>{
        callback(user)
    }, 1500)
}

//getUserByID(10, user => {
   // console.log(user.id)
    //console.log(user.nombre)
//})

//callback hell
const empleados = [
    {
        id : 1,
        nombre : 'Donato'
    },
    {
        id : 2,
        nombre : 'Dani'
    },
    {
        id : 3,
        nombre : 'Becerra'
    }
]

const salarios = [
    {
        id : 1,
        salario : 1000
    },
    {
        id : 2,
        salario : 1500
    }
]

const id = 3

const getEmpleado = (id, callback) =>{
    const empleado = empleados.find( e => e.id === id)?.nombre
    if(empleado)
        callback(null, empleado) 
    else
        callback(`ERROR: No existe el empleado con id ${id}`)
}

const getSalario = (id, callback) => {
    const salario = salarios.find(salario => salario.id === id )?.salario
    if(salario)
        callback(null,salario)
    else   
        callback(`ERROR: No existe un salario para el empleado con id ${id}`)
}

getEmpleado(id, (err, empleado) => {
    if(err)
        return console.log(err)
    
    //console.log(empleado)

    getSalario(id, (err, salario) => {
        if(err)
            console.log(err);
        else
            console.log(`El empleado ${empleado} gana ${salario}`);
    })
})