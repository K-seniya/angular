(function () {

angular.module('ShoppingListCheckOff', [])

.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController);


function ShoppingListCheckOffService () {
  var service = this;

  var itemsToBuy = ['10 apples', '11 oranges', '15 grapefruits'];
  var boughtItems = [];

  service.getShoppingList = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (index, item) {
    itemsToBuy.splice(index, 1);
    boughtItems.push(item);
  }

};

ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController (ShoppingListCheckOffService) {
  var controller = this;

  controller.getShoppingList = function () {
    return ShoppingListCheckOffService.getShoppingList();
  };

  controller.buy = function (itemIndex, item) {
    ShoppingListCheckOffService.buyItem(itemIndex, item);
  }

};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var controller = this;

  controller.getBoughtItems = function () {
    return ShoppingListCheckOffService.getBoughtItems();
  };
};

})()
