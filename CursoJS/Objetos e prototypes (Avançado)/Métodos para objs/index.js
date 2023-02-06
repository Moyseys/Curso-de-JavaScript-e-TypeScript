const produto = {nome: 'caneca', preço: 8.50};

//Método Object.assign({}, obj)
const produtoCopia = Object.assign({}, produto,{outro:'Outro obj'});
console.log(produtoCopia);

//Método Object.Keys(obj)
const chaves = Object.keys(produto);
console.log(chaves);
    
//Método Object.ferreze(obj)
Object.freeze(produtoCopia);
    //produtoCopia.nome = 'sla' *ERRO*

//Método getOwnPropertyDescriptor(obj, produto)
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

//Método Object.values(obj)
console.log(Object.values(produto));

//Método Object.entries(obj)
console.log(Object.entries(produto));