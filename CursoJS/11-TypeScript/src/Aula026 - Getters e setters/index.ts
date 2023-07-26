export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    //setter não requer type anotation ":void"
    this._cpf = cpf;
  }
  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa1 = new Pessoa('Apolo', 'Silva', '442.432.098-71');
pessoa1.cpf = '666.444.222-11'; //Setter
console.log(pessoa1.cpf); //Getter
