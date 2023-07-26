export class Pessoa {
  static cpfPadrao = '000.000.000-00';
  constructor(
    private nome: string,
    private sobrenome: string,
    private cpf: string,
  ) {}

  static fala(msg: string): void {
    return console.log(msg);
  }

  static criaPessoa(
    nome: string = 'João',
    sobrenome: string = 'Silva',
    cpf: string = this.cpfPadrao,
  ): Pessoa {
    return new Pessoa(nome, sobrenome, cpf);
  }
}

Pessoa.fala('oi');
const pessoa1 = Pessoa.criaPessoa();
console.log(pessoa1);
