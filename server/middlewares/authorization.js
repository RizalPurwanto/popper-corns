const {Movie} = require('../models/index.js')
const authorization = async (req, res, next) => {// 
    try {
       
        let idMovie = req.params.movieId
        //ambil data dari authentication
        let userLoginId = req.loginUser.id
        let userRole = req.loginUser.role
        //console.log(idMovie, " INI  MOVIE ID")
        //console.log(userLoginId, " INI  USER ID")
        //console.log(userRole, " INI  ROLE")
        const movie = await Movie.findOne({
            where : {
                id : idNews,
                authorId: userLoginId
            }
        })
        //console.log(news, " INI MOVIES")
        if (movie || userRole == 'admin') {
            //console.log("masuk false 403")
            next()
        } else {
            throw({
                code: 403,
                name: "NOT_ENOUGH_PERMISSION",
                message: "Forbidden access to resource"
            })
        }
        
    } catch (err) {
        //console.log(err)
        next(err)
    }
}

module.exports = authorization