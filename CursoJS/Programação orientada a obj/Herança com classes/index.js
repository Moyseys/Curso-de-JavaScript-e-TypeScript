class DispositivoEletronico{
    constructor(nome,capa){
        this.nome = nome;
        this.capa = capa;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

class Smartfone extends DispositivoEletronico{
    constructor(nome,capa,cor,modelo){
        super(nome,capa);
        this.nome = nome;
        this.cor = cor;
        this.modelo = modelo;
    }
}

const d1 = new Smartfone('S10',true,'Preto','plus');

console.log(d1);