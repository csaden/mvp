angular.module('writelet.prompt', [])

.controller('PromptController', function PromptController($scope, $location, Prompts) {
  $scope.prompt = {};
  $scope.loading = false;

  $scope.addPrompt = function () {
    $scope.loading = true;
    Prompts.addPrompt($scope.prompt)
      .then(function(prompt) {
        $scope.loading = false;
        $location.path('/');
      })
      .catch(function(error) {
        console.log(error);
      });
  };
});
