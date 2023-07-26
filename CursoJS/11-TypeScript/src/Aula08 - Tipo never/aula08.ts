//O tipo never mostrar que uma função nunca ira retornar
//e tb é geralmete é remetido a funções que retornam erro
export function createError(): never {
  throw new Error('Erro');
}

createError();
