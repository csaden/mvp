angular.module('writelet.prompt', [])

.controller('PromptController', function PromptController($scope, $location, Prompt) {
  $scope.prompt = {};
  $scope.loading = false;

  $scope.addPrompt = function () {
    $scope.loading = true;
    Prompt.addPrompt($scope.prompt)
      .then(function(prompt) {
        $scope.loading = false;
        $location.path('/prompt/' + prompt.shortid);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
});
