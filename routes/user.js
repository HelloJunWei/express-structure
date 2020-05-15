const api = require('../utils/api')('user')
const User = require('../models/user')
const { query, validationResult } = require('express-validator')

api.get('/user', [
  query('user_id').notEmpty().isString().trim().escape().custom(value => [1, 2].indexOf(parseInt(value)) !== -1).withMessage('error user_id'),
], (req, res) => {
  // 利用 express-validator 做參數的驗證~
  // 如果不符合設定規則就回傳 error status code
  const errors = validationResult(req)
  if (!errors.isEmpty()) throw [400, errors.array()[0].msg]
  const user_id = req.query.user_id
  const user = User.user_list.find(obj => obj.id === parseInt(user_id))
  res.ok({ user })

})

module.exports = api
