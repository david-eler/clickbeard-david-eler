let admLogado = JSON.parse(localStorage.getItem('admLogado'));

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('admLogado');
    window.location.href = 'index.html';
}