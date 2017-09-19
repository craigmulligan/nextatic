'use strict';

var gql = require('graphql-client');

var _require = require('./utils'),
    isServer = _require.isServer,
    isExport = _require.isExport;

var md5 = require('md5');
var Promise = require('bluebird');
var mkdirp = require('mkdirp-then');

module.exports = function (query) {
  // exported server
  // 1. run page query
  // 2. write data as json with query hash filename
  // 3. return data

  var hash = md5(query);

  if (isServer() && isExport()) {
    var conf = require('./config').store();
    var dataDir = `${conf.dir}/${conf.outdir}/data/`;
    var writeFile = Promise.promisify(require('fs').writeFile);
    return mkdirp(dataDir).then(function (_) {
      return gql({
        url: 'http://localhost:3000/graphql'
      }).query(query);
    }).then(function (data) {
      return writeFile(`${dataDir}/${hash}.json`, JSON.stringify(data)).then(function (_) {
        return data;
      });
    });
  }

  // exported client
  // fetch json by query hash
  if (!isServer() && isExport()) {
    return fetch(`/data/${hash}.json`).then(function (res) {
      return res.json();
    });
  }

  // dev mode client/server
  // standard graphql query
  return gql({
    url: 'http://localhost:3000/graphql'
  }).query(query);
};