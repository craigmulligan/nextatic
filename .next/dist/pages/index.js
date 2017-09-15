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

var _post = require('../components/post');

var _post2 = _interopRequireDefault(_post);

var _Layout = require('./_Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var Page = function Page(_ref) {
  var allMarkdownRemark = _ref.allMarkdownRemark,
      props = (0, _objectWithoutProperties3.default)(_ref, ['allMarkdownRemark']);

  return _react2.default.createElement(_Layout2.default, null, allMarkdownRemark.edges.map(function (edge) {
    return _react2.default.createElement(_post2.default, { key: edge.node.frontmatter.slug, html: edge.node.html, title: edge.node.frontmatter.title, slug: edge.node.frontmatter.slug });
  }));
};

Page.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var gql, _ref3, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            gql = require('../lib/client');
            _context.next = 3;
            return gql('{\n    allMarkdownRemark {\n      edges {\n        node {\n          frontmatter {\n            title\n            slug\n          }\n          html\n        }\n      }\n    }\n  }');

          case 3:
            _ref3 = _context.sent;
            data = _ref3.data;
            return _context.abrupt('return', data);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = Page;