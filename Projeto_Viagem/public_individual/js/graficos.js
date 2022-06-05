var total_viagens_usuario = Number(sessionStorage.TOTAL_HISTORIA)
var total_viagens_site = Number(sessionStorage.TOTAL_SITE)

function dateBuilder(d) {
  let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  let day = days[d.getDay()]; //pegar dia: 0-6
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${month}`;
}

function dados() {
  
  
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

        if (total < 3) {
          qtd_viagens.innerHTML = "Você Tem Poucas Viagens"
          qtd_viagens.style.backgroundImage = "linear-gradient(#ce0303, #F2F2F2, #ce0303)"
        } else if (total < 6) {
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
function AtualizarGrafico() {

  fetch("/dados/AtualizarDados").then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then(function (resposta) {
        var total = resposta[0].total_historia;
        console.log(total)
        sessionStorage.TOTAL_SITE = total
        setTimeout(() => {
          AtualizarGrafico()
        }, 2000);
      });
    } else {
      throw ('Houve um erro na API!');

    }
  }).catch(function (resposta) {
    console.error(resposta);
  });

}
function grafico1() {
  
  let now = new Date();
  var mes = dateBuilder(now);
  
  const labels = [
    `${mes}`
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Historias',
      backgroundColor: 'blue',
      borderColor: 'rgb(0,0,205)',
      data: [total_viagens_usuario]
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 10
          }
      },
      plugins: {
        tooltip: {
          usePointStyle: true
        }
      }
    }
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}


function grafico2() {
  const data = {
    labels: [
      'Viagens do site em %',
      'Suas Viagens em %'
    ],
    datasets: [{
      label: '',
      data: [
        `${(((total_viagens_site - total_viagens_usuario) / total_viagens_site) * 100).toFixed(2)}`,
        `${((total_viagens_usuario / total_viagens_site) * 100).toFixed(2)}`
      ],
      backgroundColor: [
        'rgb(0, 255, 0)',
        'rgb(0, 0, 255)'
      ],
      hoverOffset: 4
    }]
  };
  const config = {
    type: 'pie',
    data: data,
  };
  const myChart = new Chart(
    document.getElementById('myChart2'),
    config
  );
  
}




