require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')

//conexão mongo
const connectString = process.env.connectString;
mongoose.connect(connectString)// {userNewUrlParser: true, useUnifiedTopology:true}
    .then((msg) => {
        console.log('conectado')
        app.emit('pronto')
    })
    .catch(e => console.log(e))
const path = require('path') 
const routes = require("./routes")

const {middlewareGlobal} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(middlewareGlobal)
app.use(routes)

app.on('pronto', () => {
    app.listen(3000,() => {
    console.log('Server is runing: http://localhost:3000');
    })
})
