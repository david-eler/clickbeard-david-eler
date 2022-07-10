let btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha");

    if (inputSenha.getAttribute("type") == "password") {
        inputSenha.setAttribute("type", "text");
    } else {
        inputSenha.setAttribute("type", "password");
    }
});

function entrar() {
    let email = document.querySelector("#email");
    let labelEmail = document.querySelector("#label-email");

    let senha = document.querySelector("#senha");
    let labelSenha = document.querySelector("#label-senha");

    let msgErro = document.querySelector("#msgErro");
    let listaAdm = [];

    listaAdm = JSON.parse(localStorage.getItem("listaAdm"));

    let userValid = listaAdm.find(
        item => email.value == item.emailCadastrado && senha.value == item.senhaCadastrada
    );

    if (userValid != undefined) {
        window.location.href = "adm-area.html";
        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom;
        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else {
        msgErro.setAttribute("style", "display: block");
        msgErro.innerHTML = "<strong> E-mail e/ou senha inválidos. </strong>";
    }
}