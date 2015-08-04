angular.module('writelet.createdPrompt', [])

.controller('CreatedPromptController', function CreatedPromptController($scope, $location, $stateParams, Prompt) {
  $scope.prompt = {};
  $scope.responses = [];
  $scope.loading = false;

  $scope.getPrompt = function () {
    console.log($stateParams.shortid);
    Prompt.getPrompt($stateParams.shortid)
      .then(function(prompt) {
        $scope.prompt = prompt;
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

  $scope.getPrompt();
});
