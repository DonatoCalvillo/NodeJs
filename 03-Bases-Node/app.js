//tabla del 5
//guardar archivos txt
const { crearArchivoTabla } =require('./helpers/multiplicar')
const argv = require('./config/yargs')

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
    .catch(err => console.log(err));

