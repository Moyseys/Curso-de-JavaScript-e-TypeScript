const produto = {nome: 'caneca', preço: 8.50};

//Método Object.assign({}, any)
const produtoCopia = Object.assign({}, produto,{outro:'Outro obj'});
console.log(produtoCopia);

//Método Object.Keys(any)
const chaves = Object.keys(produto);
console.log(chaves);

//Método Object.ferreze(any)
Object.freeze(produtoCopia);
    //produtoCopia.nome = 'sla' *ERRO*

//Método Object.get

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
