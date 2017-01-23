angular.module('myModule').controller('reboundsCtrl', reboundsController);

function reboundsController() {
    var boards = this;

    boards.chartOptions = {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Rebounds Per Game Leaders'
      },
      xAxis: {
          categories: ['RPG']
      },
      yAxis: {
          title: {
              text: 'Rebounds'
          }
      },
      series: [
          {
              name: 'Whiteside',
              data: [14.2]
          }, {
              name: 'DeAndre',
              data: [13.9]
          }, {
              name: 'Drummond',
              data: [13.5]
          }
      ]
  };


// END OF CONTROLLER
}
