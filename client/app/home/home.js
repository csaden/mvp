angular.module('writelet.home', [])

.controller('HomeController', function HomeController($scope) {

  $scope.promptHelp = false;

  $scope.togglePromptHelp = function() {
    $scope.promptHelp = !$scope.promptHelp;
  };

});
