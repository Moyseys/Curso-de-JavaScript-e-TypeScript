function Pessoa(nome, sobrenome){
    const id = 123

    const metodoInterno = function (){return 'ola'}
    
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = () => {
        return console.log(`seu nome é: ${nome}, e seu sobrenome é: ${sobrenome}`)
    }

}

const p1 = new Pessoa('moyza', 'g2')

p1.metodo()