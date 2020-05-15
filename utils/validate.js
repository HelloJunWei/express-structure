// express-validator
// 驗證中間件的自定義驗證
module.exports = {
  validateProduct: (value) => [1, 2].indexOf(parseInt(value)) !== -1
}
