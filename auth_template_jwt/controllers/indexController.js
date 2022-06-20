const User = require("../sequelize").User;

exports.signup = function(req, res){
    var {email} = req.body;
    var {password} = req.body;

    User.findOne({where: {
        email: email
    }}).then(result => {
        if (result == null) {
            User.create({ 'email': email, 'password': password}).
            then(user => {
                req.session.user = user;
                res.redirect('/profile');
            })
        } else {
            req.flash('signupMessage', 'That email is already taken');
            req.redirect('/signup');
        }
    })
}