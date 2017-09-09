webpackHotUpdate(5,{

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(112);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(113);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(27);

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
            gql = __webpack_require__(555)({
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/gaudi/work/preach/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/gaudi/work/preach/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42NmEzNjBiMmFlMmM4MzgwMzVlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjZmZmEyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQYWdlID0gKHsgZGF0YSB9KSA9PlxuICA8ZGl2PlxuICAgIEhlbGxvXG4gICAge2RhdGEubWFya2Rvd25SZW1hcmsuaHRtbH1cbiAgPC9kaXY+XG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgY29uc3QgZ3FsID0gcmVxdWlyZSgnZ3JhcGhxbC1jbGllbnQnKSh7XG4gICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWwnXG4gIH0pXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBncWwucXVlcnkoYFxuICAgIHtcbiAgICAgIG1hcmtkb3duUmVtYXJrIHtcbiAgICAgICAgaHRtbFxuICAgICAgfVxuICAgIH1cbiAgYClcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBV0E7QUFDQTtBQVpBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9