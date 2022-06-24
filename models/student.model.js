const Sequelize = require('sequelize');
const connection = require('../utils/database');


/**
 * Schema will be defined
 */
const Student = connection.define('student',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allownull : false
    },
    email : {
        type : Sequelize.STRING,
        allownull : false
    }
})

module.exports = Student ;