function decorador(classPrototype: any, nome: string | symbol): any {
  console.log(classPrototype);
  console.log(nome);
  let valordaprop: any;
  return {
    get: () => {
      return valordaprop;
    },
    set: (value: any) => {
      if (typeof value === 'string') {
        valordaprop = value.split('').reverse().join('');
        return;
      }
      valordaprop = value;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

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
console.log(p1.metodo('oie'));
console.log(p1);
