var Sequelize = require('sequelize'),
    shortid   = require('shortid'),
    db        = require('../config/db');

var Prompt = db.define('Prompt', {
  id : {
    type: Sequelize.TEXT,
    primaryKey: true,
    defaultValue: shortid.generate()
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  open: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false
  },
  closed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

module.exports = Prompt;