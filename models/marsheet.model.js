const Sequelize = require("sequelize");
const connection = require("../utils/database");

const Marksheet = connection.define('marksheet', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement :true,
        primaryKey : true
    },
    marks : {
        type : Sequelize.INTEGER,
        allownull : true
    }
});
module.exports = Marksheet ;