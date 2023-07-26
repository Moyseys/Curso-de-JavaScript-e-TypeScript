export class Empresa {
  public readonly nome: string;
  protected readonly cnpj: string;
  private readonly colaborddores: Colaboradores[] = []; //classes podem ser usadas como tipos
  //Seria possivel usar type alias aqui tambem

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaboradores(colaborador: Colaboradores) {
    this.colaborddores.push(colaborador);
  }

  public verColaboradores(): void {
    for (const colaborador of this.colaborddores) {
      console.log(colaborador);
    }
  }
}

class Colaboradores {
  //Atalho para criar atributos
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const colaborador1 = new Colaboradores('Apolo', 'Silva');
const colaborador2 = new Colaboradores('Pit', 'Alvez');
const udemy = new Empresa('Udemy', '12316432');

udemy.adicionaColaboradores(colaborador1);
udemy.adicionaColaboradores(colaborador2);
udemy.adicionaColaboradores({
  nome: 'Max',
  sobrenome: 'Veroni',
}); //structural type

udemy.verColaboradores();

console.log(udemy);
