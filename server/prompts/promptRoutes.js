var questionController = require('./questionController');

module.exports = function (app) {
  // app === linkRouter injected from middleware.js

  // app.param will hijack any request with a 'code' parameter
  app.param('code', questionController.findQuestion);

  app.route('/')
    .get(questionController.allQuestions)
    .post(questionController.newQuestion);

  app.get('/:code', questionController.navToQuestion);

};
