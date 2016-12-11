(function (){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
var message = "";

$scope.checkIfTooMuch = function () {
  var dishes = $scope.dishes;
  if (dishes) {
    $scope.color = "green";
    if (dishes.split(',').length <= 3) {
      message = "Enjoy!";
    } else {
      message = "Too much!";
    }
  }
  else {
    $scope.color = "red";
    message = "Please enter data first";
  }
};
$scope.getMessage = function () {
  return message;
};

}

})();
