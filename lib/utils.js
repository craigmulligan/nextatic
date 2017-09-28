const fs = require('fs')
const join = require('path').join

const buildId = nextDir => {
  try {
    return fs.readFileSync(join(nextDir, 'BUILD_ID'), 'utf8')
  } catch (e) {
    return false
  }
}

const isServer = () => typeof window === 'undefined'

const isExport = () =>
  (typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) ||
  (!isServer() &&
    typeof window.__NEXT_DATA__ !== 'undefined' &&
    window.__NEXT_DATA__.nextExport)

module.exports = {
  isServer,
  isExport,
  buildId
}
