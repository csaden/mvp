angular.module('writelet.services', [])

.factory('Prompt', function ($http) {

  var addPrompt = function (prompt) {
    return $http({
      method: 'POST',
      url: '/api/prompt',
      data: prompt
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var getResponses = function(prompt) {
    return $http({
      method: 'GET',
      url: '/api/responses/' + prompt.id,
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    addPrompt: addPrompt,
    getResponses: getResponses
  };

});