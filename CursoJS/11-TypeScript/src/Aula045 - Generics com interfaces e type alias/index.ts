interface Person<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

interface Person2<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const p1: Person<string, number> = {
  nome: 'Apolo',
  sobrenome: 'silva',
  idade: 45,
};

const p2: Person2 = {
  nome: 'Apolo2',
  sobrenome: 'silva',
  idade: 18,
};

console.log(p1);
console.log(p2);
