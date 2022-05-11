
function ValidarEmail() {
    var email = inputEmail.value

    if (email.indexOf('@') == -1) {
        inputEmail.style.borderColor = 'red'
        inputEmail.style.animation = 'erro 300ms'
        emailInvalido.style.color = 'red'
        emailInvalido.innerHTML = 'Email sem o "@"'
    }else {
        inputEmail.style.borderColor = 'black'
        emailInvalido.innerHTML = ''
        inputEmail.style.animation = ''
    }
}
function ValidarSenha() {
    var senha = inputSenha.value

    if (senha.length < 7) {
        inputSenha.style.borderColor = 'red'
        inputSenha.style.animation = 'erro 300ms'
        senhaInvalida.style.color = 'red'
        senhaInvalida.innerHTML = `Senha Com Menos de 8 Caracteres`
    } else {
        inputSenha.style.borderColor = 'black'
        senhaInvalida.innerHTML = ''
        inputSenha.style.animation = ''
    }
}