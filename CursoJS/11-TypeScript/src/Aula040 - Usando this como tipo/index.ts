export default class Calculador {
  constructor(public number: number) {}

  public add(number: number): this {
    this.number += number;
    return this;
  }

  public sub(number: number): this {
    this.number -= number;
    return this;
  }

  public div(number: number): this {
    this.number /= number;
    return this;
  }

  public mult(number: number): this {
    this.number *= number;
    return this;
  }
}

class SubCalculadora extends Calculador {
  public pow(number: number): this {
    this.number **= number;
    return this;
  }
}

const c = new SubCalculadora(10);
c.add(2).mult(4).sub(2).div(2).pow(2);
console.log(c);
