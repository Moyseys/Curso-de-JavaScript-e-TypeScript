const vetor = ['julia','otavio','joao']

vetor[0] = 'jonas' //Altrera
vetor[vetor.length] = 'caio' //adiciona
vetor.push('tomas')//Adiciona no fim
vetor.unshift('maria')//Adiciona no começo

//const removido = vetor.pop() //remove o fim
//const removido2 = vetor.shift() //remove o começo
//console.log(removido)
//console.log(removido2)

//delete vetor[2]

console.log(vetor)
console.log(vetor.slice(0,3))
//ou
console.log(vetor.slice(0,-3))//tamanho do vetor menos 3