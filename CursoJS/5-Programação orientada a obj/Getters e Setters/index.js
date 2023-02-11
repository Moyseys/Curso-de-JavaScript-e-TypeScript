const velocidade = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER');
        if(this[velocidade] < 100 && this[velocidade] >100)
        this[velocidade] = valor
    }

    get velocidade(){
        console.log('GETTER');
        return this[velocidade];
    }

    acelera(){
        if(this[velocidade] >= 100) return;
        this[velocidade]++;
    }
    desacelera(){
        if(this[velocidade] <= 0) return;
        this[velocidade]--;
    }
}

const c1 = new Carro('Fusca');
for (let i = 0;i < 100; i++) {
    c1.acelera()
}


c1.velocidade = 500
console.log(c1.velocidade);