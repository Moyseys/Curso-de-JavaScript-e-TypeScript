class ControleRemoto{
    constructor(nome){
        this.nome = nome;
    }
    static soma(n1,n2){
        console.log(this);
        return n1 + n2;
    }
}

console.log(ControleRemoto.soma(5,7));