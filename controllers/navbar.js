angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth,$http,localStorageService) {
      console.log("Navbar calling");
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    }
     var token = window.localStorage.satellizer_token;
     console.log(token);
     // console.log("After");
     //  var Type = localStorageService.getStorageType();
     //
     //  console.log("type ="+Type);
     //  localStorageService.set('abc',"sharad");
     // console.log(localStorageService.get('abc'));
     //  var eKey=localStorageService.get('satellizer_token');
     // console.log(eKey);

    $http({
        method:"GET",
        url:"https://staging.ekincare.com/v1/core/packages/",
        headers:{"X-EKINCARE-KEY":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdGFmZl9pZCI6NDEsImlzc3VlX2RhdGUiOiIyMDE2LTEyLTI4IDEyOjQyOjU2ICswNTMwIiwiZXhwIjoxNDgyOTk1NTc2fQ.1jahOIvar_O8mTr3Kr0DShMHfYNTyfwru2E-fFep7mU"}
    }).then(function (data) {
        console.log(data);

    })

  });
