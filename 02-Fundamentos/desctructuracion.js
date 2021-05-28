//Destructuracion
const deadpool = {
    nombre: 'Wade Wilson',
    poder : 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.poder}`
    }
}

//Desestructurar con objetos
//const nombreD = deadpool.nombre
//const poderD = deadpool.poder

const {nombreD, poderD} = deadpool

const heroes = ['batman', 'superman', 'flash']

const h1 = heroes[0]
const h2 = heroes[1]
const h3 = heroes[2]

const [, , favorito] = heroes