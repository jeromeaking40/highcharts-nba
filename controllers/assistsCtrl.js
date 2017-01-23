angular.module('myModule').controller('assistsCtrl', assistsController);

function assistsController() {
    var dimes = this;

    dimes.chartOptions = {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Assists Per Game Leaders'
      },
      xAxis: {
          categories: ['APG']
      },
      yAxis: {
          title: {
              text: 'Assists'
          }
      },
      series: [
          {
              name: 'Harden',
              data: [11.6]
          }, {
              name: 'Westbrook',
              data: [10.4]
          }, {
              name: 'Wall',
              data: [10.2]
          }
      ]
  };


// END OF CONTROLLER
}
