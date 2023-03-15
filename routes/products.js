const express = require('express');
const {validacion}= require("../middleware/check")
const router = express.Router();
const productsController = require("../controllers/productsController")
const Producto = require("../models/products")



//----------------ver todos los producto existentes en la base de datos---------------
router.get("/verproductos",productsController.obtenerProductos)


//----------------busca un producto usando el id como parametro de busqueda-------------
router.get("/verproducto/:id",productsController.obtenerProductoxid)

//----------------busca un producto usando el id del body como parametro de busqueda-------------
router.post("/obtenerproducto/",productsController.obtenerProducto)


//----------------Edita un producto existente, usa id como parametro de busqueda------------
router.put("/editarproducto/:id",productsController.editarProducto)
//------------------- crea un nuevo producto---------------------------------------

router.post("/agregarproductos",(req,res)=>{
    const producto = new Producto ({
        nombreProducto: req.body.nombreProducto,
        categoria:req.body.categoria,
        precio:req.body.precio,
        stock:req.body.stock
    })
    producto.save(function(err){
        if (!err){
            res.send("producto agregado correctamente")
        }else{
            res.send(err)
        }
    })
})


//----------------borra un producto de la base de datos, usa id como parametro de busqueda----
router.delete("/borrar/:id",productsController.eliminarProductoxid)

//----------------borra un producto de la base de datos, usa id como parametro de busqueda----
router.delete("/borrar/",productsController.eliminarProductoxBodyid)


module.exports = router;