(function(){
  'use strict';

  angular.module('Data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
  function MenuDataService ($q, $http, ApiBasePath) {
    var data = this;

    data.getAllCategories = function(){
      var deferred = $q.defer();
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });

      deferred.resolve(response);
      return deferred.promise;

    };

    data.getItemsForCategory = function(categoryShortName){
      var deferred = $q.defer();
      var response = $({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });
      deferred.resolve(response);
      return deferred.promise;
    };
  }
})();
