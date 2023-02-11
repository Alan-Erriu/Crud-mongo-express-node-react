const express = require('express');
const {validacion}= require("../middleware/check")
const router = express.Router();
const productsController = require("../controllers/productsController")





//----------------crear un nuevo producto-------------------------------------------
router.post("/agregarProducto",validacion,productsController.crearProducto)


//----------------ver todos los producto existentes en la base de datos---------------
router.get("/verproductos",productsController.obtenerProductos)


//----------------busca un producto usando el id como parametro de busqueda-------------
router.get("/verproducto/:id",productsController.obtenerProductoxid)


//----------------Edita un producto existente, usa id como parametro de busqueda------------
router.put("/editarproducto/:id",productsController.editarProducto)


//----------------borra un producto de la base de datos, usa id como parametro de busqueda----
router.delete("/borrar/:id",productsController.eliminarProductoxid)

module.exports = router;