interface Nome {
  nome: string;
}

interface Sobrenome {
  sobrenome: string;
}

interface DizNomeCompleto {
  dizNome(): string;
}

interface InterPessoa extends Nome, Sobrenome, DizNomeCompleto {}

export default class Pessoa implements InterPessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  dizNome(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}
