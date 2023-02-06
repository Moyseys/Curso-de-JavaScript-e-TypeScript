function ValidaCpf(cpf){
    Object.defineProperties(this,{
        cpf:{
            enumerable:true,
            configurable:false,
            set: function(vl){
                if(typeof vl !== 'string'){
                    throw new TypeError('Menssagem');
                }
                cpf = vl
            },
            get: function(){
                return cpf;
            },

        }
    })
}
ValidaCpf.prototype.Valida = function(){
    const cpfLimpo = this.cpf.replace(/\D+/g,'');

    if(this.cpf === 'undefined') return false;
    if(cpfLimpo.length !== 11) return false;
    if(this.eSequencia(cpfLimpo)) return false;
    
    const cpfmenos2  = cpfLimpo.slice(0, -2);
  

    const digito1 = this.criaDigito(cpfmenos2);
    const digito2 = this.criaDigito(cpfmenos2 + digito1);

    let cpfValido = digito1 + digito2 === cpfLimpo.slice(-2,cpfLimpo.length)
    return cpfValido;
};

ValidaCpf.prototype.criaDigito = function(cpf){
    const arrayCpf = Array.from(cpf);
        let contador = arrayCpf.length + 1;
        let multiplicacao = arrayCpf.reduce((ac,vl,i,a)=>{
            let result = vl * contador;
            ac.splice(a.length, 0, result);
            contador--;
            return ac;
        },[]);
        const soma = multiplicacao.reduce((ac,vl,i)=>{
            ac += multiplicacao[i]
            return ac;
        },0);
        const total = 11 - (soma % 11)
        return  total > 9 ? '0' : String(total);
}

ValidaCpf.prototype.eSequencia = function(cpf){
    const sequencia = cpf[0].repeat(cpf.length);
    return sequencia === cpf;
}

const ValidaCpfTeste = new ValidaCpf('705.484.450-52');
const ValidaCpfReal = new ValidaCpf('311.701.858.19');


//ValidaCpfTeste.cpf = '111.111.111-11';

console.log(ValidaCpfTeste.Valida());
console.log(ValidaCpfReal.Valida());