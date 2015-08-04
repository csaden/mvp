var Prompt    = require('./promptModel'),
    shortid   = require('shortid');

module.exports = {

  getPrompt: function (req, res, next, shortid) {
    Prompt.find({
      where: {'shortid': shortid}
    })
      .then(function (prompt) {
        if (prompt) {
          res.json(prompt);
          next();
        } else {
          next(new Error('Prompt not does not exist in the database.'));
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  addNewPrompt: function (req, res, next) {
    req.body.shortid = shortid.generate();
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