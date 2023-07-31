function intersecaoObj<Obj1, Obj2>(obj1: Obj1, obj2: Obj2): Obj1 & Obj2 {
  return Object.assign({}, obj1, obj2);
}

const o1 = { nome: 'obj1', sla: 1 };
const o2 = { sim: false, adssadas: [] };

const o3 = intersecaoObj(o1, o2);

console.log(o3);
