(function () {
  "use strict";

    angular.module('common')
    .service("MyInfoService", MyInfoService);

    function MyInfoService() {
      var service = this;

      service.saveUserData = function (foodData, userData){
        service.userData = {menuItemData: foodData, personalData: userData};
      }

      service.getUserData = function (data) {
        if (typeof service.userData == "undefined") {
          return {result: false};
        }
        return {result: true, data: service.userData}
      }
    }
})();
