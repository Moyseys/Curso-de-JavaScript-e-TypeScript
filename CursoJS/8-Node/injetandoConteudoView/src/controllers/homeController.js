module.exports.paginaInicial = (req, res) => {
    console.log(req.flash('erro'))
    res.render('index',{titulo:'titulo', descricao:'descricao'})
}






//const HomeModel = require("../models/HomeModel")
// HomeModel.create({
//     titulo: 'Teste2',
//     descricao:'Teste descricao2'
// })

// HomeModel.find()
// .then( dados => console.log(dados))
// .catch( e => console.log(e))
