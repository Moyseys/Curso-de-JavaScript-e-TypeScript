const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ]
 
const numerosDobro = numeros.map((valor, indice, array) => {
    return valor*2
})
//==============================================================//


const  pessoas  =  [
    {  nome : 'Luiz' ,  idade : 62  } ,
    {  nome : 'Maria' ,  idade : 23  } ,
    {  nome : 'Eduardo' ,  idade : 55  } ,
    {  nome : 'Letícia' ,  idade : 19  } ,
    {  nome : 'Rosana' ,  idade : 32  } ,
    {  nome : 'Wallace' ,  idade : 47  } ,
  ] 

const map01 = pessoas.map(valor =>  valor.nome)
const map02 = pessoas.map((valor) => {
    return {idade: valor.idade}
})
const map03 = pessoas.map((valor, indice) => {
    let novoObj = {...valor}
    novoObj.id = indice
    return novoObj
})

console.log(map03);