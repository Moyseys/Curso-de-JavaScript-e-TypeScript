const relogio = document.querySelector('.relogio')
const btn = document.querySelector('.btn')

function formata (s){
  const data = new Date (segundos * 1000)
  return data.toLocaleTimeString('pt-BR',{
    hoour12: false,
    timeZone:'UTC'
  })
}

let segundos = 0
let pausado = true
let ini

document.addEventListener('click',function (e){
  const el = e.target
  if (el.classList.contains('btn')){
    if(pausado){//iniciado
      clearInterval(ini)
        ini = setInterval(function(){
          relogio.innerHTML = formata(segundos)
          segundos ++
        },1000)
      relogio.classList.remove("pausado")
      pausado = false
      btn.innerHTML = (">")
    }
    else{//pausado
      clearInterval(ini)
      relogio.classList.add("pausado")
      pausado = true
      btn.innerHTML = ("||")
    }
  }
  if(el.classList.contains('zerar')){
    horas = 0 
    minutos = 0
    segundos = 0
    relogio.innerHTML = formata(segundos)
    clearInterval(ini)
    pausado = true
  }
})

