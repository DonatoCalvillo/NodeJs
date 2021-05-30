const axios = require('axios')

class Busquedas{
    historial = [];

    constructor(){
        //To do: Leer db si existe
    }

    get paramsMapbox(){
        return {
            'access_token' : process.env.MAPBOX_KEY,
            'limit': 5,
            'language':'es'
        };
    }

    async ciudad(lugar){
        try{
            //Realizar peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            console.log(resp.data);
            return [];
        }catch(error){
            return []; //Retorna los lugares que coincidan con 'lugares'
        }
        
    }
}

module.exports = Busquedas;