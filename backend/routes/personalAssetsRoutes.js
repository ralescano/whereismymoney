const express = require('express')
const { createPersonalAssets } = require('../controllers/personalAssetController')

const router = express.Router()
router.post('/', createPersonalAssets)
module.exports = router
