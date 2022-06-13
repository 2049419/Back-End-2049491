// importar o express
//https://codesandbox.io/s/oqo0ylv8oy?file=/src/controllers/sample.controller.js

const {
  Sequelize,
  Model,
  DataType,
  DataTypes,
  EmptyResultError
} = require("sequelize")
const express = require("express");
const {
  response
} = require("express");

// instanciar o express
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// definir a porta do servidor http
const port = 8000;

// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
  console.log('Example app listening at https://%s:%s');
});

const sequelize = new Sequelize("ficha9", "root", "", {
  dialect: "mysql"
})

sequelize.authenticate().then(() => {
  console.log("Connection has been established");
}).catch(err => {
  console.log("Unable to connect", err)
})

const Person = sequelize.define("person", {
  firstName: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  profession: DataTypes.STRING,
  age: DataTypes.INTEGER
});
//               force: false  | so it updates
sequelize.sync({
  force: true
}).then(() => {
  console.log("Tables Created.");
  Person.bulkCreate([{
      firstName: "David",
      lastName: "Jardim",
      profession: "IT",
      age: 32
    },
    {
      firstName: "Nick",
      lastName: "Bonito",
      profession: "NA",
      age: 28
    },
    {
      firstName: "Pedro",
      lastName: "Rosario",
      profession: "Gamer",
      age: 19
    },
    {
      firstName: "Donkey",
      lastName: "Kong",
      profession: "Professional Monkey",
      age: 41
    },
    {
      firstName: "Jesus",
      lastName: "Cristo",
      profession: "Profeta",
      age: 2022
    },
  ]).then(() => {
    console.log("Tabela feita!!");
  })
})

app.get("/person", (req, res) => {
  id = req.query.id;
  if (id == undefined) {
    Person.findAll().then((persons) => {
      res.send(persons);
    })
  } else {
    Person.findByPk(id).then(result => {
      if (result == undefined) {
        res.send("Invalid ID.")
      } else {
        res.send(result)
      }
    })
  }
})

app.post("/person", (req, res) => {
  Person.create(req.body).then((insertedPerson) => {
    //body:
    // {
    //  "firstname": "Jane",
    //  "lastname": "Doe", 
    //  "profession": "",
    //  "age": 19
    // }
    res.send("Person inserted with ID: " + insertedPerson.id);
  })
})

app.delete("/person", (req, res) => {
  var id = req.body.id;
  if (isNaN(id)) {
    res.status(400).send("Invalid ID.");
  } else {
    Person.destroy({
      where: {
        id: req.body.id
      }
    }).then(result => {
      if (result == 0) {
        res.status(404).send("ID not found.")
      } else {
        res.send("Deleted Instances: " + result)
      }
    })
  }
})

app.delete("/person/:id", (req, res) => {
  var id = req.params.id;
  if (isNaN(id)) {
    res.status(400).send("Invalid ID.");
  } else {
    Person.destroy({
      where: {
        id: id
      }
    }).then(result => {
      if (result == 0) {
        res.status(404).send("ID not found.")
      } else {
        res.send("Deleted Instances: " + result)
      }
    })
  }
})

app.get("/person/:age/:profession", (req, res) => {
  var age = req.params.age;
  var profession = req.params.profession;
  Person.findAll({
    where: {
      age: age,
      profession: profession
    }
  }).then(result => {
    if (result == 0) {
      res.status(404).send("ID not found.")
    } else {
      res.send(result);
    }
  })
})


app.put("/person/:id", (req, res) => {
  var id = req.params.id;
  Person.update(req.body,{
    where: {
      id: id
    }
  }).then((updatedPerson) => {
    //body:
    // {
    //  "firstname": "First",
    //  "lastname": "Last", 
    //  "profession": "",
    //  "age": 22
    // }
    if (updatedPerson == 0) {
      res.send("Cannot find id.");
    } else {
      Person.findByPk(id).then(updatedPerson => {
        response.send(updatedPerson);
      })
    }
    res.send("Person with ID: " + updatedPerson.id + " was updated.");
  })
})
//node app.js
//http://localhost:8000/person