var responseController = require('./responseController');

module.exports = function (app) {
  // app === repsonseRouter injected from middleware.js

  // app.param will hijack any request with a 'shortid' parameter
  app.param('promptId', responseController.getResponses);

  app.route('/')
    .post(responseController.addResponse);

  app.get('/:promptId', responseController.sendResponses);
};
