function criamultiplicador(m){
    function multiplicacao(n){
        return n * m
    }
    return multiplicacao
}
 
const duplicla = criamultiplicador(2)
const triplicla = criamultiplicador(3)
const quadrilicla = criamultiplicador(4)

console.log(duplicla(2))
console.log(triplicla(2))
console.log(quadrilicla(2))
/*É como se tivese chamado o 
retorno dela e passa-se o parâmetro*/ 
