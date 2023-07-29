interface Pessoa {
  readonly nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

const p: Pessoa = {
  nome: 'Apolo',
  sobrenome: 'Silva',
};

console.log(p);

export default 1;
