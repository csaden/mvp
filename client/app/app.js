angular.module('writelet', [
  'ui.router',
  'writelet.services',
  'writelet.home',
  'writelet.prompt',
  'writelet.createdPrompt',
  'monospaced.elastic',
  'ngFx'
])

.config(function($httpProvider, $stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('');

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
      url: '',
      controller: 'HomeController'
    })
    .state('prompt', {
      templateUrl: 'app/prompt/prompt.html',
      url: '/createPrompt',
      controller: 'PromptController'
    })
    .state('createdPrompt', {
      templateUrl: 'app/createdPrompt/createdPrompt.html',
      url: '/prompt/:shortid',
      controller: 'CreatedPromptController'
    })
    .state('response', {
      templateUrl: 'app/response/response.html',
      url: '/response',
      controller: 'ResponseController'
    });

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    // $httpProvider.interceptors.push('AttachTokens');
});
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
