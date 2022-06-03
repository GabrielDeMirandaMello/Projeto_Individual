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

function listar() {
    var id_usuario = sessionStorage.ID_USUARIO
    console.log(id_usuario)
    fetch("/usuarios/listar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idServer: id_usuario
        })
    }).then(function (resposta) {
        console.log(resposta)
    }).catch(function (erro) {
        console.log(erro + 'deu merda')
    })
}

function DadosGrafico() {
    var id_usuario = sessionStorage.ID_USUARIO
    fetch("/dados/listarDados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idServer: id_usuario
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                var total = resposta[0].total_historia;
                sessionStorage.TOTAL_HISTORIA = total
                if (total < 2) {
                    qtd_viagens.innerHTML = "Você Tem Poucas Viagens"
                    qtd_viagens.style.backgroundImage = "linear-gradient(#ce0303, #F2F2F2, #ce0303)"
                } else if (total < 5) {
                    qtd_viagens.innerHTML = "Você Tem Muitas Viagens"
                    qtd_viagens.style.backgroundImage = "linear-gradient(#2dd603, #F2F2F2, #2dd603)"
                } else {
                    qtd_viagens.innerHTML = "Você é Ricoooo !!!!!!!"
                    qtd_viagens.style.backgroundImage = "linear-gradient(#dbd801, #F2F2F2, #dbd801)"
                }
            
            });
        } else {
            throw ('Houve um erro na API!');

        }
    }).catch(function (resposta) {
        console.error(resposta);
    });

}

function CalcularGasto() {
    var km_viagem = input_km_viagem.value
    var km_carro = input_km_carro.value
    var tipo_combustivel = select_tipo_combustivel.value

    
    var gasto_carro = km_viagem / km_carro
    
    var gasto_total_consumo = 0

    if (tipo_combustivel == 1) {
        var gasolina = gasto_carro * 6.93
        gasto_total_consumo = gasolina
    } else if (tipo_combustivel == 2) {
        var alcool = gasto_carro * 4.95
        gasto_total_consumo = alcool
    } else {
        var gnv = gasto_carro * 4.16
        gasto_total_consumo = gnv
    }
    
    gasto_total.innerHTML = ` ${gasto_total_consumo.toFixed(2)}`
}

function limpar() {
    gasto_total.innerHTML = 0
    input_km_viagem.value = ''
    input_km_carro.value = ''
}