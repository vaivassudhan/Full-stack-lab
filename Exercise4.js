/*
to test 
curl -i -X POST -H 'Content-Type: application/json' -d '{"id":4,"Name": "curl-test","dept":"cse","phone": "9080185622"}' http://localhost:5000/insert
curl -i -X DELETE http://localhost:5000/delete/3
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
app.delete('/delete/:id',(req,res) => {
    console.log(req.body.data)
    mysqlC.query('DELETE FROM student where student_id="3"' , (err) => {
        if(!err) res.end("deleted")
        else res.end("Error deleting")
    })
})
app.listen(5000)