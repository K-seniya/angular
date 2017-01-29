(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['MenuService', 'MyInfoService']
  function SignUpController(menuService, myInfoService) {
    var $ctrl = this;

    $ctrl.submit = function (userData) {
      $ctrl.confirmationMessage = null;
      $ctrl.signUpForm.menuItem.$setValidity("menuItem", true);
      menuService.getMenuItemByShortName(userData.menuItem).then(
        function(response){
          var result = response.data;
          myInfoService.saveUserData(result);
          $ctrl.confirmationMessage = "Your information have been saved";
        },
        function(){
          $ctrl.signUpForm.menuItem.$setValidity("menuItem", false);
        }
      )
    }

  }
})();
