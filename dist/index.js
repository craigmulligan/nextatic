'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PORT = process.env.PORT || 3000;
var graphqlHTTP = require('express-graphql');
var server = require('express')();
var next = require('next');
var exportPathMapDefault = require('./exportPathMap');
var conf = require('./config');
var nextBuild = require('next/dist/server/build');
var nextExport = require('next/dist/server/export');

var _require = require('./utils'),
    buildId = _require.buildId;

var debug = require('debug')('server');

var _require2 = require('graphql'),
    buildSchema = _require2.buildSchema,
    GraphQLSchema = _require2.GraphQLSchema,
    GraphQLObjectType = _require2.GraphQLObjectType;

var bootstrap = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var nextApp, pages;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nextApp = next({
              dev: conf.get('dev'),
              dir: conf.get('dir'),
              conf: conf.store()
            });


            server.use('/graphql', graphqlHTTP({
              schema: conf.get('schema'),
              graphiql: true
            }));

            // Note we have to launch the server first so getPages() has acess to graphql
            server.listen(PORT, function (err) {
              if (err) throw err;
            });

            _context.next = 5;
            return conf.get('exportPathMap')();

          case 5:
            pages = _context.sent;


            server.use(conf.get('middleware')(pages, nextApp));

            server.use(function (err, req, res, next) {
              res.status(500).send({ error: err });
            });

            return _context.abrupt('return', {
              server: server,
              nextApp: nextApp,
              pages: pages
            });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function bootstrap() {
    return _ref.apply(this, arguments);
  };
}();

var nextatic = function nextatic(config) {
  conf.set(config);
};

nextatic.dev = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var _ref3, nextApp, server;

  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return bootstrap();

        case 2:
          _ref3 = _context2.sent;
          nextApp = _ref3.nextApp;
          server = _ref3.server;

          if (!(conf.get('dev') === true)) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt('return', nextApp.prepare());

        case 7:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
}));

nextatic.export = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
  var _ref5, server, nextApp;

  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // always set export to prod
          conf.set({
            dev: false
          });
          // compile
          _context3.next = 3;
          return nextBuild.default(conf.get('dir'), conf.store());

        case 3:
          _context3.next = 5;
          return bootstrap();

        case 5:
          _ref5 = _context3.sent;
          server = _ref5.server;
          nextApp = _ref5.nextApp;
          return _context3.abrupt('return', nextExport.default(conf.get('dir'), {
            outdir: conf.get('outdir')
          }, conf.store()));

        case 9:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
}));

module.exports = nextatic;