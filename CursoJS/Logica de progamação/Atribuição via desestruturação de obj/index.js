const obj = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 32,
    endereco: {
        rua:'sei lá',
        numero: 4050,
    }
}

const {nome, sobrenome, ...resto} = obj
console.log(nome , sobrenome, resto)

const{endereco:{rua, numero}} = obj
console.log(rua , numero)