const { User, Movie, Genre, Casts } = require('../models')
const {
    sequelize,
    Sequelize: { Op },
} = require('../models')



class MovieController {
    static async getMovies(req, res, next) {
        //   const t = await sequelize.transaction()
        try {
            const movie = await Movie.findAll({
                include: [{
                    model: Genre, attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }, {
                    model: User, attributes: {
                        exclude: ["createdAt", "updatedAt", "password"]
                    }
                }, {
                    model: Casts, attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }],
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
                include: [{
                    model: Genre, attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                }, {
                    model: User, attributes: {
                        exclude: ["createdAt", "updatedAt", "password"]
                    }
                }, {
                    model: Casts, attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    },
                }],
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
    static async addMovie(req, res, next) {
        const t = await sequelize.transaction()
        try {
            const authorId = req.loginUser.id
           // console.log(req.body, "INI ISI BODY")
            const { title, synopsis, imgUrl, trailerUrl, rating, genreId, } = req.body
            let { casts } = req.body


            const result = await Movie.create({ title, synopsis, imgUrl, trailerUrl, rating, genreId, authorId }, { transaction: t })
            //console.log(result.dataValues, " INI RESULT")

            const movieId = result.id


            //console.log(casts)
            casts.forEach(el => {
                el.authorId = authorId
                el.movieId = movieId
            })





            const result2 = await Casts.bulkCreate(casts, { transaction: t })
            //console.log(result2.dataValues, " INI RESULT")


            await t.commit();
            res.status(201).json(result)


        } catch (err) {
            await t.rollback()
            //console.log(err)
            next(err)
        }

    }//

    static async editMovie(req, res, next) {
        const t = await sequelize.transaction()
        try {


            const { title, synopsis, imgUrl, trailerUrl, rating, genreId } = req.body


            const { movieId } = req.params
            const oneMovie = await Movie.findByPk(movieId)
            //console.log(oneMovie)
            if (!oneMovie) {
                throw ({
                    code: 404,
                    name: "NOT_FOUND",
                    message: `No Movie article found`
                })
            }
            const updateMovie = await Movie.update({
                title, synopsis, imgUrl, trailerUrl, rating, genreId
            }, {
                transaction: t,
                where: {
                    id: movieId,

                },
                returning: true,
                individualHooks: true,
                method: "put",


            })
            let { casts } = req.body
            //   const castIds = 
            const maxId = await Casts.max('id')
            //console.log(casts, "INI CASTS")
            let count = 1
            casts.forEach((el,) => {
                if (!el.id) {
                    el.id = maxId + count
                    count++
                }

                el.movieId = movieId
            })
            //console.log(casts, "INI CASTS")



            const result = await Casts.bulkCreate(casts, {
                fields: ["id", "name", "profilePict"],
                updateOnDuplicate: ['name', 'profilePict']
            })
            //console.log(result.dataValues, " INI RESULT")
            await t.commit();
            res.status(200).json({ message: 'Succesfully updated', data: updateMovie, cast: result })

        }
        catch (err) {
            await t.rollback()
            //console.log(err)
            next(err)

        }
    }


    static async deleteMovie(req, res, next) {


        try {
            const { movieId } = req.params
            const findMovie = await Movie.findByPk(movieId)

            if (findMovie) {
                const deleted = Movie.destroy({

                    where: {
                        id: movieId
                    },

                })

                res.status(200).json(`Movie article with id ${movieId} successfully deleted`)

            } else {
                throw ({
                    code: 404,
                    name: "NOT_FOUND",
                    message: `No Movie article found`
                })
            }

        } catch (err) {


            //console.log(err)
            next(err)
        }
    }
}

module.exports = MovieController