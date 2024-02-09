const PublicController = require('../controllers/publicController')
const express = require("express")
const router = express.Router()

router.get('/', PublicController.getMovies)
router.get('/:movieId', PublicController.oneMovie)
router.get('/casts/:movieId', PublicController.movieCast)

module.exports = router

module.exports = router