/*eslint-disable*/

//Type annotation

//Tipos basicos
let nome: string = 'Moyseys';// '', ""
let idade: number = 18; // 10, 1.57, hexadecimal, binario, octal
let adulto: boolean = true; //true, false
let simbolo: symbol = Symbol('Qualque-symboll');
// let big: bigint = 10n

//Arrays

let arrayDeNueros1: Array<number> = [1, 2, 3];
  //ou
let arrayDeNueros2: number[] = [1, 2, 3];

//Objetos
//Ponto de interrogação serve para um valor ser opcional
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 18,
  nome: 'Moyseys'
}

//Funções
function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
