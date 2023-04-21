import express from "express";
// Importa las rutas de carrito.routes.js
import proyectsRoutes from "./routes/carrito.routes.js";


const app = express();

// Middlewares
app.use(express.json) //cada vez que el cliente envíe un dato en formato Json, el servidor podrá interpretarlo.
                        // y lo lo guardará en un "req.body"



// se indica a app que utilice proyectsRoutes
app.use(proyectsRoutes);

// Agregados después
// const bodyParser = require("body-parser");
import bodyParser from "body-parser";
// const cors = require("cors");
import cors from "cors";



app.use(bodyParser.json())
app.use(cors());
//Fin agregados

export default app;
