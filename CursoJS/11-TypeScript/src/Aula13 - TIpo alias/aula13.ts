// Com o type alias podemos setar um tipo
//tipos devem ser declarados com a primeira letra maiuscula

type Idade = number;
//Podemos setar um tipo usando "union"
type Rgb = 'Vermelho' | 'Verde' | 'Azul';
type Cmyk = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = Rgb | Cmyk;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario?: number;
  corPreferida?: CorPreferida;
};
// ctrl + space para ver as opções que existe para o objto
const pessoa: Pessoa = {
  nome: 'Apolo',
  idade: 1,
  salario: 40_600,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  pessoa.corPreferida = cor;
  return pessoa;
}

console.log(pessoa);
setCorPreferida(pessoa, 'Magenta');
console.log(pessoa);

export default 1;
