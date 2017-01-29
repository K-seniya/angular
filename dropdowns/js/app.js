(function () {
  "use strict";

  angular.module("TestApp", ['localytics.directives'])
  .controller("TestController", TestController);

  TestController.$inject = ['$scope']
  function TestController($scope) {

  $scope.services = [
   {ServiceID: 15, ServiceName: 'Service1'},
   {ServiceID: 22, ServiceName: 'Service2'},
   {ServiceID: 34, ServiceName: 'Service3'}
 ];
  }
})();
