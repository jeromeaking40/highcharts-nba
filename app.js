angular.module('myModule', ['ngRoute']).config(Router)

// Directive for generic chart, pass in chart options
.directive('hcChart', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            options: '='
        },
        link: function(scope, element) {
            Highcharts.chart(element[0], scope.options);
        }
    };
});
Router.$inject = ['$routeProvider'];

function Router($routeProvider) {
    //CONFIGURING ROUTES
    $routeProvider
    .when("/", {
      templateUrl: "/views/points.html"
    })
    .when("/rebounds", {
      templateUrl: "/views/rebounds.html",
      controller: "reboundsCtrl",
      controllerAs: "boards"
    })
    .when("/assists", {
      templateUrl: "/views/assists.html",
      controller: "assistsCtrl",
      controllerAs: "dimes"
    });
}
