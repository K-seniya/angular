(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['menuCategories']
  function SignUpController(menuCategories) {
    var $ctrl = this;

    $ctrl.submit = function (userData) {
      console.log("submit fired. user data -   ", userData);
    }

  }
})();
