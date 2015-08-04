var promptController = require('./promptController');

module.exports = function (app) {
  // app === linkRouter injected from middleware.js

  // app.param will hijack any request with a 'code' parameter
  // app.param('id', promptController.getPrompt);

  app.route('/')
    // .get(promptController.allPrompts)
    .post(promptController.addNewPrompt);

  // app.get('/:id', promptController.navToPrompt);

};
