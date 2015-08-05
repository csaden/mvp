angular.module('writelet.response', [])

.controller('ResponseController', function ResponseController($scope, $location, $stateParams, Prompt, Response) {
  $scope.shortid = null;
  $scope.prompt = {};
  $scope.response = {};
  $scope.responses = [];
  $scope.loading = false;

  $scope.setPrompt = function(shortid) {
    if (shortid !== null) {
      Prompt.getPrompt(shortid)
        .then(function(prompt) {
          $scope.prompt = prompt;
          console.dir(prompt);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      console.log("The shortid is null.");
    }
  };

  $scope.addResponse = function() {
    $scope.loading = true;
    $scope.response.PromptId = $scope.prompt.id;
    console.log($scope.response);
    Response.addResponse($scope.response)
      .then(function(response) {
        $scope.loading = false;
        console.log('Successfully submitted response', response.text);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $scope.setPrompt($stateParams.shortid);
});
