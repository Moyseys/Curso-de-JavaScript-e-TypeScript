function Calculadora(){
    this.display = document.querySelector('.display')

    this.iniciar = function(){
        this.toque()
        this.enter()
        //this.backSpace()
    }
    
    this.toque = () => {
        document.addEventListener('click', (e) => {
            let el = e.target

            if(el.classList.contains('btn-num')) this.adicionaDisplay(el.innerText)
            if(el.classList.contains('btn-eq')) this.adicionaDisplay(this.realizaConta())
            this.display.focus()
        })
    }

    this.enter = () =>{
        this.display.addEventListener('keyup', (e) =>{
            if(e.keyCode === 13 ) this.adicionaDisplay(this.realizaConta())            
        })
    }

    this.adicionaDisplay = (value) =>{
        try {
            if(!value){
                alert('conta inválida')
                return 
            }
            this.display.value += value 
            return
        } catch (error) {
            return
        }
    }

    this.realizaConta = function (){
        let conta = this.display.value
        try {
            conta = eval(conta)
            if(!conta){
                alert('conta inválida')
                return 
            }
            this.display.value = ''
            return String(conta)
            
        } catch (e) {
            return alert('conta inválida')
        }
    }
}

const Cal1 = new Calculadora
Cal1.iniciar()