const express = require('express');

const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    <input type="text" name="sla">
    <button>Enviar</button>
    </form>
    `);
});


app.get('/teste/:sla?/:outroparams?', (req, res) => {
    console.log(req.query)
    console.log(req.params)
    //http://localhost:3000/teste/?nome=Ronaldo&sobrenome=Fenomeno
    res.send(req.query)
    //http://localhost:3000/teste/oi
    res.send(req.params)
})

app.post('/',(req,res) => {
    res.send(`nome ${req.body.sla}`);
    console.log(req.body);
});

app.listen(3000,() => {
    console.log('Server is runing: http://localhost:3000');
})