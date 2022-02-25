const express = require('express')
const {
  getAssets,
  getAssetById,
  createAsset,
  updateAsset
} = require('../controllers/assetControllers')

const router = express.Router()

router.get('/', getAssets)
router.get('/:id', getAssetById)
router.post('/', createAsset)
router.put('/:id', updateAsset)
module.exports = router
