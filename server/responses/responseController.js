var Response = require('./responseModel');

module.exports = {

  getResponses: function (req, res, next, promptId) {
    Response.findAll({
      where: {PromptId: promptId}
    })
      .then(function (responses) {
        if (responses) {
          req.data = responses;
          next();
        }
      })
      .catch(function (error) {
        next(error);
      });
  },

  sendResponses: function(req, res) {
    var responses = req.data;
    res.send(responses);
  },

  addResponse: function (req, res, next) {
    console.log('attempting to add a response');
    Response.create(req.body)
      .then(function (createdResponse) {
        if (createdResponse) {
          res.json(createdResponse);
        }
      })
      .catch(function (error) {
        next(error);
      });
  }

};