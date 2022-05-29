const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function () {
    navigation.classList.toggle('open')
}

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink))

var nome = sessionStorage.NOME_USUARIO

nomeUsuario.innerHTML = `Olá ${nome}, <br>seja Bem Vindo!`


function DadosGrafico() {
    fetch("/dados/listar").then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                // for (let i = 0; i < resposta.length; i++) {
                //     var publicacao = resposta[i];
                //     console.log(publicacao)
                //     inserir_card.innerHTML += `
                //     <div class="card" style="margin-bottom: 40px;">
                //         <img class="img_background" src="${publicacao.urlImagem}" alt="">
                //         <div class="historia">
                //             <span>${publicacao.descricao}</span><br>
                //             <span>Relado De: <b>${publicacao.nome}</b></span>
                //         </div>
                //     </div>
                //     `
                // }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}