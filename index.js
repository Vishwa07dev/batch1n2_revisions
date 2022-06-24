/**
 * This file will be used to demo the functionalities of
 * sequelize
 */
const connection = require("./utils/database");
const Student = require("./models/student.model");


/**
 * Initialize the table correspoding to the models defined
 */
connection.sync().then(result => {
    console.log("Succesfully synced");
    
    /**
     * This is the place where data should be added 
     */
    return Student.create({name : "Vishwa Mohan", email : "kankvish@gmail.com"});
      
    

}).then(student => {
    console.log("student created");
})
.catch(err =>{
    console.log(err);
})