angular.module('writelet.services', [])

.factory('Prompts', function ($http) {

  var addPrompt = function (prompt) {
    return $http({
      method: 'POST',
      url: '/api/prompts',
      data: prompt
    })
    .then(function (resp) {
      return resp;
    });
  };

  return {
    addPrompt: addPrompt
  };

});