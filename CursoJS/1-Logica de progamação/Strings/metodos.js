let st = "Um texto";

//retorna a posição de t comesando a contar da 4° posição
console.log(st.indexOf('t', 4));
console.log("===================================");
//retorna a posição de t comesando a contar da 3° posição da  direita para a esquerda
console.log(st.lastIndexOf('t', 3));
console.log("===================================");
//troca o texto "um" por "outro"
console.log(st.replace('um', 'outro'));
console.log("===================================");
//retorna toda as letras minusculas de "st"
console.log(st.match(/[a-z]/g));

console.log("===================================");
console.log("===================================");

st = "O rato roeu a roupa do rei de Roma.";
console.log(st.replace(/r/g, '#'));
console.log("===================================");
console.log(st.length);

console.log("===================================");
//mostra a palavra entre a posição 2 e 6
console.log(st.slice(2, 6));
console.log(st.slice(-5, -1))

console.log("===================================");
console.log(st.split(" ", 2))

console.log("===================================");
console.log(st.toUpperCase());
console.log(st.toLowerCase());