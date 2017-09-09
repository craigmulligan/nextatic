'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/gaudi/work/preach/pages/index.js?entry',
    _this = undefined;

var Page = function Page(_ref) {
  var data = _ref.data;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, 'Hello', data.markdownRemark.html);
};

Page.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req;
    var gql, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            gql = require('graphql-client')({
              url: 'http://localhost:3000/graphql'
            });
            _context.next = 3;
            return gql.query('\n    {\n      markdownRemark {\n        html\n      }\n    }\n  ');

          case 3:
            data = _context.sent;
            return _context.abrupt('return', data);

          case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJkYXRhIiwibWFya2Rvd25SZW1hcmsiLCJodG1sIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwiZ3FsIiwicmVxdWlyZSIsInVybCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxTQUFQLEFBQU8sV0FBQTtNQUFBLEFBQUcsWUFBSCxBQUFHO3lCQUNkLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxHQUFBLEVBRUcsY0FBQSxBQUFLLGVBSEcsQUFDWCxBQUV1QjtBQUh6Qjs7QUFNQSxLQUFBLEFBQUssOEJBQUw7dUZBQXVCLHdCQUFBO1FBQUEsQUFBUyxZQUFULEFBQVM7YUFBVDtrRUFBQTtnQkFBQTt5Q0FBQTtlQUNmO0FBRGU7bUJBQUEsQUFDVCxBQUEwQixBQUMvQjtBQUQrQixBQUNwQyxhQURVOzRCQURTO21CQUlGLElBQUEsQUFBSSxNQUpGOztlQUlmO0FBSmUsNEJBQUE7NkNBQUEsQUFXZDs7ZUFYYztlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXZCOzt1QkFBQTs2QkFBQTtBQUFBO0FBY0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dhdWRpL3dvcmsvcHJlYWNoIn0=