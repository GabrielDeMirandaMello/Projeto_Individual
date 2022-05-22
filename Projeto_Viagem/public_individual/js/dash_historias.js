function enviarHistoria() {
    var nome = input_nome.value
    var urlImagen = input_imagem.value

    if (nome.length == 0 && urlImagen.length == 0) {
        input_imagem.style.borderColor = "red"
        input_nome.style.borderColor = "red"
        historia_texto.style.borderColor = "red"
    }
    else {
        input_imagem.style.borderColor = ""
        input_nome.style.borderColor = ""
        historia_texto.style.borderColor = ""
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'success',
            title: 'Cadastro efetuado com sucesso !',
            showConfirmButton: false,
            timer: 2000
        })
    }

    
}