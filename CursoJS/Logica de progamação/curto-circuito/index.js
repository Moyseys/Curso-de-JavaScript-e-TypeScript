/*
*valores avaliados em false*
  0
  ""
  null/indefined
  NaN
*/
function falaoio() {
  return "oi";
}

let podi;

podi = null; //0 '' null/indefine NaN
console.log(falaoio() && podi); // retorna o valor da condição que é false
// podi = true
// console.log (podi && falaoio())

const corUser = null;
const corPadrao = "red";
console.log(corUser || corPadrao); // retorna o valor da condição que é true
