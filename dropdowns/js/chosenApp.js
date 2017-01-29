angular.module('Chosen', [])
.controller('MainCtrl', function($scope) {
  var main = this;

  $scope.serviceOptions = [
   {id: 15, name: 'Service1'},
   {id: 22, name: 'Service2'},
   {id: 34, name: 'Service3'}
 ];


})
.directive('chosen', function () {
  var linker = function (scope, element, attr){
    scope.$watch('serviceOptions', function (oldVal, newVal){
      console.log("serviceOptions: oldVal, newVal: " ,oldVal, newVal);
      element.trigger('chosen:updated');
    });
    scope.$watch(attr.chosen, function(oldVal, newVal) {
         console.log("oldVal, newVal: " ,oldVal, newVal);
         element.trigger('chosen:updated');
     });
      element.chosen();
  }

  return {
    restrict:'A',
    link: linker

  }
})
