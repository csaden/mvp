var promptController = require('./promptController');

module.exports = function (app) {
  // app === linkRouter injected from middleware.js

  // app.param will hijack any request with a 'code' parameter
  app.param('shortid', promptController.getPrompt);

  app.route('/')
    .post(promptController.addNewPrompt);

  app.get('/:shortid', promptController.sendPrompt);
};
