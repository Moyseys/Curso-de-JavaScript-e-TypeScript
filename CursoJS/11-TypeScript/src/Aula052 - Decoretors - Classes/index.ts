@decorador()
export class Pessoa {
  constructor(
    public nome: string,
    public idade: number,
  ) {}
}
//Aqui crio um tipo generico que estende um contrutor faço isso com a palavra NEW
//Isso especifica que meu tipo generico precisa ser necessariamente uma classe e que tenha um construtor
function decorador<T extends new (...args: any[]) => any>(target: T): T {
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
      return texto.split('').reverse().join('');
    }
  };
}

const p1 = new Pessoa('Apolo', 40);
console.log(p1);

export default 1;
