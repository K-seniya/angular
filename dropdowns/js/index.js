


(function () {
  angular.module('chosenExampleApp', ['localytics.directives'])
  .controller ('IndexCtrl', function ($scope){
    $scope.services = [
     {ServiceID: 15, ServiceName: 'Service1'},
     {ServiceID: 22, ServiceName: 'Service2'},
     {ServiceID: 34, ServiceName: 'Service3'}
   ];
  })
})();
