var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

var indexController = require("../controllers/indexController");

//res.render('aqui muda o que eu quiser ser chamado no ../views/...', { um objeto que envio para o views (message) });
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/login', function (req, res) {
    res.render('login', {
        message: req.flash("loginMessage")
    });
});

router.get('/profile', autenticateTokenFromSession, function (req, res) {
    res.render('profile', {
        user: req.session.user
    });
});

router.get('/signup', function (req, res) {
    res.render('signup', {
        message: req.flash("loginMessage")
    });
});

router.post('/signup', indexController.signup);

router.post('/login', indexController.login);

function autenticateTokenFromSession(req, res, next) {
    const token = req.session.token;
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = router;