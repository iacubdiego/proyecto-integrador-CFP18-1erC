const express = require('express')

const productsRoutes = express.Router()

const productsController = require('../controllers/productsController')
// muestra todos los productos
productsRoutes.get('/', productsController.mostrarProductos)
// muestra un pruducto segun el id
// productsRoutes.get('/detalleProduct/:id', productsController.detalleById);
productsRoutes.get('/detalleProducto/:id', productsController.detalleById);

// crea un producto y lo guarda mediante el metodos POST
productsRoutes.get('/create',productsController.createProduct)
productsRoutes.post('/',productsController.storeProduct)
// Edita un producto segun el Id pasado y lo regraba mediante el metodo PUT
productsRoutes.get('/edit/:id',productsController.editProduct)
productsRoutes.put('/:id',productsController.updateProduct)
// borra un producto
productsRoutes.get('/delete/:id',productsController.deleteProduct)

// productsRoutes.delete('/',productsController.storeProduct)

module.exports = productsRoutes