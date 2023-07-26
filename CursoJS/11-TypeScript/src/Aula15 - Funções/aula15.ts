type CallBack = (valor: string) => string;

function mapearStringsArray(array: string[], callBack: CallBack) {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    newArray.push(callBack(el));
  }

  return newArray;
}

const arrayabc = ['a', 'b', 'c'];
const arraymapeado = mapearStringsArray(arrayabc, (valor) =>
  valor.toUpperCase(),
);

console.log(arraymapeado);
