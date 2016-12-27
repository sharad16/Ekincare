angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr,$state) {
    var config = {method: 'POST',url: 'https://staging.ekincare.com/v1/core/login'};
    $scope.login = function() {
      $auth.login($scope.user,  config)
        .then(function(data) {
            console.log(data.headers()['x-ekincare-key']);
          toastr.success('You have successfully signed in!');
          // $location.path('/home');
            $state.go("main.home");
          console.log('hello');
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };

  });
