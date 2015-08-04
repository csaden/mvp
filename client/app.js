angular.module('writelet', [
  'ui.router',
  'writelet.services',
  'writelet.home',
  'writelet.prompt',
  'ngFx'
])

.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
  // pass in $routeProvider for this code
  // $routeProvider
  //   .when('/signin', {
  //     templateUrl: 'app/auth/signin.html',
  //     controller: 'AuthController'
  //   })
  //   .when('/signup', {
  //     templateUrl: 'app/auth/signup.html',
  //     controller: 'AuthController'
  //   })
  //   .when('/signout', {
  //     templateUrl: 'app/auth/signout.html',
  //     controller: 'AuthController'
  //   })
  //   .when('/links', {
  //     templateUrl: 'app/links/links.html',
  //     controller: 'LinksController'
  //   })
  //   .when('/shorten', {
  //     templateUrl: 'app/shorten/shorten.html',
  //     controller: 'ShortenController'
  //   })
  //   .otherwise({
  //     redirectTo: '/links'
  //   });

  $urlRouterProvider.otherwise('/writelet');

  $stateProvider
    // .state('signin', {
    //   templateUrl: 'app/auth/signin.html',
    //   url: '/signin',
    //   controller: 'AuthController'
    // })
    // .state('signup', {
    //   templateUrl: 'app/auth/signup.html',
    //   url: '/signup',
    //   controller: 'AuthController'
    // })
    // .state('signout', {
    //   templateUrl: 'app/auth/signout.html',
    //   url: '/signout',
    //   controller: 'AuthController'
    // })
    .state('home', {
      templateUrl: 'app/home/home.html',
      url: '/writelet',
      controller: 'HomeController'
    })
    .state('prompt', {
      templateUrl: 'app/prompt/prompt.html',
      url: '/createPrompt',
      controller: 'PromptController'
    })
    .state('respond', {
      templateUrl: 'app/respond/respond.html',
      url: '/respond',
      controller: 'ResponseController'
    });

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    // $httpProvider.interceptors.push('AttachTokens');
})

//.controller('PromptController', function PromptController($scope, $location, Prompts) {
.controller('PromptController', function PromptController($scope, $location) {
  $scope.prompt = {};
  $scope.loading = false;
  $scope.promptHelp = false;

  // $scope.togglePromptHelp = function() {
  //   $scope.promptHelp = !$scope.promptHelp;
  //   console.log($scope.promptHelp);
  // };

  // $scope.addPrompt = function () {
  //   $scope.loading = true;
  //   Prompts.addPrompt($scope.prompt)
  //     .then(function(prompt) {
  //       $scope.loading = false;
  //       $location.path('/');
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };
});


// .controller('PromptController', function PromptController($scope, $location, Prompts) {
//   $scope.prompt = {};
//   $scope.loading = false;
//   $scope.promptHelp = false;

//   $scope.togglePromptHelp = function() {
//     $scope.promptHelp = !$scope.promptHelp;
//     console.log($scope.promptHelp);
//   };

//   $scope.addPrompt = function () {
//     $scope.loading = true;
//     Prompts.addPrompt($scope.prompt)
//       .then(function(prompt) {
//         $scope.loading = false;
//         $location.path('/');
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   };
// });
// .factory('AttachTokens', function ($window) {
//   // this is an $httpInterceptor
//   // its job is to stop all out going request
//   // then look in local storage and find the user's token
//   // then add it to the header so the server can validate the request
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.shortly');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })
// .run(function ($rootScope, $location, Auth) {
//   // here inside the run phase of angular, our services and controllers
//   // have just been registered and our app is ready
//   // however, we want to make sure the user is authorized
//   // we listen for when angular is trying to change routes
//   // when it does change routes, we then look for the token in localstorage
//   // and send that token to the server to see if it is a real user or hasn't expired
//   // if it's not valid, we then redirect back to signin/signup
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
//       $location.path('/signin');
//     }
//   });
// });