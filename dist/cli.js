#!/usr/bin/env node
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var capitano = require('capitano');
var nextatic = require('./');
var pkg = require('../package.json');

if (pkg.peerDependencies) {
  Object.keys(pkg.peerDependencies).forEach(function (dependency) {
    try {
      // When 'npm link' is used it checks the clone location. Not the project.
      require.resolve(dependency);
    } catch (err) {
      console.warn('The module \'' + dependency + '\' was not found. Next.js requires that you include it in \'dependencies\' of your \'package.json\'. To add it, run \'npm install --save ' + dependency + '\'');
    }
  });
}

var getConfig = function getConfig() {
  return require(process.cwd() + '/nextatic.config.js');
};

try {
  nextatic(getConfig());
} catch (error) {
  throw error;
}

capitano.command({
  signature: '*',
  description: 'Run nextatic dev server',
  action: function action() {
    try {
      nextatic.dev();
    } catch (error) {
      throw error;
    }
  }
});

capitano.command({
  signature: 'export',
  description: 'Run nextatic dev server',
  action: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              console.log('exporting!');
              _context.next = 4;
              return nextatic.export();

            case 4:
              console.log('success!');
              process.exit(0);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);
              throw _context.t0;

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    function action() {
      return _ref.apply(this, arguments);
    }

    return action;
  }()
});

capitano.run(process.argv, function (error) {
  if (error != null) {
    throw error;
  }
});