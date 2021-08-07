const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbconn');

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'user',
});

module.exports = User;