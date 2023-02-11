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
        if(camposValidos && senhasValidas){
            alert('Enviado');
            this.form.submit()
        }
        
    }
    senhasSaoValidas(){
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
        let valid = true
        if(senha !== repetirSenha){
            this.criaErro(repetirSenha,'senhas não batem');
            valid = false;
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
          }
          return valid
    }
    camposSaoValidos(){
        let valid = true;
        const els = document.querySelectorAll('.validar')
        for(let error of  document.querySelectorAll('.error')){
            error.remove()
        }
        for(let v of els){
            const label = v.previousElementSibling.innerText;
            if(v.value === ""){
                this.criaErro(v,`Campo "${label}" vazio`);
                valid = false;
            }
            if(v.classList.contains('cpf')){
                if(!this.validaCpf(v)) valid = false;
            }
            if(v.classList.contains('usuario')){
                if(!this.validaUsuario(v)) valid = false;
            }
        }
        
        return valid
    }

    senhasSaoValidas(){
        return true
    }

    validaUsuario(campo){
        const vl = campo.value;
        let valid = true;
        if(vl.length > 12 || vl.length < 3){
            this.criaErro(campo,'nome deve ter entre 3 e 12 caracteres ');
            valid = false;
        }

        if(!vl.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
            valid = false;
        }
        return valid
    }

    validaCpf(campo){
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valida()){
            console.log('ol');
            this.criaErro(campo,'Cpf invalido');
            return false;
        }
        return true;
    }

    criaErro(campo,msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error');
        campo.insertAdjacentElement('afterend', div);
    }
}

const f1 = new Formulario();

