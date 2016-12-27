angular.module('MyApp', [ 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer'])
  .config(function($stateProvider, $urlRouterProvider) {

    /**
     * Helper auth functions
     */
    // $auth.authenticate('ekincareLogin',{url: '/core/login',authorizationEndpoint: 'https://staging.ekincare.com/v1/core/login',redirectUri: window.location.href});
    var skipIfLoggedIn = ['$q', '$auth', function($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }];

    /**
     * App routes
     */
     $urlRouterProvider.otherwise("/main/home");
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl',
            resolve: {
                 skipIfLoggedIn: skipIfLoggedIn
             }
        })
        .state('main',{
            url: "/main",
            templateUrl:"partials/Navbar.html",
            controller: "NavbarCtrl"
        })
      .state('main.home', {
        url: '/home',
        templateUrl: 'partials/home.html',

          resolve: {
                  loginRequired: loginRequired
                }
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        // resolve: {
        //   skipIfLoggedIn: skipIfLoggedIn
        // }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      });

  });
