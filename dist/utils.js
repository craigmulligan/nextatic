'use strict';

var fs = require('fs');
var join = require('path').join;

var buildId = function buildId(nextDir) {
  try {
    return fs.readFileSync(join(nextDir, 'BUILD_ID'), 'utf8');
  } catch (e) {
    return false;
  }
};

var isServer = function isServer() {
  return typeof window === 'undefined';
};
var isExport = function isExport() {
  return typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport || !isServer() && typeof window.__NEXT_DATA__ !== 'undefined' && window.__NEXT_DATA__.nextExport;
};

module.exports = {
  isServer: isServer,
  isExport: isExport,
  buildId: buildId
};