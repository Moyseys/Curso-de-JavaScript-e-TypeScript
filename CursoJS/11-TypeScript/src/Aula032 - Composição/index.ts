type TipoPessoa = {
  nome: string;
  sobrenome: string;
};

type DizNome = {
  dizNome(): void;
};

class Pessoa implements TipoPessoa, DizNome {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  dizNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  }
}

const p = new Pessoa('Apolo', 'Silva');
p.dizNome();
