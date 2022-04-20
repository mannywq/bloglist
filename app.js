const express = require('express')
const config = require('./utils/config')
const logger = require('./utils/logger')
const app = express()
const requestLogger = require('./utils/middleware')
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const mongoose = require('mongoose')

const url = config.MONGO

logger.info('Connecting to ', url)

mongoose.connect(url)
.then(res => {

    logger.info('Connected to ', url)
})
.catch(error => {

    logger.error('Failed connection: ', error.message)
})
app.use(cors())
app.use(express.json())
app.use(requestLogger)

app.use('/api/blogs/', blogRouter)

module.exports = app