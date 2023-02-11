const pessoas = [
    {id: 3, nome:'Luiz'},
    {id: 2, nome:'Maria'},
    {id: 1, nome:'Helena'}
];

const novaPessoa = new Map();
// for(const pessoa of pessoas){
//     const {id} = pessoa;
//     novaPessoa[id] = {...pessoa};
// }

for (const pessoa of pessoas) {
    const{id} = pessoa;
    novaPessoa.set(id, {...pessoa})
//  novaPessoa.set(CHAVE, VALOR)
}

for(const pessoa of novaPessoa){
    console.log(pessoa);
}

console.log(novaPessoa);

