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
