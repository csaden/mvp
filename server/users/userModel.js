var Sequelize = require('sequelize'),
    db        = require('../config/db');

var User = db.define('User', {
  id : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
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

module.exports = User;