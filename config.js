/* define config sample
 * 可以比對config.json 是否有少某些設定檔，
 * 例如 config.json 少了 API_KEY 的 key，就可以利用 config.js 檢查出config.json 少了 API_KEY
 */
config = {
  PORT: 5000,
  IS_SANDBOX: true,
  API_KEY: ''
}

var fs = require('fs')
var file = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

objKeyCompare(config, file)
config = file

function objKeyCompare (target, input) {
  for (var key in target) {
    if (typeof target[key] !== typeof input[key]) {
      throw ['Config validate failed', 'Key:' + key]
    }
  }
}

module.exports = config
