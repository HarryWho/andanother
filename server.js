const config = require('dotenv')
config.config({ path: './config/config.env' })

const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const session = require('express-session')
const { ConnectDB } = require('./config/DB')

// view engine
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

// static path
app.use(express.static(path.join(__dirname, 'public')))

// sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true

}))

// routes
app.get('/', require('./controllers/home'))

// connect to mongo
ConnectDB()

// start server
server.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`)
})