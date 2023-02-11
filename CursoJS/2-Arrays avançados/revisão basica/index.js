let nome = ['Eduardo', 'Maria', 'Joana']
//ou
//const nome02 = new Array ('Eduardo', 'Maria', 'Joana')

delete nome[2]//remove um valor sem alterar as posições dos demais 
console.log(nome)
nome[2] = 'João'

//////////////////////////

const novo = [...nome]

const lixo = novo.pop()//.pop() ou .shift()
console.log(novo)
console.log(nome)
console.log(lixo)

nome.push('Carlos')// .push() ou .unshift()
console.log(nome);


nome = nome.slice(0,-1)
console.log(nome);

let texto = 'Luiz Otavio miranda'
texto = texto.split(' ')
console.log(texto);

texto = texto.join(' ')
console.log(texto);