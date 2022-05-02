const config = require('dotenv')
config.config({ path: './config/config.env' })

const express = require('express')
const http = require('http')
const app = express()
const { ConnectDB } = require('./config/DB')

const server = http.createServer(app)




ConnectDB()

server.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})