var Prompt  = require('./promptModel'),
    Q       = require('q');

module.exports = function (app) {

  // app === promptRouter injected from middleware.js

  // app.param will hijack any request with a 'code' parameter
  app.param('code', promptController.findPrompt);

  app.route('/')
    .get(promptController.allPrompts)
    .post(promptController.newPrompt);

  app.get('/:code', promptController.navToPrompt);

};