const express = require('express')
const router = express.Router()

const {getOrders} = require('../controllers/orders')

router.get('/', getOrders)

module.exports = router