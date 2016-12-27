angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth) {
      console.log("Navbar calling");
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });
