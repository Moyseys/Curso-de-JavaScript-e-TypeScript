/*
Uma não pode existir sem a outra
*/
export class Carro {
  private motor = new Motor();

  public ligar(): void {
    this.motor.ligar();
  }

  public acelerar(): void {
    this.motor.acelerar();
  }

  public deligar(): void {
    this.motor.deligar();
  }
}

export class Motor {
  public ligar(): void {
    console.log('Ligando...');
  }

  public acelerar(): void {
    console.log('acelerando...');
  }

  public deligar(): void {
    console.log('desligando...');
  }
}
