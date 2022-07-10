let btn = document.querySelector('#verSenha');
let btn2 = document.querySelector('#verConfirmarSenha');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#label-nome');
let validNome = false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#label-email');
let validEmail = false;

let confirmarEmail = document.querySelector('#confirmacao-email');
let labelConfirmarEmail = document.querySelector('#label-confirmar-email');
let validConfirmarEmail = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#label-senha');
let validSenha = false;

let confirmarSenha = document.querySelector('#confirmacao-senha');
let labelConfirmarSenha = document.querySelector('#label-confirmar-senha');
let validConfirmarSenha = false;

let msgErro = document.querySelector('#msgErro');
let msgSucesso = document.querySelector('#msgSucesso');

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
})

btn2.addEventListener('click', () => {
    let inputConfirmarSenha = document.querySelector('#confirmacao-senha');

    if (inputConfirmarSenha.getAttribute('type') == 'password') {
        inputConfirmarSenha.setAttribute('type', 'text');
    } else {
        inputConfirmarSenha.setAttribute('type', 'password');
    }
})

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = '*Insira no minimo 3 caracteres*';
    } else {
        labelNome.setAttribute('style', 'color: white');
        labelNome.innerHTML = 'Nome completo:';
        validNome = true;
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length > 0 && email.value.length <= 4) {
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = '*Insira no minimo 5 caracteres*';
    } else {
        labelEmail.setAttribute('style', 'color: white');
        labelEmail.innerHTML = 'E-mail:';
        validEmail = true;
    }
})

confirmarEmail.addEventListener('keyup', () => {
    if (email.value != confirmarEmail.value) {
        labelConfirmarEmail.setAttribute('style', 'color: red');
        labelConfirmarEmail.innerHTML = '*E-mails não conferem*';
    } else {
        labelConfirmarEmail.setAttribute('style', 'color: white');
        labelConfirmarEmail.innerHTML = 'Confirme seu e-mail:';
        validConfirmarEmail = true;
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length > 0 && senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = '*Insira no minimo 6 caracteres*';
    } else {
        labelSenha.setAttribute('style', 'color: white');
        labelSenha.innerHTML = 'Senha:';
        validSenha = true;
    }
})

confirmarSenha.addEventListener('keyup', () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmarSenha.setAttribute('style', 'color: red');
        labelConfirmarSenha.innerHTML = '*Senhas não conferem*';
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: white');
        labelConfirmarSenha.innerHTML = 'Confirme sua senha:';
        validConfirmarSenha = true;
    }
})

function cadastrar() {
    if (validNome && validEmail && validConfirmarEmail && validSenha && validConfirmarSenha) {
        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');

        listaUsuario.push({
            nomeCadastrado: nome.value,
            emailCadastrado: email.value,
            senhaCadastrada: senha.value
        });

        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));

        msgSucesso.setAttribute('style', 'display: block');
        msgSucesso.innerHTML = '<strong> Cadastro efetuado com sucesso. </strong>';
        msgErro.setAttribute('style', 'display: none');
        msgErro.innerHTML = '';

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000)

    } else {
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<strong> Preencha todos os dados corretamente. </strong>';
        msgSucesso.setAttribute('style', 'display: none');
        msgSucesso.innerHTML = '';
    }
}