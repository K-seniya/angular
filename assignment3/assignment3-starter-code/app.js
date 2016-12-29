(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController',NarrowItDownController)
  .controller('FoundItemsController', FoundItemsController)
  .service('MenuSearchService',MenuSearchService)
  .directive('itemDescription', ItemDescription)
  .directive('foundItems', FoundItems)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


  NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
      var menu = this;

      menu.getMatchedMenuItems = function() {
        var promise = MenuSearchService.getMenuItems();
        promise.then(function (response){
          var allItems = response.data;

          menu.matchedItems = getMatchedItems(allItems.menu_items, menu.searchText);
        })
        .catch(function (error){
          console.log("MenuSearchService.getMatchedMenuItems() failed");
        });
      };

      menu.removeItem = function(itemIndex){
        menu.matchedItems.splice(itemIndex, 1);
      };

      function getMatchedItems (menuItems, searchTerm) {
        var result = [];
        for (var key in menuItems) {
          if (menuItems.hasOwnProperty(key)){
            if (menuItems[key].description.indexOf(searchTerm) !== -1){
              result.push(menuItems[key]);
            }
          }
        }
        return result;
      };

    };

MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService ($http, ApiBasePath) {
    var service = this;

    service.getMenuItems = function () {
      var response  = $http({
        method: "GET",
        url : (ApiBasePath + "/menu_items.json")
      });
      return response;
    };
  };

  function ItemDescription () {
    var ddo = {
      template: 'name: {{item.name}}. description: {{item.description}}'
    };
    return ddo;
  };

  function FoundItems () {
    var ddo = {
      restrict: 'E',
      scope: {
        items: "<foundItems",
        removeItem: "&onRemove"
      },
      templateUrl: 'foundItems.html',
      controller: 'FoundItemsController as itemList',
      bindToController: true
    };
    return ddo;
  };

  function FoundItemsController () {
    var itemList = this;
  }


})()
