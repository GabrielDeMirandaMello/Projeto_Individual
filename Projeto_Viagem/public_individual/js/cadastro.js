function proximo() {
    etapa0.style.display = "none"
    etapa1.style.display = ""
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