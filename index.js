const http = require('http')
const logger = require('./utils/logger')
const config = require('./utils/config')
const express = require('express')
const app = require('./app')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()



const server = http.createServer(app)

server.listen(config.PORT)
logger.info(`Server running on port ${config.PORT}`)
