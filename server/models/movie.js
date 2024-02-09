'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.User, {foreignKey: "authorId"})
      Movie.belongsTo(models.Genre, {foreignKey: "genreId"})
      Movie.hasMany(models.Casts, {foreignKey: "movieId"})
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'title required'
        },
        notNull: {
          msg: 'title cannot be null'
        },
      }, 
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'slug required'
        },
        notNull: {
          msg: 'slug cannot be null'
        },
      }, 
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'synopsis required'
        },
        notNull: {
          msg: 'synopsis cannot be null'
        },
      }, 
    },
    trailerUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }, 
    },
    genreId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        
        isInt: {
          msg: 'category is required'
        },//added
        // notEmpty: {
        //   msg: 'category is required'
        // },//added
        notNull: {
          msg: 'category cannot be null'
        }
      }
    },
    authorId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeValidate:(movie, option) => {//sebelum masuk database
        console.log("INI MASUK")
        let slug = movie.title.replace(/\s+/g, '-').toLowerCase();
        console.log(movie.slug, slug, "INI SLUGS")
       movie.slug = slug
       
      },
      beforeUpdate:(movie, option) => {//sebelum masuk database
        console.log("INI MASUK")
        let slug = movie.title.replace(/\s+/g, '-').toLowerCase();
        console.log(movie.slug, slug, "INI SLUGS")
       movie.slug = slug
       
      }
    },
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};