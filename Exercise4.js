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
    mysqlC.query('INSERT INTO student VALUES (3,"vaivas","CSE","9790596012")',(err)=>{
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
    mysqlC.query('DELETE FROM student where student_id="3"' , (err) => {
        if(!err) res.end("deleted")
        else res.end("Error deleting")
    })
})
app.listen(5000)