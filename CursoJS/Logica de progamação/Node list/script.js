const paragrafo = document.querySelector(".paragrafos")
const ps = document.querySelectorAll('p')

const estilobody = getComputedStyle(document.body)
const backbody = estilobody.backgroundColor

for(i of ps){
    i.style.backgroundColor = backbody
}