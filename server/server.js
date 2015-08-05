//========================
// modules
//========================

var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    db             = require('./config/db'),
    Prompt         = require('./prompts/promptModel'),
    Response       = require('./responses/responseModel');

//========================
// configuration
//========================

// db config
Prompt.hasMany(Response);
Response.belongsTo(Prompt);

db.sync({force: true})
  .then(function() {
    console.log('Connected to database!');
  })
  .catch(function(error) {
    console.log('Could not connect to the database');
    console.log(error);
  });

// set the port
var port = process.env.PORT || 8080;

var app = express();

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

//========================
// start app
//========================

// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Server magic happens on port ' + port);

// export our app for testing and flexibility, required by index.js
module.exports = app;