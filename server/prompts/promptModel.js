var db = require('../config/db');

var Prompt = db.define('Prompt', {
  id : {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
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