abstract class Perssonagem {
  protected abstract avatar: string; // Atributos abstratos forçam você a implementa-lo em classes filhas
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  public atacar(perssonagem: Perssonagem): void {
    console.log(
      `${this.nome} diz ${this.bordao()} e ataca ${perssonagem.nome}`,
    );
    perssonagem.perderVida(this.ataque);
  }

  public perderVida(ataque: number): void {
    this.vida -= ataque;
    console.log(`${this.nome} está com ${this.vida}`);
  }

  abstract bordao(): string; //metodos abstratos força você a iplementa-los em classes derivadas
}

class Mago extends Perssonagem {
  protected avatar = '🧙‍♂️';

  bordao(): string {
    return this.avatar + ' Eu sou um mago ...';
  }
}
class Guerreiro extends Perssonagem {
  protected avatar = '👮‍♂️';

  bordao(): string {
    return this.avatar + ' AAAAAAAAAAA';
  }
}

const mago = new Mago('Apolo', 10, 100);
const guerreiro = new Guerreiro('Max', 20, 50);

mago.atacar(guerreiro);
mago.atacar(guerreiro);
guerreiro.atacar(mago);
guerreiro.atacar(mago);
guerreiro.atacar(mago);
guerreiro.atacar(mago);
