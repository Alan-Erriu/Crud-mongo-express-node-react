const { check } = require("express-validator");






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
];

module.exports ={validacion}
