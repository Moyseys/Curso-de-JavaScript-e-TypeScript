//Aqui crio um tipo generico que estende um contrutor faço isso com a palavra NEW
//Isso especifica que meu tipo generico precisa ser necessariamente uma classe e que tenha um construtor
//closure
function decorador(parametro1: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
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
