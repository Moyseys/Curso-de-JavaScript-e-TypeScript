//                        caso retorne true o " n "sempre será um number
//                        sem essa notação averia uma exeção na linha 8
//                                 Type predicate
export function isNumber(n: unknown): n is number {
  return typeof n === 'number';
}
export function soma<T>(...args: T[]): number {
  const soma = args.reduce((soma, value) => {
    if (isNumber(value) && isNumber(soma)) {
      return soma + value;
    }

    return soma;
  }, 0);

  return soma;
}

const soma1 = soma(1, 2, 3, 4, 5, 6, 7, 8, 9);
const soma2 = soma('a', 'b', 'c');
//const soma3 = soma(1, 2, 3, 4, 5, 6, 7, 8, 'a'); //não é possivel faze isso pois a tipagem é feita pelo primeiro
//elemento então o array que a função recebe já está tipado como number quanfo tento enviar uma string

console.log(soma1);
console.log(soma2);
//console.log(soma3);
