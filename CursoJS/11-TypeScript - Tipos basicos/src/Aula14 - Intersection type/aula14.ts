// &
type nome = { nome: string };
type sobrenome = { sobrenome: string };

type Pessoa = nome & sobrenome;

const pessoa: Pessoa = {
  nome: 'Moyza',
  sobrenome: 'Veroni',
};

console.log(pessoa);

export default 1;

//Insterseção de conjuntos
type ab = 'a' | 'b';
type ac = 'a' | 'c';
type Instersecao = ac & ab;
