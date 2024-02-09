const GenreController = require('../controllers/genreController')
const express = require("express")
const router = express.Router()

router.get('/', GenreController.getGenres)
router.post('/add', GenreController.addGenre)
router.get('/:genreId', GenreController.oneGenre)
router.put('/:genreId', GenreController.editGenre)
router.delete('/:genreId', GenreController.deleteGenre)
module.exports = router