const express = require('express')
const router = express.Router()

const {getLeaveRequests} = require('../controllers/leaveRequests')

router.get('/', getLeaveRequests)

module.exports = router