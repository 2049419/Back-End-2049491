const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

function readFile(path){
    var fileContent = fs.readFileSync(path, "utf-8");
    return fileContent;
}

console.log(readFile('./persons.json'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Hello Users!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})