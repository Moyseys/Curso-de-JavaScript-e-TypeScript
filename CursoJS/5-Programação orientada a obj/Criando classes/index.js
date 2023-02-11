class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome}: Ola, -_-`);
    }
}

const p1 = new Pessoa('moyza','G2');
p1.falar()