const { User, Movie, Genre, Casts } = require('../models/index')

class PublicController {
    static async getMovies(req, res, next) {
        //   const t = await sequelize.transaction()
          try {
              const movie = await Movie.findAll({
                include: [{ model: Genre,  attributes: {
                  exclude: ["createdAt", "updatedAt"]
              }}, { model: User,  attributes: {
                  exclude: ["createdAt", "updatedAt", "password"]
              } }, { model: Casts,   attributes: {
                  exclude: ["createdAt", "updatedAt"]
              }}],
              attributes: {
                  exclude: ["createdAt", "updatedAt"]
              },
                order: [
                    // Will escape title and validate DESC against a list of valid direction parameters
                    ['id', 'ASC'],
                ]
            })
              //console.log(Movie[0])
              res.status(200).json(movie)
          } catch (err) {
            //   await t.rollback()
             // console.log(err)
              next(err)
          }
      }
    
      
      static async oneMovie(req, res, next) {
          try {
              const { movieId } = req.params
              //console.log(movieId, "INI MOVIE ID")
              const oneMovie = await Movie.findByPk(movieId, {
                include: [{ model: Genre, attributes: {
                    exclude: ["createdAt", "updatedAt"]
                } }, { model: User, attributes: {
                    exclude: ["createdAt", "updatedAt", "password"]
                } }, { model: Casts, attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }, }],
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
              })
              //console.log(oneMovie)
    
              if (oneMovie) {
                  res.status(200).json(oneMovie)
              } else {
                  throw ({
                      code: 404,
                      name: "NOT_FOUND",
                      message: "No Movie article found"
                  })
              }
    
          } catch (err) {
              next(err)
          }
      }

      static async movieCast(req, res, next) {
        try {
            const { movieId } = req.params
          //  console.log(movieId, "INI CAST ID")
            const movieCasts = await Casts.findAll({
              where: {
                movieId:  movieId
              }
            })
            
  
            if (movieCasts) {
                res.status(200).json(movieCasts)
            } else {
                throw ({
                    code: 404,
                    name: "NOT_FOUND",
                    message: "No cast found"
                })
            }
  
        } catch (err) {
         // console.log(err)
            next(err)
        }
    }
}

module.exports = PublicController