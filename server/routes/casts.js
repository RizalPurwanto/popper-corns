const CastsController = require('../controllers/castsController')
const express = require("express")
const router = express.Router()

router.get('/', CastsController.getCasts)
router.post('/add/:movieId', CastsController.addCasts)
router.get('/:castId', CastsController.oneCast)
router.put('/edit/:movieId', CastsController.editCast)
router.delete('/:castid', CastsController.deleteCast)
router.get('/movie/:movieId', CastsController.movieCast)

module.exports = router