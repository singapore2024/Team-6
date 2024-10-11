const express = require('express')
const router = express.Router()

const {getLeaveRequests, addLeaveRequest} = require('../controllers/leaveRequests')

router.get('/', getLeaveRequests)
router.post('/', addLeaveRequest)

module.exports = router