// TODO should conf be accessible from the browser?
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
  outdir: 'out',
  exportPathMap: require('./exportPathMap'),
  middleware: require('./middleware')
}

module.exports = {
  set: data => {
    store = Object.assign({}, store, data)
    return store
  },
  store: () => {
    return store
  },
  get: key => {
    return store[key]
  }
}
