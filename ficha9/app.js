// importar o express
//https://codesandbox.io/s/oqo0ylv8oy?file=/src/controllers/sample.controller.js

const { Sequelize, Model, DataType, DataTypes } = require("sequelize")
const express = require("express");

// instanciar o express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// definir a porta do servidor http
const port = 8000;

// método que arranca o servidor http e fica à escuta
app.listen(port, () => {
    console.log('Example app listening at https://%s:%s');
});

const sequelize = new Sequelize("ficha9", "root", "", {
  dialect:"mysql"
})

sequelize.authenticate().then (() => {
  console.log("Connection has been established");
}).catch(err => {
  console.log("Unable to connect" , err)
})

const Person = sequelize.define("person", {
  firstName: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  profession: DataTypes.STRING,
  age: DataTypes.INTEGER
});

sequelize.sync({ force: false}).then(() => {
  console.log("Tables Created.");
  Person.bulkCreate([
    {firstname: "David", lastname: "Jardim", profession: "IT", age: 32},
    {firstname: "Nick", lastname: "Bonito", profession: "NA", age: 28},
    {firstname: "Pedro", lastname: "Rosario", profession: "Gamer", age: 19},
    {firstname: "Donkey", lastname: "Kong", profession: "Professional Monkey", age: 41},
    {firstname: "Jesus", lastname: "Cristo", profession: "Profeta", age: 2022},
  ]).then(() => {
    
  })
})