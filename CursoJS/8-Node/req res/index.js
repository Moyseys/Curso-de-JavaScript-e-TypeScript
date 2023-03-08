const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    <input type="text" name="sla">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/',(req,res) => {
    res.send(`Form enviado`);
});

app.listen(3000,() => {
    console.log('Server is runing: http://localhost:3000');
})