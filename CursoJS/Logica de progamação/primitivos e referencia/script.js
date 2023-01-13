/*Primitivos(imutáveis) - String, number, boolean, 
undefined, null(bigint, symbol) - valores copiados 
Referência(mutável) -  array, object, function - Passados
por referência*/ 

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}
const b = {...a}/*sprat passa o dado por tipo primitivo 
apontando para um local da memoria diferente*/

a.nome = 'joão'
console.log(a)
console.log(b)