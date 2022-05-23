const express = require('express');
const app = express();
const port = 1111;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const fs = require('fs')

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("SERVER ONLINE")
});

function data (req,res) {
    var path = req.route.path;
    var find = req.method;
    var date = new Date();
    var dateString = date.toDateString();
    var str = "Path: " + path + " | Method: " + find + " | Date: " + dateString + "\n";
    fs.appendFileSync("log.txt", str);
}

app.get('/', (req,res) => {
    var bd = "text!";
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(bd),
        "Content-Type": "text/plain"
    });
    data(req,res);
    res.end(bd)
})

app.get('/two', (req,res) => {
    var ht = "<html><div style=color:blue;>blue text!</div></html>";
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(ht),
        "Content-Type": "text/html"
    });
    res.end(ht)
    data(req,res)
})

app.get('/three', (req,res) => {
    var ht = fs.readFileSync("texto", "utf-8");
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(ht),
        "Content-Type": "text/html"
    });
    res.end(ht)
    data(req,res)
})

app.get('/replace', (req,res) => {
    var ht = fs.readFileSync("texto", "utf-8");
    var date = new Date()
    ht = ht.replace("texto", date.toDateString());
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(ht),
        "Content-Type": "text/html"
    });
    res.end(ht)
    data(req,res)
})

app.get('/user/:name', (req,res) => {
    var ht = fs.readFileSync("texto", "utf-8");
    var name = req.params.name
    ht = ht.replace("texto", name);
    res.writeHead(200,{
        "Content-Length":Buffer.byteLength(ht),
        "Content-Type": "text/html"
    });
    res.end(ht)
    data(req,res)
})

app.get('/log', (req,res) => {
    data(req,res)
    var log = fs.readFileSync("log.txt", "utf-8");
    res.send(log);
})

app.get('/download', (req,res) => {
    data(req,res)
    const file = "log.txt";
    res.download(file);
})

app.get('/clear', (req,res) => {
    fs.unlinkSync("log.txt")
    res.send("Deleted");
})