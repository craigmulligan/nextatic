const Promise = require('bluebird')
const glob = Promise.promisify(require('glob'))

const determineAdapter = (nextDir) => {
  return Promise.all([
    glob(`${nextDir}/pages/**/*.js`),
    glob(`${nextDir}/pages/**/*.vue`)
  ]).spread((next, nuxt) => {
    if (next.length > 1) return 'next'
    else if (nuxt.length > 1) return 'nuxt'
  })
}

module.exports = {
  determineAdapter
}
