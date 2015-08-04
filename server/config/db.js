var Sequelize = require('sequelize');

var db = new Sequelize('writelet', 'me', 'somePasswUrd', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;