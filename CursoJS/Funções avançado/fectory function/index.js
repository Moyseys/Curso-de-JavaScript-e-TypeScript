function criapessoa(nome, sobrenome, p, a){
    return{
    nome,
    sobrenome,
    peso: p,
    altura: a,

    get nomecompleto(){
        return this.nome + ' ' + this.sobrenome
    },

    set nomecompleto(valor){
        /*cria um vetor com todas as 
        palavras de 'valor' separadas*/
        valor = valor.split(' ')
        //remove o primeiro elemento do vetor
        this.nome = valor.shift()
        //tira os valores do vetor separados por espaço
        this.sobrenome = valor.join(' ')  
    },

    fala(asunto){
        return this.nome + ' ' + asunto
    },

    imc(){
        return (this.peso / (this.altura ** 2)).toFixed(2)
    }
    }
}

const p1 = criapessoa('Moyza','G2',75,1.8)

console.log(p1.fala('Fala nada...'))
console.log(p1.imc()) //metodo imc
console.log(p1.nomecompleto) // get sobrenome
p1.nomecompleto = 'Moyza Simas G2'//set sobrenome
console.log(p1.nomecompleto)// get sobrenome