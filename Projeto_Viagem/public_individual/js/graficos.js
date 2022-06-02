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
  var option = valor_viagem.value
  var select = []
  var valores =[]

  if (option == 1) {
    select.push('Fernado de Noronha (RJ)', 'Copacabana (RJ)')
    valores.push('118.214', '327.214')
    
    var labels2 = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ];
  
  
    var config2 = {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Visitantes',
          backgroundColor: 'rgb(0,0,205)',
          data: [{ id: select[0], nested: { value: valores[0] } }, { id: select[1], nested: { value: valores[1] } }]
        }]
      },
      options: {
        parsing: {
          xAxisKey: 'id',
          yAxisKey: 'nested.value'
        }
      }
    }
    var myChart2 = new Chart(
      document.getElementById('myChart2'),
      config2
    );
  } else if (option == 2) {
    select.push('Beto Carrero World (SC)', 'Beach Park (CE)')
    valores.push('16.214', '327.214')
    var labels2 = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ];
  
  
    var config2 = {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Visitantes',
          backgroundColor: 'rgb(0,0,205)',
          data: [{ id: select[0], nested: { value: valores[0] } }, { id: select[1], nested: { value: valores[1] } }]
        }]
      },
      options: {
        parsing: {
          xAxisKey: 'id',
          yAxisKey: 'nested.value'
        }
      }
    }
    var myChart2 = new Chart(
      document.getElementById('myChart2'),
      config2
    );

  } else if (option == 3) {
    select.push('Fortaleza (CE)', 'Porto Seguro (BA)')
    valores.push('56.214', '327.214')
    var labels2 = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ];
  
  
    var config2 = {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Visitantes',
          backgroundColor: 'rgb(0,0,205)',
          data: [{ id: select[0], nested: { value: valores[0] } }, { id: select[1], nested: { value: valores[1] } }]
        }]
      },
      options: {
        parsing: {
          xAxisKey: 'id',
          yAxisKey: 'nested.value'
        }
      }
    }
    var myChart2 = new Chart(
      document.getElementById('myChart2'),
      config2
    );
  }
  
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
      label: 'Meu Primeiro Grafico',
      backgroundColor: 'rgb(0,0,205)',
      borderColor: 'rgb(0,0,205)',
      data: [total_viagens],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
}
// grafico epecifico das ferias
function grafico2() {

}
// pegar datas do javaScript




