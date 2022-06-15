module.exports = (sequelize, type) => {
    return sequelize.define("person", {
      firstName: DataTypes.TEXT,
      lastName: DataTypes.TEXT,
      profession: DataTypes.STRING,
      age: DataTypes.INTEGER
    });
  }