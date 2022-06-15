const {Sequelize, Model, DataTypes} = require("sequelize")

const sequelize = new Sequelize("ficha10", "root", "", {
  dialect: "mysql"
})

  sequelize.authenticate().then(() => {
    console.log("Connection has been established");
  }).catch(err => {
    console.log("Unable to connect", err)
  })