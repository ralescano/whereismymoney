const express = require('express')
const {
  getAssets,
  getAssetById,
  createAsset
} = require('../controllers/assetControllers')

const router = express.Router()

router.get('/', getAssets)
router.get('/:id', getAssetById)
router.post('/', createAsset)
module.exports = router