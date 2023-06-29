const express = require('express')
const usersRoutes = express.Router()
var methodOverride = require('method-override')
const multer = require('multer')

const usersController = require('../controllers/usersController')
// RUTAS
// muestra todos los productos
usersRoutes.get('/login', usersController.allUsers)
// muestra un pruducto segun el id
usersRoutes.get('/profile/:id', usersController.profile);
// crea un producto y lo guarda mediante el metodos POST
usersRoutes.get('/register',usersController.createUser)
usersRoutes.post('/', usersController.storeUser)

// usersRoutes.post('/', uploadFile.single("imagen"), usersController.storeProduct)

// Edita un producto segun el Id pasado y lo regraba mediante el metodo PUT
// usersRoutes.get('/edit/:id',usersController.editUser)
usersRoutes.post('/:id',usersController.updateUser)
// borra un Usero
usersRoutes.post('/delete/:id',usersController.deleteUser)

module.exports = usersRoutes