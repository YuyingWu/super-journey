'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMyDestination = exports.getDestinationList = exports.getGroupTaskList = exports.getTaskList = exports.getMyVehicle = exports.getVehicleList = exports.setVehicle = exports.getUserLevel = exports.getScore = exports.getRecords = exports.getUid = exports.getUser = undefined;

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

            if (!(uid === -1)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return');

          case 5:
            query = new _leancloud2.default.Query('Game');
            User = _leancloud2.default.Object.createWithoutData('_User', uid);

            query.equalTo('user', User);
            query.include(['task']);
            query.descending('createdAt');

            list = [];
            return _context.abrupt('return', query.find().then(function (results) {
              if (results && results.length) {
                results.map(function (r) {
                  list.push((0, _assign2.default)((0, _utils.LeanCloudResParser)(r.attributes.task), {
                    createdAt: r.createdAt
                  }));
                });
              }

              return list;
            }).catch(function (error) {
              assert.isNotOk(error, 'Promise error');
            }));

          case 12:
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

            if (records && records.length) {
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
            }

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
              if (res && res.length) {
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
              }

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

            if (!(uid === -1)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt('return');

          case 5:
            User = _leancloud2.default.Object.createWithoutData('_User', uid);
            // const VehicleList = await getVehicleList(vehicle);
            // const v = AV.Object.createWithoutData('Vehicle', VehicleList[0].id);

            User.set('vehicle', vehicle);

            User.save().then(function () {
              console.log('set vehicle successfully!');
            });

          case 8:
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

    if (results && results.length) {
      results.map(function (r) {
        list.push((0, _utils.LeanCloudResParser)(r));
      });
    }

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

            if (!(uid === -1)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt('return');

          case 5:
            query = new _leancloud2.default.Query('_User');
            return _context5.abrupt('return', query.get(uid).then(function (user) {
              return {
                vehicle: user.get('vehicle'),
                garage: user.get('garage')
              };
            }));

          case 7:
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

// task list
var getTaskList = exports.getTaskList = function getTaskList() {
  var query = new _leancloud2.default.Query('Task');

  return query.find().then(function (results) {
    var data = [];

    if (results && results.length) {
      results.map(function (r) {
        data.push((0, _utils.LeanCloudResParser)(r));
      });
    }

    return data;
  }, function (error) {});
};

var getGroupTaskList = exports.getGroupTaskList = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var list, group;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return getTaskList();

          case 2:
            list = _context6.sent;
            group = {};

            list.map(function (item) {
              if (!group[item.group]) {
                group[item.group] = [];
              }

              group[item.group].push(item);
            });

            return _context6.abrupt('return', group);

          case 6:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this);
  }));

  return function getGroupTaskList() {
    return _ref6.apply(this, arguments);
  };
}();

var getDestinationList = exports.getDestinationList = function getDestinationList() {
  var query = new _leancloud2.default.Query('Destination');

  return query.find().then(function (results) {
    var data = [];

    if (results && results.length) {
      results.map(function (r) {
        data.push((0, _utils.LeanCloudResParser)(r));
      });
    }

    return data;
  }).catch(function (error) {
    assert.isNotOk(error, 'Promise error');
  });
};

var getMyDestination = exports.getMyDestination = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
    var uid, query;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return getUid();

          case 2:
            uid = _context7.sent;

            if (!(uid === -1)) {
              _context7.next = 5;
              break;
            }

            return _context7.abrupt('return');

          case 5:
            query = new _leancloud2.default.Query('_User');

            query.include(['travel']);

            return _context7.abrupt('return', query.get(uid).then(function (user) {
              if (user.get('travel')) {
                return {
                  travel: (0, _utils.LeanCloudResParser)(user.get('travel'))
                };
              }

              return {};
            }).catch(function (error) {
              assert.isNotOk(error, 'Promise error');
            }));

          case 8:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, _this);
  }));

  return function getMyDestination() {
    return _ref7.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBpcy5qcyJdLCJuYW1lcyI6WyJBViIsIkxlYW5DbG91ZFJlc1BhcnNlciIsImdldFVzZXIiLCJjdXJyZW50VXNlciIsIlVzZXIiLCJjdXJyZW50IiwiZ2V0VWlkIiwiaWQiLCJnZXRSZWNvcmRzIiwidWlkIiwicXVlcnkiLCJRdWVyeSIsIk9iamVjdCIsImNyZWF0ZVdpdGhvdXREYXRhIiwiZXF1YWxUbyIsImluY2x1ZGUiLCJkZXNjZW5kaW5nIiwibGlzdCIsImZpbmQiLCJ0aGVuIiwicmVzdWx0cyIsImxlbmd0aCIsIm1hcCIsInB1c2giLCJyIiwiYXR0cmlidXRlcyIsInRhc2siLCJjcmVhdGVkQXQiLCJjYXRjaCIsImVycm9yIiwiYXNzZXJ0IiwiaXNOb3RPayIsImdldFNjb3JlIiwicmVjb3JkcyIsInNjb3JlIiwicGh5c2ljYWwiLCJ3aXNkb20iLCJtaWxlYWdlIiwiZ2V0VXNlckxldmVsIiwibGV2ZWxMaXN0IiwidXNlckxldmVsIiwibGV2ZWwiLCJyZXMiLCJpdGVtIiwibGV2ZWxQaHlzaWNhbCIsImxldmVsV2lzZG9tIiwic2V0VmVoaWNsZSIsInZlaGljbGUiLCJzZXQiLCJzYXZlIiwiY29uc29sZSIsImxvZyIsImdldFZlaGljbGVMaXN0IiwidHlwZSIsImdldE15VmVoaWNsZSIsImdldCIsInVzZXIiLCJnYXJhZ2UiLCJnZXRUYXNrTGlzdCIsImRhdGEiLCJnZXRHcm91cFRhc2tMaXN0IiwiZ3JvdXAiLCJnZXREZXN0aW5hdGlvbkxpc3QiLCJnZXRNeURlc3RpbmF0aW9uIiwidHJhdmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUEwQjs7Ozs7O0FBRW5DLEFBQ0E7QUFBTyxJQUFNLDRCQUFVLFNBQVYsQUFBVSxVQUFNLEFBQzNCO01BQU0sY0FBYyxvQkFBQSxBQUFHLEtBQXZCLEFBQW9CLEFBQVEsQUFFNUI7O01BQUEsQUFBSSxhQUFhLEFBQ2Y7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