const api = require('../utils/api')('product')
const Product = require('../models/product')
const validate = require('../utils/validate')
const { query, validationResult } = require('express-validator')

api.get('/product', [
  query('product_id').notEmpty().isString().trim().escape().custom(validate.validateProduct).withMessage('error product_id'),
], (req, res) => {
  /* 利用 express-validator 做參數的驗證~
   * 如果不符合設定規則就回傳 error status code
   * 如果驗證的邏輯太複雜，也可以自己寫一個function呼叫
   */
  const errors = validationResult(req)
  if (!errors.isEmpty()) throw [400, errors.array()[0].msg]
  const product_id = req.query.product_id
  const product = Product.product_list.find(obj => obj.id === parseInt(product_id))
  res.ok({ product })

})

module.exports = api
