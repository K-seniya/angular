(function () {
  "use strict";

    angular.module('common')
    .service("MyInfoService", MyInfoService);

    function MyInfoService() {
      var service = this;

      service.saveUserData = function (data){
        service.userData = data;
        console.log("User data was saved: ", data);
      }

      service.getUserData = function (data) {
        if (typeof service.userData == "undefined") {
          return {result: false};
        }
        return {result: true, data: service.userData}
      }
    }
})();
