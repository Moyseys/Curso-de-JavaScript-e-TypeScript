import GeraCpf from './modules/GeraCpf'

import './assets/css/style.css';

(function(){
    const cpf = new GeraCpf();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = cpf.gera()
})();