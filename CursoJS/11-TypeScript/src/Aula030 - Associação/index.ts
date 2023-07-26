/*
classes associada não dependem uma da outra mas estão ligadas de alguma forma
*/

abstract class Ferramenta {
  constructor(private _nome: string) {}

  set nome(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

class Caneta extends Ferramenta {
  escrever(): void {
    console.log('Escrevendo com ' + this.nome + ' ...');
  }
}

class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log('Digitando com ' + this.nome + ' ...');
  }
}

class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(protected nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  public escrever(): void {
    if (this._ferramenta) return this._ferramenta.escrever();
    return console.log('Sem ferramenta');
  }
}

const caneta = new Caneta('caneta');
const maquinaDeEscrever = new MaquinaDeEscrever('Maquina de escrever');

const escritor = new Escritor('Apolo');
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquinaDeEscrever;
escritor.escrever();
