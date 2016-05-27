angular.module('AirDrop', [
  'AirDrop.console',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/console', {
      templateUrl: 'app/modules/console/console.html',
      controller: 'ConsoleController'
    })
    .otherwise({redirectTo: '/console'})
})
