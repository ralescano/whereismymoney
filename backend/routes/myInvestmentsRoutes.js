const express = require('express')
const {
  getInvestments,
  getInvestmentById
} = require('../controllers/myInvestmentsController')

const router = express.Router()
router.get('/', getInvestments)
router.get('/:id', getInvestmentById)

module.exports = router
