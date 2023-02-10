const Products =require("../models/products")

const crearProducto = async (req, res) => {
    try {
      const producto = new Products(req.body);
      await producto.save();
      res.status(201).json({
        msg: "producto agregado",
        nombreProducto: producto.nombreProducto,
        error: null,
      });
    } catch (error) {
      res.status(500).json({
        msg: "error al agregar producto" + error.message,
        nombreProducto: null,
        error: error,
      });
    }
  };


  const obtenerProductoxid = async (req, res) => {
    try {
      const productos = await Products.findById(req.params.id);
      res.status(200).json({
        productos: productos,
        error: null,
      });
    } catch (error) {
      res.status(500).json({
        productos: null,
        msg: "no se encontro el producto: " + error.message,
      });
    }
  };


  const obtenerProductos = async (req, res) => {
    try {
      const productos = await Products.find();
      res.status(200).json({
        productos: productos,
        error: null,
      });
    } catch (error) {
      res.status(500).json({
        productos: null,
        msg: "no se encontraron productos: " + error.message,
      });
    }
  };

  const editarProducto = async (req, res) => {
    try {
     const producto= await Products.findByIdAndUpdate(req.params.id, req.body)
      res.status(201).json({
        msg: "el usario se actualizo exitosamente",
        nombreProducto: producto.nombreProducto,
        error: null,
      });
    } catch (error) {
      res.status(500).json({
        msg: "error al registar el usuario " + error.message,
        nombreProducto: null,
        error: error,
      });
    }
  };

  const eliminarProductoxid = async (req, res) => {
    try {
      const producto = await Products.findByIdAndDelete(req.params.id);
      res.status(201).json({
        msg: "el producto se elimino exitosamente",
        nombreProducto: producto.nombreProducto,
        error: null,
      });
    } catch (error) {
      res.status(500).json({
        producto: null,
        msg: "no se pudo eliminar el  producto: " + error.message,
      });
    }
  };
  



module.exports = { crearProducto, obtenerProductos,editarProducto,eliminarProductoxid,obtenerProductoxid };