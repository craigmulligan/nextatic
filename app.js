'use strict';
const schema = require('./schema');
const nextatic = require(`./lib`);

(() => {
  const conf = {
    schema,
    dir: '.'
  }
  // launch server
  nextatic(conf);
})()
