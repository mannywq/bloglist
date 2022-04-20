const logger = require('./logger')

const requestLogger = (req, res, next) => {

    logger.info('Request type: ', req.method)
    logger.info('Request path: ', req.path)
    logger.info('Request body: ', req.body)
    logger.info('-----')
    next()

}

module.exports = requestLogger