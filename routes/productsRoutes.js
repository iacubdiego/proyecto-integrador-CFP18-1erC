const express = require('express')

const productsRoutes = express.Router()

const productsController = require('../controllers/productsController')

productsRoutes.get('/', productsController.mostrarProductos)

module.exports = productsRoutes