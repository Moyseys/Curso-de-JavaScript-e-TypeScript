const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzCores(cor: keyof typeof coresObj, cores: typeof coresObj) {
  return cores[cor];
}

console.log(traduzCores('vermelho', coresObj));
