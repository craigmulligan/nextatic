const gql = require('graphql-client')
const { isServer, isExport } = require('./utils')
const md5 = require('md5')
const Promise = require('bluebird')
const mkdirp = require('mkdirp-then')

module.exports = query => {
  // exported server
  // 1. run page query
  // 2. write data as json with query hash filename
  // 3. return data

  const hash = md5(query)

  if (isServer() && isExport()) {
    const conf = require('./conf').store()
    const dataDir = `${conf.dir}/${conf.outdir}/data/`
    const writeFile = Promise.promisify(require('fs').writeFile)
    return mkdirp(dataDir)
      .then(_ => {
        return gql({
          url: 'http://localhost:3000/graphql'
        }).query(query)
      })
      .then(data => {
        return writeFile(`${dataDir}/${hash}.json`, JSON.stringify(data)).then(
          _ => data
        )
      })
  }

  // exported client
  // fetch json by query hash
  if (!isServer() && isExport()) {
    return fetch(`/data/${hash}.json`).then(res => res.json())
  }

  // dev mode client/server
  // standard graphql query
  return gql({
    url: 'http://localhost:3000/graphql'
  }).query(query)
}
