function Produto(nome, preço, estoque){
    let nomeprivado = nome;
    let preçoprivado = preço;
    let estoqueprivado = estoque;
    Object.defineProperties(this,{
        nome:{
            enumerable: true,
            set: function(vl){
                if(typeof vl !== 'string'){
                    throw new TypeError('mensagem');
                    return;
                }
                nomeprivado = vl;
            },
            get: function(){
                return nomeprivado;
            },
            configurable: true
        },
        preço:{
            enumerable: true,
            configurable: false,
            set: function(vl){
                if(typeof vl !== 'number'){
                    throw new TypeError('Mensagem');
                    return;
                }
                preçoprivado = vl;
            },
            get: function(){
                return preçoprivado;
            }
        }
    });
}

const protuto1 = new Produto();

protuto1.nome = 'sla';
protuto1.preço = 59.90;
console.log(protuto1.nome,protuto1.preço);

const protuto2 = new Produto();
protuto2.nome = 'Alexa';
protuto2.preço = 270.50;
console.log(protuto2.nome, protuto2.preço);