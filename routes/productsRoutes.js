const express = require('express')
const productsRoutes = express.Router()

const productsController = require('../controllers/productsController')

// RUTAS
// muestra todos los productos
productsRoutes.get('/', productsController.mostrarProductos)
// muestra un pruducto segun el id
productsRoutes.get('/detail/:id', productsController.detailById);
// crea un producto y lo guarda mediante el metodos POST
productsRoutes.get('/create',productsController.createProduct)
productsRoutes.post('/',productsController.storeProduct)
// Edita un producto segun el Id pasado y lo regraba mediante el metodo PUT
productsRoutes.get('/edit/:id',productsController.editProduct)
productsRoutes.put('/edit/:id',productsController.updateProduct)
// borra un producto
productsRoutes.delete('/delete/:id',productsController.deleteProduct)

module.exports = productsRoutes