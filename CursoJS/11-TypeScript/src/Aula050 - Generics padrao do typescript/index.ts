/* eslint-disable @typescript-eslint/no-unused-vars */

//tipos genericos padrao do ts

//Record<tipo da chave, tipo dos valores>
const obj: Record<string, string | number> = {
  nome: 'Apolo',
  sobrenome: 'Silva',
  idade: 40,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome: string;
  readonly idade: number;
};
//Required<tipo>
type PessoaRequired = Required<PessoaProtocol>;
type PessoaPartial = Partial<PessoaRequired>;
type PessoaReadOnly = Readonly<PessoaRequired>;
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type Extract1 = Extract<ABC, CDE>;
type Exclude1 = Exclude<ABC, CDE>;

type AcauntMongo = {
  _id: string;
  nome: string;
  idade: number;
};
//                                       keyof AcauntMongo -> "_id" | "nome" | "idade"
type AcauntMongoApi = Pick<AcauntMongo, Exclude<keyof AcauntMongo, '_id'>> & {
  id: string;
};

export default 1;
