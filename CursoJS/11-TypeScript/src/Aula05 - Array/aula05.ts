// T[] ou Array<T>

function mult(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenação(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + ` ${valor}`);
}

function toUpperCase(...args: Array<string>): Array<string> {
  return args.map((vl) => vl.toUpperCase());
}

const resultado = mult(1, 2, 3, 4);
const resultado2 = concatenação('a', 'b', 'c');
const resultado3 = toUpperCase('a', 'b', 'c');

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
