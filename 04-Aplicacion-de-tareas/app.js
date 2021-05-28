//Importaciones de paquetes 
require('colors');

//Nuestras importaciones
const { inquireMenu, 
        pausa,
        leerInput
} = require('./libs/inquirer');
const Tareas = require('./models/tareas');

console.clear();

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    do {
        //Await le dice esperate hasta que tengamos una 
        //respuesta de la funcion porque retorna una promesa
        //en este caso la respuesta es la impresion del menu
        opt = await inquireMenu();
        switch (opt) {
            case '1':
                //Crear opcion
                //Desc tiene el valor del input (la descripcion)
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                console.log(desc)
                break;
            case '2':
                console.log(tareas._listado);
                break;
            default:
                break;
        }
        await pausa();
    } while (opt !== '0');
}

main();