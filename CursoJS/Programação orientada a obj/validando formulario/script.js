class Formulario{
    constructor(){
        this.form = document.querySelector('.formulario');
        this.evento();
    }

    evento(){
        this.form.addEventListener('submit', e => {
            this.handleSubimit(e);
        });
    }

    handleSubimit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        camposValidos && senhasValidas ? alert('true') :alert('false')
        
    }

    camposSaoValidos(){
        const valid = true;
        const els = document.querySelectorAll('.validar')
        for(let v of els){
            if(v.value === ""){
                this.criaErro(v,'Campo vazio')
            }
        }
        
        return valid
    }

    senhasSaoValidas(){
        return true
    }

    criaErro(campo,msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error');
        campo.insertAdjacenteElement('afterend', div);
    }
}

const f1 = new Formulario();

