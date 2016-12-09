angular.module('YourApp', [ 'ngRoute' ] );

angular.module('YourApp').config(
  ['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/functionality1/', {
        templateUrl: 'js/components/Functionality1/Functionality1View.html',
        controller: 'Functionality1Controller'
      }).
      when('/functionality2/', {
        templateUrl: 'js/components/Functionality2/Functionality2View.html',
        controller: 'Functionality2Controller'
      }).
	  when('/functionality3/', {
        templateUrl: 'js/components/Functionality3/Functionality3View.html',
        controller: 'Functionality3Controller'
      }).
      otherwise({
        redirectTo: '/functionality1/'
      });
  }
  ]

);