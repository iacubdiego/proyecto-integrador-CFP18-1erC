const express = require('express')

const productsRoutes = express.Router()

const productsController = require('../controllers/productsControlers')

productsRoutes.get('/',productsController.mostrarProductos)

module.exports = productsRoutes