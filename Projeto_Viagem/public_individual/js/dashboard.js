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
    fetch("/dados/listarDados").then(function (resposta) {
        console.log(resposta)
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                console.log('Cai aqui na dashboard' + resposta)
                var total = resposta[0].total_historia;
                sessionStorage.TOTAL_HISTORIA = total
                if (total <= 5) {
                    qtd_viagens.innerHTML = "Você Tem Poucas Viagens"
                } else if (total <= 10) {
                    qtd_viagens.innerHTML = "Você Tem Muitas Viagens"
                } else {
                    qtd_viagens.innerHTML = "Você é Rico"
                }
            
            });
        } else {
            throw ('Houve um erro na API!');

        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}