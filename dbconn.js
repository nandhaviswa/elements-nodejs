const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DBNAME_01, process.env.MYSQL_USER_01, process.env.MYSQL_PWD_01, {
    host: process.env.MYSQL_HOST_01,
    dialect: 'mysql',
    timezone:'+05:30',
});

module.exports = sequelize;