var Sequelize = require('sequelize'),
    db        = require('../config/db');

var Response = db.define('Response', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  firstName: {
    type: Sequelize.TEXT
  },
  lastName: {
    type: Sequelize.TEXT
  }
});

module.exports = Response;