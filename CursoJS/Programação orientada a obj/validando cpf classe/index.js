class ValidaCpf{
    constructor(cpf){
        Object.defineProperty(this,'cpfLimpo',{
            writable:false,
            enumerable:true,
            configurable:false,
            value: cpf.replace(/\D+/g,'')
        });
    }

    valida(){

        if(this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;

        const cpfparcial = this.cpfLimpo.slice(0, -2);

        const digito1 = ValidaCpf.digito(cpfparcial);
        const digito2 = ValidaCpf.digito(cpfparcial + digito1)

        return digito1 + digito2;
    }

    static digito(cpf){
        const cpfArray = Array.from(cpf);
        let contador = cpfArray.length + 1;
        let multiplicacao = cpfArray.reduce((ac,vl,i,a)=>{
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
}

const cpf1 = new ValidaCpf('442.432.098-71');

console.log(cpf1.valida());
