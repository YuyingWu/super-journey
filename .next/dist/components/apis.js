'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScore = exports.getRecords = exports.getUid = exports.getUser = undefined;

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _leancloud = require('./leancloud');

var _leancloud2 = _interopRequireDefault(_leancloud);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

// 获取当前用户
var getUser = exports.getUser = function getUser() {
  var currentUser = _leancloud2.default.User.current();

  if (currentUser) {
    return (0, _utils.LeanCloudResParser)(currentUser);
  }

  return -1;
};

// 获取用户id
var getUid = exports.getUid = function getUid() {
  var currentUser = _leancloud2.default.User.current();

  if (currentUser) {
    var _LeanCloudResParser = (0, _utils.LeanCloudResParser)(currentUser),
        id = _LeanCloudResParser.id;

    return id;
  }

  return -1;
};

// 获取打卡记录
var getRecords = exports.getRecords = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var uid, query, User, list;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getUid();

          case 2:
            uid = _context.sent;
            query = new _leancloud2.default.Query('Game');
            User = _leancloud2.default.Object.createWithoutData('_User', uid);

            query.equalTo('user', User);
            query.include(['task']);
            query.descending('createdAt');

            list = [];
            return _context.abrupt('return', query.find().then(function (results) {
              results.map(function (r) {
                list.push((0, _assign2.default)((0, _utils.LeanCloudResParser)(r.attributes.task), {
                  createdAt: r.createdAt
                }));
              });

              return list;
            }, function (error) {
              return [];
            }));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getRecords() {
    return _ref.apply(this, arguments);
  };
}();

// 获取积分
var getScore = exports.getScore = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var records, score;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getRecords();

          case 2:
            records = _context2.sent;
            score = {
              physical: 0,
              wisdom: 0,
              mileage: 0
            };

            records.map(function (r) {
              var physical = r.physical,
                  wisdom = r.wisdom,
                  mileage = r.mileage;

              score = {
                physical: score.physical + physical,
                wisdom: score.wisdom + wisdom,
                mileage: score.mileage + mileage
              };
            });

            return _context2.abrupt('return', score);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function getScore() {
    return _ref2.apply(this, arguments);
  };
}();