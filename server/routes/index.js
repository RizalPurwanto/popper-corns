const express = require('express')
const router = express.Router()

const movies = require('./movies')
const authRouter = require('./authRouter')
const genres = require('./genres')
const casts = require('./casts')
const pub = require("./public");

const {authentication} = require ('../middlewares/authentication')

router.use('/', authRouter)
router.use('/pub', pub);
router.use(authentication)
router.use ('/movies', movies)
router.use ('/genres', genres)
router.use('/casts', casts)

module.exports = router