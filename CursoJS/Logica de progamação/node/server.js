const express = require("express")

const app = express()
const port = 3000

app.get("/",(req, res) => {
    res.status(200).send(
        ` <form method="post">
        <input type="text" name="name">
        <button>ENVIAR</button>
        </form>`
    )
})

app.post("/",(req, res) => {
    res.send(`Eviado`)
})

app.listen(port,console.log(`Servidor rodando na porta ${port}`))