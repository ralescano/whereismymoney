const dotenv = require('dotenv').config()
const cors = require('cors')
const express = require('express')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/assets', require('./routes/assetsRoutes'))
app.use('/api/personalAssets', require('./routes/personalAssetsRoutes'))
app.use('/api/investments', require('./routes/myInvestmentsRoutes'))
app.use('/api/portfolio', require('./routes/portfolioRoutes'))

app.listen(port, () => console.log('server start on port ' + port))
connectDB()
