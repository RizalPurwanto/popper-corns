'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Casts.belongsTo(models.Movie, {foreignKey: "movieId"})
    }
  }
  Casts.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'name required'
        },
        notNull: {
          msg: 'name cannot be null'
        },
      }, 
    },
    profilePict: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'profilePict required'
        },
        notNull: {
          msg: 'profilePict cannot be null'
        },
      }, 
    },
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Casts',
  });
  return Casts;
};