require('dotenv').config()

const { leerInput, pausa, inquireMenu, listarLugares } = require("./libs/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    let opt;
    const busquedas = new Busquedas();

    do {
        opt = await inquireMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termBusqueda = await leerInput('Ciudad: ');
                //Buscar los lugares
                const lugares = await busquedas.ciudad(termBusqueda);
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                if ( id === '0' ) continue;
                const lugarSelec = lugares.find( l => l.id === id);
                //Clima
                
                //Mostrar resultados
                console.clear();
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad'.bold, lugarSelec.nombre);
                console.log('Lat'.bold, lugarSelec.lat);
                console.log('Lng'.bold, lugarSelec.lng);
                console.log('Temperatura'.bold,);
                console.log('Minima'.bold,);
                console.log('Maxima'.bold,);
                break;
        
            default:
                break;
        }

        
        if(opt !== 0) await pausa(); 
    } while (opt !== 0);
}

main();