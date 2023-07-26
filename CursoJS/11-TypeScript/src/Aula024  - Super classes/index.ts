export class Pessoa {
  constructor(
    public readonly nome: string,
    protected readonly sobrenome: string,
    protected readonly idade: number,
  ) {}

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  private readonly sala: string;
  private readonly curso: string;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    sala: string,
    curso: string,
  ) {
    super(nome, sobrenome, idade);
    this.sala = sala;
    this.curso = curso;
  }
  public getNomeCompleto(): string {
    const result = super.getNomeCompleto();
    return result + ' Isso foi sobreInscrito peala classe alunno';
  }

  public insformacoesDoAluno(): string {
    return `Nome: ${this.nome} \n Sobrenome: ${this.sobrenome} \n Sala: ${this.sala} \n Curso: ${this.curso}`;
  }
}

export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return 'Isso foi sobreInscrito pela classe Cliente';
  }
}

const pessoa1 = new Pessoa('Apolo', 'Silva', 90);
const aluno1 = new Aluno('Max', 'Alvez', 12, '0003', 'Info');
const cliente1 = new Cliente('Pit', 'Ferreira', 20);

console.log(pessoa1.getNomeCompleto());
console.log(aluno1.getNomeCompleto());
console.log(aluno1.insformacoesDoAluno());
console.log(cliente1.getNomeCompleto());
