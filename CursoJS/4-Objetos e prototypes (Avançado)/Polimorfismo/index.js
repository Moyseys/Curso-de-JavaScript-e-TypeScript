function CP(agencia, conta, saldo){
    this.agencia = agencia,
    this.conta = conta,
    this.saldo = saldo
}

CP.prototype.verSaldo = function(){
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
      );
}
CP.prototype.depositar = function(valor){
    this.saldo += valor
    console.log(`Deposito de: R$${valor}, Saldo de: R$${this.saldo}`);
}
CP.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente | Saldo de R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    console.log(`Saque de: R$${valor}, Saldo de: R$${this.saldo}`);
}


function CC(agencia,conta,saldo,limite){
    CP.call(this, agencia,conta,saldo)
    this.limite = limite
}

CC.prototype = Object.create(CP.prototype)
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor){
    if(valor > this.saldo + this.limite){
        console.log(`Saldo insuficiente | R$${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
}


const contaSemLimite = new CP(11,13,10);
contaSemLimite.verSaldo();
contaSemLimite.depositar(30);
contaSemLimite.sacar(100);

console.log();
const contaCorrente = new CC(11,13,10,100)
contaCorrente.verSaldo();
contaCorrente.depositar(30);
contaCorrente.sacar(100);


console.log(CC.prototype);
console.log(CP.prototype);