var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser'),
    helpers     = require('./helpers.js'); // our custom middleware


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  var promptRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));


  app.use('/api/response', responseRouter); // use response router for response requests

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/prompt', helpers.decode);
  app.use('/api/prompt', promptRouter); // user prompt router for prompt requests
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their respective route files
  require('../prompts/promptsRoutes.js')(promptRouter);
};
