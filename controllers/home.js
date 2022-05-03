const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (req.isAuthenticated) {
    res.render('pages/dashboard')
  } else {
    res.render('pages/login')
  }
})

module.exports = router