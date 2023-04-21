/* import {producto} from '../models/producto.models.js'
import {categoria} from '../models/categoria.models.js'
import {usuario} from '../models/usuario.models.js'
import {detalle_carrito} from '../models/detalle_carrito.models.js' */
import {carrito} from '../models/carrito.models.js'
/* import {sequelize} from '../database/database.js'
import {Op} from 'sequelize'; */

/* export const probando = (req, res) => {
    res.send("Mirando")
} */

export const getCarritos = (req, res) => {
    // console.log(req.body)
    res.send("Obteniendo Carrito")
}

export const createCarrito = (req, res) => {
    // Extrae datos de la consulta del usuario, desde req.body
//    const {fecha, id_usuario} = req.body

    //Creación de un nuevo carrito
    //Objeto que representa la fila que se ha
    //guadado en la tabla
    // try {
//    const newCarrito = await carrito.models.create({
/*         fecha: fecha,
        id_usuario: id_usuario */
        // Se podría resumir poniendo sólo fecha y id_usuario
//        fecha,
//        id_usuario

  //  })

    //Para ver el nuevo carrito por consola:
  //  console.log(newCarrito)


    // console.log(req.body)
    res.send("Creando carrito")
}

//export const 
