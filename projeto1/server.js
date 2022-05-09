const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("SERVER RUNNING")
});


//SQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto1'
})

//A.a)
app.get('/Produtos' ,function(request, response){
    connection.query('SELECT * FROM Produtos', function(err,rows,fields){
        response.send(rows);
    })
})

//A.b)
app.post('/Produtos' ,function(request, response){
    var newProd = request.body;
    connection.query('INSERT INTO Produtos SET ?', [newProd] ,function(err,rows,fields){
        response.send("Produto insert with id: " + rows.insertId);
    })
})

//A.c)
app.get('/Produtos/seller' ,function(request, response){
    var newSeller = request.query.seller_id;
    connection.query('SELECT * FROM Produtos WHERE seller_id = ? ', [newSeller] ,function(err,rows,fields){
        response.send(rows);
    })
})


//A.c)
/*app.delete('/persons' ,function(request, response){
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
*/