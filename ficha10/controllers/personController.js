const Person = require("../sequelize").Person;

exports.getAllPerson = function (req, res, next) {
    Person.findAll().then(result => {
        res.send(result);
    })
}

exports.test = function(req, res, next ) {
    res.send("TEST");
}