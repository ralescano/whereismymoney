const mongoose = require('mongoose')

const PriceHistorySchema = new mongoose.Schema({
  price: { type: Number, required: [true, 'Please add a price'] },
  date: { type: Date, required: [true, 'Please add a date'] }
});
const assetSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please add a name']
  },
  history: [PriceHistorySchema]
})

module.exports = mongoose.model('Assets', assetSchema)