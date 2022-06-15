module.exports = (sequelize, type) => {
    return sequelize.define("person", {
      firstName: type.TEXT,
      lastName: type.TEXT,
      profession: type.STRING,
      age: type.INTEGER
    });
  }