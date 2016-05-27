/**
 * 
 * AirDrop for Everyone
 * @description           A simple port of the OSX's airdrop file sharing feature, only decentralized and for everyone.
 * @author                Andy <email-goes-here>, Scott <email-goes-here>, Erik <email-goes-here>, Rex Kelly <rexfordkelly@gmail.com>
 * @url                   https://github.com/rexfordkelly-on-makersquare/AirDrop.git
 * @version               0.0.1
 * 
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('AirDrop', [
      'ngRoute'
    ])
    .config(config);

  /**
    To prevent minification issues we need to follow the 
    "Minification-safe Declaration" style of coding.
    ref: http://thegreenpizza.github.io/2013/05/25/building-minification-safe-angular.js-applications/

  */
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/setup', {
        templateUrl: 'views/setup.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   */
  angular
    .module('AirDrop')
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$location'];

  function authInterceptor() {
    // GitHub Authentication Goes Here
  }


  /**
   * Run block
   */
  angular
    .module('AirDrop')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();