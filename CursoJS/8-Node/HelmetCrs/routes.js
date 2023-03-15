const express = require('express')
const route = express.Router()

const homeController = require('./src/controllers/homeController')
const tratapostController = require('./src/controllers/tratapostController')

route.get('/',homeController.paginaInicial);
route.post('/', tratapostController.trataPost)


module.exports = route