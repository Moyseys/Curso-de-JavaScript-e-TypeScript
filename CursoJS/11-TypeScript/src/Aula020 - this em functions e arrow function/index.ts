export default function funcao(this: Date, nome: string): void {
  console.log(this, nome);
}

//Nesse caso não é possivel chamar a função assim
//funcao('Moyza');

funcao.call(new Date(), 'Moyza');
//ou
funcao.apply(new Date(), ['Moyza']);
