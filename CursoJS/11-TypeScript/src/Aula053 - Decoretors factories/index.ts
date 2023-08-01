interface Contructor {
  new (...args: any[]): any;
}

function decorador(parametro1: string) {
  return function (target: Contructor): Contructor {
    //Retorna uma classe anonima
    return class extends target {
      public nome: string;
      public idade: number;
      constructor(...args: any[]) {
        super();
        this.nome = this.inverte(args[0]);
        this.idade = args[1];
      }
      inverte(texto: string): string {
        return texto.split('').reverse().join('') + parametro1;
      }
    };
  };
}

function outroDecorador(target: Contructor): Contructor {
  return target;
}

@outroDecorador
@decorador('parametro1')
export class Pessoa {
  constructor(
    public nome: string,
    public idade: number,
  ) {}
}

const p1 = new Pessoa('Apolo', 40);
console.log(p1);

export default 1;
