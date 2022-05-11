const express = require('express');
const mysql = require('mysql');
const { SET } = require('mysql/lib/protocol/constants/types');
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
app.get('/produtos' ,function(request, response){
    connection.query('SELECT * FROM produtos', function(err,rows,fields){
        response.send(rows);
    })
})

//A.b)
app.post('/produtos' ,function(request, response){
    var newProd = request.body;
    connection.query('INSERT INTO produtos SET ?', [newProd] ,function(err,rows,fields){
        response.send("Produto insert with id: " + rows.insertId);
    })
})

//A.c)
app.get('/produtos/seller' ,function(request, response){
    var newSeller = request.query.seller_id;
    connection.query('SELECT * FROM produtos WHERE seller_id = ? ', [newSeller] ,function(err,rows,fields){
        response.send(rows);
    })
})


//A.d)
app.put('/produtos/:id' ,function(request, response){
    var newId = request.params.id;
    connection.query('UPDATE produtos SET views_ = views_ + 1 WHERE produtos.id = ?', [newId], function(err,rows,fields){
        response.send(rows);
    })
})

//B.e)
app.get('/produtos/tags' ,function(request, response){
    var newTags = request.query.tags;
    connection.query('SELECT * FROM produtos WHERE tags = ? ', [newTags] ,function(err,rows,fields){
        response.send(rows);
    })
})

//B.a)
app.get('/produtos/id' ,function(request, response){
    var newId = request.query.id;
    connection.query('SELECT * FROM produtos WHERE id = ? ', [newId] ,function(err,rows,fields){
        response.send(rows);
    })
})

//B.b)
app.delete('/produtos/:id' ,function(request, response){
    var newId = request.params.id;
    //var pos = request.produto[newId];
    if (request.produto.id == undefined) {
        response.send('Produto não existente.');
    } else {
        connection.query('DELETE FROM produtos WHERE id = ?;', [newId], function(err,rows,fields){
        response.send(rows);
    })
    }
})

/*app.delete('/persons' ,function(request, response){
    var id = request.body.id;
    connection.query('SELECT * FROM persons id ?', [id], function(err,rows,fields){
        response.send("Person deleted with id: " + rows.deleteId);
    })
})
*/