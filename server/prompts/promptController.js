var Prompt  = require('./promptModel'),
    Q       = require('q');

module.exports = {

  getPrompt: function (req, res, next, id) {
    var findPrompt = Q.nbind(Prompt.find, Prompt);

    findPrompt({
      where: {id: id}
    })
      .then(function (prompt) {
        if (prompt) {
          req.prompt = prompt;
          next();
        } else {
          next(new Error('Prompt not added yet'));
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  addNewPrompt: function (req, res, next) {
    var prompt = req.body.prompt;
    console.log(req.body);

    var createPrompt = Q.nbind(Prompt.create, Prompt);
    var findPrompt = Q.nbind(Prompt.find, Prompt);

    findPrompt({
      where: {id: prompt.id}
    }).then(function (match) {
        if (match) {
          next(new Error('The prompt with id ' + match.id + ' already exists!'));
        } else {
          var newPrompt = {
            text: prompt
          };
          return createPrompt(newPrompt);
        }
      }).then(function (createdPrompt) {
        if (createdPrompt) {
          res.json(createdPrompt);
        }
      })
      .fail(function (error) {
        next(error);
      });
  }

};