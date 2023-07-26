let x; // type = undefined
console.log(x);

function createPerson(
  name: string,
  lastname?: string,
): { name: string; lastname?: string } {
  return {
    name,
    lastname,
  };
}

console.log(createPerson('Moyseys'));

function squareOf(x: any): null | number {
  if (typeof x != 'number') return null;
  return x * x;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');
console.log(squareOfTwoString);

if (squareOfTwoNumber === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNumber * 24);
}
