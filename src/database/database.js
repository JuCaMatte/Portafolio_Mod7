// Importo la biblioteca Sequelize
import {Sequelize} from 'sequelize'
// La instancia de Sequelize es en minúscula
// Se exportará el objeto porque no se usará acá
// Se usará desde el archivo principal index.js
export const sequelize = new Sequelize(
    'almacendb', 
    'postgres', 
    '190072023',
    {
    // Indicación de dónde estará la base de datos    
    host: 'localhost',
    dialect: 'postgres'
})
