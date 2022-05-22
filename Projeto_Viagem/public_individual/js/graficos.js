

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
function grafico1() {
  const labels = [
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

  const data = {
    labels: labels,
    datasets: [{
      label: 'Meu Primeiro Grafico',
      backgroundColor: 'rgb(0,0,205)',
      borderColor: 'rgb(0,0,205)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
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
// grafico epecifico das ferias