(function () {

angular.module('MenuApp',['ui.router', 'Data']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      template: 'this is home page'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/templates/categories-template-main.html',
      controller: 'MainCategoriesController as mainCategories',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    });
}


})();
