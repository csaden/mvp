var db = require('../config/db');

var Response = db.define('Response', {
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

module.exports = Response;