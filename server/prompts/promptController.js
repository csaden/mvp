var Prompt  = require('./promptModel');

module.exports = {

  getPrompt: function (req, res, next, id) {

    Prompt.find({
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
    console.log(req.body);
    Prompt.create(req.body)
      .then(function (createdPrompt) {
        if (createdPrompt) {
          res.json(createdPrompt);
        }
      })
      .error(function (error) {
        next(error);
      });
  }

};