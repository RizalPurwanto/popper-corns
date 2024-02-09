const { User, Movie, Genre, Cast } = require('../models/index')
const {
    sequelize,
    Sequelize: { Op },
} = require('../models')



class GenreController {


    static async getGenres(req, res, next) {
        // const t = await sequelize.transaction()


        try {
            const genres = await Genre.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                  order: [
                      // Will escape title and validate DESC against a list of valid direction parameters
                      ['id', 'ASC'],
                  ]
            })
            //console.log(categories[0])
            res.status(200).json(genres)
        } catch (err) {
            // console.log(err)

            // await t.rollback()

            next(err)
        }
    }


    static async addGenre(req, res, next) {
        const t = await sequelize.transaction()


        try {


            const { name } = req.body



            const result = await Genre.create({ name }, {transaction:t,})
            //console.log(result.dataValues, " INI RESULT")
            await t.commit();
            res.status(201).json(result)


        } catch (err) {

            await t.rollback()

            //console.log(err)
            next(err)
        }

    }//

    static async oneGenre(req, res, next) {
        try {
            const { genreId } = req.params
            const oneGenre = await Genre.findByPk(genreId)
            //console.log(oneMovie)

            if (oneGenre) {
                res.status(200).json(oneGenre)
            } else {
                throw ({
                    code: 404,
                    name: "NOT_FOUND",
                    message: "No such genre  found"
                })
            }

        } catch (err) {
            next(err)
        }
    }

    static async editGenre(req, res, next) {
        const t = await sequelize.transaction()


        try {


            const { name } = req.body


            const { genreId } = req.params
            const genre = await Genre.findByPk(genreId)
            // console.log(oneMovie)
            if (!genre) {
                throw ({
                    code: 404,
                    name: "NOT_FOUND",
                    message: `No such genre found`
                })
            }
            const updateGenre = await Genre.update({
                name
            }, {
                transaction:t,
                where: {
                    id: genreId,

                },
                returning: true,
                individualHooks: true,
                method: "put",


            })
            await t.commit();
            res.status(200).json({ message: 'Genre Succesfully updated', data: updateGenre })

        }
        catch (err) {

            await t.rollback()

            //console.log(err)
            next(err)

        }
    }


    static async deleteGenre(req, res, next) {
        

        try {
            const { genreId } = req.params
            const findgenre = await Genre.findByPk(genreId)

            if (findgenre) {
                const deleted = Genre.destroy({
                    
                    where: {
                        id: genreId
                    },

                })
                
                res.status(200).json(`Genre with id ${genreId} successfully deleted`)

            } else {
                throw ({
                    code: 404,
                    name: "NOT_FOUND",
                    message: `No such genre found`
                })
            }

        } catch (err) {

            

           // console.log(err)
            next(err)
        }
    }
}

module.exports = GenreController