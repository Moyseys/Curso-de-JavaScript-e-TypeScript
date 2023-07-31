// U extends keyof T isso especifica que U deve ser de umm tipo que contnha nas chaves de T
//                    U é no maximo uma chave de T
type KeyOfObject = <T, U extends keyof T>(obj: T, key: U) => T[U];

//function expretion
const showKey: KeyOfObject = (obj, key) => obj[key];

const pessoa = {
  nome: 'Apolo',
  sobrenome: 'Silva',
  idade: 40,
};

console.log(showKey(pessoa, 'idade'));

export default 1;
