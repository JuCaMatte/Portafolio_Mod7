// Importar desde app.js
import app from "./app.js"

// Importar el objeto "sequelize" desde el archivo database.js
// que está en la carpeta database
import {sequelize} from "./database/database.js";

// si se importan los archivos de model, se crean las tablas
import "./models/carrito.models.js"
import "./models/categoria.models.js"
import "./models/descuento.models.js"
import "./models/detalle_carrito.models.js"
import "./models/producto.models.js"
import "./models/usuario.models.js"

import "./models/relaciones.js"

const PORT = process.env.PORT || 3000;

// Escuchando dese el puert0 3000
/* app.listen(3000)
console.log("Servidor ejecutándose en el puerto",3000) */

// Lo anterior se colocará dentro de una función asíncrona
async function main(){
    try {
        // Verifica conexión await sequelize.authenticate();
        
        // Sincronización con la base de datos, creando tablas
        // o eliminándolas y volviendo a crearlas, cada vez que se hace SAVE
        // await sequelize.sync();

        // Para que no ocurra lo anterior, se pone "force: false"
        await sequelize.sync({force: false});

        console.log("Conexión establecida exitosamente.");
/* 
        app.listen(3000);
        console.log("Servidor escuchando en el puerto",3000); */

        app.listen(PORT, () => {
            console.log (`Servidor escuchando en el puerto ${PORT}`);
        });

    } catch (error){
        console.error("Problema de conexión a la base de datos:", error);
    }
}

main();

