const gql = require('graphql-client')
const { isServer, isExport } = require('./utils')
const md5 = require('md5')
const Promise = require('bluebird')
const mkdirp = require('mkdirp-then')

module.exports = (query) => {
  if (isServer() && isExport()) {
    let res;
    const fs = Promise.promisifyAll(require('fs'))
    return mkdirp(`/Users/gaudi/work/preach/out/data/`)
    .then(_ => {
      return gql({
        url: 'http://localhost:3000/graphql'
      })
      .query(query)
    })
    .then(data => {
      res = data
      return fs.writeFileAsync(`/Users/gaudi/work/preach/out/data/${md5(query)}.json`, JSON.stringify(data))
    })
    .then((data) => {
      console.log('file written', data)
      return res
    })
  }

  if (!isServer() && isExport()) {
    return fetch(`/data/${md5(query)}.json`)
      .then(response => response.json())
  }

  return gql({
    url: 'http://localhost:3000/graphql'
  }).query(query)
}
