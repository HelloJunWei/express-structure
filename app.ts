import express = require('express');
// Create bodyParser
import bodyParser = require('body-parser')

import  fs = require('fs')
var helper = require('./utils/helper')

// Create app
const app: express.Application = express()
  .use(
    bodyParser.urlencoded({
      extended: true,
      limit: '1000mb',
      parameterLimit: 1000000
    })
  )

  // Enable json
  .use(bodyParser.json())
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
  app.use((err: any, req: any, res: any, next: any) => {
    /* 利用 req.baseRoute 知道是哪個 restful API 出了錯，並通知開發者 */
    console.error(`${req.baseRoute}: ${err}`)
    // sendMailToDeveloper()
    if (err[0]) res.status(err[0]).json({ code: err[0], message: err[1] })
    else res.status(500).json({ code: 500, message: err })
    
  })
})
module.exports = app
