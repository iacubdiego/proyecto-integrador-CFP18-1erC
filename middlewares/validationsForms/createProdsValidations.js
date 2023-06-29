const { body } = require("express-validator");

const productsValidations = [
  body("title")
    .notEmpty()
    .withMessage("el campo titulo esta vacío")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El titulo es muy corto")
    .bail(),

  body("price").notEmpty().withMessage("el campo precio esta vacío").bail(),

//   body("currency")
//     .notEmpty()
//     .withMessage("debe eliegir un tipo de moneda")
//     .bail(),

//   body("category").notEmpty().withMessage("debe elegir una categoria").bail(),

  body("description")
    .notEmpty()
    .withMessage("debe ingresar una descripcion")
    .bail(),

];
//   // validacion de imagenes!
//   body("images")
//     .custom((value, { req }) => {
//       if (req.files.length === 0) {
//         return false;
//       } else {
//         return true;
//       }
//     })
//     .withMessage("Debe ingresar al menos una imagen"),

module.exports = productsValidations;
