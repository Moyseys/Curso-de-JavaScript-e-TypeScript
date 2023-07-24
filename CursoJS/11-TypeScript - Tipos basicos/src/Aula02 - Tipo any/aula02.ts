//Somente utilizar o tipo any em últimos casos
function showMessage(msg: any) {
  return msg;
}
console.log(showMessage(1));
console.log(showMessage(true));
console.log(showMessage('string'));
console.log(showMessage([1, 2, 3]));
