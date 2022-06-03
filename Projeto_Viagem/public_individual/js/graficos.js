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
// Grafico dos messes

var total_viagens = sessionStorage.TOTAL_HISTORIA

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
      backgroundColor: 'rgb(0,0,205)',
      borderColor: 'rgb(0,0,205)',
      data: [total_viagens],
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
// grafico epecifico das ferias




