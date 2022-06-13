var express = require('express');
var router = express.Router();

var personController = require("../controllers/personController");

router.get("/", personController.test);

module.exports = (sequelize, type) => {
  return sequelize.define("person", {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    profession: DataTypes.STRING,
    age: DataTypes.INTEGER
  });
}

module.exports = router;
