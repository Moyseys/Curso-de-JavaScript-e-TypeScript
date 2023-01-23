const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ]


const numerosFiltrados = numeros.filter((valor, indice, array) => {
    return valor > 10
})

console.log(numerosFiltrados);

const  pessoas  =  [
    {  nome : 'Luiz' ,  idade : 62  } ,
    {  nome : 'Maria' ,  idade : 23  } ,
    {  nome : 'Eduardo' ,  idade : 55  } ,
    {  nome : 'Letícia' ,  idade : 19  } ,
    {  nome : 'Rosana' ,  idade : 32  } ,
    {  nome : 'Wallace' ,  idade : 47  } ,
  ] 

//===========================================================================  

  const filtro01 = pessoas.filter((valor, indice, array) => {
    return valor.nome.length >= 5
  })
  console.log(filtro01)

//===========================================================================  

  const filtro02 = pessoas.filter((valor, indice, array) => {
    return valor.idade > 50
  })
  console.log(filtro02)

//===========================================================================  

  const filtro03 = pessoas.filter((valor, indice , array) => {
    return valor.nome.toLowerCase().endsWith('a')
  })

  console.log(filtro03)