# Preparar aplicacion para subirse a un hosting

## Preparar una variable de entorno para el puerto

### Instalar dotenv para hacer variables de entorno
Instalar paquete
````
npm i dotenv
````
Crear archivo .env y hacer variable
````
PORT=8080
````
Cargar variables de entorno en app.js
````
require('dotenv').config()

const port = process.env.PORT
````

## Especificar en el package.json un comando 
Dentro de "scripts":
````
"start" : "node app.js"
````