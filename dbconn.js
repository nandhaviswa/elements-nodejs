const Sequelize = require('sequelize');
const path = require('path')
const simple_node_logger = require('simple-node-logger');

// create a rolling file logger based on date/time that fires process events
const opts = {
    // errorEventName:'error',
    logDirectory: path.join(__dirname, 'public', 'logs'), // NOTE: folder must exist and be writable...
    fileNamePattern:'database-<DATE>.log',
    dateFormat:'YYYY-MM-DD',
    timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
};
const dblogger = simple_node_logger.createRollingFileLogger( opts );

const sequelize = new Sequelize(process.env.MYSQL_DBNAME_01, process.env.MYSQL_USER_01, process.env.MYSQL_PWD_01, {
    host: process.env.MYSQL_HOST_01,
    dialect: 'mysql',
    timezone:'+05:30',
    logging: (...msg) => dblogger.info(msg),
});

module.exports = sequelize;