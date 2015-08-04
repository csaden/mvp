angular.module('writelet.prompt', [])

.controller('PromptController', function PromptController($scope, $location, Prompt) {
  $scope.prompt = {};
  $scope.responses = [];
  $scope.loading = false;

  $scope.addPrompt = function () {
    $scope.loading = true;
    Prompt.addPrompt($scope.prompt)
      .then(function(prompt) {
        console.log(prompt);
        $scope.loading = false;
        $scope.prompt = prompt;
        $location.path('/prompt/' + prompt.id);
        console.log('successfully received prompt: ', prompt.id);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $scope.getResponses = function () {
    $scope.loading = true;
    Prompt.getResponses($scope.prompt)
      .then(function(responses) {
        $scope.loading = false;
        console.dir(responses);
        $scope.responses = responses;
        console.log('successfully received responses: ', responses.length);

      });
  };
});
