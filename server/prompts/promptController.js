var Prompt    = require('./promptModel'),
    shortid   = require('shortid'),
    utils     = require('../config/utils');

module.exports = {

  getPrompt: function (req, res, next, shortid) {
    console.log(shortid);
    if (utils.isValidShortid(shortid)) {
      Prompt.findOne({
        where: {shortid: shortid}
      })
        .then(function (prompt) {
          if (prompt) {
            console.dir('here', prompt);
            req.data = prompt;
            next();
          } else {
            next(new Error('Prompt not does not exist in the database.'));
          }
        })
        .catch(function (error) {
          next(error);
        });
    } else {
      next(new Error('The shortid is not valid.'));
    }
  },

  sendPrompt: function(req, res) {
    var prompt = req.data;
    res.send(prompt);
  },

  addNewPrompt: function (req, res, next) {
    req.body.shortid = shortid.generate();
    Prompt.create(req.body)
      .then(function (createdPrompt) {
        if (createdPrompt) {
          res.json(createdPrompt);
        }
      })
      .catch(function (error) {
        next(error);
      });
  }

};