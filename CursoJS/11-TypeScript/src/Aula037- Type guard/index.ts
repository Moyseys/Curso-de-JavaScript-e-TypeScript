function concatenação(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(concatenação(1, 6));
console.log(concatenação('Olá', ' mundo'));

type Pessoa = {
  nome: string;
};

type Animal = {
  cor: string;
};

type AnimalOuPessoa = Pessoa | Animal;

class Aluno implements Pessoa {
  constructor(public nome: string) {}

  public dizNome(obj: AnimalOuPessoa): void {
    // if (obj instanceof Pessoa) console.log(obj.nome);
    if ('nome' in obj) console.log(obj.nome);
  }
}
const p1: Pessoa = {
  nome: 'Apolo',
};
const a1: Animal = {
  cor: 'Rosa',
};

const c1 = new Aluno('Apolo');
c1.dizNome(a1);
export default 1;
