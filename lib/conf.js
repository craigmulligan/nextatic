// TODO should conf be accessible from the browser?
const debug = require('debug')('conf')
let store = {
  dev: process.env.NODE_ENV !== 'production',
  dir: process.cwd(),
  webpack: null,
  webpackDevMiddleware: null,
  poweredByHeader: true,
  distDir: '.next',
  assetPrefix: '',
  configOrigin: 'default',
  useFileSystemPublicRoutes: true,
  outdir: 'out'
}

module.exports = {
  set: data => {
    debug('.set', Object.assign({}, store, data))
    store = Object.assign({}, store, data)
    return store
  },
  store: () => {
    debug('.store', store)
    return store
  },
  get: key => {
    debug('.get', key, store[key])
    return store[key]
  }
}
