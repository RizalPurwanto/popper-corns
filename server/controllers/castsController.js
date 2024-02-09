const { User, Movie, Genre, Casts } = require('../models/index')
const {
    sequelize,
    Sequelize: { Op },
} = require('../models')



class CastsController {
    static async getCasts(req, res, next) {
        try {
            const getCasts = await Casts.findAll({
                include: [{ model: Movie }],
                order: [
                    // Will escape title and validate DESC against a list of valid direction parameters
                    ['id', 'ASC'],
                ]
            })
            //console.log(Movie[0])
            res.status(200).json(getCasts)
        } catch (err) {
            // console.log(err)
            next(err)
        }
    }



    static async movieCast(req, res, next) {
        try {
            const { movieId } = req.params
            //   console.log(movieId, "INI CAST ID")
            const movieCasts = await Casts.findAll({
                where: {
                    movieId: movieId
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
            //console.log(err)
            next(err)
        }
    }

    static async oneCast(req, res, next) {
        try {
            const { castId } = req.params
            //console.log(castId, "INI CAST ID")
            const oneCast = await Casts.findByPk(castId)


            if (oneCast) {
                res.status(200).json(oneCast)
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
    static async addCasts(req, res, next) {
        const t = await sequelize.transaction()


        try {
            const authorId = req.loginUser.id
            const { movieId } = req.params

            let { casts } = req.body
            // console.log(casts)
            casts.forEach(el => {
                el.authorId = authorId
                el.movieId = movieId
            })
            const movie = await Movie.findByPk(movieId)

            if (!movie) {
                throw ({
                    code: 404,
                    name: "NOT_FOUND",
                    message: "No Movie  found"
                })
            }


            const result = await Casts.bulkCreate(casts)
            //console.log(result.dataValues, " INI RESULT")

            res.status(201).json(result)


        } catch (err) {
            //console.log(err)
            await t.rollback()
            next(err)
        }

    }//

    static async editCast(req, res, next) {
        const t = await sequelize.transaction()

        try {


            const authorId = req.loginUser.id
            const { movieId } = req.params

            let { casts, castIds } = req.body

            casts.forEach((el, i) => {
                el.id = castIds[i]
                el.authorId = authorId
                el.movieId = movieId
            })
            // console.log(casts, "INI CASTS")



            const result = await Casts.bulkCreate(casts, { updateOnDuplicate: ['name', 'profilePict'] })
            //console.log(result.dataValues, " INI RESULT")

            res.status(200).json({ message: 'Succesfully updated', data: result })

        }
        catch (err) {

            await t.rollback()
            //console.log(err)
            next(err)

        }
    }


    static async deleteCast(req, res, next) {
        const t = await sequelize.transaction()

        try {
            const { MovieId } = req.params
            const findMovie = await Movie.findByPk(MovieId)
            const { email } = req.loginUser
            if (findMovie) {
                const deleted = Movie.destroy({
                    where: {
                        id: MovieId
                    },
                    email: email
                })
                res.status(200).json(`Movie article with id ${MovieId} successfully deleted`)

            } else {
                throw ({
                    code: 404,
                    name: "NOT_FOUND",
                    message: `No Movie article found`
                })
            }

        } catch (err) {
            await t.rollback()
            next(err)
        }
    }
}

module.exports = CastsController