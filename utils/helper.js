module.exports = {
  isNull: obj => obj === null && typeof obj === 'object',
  trimExt: filename => filename.replace(/\.[^/.]+$/, ''),
  unitTime (data) {
    // 輸出欄位中如果有時間的話，轉化成 unit time 輸出到前端
    for (var key in data) {
      if (key.substr(key.indexOf('_time')) === '_time' && data[key] !== null) {
        data[key] = data[key].valueOf()
      } else if (typeof (data[key]) === 'object') {
        data[key] = this.unitTime(data[key])
      }
    }
    return data
  }
}
