

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
const getEmpleado = (id) =>{
    return new Promise((resolve, reject)=>{
        const empleado = empleados.find( e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(salario => salario.id === id )?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No existe salario para el empleado con id ${id}`);
    });
}


//Async convierte la funcion para que retorne una promesa
const id=2;

const getInfoUsuario = async (id) =>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado ${empleado} gana ${salario}`;
    } catch (error) {
        throw error;
    }
}

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
