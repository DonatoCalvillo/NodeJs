//Importaciones de paquetes 
require('colors');

//Nuestras importaciones
const { inquireMenu, 
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    listadoSeleccionarTareas
} = require('./libs/inquirer');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./libs/guardarArchivo');

console.clear();

const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        //Cargar tareas
        tareas.cargarTareas(tareasDB);
    }

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
                tareas.listaCompleta();    
                break;
            case '3':
                tareas.listaCompletadas(true);    
                break;
            case '4':
                tareas.listaCompletadas(false);    
                break;
            case '5':
                await listadoSeleccionarTareas(tareas.listadoTareas);    
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoTareas);  
                const ok = await confirmar('¿Estas seguro de que desea borrarlo?');
                if(ok !== '0'){
                    if(ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada adecuandamente.');
                    }
                }
                break;
            default:
                break;
        }
        guardarDB(tareas._listado);
        await pausa();
    } while (opt !== '0');
}

main();