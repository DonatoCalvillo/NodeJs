const Tarea = require("./tarea");
require('colors');

class Tareas {
    //Atributos
    _listado = {};
    
    constructor(){
        this._listado = {};
    }
    
    get listadoTareas(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    borrarTarea(id = ''){
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    cargarTareas(tareas = {}){
        this._listado = tareas;
    }

    listaCompleta(){
        console.log();
        this.listadoTareas.forEach( (tarea, indice) => {
            let index = `${indice + 1}`.green;
            let {descripcion,completadoEn} = tarea;
            completadoEn = (completadoEn) ? `Completado`.green : `Pendiente`.red;
            console.log(`${index} ${descripcion} :: ${completadoEn}`) ;
        })
    }

    listaCompletadas(completadas = true){
        console.log();
        let contador = 1;
        this.listadoTareas.forEach( (tarea) => {
            let index = `${contador}`.green;
            let {descripcion,completadoEn} = tarea;
            let completadoString = (completadoEn) ? `Completado`.green : `Pendiente`.red;
            if(completadas){
                if(completadoEn){
                    console.log(`${index} ${descripcion} :: ${completadoString}`) ;
                    contador++;
                }
            }else{
                if(!completadoEn){
                    console.log(`${index} ${descripcion} :: ${completadoString}`) ;
                    contador++;
                }
            }
        })
    }

}

module.exports = Tareas;