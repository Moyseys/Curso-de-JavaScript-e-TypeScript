type CbFunction<U> = (value: U, indice?: number, array?: U[]) => boolean;

//Posso usar generics para fazer a tipagem de acordo com a entrada
function myFilter<T>(array: T[], cb: CbFunction<T>): T[] {
  const newArray = [];
  for (let indice = 0; array.length > indice; indice++) {
    const value = array[indice];
    if (cb(value, indice, array)) newArray.push(value);
  }

  return newArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrFltrado = myFilter(arr, (value) => value > 5);
console.log(arrFltrado);

// const arrFltrado = myFilter(arr, (value) => {
//   return value > 5;
// });
// Nesse caso otypescript reclama porque o tipo unknow pode receber string ou outros tipo que não
// é possivel vazer essa verificação
