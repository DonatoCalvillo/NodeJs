//Importaciones de paquetes 
require('colors');

//Nuestras importaciones
const { inquireMenu, pausa } = require('./libs/inquirer');

console.clear();

const main = async () => {
    let opt = '';
    do {
        //Await le dice esperate hasta que tengamos una 
        //respuesta de la funcion porque retorna una promesa
        opt = await inquireMenu();
        console.log({opt});
        await pausa();
    } while (opt !== '0');
}

main();