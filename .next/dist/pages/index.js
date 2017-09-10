'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _objectWithoutProperties2 = require('next/node_modules/babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gaudi/work/preach/pages/index.js?entry',
    _this = undefined;

var Page = function Page(_ref) {
  var allMarkdownRemark = _ref.allMarkdownRemark,
      props = (0, _objectWithoutProperties3.default)(_ref, ['allMarkdownRemark']);

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, allMarkdownRemark.edges.map(function (edge) {
    return _react2.default.createElement(_post2.default, { key: edge.node.frontmatter.slug, html: edge.node.html, title: edge.node.frontmatter.title, slug: edge.node.frontmatter.slug, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    });
  }));
};

Page.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req;

    var isServer, gql, _ref4, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isServer = typeof window === 'undefined';
            gql = require('../lib/client');
            _context.next = 4;
            return gql.query('{\n    allMarkdownRemark {\n      edges {\n        node {\n          frontmatter {\n            title\n            slug\n          }\n          html\n        }\n      }\n    }\n  }');

          case 4:
            _ref4 = _context.sent;
            data = _ref4.data;
            return _context.abrupt('return', isServer ? data : null);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJQYWdlIiwiYWxsTWFya2Rvd25SZW1hcmsiLCJwcm9wcyIsImVkZ2VzIiwibWFwIiwiZWRnZSIsIm5vZGUiLCJmcm9udG1hdHRlciIsInNsdWciLCJodG1sIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJpc1NlcnZlciIsIndpbmRvdyIsImdxbCIsInJlcXVpcmUiLCJxdWVyeSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLE9BQU8sU0FBUCxBQUFPLFdBQXFDO01BQWxDLEFBQWtDLHlCQUFsQyxBQUFrQztNQUFaLEFBQVksc0RBQ2hEOzt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUVJO0FBRko7QUFBQSxHQUFBLG9CQUVJLEFBQWtCLE1BQWxCLEFBQXdCLElBQUksZ0JBQVEsQUFDbEM7MkJBQVEsQUFBQyxnQ0FBSyxLQUFLLEtBQUEsQUFBSyxLQUFMLEFBQVUsWUFBckIsQUFBaUMsTUFBTSxNQUFNLEtBQUEsQUFBSyxLQUFsRCxBQUF1RCxNQUFNLE9BQU8sS0FBQSxBQUFLLEtBQUwsQUFBVSxZQUE5RSxBQUEwRixPQUFPLE1BQU0sS0FBQSxBQUFLLEtBQUwsQUFBVSxZQUFqSCxBQUE2SDtrQkFBN0g7b0JBQVIsQUFBUSxBQUNUO0FBRFM7S0FBQTtBQUpoQixBQUNFLEFBRUksQUFNUDtBQVZEOztBQWFBLEtBQUEsQUFBSyw4QkFBTDt1RkFBdUIsd0JBQUE7UUFBQSxBQUFTLFlBQVQsQUFBUzs7OEJBQVQ7O2tFQUFBO2dCQUFBO3lDQUFBO2VBQ2Y7QUFEZSx1QkFDSixPQUFBLEFBQU8sV0FESCxBQUNjLEFBQzdCO0FBRmUsa0JBQUEsQUFFVDs0QkFGUzttQkFJRSxJQUFBLEFBQUksTUFKTjs7ZUFBQTs2QkFJYjtBQUphLHlCQUFBLEFBSWI7NkNBY0QsV0FBQSxBQUFXLE9BbEJHLEFBa0JJOztlQWxCSjtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXZCOzt1QkFBQTs2QkFBQTtBQUFBO0FBcUJBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9nYXVkaS93b3JrL3ByZWFjaCJ9