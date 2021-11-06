/*

Aim :
1. to Build a Simple CRUD Node.js App with MySql Database connectivity 
Procedure :
1. Import mongoose, express and bodypareser packages using "require" method and store it in respective variables 
2. create an object of class express by calling its contructor 
3. Add bodyparser to the express app by using app.use() method to parse JSON 
4. create a mongodb connection by using mongoose.connect() method of mongoose package 
    with parameter object containing url of mongodb and object with newUrlParser set to true
5. Then connect to the database using connect() function of mysqlConnecctor variable 
6. Create: listen with post method and get the data from request object and use the mysql query to insert the data into the database
7. Read : listen with get method to select all records from the given table and return to the user as response 
8. Update : listen with put method to get data from user and update the exisiting record using the update query
8. Delete : listen with delete method to delete a record in the database using delete command  
*/
const http = require('http')
const mongoose = require('mongoose')
const express = require('express')
const bodyparser = require('body-parser')

var app = express()
app.use(bodyparser.json())

mongoose.connect('mongodb://localhost/FS-LAB', {useNewUrlParser : true})
    .then( (client) => {
        
        console.log("Connected")
    })
    .catch( (err) => console.log(err))

const studentSchema = new mongoose.Schema({
    ID : Number,
    Name: String,
    Dept: String,
    phone: String
});
    
const studentClass = mongoose.model('student', studentSchema);

const s = new studentClass({
    ID : 1,
    Name: "senthil",
    Dept: "Cse",
    phone: "9080185622"
})

const result = s.save();
console.log('Document created', result)