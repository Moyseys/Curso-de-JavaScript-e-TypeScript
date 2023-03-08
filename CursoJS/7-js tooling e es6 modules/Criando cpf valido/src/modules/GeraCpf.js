import ValidaCpf from './ValidaCpf';

export default class GeraCpfValido{
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
      }

    formata(cpf){
        return (cpf.slice(0, 3)+ '.' + 
        cpf.slice(3, 6) + '.' + 
        cpf.slice(6, 9,) + '-' +
        cpf.slice(9, 11));
    }

    gera(){
        const cpfsemdigito = this.rand();
        const digito1 = ValidaCpf.digito(cpfsemdigito);
        const digito2 = ValidaCpf.digito(cpfsemdigito + digito1)
        const novoCpf = cpfsemdigito + digito1 + digito2;
        return this.formata(novoCpf);
    }

}