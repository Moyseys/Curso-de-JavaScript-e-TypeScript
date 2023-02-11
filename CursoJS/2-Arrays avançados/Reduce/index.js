const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ]

const total = numeros.reduce((acumulador,valor,indice,array) => {
    acumulador += valor
    //console.log(acumulador,valor)
    return acumulador
},0)
console.log(total);
const pares = numeros.reduce((acumulador,valor,indice,array) => {
    if(valor % 2 === 0 ){
        acumulador.push(valor)    
    }
    return acumulador
    
},[])

//console.log(pares)

const  pessoas  =  [
    {  nome : 'Luiz' ,  idade : 62  } ,
    {  nome : 'Maria' ,  idade : 23  } ,
    {  nome : 'Eduardo' ,  idade : 55  } ,
    {  nome : 'Letícia' ,  idade : 80  } ,
    {  nome : 'Rosana' ,  idade : 32  } ,
    {  nome : 'Wallace' ,  idade : 47  } ,
  ] 

const velha = pessoas.reduce((acumulador,valor,indice,array) => {

    if(acumulador.idade < valor.idade){
        acumulador = valor
    }

    return acumulador
})

console.log(velha);
