const asyncHandler = require('express-async-handler')
const PersonalAsset = require('../models/personalAssets')

const createPersonalAssets = asyncHandler(async (req, res) => {
  const { name, amount, type, assetId, assetAmount } = req.body
  let newPersonalAsset = null

  switch (type) {
    case 'SavingsBank':
      newPersonalAsset = { name, amount, type };
      break;
    case 'BondsAndStock':
      newPersonalAsset = { amount, type, assetId, assetAmount };
      break;
    default: throw Error('Asset Type not recognized')
  }
  const pAsset = await PersonalAsset.create(newPersonalAsset)
  res.status(201).json(pAsset)
})

module.exports = {
  createPersonalAssets
}
