const express = require('express')
const router = express.Router()

const {getUsers, login, updateUser} = require('../controllers/users')

router.get('/', getUsers)
router.put('/:id', updateUser)
router.post('/login', login)

module.exports = router