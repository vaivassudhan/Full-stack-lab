/*

Aim :
1. to Build a Simple CRUD Node.js App with MySql Database connectivity 
Procedure :
Procedure 
1. Install and import mongoose, express and bodypareser packages using "require" method 
2. create an object of express with reference name app
3. establish a database connection with mongodb server using mongoose.connect()
4. add bodyparser to the app to parse JSON data 
5. Build a model with mongoose.schema() and mongoose.model() function of mongoose library 
6. configure router to handle the routes for the respective http methods 
7. use model.save() to create, model.find() to query all data, findByIdAndUpdate() to update specific data and model.remove() to delete a record.  

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