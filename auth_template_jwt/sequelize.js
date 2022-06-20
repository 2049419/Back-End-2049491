const Sequelize = require("sequelize");
const UserModel = require("./models/Users");
const fs = require('fs');

const sequelize = new Sequelize("ficha11", process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.authenticate()
    .then(() => {
        console.log("Connection established")
    })
    .catch(err => {
        console.error("Unable to connect", err)
    });

sequelize.sync({
        force: false
    })
    .then(() => {
        console.log('Tabela criada!');
    });

module.exports = {
    User
}