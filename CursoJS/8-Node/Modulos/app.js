const {nome, sobrenome, falaNome} = require('./mod')
//const nome2 = require('./mod').nome


console.log(nome);

const path = require('path');
const olamundo = path.resolve(__dirname,'.','A','B','C','mod.js')


console.log(olamundo);