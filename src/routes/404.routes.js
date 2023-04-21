//Importación de la función Router
import { Router } from 'express';
const router = Router();

//Cualquier ruta solicitada que no esté dentro de las rutas definidas
//arrojará un error 404
router.get('*', (req, res) => {
  res.render('404')
})

export default router;