const {
  Sequelize,
  Model,
  DataTypes
} = require("sequelize");
const person = require("./models/person");

const sequelize = new Sequelize("ficha10", "root", "", {
  dialect: "mysql"
})



sequelize.authenticate().then(() => {
  console.log("Connection has been established");
}).catch(err => {
  console.log("Unable to connect", err)
})

sequelize.sync({
  force: true
}).then(() => {
  console.log("Tables Created.");
  person.bulkCreate([{
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
    }
  ]).then(() => {
    return person.findAll()
  }).then((person) => {
    console.log(person)
  })
})

module.export = {

}