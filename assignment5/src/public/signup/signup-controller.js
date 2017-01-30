(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['MenuService', 'MyInfoService']
  function SignUpController(menuService, myInfoService) {
    var $ctrl = this;
    var menuItem;

    $ctrl.submit = function (userData) {
      $ctrl.confirmationMessage = null;
      myInfoService.saveUserData(menuItem, userData);
      $ctrl.confirmationMessage = "Your information have been saved";
    };

    $ctrl.validateMenuItem = function (element) {
      menuService.getMenuItemByShortName($ctrl.user.menuItem).then(
        function(response){
          menuItem = response.data;
          $ctrl.signUpForm.menuItem.$setValidity("menuItem", true);
        },
        function(){
          $ctrl.signUpForm.menuItem.$setValidity("menuItem", false);
        }
      )
    }

  }
})();
