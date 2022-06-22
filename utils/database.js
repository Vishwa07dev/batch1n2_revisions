/**
 * Purpose of this file is to connect to the MySQL 
 * server and create a connect.
 * The connection needs to be exported so that it can be
 * used at the other places.
 */

const Sequelize = require('sequelize');

console.log(typeof Sequelize);

//console.log(Sequelize);

/**
 * In order to use, we need to execute this function
 * 
 * I need a connection object
 * 
 * 1. DB Name
 * 2. User Name
 * 3. Password
 * 4. host - remote/local
 * 5. dialect - which exact database "mysql"
 */
const connection = new Sequelize('seq_demo','root','Welcome1',{
    dialect : "mysql",
    host : "localhost"
});
console.log(typeof connection);

module.exports = connection;
