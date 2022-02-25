const asyncHandler = require('express-async-handler')
const moment = require('moment')
const Asset = require('../models/assetModel')
const PersonalAsset = require('../models/personalAssets')


const getAssets = asyncHandler(async (req, res) => {
  const assets = await Asset.find()
  const result = assets.map(a => {
    const latestEntry = a.history.sort((a, b) => b - a)[0]
    return ({
      id: a.id,
      name: a.name,
      price: latestEntry.price
    })
  })
  res.status(201).json(result)
})
const getAssetById = asyncHandler(async (req, res) => {
  const asset = await Asset.findById(req.params.id)
  const latestEntry = asset.history.sort((a, b) => b - a)[0]
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
    type: 'SavingsBank',
  }))

  const assetsResult = assets.map(a => {
    const latestEntry = a.history.sort((a, b) => b - a)[0]
    return ({
      id: a.id,
      name: a.name,
      value: latestEntry.price,
      type: 'BondsAndStock',
    })
  })
  res.status(201).json([...pAssetsResult, ...assetsResult])
})

const createAsset = asyncHandler(async (req, res) => {
  const { name, type, price } = req.body
  const date = moment.utc().startOf('day')
  const newAsset = { name, type, history: [{ price, date }] }
  const asset = await Asset.create(newAsset)
  res.status(201).json(asset)
})
const createPersonalAssets = asyncHandler(async (req, res) => {
  const { name, amount } = req.body
  const newPersonalAsset = { name, amount }  
  const pAsset = await PersonalAsset.create(newPersonalAsset)
  res.status(201).json(pAsset)
})

module.exports = {
  getAssets,
  createAsset,
  getAssetById,
  getInvestments,
  createPersonalAssets
}