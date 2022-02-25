const mongoose = require('mongoose')

const personalAssetSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please add a name']
  },
  amount: {
    type: Number,
    require: [true, 'Please add amount']
  },
  type: {
    type: String,
    require: [true, 'Please add asset type']
  },
  assetId: {
    type: mongoose.Types.ObjectId
  },
  assetAmount: {
    type: Number
  }
})

module.exports = mongoose.model('PersonalAssets', personalAssetSchema)