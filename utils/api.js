const helper = require('./Helper')
var callback = (route, base, func) => {
  return async (req, res, next) => {
    res.ok = (data) => res.json({ code: 0, message: 'ok', data: helper.unitTime(data) })
    res.err = (code, message, error) => res.rtn({ code: code, message: message, error: error })
    try {
      await func(req, res, next)
    } catch (e) {
      req.baseRoute = `/${base}${route}`
      next(e)
    }
  }
}
var api = base => {
  api = require('express').Router()
  api._get = api.get
  api._post = api.post
  api._put = api.put
  api._delete = api.delete
  api._patch = api.patch

  api.get = (route, validator, func) => {
    api._get(route, validator, callback(route, base, func))
    return api
  }

  api.post = (route, validator, func) => {
    api._post(route, validator, require('connect-multiparty')(), callback(route, base, func))
    return api
  }

  api.put = (route, validator, func) => {
    api._put(route, validator, require('connect-multiparty')(), callback(route, base, func))
    return api
  }

  api.delete = (route, validator, func) => {
    api._delete(route, validator, require('connect-multiparty')(), callback(route, base, func))
    return api
  }

  api.patch = (route, validator, func) => {
    api._patch(route, validator, require('connect-multiparty')(), callback(route, base, func))
    return api
  }

  return api
}

module.exports = api
