var Sequelize = require('sequelize'),
    db        = require('../config/db');

var Prompt = db.define('Prompt', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  shortid: {
    type: Sequelize.TEXT,
    allowNull: false
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