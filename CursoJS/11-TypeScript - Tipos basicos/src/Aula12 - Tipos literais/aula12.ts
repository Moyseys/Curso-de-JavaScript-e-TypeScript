let n = 100; //eslint-disable-line
const n2 = 100; //eslint-disable-line

let n3: 100; //eslint-disable-line
let n4 = 100 as const //eslint-disable-line
//tipo de n é igual a number já o n2 é 100

const pessoa = {
  nome: 'Moyseys' as const, // Type => 'Moyseys'
  sobrenome: 'Veroni', // Type => String
};

function escolhaUmaCor(cor: 'vermelho' | 'verde' | 'azul'): string {
  return cor;
}

console.log(pessoa);
console.log(escolhaUmaCor('verde'));

export default 1;
