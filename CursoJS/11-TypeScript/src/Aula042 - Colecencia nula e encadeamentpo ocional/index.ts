//Operador de colecência nula e encadeamento opcional

type Documento = {
  nome: string;
  data?: Date;
};

const doc: Documento = {
  nome: 'SLa',
};

console.log(doc.data?.toDateString());
console.log(undefined ?? 'Colecência nula');
console.log(null ?? 'Colecência nula');
console.log('' ?? 'Colecência nula');
console.log(0 ?? 'Colecência nula');
console.log(false ?? 'Colecência nula');
