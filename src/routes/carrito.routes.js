//Importación de la función Router
//import { Router } from "express";
//Se instancia la función Router
//const router = Router();
//const express = require('express')
import express from "express";
const router = express.Router()


//Se importa el archivo carrito.controllers.js
//Se puso en plural "getCarritos" , porque se obtendrá una lista de carritos
import {
    createCarrito, 
    getCarritos,
} from "../controllers/carrito.controller.js";





//Cuando se detecte una ruta se ejecutará algo
//Lo que se ejecutará se especifica en la carpeta "controllers"
// obtener carrito.
// Al hacer la petición de carritos, se obtendrá una lista de carritos, llamando a la función "getCarritos"

// router.get("/prueba",probando)
//Pruebas
//router.use((req, res))


// Fin pruebas

router.get("/carrito", getCarritos);
//router.get("/carrito", (req,res));
// crear carrito, llamará a la función "createCarrito"
    // res.send("Probando get")
    console.log("Probando get")

router.post("/carrito", createCarrito);
//router.post("/carrito", (req,res));
// actualizar una carrito
    // res.send("Probando post")
    console.log("Probando post")


router.put("/carrito/:id");
/* borrar carrito 
proceso de compra */
router.delete("/carrito/:id");
// obtener una carrito específica
router.get("/carrito/:id");

export default router;