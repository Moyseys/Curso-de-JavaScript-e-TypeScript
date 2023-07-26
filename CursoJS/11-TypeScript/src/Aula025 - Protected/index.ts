export class Empresa {
  public readonly nome: string;
  protected readonly cnpj: string;
  protected readonly colaborddores: Colaboradores[] = []; //classes podem ser usadas como tipos
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

class Udemy extends Empresa {
  constructor() {
    super('Udemy', '12316432');
  }

  public popColabordores(): Colaboradores | null {
    const result = this.colaborddores.pop();
    if (result) return result;
    return null;
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
const udemy = new Udemy();

udemy.adicionaColaboradores(colaborador1);
udemy.adicionaColaboradores(colaborador2);
udemy.adicionaColaboradores({
  nome: 'Max',
  sobrenome: 'Veroni',
}); //structural type

udemy.verColaboradores();
udemy.popColabordores();
udemy.verColaboradores();
