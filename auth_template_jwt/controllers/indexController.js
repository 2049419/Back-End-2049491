const User = require("../sequelize").User;
var jwt = require("jsonwebtoken");

function generateAccessToken(email, password) {
    var token = jwt.sign({email, password}, process.env.TOKEN_SECRET, {expiresIn: '1800s'});
    return token;
}

exports.signup = function(req, res){
    var {email} = req.body;
    var {password} = req.body;

    User.findOne({where: {
        email: email
    }}).then(result => {
        if (result == null) {
            User.create({ 'email': email, 'password': password}).
            then(user => {
                const token = generateAccessToken(email, password)
                req.session.user = user;
                req.session.token = token;
                res.redirect('/profile');
            })
            
        } else {
            req.flash('signupMessage', 'That email is already taken.');
            res.redirect('/signup');
        }
    })
}

exports.login = function(req, res){
    var {email} = req.body;
    var {password} = req.body;
    User.findOne({where: {
        email: email
    }}).then(result => {
        if (result == null) {
            req.flash('loginMessage', 'Could not login.');
            res.redirect('/login');
        } else if (result.password != password) {
            req.flash('loginMessage', 'Could not login');
            req.redirect('/login');
        
        }else {
            const token = generateAccessToken(email, password)
            req.session.user = token;
            req.session.user = result;
            res.cookie('access_token', token).redirect('/profile');    
        }
    })
}