const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator')
const PersonalAsset = require('../models/personalAssets')
const {ASSET_TYPE} = require('./constants')

const createPersonalAssetsValidationRules = () => [
  body('name')
    .exists({ checkNull: true }).withMessage('name is required').bail()
    .isLength({ min: 3 }).withMessage('name length should be greater than 2').bail()
    .isLength({ max: 255 }).withMessage('name max length 255'),
  body('amount')
    .exists({ checkNull: true }).withMessage('amount is required').bail()
    .isInt({ min: 1 }).withMessage('amount should be a integer value greater than 0'),
  body('type')
    .exists({ checkNull: true }).withMessage('type is required')
    .isIn([ASSET_TYPE.SavingsBank, ASSET_TYPE.BondsAndStock]),
]
const createPersonalAssets = asyncHandler(async (req, res) => {
  const { name, amount, type, assetId, assetAmount } = req.body
  let newPersonalAsset = null

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  if (type === ASSET_TYPE.BondsAndStock) {
    if (!assetId) {
      return res.status(400).json({ errors: [`assetId is required when type is ${ASSET_TYPE.BondsAndStock}`] })
    }
    if (!assetAmount) {
      return res.status(400).json({ errors: [`assetAmount is required when type is ${ASSET_TYPE.BondsAndStock}`] })
    }
  }
  switch (type) {
    case ASSET_TYPE.SavingsBank:
      newPersonalAsset = { name, amount, type };
      break;
    case ASSET_TYPE.BondsAndStock:
      newPersonalAsset = { amount, type, assetId, assetAmount };
      break;
    default: throw Error('Asset Type not recognized')
  }
  const pAsset = await PersonalAsset.create(newPersonalAsset)
  res.status(201).json(pAsset)
})

module.exports = {
  createPersonalAssetsValidationRules,
  createPersonalAssets
}
