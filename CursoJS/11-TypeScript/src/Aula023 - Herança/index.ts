export class Pessoa {
  constructor(
    public readonly nome: string,
    private readonly sobrenome: string,
    protected readonly idade: number,
  ) {}

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  public getNomeCompleto(): string {
    return 'Isso foi sobreInscrito peala classe alunno';
  }
}

export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return 'Isso foi sobreInscrito peala classe Cliente';
  }
}

const pessoa1 = new Pessoa('Apolo', 'Silva', 90);
const aluno1 = new Aluno('Max', 'Alvez', 12);
const cliente1 = new Aluno('Pit', 'Ferreira', 20);

console.log(pessoa1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
