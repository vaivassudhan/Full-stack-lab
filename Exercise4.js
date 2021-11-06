/*
to test 
curl -i -X POST -H 'Content-Type: application/json' -d '{"id":4,"Name": "curl-test","dept":"cse","phone": "9080185622"}' http://localhost:5000/insert
curl -i -X DELETE http://localhost:5000/delete/3
Aim :
1. to Build a Simple CRUD Node.js App with MySql Database connectivity 
Procedure :
1. Import mysql, express and bodypareser packages using "require" method and store it in respective variables 
2. create an object of class express by calling its contructor 
3. Add bodyparser to the express app by using app.use() method to parse JSON 
4. create a mysql database connection by using createConnection() method of mysql package 
    with parameter object containing host,use, password and database name
5. Then connect to the database using connect() function of mysqlConnecctor variable 
6. Create: listen with post method and get the data from request object and use the mysql query to insert the data into the database
7. Read : listen with get method to select all records from the given table and return to the user as response 
8. Update : listen with put method to get data from user and update the exisiting record using the update query
8. Delete : listen with delete method to delete a record in the database using delete command  
*/

const http = require('http')
const mysql = require('mysql')
const express = require('express')
const bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.json())
var mysqlC = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password12345',
    database:'FS-LAB',
    multipleStatements: true,
});
mysqlC.connect((err)=>{
    if(!err){
        console.log("Connected")
    }
    else{
        console.log(err)
    }
})
// Create 
app.post('/insert',(req,res) =>{
    let query = `INSERT INTO student VALUES (${req.body.id},"${req.body.Name}","${req.body.dept}","${req.body.phone}")`

    mysqlC.query(query,(err)=>{
        if(!err) res.end("inserted")
        else res.end("Error")
    })
})
// Read 
app.get('/students' , (req, res) => {
    mysqlC.query('SELECT * FROM student', (err, rows, fields) => {
    if (!err){res.end(JSON.stringify(rows))}
    else
    {console.log(err);res.end("error");}
    })
});
// Update 
app.put('/update',(req,res) =>{
    mysqlC.query('UPDATE student SET Name="sudhan" WHERE id=3;',(err)=>{
        if(!err) res.end("inserted")
        else res.end("Error")
    })
})
// Delete
app.delete('/delete',(req,res) => {
    console.log(req.body)
    mysqlC.query('DELETE FROM student where student_id="3"' , (err) => {
        if(!err) res.end("deleted")
        else res.end("Error deleting")
    })
})
app.listen(5000)