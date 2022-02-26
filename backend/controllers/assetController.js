const asyncHandler = require('express-async-handler')
const { body, param, validationResult } = require('express-validator')

const Asset = require('../models/assetModel')
const PersonalAsset = require('../models/personalAssets')
const { ASSET_TYPE } = require('./constants')

const getAssets = asyncHandler(async (req, res) => {
  const assets = await Asset.find()
  const result = assets.map(a => {
    const latestEntry = a.history.sort((a, b) => (b.date - a.date))[0]
    return ({
      id: a.id,
      name: a.name,
      price: latestEntry.price
    })
  })
  res.status(201).json(result)
})

const getAssetByIdValidationRules = () => [
  param('id')
    .exists({ checkNull: true }).withMessage('id is required')
    .isMongoId().withMessage('incorrect id format')
]

const getAssetById = asyncHandler(async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const asset = await Asset.findById(req.params.id)
  const latestEntry = asset.history.sort((a, b) => (b.date - a.date))[0]
  const result = {
    id: asset.id,
    name: asset.name,
    price: latestEntry.price
  }
  res.status(201).json(result)
})

const getInvestments = asyncHandler(async (req, res) => {
  const assets = await Asset.find()
  const personalAssets = await PersonalAsset.find()

  const pAssetsResult = personalAssets.map(pa => ({
    id: pa.id,
    name: pa.name,
    value: pa.amoount,
    type: ASSET_TYPE.SavingsBank,
  }))

  const assetsResult = assets.map(a => {
    const latestEntry = a.history.sort((a, b) => (b.date - a.date))[0]
    return ({
      id: a.id,
      name: a.name,
      value: latestEntry.price,
      type: ASSET_TYPE.BondsAndStock,
    })
  })
  res.status(201).json([...pAssetsResult, ...assetsResult])
})

const createAssetValidationRules = () => [
  body('name')
    .exists({ checkNull: true }).withMessage('name is required').bail()
    .isLength({ min: 3 }).withMessage('name length should be greater than 2').bail()
    .isLength({ max: 255 }).withMessage('name max length 255'),
  body('price')
    .exists({ checknull: true }).withMessage('price is required').bail()
    .isDecimal().withMessage('price should be decimal')
]

const createAsset = asyncHandler(async (req, res) => {
  const { name, price } = req.body
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const assetMatch = await Asset.findOne({ name })
  if (assetMatch) {
    return res.status(400).json({ errors: ['Asset name exists already'] })
  }
  const date = new Date()
  const newAsset = { name, history: [{ price, date }] }
  const asset = await Asset.create(newAsset)
  res.status(201).json(asset)
})

const updateAssetValidationRules = () => [
  param('id')
    .isMongoId().withMessage('incorrect id format'),
  body('price')
    .exists({ checkNull: true }).withMessage('price is required').bail()
    .isFloat({ min: 1 }).withMessage('price should be a numeric value greater than 0')
]

const updateAsset = asyncHandler(async (req, res) => {
  const { price } = req.body
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const asset = await Asset.findById(req.params.id)
  if (!asset) {
    return res.status(404).json({ errors: ['Asset does not exist'] })
  }
  const date = new Date()

  asset.history.push({ price, date })
  const savedAsset = await asset.save();

  res.status(201).json({
    id: savedAsset.id,
    name: savedAsset.name,
    price,
    date
  })
})


module.exports = {
  getAssets,
  getInvestments,
  getAssetByIdValidationRules, getAssetById,
  createAssetValidationRules, createAsset,
  updateAssetValidationRules, updateAsset,
}