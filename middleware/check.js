const { check } = require("express-validator");
const {validationResult}=require("express-validator")

const validateResult=(req,res,next)=>{
    try{
        validationResult(req).throw()
        return next()
    }catch{(error)
    res.status(403)
    res.send({errors:error.array()})
    }

}

const validacion = [
  check("nombreProducto")
    .exists()
    .not()
    .isEmpty()
    .withMessage("El campo nombre es obligatorio"),
    // ----
  check("categoria")
  .exists()
    .not()
    .isEmpty()
    .withMessage("El campo categoria es obligatorio"),
    // -------
  check("precio")
  .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage("El campo precio es obligatorio"),
    // ---
  check("stock")
  .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage("El campo stock es obligatorio"),
   (req,res,next)=>{
    validateResult(req,res,next)
   }
];

module.exports ={validacion}
