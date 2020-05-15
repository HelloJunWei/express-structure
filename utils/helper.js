module.exports = {
  isNull: obj => obj === null && typeof obj === 'object',
  trimExt: filename => filename.replace(/\.[^/.]+$/, ''),
  ts2unixms (data) {
    for (var key in data) {
      if (key.substr(key.indexOf('_ts')) === '_ts' && data[key] !== null) {
        data[key] = data[key].valueOf()
      } else if (typeof (data[key]) === 'object') {
        data[key] = this.ts2unixms(data[key])
      }
    }
    return data
  }
}
