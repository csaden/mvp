var Sequelize = require('sequelize'),
    mysql     = require('mysql');

var db = new Sequelize('writelet', 'me', 'password', {
  hostname: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = db;