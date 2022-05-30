// importar o express
//const { request, response, query } = require('express');
const express = require('express');
const mysql = require('mysql');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

// funções middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

app.get('/persons', (request, response) => {
    connection.query('SELECT * FROM persons' ,function(err,rows,fields){
        response.send(rows);
    })
});

app.post('/persons', (request, response) => {
    var person = request.body;
    connection.query('INSERT INTO persons SET ?', [person] ,function(err,rows,fields){
        response.send("Person insert with id: " + rows.insertId);
    })
});

app.delete('/persons', (request, response) => {
    var id = request.body.id;
    connection.query('SELECT * FROM persons id ?', [id], function(err,rows,fields){
        response.send("Person deleted with id: " + rows.deleteId);
    })
});

app.delete('/persons/:id', (request, response) => {
    var id = request.params.id;
    connection.query('SELECT * FROM persons id ?', [id], function(err,rows,fields){
        response.send("Person deleted with id: " + rows.deleteId);
    })
});

app.get('/persons/:id', (request, response) => {
    var id = request.params.id;
    connection.query('SELECT * FROM persons WHERE id ?', [id] ,function(err,rows,fields){
        response.send(rows);
    })
});

app.get('/persons/:age/:profession', (request, response) => {
    var age = request.params.age;
    var prof = request.params.profession;
    connection.query('UPDATE * FROM persons WHERE age ? AND prof ?', [age, prof], function(err,rows,fields){
        response.send(rows);
    })
});

app.put('/persons/:id', (request, response) => {
    var id = request.params.id;
    var person = request.body;
    connection.query('UPDATE persons set ? WHERE id = ?', [person, id], function(err,rows,fields){
        response.send("Chnaged: " + rows.changedRows);
    })
});

// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});