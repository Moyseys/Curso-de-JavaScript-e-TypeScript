function decorador(
  classPrototype: any,
  nomeMetodo: string,
  description: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(description);

  return {
    value: function (msg: string): string {
      return msg + 'oie';
    },
    writable: false,
    enumerable: false,
    configurable: false,
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decorador
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const p1 = new UmaPessoa('Apolo', 'Silva', 40);
console.log(p1.metodo('apolo'));
console.log(p1);
