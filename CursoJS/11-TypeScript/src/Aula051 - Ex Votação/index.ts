interface Candidato {
  nome: string;
  votos: number;
}

class Votacao {
  private pergunta: string;
  private candidatos: Candidato[] = [];

  constructor(pergunta: string, ...candidatos: string[]) {
    this.pergunta = pergunta;
    for (const candidato of candidatos) {
      this.addCandidadto(candidato);
    }
  }

  public addCandidadto(...candidatos: string[]): void {
    for (const candidato of candidatos) {
      if (this.candidatoExist(candidato)) {
        return console.log(`O candidato ${candidato} já está registrado`);
      }

      const nomeCandidatoFormatado = this.formatar(candidato);
      this.candidatos.push({ nome: nomeCandidatoFormatado, votos: 0 });
    }
  }

  private candidatoExist(nome: string): boolean {
    nome = this.formatar(nome);

    let exist = false;
    this.candidatos.forEach((candidato) => {
      if (candidato.nome === nome) {
        exist = true;
      }
    });

    return exist;
  }

  private formatar(valor: string): string {
    return valor.trim().toLowerCase();
  }

  public votar(index: number): void {
    this.candidatos[index].votos++;
    this.showCandidatos();
  }

  private showCandidatos(): void {
    console.log('=============================');
    console.log(this.pergunta);
    console.log('=============================');
    for (let index = 0; index < this.candidatos.length; index++) {
      const candidato = this.candidatos[index];
      console.log(`${index} | ${candidato.nome} | votos: ${candidato.votos}`);
    }
    console.log('=============================');
  }
}

const linguagensProgramacao = new Votacao(
  'Qual a sua linguagem de prgramação preferida ?',
  'Python',
  'TypeScript',
  'Ruby',
  'Php',
);

linguagensProgramacao.addCandidadto('C', 'php   ');
linguagensProgramacao.addCandidadto('C');
linguagensProgramacao.votar(0);
