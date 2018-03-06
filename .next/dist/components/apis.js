'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMyVehicle = exports.getVehicleList = exports.setVehicle = exports.getUserLevel = exports.getScore = exports.getRecords = exports.getUid = exports.getUser = undefined;

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

// 获取用户等级信息
var getUserLevel = exports.getUserLevel = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var score, physical, wisdom, levelList, userLevel, query;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getScore();

          case 2:
            score = _context3.sent;
            physical = score.physical, wisdom = score.wisdom;
            levelList = [];
            userLevel = {
              level: 1,
              physical: 100,
              wisdom: 100
            };
            query = new _leancloud2.default.Query('Level');
            return _context3.abrupt('return', query.find().then(function (res) {
              res.map(function (r) {
                levelList.push((0, _utils.LeanCloudResParser)(r));
              });

              levelList.map(function (item) {
                var level = item.level,
                    levelPhysical = item.physical,
                    levelWisdom = item.wisdom;

                switch (level) {
                  case 2:
                    if (physical > levelPhysical && wisdom > levelWisdom) {
                      userLevel = {
                        level: level,
                        physical: levelPhysical,
                        wisdom: levelWisdom
                      };
                    }
                    break;
                }
              });

              return userLevel;
            }));

          case 8:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function getUserLevel() {
    return _ref3.apply(this, arguments);
  };
}();

// 设置当前交通工具
var setVehicle = exports.setVehicle = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(vehicle) {
    var uid, User;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getUid();

          case 2:
            uid = _context4.sent;
            User = _leancloud2.default.Object.createWithoutData('_User', uid);
            // const VehicleList = await getVehicleList(vehicle);
            // const v = AV.Object.createWithoutData('Vehicle', VehicleList[0].id);

            User.set('vehicle', vehicle);

            User.save().then(function () {
              console.log('set vehicle successfully!');
            });

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function setVehicle(_x) {
    return _ref4.apply(this, arguments);
  };
}();

// 获取所有交通工具
var getVehicleList = exports.getVehicleList = function getVehicleList(type) {
  var query = new _leancloud2.default.Query('Vehicle');

  if (type) {
    query.equalTo('key', type);
  }

  return query.find().then(function (results) {
    var list = [];

    results.map(function (r) {
      list.push((0, _utils.LeanCloudResParser)(r));
    });

    return list;
  });
};

// 获取我的交通工具
var getMyVehicle = exports.getMyVehicle = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
    var uid, query;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return getUid();

          case 2:
            uid = _context5.sent;
            query = new _leancloud2.default.Query('_User');
            return _context5.abrupt('return', query.get(uid).then(function (user) {
              return {
                vehicle: user.get('vehicle'),
                garage: user.get('garage')
              };
            }));

          case 5:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this);
  }));

  return function getMyVehicle() {
    return _ref5.apply(this, arguments);
  };
}();