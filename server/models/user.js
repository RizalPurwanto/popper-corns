const {hashPassword} = require ('../helpers/bcrypt')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Movie, {foreignKey: "authorId"})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'username required'
        },
        notNull: {
          msg: 'username cannot be null'
        },
      }, 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'email must be unique'
      },
      validate: {
        isEmail: {
          msg: 'invalid email format '
        },
        notEmpty: {
          msg: 'email required'
        },
        notNull: {
          msg: 'email cannot be null'
        },
      }, 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, Number.MAX_VALUE],
          msg: 'password minimum length is 5 characters'
        },
        notEmpty: {
          msg: 'password required'
        },
        notNull: {
          msg: 'password cannot be null'
        },
      }, 
    },
    role:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'role required'
        },
        notNull: {
          msg: 'role cannot be null'
        },
      }, 
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate:(userData) => {//sebelum masuk database
        console.log(userData.password)
        
        let hashed = hashPassword(userData.password)//acak password sebelum masuk database
        userData.password = hashed//ubah password pada userData jadi hasil hashed
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};