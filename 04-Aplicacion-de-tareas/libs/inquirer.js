const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message : '¿Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir\n`
            }
        ]
    }
]

const inquireMenu = async() =>{
    console.clear();
    console.log('==========================='.green);
    console.log('  Selecciones una opcion'.white);
    console.log('===========================\n'.green);

    /*Para la libreria inquirer se requiere de un tipo de fragmento
    con el que el usuario va a interactuar, en este caso la lista,
    pero puede ser un input, checkbox, etc en donde le tendremos que mandar
    la 'pregunta' de forma await para esperar la respuesta y desestructurarla
    por su nombre en este caso 'ocpion'*/
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () =>{
    /*Aqui hacemos lo mismo como es una funcion async nos quedamos dentro esperando una
    respuesta de la funcion, generamos nuestra 'pregunta' que en este caso es un input
    y retornamos el input para continuar */
    const question = [
        {
            type: 'input',
            name: 'pausa',
            message: `\nPresione ${'ENTER'.green} para continuar\n`
        }
    ]
    console.log('\n');
    return await inquirer.prompt(question);
}

const leerInput = async (message) => {
    /*Como se va a reciclar mucho esta funcion recibimos de parametro
    el mensaje que se va a imprimir en consola para que detecte el input
    como 'Ingrese la tarea: ' o 'Escriba el id de la tarea a borrar' son 
    los textos que valdria message, y como message : message es redundante
    y solo se pone message*/
    const question = [
        {
            type: 'inout',
            name: 'descripcion',
            message,
            validate(value){
                if(value.lenght === 0){
                    return 'Porfavor ingrese un valor';
                }
                return true;
            }
        }
    ];
    //Retornamos lo que el usuario escribio
    const {descripcion} = await inquirer.prompt(question); 
    return descripcion;
}

const listadoTareasBorrar = async(tareas = []) =>{
    
    const choices = tareas.map((tarea,i) =>{
        const indice = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${indice} ${tarea.descripcion}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar\n'
    })

    const question = [
        {
            type: 'list',
            name: 'id',
            message : 'Borrar',
            choices
        }
    ]

    const {id} = await inquirer.prompt(question); 
    return id;
}

const confirmar = async (message) =>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const {ok} = await inquirer.prompt(question); 
    return ok;
}


module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
}
