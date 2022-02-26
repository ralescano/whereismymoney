const express = require('express')
const {
  getAssets,
  getAssetByIdValidationRules, getAssetById,
  createAssetValidationRules, createAsset,
  updateAssetValidationRules, updateAsset
} = require('../controllers/assetControllers')

const router = express.Router()

router.get('/', getAssets)
router.get('/:id', getAssetByIdValidationRules(), getAssetById)
router.post('/', createAssetValidationRules(), createAsset)
router.put('/:id', updateAssetValidationRules(), updateAsset)
module.exports = router
