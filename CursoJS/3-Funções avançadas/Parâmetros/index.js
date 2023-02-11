let soma = 0

function funcao(op,...numeros){
    for(let numero of numeros){
        op === '+' ? soma += numero : console.log('aviso') 
    }
    console.log(soma)
}

funcao('+',5,10,5)


// function funcao(){
//     console.log(arguments)
// }
// funcao('texto',1,2,3,[10,20,30,40])