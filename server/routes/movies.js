const MovieController = require('../controllers/movieController')
const express = require("express")
const router = express.Router()

router.get('/', MovieController.getMovies)
router.post('/add', MovieController.addMovie)
router.get('/:movieId', MovieController.oneMovie)
router.put('/:movieId', MovieController.editMovie)
router.delete('/:movieId', MovieController.deleteMovie)
module.exports = router

module.exports = router