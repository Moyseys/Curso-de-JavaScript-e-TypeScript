const ObjetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'ChaveA',
  chaveB: 'ChaveB',
};

//ObjetoA.chaveA = 'Sla'; Cannot assign to 'chaveA' because it is a read-only
ObjetoA.chaveB = 'Sla2';
ObjetoA.chaveC = 'Opcional';
ObjetoA.chaveD = 'Novo';

console.log(ObjetoA);
