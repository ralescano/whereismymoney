const express = require('express')
const {
    createPersonalAssetsValidationRules,
    createPersonalAssets
} = require('../controllers/personalAssetController')

const router = express.Router()
router.post('/', createPersonalAssetsValidationRules(), createPersonalAssets)
module.exports = router
