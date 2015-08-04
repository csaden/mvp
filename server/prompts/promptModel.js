var db = require('../config/db');

console.log(shortid.generate());

var Prompt = db.define('Prompt', {
  id : {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
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