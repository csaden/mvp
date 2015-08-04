//========================
// modules
//========================

var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    Prompt         = require('../prompts/promptModel'),
    Response       = require('../responses/responseModel');

//========================
// configuration
//========================

// db config
var db = require('./config/db.js');

Prompt.hasMany(Response);
Response.belongsTo(Prompt);

db.sync();

// set the port
var port = process.env.PORT || 8080;

var app = express();

db.connect('mongodb://localhost/writelet'); // connect to SQL database named writelet


// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

//========================
// start app
//========================

// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// export our app for testing and flexibility, required by index.js
module.exports = app;