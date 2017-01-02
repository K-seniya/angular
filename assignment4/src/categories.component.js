(function () {
  'use strict';

  angular.module('Data')
  .component('categoriesComponent', {
    templateUrl: 'src/templates/categoryListTemplate.html',
    bindings: {
      categories: '<'
    }
  });

})();
