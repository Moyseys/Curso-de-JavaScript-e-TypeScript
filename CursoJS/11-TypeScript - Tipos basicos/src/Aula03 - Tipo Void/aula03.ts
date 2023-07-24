function semRetorno(...args: Array<string>): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Moyseys',
  sobrenome: 'Veroni',
  dizNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.dizNome();
semRetorno('Moyseys', 'Veroni');

export { pessoa };
