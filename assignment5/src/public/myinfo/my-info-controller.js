(function () {
  "use strict";

  angular.module('public').
  controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$scope', 'MyInfoService']
  function MyInfoController ($scope, myInfoServise) {
    var ctrl = this;
    ctrl.isUserRegistered;
    ctrl.userData;
    getUserData();

    function getUserData() {
      var userData = myInfoServise.getUserData();
      if(!userData.result) {
        ctrl.isUserRegistered = false;
      } else {
        ctrl.isUserRegistered = true;
        ctrl.userData = userData.data;
      }

    };


  }




})();
