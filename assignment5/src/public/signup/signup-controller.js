(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['MenuService']
  function SignUpController(menuService) {
    var $ctrl = this;

    $ctrl.submit = function (userData) {
      console.log("submit fired. user data -   ", userData);
      menuService.getMenuItemByShortName(userData.menuItem).then(
        function(response){
          return {status:true, data: response.data}
        },
        function(){
          // $ctrl.signUpForm.menuItem.$invalid=true;
        }
      )
    }

  }
})();
