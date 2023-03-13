const express = require('express');
const path = require('path') 

const app = express();
const routes = require("./routes")

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'src', 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)


app.listen(3000,() => {
    console.log('Server is runing: http://localhost:3000');
})