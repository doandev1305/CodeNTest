const express = require('express')
const router = express.Router()
const candyPayController = require('../controllers/candyPay.controller')

router.post('/candy-pay', candyPayController.paymentHandler)

module.exports = router
