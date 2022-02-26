const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const Asset = require('../models/assetModel')
const PersonalAsset = require('../models/personalAssets')
const { ASSET_TYPE } = require('./constants')

const getPortfolio = asyncHandler(async (req, res) => {
    const result = {
        total: null,
        assets: []
    }
    const personalAssets = await PersonalAsset.find()
    const assets = await Asset.find()
    personalAssets.forEach(pAsset => {
        if (pAsset.type === ASSET_TYPE.SavingsBank) {
            result.total += pAsset.amount
            result.assets.push({ id: pAsset._id, name: pAsset.name, value: pAsset.amount })
        } else if (pAsset.type === ASSET_TYPE.BondsAndStock) {
            const asset = assets.find(a => a._id.toString() === pAsset.assetId.toString())
            const latestEntry = asset.history.sort((a, b) => b - a)[0]
            const valuation = pAsset.assetAmount * latestEntry.price
            result.total += valuation
            result.assets.push({ id: asset._id, name: asset.name, value: valuation })
        }

    })
    res.status(201).json(result)
})

module.exports = {
    getPortfolio
}