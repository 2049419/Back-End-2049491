const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8081;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
});


//SQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
})

app.get('/persons' ,function(request, response){
    var id = request.params.id;
    connection.query('SELECT * FROM persons WHERE id ?', [id] ,function(err,rows,fields){
        response.send(rows);
    })
})

app.post('/persons' ,function(request, response){
    var person = request.body;
    connection.query('INSERT INTO persons SET ?', [person] ,function(err,rows,fields){
        response.send("Person insert with id: " + rows.insertId);
    })
})

app.delete('/persons' ,function(request, response){
    var id = request.body.id;
    connection.query('SELECT * FROM persons id ?', [id], function(err,rows,fields){
        response.send("Person deleted with id: " + rows.deleteId);
    })
})

app.get('/persons/:age/:profession' ,function(request, response){
    var age = request.params.age;
    var prof = request.params.profession;
    connection.query('UPDATE * FROM persons WHERE age ? AND prof ?', [age, prof], function(err,rows,fields){
        response.send(rows);
    })
})

app.put('/persons/:id' ,function(request, response){
    var id = request.params.id;
    var person = request.body;
    connection.query('UPDATE * FROM persons WHERE', function(err,rows,fields){
        response.send(rows);
    })
})