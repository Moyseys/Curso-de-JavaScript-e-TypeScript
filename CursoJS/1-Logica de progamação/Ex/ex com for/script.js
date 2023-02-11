let cont = document.querySelector('.cont')
const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'footer', texto: 'Frase 2'},
    {tag:'div', texto: 'Frase 3'},
    {tag:'section', texto: 'Frase 4'},
]
const tags = []

for(let i = 0; i < elementos.length; i++){ 
    let {tag,texto} = elementos[i]
    const el = document.createElement(tag)
    const text = document.createTextNode(texto)
    el.appendChild(text)
    cont.appendChild(el)
}
