const fs = require('fs');
const color = require('colors')

/* const crearArchivoTabla = (base = 1) =>{

    return new Promise((resolve, rejects) =>{
        try {
            let salida = '';
            for (let index = 1; index <= 10 ;index++) {
                salida += `${base} * ${index} = ${base * index}\n`;
            }
            fs.writeFileSync(`tabla-${base}`, salida);
            resolve(`tabla-${base}`)
        } catch (error) {
            rejects(error)
        } 
    })
    
} */

const crearArchivoTabla = async (base, listado, hasta) =>{

    try {
        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta ;index++) {
            salida += `${base}`.italic.magenta + ` * `.red + `${index}`.italic.grey+ ` = `.green+ `${base * index}\n`.red.bold;
            consola += `${base} * ${index} = ${base * index}\n`;
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
        if(listado){
            console.log('=============='.italic.blue);
            console.log(` Tabla del ${base}`.cyan);
            console.log('=============='.italic.blue);
            console.log(salida);
        }
        return `tabla-${base}`.bold;
    } catch (error) {
        throw error;
    } 
    
    
}

module.exports = {
    crearArchivoTabla
}