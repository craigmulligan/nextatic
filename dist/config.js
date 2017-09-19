'use strict';

// TODO should conf be accessible from the browser?
var debug = require('debug')('conf');
var _store = {
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
};

module.exports = {
  set: function set(data) {
    debug('.set', Object.assign({}, _store, data));
    _store = Object.assign({}, _store, data);
    return _store;
  },
  store: function store() {
    debug('.store', _store);
    return _store;
  },
  get: function get(key) {
    debug('.get', key, _store[key]);
    return _store[key];
  }
};