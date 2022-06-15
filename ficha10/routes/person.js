var express = require('express');
var router = express.Router();

const controllerPerson = require('../controllers/personController');

router.get("/", controllerPerson.test);

module.exports = router;
