function proximo() {
    etapa0.style.display = "none"
    etapa1.style.display = ""
    
}
function VoltarInicio() {
    etapa0.style.display = ""
    etapa1.style.display = "none"
}
function cadastro() {
    Swal.fire({
        toast:true,
        position: 'top-end',
        icon: 'success',
        title: 'Cadastro efetuado com sucesso !',
        showConfirmButton: true
      })
}
function cadastrar() {
    var nome = inputNome.value
    var email = inputEmail.value
    var telefone = inputTelefone.value
    var senha = inputSenha.value
    var combo = ComboBox.value
    var combo1 = ComboBox1.value
    var combo2 = ComboBox2.value
    

    if (nome == 0 && email == 0 && telefone == 0 && senha == 0) {
        Swal.fire({
            toast:true,
            position: 'top-end',
            icon: 'error',
            title: 'Cadastro não efetuado, Verifique os campos e digite novamente !', 
            showConfirmButton: true
          })
    } else {
        Swal.fire({
            toast:true,
            position: 'top-end',
            icon: 'success',
            title: 'Cadastro efetuado com sucesso !',
            showConfirmButton: true
          })
        setTimeout(function () {
            window.location = "../dashboard/dashboard.html";
        }, 1000);
    }



}