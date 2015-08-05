angular.module('writelet.services', [])

.factory('Prompt', function PromptFactory($http) {

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

  var getPrompt = function(shortid) {
    return $http({
      method: 'GET',
      url: '/api/prompt/' + shortid
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    addPrompt: addPrompt,
    getPrompt: getPrompt
  };

})

.factory('Response', function ResponseFactory($http) {

  var addResponse = function(response) {
    return $http({
      method: 'POST',
      url: '/api/response',
      data: response
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var getResponses = function(prompt) {
    return $http({
      method: 'GET',
      url: '/api/response/' + prompt.id,
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getResponses: getResponses,
    addResponse: addResponse
  };

});