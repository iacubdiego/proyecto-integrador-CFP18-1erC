const express = require('express')
const productsRoutes = express.Router()
// var methodOverride = require('method-override')
// const multer = require('multer')

//MIDDLEWARES
const upload = require('../middlewares/multer/multer');
const createProductsValidations = require("../middlewares/validationsForms/createProdsValidations");

const productsController = require('../controllers/productsController')

// RUTAS
// muestra todos los productos
productsRoutes.get('/', productsController.mostrarProductos)
// muestra un pruducto segun el id
productsRoutes.get('/detail/:id', productsController.detailById);
// crea un producto y lo guarda mediante el metodos POST
productsRoutes.get('/create',productsController.createProduct)
productsRoutes.post('/', upload.single('image'),
createProductsValidations, productsController.storeProduct)

// Edita un producto segun el Id pasado y lo regraba mediante el metodo PUT
productsRoutes.get('/edit/:id',productsController.editProduct)
productsRoutes.post('/:id',productsController.updateProduct)
// borra un producto
productsRoutes.post('/delete/:id',productsController.deleteProduct)

module.exports = productsRoutes

// productsRoutes.post('/', uploadFile.single("imagen"), productsController.storeProduct)

// const storage = multer.diskStorage({
//     destination: function (req, file, cb){
//         cb(null, "../public/image/autos")
//     },
//     filename: function(req, file, cb){
//         cb(null, "${Date.now()}_img_${path.extname(file.originalname)}")        
//     }
// })
// const uploadFile = multer({ storage})