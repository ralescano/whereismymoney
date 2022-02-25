const express = require('express')
const { getPortfolio } = require('../controllers/myInvestmentsController')

const router = express.Router()
router.get('/', getPortfolio)

module.exports = router
