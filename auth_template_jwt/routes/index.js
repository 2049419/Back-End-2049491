var express = require('express');
var router = express.Router();

var indexController = require("../controllers/indexController"); 

//res.render('aqui muda o que eu quiser ser chamado no ../views/...', { um objeto que envio para o views (message) });
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
    res.render('login', {message: req.flash("loginMessage") });
});

router.get('/profile', function(req, res) {
    res.render('profile',{user: req.body.user} );
});

router.get('/signup', function(req, res) {
    res.render('signup', {message: req.flash("profileMessage")});
});

router.post('/signup', indexController.signup);

module.exports = router;