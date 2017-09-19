'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var gql = require('./client');
var exportPathMap = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _ref2, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return gql('{\n    posts {\n      slug\n    }\n  }');

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;
            return _context.abrupt('return', data.posts.reduce(function (acc, post) {
              acc[post.slug] = {
                page: '/post'
              };
              return acc;
            }, {
              '/': { page: '/' }
            }));

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function exportPathMap() {
    return _ref.apply(this, arguments);
  };
}();

module.exports = exportPathMap;