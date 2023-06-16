const express = require('express')

const productsRoutes = express.Router()

const productsController = require('../controllers/productsController')

productsRoutes.get('/', productsController.mostrarProductos)
productsRoutes.get('/detalle/:id', productsController.detalleById);
productsRoutes.get('/create',productsController.createProduct)
productsRoutes.post('/',productsController.storeProduct)
productsRoutes.get('/edit/:id',productsController.editProduct)
productsRoutes.put('/:id',productsController.updateProduct)
productsRoutes.delete('/:id',productsController.deleteProduct)

module.exports = productsRoutes