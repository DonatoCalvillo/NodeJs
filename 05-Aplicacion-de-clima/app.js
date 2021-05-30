const { leerInput, pausa, inquireMenu } = require("./libs/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    let opt;
    const busquedas = new Busquedas();

    do {
        opt = await inquireMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                console.log(lugar);
                //Buscar los lugares
                await busquedas.ciudad(lugar);
                //Seleccionar el lugar

                //Clima

                //Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad'.bold,);
                console.log('Lat'.bold,);
                console.log('Lng'.bold,);
                console.log('Temperatura'.bold,);
                console.log('Minima'.bold,);
                console.log('Maxima'.bold,);
                break;
        
            default:
                break;
        }

        console.clear();
        
        if(opt !== 0) await pausa(); 
    } while (opt !== 0);
}

main();