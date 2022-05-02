const express = require('express');
const fs = require('fs');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;

function readFile(path){
    var fileContent = fs.readFileSync(path, "utf-8");
    return fileContent;
}


app.get('/', function(request, response) {
  var id = request.params.id;
  var person = personsObject["person" + id];
  if(person == undefined) {
    response.send("This id does not exist.");
  } else {
    response.send(person);
  }

  } 
)

app.get('/users', function(request, response) {
    var fileContent = readFile('./persons.json');
    response.send(fileContent);
  }
)

app.post('/users', function(request, response) {
  
    var person = request.body;

    var size = Object.keys(personsObject).length;
    size++;
    var str = 'person';
    var personId = str + size;

    person.id = size;

    personsObject[personId] = person;
    response.send(personsObject);
  }
)

app.put('/users', function(request, response) {
  response.send("THIS IS A PUT");
  }
)

app.delete('/users/:id', function(request, response) {
    var id = request.params.id;
    var person = personsObject["person" + id];
    if(person == undefined) {
      response.send("This id does not exist.");
    } else {
      delete personsObject["person" + id];
      response.send("Id " + id + " was deleted.")
    }
  }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var personString = readFile('./persons.json')
var personsObject = JSON.parse(personString)