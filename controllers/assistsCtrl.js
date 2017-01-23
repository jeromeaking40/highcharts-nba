angular.module('myModule').controller('assistsCtrl', assistsController);

function assistsController() {
    var dimes = this;

    dimes.chartOptions = {
        colors: [
            '#DDDF0D',
            '#55BF3B',
            '#DF5353',
            '#7798BF',
            '#aaeeee',
            '#ff0066',
            '#eeaaee',
            '#55BF3B',
            '#DF5353',
            '#7798BF',
            '#aaeeee'
        ],
        chart: {
            backgroundColor: {
                linearGradient: [
                    0, 0, 250, 500
                ],
                stops: [
                    [
                        0, 'rgb(48, 96, 48)'
                    ],
                    [1, 'rgb(0, 0, 0)']
                ]
            },
            borderColor: '#000000',
            borderWidth: 2,
            className: 'dark-container',
            plotBackgroundColor: 'rgba(255, 255, 255, .1)',
            plotBorderColor: '#CCCCCC',
            plotBorderWidth: 1,
            type: 'bar'
        },
        title: {
            style: {
                color: '#C0C0C0',
                font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
            },
            text: 'Assists Per Game Leaders'
        },

        subtitle: {
            style: {
                color: '#666666',
                font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
            }
        },
        xAxis: {
            gridLineColor: '#333333',
            gridLineWidth: 1,
            labels: {
                style: {
                    color: '#A0A0A0'
                }
            },
            lineColor: '#A0A0A0',
            tickColor: '#A0A0A0',
            title: {
                style: {
                    color: '#CCC',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif'

                }
            },
            categories: ['APG']
        },
        yAxis: {
            gridLineColor: '#333333',
            gridLineWidth: 1,
            labels: {
                style: {
                    color: '#A0A0A0'
                }
            },
            lineColor: '#A0A0A0',
            tickColor: '#A0A0A0',
            title: {
                style: {
                    color: '#CCC',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    fontFamily: 'Trebuchet MS, Verdana, sans-serif',
                },
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
