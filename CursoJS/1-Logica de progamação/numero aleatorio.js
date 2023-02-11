let vetor = []
 
function aleatorio(){//Gera um numero aleatorio
    return Math.round(Math.random() * 20)
}

for(let i = 0; vetor.length < 10; i++){//Executa enquanto o vetor não tiver 10 posiçãos
    let random = aleatorio() // recebe o valor retornado da função + p

    if(vetor.indexOf(random) == -1){ //Verifica se à o numero gerado ja tem no vetor
        vetor.push(random) // adiciona no vetor
    }
}
console.log(vetor)