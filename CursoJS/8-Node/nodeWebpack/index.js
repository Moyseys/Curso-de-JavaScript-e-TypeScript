const express = require('express');
const path = require('path') 

const app = express();
const routes = require("./routes")

const {middlewareGlobal} = require('./src/middlewares/middleware')

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use(middlewareGlobal)
app.use(routes)


app.listen(3000,() => {
    console.log('Server is runing: http://localhost:3000');
})