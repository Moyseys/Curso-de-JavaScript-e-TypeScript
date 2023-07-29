type Veiculo = {
  nome: string;
  ano: string;
};

type Car = {
  name: Veiculo['nome'];
  year: Veiculo['ano'];
};

const c1: Car = {
  name: 'versa',
  year: '2013',
};
console.log(c1);
