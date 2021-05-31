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

                //Agregamos al historial
                busquedas.agregarHistorial( lugarSelec.nombre);

                //Clima
                const clima = await busquedas.climaLugar(lugarSelec.lat,lugarSelec.lng);
                //Mostrar resultados
                console.clear();
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad'.bold, lugarSelec.nombre);
                console.log('Lat'.bold, lugarSelec.lat);
                console.log('Lng'.bold, lugarSelec.lng);
                console.log('Temperatura'.bold,clima.temp);
                console.log('Minima'.bold,clima.min);
                console.log('Maxima'.bold,clima.max);
                console.log('Como esta el clima: '.bold,`${clima.desc}`.green);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`)
                })
                break;
            default:
                break;
        }

        
        if(opt !== 0) await pausa(); 
    } while (opt !== 0);
}

main();