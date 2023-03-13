module.exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    <input type="text" name="sla">
    <button>Enviar</button>
    </form>
    `);
}