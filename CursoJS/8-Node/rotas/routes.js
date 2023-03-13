const express = require('express')
const route = express.Router()

const homeController = require('./controllers/homeController')
const tratapostController = require('./controllers/tratapostController')

route.get('/', homeController.paginaInicial);
route.post('/', tratapostController.trataPost)


module.exports = route