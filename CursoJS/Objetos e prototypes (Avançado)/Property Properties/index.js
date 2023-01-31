function Protuto(nome, preço, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        value: estoque, // mostra valor *NOTA pode ser função
        writable: false, //pode ser alterado
        configurable: false //pode ser reconfigurado
    });

    Object.defineProperties(this,{
        nome:{
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preço:{
            enumerable: true,
            value: preço,
            writable: false,
            configurable: false
        }
    })
}

const produto1 = new Protuto('Camiseta',110,50);
produto1.estoque = 90;
delete produto1.estoque

console.log(produto1);
//Protuto { nome: 'Camiseta', 'preço': 110, estoque: 50 }

//console.log(Object.keys(produto1));
//[ 'nome', 'preço', 'estoque' ]