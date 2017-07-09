var myApp = angular.module('myApp', ['ngRoute']);
console.log('js/ng');

vm = this;

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    // .when('/', {
    //   templateUrl: 'index.html',
    //   controller: 'IndexController as IC'
    // })
    .when('/create', {
      templateUrl:'views/create.html',
      controller: 'CreateController as CC'
    })
    .when('/develope', {
      templateUrl:'views/develope.html',
      controller: 'DevelopeController as AC'
    })
    .when('/connect', {
      templateUrl:'views/contact.html',
      controller: 'ConnectController as TC'
    })
    .otherwise({
      redirectTo:'/'
    });//end config
}]);//end module
