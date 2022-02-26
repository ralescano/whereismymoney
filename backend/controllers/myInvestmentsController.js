const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const Asset = require('../models/assetModel')
const PersonalAsset = require('../models/personalAssets')
const { ASSET_TYPE } = require('./constants')

const getInvestments = asyncHandler(async (req, res) => {
  const assets = await Asset.find()
  const personalAssets = await PersonalAsset.find()

  const pAssetsResult = personalAssets.map(pa => {
    let pAsset = {
      id: pa.id,
      type: pa.type,
    }
    switch (pa.type) {
      case ASSET_TYPE.BondsAndStock:
        const assetMatch = assets.find(a => a._id.toString() === pa.assetId.toString())
        pAsset.name = assetMatch.name
        pAsset.assetAmount = pa.assetAmount
        pAsset.assetId = pa.assetId
        break;
      case ASSET_TYPE.SavingsBank:
        pAsset.name = pa.name
        pAsset.amount = pa.amount
        break;
      default:
        throw new Error('Asset type not recognized')
    }
    return pAsset
  })

  res.status(201).json(pAssetsResult)
})

const getInvestmentById = asyncHandler(async (req, res) => {
  const pAsset = await PersonalAsset.findOne({ assetId: new mongoose.Types.ObjectId(req.params.id) })
  const asset = await Asset.findById(req.params.id)
  const latestEntry = asset.history.sort((a, b) => b - a)[0]
  const valuation = pAsset.assetAmount * latestEntry.price

  res.status(201).json({
    id: asset._id,
    name: asset.name,
    amount: pAsset.assetAmount,
    value: latestEntry.price,
    valuation,
  })
})


module.exports = {
  getInvestments,
  getInvestmentById
}


