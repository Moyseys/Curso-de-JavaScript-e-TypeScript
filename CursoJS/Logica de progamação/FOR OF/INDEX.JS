let A = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let indice in A){
    console.log(A[indice])
}
console.log("====================")

for(let valor of A){
    console.log(valor)
}

console.log("====================")

A.forEach(function (valor, indice){
    console.log("Posição "+indice +" tem o valor: "+valor)
})