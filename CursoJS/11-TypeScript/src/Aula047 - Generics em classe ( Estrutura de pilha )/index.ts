interface PilhaTemplate<U> {
  [k: number]: U;
}

class Pilha<T> {
  private contador = 0;
  private pilha: PilhaTemplate<T> = {};

  public add(elemento: T): void {
    this.pilha[this.contador] = elemento;
    this.contador++;
  }

  public delet(): T | void {
    if (this.estaVazio()) console.log('A pilha está vazia');
    this.contador -= 1;
    const el = this.pilha[this.contador];
    delete this.pilha[this.contador];
    return el;
  }

  private estaVazio(): boolean {
    return this.contador <= 0;
  }
}

const p1 = new Pilha<number>();
p1.add(1);
p1.add(2);
p1.add(3);

const elremovido = p1.delet();

console.log(elremovido);
console.log(p1);
export default 1;
