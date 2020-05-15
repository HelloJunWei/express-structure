// Create app
var express = require('express')

// Create bodyParser
var bodyParser = require('body-parser')

var fs = require('fs')
var helper = require('./utils/helper')

// Create app
var app = express()
  .use(
    bodyParser.urlencoded({
      extended: true,
      limit: '1000mb',
      parameterLimit: 1000000
    })
  )

  // Enable json
  .use(bodyParser.json({ limit: '10mb', parameterLimit: 10000 }))
  // Enable cookie
  .use(require('cookie-parser')())

  // Enable session
  .use(
    require('cookie-session')({
      secret: 'membership_top',
      maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    })
  )
  // Serve static files
  .use('/', express.static('public'))
  .use((req, res, next) => {
    // user authentication
    next()
  })
// IIFE 
void (() => {
  return new Promise((resolve, reject) => {
    // auto load all routes
    fs.readdir('./routes/', (err, files) => {
      err && console.warn(err)
      for (var key in files) {
        app.use('/api/' + helper.trimExt(files[key]), require('./routes/' + helper.trimExt(files[key])))
      }
      resolve()
    })
  })
})().then(() => {
  // handle error
  app.use((err, req, res, next) => {
    /* 利用 req.baseRoute 知道是哪個 restful API 出了錯，並通知開發者 */
    console.error(`${req.baseRoute}: ${err}`)
    // sendMailToDeveloper()
    if (err[0]) res.status(err[0]).json({ code: err[0], message: err[1] })
    else res.status(500).json({ code: 500, message: err })
    
  })
})
module.exports = app
