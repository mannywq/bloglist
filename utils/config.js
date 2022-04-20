require('dotenv').config()

const MONGO = process.env.MONGO
const PORT = process.env.PORT

module.exports = {
    
    MONGO, PORT
}