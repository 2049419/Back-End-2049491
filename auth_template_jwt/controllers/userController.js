const User = require("../sequelize").User;

exports.findAll = function(req, res, next) {
    User.findAll().then(result => {
        res.send(result);
    })
}