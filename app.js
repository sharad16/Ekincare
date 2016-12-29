angular.module('MyApp', [ 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer','LocalStorageModule'])
  .config(function($stateProvider, $urlRouterProvider) {

    /**
     * Helper auth functions
     */
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
          controller: "HomCntrl",

          resolve: {
                  loginRequired: loginRequired
                }
      })

      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      })
      .state('Cal', {
          url: '/Cal',
          controller: 'calendarCntrl',
          templateUrl: 'partials/Calndar.html'
      });

  });
