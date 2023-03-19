const express = require('express')
const route = express.Router()

const loginController = require('./src/controllers/loginController')//
const homeController = require('./src/controllers/homeController')//

//rotas da home
route.get('/',homeController.index);

//rotas de login/cadastro
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)
route.post('/login/logout', loginController.logout)//fazer o controller logout

module.exports = route