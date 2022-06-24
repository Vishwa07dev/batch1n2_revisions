/**
 * This file will be used to demo the functionalities of
 * sequelize
 */
const connection = require("./utils/database");
const Student = require("./models/student.model");
const Marksheet = require("./models/marsheet.model");


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

    /**
     * Creating the Marksheet table
     */
    return Marksheet.create({marks : 100});
}).then(marks=>{
    console.log("Marksheet updated");
})
.catch(err =>{
    console.log(err);
})