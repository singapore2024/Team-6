const express = require('express')
const router = express.Router()

const {getUsers, login} = require('../controllers/users')

router.get('/', getUsers)
router.post('/login', login)

module.exports = router