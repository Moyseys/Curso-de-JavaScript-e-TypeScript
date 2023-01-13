const obj = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 32,
    rua:'sei lá',
    numero: 4050,
}
for(let key in obj){
    console.log(key+": "+ obj[key])
}